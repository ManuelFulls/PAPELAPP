module.exports = {

"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    return `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RequestCookies: null,
    ResponseCookies: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RequestCookies: function() {
        return _cookies.RequestCookies;
    },
    ResponseCookies: function() {
        return _cookies.ResponseCookies;
    }
});
const _cookies = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [rsc] (ecmascript)"); //# sourceMappingURL=cookies.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/utils.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    fromNodeOutgoingHttpHeaders: null,
    splitCookiesString: null,
    toNodeOutgoingHttpHeaders: null,
    validateURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    fromNodeOutgoingHttpHeaders: function() {
        return fromNodeOutgoingHttpHeaders;
    },
    splitCookiesString: function() {
        return splitCookiesString;
    },
    toNodeOutgoingHttpHeaders: function() {
        return toNodeOutgoingHttpHeaders;
    },
    validateURL: function() {
        return validateURL;
    }
});
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === "undefined") continue;
            if (typeof v === "number") {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === "set-cookie") {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
} //# sourceMappingURL=utils.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parsePath", {
    enumerable: true,
    get: function() {
        return parsePath;
    }
});
function parsePath(path) {
    const hashIndex = path.indexOf("#");
    const queryIndex = path.indexOf("?");
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : "",
            hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
    }
    return {
        pathname: path,
        query: "",
        hash: ""
    };
} //# sourceMappingURL=parse-path.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pathHasPrefix", {
    enumerable: true,
    get: function() {
        return pathHasPrefix;
    }
});
const _parsepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [rsc] (ecmascript)");
function pathHasPrefix(path, prefix) {
    if (typeof path !== "string") {
        return false;
    }
    const { pathname } = (0, _parsepath.parsePath)(path);
    return pathname === prefix || pathname.startsWith(prefix + "/");
} //# sourceMappingURL=path-has-prefix.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removePathPrefix", {
    enumerable: true,
    get: function() {
        return removePathPrefix;
    }
});
const _pathhasprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [rsc] (ecmascript)");
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, _pathhasprefix.pathHasPrefix)(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith("/")) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizeLocalePath", {
    enumerable: true,
    get: function() {
        return normalizeLocalePath;
    }
});
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split("/");
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join("/") || "/";
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getNextPathnameInfo", {
    enumerable: true,
    get: function() {
        return getNextPathnameInfo;
    }
});
const _normalizelocalepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js [rsc] (ecmascript)");
const _removepathprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js [rsc] (ecmascript)");
const _pathhasprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [rsc] (ecmascript)");
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
    };
    if (basePath && (0, _pathhasprefix.pathHasPrefix)(info.pathname, basePath)) {
        info.pathname = (0, _removepathprefix.removePathPrefix)(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== "index" ? "/" + paths.slice(1).join("/") : "/";
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, _normalizelocalepath.normalizeLocalePath)(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, _normalizelocalepath.normalizeLocalePath)(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/get-hostname.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getHostname", {
    enumerable: true,
    get: function() {
        return getHostname;
    }
});
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(":", 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathPrefix", {
    enumerable: true,
    get: function() {
        return addPathPrefix;
    }
});
const _parsepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [rsc] (ecmascript)");
function addPathPrefix(path, prefix) {
    if (!path.startsWith("/") || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-locale.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addLocale", {
    enumerable: true,
    get: function() {
        return addLocale;
    }
});
const _addpathprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [rsc] (ecmascript)");
const _pathhasprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [rsc] (ecmascript)");
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/api")) return path;
        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addPathSuffix", {
    enumerable: true,
    get: function() {
        return addPathSuffix;
    }
});
const _parsepath = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [rsc] (ecmascript)");
function addPathSuffix(path, suffix) {
    if (!path.startsWith("/") || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeTrailingSlash", {
    enumerable: true,
    get: function() {
        return removeTrailingSlash;
    }
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, "") || "/";
} //# sourceMappingURL=remove-trailing-slash.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "formatNextPathnameInfo", {
    enumerable: true,
    get: function() {
        return formatNextPathnameInfo;
    }
});
const _removetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [rsc] (ecmascript)");
const _addpathprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [rsc] (ecmascript)");
const _addpathsuffix = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js [rsc] (ecmascript)");
const _addlocale = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/add-locale.js [rsc] (ecmascript)");
function formatNextPathnameInfo(info) {
    let pathname = (0, _addlocale.addLocale)(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, _removetrailingslash.removeTrailingSlash)(pathname);
    }
    if (info.buildId) {
        pathname = (0, _addpathsuffix.addPathSuffix)((0, _addpathprefix.addPathPrefix)(pathname, "/_next/data/" + info.buildId), info.pathname === "/" ? "index.json" : ".json");
    }
    pathname = (0, _addpathprefix.addPathPrefix)(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith("/") ? (0, _addpathsuffix.addPathSuffix)(pathname, "/") : pathname : (0, _removetrailingslash.removeTrailingSlash)(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "detectDomainLocale", {
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
});
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(":", 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/next-url.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NextURL", {
    enumerable: true,
    get: function() {
        return NextURL;
    }
});
const _detectdomainlocale = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js [rsc] (ecmascript)");
const _formatnextpathnameinfo = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js [rsc] (ecmascript)");
const _gethostname = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/get-hostname.js [rsc] (ecmascript)");
const _getnextpathnameinfo = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js [rsc] (ecmascript)");
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, "localhost"));
}
const Internal = Symbol("NextURLInternal");
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === "object" && "pathname" in baseOrOpts || typeof baseOrOpts === "string") {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ""
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, _getnextpathnameinfo.getNextPathnameInfo)(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, _gethostname.getHostname)(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, _detectdomainlocale.detectDomainLocale)((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? "";
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, _formatnextpathnameinfo.formatNextPathnameInfo)({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? "";
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith("/") ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/spec-extension/response.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NextResponse", {
    enumerable: true,
    get: function() {
        return NextResponse;
    }
});
const _nexturl = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/next-url.js [rsc] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/utils.js [rsc] (ecmascript)");
const _cookies = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/spec-extension/cookies.js [rsc] (ecmascript)");
const INTERNALS = Symbol("internal response");
const REDIRECTS = new Set([
    301,
    302,
    303,
    307,
    308
]);
function handleMiddlewareField(init, headers) {
    var _init_request;
    if (init == null ? void 0 : (_init_request = init.request) == null ? void 0 : _init_request.headers) {
        if (!(init.request.headers instanceof Headers)) {
            throw new Error("request.headers must be an instance of Headers");
        }
        const keys = [];
        for (const [key, value] of init.request.headers){
            headers.set("x-middleware-request-" + key, value);
            keys.push(key);
        }
        headers.set("x-middleware-override-headers", keys.join(","));
    }
}
class NextResponse extends Response {
    constructor(body, init = {}){
        super(body, init);
        this[INTERNALS] = {
            cookies: new _cookies.ResponseCookies(this.headers),
            url: init.url ? new _nexturl.NextURL(init.url, {
                headers: (0, _utils.toNodeOutgoingHttpHeaders)(this.headers),
                nextConfig: init.nextConfig
            }) : undefined
        };
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return {
            cookies: this.cookies,
            url: this.url,
            // rest of props come from Response
            body: this.body,
            bodyUsed: this.bodyUsed,
            headers: Object.fromEntries(this.headers),
            ok: this.ok,
            redirected: this.redirected,
            status: this.status,
            statusText: this.statusText,
            type: this.type
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    static json(body, init) {
        const response = Response.json(body, init);
        return new NextResponse(response.body, response);
    }
    static redirect(url, init) {
        const status = typeof init === "number" ? init : (init == null ? void 0 : init.status) ?? 307;
        if (!REDIRECTS.has(status)) {
            throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');
        }
        const initObj = typeof init === "object" ? init : {};
        const headers = new Headers(initObj == null ? void 0 : initObj.headers);
        headers.set("Location", (0, _utils.validateURL)(url));
        return new NextResponse(null, {
            ...initObj,
            headers,
            status
        });
    }
    static rewrite(destination, init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-rewrite", (0, _utils.validateURL)(destination));
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
    static next(init) {
        const headers = new Headers(init == null ? void 0 : init.headers);
        headers.set("x-middleware-next", "1");
        handleMiddlewareField(init, headers);
        return new NextResponse(null, {
            ...init,
            headers
        });
    }
} //# sourceMappingURL=response.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/exports/next-response.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

// This file is for modularized imports for next/server to get fully-treeshaking.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _response.NextResponse;
    }
});
const _response = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/web/spec-extension/response.js [rsc] (ecmascript)"); //# sourceMappingURL=next-response.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/client/components/maybe-postpone.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "maybePostpone": ()=>maybePostpone
});
function maybePostpone(staticGenerationStore, reason) {
    // If we aren't performing a static generation or we aren't using PPR then
    // we don't need to postpone.
    if (!staticGenerationStore.isStaticGeneration || !staticGenerationStore.experimental.ppr) {
        return;
    }
    if (!staticGenerationStore.postpone) {
        throw new Error("Invariant: PPR is enabled but the postpone API is unavailable");
    }
    // Keep track of if the postpone API has been called.
    staticGenerationStore.postponeWasTriggered = true;
    staticGenerationStore.postpone("This page needs to bail out of prerendering at this point because it used " + reason + ". " + "React throws this special object to indicate where. It should not be caught by " + "your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error");
} //# sourceMappingURL=maybe-postpone.js.map

})()),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/lib/picocolors.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

