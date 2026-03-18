import { i as withBasePath, n as toBrowserNavigationHref, r as toSameOriginAppPath, t as resolveRelativeHref } from "./url-utils-BKwNM2eZ.js";
import { a as usePathname, i as toRscUrl, n as getPrefetchedUrls, o as useRouter, r as storePrefetchResponse, s as useSearchParams, t as getLayoutSegmentContext } from "../index.js";
import { a as getDomainLocaleUrl, i as addLocalePrefix, n as appendSearchParamsToUrl, r as urlQueryToSearchParams } from "./query-DMXdLT8K.js";
import * as React$1 from "react";
import React, { createContext, createElement, forwardRef, useCallback, useContext, useEffect, useMemo, useReducer, useRef, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region node_modules/vinext/dist/shims/url-safety.js
/**
* Shared URL safety utilities for Link, Form, and navigation shims.
*
* Centralizes dangerous URI scheme detection so all components and
* navigation functions use the same validation logic.
*/
/**
* Detect dangerous URI schemes that should never be navigated to.
* Strips leading whitespace and zero-width characters before testing,
* since browsers ignore these when interpreting the scheme.
*/
var DANGEROUS_SCHEME_RE = /^[\s\u200B\uFEFF]*(javascript|data|vbscript)\s*:/i;
function isDangerousScheme(url) {
	return DANGEROUS_SCHEME_RE.test(url);
}
//#endregion
//#region node_modules/vinext/dist/shims/i18n-context.js
var _getI18nContext = () => {
	if (globalThis.__VINEXT_DEFAULT_LOCALE__ == null && globalThis.__VINEXT_LOCALE__ == null) return null;
	return {
		locale: globalThis.__VINEXT_LOCALE__,
		locales: globalThis.__VINEXT_LOCALES__,
		defaultLocale: globalThis.__VINEXT_DEFAULT_LOCALE__,
		domainLocales: globalThis.__VINEXT_DOMAIN_LOCALES__,
		hostname: globalThis.__VINEXT_HOSTNAME__
	};
};
function getI18nContext() {
	return _getI18nContext();
}
//#endregion
//#region node_modules/vinext/dist/shims/link.js
/**
* next/link shim
*
* Renders an <a> tag with client-side navigation support.
* On click, prevents full page reload and triggers client-side
* page swap via the router's navigation system.
*/
var LinkStatusContext = createContext({ pending: false });
/** basePath from next.config.js, injected by the plugin at build time */
var __basePath = "";
function resolveHref(href) {
	if (typeof href === "string") return href;
	let url = href.pathname ?? "/";
	if (href.query) {
		const params = urlQueryToSearchParams(href.query);
		url = appendSearchParamsToUrl(url, params);
	}
	return url;
}
/**
* Check if a href is only a hash change (same pathname, different/added hash).
* Handles relative hashes like "#foo" and "?query#foo".
*/
function isHashOnlyChange(href) {
	if (href.startsWith("#")) return true;
	try {
		const current = new URL(window.location.href);
		const next = new URL(href, window.location.href);
		return current.pathname === next.pathname && current.search === next.search && next.hash !== "";
	} catch {
		return false;
	}
}
/**
* Scroll to a hash target element, or to the top if no hash.
*/
function scrollToHash(hash) {
	if (!hash || hash === "#") {
		window.scrollTo(0, 0);
		return;
	}
	const id = hash.slice(1);
	const element = document.getElementById(id);
	if (element) element.scrollIntoView({ behavior: "auto" });
}
/**
* Prefetch a URL for faster navigation.
*
* For App Router (RSC): fetches the .rsc payload in the background and
* stores it in an in-memory cache for instant use during navigation.
* For Pages Router: injects a <link rel="prefetch"> for the page module.
*
* Uses `requestIdleCallback` (or `setTimeout` fallback) to avoid blocking
* the main thread during initial page load.
*/
function prefetchUrl(href) {
	if (typeof window === "undefined") return;
	let prefetchHref = href;
	if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) {
		const localPath = toSameOriginAppPath(href, __basePath);
		if (localPath == null) return;
		prefetchHref = localPath;
	}
	const fullHref = toBrowserNavigationHref(prefetchHref, window.location.href, __basePath);
	const rscUrl = toRscUrl(fullHref);
	const prefetched = getPrefetchedUrls();
	if (prefetched.has(rscUrl)) return;
	prefetched.add(rscUrl);
	(window.requestIdleCallback ?? ((fn) => setTimeout(fn, 100)))(() => {
		if (typeof window.__VINEXT_RSC_NAVIGATE__ === "function") fetch(rscUrl, {
			headers: { Accept: "text/x-component" },
			credentials: "include",
			priority: "low",
			purpose: "prefetch"
		}).then((response) => {
			if (response.ok) storePrefetchResponse(rscUrl, response);
			else prefetched.delete(rscUrl);
		}).catch(() => {
			prefetched.delete(rscUrl);
		});
		else if (window.__NEXT_DATA__?.__vinext?.pageModuleUrl) {
			const link = document.createElement("link");
			link.rel = "prefetch";
			link.href = fullHref;
			link.as = "document";
			document.head.appendChild(link);
		}
	});
}
/**
* Shared IntersectionObserver for viewport-based prefetching.
* All Link elements use the same observer to minimize resource usage.
*/
var sharedObserver = null;
var observerCallbacks = /* @__PURE__ */ new WeakMap();
function getSharedObserver() {
	if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") return null;
	if (sharedObserver) return sharedObserver;
	sharedObserver = new IntersectionObserver((entries) => {
		for (const entry of entries) if (entry.isIntersecting) {
			const callback = observerCallbacks.get(entry.target);
			if (callback) {
				callback();
				sharedObserver?.unobserve(entry.target);
				observerCallbacks.delete(entry.target);
			}
		}
	}, { rootMargin: "250px" });
	return sharedObserver;
}
function getDefaultLocale() {
	if (typeof window !== "undefined") return window.__VINEXT_DEFAULT_LOCALE__;
	return getI18nContext()?.defaultLocale;
}
function getDomainLocales() {
	if (typeof window !== "undefined") return window.__NEXT_DATA__?.domainLocales;
	return getI18nContext()?.domainLocales;
}
function getCurrentHostname() {
	if (typeof window !== "undefined") return window.location.hostname;
	return getI18nContext()?.hostname;
}
function getDomainLocaleHref(href, locale) {
	return getDomainLocaleUrl(href, locale, {
		basePath: __basePath,
		currentHostname: getCurrentHostname(),
		domainItems: getDomainLocales()
	});
}
/**
* Apply locale prefix to a URL path based on the locale prop.
* - locale="fr" → prepend /fr (unless it already has a locale prefix)
* - locale={false} → use the href as-is (no locale prefix, link to default)
* - locale=undefined → use current locale (href as-is in most cases)
*/
function applyLocaleToHref(href, locale) {
	if (locale === false) return href;
	if (locale === void 0) return href;
	if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("//")) return href;
	const domainLocaleHref = getDomainLocaleHref(href, locale);
	if (domainLocaleHref) return domainLocaleHref;
	return addLocalePrefix(href, locale, getDefaultLocale() ?? "");
}
var Link = forwardRef(function Link({ href, as, replace = false, prefetch: prefetchProp, scroll = true, children, onClick, onNavigate, ...rest }, forwardedRef) {
	const { locale, ...restWithoutLocale } = rest;
	const resolvedHref = as ?? resolveHref(href);
	const isDangerous = typeof resolvedHref === "string" && isDangerousScheme(resolvedHref);
	const localizedHref = applyLocaleToHref(isDangerous ? "/" : resolvedHref, locale);
	const fullHref = withBasePath(localizedHref, __basePath);
	const [pending, setPending] = useState(false);
	const mountedRef = useRef(true);
	useEffect(() => {
		mountedRef.current = true;
		return () => {
			mountedRef.current = false;
		};
	}, []);
	const internalRef = useRef(null);
	const shouldPrefetch = prefetchProp !== false && !isDangerous;
	const setRefs = useCallback((node) => {
		internalRef.current = node;
		if (typeof forwardedRef === "function") forwardedRef(node);
		else if (forwardedRef) forwardedRef.current = node;
	}, [forwardedRef]);
	useEffect(() => {
		if (!shouldPrefetch || typeof window === "undefined") return;
		const node = internalRef.current;
		if (!node) return;
		let hrefToPrefetch = localizedHref;
		if (localizedHref.startsWith("http://") || localizedHref.startsWith("https://") || localizedHref.startsWith("//")) {
			const localPath = toSameOriginAppPath(localizedHref, __basePath);
			if (localPath == null) return;
			hrefToPrefetch = localPath;
		}
		const observer = getSharedObserver();
		if (!observer) return;
		observerCallbacks.set(node, () => prefetchUrl(hrefToPrefetch));
		observer.observe(node);
		return () => {
			observer.unobserve(node);
			observerCallbacks.delete(node);
		};
	}, [shouldPrefetch, localizedHref]);
	const handleClick = async (e) => {
		if (onClick) onClick(e);
		if (e.defaultPrevented) return;
		if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
		if (e.currentTarget.target && e.currentTarget.target !== "_self") return;
		let navigateHref = localizedHref;
		if (resolvedHref.startsWith("http://") || resolvedHref.startsWith("https://") || resolvedHref.startsWith("//")) {
			const localPath = toSameOriginAppPath(resolvedHref, __basePath);
			if (localPath == null) return;
			navigateHref = localPath;
		}
		e.preventDefault();
		const absoluteHref = resolveRelativeHref(navigateHref, window.location.href, __basePath);
		const absoluteFullHref = toBrowserNavigationHref(navigateHref, window.location.href, __basePath);
		if (onNavigate) try {
			const navUrl = new URL(absoluteFullHref, window.location.origin);
			let prevented = false;
			const navEvent = {
				url: navUrl,
				preventDefault() {
					prevented = true;
				},
				get defaultPrevented() {
					return prevented;
				}
			};
			onNavigate(navEvent);
			if (navEvent.defaultPrevented) return;
		} catch {}
		if (!replace) {
			const state = window.history.state ?? {};
			window.history.replaceState({
				...state,
				__vinext_scrollX: window.scrollX,
				__vinext_scrollY: window.scrollY
			}, "");
		}
		if (typeof window !== "undefined" && isHashOnlyChange(absoluteFullHref)) {
			const hash = absoluteFullHref.includes("#") ? absoluteFullHref.slice(absoluteFullHref.indexOf("#")) : "";
			if (replace) window.history.replaceState(null, "", absoluteFullHref);
			else window.history.pushState(null, "", absoluteFullHref);
			if (scroll) scrollToHash(hash);
			return;
		}
		const hashIdx = absoluteFullHref.indexOf("#");
		const hash = hashIdx !== -1 ? absoluteFullHref.slice(hashIdx) : "";
		if (typeof window.__VINEXT_RSC_NAVIGATE__ === "function") {
			if (replace) window.history.replaceState(null, "", absoluteFullHref);
			else window.history.pushState(null, "", absoluteFullHref);
			setPending(true);
			try {
				await window.__VINEXT_RSC_NAVIGATE__(absoluteFullHref);
			} finally {
				if (mountedRef.current) setPending(false);
			}
		} else try {
			const Router = (await import("./router-Bkv-bOAY.js")).default;
			if (replace) await Router.replace(absoluteHref, void 0, { scroll });
			else await Router.push(absoluteHref, void 0, { scroll });
		} catch {
			if (replace) window.history.replaceState({}, "", absoluteFullHref);
			else window.history.pushState({}, "", absoluteFullHref);
			window.dispatchEvent(new PopStateEvent("popstate"));
		}
		if (scroll) if (hash) scrollToHash(hash);
		else window.scrollTo(0, 0);
	};
	const { passHref: _p, ...anchorProps } = restWithoutLocale;
	const linkStatusValue = React.useMemo(() => ({ pending }), [pending]);
	if (isDangerous) return /* @__PURE__ */ jsx("a", {
		...anchorProps,
		children
	});
	return /* @__PURE__ */ jsx(LinkStatusContext.Provider, {
		value: linkStatusValue,
		children: /* @__PURE__ */ jsx("a", {
			ref: setRefs,
			href: fullHref,
			onClick: handleClick,
			...anchorProps,
			children
		})
	});
});
//#endregion
//#region node_modules/vinext/dist/shims/image-config.js
/**
* Convert a glob pattern (with `*` and `**`) to a RegExp.
*
* For hostnames, segments are separated by `.`:
*   - `*` matches a single segment (no dots): [^.]+
*   - `**` matches any number of segments: .+
*
* For pathnames, segments are separated by `/`:
*   - `*` matches a single segment (no slashes): [^/]+
*   - `**` matches any number of segments (including empty): .*
*
* Literal characters are escaped for regex safety.
*/
function globToRegex(pattern, separator) {
	let regexStr = "^";
	const doubleStar = separator === "." ? ".+" : ".*";
	const singleStar = separator === "." ? "[^.]+" : "[^/]+";
	const parts = pattern.split("**");
	for (let i = 0; i < parts.length; i++) {
		if (i > 0) regexStr += doubleStar;
		const subParts = parts[i].split("*");
		for (let j = 0; j < subParts.length; j++) {
			if (j > 0) regexStr += singleStar;
			regexStr += subParts[j].replace(/[.+?^${}()|[\]\\]/g, "\\$&");
		}
	}
	regexStr += "$";
	return new RegExp(regexStr);
}
/**
* Check whether a URL matches a single remote pattern.
* Follows the same semantics as Next.js's matchRemotePattern().
*/
function matchRemotePattern(pattern, url) {
	if (pattern.protocol !== void 0) {
		if (pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) return false;
	}
	if (pattern.port !== void 0) {
		if (pattern.port !== url.port) return false;
	}
	if (!globToRegex(pattern.hostname, ".").test(url.hostname)) return false;
	if (pattern.search !== void 0) {
		if (pattern.search !== url.search) return false;
	}
	if (!globToRegex(pattern.pathname ?? "**", "/").test(url.pathname)) return false;
	return true;
}
/**
* Check whether a URL matches any configured remote pattern or legacy domain.
*/
function hasRemoteMatch(domains, remotePatterns, url) {
	return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
}
//#endregion
//#region node_modules/@unpic/react/dist/chunk-VTEFGNYT.mjs
var nestedKeys = /* @__PURE__ */ new Set(["style"]);
var fixedMap = {
	srcset: "srcSet",
	fetchpriority: "use" in React$1 ? "fetchPriority" : "fetchpriority"
};
var camelize = (key) => {
	if (key.startsWith("data-") || key.startsWith("aria-")) return key;
	return fixedMap[key] || key.replace(/-./g, (suffix) => suffix[1].toUpperCase());
};
function camelizeProps(props) {
	return Object.fromEntries(Object.entries(props).map(([k, v]) => [camelize(k), nestedKeys.has(k) && v && typeof v !== "string" ? camelizeProps(v) : v]));
}
//#endregion
//#region node_modules/@unpic/core/dist/chunk-7DG3H6KO.mjs
var getSizes = (width, layout) => {
	if (!width || !layout) return;
	switch (layout) {
		case `constrained`: return `(min-width: ${width}px) ${width}px, 100vw`;
		case `fixed`: return `${width}px`;
		case `fullWidth`: return `100vw`;
		default: return;
	}
};
var pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
var getStyle = ({ width, height, aspectRatio, layout, objectFit = "cover", background }) => {
	const styleEntries = [["object-fit", objectFit]];
	if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:") || background?.startsWith("/")) {
		styleEntries.push(["background-image", `url(${background})`]);
		styleEntries.push(["background-size", "cover"]);
		styleEntries.push(["background-repeat", "no-repeat"]);
	} else styleEntries.push(["background", background]);
	if (layout === "fixed") {
		styleEntries.push(["width", pixelate(width)]);
		styleEntries.push(["height", pixelate(height)]);
	}
	if (layout === "constrained") {
		styleEntries.push(["max-width", pixelate(width)]);
		styleEntries.push(["max-height", pixelate(height)]);
		styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
		styleEntries.push(["width", "100%"]);
	}
	if (layout === "fullWidth") {
		styleEntries.push(["width", "100%"]);
		styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
		styleEntries.push(["height", pixelate(height)]);
	}
	return Object.fromEntries(styleEntries.filter(([, value]) => value));
};
var DEFAULT_RESOLUTIONS = [
	6016,
	5120,
	4480,
	3840,
	3200,
	2560,
	2048,
	1920,
	1668,
	1280,
	1080,
	960,
	828,
	750,
	640
];
var LOW_RES_WIDTH = 24;
var getBreakpoints = ({ width, layout, resolutions = DEFAULT_RESOLUTIONS }) => {
	if (layout === "fullWidth") return resolutions;
	if (!width) return [];
	const doubleWidth = width * 2;
	if (layout === "fixed") return [width, doubleWidth];
	if (layout === "constrained") return [
		width,
		doubleWidth,
		...resolutions.filter((w) => w < doubleWidth)
	];
	return [];
};
var getSrcSetEntries = ({ src, width, layout = "constrained", height, aspectRatio, breakpoints, format }) => {
	breakpoints ||= getBreakpoints({
		width,
		layout
	});
	return breakpoints.sort((a, b) => a - b).map((bp) => {
		let transformedHeight;
		if (height && aspectRatio) transformedHeight = Math.round(bp / aspectRatio);
		return {
			url: src,
			width: bp,
			height: transformedHeight,
			format
		};
	});
};
var getSrcSet = (options) => {
	let { src, transformer, operations } = options;
	if (!transformer) return "";
	return getSrcSetEntries(options).map(({ url: _, ...transform }) => {
		return `${transformer(src, {
			...operations,
			...transform
		}, options.options)?.toString()} ${transform.width}w`;
	}).join(",\n");
};
function transformSharedProps({ width, height, priority, layout = "constrained", aspectRatio, ...props }) {
	width = width && Number(width) || void 0;
	height = height && Number(height) || void 0;
	if (priority) {
		props.loading ||= "eager";
		props.fetchpriority ||= "high";
	} else {
		props.loading ||= "lazy";
		props.decoding ||= "async";
	}
	if (props.alt === "") props.role ||= "presentation";
	if (aspectRatio) {
		if (width) if (height) {} else height = Math.round(width / aspectRatio);
		else if (height) width = Math.round(height * aspectRatio);
		else if (layout !== "fullWidth") {}
	} else if (width && height) aspectRatio = width / height;
	else if (layout !== "fullWidth") {}
	return {
		width,
		height,
		aspectRatio,
		layout,
		...props
	};
}
function transformBaseImageProps(props) {
	let { src, transformer, background, layout, objectFit, breakpoints, width, height, aspectRatio, unstyled, operations, options, ...transformedProps } = transformSharedProps(props);
	if (transformer && background === "auto") {
		const lowResHeight = aspectRatio ? Math.round(LOW_RES_WIDTH / aspectRatio) : void 0;
		const lowResImage = transformer(src, {
			width: LOW_RES_WIDTH,
			height: lowResHeight
		}, options);
		if (lowResImage) background = lowResImage.toString();
	}
	const styleProps = {
		width,
		height,
		aspectRatio,
		layout,
		objectFit,
		background
	};
	transformedProps.sizes ||= getSizes(width, layout);
	if (!unstyled) transformedProps.style = {
		...getStyle(styleProps),
		...transformedProps.style
	};
	if (transformer) {
		transformedProps.srcset = getSrcSet({
			src,
			width,
			height,
			aspectRatio,
			layout,
			breakpoints,
			transformer,
			operations,
			options
		});
		const transformed = transformer(src, {
			...operations,
			width,
			height
		}, options);
		if (transformed) src = transformed;
		if (layout === "fullWidth" || layout === "constrained") {
			width = void 0;
			height = void 0;
		}
	}
	return {
		...transformedProps,
		src: src?.toString(),
		width,
		height
	};
}
function normalizeImageType(type) {
	if (!type) return {};
	if (type.startsWith("image/")) return {
		format: type.slice(6),
		mimeType: type
	};
	return {
		format: type,
		mimeType: `image/${type === "jpg" ? "jpeg" : type}`
	};
}
function transformBaseSourceProps({ media, type, ...props }) {
	let { src, transformer, layout, breakpoints, width, height, aspectRatio, sizes, loading, decoding, operations, options, ...rest } = transformSharedProps(props);
	if (!transformer) return {};
	const { format, mimeType } = normalizeImageType(type);
	sizes ||= getSizes(width, layout);
	const srcset = getSrcSet({
		src,
		width,
		height,
		aspectRatio,
		layout,
		breakpoints,
		transformer,
		format,
		operations,
		options
	});
	const transformed = transformer(src, {
		...operations,
		width,
		height
	}, options);
	if (transformed) src = transformed;
	const returnObject = {
		...rest,
		sizes,
		srcset
	};
	if (media) returnObject.media = media;
	if (mimeType) returnObject.type = mimeType;
	return returnObject;
}
//#endregion
//#region node_modules/unpic/esm/data/domains.js
var domains_default = {
	"images.ctfassets.net": "contentful",
	"cdn.builder.io": "builder.io",
	"images.prismic.io": "imgix",
	"www.datocms-assets.com": "imgix",
	"cdn.sanity.io": "imgix",
	"images.unsplash.com": "imgix",
	"cdn.shopify.com": "shopify",
	"s7d1.scene7.com": "scene7",
	"ip.keycdn.com": "keycdn",
	"assets.caisy.io": "bunny",
	"images.contentstack.io": "contentstack",
	"ucarecdn.com": "uploadcare",
	"imagedelivery.net": "cloudflare_images",
	"wsrv.nl": "wsrv"
};
//#endregion
//#region node_modules/unpic/esm/data/subdomains.js
var subdomains_default = {
	"imgix.net": "imgix",
	"wp.com": "wordpress",
	"files.wordpress.com": "wordpress",
	"b-cdn.net": "bunny",
	"storyblok.com": "storyblok",
	"kc-usercontent.com": "kontent.ai",
	"cloudinary.com": "cloudinary",
	"kxcdn.com": "keycdn",
	"imgeng.in": "imageengine",
	"imagekit.io": "imagekit",
	"cloudimg.io": "cloudimage",
	"ucarecdn.com": "uploadcare",
	"supabase.co": "supabase",
	"graphassets.com": "hygraph"
};
//#endregion
//#region node_modules/unpic/esm/data/paths.js
var paths_default = {
	"/cdn-cgi/image/": "cloudflare",
	"/cdn-cgi/imagedelivery/": "cloudflare_images",
	"/_next/image": "nextjs",
	"/_vercel/image": "vercel",
	"/is/image": "scene7",
	"/_ipx/": "ipx",
	"/_image": "astro",
	"/.netlify/images": "netlify",
	"/storage/v1/object/public/": "supabase",
	"/storage/v1/render/image/public/": "supabase",
	"/v1/storage/buckets/": "appwrite"
};
//#endregion
//#region node_modules/unpic/esm/src/utils.js
function roundIfNumeric(value) {
	if (!value) return value;
	const num = Number(value);
	if (isNaN(num)) return value;
	return Math.round(num);
}
/**
* Given a URL object, returns path and query params
*/
var toRelativeUrl = (url) => {
	const { pathname, search } = url;
	return `${pathname}${search}`;
};
/**
* Returns a URL string that may be relative or absolute
*/
var toCanonicalUrlString = (url) => {
	return url.hostname === "n" ? toRelativeUrl(url) : url.toString();
};
/**
* Normalises a URL object or string URL to a URL object.
*/
var toUrl = (url, base) => {
	return typeof url === "string" ? new URL(url, base ?? "http://n/") : url;
};
/**
* Escapes a string, even if it's URL-safe
*/
var escapeChar = (text) => text === " " ? "+" : "%" + text.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
var stripLeadingSlash = (str) => str?.startsWith("/") ? str.slice(1) : str;
var stripTrailingSlash = (str) => str?.endsWith("/") ? str.slice(0, -1) : str;
var addTrailingSlash = (str) => str?.endsWith("/") ? str : `${str}/`;
/**
* Creates a formatter given an operation joiner and key/value joiner
*/
var createFormatter = (kvSeparator, paramSeparator) => {
	const encodedValueJoiner = escapeChar(kvSeparator);
	const encodedOperationJoiner = escapeChar(paramSeparator);
	function escape(value) {
		return encodeURIComponent(value).replaceAll(kvSeparator, encodedValueJoiner).replaceAll(paramSeparator, encodedOperationJoiner);
	}
	function format(key, value) {
		return `${escape(key)}${kvSeparator}${escape(String(value))}`;
	}
	return (operations) => {
		return (Array.isArray(operations) ? operations : Object.entries(operations)).flatMap(([key, value]) => {
			if (value === void 0 || value === null) return [];
			if (Array.isArray(value)) return value.map((v) => format(key, v));
			return format(key, value);
		}).join(paramSeparator);
	};
};
/**
* Creates a parser given an operation joiner and key/value joiner
*/
var createParser = (kvSeparator, paramSeparator) => {
	if (kvSeparator === "=" && paramSeparator === "&") return queryParser;
	return (url) => {
		const urlString = url.toString();
		return Object.fromEntries(urlString.split(paramSeparator).map((pair) => {
			const [key, value] = pair.split(kvSeparator);
			return [decodeURI(key), decodeURI(value)];
		}));
	};
};
/**
* Clamp width and height, maintaining aspect ratio
*/
function clampDimensions(operations, maxWidth = 4e3, maxHeight = 4e3) {
	let { width, height } = operations;
	width = Number(width) || void 0;
	height = Number(height) || void 0;
	if (width && width > maxWidth) {
		if (height) height = Math.round(height * maxWidth / width);
		width = maxWidth;
	}
	if (height && height > maxHeight) {
		if (width) width = Math.round(width * maxHeight / height);
		height = maxHeight;
	}
	return {
		width,
		height
	};
}
function extractFromURL(url) {
	const parsedUrl = toUrl(url);
	const operations = Object.fromEntries(parsedUrl.searchParams.entries());
	for (const key in [
		"width",
		"height",
		"quality"
	]) {
		const value = operations[key];
		if (value) {
			const newVal = Number(value);
			if (!isNaN(newVal)) operations[key] = newVal;
		}
	}
	parsedUrl.search = "";
	return {
		operations,
		src: toCanonicalUrlString(parsedUrl)
	};
}
function normaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
	if (operations.format && operations.format in formatMap) operations.format = formatMap[operations.format];
	if (operations.width) operations.width = roundIfNumeric(operations.width);
	if (operations.height) operations.height = roundIfNumeric(operations.height);
	for (const k in keyMap) {
		if (!Object.prototype.hasOwnProperty.call(keyMap, k)) continue;
		const key = k;
		if (keyMap[key] === false) {
			delete operations[key];
			continue;
		}
		if (keyMap[key] && operations[key]) {
			operations[keyMap[key]] = operations[key];
			delete operations[key];
		}
	}
	for (const k in defaults) {
		if (!Object.prototype.hasOwnProperty.call(defaults, k)) continue;
		const key = k;
		const value = defaults[key];
		if (!operations[key] && value !== void 0) {
			if (keyMap[key] === false) continue;
			const resolvedKey = keyMap[key] ?? key;
			if (resolvedKey in operations) continue;
			operations[resolvedKey] = value;
		}
	}
	return operations;
}
var invertMap = (map) => Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
function denormaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
	const ops = normaliseOperations({
		keyMap: invertMap(keyMap),
		formatMap: invertMap(formatMap),
		defaults
	}, operations);
	if (ops.width) ops.width = roundIfNumeric(ops.width);
	if (ops.height) ops.height = roundIfNumeric(ops.height);
	const q = Number(ops.quality);
	if (!isNaN(q)) ops.quality = q;
	return ops;
}
var queryParser = (url) => {
	const parsedUrl = toUrl(url);
	return Object.fromEntries(parsedUrl.searchParams.entries());
};
function createOperationsGenerator({ kvSeparator = "=", paramSeparator = "&", ...options } = {}) {
	const formatter = createFormatter(kvSeparator, paramSeparator);
	return (operations) => {
		return formatter(normaliseOperations(options, operations));
	};
}
function createOperationsParser({ kvSeparator = "=", paramSeparator = "&", defaults: _, ...options } = {}) {
	const parser = createParser(kvSeparator, paramSeparator);
	return (url) => {
		return denormaliseOperations(options, url ? parser(url) : {});
	};
}
function createOperationsHandlers(config) {
	return {
		operationsGenerator: createOperationsGenerator(config),
		operationsParser: createOperationsParser(config)
	};
}
function paramToBoolean(value) {
	if (value === void 0 || value === null) return;
	try {
		return Boolean(JSON.parse(value?.toString()));
	} catch {
		return Boolean(value);
	}
}
var removeUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== void 0));
function createExtractAndGenerate(extract, generate) {
	return ((src, operations, options) => {
		const base = extract(src, options);
		if (!base) return generate(src, operations, options);
		return generate(base.src, {
			...base.operations,
			...removeUndefined(operations)
		}, {
			...base.options,
			...options
		});
	});
}
//#endregion
//#region node_modules/unpic/esm/src/detect.js
var cdnDomains = new Map(Object.entries(domains_default));
var cdnSubdomains = Object.entries(subdomains_default);
var cdnPaths = Object.entries(paths_default);
/**
* Detects the image CDN provider for a given URL.
*/
function getProviderForUrl(url) {
	return getProviderForUrlByDomain(url) || getProviderForUrlByPath(url);
}
function getProviderForUrlByDomain(url) {
	if (typeof url === "string" && !url.startsWith("https://")) return false;
	const { hostname } = toUrl(url);
	const cdn = cdnDomains.get(hostname);
	if (cdn) return cdn;
	return cdnSubdomains.find(([subdomain]) => hostname.endsWith(subdomain))?.[1] || false;
}
/**
* Gets the image CDN provider for a given URL by its path.
*/
function getProviderForUrlByPath(url) {
	const { pathname } = toUrl(url);
	return cdnPaths.find(([path]) => pathname.startsWith(path))?.[1] || false;
}
//#endregion
//#region node_modules/unpic/esm/src/providers/appwrite.js
var VIEW_URL_SUFFIX = "/view?";
var PREVIEW_URL_SUFFIX = "/preview?";
var { operationsGenerator: operationsGenerator$25, operationsParser: operationsParser$20 } = createOperationsHandlers({
	keyMap: { format: "output" },
	kvSeparator: "=",
	paramSeparator: "&"
});
var generate$26 = (src, modifiers) => {
	const url = toUrl(src.toString().replace(VIEW_URL_SUFFIX, PREVIEW_URL_SUFFIX));
	const projectParam = url.searchParams.get("project") ?? "";
	url.search = operationsGenerator$25(modifiers);
	url.searchParams.append("project", projectParam);
	return toCanonicalUrlString(url);
};
var extract$26 = (url) => {
	if (getProviderForUrlByPath(url) !== "appwrite") return null;
	const parsedUrl = toUrl(url);
	const operations = operationsParser$20(parsedUrl);
	delete operations.project;
	const projectParam = parsedUrl.searchParams.get("project") ?? "";
	parsedUrl.search = "";
	parsedUrl.searchParams.append("project", projectParam);
	return {
		src: parsedUrl.href,
		operations
	};
};
var transform$27 = createExtractAndGenerate(extract$26, generate$26);
//#endregion
//#region node_modules/unpic/esm/src/providers/astro.js
var DEFAULT_ENDPOINT = "/_image";
var { operationsParser: operationsParser$19, operationsGenerator: operationsGenerator$24 } = createOperationsHandlers({
	keyMap: {
		format: "f",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { fit: "cover" }
});
var generate$25 = (src, modifiers, options) => {
	const url = toUrl(`${stripTrailingSlash(options?.baseUrl ?? "")}${options?.endpoint ?? DEFAULT_ENDPOINT}`);
	url.search = operationsGenerator$24(modifiers);
	url.searchParams.set("href", src.toString());
	return toCanonicalUrlString(url);
};
var extract$25 = (url) => {
	const parsedUrl = toUrl(url);
	const src = parsedUrl.searchParams.get("href");
	if (!src) return null;
	parsedUrl.searchParams.delete("href");
	return {
		src,
		operations: operationsParser$19(parsedUrl),
		options: { baseUrl: parsedUrl.origin }
	};
};
var transform$26 = (src, operations, options = {}) => {
	if (toUrl(src).pathname !== (options?.endpoint ?? DEFAULT_ENDPOINT)) return generate$25(src, operations, options);
	const base = extract$25(src);
	if (!base) return generate$25(src, operations, options);
	options.baseUrl ??= base.options.baseUrl;
	return generate$25(base.src, {
		...base.operations,
		...operations
	}, options);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/builder.io.js
var operationsGenerator$23 = createOperationsGenerator({ defaults: {
	fit: "cover",
	format: "webp",
	sharp: true
} });
var extract$24 = extractFromURL;
var generate$24 = (src, modifiers) => {
	const operations = operationsGenerator$23(modifiers);
	const url = toUrl(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var transform$25 = createExtractAndGenerate(extract$24, generate$24);
//#endregion
//#region node_modules/unpic/esm/src/providers/bunny.js
var operationsGenerator$22 = createOperationsGenerator({ keyMap: { format: "output" } });
var extract$23 = extractFromURL;
var generate$23 = (src, modifiers) => {
	const operations = operationsGenerator$22(modifiers);
	const url = toUrl(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var extractAndGenerate$1 = createExtractAndGenerate(extract$23, generate$23);
var transform$24 = (src, operations) => {
	const { width, height } = operations;
	if (width && height) operations.aspect_ratio ??= `${Math.round(Number(width))}:${Math.round(Number(height))}`;
	return extractAndGenerate$1(src, operations);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudflare.js
var { operationsGenerator: operationsGenerator$21, operationsParser: operationsParser$18 } = createOperationsHandlers({
	keyMap: { "format": "f" },
	defaults: {
		format: "auto",
		fit: "cover"
	},
	formatMap: { jpg: "jpeg" },
	kvSeparator: "=",
	paramSeparator: ","
});
var generate$22 = (src, operations, options) => {
	const modifiers = operationsGenerator$21(operations);
	const url = toUrl(options?.domain ? `https://${options.domain}` : "/");
	url.pathname = `/cdn-cgi/image/${modifiers}/${stripLeadingSlash(src.toString())}`;
	return toCanonicalUrlString(url);
};
var extract$22 = (url, options) => {
	if (getProviderForUrlByPath(url) !== "cloudflare") return null;
	const parsedUrl = toUrl(url);
	const [, , , modifiers, ...src] = parsedUrl.pathname.split("/");
	const operations = operationsParser$18(modifiers);
	return {
		src: toCanonicalUrlString(toUrl(src.join("/"))),
		operations,
		options: { domain: options?.domain ?? (parsedUrl.hostname === "n" ? void 0 : parsedUrl.hostname) }
	};
};
var transform$23 = createExtractAndGenerate(extract$22, generate$22);
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudflare_images.js
var cloudflareImagesRegex = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
var imagedeliveryRegex = /https?:\/\/(?<host>imagedelivery.net)\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
var { operationsGenerator: operationsGenerator$20, operationsParser: operationsParser$17 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f"
	},
	defaults: { fit: "cover" },
	kvSeparator: "=",
	paramSeparator: ","
});
function formatUrl(options, transformations) {
	const { host, accountHash, imageId } = options;
	if (!host || !accountHash || !imageId) throw new Error("Missing required Cloudflare Images options");
	return [
		"https:/",
		...host === "imagedelivery.net" ? [host] : [
			host,
			"cdn-cgi",
			"imagedelivery"
		],
		accountHash,
		imageId,
		transformations
	].filter(Boolean).join("/");
}
var generate$21 = (_src, operations, options = {}) => {
	return toCanonicalUrlString(toUrl(formatUrl(options, operationsGenerator$20(operations))));
};
var extract$21 = (url) => {
	const parsedUrl = toUrl(url);
	const matches = [...parsedUrl.toString().matchAll(cloudflareImagesRegex), ...parsedUrl.toString().matchAll(imagedeliveryRegex)];
	if (!matches[0]?.groups) return null;
	const { host, accountHash, imageId, transformations } = matches[0].groups;
	const operations = operationsParser$17(transformations || "");
	const options = {
		host,
		accountHash,
		imageId
	};
	return {
		src: formatUrl(options),
		operations,
		options
	};
};
var transform$22 = (src, operations, options = {}) => {
	const extracted = extract$21(src);
	if (!extracted) throw new Error("Invalid Cloudflare Images URL");
	const newOperations = {
		...extracted.operations,
		...operations
	};
	return generate$21(extracted.src, newOperations, {
		...extracted.options,
		...options
	});
};
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudimage.js
var { operationsGenerator: operationsGenerator$19, operationsParser: operationsParser$16 } = createOperationsHandlers({
	keyMap: {
		format: "force_format",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { org_if_sml: 1 }
});
var generate$20 = (src, modifiers = {}, { token } = {}) => {
	if (!token) throw new Error("Token is required for Cloudimage URLs" + src);
	let srcString = src.toString();
	srcString = srcString.replace(/^https?:\/\//, "");
	if (srcString.includes("?")) {
		modifiers.ci_url_encoded = 1;
		srcString = encodeURIComponent(srcString);
	}
	const operations = operationsGenerator$19(modifiers);
	const url = new URL(`https://${token}.cloudimg.io/`);
	url.pathname = srcString;
	url.search = operations;
	return url.toString();
};
var extract$20 = (src, options = {}) => {
	const url = toUrl(src);
	if (getProviderForUrl(url) !== "cloudimage") return null;
	const operations = operationsParser$16(url);
	let originalSrc = url.pathname;
	if (operations.ci_url_encoded) {
		originalSrc = decodeURIComponent(originalSrc);
		delete operations.ci_url_encoded;
	}
	options.token ??= url.hostname.replace(".cloudimg.io", "");
	return {
		src: `${url.protocol}/${originalSrc}`,
		operations,
		options
	};
};
var transform$21 = createExtractAndGenerate(extract$20, generate$20);
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudinary.js
var publicRegex = /https?:\/\/(?<host>res\.cloudinary\.com)\/(?<cloudName>[a-zA-Z0-9-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
var privateRegex = /https?:\/\/(?<host>(?<cloudName>[a-zA-Z0-9-]+)-res\.cloudinary\.com|[a-zA-Z0-9.-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
var { operationsGenerator: operationsGenerator$18, operationsParser: operationsParser$15 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f",
		quality: "q"
	},
	defaults: {
		format: "auto",
		c: "lfill"
	},
	kvSeparator: "_",
	paramSeparator: ","
});
function formatCloudinaryUrl({ host, cloudName, assetType, deliveryType, signature, transformations, version, id }) {
	return [
		"https:/",
		host,
		host === "res.cloudinary.com" ? cloudName : void 0,
		assetType,
		deliveryType,
		signature,
		transformations,
		version,
		id
	].filter(Boolean).join("/");
}
function parseCloudinaryUrl(url) {
	let matches = url.toString().match(publicRegex);
	if (!matches?.length) matches = url.toString().match(privateRegex);
	if (!matches?.length) return null;
	return matches.groups || {};
}
var transform$20 = (src, operations) => {
	const group = parseCloudinaryUrl(src.toString());
	if (!group) return src.toString();
	group.transformations = operationsGenerator$18({
		...operationsParser$15(group.transformations || ""),
		...operations
	});
	return formatCloudinaryUrl(group);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/contentful.js
var operationsGenerator$17 = createOperationsGenerator({
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { fit: "fill" }
});
var generate$19 = (src, modifiers) => {
	const operations = operationsGenerator$17(modifiers);
	const url = new URL(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var extractAndGenerate = createExtractAndGenerate(extractFromURL, generate$19);
var transform$19 = (src, operations) => {
	const { width, height } = clampDimensions(operations, 4e3, 4e3);
	return extractAndGenerate(src, {
		...operations,
		width,
		height
	});
};
//#endregion
//#region node_modules/unpic/esm/src/providers/contentstack.js
var operationsGenerator$16 = createOperationsGenerator({ defaults: {
	auto: "webp",
	disable: "upscale"
} });
var generate$18 = (src, operations, { baseURL = "https://images.contentstack.io/" } = {}) => {
	if (operations.width && operations.height) operations.fit ??= "crop";
	const modifiers = operationsGenerator$16(operations);
	const url = toUrl(src);
	if (url.hostname === "n") {
		url.protocol = "https:";
		url.hostname = new URL(baseURL).hostname;
	}
	url.search = modifiers;
	return toCanonicalUrlString(url);
};
var extract$18 = (url) => {
	const { src, operations } = extractFromURL(url) ?? {};
	if (!operations || !src) return null;
	const { origin } = toUrl(url);
	return {
		src,
		operations,
		options: { baseURL: origin }
	};
};
var transform$18 = createExtractAndGenerate(extract$18, generate$18);
//#endregion
//#region node_modules/unpic/esm/src/providers/directus.js
var operationsGenerator$15 = createOperationsGenerator({ defaults: {
	withoutEnlargement: true,
	fit: "cover"
} });
var generate$17 = (src, operations) => {
	if (Array.isArray(operations.transforms)) operations.transforms = JSON.stringify(operations.transforms);
	const modifiers = operationsGenerator$15(operations);
	const url = toUrl(src);
	url.search = modifiers;
	return toCanonicalUrlString(url);
};
var extract$17 = (url) => {
	const base = extractFromURL(url);
	if (base?.operations?.transforms && typeof base.operations.transforms === "string") try {
		base.operations.transforms = JSON.parse(base.operations.transforms);
	} catch {
		return null;
	}
	return base;
};
var transform$17 = createExtractAndGenerate(extract$17, generate$17);
//#endregion
//#region node_modules/unpic/esm/src/providers/hygraph.js
var hygraphRegex = /https:\/\/(?<region>[a-z0-9-]+)\.graphassets\.com\/(?<envId>[a-zA-Z0-9]+)(?:\/(?<transformations>.*?))?\/(?<handle>[a-zA-Z0-9]+)$/;
var { operationsGenerator: operationsGenerator$14, operationsParser: operationsParser$14 } = createOperationsHandlers({
	keyMap: {
		width: "width",
		height: "height",
		format: "format"
	},
	defaults: {
		format: "auto",
		fit: "crop"
	}
});
var extract$16 = (url) => {
	const matches = toUrl(url).toString().match(hygraphRegex);
	if (!matches?.groups) return null;
	const { region, envId, handle, transformations } = matches.groups;
	const operations = {};
	if (transformations) transformations.split("/").forEach((part) => {
		const [operation, params] = part.split("=");
		if (operation === "resize" && params) params.split(",").forEach((param) => {
			const [key, value] = param.split(":");
			if (key === "width" || key === "height") operations[key] = Number(value);
			else if (key === "fit") operations.fit = value;
		});
		else if (operation === "output" && params) params.split(",").forEach((param) => {
			const [key, value] = param.split(":");
			if (key === "format") operations.format = value;
		});
		else if (operation === "auto_image") operations.format = "auto";
	});
	return {
		src: `https://${region}.graphassets.com/${envId}/${handle}`,
		operations,
		options: {
			region,
			envId,
			handle
		}
	};
};
var generate$16 = (src, operations, options = {}) => {
	const extracted = extract$16(src);
	if (!extracted) throw new Error("Invalid Hygraph URL");
	const { region, envId, handle } = {
		...extracted.options,
		...options
	};
	const transforms = [];
	if (operations.width || operations.height) {
		const resize = [];
		if (operations.width && operations.height) resize.push("fit:crop");
		else if (operations.fit) resize.push(`fit:${operations.fit}`);
		if (operations.width) resize.push(`width:${operations.width}`);
		if (operations.height) resize.push(`height:${operations.height}`);
		if (resize.length) transforms.push(`resize=${resize.join(",")}`);
	}
	if (operations.format === "auto" || !operations.format && !extracted.operations.format) transforms.push("auto_image");
	else if (operations.format) transforms.push(`output=format:${operations.format}`);
	return toCanonicalUrlString(toUrl(`${`https://${region}.graphassets.com/${envId}`}${transforms.length > 0 ? "/" + transforms.join("/") : ""}/${handle}`));
};
var transform$16 = createExtractAndGenerate(extract$16, generate$16);
//#endregion
//#region node_modules/unpic/esm/src/providers/imageengine.js
var { operationsGenerator: operationsGenerator$13, operationsParser: operationsParser$13 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f"
	},
	defaults: { m: "cropbox" },
	kvSeparator: "_",
	paramSeparator: "/"
});
var generate$15 = (src, operations) => {
	const modifiers = operationsGenerator$13(operations);
	const url = toUrl(src);
	url.searchParams.set("imgeng", modifiers);
	return toCanonicalUrlString(url);
};
var extract$15 = (url) => {
	const parsedUrl = toUrl(url);
	const imgeng = parsedUrl.searchParams.get("imgeng");
	if (!imgeng) return null;
	const operations = operationsParser$13(imgeng);
	parsedUrl.searchParams.delete("imgeng");
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$15 = createExtractAndGenerate(extract$15, generate$15);
//#endregion
//#region node_modules/unpic/esm/src/providers/imagekit.js
var { operationsGenerator: operationsGenerator$12, operationsParser: operationsParser$12 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f",
		quality: "q"
	},
	defaults: {
		c: "maintain_ratio",
		fo: "auto"
	},
	kvSeparator: "-",
	paramSeparator: ","
});
var generate$14 = (src, operations) => {
	const modifiers = operationsGenerator$12(operations);
	const url = toUrl(src);
	url.searchParams.set("tr", modifiers);
	return toCanonicalUrlString(url);
};
var extract$14 = (url) => {
	const parsedUrl = toUrl(url);
	let trPart = null;
	let path = parsedUrl.pathname;
	if (parsedUrl.searchParams.has("tr")) {
		trPart = parsedUrl.searchParams.get("tr");
		parsedUrl.searchParams.delete("tr");
	} else {
		const pathParts = parsedUrl.pathname.split("/");
		const trIndex = pathParts.findIndex((part) => part.startsWith("tr:"));
		if (trIndex !== -1) {
			trPart = pathParts[trIndex].slice(3);
			path = pathParts.slice(0, trIndex).concat(pathParts.slice(trIndex + 1)).join("/");
		}
	}
	if (!trPart) return null;
	parsedUrl.pathname = path;
	const operations = operationsParser$12(trPart);
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$14 = createExtractAndGenerate(extract$14, generate$14);
//#endregion
//#region node_modules/unpic/esm/src/providers/imgix.js
var { operationsGenerator: operationsGenerator$11, operationsParser: operationsParser$11 } = createOperationsHandlers({
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: {
		fit: "min",
		auto: "format"
	}
});
var extract$13 = (url) => {
	const src = toUrl(url);
	const operations = operationsParser$11(url);
	src.search = "";
	return {
		src: toCanonicalUrlString(src),
		operations
	};
};
var generate$13 = (src, operations) => {
	const modifiers = operationsGenerator$11(operations);
	const url = toUrl(src);
	url.search = modifiers;
	if (url.searchParams.has("fm") && url.searchParams.get("auto") === "format") url.searchParams.delete("auto");
	return toCanonicalUrlString(url);
};
var transform$13 = createExtractAndGenerate(extract$13, generate$13);
//#endregion
//#region node_modules/unpic/esm/src/providers/ipx.js
var { operationsGenerator: operationsGenerator$10, operationsParser: operationsParser$10 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		quality: "q",
		format: "f"
	},
	defaults: { f: "auto" },
	kvSeparator: "_",
	paramSeparator: ","
});
var generate$12 = (src, operations, options) => {
	if (operations.width && operations.height) {
		operations.s = `${operations.width}x${operations.height}`;
		delete operations.width;
		delete operations.height;
	}
	const modifiers = operationsGenerator$10(operations);
	const url = toUrl(options?.baseURL ?? "/_ipx");
	url.pathname = `${stripTrailingSlash(url.pathname)}/${modifiers}/${stripLeadingSlash(src.toString())}`;
	return toCanonicalUrlString(url);
};
var extract$12 = (url) => {
	const parsedUrl = toUrl(url);
	const [, baseUrlPart, modifiers, ...srcParts] = parsedUrl.pathname.split("/");
	if (!modifiers || !srcParts.length) return null;
	const operations = operationsParser$10(modifiers);
	if (operations.s) {
		const [width, height] = operations.s.split("x").map(Number);
		operations.width = width;
		operations.height = height;
		delete operations.s;
	}
	return {
		src: "/" + srcParts.join("/"),
		operations,
		options: { baseURL: `${parsedUrl.origin}/${baseUrlPart}` }
	};
};
var transform$12 = (src, operations, options) => {
	const url = toUrl(src);
	const baseURL = options?.baseURL;
	if (baseURL && url.toString().startsWith(baseURL) || url.pathname.startsWith("/_ipx")) {
		const extracted = extract$12(src);
		if (extracted) return generate$12(extracted.src, {
			...extracted.operations,
			...operations
		}, { baseURL: extracted.options.baseURL });
	}
	return generate$12(src, operations, { baseURL });
};
//#endregion
//#region node_modules/unpic/esm/src/providers/keycdn.js
var BOOLEAN_PARAMS = [
	"enlarge",
	"flip",
	"flop",
	"negate",
	"normalize",
	"grayscale",
	"removealpha",
	"olrepeat",
	"progressive",
	"adaptive",
	"lossless",
	"nearlossless",
	"metadata"
];
var { operationsGenerator: operationsGenerator$9, operationsParser: operationsParser$9 } = createOperationsHandlers({
	defaults: { fit: "cover" },
	formatMap: { jpg: "jpeg" }
});
var generate$11 = (src, operations) => {
	const url = toUrl(src);
	for (const key of BOOLEAN_PARAMS) if (operations[key] !== void 0) operations[key] = operations[key] ? 1 : 0;
	url.search = operationsGenerator$9(operations);
	return toCanonicalUrlString(url);
};
var extract$11 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$9(parsedUrl);
	for (const key of BOOLEAN_PARAMS) if (operations[key] !== void 0) operations[key] = paramToBoolean(operations[key]);
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$11 = createExtractAndGenerate(extract$11, generate$11);
//#endregion
//#region node_modules/unpic/esm/src/providers/kontent.ai.js
var { operationsGenerator: operationsGenerator$8, operationsParser: operationsParser$8 } = createOperationsHandlers({
	formatMap: { jpg: "jpeg" },
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	}
});
var generate$10 = (src, operations) => {
	const url = toUrl(src);
	if (operations.lossless !== void 0) operations.lossless = operations.lossless ? 1 : 0;
	if (operations.width && operations.height) operations.fit = "crop";
	url.search = operationsGenerator$8(operations);
	return toCanonicalUrlString(url);
};
var extract$10 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$8(parsedUrl);
	if (operations.lossless !== void 0) operations.lossless = paramToBoolean(operations.lossless);
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$10 = createExtractAndGenerate(extract$10, generate$10);
//#endregion
//#region node_modules/unpic/esm/src/providers/netlify.js
var { operationsGenerator: operationsGenerator$7, operationsParser: operationsParser$7 } = createOperationsHandlers({
	defaults: { fit: "cover" },
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	}
});
var generate$9 = (src, operations, options = {}) => {
	const url = toUrl(`${options.baseUrl || ""}/.netlify/images`);
	url.search = operationsGenerator$7(operations);
	url.searchParams.set("url", src.toString());
	return toCanonicalUrlString(url);
};
var extract$9 = (url) => {
	if (getProviderForUrlByPath(url) !== "netlify") return null;
	const parsedUrl = toUrl(url);
	const operations = operationsParser$7(parsedUrl);
	delete operations.url;
	const sourceUrl = parsedUrl.searchParams.get("url") || "";
	parsedUrl.search = "";
	return {
		src: sourceUrl,
		operations,
		options: { baseUrl: parsedUrl.hostname === "n" ? void 0 : parsedUrl.origin }
	};
};
var transform$9 = createExtractAndGenerate(extract$9, generate$9);
//#endregion
//#region node_modules/unpic/esm/src/providers/vercel.js
var { operationsGenerator: operationsGenerator$6, operationsParser: operationsParser$6 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		quality: "q",
		height: false,
		format: false
	},
	defaults: { q: 75 }
});
var generate$8 = (src, operations, options = {}) => {
	const url = toUrl(`${options.baseUrl || ""}/${options.prefix || "_vercel"}/image`);
	url.search = operationsGenerator$6(operations);
	url.searchParams.append("url", src.toString());
	return toCanonicalUrlString(url);
};
var extract$8 = (url, options = {}) => {
	if (!["vercel", "nextjs"].includes(getProviderForUrlByPath(url) || "")) return null;
	const parsedUrl = toUrl(url);
	const sourceUrl = parsedUrl.searchParams.get("url") || "";
	parsedUrl.searchParams.delete("url");
	const operations = operationsParser$6(parsedUrl);
	parsedUrl.search = "";
	return {
		src: sourceUrl,
		operations,
		options: { baseUrl: options.baseUrl ?? parsedUrl.origin }
	};
};
var transform$8 = createExtractAndGenerate(extract$8, generate$8);
//#endregion
//#region node_modules/unpic/esm/src/providers/nextjs.js
var generate$7 = (src, operations, options = {}) => generate$8(src, operations, {
	...options,
	prefix: "_next"
});
var extract$7 = (url, options) => extract$8(url, options);
var transform$7 = createExtractAndGenerate(extract$7, generate$7);
//#endregion
//#region node_modules/unpic/esm/src/providers/scene7.js
var { operationsGenerator: operationsGenerator$5, operationsParser: operationsParser$5 } = createOperationsHandlers({
	keyMap: {
		width: "wid",
		height: "hei",
		quality: "qlt",
		format: "fmt"
	},
	defaults: { fit: "crop,0" }
});
var BASE = "https://s7d1.scene7.com/is/image/";
var generate$6 = (src, operations) => {
	const url = new URL(src, BASE);
	url.search = operationsGenerator$5(operations);
	return toCanonicalUrlString(url);
};
var extract$6 = (url) => {
	if (getProviderForUrl(url) !== "scene7") return null;
	const parsedUrl = new URL(url, BASE);
	const operations = operationsParser$5(parsedUrl);
	parsedUrl.search = "";
	return {
		src: parsedUrl.toString(),
		operations
	};
};
var transform$6 = createExtractAndGenerate(extract$6, generate$6);
//#endregion
//#region node_modules/unpic/esm/src/providers/shopify.js
var shopifyRegex = /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/;
var { operationsGenerator: operationsGenerator$4, operationsParser: operationsParser$4 } = createOperationsHandlers({ keyMap: { format: false } });
var generate$5 = (src, operations) => {
	const url = toUrl(src);
	url.pathname = url.pathname.replace(shopifyRegex, "$1$6");
	url.search = operationsGenerator$4(operations);
	return toCanonicalUrlString(url);
};
var extract$5 = (url) => {
	const parsedUrl = toUrl(url);
	const match = shopifyRegex.exec(parsedUrl.pathname);
	const operations = operationsParser$4(parsedUrl);
	if (match) {
		const [, , , width, height, crop] = match;
		if (width && height && !operations.width && !operations.height) {
			operations.width = parseInt(width, 10);
			operations.height = parseInt(height, 10);
		}
		if (crop) operations.crop ??= crop;
	}
	parsedUrl.pathname = parsedUrl.pathname.replace(shopifyRegex, "$1$6");
	for (const key of [
		"width",
		"height",
		"crop",
		"pad_color",
		"format"
	]) parsedUrl.searchParams.delete(key);
	return {
		src: parsedUrl.toString(),
		operations
	};
};
var transform$5 = createExtractAndGenerate(extract$5, generate$5);
//#endregion
//#region node_modules/unpic/esm/src/providers/storyblok.js
var storyBlokAssets = /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/;
var storyBlokImg2 = /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/;
var filterSplitterRegex = /:(?![^(]*\))/;
var splitFilters = (filters) => {
	if (!filters) return {};
	return Object.fromEntries(filters.split(filterSplitterRegex).map((filter) => {
		if (!filter) return [];
		const [key, value] = filter.split("(");
		return [key, value.replace(")", "")];
	}));
};
var generateFilters = (filters) => {
	if (!filters) return;
	const filterItems = Object.entries(filters).map(([key, value]) => `${key}(${value ?? ""})`);
	if (filterItems.length === 0) return;
	return `filters:${filterItems.join(":")}`;
};
var extract$4 = (url) => {
	const parsedUrl = toUrl(url);
	const matches = (parsedUrl.hostname === "img2.storyblok.com" ? storyBlokImg2 : storyBlokAssets).exec(parsedUrl.pathname);
	if (!matches || !matches.groups) return null;
	const { id, crop, width, height, filters, flipx, flipy } = matches.groups;
	const { format, ...filterMap } = splitFilters(filters ?? "");
	if (parsedUrl.hostname === "img2.storyblok.com") parsedUrl.hostname = "a.storyblok.com";
	const operations = Object.fromEntries([
		["width", Number(width) || void 0],
		["height", Number(height) || void 0],
		["format", format],
		["crop", crop],
		["filters", filterMap],
		["flipx", flipx],
		["flipy", flipy]
	].filter(([_, value]) => value !== void 0));
	return {
		src: `${parsedUrl.origin}${id}`,
		operations
	};
};
var generate$4 = (src, operations) => {
	const url = toUrl(src);
	const { width = 0, height = 0, format, crop, filters = {}, flipx = "", flipy = "" } = operations;
	const size = `${flipx}${width}x${flipy}${height}`;
	if (format) filters.format = format;
	url.pathname = [
		url.pathname,
		"m",
		crop,
		size,
		generateFilters(filters)
	].filter(Boolean).join("/");
	return toCanonicalUrlString(url);
};
var transform$4 = createExtractAndGenerate(extract$4, generate$4);
//#endregion
//#region node_modules/unpic/esm/src/providers/supabase.js
var STORAGE_URL_PREFIX = "/storage/v1/object/public/";
var RENDER_URL_PREFIX = "/storage/v1/render/image/public/";
var isRenderUrl = (url) => url.pathname.startsWith(RENDER_URL_PREFIX);
var { operationsGenerator: operationsGenerator$3, operationsParser: operationsParser$3 } = createOperationsHandlers({});
var generate$3 = (src, operations) => {
	const url = toUrl(src);
	url.pathname = url.pathname.replace(RENDER_URL_PREFIX, STORAGE_URL_PREFIX);
	if (operations.format && operations.format !== "origin") delete operations.format;
	url.search = operationsGenerator$3(operations);
	return toCanonicalUrlString(url).replace(STORAGE_URL_PREFIX, RENDER_URL_PREFIX);
};
var extract$3 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$3(parsedUrl);
	const isRender = isRenderUrl(parsedUrl);
	const imagePath = parsedUrl.pathname.replace(RENDER_URL_PREFIX, "").replace(STORAGE_URL_PREFIX, "");
	if (!isRender) return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
	return {
		src: `${parsedUrl.origin}${STORAGE_URL_PREFIX}${imagePath}`,
		operations
	};
};
var transform$3 = createExtractAndGenerate(extract$3, generate$3);
//#endregion
//#region node_modules/unpic/esm/src/providers/uploadcare.js
var uploadcareRegex = /^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)(?:\/(?<filename>[^\/]+)?)?/;
var { operationsGenerator: operationsGenerator$2, operationsParser: operationsParser$2 } = createOperationsHandlers({
	keyMap: {
		width: false,
		height: false
	},
	defaults: { format: "auto" },
	kvSeparator: "/",
	paramSeparator: "/-/"
});
var extract$2 = (url) => {
	const parsedUrl = toUrl(url);
	const match = uploadcareRegex.exec(parsedUrl.toString());
	if (!match || !match.groups) return null;
	const { host, uuid } = match.groups;
	const [, ...operationsString] = parsedUrl.pathname.split("/-/");
	const operations = operationsParser$2(operationsString.join("/-/") || "");
	if (operations.resize) {
		const [width, height] = operations.resize.split("x");
		if (width) operations.width = parseInt(width);
		if (height) operations.height = parseInt(height);
		delete operations.resize;
	}
	return {
		src: `https://${host}/${uuid}/`,
		operations,
		options: { host }
	};
};
var generate$2 = (src, operations, options = {}) => {
	const url = toUrl(src);
	const host = options.host || url.hostname;
	const match = uploadcareRegex.exec(url.toString());
	if (match?.groups) url.pathname = `/${match.groups.uuid}/`;
	operations.resize = operations.resize || `${operations.width ?? ""}x${operations.height ?? ""}`;
	delete operations.width;
	delete operations.height;
	const modifiers = addTrailingSlash(operationsGenerator$2(operations));
	url.hostname = host;
	url.pathname = stripTrailingSlash(url.pathname) + (modifiers ? `/-/${modifiers}` : "") + (match?.groups?.filename ?? "");
	return toCanonicalUrlString(url);
};
var transform$2 = createExtractAndGenerate(extract$2, generate$2);
//#endregion
//#region node_modules/unpic/esm/src/providers/wordpress.js
var { operationsGenerator: operationsGenerator$1, operationsParser: operationsParser$1 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h"
	},
	defaults: { crop: "1" }
});
var generate$1 = (src, operations) => {
	const url = toUrl(src);
	const { crop } = operations;
	if (typeof crop !== "undefined" && crop !== "0") operations.crop = crop ? "1" : "0";
	url.search = operationsGenerator$1(operations);
	return toCanonicalUrlString(url);
};
var extract$1 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$1(parsedUrl);
	if (operations.crop !== void 0) operations.crop = operations.crop === "1";
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$1 = createExtractAndGenerate(extract$1, generate$1);
//#endregion
//#region node_modules/unpic/esm/src/providers/wsrv.js
var { operationsGenerator, operationsParser } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "output",
		quality: "q"
	},
	defaults: { fit: "cover" }
});
var extract = (url) => {
	const urlObj = toUrl(url);
	const srcParam = urlObj.searchParams.get("url");
	if (!srcParam) return null;
	let src = srcParam;
	if (!src.startsWith("http://") && !src.startsWith("https://")) src = "https://" + src;
	urlObj.searchParams.delete("url");
	const operations = operationsParser(urlObj);
	return {
		src,
		operations
	};
};
var generate = (src, operations) => {
	const url = new URL("https://wsrv.nl/");
	const cleanSrc = (typeof src === "string" ? src : src.toString()).replace(/^https?:\/\//, "");
	url.searchParams.set("url", cleanSrc);
	const params = operationsGenerator(operations);
	const searchParams = new URLSearchParams(params);
	for (const [key, value] of searchParams) if (key !== "url") url.searchParams.set(key, value);
	return toCanonicalUrlString(url);
};
var transform = createExtractAndGenerate(extract, generate);
//#endregion
//#region node_modules/unpic/esm/src/transform.js
var transformerMap = {
	appwrite: transform$27,
	astro: transform$26,
	"builder.io": transform$25,
	bunny: transform$24,
	cloudflare: transform$23,
	cloudflare_images: transform$22,
	cloudimage: transform$21,
	cloudinary: transform$20,
	contentful: transform$19,
	contentstack: transform$18,
	directus: transform$17,
	hygraph: transform$16,
	imageengine: transform$15,
	imagekit: transform$14,
	imgix: transform$13,
	ipx: transform$12,
	keycdn: transform$11,
	"kontent.ai": transform$10,
	netlify: transform$9,
	nextjs: transform$7,
	scene7: transform$6,
	shopify: transform$5,
	storyblok: transform$4,
	supabase: transform$3,
	uploadcare: transform$2,
	vercel: transform$8,
	wordpress: transform$1,
	wsrv: transform
};
/**
* Returns a transformer function if the given CDN is supported
*/
function getTransformerForCdn(cdn) {
	if (!cdn) return;
	return transformerMap[cdn];
}
//#endregion
//#region node_modules/@unpic/core/dist/auto.mjs
function transformProps({ cdn, fallback, operations = {}, options, ...props }) {
	cdn ??= getProviderForUrl(props.src) || fallback;
	if (!cdn) return props;
	const transformer = getTransformerForCdn(cdn);
	if (!transformer) return props;
	return transformBaseImageProps({
		...props,
		operations: operations?.[cdn],
		options: options?.[cdn],
		transformer
	});
}
function transformSourceProps({ cdn, fallback, operations, options, ...props }) {
	cdn ??= getProviderForUrl(props.src) || fallback;
	if (!cdn) return props;
	const transformer = getTransformerForCdn(cdn);
	if (!transformer) return props;
	return transformBaseSourceProps({
		...props,
		operations: operations?.[cdn],
		options: options?.[cdn],
		transformer
	});
}
//#endregion
//#region node_modules/@unpic/react/dist/chunk-SNIEDJZS.mjs
var Image$1 = React$1.forwardRef(function Image2(props, ref) {
	return /* @__PURE__ */ jsx("img", {
		...camelizeProps(transformProps(props)),
		ref
	});
});
React$1.forwardRef(function Source2(props, ref) {
	return /* @__PURE__ */ jsx("source", {
		...camelizeProps(transformSourceProps(props)),
		ref
	});
});
//#endregion
//#region node_modules/vinext/dist/shims/image.js
/**
* next/image shim
*
* Translates Next.js Image props to @unpic/react Image component.
* @unpic/react auto-detects CDN from URL and uses native transforms.
* For local images (relative paths), routes through `/_vinext/image`
* for server-side optimization (resize, format negotiation, quality).
*
* Remote images are validated against `images.remotePatterns` and
* `images.domains` from next.config.js. Unmatched URLs are blocked
* in production and warn in development, matching Next.js behavior.
*/
/**
* Image config injected at build time via Vite define.
* Serialized as JSON — parsed once at module level.
*/
var __imageRemotePatterns = (() => {
	try {
		return JSON.parse("[{\"protocol\":\"https\",\"hostname\":\"avatars.githubusercontent.com\"},{\"protocol\":\"https\",\"hostname\":\"github.com\"}]");
	} catch {
		return [];
	}
})();
var __imageDomains = (() => {
	try {
		return JSON.parse("[]");
	} catch {
		return [];
	}
})();
var __hasImageConfig = __imageRemotePatterns.length > 0 || __imageDomains.length > 0;
var __imageDeviceSizes = (() => {
	try {
		return JSON.parse("[640,750,828,1080,1200,1920,2048,3840]");
	} catch {
		return [
			640,
			750,
			828,
			1080,
			1200,
			1920,
			2048,
			3840
		];
	}
})();
/**
* Validate that a remote URL is allowed by the configured remote patterns.
* Returns true if the URL is allowed, false otherwise.
*
* When no remotePatterns/domains are configured, all remote URLs are allowed
* (backwards-compatible — user hasn't opted into restriction).
*
* When patterns ARE configured, only matching URLs are allowed.
* In development, non-matching URLs produce a console warning.
* In production, non-matching URLs are blocked (src replaced with empty string).
*/
function validateRemoteUrl(src) {
	if (!__hasImageConfig) return { allowed: true };
	let url;
	try {
		url = new URL(src, "http://n");
	} catch {
		return {
			allowed: false,
			reason: `Invalid URL: ${src}`
		};
	}
	if (hasRemoteMatch(__imageDomains, __imageRemotePatterns, url)) return { allowed: true };
	return {
		allowed: false,
		reason: `Image URL "${src}" is not configured in images.remotePatterns or images.domains in next.config.js. See: https://nextjs.org/docs/messages/next-image-unconfigured-host`
	};
}
/**
* Sanitize a blurDataURL to prevent CSS injection.
*
* A crafted data URL containing `)` can break out of the `url()` CSS function,
* allowing injection of arbitrary CSS properties or rules. Characters like `{`,
* `}`, and `\` can also assist in crafting injection payloads.
*
* This validates the URL starts with `data:image/` and rejects characters that
* could escape the `url()` context. Semicolons are allowed since they're part
* of valid data URLs (`data:image/png;base64,...`) and harmless inside `url()`.
*
* Returns undefined for invalid URLs, which causes the blur placeholder to be
* skipped gracefully.
*/
function sanitizeBlurDataURL(url) {
	if (!url.startsWith("data:image/")) return void 0;
	if (/[)(}{\\'"\n\r]/.test(url)) return void 0;
	return url;
}
/**
* Determine if a src is a remote URL (CDN-optimizable) or local.
*/
function isRemoteUrl(src) {
	return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//");
}
/**
* Responsive image widths matching Next.js's device sizes config.
* These are the breakpoints used for srcSet generation.
* Configurable via `images.deviceSizes` in next.config.js.
*/
var RESPONSIVE_WIDTHS = __imageDeviceSizes;
/**
* Build a `/_vinext/image` optimization URL.
*
* In production (Cloudflare Workers), the worker intercepts this path and uses
* the Images binding to resize/transcode on the fly. In dev, the Vite dev
* server handles it as a passthrough (serves the original file).
*/
function imageOptimizationUrl(src, width, quality = 75) {
	return `/_vinext/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}
/**
* Generate a srcSet string for responsive images.
*
* Each width points to the `/_vinext/image` optimization endpoint so the
* server can resize and transcode the image. Only includes widths that are
* <= 2x the original image width to avoid pointless upscaling.
*/
function generateSrcSet(src, originalWidth, quality = 75) {
	const widths = RESPONSIVE_WIDTHS.filter((w) => w <= originalWidth * 2);
	if (widths.length === 0) return `${imageOptimizationUrl(src, originalWidth, quality)} ${originalWidth}w`;
	return widths.map((w) => `${imageOptimizationUrl(src, w, quality)} ${w}w`).join(", ");
}
var Image = forwardRef(function Image({ src: srcProp, alt, width, height, fill, priority, quality, placeholder, blurDataURL, loader, sizes, className, style, onLoad, onLoadingComplete, unoptimized: _unoptimized, overrideSrc: _overrideSrc, loading, ...rest }, ref) {
	const handleLoad = onLoadingComplete ? (e) => {
		onLoad?.(e);
		onLoadingComplete(e.currentTarget);
	} : onLoad;
	const src = typeof srcProp === "string" ? srcProp : srcProp.src;
	const imgWidth = width ?? (typeof srcProp === "object" ? srcProp.width : void 0);
	const imgHeight = height ?? (typeof srcProp === "object" ? srcProp.height : void 0);
	const imgBlurDataURL = blurDataURL ?? (typeof srcProp === "object" ? srcProp.blurDataURL : void 0);
	if (loader) return /* @__PURE__ */ jsx("img", {
		ref,
		src: loader({
			src,
			width: imgWidth ?? 0,
			quality: quality ?? 75
		}),
		alt,
		width: fill ? void 0 : imgWidth,
		height: fill ? void 0 : imgHeight,
		loading: priority ? "eager" : loading ?? "lazy",
		decoding: "async",
		sizes,
		className,
		onLoad: handleLoad,
		style: fill ? {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			objectFit: "cover",
			...style
		} : style,
		...rest
	});
	if (isRemoteUrl(src)) {
		const validation = validateRemoteUrl(src);
		if (!validation.allowed) {
			console.error(`[next/image] ${validation.reason}`);
			return null;
		}
		const sanitizedBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
		const bg = placeholder === "blur" && sanitizedBlur ? `url(${sanitizedBlur})` : void 0;
		if (fill) return /* @__PURE__ */ jsx(Image$1, {
			src,
			alt,
			layout: "fullWidth",
			priority,
			sizes,
			className,
			background: bg,
			onLoad: handleLoad
		});
		if (imgWidth && imgHeight) return /* @__PURE__ */ jsx(Image$1, {
			src,
			alt,
			width: imgWidth,
			height: imgHeight,
			layout: "constrained",
			priority,
			sizes,
			className,
			background: bg,
			onLoad: handleLoad
		});
	}
	const imgQuality = quality ?? 75;
	const isSvg = src.endsWith(".svg");
	const skipOptimization = _unoptimized === true || isSvg && true;
	const srcSet = imgWidth && !fill && !skipOptimization ? generateSrcSet(src, imgWidth, imgQuality) : imgWidth && !fill ? RESPONSIVE_WIDTHS.filter((w) => w <= imgWidth * 2).map((w) => `${src} ${w}w`).join(", ") || `${src} ${imgWidth}w` : void 0;
	const optimizedSrc = skipOptimization ? src : imgWidth ? imageOptimizationUrl(src, imgWidth, imgQuality) : imageOptimizationUrl(src, RESPONSIVE_WIDTHS[0], imgQuality);
	const sanitizedLocalBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
	const blurStyle = placeholder === "blur" && sanitizedLocalBlur ? {
		backgroundImage: `url(${sanitizedLocalBlur})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	} : void 0;
	return /* @__PURE__ */ jsx("img", {
		ref,
		src: optimizedSrc,
		alt,
		width: fill ? void 0 : imgWidth,
		height: fill ? void 0 : imgHeight,
		loading: priority ? "eager" : loading ?? "lazy",
		fetchPriority: priority ? "high" : void 0,
		decoding: "async",
		srcSet,
		sizes: sizes ?? (fill ? "100vw" : void 0),
		className,
		"data-nimg": fill ? "fill" : "1",
		onLoad: handleLoad,
		style: fill ? {
			position: "absolute",
			inset: 0,
			width: "100%",
			height: "100%",
			objectFit: "cover",
			...blurStyle,
			...style
		} : {
			...blurStyle,
			...style
		},
		...rest
	});
});
//#endregion
//#region context/BookmarkContext.tsx
function reducer(state, action) {
	switch (action.type) {
		case "ADD": return { bookmarks: [...state.bookmarks, action.payload] };
		case "REMOVE": return { bookmarks: state.bookmarks.filter((b) => b.id !== action.payload) };
		case "LOAD": return { bookmarks: action.payload };
		default: return state;
	}
}
var BookmarkContext = createContext(null);
function BookmarkProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, { bookmarks: [] });
	useEffect(() => {
		try {
			const stored = localStorage.getItem("bookmarks");
			if (stored) dispatch({
				type: "LOAD",
				payload: JSON.parse(stored)
			});
		} catch {}
	}, []);
	useEffect(() => {
		localStorage.setItem("bookmarks", JSON.stringify(state.bookmarks));
	}, [state.bookmarks]);
	const add = (b) => dispatch({
		type: "ADD",
		payload: b
	});
	const remove = (id) => dispatch({
		type: "REMOVE",
		payload: id
	});
	const isBookmarked = (id) => state.bookmarks.some((b) => b.id === id);
	return /* @__PURE__ */ jsx(BookmarkContext.Provider, {
		value: {
			bookmarks: state.bookmarks,
			add,
			remove,
			isBookmarked
		},
		children
	});
}
function useBookmarkContext() {
	const ctx = useContext(BookmarkContext);
	if (!ctx) throw new Error("useBookmarkContext must be used within BookmarkProvider");
	return ctx;
}
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var mergeClasses = (...classes) => classes.filter((className, index, array) => {
	return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toCamelCase = (string) => string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase());
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var toPascalCase = (string) => {
	const camelCase = toCamelCase(string);
	return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
//#endregion
//#region node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var defaultAttributes = {
	xmlns: "http://www.w3.org/2000/svg",
	width: 24,
	height: 24,
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: 2,
	strokeLinecap: "round",
	strokeLinejoin: "round"
};
//#endregion
//#region node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var hasA11yProp = (props) => {
	for (const prop in props) if (prop.startsWith("aria-") || prop === "role" || prop === "title") return true;
	return false;
};
//#endregion
//#region node_modules/lucide-react/dist/esm/Icon.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Icon = forwardRef(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref) => createElement("svg", {
	ref,
	...defaultAttributes,
	width: size,
	height: size,
	stroke: color,
	strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
	className: mergeClasses("lucide", className),
	...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
	...rest
}, [...iconNode.map(([tag, attrs]) => createElement(tag, attrs)), ...Array.isArray(children) ? children : [children]]));
//#endregion
//#region node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
* @license lucide-react v0.577.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var createLucideIcon = (iconName, iconNode) => {
	const Component = forwardRef(({ className, ...props }, ref) => createElement(Icon, {
		ref,
		iconNode,
		className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
		...props
	}));
	Component.displayName = toPascalCase(iconName);
	return Component;
};
var Bookmark = createLucideIcon("bookmark", [["path", {
	d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
	key: "oz39mx"
}]]);
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
var GitFork = createLucideIcon("git-fork", [
	["circle", {
		cx: "12",
		cy: "18",
		r: "3",
		key: "1mpf1b"
	}],
	["circle", {
		cx: "6",
		cy: "6",
		r: "3",
		key: "1lh9wr"
	}],
	["circle", {
		cx: "18",
		cy: "6",
		r: "3",
		key: "1h7g24"
	}],
	["path", {
		d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",
		key: "1uq4wg"
	}],
	["path", {
		d: "M12 12v3",
		key: "158kv8"
	}]
]);
var Github = createLucideIcon("github", [["path", {
	d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
	key: "tonef"
}], ["path", {
	d: "M9 18c-4.51 2-5-2-7-2",
	key: "9comsn"
}]]);
var Menu = createLucideIcon("menu", [
	["path", {
		d: "M4 5h16",
		key: "1tepv9"
	}],
	["path", {
		d: "M4 12h16",
		key: "1lakjw"
	}],
	["path", {
		d: "M4 19h16",
		key: "1djgab"
	}]
]);
var Search = createLucideIcon("search", [["path", {
	d: "m21 21-4.34-4.34",
	key: "14j7rj"
}], ["circle", {
	cx: "11",
	cy: "11",
	r: "8",
	key: "4ej97u"
}]]);
var Star = createLucideIcon("star", [["path", {
	d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
	key: "r04s7s"
}]]);
var X = createLucideIcon("x", [["path", {
	d: "M18 6 6 18",
	key: "1bl5f8"
}], ["path", {
	d: "m6 6 12 12",
	key: "d8bk6v"
}]]);
//#endregion
//#region app/bookmarks/BookmarksClient.tsx
function BookmarksClient() {
	const { bookmarks, remove } = useBookmarkContext();
	if (bookmarks.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "text-center py-20",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-5xl mb-4",
				children: "🔖"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-xl font-semibold mb-2 text-slate-900",
				children: "No bookmarks yet"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-slate-500 mb-8",
				children: "Save users and repos by clicking the bookmark icon."
			}),
			/* @__PURE__ */ jsx(Link, {
				href: "/",
				className: "text-slate-400 hover:text-blue-600 transition text-sm",
				children: "← Search users"
			})
		]
	});
	const users = bookmarks.filter((b) => b.type === "user");
	const repos = bookmarks.filter((b) => b.type === "repo");
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-4xl mx-auto px-4 py-10",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-bold mb-8 text-slate-900",
				children: "Bookmarks"
			}),
			users.length > 0 && /* @__PURE__ */ jsxs("section", {
				className: "mb-10",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-lg font-semibold mb-4 text-slate-700",
					children: "Users"
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
					children: users.map((b) => /* @__PURE__ */ jsxs("div", {
						className: "bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 shadow-sm",
						children: [
							b.avatar_url && /* @__PURE__ */ jsx(Image, {
								src: b.avatar_url,
								alt: b.login ?? "",
								width: 48,
								height: 48,
								className: "rounded-xl ring-1 ring-slate-200"
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsx(Link, {
									href: `/users/${b.login}`,
									className: "font-semibold text-slate-900 hover:text-blue-600 transition truncate block",
									children: b.login
								}), /* @__PURE__ */ jsxs("p", {
									className: "text-xs text-slate-400",
									children: ["@", b.login]
								})]
							}),
							/* @__PURE__ */ jsx("button", {
								onClick: () => remove(b.id),
								className: "text-slate-300 hover:text-red-400 transition flex-shrink-0",
								title: "Remove bookmark",
								children: /* @__PURE__ */ jsx(Bookmark, { className: "w-4 h-4 fill-current" })
							})
						]
					}, b.id))
				})]
			}),
			repos.length > 0 && /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "text-lg font-semibold mb-4 text-slate-700",
				children: "Repositories"
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
				children: repos.map((b) => /* @__PURE__ */ jsxs("div", {
					className: "bg-white border border-slate-200 rounded-2xl p-5 shadow-sm",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ jsx("a", {
							href: b.html_url,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "font-semibold text-slate-900 hover:text-blue-600 transition truncate block text-sm",
							children: b.full_name
						}), /* @__PURE__ */ jsx("button", {
							onClick: () => remove(b.id),
							className: "text-slate-300 hover:text-red-400 transition flex-shrink-0",
							title: "Remove bookmark",
							children: /* @__PURE__ */ jsx(Bookmark, { className: "w-4 h-4 fill-current" })
						})]
					}), b.description && /* @__PURE__ */ jsx("p", {
						className: "text-slate-500 text-xs mt-1 line-clamp-2",
						children: b.description
					})]
				}, b.id))
			})] })
		]
	});
}
//#endregion
//#region components/ErrorState.tsx
function ErrorState({ message = "Something went wrong.", onRetry }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "text-center py-20",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-5xl mb-4",
				children: "⚠️"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-red-400 text-lg mb-6",
				children: message
			}),
			onRetry && /* @__PURE__ */ jsx("button", {
				onClick: onRetry,
				className: "px-6 py-3 rounded-xl bg-zinc-800 border border-zinc-700 hover:border-zinc-400 transition text-sm font-medium",
				children: "Try Again"
			})
		]
	});
}
//#endregion
//#region app/error.tsx
function GlobalError({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return /* @__PURE__ */ jsx(ErrorState, {
		message: "Something went wrong.",
		onRetry: reset
	});
}
//#endregion
//#region app/users/[username]/error.tsx
function UserError({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return /* @__PURE__ */ jsx(ErrorState, {
		message: "Failed to load user profile.",
		onRetry: reset
	});
}
//#endregion
//#region app/users/[username]/repos/[repo]/error.tsx
function RepoError({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return /* @__PURE__ */ jsx(ErrorState, {
		message: "Failed to load repository.",
		onRetry: reset
	});
}
//#endregion
//#region app/users/[username]/repos/error.tsx
function ReposError({ error, reset }) {
	useEffect(() => {
		console.error(error);
	}, [error]);
	return /* @__PURE__ */ jsx(ErrorState, {
		message: "Failed to load repositories.",
		onRetry: reset
	});
}
//#endregion
//#region app/users/[username]/repos/ReposClient.tsx
var PER_PAGE = 12;
function getLanguageColor(lang) {
	return {
		TypeScript: "bg-blue-500",
		JavaScript: "bg-yellow-400",
		Python: "bg-green-500",
		Rust: "bg-orange-500",
		Go: "bg-cyan-500",
		Java: "bg-red-500",
		"C++": "bg-pink-500",
		C: "bg-purple-500",
		Ruby: "bg-rose-500",
		Swift: "bg-orange-400",
		Kotlin: "bg-violet-500",
		CSS: "bg-indigo-500",
		HTML: "bg-orange-500",
		Shell: "bg-slate-400"
	}[lang] || "bg-slate-400";
}
function ReposClient({ repos, username }) {
	const [sort, setSort] = useState("stars");
	const [language, setLanguage] = useState("all");
	const [page, setPage] = useState(1);
	const languages = useMemo(() => {
		const langs = repos.map((r) => r.language).filter((l) => !!l);
		return ["all", ...Array.from(new Set(langs)).sort()];
	}, [repos]);
	const filtered = useMemo(() => {
		let result = [...repos];
		if (language !== "all") result = result.filter((r) => r.language === language);
		switch (sort) {
			case "stars":
				result.sort((a, b) => b.stargazers_count - a.stargazers_count);
				break;
			case "forks":
				result.sort((a, b) => b.forks_count - a.forks_count);
				break;
			case "updated":
				result.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
				break;
			case "name":
				result.sort((a, b) => a.name.localeCompare(b.name));
				break;
		}
		return result;
	}, [
		repos,
		sort,
		language
	]);
	const totalPages = Math.ceil(filtered.length / PER_PAGE);
	const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
	if (repos.length === 0) return /* @__PURE__ */ jsx("p", {
		className: "text-slate-400 text-center py-20",
		children: "No public repositories found."
	});
	return /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "flex flex-wrap gap-3 mb-6",
			children: [
				/* @__PURE__ */ jsxs("select", {
					value: sort,
					onChange: (e) => {
						setSort(e.target.value);
						setPage(1);
					},
					className: "bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition shadow-sm",
					children: [
						/* @__PURE__ */ jsx("option", {
							value: "stars",
							children: "Stars ↓"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "forks",
							children: "Forks ↓"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "updated",
							children: "Updated ↓"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "name",
							children: "Name A–Z"
						})
					]
				}),
				/* @__PURE__ */ jsx("select", {
					value: language,
					onChange: (e) => {
						setLanguage(e.target.value);
						setPage(1);
					},
					className: "bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition shadow-sm",
					children: languages.map((l) => /* @__PURE__ */ jsx("option", {
						value: l,
						children: l === "all" ? "All Languages" : l
					}, l))
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "ml-auto text-sm text-slate-400 self-center",
					children: [
						filtered.length,
						" repo",
						filtered.length !== 1 ? "s" : ""
					]
				})
			]
		}),
		paginated.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "text-slate-400 text-center py-20",
			children: "No repositories match your filters."
		}) : /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
			children: paginated.map((repo) => /* @__PURE__ */ jsxs(Link, {
				href: `/users/${username}/repos/${repo.name}`,
				className: "bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col gap-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-start justify-between gap-2",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-semibold text-slate-900 truncate",
							children: repo.name
						}), repo.fork && /* @__PURE__ */ jsx("span", {
							className: "text-xs text-slate-400 border border-slate-200 rounded-full px-2 py-0.5 flex-shrink-0",
							children: "fork"
						})]
					}),
					repo.description && /* @__PURE__ */ jsx("p", {
						className: "text-sm text-slate-500 line-clamp-2 leading-relaxed",
						children: repo.description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 text-xs text-slate-400 mt-auto",
						children: [
							repo.language && /* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ jsx("span", { className: `w-2.5 h-2.5 rounded-full ${getLanguageColor(repo.language)}` }), repo.language]
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ jsx(Star, { className: "w-3.5 h-3.5" }),
									" ",
									repo.stargazers_count.toLocaleString()
								]
							}),
							/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ jsx(GitFork, { className: "w-3.5 h-3.5" }),
									" ",
									repo.forks_count.toLocaleString()
								]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "ml-auto text-slate-300",
								children: new Date(repo.updated_at).toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
									year: "numeric"
								})
							})
						]
					}),
					repo.topics?.length > 0 && /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-1.5",
						children: repo.topics.slice(0, 3).map((topic) => /* @__PURE__ */ jsx("span", {
							className: "px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs border border-blue-100",
							children: topic
						}, topic))
					})
				]
			}, repo.id))
		}),
		totalPages > 1 && /* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-center gap-4 mt-10",
			children: [
				/* @__PURE__ */ jsxs("button", {
					onClick: () => setPage((p) => Math.max(1, p - 1)),
					disabled: page === 1,
					className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition text-sm font-medium shadow-sm disabled:opacity-40 disabled:cursor-not-allowed",
					children: [/* @__PURE__ */ jsx(ChevronLeft, { className: "w-4 h-4" }), " Previous"]
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "text-slate-400 text-sm",
					children: [
						"Page ",
						/* @__PURE__ */ jsx("span", {
							className: "text-slate-700 font-semibold",
							children: page
						}),
						" of ",
						/* @__PURE__ */ jsx("span", {
							className: "text-slate-700 font-semibold",
							children: totalPages
						})
					]
				}),
				/* @__PURE__ */ jsxs("button", {
					onClick: () => setPage((p) => Math.min(totalPages, p + 1)),
					disabled: page === totalPages,
					className: "flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition text-sm font-medium shadow-sm disabled:opacity-40 disabled:cursor-not-allowed",
					children: ["Next ", /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" })]
				})
			]
		})
	] });
}
//#endregion
//#region components/BookmarkButton.tsx
function BookmarkButton({ bookmark }) {
	const { add, remove, isBookmarked } = useBookmarkContext();
	const saved = isBookmarked(bookmark.id);
	return /* @__PURE__ */ jsxs("button", {
		onClick: () => saved ? remove(bookmark.id) : add(bookmark),
		className: `flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-medium transition ${saved ? "bg-yellow-500/10 border-yellow-500/50 text-yellow-400 hover:border-red-400 hover:text-red-400" : "bg-zinc-800 border-zinc-700 hover:border-zinc-400 text-zinc-300"}`,
		children: [/* @__PURE__ */ jsx(Bookmark, { className: `w-4 h-4 ${saved ? "fill-current" : ""}` }), saved ? "Bookmarked" : "Bookmark"]
	});
}
//#endregion
//#region components/Navbar.tsx
function Navbar() {
	const pathname = usePathname();
	const { bookmarks } = useBookmarkContext();
	const [menuOpen, setMenuOpen] = useState(false);
	const links = [
		{
			href: "/",
			label: "Search"
		},
		{
			href: "/trending",
			label: "Trending"
		},
		{
			href: "/bookmarks",
			label: "Bookmarks",
			icon: true
		},
		{
			href: "/about",
			label: "About"
		}
	];
	return /* @__PURE__ */ jsxs("nav", {
		className: "sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					href: "/",
					className: "flex items-center gap-2.5 group",
					children: [/* @__PURE__ */ jsx("div", {
						className: "w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition",
						children: /* @__PURE__ */ jsx(Github, { className: "w-4 h-4 text-white" })
					}), /* @__PURE__ */ jsx("span", {
						className: "text-slate-900 font-semibold text-base tracking-tight",
						children: "GitHub Explorer"
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden md:flex gap-1 items-center",
					children: links.map(({ href, label, icon }) => /* @__PURE__ */ jsxs(Link, {
						href,
						className: `flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${pathname === href ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`,
						children: [
							icon && /* @__PURE__ */ jsx(Bookmark, { className: "w-3.5 h-3.5" }),
							label,
							icon && bookmarks.length > 0 && /* @__PURE__ */ jsx("span", {
								className: "bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full leading-none ml-0.5",
								children: bookmarks.length
							})
						]
					}, href))
				}),
				/* @__PURE__ */ jsx("button", {
					className: "md:hidden text-slate-500 hover:text-slate-900 transition p-2 rounded-lg hover:bg-slate-100",
					onClick: () => setMenuOpen(!menuOpen),
					children: menuOpen ? /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsx(Menu, { className: "w-5 h-5" })
				})
			]
		}), menuOpen && /* @__PURE__ */ jsx("div", {
			className: "md:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-1",
			children: links.map(({ href, label, icon }) => /* @__PURE__ */ jsxs(Link, {
				href,
				onClick: () => setMenuOpen(false),
				className: `flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all ${pathname === href ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"}`,
				children: [
					icon && /* @__PURE__ */ jsx(Bookmark, { className: "w-4 h-4" }),
					label,
					icon && bookmarks.length > 0 && /* @__PURE__ */ jsx("span", {
						className: "bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full leading-none",
						children: bookmarks.length
					})
				]
			}, href))
		})]
	});
}
//#endregion
//#region hooks/useDebounce.ts
function useDebounce(value, delay = 400) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
		return () => clearTimeout(timer);
	}, [value, delay]);
	return debouncedValue;
}
//#endregion
//#region components/SearchInput.tsx
function SearchInput({ defaultValue = "" }) {
	const router = useRouter();
	const [query, setQuery] = useState(useSearchParams().get("q") || defaultValue);
	const debouncedQuery = useDebounce(query, 400);
	useEffect(() => {
		if (debouncedQuery.length > 2) router.push(`/?q=${encodeURIComponent(debouncedQuery)}`);
		else if (debouncedQuery === "") router.push("/");
	}, [debouncedQuery, router]);
	return /* @__PURE__ */ jsxs("div", {
		className: "relative w-full",
		children: [
			/* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" }),
			/* @__PURE__ */ jsx("input", {
				type: "text",
				value: query,
				onChange: (e) => setQuery(e.target.value),
				placeholder: "Search GitHub users (e.g. torvalds, vercel)",
				className: "w-full bg-white border border-slate-200 rounded-2xl py-4 pl-11 pr-11 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all shadow-sm"
			}),
			query && /* @__PURE__ */ jsx("button", {
				onClick: () => setQuery(""),
				className: "absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors",
				children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
			})
		]
	});
}
//#endregion
//#region node_modules/vinext/dist/shims/error-boundary.js
/**
* Generic ErrorBoundary used to wrap route segments with error.tsx.
* This must be a client component since error boundaries use
* componentDidCatch / getDerivedStateFromError.
*/
var ErrorBoundary = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}
	static getDerivedStateFromError(error) {
		if (error && typeof error === "object" && "digest" in error) {
			const digest = String(error.digest);
			if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;") || digest.startsWith("NEXT_REDIRECT;")) throw error;
		}
		return { error };
	}
	reset = () => {
		this.setState({ error: null });
	};
	render() {
		if (this.state.error) {
			const FallbackComponent = this.props.fallback;
			return /* @__PURE__ */ jsx(FallbackComponent, {
				error: this.state.error,
				reset: this.reset
			});
		}
		return this.props.children;
	}
};
/**
* Inner class component that catches notFound() errors and renders the
* not-found.tsx fallback. Resets when the pathname changes (client navigation)
* so a previous notFound() doesn't permanently stick.
*
* The ErrorBoundary above re-throws notFound errors so they propagate up to this
* boundary. This must be placed above the ErrorBoundary in the component tree.
*/
var NotFoundBoundaryInner = class extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			notFound: false,
			previousPathname: props.pathname
		};
	}
	static getDerivedStateFromProps(props, state) {
		if (props.pathname !== state.previousPathname && state.notFound) return {
			notFound: false,
			previousPathname: props.pathname
		};
		return {
			notFound: state.notFound,
			previousPathname: props.pathname
		};
	}
	static getDerivedStateFromError(error) {
		if (error && typeof error === "object" && "digest" in error) {
			const digest = String(error.digest);
			if (digest === "NEXT_NOT_FOUND" || digest.startsWith("NEXT_HTTP_ERROR_FALLBACK;404")) return { notFound: true };
		}
		throw error;
	}
	render() {
		if (this.state.notFound) return this.props.fallback;
		return this.props.children;
	}
};
/**
* Wrapper that reads the current pathname and passes it to the inner class
* component. This enables automatic reset on client-side navigation.
*/
function NotFoundBoundary({ fallback, children }) {
	return /* @__PURE__ */ jsx(NotFoundBoundaryInner, {
		pathname: usePathname(),
		fallback,
		children
	});
}
//#endregion
//#region node_modules/vinext/dist/shims/layout-segment-context.js
/**
* Layout segment context provider.
*
* This is a "use client" module because it needs React's createContext
* and useContext, which are NOT available in the react-server condition.
* The RSC entry renders this as a client component boundary.
*
* The context is shared with navigation.ts via getLayoutSegmentContext()
* to avoid creating separate contexts in different modules.
*/
/**
* Wraps children with the layout segment context.
* Each layout in the App Router tree wraps its children with this provider,
* passing the remaining route tree segments below that layout level.
* Segments include route groups and resolved dynamic param values.
*/
function LayoutSegmentProvider({ childSegments, children }) {
	const ctx = getLayoutSegmentContext();
	if (!ctx) return children;
	return createElement(ctx.Provider, { value: childSegments }, children);
}
//#endregion
//#region \0virtual:vite-rsc/client-references/group/facade:\0virtual:vinext-rsc-entry
var export_cbd92ab4df0f = { default: BookmarksClient };
var export_a9bbde40cf2d = { default: GlobalError };
var export_56bba47f6a03 = { default: UserError };
var export_51d01d201116 = { default: RepoError };
var export_f0c285f7e4e6 = { default: ReposError };
var export_5022a32106f3 = { default: ReposClient };
var export_bb5b54ebadbb = { default: BookmarkButton };
var export_e7b4dc739728 = { default: Navbar };
var export_bccf86c93377 = { default: SearchInput };
var export_0974d08b1f02 = { BookmarkProvider };
var export_f29e6e234fea = {
	ErrorBoundary,
	NotFoundBoundary
};
var export_0deffcb8ffd7 = { LayoutSegmentProvider };
var export_c2747888630f = { default: Link };
//#endregion
export { export_0974d08b1f02, export_0deffcb8ffd7, export_5022a32106f3, export_51d01d201116, export_56bba47f6a03, export_a9bbde40cf2d, export_bb5b54ebadbb, export_bccf86c93377, export_c2747888630f, export_cbd92ab4df0f, export_e7b4dc739728, export_f0c285f7e4e6, export_f29e6e234fea };