// ISC License
// Copyright (c) 2021 Alexey Raspopov, Kostiantyn Denysov, Anton Verinov
// Permission to use, copy, modify, and/or distribute this software for any
// purpose with or without fee is hereby granted, provided that the above
// copyright notice and this permission notice appear in all copies.
// THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
// WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
// ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
// WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
// ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
// OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
//
// https://github.com/alexeyraspopov/picocolors/blob/b6261487e7b81aaab2440e397a356732cad9e342/picocolors.js#L1
__turbopack_esm__({
    "bgBlack": ()=>bgBlack,
    "bgBlue": ()=>bgBlue,
    "bgCyan": ()=>bgCyan,
    "bgGreen": ()=>bgGreen,
    "bgMagenta": ()=>bgMagenta,
    "bgRed": ()=>bgRed,
    "bgWhite": ()=>bgWhite,
    "bgYellow": ()=>bgYellow,
    "black": ()=>black,
    "blue": ()=>blue,
    "bold": ()=>bold,
    "cyan": ()=>cyan,
    "dim": ()=>dim,
    "gray": ()=>gray,
    "green": ()=>green,
    "hidden": ()=>hidden,
    "inverse": ()=>inverse,
    "italic": ()=>italic,
    "magenta": ()=>magenta,
    "purple": ()=>purple,
    "red": ()=>red,
    "reset": ()=>reset,
    "strikethrough": ()=>strikethrough,
    "underline": ()=>underline,
    "white": ()=>white,
    "yellow": ()=>yellow
});
var _globalThis;
const { env, stdout } = ((_globalThis = globalThis) == null ? void 0 : _globalThis.process) ?? {};
const enabled = env && !env.NO_COLOR && (env.FORCE_COLOR || (stdout == null ? void 0 : stdout.isTTY) && !env.CI && env.TERM !== "dumb");
const replaceClose = (str, close, replace, index)=>{
    const start = str.substring(0, index) + replace;
    const end = str.substring(index + close.length);
    const nextIndex = end.indexOf(close);
    return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
};
const formatter = (open, close, replace = open)=>(input)=>{
        const string = "" + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
    };
const reset = enabled ? (s)=>`\x1b[0m${s}\x1b[0m` : String;
const bold = enabled ? formatter("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m") : String;
const dim = enabled ? formatter("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m") : String;
const italic = enabled ? formatter("\x1b[3m", "\x1b[23m") : String;
const underline = enabled ? formatter("\x1b[4m", "\x1b[24m") : String;
const inverse = enabled ? formatter("\x1b[7m", "\x1b[27m") : String;
const hidden = enabled ? formatter("\x1b[8m", "\x1b[28m") : String;
const strikethrough = enabled ? formatter("\x1b[9m", "\x1b[29m") : String;
const black = enabled ? formatter("\x1b[30m", "\x1b[39m") : String;
const red = enabled ? formatter("\x1b[31m", "\x1b[39m") : String;
const green = enabled ? formatter("\x1b[32m", "\x1b[39m") : String;
const yellow = enabled ? formatter("\x1b[33m", "\x1b[39m") : String;
const blue = enabled ? formatter("\x1b[34m", "\x1b[39m") : String;
const magenta = enabled ? formatter("\x1b[35m", "\x1b[39m") : String;
const purple = enabled ? formatter("\x1b[38;2;173;127;168m", "\x1b[39m") : String;
const cyan = enabled ? formatter("\x1b[36m", "\x1b[39m") : String;
const white = enabled ? formatter("\x1b[37m", "\x1b[39m") : String;
const gray = enabled ? formatter("\x1b[90m", "\x1b[39m") : String;
const bgBlack = enabled ? formatter("\x1b[40m", "\x1b[49m") : String;
const bgRed = enabled ? formatter("\x1b[41m", "\x1b[49m") : String;
const bgGreen = enabled ? formatter("\x1b[42m", "\x1b[49m") : String;
const bgYellow = enabled ? formatter("\x1b[43m", "\x1b[49m") : String;
const bgBlue = enabled ? formatter("\x1b[44m", "\x1b[49m") : String;
const bgMagenta = enabled ? formatter("\x1b[45m", "\x1b[49m") : String;
const bgCyan = enabled ? formatter("\x1b[46m", "\x1b[49m") : String;
const bgWhite = enabled ? formatter("\x1b[47m", "\x1b[49m") : String; //# sourceMappingURL=picocolors.js.map

})()),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/output/log.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "bootstrap": ()=>bootstrap,
    "error": ()=>error,
    "event": ()=>event,
    "info": ()=>info,
    "prefixes": ()=>prefixes,
    "ready": ()=>ready,
    "trace": ()=>trace,
    "wait": ()=>wait,
    "warn": ()=>warn,
    "warnOnce": ()=>warnOnce
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/lib/picocolors.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const prefixes = {
    wait: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["white"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["bold"]("○")),
    error: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["red"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["bold"]("⨯")),
    warn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["yellow"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["bold"]("⚠")),
    ready: "▲",
    info: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["white"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["bold"](" ")),
    event: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["green"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["bold"]("✓")),
    trace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["magenta"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$picocolors$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["bold"]("\xbb"))
};
const LOGGING_METHOD = {
    log: "log",
    warn: "warn",
    error: "error"
};
function prefixedLog(prefixType, ...message) {
    if ((message[0] === "" || message[0] === undefined) && message.length === 1) {
        message.shift();
    }
    const consoleMethod = prefixType in LOGGING_METHOD ? LOGGING_METHOD[prefixType] : "log";
    const prefix = prefixes[prefixType];
    // If there's no message, don't print the prefix but a new line
    if (message.length === 0) {
        console[consoleMethod]("");
    } else {
        console[consoleMethod](" " + prefix, ...message);
    }
}
function bootstrap(...message) {
    console.log(" ", ...message);
}
function wait(...message) {
    prefixedLog("wait", ...message);
}
function error(...message) {
    prefixedLog("error", ...message);
}
function warn(...message) {
    prefixedLog("warn", ...message);
}
function ready(...message) {
    prefixedLog("ready", ...message);
}
function info(...message) {
    prefixedLog("info", ...message);
}
function event(...message) {
    prefixedLog("event", ...message);
}
function trace(...message) {
    prefixedLog("trace", ...message);
}
const warnOnceMessages = new Set();
function warnOnce(...message) {
    if (!warnOnceMessages.has(message[0])) {
        warnOnceMessages.add(message.join(" "));
        warn(...message);
    }
} //# sourceMappingURL=log.js.map

})()),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/lib/constants.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "APP_DIR_ALIAS": ()=>APP_DIR_ALIAS,
    "CACHE_ONE_YEAR": ()=>CACHE_ONE_YEAR,
    "DOT_NEXT_ALIAS": ()=>DOT_NEXT_ALIAS,
    "ESLINT_DEFAULT_DIRS": ()=>ESLINT_DEFAULT_DIRS,
    "ESLINT_PROMPT_VALUES": ()=>ESLINT_PROMPT_VALUES,
    "GSP_NO_RETURNED_VALUE": ()=>GSP_NO_RETURNED_VALUE,
    "GSSP_COMPONENT_MEMBER_ERROR": ()=>GSSP_COMPONENT_MEMBER_ERROR,
    "GSSP_NO_RETURNED_VALUE": ()=>GSSP_NO_RETURNED_VALUE,
    "INSTRUMENTATION_HOOK_FILENAME": ()=>INSTRUMENTATION_HOOK_FILENAME,
    "MIDDLEWARE_FILENAME": ()=>MIDDLEWARE_FILENAME,
    "MIDDLEWARE_LOCATION_REGEXP": ()=>MIDDLEWARE_LOCATION_REGEXP,
    "NEXT_BODY_SUFFIX": ()=>NEXT_BODY_SUFFIX,
    "NEXT_CACHE_IMPLICIT_TAG_ID": ()=>NEXT_CACHE_IMPLICIT_TAG_ID,
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER": ()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER,
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER": ()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER,
    "NEXT_CACHE_SOFT_TAGS_HEADER": ()=>NEXT_CACHE_SOFT_TAGS_HEADER,
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH": ()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH,
    "NEXT_CACHE_TAGS_HEADER": ()=>NEXT_CACHE_TAGS_HEADER,
    "NEXT_CACHE_TAG_MAX_LENGTH": ()=>NEXT_CACHE_TAG_MAX_LENGTH,
    "NEXT_DATA_SUFFIX": ()=>NEXT_DATA_SUFFIX,
    "NEXT_DID_POSTPONE_HEADER": ()=>NEXT_DID_POSTPONE_HEADER,
    "NEXT_META_SUFFIX": ()=>NEXT_META_SUFFIX,
    "NEXT_QUERY_PARAM_PREFIX": ()=>NEXT_QUERY_PARAM_PREFIX,
    "NON_STANDARD_NODE_ENV": ()=>NON_STANDARD_NODE_ENV,
    "PAGES_DIR_ALIAS": ()=>PAGES_DIR_ALIAS,
    "PRERENDER_REVALIDATE_HEADER": ()=>PRERENDER_REVALIDATE_HEADER,
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER": ()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER,
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT": ()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT,
    "ROOT_DIR_ALIAS": ()=>ROOT_DIR_ALIAS,
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS": ()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS,
    "RSC_ACTION_ENCRYPTION_ALIAS": ()=>RSC_ACTION_ENCRYPTION_ALIAS,
    "RSC_ACTION_PROXY_ALIAS": ()=>RSC_ACTION_PROXY_ALIAS,
    "RSC_ACTION_VALIDATE_ALIAS": ()=>RSC_ACTION_VALIDATE_ALIAS,
    "RSC_MOD_REF_PROXY_ALIAS": ()=>RSC_MOD_REF_PROXY_ALIAS,
    "RSC_PREFETCH_SUFFIX": ()=>RSC_PREFETCH_SUFFIX,
    "RSC_SUFFIX": ()=>RSC_SUFFIX,
    "SERVER_PROPS_EXPORT_ERROR": ()=>SERVER_PROPS_EXPORT_ERROR,
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT": ()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT,
    "SERVER_PROPS_SSG_CONFLICT": ()=>SERVER_PROPS_SSG_CONFLICT,
    "SERVER_RUNTIME": ()=>SERVER_RUNTIME,
    "SSG_FALLBACK_EXPORT_ERROR": ()=>SSG_FALLBACK_EXPORT_ERROR,
    "SSG_GET_INITIAL_PROPS_CONFLICT": ()=>SSG_GET_INITIAL_PROPS_CONFLICT,
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR": ()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR,
    "UNSTABLE_REVALIDATE_RENAME_ERROR": ()=>UNSTABLE_REVALIDATE_RENAME_ERROR,
    "WEBPACK_LAYERS": ()=>WEBPACK_LAYERS,
    "WEBPACK_RESOURCE_QUERIES": ()=>WEBPACK_RESOURCE_QUERIES
});
const NEXT_QUERY_PARAM_PREFIX = "nxtP";
const PRERENDER_REVALIDATE_HEADER = "x-prerender-revalidate";
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = "x-prerender-revalidate-if-generated";
const NEXT_DID_POSTPONE_HEADER = "x-nextjs-postponed";
const RSC_PREFETCH_SUFFIX = ".prefetch.rsc";
const RSC_SUFFIX = ".rsc";
const NEXT_DATA_SUFFIX = ".json";
const NEXT_META_SUFFIX = ".meta";
const NEXT_BODY_SUFFIX = ".body";
const NEXT_CACHE_TAGS_HEADER = "x-next-cache-tags";
const NEXT_CACHE_SOFT_TAGS_HEADER = "x-next-cache-soft-tags";
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = "x-next-revalidated-tags";
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = "x-next-revalidate-tag-token";
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = "_N_T_";
const CACHE_ONE_YEAR = 31536000;
const MIDDLEWARE_FILENAME = "middleware";
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = "instrumentation";
const PAGES_DIR_ALIAS = "private-next-pages";
const DOT_NEXT_ALIAS = "private-dot-next";
const ROOT_DIR_ALIAS = "private-next-root-dir";
const APP_DIR_ALIAS = "private-next-app-dir";
const RSC_MOD_REF_PROXY_ALIAS = "private-next-rsc-mod-ref-proxy";
const RSC_ACTION_VALIDATE_ALIAS = "private-next-rsc-action-validate";
const RSC_ACTION_PROXY_ALIAS = "private-next-rsc-action-proxy";
const RSC_ACTION_ENCRYPTION_ALIAS = "private-next-rsc-action-encryption";
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = "private-next-rsc-action-client-wrapper";
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?";
const GSSP_NO_RETURNED_VALUE = "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?";
const UNSTABLE_REVALIDATE_RENAME_ERROR = "The `unstable_revalidate` property is available for general use.\n" + "Please use `revalidate` instead.";
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    "app",
    "pages",
    "components",
    "lib",
    "src"
];
const ESLINT_PROMPT_VALUES = [
    {
        title: "Strict",
        recommended: true,
        config: {
            extends: "next/core-web-vitals"
        }
    },
    {
        title: "Base",
        config: {
            extends: "next"
        }
    },
    {
        title: "Cancel",
        config: null
    }
];
const SERVER_RUNTIME = {
    edge: "edge",
    experimentalEdge: "experimental-edge",
    nodejs: "nodejs"
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: "shared",
    /**
   * React Server Components layer (rsc).
   */ reactServerComponents: "rsc",
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: "ssr",
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: "action-browser",
    /**
   * The layer for the API routes.
   */ api: "api",
    /**
   * The layer for the middleware code.
   */ middleware: "middleware",
    /**
   * The layer for assets on the edge.
   */ edgeAsset: "edge-asset",
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: "app-pages-browser",
    /**
   * The server bundle layer for metadata routes.
   */ appMetadataRoute: "app-metadata-route",
    /**
   * The layer for the server bundle for App Route handlers.
   */ appRouteHandler: "app-route-handler"
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        server: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler
        ],
        nonClientServerTarget: [
            // plus middleware and pages api
            WEBPACK_LAYERS_NAMES.middleware,
            WEBPACK_LAYERS_NAMES.api
        ],
        app: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.appMetadataRoute,
            WEBPACK_LAYERS_NAMES.appRouteHandler,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: "__next_edge_ssr_entry__",
    metadata: "__next_metadata__",
    metadataRoute: "__next_metadata_route__",
    metadataImageMeta: "__next_metadata_image_meta__"
};
;
 //# sourceMappingURL=constants.js.map

})()),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : global;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/lib/trace/constants.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ __turbopack_esm__({
    "AppRenderSpan": ()=>AppRenderSpan,
    "AppRouteRouteHandlersSpan": ()=>AppRouteRouteHandlersSpan,
    "BaseServerSpan": ()=>BaseServerSpan,
    "LoadComponentsSpan": ()=>LoadComponentsSpan,
    "NextNodeServerSpan": ()=>NextNodeServerSpan,
    "NextServerSpan": ()=>NextServerSpan,
    "NextVanillaSpanAllowlist": ()=>NextVanillaSpanAllowlist,
    "NodeSpan": ()=>NodeSpan,
    "RenderSpan": ()=>RenderSpan,
    "ResolveMetadataSpan": ()=>ResolveMetadataSpan,
    "RouterSpan": ()=>RouterSpan,
    "StartServerSpan": ()=>StartServerSpan
});
var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
const NextVanillaSpanAllowlist = [
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport"
];
;
 //# sourceMappingURL=constants.js.map

})()),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/lib/trace/tracer.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "SpanKind": ()=>SpanKind,
    "SpanStatusCode": ()=>SpanStatusCode,
    "getTracer": ()=>getTracer
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/lib/trace/constants.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    try {
        api = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js [rsc] (ecmascript)");
    } catch (err) {
        api = __turbopack_require__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/@opentelemetry/api/index.js [rsc] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
const isPromise = (p)=>{
    return p !== null && typeof p === "object" && typeof p.then === "function";
};
const closeSpanWithError = (span, error)=>{
    if ((error == null ? void 0 : error.bubble) === true) {
        span.setAttribute("next.bubble", true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey("next.rootSpanId");
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer("next.js", "0.0.1");
    }
    getContext() {
        return context;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(req, fn) {
        if (context.active() !== ROOT_CONTEXT) {
            return fn();
        }
        const remoteContext = propagation.extract(ROOT_CONTEXT, req.headers);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === "function" ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(type) && process.env.NEXT_OTEL_VERBOSE !== "1" || options.hideSpan) {
            return fn();
        }
        const spanName = options.spanName ?? type;
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            "next.span_name": spanName,
            "next.span_type": type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if (isPromise(result)) {
                        result.then(()=>span.end(), (err)=>closeSpanWithError(span, err)).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(name) && process.env.NEXT_OTEL_VERBOSE !== "1") {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === "function" && typeof fn === "function") {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === "function") {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map

})()),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/lib/patch-fetch.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "addImplicitTags": ()=>addImplicitTags,
    "patchFetch": ()=>patchFetch,
    "validateTags": ()=>validateTags
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/lib/trace/constants.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/lib/trace/tracer.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/lib/constants.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/output/log.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$maybe$2d$postpone$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/client/components/maybe-postpone.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const isEdgeRuntime = ("TURBOPACK compile-time value", "nodejs") === "edge";
function validateTags(tags, description) {
    const validTags = [];
    const invalidTags = [];
    for (const tag of tags){
        if (typeof tag !== "string") {
            invalidTags.push({
                tag,
                reason: "invalid type, must be a string"
            });
        } else if (tag.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_LENGTH"]) {
            invalidTags.push({
                tag,
                reason: `exceeded max length of ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_LENGTH"]}`
            });
        } else {
            validTags.push(tag);
        }
    }
    if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags){
            console.log(`tag: "${tag}" ${reason}`);
        }
    }
    return validTags;
}
const getDerivedTags = (pathname)=>{
    const derivedTags = [
        `/layout`
    ];
    // we automatically add the current path segments as tags
    // for revalidatePath handling
    if (pathname.startsWith("/")) {
        const pathnameParts = pathname.split("/");
        for(let i = 1; i < pathnameParts.length + 1; i++){
            let curPathname = pathnameParts.slice(0, i).join("/");
            if (curPathname) {
                // all derived tags other than the page are layout tags
                if (!curPathname.endsWith("/page") && !curPathname.endsWith("/route")) {
                    curPathname = `${curPathname}${!curPathname.endsWith("/") ? "/" : ""}layout`;
                }
                derivedTags.push(curPathname);
            }
        }
    }
    return derivedTags;
};
function addImplicitTags(staticGenerationStore) {
    const newTags = [];
    const { pagePath, urlPathname } = staticGenerationStore;
    if (!Array.isArray(staticGenerationStore.tags)) {
        staticGenerationStore.tags = [];
    }
    if (pagePath) {
        const derivedTags = getDerivedTags(pagePath);
        for (let tag of derivedTags){
            var _staticGenerationStore_tags;
            tag = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_IMPLICIT_TAG_ID"]}${tag}`;
            if (!((_staticGenerationStore_tags = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags.includes(tag))) {
                staticGenerationStore.tags.push(tag);
            }
            newTags.push(tag);
        }
    }
    if (urlPathname) {
        var _staticGenerationStore_tags1;
        const parsedPathname = new URL(urlPathname, "http://n").pathname;
        const tag = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_IMPLICIT_TAG_ID"]}${parsedPathname}`;
        if (!((_staticGenerationStore_tags1 = staticGenerationStore.tags) == null ? void 0 : _staticGenerationStore_tags1.includes(tag))) {
            staticGenerationStore.tags.push(tag);
        }
        newTags.push(tag);
    }
    return newTags;
}
function trackFetchMetric(staticGenerationStore, ctx) {
    if (!staticGenerationStore) return;
    if (!staticGenerationStore.fetchMetrics) {
        staticGenerationStore.fetchMetrics = [];
    }
    const dedupeFields = [
        "url",
        "status",
        "method"
    ];
    // don't add metric if one already exists for the fetch
    if (staticGenerationStore.fetchMetrics.some((metric)=>{
        return dedupeFields.every((field)=>metric[field] === ctx[field]);
    })) {
        return;
    }
    staticGenerationStore.fetchMetrics.push({
        url: ctx.url,
        cacheStatus: ctx.cacheStatus,
        cacheReason: ctx.cacheReason,
        status: ctx.status,
        method: ctx.method,
        start: ctx.start,
        end: Date.now(),
        idx: staticGenerationStore.nextFetchId || 0
    });
}
function patchFetch({ serverHooks, staticGenerationAsyncStorage }) {
    if (!globalThis._nextOriginalFetch) {
        globalThis._nextOriginalFetch = globalThis.fetch;
    }
    if (globalThis.fetch.__nextPatched) return;
    const { DynamicServerError } = serverHooks;
    const originFetch = globalThis._nextOriginalFetch;
    globalThis.fetch = async (input, init)=>{
        var _init_method, _this;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = "";
            url.password = "";
        } catch  {
            // Error caused by malformed URL should be handled by native fetch
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? "";
        const fetchStart = Date.now();
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || "GET";
        // Do create a new span trace for internal fetches in the
        // non-verbose mode.
        const isInternal = ((_this = init == null ? void 0 : init.next) == null ? void 0 : _this.internal) === true;
        return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["getTracer"]().trace(isInternal ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].internalFetch : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["AppRenderSpan"].fetch, {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["SpanKind"].CLIENT,
            spanName: [
                "fetch",
                method,
                fetchUrl
            ].filter(Boolean).join(" "),
            attributes: {
                "http.url": fetchUrl,
                "http.method": method,
                "net.peer.name": url == null ? void 0 : url.hostname,
                "net.peer.port": (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _getRequestMeta;
            const staticGenerationStore = staticGenerationAsyncStorage.getStore() || (fetch.__nextGetStaticStore == null ? void 0 : fetch.__nextGetStaticStore.call(fetch));
            const isRequestInput = input && typeof input === "object" && typeof input.method === "string";
            const getRequestMeta = (field)=>{
                let value = isRequestInput ? input[field] : null;
                return value || (init == null ? void 0 : init[field]);
            };
            // If the staticGenerationStore is not available, we can't do any
            // special treatment of fetch, therefore fallback to the original
            // fetch implementation.
            if (!staticGenerationStore || isInternal || staticGenerationStore.isDraftMode) {
                return originFetch(input, init);
            }
            let revalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== "undefined" ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            // RequestInit doesn't keep extra fields e.g. next so it's
            // only available if init is used separate
            let curRevalidate = getNextField("revalidate");
            const tags = validateTags(getNextField("tags") || [], `fetch ${input.toString()}`);
            if (Array.isArray(tags)) {
                if (!staticGenerationStore.tags) {
                    staticGenerationStore.tags = [];
                }
                for (const tag of tags){
                    if (!staticGenerationStore.tags.includes(tag)) {
                        staticGenerationStore.tags.push(tag);
                    }
                }
            }
            const implicitTags = addImplicitTags(staticGenerationStore);
            const isOnlyCache = staticGenerationStore.fetchCache === "only-cache";
            const isForceCache = staticGenerationStore.fetchCache === "force-cache";
            const isDefaultCache = staticGenerationStore.fetchCache === "default-cache";
            const isDefaultNoStore = staticGenerationStore.fetchCache === "default-no-store";
            const isOnlyNoStore = staticGenerationStore.fetchCache === "only-no-store";
            const isForceNoStore = staticGenerationStore.fetchCache === "force-no-store";
            let _cache = getRequestMeta("cache");
            let cacheReason = "";
            if (typeof _cache === "string" && typeof curRevalidate !== "undefined") {
                // when providing fetch with a Request input, it'll automatically set a cache value of 'default'
                // we only want to warn if the user is explicitly setting a cache value
                if (!(isRequestInput && _cache === "default")) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__.warn(`fetch for ${fetchUrl} on ${staticGenerationStore.urlPathname} specified "cache: ${_cache}" and "revalidate: ${curRevalidate}", only one should be specified.`);
                }
                _cache = undefined;
            }
            if (_cache === "force-cache") {
                curRevalidate = false;
            } else if (_cache === "no-cache" || _cache === "no-store" || isForceNoStore || isOnlyNoStore) {
                curRevalidate = 0;
            }
            if (_cache === "no-cache" || _cache === "no-store") {
                cacheReason = `cache: ${_cache}`;
            }
            if (typeof curRevalidate === "number" || curRevalidate === false) {
                revalidate = curRevalidate;
            }
            const _headers = getRequestMeta("headers");
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === "function" ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get("authorization") || initHeaders.get("cookie");
            const isUnCacheableMethod = ![
                "get",
                "head"
            ].includes(((_getRequestMeta = getRequestMeta("method")) == null ? void 0 : _getRequestMeta.toLowerCase()) || "get");
            // if there are authorized headers or a POST method and
            // dynamic data usage was present above the tree we bail
            // e.g. if cookies() is used before an authed/POST fetch
            const autoNoCache = (hasUnCacheableHeader || isUnCacheableMethod) && staticGenerationStore.revalidate === 0;
            if (isForceNoStore) {
                cacheReason = "fetchCache = force-no-store";
            }
            if (isOnlyNoStore) {
                if (_cache === "force-cache" || typeof revalidate !== "undefined" && (revalidate === false || revalidate > 0)) {
                    throw new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`);
                }
                cacheReason = "fetchCache = only-no-store";
            }
            if (isOnlyCache && _cache === "no-store") {
                throw new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`);
            }
            if (isForceCache && (typeof curRevalidate === "undefined" || curRevalidate === 0)) {
                cacheReason = "fetchCache = force-cache";
                revalidate = false;
            }
            if (typeof revalidate === "undefined") {
                if (isDefaultCache) {
                    revalidate = false;
                    cacheReason = "fetchCache = default-cache";
                } else if (autoNoCache) {
                    revalidate = 0;
                    cacheReason = "auto no cache";
                } else if (isDefaultNoStore) {
                    revalidate = 0;
                    cacheReason = "fetchCache = default-no-store";
                } else {
                    cacheReason = "auto cache";
                    revalidate = typeof staticGenerationStore.revalidate === "boolean" || typeof staticGenerationStore.revalidate === "undefined" ? false : staticGenerationStore.revalidate;
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${revalidate}`;
            }
            if (// revalidate although if it occurs during build we do
            !autoNoCache && (typeof staticGenerationStore.revalidate === "undefined" || typeof revalidate === "number" && (staticGenerationStore.revalidate === false || typeof staticGenerationStore.revalidate === "number" && revalidate < staticGenerationStore.revalidate))) {
                // If enabled, we should bail out of static generation.
                if (revalidate === 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$maybe$2d$postpone$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["maybePostpone"](staticGenerationStore, "revalidate: 0");
                }
                staticGenerationStore.revalidate = revalidate;
            }
            const isCacheableRevalidate = typeof revalidate === "number" && revalidate > 0 || revalidate === false;
            let cacheKey;
            if (staticGenerationStore.incrementalCache && isCacheableRevalidate) {
                try {
                    cacheKey = await staticGenerationStore.incrementalCache.fetchCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const fetchIdx = staticGenerationStore.nextFetchId ?? 1;
            staticGenerationStore.nextFetchId = fetchIdx + 1;
            const normalizedRevalidate = typeof revalidate !== "number" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"] : revalidate;
            const doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                const requestInputFields = [
                    "cache",
                    "credentials",
                    "headers",
                    "integrity",
                    "keepalive",
                    "method",
                    "mode",
                    "redirect",
                    "referrer",
                    "referrerPolicy",
                    "window",
                    "duplex",
                    // don't pass through signal when revalidating
                    ...isStale ? [] : [
                        "signal"
                    ]
                ];
                if (isRequestInput) {
                    const reqInput = input;
                    const reqOptions = {
                        body: reqInput._ogBody || reqInput.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        reqOptions[field] = reqInput[field];
                    }
                    input = new Request(reqInput.url, reqOptions);
                } else if (init) {
                    const initialInit = init;
                    init = {
                        body: init._ogBody || init.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        init[field] = initialInit[field];
                    }
                }
                // add metadata to init without editing the original
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: "origin",
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale) {
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason: cacheReasonOverride || cacheReason,
                            cacheStatus: revalidate === 0 || cacheReasonOverride ? "skip" : "miss",
                            status: res.status,
                            method: clonedInit.method || "GET"
                        });
                    }
                    if (res.status === 200 && staticGenerationStore.incrementalCache && cacheKey && isCacheableRevalidate) {
                        const bodyBuffer = Buffer.from(await res.arrayBuffer());
                        try {
                            await staticGenerationStore.incrementalCache.set(cacheKey, {
                                kind: "FETCH",
                                data: {
                                    headers: Object.fromEntries(res.headers.entries()),
                                    body: bodyBuffer.toString("base64"),
                                    status: res.status,
                                    url: res.url
                                },
                                revalidate: normalizedRevalidate
                            }, {
                                fetchCache: true,
                                revalidate,
                                fetchUrl,
                                fetchIdx,
                                tags
                            });
                        } catch (err) {
                            console.warn(`Failed to set fetch cache`, input, err);
                        }
                        const response = new Response(bodyBuffer, {
                            headers: new Headers(res.headers),
                            status: res.status
                        });
                        Object.defineProperty(response, "url", {
                            value: res.url
                        });
                        return response;
                    }
                    return res;
                });
            };
            let handleUnlock = ()=>Promise.resolve();
            let cacheReasonOverride;
            if (cacheKey && staticGenerationStore.incrementalCache) {
                handleUnlock = await staticGenerationStore.incrementalCache.lock(cacheKey);
                const entry = staticGenerationStore.isOnDemandRevalidate ? null : await staticGenerationStore.incrementalCache.get(cacheKey, {
                    kindHint: "fetch",
                    revalidate,
                    fetchUrl,
                    fetchIdx,
                    tags,
                    softTags: implicitTags
                });
                if (entry) {
                    await handleUnlock();
                } else {
                    // in dev, incremental cache response will be null in case the browser adds `cache-control: no-cache` in the request headers
                    cacheReasonOverride = "cache-control: no-cache (hard refresh)";
                }
                if ((entry == null ? void 0 : entry.value) && entry.value.kind === "FETCH") {
                    // when stale and is revalidating we wait for fresh data
                    // so the revalidated entry has the updated data
                    if (!(staticGenerationStore.isRevalidate && entry.isStale)) {
                        if (entry.isStale) {
                            if (!staticGenerationStore.pendingRevalidates) {
                                staticGenerationStore.pendingRevalidates = [];
                            }
                            staticGenerationStore.pendingRevalidates.push(doOriginalFetch(true).catch(console.error));
                        }
                        const resData = entry.value.data;
                        trackFetchMetric(staticGenerationStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: "hit",
                            status: resData.status || 200,
                            method: (init == null ? void 0 : init.method) || "GET"
                        });
                        const response = new Response(Buffer.from(resData.body, "base64"), {
                            headers: resData.headers,
                            status: resData.status
                        });
                        Object.defineProperty(response, "url", {
                            value: entry.value.data.url
                        });
                        return response;
                    }
                }
            }
            if (staticGenerationStore.isStaticGeneration && init && typeof init === "object") {
                const { cache } = init;
                // Delete `cache` property as Cloudflare Workers will throw an error
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                }
                if (cache === "no-store") {
                    const dynamicUsageReason = `no-store fetch ${input}${staticGenerationStore.urlPathname ? ` ${staticGenerationStore.urlPathname}` : ""}`;
                    const err = new DynamicServerError(dynamicUsageReason);
                    staticGenerationStore.dynamicUsageErr = err;
                    staticGenerationStore.dynamicUsageStack = err.stack;
                    staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                    // If enabled, we should bail out of static generation.
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$maybe$2d$postpone$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["maybePostpone"](staticGenerationStore, dynamicUsageReason);
                    // PPR is not enabled, or React postpone is not available, we
                    // should set the revalidate to 0.
                    staticGenerationStore.revalidate = 0;
                }
                const hasNextConfig = "next" in init;
                const { next = {} } = init;
                if (typeof next.revalidate === "number" && (typeof staticGenerationStore.revalidate === "undefined" || typeof staticGenerationStore.revalidate === "number" && next.revalidate < staticGenerationStore.revalidate)) {
                    const forceDynamic = staticGenerationStore.forceDynamic;
                    if (!forceDynamic && next.revalidate === 0) {
                        const dynamicUsageReason = `revalidate: 0 fetch ${input}${staticGenerationStore.urlPathname ? ` ${staticGenerationStore.urlPathname}` : ""}`;
                        const err = new DynamicServerError(dynamicUsageReason);
                        staticGenerationStore.dynamicUsageErr = err;
                        staticGenerationStore.dynamicUsageStack = err.stack;
                        staticGenerationStore.dynamicUsageDescription = dynamicUsageReason;
                        // If enabled, we should bail out of static generation.
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$maybe$2d$postpone$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["maybePostpone"](staticGenerationStore, dynamicUsageReason);
                    }
                    if (!forceDynamic || next.revalidate !== 0) {
                        staticGenerationStore.revalidate = next.revalidate;
                    }
                }
                if (hasNextConfig) delete init.next;
            }
            return doOriginalFetch(false, cacheReasonOverride).finally(handleUnlock);
        });
    };
    globalThis.fetch.__nextGetStaticStore = ()=>{
        return staticGenerationAsyncStorage;
    };
    globalThis.fetch.__nextPatched = true;
} //# sourceMappingURL=patch-fetch.js.map

})()),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/future/route-kind.js [rsc] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "RouteKind": ()=>RouteKind
});
var RouteKind;
(function(RouteKind) {
    RouteKind[/**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ "PAGES"] = "PAGES";
    RouteKind[/**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ "PAGES_API"] = "PAGES_API";
    RouteKind[/**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ "APP_PAGE"] = "APP_PAGE";
    RouteKind[/**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ "APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {})); //# sourceMappingURL=route-kind.js.map

})()),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/future/route-modules/app-route/module.compiled.js [rsc] (ecmascript)": (function({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require }) { !function() {

if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time truthy", 1) {
        module.exports = __turbopack_external_require__("next/dist/compiled/next-server/app-route.runtime.dev.js");
    } else {
        "TURBOPACK unreachable";
    }
} //# sourceMappingURL=module.compiled.js.map

}.call(this) }),
"[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/build/templates/app-route.js/(INNER_APP_ROUTE)/[project]/src/app/favicon--route-entry.js [rsc] (ecmascript) (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "headerHooks": ()=>headerHooks,
    "originalPathname": ()=>originalPathname,
    "patchFetch": ()=>patchFetch,
    "requestAsyncStorage": ()=>requestAsyncStorage,
    "routeModule": ()=>routeModule,
    "serverHooks": ()=>serverHooks,
    "staticGenerationAsyncStorage": ()=>staticGenerationAsyncStorage,
    "staticGenerationBailout": ()=>staticGenerationBailout
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$route$2f$module$2e$compiled$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/future/route-modules/app-route/module.compiled.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$kind$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/future/route-kind.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@14.0.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/esm/server/lib/patch-fetch.js [rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2d2d$route$2d$entry$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/app/favicon--route-entry.js [rsc] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = "";
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$route$2f$module$2e$compiled$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["AppRouteRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$future$2f$route$2d$kind$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE,
        page: "/favicon.ico/route",
        pathname: "/favicon.ico",
        filename: "favicon--route-entry",
        bundlePath: ""
    },
    resolvedPagePath: "[project]/src/app/favicon--route-entry.js",
    nextConfigOutput,
    userland: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2d2d$route$2d$entry$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;
const originalPathname = "/favicon.ico/route";
function patchFetch() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$14$2e$0$2e$3_react$2d$dom$40$18$2e$2$2e$0_react$40$18$2e$2$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$patch$2d$fetch$2e$js__$5b$rsc$5d$__$28$ecmascript$29$__["patchFetch"]({
        serverHooks,
        staticGenerationAsyncStorage
    });
}
;
 //# sourceMappingURL=app-route.js.map

})()),

};

//# sourceMappingURL=eaf71_next_dist_686916._.js.map