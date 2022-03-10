!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("pdfjs-dist/build/pdf", [], t) : "object" == typeof exports ? exports["pdfjs-dist/build/pdf"] = t() : e["pdfjs-dist/build/pdf"] = e.pdfjsLib = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        function t(n) {
            if (r[n])
                return r[n].exports;
            var i = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(i.exports, i, i.exports, t),
            i.l = !0,
            i.exports
        }
        var r = {};
        return t.m = e,
        t.c = r,
        t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                configurable: !1,
                enumerable: !0,
                get: n
            })
        }
        ,
        t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e["default"]
            }
            : function() {
                return e
            }
            ;
            return t.d(r, "a", r),
            r
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 60)
    }([function(e, t, r) {
        "use strict";
        function n(e) {
            Number.isInteger(e) && (at = e)
        }
        function i() {
            return at
        }
        function a(e) {
            at >= rt.INFOS && console.log("Info: " + e)
        }
        function o(e) {
            at >= rt.WARNINGS && console.log("Warning: " + e)
        }
        function s(e) {
            console.log("Deprecated API usage: " + e)
        }
        function u(e) {
            throw new Error(e)
        }
        function l(e, t) {
            e || u(t)
        }
        function c(e, t) {
            try {
                var r = new URL(e);
                if (!r.origin || "null" === r.origin)
                    return !1
            } catch (n) {
                return !1
            }
            var i = new URL(t,r);
            return r.origin === i.origin
        }
        function h(e) {
            if (!e)
                return !1;
            switch (e.protocol) {
            case "http:":
            case "https:":
            case "ftp:":
            case "mailto:":
            case "tel:":
                return !0;
            default:
                return !1
            }
        }
        function d(e, t) {
            if (!e)
                return null;
            try {
                var r = t ? new URL(e,t) : new URL(e);
                if (h(r))
                    return r
            } catch (n) {}
            return null
        }
        function f(e, t, r) {
            return Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !1
            }),
            r
        }
        function p(e) {
            var t;
            return function() {
                return e && (t = Object.create(null),
                e(t),
                e = null),
                t
            }
        }
        function m(e) {
            return "string" != typeof e ? (o("The argument for removeNullCharacters must be a string."),
            e) : e.replace(bt, "")
        }
        function v(e) {
            l(null !== e && "object" === ("undefined" == typeof e ? "undefined" : G(e)) && void 0 !== e.length, "Invalid argument for bytesToString");
            var t = e.length
              , r = 8192;
            if (r > t)
                return String.fromCharCode.apply(null, e);
            for (var n = [], i = 0; t > i; i += r) {
                var a = Math.min(i + r, t)
                  , o = e.subarray(i, a);
                n.push(String.fromCharCode.apply(null, o))
            }
            return n.join("")
        }
        function g(e) {
            l("string" == typeof e, "Invalid argument for stringToBytes");
            for (var t = e.length, r = new Uint8Array(t), n = 0; t > n; ++n)
                r[n] = 255 & e.charCodeAt(n);
            return r
        }
        function b(e) {
            return void 0 !== e.length ? e.length : (l(void 0 !== e.byteLength),
            e.byteLength)
        }
        function _(e) {
            if (1 === e.length && e[0]instanceof Uint8Array)
                return e[0];
            var t, r, n, i = 0, a = e.length;
            for (t = 0; a > t; t++)
                r = e[t],
                n = b(r),
                i += n;
            var o = 0
              , s = new Uint8Array(i);
            for (t = 0; a > t; t++)
                r = e[t],
                r instanceof Uint8Array || (r = "string" == typeof r ? g(r) : new Uint8Array(r)),
                n = r.byteLength,
                s.set(r, o),
                o += n;
            return s
        }
        function y(e) {
            return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e)
        }
        function A(e) {
            return 0 >= e ? 0 : Math.ceil(Math.log2(e))
        }
        function S(e, t) {
            return e[t] << 24 >> 24
        }
        function w(e, t) {
            return e[t] << 8 | e[t + 1]
        }
        function C(e, t) {
            return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
        }
        function P() {
            var e = new Uint8Array(4);
            e[0] = 1;
            var t = new Uint32Array(e.buffer,0,1);
            return 1 === t[0]
        }
        function k() {
            try {
                return new Function(""),
                !0
            } catch (e) {
                return !1
            }
        }
        function R(e) {
            for (var t = e.dict, r = e.key, n = e.getArray, i = void 0 === n ? !1 : n, a = e.stopWhenFound, s = void 0 === a ? !0 : a, u = 100, l = 0, c = void 0; t; ) {
                var h = i ? t.getArray(r) : t.get(r);
                if (void 0 !== h) {
                    if (s)
                        return h;
                    c || (c = []),
                    c.push(h)
                }
                if (++l > u) {
                    o('getInheritableProperty: maximum loop count exceeded for "' + r + '"');
                    break
                }
                t = t.get("Parent")
            }
            return c
        }
        function x(e) {
            var t, r = e.length, n = [];
            if ("þ" === e[0] && "ÿ" === e[1])
                for (t = 2; r > t; t += 2)
                    n.push(String.fromCharCode(e.charCodeAt(t) << 8 | e.charCodeAt(t + 1)));
            else
                for (t = 0; r > t; ++t) {
                    var i = St[e.charCodeAt(t)];
                    n.push(i ? String.fromCharCode(i) : e.charAt(t))
                }
            return n.join("")
        }
        function T(e) {
            return decodeURIComponent(escape(e))
        }
        function E(e) {
            return unescape(encodeURIComponent(e))
        }
        function O(e) {
            for (var t in e)
                return !1;
            return !0
        }
        function j(e) {
            return "boolean" == typeof e
        }
        function I(e) {
            return "number" == typeof e
        }
        function F(e) {
            return "string" == typeof e
        }
        function L(e) {
            return "object" === ("undefined" == typeof e ? "undefined" : G(e)) && null !== e && void 0 !== e.byteLength
        }
        function M(e) {
            return 32 === e || 9 === e || 13 === e || 10 === e
        }
        function D() {
            var e = {};
            return e.promise = new Promise(function(t, r) {
                e.resolve = t,
                e.reject = r
            }
            ),
            e
        }
        function N(e, t) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return e ? new Promise(function(n) {
                n(e.apply(r, t))
            }
            ) : Promise.resolve(void 0)
        }
        function q(e) {
            if ("object" !== ("undefined" == typeof e ? "undefined" : G(e)))
                return e;
            switch (e.name) {
            case "AbortException":
                return new gt(e.message);
            case "MissingPDFException":
                return new ht(e.message);
            case "UnexpectedResponseException":
                return new dt(e.message,e.status);
            default:
                return new lt(e.message,e.details)
            }
        }
        function W(e) {
            return !(e instanceof Error) || e instanceof gt || e instanceof ht || e instanceof dt || e instanceof lt ? e : new lt(e.message,e.toString())
        }
        function U(e, t, r) {
            t ? e.resolve() : e.reject(r)
        }
        function B(e) {
            return Promise.resolve(e).catch(function() {})
        }
        function z(e, t, r) {
            var n = this;
            this.sourceName = e,
            this.targetName = t,
            this.comObj = r,
            this.callbackId = 1,
            this.streamId = 1,
            this.postMessageTransfers = !0,
            this.streamSinks = Object.create(null),
            this.streamControllers = Object.create(null);
            var i = this.callbacksCapabilities = Object.create(null)
              , a = this.actionHandler = Object.create(null);
            this._onComObjOnMessage = function(e) {
                var t = e.data;
                if (t.targetName === n.sourceName)
                    if (t.stream)
                        n._processStreamMessage(t);
                    else if (t.isReply) {
                        var o = t.callbackId;
                        if (!(t.callbackId in i))
                            throw new Error("Cannot resolve callback " + o);
                        var s = i[o];
                        delete i[o],
                        "error"in t ? s.reject(q(t.error)) : s.resolve(t.data)
                    } else {
                        if (!(t.action in a))
                            throw new Error("Unknown action from worker: " + t.action);
                        var u = a[t.action];
                        if (t.callbackId) {
                            var l = n.sourceName
                              , c = t.sourceName;
                            Promise.resolve().then(function() {
                                return u[0].call(u[1], t.data)
                            }).then(function(e) {
                                r.postMessage({
                                    sourceName: l,
                                    targetName: c,
                                    isReply: !0,
                                    callbackId: t.callbackId,
                                    data: e
                                })
                            }, function(e) {
                                r.postMessage({
                                    sourceName: l,
                                    targetName: c,
                                    isReply: !0,
                                    callbackId: t.callbackId,
                                    error: W(e)
                                })
                            })
                        } else
                            t.streamId ? n._createStreamSink(t) : u[0].call(u[1], t.data)
                    }
            }
            ,
            r.addEventListener("message", this._onComObjOnMessage)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.unreachable = t.warn = t.utf8StringToString = t.stringToUTF8String = t.stringToPDFString = t.stringToBytes = t.string32 = t.shadow = t.setVerbosityLevel = t.ReadableStream = t.removeNullCharacters = t.readUint32 = t.readUint16 = t.readInt8 = t.log2 = t.isEvalSupported = t.isLittleEndian = t.createValidAbsoluteUrl = t.isSameOrigin = t.isSpace = t.isString = t.isNum = t.isEmptyObj = t.isBool = t.isArrayBuffer = t.info = t.getVerbosityLevel = t.getLookupTableFactory = t.getInheritableProperty = t.deprecated = t.createObjectURL = t.createPromiseCapability = t.createBlob = t.bytesToString = t.assert = t.arraysToBytes = t.arrayByteLength = t.FormatError = t.XRefParseException = t.Util = t.UnknownErrorException = t.UnexpectedResponseException = t.TextRenderingMode = t.StreamType = t.PasswordResponses = t.PasswordException = t.PageViewport = t.NotImplementedException = t.NativeImageDecoding = t.MissingPDFException = t.MissingDataException = t.MessageHandler = t.InvalidPDFException = t.AbortException = t.CMapCompressionType = t.ImageKind = t.FontType = t.AnnotationType = t.AnnotationFlag = t.AnnotationFieldFlag = t.AnnotationBorderStyleType = t.UNSUPPORTED_FEATURES = t.VerbosityLevel = t.OPS = t.IDENTITY_MATRIX = t.FONT_IDENTITY_MATRIX = void 0;
        var G = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        r(61);
        var H = r(115)
          , X = [.001, 0, 0, .001, 0, 0]
          , Y = {
            NONE: "none",
            DECODE: "decode",
            DISPLAY: "display"
        }
          , V = {
            FILL: 0,
            STROKE: 1,
            FILL_STROKE: 2,
            INVISIBLE: 3,
            FILL_ADD_TO_PATH: 4,
            STROKE_ADD_TO_PATH: 5,
            FILL_STROKE_ADD_TO_PATH: 6,
            ADD_TO_PATH: 7,
            FILL_STROKE_MASK: 3,
            ADD_TO_PATH_FLAG: 4
        }
          , Q = {
            GRAYSCALE_1BPP: 1,
            RGB_24BPP: 2,
            RGBA_32BPP: 3
        }
          , K = {
            TEXT: 1,
            LINK: 2,
            FREETEXT: 3,
            LINE: 4,
            SQUARE: 5,
            CIRCLE: 6,
            POLYGON: 7,
            POLYLINE: 8,
            HIGHLIGHT: 9,
            UNDERLINE: 10,
            SQUIGGLY: 11,
            STRIKEOUT: 12,
            STAMP: 13,
            CARET: 14,
            INK: 15,
            POPUP: 16,
            FILEATTACHMENT: 17,
            SOUND: 18,
            MOVIE: 19,
            WIDGET: 20,
            SCREEN: 21,
            PRINTERMARK: 22,
            TRAPNET: 23,
            WATERMARK: 24,
            THREED: 25,
            REDACT: 26
        }
          , J = {
            INVISIBLE: 1,
            HIDDEN: 2,
            PRINT: 4,
            NOZOOM: 8,
            NOROTATE: 16,
            NOVIEW: 32,
            READONLY: 64,
            LOCKED: 128,
            TOGGLENOVIEW: 256,
            LOCKEDCONTENTS: 512
        }
          , Z = {
            READONLY: 1,
            REQUIRED: 2,
            NOEXPORT: 4,
            MULTILINE: 4096,
            PASSWORD: 8192,
            NOTOGGLETOOFF: 16384,
            RADIO: 32768,
            PUSHBUTTON: 65536,
            COMBO: 131072,
            EDIT: 262144,
            SORT: 524288,
            FILESELECT: 1048576,
            MULTISELECT: 2097152,
            DONOTSPELLCHECK: 4194304,
            DONOTSCROLL: 8388608,
            COMB: 16777216,
            RICHTEXT: 33554432,
            RADIOSINUNISON: 33554432,
            COMMITONSELCHANGE: 67108864
        }
          , $ = {
            SOLID: 1,
            DASHED: 2,
            BEVELED: 3,
            INSET: 4,
            UNDERLINE: 5
        }
          , et = {
            UNKNOWN: 0,
            FLATE: 1,
            LZW: 2,
            DCT: 3,
            JPX: 4,
            JBIG: 5,
            A85: 6,
            AHX: 7,
            CCF: 8,
            RL: 9
        }
          , tt = {
            UNKNOWN: 0,
            TYPE1: 1,
            TYPE1C: 2,
            CIDFONTTYPE0: 3,
            CIDFONTTYPE0C: 4,
            TRUETYPE: 5,
            CIDFONTTYPE2: 6,
            TYPE3: 7,
            OPENTYPE: 8,
            TYPE0: 9,
            MMTYPE1: 10
        }
          , rt = {
            ERRORS: 0,
            WARNINGS: 1,
            INFOS: 5
        }
          , nt = {
            NONE: 0,
            BINARY: 1,
            STREAM: 2
        }
          , it = {
            dependency: 1,
            setLineWidth: 2,
            setLineCap: 3,
            setLineJoin: 4,
            setMiterLimit: 5,
            setDash: 6,
            setRenderingIntent: 7,
            setFlatness: 8,
            setGState: 9,
            save: 10,
            restore: 11,
            transform: 12,
            moveTo: 13,
            lineTo: 14,
            curveTo: 15,
            curveTo2: 16,
            curveTo3: 17,
            closePath: 18,
            rectangle: 19,
            stroke: 20,
            closeStroke: 21,
            fill: 22,
            eoFill: 23,
            fillStroke: 24,
            eoFillStroke: 25,
            closeFillStroke: 26,
            closeEOFillStroke: 27,
            endPath: 28,
            clip: 29,
            eoClip: 30,
            beginText: 31,
            endText: 32,
            setCharSpacing: 33,
            setWordSpacing: 34,
            setHScale: 35,
            setLeading: 36,
            setFont: 37,
            setTextRenderingMode: 38,
            setTextRise: 39,
            moveText: 40,
            setLeadingMoveText: 41,
            setTextMatrix: 42,
            nextLine: 43,
            showText: 44,
            showSpacedText: 45,
            nextLineShowText: 46,
            nextLineSetSpacingShowText: 47,
            setCharWidth: 48,
            setCharWidthAndBounds: 49,
            setStrokeColorSpace: 50,
            setFillColorSpace: 51,
            setStrokeColor: 52,
            setStrokeColorN: 53,
            setFillColor: 54,
            setFillColorN: 55,
            setStrokeGray: 56,
            setFillGray: 57,
            setStrokeRGBColor: 58,
            setFillRGBColor: 59,
            setStrokeCMYKColor: 60,
            setFillCMYKColor: 61,
            shadingFill: 62,
            beginInlineImage: 63,
            beginImageData: 64,
            endInlineImage: 65,
            paintXObject: 66,
            markPoint: 67,
            markPointProps: 68,
            beginMarkedContent: 69,
            beginMarkedContentProps: 70,
            endMarkedContent: 71,
            beginCompat: 72,
            endCompat: 73,
            paintFormXObjectBegin: 74,
            paintFormXObjectEnd: 75,
            beginGroup: 76,
            endGroup: 77,
            beginAnnotations: 78,
            endAnnotations: 79,
            beginAnnotation: 80,
            endAnnotation: 81,
            paintJpegXObject: 82,
            paintImageMaskXObject: 83,
            paintImageMaskXObjectGroup: 84,
            paintImageXObject: 85,
            paintInlineImageXObject: 86,
            paintInlineImageXObjectGroup: 87,
            paintImageXObjectRepeat: 88,
            paintImageMaskXObjectRepeat: 89,
            paintSolidColorImageMask: 90,
            constructPath: 91
        }
          , at = rt.WARNINGS
          , ot = {
            unknown: "unknown",
            forms: "forms",
            javaScript: "javaScript",
            smask: "smask",
            shadingPattern: "shadingPattern",
            font: "font"
        }
          , st = {
            NEED_PASSWORD: 1,
            INCORRECT_PASSWORD: 2
        }
          , ut = function() {
            function e(e, t) {
                this.name = "PasswordException",
                this.message = e,
                this.code = t
            }
            return e.prototype = new Error,
            e.constructor = e,
            e
        }()
          , lt = function() {
            function e(e, t) {
                this.name = "UnknownErrorException",
                this.message = e,
                this.details = t
            }
            return e.prototype = new Error,
            e.constructor = e,
            e
        }()
          , ct = function() {
            function e(e) {
                this.name = "InvalidPDFException",
                this.message = e
            }
            return e.prototype = new Error,
            e.constructor = e,
            e
        }()
          , ht = function() {
            function e(e) {
                this.name = "MissingPDFException",
                this.message = e
            }
            return e.prototype = new Error,
            e.constructor = e,
            e
        }()
          , dt = function() {
            function e(e, t) {
                this.name = "UnexpectedResponseException",
                this.message = e,
                this.status = t
            }
            return e.prototype = new Error,
            e.constructor = e,
            e
        }()
          , ft = function() {
            function e(e) {
                this.message = e
            }
            return e.prototype = new Error,
            e.prototype.name = "NotImplementedException",
            e.constructor = e,
            e
        }()
          , pt = function() {
            function e(e, t) {
                this.begin = e,
                this.end = t,
                this.message = "Missing data [" + e + ", " + t + ")"
            }
            return e.prototype = new Error,
            e.prototype.name = "MissingDataException",
            e.constructor = e,
            e
        }()
          , mt = function() {
            function e(e) {
                this.message = e
            }
            return e.prototype = new Error,
            e.prototype.name = "XRefParseException",
            e.constructor = e,
            e
        }()
          , vt = function() {
            function e(e) {
                this.message = e
            }
            return e.prototype = new Error,
            e.prototype.name = "FormatError",
            e.constructor = e,
            e
        }()
          , gt = function() {
            function e(e) {
                this.name = "AbortException",
                this.message = e
            }
            return e.prototype = new Error,
            e.constructor = e,
            e
        }()
          , bt = /\x00/g
          , _t = [1, 0, 0, 1, 0, 0]
          , yt = function() {
            function e() {}
            var t = ["rgb(", 0, ",", 0, ",", 0, ")"];
            e.makeCssRgb = function(e, r, n) {
                return t[1] = e,
                t[3] = r,
                t[5] = n,
                t.join("")
            }
            ,
            e.transform = function(e, t) {
                return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
            }
            ,
            e.applyTransform = function(e, t) {
                var r = e[0] * t[0] + e[1] * t[2] + t[4]
                  , n = e[0] * t[1] + e[1] * t[3] + t[5];
                return [r, n]
            }
            ,
            e.applyInverseTransform = function(e, t) {
                var r = t[0] * t[3] - t[1] * t[2]
                  , n = (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / r
                  , i = (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / r;
                return [n, i]
            }
            ,
            e.getAxialAlignedBoundingBox = function(t, r) {
                var n = e.applyTransform(t, r)
                  , i = e.applyTransform(t.slice(2, 4), r)
                  , a = e.applyTransform([t[0], t[3]], r)
                  , o = e.applyTransform([t[2], t[1]], r);
                return [Math.min(n[0], i[0], a[0], o[0]), Math.min(n[1], i[1], a[1], o[1]), Math.max(n[0], i[0], a[0], o[0]), Math.max(n[1], i[1], a[1], o[1])]
            }
            ,
            e.inverseTransform = function(e) {
                var t = e[0] * e[3] - e[1] * e[2];
                return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t]
            }
            ,
            e.apply3dTransform = function(e, t) {
                return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2], e[3] * t[0] + e[4] * t[1] + e[5] * t[2], e[6] * t[0] + e[7] * t[1] + e[8] * t[2]]
            }
            ,
            e.singularValueDecompose2dScale = function(e) {
                var t = [e[0], e[2], e[1], e[3]]
                  , r = e[0] * t[0] + e[1] * t[2]
                  , n = e[0] * t[1] + e[1] * t[3]
                  , i = e[2] * t[0] + e[3] * t[2]
                  , a = e[2] * t[1] + e[3] * t[3]
                  , o = (r + a) / 2
                  , s = Math.sqrt((r + a) * (r + a) - 4 * (r * a - i * n)) / 2
                  , u = o + s || 1
                  , l = o - s || 1;
                return [Math.sqrt(u), Math.sqrt(l)]
            }
            ,
            e.normalizeRect = function(e) {
                var t = e.slice(0);
                return e[0] > e[2] && (t[0] = e[2],
                t[2] = e[0]),
                e[1] > e[3] && (t[1] = e[3],
                t[3] = e[1]),
                t
            }
            ,
            e.intersect = function(t, r) {
                function n(e, t) {
                    return e - t
                }
                var i = [t[0], t[2], r[0], r[2]].sort(n)
                  , a = [t[1], t[3], r[1], r[3]].sort(n)
                  , o = [];
                return t = e.normalizeRect(t),
                r = e.normalizeRect(r),
                i[0] === t[0] && i[1] === r[0] || i[0] === r[0] && i[1] === t[0] ? (o[0] = i[1],
                o[2] = i[2],
                a[0] === t[1] && a[1] === r[1] || a[0] === r[1] && a[1] === t[1] ? (o[1] = a[1],
                o[3] = a[2],
                o) : !1) : !1
            }
            ;
            var r = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
            return e.toRoman = function(e, t) {
                l(Number.isInteger(e) && e > 0, "The number should be a positive integer.");
                for (var n, i = []; e >= 1e3; )
                    e -= 1e3,
                    i.push("M");
                n = e / 100 | 0,
                e %= 100,
                i.push(r[n]),
                n = e / 10 | 0,
                e %= 10,
                i.push(r[10 + n]),
                i.push(r[20 + e]);
                var a = i.join("");
                return t ? a.toLowerCase() : a
            }
            ,
            e.appendToArray = function(e, t) {
                Array.prototype.push.apply(e, t)
            }
            ,
            e.prependToArray = function(e, t) {
                Array.prototype.unshift.apply(e, t)
            }
            ,
            e.extendObj = function(e, t) {
                for (var r in t)
                    e[r] = t[r]
            }
            ,
            e.inherit = function(e, t, r) {
                e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e;
                for (var n in r)
                    e.prototype[n] = r[n]
            }
            ,
            e.loadScript = function(e, t) {
                var r = document.createElement("script")
                  , n = !1;
                r.setAttribute("src", e),
                t && (r.onload = function() {
                    n || t(),
                    n = !0
                }
                ),
                document.getElementsByTagName("head")[0].appendChild(r)
            }
            ,
            e
        }()
          , At = function() {
            function e(e, t, r, n, i, a) {
                this.viewBox = e,
                this.scale = t,
                this.rotation = r,
                this.offsetX = n,
                this.offsetY = i;
                var o, s, u, l, c = (e[2] + e[0]) / 2, h = (e[3] + e[1]) / 2;
                switch (r %= 360,
                r = 0 > r ? r + 360 : r) {
                case 180:
                    o = -1,
                    s = 0,
                    u = 0,
                    l = 1;
                    break;
                case 90:
                    o = 0,
                    s = 1,
                    u = 1,
                    l = 0;
                    break;
                case 270:
                    o = 0,
                    s = -1,
                    u = -1,
                    l = 0;
                    break;
                default:
                    o = 1,
                    s = 0,
                    u = 0,
                    l = -1
                }
                a && (u = -u,
                l = -l);
                var d, f, p, m;
                0 === o ? (d = Math.abs(h - e[1]) * t + n,
                f = Math.abs(c - e[0]) * t + i,
                p = Math.abs(e[3] - e[1]) * t,
                m = Math.abs(e[2] - e[0]) * t) : (d = Math.abs(c - e[0]) * t + n,
                f = Math.abs(h - e[1]) * t + i,
                p = Math.abs(e[2] - e[0]) * t,
                m = Math.abs(e[3] - e[1]) * t),
                this.transform = [o * t, s * t, u * t, l * t, d - o * t * c - u * t * h, f - s * t * c - l * t * h],
                this.width = p,
                this.height = m,
                this.fontScale = t
            }
            return e.prototype = {
                clone: function(t) {
                    t = t || {};
                    var r = "scale"in t ? t.scale : this.scale
                      , n = "rotation"in t ? t.rotation : this.rotation;
                    return new e(this.viewBox.slice(),r,n,this.offsetX,this.offsetY,t.dontFlip)
                },
                convertToViewportPoint: function(e, t) {
                    return yt.applyTransform([e, t], this.transform)
                },
                convertToViewportRectangle: function(e) {
                    var t = yt.applyTransform([e[0], e[1]], this.transform)
                      , r = yt.applyTransform([e[2], e[3]], this.transform);
                    return [t[0], t[1], r[0], r[1]]
                },
                convertToPdfPoint: function(e, t) {
                    return yt.applyInverseTransform([e, t], this.transform)
                }
            },
            e
        }()
          , St = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364]
          , wt = function(e, t) {
            if ("undefined" != typeof Blob)
                return new Blob([e],{
                    type: t
                });
            throw new Error('The "Blob" constructor is not supported.')
        }
          , Ct = function() {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            return function(t, r) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
                if (!n && URL.createObjectURL) {
                    var i = wt(t, r);
                    return URL.createObjectURL(i)
                }
                for (var a = "data:" + r + ";base64,", o = 0, s = t.length; s > o; o += 3) {
                    var u = 255 & t[o]
                      , l = 255 & t[o + 1]
                      , c = 255 & t[o + 2]
                      , h = u >> 2
                      , d = (3 & u) << 4 | l >> 4
                      , f = s > o + 1 ? (15 & l) << 2 | c >> 6 : 64
                      , p = s > o + 2 ? 63 & c : 64;
                    a += e[h] + e[d] + e[f] + e[p]
                }
                return a
            }
        }();
        z.prototype = {
            on: function(e, t, r) {
                var n = this.actionHandler;
                if (n[e])
                    throw new Error('There is already an actionName called "' + e + '"');
                n[e] = [t, r]
            },
            send: function(e, t, r) {
                var n = {
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: e,
                    data: t
                };
                this.postMessage(n, r)
            },
            sendWithPromise: function(e, t, r) {
                var n = this.callbackId++
                  , i = {
                    sourceName: this.sourceName,
                    targetName: this.targetName,
                    action: e,
                    data: t,
                    callbackId: n
                }
                  , a = D();
                this.callbacksCapabilities[n] = a;
                try {
                    this.postMessage(i, r)
                } catch (o) {
                    a.reject(o)
                }
                return a.promise
            },
            sendWithStream: function(e, t, r) {
                var n = this
                  , i = this.streamId++
                  , a = this.sourceName
                  , o = this.targetName;
                return new H.ReadableStream({
                    start: function(r) {
                        var s = D();
                        return n.streamControllers[i] = {
                            controller: r,
                            startCall: s,
                            isClosed: !1
                        },
                        n.postMessage({
                            sourceName: a,
                            targetName: o,
                            action: e,
                            streamId: i,
                            data: t,
                            desiredSize: r.desiredSize
                        }),
                        s.promise
                    },
                    pull: function(e) {
                        var t = D();
                        return n.streamControllers[i].pullCall = t,
                        n.postMessage({
                            sourceName: a,
                            targetName: o,
                            stream: "pull",
                            streamId: i,
                            desiredSize: e.desiredSize
                        }),
                        t.promise
                    },
                    cancel: function(e) {
                        var t = D();
                        return n.streamControllers[i].cancelCall = t,
                        n.streamControllers[i].isClosed = !0,
                        n.postMessage({
                            sourceName: a,
                            targetName: o,
                            stream: "cancel",
                            reason: e,
                            streamId: i
                        }),
                        t.promise
                    }
                },r)
            },
            _createStreamSink: function(e) {
                var t = this
                  , r = this
                  , n = this.actionHandler[e.action]
                  , i = e.streamId
                  , a = e.desiredSize
                  , o = this.sourceName
                  , s = e.sourceName
                  , u = D()
                  , l = function(e) {
                    var r = e.stream
                      , n = e.chunk
                      , a = e.transfers
                      , u = e.success
                      , l = e.reason;
                    t.postMessage({
                        sourceName: o,
                        targetName: s,
                        stream: r,
                        streamId: i,
                        chunk: n,
                        success: u,
                        reason: l
                    }, a)
                }
                  , c = {
                    enqueue: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                          , r = arguments[2];
                        if (!this.isCancelled) {
                            var n = this.desiredSize;
                            this.desiredSize -= t,
                            n > 0 && this.desiredSize <= 0 && (this.sinkCapability = D(),
                            this.ready = this.sinkCapability.promise),
                            l({
                                stream: "enqueue",
                                chunk: e,
                                transfers: r
                            })
                        }
                    },
                    close: function() {
                        this.isCancelled || (this.isCancelled = !0,
                        l({
                            stream: "close"
                        }),
                        delete r.streamSinks[i])
                    },
                    error: function(e) {
                        this.isCancelled || (this.isCancelled = !0,
                        l({
                            stream: "error",
                            reason: e
                        }))
                    },
                    sinkCapability: u,
                    onPull: null,
                    onCancel: null,
                    isCancelled: !1,
                    desiredSize: a,
                    ready: null
                };
                c.sinkCapability.resolve(),
                c.ready = c.sinkCapability.promise,
                this.streamSinks[i] = c,
                N(n[0], [e.data, c], n[1]).then(function() {
                    l({
                        stream: "start_complete",
                        success: !0
                    })
                }, function(e) {
                    l({
                        stream: "start_complete",
                        success: !1,
                        reason: e
                    })
                })
            },
            _processStreamMessage: function(e) {
                var t = this
                  , r = this.sourceName
                  , n = e.sourceName
                  , i = e.streamId
                  , a = function(e) {
                    var a = e.stream
                      , o = e.success
                      , s = e.reason;
                    t.comObj.postMessage({
                        sourceName: r,
                        targetName: n,
                        stream: a,
                        success: o,
                        streamId: i,
                        reason: s
                    })
                }
                  , o = function() {
                    Promise.all([t.streamControllers[e.streamId].startCall, t.streamControllers[e.streamId].pullCall, t.streamControllers[e.streamId].cancelCall].map(function(e) {
                        return e && B(e.promise)
                    })).then(function() {
                        delete t.streamControllers[e.streamId]
                    })
                };
                switch (e.stream) {
                case "start_complete":
                    U(this.streamControllers[e.streamId].startCall, e.success, q(e.reason));
                    break;
                case "pull_complete":
                    U(this.streamControllers[e.streamId].pullCall, e.success, q(e.reason));
                    break;
                case "pull":
                    if (!this.streamSinks[e.streamId]) {
                        a({
                            stream: "pull_complete",
                            success: !0
                        });
                        break
                    }
                    this.streamSinks[e.streamId].desiredSize <= 0 && e.desiredSize > 0 && this.streamSinks[e.streamId].sinkCapability.resolve(),
                    this.streamSinks[e.streamId].desiredSize = e.desiredSize,
                    N(this.streamSinks[e.streamId].onPull).then(function() {
                        a({
                            stream: "pull_complete",
                            success: !0
                        })
                    }, function(e) {
                        a({
                            stream: "pull_complete",
                            success: !1,
                            reason: e
                        })
                    });
                    break;
                case "enqueue":
                    l(this.streamControllers[e.streamId], "enqueue should have stream controller"),
                    this.streamControllers[e.streamId].isClosed || this.streamControllers[e.streamId].controller.enqueue(e.chunk);
                    break;
                case "close":
                    if (l(this.streamControllers[e.streamId], "close should have stream controller"),
                    this.streamControllers[e.streamId].isClosed)
                        break;
                    this.streamControllers[e.streamId].isClosed = !0,
                    this.streamControllers[e.streamId].controller.close(),
                    o();
                    break;
                case "error":
                    l(this.streamControllers[e.streamId], "error should have stream controller"),
                    this.streamControllers[e.streamId].controller.error(q(e.reason)),
                    o();
                    break;
                case "cancel_complete":
                    U(this.streamControllers[e.streamId].cancelCall, e.success, q(e.reason)),
                    o();
                    break;
                case "cancel":
                    if (!this.streamSinks[e.streamId])
                        break;
                    N(this.streamSinks[e.streamId].onCancel, [q(e.reason)]).then(function() {
                        a({
                            stream: "cancel_complete",
                            success: !0
                        })
                    }, function(e) {
                        a({
                            stream: "cancel_complete",
                            success: !1,
                            reason: e
                        })
                    }),
                    this.streamSinks[e.streamId].sinkCapability.reject(q(e.reason)),
                    this.streamSinks[e.streamId].isCancelled = !0,
                    delete this.streamSinks[e.streamId];
                    break;
                default:
                    throw new Error("Unexpected stream case")
                }
            },
            postMessage: function(e, t) {
                t && this.postMessageTransfers ? this.comObj.postMessage(e, t) : this.comObj.postMessage(e)
            },
            destroy: function() {
                this.comObj.removeEventListener("message", this._onComObjOnMessage)
            }
        },
        t.FONT_IDENTITY_MATRIX = X,
        t.IDENTITY_MATRIX = _t,
        t.OPS = it,
        t.VerbosityLevel = rt,
        t.UNSUPPORTED_FEATURES = ot,
        t.AnnotationBorderStyleType = $,
        t.AnnotationFieldFlag = Z,
        t.AnnotationFlag = J,
        t.AnnotationType = K,
        t.FontType = tt,
        t.ImageKind = Q,
        t.CMapCompressionType = nt,
        t.AbortException = gt,
        t.InvalidPDFException = ct,
        t.MessageHandler = z,
        t.MissingDataException = pt,
        t.MissingPDFException = ht,
        t.NativeImageDecoding = Y,
        t.NotImplementedException = ft,
        t.PageViewport = At,
        t.PasswordException = ut,
        t.PasswordResponses = st,
        t.StreamType = et,
        t.TextRenderingMode = V,
        t.UnexpectedResponseException = dt,
        t.UnknownErrorException = lt,
        t.Util = yt,
        t.XRefParseException = mt,
        t.FormatError = vt,
        t.arrayByteLength = b,
        t.arraysToBytes = _,
        t.assert = l,
        t.bytesToString = v,
        t.createBlob = wt,
        t.createPromiseCapability = D,
        t.createObjectURL = Ct,
        t.deprecated = s,
        t.getInheritableProperty = R,
        t.getLookupTableFactory = p,
        t.getVerbosityLevel = i,
        t.info = a,
        t.isArrayBuffer = L,
        t.isBool = j,
        t.isEmptyObj = O,
        t.isNum = I,
        t.isString = F,
        t.isSpace = M,
        t.isSameOrigin = c,
        t.createValidAbsoluteUrl = d,
        t.isLittleEndian = P,
        t.isEvalSupported = k,
        t.log2 = A,
        t.readInt8 = S,
        t.readUint16 = w,
        t.readUint32 = C,
        t.removeNullCharacters = m,
        t.ReadableStream = H.ReadableStream,
        t.setVerbosityLevel = n,
        t.shadow = f,
        t.string32 = y,
        t.stringToBytes = g,
        t.stringToPDFString = x,
        t.stringToUTF8String = T,
        t.utf8StringToString = E,
        t.warn = o,
        t.unreachable = u
    }
    , function(e, t, r) {
        "use strict";
        var n = r(42)("wks")
          , i = r(19)
          , a = r(4).Symbol
          , o = "function" == typeof a
          , s = e.exports = function(e) {
            return n[e] || (n[e] = o && a[e] || (o ? a : i)("Symbol." + e))
        }
        ;
        s.store = n
    }
    , function(e) {
        "use strict";
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        e.exports = function(e) {
            return "object" === ("undefined" == typeof e ? "undefined" : t(e)) ? null !== e : "function" == typeof e
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(4)
          , i = r(5)
          , a = r(10)
          , o = r(7)
          , s = r(9)
          , u = "prototype"
          , l = function c(e, t, r) {
            var l, h, d, f, p = e & c.F, m = e & c.G, v = e & c.S, g = e & c.P, b = e & c.B, _ = m ? n : v ? n[t] || (n[t] = {}) : (n[t] || {})[u], y = m ? i : i[t] || (i[t] = {}), A = y[u] || (y[u] = {});
            m && (r = t);
            for (l in r)
                h = !p && _ && void 0 !== _[l],
                d = (h ? _ : r)[l],
                f = b && h ? s(d, n) : g && "function" == typeof d ? s(Function.call, d) : d,
                _ && o(_, l, d, e & c.U),
                y[l] != d && a(y, l, f),
                g && A[l] != d && (A[l] = d)
        };
        n.core = i,
        l.F = 1,
        l.G = 2,
        l.S = 4,
        l.P = 8,
        l.B = 16,
        l.W = 32,
        l.U = 64,
        l.R = 128,
        e.exports = l
    }
    , function(e) {
        "use strict";
        var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = t)
    }
    , function(e) {
        "use strict";
        var t = e.exports = {
            version: "2.5.5"
        };
        "number" == typeof __e && (__e = t)
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2);
        e.exports = function(e) {
            if (!n(e))
                throw TypeError(e + " is not an object!");
            return e
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(4)
          , i = r(10)
          , a = r(8)
          , o = r(19)("src")
          , s = "toString"
          , u = Function[s]
          , l = ("" + u).split(s);
        r(5).inspectSource = function(e) {
            return u.call(e)
        }
        ,
        (e.exports = function(e, t, r, s) {
            var u = "function" == typeof r;
            u && (a(r, "name") || i(r, "name", t)),
            e[t] !== r && (u && (a(r, o) || i(r, o, e[t] ? "" + e[t] : l.join(String(t)))),
            e === n ? e[t] = r : s ? e[t] ? e[t] = r : i(e, t, r) : (delete e[t],
            i(e, t, r)))
        }
        )(Function.prototype, s, function() {
            return "function" == typeof this && this[o] || u.call(this)
        })
    }
    , function(e) {
        "use strict";
        var t = {}.hasOwnProperty;
        e.exports = function(e, r) {
            return t.call(e, r)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(15);
        e.exports = function(e, t, r) {
            if (n(e),
            void 0 === t)
                return e;
            switch (r) {
            case 1:
                return function(r) {
                    return e.call(t, r)
                }
                ;
            case 2:
                return function(r, n) {
                    return e.call(t, r, n)
                }
                ;
            case 3:
                return function(r, n, i) {
                    return e.call(t, r, n, i)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(14)
          , i = r(27);
        e.exports = r(11) ? function(e, t, r) {
            return n.f(e, t, i(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    , function(e, t, r) {
        "use strict";
        e.exports = !r(12)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(e) {
        "use strict";
        e.exports = function(e) {
            try {
                return !!e()
            } catch (t) {
                return !0
            }
        }
    }
    , function(e) {
        "use strict";
        var t = {}.toString;
        e.exports = function(e) {
            return t.call(e).slice(8, -1)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(6)
          , i = r(40)
          , a = r(41)
          , o = Object.defineProperty;
        t.f = r(11) ? Object.defineProperty : function(e, t, r) {
            if (n(e),
            t = a(t, !0),
            n(r),
            i)
                try {
                    return o(e, t, r)
                } catch (s) {}
            if ("get"in r || "set"in r)
                throw TypeError("Accessors not supported!");
            return "value"in r && (e[t] = r.value),
            e
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e) {
            if ("function" != typeof e)
                throw TypeError(e + " is not a function!");
            return e
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(28)
          , i = r(20);
        e.exports = function(e) {
            return n(i(e))
        }
    }
    , function(e) {
        "use strict";
        e.exports = {}
    }
    , function(e) {
        "use strict";
        e.exports = "undefined" != typeof window && window.Math === Math ? window : "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : {}
    }
    , function(e) {
        "use strict";
        var t = 0
          , r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + r).toString(36))
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e) {
            if (void 0 == e)
                throw TypeError("Can't call method on  " + e);
            return e
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(83)
          , i = r(48);
        e.exports = Object.keys || function(e) {
            return n(e, i)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(14).f
          , i = r(8)
          , a = r(1)("toStringTag");
        e.exports = function(e, t, r) {
            e && !i(e = r ? e : e.prototype, a) && n(e, a, {
                configurable: !0,
                value: t
            })
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(9)
          , i = r(88)
          , a = r(89)
          , o = r(6)
          , s = r(29)
          , u = r(90)
          , l = {}
          , c = {}
          , h = e.exports = function(e, t, r, h, d) {
            var f, p, m, v, g = d ? function() {
                return e
            }
            : u(e), b = n(r, h, t ? 2 : 1), _ = 0;
            if ("function" != typeof g)
                throw TypeError(e + " is not iterable!");
            if (a(g)) {
                for (f = s(e.length); f > _; _++)
                    if (v = t ? b(o(p = e[_])[0], p[1]) : b(e[_]),
                    v === l || v === c)
                        return v
            } else
                for (m = g.call(e); !(p = m.next()).done; )
                    if (v = i(m, b, p.value, t),
                    v === l || v === c)
                        return v
        }
        ;
        h.BREAK = l,
        h.RETURN = c
    }
    , function(e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , r = t.url
              , n = t.target
              , i = t.rel;
            if (e.href = e.title = r ? s.removeNullCharacters(r) : "",
            r) {
                var a = Object.values(p)
                  , o = a.includes(n) ? n : p.NONE;
                e.target = m[o],
                e.rel = "string" == typeof i ? i : u
            }
        }
        function a(e) {
            var t = e.indexOf("#")
              , r = e.indexOf("?")
              , n = Math.min(t > 0 ? t : e.length, r > 0 ? r : e.length);
            return e.substring(e.lastIndexOf("/", n) + 1, n)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.DummyStatTimer = t.StatTimer = t.DOMSVGFactory = t.DOMCMapReaderFactory = t.DOMCanvasFactory = t.DEFAULT_LINK_REL = t.LinkTarget = t.getFilenameFromUrl = t.addLinkAttributes = t.RenderingCancelledException = void 0;
        var o = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r),
                n && e(t, n),
                t
            }
        }()
          , s = r(0)
          , u = "noopener noreferrer nofollow"
          , l = "http://www.w3.org/2000/svg"
          , c = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "create",
                value: function(e, t) {
                    if (0 >= e || 0 >= t)
                        throw new Error("invalid canvas size");
                    var r = document.createElement("canvas")
                      , n = r.getContext("2d");
                    return r.width = e,
                    r.height = t,
                    {
                        canvas: r,
                        context: n
                    }
                }
            }, {
                key: "reset",
                value: function(e, t, r) {
                    if (!e.canvas)
                        throw new Error("canvas is not specified");
                    if (0 >= t || 0 >= r)
                        throw new Error("invalid canvas size");
                    e.canvas.width = t,
                    e.canvas.height = r
                }
            }, {
                key: "destroy",
                value: function(e) {
                    if (!e.canvas)
                        throw new Error("canvas is not specified");
                    e.canvas.width = 0,
                    e.canvas.height = 0,
                    e.canvas = null,
                    e.context = null
                }
            }]),
            e
        }()
          , h = function() {
            function e(t) {
                var r = t.baseUrl
                  , i = void 0 === r ? null : r
                  , a = t.isCompressed
                  , o = void 0 === a ? !1 : a;
                n(this, e),
                this.baseUrl = i,
                this.isCompressed = o
            }
            return o(e, [{
                key: "fetch",
                value: function(e) {
                    this.baseUrl = 'https://unpkg.com/pdfjs-dist@1.9.426/cmaps/';
                    this.isCompressed = true;
                    var t = this
                      , r = e.name;
                    return this.baseUrl ? r ? new Promise(function(e, n) {
                        var i = t.baseUrl + r + (t.isCompressed ? ".bcmap" : "")
                          , a = new XMLHttpRequest;
                        a.open("GET", i, !0),
                        t.isCompressed && (a.responseType = "arraybuffer"),
                        a.onreadystatechange = function() {
                            if (a.readyState === XMLHttpRequest.DONE) {
                                if (200 === a.status || 0 === a.status) {
                                    var r = void 0;
                                    if (t.isCompressed && a.response ? r = new Uint8Array(a.response) : !t.isCompressed && a.responseText && (r = s.stringToBytes(a.responseText)),
                                    r)
                                        return void e({
                                            cMapData: r,
                                            compressionType: t.isCompressed ? s.CMapCompressionType.BINARY : s.CMapCompressionType.NONE
                                        })
                                }
                                n(new Error("Unable to load " + (t.isCompressed ? "binary " : "") + "CMap at: " + i))
                            }
                        }
                        ,
                        a.send(null)
                    }
                    ) : Promise.reject(new Error("CMap name must be specified.")) : Promise.reject(new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.'))
                }
            }]),
            e
        }()
          , d = function() {
            function e() {
                n(this, e)
            }
            return o(e, [{
                key: "create",
                value: function(e, t) {
                    s.assert(e > 0 && t > 0, "Invalid SVG dimensions");
                    var r = document.createElementNS(l, "svg:svg");
                    return r.setAttribute("version", "1.1"),
                    r.setAttribute("width", e + "px"),
                    r.setAttribute("height", t + "px"),
                    r.setAttribute("preserveAspectRatio", "none"),
                    r.setAttribute("viewBox", "0 0 " + e + " " + t),
                    r
                }
            }, {
                key: "createElement",
                value: function(e) {
                    return s.assert("string" == typeof e, "Invalid SVG element type"),
                    document.createElementNS(l, e)
                }
            }]),
            e
        }()
          , f = function b() {
            function b(e, t) {
                this.message = e,
                this.type = t
            }
            return b.prototype = new Error,
            b.prototype.name = "RenderingCancelledException",
            b.constructor = b,
            b
        }()
          , p = {
            NONE: 0,
            SELF: 1,
            BLANK: 2,
            PARENT: 3,
            TOP: 4
        }
          , m = ["", "_self", "_blank", "_parent", "_top"]
          , v = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0;
                n(this, e),
                this.enabled = !!t,
                this.started = Object.create(null),
                this.times = []
            }
            return o(e, [{
                key: "time",
                value: function(e) {
                    this.enabled && (e in this.started && s.warn("Timer is already running for " + e),
                    this.started[e] = Date.now())
                }
            }, {
                key: "timeEnd",
                value: function(e) {
                    this.enabled && (e in this.started || s.warn("Timer has not been started for " + e),
                    this.times.push({
                        name: e,
                        start: this.started[e],
                        end: Date.now()
                    }),
                    delete this.started[e])
                }
            }, {
                key: "toString",
                value: function() {
                    for (var e = this.times, t = "", r = 0, n = 0, i = e.length; i > n; ++n) {
                        var a = e[n].name;
                        a.length > r && (r = a.length)
                    }
                    for (var o = 0, s = e.length; s > o; ++o) {
                        var u = e[o]
                          , l = u.end - u.start;
                        t += u.name.padEnd(r) + " " + l + "ms\n"
                    }
                    return t
                }
            }]),
            e
        }()
          , g = function() {
            function e() {
                n(this, e),
                s.unreachable("Cannot initialize DummyStatTimer.")
            }
            return o(e, null, [{
                key: "time",
                value: function() {}
            }, {
                key: "timeEnd",
                value: function() {}
            }, {
                key: "toString",
                value: function() {
                    return ""
                }
            }]),
            e
        }();
        t.RenderingCancelledException = f,
        t.addLinkAttributes = i,
        t.getFilenameFromUrl = a,
        t.LinkTarget = p,
        t.DEFAULT_LINK_REL = u,
        t.DOMCanvasFactory = c,
        t.DOMCMapReaderFactory = h,
        t.DOMSVGFactory = d,
        t.StatTimer = v,
        t.DummyStatTimer = g
    }
    , function(e) {
        "use strict";
        var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        e.exports = function() {
            return "object" === ("undefined" == typeof process ? "undefined" : t(process)) && process + "" == "[object process]"
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2)
          , i = r(4).document
          , a = n(i) && n(i.createElement);
        e.exports = function(e) {
            return a ? i.createElement(e) : {}
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(13);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == n(e) ? e.split("") : Object(e)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(30)
          , i = Math.min;
        e.exports = function(e) {
            return e > 0 ? i(n(e), 9007199254740991) : 0
        }
    }
    , function(e) {
        "use strict";
        var t = Math.ceil
          , r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? r : t)(e)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(13)
          , i = r(1)("toStringTag")
          , a = "Arguments" == n(function() {
            return arguments
        }())
          , o = function(e, t) {
            try {
                return e[t]
            } catch (r) {}
        };
        e.exports = function(e) {
            var t, r, s;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = o(t = Object(e), i)) ? r : a ? n(t) : "Object" == (s = n(t)) && "function" == typeof t.callee ? "Arguments" : s
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(42)("keys")
          , i = r(19);
        e.exports = function(e) {
            return n[e] || (n[e] = i(e))
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(20);
        e.exports = function(e) {
            return Object(n(e))
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e, t, r, n) {
            if (!(e instanceof t) || void 0 !== n && n in e)
                throw TypeError(r + ": incorrect invocation!");
            return e
        }
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            var t, r;
            this.promise = new e(function(e, n) {
                if (void 0 !== t || void 0 !== r)
                    throw TypeError("Bad Promise constructor");
                t = e,
                r = n
            }
            ),
            this.resolve = i(t),
            this.reject = i(r)
        }
        var i = r(15);
        e.exports.f = function(e) {
            return new n(e)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(7);
        e.exports = function(e, t, r) {
            for (var i in t)
                n(e, i, t[i], r);
            return e
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = r(19)("meta")
          , a = r(2)
          , o = r(8)
          , s = r(14).f
          , u = 0
          , l = Object.isExtensible || function() {
            return !0
        }
          , c = !r(12)(function() {
            return l(Object.preventExtensions({}))
        })
          , h = function(e) {
            s(e, i, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            })
        }
          , d = function(e, t) {
            if (!a(e))
                return "symbol" == ("undefined" == typeof e ? "undefined" : n(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!o(e, i)) {
                if (!l(e))
                    return "F";
                if (!t)
                    return "E";
                h(e)
            }
            return e[i].i
        }
          , f = function(e, t) {
            if (!o(e, i)) {
                if (!l(e))
                    return !0;
                if (!t)
                    return !1;
                h(e)
            }
            return e[i].w
        }
          , p = function(e) {
            return c && m.NEED && l(e) && !o(e, i) && h(e),
            e
        }
          , m = e.exports = {
            KEY: i,
            NEED: !1,
            fastKey: d,
            getWeak: f,
            onFreeze: p
        }
    }
    , function(e, t) {
        "use strict";
        t.f = {}.propertyIsEnumerable
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            var t = e.getResponseHeader
              , r = e.isHttp
              , n = e.rangeChunkSize
              , i = e.disableRange;
            s.assert(n > 0, "Range chunk size must be larger than zero");
            var a = {
                allowRangeRequests: !1,
                suggestedLength: void 0
            };
            if (i || !r)
                return a;
            if ("bytes" !== t("Accept-Ranges"))
                return a;
            var o = t("Content-Encoding") || "identity";
            if ("identity" !== o)
                return a;
            var u = parseInt(t("Content-Length"), 10);
            return Number.isInteger(u) ? (a.suggestedLength = u,
            2 * n >= u ? a : (a.allowRangeRequests = !0,
            a)) : a
        }
        function i(e) {
            var t = e("Content-Disposition");
            if (t) {
                var r = u.getFilenameFromContentDispositionHeader(t);
                if (/\.pdf$/i.test(r))
                    return r
            }
            return null
        }
        function a(e, t) {
            return 404 === e || 0 === e && /^file:/.test(t) ? new s.MissingPDFException('Missing PDF "' + t + '".') : new s.UnexpectedResponseException("Unexpected server response (" + e + ') while retrieving PDF "' + t + '".',e)
        }
        function o(e) {
            return 200 === e || 206 === e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.validateResponseStatus = t.validateRangeRequestCapabilities = t.extractFilenameFromHeader = t.createResponseStatusError = void 0;
        var s = r(0)
          , u = r(129);
        t.createResponseStatusError = a,
        t.extractFilenameFromHeader = i,
        t.validateRangeRequestCapabilities = n,
        t.validateResponseStatus = o
    }
    , function(e, t, r) {
        "use strict";
        e.exports = !r(11) && !r(12)(function() {
            return 7 != Object.defineProperty(r(26)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2);
        e.exports = function(e, t) {
            if (!n(e))
                return e;
            var r, i;
            if (t && "function" == typeof (r = e.toString) && !n(i = r.call(e)))
                return i;
            if ("function" == typeof (r = e.valueOf) && !n(i = r.call(e)))
                return i;
            if (!t && "function" == typeof (r = e.toString) && !n(i = r.call(e)))
                return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(4)
          , i = "__core-js_shared__"
          , a = n[i] || (n[i] = {});
        e.exports = function(e) {
            return a[e] || (a[e] = {})
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(16)
          , i = r(29)
          , a = r(69);
        e.exports = function(e) {
            return function(t, r, o) {
                var s, u = n(t), l = i(u.length), c = a(o, l);
                if (e && r != r) {
                    for (; l > c; )
                        if (s = u[c++],
                        s != s)
                            return !0
                } else
                    for (; l > c; c++)
                        if ((e || c in u) && u[c] === r)
                            return e || c || 0;
                return !e && -1
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(1)("unscopables")
          , i = Array.prototype;
        void 0 == i[n] && r(10)(i, n, {}),
        e.exports = function(e) {
            i[n][e] = !0
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(31)
          , i = {};
        i[r(1)("toStringTag")] = "z",
        i + "" != "[object z]" && r(7)(Object.prototype, "toString", function() {
            return "[object " + n(this) + "]"
        }, !0)
    }
    , function(e, t, r) {
        "use strict";
        var n = r(47)
          , i = r(3)
          , a = r(7)
          , o = r(10)
          , s = r(17)
          , u = r(80)
          , l = r(22)
          , c = r(84)
          , h = r(1)("iterator")
          , d = !([].keys && "next"in [].keys())
          , f = "@@iterator"
          , p = "keys"
          , m = "values"
          , v = function() {
            return this
        };
        e.exports = function(e, t, r, g, b, _, y) {
            u(r, t, g);
            var A, S, w, C = function(e) {
                if (!d && e in x)
                    return x[e];
                switch (e) {
                case p:
                    return function() {
                        return new r(this,e)
                    }
                    ;
                case m:
                    return function() {
                        return new r(this,e)
                    }
                }
                return function() {
                    return new r(this,e)
                }
            }, P = t + " Iterator", k = b == m, R = !1, x = e.prototype, T = x[h] || x[f] || b && x[b], E = T || C(b), O = b ? k ? C("entries") : E : void 0, j = "Array" == t ? x.entries || T : T;
            if (j && (w = c(j.call(new e)),
            w !== Object.prototype && w.next && (l(w, P, !0),
            n || "function" == typeof w[h] || o(w, h, v))),
            k && T && T.name !== m && (R = !0,
            E = function() {
                return T.call(this)
            }
            ),
            n && !y || !d && !R && x[h] || o(x, h, E),
            s[t] = E,
            s[P] = v,
            b)
                if (A = {
                    values: k ? E : C(m),
                    keys: _ ? E : C(p),
                    entries: O
                },
                y)
                    for (S in A)
                        S in x || a(x, S, A[S]);
                else
                    i(i.P + i.F * (d || R), t, A);
            return A
        }
    }
    , function(e) {
        "use strict";
        e.exports = !1
    }
    , function(e) {
        "use strict";
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }
    , function(e, t, r) {
        "use strict";
        var n = r(4).document;
        e.exports = n && n.documentElement
    }
    , function(e, t, r) {
        "use strict";
        for (var n = r(85), i = r(21), a = r(7), o = r(4), s = r(10), u = r(17), l = r(1), c = l("iterator"), h = l("toStringTag"), d = u.Array, f = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, p = i(f), m = 0; m < p.length; m++) {
            var v, g = p[m], b = f[g], _ = o[g], y = _ && _.prototype;
            if (y && (y[c] || s(y, c, d),
            y[h] || s(y, h, g),
            u[g] = d,
            b))
                for (v in n)
                    y[v] || a(y, v, n[v], !0)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(6)
          , i = r(15)
          , a = r(1)("species");
        e.exports = function(e, t) {
            var r, o = n(e).constructor;
            return void 0 === o || void 0 == (r = n(o)[a]) ? t : i(r)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n, i, a, o = r(9), s = r(91), u = r(49), l = r(26), c = r(4), h = c.process, d = c.setImmediate, f = c.clearImmediate, p = c.MessageChannel, m = c.Dispatch, v = 0, g = {}, b = "onreadystatechange", _ = function() {
            var e = +this;
            if (g.hasOwnProperty(e)) {
                var t = g[e];
                delete g[e],
                t()
            }
        }, y = function(e) {
            _.call(e.data)
        };
        d && f || (d = function(e) {
            for (var t = [], r = 1; arguments.length > r; )
                t.push(arguments[r++]);
            return g[++v] = function() {
                s("function" == typeof e ? e : Function(e), t)
            }
            ,
            n(v),
            v
        }
        ,
        f = function(e) {
            delete g[e]
        }
        ,
        "process" == r(13)(h) ? n = function(e) {
            h.nextTick(o(_, e, 1))
        }
        : m && m.now ? n = function(e) {
            m.now(o(_, e, 1))
        }
        : p ? (i = new p,
        a = i.port2,
        i.port1.onmessage = y,
        n = o(a.postMessage, a, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (n = function(e) {
            c.postMessage(e + "", "*")
        }
        ,
        c.addEventListener("message", y, !1)) : n = b in l("script") ? function(e) {
            u.appendChild(l("script"))[b] = function() {
                u.removeChild(this),
                _.call(e)
            }
        }
        : function(e) {
            setTimeout(o(_, e, 1), 0)
        }
        ),
        e.exports = {
            set: d,
            clear: f
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e) {
            try {
                return {
                    e: !1,
                    v: e()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(6)
          , i = r(2)
          , a = r(35);
        e.exports = function(e, t) {
            if (n(e),
            i(t) && t.constructor === e)
                return t;
            var r = a.f(e)
              , o = r.resolve;
            return o(t),
            r.promise
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(1)("iterator")
          , i = !1;
        try {
            var a = [7][n]();
            a["return"] = function() {
                i = !0
            }
            ,
            Array.from(a, function() {
                throw 2
            })
        } catch (o) {}
        e.exports = function(e, t) {
            if (!t && !i)
                return !1;
            var r = !1;
            try {
                var a = [7]
                  , o = a[n]();
                o.next = function() {
                    return {
                        done: r = !0
                    }
                }
                ,
                a[n] = function() {
                    return o
                }
                ,
                e(a)
            } catch (s) {}
            return r
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(9)
          , i = r(28)
          , a = r(33)
          , o = r(29)
          , s = r(98);
        e.exports = function(e, t) {
            var r = 1 == e
              , u = 2 == e
              , l = 3 == e
              , c = 4 == e
              , h = 6 == e
              , d = 5 == e || h
              , f = t || s;
            return function(t, s, p) {
                for (var m, v, g = a(t), b = i(g), _ = n(s, p, 3), y = o(b.length), A = 0, S = r ? f(t, y) : u ? f(t, 0) : void 0; y > A; A++)
                    if ((d || A in b) && (m = b[A],
                    v = _(m, A, g),
                    e))
                        if (r)
                            S[A] = v;
                        else if (v)
                            switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return m;
                            case 6:
                                return A;
                            case 2:
                                S.push(m)
                            }
                        else if (c)
                            return !1;
                return h ? -1 : l || c ? c : S
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2);
        e.exports = function(e, t) {
            if (!n(e) || e._t !== t)
                throw TypeError("Incompatible receiver, " + t + " required!");
            return e
        }
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.create(null)
          , n = "undefined" != typeof navigator && navigator.userAgent || ""
          , i = /Trident/.test(n)
          , a = /\b(iPad|iPhone|iPod)(?=;)/.test(n)
          , o = /CriOS/.test(n)
          , s = /Safari\//.test(n) && !/(Chrome\/|Android\s)/.test(n);
        !function() {
            (i || o) && (r.disableCreateObjectURL = !0)
        }(),
        function() {
            (s || a) && (r.disableRange = !0,
            r.disableStream = !0)
        }();
        var u = Object.freeze(r);
        t.apiCompatibilityParams = u
    }
    , function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = Object.create(null);
        r.workerPort = void 0 === r.workerPort ? null : r.workerPort,
        r.workerSrc = void 0 === r.workerSrc ? "" : r.workerSrc,
        t.GlobalWorkerOptions = r
    }
    , function(e, t, r) {
        "use strict";
        var n = r(0)
          , i = r(117)
          , a = r(125)
          , o = r(126)
          , s = r(24)
          , u = r(127)
          , l = r(59)
          , c = r(58)
          , h = r(25);
        if (h()) {
            var d = r(128).PDFNodeStream;
            i.setPDFNetworkStreamFactory(function(e) {
                return new d(e)
            })
        } else if ("undefined" != typeof Response && "body"in Response.prototype && "undefined" != typeof ReadableStream) {
            var f = r(130).PDFFetchStream;
            i.setPDFNetworkStreamFactory(function(e) {
                return new f(e)
            })
        } else {
            var p = r(131).PDFNetworkStream;
            i.setPDFNetworkStreamFactory(function(e) {
                return new p(e)
            })
        }
        t.build = i.build,
        t.version = i.version,
        t.getDocument = i.getDocument,
        t.LoopbackPort = i.LoopbackPort,
        t.PDFDataRangeTransport = i.PDFDataRangeTransport,
        t.PDFWorker = i.PDFWorker,
        t.renderTextLayer = a.renderTextLayer,
        t.AnnotationLayer = o.AnnotationLayer,
        t.createPromiseCapability = n.createPromiseCapability,
        t.PasswordResponses = n.PasswordResponses,
        t.InvalidPDFException = n.InvalidPDFException,
        t.MissingPDFException = n.MissingPDFException,
        t.SVGGraphics = u.SVGGraphics,
        t.NativeImageDecoding = n.NativeImageDecoding,
        t.UnexpectedResponseException = n.UnexpectedResponseException,
        t.OPS = n.OPS,
        t.VerbosityLevel = n.VerbosityLevel,
        t.UNSUPPORTED_FEATURES = n.UNSUPPORTED_FEATURES,
        t.createValidAbsoluteUrl = n.createValidAbsoluteUrl,
        t.createObjectURL = n.createObjectURL,
        t.removeNullCharacters = n.removeNullCharacters,
        t.shadow = n.shadow,
        t.createBlob = n.createBlob,
        t.Util = n.Util,
        t.RenderingCancelledException = s.RenderingCancelledException,
        t.getFilenameFromUrl = s.getFilenameFromUrl,
        t.LinkTarget = s.LinkTarget,
        t.addLinkAttributes = s.addLinkAttributes,
        t.GlobalWorkerOptions = l.GlobalWorkerOptions,
        t.apiCompatibilityParams = c.apiCompatibilityParams
    }
    , function(e, t, r) {
        "use strict";
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = r(18);
        if (!i._pdfjsCompatibilityChecked) {
            i._pdfjsCompatibilityChecked = !0;
            var a = r(25)
              , o = "object" === ("undefined" == typeof window ? "undefined" : n(window)) && "object" === ("undefined" == typeof document ? "undefined" : n(document));
            !function() {
                !i.btoa && a() && (i.btoa = function(e) {
                    return Buffer.from(e, "binary").toString("base64")
                }
                )
            }(),
            function() {
                !i.atob && a() && (i.atob = function(e) {
                    return Buffer.from(e, "base64").toString("binary")
                }
                )
            }(),
            function() {
                o && ("currentScript"in document || Object.defineProperty(document, "currentScript", {
                    get: function() {
                        var e = document.getElementsByTagName("script");
                        return e[e.length - 1]
                    },
                    enumerable: !0,
                    configurable: !0
                }))
            }(),
            function() {
                o && "undefined" == typeof Element.prototype.remove && (Element.prototype.remove = function() {
                    this.parentNode && this.parentNode.removeChild(this)
                }
                )
            }(),
            function() {
                String.prototype.includes || r(62)
            }(),
            function() {
                Array.prototype.includes || r(67)
            }(),
            function() {
                Math.log2 || (Math.log2 = r(70))
            }(),
            function() {
                Number.isNaN || (Number.isNaN = r(72))
            }(),
            function() {
                Number.isInteger || (Number.isInteger = r(74))
            }(),
            function() {
                i.Promise || (i.Promise = r(77))
            }(),
            function() {
                i.WeakMap || (i.WeakMap = r(96))
            }(),
            function() {
                function e(e) {
                    return void 0 !== f[e]
                }
                function t() {
                    u.call(this),
                    this._isInvalid = !0
                }
                function r(e) {
                    return "" === e && t.call(this),
                    e.toLowerCase()
                }
                function a(e) {
                    var t = e.charCodeAt(0);
                    return t > 32 && 127 > t && -1 === [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e)
                }
                function o(e) {
                    var t = e.charCodeAt(0);
                    return t > 32 && 127 > t && -1 === [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e)
                }
                function s(n, i, s) {
                    function u(e) {
                        _.push(e)
                    }
                    var l = i || "scheme start"
                      , c = 0
                      , h = ""
                      , d = !1
                      , b = !1
                      , _ = [];
                    e: for (; (n[c - 1] !== m || 0 === c) && !this._isInvalid; ) {
                        var y = n[c];
                        switch (l) {
                        case "scheme start":
                            if (!y || !v.test(y)) {
                                if (i) {
                                    u("Invalid scheme.");
                                    break e
                                }
                                h = "",
                                l = "no scheme";
                                continue
                            }
                            h += y.toLowerCase(),
                            l = "scheme";
                            break;
                        case "scheme":
                            if (y && g.test(y))
                                h += y.toLowerCase();
                            else {
                                if (":" !== y) {
                                    if (i) {
                                        if (y === m)
                                            break e;
                                        u("Code point not allowed in scheme: " + y);
                                        break e
                                    }
                                    h = "",
                                    c = 0,
                                    l = "no scheme";
                                    continue
                                }
                                if (this._scheme = h,
                                h = "",
                                i)
                                    break e;
                                e(this._scheme) && (this._isRelative = !0),
                                l = "file" === this._scheme ? "relative" : this._isRelative && s && s._scheme === this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
                            }
                            break;
                        case "scheme data":
                            "?" === y ? (this._query = "?",
                            l = "query") : "#" === y ? (this._fragment = "#",
                            l = "fragment") : y !== m && "	" !== y && "\n" !== y && "\r" !== y && (this._schemeData += a(y));
                            break;
                        case "no scheme":
                            if (s && e(s._scheme)) {
                                l = "relative";
                                continue
                            }
                            u("Missing scheme."),
                            t.call(this);
                            break;
                        case "relative or authority":
                            if ("/" !== y || "/" !== n[c + 1]) {
                                u("Expected /, got: " + y),
                                l = "relative";
                                continue
                            }
                            l = "authority ignore slashes";
                            break;
                        case "relative":
                            if (this._isRelative = !0,
                            "file" !== this._scheme && (this._scheme = s._scheme),
                            y === m) {
                                this._host = s._host,
                                this._port = s._port,
                                this._path = s._path.slice(),
                                this._query = s._query,
                                this._username = s._username,
                                this._password = s._password;
                                break e
                            }
                            if ("/" === y || "\\" === y)
                                "\\" === y && u("\\ is an invalid code point."),
                                l = "relative slash";
                            else if ("?" === y)
                                this._host = s._host,
                                this._port = s._port,
                                this._path = s._path.slice(),
                                this._query = "?",
                                this._username = s._username,
                                this._password = s._password,
                                l = "query";
                            else {
                                if ("#" !== y) {
                                    var A = n[c + 1]
                                      , S = n[c + 2];
                                    ("file" !== this._scheme || !v.test(y) || ":" !== A && "|" !== A || S !== m && "/" !== S && "\\" !== S && "?" !== S && "#" !== S) && (this._host = s._host,
                                    this._port = s._port,
                                    this._username = s._username,
                                    this._password = s._password,
                                    this._path = s._path.slice(),
                                    this._path.pop()),
                                    l = "relative path";
                                    continue
                                }
                                this._host = s._host,
                                this._port = s._port,
                                this._path = s._path.slice(),
                                this._query = s._query,
                                this._fragment = "#",
                                this._username = s._username,
                                this._password = s._password,
                                l = "fragment"
                            }
                            break;
                        case "relative slash":
                            if ("/" !== y && "\\" !== y) {
                                "file" !== this._scheme && (this._host = s._host,
                                this._port = s._port,
                                this._username = s._username,
                                this._password = s._password),
                                l = "relative path";
                                continue
                            }
                            "\\" === y && u("\\ is an invalid code point."),
                            l = "file" === this._scheme ? "file host" : "authority ignore slashes";
                            break;
                        case "authority first slash":
                            if ("/" !== y) {
                                u("Expected '/', got: " + y),
                                l = "authority ignore slashes";
                                continue
                            }
                            l = "authority second slash";
                            break;
                        case "authority second slash":
                            if (l = "authority ignore slashes",
                            "/" !== y) {
                                u("Expected '/', got: " + y);
                                continue
                            }
                            break;
                        case "authority ignore slashes":
                            if ("/" !== y && "\\" !== y) {
                                l = "authority";
                                continue
                            }
                            u("Expected authority, got: " + y);
                            break;
                        case "authority":
                            if ("@" === y) {
                                d && (u("@ already seen."),
                                h += "%40"),
                                d = !0;
                                for (var w = 0; w < h.length; w++) {
                                    var C = h[w];
                                    if ("	" !== C && "\n" !== C && "\r" !== C)
                                        if (":" !== C || null !== this._password) {
                                            var P = a(C);
                                            null !== this._password ? this._password += P : this._username += P
                                        } else
                                            this._password = "";
                                    else
                                        u("Invalid whitespace in authority.")
                                }
                                h = ""
                            } else {
                                if (y === m || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                    c -= h.length,
                                    h = "",
                                    l = "host";
                                    continue
                                }
                                h += y
                            }
                            break;
                        case "file host":
                            if (y === m || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                2 !== h.length || !v.test(h[0]) || ":" !== h[1] && "|" !== h[1] ? 0 === h.length ? l = "relative path start" : (this._host = r.call(this, h),
                                h = "",
                                l = "relative path start") : l = "relative path";
                                continue
                            }
                            "	" === y || "\n" === y || "\r" === y ? u("Invalid whitespace in file host.") : h += y;
                            break;
                        case "host":
                        case "hostname":
                            if (":" !== y || b) {
                                if (y === m || "/" === y || "\\" === y || "?" === y || "#" === y) {
                                    if (this._host = r.call(this, h),
                                    h = "",
                                    l = "relative path start",
                                    i)
                                        break e;
                                    continue
                                }
                                "	" !== y && "\n" !== y && "\r" !== y ? ("[" === y ? b = !0 : "]" === y && (b = !1),
                                h += y) : u("Invalid code point in host/hostname: " + y)
                            } else if (this._host = r.call(this, h),
                            h = "",
                            l = "port",
                            "hostname" === i)
                                break e;
                            break;
                        case "port":
                            if (/[0-9]/.test(y))
                                h += y;
                            else {
                                if (y === m || "/" === y || "\\" === y || "?" === y || "#" === y || i) {
                                    if ("" !== h) {
                                        var k = parseInt(h, 10);
                                        k !== f[this._scheme] && (this._port = k + ""),
                                        h = ""
                                    }
                                    if (i)
                                        break e;
                                    l = "relative path start";
                                    continue
                                }
                                "	" === y || "\n" === y || "\r" === y ? u("Invalid code point in port: " + y) : t.call(this)
                            }
                            break;
                        case "relative path start":
                            if ("\\" === y && u("'\\' not allowed in path."),
                            l = "relative path",
                            "/" !== y && "\\" !== y)
                                continue;
                            break;
                        case "relative path":
                            if (y !== m && "/" !== y && "\\" !== y && (i || "?" !== y && "#" !== y))
                                "	" !== y && "\n" !== y && "\r" !== y && (h += a(y));
                            else {
                                "\\" === y && u("\\ not allowed in relative path.");
                                var R;
                                (R = p[h.toLowerCase()]) && (h = R),
                                ".." === h ? (this._path.pop(),
                                "/" !== y && "\\" !== y && this._path.push("")) : "." === h && "/" !== y && "\\" !== y ? this._path.push("") : "." !== h && ("file" === this._scheme && 0 === this._path.length && 2 === h.length && v.test(h[0]) && "|" === h[1] && (h = h[0] + ":"),
                                this._path.push(h)),
                                h = "",
                                "?" === y ? (this._query = "?",
                                l = "query") : "#" === y && (this._fragment = "#",
                                l = "fragment")
                            }
                            break;
                        case "query":
                            i || "#" !== y ? y !== m && "	" !== y && "\n" !== y && "\r" !== y && (this._query += o(y)) : (this._fragment = "#",
                            l = "fragment");
                            break;
                        case "fragment":
                            y !== m && "	" !== y && "\n" !== y && "\r" !== y && (this._fragment += y)
                        }
                        c++
                    }
                }
                function u() {
                    this._scheme = "",
                    this._schemeData = "",
                    this._username = "",
                    this._password = null,
                    this._host = "",
                    this._port = "",
                    this._path = [],
                    this._query = "",
                    this._fragment = "",
                    this._isInvalid = !1,
                    this._isRelative = !1
                }
                function l(e, t) {
                    void 0 === t || t instanceof l || (t = new l(String(t))),
                    this._url = e,
                    u.call(this);
                    var r = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
                    s.call(this, r, null, t)
                }
                var c = !1;
                try {
                    if ("function" == typeof URL && "object" === n(URL.prototype) && "origin"in URL.prototype) {
                        var h = new URL("b","http://a");
                        h.pathname = "c%20d",
                        c = "http://a/c%20d" === h.href
                    }
                } catch (d) {}
                if (!c) {
                    var f = Object.create(null);
                    f.ftp = 21,
                    f.file = 0,
                    f.gopher = 70,
                    f.http = 80,
                    f.https = 443,
                    f.ws = 80,
                    f.wss = 443;
                    var p = Object.create(null);
                    p["%2e"] = ".",
                    p[".%2e"] = "..",
                    p["%2e."] = "..",
                    p["%2e%2e"] = "..";
                    var m, v = /[a-zA-Z]/, g = /[a-zA-Z0-9\+\-\.]/;
                    l.prototype = {
                        toString: function() {
                            return this.href
                        },
                        get href() {
                            if (this._isInvalid)
                                return this._url;
                            var e = "";
                            return ("" !== this._username || null !== this._password) && (e = this._username + (null !== this._password ? ":" + this._password : "") + "@"),
                            this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
                        },
                        set href(e) {
                            u.call(this),
                            s.call(this, e)
                        },
                        get protocol() {
                            return this._scheme + ":"
                        },
                        set protocol(e) {
                            this._isInvalid || s.call(this, e + ":", "scheme start")
                        },
                        get host() {
                            return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
                        },
                        set host(e) {
                            !this._isInvalid && this._isRelative && s.call(this, e, "host")
                        },
                        get hostname() {
                            return this._host
                        },
                        set hostname(e) {
                            !this._isInvalid && this._isRelative && s.call(this, e, "hostname")
                        },
                        get port() {
                            return this._port
                        },
                        set port(e) {
                            !this._isInvalid && this._isRelative && s.call(this, e, "port")
                        },
                        get pathname() {
                            return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
                        },
                        set pathname(e) {
                            !this._isInvalid && this._isRelative && (this._path = [],
                            s.call(this, e, "relative path start"))
                        },
                        get search() {
                            return this._isInvalid || !this._query || "?" === this._query ? "" : this._query
                        },
                        set search(e) {
                            !this._isInvalid && this._isRelative && (this._query = "?",
                            "?" === e[0] && (e = e.slice(1)),
                            s.call(this, e, "query"))
                        },
                        get hash() {
                            return this._isInvalid || !this._fragment || "#" === this._fragment ? "" : this._fragment
                        },
                        set hash(e) {
                            this._isInvalid || (this._fragment = "#",
                            "#" === e[0] && (e = e.slice(1)),
                            s.call(this, e, "fragment"))
                        },
                        get origin() {
                            var e;
                            if (this._isInvalid || !this._scheme)
                                return "";
                            switch (this._scheme) {
                            case "data":
                            case "file":
                            case "javascript":
                            case "mailto":
                                return "null";
                            case "blob":
                                try {
                                    return new l(this._schemeData).origin || "null"
                                } catch (t) {}
                                return "null"
                            }
                            return e = this.host,
                            e ? this._scheme + "://" + e : ""
                        }
                    };
                    var b = i.URL;
                    b && (l.createObjectURL = function() {
                        return b.createObjectURL.apply(b, arguments)
                    }
                    ,
                    l.revokeObjectURL = function(e) {
                        b.revokeObjectURL(e)
                    }
                    ),
                    i.URL = l
                }
            }(),
            function() {
                Object.values || (Object.values = r(112))
            }()
        }
    }
    , function(e, t, r) {
        "use strict";
        r(63),
        e.exports = r(5).String.includes
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3)
          , i = r(64)
          , a = "includes";
        n(n.P + n.F * r(66)(a), "String", {
            includes: function(e) {
                return !!~i(this, e, a).indexOf(e, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }
    , function(e, t, r) {
        "use strict";
        var n = r(65)
          , i = r(20);
        e.exports = function(e, t, r) {
            if (n(t))
                throw TypeError("String#" + r + " doesn't accept regex!");
            return String(i(e))
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2)
          , i = r(13)
          , a = r(1)("match");
        e.exports = function(e) {
            var t;
            return n(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" == i(e))
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(1)("match");
        e.exports = function(e) {
            var t = /./;
            try {
                "/./"[e](t)
            } catch (r) {
                try {
                    return t[n] = !1,
                    !"/./"[e](t)
                } catch (i) {}
            }
            return !0
        }
    }
    , function(e, t, r) {
        "use strict";
        r(68),
        e.exports = r(5).Array.includes
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3)
          , i = r(43)(!0);
        n(n.P, "Array", {
            includes: function(e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        }),
        r(44)("includes")
    }
    , function(e, t, r) {
        "use strict";
        var n = r(30)
          , i = Math.max
          , a = Math.min;
        e.exports = function(e, t) {
            return e = n(e),
            0 > e ? i(e + t, 0) : a(e, t)
        }
    }
    , function(e, t, r) {
        "use strict";
        r(71),
        e.exports = r(5).Math.log2
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3);
        n(n.S, "Math", {
            log2: function(e) {
                return Math.log(e) / Math.LN2
            }
        })
    }
    , function(e, t, r) {
        "use strict";
        r(73),
        e.exports = r(5).Number.isNaN
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3);
        n(n.S, "Number", {
            isNaN: function(e) {
                return e != e
            }
        })
    }
    , function(e, t, r) {
        "use strict";
        r(75),
        e.exports = r(5).Number.isInteger
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3);
        n(n.S, "Number", {
            isInteger: r(76)
        })
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2)
          , i = Math.floor;
        e.exports = function(e) {
            return !n(e) && isFinite(e) && i(e) === e
        }
    }
    , function(e, t, r) {
        "use strict";
        r(45),
        r(78),
        r(50),
        r(87),
        r(94),
        r(95),
        e.exports = r(5).Promise
    }
    , function(e, t, r) {
        "use strict";
        var n = r(79)(!0);
        r(46)(String, "String", function(e) {
            this._t = String(e),
            this._i = 0
        }, function() {
            var e, t = this._t, r = this._i;
            return r >= t.length ? {
                value: void 0,
                done: !0
            } : (e = n(t, r),
            this._i += e.length,
            {
                value: e,
                done: !1
            })
        })
    }
    , function(e, t, r) {
        "use strict";
        var n = r(30)
          , i = r(20);
        e.exports = function(e) {
            return function(t, r) {
                var a, o, s = String(i(t)), u = n(r), l = s.length;
                return 0 > u || u >= l ? e ? "" : void 0 : (a = s.charCodeAt(u),
                55296 > a || a > 56319 || u + 1 === l || (o = s.charCodeAt(u + 1)) < 56320 || o > 57343 ? e ? s.charAt(u) : a : e ? s.slice(u, u + 2) : (a - 55296 << 10) + (o - 56320) + 65536)
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(81)
          , i = r(27)
          , a = r(22)
          , o = {};
        r(10)(o, r(1)("iterator"), function() {
            return this
        }),
        e.exports = function(e, t, r) {
            e.prototype = n(o, {
                next: i(1, r)
            }),
            a(e, t + " Iterator")
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(6)
          , i = r(82)
          , a = r(48)
          , o = r(32)("IE_PROTO")
          , s = function() {}
          , u = "prototype"
          , l = function() {
            var e, t = r(26)("iframe"), n = a.length, i = "<", o = ">";
            for (t.style.display = "none",
            r(49).appendChild(t),
            t.src = "javascript:",
            e = t.contentWindow.document,
            e.open(),
            e.write(i + "script" + o + "document.F=Object" + i + "/script" + o),
            e.close(),
            l = e.F; n--; )
                delete l[u][a[n]];
            return l()
        };
        e.exports = Object.create || function(e, t) {
            var r;
            return null !== e ? (s[u] = n(e),
            r = new s,
            s[u] = null,
            r[o] = e) : r = l(),
            void 0 === t ? r : i(r, t)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(14)
          , i = r(6)
          , a = r(21);
        e.exports = r(11) ? Object.defineProperties : function(e, t) {
            i(e);
            for (var r, o = a(t), s = o.length, u = 0; s > u; )
                n.f(e, r = o[u++], t[r]);
            return e
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(8)
          , i = r(16)
          , a = r(43)(!1)
          , o = r(32)("IE_PROTO");
        e.exports = function(e, t) {
            var r, s = i(e), u = 0, l = [];
            for (r in s)
                r != o && n(s, r) && l.push(r);
            for (; t.length > u; )
                n(s, r = t[u++]) && (~a(l, r) || l.push(r));
            return l
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(8)
          , i = r(33)
          , a = r(32)("IE_PROTO")
          , o = Object.prototype;
        e.exports = Object.getPrototypeOf || function(e) {
            return e = i(e),
            n(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(44)
          , i = r(86)
          , a = r(17)
          , o = r(16);
        e.exports = r(46)(Array, "Array", function(e, t) {
            this._t = o(e),
            this._i = 0,
            this._k = t
        }, function() {
            var e = this._t
              , t = this._k
              , r = this._i++;
            return !e || r >= e.length ? (this._t = void 0,
            i(1)) : "keys" == t ? i(0, r) : "values" == t ? i(0, e[r]) : i(0, [r, e[r]])
        }, "values"),
        a.Arguments = a.Array,
        n("keys"),
        n("values"),
        n("entries")
    }
    , function(e) {
        "use strict";
        e.exports = function(e, t) {
            return {
                value: t,
                done: !!e
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n, i, a, o, s = r(47), u = r(4), l = r(9), c = r(31), h = r(3), d = r(2), f = r(15), p = r(34), m = r(23), v = r(51), g = r(52).set, b = r(92)(), _ = r(35), y = r(53), A = r(54), S = "Promise", w = u.TypeError, C = u.process, P = u[S], k = "process" == c(C), R = function() {}, x = i = _.f, T = !!function() {
            try {
                var e = P.resolve(1)
                  , t = (e.constructor = {})[r(1)("species")] = function(e) {
                    e(R, R)
                }
                ;
                return (k || "function" == typeof PromiseRejectionEvent) && e.then(R)instanceof t
            } catch (n) {}
        }(), E = function(e) {
            var t;
            return d(e) && "function" == typeof (t = e.then) ? t : !1
        }, O = function(e, t) {
            if (!e._n) {
                e._n = !0;
                var r = e._c;
                b(function() {
                    for (var n = e._v, i = 1 == e._s, a = 0, o = function(t) {
                        var r, a, o, s = i ? t.ok : t.fail, u = t.resolve, l = t.reject, c = t.domain;
                        try {
                            s ? (i || (2 == e._h && F(e),
                            e._h = 1),
                            s === !0 ? r = n : (c && c.enter(),
                            r = s(n),
                            c && (c.exit(),
                            o = !0)),
                            r === t.promise ? l(w("Promise-chain cycle")) : (a = E(r)) ? a.call(r, u, l) : u(r)) : l(n)
                        } catch (h) {
                            c && !o && c.exit(),
                            l(h)
                        }
                    }; r.length > a; )
                        o(r[a++]);
                    e._c = [],
                    e._n = !1,
                    t && !e._h && j(e)
                })
            }
        }, j = function(e) {
            g.call(u, function() {
                var t, r, n, i = e._v, a = I(e);
                if (a && (t = y(function() {
                    k ? C.emit("unhandledRejection", i, e) : (r = u.onunhandledrejection) ? r({
                        promise: e,
                        reason: i
                    }) : (n = u.console) && n.error && n.error("Unhandled promise rejection", i)
                }),
                e._h = k || I(e) ? 2 : 1),
                e._a = void 0,
                a && t.e)
                    throw t.v
            })
        }, I = function(e) {
            return 1 !== e._h && 0 === (e._a || e._c).length
        }, F = function(e) {
            g.call(u, function() {
                var t;
                k ? C.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
                    promise: e,
                    reason: e._v
                })
            })
        }, L = function(e) {
            var t = this;
            t._d || (t._d = !0,
            t = t._w || t,
            t._v = e,
            t._s = 2,
            t._a || (t._a = t._c.slice()),
            O(t, !0))
        }, M = function D(e) {
            var t, r = this;
            if (!r._d) {
                r._d = !0,
                r = r._w || r;
                try {
                    if (r === e)
                        throw w("Promise can't be resolved itself");
                    (t = E(e)) ? b(function() {
                        var n = {
                            _w: r,
                            _d: !1
                        };
                        try {
                            t.call(e, l(D, n, 1), l(L, n, 1))
                        } catch (i) {
                            L.call(n, i)
                        }
                    }) : (r._v = e,
                    r._s = 1,
                    O(r, !1))
                } catch (n) {
                    L.call({
                        _w: r,
                        _d: !1
                    }, n)
                }
            }
        };
        T || (P = function(e) {
            p(this, P, S, "_h"),
            f(e),
            n.call(this);
            try {
                e(l(M, this, 1), l(L, this, 1))
            } catch (t) {
                L.call(this, t)
            }
        }
        ,
        n = function() {
            this._c = [],
            this._a = void 0,
            this._s = 0,
            this._d = !1,
            this._v = void 0,
            this._h = 0,
            this._n = !1
        }
        ,
        n.prototype = r(36)(P.prototype, {
            then: function(e, t) {
                var r = x(v(this, P));
                return r.ok = "function" == typeof e ? e : !0,
                r.fail = "function" == typeof t && t,
                r.domain = k ? C.domain : void 0,
                this._c.push(r),
                this._a && this._a.push(r),
                this._s && O(this, !1),
                r.promise
            },
            "catch": function(e) {
                return this.then(void 0, e)
            }
        }),
        a = function() {
            var e = new n;
            this.promise = e,
            this.resolve = l(M, e, 1),
            this.reject = l(L, e, 1)
        }
        ,
        _.f = x = function(e) {
            return e === P || e === o ? new a(e) : i(e)
        }
        ),
        h(h.G + h.W + h.F * !T, {
            Promise: P
        }),
        r(22)(P, S),
        r(93)(S),
        o = r(5)[S],
        h(h.S + h.F * !T, S, {
            reject: function(e) {
                var t = x(this)
                  , r = t.reject;
                return r(e),
                t.promise
            }
        }),
        h(h.S + h.F * (s || !T), S, {
            resolve: function(e) {
                return A(s && this === o ? P : this, e)
            }
        }),
        h(h.S + h.F * !(T && r(55)(function(e) {
            P.all(e)["catch"](R)
        })), S, {
            all: function(e) {
                var t = this
                  , r = x(t)
                  , n = r.resolve
                  , i = r.reject
                  , a = y(function() {
                    var r = []
                      , a = 0
                      , o = 1;
                    m(e, !1, function(e) {
                        var s = a++
                          , u = !1;
                        r.push(void 0),
                        o++,
                        t.resolve(e).then(function(e) {
                            u || (u = !0,
                            r[s] = e,
                            --o || n(r))
                        }, i)
                    }),
                    --o || n(r)
                });
                return a.e && i(a.v),
                r.promise
            },
            race: function(e) {
                var t = this
                  , r = x(t)
                  , n = r.reject
                  , i = y(function() {
                    m(e, !1, function(e) {
                        t.resolve(e).then(r.resolve, n)
                    })
                });
                return i.e && n(i.v),
                r.promise
            }
        })
    }
    , function(e, t, r) {
        "use strict";
        var n = r(6);
        e.exports = function(e, t, r, i) {
            try {
                return i ? t(n(r)[0], r[1]) : t(r)
            } catch (a) {
                var o = e["return"];
                throw void 0 !== o && n(o.call(e)),
                a
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(17)
          , i = r(1)("iterator")
          , a = Array.prototype;
        e.exports = function(e) {
            return void 0 !== e && (n.Array === e || a[i] === e)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(31)
          , i = r(1)("iterator")
          , a = r(17);
        e.exports = r(5).getIteratorMethod = function(e) {
            return void 0 != e ? e[i] || e["@@iterator"] || a[n(e)] : void 0
        }
    }
    , function(e) {
        "use strict";
        e.exports = function(e, t, r) {
            var n = void 0 === r;
            switch (t.length) {
            case 0:
                return n ? e() : e.call(r);
            case 1:
                return n ? e(t[0]) : e.call(r, t[0]);
            case 2:
                return n ? e(t[0], t[1]) : e.call(r, t[0], t[1]);
            case 3:
                return n ? e(t[0], t[1], t[2]) : e.call(r, t[0], t[1], t[2]);
            case 4:
                return n ? e(t[0], t[1], t[2], t[3]) : e.call(r, t[0], t[1], t[2], t[3])
            }
            return e.apply(r, t)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(4)
          , i = r(52).set
          , a = n.MutationObserver || n.WebKitMutationObserver
          , o = n.process
          , s = n.Promise
          , u = "process" == r(13)(o);
        e.exports = function() {
            var e, t, r, l = function() {
                var n, i;
                for (u && (n = o.domain) && n.exit(); e; ) {
                    i = e.fn,
                    e = e.next;
                    try {
                        i()
                    } catch (a) {
                        throw e ? r() : t = void 0,
                        a
                    }
                }
                t = void 0,
                n && n.enter()
            };
            if (u)
                r = function() {
                    o.nextTick(l)
                }
                ;
            else if (!a || n.navigator && n.navigator.standalone)
                if (s && s.resolve) {
                    var c = s.resolve();
                    r = function() {
                        c.then(l)
                    }
                } else
                    r = function() {
                        i.call(n, l)
                    }
                    ;
            else {
                var h = !0
                  , d = document.createTextNode("");
                new a(l).observe(d, {
                    characterData: !0
                }),
                r = function() {
                    d.data = h = !h
                }
            }
            return function(n) {
                var i = {
                    fn: n,
                    next: void 0
                };
                t && (t.next = i),
                e || (e = i,
                r()),
                t = i
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(4)
          , i = r(14)
          , a = r(11)
          , o = r(1)("species");
        e.exports = function(e) {
            var t = n[e];
            a && t && !t[o] && i.f(t, o, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3)
          , i = r(5)
          , a = r(4)
          , o = r(51)
          , s = r(54);
        n(n.P + n.R, "Promise", {
            "finally": function(e) {
                var t = o(this, i.Promise || a.Promise)
                  , r = "function" == typeof e;
                return this.then(r ? function(r) {
                    return s(t, e()).then(function() {
                        return r
                    })
                }
                : e, r ? function(r) {
                    return s(t, e()).then(function() {
                        throw r
                    })
                }
                : e)
            }
        })
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3)
          , i = r(35)
          , a = r(53);
        n(n.S, "Promise", {
            "try": function(e) {
                var t = i.f(this)
                  , r = a(e);
                return (r.e ? t.reject : t.resolve)(r.v),
                t.promise
            }
        })
    }
    , function(e, t, r) {
        "use strict";
        r(45),
        r(50),
        r(97),
        r(108),
        r(110),
        e.exports = r(5).WeakMap
    }
    , function(e, t, r) {
        "use strict";
        var n, i = r(56)(0), a = r(7), o = r(37), s = r(101), u = r(103), l = r(2), c = r(12), h = r(57), d = "WeakMap", f = o.getWeak, p = Object.isExtensible, m = u.ufstore, v = {}, g = function(e) {
            return function() {
                return e(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, b = {
            get: function(e) {
                if (l(e)) {
                    var t = f(e);
                    return t === !0 ? m(h(this, d)).get(e) : t ? t[this._i] : void 0
                }
            },
            set: function(e, t) {
                return u.def(h(this, d), e, t)
            }
        }, _ = e.exports = r(104)(d, g, b, u, !0, !0);
        c(function() {
            return 7 != (new _).set((Object.freeze || Object)(v), 7).get(v)
        }) && (n = u.getConstructor(g, d),
        s(n.prototype, b),
        o.NEED = !0,
        i(["delete", "has", "get", "set"], function(e) {
            var t = _.prototype
              , r = t[e];
            a(t, e, function(t, i) {
                if (l(t) && !p(t)) {
                    this._f || (this._f = new n);
                    var a = this._f[e](t, i);
                    return "set" == e ? this : a
                }
                return r.call(this, t, i)
            })
        }))
    }
    , function(e, t, r) {
        "use strict";
        var n = r(99);
        e.exports = function(e, t) {
            return new (n(e))(t)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2)
          , i = r(100)
          , a = r(1)("species");
        e.exports = function(e) {
            var t;
            return i(e) && (t = e.constructor,
            "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0),
            n(t) && (t = t[a],
            null === t && (t = void 0))),
            void 0 === t ? Array : t
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(13);
        e.exports = Array.isArray || function(e) {
            return "Array" == n(e)
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(21)
          , i = r(102)
          , a = r(38)
          , o = r(33)
          , s = r(28)
          , u = Object.assign;
        e.exports = !u || r(12)(function() {
            var e = {}
              , t = {}
              , r = Symbol()
              , n = "abcdefghijklmnopqrst";
            return e[r] = 7,
            n.split("").forEach(function(e) {
                t[e] = e
            }),
            7 != u({}, e)[r] || Object.keys(u({}, t)).join("") != n
        }) ? function(e) {
            for (var t = o(e), r = arguments.length, u = 1, l = i.f, c = a.f; r > u; )
                for (var h, d = s(arguments[u++]), f = l ? n(d).concat(l(d)) : n(d), p = f.length, m = 0; p > m; )
                    c.call(d, h = f[m++]) && (t[h] = d[h]);
            return t
        }
        : u
    }
    , function(e, t) {
        "use strict";
        t.f = Object.getOwnPropertySymbols
    }
    , function(e, t, r) {
        "use strict";
        var n = r(36)
          , i = r(37).getWeak
          , a = r(6)
          , o = r(2)
          , s = r(34)
          , u = r(23)
          , l = r(56)
          , c = r(8)
          , h = r(57)
          , d = l(5)
          , f = l(6)
          , p = 0
          , m = function(e) {
            return e._l || (e._l = new v)
        }
          , v = function() {
            this.a = []
        }
          , g = function(e, t) {
            return d(e.a, function(e) {
                return e[0] === t
            })
        };
        v.prototype = {
            get: function(e) {
                var t = g(this, e);
                return t ? t[1] : void 0
            },
            has: function(e) {
                return !!g(this, e)
            },
            set: function(e, t) {
                var r = g(this, e);
                r ? r[1] = t : this.a.push([e, t])
            },
            "delete": function(e) {
                var t = f(this.a, function(t) {
                    return t[0] === e
                });
                return ~t && this.a.splice(t, 1),
                !!~t
            }
        },
        e.exports = {
            getConstructor: function(e, t, r, a) {
                var l = e(function(e, n) {
                    s(e, l, t, "_i"),
                    e._t = t,
                    e._i = p++,
                    e._l = void 0,
                    void 0 != n && u(n, r, e[a], e)
                });
                return n(l.prototype, {
                    "delete": function(e) {
                        if (!o(e))
                            return !1;
                        var r = i(e);
                        return r === !0 ? m(h(this, t))["delete"](e) : r && c(r, this._i) && delete r[this._i]
                    },
                    has: function(e) {
                        if (!o(e))
                            return !1;
                        var r = i(e);
                        return r === !0 ? m(h(this, t)).has(e) : r && c(r, this._i)
                    }
                }),
                l
            },
            def: function(e, t, r) {
                var n = i(a(t), !0);
                return n === !0 ? m(e).set(t, r) : n[e._i] = r,
                e
            },
            ufstore: m
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(4)
          , i = r(3)
          , a = r(7)
          , o = r(36)
          , s = r(37)
          , u = r(23)
          , l = r(34)
          , c = r(2)
          , h = r(12)
          , d = r(55)
          , f = r(22)
          , p = r(105);
        e.exports = function(e, t, r, m, v, g) {
            var b = n[e]
              , _ = b
              , y = v ? "set" : "add"
              , A = _ && _.prototype
              , S = {}
              , w = function(e) {
                var t = A[e];
                a(A, e, "delete" == e ? function(e) {
                    return g && !c(e) ? !1 : t.call(this, 0 === e ? 0 : e)
                }
                : "has" == e ? function(e) {
                    return g && !c(e) ? !1 : t.call(this, 0 === e ? 0 : e)
                }
                : "get" == e ? function(e) {
                    return g && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                }
                : "add" == e ? function(e) {
                    return t.call(this, 0 === e ? 0 : e),
                    this
                }
                : function(e, r) {
                    return t.call(this, 0 === e ? 0 : e, r),
                    this
                }
                )
            };
            if ("function" == typeof _ && (g || A.forEach && !h(function() {
                (new _).entries().next()
            }))) {
                var C = new _
                  , P = C[y](g ? {} : -0, 1) != C
                  , k = h(function() {
                    C.has(1)
                })
                  , R = d(function(e) {
                    new _(e)
                })
                  , x = !g && h(function() {
                    for (var e = new _, t = 5; t--; )
                        e[y](t, t);
                    return !e.has(-0)
                });
                R || (_ = t(function(t, r) {
                    l(t, _, e);
                    var n = p(new b, t, _);
                    return void 0 != r && u(r, v, n[y], n),
                    n
                }),
                _.prototype = A,
                A.constructor = _),
                (k || x) && (w("delete"),
                w("has"),
                v && w("get")),
                (x || P) && w(y),
                g && A.clear && delete A.clear
            } else
                _ = m.getConstructor(t, e, v, y),
                o(_.prototype, r),
                s.NEED = !0;
            return f(_, e),
            S[e] = _,
            i(i.G + i.W + i.F * (_ != b), S),
            g || m.setStrong(_, e, v),
            _
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2)
          , i = r(106).set;
        e.exports = function(e, t, r) {
            var a, o = t.constructor;
            return o !== r && "function" == typeof o && (a = o.prototype) !== r.prototype && n(a) && i && i(e, a),
            e
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(2)
          , i = r(6)
          , a = function(e, t) {
            if (i(e),
            !n(t) && null !== t)
                throw TypeError(t + ": can't set as prototype!")
        };
        e.exports = {
            set: Object.setPrototypeOf || ("__proto__"in {} ? function(e, t, n) {
                try {
                    n = r(9)(Function.call, r(107).f(Object.prototype, "__proto__").set, 2),
                    n(e, []),
                    t = !(e instanceof Array)
                } catch (i) {
                    t = !0
                }
                return function(e, r) {
                    return a(e, r),
                    t ? e.__proto__ = r : n(e, r),
                    e
                }
            }({}, !1) : void 0),
            check: a
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = r(38)
          , i = r(27)
          , a = r(16)
          , o = r(41)
          , s = r(8)
          , u = r(40)
          , l = Object.getOwnPropertyDescriptor;
        t.f = r(11) ? l : function(e, t) {
            if (e = a(e),
            t = o(t, !0),
            u)
                try {
                    return l(e, t)
                } catch (r) {}
            return s(e, t) ? i(!n.f.call(e, t), e[t]) : void 0
        }
    }
    , function(e, t, r) {
        "use strict";
        r(109)("WeakMap")
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3);
        e.exports = function(e) {
            n(n.S, e, {
                of: function() {
                    for (var e = arguments.length, t = new Array(e); e--; )
                        t[e] = arguments[e];
                    return new this(t)
                }
            })
        }
    }
    , function(e, t, r) {
        "use strict";
        r(111)("WeakMap")
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3)
          , i = r(15)
          , a = r(9)
          , o = r(23);
        e.exports = function(e) {
            n(n.S, e, {
                from: function(e) {
                    var t, r, n, s, u = arguments[1];
                    return i(this),
                    t = void 0 !== u,
                    t && i(u),
                    void 0 == e ? new this : (r = [],
                    t ? (n = 0,
                    s = a(u, arguments[2], 2),
                    o(e, !1, function(e) {
                        r.push(s(e, n++))
                    })) : o(e, !1, r.push, r),
                    new this(r))
                }
            })
        }
    }
    , function(e, t, r) {
        "use strict";
        r(113),
        e.exports = r(5).Object.values
    }
    , function(e, t, r) {
        "use strict";
        var n = r(3)
          , i = r(114)(!1);
        n(n.S, "Object", {
            values: function(e) {
                return i(e)
            }
        })
    }
    , function(e, t, r) {
        "use strict";
        var n = r(21)
          , i = r(16)
          , a = r(38).f;
        e.exports = function(e) {
            return function(t) {
                for (var r, o = i(t), s = n(o), u = s.length, l = 0, c = []; u > l; )
                    a.call(o, r = s[l++]) && c.push(e ? [r, o[r]] : o[r]);
                return c
            }
        }
    }
    , function(e, t, r) {
        "use strict";
        var n = !1;
        if ("undefined" != typeof ReadableStream)
            try {
                new ReadableStream({
                    start: function(e) {
                        e.close()
                    }
                }),
                n = !0
            } catch (i) {}
        t.ReadableStream = n ? ReadableStream : r(116).ReadableStream
    }
    , function(e, t) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        !function(e, t) {
            for (var r in t)
                e[r] = t[r]
        }(t, function(e) {
            function t(n) {
                if (r[n])
                    return r[n].exports;
                var i = r[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return e[n].call(i.exports, i, i.exports, t),
                i.l = !0,
                i.exports
            }
            var r = {};
            return t.m = e,
            t.c = r,
            t.i = function(e) {
                return e
            }
            ,
            t.d = function(e, r, n) {
                t.o(e, r) || Object.defineProperty(e, r, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                })
            }
            ,
            t.n = function(e) {
                var r = e && e.__esModule ? function() {
                    return e["default"]
                }
                : function() {
                    return e
                }
                ;
                return t.d(r, "a", r),
                r
            }
            ,
            t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            t.p = "",
            t(t.s = 7)
        }([function(e, t, n) {
            function i(e) {
                return "string" == typeof e || "symbol" === ("undefined" == typeof e ? "undefined" : o(e))
            }
            function a(e, t, r) {
                if ("function" != typeof e)
                    throw new TypeError("Argument is not a function");
                return Function.prototype.apply.call(e, t, r)
            }
            var o = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? function(e) {
                return "undefined" == typeof e ? "undefined" : r(e)
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : r(e)
            }
              , s = n(1)
              , u = s.assert;
            t.typeIsObject = function(e) {
                return "object" === ("undefined" == typeof e ? "undefined" : o(e)) && null !== e || "function" == typeof e
            }
            ,
            t.createDataProperty = function(e, r, n) {
                u(t.typeIsObject(e)),
                Object.defineProperty(e, r, {
                    value: n,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                })
            }
            ,
            t.createArrayFromList = function(e) {
                return e.slice()
            }
            ,
            t.ArrayBufferCopy = function(e, t, r, n, i) {
                new Uint8Array(e).set(new Uint8Array(r,n,i), t)
            }
            ,
            t.CreateIterResultObject = function(e, t) {
                u("boolean" == typeof t);
                var r = {};
                return Object.defineProperty(r, "value", {
                    value: e,
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                }),
                Object.defineProperty(r, "done", {
                    value: t,
                    enumerable: !0,
                    writable: !0,
                    configurable: !0
                }),
                r
            }
            ,
            t.IsFiniteNonNegativeNumber = function(e) {
                return Number.isNaN(e) ? !1 : 1 / 0 === e ? !1 : 0 > e ? !1 : !0
            }
            ,
            t.InvokeOrNoop = function(e, t, r) {
                u(void 0 !== e),
                u(i(t)),
                u(Array.isArray(r));
                var n = e[t];
                return void 0 === n ? void 0 : a(n, e, r)
            }
            ,
            t.PromiseInvokeOrNoop = function(e, r, n) {
                u(void 0 !== e),
                u(i(r)),
                u(Array.isArray(n));
                try {
                    return Promise.resolve(t.InvokeOrNoop(e, r, n))
                } catch (a) {
                    return Promise.reject(a)
                }
            }
            ,
            t.PromiseInvokeOrPerformFallback = function(e, t, r, n, o) {
                u(void 0 !== e),
                u(i(t)),
                u(Array.isArray(r)),
                u(Array.isArray(o));
                var s = void 0;
                try {
                    s = e[t]
                } catch (l) {
                    return Promise.reject(l)
                }
                if (void 0 === s)
                    return n.apply(null, o);
                try {
                    return Promise.resolve(a(s, e, r))
                } catch (c) {
                    return Promise.reject(c)
                }
            }
            ,
            t.TransferArrayBuffer = function(e) {
                return e.slice()
            }
            ,
            t.ValidateAndNormalizeHighWaterMark = function(e) {
                if (e = Number(e),
                Number.isNaN(e) || 0 > e)
                    throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN");
                return e
            }
            ,
            t.ValidateAndNormalizeQueuingStrategy = function(e, r) {
                if (void 0 !== e && "function" != typeof e)
                    throw new TypeError("size property of a queuing strategy must be a function");
                return r = t.ValidateAndNormalizeHighWaterMark(r),
                {
                    size: e,
                    highWaterMark: r
                }
            }
        }
        , function(e) {
            function t(e) {
                e && e.constructor === r && setTimeout(function() {
                    throw e
                }, 0)
            }
            function r(e) {
                this.name = "AssertionError",
                this.message = e || "",
                this.stack = (new Error).stack
            }
            function n(e, t) {
                if (!e)
                    throw new r(t)
            }
            r.prototype = Object.create(Error.prototype),
            r.prototype.constructor = r,
            e.exports = {
                rethrowAssertionErrorRejection: t,
                AssertionError: r,
                assert: n
            }
        }
        , function(e, t, r) {
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(e) {
                return new _t(e)
            }
            function a(e) {
                return lt(e) && Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? !0 : !1
            }
            function o(e) {
                return ht(a(e) === !0, "IsWritableStreamLocked should only be used on known writable streams"),
                void 0 === e._writer ? !1 : !0
            }
            function s(e, t) {
                var r = e._state;
                if ("closed" === r)
                    return Promise.resolve(void 0);
                if ("errored" === r)
                    return Promise.reject(e._storedError);
                var n = new TypeError("Requested to abort");
                if (void 0 !== e._pendingAbortRequest)
                    return Promise.reject(n);
                ht("writable" === r || "erroring" === r, "state must be writable or erroring");
                var i = !1;
                "erroring" === r && (i = !0,
                t = void 0);
                var a = new Promise(function(r, n) {
                    e._pendingAbortRequest = {
                        _resolve: r,
                        _reject: n,
                        _reason: t,
                        _wasAlreadyErroring: i
                    }
                }
                );
                return i === !1 && c(e, n),
                a
            }
            function u(e) {
                ht(o(e) === !0),
                ht("writable" === e._state);
                var t = new Promise(function(t, r) {
                    var n = {
                        _resolve: t,
                        _reject: r
                    };
                    e._writeRequests.push(n)
                }
                );
                return t
            }
            function l(e, t) {
                var r = e._state;
                return "writable" === r ? void c(e, t) : (ht("erroring" === r),
                void h(e))
            }
            function c(e, t) {
                ht(void 0 === e._storedError, "stream._storedError === undefined"),
                ht("writable" === e._state, "state must be writable");
                var r = e._writableStreamController;
                ht(void 0 !== r, "controller must not be undefined"),
                e._state = "erroring",
                e._storedError = t;
                var n = e._writer;
                void 0 !== n && R(n, t),
                g(e) === !1 && r._started === !0 && h(e)
            }
            function h(e) {
                ht("erroring" === e._state, "stream._state === erroring"),
                ht(g(e) === !1, "WritableStreamHasOperationMarkedInFlight(stream) === false"),
                e._state = "errored",
                e._writableStreamController.__errorSteps();
                for (var t = e._storedError, r = 0; r < e._writeRequests.length; r++) {
                    var n = e._writeRequests[r];
                    n._reject(t)
                }
                if (e._writeRequests = [],
                void 0 === e._pendingAbortRequest)
                    return void y(e);
                var i = e._pendingAbortRequest;
                if (e._pendingAbortRequest = void 0,
                i._wasAlreadyErroring === !0)
                    return i._reject(t),
                    void y(e);
                var a = e._writableStreamController.__abortSteps(i._reason);
                a.then(function() {
                    i._resolve(),
                    y(e)
                }, function(t) {
                    i._reject(t),
                    y(e)
                })
            }
            function d(e) {
                ht(void 0 !== e._inFlightWriteRequest),
                e._inFlightWriteRequest._resolve(void 0),
                e._inFlightWriteRequest = void 0
            }
            function f(e, t) {
                ht(void 0 !== e._inFlightWriteRequest),
                e._inFlightWriteRequest._reject(t),
                e._inFlightWriteRequest = void 0,
                ht("writable" === e._state || "erroring" === e._state),
                l(e, t)
            }
            function p(e) {
                ht(void 0 !== e._inFlightCloseRequest),
                e._inFlightCloseRequest._resolve(void 0),
                e._inFlightCloseRequest = void 0;
                var t = e._state;
                ht("writable" === t || "erroring" === t),
                "erroring" === t && (e._storedError = void 0,
                void 0 !== e._pendingAbortRequest && (e._pendingAbortRequest._resolve(),
                e._pendingAbortRequest = void 0)),
                e._state = "closed";
                var r = e._writer;
                void 0 !== r && K(r),
                ht(void 0 === e._pendingAbortRequest, "stream._pendingAbortRequest === undefined"),
                ht(void 0 === e._storedError, "stream._storedError === undefined")
            }
            function m(e, t) {
                ht(void 0 !== e._inFlightCloseRequest),
                e._inFlightCloseRequest._reject(t),
                e._inFlightCloseRequest = void 0,
                ht("writable" === e._state || "erroring" === e._state),
                void 0 !== e._pendingAbortRequest && (e._pendingAbortRequest._reject(t),
                e._pendingAbortRequest = void 0),
                l(e, t)
            }
            function v(e) {
                return void 0 === e._closeRequest && void 0 === e._inFlightCloseRequest ? !1 : !0
            }
            function g(e) {
                return void 0 === e._inFlightWriteRequest && void 0 === e._inFlightCloseRequest ? !1 : !0
            }
            function b(e) {
                ht(void 0 === e._inFlightCloseRequest),
                ht(void 0 !== e._closeRequest),
                e._inFlightCloseRequest = e._closeRequest,
                e._closeRequest = void 0
            }
            function _(e) {
                ht(void 0 === e._inFlightWriteRequest, "there must be no pending write request"),
                ht(0 !== e._writeRequests.length, "writeRequests must not be empty"),
                e._inFlightWriteRequest = e._writeRequests.shift()
            }
            function y(e) {
                ht("errored" === e._state, '_stream_.[[state]] is `"errored"`'),
                void 0 !== e._closeRequest && (ht(void 0 === e._inFlightCloseRequest),
                e._closeRequest._reject(e._storedError),
                e._closeRequest = void 0);
                var t = e._writer;
                void 0 !== t && (V(t, e._storedError),
                t._closedPromise.catch(function() {}))
            }
            function A(e, t) {
                ht("writable" === e._state),
                ht(v(e) === !1);
                var r = e._writer;
                void 0 !== r && t !== e._backpressure && (t === !0 ? tt(r) : (ht(t === !1),
                nt(r))),
                e._backpressure = t
            }
            function S(e) {
                return lt(e) && Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? !0 : !1
            }
            function w(e, t) {
                var r = e._ownerWritableStream;
                return ht(void 0 !== r),
                s(r, t)
            }
            function C(e) {
                var t = e._ownerWritableStream;
                ht(void 0 !== t);
                var r = t._state;
                if ("closed" === r || "errored" === r)
                    return Promise.reject(new TypeError("The stream (in " + r + " state) is not in the writable state and cannot be closed"));
                ht("writable" === r || "erroring" === r),
                ht(v(t) === !1);
                var n = new Promise(function(e, r) {
                    var n = {
                        _resolve: e,
                        _reject: r
                    };
                    t._closeRequest = n
                }
                );
                return t._backpressure === !0 && "writable" === r && nt(e),
                O(t._writableStreamController),
                n
            }
            function P(e) {
                var t = e._ownerWritableStream;
                ht(void 0 !== t);
                var r = t._state;
                return v(t) === !0 || "closed" === r ? Promise.resolve() : "errored" === r ? Promise.reject(t._storedError) : (ht("writable" === r || "erroring" === r),
                C(e))
            }
            function k(e, t) {
                "pending" === e._closedPromiseState ? V(e, t) : Q(e, t),
                e._closedPromise.catch(function() {})
            }
            function R(e, t) {
                "pending" === e._readyPromiseState ? et(e, t) : rt(e, t),
                e._readyPromise.catch(function() {})
            }
            function x(e) {
                var t = e._ownerWritableStream
                  , r = t._state;
                return "errored" === r || "erroring" === r ? null : "closed" === r ? 0 : I(t._writableStreamController)
            }
            function T(e) {
                var t = e._ownerWritableStream;
                ht(void 0 !== t),
                ht(t._writer === e);
                var r = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
                R(e, r),
                k(e, r),
                t._writer = void 0,
                e._ownerWritableStream = void 0
            }
            function E(e, t) {
                var r = e._ownerWritableStream;
                ht(void 0 !== r);
                var n = r._writableStreamController
                  , i = j(n, t);
                if (r !== e._ownerWritableStream)
                    return Promise.reject(G("write to"));
                var a = r._state;
                if ("errored" === a)
                    return Promise.reject(r._storedError);
                if (v(r) === !0 || "closed" === a)
                    return Promise.reject(new TypeError("The stream is closing or closed and cannot be written to"));
                if ("erroring" === a)
                    return Promise.reject(r._storedError);
                ht("writable" === a);
                var o = u(r);
                return F(n, t, i),
                o
            }
            function O(e) {
                mt(e, "close", 0),
                M(e)
            }
            function j(e, t) {
                var r = e._strategySize;
                if (void 0 === r)
                    return 1;
                try {
                    return r(t)
                } catch (n) {
                    return D(e, n),
                    1
                }
            }
            function I(e) {
                return e._strategyHWM - e._queueTotalSize
            }
            function F(e, t, r) {
                var n = {
                    chunk: t
                };
                try {
                    mt(e, n, r)
                } catch (i) {
                    return void D(e, i)
                }
                var a = e._controlledWritableStream;
                if (v(a) === !1 && "writable" === a._state) {
                    var o = W(e);
                    A(a, o)
                }
                M(e)
            }
            function L(e) {
                return lt(e) && Object.prototype.hasOwnProperty.call(e, "_underlyingSink") ? !0 : !1
            }
            function M(e) {
                var t = e._controlledWritableStream;
                if (e._started !== !1 && void 0 === t._inFlightWriteRequest) {
                    var r = t._state;
                    if ("closed" !== r && "errored" !== r) {
                        if ("erroring" === r)
                            return void h(t);
                        if (0 !== e._queue.length) {
                            var n = vt(e);
                            "close" === n ? N(e) : q(e, n.chunk)
                        }
                    }
                }
            }
            function D(e, t) {
                "writable" === e._controlledWritableStream._state && U(e, t)
            }
            function N(e) {
                var t = e._controlledWritableStream;
                b(t),
                pt(e),
                ht(0 === e._queue.length, "queue must be empty once the final write record is dequeued");
                var r = st(e._underlyingSink, "close", []);
                r.then(function() {
                    p(t)
                }, function(e) {
                    m(t, e)
                }).catch(dt)
            }
            function q(e, t) {
                var r = e._controlledWritableStream;
                _(r);
                var n = st(e._underlyingSink, "write", [t, e]);
                n.then(function() {
                    d(r);
                    var t = r._state;
                    if (ht("writable" === t || "erroring" === t),
                    pt(e),
                    v(r) === !1 && "writable" === t) {
                        var n = W(e);
                        A(r, n)
                    }
                    M(e)
                }, function(e) {
                    f(r, e)
                }).catch(dt)
            }
            function W(e) {
                var t = I(e);
                return 0 >= t
            }
            function U(e, t) {
                var r = e._controlledWritableStream;
                ht("writable" === r._state),
                c(r, t)
            }
            function B(e) {
                return new TypeError("WritableStream.prototype." + e + " can only be used on a WritableStream")
            }
            function z(e) {
                return new TypeError("WritableStreamDefaultWriter.prototype." + e + " can only be used on a WritableStreamDefaultWriter")
            }
            function G(e) {
                return new TypeError("Cannot " + e + " a stream using a released writer")
            }
            function H(e) {
                e._closedPromise = new Promise(function(t, r) {
                    e._closedPromise_resolve = t,
                    e._closedPromise_reject = r,
                    e._closedPromiseState = "pending"
                }
                )
            }
            function X(e, t) {
                e._closedPromise = Promise.reject(t),
                e._closedPromise_resolve = void 0,
                e._closedPromise_reject = void 0,
                e._closedPromiseState = "rejected"
            }
            function Y(e) {
                e._closedPromise = Promise.resolve(void 0),
                e._closedPromise_resolve = void 0,
                e._closedPromise_reject = void 0,
                e._closedPromiseState = "resolved"
            }
            function V(e, t) {
                ht(void 0 !== e._closedPromise_resolve, "writer._closedPromise_resolve !== undefined"),
                ht(void 0 !== e._closedPromise_reject, "writer._closedPromise_reject !== undefined"),
                ht("pending" === e._closedPromiseState, "writer._closedPromiseState is pending"),
                e._closedPromise_reject(t),
                e._closedPromise_resolve = void 0,
                e._closedPromise_reject = void 0,
                e._closedPromiseState = "rejected"
            }
            function Q(e, t) {
                ht(void 0 === e._closedPromise_resolve, "writer._closedPromise_resolve === undefined"),
                ht(void 0 === e._closedPromise_reject, "writer._closedPromise_reject === undefined"),
                ht("pending" !== e._closedPromiseState, "writer._closedPromiseState is not pending"),
                e._closedPromise = Promise.reject(t),
                e._closedPromiseState = "rejected"
            }
            function K(e) {
                ht(void 0 !== e._closedPromise_resolve, "writer._closedPromise_resolve !== undefined"),
                ht(void 0 !== e._closedPromise_reject, "writer._closedPromise_reject !== undefined"),
                ht("pending" === e._closedPromiseState, "writer._closedPromiseState is pending"),
                e._closedPromise_resolve(void 0),
                e._closedPromise_resolve = void 0,
                e._closedPromise_reject = void 0,
                e._closedPromiseState = "resolved"
            }
            function J(e) {
                e._readyPromise = new Promise(function(t, r) {
                    e._readyPromise_resolve = t,
                    e._readyPromise_reject = r
                }
                ),
                e._readyPromiseState = "pending"
            }
            function Z(e, t) {
                e._readyPromise = Promise.reject(t),
                e._readyPromise_resolve = void 0,
                e._readyPromise_reject = void 0,
                e._readyPromiseState = "rejected"
            }
            function $(e) {
                e._readyPromise = Promise.resolve(void 0),
                e._readyPromise_resolve = void 0,
                e._readyPromise_reject = void 0,
                e._readyPromiseState = "fulfilled"
            }
            function et(e, t) {
                ht(void 0 !== e._readyPromise_resolve, "writer._readyPromise_resolve !== undefined"),
                ht(void 0 !== e._readyPromise_reject, "writer._readyPromise_reject !== undefined"),
                e._readyPromise_reject(t),
                e._readyPromise_resolve = void 0,
                e._readyPromise_reject = void 0,
                e._readyPromiseState = "rejected"
            }
            function tt(e) {
                ht(void 0 === e._readyPromise_resolve, "writer._readyPromise_resolve === undefined"),
                ht(void 0 === e._readyPromise_reject, "writer._readyPromise_reject === undefined"),
                e._readyPromise = new Promise(function(t, r) {
                    e._readyPromise_resolve = t,
                    e._readyPromise_reject = r
                }
                ),
                e._readyPromiseState = "pending"
            }
            function rt(e, t) {
                ht(void 0 === e._readyPromise_resolve, "writer._readyPromise_resolve === undefined"),
                ht(void 0 === e._readyPromise_reject, "writer._readyPromise_reject === undefined"),
                e._readyPromise = Promise.reject(t),
                e._readyPromiseState = "rejected"
            }
            function nt(e) {
                ht(void 0 !== e._readyPromise_resolve, "writer._readyPromise_resolve !== undefined"),
                ht(void 0 !== e._readyPromise_reject, "writer._readyPromise_reject !== undefined"),
                e._readyPromise_resolve(void 0),
                e._readyPromise_resolve = void 0,
                e._readyPromise_reject = void 0,
                e._readyPromiseState = "fulfilled"
            }
            var it = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r),
                    n && e(t, n),
                    t
                }
            }()
              , at = r(0)
              , ot = at.InvokeOrNoop
              , st = at.PromiseInvokeOrNoop
              , ut = at.ValidateAndNormalizeQueuingStrategy
              , lt = at.typeIsObject
              , ct = r(1)
              , ht = ct.assert
              , dt = ct.rethrowAssertionErrorRejection
              , ft = r(3)
              , pt = ft.DequeueValue
              , mt = ft.EnqueueValueWithSize
              , vt = ft.PeekQueueValue
              , gt = ft.ResetQueue
              , bt = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , i = r.size
                      , a = r.highWaterMark
                      , o = void 0 === a ? 1 : a;
                    n(this, e),
                    this._state = "writable",
                    this._storedError = void 0,
                    this._writer = void 0,
                    this._writableStreamController = void 0,
                    this._writeRequests = [],
                    this._inFlightWriteRequest = void 0,
                    this._closeRequest = void 0,
                    this._inFlightCloseRequest = void 0,
                    this._pendingAbortRequest = void 0,
                    this._backpressure = !1;
                    var s = t.type;
                    if (void 0 !== s)
                        throw new RangeError("Invalid type is specified");
                    this._writableStreamController = new yt(this,t,i,o),
                    this._writableStreamController.__startSteps()
                }
                return it(e, [{
                    key: "abort",
                    value: function(e) {
                        return a(this) === !1 ? Promise.reject(B("abort")) : o(this) === !0 ? Promise.reject(new TypeError("Cannot abort a stream that already has a writer")) : s(this, e)
                    }
                }, {
                    key: "getWriter",
                    value: function() {
                        if (a(this) === !1)
                            throw B("getWriter");
                        return i(this)
                    }
                }, {
                    key: "locked",
                    get: function() {
                        if (a(this) === !1)
                            throw B("locked");
                        return o(this)
                    }
                }]),
                e
            }();
            e.exports = {
                AcquireWritableStreamDefaultWriter: i,
                IsWritableStream: a,
                IsWritableStreamLocked: o,
                WritableStream: bt,
                WritableStreamAbort: s,
                WritableStreamDefaultControllerError: U,
                WritableStreamDefaultWriterCloseWithErrorPropagation: P,
                WritableStreamDefaultWriterRelease: T,
                WritableStreamDefaultWriterWrite: E,
                WritableStreamCloseQueuedOrInFlight: v
            };
            var _t = function() {
                function e(t) {
                    if (n(this, e),
                    a(t) === !1)
                        throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance");
                    if (o(t) === !0)
                        throw new TypeError("This stream has already been locked for exclusive writing by another writer");
                    this._ownerWritableStream = t,
                    t._writer = this;
                    var r = t._state;
                    if ("writable" === r)
                        v(t) === !1 && t._backpressure === !0 ? J(this) : $(this),
                        H(this);
                    else if ("erroring" === r)
                        Z(this, t._storedError),
                        this._readyPromise.catch(function() {}),
                        H(this);
                    else if ("closed" === r)
                        $(this),
                        Y(this);
                    else {
                        ht("errored" === r, "state must be errored");
                        var i = t._storedError;
                        Z(this, i),
                        this._readyPromise.catch(function() {}),
                        X(this, i),
                        this._closedPromise.catch(function() {})
                    }
                }
                return it(e, [{
                    key: "abort",
                    value: function(e) {
                        return S(this) === !1 ? Promise.reject(z("abort")) : void 0 === this._ownerWritableStream ? Promise.reject(G("abort")) : w(this, e)
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (S(this) === !1)
                            return Promise.reject(z("close"));
                        var e = this._ownerWritableStream;
                        return void 0 === e ? Promise.reject(G("close")) : v(e) === !0 ? Promise.reject(new TypeError("cannot close an already-closing stream")) : C(this)
                    }
                }, {
                    key: "releaseLock",
                    value: function() {
                        if (S(this) === !1)
                            throw z("releaseLock");
                        var e = this._ownerWritableStream;
                        void 0 !== e && (ht(void 0 !== e._writer),
                        T(this))
                    }
                }, {
                    key: "write",
                    value: function(e) {
                        return S(this) === !1 ? Promise.reject(z("write")) : void 0 === this._ownerWritableStream ? Promise.reject(G("write to")) : E(this, e)
                    }
                }, {
                    key: "closed",
                    get: function() {
                        return S(this) === !1 ? Promise.reject(z("closed")) : this._closedPromise
                    }
                }, {
                    key: "desiredSize",
                    get: function() {
                        if (S(this) === !1)
                            throw z("desiredSize");
                        if (void 0 === this._ownerWritableStream)
                            throw G("desiredSize");
                        return x(this)
                    }
                }, {
                    key: "ready",
                    get: function() {
                        return S(this) === !1 ? Promise.reject(z("ready")) : this._readyPromise
                    }
                }]),
                e
            }()
              , yt = function() {
                function e(t, r, i, o) {
                    if (n(this, e),
                    a(t) === !1)
                        throw new TypeError("WritableStreamDefaultController can only be constructed with a WritableStream instance");
                    if (void 0 !== t._writableStreamController)
                        throw new TypeError("WritableStreamDefaultController instances can only be created by the WritableStream constructor");
                    this._controlledWritableStream = t,
                    this._underlyingSink = r,
                    this._queue = void 0,
                    this._queueTotalSize = void 0,
                    gt(this),
                    this._started = !1;
                    var s = ut(i, o);
                    this._strategySize = s.size,
                    this._strategyHWM = s.highWaterMark;
                    var u = W(this);
                    A(t, u)
                }
                return it(e, [{
                    key: "error",
                    value: function(e) {
                        if (L(this) === !1)
                            throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController");
                        var t = this._controlledWritableStream._state;
                        "writable" === t && U(this, e)
                    }
                }, {
                    key: "__abortSteps",
                    value: function(e) {
                        return st(this._underlyingSink, "abort", [e])
                    }
                }, {
                    key: "__errorSteps",
                    value: function() {
                        gt(this)
                    }
                }, {
                    key: "__startSteps",
                    value: function() {
                        var e = this
                          , t = ot(this._underlyingSink, "start", [this])
                          , r = this._controlledWritableStream;
                        Promise.resolve(t).then(function() {
                            ht("writable" === r._state || "erroring" === r._state),
                            e._started = !0,
                            M(e)
                        }, function(t) {
                            ht("writable" === r._state || "erroring" === r._state),
                            e._started = !0,
                            l(r, t)
                        }).catch(dt)
                    }
                }]),
                e
            }()
        }
        , function(e, t, r) {
            var n = r(0)
              , i = n.IsFiniteNonNegativeNumber
              , a = r(1)
              , o = a.assert;
            t.DequeueValue = function(e) {
                o("_queue"in e && "_queueTotalSize"in e, "Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."),
                o(e._queue.length > 0, "Spec-level failure: should never dequeue from an empty queue.");
                var t = e._queue.shift();
                return e._queueTotalSize -= t.size,
                e._queueTotalSize < 0 && (e._queueTotalSize = 0),
                t.value
            }
            ,
            t.EnqueueValueWithSize = function(e, t, r) {
                if (o("_queue"in e && "_queueTotalSize"in e, "Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]]."),
                r = Number(r),
                !i(r))
                    throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
                e._queue.push({
                    value: t,
                    size: r
                }),
                e._queueTotalSize += r
            }
            ,
            t.PeekQueueValue = function(e) {
                o("_queue"in e && "_queueTotalSize"in e, "Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."),
                o(e._queue.length > 0, "Spec-level failure: should never peek at an empty queue.");
                var t = e._queue[0];
                return t.value
            }
            ,
            t.ResetQueue = function(e) {
                o("_queue"in e && "_queueTotalSize"in e, "Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]]."),
                e._queue = [],
                e._queueTotalSize = 0
            }
        }
        , function(e, t, r) {
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(e) {
                return new tr(e)
            }
            function a(e) {
                return new er(e)
            }
            function o(e) {
                return Mt(e) && Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? !0 : !1
            }
            function s(e) {
                return Nt(o(e) === !0, "IsReadableStreamDisturbed should only be used on known readable streams"),
                e._disturbed
            }
            function u(e) {
                return Nt(o(e) === !0, "IsReadableStreamLocked should only be used on known readable streams"),
                void 0 === e._reader ? !1 : !0
            }
            function l(e, t) {
                Nt(o(e) === !0),
                Nt("boolean" == typeof t);
                var r = a(e)
                  , n = {
                    closedOrErrored: !1,
                    canceled1: !1,
                    canceled2: !1,
                    reason1: void 0,
                    reason2: void 0
                };
                n.promise = new Promise(function(e) {
                    n._resolve = e
                }
                );
                var i = c();
                i._reader = r,
                i._teeState = n,
                i._cloneForBranch2 = t;
                var s = h();
                s._stream = e,
                s._teeState = n;
                var u = d();
                u._stream = e,
                u._teeState = n;
                var l = Object.create(Object.prototype);
                Lt(l, "pull", i),
                Lt(l, "cancel", s);
                var f = new $t(l)
                  , p = Object.create(Object.prototype);
                Lt(p, "pull", i),
                Lt(p, "cancel", u);
                var m = new $t(p);
                return i._branch1 = f._readableStreamController,
                i._branch2 = m._readableStreamController,
                r._closedPromise.catch(function(e) {
                    n.closedOrErrored !== !0 && (M(i._branch1, e),
                    M(i._branch2, e),
                    n.closedOrErrored = !0)
                }),
                [f, m]
            }
            function c() {
                function e() {
                    var t = e._reader
                      , r = e._branch1
                      , n = e._branch2
                      , i = e._teeState;
                    return E(t).then(function(e) {
                        Nt(Mt(e));
                        var t = e.value
                          , a = e.done;
                        if (Nt("boolean" == typeof a),
                        a === !0 && i.closedOrErrored === !1 && (i.canceled1 === !1 && F(r),
                        i.canceled2 === !1 && F(n),
                        i.closedOrErrored = !0),
                        i.closedOrErrored !== !0) {
                            var o = t
                              , s = t;
                            i.canceled1 === !1 && L(r, o),
                            i.canceled2 === !1 && L(n, s)
                        }
                    })
                }
                return e
            }
            function h() {
                function e(t) {
                    var r = e._stream
                      , n = e._teeState;
                    if (n.canceled1 = !0,
                    n.reason1 = t,
                    n.canceled2 === !0) {
                        var i = Ft([n.reason1, n.reason2])
                          , a = m(r, i);
                        n._resolve(a)
                    }
                    return n.promise
                }
                return e
            }
            function d() {
                function e(t) {
                    var r = e._stream
                      , n = e._teeState;
                    if (n.canceled2 = !0,
                    n.reason2 = t,
                    n.canceled1 === !0) {
                        var i = Ft([n.reason1, n.reason2])
                          , a = m(r, i);
                        n._resolve(a)
                    }
                    return n.promise
                }
                return e
            }
            function f(e) {
                Nt(C(e._reader) === !0),
                Nt("readable" === e._state || "closed" === e._state);
                var t = new Promise(function(t, r) {
                    var n = {
                        _resolve: t,
                        _reject: r
                    };
                    e._reader._readIntoRequests.push(n)
                }
                );
                return t
            }
            function p(e) {
                Nt(P(e._reader) === !0),
                Nt("readable" === e._state);
                var t = new Promise(function(t, r) {
                    var n = {
                        _resolve: t,
                        _reject: r
                    };
                    e._reader._readRequests.push(n)
                }
                );
                return t
            }
            function m(e, t) {
                if (e._disturbed = !0,
                "closed" === e._state)
                    return Promise.resolve(void 0);
                if ("errored" === e._state)
                    return Promise.reject(e._storedError);
                v(e);
                var r = e._readableStreamController.__cancelSteps(t);
                return r.then(function() {
                    return void 0
                })
            }
            function v(e) {
                Nt("readable" === e._state),
                e._state = "closed";
                var t = e._reader;
                if (void 0 === t)
                    return void 0;
                if (P(t) === !0) {
                    for (var r = 0; r < t._readRequests.length; r++) {
                        var n = t._readRequests[r]._resolve;
                        n(kt(void 0, !0))
                    }
                    t._readRequests = []
                }
                return void gt(t)
            }
            function g(e, t) {
                Nt(o(e) === !0, "stream must be ReadableStream"),
                Nt("readable" === e._state, "state must be readable"),
                e._state = "errored",
                e._storedError = t;
                var r = e._reader;
                if (void 0 === r)
                    return void 0;
                if (P(r) === !0) {
                    for (var n = 0; n < r._readRequests.length; n++) {
                        var i = r._readRequests[n];
                        i._reject(t)
                    }
                    r._readRequests = []
                } else {
                    Nt(C(r), "reader must be ReadableStreamBYOBReader");
                    for (var a = 0; a < r._readIntoRequests.length; a++) {
                        var s = r._readIntoRequests[a];
                        s._reject(t)
                    }
                    r._readIntoRequests = []
                }
                mt(r, t),
                r._closedPromise.catch(function() {})
            }
            function b(e, t, r) {
                var n = e._reader;
                Nt(n._readIntoRequests.length > 0);
                var i = n._readIntoRequests.shift();
                i._resolve(kt(t, r))
            }
            function _(e, t, r) {
                var n = e._reader;
                Nt(n._readRequests.length > 0);
                var i = n._readRequests.shift();
                i._resolve(kt(t, r))
            }
            function y(e) {
                return e._reader._readIntoRequests.length
            }
            function A(e) {
                return e._reader._readRequests.length
            }
            function S(e) {
                var t = e._reader;
                return void 0 === t ? !1 : C(t) === !1 ? !1 : !0
            }
            function w(e) {
                var t = e._reader;
                return void 0 === t ? !1 : P(t) === !1 ? !1 : !0
            }
            function C(e) {
                return Mt(e) && Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? !0 : !1
            }
            function P(e) {
                return Mt(e) && Object.prototype.hasOwnProperty.call(e, "_readRequests") ? !0 : !1
            }
            function k(e, t) {
                e._ownerReadableStream = t,
                t._reader = e,
                "readable" === t._state ? dt(e) : "closed" === t._state ? pt(e) : (Nt("errored" === t._state, "state must be errored"),
                ft(e, t._storedError),
                e._closedPromise.catch(function() {}))
            }
            function R(e, t) {
                var r = e._ownerReadableStream;
                return Nt(void 0 !== r),
                m(r, t)
            }
            function x(e) {
                Nt(void 0 !== e._ownerReadableStream),
                Nt(e._ownerReadableStream._reader === e),
                "readable" === e._ownerReadableStream._state ? mt(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : vt(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),
                e._closedPromise.catch(function() {}),
                e._ownerReadableStream._reader = void 0,
                e._ownerReadableStream = void 0
            }
            function T(e, t) {
                var r = e._ownerReadableStream;
                return Nt(void 0 !== r),
                r._disturbed = !0,
                "errored" === r._state ? Promise.reject(r._storedError) : J(r._readableStreamController, t)
            }
            function E(e) {
                var t = e._ownerReadableStream;
                return Nt(void 0 !== t),
                t._disturbed = !0,
                "closed" === t._state ? Promise.resolve(kt(void 0, !0)) : "errored" === t._state ? Promise.reject(t._storedError) : (Nt("readable" === t._state),
                t._readableStreamController.__pullSteps())
            }
            function O(e) {
                return Mt(e) && Object.prototype.hasOwnProperty.call(e, "_underlyingSource") ? !0 : !1
            }
            function j(e) {
                var t = I(e);
                if (t === !1)
                    return void 0;
                if (e._pulling === !0)
                    return void (e._pullAgain = !0);
                Nt(e._pullAgain === !1),
                e._pulling = !0;
                var r = Tt(e._underlyingSource, "pull", [e]);
                return void r.then(function() {
                    return e._pulling = !1,
                    e._pullAgain === !0 ? (e._pullAgain = !1,
                    j(e)) : void 0
                }, function(t) {
                    D(e, t)
                }).catch(qt)
            }
            function I(e) {
                var t = e._controlledReadableStream;
                if ("closed" === t._state || "errored" === t._state)
                    return !1;
                if (e._closeRequested === !0)
                    return !1;
                if (e._started === !1)
                    return !1;
                if (u(t) === !0 && A(t) > 0)
                    return !0;
                var r = N(e);
                return r > 0 ? !0 : !1
            }
            function F(e) {
                var t = e._controlledReadableStream;
                Nt(e._closeRequested === !1),
                Nt("readable" === t._state),
                e._closeRequested = !0,
                0 === e._queue.length && v(t)
            }
            function L(e, t) {
                var r = e._controlledReadableStream;
                if (Nt(e._closeRequested === !1),
                Nt("readable" === r._state),
                u(r) === !0 && A(r) > 0)
                    _(r, t, !1);
                else {
                    var n = 1;
                    if (void 0 !== e._strategySize) {
                        var i = e._strategySize;
                        try {
                            n = i(t)
                        } catch (a) {
                            throw D(e, a),
                            a
                        }
                    }
                    try {
                        Bt(e, t, n)
                    } catch (o) {
                        throw D(e, o),
                        o
                    }
                }
                return void j(e)
            }
            function M(e, t) {
                var r = e._controlledReadableStream;
                Nt("readable" === r._state),
                zt(e),
                g(r, t)
            }
            function D(e, t) {
                "readable" === e._controlledReadableStream._state && M(e, t)
            }
            function N(e) {
                var t = e._controlledReadableStream
                  , r = t._state;
                return "errored" === r ? null : "closed" === r ? 0 : e._strategyHWM - e._queueTotalSize
            }
            function q(e) {
                return Mt(e) && Object.prototype.hasOwnProperty.call(e, "_underlyingByteSource") ? !0 : !1
            }
            function W(e) {
                return Mt(e) && Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? !0 : !1
            }
            function U(e) {
                var t = rt(e);
                if (t === !1)
                    return void 0;
                if (e._pulling === !0)
                    return void (e._pullAgain = !0);
                Nt(e._pullAgain === !1),
                e._pulling = !0;
                var r = Tt(e._underlyingByteSource, "pull", [e]);
                return void r.then(function() {
                    e._pulling = !1,
                    e._pullAgain === !0 && (e._pullAgain = !1,
                    U(e))
                }, function(t) {
                    "readable" === e._controlledReadableStream._state && at(e, t)
                }).catch(qt)
            }
            function B(e) {
                Q(e),
                e._pendingPullIntos = []
            }
            function z(e, t) {
                Nt("errored" !== e._state, "state must not be errored");
                var r = !1;
                "closed" === e._state && (Nt(0 === t.bytesFilled),
                r = !0);
                var n = G(t);
                "default" === t.readerType ? _(e, n, r) : (Nt("byob" === t.readerType),
                b(e, n, r))
            }
            function G(e) {
                var t = e.bytesFilled
                  , r = e.elementSize;
                return Nt(t <= e.byteLength),
                Nt(t % r === 0),
                new e.ctor(e.buffer,e.byteOffset,t / r)
            }
            function H(e, t, r, n) {
                e._queue.push({
                    buffer: t,
                    byteOffset: r,
                    byteLength: n
                }),
                e._queueTotalSize += n
            }
            function X(e, t) {
                var r = t.elementSize
                  , n = t.bytesFilled - t.bytesFilled % r
                  , i = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled)
                  , a = t.bytesFilled + i
                  , o = a - a % r
                  , s = i
                  , u = !1;
                o > n && (s = o - t.bytesFilled,
                u = !0);
                for (var l = e._queue; s > 0; ) {
                    var c = l[0]
                      , h = Math.min(s, c.byteLength)
                      , d = t.byteOffset + t.bytesFilled;
                    Pt(t.buffer, d, c.buffer, c.byteOffset, h),
                    c.byteLength === h ? l.shift() : (c.byteOffset += h,
                    c.byteLength -= h),
                    e._queueTotalSize -= h,
                    Y(e, h, t),
                    s -= h
                }
                return u === !1 && (Nt(0 === e._queueTotalSize, "queue must be empty"),
                Nt(t.bytesFilled > 0),
                Nt(t.bytesFilled < t.elementSize)),
                u
            }
            function Y(e, t, r) {
                Nt(0 === e._pendingPullIntos.length || e._pendingPullIntos[0] === r),
                Q(e),
                r.bytesFilled += t
            }
            function V(e) {
                Nt("readable" === e._controlledReadableStream._state),
                0 === e._queueTotalSize && e._closeRequested === !0 ? v(e._controlledReadableStream) : U(e)
            }
            function Q(e) {
                void 0 !== e._byobRequest && (e._byobRequest._associatedReadableByteStreamController = void 0,
                e._byobRequest._view = void 0,
                e._byobRequest = void 0)
            }
            function K(e) {
                for (Nt(e._closeRequested === !1); e._pendingPullIntos.length > 0; ) {
                    if (0 === e._queueTotalSize)
                        return;
                    var t = e._pendingPullIntos[0];
                    X(e, t) === !0 && (tt(e),
                    z(e._controlledReadableStream, t))
                }
            }
            function J(e, t) {
                var r = e._controlledReadableStream
                  , n = 1;
                t.constructor !== DataView && (n = t.constructor.BYTES_PER_ELEMENT);
                var i = t.constructor
                  , a = {
                    buffer: t.buffer,
                    byteOffset: t.byteOffset,
                    byteLength: t.byteLength,
                    bytesFilled: 0,
                    elementSize: n,
                    ctor: i,
                    readerType: "byob"
                };
                if (e._pendingPullIntos.length > 0)
                    return a.buffer = Et(a.buffer),
                    e._pendingPullIntos.push(a),
                    f(r);
                if ("closed" === r._state) {
                    var o = new t.constructor(a.buffer,a.byteOffset,0);
                    return Promise.resolve(kt(o, !0))
                }
                if (e._queueTotalSize > 0) {
                    if (X(e, a) === !0) {
                        var s = G(a);
                        return V(e),
                        Promise.resolve(kt(s, !1))
                    }
                    if (e._closeRequested === !0) {
                        var u = new TypeError("Insufficient bytes to fill elements in the given buffer");
                        return at(e, u),
                        Promise.reject(u)
                    }
                }
                a.buffer = Et(a.buffer),
                e._pendingPullIntos.push(a);
                var l = f(r);
                return U(e),
                l
            }
            function Z(e, t) {
                t.buffer = Et(t.buffer),
                Nt(0 === t.bytesFilled, "bytesFilled must be 0");
                var r = e._controlledReadableStream;
                if (S(r) === !0)
                    for (; y(r) > 0; ) {
                        var n = tt(e);
                        z(r, n)
                    }
            }
            function $(e, t, r) {
                if (r.bytesFilled + t > r.byteLength)
                    throw new RangeError("bytesWritten out of range");
                if (Y(e, t, r),
                !(r.bytesFilled < r.elementSize)) {
                    tt(e);
                    var n = r.bytesFilled % r.elementSize;
                    if (n > 0) {
                        var i = r.byteOffset + r.bytesFilled
                          , a = r.buffer.slice(i - n, i);
                        H(e, a, 0, a.byteLength)
                    }
                    r.buffer = Et(r.buffer),
                    r.bytesFilled -= n,
                    z(e._controlledReadableStream, r),
                    K(e)
                }
            }
            function et(e, t) {
                var r = e._pendingPullIntos[0]
                  , n = e._controlledReadableStream;
                if ("closed" === n._state) {
                    if (0 !== t)
                        throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
                    Z(e, r)
                } else
                    Nt("readable" === n._state),
                    $(e, t, r)
            }
            function tt(e) {
                var t = e._pendingPullIntos.shift();
                return Q(e),
                t
            }
            function rt(e) {
                var t = e._controlledReadableStream;
                return "readable" !== t._state ? !1 : e._closeRequested === !0 ? !1 : e._started === !1 ? !1 : w(t) === !0 && A(t) > 0 ? !0 : S(t) === !0 && y(t) > 0 ? !0 : ot(e) > 0 ? !0 : !1
            }
            function nt(e) {
                var t = e._controlledReadableStream;
                if (Nt(e._closeRequested === !1),
                Nt("readable" === t._state),
                e._queueTotalSize > 0)
                    return void (e._closeRequested = !0);
                if (e._pendingPullIntos.length > 0) {
                    var r = e._pendingPullIntos[0];
                    if (r.bytesFilled > 0) {
                        var n = new TypeError("Insufficient bytes to fill elements in the given buffer");
                        throw at(e, n),
                        n
                    }
                }
                v(t)
            }
            function it(e, t) {
                var r = e._controlledReadableStream;
                Nt(e._closeRequested === !1),
                Nt("readable" === r._state);
                var n = t.buffer
                  , i = t.byteOffset
                  , a = t.byteLength
                  , o = Et(n);
                if (w(r) === !0)
                    if (0 === A(r))
                        H(e, o, i, a);
                    else {
                        Nt(0 === e._queue.length);
                        var s = new Uint8Array(o,i,a);
                        _(r, s, !1)
                    }
                else
                    S(r) === !0 ? (H(e, o, i, a),
                    K(e)) : (Nt(u(r) === !1, "stream must not be locked"),
                    H(e, o, i, a))
            }
            function at(e, t) {
                var r = e._controlledReadableStream;
                Nt("readable" === r._state),
                B(e),
                zt(e),
                g(r, t)
            }
            function ot(e) {
                var t = e._controlledReadableStream
                  , r = t._state;
                return "errored" === r ? null : "closed" === r ? 0 : e._strategyHWM - e._queueTotalSize
            }
            function st(e, t) {
                if (t = Number(t),
                Rt(t) === !1)
                    throw new RangeError("bytesWritten must be a finite");
                Nt(e._pendingPullIntos.length > 0),
                et(e, t)
            }
            function ut(e, t) {
                Nt(e._pendingPullIntos.length > 0);
                var r = e._pendingPullIntos[0];
                if (r.byteOffset + r.bytesFilled !== t.byteOffset)
                    throw new RangeError("The region specified by view does not match byobRequest");
                if (r.byteLength !== t.byteLength)
                    throw new RangeError("The buffer of view has different capacity than byobRequest");
                r.buffer = t.buffer,
                et(e, t.byteLength)
            }
            function lt(e) {
                return new TypeError("ReadableStream.prototype." + e + " can only be used on a ReadableStream")
            }
            function ct(e) {
                return new TypeError("Cannot " + e + " a stream using a released reader")
            }
            function ht(e) {
                return new TypeError("ReadableStreamDefaultReader.prototype." + e + " can only be used on a ReadableStreamDefaultReader")
            }
            function dt(e) {
                e._closedPromise = new Promise(function(t, r) {
                    e._closedPromise_resolve = t,
                    e._closedPromise_reject = r
                }
                )
            }
            function ft(e, t) {
                e._closedPromise = Promise.reject(t),
                e._closedPromise_resolve = void 0,
                e._closedPromise_reject = void 0
            }
            function pt(e) {
                e._closedPromise = Promise.resolve(void 0),
                e._closedPromise_resolve = void 0,
                e._closedPromise_reject = void 0
            }
            function mt(e, t) {
                Nt(void 0 !== e._closedPromise_resolve),
                Nt(void 0 !== e._closedPromise_reject),
                e._closedPromise_reject(t),
                e._closedPromise_resolve = void 0,
                e._closedPromise_reject = void 0
            }
            function vt(e, t) {
                Nt(void 0 === e._closedPromise_resolve),
                Nt(void 0 === e._closedPromise_reject),
                e._closedPromise = Promise.reject(t)
            }
            function gt(e) {
                Nt(void 0 !== e._closedPromise_resolve),
                Nt(void 0 !== e._closedPromise_reject),
                e._closedPromise_resolve(void 0),
                e._closedPromise_resolve = void 0,
                e._closedPromise_reject = void 0
            }
            function bt(e) {
                return new TypeError("ReadableStreamBYOBReader.prototype." + e + " can only be used on a ReadableStreamBYOBReader")
            }
            function _t(e) {
                return new TypeError("ReadableStreamDefaultController.prototype." + e + " can only be used on a ReadableStreamDefaultController")
            }
            function yt(e) {
                return new TypeError("ReadableStreamBYOBRequest.prototype." + e + " can only be used on a ReadableStreamBYOBRequest")
            }
            function At(e) {
                return new TypeError("ReadableByteStreamController.prototype." + e + " can only be used on a ReadableByteStreamController")
            }
            function St(e) {
                try {
                    Promise.prototype.then.call(e, void 0, function() {})
                } catch (t) {}
            }
            var wt = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r),
                    n && e(t, n),
                    t
                }
            }()
              , Ct = r(0)
              , Pt = Ct.ArrayBufferCopy
              , kt = Ct.CreateIterResultObject
              , Rt = Ct.IsFiniteNonNegativeNumber
              , xt = Ct.InvokeOrNoop
              , Tt = Ct.PromiseInvokeOrNoop
              , Et = Ct.TransferArrayBuffer
              , Ot = Ct.ValidateAndNormalizeQueuingStrategy
              , jt = Ct.ValidateAndNormalizeHighWaterMark
              , It = r(0)
              , Ft = It.createArrayFromList
              , Lt = It.createDataProperty
              , Mt = It.typeIsObject
              , Dt = r(1)
              , Nt = Dt.assert
              , qt = Dt.rethrowAssertionErrorRejection
              , Wt = r(3)
              , Ut = Wt.DequeueValue
              , Bt = Wt.EnqueueValueWithSize
              , zt = Wt.ResetQueue
              , Gt = r(2)
              , Ht = Gt.AcquireWritableStreamDefaultWriter
              , Xt = Gt.IsWritableStream
              , Yt = Gt.IsWritableStreamLocked
              , Vt = Gt.WritableStreamAbort
              , Qt = Gt.WritableStreamDefaultWriterCloseWithErrorPropagation
              , Kt = Gt.WritableStreamDefaultWriterRelease
              , Jt = Gt.WritableStreamDefaultWriterWrite
              , Zt = Gt.WritableStreamCloseQueuedOrInFlight
              , $t = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , i = r.size
                      , a = r.highWaterMark;
                    n(this, e),
                    this._state = "readable",
                    this._reader = void 0,
                    this._storedError = void 0,
                    this._disturbed = !1,
                    this._readableStreamController = void 0;
                    var o = t.type
                      , s = String(o);
                    if ("bytes" === s)
                        void 0 === a && (a = 0),
                        this._readableStreamController = new ir(this,t,a);
                    else {
                        if (void 0 !== o)
                            throw new RangeError("Invalid type is specified");
                        void 0 === a && (a = 1),
                        this._readableStreamController = new rr(this,t,i,a)
                    }
                }
                return wt(e, [{
                    key: "cancel",
                    value: function(e) {
                        return o(this) === !1 ? Promise.reject(lt("cancel")) : u(this) === !0 ? Promise.reject(new TypeError("Cannot cancel a stream that already has a reader")) : m(this, e)
                    }
                }, {
                    key: "getReader",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                          , t = e.mode;
                        if (o(this) === !1)
                            throw lt("getReader");
                        if (void 0 === t)
                            return a(this);
                        if (t = String(t),
                        "byob" === t)
                            return i(this);
                        throw new RangeError("Invalid mode is specified")
                    }
                }, {
                    key: "pipeThrough",
                    value: function(e, t) {
                        var r = e.writable
                          , n = e.readable
                          , i = this.pipeTo(r, t);
                        return St(i),
                        n
                    }
                }, {
                    key: "pipeTo",
                    value: function(e) {
                        var t = this
                          , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                          , n = r.preventClose
                          , i = r.preventAbort
                          , s = r.preventCancel;
                        if (o(this) === !1)
                            return Promise.reject(lt("pipeTo"));
                        if (Xt(e) === !1)
                            return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
                        if (n = Boolean(n),
                        i = Boolean(i),
                        s = Boolean(s),
                        u(this) === !0)
                            return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
                        if (Yt(e) === !0)
                            return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
                        var l = a(this)
                          , c = Ht(e)
                          , h = !1
                          , d = Promise.resolve();
                        return new Promise(function(r, a) {
                            function o() {
                                return d = Promise.resolve(),
                                h === !0 ? Promise.resolve() : c._readyPromise.then(function() {
                                    return E(l).then(function(e) {
                                        var t = e.value
                                          , r = e.done;
                                        r !== !0 && (d = Jt(c, t).catch(function() {}))
                                    })
                                }).then(o)
                            }
                            function u() {
                                var e = d;
                                return d.then(function() {
                                    return e !== d ? u() : void 0
                                })
                            }
                            function f(e, t, r) {
                                "errored" === e._state ? r(e._storedError) : t.catch(r).catch(qt)
                            }
                            function p(e, t, r) {
                                "closed" === e._state ? r() : t.then(r).catch(qt)
                            }
                            function v(t, r, n) {
                                function i() {
                                    t().then(function() {
                                        return b(r, n)
                                    }, function(e) {
                                        return b(!0, e)
                                    }).catch(qt)
                                }
                                h !== !0 && (h = !0,
                                "writable" === e._state && Zt(e) === !1 ? u().then(i) : i())
                            }
                            function g(t, r) {
                                h !== !0 && (h = !0,
                                "writable" === e._state && Zt(e) === !1 ? u().then(function() {
                                    return b(t, r)
                                }).catch(qt) : b(t, r))
                            }
                            function b(e, t) {
                                Kt(c),
                                x(l),
                                e ? a(t) : r(void 0)
                            }
                            if (f(t, l._closedPromise, function(t) {
                                i === !1 ? v(function() {
                                    return Vt(e, t)
                                }, !0, t) : g(!0, t)
                            }),
                            f(e, c._closedPromise, function(e) {
                                s === !1 ? v(function() {
                                    return m(t, e)
                                }, !0, e) : g(!0, e)
                            }),
                            p(t, l._closedPromise, function() {
                                n === !1 ? v(function() {
                                    return Qt(c)
                                }) : g()
                            }),
                            Zt(e) === !0 || "closed" === e._state) {
                                var _ = new TypeError("the destination writable stream closed before all data could be piped to it");
                                s === !1 ? v(function() {
                                    return m(t, _)
                                }, !0, _) : g(!0, _)
                            }
                            o().catch(function(e) {
                                d = Promise.resolve(),
                                qt(e)
                            })
                        }
                        )
                    }
                }, {
                    key: "tee",
                    value: function() {
                        if (o(this) === !1)
                            throw lt("tee");
                        var e = l(this, !1);
                        return Ft(e)
                    }
                }, {
                    key: "locked",
                    get: function() {
                        if (o(this) === !1)
                            throw lt("locked");
                        return u(this)
                    }
                }]),
                e
            }();
            e.exports = {
                ReadableStream: $t,
                IsReadableStreamDisturbed: s,
                ReadableStreamDefaultControllerClose: F,
                ReadableStreamDefaultControllerEnqueue: L,
                ReadableStreamDefaultControllerError: M,
                ReadableStreamDefaultControllerGetDesiredSize: N
            };
            var er = function() {
                function e(t) {
                    if (n(this, e),
                    o(t) === !1)
                        throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance");
                    if (u(t) === !0)
                        throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                    k(this, t),
                    this._readRequests = []
                }
                return wt(e, [{
                    key: "cancel",
                    value: function(e) {
                        return P(this) === !1 ? Promise.reject(ht("cancel")) : void 0 === this._ownerReadableStream ? Promise.reject(ct("cancel")) : R(this, e)
                    }
                }, {
                    key: "read",
                    value: function() {
                        return P(this) === !1 ? Promise.reject(ht("read")) : void 0 === this._ownerReadableStream ? Promise.reject(ct("read from")) : E(this)
                    }
                }, {
                    key: "releaseLock",
                    value: function() {
                        if (P(this) === !1)
                            throw ht("releaseLock");
                        if (void 0 !== this._ownerReadableStream) {
                            if (this._readRequests.length > 0)
                                throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
                            x(this)
                        }
                    }
                }, {
                    key: "closed",
                    get: function() {
                        return P(this) === !1 ? Promise.reject(ht("closed")) : this._closedPromise
                    }
                }]),
                e
            }()
              , tr = function() {
                function e(t) {
                    if (n(this, e),
                    !o(t))
                        throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source");
                    if (q(t._readableStreamController) === !1)
                        throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
                    if (u(t))
                        throw new TypeError("This stream has already been locked for exclusive reading by another reader");
                    k(this, t),
                    this._readIntoRequests = []
                }
                return wt(e, [{
                    key: "cancel",
                    value: function(e) {
                        return C(this) ? void 0 === this._ownerReadableStream ? Promise.reject(ct("cancel")) : R(this, e) : Promise.reject(bt("cancel"))
                    }
                }, {
                    key: "read",
                    value: function(e) {
                        return C(this) ? void 0 === this._ownerReadableStream ? Promise.reject(ct("read from")) : ArrayBuffer.isView(e) ? 0 === e.byteLength ? Promise.reject(new TypeError("view must have non-zero byteLength")) : T(this, e) : Promise.reject(new TypeError("view must be an array buffer view")) : Promise.reject(bt("read"))
                    }
                }, {
                    key: "releaseLock",
                    value: function() {
                        if (!C(this))
                            throw bt("releaseLock");
                        if (void 0 !== this._ownerReadableStream) {
                            if (this._readIntoRequests.length > 0)
                                throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
                            x(this)
                        }
                    }
                }, {
                    key: "closed",
                    get: function() {
                        return C(this) ? this._closedPromise : Promise.reject(bt("closed"))
                    }
                }]),
                e
            }()
              , rr = function() {
                function e(t, r, i, a) {
                    if (n(this, e),
                    o(t) === !1)
                        throw new TypeError("ReadableStreamDefaultController can only be constructed with a ReadableStream instance");
                    if (void 0 !== t._readableStreamController)
                        throw new TypeError("ReadableStreamDefaultController instances can only be created by the ReadableStream constructor");
                    this._controlledReadableStream = t,
                    this._underlyingSource = r,
                    this._queue = void 0,
                    this._queueTotalSize = void 0,
                    zt(this),
                    this._started = !1,
                    this._closeRequested = !1,
                    this._pullAgain = !1,
                    this._pulling = !1;
                    var s = Ot(i, a);
                    this._strategySize = s.size,
                    this._strategyHWM = s.highWaterMark;
                    var u = this
                      , l = xt(r, "start", [this]);
                    Promise.resolve(l).then(function() {
                        u._started = !0,
                        Nt(u._pulling === !1),
                        Nt(u._pullAgain === !1),
                        j(u)
                    }, function(e) {
                        D(u, e)
                    }).catch(qt)
                }
                return wt(e, [{
                    key: "close",
                    value: function() {
                        if (O(this) === !1)
                            throw _t("close");
                        if (this._closeRequested === !0)
                            throw new TypeError("The stream has already been closed; do not close it again!");
                        var e = this._controlledReadableStream._state;
                        if ("readable" !== e)
                            throw new TypeError("The stream (in " + e + " state) is not in the readable state and cannot be closed");
                        F(this)
                    }
                }, {
                    key: "enqueue",
                    value: function(e) {
                        if (O(this) === !1)
                            throw _t("enqueue");
                        if (this._closeRequested === !0)
                            throw new TypeError("stream is closed or draining");
                        var t = this._controlledReadableStream._state;
                        if ("readable" !== t)
                            throw new TypeError("The stream (in " + t + " state) is not in the readable state and cannot be enqueued to");
                        return L(this, e)
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        if (O(this) === !1)
                            throw _t("error");
                        var t = this._controlledReadableStream;
                        if ("readable" !== t._state)
                            throw new TypeError("The stream is " + t._state + " and so cannot be errored");
                        M(this, e)
                    }
                }, {
                    key: "__cancelSteps",
                    value: function(e) {
                        return zt(this),
                        Tt(this._underlyingSource, "cancel", [e])
                    }
                }, {
                    key: "__pullSteps",
                    value: function() {
                        var e = this._controlledReadableStream;
                        if (this._queue.length > 0) {
                            var t = Ut(this);
                            return this._closeRequested === !0 && 0 === this._queue.length ? v(e) : j(this),
                            Promise.resolve(kt(t, !1))
                        }
                        var r = p(e);
                        return j(this),
                        r
                    }
                }, {
                    key: "desiredSize",
                    get: function() {
                        if (O(this) === !1)
                            throw _t("desiredSize");
                        return N(this)
                    }
                }]),
                e
            }()
              , nr = function() {
                function e(t, r) {
                    n(this, e),
                    this._associatedReadableByteStreamController = t,
                    this._view = r
                }
                return wt(e, [{
                    key: "respond",
                    value: function(e) {
                        if (W(this) === !1)
                            throw yt("respond");
                        if (void 0 === this._associatedReadableByteStreamController)
                            throw new TypeError("This BYOB request has been invalidated");
                        st(this._associatedReadableByteStreamController, e)
                    }
                }, {
                    key: "respondWithNewView",
                    value: function(e) {
                        if (W(this) === !1)
                            throw yt("respond");
                        if (void 0 === this._associatedReadableByteStreamController)
                            throw new TypeError("This BYOB request has been invalidated");
                        if (!ArrayBuffer.isView(e))
                            throw new TypeError("You can only respond with array buffer views");
                        ut(this._associatedReadableByteStreamController, e)
                    }
                }, {
                    key: "view",
                    get: function() {
                        return this._view
                    }
                }]),
                e
            }()
              , ir = function() {
                function e(t, r, i) {
                    if (n(this, e),
                    o(t) === !1)
                        throw new TypeError("ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source");
                    if (void 0 !== t._readableStreamController)
                        throw new TypeError("ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source");
                    this._controlledReadableStream = t,
                    this._underlyingByteSource = r,
                    this._pullAgain = !1,
                    this._pulling = !1,
                    B(this),
                    this._queue = this._queueTotalSize = void 0,
                    zt(this),
                    this._closeRequested = !1,
                    this._started = !1,
                    this._strategyHWM = jt(i);
                    var a = r.autoAllocateChunkSize;
                    if (void 0 !== a && (Number.isInteger(a) === !1 || 0 >= a))
                        throw new RangeError("autoAllocateChunkSize must be a positive integer");
                    this._autoAllocateChunkSize = a,
                    this._pendingPullIntos = [];
                    var s = this
                      , u = xt(r, "start", [this]);
                    Promise.resolve(u).then(function() {
                        s._started = !0,
                        Nt(s._pulling === !1),
                        Nt(s._pullAgain === !1),
                        U(s)
                    }, function(e) {
                        "readable" === t._state && at(s, e)
                    }).catch(qt)
                }
                return wt(e, [{
                    key: "close",
                    value: function() {
                        if (q(this) === !1)
                            throw At("close");
                        if (this._closeRequested === !0)
                            throw new TypeError("The stream has already been closed; do not close it again!");
                        var e = this._controlledReadableStream._state;
                        if ("readable" !== e)
                            throw new TypeError("The stream (in " + e + " state) is not in the readable state and cannot be closed");
                        nt(this)
                    }
                }, {
                    key: "enqueue",
                    value: function(e) {
                        if (q(this) === !1)
                            throw At("enqueue");
                        if (this._closeRequested === !0)
                            throw new TypeError("stream is closed or draining");
                        var t = this._controlledReadableStream._state;
                        if ("readable" !== t)
                            throw new TypeError("The stream (in " + t + " state) is not in the readable state and cannot be enqueued to");
                        if (!ArrayBuffer.isView(e))
                            throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController");
                        it(this, e)
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        if (q(this) === !1)
                            throw At("error");
                        var t = this._controlledReadableStream;
                        if ("readable" !== t._state)
                            throw new TypeError("The stream is " + t._state + " and so cannot be errored");
                        at(this, e)
                    }
                }, {
                    key: "__cancelSteps",
                    value: function(e) {
                        if (this._pendingPullIntos.length > 0) {
                            var t = this._pendingPullIntos[0];
                            t.bytesFilled = 0
                        }
                        return zt(this),
                        Tt(this._underlyingByteSource, "cancel", [e])
                    }
                }, {
                    key: "__pullSteps",
                    value: function() {
                        var e = this._controlledReadableStream;
                        if (Nt(w(e) === !0),
                        this._queueTotalSize > 0) {
                            Nt(0 === A(e));
                            var t = this._queue.shift();
                            this._queueTotalSize -= t.byteLength,
                            V(this);
                            var r = void 0;
                            try {
                                r = new Uint8Array(t.buffer,t.byteOffset,t.byteLength)
                            } catch (n) {
                                return Promise.reject(n)
                            }
                            return Promise.resolve(kt(r, !1))
                        }
                        var i = this._autoAllocateChunkSize;
                        if (void 0 !== i) {
                            var a = void 0;
                            try {
                                a = new ArrayBuffer(i)
                            } catch (o) {
                                return Promise.reject(o)
                            }
                            var s = {
                                buffer: a,
                                byteOffset: 0,
                                byteLength: i,
                                bytesFilled: 0,
                                elementSize: 1,
                                ctor: Uint8Array,
                                readerType: "default"
                            };
                            this._pendingPullIntos.push(s)
                        }
                        var u = p(e);
                        return U(this),
                        u
                    }
                }, {
                    key: "byobRequest",
                    get: function() {
                        if (q(this) === !1)
                            throw At("byobRequest");
                        if (void 0 === this._byobRequest && this._pendingPullIntos.length > 0) {
                            var e = this._pendingPullIntos[0]
                              , t = new Uint8Array(e.buffer,e.byteOffset + e.bytesFilled,e.byteLength - e.bytesFilled);
                            this._byobRequest = new nr(this,t)
                        }
                        return this._byobRequest
                    }
                }, {
                    key: "desiredSize",
                    get: function() {
                        if (q(this) === !1)
                            throw At("desiredSize");
                        return ot(this)
                    }
                }]),
                e
            }()
        }
        , function(e, t, r) {
            var n = r(6)
              , i = r(4)
              , a = r(2);
            t.TransformStream = n.TransformStream,
            t.ReadableStream = i.ReadableStream,
            t.IsReadableStreamDisturbed = i.IsReadableStreamDisturbed,
            t.ReadableStreamDefaultControllerClose = i.ReadableStreamDefaultControllerClose,
            t.ReadableStreamDefaultControllerEnqueue = i.ReadableStreamDefaultControllerEnqueue,
            t.ReadableStreamDefaultControllerError = i.ReadableStreamDefaultControllerError,
            t.ReadableStreamDefaultControllerGetDesiredSize = i.ReadableStreamDefaultControllerGetDesiredSize,
            t.AcquireWritableStreamDefaultWriter = a.AcquireWritableStreamDefaultWriter,
            t.IsWritableStream = a.IsWritableStream,
            t.IsWritableStreamLocked = a.IsWritableStreamLocked,
            t.WritableStream = a.WritableStream,
            t.WritableStreamAbort = a.WritableStreamAbort,
            t.WritableStreamDefaultControllerError = a.WritableStreamDefaultControllerError,
            t.WritableStreamDefaultWriterCloseWithErrorPropagation = a.WritableStreamDefaultWriterCloseWithErrorPropagation,
            t.WritableStreamDefaultWriterRelease = a.WritableStreamDefaultWriterRelease,
            t.WritableStreamDefaultWriterWrite = a.WritableStreamDefaultWriterWrite
        }
        , function(e, t, r) {
            function n(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function i(e) {
                if (e._errored === !0)
                    throw new TypeError("TransformStream is already errored");
                if (e._readableClosed === !0)
                    throw new TypeError("Readable side is already closed");
                s(e)
            }
            function a(e, t) {
                if (e._errored === !0)
                    throw new TypeError("TransformStream is already errored");
                if (e._readableClosed === !0)
                    throw new TypeError("Readable side is already closed");
                var r = e._readableController;
                try {
                    T(r, t)
                } catch (n) {
                    throw e._readableClosed = !0,
                    u(e, n),
                    e._storedError
                }
                var i = O(r)
                  , a = 0 >= i;
                a === !0 && e._backpressure === !1 && h(e, !0)
            }
            function o(e, t) {
                if (e._errored === !0)
                    throw new TypeError("TransformStream is already errored");
                l(e, t)
            }
            function s(e) {
                y(e._errored === !1),
                y(e._readableClosed === !1);
                try {
                    x(e._readableController)
                } catch (t) {
                    y(!1)
                }
                e._readableClosed = !0
            }
            function u(e, t) {
                e._errored === !1 && l(e, t)
            }
            function l(e, t) {
                y(e._errored === !1),
                e._errored = !0,
                e._storedError = t,
                e._writableDone === !1 && F(e._writableController, t),
                e._readableClosed === !1 && E(e._readableController, t)
            }
            function c(e) {
                return y(void 0 !== e._backpressureChangePromise, "_backpressureChangePromise should have been initialized"),
                e._backpressure === !1 ? Promise.resolve() : (y(e._backpressure === !0, "_backpressure should have been initialized"),
                e._backpressureChangePromise)
            }
            function h(e, t) {
                y(e._backpressure !== t, "TransformStreamSetBackpressure() should be called only when backpressure is changed"),
                void 0 !== e._backpressureChangePromise && e._backpressureChangePromise_resolve(t),
                e._backpressureChangePromise = new Promise(function(t) {
                    e._backpressureChangePromise_resolve = t
                }
                ),
                e._backpressureChangePromise.then(function(e) {
                    y(e !== t, "_backpressureChangePromise should be fulfilled only when backpressure is changed")
                }),
                e._backpressure = t
            }
            function d(e, t) {
                var r = t._controlledTransformStream;
                return a(r, e),
                Promise.resolve()
            }
            function f(e, t) {
                y(e._errored === !1),
                y(e._transforming === !1),
                y(e._backpressure === !1),
                e._transforming = !0;
                var r = e._transformer
                  , n = e._transformStreamController
                  , i = w(r, "transform", [t, n], d, [t, n]);
                return i.then(function() {
                    return e._transforming = !1,
                    c(e)
                }, function(t) {
                    return u(e, t),
                    Promise.reject(t)
                })
            }
            function p(e) {
                return P(e) && Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? !0 : !1
            }
            function m(e) {
                return P(e) && Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? !0 : !1
            }
            function v(e) {
                return new TypeError("TransformStreamDefaultController.prototype." + e + " can only be used on a TransformStreamDefaultController")
            }
            function g(e) {
                return new TypeError("TransformStream.prototype." + e + " can only be used on a TransformStream")
            }
            var b = function() {
                function e(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value"in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, r, n) {
                    return r && e(t.prototype, r),
                    n && e(t, n),
                    t
                }
            }()
              , _ = r(1)
              , y = _.assert
              , A = r(0)
              , S = A.InvokeOrNoop
              , w = A.PromiseInvokeOrPerformFallback
              , C = A.PromiseInvokeOrNoop
              , P = A.typeIsObject
              , k = r(4)
              , R = k.ReadableStream
              , x = k.ReadableStreamDefaultControllerClose
              , T = k.ReadableStreamDefaultControllerEnqueue
              , E = k.ReadableStreamDefaultControllerError
              , O = k.ReadableStreamDefaultControllerGetDesiredSize
              , j = r(2)
              , I = j.WritableStream
              , F = j.WritableStreamDefaultControllerError
              , L = function() {
                function e(t, r) {
                    n(this, e),
                    this._transformStream = t,
                    this._startPromise = r
                }
                return b(e, [{
                    key: "start",
                    value: function(e) {
                        var t = this._transformStream;
                        return t._writableController = e,
                        this._startPromise.then(function() {
                            return c(t)
                        })
                    }
                }, {
                    key: "write",
                    value: function(e) {
                        var t = this._transformStream;
                        return f(t, e)
                    }
                }, {
                    key: "abort",
                    value: function() {
                        var e = this._transformStream;
                        e._writableDone = !0,
                        l(e, new TypeError("Writable side aborted"))
                    }
                }, {
                    key: "close",
                    value: function() {
                        var e = this._transformStream;
                        y(e._transforming === !1),
                        e._writableDone = !0;
                        var t = C(e._transformer, "flush", [e._transformStreamController]);
                        return t.then(function() {
                            return e._errored === !0 ? Promise.reject(e._storedError) : (e._readableClosed === !1 && s(e),
                            Promise.resolve())
                        }).catch(function(t) {
                            return u(e, t),
                            Promise.reject(e._storedError)
                        })
                    }
                }]),
                e
            }()
              , M = function() {
                function e(t, r) {
                    n(this, e),
                    this._transformStream = t,
                    this._startPromise = r
                }
                return b(e, [{
                    key: "start",
                    value: function(e) {
                        var t = this._transformStream;
                        return t._readableController = e,
                        this._startPromise.then(function() {
                            return y(void 0 !== t._backpressureChangePromise, "_backpressureChangePromise should have been initialized"),
                            t._backpressure === !0 ? Promise.resolve() : (y(t._backpressure === !1, "_backpressure should have been initialized"),
                            t._backpressureChangePromise)
                        })
                    }
                }, {
                    key: "pull",
                    value: function() {
                        var e = this._transformStream;
                        return y(e._backpressure === !0, "pull() should be never called while _backpressure is false"),
                        y(void 0 !== e._backpressureChangePromise, "_backpressureChangePromise should have been initialized"),
                        h(e, !1),
                        e._backpressureChangePromise
                    }
                }, {
                    key: "cancel",
                    value: function() {
                        var e = this._transformStream;
                        e._readableClosed = !0,
                        l(e, new TypeError("Readable side canceled"))
                    }
                }]),
                e
            }()
              , D = function() {
                function e(t) {
                    if (n(this, e),
                    m(t) === !1)
                        throw new TypeError("TransformStreamDefaultController can only be constructed with a TransformStream instance");
                    if (void 0 !== t._transformStreamController)
                        throw new TypeError("TransformStreamDefaultController instances can only be created by the TransformStream constructor");
                    this._controlledTransformStream = t
                }
                return b(e, [{
                    key: "enqueue",
                    value: function(e) {
                        if (p(this) === !1)
                            throw v("enqueue");
                        a(this._controlledTransformStream, e)
                    }
                }, {
                    key: "close",
                    value: function() {
                        if (p(this) === !1)
                            throw v("close");
                        i(this._controlledTransformStream)
                    }
                }, {
                    key: "error",
                    value: function(e) {
                        if (p(this) === !1)
                            throw v("error");
                        o(this._controlledTransformStream, e)
                    }
                }, {
                    key: "desiredSize",
                    get: function() {
                        if (p(this) === !1)
                            throw v("desiredSize");
                        var e = this._controlledTransformStream
                          , t = e._readableController;
                        return O(t)
                    }
                }]),
                e
            }()
              , N = function() {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    n(this, e),
                    this._transformer = t;
                    var r = t.readableStrategy
                      , i = t.writableStrategy;
                    this._transforming = !1,
                    this._errored = !1,
                    this._storedError = void 0,
                    this._writableController = void 0,
                    this._readableController = void 0,
                    this._transformStreamController = void 0,
                    this._writableDone = !1,
                    this._readableClosed = !1,
                    this._backpressure = void 0,
                    this._backpressureChangePromise = void 0,
                    this._backpressureChangePromise_resolve = void 0,
                    this._transformStreamController = new D(this);
                    var a = void 0
                      , o = new Promise(function(e) {
                        a = e
                    }
                    )
                      , s = new M(this,o);
                    this._readable = new R(s,r);
                    var u = new L(this,o);
                    this._writable = new I(u,i),
                    y(void 0 !== this._writableController),
                    y(void 0 !== this._readableController);
                    var l = O(this._readableController);
                    h(this, 0 >= l);
                    var c = this
                      , d = S(t, "start", [c._transformStreamController]);
                    a(d),
                    o.catch(function(e) {
                        c._errored === !1 && (c._errored = !0,
                        c._storedError = e)
                    })
                }
                return b(e, [{
                    key: "readable",
                    get: function() {
                        if (m(this) === !1)
                            throw g("readable");
                        return this._readable
                    }
                }, {
                    key: "writable",
                    get: function() {
                        if (m(this) === !1)
                            throw g("writable");
                        return this._writable
                    }
                }]),
                e
            }();
            e.exports = {
                TransformStream: N
            }
        }
        , function(e, t, r) {
            e.exports = r(5)
        }
        ]))
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e) {
            x = e
        }
        function o(e) {
            var t, r = new O;
            if ("string" == typeof e)
                t = {
                    url: e
                };
            else if (c.isArrayBuffer(e))
                t = {
                    data: e
                };
            else if (e instanceof j)
                t = {
                    range: e
                };
            else {
                if ("object" !== ("undefined" == typeof e ? "undefined" : l(e)))
                    throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object");
                if (!e.url && !e.data && !e.range)
                    throw new Error("Invalid parameter object: need either .data, .range or .url");
                t = e
            }
            var n = Object.create(null)
              , i = null
              , a = null
              , o = h.DOMCMapReaderFactory;
            for (var u in t)
                if ("url" !== u || "undefined" == typeof window)
                    if ("range" !== u)
                        if ("worker" !== u)
                            if ("data" !== u || t[u]instanceof Uint8Array)
                                "CMapReaderFactory" !== u ? n[u] = t[u] : o = t[u];
                            else {
                                var d = t[u];
                                if ("string" == typeof d)
                                    n[u] = c.stringToBytes(d);
                                else if ("object" !== ("undefined" == typeof d ? "undefined" : l(d)) || null === d || isNaN(d.length)) {
                                    if (!c.isArrayBuffer(d))
                                        throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.");
                                    n[u] = new Uint8Array(d)
                                } else
                                    n[u] = new Uint8Array(d)
                            }
                        else
                            a = t[u];
                    else
                        i = t[u];
                else
                    n[u] = new URL(t[u],window.location).href;
            n.rangeChunkSize = n.rangeChunkSize || A,
            n.ignoreErrors = n.stopAtErrors !== !0,
            n.pdfBug = n.pdfBug === !0;
            var p = Object.values(c.NativeImageDecoding);
            if (void 0 !== n.nativeImageDecoderSupport && p.includes(n.nativeImageDecoderSupport) || (n.nativeImageDecoderSupport = c.NativeImageDecoding.DECODE),
            Number.isInteger(n.maxImageSize) || (n.maxImageSize = -1),
            "boolean" != typeof n.isEvalSupported && (n.isEvalSupported = !0),
            "boolean" != typeof n.disableFontFace && (n.disableFontFace = !1),
            "boolean" != typeof n.disableRange && (n.disableRange = f.apiCompatibilityParams.disableRange || !1),
            "boolean" != typeof n.disableStream && (n.disableStream = f.apiCompatibilityParams.disableStream || !1),
            "boolean" != typeof n.disableAutoFetch && (n.disableAutoFetch = !1),
            "boolean" != typeof n.disableCreateObjectURL && (n.disableCreateObjectURL = f.apiCompatibilityParams.disableCreateObjectURL || !1),
            c.setVerbosityLevel(n.verbosity),
            !a) {
                var m = {
                    postMessageTransfers: n.postMessageTransfers,
                    verbosity: n.verbosity
                }
                  , v = g.GlobalWorkerOptions.workerPort;
                v ? (m.port = v,
                a = M.fromPort(m)) : a = new M(m),
                r._worker = a
            }
            var b = r.docId;
            return a.promise.then(function() {
                if (r.destroyed)
                    throw new Error("Loading aborted");
                return s(a, n, i, b).then(function(e) {
                    if (r.destroyed)
                        throw new Error("Loading aborted");
                    var t = void 0;
                    i ? t = new _.PDFDataTransportStream({
                        length: n.length,
                        initialData: n.initialData,
                        disableRange: n.disableRange,
                        disableStream: n.disableStream
                    },i) : n.data || (t = x({
                        url: n.url,
                        length: n.length,
                        httpHeaders: n.httpHeaders,
                        withCredentials: n.withCredentials,
                        rangeChunkSize: n.rangeChunkSize,
                        disableRange: n.disableRange,
                        disableStream: n.disableStream
                    }));
                    var s = new c.MessageHandler(b,e,a.port);
                    s.postMessageTransfers = a.postMessageTransfers;
                    var u = new D(s,r,t,n,o);
                    r._transport = u,
                    s.send("Ready", null)
                })
            }).catch(r._capability.reject),
            r
        }
        function s(e, t, r, n) {
            return e.destroyed ? Promise.reject(new Error("Worker was destroyed")) : (r && (t.length = r.length,
            t.initialData = r.initialData),
            e.messageHandler.sendWithPromise("GetDocRequest", {
                docId: n,
                apiVersion: "2.0.493",
                source: {
                    data: t.data,
                    url: t.url,
                    password: t.password,
                    disableAutoFetch: t.disableAutoFetch,
                    rangeChunkSize: t.rangeChunkSize,
                    length: t.length
                },
                maxImageSize: t.maxImageSize,
                disableFontFace: t.disableFontFace,
                disableCreateObjectURL: t.disableCreateObjectURL,
                postMessageTransfers: e.postMessageTransfers,
                docBaseUrl: t.docBaseUrl,
                nativeImageDecoderSupport: t.nativeImageDecoderSupport,
                ignoreErrors: t.ignoreErrors,
                isEvalSupported: t.isEvalSupported
            }).then(function(t) {
                if (e.destroyed)
                    throw new Error("Worker was destroyed");
                return t
            }))
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.build = t.version = t.setPDFNetworkStreamFactory = t.PDFPageProxy = t.PDFDocumentProxy = t.PDFWorker = t.PDFDataRangeTransport = t.LoopbackPort = t.getDocument = void 0;
        var u = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r),
                n && e(t, n),
                t
            }
        }()
          , l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , c = r(0)
          , h = r(24)
          , d = r(118)
          , f = r(58)
          , p = r(119)
          , m = r(18)
          , v = n(m)
          , g = r(59)
          , b = r(121)
          , _ = r(123)
          , y = r(124)
          , A = 65536
          , S = !1
          , w = void 0
          , C = "undefined" != typeof document && document.currentScript ? document.currentScript.src : null
          , P = null
          , k = !1;
        "undefined" == typeof window ? (S = !0,
        "undefined" == typeof require.ensure && (require.ensure = require("node-ensure")),
        k = !0) : "undefined" != typeof require && "function" == typeof require.ensure && (k = !0),
        "undefined" != typeof requirejs && requirejs.toUrl && (w = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
        var R = "undefined" != typeof requirejs && requirejs.load;
        P = k ? function(e) {
            require.ensure([], function() {
                var t;
                t = require("./pdf.worker.js"),
                e(t.WorkerMessageHandler)
            })
        }
        : R ? function(e) {
            requirejs(["pdfjs-dist/build/pdf.worker"], function(t) {
                e(t.WorkerMessageHandler)
            })
        }
        : null;
        var x, T, E, O = function() {
            function e() {
                this._capability = c.createPromiseCapability(),
                this._transport = null,
                this._worker = null,
                this.docId = "d" + t++,
                this.destroyed = !1,
                this.onPassword = null,
                this.onProgress = null,
                this.onUnsupportedFeature = null
            }
            var t = 0;
            return e.prototype = {
                get promise() {
                    return this._capability.promise
                },
                destroy: function() {
                    var e = this;
                    this.destroyed = !0;
                    var t = this._transport ? this._transport.destroy() : Promise.resolve();
                    return t.then(function() {
                        e._transport = null,
                        e._worker && (e._worker.destroy(),
                        e._worker = null)
                    })
                },
                then: function() {
                    return this.promise.then.apply(this.promise, arguments)
                }
            },
            e
        }(), j = function() {
            function e(e, t) {
                this.length = e,
                this.initialData = t,
                this._rangeListeners = [],
                this._progressListeners = [],
                this._progressiveReadListeners = [],
                this._readyCapability = c.createPromiseCapability()
            }
            return e.prototype = {
                addRangeListener: function(e) {
                    this._rangeListeners.push(e)
                },
                addProgressListener: function(e) {
                    this._progressListeners.push(e)
                },
                addProgressiveReadListener: function(e) {
                    this._progressiveReadListeners.push(e)
                },
                onDataRange: function(e, t) {
                    for (var r = this._rangeListeners, n = 0, i = r.length; i > n; ++n)
                        r[n](e, t)
                },
                onDataProgress: function(e) {
                    var t = this;
                    this._readyCapability.promise.then(function() {
                        for (var r = t._progressListeners, n = 0, i = r.length; i > n; ++n)
                            r[n](e)
                    })
                },
                onDataProgressiveRead: function(e) {
                    var t = this;
                    this._readyCapability.promise.then(function() {
                        for (var r = t._progressiveReadListeners, n = 0, i = r.length; i > n; ++n)
                            r[n](e)
                    })
                },
                transportReady: function() {
                    this._readyCapability.resolve()
                },
                requestDataRange: function() {
                    c.unreachable("Abstract method PDFDataRangeTransport.requestDataRange")
                },
                abort: function() {}
            },
            e
        }(), I = function() {
            function e(e, t, r) {
                this.pdfInfo = e,
                this.transport = t,
                this.loadingTask = r
            }
            return e.prototype = {
                get numPages() {
                    return this.pdfInfo.numPages
                },
                get fingerprint() {
                    return this.pdfInfo.fingerprint
                },
                getPage: function(e) {
                    return this.transport.getPage(e)
                },
                getPageIndex: function(e) {
                    return this.transport.getPageIndex(e)
                },
                getDestinations: function() {
                    return this.transport.getDestinations()
                },
                getDestination: function(e) {
                    return this.transport.getDestination(e)
                },
                getPageLabels: function() {
                    return this.transport.getPageLabels()
                },
                getPageMode: function() {
                    return this.transport.getPageMode()
                },
                getAttachments: function() {
                    return this.transport.getAttachments()
                },
                getJavaScript: function() {
                    return this.transport.getJavaScript()
                },
                getOutline: function() {
                    return this.transport.getOutline()
                },
                getMetadata: function() {
                    return this.transport.getMetadata()
                },
                getData: function() {
                    return this.transport.getData()
                },
                getDownloadInfo: function() {
                    return this.transport.downloadInfoCapability.promise
                },
                getStats: function() {
                    return this.transport.getStats()
                },
                cleanup: function() {
                    this.transport.startCleanup()
                },
                destroy: function() {
                    return this.loadingTask.destroy()
                },
                get loadingParams() {
                    return this.transport.loadingParams
                }
            },
            e
        }(), F = function() {
            function e(e, t, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !1;
                this.pageIndex = e,
                this.pageInfo = t,
                this.transport = r,
                this._stats = n ? new h.StatTimer : h.DummyStatTimer,
                this._pdfBug = n,
                this.commonObjs = r.commonObjs,
                this.objs = new N,
                this.cleanupAfterRender = !1,
                this.pendingCleanup = !1,
                this.intentStates = Object.create(null),
                this.destroyed = !1
            }
            return e.prototype = {
                get pageNumber() {
                    return this.pageIndex + 1
                },
                get rotate() {
                    return this.pageInfo.rotate
                },
                get ref() {
                    return this.pageInfo.ref
                },
                get userUnit() {
                    return this.pageInfo.userUnit
                },
                get view() {
                    return this.pageInfo.view
                },
                getViewport: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.rotate
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
                    return new c.PageViewport(this.view,e,t,0,0,r)
                },
                getAnnotations: function(e) {
                    var t = e && e.intent || null;
                    return this.annotationsPromise && this.annotationsIntent === t || (this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, t),
                    this.annotationsIntent = t),
                    this.annotationsPromise
                },
                render: function(e) {
                    var t = this
                      , r = this._stats;
                    r.time("Overall"),
                    this.pendingCleanup = !1;
                    var n = "print" === e.intent ? "print" : "display"
                      , i = e.canvasFactory || new h.DOMCanvasFactory
                      , a = new y.WebGLContext({
                        enable: e.enableWebGL
                    });
                    this.intentStates[n] || (this.intentStates[n] = Object.create(null));
                    var o = this.intentStates[n];
                    o.displayReadyCapability || (o.receivingOperatorList = !0,
                    o.displayReadyCapability = c.createPromiseCapability(),
                    o.operatorList = {
                        fnArray: [],
                        argsArray: [],
                        lastChunk: !1
                    },
                    r.time("Page Request"),
                    this.transport.messageHandler.send("RenderPageRequest", {
                        pageIndex: this.pageNumber - 1,
                        intent: n,
                        renderInteractiveForms: e.renderInteractiveForms === !0
                    }));
                    var s = function(e) {
                        var n = o.renderTasks.indexOf(u);
                        n >= 0 && o.renderTasks.splice(n, 1),
                        t.cleanupAfterRender && (t.pendingCleanup = !0),
                        t._tryCleanup(),
                        e ? u.capability.reject(e) : u.capability.resolve(),
                        r.timeEnd("Rendering"),
                        r.timeEnd("Overall")
                    }
                      , u = new W(s,e,this.objs,this.commonObjs,o.operatorList,this.pageNumber,i,a,this._pdfBug);
                    u.useRequestAnimationFrame = "print" !== n,
                    o.renderTasks || (o.renderTasks = []),
                    o.renderTasks.push(u);
                    var l = u.task;
                    return o.displayReadyCapability.promise.then(function(e) {
                        return t.pendingCleanup ? void s() : (r.time("Rendering"),
                        u.initializeGraphics(e),
                        void u.operatorListChanged())
                    }).catch(s),
                    l
                },
                getOperatorList: function() {
                    function e() {
                        if (n.operatorList.lastChunk) {
                            n.opListReadCapability.resolve(n.operatorList);
                            var e = n.renderTasks.indexOf(r);
                            e >= 0 && n.renderTasks.splice(e, 1)
                        }
                    }
                    var t = "oplist";
                    this.intentStates[t] || (this.intentStates[t] = Object.create(null));
                    var r, n = this.intentStates[t];
                    return n.opListReadCapability || (r = {},
                    r.operatorListChanged = e,
                    n.receivingOperatorList = !0,
                    n.opListReadCapability = c.createPromiseCapability(),
                    n.renderTasks = [],
                    n.renderTasks.push(r),
                    n.operatorList = {
                        fnArray: [],
                        argsArray: [],
                        lastChunk: !1
                    },
                    this.transport.messageHandler.send("RenderPageRequest", {
                        pageIndex: this.pageIndex,
                        intent: t
                    })),
                    n.opListReadCapability.promise
                },
                streamTextContent: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = 100;
                    return this.transport.messageHandler.sendWithStream("GetTextContent", {
                        pageIndex: this.pageNumber - 1,
                        normalizeWhitespace: e.normalizeWhitespace === !0,
                        combineTextItems: e.disableCombineTextItems !== !0
                    }, {
                        highWaterMark: t,
                        size: function(e) {
                            return e.items.length
                        }
                    })
                },
                getTextContent: function(e) {
                    e = e || {};
                    var t = this.streamTextContent(e);
                    return new Promise(function(e, r) {
                        function n() {
                            i.read().then(function(t) {
                                var r = t.value
                                  , i = t.done;
                                return i ? void e(a) : (c.Util.extendObj(a.styles, r.styles),
                                c.Util.appendToArray(a.items, r.items),
                                void n())
                            }, r)
                        }
                        var i = t.getReader()
                          , a = {
                            items: [],
                            styles: Object.create(null)
                        };
                        n()
                    }
                    )
                },
                _destroy: function() {
                    this.destroyed = !0,
                    this.transport.pageCache[this.pageIndex] = null;
                    var e = [];
                    return Object.keys(this.intentStates).forEach(function(t) {
                        if ("oplist" !== t) {
                            var r = this.intentStates[t];
                            r.renderTasks.forEach(function(t) {
                                var r = t.capability.promise.catch(function() {});
                                e.push(r),
                                t.cancel()
                            })
                        }
                    }, this),
                    this.objs.clear(),
                    this.annotationsPromise = null,
                    this.pendingCleanup = !1,
                    Promise.all(e)
                },
                cleanup: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
                    this.pendingCleanup = !0,
                    this._tryCleanup(e)
                },
                _tryCleanup: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
                    this.pendingCleanup && !Object.keys(this.intentStates).some(function(e) {
                        var t = this.intentStates[e];
                        return 0 !== t.renderTasks.length || t.receivingOperatorList
                    }, this) && (Object.keys(this.intentStates).forEach(function(e) {
                        delete this.intentStates[e]
                    }, this),
                    this.objs.clear(),
                    this.annotationsPromise = null,
                    e && this._stats instanceof h.StatTimer && (this._stats = new h.StatTimer),
                    this.pendingCleanup = !1)
                },
                _startRenderPage: function(e, t) {
                    var r = this.intentStates[t];
                    r.displayReadyCapability && r.displayReadyCapability.resolve(e)
                },
                _renderPageChunk: function(e, t) {
                    var r, n, i = this.intentStates[t];
                    for (r = 0,
                    n = e.length; n > r; r++)
                        i.operatorList.fnArray.push(e.fnArray[r]),
                        i.operatorList.argsArray.push(e.argsArray[r]);
                    for (i.operatorList.lastChunk = e.lastChunk,
                    r = 0; r < i.renderTasks.length; r++)
                        i.renderTasks[r].operatorListChanged();
                    e.lastChunk && (i.receivingOperatorList = !1,
                    this._tryCleanup())
                },
                get stats() {
                    return this._stats instanceof h.StatTimer ? this._stats : null
                }
            },
            e
        }(), L = function() {
            function e(t) {
                i(this, e),
                this._listeners = [],
                this._defer = t,
                this._deferred = Promise.resolve(void 0)
            }
            return u(e, [{
                key: "postMessage",
                value: function(e, t) {
                    function r(e) {
                        if ("object" !== ("undefined" == typeof e ? "undefined" : l(e)) || null === e)
                            return e;
                        if (i.has(e))
                            return i.get(e);
                        var n, a;
                        if ((a = e.buffer) && c.isArrayBuffer(a)) {
                            var o = t && t.includes(a);
                            return n = e === a ? e : o ? new e.constructor(a,e.byteOffset,e.byteLength) : new e.constructor(e),
                            i.set(e, n),
                            n
                        }
                        n = Array.isArray(e) ? [] : {},
                        i.set(e, n);
                        for (var s in e) {
                            for (var u, h = e; !(u = Object.getOwnPropertyDescriptor(h, s)); )
                                h = Object.getPrototypeOf(h);
                            "undefined" != typeof u.value && "function" != typeof u.value && (n[s] = r(u.value))
                        }
                        return n
                    }
                    var n = this;
                    if (!this._defer)
                        return void this._listeners.forEach(function(t) {
                            t.call(this, {
                                data: e
                            })
                        }, this);
                    var i = new WeakMap
                      , a = {
                        data: r(e)
                    };
                    this._deferred.then(function() {
                        n._listeners.forEach(function(e) {
                            e.call(this, a)
                        }, n)
                    })
                }
            }, {
                key: "addEventListener",
                value: function(e, t) {
                    this._listeners.push(t)
                }
            }, {
                key: "removeEventListener",
                value: function(e, t) {
                    var r = this._listeners.indexOf(t);
                    this._listeners.splice(r, 1)
                }
            }, {
                key: "terminate",
                value: function() {
                    this._listeners = []
                }
            }]),
            e
        }(), M = function() {
            function e() {
                if (g.GlobalWorkerOptions.workerSrc)
                    return g.GlobalWorkerOptions.workerSrc;
                if ("undefined" != typeof w)
                    return w;
                if (C)
                    return C.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
                throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')
            }
            function t() {
                return "undefined" == typeof window ? null : window.pdfjsWorker && window.pdfjsWorker.WorkerMessageHandler
            }
            function r() {
                if (o)
                    return o.promise;
                o = c.createPromiseCapability();
                var r = t();
                if (r)
                    return o.resolve(r),
                    o.promise;
                var n = P || function(t) {
                    c.Util.loadScript(e(), function() {
                        t(window.pdfjsWorker.WorkerMessageHandler)
                    })
                }
                ;
                return n(o.resolve),
                o.promise
            }
            function n(e) {
                var t = "importScripts('" + e + "');";
                return URL.createObjectURL(new Blob([t]))
            }
            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.name
                  , r = void 0 === t ? null : t
                  , n = e.port
                  , i = void 0 === n ? null : n
                  , a = e.postMessageTransfers
                  , o = void 0 === a ? !0 : a
                  , u = e.verbosity
                  , l = void 0 === u ? null : u;
                if (i && s.has(i))
                    throw new Error("Cannot use more than one PDFWorker per port");
                return this.name = r,
                this.destroyed = !1,
                this.postMessageTransfers = o !== !1,
                this.verbosity = c.isNum(l) ? l : c.getVerbosityLevel(),
                this._readyCapability = c.createPromiseCapability(),
                this._port = null,
                this._webWorker = null,
                this._messageHandler = null,
                i ? (s.set(i, this),
                void this._initializeFromPort(i)) : void this._initialize()
            }
            var a = 0
              , o = void 0
              , s = new WeakMap;
            return i.prototype = {
                get promise() {
                    return this._readyCapability.promise
                },
                get port() {
                    return this._port
                },
                get messageHandler() {
                    return this._messageHandler
                },
                _initializeFromPort: function(e) {
                    this._port = e,
                    this._messageHandler = new c.MessageHandler("main","worker",e),
                    this._messageHandler.on("ready", function() {}),
                    this._readyCapability.resolve()
                },
                _initialize: function() {
                    var r = this;
                    if ("undefined" != typeof Worker && !S && !t()) {
                        var i = e();
                        try {
                            c.isSameOrigin(window.location.href, i) || (i = n(new URL(i,window.location).href));
                            var a = new Worker(i)
                              , o = new c.MessageHandler("main","worker",a)
                              , s = function() {
                                a.removeEventListener("error", u),
                                o.destroy(),
                                a.terminate(),
                                r.destroyed ? r._readyCapability.reject(new Error("Worker was destroyed")) : r._setupFakeWorker()
                            }
                              , u = function() {
                                r._webWorker || s()
                            };
                            a.addEventListener("error", u),
                            o.on("test", function(e) {
                                if (a.removeEventListener("error", u),
                                r.destroyed)
                                    return void s();
                                var t = e && e.supportTypedArray;
                                t ? (r._messageHandler = o,
                                r._port = a,
                                r._webWorker = a,
                                e.supportTransfers || (r.postMessageTransfers = !1),
                                r._readyCapability.resolve(),
                                o.send("configure", {
                                    verbosity: r.verbosity
                                })) : (r._setupFakeWorker(),
                                o.destroy(),
                                a.terminate())
                            }),
                            o.on("ready", function() {
                                if (a.removeEventListener("error", u),
                                r.destroyed)
                                    return void s();
                                try {
                                    l()
                                } catch (e) {
                                    r._setupFakeWorker()
                                }
                            });
                            var l = function() {
                                var e = new Uint8Array([r.postMessageTransfers ? 255 : 0]);
                                try {
                                    o.send("test", e, [e.buffer])
                                } catch (t) {
                                    c.info("Cannot use postMessage transfers"),
                                    e[0] = 0,
                                    o.send("test", e)
                                }
                            };
                            return void l()
                        } catch (h) {
                            c.info("The worker has been disabled.")
                        }
                    }
                    this._setupFakeWorker()
                },
                _setupFakeWorker: function() {
                    var e = this;
                    S || (c.warn("Setting up fake worker."),
                    S = !0),
                    r().then(function(t) {
                        if (e.destroyed)
                            return void e._readyCapability.reject(new Error("Worker was destroyed"));
                        var r = Uint8Array !== Float32Array
                          , n = new L(r);
                        e._port = n;
                        var i = "fake" + a++
                          , o = new c.MessageHandler(i + "_worker",i,n);
                        t.setup(o, n);
                        var s = new c.MessageHandler(i,i + "_worker",n);
                        e._messageHandler = s,
                        e._readyCapability.resolve()
                    })
                },
                destroy: function() {
                    this.destroyed = !0,
                    this._webWorker && (this._webWorker.terminate(),
                    this._webWorker = null),
                    s.delete(this._port),
                    this._port = null,
                    this._messageHandler && (this._messageHandler.destroy(),
                    this._messageHandler = null)
                }
            },
            i.fromPort = function(e) {
                return s.has(e.port) ? s.get(e.port) : new i(e)
            }
            ,
            i.getWorkerSrc = function() {
                return e()
            }
            ,
            i
        }(), D = function() {
            function e(e, t, r, n, i) {
                this.messageHandler = e,
                this.loadingTask = t,
                this.commonObjs = new N,
                this.fontLoader = new d.FontLoader(t.docId),
                this._params = n,
                this.CMapReaderFactory = new i({
                    baseUrl: n.cMapUrl,
                    isCompressed: n.cMapPacked
                }),
                this.destroyed = !1,
                this.destroyCapability = null,
                this._passwordCapability = null,
                this._networkStream = r,
                this._fullReader = null,
                this._lastProgress = null,
                this.pageCache = [],
                this.pagePromises = [],
                this.downloadInfoCapability = c.createPromiseCapability(),
                this.setupMessageHandler()
            }
            return e.prototype = {
                destroy: function() {
                    var e = this;
                    if (this.destroyCapability)
                        return this.destroyCapability.promise;
                    this.destroyed = !0,
                    this.destroyCapability = c.createPromiseCapability(),
                    this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                    var t = [];
                    this.pageCache.forEach(function(e) {
                        e && t.push(e._destroy())
                    }),
                    this.pageCache = [],
                    this.pagePromises = [];
                    var r = this.messageHandler.sendWithPromise("Terminate", null);
                    return t.push(r),
                    Promise.all(t).then(function() {
                        e.fontLoader.clear(),
                        e._networkStream && e._networkStream.cancelAllRequests(),
                        e.messageHandler && (e.messageHandler.destroy(),
                        e.messageHandler = null),
                        e.destroyCapability.resolve()
                    }, this.destroyCapability.reject),
                    this.destroyCapability.promise
                },
                setupMessageHandler: function() {
                    var e = this.messageHandler
                      , t = this.loadingTask;
                    e.on("GetReader", function(e, t) {
                        var r = this;
                        c.assert(this._networkStream),
                        this._fullReader = this._networkStream.getFullReader(),
                        this._fullReader.onProgress = function(e) {
                            r._lastProgress = {
                                loaded: e.loaded,
                                total: e.total
                            }
                        }
                        ,
                        t.onPull = function() {
                            r._fullReader.read().then(function(e) {
                                var r = e.value
                                  , n = e.done;
                                return n ? void t.close() : (c.assert(c.isArrayBuffer(r)),
                                void t.enqueue(new Uint8Array(r), 1, [r]))
                            }).catch(function(e) {
                                t.error(e)
                            })
                        }
                        ,
                        t.onCancel = function(e) {
                            r._fullReader.cancel(e)
                        }
                    }, this),
                    e.on("ReaderHeadersReady", function() {
                        var e = this
                          , t = c.createPromiseCapability()
                          , r = this._fullReader;
                        return r.headersReady.then(function() {
                            if (!r.isStreamingSupported || !r.isRangeSupported) {
                                if (e._lastProgress) {
                                    var n = e.loadingTask;
                                    n.onProgress && n.onProgress(e._lastProgress)
                                }
                                r.onProgress = function(t) {
                                    var r = e.loadingTask;
                                    r.onProgress && r.onProgress({
                                        loaded: t.loaded,
                                        total: t.total
                                    })
                                }
                            }
                            t.resolve({
                                isStreamingSupported: r.isStreamingSupported,
                                isRangeSupported: r.isRangeSupported,
                                contentLength: r.contentLength
                            })
                        }, t.reject),
                        t.promise
                    }, this),
                    e.on("GetRangeReader", function(e, t) {
                        c.assert(this._networkStream);
                        var r = this._networkStream.getRangeReader(e.begin, e.end);
                        t.onPull = function() {
                            r.read().then(function(e) {
                                var r = e.value
                                  , n = e.done;
                                return n ? void t.close() : (c.assert(c.isArrayBuffer(r)),
                                void t.enqueue(new Uint8Array(r), 1, [r]))
                            }).catch(function(e) {
                                t.error(e)
                            })
                        }
                        ,
                        t.onCancel = function(e) {
                            r.cancel(e)
                        }
                    }, this),
                    e.on("GetDoc", function(e) {
                        var t = e.pdfInfo;
                        this.numPages = t.numPages;
                        var r = this.loadingTask
                          , n = new I(t,this,r);
                        this.pdfDocument = n,
                        r._capability.resolve(n)
                    }, this),
                    e.on("PasswordRequest", function(e) {
                        var r = this;
                        if (this._passwordCapability = c.createPromiseCapability(),
                        t.onPassword) {
                            var n = function(e) {
                                r._passwordCapability.resolve({
                                    password: e
                                })
                            };
                            t.onPassword(n, e.code)
                        } else
                            this._passwordCapability.reject(new c.PasswordException(e.message,e.code));
                        return this._passwordCapability.promise
                    }, this),
                    e.on("PasswordException", function(e) {
                        t._capability.reject(new c.PasswordException(e.message,e.code))
                    }, this),
                    e.on("InvalidPDF", function(e) {
                        this.loadingTask._capability.reject(new c.InvalidPDFException(e.message))
                    }, this),
                    e.on("MissingPDF", function(e) {
                        this.loadingTask._capability.reject(new c.MissingPDFException(e.message))
                    }, this),
                    e.on("UnexpectedResponse", function(e) {
                        this.loadingTask._capability.reject(new c.UnexpectedResponseException(e.message,e.status))
                    }, this),
                    e.on("UnknownError", function(e) {
                        this.loadingTask._capability.reject(new c.UnknownErrorException(e.message,e.details))
                    }, this),
                    e.on("DataLoaded", function(e) {
                        this.downloadInfoCapability.resolve(e)
                    }, this),
                    e.on("PDFManagerReady", function() {}, this),
                    e.on("StartRenderPage", function(e) {
                        if (!this.destroyed) {
                            var t = this.pageCache[e.pageIndex];
                            t._stats.timeEnd("Page Request"),
                            t._startRenderPage(e.transparency, e.intent)
                        }
                    }, this),
                    e.on("RenderPageChunk", function(e) {
                        if (!this.destroyed) {
                            var t = this.pageCache[e.pageIndex];
                            t._renderPageChunk(e.operatorList, e.intent)
                        }
                    }, this),
                    e.on("commonobj", function(e) {
                        var t = this;
                        if (!this.destroyed) {
                            var r = e[0]
                              , n = e[1];
                            if (!this.commonObjs.hasData(r))
                                switch (n) {
                                case "Font":
                                    var i = e[2]
                                      , a = this._params;
                                    if ("error"in i) {
                                        var o = i.error;
                                        c.warn("Error during font loading: " + o),
                                        this.commonObjs.resolve(r, o);
                                        break
                                    }
                                    var s = null;
                                    a.pdfBug && v.default.FontInspector && v.default.FontInspector.enabled && (s = {
                                        registerFont: function(e, t) {
                                            v.default.FontInspector.fontAdded(e, t)
                                        }
                                    });
                                    var u = new d.FontFaceObject(i,{
                                        isEvalSupported: a.isEvalSupported,
                                        disableFontFace: a.disableFontFace,
                                        fontRegistry: s
                                    })
                                      , l = function() {
                                        t.commonObjs.resolve(r, u)
                                    };
                                    this.fontLoader.bind([u], l);
                                    break;
                                case "FontPath":
                                    this.commonObjs.resolve(r, e[2]);
                                    break;
                                default:
                                    throw new Error("Got unknown common object type " + n)
                                }
                        }
                    }, this),
                    e.on("obj", function(e) {
                        if (!this.destroyed) {
                            var t, r = e[0], n = e[1], i = e[2], a = this.pageCache[n];
                            if (!a.objs.hasData(r))
                                switch (i) {
                                case "JpegStream":
                                    return t = e[3],
                                    new Promise(function(e, r) {
                                        var n = new Image;
                                        n.onload = function() {
                                            e(n)
                                        }
                                        ,
                                        n.onerror = function() {
                                            r(new Error("Error during JPEG image loading"))
                                        }
                                        ,
                                        n.src = t
                                    }
                                    ).then(function(e) {
                                        a.objs.resolve(r, e)
                                    });
                                case "Image":
                                    t = e[3],
                                    a.objs.resolve(r, t);
                                    var o = 8e6;
                                    t && "data"in t && t.data.length > o && (a.cleanupAfterRender = !0);
                                    break;
                                default:
                                    throw new Error("Got unknown object type " + i)
                                }
                        }
                    }, this),
                    e.on("DocProgress", function(e) {
                        if (!this.destroyed) {
                            var t = this.loadingTask;
                            t.onProgress && t.onProgress({
                                loaded: e.loaded,
                                total: e.total
                            })
                        }
                    }, this),
                    e.on("PageError", function(e) {
                        if (!this.destroyed) {
                            var t = this.pageCache[e.pageNum - 1]
                              , r = t.intentStates[e.intent];
                            if (!r.displayReadyCapability)
                                throw new Error(e.error);
                            if (r.displayReadyCapability.reject(e.error),
                            r.operatorList) {
                                r.operatorList.lastChunk = !0;
                                for (var n = 0; n < r.renderTasks.length; n++)
                                    r.renderTasks[n].operatorListChanged()
                            }
                        }
                    }, this),
                    e.on("UnsupportedFeature", function(e) {
                        if (!this.destroyed) {
                            var t = this.loadingTask;
                            t.onUnsupportedFeature && t.onUnsupportedFeature(e.featureId)
                        }
                    }, this),
                    e.on("JpegDecode", function(e) {
                        if (this.destroyed)
                            return Promise.reject(new Error("Worker was destroyed"));
                        if ("undefined" == typeof document)
                            return Promise.reject(new Error('"document" is not defined.'));
                        var t = e[0]
                          , r = e[1];
                        return 3 !== r && 1 !== r ? Promise.reject(new Error("Only 3 components or 1 component can be returned")) : new Promise(function(e, n) {
                            var i = new Image;
                            i.onload = function() {
                                var t = i.width
                                  , n = i.height
                                  , a = t * n
                                  , o = 4 * a
                                  , s = new Uint8Array(a * r)
                                  , u = document.createElement("canvas");
                                u.width = t,
                                u.height = n;
                                var l = u.getContext("2d");
                                l.drawImage(i, 0, 0);
                                var c, h, d = l.getImageData(0, 0, t, n).data;
                                if (3 === r)
                                    for (c = 0,
                                    h = 0; o > c; c += 4,
                                    h += 3)
                                        s[h] = d[c],
                                        s[h + 1] = d[c + 1],
                                        s[h + 2] = d[c + 2];
                                else if (1 === r)
                                    for (c = 0,
                                    h = 0; o > c; c += 4,
                                    h++)
                                        s[h] = d[c];
                                e({
                                    data: s,
                                    width: t,
                                    height: n
                                })
                            }
                            ,
                            i.onerror = function() {
                                n(new Error("JpegDecode failed to load image"))
                            }
                            ,
                            i.src = t
                        }
                        )
                    }, this),
                    e.on("FetchBuiltInCMap", function(e) {
                        return this.destroyed ? Promise.reject(new Error("Worker was destroyed")) : this.CMapReaderFactory.fetch({
                            name: e.name
                        })
                    }, this)
                },
                getData: function() {
                    return this.messageHandler.sendWithPromise("GetData", null)
                },
                getPage: function(e) {
                    var t = this;
                    if (!Number.isInteger(e) || 0 >= e || e > this.numPages)
                        return Promise.reject(new Error("Invalid page request"));
                    var r = e - 1;
                    if (r in this.pagePromises)
                        return this.pagePromises[r];
                    var n = this.messageHandler.sendWithPromise("GetPage", {
                        pageIndex: r
                    }).then(function(e) {
                        if (t.destroyed)
                            throw new Error("Transport destroyed");
                        var n = new F(r,e,t,t._params.pdfBug);
                        return t.pageCache[r] = n,
                        n
                    });
                    return this.pagePromises[r] = n,
                    n
                },
                getPageIndex: function(e) {
                    return this.messageHandler.sendWithPromise("GetPageIndex", {
                        ref: e
                    }).catch(function(e) {
                        return Promise.reject(new Error(e))
                    })
                },
                getAnnotations: function(e, t) {
                    return this.messageHandler.sendWithPromise("GetAnnotations", {
                        pageIndex: e,
                        intent: t
                    })
                },
                getDestinations: function() {
                    return this.messageHandler.sendWithPromise("GetDestinations", null)
                },
                getDestination: function(e) {
                    return this.messageHandler.sendWithPromise("GetDestination", {
                        id: e
                    })
                },
                getPageLabels: function() {
                    return this.messageHandler.sendWithPromise("GetPageLabels", null)
                },
                getPageMode: function() {
                    return this.messageHandler.sendWithPromise("GetPageMode", null)
                },
                getAttachments: function() {
                    return this.messageHandler.sendWithPromise("GetAttachments", null)
                },
                getJavaScript: function() {
                    return this.messageHandler.sendWithPromise("GetJavaScript", null)
                },
                getOutline: function() {
                    return this.messageHandler.sendWithPromise("GetOutline", null)
                },
                getMetadata: function() {
                    var e = this;
                    return this.messageHandler.sendWithPromise("GetMetadata", null).then(function(t) {
                        return {
                            info: t[0],
                            metadata: t[1] ? new b.Metadata(t[1]) : null,
                            contentDispositionFilename: e._fullReader ? e._fullReader.filename : null
                        }
                    })
                },
                getStats: function() {
                    return this.messageHandler.sendWithPromise("GetStats", null)
                },
                startCleanup: function() {
                    var e = this;
                    this.messageHandler.sendWithPromise("Cleanup", null).then(function() {
                        for (var t = 0, r = e.pageCache.length; r > t; t++) {
                            var n = e.pageCache[t];
                            n && n.cleanup()
                        }
                        e.commonObjs.clear(),
                        e.fontLoader.clear()
                    })
                },
                get loadingParams() {
                    var e = this._params;
                    return c.shadow(this, "loadingParams", {
                        disableRange: e.disableRange,
                        disableStream: e.disableStream,
                        disableAutoFetch: e.disableAutoFetch,
                        disableCreateObjectURL: e.disableCreateObjectURL
                    })
                }
            },
            e
        }(), N = function() {
            function e() {
                this.objs = Object.create(null)
            }
            return e.prototype = {
                ensureObj: function(e) {
                    if (this.objs[e])
                        return this.objs[e];
                    var t = {
                        capability: c.createPromiseCapability(),
                        data: null,
                        resolved: !1
                    };
                    return this.objs[e] = t,
                    t
                },
                get: function(e, t) {
                    if (t)
                        return this.ensureObj(e).capability.promise.then(t),
                        null;
                    var r = this.objs[e];
                    if (!r || !r.resolved)
                        throw new Error("Requesting object that isn't resolved yet " + e);
                    return r.data
                },
                resolve: function(e, t) {
                    var r = this.ensureObj(e);
                    r.resolved = !0,
                    r.data = t,
                    r.capability.resolve(t)
                },
                isResolved: function(e) {
                    var t = this.objs;
                    return t[e] ? t[e].resolved : !1
                },
                hasData: function(e) {
                    return this.isResolved(e)
                },
                getData: function(e) {
                    var t = this.objs;
                    return t[e] && t[e].resolved ? t[e].data : null
                },
                clear: function() {
                    this.objs = Object.create(null)
                }
            },
            e
        }(), q = function() {
            function e(e) {
                this._internalRenderTask = e,
                this.onContinue = null
            }
            return e.prototype = {
                get promise() {
                    return this._internalRenderTask.capability.promise
                },
                cancel: function() {
                    this._internalRenderTask.cancel()
                },
                then: function() {
                    return this.promise.then.apply(this.promise, arguments)
                }
            },
            e
        }(), W = function() {
            function e(e, t, r, n, i, a, o, s) {
                var u = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : !1;
                this.callback = e,
                this.params = t,
                this.objs = r,
                this.commonObjs = n,
                this.operatorListIdx = null,
                this.operatorList = i,
                this.pageNumber = a,
                this.canvasFactory = o,
                this.webGLContext = s,
                this._pdfBug = u,
                this.running = !1,
                this.graphicsReadyCallback = null,
                this.graphicsReady = !1,
                this.useRequestAnimationFrame = !1,
                this.cancelled = !1,
                this.capability = c.createPromiseCapability(),
                this.task = new q(this),
                this._continueBound = this._continue.bind(this),
                this._scheduleNextBound = this._scheduleNext.bind(this),
                this._nextBound = this._next.bind(this),
                this._canvas = t.canvasContext.canvas
            }
            var t = new WeakMap;
            return e.prototype = {
                initializeGraphics: function(e) {
                    if (this._canvas) {
                        if (t.has(this._canvas))
                            throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                        t.set(this._canvas, this)
                    }
                    if (!this.cancelled) {
                        this._pdfBug && v.default.StepperManager && v.default.StepperManager.enabled && (this.stepper = v.default.StepperManager.create(this.pageNumber - 1),
                        this.stepper.init(this.operatorList),
                        this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
                        var r = this.params;
                        this.gfx = new p.CanvasGraphics(r.canvasContext,this.commonObjs,this.objs,this.canvasFactory,this.webGLContext,r.imageLayer),
                        this.gfx.beginDrawing({
                            transform: r.transform,
                            viewport: r.viewport,
                            transparency: e,
                            background: r.background
                        }),
                        this.operatorListIdx = 0,
                        this.graphicsReady = !0,
                        this.graphicsReadyCallback && this.graphicsReadyCallback()
                    }
                },
                cancel: function() {
                    this.running = !1,
                    this.cancelled = !0,
                    this._canvas && t.delete(this._canvas),
                    this.callback(new h.RenderingCancelledException("Rendering cancelled, page " + this.pageNumber,"canvas"))
                },
                operatorListChanged: function() {
                    return this.graphicsReady ? (this.stepper && this.stepper.updateOperatorList(this.operatorList),
                    void (this.running || this._continue())) : void (this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound))
                },
                _continue: function() {
                    this.running = !0,
                    this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
                },
                _scheduleNext: function() {
                    this.useRequestAnimationFrame && "undefined" != typeof window ? window.requestAnimationFrame(this._nextBound) : Promise.resolve(void 0).then(this._nextBound)
                },
                _next: function() {
                    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper),
                    this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1,
                    this.operatorList.lastChunk && (this.gfx.endDrawing(),
                    this._canvas && t.delete(this._canvas),
                    this.callback())))
                }
            },
            e
        }();
        t.version = T = "2.0.493",
        t.build = E = "c5c06bf5",
        t.getDocument = o,
        t.LoopbackPort = L,
        t.PDFDataRangeTransport = j,
        t.PDFWorker = M,
        t.PDFDocumentProxy = I,
        t.PDFPageProxy = F,
        t.setPDFNetworkStreamFactory = a,
        t.version = T,
        t.build = E
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            this.docId = e,
            this.styleElement = null,
            this.nativeFontFaces = [],
            this.loadTestFontId = 0,
            this.loadingContext = {
                requests: [],
                nextRequestId: 0
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.FontLoader = t.FontFaceObject = void 0;
        var i = r(0);
        n.prototype = {
            insertRule: function(e) {
                var t = this.styleElement;
                t || (t = this.styleElement = document.createElement("style"),
                t.id = "PDFJS_FONT_STYLE_TAG_" + this.docId,
                document.documentElement.getElementsByTagName("head")[0].appendChild(t));
                var r = t.sheet;
                r.insertRule(e, r.cssRules.length)
            },
            clear: function() {
                this.styleElement && (this.styleElement.remove(),
                this.styleElement = null),
                this.nativeFontFaces.forEach(function(e) {
                    document.fonts.delete(e)
                }),
                this.nativeFontFaces.length = 0
            }
        };
        var a = function() {
            return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")
        };
        Object.defineProperty(n.prototype, "loadTestFont", {
            get: function() {
                return i.shadow(this, "loadTestFont", a())
            },
            configurable: !0
        }),
        n.prototype.addNativeFontFace = function(e) {
            this.nativeFontFaces.push(e),
            document.fonts.add(e)
        }
        ,
        n.prototype.bind = function(e, t) {
            for (var r = [], a = [], o = [], s = function(e) {
                return e.loaded.catch(function(t) {
                    i.warn('Failed to load font "' + e.family + '": ' + t)
                })
            }, u = n.isFontLoadingAPISupported && !n.isSyncFontLoadingSupported, l = 0, c = e.length; c > l; l++) {
                var h = e[l];
                if (!h.attached && h.loading !== !1)
                    if (h.attached = !0,
                    u) {
                        var d = h.createNativeFontFace();
                        d && (this.addNativeFontFace(d),
                        o.push(s(d)))
                    } else {
                        var f = h.createFontFaceRule();
                        f && (this.insertRule(f),
                        r.push(f),
                        a.push(h))
                    }
            }
            var p = this.queueLoadingCallback(t);
            u ? Promise.all(o).then(function() {
                p.complete()
            }) : r.length > 0 && !n.isSyncFontLoadingSupported ? this.prepareFontLoadEvent(r, a, p) : p.complete()
        }
        ,
        n.prototype.queueLoadingCallback = function(e) {
            function t() {
                for (i.assert(!a.end, "completeRequest() cannot be called twice"),
                a.end = Date.now(); r.requests.length > 0 && r.requests[0].end; ) {
                    var e = r.requests.shift();
                    setTimeout(e.callback, 0)
                }
            }
            var r = this.loadingContext
              , n = "pdfjs-font-loading-" + r.nextRequestId++
              , a = {
                id: n,
                complete: t,
                callback: e,
                started: Date.now()
            };
            return r.requests.push(a),
            a
        }
        ,
        n.prototype.prepareFontLoadEvent = function(e, t, r) {
            function n(e, t) {
                return e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | 255 & e.charCodeAt(t + 3)
            }
            function a(e, t, r, n) {
                var i = e.substr(0, t)
                  , a = e.substr(t + r);
                return i + n + a
            }
            function o(e, t) {
                if (h++,
                h > 30)
                    return i.warn("Load test font never loaded."),
                    void t();
                c.font = "30px " + e,
                c.fillText(".", 0, 20);
                var r = c.getImageData(0, 0, 1, 1);
                return r.data[3] > 0 ? void t() : void setTimeout(o.bind(null, e, t))
            }
            var s, u, l = document.createElement("canvas");
            l.width = 1,
            l.height = 1;
            var c = l.getContext("2d")
              , h = 0
              , d = "lt" + Date.now() + this.loadTestFontId++
              , f = this.loadTestFont
              , p = 976;
            f = a(f, p, d.length, d);
            var m = 16
              , v = 1482184792
              , g = n(f, m);
            for (s = 0,
            u = d.length - 3; u > s; s += 4)
                g = g - v + n(d, s) | 0;
            s < d.length && (g = g - v + n(d + "XXX", s) | 0),
            f = a(f, m, 4, i.string32(g));
            var b = "url(data:font/opentype;base64," + btoa(f) + ");"
              , _ = '@font-face { font-family:"' + d + '";src:' + b + "}";
            this.insertRule(_);
            var y = [];
            for (s = 0,
            u = t.length; u > s; s++)
                y.push(t[s].loadedName);
            y.push(d);
            var A = document.createElement("div");
            for (A.setAttribute("style", "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"),
            s = 0,
            u = y.length; u > s; ++s) {
                var S = document.createElement("span");
                S.textContent = "Hi",
                S.style.fontFamily = y[s],
                A.appendChild(S)
            }
            document.body.appendChild(A),
            o(d, function() {
                document.body.removeChild(A),
                r.complete()
            })
        }
        ,
        n.isFontLoadingAPISupported = "undefined" != typeof document && !!document.fonts;
        var o = function() {
            if ("undefined" == typeof navigator)
                return !0;
            var e = !1
              , t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
            return t && t[1] >= 14 && (e = !0),
            e
        };
        Object.defineProperty(n, "isSyncFontLoadingSupported", {
            get: function() {
                return i.shadow(n, "isSyncFontLoadingSupported", o())
            },
            enumerable: !0,
            configurable: !0
        });
        var s = {
            get value() {
                return i.shadow(this, "value", i.isEvalSupported())
            }
        }
          , u = function() {
            function e(e, t) {
                var r = t.isEvalSupported
                  , n = void 0 === r ? !0 : r
                  , i = t.disableFontFace
                  , a = void 0 === i ? !1 : i
                  , o = t.fontRegistry
                  , s = void 0 === o ? null : o;
                this.compiledGlyphs = Object.create(null);
                for (var u in e)
                    this[u] = e[u];
                this.isEvalSupported = n !== !1,
                this.disableFontFace = a === !0,
                this.fontRegistry = s
            }
            return e.prototype = {
                createNativeFontFace: function() {
                    if (!this.data || this.disableFontFace)
                        return null;
                    var e = new FontFace(this.loadedName,this.data,{});
                    return this.fontRegistry && this.fontRegistry.registerFont(this),
                    e
                },
                createFontFaceRule: function() {
                    if (!this.data || this.disableFontFace)
                        return null;
                    var e = i.bytesToString(new Uint8Array(this.data))
                      , t = this.loadedName
                      , r = "url(data:" + this.mimetype + ";base64," + btoa(e) + ");"
                      , n = '@font-face { font-family:"' + t + '";src:' + r + "}";
                    return this.fontRegistry && this.fontRegistry.registerFont(this, r),
                    n
                },
                getPathGenerator: function(e, t) {
                    if (!(t in this.compiledGlyphs)) {
                        var r, n, i, a = e.get(this.loadedName + "_path_" + t);
                        if (this.isEvalSupported && s.value) {
                            var o, u = "";
                            for (n = 0,
                            i = a.length; i > n; n++)
                                r = a[n],
                                o = void 0 !== r.args ? r.args.join(",") : "",
                                u += "c." + r.cmd + "(" + o + ");\n";
                            this.compiledGlyphs[t] = new Function("c","size",u)
                        } else
                            this.compiledGlyphs[t] = function(e, t) {
                                for (n = 0,
                                i = a.length; i > n; n++)
                                    r = a[n],
                                    "scale" === r.cmd && (r.args = [t, -t]),
                                    e[r.cmd].apply(e, r.args)
                            }
                    }
                    return this.compiledGlyphs[t]
                }
            },
            e
        }();
        t.FontFaceObject = u,
        t.FontLoader = n
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            e.mozCurrentTransform || (e._originalSave = e.save,
            e._originalRestore = e.restore,
            e._originalRotate = e.rotate,
            e._originalScale = e.scale,
            e._originalTranslate = e.translate,
            e._originalTransform = e.transform,
            e._originalSetTransform = e.setTransform,
            e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0],
            e._transformStack = [],
            Object.defineProperty(e, "mozCurrentTransform", {
                get: function() {
                    return this._transformMatrix
                }
            }),
            Object.defineProperty(e, "mozCurrentTransformInverse", {
                get: function() {
                    var e = this._transformMatrix
                      , t = e[0]
                      , r = e[1]
                      , n = e[2]
                      , i = e[3]
                      , a = e[4]
                      , o = e[5]
                      , s = t * i - r * n
                      , u = r * n - t * i;
                    return [i / s, r / u, n / u, t / s, (i * a - n * o) / u, (r * a - t * o) / s]
                }
            }),
            e.save = function() {
                var e = this._transformMatrix;
                this._transformStack.push(e),
                this._transformMatrix = e.slice(0, 6),
                this._originalSave()
            }
            ,
            e.restore = function() {
                var e = this._transformStack.pop();
                e && (this._transformMatrix = e,
                this._originalRestore())
            }
            ,
            e.translate = function(e, t) {
                var r = this._transformMatrix;
                r[4] = r[0] * e + r[2] * t + r[4],
                r[5] = r[1] * e + r[3] * t + r[5],
                this._originalTranslate(e, t)
            }
            ,
            e.scale = function(e, t) {
                var r = this._transformMatrix;
                r[0] = r[0] * e,
                r[1] = r[1] * e,
                r[2] = r[2] * t,
                r[3] = r[3] * t,
                this._originalScale(e, t)
            }
            ,
            e.transform = function(t, r, n, i, a, o) {
                var s = this._transformMatrix;
                this._transformMatrix = [s[0] * t + s[2] * r, s[1] * t + s[3] * r, s[0] * n + s[2] * i, s[1] * n + s[3] * i, s[0] * a + s[2] * o + s[4], s[1] * a + s[3] * o + s[5]],
                e._originalTransform(t, r, n, i, a, o)
            }
            ,
            e.setTransform = function(t, r, n, i, a, o) {
                this._transformMatrix = [t, r, n, i, a, o],
                e._originalSetTransform(t, r, n, i, a, o)
            }
            ,
            e.rotate = function(e) {
                var t = Math.cos(e)
                  , r = Math.sin(e)
                  , n = this._transformMatrix;
                this._transformMatrix = [n[0] * t + n[2] * r, n[1] * t + n[3] * r, n[0] * -r + n[2] * t, n[1] * -r + n[3] * t, n[4], n[5]],
                this._originalRotate(e)
            }
            )
        }
        function i(e) {
            var t, r, n, i, a = 1e3, o = e.width, s = e.height, u = o + 1, l = new Uint8Array(u * (s + 1)), c = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), h = o + 7 & -8, d = e.data, f = new Uint8Array(h * s), p = 0;
            for (t = 0,
            i = d.length; i > t; t++)
                for (var m = 128, v = d[t]; m > 0; )
                    f[p++] = v & m ? 0 : 255,
                    m >>= 1;
            var g = 0;
            for (p = 0,
            0 !== f[p] && (l[0] = 1,
            ++g),
            r = 1; o > r; r++)
                f[p] !== f[p + 1] && (l[r] = f[p] ? 2 : 1,
                ++g),
                p++;
            for (0 !== f[p] && (l[r] = 2,
            ++g),
            t = 1; s > t; t++) {
                p = t * h,
                n = t * u,
                f[p - h] !== f[p] && (l[n] = f[p] ? 1 : 8,
                ++g);
                var b = (f[p] ? 4 : 0) + (f[p - h] ? 8 : 0);
                for (r = 1; o > r; r++)
                    b = (b >> 2) + (f[p + 1] ? 4 : 0) + (f[p - h + 1] ? 8 : 0),
                    c[b] && (l[n + r] = c[b],
                    ++g),
                    p++;
                if (f[p - h] !== f[p] && (l[n + r] = f[p] ? 2 : 4,
                ++g),
                g > a)
                    return null
            }
            for (p = h * (s - 1),
            n = t * u,
            0 !== f[p] && (l[n] = 8,
            ++g),
            r = 1; o > r; r++)
                f[p] !== f[p + 1] && (l[n + r] = f[p] ? 4 : 8,
                ++g),
                p++;
            if (0 !== f[p] && (l[n + r] = 4,
            ++g),
            g > a)
                return null;
            var _ = new Int32Array([0, u, -1, 0, -u, 0, 0, 0, 1])
              , y = [];
            for (t = 0; g && s >= t; t++) {
                for (var A = t * u, S = A + o; S > A && !l[A]; )
                    A++;
                if (A !== S) {
                    var w, C = [A % u, t], P = l[A], k = A;
                    do {
                        var R = _[P];
                        do
                            A += R;
                        while (!l[A]);w = l[A],
                        5 !== w && 10 !== w ? (P = w,
                        l[A] = 0) : (P = w & 51 * P >> 4,
                        l[A] &= P >> 2 | P << 2),
                        C.push(A % u),
                        C.push(A / u | 0),
                        --g
                    } while (k !== A);y.push(C),
                    --t
                }
            }
            var x = function(e) {
                e.save(),
                e.scale(1 / o, -1 / s),
                e.translate(0, -s),
                e.beginPath();
                for (var t = 0, r = y.length; r > t; t++) {
                    var n = y[t];
                    e.moveTo(n[0], n[1]);
                    for (var i = 2, a = n.length; a > i; i += 2)
                        e.lineTo(n[i], n[i + 1])
                }
                e.fill(),
                e.beginPath(),
                e.restore()
            };
            return x
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.CanvasGraphics = void 0;
        var a = r(0)
          , o = r(120)
          , s = 16
          , u = 100
          , l = 4096
          , c = .65
          , h = !0
          , d = 1e3
          , f = 16
          , p = {
            get value() {
                return a.shadow(p, "value", a.isLittleEndian())
            }
        }
          , m = function() {
            function e(e) {
                this.canvasFactory = e,
                this.cache = Object.create(null)
            }
            return e.prototype = {
                getCanvas: function(e, t, r, i) {
                    var a;
                    return void 0 !== this.cache[e] ? (a = this.cache[e],
                    this.canvasFactory.reset(a, t, r),
                    a.context.setTransform(1, 0, 0, 1, 0, 0)) : (a = this.canvasFactory.create(t, r),
                    this.cache[e] = a),
                    i && n(a.context),
                    a
                },
                clear: function() {
                    for (var e in this.cache) {
                        var t = this.cache[e];
                        this.canvasFactory.destroy(t),
                        delete this.cache[e]
                    }
                }
            },
            e
        }()
          , v = function() {
            function e() {
                this.alphaIsShape = !1,
                this.fontSize = 0,
                this.fontSizeScale = 1,
                this.textMatrix = a.IDENTITY_MATRIX,
                this.textMatrixScale = 1,
                this.fontMatrix = a.FONT_IDENTITY_MATRIX,
                this.leading = 0,
                this.x = 0,
                this.y = 0,
                this.lineX = 0,
                this.lineY = 0,
                this.charSpacing = 0,
                this.wordSpacing = 0,
                this.textHScale = 1,
                this.textRenderingMode = a.TextRenderingMode.FILL,
                this.textRise = 0,
                this.fillColor = "#000000",
                this.strokeColor = "#000000",
                this.patternFill = !1,
                this.fillAlpha = 1,
                this.strokeAlpha = 1,
                this.lineWidth = 1,
                this.activeSMask = null,
                this.resumeSMaskCtx = null
            }
            return e.prototype = {
                clone: function() {
                    return Object.create(this)
                },
                setCurrentPoint: function(e, t) {
                    this.x = e,
                    this.y = t
                }
            },
            e
        }()
          , g = function() {
            function e(e, t, r, i, a, o) {
                this.ctx = e,
                this.current = new v,
                this.stateStack = [],
                this.pendingClip = null,
                this.pendingEOFill = !1,
                this.res = null,
                this.xobjs = null,
                this.commonObjs = t,
                this.objs = r,
                this.canvasFactory = i,
                this.webGLContext = a,
                this.imageLayer = o,
                this.groupStack = [],
                this.processingType3 = null,
                this.baseTransform = null,
                this.baseTransformStack = [],
                this.groupLevel = 0,
                this.smaskStack = [],
                this.smaskCounter = 0,
                this.tempSMask = null,
                this.cachedCanvases = new m(this.canvasFactory),
                e && n(e),
                this.cachedGetSinglePixelWidth = null
            }
            function t(e, t) {
                if ("undefined" != typeof ImageData && t instanceof ImageData)
                    return void e.putImageData(t, 0, 0);
                var r, n, i, o, s, u = t.height, l = t.width, c = u % f, h = (u - c) / f, d = 0 === c ? h : h + 1, m = e.createImageData(l, f), v = 0, g = t.data, b = m.data;
                if (t.kind === a.ImageKind.GRAYSCALE_1BPP) {
                    var _ = g.byteLength
                      , y = new Uint32Array(b.buffer,0,b.byteLength >> 2)
                      , A = y.length
                      , S = l + 7 >> 3
                      , w = 4294967295
                      , C = p.value ? 4278190080 : 255;
                    for (n = 0; d > n; n++) {
                        for (o = h > n ? f : c,
                        r = 0,
                        i = 0; o > i; i++) {
                            for (var P = _ - v, k = 0, R = P > S ? l : 8 * P - 7, x = -8 & R, T = 0, E = 0; x > k; k += 8)
                                E = g[v++],
                                y[r++] = 128 & E ? w : C,
                                y[r++] = 64 & E ? w : C,
                                y[r++] = 32 & E ? w : C,
                                y[r++] = 16 & E ? w : C,
                                y[r++] = 8 & E ? w : C,
                                y[r++] = 4 & E ? w : C,
                                y[r++] = 2 & E ? w : C,
                                y[r++] = 1 & E ? w : C;
                            for (; R > k; k++)
                                0 === T && (E = g[v++],
                                T = 128),
                                y[r++] = E & T ? w : C,
                                T >>= 1
                        }
                        for (; A > r; )
                            y[r++] = 0;
                        e.putImageData(m, 0, n * f)
                    }
                } else if (t.kind === a.ImageKind.RGBA_32BPP) {
                    for (i = 0,
                    s = l * f * 4,
                    n = 0; h > n; n++)
                        b.set(g.subarray(v, v + s)),
                        v += s,
                        e.putImageData(m, 0, i),
                        i += f;
                    d > n && (s = l * c * 4,
                    b.set(g.subarray(v, v + s)),
                    e.putImageData(m, 0, i))
                } else {
                    if (t.kind !== a.ImageKind.RGB_24BPP)
                        throw new Error("bad image kind: " + t.kind);
                    for (o = f,
                    s = l * o,
                    n = 0; d > n; n++) {
                        for (n >= h && (o = c,
                        s = l * o),
                        r = 0,
                        i = s; i--; )
                            b[r++] = g[v++],
                            b[r++] = g[v++],
                            b[r++] = g[v++],
                            b[r++] = 255;
                        e.putImageData(m, 0, n * f)
                    }
                }
            }
            function r(e, t) {
                for (var r = t.height, n = t.width, i = r % f, a = (r - i) / f, o = 0 === i ? a : a + 1, s = e.createImageData(n, f), u = 0, l = t.data, c = s.data, h = 0; o > h; h++) {
                    for (var d = a > h ? f : i, p = 3, m = 0; d > m; m++)
                        for (var v = 0, g = 0; n > g; g++) {
                            if (!v) {
                                var b = l[u++];
                                v = 128
                            }
                            c[p] = b & v ? 0 : 255,
                            p += 4,
                            v >>= 1
                        }
                    e.putImageData(s, 0, h * f)
                }
            }
            function g(e, t) {
                for (var r = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"], n = 0, i = r.length; i > n; n++) {
                    var a = r[n];
                    void 0 !== e[a] && (t[a] = e[a])
                }
                void 0 !== e.setLineDash && (t.setLineDash(e.getLineDash()),
                t.lineDashOffset = e.lineDashOffset)
            }
            function b(e) {
                e.strokeStyle = "#000000",
                e.fillStyle = "#000000",
                e.fillRule = "nonzero",
                e.globalAlpha = 1,
                e.lineWidth = 1,
                e.lineCap = "butt",
                e.lineJoin = "miter",
                e.miterLimit = 10,
                e.globalCompositeOperation = "source-over",
                e.font = "10px sans-serif",
                void 0 !== e.setLineDash && (e.setLineDash([]),
                e.lineDashOffset = 0)
            }
            function _(e, t, r, n) {
                for (var i = e.length, a = 3; i > a; a += 4) {
                    var o = e[a];
                    if (0 === o)
                        e[a - 3] = t,
                        e[a - 2] = r,
                        e[a - 1] = n;
                    else if (255 > o) {
                        var s = 255 - o;
                        e[a - 3] = e[a - 3] * o + t * s >> 8,
                        e[a - 2] = e[a - 2] * o + r * s >> 8,
                        e[a - 1] = e[a - 1] * o + n * s >> 8
                    }
                }
            }
            function y(e, t, r) {
                for (var n = e.length, i = 1 / 255, a = 3; n > a; a += 4) {
                    var o = r ? r[e[a]] : e[a];
                    t[a] = t[a] * o * i | 0
                }
            }
            function A(e, t, r) {
                for (var n = e.length, i = 3; n > i; i += 4) {
                    var a = 77 * e[i - 3] + 152 * e[i - 2] + 28 * e[i - 1];
                    t[i] = r ? t[i] * r[a >> 8] >> 8 : t[i] * a >> 16
                }
            }
            function S(e, t, r, n, i, a, o) {
                var s, u = !!a, l = u ? a[0] : 0, c = u ? a[1] : 0, h = u ? a[2] : 0;
                s = "Luminosity" === i ? A : y;
                for (var d = 1048576, f = Math.min(n, Math.ceil(d / r)), p = 0; n > p; p += f) {
                    var m = Math.min(f, n - p)
                      , v = e.getImageData(0, p, r, m)
                      , g = t.getImageData(0, p, r, m);
                    u && _(v.data, l, c, h),
                    s(v.data, g.data, o),
                    e.putImageData(g, 0, p)
                }
            }
            function w(e, t, r, n) {
                var i = t.canvas
                  , a = t.context;
                e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
                var o = t.backdrop || null;
                if (!t.transferMap && n.isEnabled) {
                    var s = n.composeSMask({
                        layer: r.canvas,
                        mask: i,
                        properties: {
                            subtype: t.subtype,
                            backdrop: o
                        }
                    });
                    return e.setTransform(1, 0, 0, 1, 0, 0),
                    void e.drawImage(s, t.offsetX, t.offsetY)
                }
                S(a, r, i.width, i.height, t.subtype, o, t.transferMap),
                e.drawImage(i, 0, 0)
            }
            var C = 15
              , P = 10
              , k = ["butt", "round", "square"]
              , R = ["miter", "round", "bevel"]
              , x = {}
              , T = {};
            e.prototype = {
                beginDrawing: function(e) {
                    var t = e.transform
                      , r = e.viewport
                      , n = e.transparency
                      , i = e.background
                      , a = void 0 === i ? null : i
                      , o = this.ctx.canvas.width
                      , s = this.ctx.canvas.height;
                    if (this.ctx.save(),
                    this.ctx.fillStyle = a || "rgb(255, 255, 255)",
                    this.ctx.fillRect(0, 0, o, s),
                    this.ctx.restore(),
                    n) {
                        var u = this.cachedCanvases.getCanvas("transparent", o, s, !0);
                        this.compositeCtx = this.ctx,
                        this.transparentCanvas = u.canvas,
                        this.ctx = u.context,
                        this.ctx.save(),
                        this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform)
                    }
                    this.ctx.save(),
                    b(this.ctx),
                    t && this.ctx.transform.apply(this.ctx, t),
                    this.ctx.transform.apply(this.ctx, r.transform),
                    this.baseTransform = this.ctx.mozCurrentTransform.slice(),
                    this.imageLayer && this.imageLayer.beginLayout()
                },
                executeOperatorList: function(e, t, r, n) {
                    var i = e.argsArray
                      , o = e.fnArray
                      , s = t || 0
                      , u = i.length;
                    if (u === s)
                        return s;
                    for (var l, c = u - s > P && "function" == typeof r, h = c ? Date.now() + C : 0, d = 0, f = this.commonObjs, p = this.objs; ; ) {
                        if (void 0 !== n && s === n.nextBreakPoint)
                            return n.breakIt(s, r),
                            s;
                        if (l = o[s],
                        l !== a.OPS.dependency)
                            this[l].apply(this, i[s]);
                        else
                            for (var m = i[s], v = 0, g = m.length; g > v; v++) {
                                var b = m[v]
                                  , _ = "g" === b[0] && "_" === b[1]
                                  , y = _ ? f : p;
                                if (!y.isResolved(b))
                                    return y.get(b, r),
                                    s
                            }
                        if (s++,
                        s === u)
                            return s;
                        if (c && ++d > P) {
                            if (Date.now() > h)
                                return r(),
                                s;
                            d = 0
                        }
                    }
                },
                endDrawing: function() {
                    null !== this.current.activeSMask && this.endSMaskGroup(),
                    this.ctx.restore(),
                    this.transparentCanvas && (this.ctx = this.compositeCtx,
                    this.ctx.save(),
                    this.ctx.setTransform(1, 0, 0, 1, 0, 0),
                    this.ctx.drawImage(this.transparentCanvas, 0, 0),
                    this.ctx.restore(),
                    this.transparentCanvas = null),
                    this.cachedCanvases.clear(),
                    this.webGLContext.clear(),
                    this.imageLayer && this.imageLayer.endLayout()
                },
                setLineWidth: function(e) {
                    this.current.lineWidth = e,
                    this.ctx.lineWidth = e
                },
                setLineCap: function(e) {
                    this.ctx.lineCap = k[e]
                },
                setLineJoin: function(e) {
                    this.ctx.lineJoin = R[e]
                },
                setMiterLimit: function(e) {
                    this.ctx.miterLimit = e
                },
                setDash: function(e, t) {
                    var r = this.ctx;
                    void 0 !== r.setLineDash && (r.setLineDash(e),
                    r.lineDashOffset = t)
                },
                setRenderingIntent: function() {},
                setFlatness: function() {},
                setGState: function(e) {
                    for (var t = 0, r = e.length; r > t; t++) {
                        var n = e[t]
                          , i = n[0]
                          , a = n[1];
                        switch (i) {
                        case "LW":
                            this.setLineWidth(a);
                            break;
                        case "LC":
                            this.setLineCap(a);
                            break;
                        case "LJ":
                            this.setLineJoin(a);
                            break;
                        case "ML":
                            this.setMiterLimit(a);
                            break;
                        case "D":
                            this.setDash(a[0], a[1]);
                            break;
                        case "RI":
                            this.setRenderingIntent(a);
                            break;
                        case "FL":
                            this.setFlatness(a);
                            break;
                        case "Font":
                            this.setFont(a[0], a[1]);
                            break;
                        case "CA":
                            this.current.strokeAlpha = n[1];
                            break;
                        case "ca":
                            this.current.fillAlpha = n[1],
                            this.ctx.globalAlpha = n[1];
                            break;
                        case "BM":
                            this.ctx.globalCompositeOperation = a;
                            break;
                        case "SMask":
                            this.current.activeSMask && (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask ? this.suspendSMaskGroup() : this.endSMaskGroup()),
                            this.current.activeSMask = a ? this.tempSMask : null,
                            this.current.activeSMask && this.beginSMaskGroup(),
                            this.tempSMask = null
                        }
                    }
                },
                beginSMaskGroup: function() {
                    var e = this.current.activeSMask
                      , t = e.canvas.width
                      , r = e.canvas.height
                      , n = "smaskGroupAt" + this.groupLevel
                      , i = this.cachedCanvases.getCanvas(n, t, r, !0)
                      , a = this.ctx
                      , o = a.mozCurrentTransform;
                    this.ctx.save();
                    var s = i.context;
                    s.scale(1 / e.scaleX, 1 / e.scaleY),
                    s.translate(-e.offsetX, -e.offsetY),
                    s.transform.apply(s, o),
                    e.startTransformInverse = s.mozCurrentTransformInverse,
                    g(a, s),
                    this.ctx = s,
                    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]),
                    this.groupStack.push(a),
                    this.groupLevel++
                },
                suspendSMaskGroup: function() {
                    var e = this.ctx;
                    this.groupLevel--,
                    this.ctx = this.groupStack.pop(),
                    w(this.ctx, this.current.activeSMask, e, this.webGLContext),
                    this.ctx.restore(),
                    this.ctx.save(),
                    g(e, this.ctx),
                    this.current.resumeSMaskCtx = e;
                    var t = a.Util.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
                    this.ctx.transform.apply(this.ctx, t),
                    e.save(),
                    e.setTransform(1, 0, 0, 1, 0, 0),
                    e.clearRect(0, 0, e.canvas.width, e.canvas.height),
                    e.restore()
                },
                resumeSMaskGroup: function() {
                    var e = this.current.resumeSMaskCtx
                      , t = this.ctx;
                    this.ctx = e,
                    this.groupStack.push(t),
                    this.groupLevel++
                },
                endSMaskGroup: function() {
                    var e = this.ctx;
                    this.groupLevel--,
                    this.ctx = this.groupStack.pop(),
                    w(this.ctx, this.current.activeSMask, e, this.webGLContext),
                    this.ctx.restore(),
                    g(e, this.ctx);
                    var t = a.Util.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
                    this.ctx.transform.apply(this.ctx, t)
                },
                save: function() {
                    this.ctx.save();
                    var e = this.current;
                    this.stateStack.push(e),
                    this.current = e.clone(),
                    this.current.resumeSMaskCtx = null
                },
                restore: function() {
                    this.current.resumeSMaskCtx && this.resumeSMaskGroup(),
                    null === this.current.activeSMask || 0 !== this.stateStack.length && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask || this.endSMaskGroup(),
                    0 !== this.stateStack.length && (this.current = this.stateStack.pop(),
                    this.ctx.restore(),
                    this.pendingClip = null,
                    this.cachedGetSinglePixelWidth = null)
                },
                transform: function(e, t, r, n, i, a) {
                    this.ctx.transform(e, t, r, n, i, a),
                    this.cachedGetSinglePixelWidth = null
                },
                constructPath: function(e, t) {
                    for (var r = this.ctx, n = this.current, i = n.x, o = n.y, s = 0, u = 0, l = e.length; l > s; s++)
                        switch (0 | e[s]) {
                        case a.OPS.rectangle:
                            i = t[u++],
                            o = t[u++];
                            var c = t[u++]
                              , h = t[u++];
                            0 === c && (c = this.getSinglePixelWidth()),
                            0 === h && (h = this.getSinglePixelWidth());
                            var d = i + c
                              , f = o + h;
                            this.ctx.moveTo(i, o),
                            this.ctx.lineTo(d, o),
                            this.ctx.lineTo(d, f),
                            this.ctx.lineTo(i, f),
                            this.ctx.lineTo(i, o),
                            this.ctx.closePath();
                            break;
                        case a.OPS.moveTo:
                            i = t[u++],
                            o = t[u++],
                            r.moveTo(i, o);
                            break;
                        case a.OPS.lineTo:
                            i = t[u++],
                            o = t[u++],
                            r.lineTo(i, o);
                            break;
                        case a.OPS.curveTo:
                            i = t[u + 4],
                            o = t[u + 5],
                            r.bezierCurveTo(t[u], t[u + 1], t[u + 2], t[u + 3], i, o),
                            u += 6;
                            break;
                        case a.OPS.curveTo2:
                            r.bezierCurveTo(i, o, t[u], t[u + 1], t[u + 2], t[u + 3]),
                            i = t[u + 2],
                            o = t[u + 3],
                            u += 4;
                            break;
                        case a.OPS.curveTo3:
                            i = t[u + 2],
                            o = t[u + 3],
                            r.bezierCurveTo(t[u], t[u + 1], i, o, i, o),
                            u += 4;
                            break;
                        case a.OPS.closePath:
                            r.closePath()
                        }
                    n.setCurrentPoint(i, o)
                },
                closePath: function() {
                    this.ctx.closePath()
                },
                stroke: function(e) {
                    e = "undefined" != typeof e ? e : !0;
                    var t = this.ctx
                      , r = this.current.strokeColor;
                    t.lineWidth = Math.max(this.getSinglePixelWidth() * c, this.current.lineWidth),
                    t.globalAlpha = this.current.strokeAlpha,
                    r && r.hasOwnProperty("type") && "Pattern" === r.type ? (t.save(),
                    t.strokeStyle = r.getPattern(t, this),
                    t.stroke(),
                    t.restore()) : t.stroke(),
                    e && this.consumePath(),
                    t.globalAlpha = this.current.fillAlpha
                },
                closeStroke: function() {
                    this.closePath(),
                    this.stroke()
                },
                fill: function(e) {
                    e = "undefined" != typeof e ? e : !0;
                    var t = this.ctx
                      , r = this.current.fillColor
                      , n = this.current.patternFill
                      , i = !1;
                    n && (t.save(),
                    this.baseTransform && t.setTransform.apply(t, this.baseTransform),
                    t.fillStyle = r.getPattern(t, this),
                    i = !0),
                    this.pendingEOFill ? (t.fill("evenodd"),
                    this.pendingEOFill = !1) : t.fill(),
                    i && t.restore(),
                    e && this.consumePath()
                },
                eoFill: function() {
                    this.pendingEOFill = !0,
                    this.fill()
                },
                fillStroke: function() {
                    this.fill(!1),
                    this.stroke(!1),
                    this.consumePath()
                },
                eoFillStroke: function() {
                    this.pendingEOFill = !0,
                    this.fillStroke()
                },
                closeFillStroke: function() {
                    this.closePath(),
                    this.fillStroke()
                },
                closeEOFillStroke: function() {
                    this.pendingEOFill = !0,
                    this.closePath(),
                    this.fillStroke()
                },
                endPath: function() {
                    this.consumePath()
                },
                clip: function() {
                    this.pendingClip = x
                },
                eoClip: function() {
                    this.pendingClip = T
                },
                beginText: function() {
                    this.current.textMatrix = a.IDENTITY_MATRIX,
                    this.current.textMatrixScale = 1,
                    this.current.x = this.current.lineX = 0,
                    this.current.y = this.current.lineY = 0
                },
                endText: function() {
                    var e = this.pendingTextPaths
                      , t = this.ctx;
                    if (void 0 === e)
                        return void t.beginPath();
                    t.save(),
                    t.beginPath();
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        t.setTransform.apply(t, n.transform),
                        t.translate(n.x, n.y),
                        n.addToPath(t, n.fontSize)
                    }
                    t.restore(),
                    t.clip(),
                    t.beginPath(),
                    delete this.pendingTextPaths
                },
                setCharSpacing: function(e) {
                    this.current.charSpacing = e
                },
                setWordSpacing: function(e) {
                    this.current.wordSpacing = e
                },
                setHScale: function(e) {
                    this.current.textHScale = e / 100
                },
                setLeading: function(e) {
                    this.current.leading = -e
                },
                setFont: function(e, t) {
                    var r = this.commonObjs.get(e)
                      , n = this.current;
                    if (!r)
                        throw new Error("Can't find font for " + e);
                    if (n.fontMatrix = r.fontMatrix ? r.fontMatrix : a.FONT_IDENTITY_MATRIX,
                    (0 === n.fontMatrix[0] || 0 === n.fontMatrix[3]) && a.warn("Invalid font matrix for font " + e),
                    0 > t ? (t = -t,
                    n.fontDirection = -1) : n.fontDirection = 1,
                    this.current.font = r,
                    this.current.fontSize = t,
                    !r.isType3Font) {
                        var i = r.loadedName || "sans-serif"
                          , o = r.black ? "900" : r.bold ? "bold" : "normal"
                          , l = r.italic ? "italic" : "normal"
                          , c = '"' + i + '", ' + r.fallbackName
                          , h = s > t ? s : t > u ? u : t;
                        this.current.fontSizeScale = t / h;
                        var d = l + " " + o + " " + h + "px " + c;
                        this.ctx.font = d
                    }
                },
                setTextRenderingMode: function(e) {
                    this.current.textRenderingMode = e
                },
                setTextRise: function(e) {
                    this.current.textRise = e
                },
                moveText: function(e, t) {
                    this.current.x = this.current.lineX += e,
                    this.current.y = this.current.lineY += t
                },
                setLeadingMoveText: function(e, t) {
                    this.setLeading(-t),
                    this.moveText(e, t)
                },
                setTextMatrix: function(e, t, r, n, i, a) {
                    this.current.textMatrix = [e, t, r, n, i, a],
                    this.current.textMatrixScale = Math.sqrt(e * e + t * t),
                    this.current.x = this.current.lineX = 0,
                    this.current.y = this.current.lineY = 0
                },
                nextLine: function() {
                    this.moveText(0, this.current.leading)
                },
                paintChar: function(e, t, r, n) {
                    var i, o = this.ctx, s = this.current, u = s.font, l = s.textRenderingMode, c = s.fontSize / s.fontSizeScale, h = l & a.TextRenderingMode.FILL_STROKE_MASK, d = !!(l & a.TextRenderingMode.ADD_TO_PATH_FLAG), f = s.patternFill && u.data;
                    if ((u.disableFontFace || d || f) && (i = u.getPathGenerator(this.commonObjs, e)),
                    u.disableFontFace || f ? (o.save(),
                    o.translate(t, r),
                    o.beginPath(),
                    i(o, c),
                    n && o.setTransform.apply(o, n),
                    (h === a.TextRenderingMode.FILL || h === a.TextRenderingMode.FILL_STROKE) && o.fill(),
                    (h === a.TextRenderingMode.STROKE || h === a.TextRenderingMode.FILL_STROKE) && o.stroke(),
                    o.restore()) : ((h === a.TextRenderingMode.FILL || h === a.TextRenderingMode.FILL_STROKE) && o.fillText(e, t, r),
                    (h === a.TextRenderingMode.STROKE || h === a.TextRenderingMode.FILL_STROKE) && o.strokeText(e, t, r)),
                    d) {
                        var p = this.pendingTextPaths || (this.pendingTextPaths = []);
                        p.push({
                            transform: o.mozCurrentTransform,
                            x: t,
                            y: r,
                            fontSize: c,
                            addToPath: i
                        })
                    }
                },
                get isFontSubpixelAAEnabled() {
                    var e = this.canvasFactory.create(10, 10).context;
                    e.scale(1.5, 1),
                    e.fillText("I", 0, 10);
                    for (var t = e.getImageData(0, 0, 10, 10).data, r = !1, n = 3; n < t.length; n += 4)
                        if (t[n] > 0 && t[n] < 255) {
                            r = !0;
                            break
                        }
                    return a.shadow(this, "isFontSubpixelAAEnabled", r)
                },
                showText: function(e) {
                    var t = this.current
                      , r = t.font;
                    if (r.isType3Font)
                        return this.showType3Text(e);
                    var n = t.fontSize;
                    if (0 !== n) {
                        var i = this.ctx
                          , o = t.fontSizeScale
                          , s = t.charSpacing
                          , u = t.wordSpacing
                          , l = t.fontDirection
                          , h = t.textHScale * l
                          , d = e.length
                          , f = r.vertical
                          , p = f ? 1 : -1
                          , m = r.defaultVMetrics
                          , v = n * t.fontMatrix[0]
                          , g = t.textRenderingMode === a.TextRenderingMode.FILL && !r.disableFontFace && !t.patternFill;
                        i.save();
                        var b = void 0;
                        if (t.patternFill) {
                            i.save();
                            var _ = t.fillColor.getPattern(i, this);
                            b = i.mozCurrentTransform,
                            i.restore(),
                            i.fillStyle = _
                        }
                        i.transform.apply(i, t.textMatrix),
                        i.translate(t.x, t.y + t.textRise),
                        l > 0 ? i.scale(h, -1) : i.scale(h, 1);
                        var y = t.lineWidth
                          , A = t.textMatrixScale;
                        if (0 === A || 0 === y) {
                            var S = t.textRenderingMode & a.TextRenderingMode.FILL_STROKE_MASK;
                            (S === a.TextRenderingMode.STROKE || S === a.TextRenderingMode.FILL_STROKE) && (this.cachedGetSinglePixelWidth = null,
                            y = this.getSinglePixelWidth() * c)
                        } else
                            y /= A;
                        1 !== o && (i.scale(o, o),
                        y /= o),
                        i.lineWidth = y;
                        var w, C = 0;
                        for (w = 0; d > w; ++w) {
                            var P = e[w];
                            if (a.isNum(P))
                                C += p * P * n / 1e3;
                            else {
                                var k, R, x, T, E = !1, O = (P.isSpace ? u : 0) + s, j = P.fontChar, I = P.accent, F = P.width;
                                if (f) {
                                    var L, M, D;
                                    L = P.vmetric || m,
                                    M = P.vmetric ? L[1] : .5 * F,
                                    M = -M * v,
                                    D = L[2] * v,
                                    F = L ? -L[0] : F,
                                    k = M / o,
                                    R = (C + D) / o
                                } else
                                    k = C / o,
                                    R = 0;
                                if (r.remeasure && F > 0) {
                                    var N = 1e3 * i.measureText(j).width / n * o;
                                    if (N > F && this.isFontSubpixelAAEnabled) {
                                        var q = F / N;
                                        E = !0,
                                        i.save(),
                                        i.scale(q, 1),
                                        k /= q
                                    } else
                                        F !== N && (k += (F - N) / 2e3 * n / o)
                                }
                                (P.isInFont || r.missingFile) && (g && !I ? i.fillText(j, k, R) : (this.paintChar(j, k, R, b),
                                I && (x = k + I.offset.x / o,
                                T = R - I.offset.y / o,
                                this.paintChar(I.fontChar, x, T, b))));
                                var W = F * v + O * l;
                                C += W,
                                E && i.restore()
                            }
                        }
                        f ? t.y -= C * h : t.x += C * h,
                        i.restore()
                    }
                },
                showType3Text: function(e) {
                    var t, r, n, i, o = this.ctx, s = this.current, u = s.font, l = s.fontSize, c = s.fontDirection, h = u.vertical ? 1 : -1, d = s.charSpacing, f = s.wordSpacing, p = s.textHScale * c, m = s.fontMatrix || a.FONT_IDENTITY_MATRIX, v = e.length, g = s.textRenderingMode === a.TextRenderingMode.INVISIBLE;
                    if (!g && 0 !== l) {
                        for (this.cachedGetSinglePixelWidth = null,
                        o.save(),
                        o.transform.apply(o, s.textMatrix),
                        o.translate(s.x, s.y),
                        o.scale(p, c),
                        t = 0; v > t; ++t)
                            if (r = e[t],
                            a.isNum(r))
                                i = h * r * l / 1e3,
                                this.ctx.translate(i, 0),
                                s.x += i * p;
                            else {
                                var b = (r.isSpace ? f : 0) + d
                                  , _ = u.charProcOperatorList[r.operatorListId];
                                if (_) {
                                    this.processingType3 = r,
                                    this.save(),
                                    o.scale(l, l),
                                    o.transform.apply(o, m),
                                    this.executeOperatorList(_),
                                    this.restore();
                                    var y = a.Util.applyTransform([r.width, 0], m);
                                    n = y[0] * l + b,
                                    o.translate(n, 0),
                                    s.x += n * p
                                } else
                                    a.warn('Type3 character "' + r.operatorListId + '" is not available.')
                            }
                        o.restore(),
                        this.processingType3 = null
                    }
                },
                setCharWidth: function() {},
                setCharWidthAndBounds: function(e, t, r, n, i, a) {
                    this.ctx.rect(r, n, i - r, a - n),
                    this.clip(),
                    this.endPath()
                },
                getColorN_Pattern: function(t) {
                    var r, n = this;
                    if ("TilingPattern" === t[0]) {
                        var i = t[1]
                          , a = this.baseTransform || this.ctx.mozCurrentTransform.slice()
                          , s = {
                            createCanvasGraphics: function(t) {
                                return new e(t,n.commonObjs,n.objs,n.canvasFactory,n.webGLContext)
                            }
                        };
                        r = new o.TilingPattern(t,i,this.ctx,s,a)
                    } else
                        r = o.getShadingPatternFromIR(t);
                    return r
                },
                setStrokeColorN: function() {
                    this.current.strokeColor = this.getColorN_Pattern(arguments)
                },
                setFillColorN: function() {
                    this.current.fillColor = this.getColorN_Pattern(arguments),
                    this.current.patternFill = !0
                },
                setStrokeRGBColor: function(e, t, r) {
                    var n = a.Util.makeCssRgb(e, t, r);
                    this.ctx.strokeStyle = n,
                    this.current.strokeColor = n
                },
                setFillRGBColor: function(e, t, r) {
                    var n = a.Util.makeCssRgb(e, t, r);
                    this.ctx.fillStyle = n,
                    this.current.fillColor = n,
                    this.current.patternFill = !1
                },
                shadingFill: function(e) {
                    var t = this.ctx;
                    this.save();
                    var r = o.getShadingPatternFromIR(e);
                    t.fillStyle = r.getPattern(t, this, !0);
                    var n = t.mozCurrentTransformInverse;
                    if (n) {
                        var i = t.canvas
                          , s = i.width
                          , u = i.height
                          , l = a.Util.applyTransform([0, 0], n)
                          , c = a.Util.applyTransform([0, u], n)
                          , h = a.Util.applyTransform([s, 0], n)
                          , d = a.Util.applyTransform([s, u], n)
                          , f = Math.min(l[0], c[0], h[0], d[0])
                          , p = Math.min(l[1], c[1], h[1], d[1])
                          , m = Math.max(l[0], c[0], h[0], d[0])
                          , v = Math.max(l[1], c[1], h[1], d[1]);
                        this.ctx.fillRect(f, p, m - f, v - p)
                    } else
                        this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                    this.restore()
                },
                beginInlineImage: function() {
                    a.unreachable("Should not call beginInlineImage")
                },
                beginImageData: function() {
                    a.unreachable("Should not call beginImageData")
                },
                paintFormXObjectBegin: function(e, t) {
                    if (this.save(),
                    this.baseTransformStack.push(this.baseTransform),
                    Array.isArray(e) && 6 === e.length && this.transform.apply(this, e),
                    this.baseTransform = this.ctx.mozCurrentTransform,
                    Array.isArray(t) && 4 === t.length) {
                        var r = t[2] - t[0]
                          , n = t[3] - t[1];
                        this.ctx.rect(t[0], t[1], r, n),
                        this.clip(),
                        this.endPath()
                    }
                },
                paintFormXObjectEnd: function() {
                    this.restore(),
                    this.baseTransform = this.baseTransformStack.pop()
                },
                beginGroup: function(e) {
                    this.save();
                    var t = this.ctx;
                    e.isolated || a.info("TODO: Support non-isolated groups."),
                    e.knockout && a.warn("Knockout groups not supported.");
                    var r = t.mozCurrentTransform;
                    if (e.matrix && t.transform.apply(t, e.matrix),
                    !e.bbox)
                        throw new Error("Bounding box is required.");
                    var n = a.Util.getAxialAlignedBoundingBox(e.bbox, t.mozCurrentTransform)
                      , i = [0, 0, t.canvas.width, t.canvas.height];
                    n = a.Util.intersect(n, i) || [0, 0, 0, 0];
                    var o = Math.floor(n[0])
                      , s = Math.floor(n[1])
                      , u = Math.max(Math.ceil(n[2]) - o, 1)
                      , c = Math.max(Math.ceil(n[3]) - s, 1)
                      , h = 1
                      , d = 1;
                    u > l && (h = u / l,
                    u = l),
                    c > l && (d = c / l,
                    c = l);
                    var f = "groupAt" + this.groupLevel;
                    e.smask && (f += "_smask_" + this.smaskCounter++ % 2);
                    var p = this.cachedCanvases.getCanvas(f, u, c, !0)
                      , m = p.context;
                    m.scale(1 / h, 1 / d),
                    m.translate(-o, -s),
                    m.transform.apply(m, r),
                    e.smask ? this.smaskStack.push({
                        canvas: p.canvas,
                        context: m,
                        offsetX: o,
                        offsetY: s,
                        scaleX: h,
                        scaleY: d,
                        subtype: e.smask.subtype,
                        backdrop: e.smask.backdrop,
                        transferMap: e.smask.transferMap || null,
                        startTransformInverse: null
                    }) : (t.setTransform(1, 0, 0, 1, 0, 0),
                    t.translate(o, s),
                    t.scale(h, d)),
                    g(t, m),
                    this.ctx = m,
                    this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]),
                    this.groupStack.push(t),
                    this.groupLevel++,
                    this.current.activeSMask = null
                },
                endGroup: function(e) {
                    this.groupLevel--;
                    var t = this.ctx;
                    this.ctx = this.groupStack.pop(),
                    void 0 !== this.ctx.imageSmoothingEnabled ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1,
                    e.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(t.canvas, 0, 0),
                    this.restore()
                },
                beginAnnotations: function() {
                    this.save(),
                    this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform)
                },
                endAnnotations: function() {
                    this.restore()
                },
                beginAnnotation: function(e, t, r) {
                    if (this.save(),
                    b(this.ctx),
                    this.current = new v,
                    Array.isArray(e) && 4 === e.length) {
                        var n = e[2] - e[0]
                          , i = e[3] - e[1];
                        this.ctx.rect(e[0], e[1], n, i),
                        this.clip(),
                        this.endPath()
                    }
                    this.transform.apply(this, t),
                    this.transform.apply(this, r)
                },
                endAnnotation: function() {
                    this.restore()
                },
                paintJpegXObject: function(e, t, r) {
                    var n = this.objs.get(e);
                    if (!n)
                        return void a.warn("Dependent image isn't ready yet");
                    this.save();
                    var i = this.ctx;
                    if (i.scale(1 / t, -1 / r),
                    i.drawImage(n, 0, 0, n.width, n.height, 0, -r, t, r),
                    this.imageLayer) {
                        var o = i.mozCurrentTransformInverse
                          , s = this.getCanvasPosition(0, 0);
                        this.imageLayer.appendImage({
                            objId: e,
                            left: s[0],
                            top: s[1],
                            width: t / o[0],
                            height: r / o[3]
                        })
                    }
                    this.restore()
                },
                paintImageMaskXObject: function(e) {
                    var t = this.ctx
                      , n = e.width
                      , a = e.height
                      , o = this.current.fillColor
                      , s = this.current.patternFill
                      , u = this.processingType3;
                    if (h && u && void 0 === u.compiled && (u.compiled = d >= n && d >= a ? i({
                        data: e.data,
                        width: n,
                        height: a
                    }) : null),
                    u && u.compiled)
                        return void u.compiled(t);
                    var l = this.cachedCanvases.getCanvas("maskCanvas", n, a)
                      , c = l.context;
                    c.save(),
                    r(c, e),
                    c.globalCompositeOperation = "source-in",
                    c.fillStyle = s ? o.getPattern(c, this) : o,
                    c.fillRect(0, 0, n, a),
                    c.restore(),
                    this.paintInlineImageXObject(l.canvas)
                },
                paintImageMaskXObjectRepeat: function(e, t, n, i) {
                    var a = e.width
                      , o = e.height
                      , s = this.current.fillColor
                      , u = this.current.patternFill
                      , l = this.cachedCanvases.getCanvas("maskCanvas", a, o)
                      , c = l.context;
                    c.save(),
                    r(c, e),
                    c.globalCompositeOperation = "source-in",
                    c.fillStyle = u ? s.getPattern(c, this) : s,
                    c.fillRect(0, 0, a, o),
                    c.restore();
                    for (var h = this.ctx, d = 0, f = i.length; f > d; d += 2)
                        h.save(),
                        h.transform(t, 0, 0, n, i[d], i[d + 1]),
                        h.scale(1, -1),
                        h.drawImage(l.canvas, 0, 0, a, o, 0, -1, 1, 1),
                        h.restore()
                },
                paintImageMaskXObjectGroup: function(e) {
                    for (var t = this.ctx, n = this.current.fillColor, i = this.current.patternFill, a = 0, o = e.length; o > a; a++) {
                        var s = e[a]
                          , u = s.width
                          , l = s.height
                          , c = this.cachedCanvases.getCanvas("maskCanvas", u, l)
                          , h = c.context;
                        h.save(),
                        r(h, s),
                        h.globalCompositeOperation = "source-in",
                        h.fillStyle = i ? n.getPattern(h, this) : n,
                        h.fillRect(0, 0, u, l),
                        h.restore(),
                        t.save(),
                        t.transform.apply(t, s.transform),
                        t.scale(1, -1),
                        t.drawImage(c.canvas, 0, 0, u, l, 0, -1, 1, 1),
                        t.restore()
                    }
                },
                paintImageXObject: function(e) {
                    var t = this.objs.get(e);
                    return t ? void this.paintInlineImageXObject(t) : void a.warn("Dependent image isn't ready yet")
                },
                paintImageXObjectRepeat: function(e, t, r, n) {
                    var i = this.objs.get(e);
                    if (!i)
                        return void a.warn("Dependent image isn't ready yet");
                    for (var o = i.width, s = i.height, u = [], l = 0, c = n.length; c > l; l += 2)
                        u.push({
                            transform: [t, 0, 0, r, n[l], n[l + 1]],
                            x: 0,
                            y: 0,
                            w: o,
                            h: s
                        });
                    this.paintInlineImageXObjectGroup(i, u)
                },
                paintInlineImageXObject: function(e) {
                    var r = e.width
                      , n = e.height
                      , i = this.ctx;
                    this.save(),
                    i.scale(1 / r, -1 / n);
                    var a, o, s = i.mozCurrentTransformInverse, u = s[0], l = s[1], c = Math.max(Math.sqrt(u * u + l * l), 1), h = s[2], d = s[3], f = Math.max(Math.sqrt(h * h + d * d), 1);
                    if ("function" == typeof HTMLElement && e instanceof HTMLElement || !e.data)
                        a = e;
                    else {
                        o = this.cachedCanvases.getCanvas("inlineImage", r, n);
                        var p = o.context;
                        t(p, e),
                        a = o.canvas
                    }
                    for (var m = r, v = n, g = "prescale1"; c > 2 && m > 1 || f > 2 && v > 1; ) {
                        var b = m
                          , _ = v;
                        c > 2 && m > 1 && (b = Math.ceil(m / 2),
                        c /= m / b),
                        f > 2 && v > 1 && (_ = Math.ceil(v / 2),
                        f /= v / _),
                        o = this.cachedCanvases.getCanvas(g, b, _),
                        p = o.context,
                        p.clearRect(0, 0, b, _),
                        p.drawImage(a, 0, 0, m, v, 0, 0, b, _),
                        a = o.canvas,
                        m = b,
                        v = _,
                        g = "prescale1" === g ? "prescale2" : "prescale1"
                    }
                    if (i.drawImage(a, 0, 0, m, v, 0, -n, r, n),
                    this.imageLayer) {
                        var y = this.getCanvasPosition(0, -n);
                        this.imageLayer.appendImage({
                            imgData: e,
                            left: y[0],
                            top: y[1],
                            width: r / s[0],
                            height: n / s[3]
                        })
                    }
                    this.restore()
                },
                paintInlineImageXObjectGroup: function(e, r) {
                    var n = this.ctx
                      , i = e.width
                      , a = e.height
                      , o = this.cachedCanvases.getCanvas("inlineImage", i, a)
                      , s = o.context;
                    t(s, e);
                    for (var u = 0, l = r.length; l > u; u++) {
                        var c = r[u];
                        if (n.save(),
                        n.transform.apply(n, c.transform),
                        n.scale(1, -1),
                        n.drawImage(o.canvas, c.x, c.y, c.w, c.h, 0, -1, 1, 1),
                        this.imageLayer) {
                            var h = this.getCanvasPosition(c.x, c.y);
                            this.imageLayer.appendImage({
                                imgData: e,
                                left: h[0],
                                top: h[1],
                                width: i,
                                height: a
                            })
                        }
                        n.restore()
                    }
                },
                paintSolidColorImageMask: function() {
                    this.ctx.fillRect(0, 0, 1, 1)
                },
                paintXObject: function() {
                    a.warn("Unsupported 'paintXObject' command.")
                },
                markPoint: function() {},
                markPointProps: function() {},
                beginMarkedContent: function() {},
                beginMarkedContentProps: function() {},
                endMarkedContent: function() {},
                beginCompat: function() {},
                endCompat: function() {},
                consumePath: function() {
                    var e = this.ctx;
                    this.pendingClip && (this.pendingClip === T ? e.clip("evenodd") : e.clip(),
                    this.pendingClip = null),
                    e.beginPath()
                },
                getSinglePixelWidth: function() {
                    if (null === this.cachedGetSinglePixelWidth) {
                        this.ctx.save();
                        var e = this.ctx.mozCurrentTransformInverse;
                        this.ctx.restore(),
                        this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1], e[2] * e[2] + e[3] * e[3]))
                    }
                    return this.cachedGetSinglePixelWidth
                },
                getCanvasPosition: function(e, t) {
                    var r = this.ctx.mozCurrentTransform;
                    return [r[0] * e + r[2] * t + r[4], r[1] * e + r[3] * t + r[5]]
                }
            };
            for (var E in a.OPS)
                e.prototype[a.OPS[E]] = e.prototype[E];
            return e
        }();
        t.CanvasGraphics = g
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            var t = a[e[0]];
            if (!t)
                throw new Error("Unknown IR type: " + e[0]);
            return t.fromIR(e)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.TilingPattern = t.getShadingPatternFromIR = void 0;
        var i = r(0)
          , a = {};
        a.RadialAxial = {
            fromIR: function(e) {
                var t = e[1]
                  , r = e[2]
                  , n = e[3]
                  , i = e[4]
                  , a = e[5]
                  , o = e[6];
                return {
                    type: "Pattern",
                    getPattern: function(e) {
                        var s;
                        "axial" === t ? s = e.createLinearGradient(n[0], n[1], i[0], i[1]) : "radial" === t && (s = e.createRadialGradient(n[0], n[1], a, i[0], i[1], o));
                        for (var u = 0, l = r.length; l > u; ++u) {
                            var c = r[u];
                            s.addColorStop(c[0], c[1])
                        }
                        return s
                    }
                }
            }
        };
        var o = function() {
            function e(e, t, r, n, i, a, o, s) {
                var u, l = t.coords, c = t.colors, h = e.data, d = 4 * e.width;
                l[r + 1] > l[n + 1] && (u = r,
                r = n,
                n = u,
                u = a,
                a = o,
                o = u),
                l[n + 1] > l[i + 1] && (u = n,
                n = i,
                i = u,
                u = o,
                o = s,
                s = u),
                l[r + 1] > l[n + 1] && (u = r,
                r = n,
                n = u,
                u = a,
                a = o,
                o = u);
                var f = (l[r] + t.offsetX) * t.scaleX
                  , p = (l[r + 1] + t.offsetY) * t.scaleY
                  , m = (l[n] + t.offsetX) * t.scaleX
                  , v = (l[n + 1] + t.offsetY) * t.scaleY
                  , g = (l[i] + t.offsetX) * t.scaleX
                  , b = (l[i + 1] + t.offsetY) * t.scaleY;
                if (!(p >= b))
                    for (var _, y, A, S, w, C, P, k, R, x = c[a], T = c[a + 1], E = c[a + 2], O = c[o], j = c[o + 1], I = c[o + 2], F = c[s], L = c[s + 1], M = c[s + 2], D = Math.round(p), N = Math.round(b), q = D; N >= q; q++) {
                        v > q ? (R = p > q ? 0 : p === v ? 1 : (p - q) / (p - v),
                        _ = f - (f - m) * R,
                        y = x - (x - O) * R,
                        A = T - (T - j) * R,
                        S = E - (E - I) * R) : (R = q > b ? 1 : v === b ? 0 : (v - q) / (v - b),
                        _ = m - (m - g) * R,
                        y = O - (O - F) * R,
                        A = j - (j - L) * R,
                        S = I - (I - M) * R),
                        R = p > q ? 0 : q > b ? 1 : (p - q) / (p - b),
                        w = f - (f - g) * R,
                        C = x - (x - F) * R,
                        P = T - (T - L) * R,
                        k = E - (E - M) * R;
                        for (var W = Math.round(Math.min(_, w)), U = Math.round(Math.max(_, w)), B = d * q + 4 * W, z = W; U >= z; z++)
                            R = (_ - z) / (_ - w),
                            R = 0 > R ? 0 : R > 1 ? 1 : R,
                            h[B++] = y - (y - C) * R | 0,
                            h[B++] = A - (A - P) * R | 0,
                            h[B++] = S - (S - k) * R | 0,
                            h[B++] = 255
                    }
            }
            function t(t, r, n) {
                var i, a, o = r.coords, s = r.colors;
                switch (r.type) {
                case "lattice":
                    var u = r.verticesPerRow
                      , l = Math.floor(o.length / u) - 1
                      , c = u - 1;
                    for (i = 0; l > i; i++)
                        for (var h = i * u, d = 0; c > d; d++,
                        h++)
                            e(t, n, o[h], o[h + 1], o[h + u], s[h], s[h + 1], s[h + u]),
                            e(t, n, o[h + u + 1], o[h + 1], o[h + u], s[h + u + 1], s[h + 1], s[h + u]);
                    break;
                case "triangles":
                    for (i = 0,
                    a = o.length; a > i; i += 3)
                        e(t, n, o[i], o[i + 1], o[i + 2], s[i], s[i + 1], s[i + 2]);
                    break;
                default:
                    throw new Error("illegal figure")
                }
            }
            function r(e, r, n, i, a, o, s, u) {
                var l, c, h, d, f = 1.1, p = 3e3, m = 2, v = Math.floor(e[0]), g = Math.floor(e[1]), b = Math.ceil(e[2]) - v, _ = Math.ceil(e[3]) - g, y = Math.min(Math.ceil(Math.abs(b * r[0] * f)), p), A = Math.min(Math.ceil(Math.abs(_ * r[1] * f)), p), S = b / y, w = _ / A, C = {
                    coords: n,
                    colors: i,
                    offsetX: -v,
                    offsetY: -g,
                    scaleX: 1 / S,
                    scaleY: 1 / w
                }, P = y + 2 * m, k = A + 2 * m;
                if (u.isEnabled)
                    l = u.drawFigures({
                        width: y,
                        height: A,
                        backgroundColor: o,
                        figures: a,
                        context: C
                    }),
                    c = s.getCanvas("mesh", P, k, !1),
                    c.context.drawImage(l, m, m),
                    l = c.canvas;
                else {
                    c = s.getCanvas("mesh", P, k, !1);
                    var R = c.context
                      , x = R.createImageData(y, A);
                    if (o) {
                        var T = x.data;
                        for (h = 0,
                        d = T.length; d > h; h += 4)
                            T[h] = o[0],
                            T[h + 1] = o[1],
                            T[h + 2] = o[2],
                            T[h + 3] = 255
                    }
                    for (h = 0; h < a.length; h++)
                        t(x, a[h], C);
                    R.putImageData(x, m, m),
                    l = c.canvas
                }
                return {
                    canvas: l,
                    offsetX: v - m * S,
                    offsetY: g - m * w,
                    scaleX: S,
                    scaleY: w
                }
            }
            return r
        }();
        a.Mesh = {
            fromIR: function(e) {
                var t = e[2]
                  , r = e[3]
                  , n = e[4]
                  , a = e[5]
                  , s = e[6]
                  , u = e[8];
                return {
                    type: "Pattern",
                    getPattern: function(e, l, c) {
                        var h;
                        if (c)
                            h = i.Util.singularValueDecompose2dScale(e.mozCurrentTransform);
                        else if (h = i.Util.singularValueDecompose2dScale(l.baseTransform),
                        s) {
                            var d = i.Util.singularValueDecompose2dScale(s);
                            h = [h[0] * d[0], h[1] * d[1]]
                        }
                        var f = o(a, h, t, r, n, c ? null : u, l.cachedCanvases, l.webGLContext);
                        return c || (e.setTransform.apply(e, l.baseTransform),
                        s && e.transform.apply(e, s)),
                        e.translate(f.offsetX, f.offsetY),
                        e.scale(f.scaleX, f.scaleY),
                        e.createPattern(f.canvas, "no-repeat")
                    }
                }
            }
        },
        a.Dummy = {
            fromIR: function() {
                return {
                    type: "Pattern",
                    getPattern: function() {
                        return "hotpink"
                    }
                }
            }
        };
        var s = function() {
            function e(e, t, r, n, i) {
                this.operatorList = e[2],
                this.matrix = e[3] || [1, 0, 0, 1, 0, 0],
                this.bbox = e[4],
                this.xstep = e[5],
                this.ystep = e[6],
                this.paintType = e[7],
                this.tilingType = e[8],
                this.color = t,
                this.canvasGraphicsFactory = n,
                this.baseTransform = i,
                this.type = "Pattern",
                this.ctx = r
            }
            var t = {
                COLORED: 1,
                UNCOLORED: 2
            }
              , r = 3e3;
            return e.prototype = {
                createPatternCanvas: function(e) {
                    var t = this.operatorList
                      , n = this.bbox
                      , a = this.xstep
                      , o = this.ystep
                      , s = this.paintType
                      , u = this.tilingType
                      , l = this.color
                      , c = this.canvasGraphicsFactory;
                    i.info("TilingType: " + u);
                    var h = n[0]
                      , d = n[1]
                      , f = n[2]
                      , p = n[3]
                      , m = [h, d]
                      , v = [h + a, d + o]
                      , g = v[0] - m[0]
                      , b = v[1] - m[1]
                      , _ = i.Util.singularValueDecompose2dScale(this.matrix)
                      , y = i.Util.singularValueDecompose2dScale(this.baseTransform)
                      , A = [_[0] * y[0], _[1] * y[1]];
                    g = Math.min(Math.ceil(Math.abs(g * A[0])), r),
                    b = Math.min(Math.ceil(Math.abs(b * A[1])), r);
                    var S = e.cachedCanvases.getCanvas("pattern", g, b, !0)
                      , w = S.context
                      , C = c.createCanvasGraphics(w);
                    C.groupLevel = e.groupLevel,
                    this.setFillAndStrokeStyleToContext(C, s, l),
                    this.setScale(g, b, a, o),
                    this.transformToScale(C);
                    var P = [1, 0, 0, 1, -m[0], -m[1]];
                    return C.transform.apply(C, P),
                    this.clipBbox(C, n, h, d, f, p),
                    C.executeOperatorList(t),
                    S.canvas
                },
                setScale: function(e, t, r, n) {
                    this.scale = [e / r, t / n]
                },
                transformToScale: function(e) {
                    var t = this.scale
                      , r = [t[0], 0, 0, t[1], 0, 0];
                    e.transform.apply(e, r)
                },
                scaleToContext: function() {
                    var e = this.scale;
                    this.ctx.scale(1 / e[0], 1 / e[1])
                },
                clipBbox: function(e, t, r, n, i, a) {
                    if (Array.isArray(t) && 4 === t.length) {
                        var o = i - r
                          , s = a - n;
                        e.ctx.rect(r, n, o, s),
                        e.clip(),
                        e.endPath()
                    }
                },
                setFillAndStrokeStyleToContext: function(e, r, n) {
                    var a = e.ctx
                      , o = e.current;
                    switch (r) {
                    case t.COLORED:
                        var s = this.ctx;
                        a.fillStyle = s.fillStyle,
                        a.strokeStyle = s.strokeStyle,
                        o.fillColor = s.fillStyle,
                        o.strokeColor = s.strokeStyle;
                        break;
                    case t.UNCOLORED:
                        var u = i.Util.makeCssRgb(n[0], n[1], n[2]);
                        a.fillStyle = u,
                        a.strokeStyle = u,
                        o.fillColor = u,
                        o.strokeColor = u;
                        break;
                    default:
                        throw new i.FormatError("Unsupported paint type: " + r)
                    }
                },
                getPattern: function(e, t) {
                    var r = this.createPatternCanvas(t);
                    return e = this.ctx,
                    e.setTransform.apply(e, this.baseTransform),
                    e.transform.apply(e, this.matrix),
                    this.scaleToContext(),
                    e.createPattern(r, "repeat")
                }
            },
            e
        }();
        t.getShadingPatternFromIR = n,
        t.TilingPattern = s
    }
    , function(e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.Metadata = void 0;
        var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r),
                n && e(t, n),
                t
            }
        }()
          , a = r(0)
          , o = r(122)
          , s = function() {
            function e(t) {
                n(this, e),
                a.assert("string" == typeof t, "Metadata: input is not a string"),
                t = this._repair(t);
                var r = new o.SimpleXMLParser
                  , i = r.parseFromString(t);
                this._metadata = Object.create(null),
                i && this._parse(i)
            }
            return i(e, [{
                key: "_repair",
                value: function(e) {
                    return e.replace(/>\\376\\377([^<]+)/g, function(e, t) {
                        for (var r = t.replace(/\\([0-3])([0-7])([0-7])/g, function(e, t, r, n) {
                            return String.fromCharCode(64 * t + 8 * r + 1 * n)
                        }).replace(/&(amp|apos|gt|lt|quot);/g, function(e, t) {
                            switch (t) {
                            case "amp":
                                return "&";
                            case "apos":
                                return "'";
                            case "gt":
                                return ">";
                            case "lt":
                                return "<";
                            case "quot":
                                return '"'
                            }
                            throw new Error("_repair: " + t + " isn't defined.")
                        }), n = "", i = 0, a = r.length; a > i; i += 2) {
                            var o = 256 * r.charCodeAt(i) + r.charCodeAt(i + 1);
                            n += o >= 32 && 127 > o && 60 !== o && 62 !== o && 38 !== o ? String.fromCharCode(o) : "&#x" + (65536 + o).toString(16).substring(1) + ";"
                        }
                        return ">" + n
                    })
                }
            }, {
                key: "_parse",
                value: function(e) {
                    var t = e.documentElement;
                    if ("rdf:rdf" !== t.nodeName.toLowerCase())
                        for (t = t.firstChild; t && "rdf:rdf" !== t.nodeName.toLowerCase(); )
                            t = t.nextSibling;
                    var r = t ? t.nodeName.toLowerCase() : null;
                    if (t && "rdf:rdf" === r && t.hasChildNodes())
                        for (var n = t.childNodes, i = 0, a = n.length; a > i; i++) {
                            var o = n[i];
                            if ("rdf:description" === o.nodeName.toLowerCase())
                                for (var s = 0, u = o.childNodes.length; u > s; s++)
                                    if ("#text" !== o.childNodes[s].nodeName.toLowerCase()) {
                                        var l = o.childNodes[s]
                                          , c = l.nodeName.toLowerCase();
                                        this._metadata[c] = l.textContent.trim()
                                    }
                        }
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._metadata[e] || null
                }
            }, {
                key: "getAll",
                value: function() {
                    return this._metadata
                }
            }, {
                key: "has",
                value: function(e) {
                    return "undefined" != typeof this._metadata[e]
                }
            }]),
            e
        }();
        t.Metadata = s
    }
    , function(e, t) {
        "use strict";
        function r(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function n(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            var r = e[t];
            return " " === r || "\n" === r || "\r" === r || "	" === r
        }
        function o(e) {
            for (var t = 0, r = e.length; r > t; t++)
                if (!a(e, t))
                    return !1;
            return !0
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {
            function e(e, t) {
                var r = []
                  , n = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (u) {
                    i = !0,
                    a = u
                } finally {
                    try {
                        !n && s["return"] && s["return"]()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
          , u = function p(e, t, r) {
            null === e && (e = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(e, t);
            if (void 0 === n) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : p(i, t, r)
            }
            if ("value"in n)
                return n.value;
            var a = n.get;
            return void 0 === a ? void 0 : a.call(r)
        }
          , l = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r),
                n && e(t, n),
                t
            }
        }()
          , c = {
            NoError: 0,
            EndOfDocument: -1,
            UnterminatedCdat: -2,
            UnterminatedXmlDeclaration: -3,
            UnterminatedDoctypeDeclaration: -4,
            UnterminatedComment: -5,
            MalformedElement: -6,
            OutOfMemory: -7,
            UnterminatedAttributeValue: -8,
            UnterminatedElement: -9,
            ElementNeverBegun: -10
        }
          , h = function() {
            function e() {
                i(this, e)
            }
            return l(e, [{
                key: "_resolveEntities",
                value: function(e) {
                    return e.replace(/&([^;]+);/g, function(e, t) {
                        if ("#x" === t.substring(0, 2))
                            return String.fromCharCode(parseInt(t.substring(2), 16));
                        if ("#" === t.substring(0, 1))
                            return String.fromCharCode(parseInt(t.substring(1), 10));
                        switch (t) {
                        case "lt":
                            return "<";
                        case "gt":
                            return ">";
                        case "amp":
                            return "&";
                        case "quot":
                            return '"'
                        }
                        return this.onResolveEntity(t)
                    })
                }
            }, {
                key: "_parseContent",
                value: function(e, t) {
                    function r() {
                        for (; n < e.length && a(e, n); )
                            ++n
                    }
                    for (var n = t, i = void 0, o = []; n < e.length && !a(e, n) && ">" !== e[n] && "/" !== e[n]; )
                        ++n;
                    for (i = e.substring(t, n),
                    r(); n < e.length && ">" !== e[n] && "/" !== e[n] && "?" !== e[n]; ) {
                        r();
                        for (var s = "", u = ""; n < e.length && !a(e, n) && "=" !== e[n]; )
                            s += e[n],
                            ++n;
                        if (r(),
                        "=" !== e[n])
                            return null;
                        ++n,
                        r();
                        var l = e[n];
                        if ('"' !== l && "'" !== l)
                            return null;
                        var c = e.indexOf(l, ++n);
                        if (0 > c)
                            return null;
                        u = e.substring(n, c),
                        o.push({
                            name: s,
                            value: this._resolveEntities(u)
                        }),
                        n = c + 1,
                        r()
                    }
                    return {
                        name: i,
                        attributes: o,
                        parsed: n - t
                    }
                }
            }, {
                key: "_parseProcessingInstruction",
                value: function(e, t) {
                    function r() {
                        for (; n < e.length && a(e, n); )
                            ++n
                    }
                    for (var n = t, i = void 0, o = void 0; n < e.length && !a(e, n) && ">" !== e[n] && "/" !== e[n]; )
                        ++n;
                    i = e.substring(t, n),
                    r();
                    for (var s = n; n < e.length && ("?" !== e[n] || ">" !== e[n + 1]); )
                        ++n;
                    return o = e.substring(s, n),
                    {
                        name: i,
                        value: o,
                        parsed: n - t
                    }
                }
            }, {
                key: "parseXml",
                value: function(e) {
                    for (var t = 0; t < e.length; ) {
                        var r = e[t]
                          , n = t;
                        if ("<" === r) {
                            ++n;
                            var i = e[n]
                              , a = void 0;
                            switch (i) {
                            case "/":
                                if (++n,
                                a = e.indexOf(">", n),
                                0 > a)
                                    return void this.onError(c.UnterminatedElement);
                                this.onEndElement(e.substring(n, a)),
                                n = a + 1;
                                break;
                            case "?":
                                ++n;
                                var o = this._parseProcessingInstruction(e, n);
                                if ("?>" !== e.substring(n + o.parsed, n + o.parsed + 2))
                                    return void this.onError(c.UnterminatedXmlDeclaration);
                                this.onPi(o.name, o.value),
                                n += o.parsed + 2;
                                break;
                            case "!":
                                if ("--" === e.substring(n + 1, n + 3)) {
                                    if (a = e.indexOf("-->", n + 3),
                                    0 > a)
                                        return void this.onError(c.UnterminatedComment);
                                    this.onComment(e.substring(n + 3, a)),
                                    n = a + 3
                                } else if ("[CDATA[" === e.substring(n + 1, n + 8)) {
                                    if (a = e.indexOf("]]>", n + 8),
                                    0 > a)
                                        return void this.onError(c.UnterminatedCdat);
                                    this.onCdata(e.substring(n + 8, a)),
                                    n = a + 3
                                } else {
                                    if ("DOCTYPE" !== e.substring(n + 1, n + 8))
                                        return void this.onError(c.MalformedElement);
                                    var s = e.indexOf("[", n + 8)
                                      , u = !1;
                                    if (a = e.indexOf(">", n + 8),
                                    0 > a)
                                        return void this.onError(c.UnterminatedDoctypeDeclaration);
                                    if (s > 0 && a > s) {
                                        if (a = e.indexOf("]>", n + 8),
                                        0 > a)
                                            return void this.onError(c.UnterminatedDoctypeDeclaration);
                                        u = !0
                                    }
                                    var l = e.substring(n + 8, a + (u ? 1 : 0));
                                    this.onDoctype(l),
                                    n = a + (u ? 2 : 1)
                                }
                                break;
                            default:
                                var h = this._parseContent(e, n);
                                if (null === h)
                                    return void this.onError(c.MalformedElement);
                                var d = !1;
                                if ("/>" === e.substring(n + h.parsed, n + h.parsed + 2))
                                    d = !0;
                                else if (">" !== e.substring(n + h.parsed, n + h.parsed + 1))
                                    return void this.onError(c.UnterminatedElement);
                                this.onBeginElement(h.name, h.attributes, d),
                                n += h.parsed + (d ? 2 : 1)
                            }
                        } else {
                            for (; n < e.length && "<" !== e[n]; )
                                n++;
                            var f = e.substring(t, n);
                            this.onText(this._resolveEntities(f))
                        }
                        t = n
                    }
                }
            }, {
                key: "onResolveEntity",
                value: function(e) {
                    return "&" + e + ";"
                }
            }, {
                key: "onPi",
                value: function() {}
            }, {
                key: "onComment",
                value: function() {}
            }, {
                key: "onCdata",
                value: function() {}
            }, {
                key: "onDoctype",
                value: function() {}
            }, {
                key: "onText",
                value: function() {}
            }, {
                key: "onBeginElement",
                value: function() {}
            }, {
                key: "onEndElement",
                value: function() {}
            }, {
                key: "onError",
                value: function() {}
            }]),
            e
        }()
          , d = function() {
            function e(t, r) {
                i(this, e),
                this.nodeName = t,
                this.nodeValue = r,
                Object.defineProperty(this, "parentNode", {
                    value: null,
                    writable: !0
                })
            }
            return l(e, [{
                key: "hasChildNodes",
                value: function() {
                    return this.childNodes && this.childNodes.length > 0
                }
            }, {
                key: "firstChild",
                get: function() {
                    return this.childNodes[0]
                }
            }, {
                key: "nextSibling",
                get: function() {
                    var e = this.parentNode.childNodes.indexOf(this);
                    return this.parentNode.childNodes[e + 1]
                }
            }, {
                key: "textContent",
                get: function() {
                    return this.childNodes ? this.childNodes.map(function(e) {
                        return e.textContent
                    }).join("") : this.nodeValue || ""
                }
            }]),
            e
        }()
          , f = function(e) {
            function t() {
                i(this, t);
                var e = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e._currentFragment = null,
                e._stack = null,
                e._errorCode = c.NoError,
                e
            }
            return n(t, e),
            l(t, [{
                key: "parseFromString",
                value: function(e) {
                    if (this._currentFragment = [],
                    this._stack = [],
                    this._errorCode = c.NoError,
                    this.parseXml(e),
                    this._errorCode !== c.NoError)
                        return void 0;
                    var t = s(this._currentFragment, 1)
                      , r = t[0];
                    return {
                        documentElement: r
                    }
                }
            }, {
                key: "onResolveEntity",
                value: function(e) {
                    switch (e) {
                    case "apos":
                        return "'"
                    }
                    return u(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "onResolveEntity", this).call(this, e)
                }
            }, {
                key: "onText",
                value: function(e) {
                    if (!o(e)) {
                        var t = new d("#text",e);
                        this._currentFragment.push(t)
                    }
                }
            }, {
                key: "onCdata",
                value: function(e) {
                    var t = new d("#text",e);
                    this._currentFragment.push(t)
                }
            }, {
                key: "onBeginElement",
                value: function(e, t, r) {
                    var n = new d(e);
                    n.childNodes = [],
                    this._currentFragment.push(n),
                    r || (this._stack.push(this._currentFragment),
                    this._currentFragment = n.childNodes)
                }
            }, {
                key: "onEndElement",
                value: function() {
                    this._currentFragment = this._stack.pop();
                    for (var e = this._currentFragment[this._currentFragment.length - 1], t = 0, r = e.childNodes.length; r > t; t++)
                        e.childNodes[t].parentNode = e
                }
            }, {
                key: "onError",
                value: function(e) {
                    this._errorCode = e
                }
            }]),
            t
        }(h);
        t.SimpleXMLParser = f
    }
    , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PDFDataTransportStream = void 0;
        var n = r(0)
          , i = function() {
            function e(e, t) {
                var r = this;
                n.assert(t),
                this._queuedChunks = [];
                var i = e.initialData;
                if (i && i.length > 0) {
                    var a = new Uint8Array(i).buffer;
                    this._queuedChunks.push(a)
                }
                this._pdfDataRangeTransport = t,
                this._isStreamingSupported = !e.disableStream,
                this._isRangeSupported = !e.disableRange,
                this._contentLength = e.length,
                this._fullRequestReader = null,
                this._rangeReaders = [],
                this._pdfDataRangeTransport.addRangeListener(function(e, t) {
                    r._onReceiveData({
                        begin: e,
                        chunk: t
                    })
                }),
                this._pdfDataRangeTransport.addProgressListener(function(e) {
                    r._onProgress({
                        loaded: e
                    })
                }),
                this._pdfDataRangeTransport.addProgressiveReadListener(function(e) {
                    r._onReceiveData({
                        chunk: e
                    })
                }),
                this._pdfDataRangeTransport.transportReady()
            }
            function t(e, t) {
                this._stream = e,
                this._done = !1,
                this._filename = null,
                this._queuedChunks = t || [],
                this._requests = [],
                this._headersReady = Promise.resolve(),
                e._fullRequestReader = this,
                this.onProgress = null
            }
            function r(e, t, r) {
                this._stream = e,
                this._begin = t,
                this._end = r,
                this._queuedChunk = null,
                this._requests = [],
                this._done = !1,
                this.onProgress = null
            }
            return e.prototype = {
                _onReceiveData: function(e) {
                    var t = new Uint8Array(e.chunk).buffer;
                    if (void 0 === e.begin)
                        this._fullRequestReader ? this._fullRequestReader._enqueue(t) : this._queuedChunks.push(t);
                    else {
                        var r = this._rangeReaders.some(function(r) {
                            return r._begin !== e.begin ? !1 : (r._enqueue(t),
                            !0)
                        });
                        n.assert(r)
                    }
                },
                _onProgress: function(e) {
                    if (this._rangeReaders.length > 0) {
                        var t = this._rangeReaders[0];
                        t.onProgress && t.onProgress({
                            loaded: e.loaded
                        })
                    }
                },
                _removeRangeReader: function(e) {
                    var t = this._rangeReaders.indexOf(e);
                    t >= 0 && this._rangeReaders.splice(t, 1)
                },
                getFullReader: function() {
                    n.assert(!this._fullRequestReader);
                    var e = this._queuedChunks;
                    return this._queuedChunks = null,
                    new t(this,e)
                },
                getRangeReader: function(e, t) {
                    var n = new r(this,e,t);
                    return this._pdfDataRangeTransport.requestDataRange(e, t),
                    this._rangeReaders.push(n),
                    n
                },
                cancelAllRequests: function(e) {
                    this._fullRequestReader && this._fullRequestReader.cancel(e);
                    var t = this._rangeReaders.slice(0);
                    t.forEach(function(t) {
                        t.cancel(e)
                    }),
                    this._pdfDataRangeTransport.abort()
                }
            },
            t.prototype = {
                _enqueue: function(e) {
                    if (!this._done) {
                        if (this._requests.length > 0) {
                            var t = this._requests.shift();
                            return void t.resolve({
                                value: e,
                                done: !1
                            })
                        }
                        this._queuedChunks.push(e)
                    }
                },
                get headersReady() {
                    return this._headersReady
                },
                get filename() {
                    return this._filename
                },
                get isRangeSupported() {
                    return this._stream._isRangeSupported
                },
                get isStreamingSupported() {
                    return this._stream._isStreamingSupported
                },
                get contentLength() {
                    return this._stream._contentLength
                },
                read: function() {
                    if (this._queuedChunks.length > 0) {
                        var e = this._queuedChunks.shift();
                        return Promise.resolve({
                            value: e,
                            done: !1
                        })
                    }
                    if (this._done)
                        return Promise.resolve({
                            value: void 0,
                            done: !0
                        });
                    var t = n.createPromiseCapability();
                    return this._requests.push(t),
                    t.promise
                },
                cancel: function() {
                    this._done = !0,
                    this._requests.forEach(function(e) {
                        e.resolve({
                            value: void 0,
                            done: !0
                        })
                    }),
                    this._requests = []
                }
            },
            r.prototype = {
                _enqueue: function(e) {
                    if (!this._done) {
                        if (0 === this._requests.length)
                            this._queuedChunk = e;
                        else {
                            var t = this._requests.shift();
                            t.resolve({
                                value: e,
                                done: !1
                            }),
                            this._requests.forEach(function(e) {
                                e.resolve({
                                    value: void 0,
                                    done: !0
                                })
                            }),
                            this._requests = []
                        }
                        this._done = !0,
                        this._stream._removeRangeReader(this)
                    }
                },
                get isStreamingSupported() {
                    return !1
                },
                read: function() {
                    if (this._queuedChunk) {
                        var e = this._queuedChunk;
                        return this._queuedChunk = null,
                        Promise.resolve({
                            value: e,
                            done: !1
                        })
                    }
                    if (this._done)
                        return Promise.resolve({
                            value: void 0,
                            done: !0
                        });
                    var t = n.createPromiseCapability();
                    return this._requests.push(t),
                    t.promise
                },
                cancel: function() {
                    this._done = !0,
                    this._requests.forEach(function(e) {
                        e.resolve({
                            value: void 0,
                            done: !0
                        })
                    }),
                    this._requests = [],
                    this._stream._removeRangeReader(this)
                }
            },
            e
        }();
        t.PDFDataTransportStream = i
    }
    , function(e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.WebGLContext = void 0;
        var i = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r),
                n && e(t, n),
                t
            }
        }()
          , a = r(0)
          , o = function() {
            function e(t) {
                var r = t.enable
                  , i = void 0 === r ? !1 : r;
                n(this, e),
                this._enabled = i === !0
            }
            return i(e, [{
                key: "composeSMask",
                value: function(e) {
                    var t = e.layer
                      , r = e.mask
                      , n = e.properties;
                    return s.composeSMask(t, r, n)
                }
            }, {
                key: "drawFigures",
                value: function(e) {
                    var t = e.width
                      , r = e.height
                      , n = e.backgroundColor
                      , i = e.figures
                      , a = e.context;
                    return s.drawFigures(t, r, n, i, a)
                }
            }, {
                key: "clear",
                value: function() {
                    s.cleanup()
                }
            }, {
                key: "isEnabled",
                get: function() {
                    var e = this._enabled;
                    return e && (e = s.tryInitGL()),
                    a.shadow(this, "isEnabled", e)
                }
            }]),
            e
        }()
          , s = function() {
            function e(e, t, r) {
                var n = e.createShader(r);
                e.shaderSource(n, t),
                e.compileShader(n);
                var i = e.getShaderParameter(n, e.COMPILE_STATUS);
                if (!i) {
                    var a = e.getShaderInfoLog(n);
                    throw new Error("Error during shader compilation: " + a)
                }
                return n
            }
            function t(t, r) {
                return e(t, r, t.VERTEX_SHADER)
            }
            function r(t, r) {
                return e(t, r, t.FRAGMENT_SHADER)
            }
            function n(e, t) {
                for (var r = e.createProgram(), n = 0, i = t.length; i > n; ++n)
                    e.attachShader(r, t[n]);
                e.linkProgram(r);
                var a = e.getProgramParameter(r, e.LINK_STATUS);
                if (!a) {
                    var o = e.getProgramInfoLog(r);
                    throw new Error("Error during program linking: " + o)
                }
                return r
            }
            function i(e, t, r) {
                e.activeTexture(r);
                var n = e.createTexture();
                return e.bindTexture(e.TEXTURE_2D, n),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST),
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST),
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t),
                n
            }
            function a() {
                c || (h = document.createElement("canvas"),
                c = h.getContext("webgl", {
                    premultipliedalpha: !1
                }))
            }
            function o() {
                var e, i;
                a(),
                e = h,
                h = null,
                i = c,
                c = null;
                var o = t(i, d)
                  , s = r(i, f)
                  , u = n(i, [o, s]);
                i.useProgram(u);
                var l = {};
                l.gl = i,
                l.canvas = e,
                l.resolutionLocation = i.getUniformLocation(u, "u_resolution"),
                l.positionLocation = i.getAttribLocation(u, "a_position"),
                l.backdropLocation = i.getUniformLocation(u, "u_backdrop"),
                l.subtypeLocation = i.getUniformLocation(u, "u_subtype");
                var m = i.getAttribLocation(u, "a_texCoord")
                  , v = i.getUniformLocation(u, "u_image")
                  , g = i.getUniformLocation(u, "u_mask")
                  , b = i.createBuffer();
                i.bindBuffer(i.ARRAY_BUFFER, b),
                i.bufferData(i.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), i.STATIC_DRAW),
                i.enableVertexAttribArray(m),
                i.vertexAttribPointer(m, 2, i.FLOAT, !1, 0, 0),
                i.uniform1i(v, 0),
                i.uniform1i(g, 1),
                p = l
            }
            function s(e, t, r) {
                var n = e.width
                  , a = e.height;
                p || o();
                var s = p
                  , u = s.canvas
                  , l = s.gl;
                u.width = n,
                u.height = a,
                l.viewport(0, 0, l.drawingBufferWidth, l.drawingBufferHeight),
                l.uniform2f(s.resolutionLocation, n, a),
                r.backdrop ? l.uniform4f(s.resolutionLocation, r.backdrop[0], r.backdrop[1], r.backdrop[2], 1) : l.uniform4f(s.resolutionLocation, 0, 0, 0, 0),
                l.uniform1i(s.subtypeLocation, "Luminosity" === r.subtype ? 1 : 0);
                var c = i(l, e, l.TEXTURE0)
                  , h = i(l, t, l.TEXTURE1)
                  , d = l.createBuffer();
                return l.bindBuffer(l.ARRAY_BUFFER, d),
                l.bufferData(l.ARRAY_BUFFER, new Float32Array([0, 0, n, 0, 0, a, 0, a, n, 0, n, a]), l.STATIC_DRAW),
                l.enableVertexAttribArray(s.positionLocation),
                l.vertexAttribPointer(s.positionLocation, 2, l.FLOAT, !1, 0, 0),
                l.clearColor(0, 0, 0, 0),
                l.enable(l.BLEND),
                l.blendFunc(l.ONE, l.ONE_MINUS_SRC_ALPHA),
                l.clear(l.COLOR_BUFFER_BIT),
                l.drawArrays(l.TRIANGLES, 0, 6),
                l.flush(),
                l.deleteTexture(c),
                l.deleteTexture(h),
                l.deleteBuffer(d),
                u
            }
            function u() {
                var e, i;
                a(),
                e = h,
                h = null,
                i = c,
                c = null;
                var o = t(i, m)
                  , s = r(i, v)
                  , u = n(i, [o, s]);
                i.useProgram(u);
                var l = {};
                l.gl = i,
                l.canvas = e,
                l.resolutionLocation = i.getUniformLocation(u, "u_resolution"),
                l.scaleLocation = i.getUniformLocation(u, "u_scale"),
                l.offsetLocation = i.getUniformLocation(u, "u_offset"),
                l.positionLocation = i.getAttribLocation(u, "a_position"),
                l.colorLocation = i.getAttribLocation(u, "a_color"),
                g = l
            }
            function l(e, t, r, n, i) {
                g || u();
                var a = g
                  , o = a.canvas
                  , s = a.gl;
                o.width = e,
                o.height = t,
                s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight),
                s.uniform2f(a.resolutionLocation, e, t);
                var l, c, h, d = 0;
                for (l = 0,
                c = n.length; c > l; l++)
                    switch (n[l].type) {
                    case "lattice":
                        h = n[l].coords.length / n[l].verticesPerRow | 0,
                        d += (h - 1) * (n[l].verticesPerRow - 1) * 6;
                        break;
                    case "triangles":
                        d += n[l].coords.length
                    }
                var f = new Float32Array(2 * d)
                  , p = new Uint8Array(3 * d)
                  , m = i.coords
                  , v = i.colors
                  , b = 0
                  , _ = 0;
                for (l = 0,
                c = n.length; c > l; l++) {
                    var y = n[l]
                      , A = y.coords
                      , S = y.colors;
                    switch (y.type) {
                    case "lattice":
                        var w = y.verticesPerRow;
                        h = A.length / w | 0;
                        for (var C = 1; h > C; C++)
                            for (var P = C * w + 1, k = 1; w > k; k++,
                            P++)
                                f[b] = m[A[P - w - 1]],
                                f[b + 1] = m[A[P - w - 1] + 1],
                                f[b + 2] = m[A[P - w]],
                                f[b + 3] = m[A[P - w] + 1],
                                f[b + 4] = m[A[P - 1]],
                                f[b + 5] = m[A[P - 1] + 1],
                                p[_] = v[S[P - w - 1]],
                                p[_ + 1] = v[S[P - w - 1] + 1],
                                p[_ + 2] = v[S[P - w - 1] + 2],
                                p[_ + 3] = v[S[P - w]],
                                p[_ + 4] = v[S[P - w] + 1],
                                p[_ + 5] = v[S[P - w] + 2],
                                p[_ + 6] = v[S[P - 1]],
                                p[_ + 7] = v[S[P - 1] + 1],
                                p[_ + 8] = v[S[P - 1] + 2],
                                f[b + 6] = f[b + 2],
                                f[b + 7] = f[b + 3],
                                f[b + 8] = f[b + 4],
                                f[b + 9] = f[b + 5],
                                f[b + 10] = m[A[P]],
                                f[b + 11] = m[A[P] + 1],
                                p[_ + 9] = p[_ + 3],
                                p[_ + 10] = p[_ + 4],
                                p[_ + 11] = p[_ + 5],
                                p[_ + 12] = p[_ + 6],
                                p[_ + 13] = p[_ + 7],
                                p[_ + 14] = p[_ + 8],
                                p[_ + 15] = v[S[P]],
                                p[_ + 16] = v[S[P] + 1],
                                p[_ + 17] = v[S[P] + 2],
                                b += 12,
                                _ += 18;
                        break;
                    case "triangles":
                        for (var R = 0, x = A.length; x > R; R++)
                            f[b] = m[A[R]],
                            f[b + 1] = m[A[R] + 1],
                            p[_] = v[S[R]],
                            p[_ + 1] = v[S[R] + 1],
                            p[_ + 2] = v[S[R] + 2],
                            b += 2,
                            _ += 3
                    }
                }
                r ? s.clearColor(r[0] / 255, r[1] / 255, r[2] / 255, 1) : s.clearColor(0, 0, 0, 0),
                s.clear(s.COLOR_BUFFER_BIT);
                var T = s.createBuffer();
                s.bindBuffer(s.ARRAY_BUFFER, T),
                s.bufferData(s.ARRAY_BUFFER, f, s.STATIC_DRAW),
                s.enableVertexAttribArray(a.positionLocation),
                s.vertexAttribPointer(a.positionLocation, 2, s.FLOAT, !1, 0, 0);
                var E = s.createBuffer();
                return s.bindBuffer(s.ARRAY_BUFFER, E),
                s.bufferData(s.ARRAY_BUFFER, p, s.STATIC_DRAW),
                s.enableVertexAttribArray(a.colorLocation),
                s.vertexAttribPointer(a.colorLocation, 3, s.UNSIGNED_BYTE, !1, 0, 0),
                s.uniform2f(a.scaleLocation, i.scaleX, i.scaleY),
                s.uniform2f(a.offsetLocation, i.offsetX, i.offsetY),
                s.drawArrays(s.TRIANGLES, 0, d),
                s.flush(),
                s.deleteBuffer(T),
                s.deleteBuffer(E),
                o
            }
            var c, h, d = "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ", f = "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ", p = null, m = "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ", v = "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ", g = null;
            return {
                tryInitGL: function() {
                    try {
                        return a(),
                        !!c
                    } catch (e) {}
                    return !1
                },
                composeSMask: s,
                drawFigures: l,
                cleanup: function() {
                    p && p.canvas && (p.canvas.width = 0,
                    p.canvas.height = 0),
                    g && g.canvas && (g.canvas.width = 0,
                    g.canvas.height = 0),
                    p = null,
                    g = null
                }
            }
        }();
        t.WebGLContext = o
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.renderTextLayer = void 0;
        var i = r(0)
          , a = r(18)
          , o = n(a)
          , s = function() {
            function e(e) {
                return !h.test(e)
            }
            function t(t, r, n) {
                var a = document.createElement("div")
                  , o = {
                    style: null,
                    angle: 0,
                    canvasWidth: 0,
                    isWhitespace: !1,
                    originalTransform: null,
                    paddingBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    scale: 1
                };
                if (t._textDivs.push(a),
                e(r.str))
                    return o.isWhitespace = !0,
                    void t._textDivProperties.set(a, o);
                var s = i.Util.transform(t._viewport.transform, r.transform)
                  , u = Math.atan2(s[1], s[0])
                  , l = n[r.fontName];
                l.vertical && (u += Math.PI / 2);
                var c = Math.sqrt(s[2] * s[2] + s[3] * s[3])
                  , h = c;
                l.ascent ? h = l.ascent * h : l.descent && (h = (1 + l.descent) * h);
                var f, p;
                if (0 === u ? (f = s[4],
                p = s[5] - h) : (f = s[4] + h * Math.sin(u),
                p = s[5] - h * Math.cos(u)),
                d[1] = f,
                d[3] = p,
                d[5] = c,
                d[7] = l.fontFamily,
                o.style = d.join(""),
                a.setAttribute("style", o.style),
                a.textContent = r.str,
                t._fontInspectorEnabled && (a.dataset.fontName = r.fontName),
                0 !== u && (o.angle = u * (180 / Math.PI)),
                r.str.length > 1 && (o.canvasWidth = l.vertical ? r.height * t._viewport.scale : r.width * t._viewport.scale),
                t._textDivProperties.set(a, o),
                t._textContentStream && t._layoutText(a),
                t._enhanceTextSelection) {
                    var m = 1
                      , v = 0;
                    0 !== u && (m = Math.cos(u),
                    v = Math.sin(u));
                    var g, b, _ = (l.vertical ? r.height : r.width) * t._viewport.scale, y = c;
                    0 !== u ? (g = [m, v, -v, m, f, p],
                    b = i.Util.getAxialAlignedBoundingBox([0, 0, _, y], g)) : b = [f, p, f + _, p + y],
                    t._bounds.push({
                        left: b[0],
                        top: b[1],
                        right: b[2],
                        bottom: b[3],
                        div: a,
                        size: [_, y],
                        m: g
                    })
                }
            }
            function r(e) {
                if (!e._canceled) {
                    var t = e._textDivs
                      , r = e._capability
                      , n = t.length;
                    if (n > c)
                        return e._renderingDone = !0,
                        void r.resolve();
                    if (!e._textContentStream)
                        for (var i = 0; n > i; i++)
                            e._layoutText(t[i]);
                    e._renderingDone = !0,
                    r.resolve()
                }
            }
            function n(e) {
                for (var t = e._bounds, r = e._viewport, n = a(r.width, r.height, t), o = 0; o < n.length; o++) {
                    var s = t[o].div
                      , u = e._textDivProperties.get(s);
                    if (0 !== u.angle) {
                        var l = n[o]
                          , c = t[o]
                          , h = c.m
                          , d = h[0]
                          , f = h[1]
                          , p = [[0, 0], [0, c.size[1]], [c.size[0], 0], c.size]
                          , m = new Float64Array(64);
                        p.forEach(function(e, t) {
                            var r = i.Util.applyTransform(e, h);
                            m[t + 0] = d && (l.left - r[0]) / d,
                            m[t + 4] = f && (l.top - r[1]) / f,
                            m[t + 8] = d && (l.right - r[0]) / d,
                            m[t + 12] = f && (l.bottom - r[1]) / f,
                            m[t + 16] = f && (l.left - r[0]) / -f,
                            m[t + 20] = d && (l.top - r[1]) / d,
                            m[t + 24] = f && (l.right - r[0]) / -f,
                            m[t + 28] = d && (l.bottom - r[1]) / d,
                            m[t + 32] = d && (l.left - r[0]) / -d,
                            m[t + 36] = f && (l.top - r[1]) / -f,
                            m[t + 40] = d && (l.right - r[0]) / -d,
                            m[t + 44] = f && (l.bottom - r[1]) / -f,
                            m[t + 48] = f && (l.left - r[0]) / f,
                            m[t + 52] = d && (l.top - r[1]) / -d,
                            m[t + 56] = f && (l.right - r[0]) / f,
                            m[t + 60] = d && (l.bottom - r[1]) / -d
                        });
                        var v = function(e, t, r) {
                            for (var n = 0, i = 0; r > i; i++) {
                                var a = e[t++];
                                a > 0 && (n = n ? Math.min(a, n) : a)
                            }
                            return n
                        }
                          , g = 1 + Math.min(Math.abs(d), Math.abs(f));
                        u.paddingLeft = v(m, 32, 16) / g,
                        u.paddingTop = v(m, 48, 16) / g,
                        u.paddingRight = v(m, 0, 16) / g,
                        u.paddingBottom = v(m, 16, 16) / g,
                        e._textDivProperties.set(s, u)
                    } else
                        u.paddingLeft = t[o].left - n[o].left,
                        u.paddingTop = t[o].top - n[o].top,
                        u.paddingRight = n[o].right - t[o].right,
                        u.paddingBottom = n[o].bottom - t[o].bottom,
                        e._textDivProperties.set(s, u)
                }
            }
            function a(e, t, r) {
                var n = r.map(function(e, t) {
                    return {
                        x1: e.left,
                        y1: e.top,
                        x2: e.right,
                        y2: e.bottom,
                        index: t,
                        x1New: void 0,
                        x2New: void 0
                    }
                });
                s(e, n);
                var i = new Array(r.length);
                return n.forEach(function(e) {
                    var t = e.index;
                    i[t] = {
                        left: e.x1New,
                        top: 0,
                        right: e.x2New,
                        bottom: 0
                    }
                }),
                r.map(function(t, r) {
                    var a = i[r]
                      , o = n[r];
                    o.x1 = t.top,
                    o.y1 = e - a.right,
                    o.x2 = t.bottom,
                    o.y2 = e - a.left,
                    o.index = r,
                    o.x1New = void 0,
                    o.x2New = void 0
                }),
                s(t, n),
                n.forEach(function(e) {
                    var t = e.index;
                    i[t].top = e.x1New,
                    i[t].bottom = e.x2New
                }),
                i
            }
            function s(e, t) {
                t.sort(function(e, t) {
                    return e.x1 - t.x1 || e.index - t.index
                });
                var r = {
                    x1: -1 / 0,
                    y1: -1 / 0,
                    x2: 0,
                    y2: 1 / 0,
                    index: -1,
                    x1New: 0,
                    x2New: 0
                }
                  , n = [{
                    start: -1 / 0,
                    end: 1 / 0,
                    boundary: r
                }];
                t.forEach(function(e) {
                    for (var t = 0; t < n.length && n[t].end <= e.y1; )
                        t++;
                    for (var r = n.length - 1; r >= 0 && n[r].start >= e.y2; )
                        r--;
                    var i, a, o, s, u = -1 / 0;
                    for (o = t; r >= o; o++) {
                        i = n[o],
                        a = i.boundary;
                        var l;
                        l = a.x2 > e.x1 ? a.index > e.index ? a.x1New : e.x1 : void 0 === a.x2New ? (a.x2 + e.x1) / 2 : a.x2New,
                        l > u && (u = l)
                    }
                    for (e.x1New = u,
                    o = t; r >= o; o++)
                        i = n[o],
                        a = i.boundary,
                        void 0 === a.x2New ? a.x2 > e.x1 ? a.index > e.index && (a.x2New = a.x2) : a.x2New = u : a.x2New > u && (a.x2New = Math.max(u, a.x2));
                    var c = []
                      , h = null;
                    for (o = t; r >= o; o++) {
                        i = n[o],
                        a = i.boundary;
                        var d = a.x2 > e.x2 ? a : e;
                        h === d ? c[c.length - 1].end = i.end : (c.push({
                            start: i.start,
                            end: i.end,
                            boundary: d
                        }),
                        h = d)
                    }
                    for (n[t].start < e.y1 && (c[0].start = e.y1,
                    c.unshift({
                        start: n[t].start,
                        end: e.y1,
                        boundary: n[t].boundary
                    })),
                    e.y2 < n[r].end && (c[c.length - 1].end = e.y2,
                    c.push({
                        start: e.y2,
                        end: n[r].end,
                        boundary: n[r].boundary
                    })),
                    o = t; r >= o; o++)
                        if (i = n[o],
                        a = i.boundary,
                        void 0 === a.x2New) {
                            var f = !1;
                            for (s = t - 1; !f && s >= 0 && n[s].start >= a.y1; s--)
                                f = n[s].boundary === a;
                            for (s = r + 1; !f && s < n.length && n[s].end <= a.y2; s++)
                                f = n[s].boundary === a;
                            for (s = 0; !f && s < c.length; s++)
                                f = c[s].boundary === a;
                            f || (a.x2New = u)
                        }
                    Array.prototype.splice.apply(n, [t, r - t + 1].concat(c))
                }),
                n.forEach(function(t) {
                    var r = t.boundary;
                    void 0 === r.x2New && (r.x2New = Math.max(e, r.x2))
                })
            }
            function u(e) {
                var t = e.textContent
                  , r = e.textContentStream
                  , n = e.container
                  , a = e.viewport
                  , s = e.textDivs
                  , u = e.textContentItemsStr
                  , l = e.enhanceTextSelection;
                this._textContent = t,
                this._textContentStream = r,
                this._container = n,
                this._viewport = a,
                this._textDivs = s || [],
                this._textContentItemsStr = u || [],
                this._enhanceTextSelection = !!l,
                this._fontInspectorEnabled = !(!o.default.FontInspector || !o.default.FontInspector.enabled),
                this._reader = null,
                this._layoutTextLastFontSize = null,
                this._layoutTextLastFontFamily = null,
                this._layoutTextCtx = null,
                this._textDivProperties = new WeakMap,
                this._renderingDone = !1,
                this._canceled = !1,
                this._capability = i.createPromiseCapability(),
                this._renderTimer = null,
                this._bounds = []
            }
            function l(e) {
                var t = new u({
                    textContent: e.textContent,
                    textContentStream: e.textContentStream,
                    container: e.container,
                    viewport: e.viewport,
                    textDivs: e.textDivs,
                    textContentItemsStr: e.textContentItemsStr,
                    enhanceTextSelection: e.enhanceTextSelection
                });
                return t._render(e.timeout),
                t
            }
            var c = 1e5
              , h = /\S/
              , d = ["left: ", 0, "px; top: ", 0, "px; font-size: ", 0, "px; font-family: ", "", ";"];
            return u.prototype = {
                get promise() {
                    return this._capability.promise
                },
                cancel: function() {
                    this._reader && (this._reader.cancel(new i.AbortException("text layer task cancelled")),
                    this._reader = null),
                    this._canceled = !0,
                    null !== this._renderTimer && (clearTimeout(this._renderTimer),
                    this._renderTimer = null),
                    this._capability.reject("canceled")
                },
                _processItems: function(e, r) {
                    for (var n = 0, i = e.length; i > n; n++)
                        this._textContentItemsStr.push(e[n].str),
                        t(this, e[n], r)
                },
                _layoutText: function(e) {
                    var t = this._container
                      , r = this._textDivProperties.get(e);
                    if (!r.isWhitespace) {
                        var n = e.style.fontSize
                          , i = e.style.fontFamily;
                        (n !== this._layoutTextLastFontSize || i !== this._layoutTextLastFontFamily) && (this._layoutTextCtx.font = n + " " + i,
                        this._lastFontSize = n,
                        this._lastFontFamily = i);
                        var a = this._layoutTextCtx.measureText(e.textContent).width
                          , o = "";
                        0 !== r.canvasWidth && a > 0 && (r.scale = r.canvasWidth / a,
                        o = "scaleX(" + r.scale + ")"),
                        0 !== r.angle && (o = "rotate(" + r.angle + "deg) " + o),
                        "" !== o && (r.originalTransform = o,
                        e.style.transform = o),
                        this._textDivProperties.set(e, r),
                        t.appendChild(e)
                    }
                },
                _render: function(e) {
                    var t = this
                      , n = i.createPromiseCapability()
                      , a = Object.create(null)
                      , o = document.createElement("canvas");
                    if (o.mozOpaque = !0,
                    this._layoutTextCtx = o.getContext("2d", {
                        alpha: !1
                    }),
                    this._textContent) {
                        var s = this._textContent.items
                          , u = this._textContent.styles;
                        this._processItems(s, u),
                        n.resolve()
                    } else {
                        if (!this._textContentStream)
                            throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
                        var l = function c() {
                            t._reader.read().then(function(e) {
                                var r = e.value
                                  , o = e.done;
                                return o ? void n.resolve() : (i.Util.extendObj(a, r.styles),
                                t._processItems(r.items, a),
                                void c())
                            }, n.reject)
                        };
                        this._reader = this._textContentStream.getReader(),
                        l()
                    }
                    n.promise.then(function() {
                        a = null,
                        e ? t._renderTimer = setTimeout(function() {
                            r(t),
                            t._renderTimer = null
                        }, e) : r(t)
                    }, this._capability.reject)
                },
                expandTextDivs: function(e) {
                    if (this._enhanceTextSelection && this._renderingDone) {
                        null !== this._bounds && (n(this),
                        this._bounds = null);
                        for (var t = 0, r = this._textDivs.length; r > t; t++) {
                            var i = this._textDivs[t]
                              , a = this._textDivProperties.get(i);
                            if (!a.isWhitespace)
                                if (e) {
                                    var o = ""
                                      , s = "";
                                    1 !== a.scale && (o = "scaleX(" + a.scale + ")"),
                                    0 !== a.angle && (o = "rotate(" + a.angle + "deg) " + o),
                                    0 !== a.paddingLeft && (s += " padding-left: " + a.paddingLeft / a.scale + "px;",
                                    o += " translateX(" + -a.paddingLeft / a.scale + "px)"),
                                    0 !== a.paddingTop && (s += " padding-top: " + a.paddingTop + "px;",
                                    o += " translateY(" + -a.paddingTop + "px)"),
                                    0 !== a.paddingRight && (s += " padding-right: " + a.paddingRight / a.scale + "px;"),
                                    0 !== a.paddingBottom && (s += " padding-bottom: " + a.paddingBottom + "px;"),
                                    "" !== s && i.setAttribute("style", a.style + s),
                                    "" !== o && (i.style.transform = o)
                                } else
                                    i.style.padding = 0,
                                    i.style.transform = a.originalTransform || ""
                        }
                    }
                }
            },
            l
        }();
        t.renderTextLayer = s
    }
    , function(e, t, r) {
        "use strict";
        function n(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AnnotationLayer = void 0;
        var o = function F(e, t, r) {
            null === e && (e = Function.prototype);
            var n = Object.getOwnPropertyDescriptor(e, t);
            if (void 0 === n) {
                var i = Object.getPrototypeOf(e);
                return null === i ? void 0 : F(i, t, r)
            }
            if ("value"in n)
                return n.value;
            var a = n.get;
            return void 0 === a ? void 0 : a.call(r)
        }
          , s = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r),
                n && e(t, n),
                t
            }
        }()
          , u = r(24)
          , l = r(0)
          , c = function() {
            function e() {
                a(this, e)
            }
            return s(e, null, [{
                key: "create",
                value: function(e) {
                    var t = e.data.annotationType;
                    switch (t) {
                    case l.AnnotationType.LINK:
                        return new d(e);
                    case l.AnnotationType.TEXT:
                        return new f(e);
                    case l.AnnotationType.WIDGET:
                        var r = e.data.fieldType;
                        switch (r) {
                        case "Tx":
                            return new m(e);
                        case "Btn":
                            return e.data.radioButton ? new g(e) : e.data.checkBox ? new v(e) : new b(e);
                        case "Ch":
                            return new _(e)
                        }
                        return new p(e);
                    case l.AnnotationType.POPUP:
                        return new y(e);
                    case l.AnnotationType.LINE:
                        return new S(e);
                    case l.AnnotationType.SQUARE:
                        return new w(e);
                    case l.AnnotationType.CIRCLE:
                        return new C(e);
                    case l.AnnotationType.POLYLINE:
                        return new P(e);
                    case l.AnnotationType.POLYGON:
                        return new k(e);
                    case l.AnnotationType.HIGHLIGHT:
                        return new R(e);
                    case l.AnnotationType.UNDERLINE:
                        return new x(e);
                    case l.AnnotationType.SQUIGGLY:
                        return new T(e);
                    case l.AnnotationType.STRIKEOUT:
                        return new E(e);
                    case l.AnnotationType.STAMP:
                        return new O(e);
                    case l.AnnotationType.FILEATTACHMENT:
                        return new j(e);
                    default:
                        return new h(e)
                    }
                }
            }]),
            e
        }()
          , h = function() {
            function e(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1
                  , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
                a(this, e),
                this.isRenderable = r,
                this.data = t.data,
                this.layer = t.layer,
                this.page = t.page,
                this.viewport = t.viewport,
                this.linkService = t.linkService,
                this.downloadManager = t.downloadManager,
                this.imageResourcesPath = t.imageResourcesPath,
                this.renderInteractiveForms = t.renderInteractiveForms,
                this.svgFactory = t.svgFactory,
                r && (this.container = this._createContainer(n))
            }
            return s(e, [{
                key: "_createContainer",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1
                      , t = this.data
                      , r = this.page
                      , n = this.viewport
                      , i = document.createElement("section")
                      , a = t.rect[2] - t.rect[0]
                      , o = t.rect[3] - t.rect[1];
                    i.setAttribute("data-annotation-id", t.id);
                    var s = l.Util.normalizeRect([t.rect[0], r.view[3] - t.rect[1] + r.view[1], t.rect[2], r.view[3] - t.rect[3] + r.view[1]]);
                    if (i.style.transform = "matrix(" + n.transform.join(",") + ")",
                    i.style.transformOrigin = -s[0] + "px " + -s[1] + "px",
                    !e && t.borderStyle.width > 0) {
                        i.style.borderWidth = t.borderStyle.width + "px",
                        t.borderStyle.style !== l.AnnotationBorderStyleType.UNDERLINE && (a -= 2 * t.borderStyle.width,
                        o -= 2 * t.borderStyle.width);
                        var u = t.borderStyle.horizontalCornerRadius
                          , c = t.borderStyle.verticalCornerRadius;
                        if (u > 0 || c > 0) {
                            var h = u + "px / " + c + "px";
                            i.style.borderRadius = h
                        }
                        switch (t.borderStyle.style) {
                        case l.AnnotationBorderStyleType.SOLID:
                            i.style.borderStyle = "solid";
                            break;
                        case l.AnnotationBorderStyleType.DASHED:
                            i.style.borderStyle = "dashed";
                            break;
                        case l.AnnotationBorderStyleType.BEVELED:
                            l.warn("Unimplemented border style: beveled");
                            break;
                        case l.AnnotationBorderStyleType.INSET:
                            l.warn("Unimplemented border style: inset");
                            break;
                        case l.AnnotationBorderStyleType.UNDERLINE:
                            i.style.borderBottomStyle = "solid"
                        }
                        t.color ? i.style.borderColor = l.Util.makeCssRgb(0 | t.color[0], 0 | t.color[1], 0 | t.color[2]) : i.style.borderWidth = 0
                    }
                    return i.style.left = s[0] + "px",
                    i.style.top = s[1] + "px",
                    i.style.width = a + "px",
                    i.style.height = o + "px",
                    i
                }
            }, {
                key: "_createPopup",
                value: function(e, t, r) {
                    t || (t = document.createElement("div"),
                    t.style.height = e.style.height,
                    t.style.width = e.style.width,
                    e.appendChild(t));
                    var n = new A({
                        container: e,
                        trigger: t,
                        color: r.color,
                        title: r.title,
                        contents: r.contents,
                        hideWrapper: !0
                    })
                      , i = n.render();
                    i.style.left = e.style.width,
                    e.appendChild(i)
                }
            }, {
                key: "render",
                value: function() {
                    l.unreachable("Abstract method `AnnotationElement.render` called")
                }
            }]),
            e
        }()
          , d = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.url || e.data.dest || e.data.action);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "linkAnnotation";
                    var e = this.data
                      , t = this.linkService
                      , r = document.createElement("a");
                    return u.addLinkAttributes(r, {
                        url: e.url,
                        target: e.newWindow ? u.LinkTarget.BLANK : t.externalLinkTarget,
                        rel: t.externalLinkRel
                    }),
                    e.url || (e.action ? this._bindNamedAction(r, e.action) : this._bindLink(r, e.dest)),
                    this.container.appendChild(r),
                    this.container
                }
            }, {
                key: "_bindLink",
                value: function(e, t) {
                    var r = this;
                    e.href = this.linkService.getDestinationHash(t),
                    e.onclick = function() {
                        return t && r.linkService.navigateTo(t),
                        !1
                    }
                    ,
                    t && (e.className = "internalLink")
                }
            }, {
                key: "_bindNamedAction",
                value: function(e, t) {
                    var r = this;
                    e.href = this.linkService.getAnchorUrl(""),
                    e.onclick = function() {
                        return r.linkService.executeNamedAction(t),
                        !1
                    }
                    ,
                    e.className = "internalLink"
                }
            }]),
            t
        }(h)
          , f = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "textAnnotation";
                    var e = document.createElement("img");
                    return e.style.height = this.container.style.height,
                    e.style.width = this.container.style.width,
                    e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg",
                    e.alt = "[{{type}} Annotation]",
                    e.dataset.l10nId = "text_annotation_type",
                    e.dataset.l10nArgs = JSON.stringify({
                        type: this.data.name
                    }),
                    this.data.hasPopup || this._createPopup(this.container, e, this.data),
                    this.container.appendChild(e),
                    this.container
                }
            }]),
            t
        }(h)
          , p = function(e) {
            function t() {
                return a(this, t),
                n(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    return this.container
                }
            }]),
            t
        }(h)
          , m = function(e) {
            function t(e) {
                a(this, t);
                var r = e.renderInteractiveForms || !e.data.hasAppearance && !!e.data.fieldValue;
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    var e = ["left", "center", "right"];
                    this.container.className = "textWidgetAnnotation";
                    var t = null;
                    if (this.renderInteractiveForms) {
                        if (this.data.multiLine ? (t = document.createElement("textarea"),
                        t.textContent = this.data.fieldValue) : (t = document.createElement("input"),
                        t.type = "text",
                        t.setAttribute("value", this.data.fieldValue)),
                        t.disabled = this.data.readOnly,
                        null !== this.data.maxLen && (t.maxLength = this.data.maxLen),
                        this.data.comb) {
                            var r = this.data.rect[2] - this.data.rect[0]
                              , n = r / this.data.maxLen;
                            t.classList.add("comb"),
                            t.style.letterSpacing = "calc(" + n + "px - 1ch)"
                        }
                    } else {
                        t = document.createElement("div"),
                        t.textContent = this.data.fieldValue,
                        t.style.verticalAlign = "middle",
                        t.style.display = "table-cell";
                        var i = null;
                        this.data.fontRefName && (i = this.page.commonObjs.getData(this.data.fontRefName)),
                        this._setTextStyle(t, i)
                    }
                    return null !== this.data.textAlignment && (t.style.textAlign = e[this.data.textAlignment]),
                    this.container.appendChild(t),
                    this.container
                }
            }, {
                key: "_setTextStyle",
                value: function(e, t) {
                    var r = e.style;
                    if (r.fontSize = this.data.fontSize + "px",
                    r.direction = this.data.fontDirection < 0 ? "rtl" : "ltr",
                    t) {
                        r.fontWeight = t.black ? t.bold ? "900" : "bold" : t.bold ? "bold" : "normal",
                        r.fontStyle = t.italic ? "italic" : "normal";
                        var n = t.loadedName ? '"' + t.loadedName + '", ' : ""
                          , i = t.fallbackName || "Helvetica, sans-serif";
                        r.fontFamily = n + i
                    }
                }
            }]),
            t
        }(p)
          , v = function(e) {
            function t(e) {
                return a(this, t),
                n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, e.renderInteractiveForms))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "buttonWidgetAnnotation checkBox";
                    var e = document.createElement("input");
                    return e.disabled = this.data.readOnly,
                    e.type = "checkbox",
                    this.data.fieldValue && "Off" !== this.data.fieldValue && e.setAttribute("checked", !0),
                    this.container.appendChild(e),
                    this.container
                }
            }]),
            t
        }(p)
          , g = function(e) {
            function t(e) {
                return a(this, t),
                n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, e.renderInteractiveForms))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "buttonWidgetAnnotation radioButton";
                    var e = document.createElement("input");
                    return e.disabled = this.data.readOnly,
                    e.type = "radio",
                    e.name = this.data.fieldName,
                    this.data.fieldValue === this.data.buttonValue && e.setAttribute("checked", !0),
                    this.container.appendChild(e),
                    this.container
                }
            }]),
            t
        }(p)
          , b = function(e) {
            function t() {
                return a(this, t),
                n(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    var e = o(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "render", this).call(this);
                    return e.className = "buttonWidgetAnnotation pushButton",
                    e
                }
            }]),
            t
        }(d)
          , _ = function(e) {
            function t(e) {
                return a(this, t),
                n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, e.renderInteractiveForms))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "choiceWidgetAnnotation";
                    var e = document.createElement("select");
                    e.disabled = this.data.readOnly,
                    this.data.combo || (e.size = this.data.options.length,
                    this.data.multiSelect && (e.multiple = !0));
                    for (var t = 0, r = this.data.options.length; r > t; t++) {
                        var n = this.data.options[t]
                          , i = document.createElement("option");
                        i.textContent = n.displayValue,
                        i.value = n.exportValue,
                        this.data.fieldValue.includes(n.displayValue) && i.setAttribute("selected", !0),
                        e.appendChild(i)
                    }
                    return this.container.appendChild(e),
                    this.container
                }
            }]),
            t
        }(p)
          , y = function(e) {
            function t(e) {
                a(this, t);
                var r = !(!e.data.title && !e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    var e = ["Line", "Square", "Circle", "PolyLine", "Polygon"];
                    if (this.container.className = "popupAnnotation",
                    e.includes(this.data.parentType))
                        return this.container;
                    var t = '[data-annotation-id="' + this.data.parentId + '"]'
                      , r = this.layer.querySelector(t);
                    if (!r)
                        return this.container;
                    var n = new A({
                        container: this.container,
                        trigger: r,
                        color: this.data.color,
                        title: this.data.title,
                        contents: this.data.contents
                    })
                      , i = parseFloat(r.style.left)
                      , a = parseFloat(r.style.width);
                    return this.container.style.transformOrigin = -(i + a) + "px -" + r.style.top,
                    this.container.style.left = i + a + "px",
                    this.container.appendChild(n.render()),
                    this.container
                }
            }]),
            t
        }(h)
          , A = function() {
            function e(t) {
                a(this, e),
                this.container = t.container,
                this.trigger = t.trigger,
                this.color = t.color,
                this.title = t.title,
                this.contents = t.contents,
                this.hideWrapper = t.hideWrapper || !1,
                this.pinned = !1
            }
            return s(e, [{
                key: "render",
                value: function() {
                    var e = .7
                      , t = document.createElement("div");
                    t.className = "popupWrapper",
                    this.hideElement = this.hideWrapper ? t : this.container,
                    this.hideElement.setAttribute("hidden", !0);
                    var r = document.createElement("div");
                    r.className = "popup";
                    var n = this.color;
                    if (n) {
                        var i = e * (255 - n[0]) + n[0]
                          , a = e * (255 - n[1]) + n[1]
                          , o = e * (255 - n[2]) + n[2];
                        r.style.backgroundColor = l.Util.makeCssRgb(0 | i, 0 | a, 0 | o)
                    }
                    var s = this._formatContents(this.contents)
                      , u = document.createElement("h1");
                    return u.textContent = this.title,
                    this.trigger.addEventListener("click", this._toggle.bind(this)),
                    this.trigger.addEventListener("mouseover", this._show.bind(this, !1)),
                    this.trigger.addEventListener("mouseout", this._hide.bind(this, !1)),
                    r.addEventListener("click", this._hide.bind(this, !0)),
                    r.appendChild(u),
                    r.appendChild(s),
                    t.appendChild(r),
                    t
                }
            }, {
                key: "_formatContents",
                value: function(e) {
                    for (var t = document.createElement("p"), r = e.split(/(?:\r\n?|\n)/), n = 0, i = r.length; i > n; ++n) {
                        var a = r[n];
                        t.appendChild(document.createTextNode(a)),
                        i - 1 > n && t.appendChild(document.createElement("br"))
                    }
                    return t
                }
            }, {
                key: "_toggle",
                value: function() {
                    this.pinned ? this._hide(!0) : this._show(!0)
                }
            }, {
                key: "_show",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
                    e && (this.pinned = !0),
                    this.hideElement.hasAttribute("hidden") && (this.hideElement.removeAttribute("hidden"),
                    this.container.style.zIndex += 1)
                }
            }, {
                key: "_hide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0;
                    e && (this.pinned = !1),
                    this.hideElement.hasAttribute("hidden") || this.pinned || (this.hideElement.setAttribute("hidden", !0),
                    this.container.style.zIndex -= 1)
                }
            }]),
            e
        }()
          , S = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "lineAnnotation";
                    var e = this.data
                      , t = e.rect[2] - e.rect[0]
                      , r = e.rect[3] - e.rect[1]
                      , n = this.svgFactory.create(t, r)
                      , i = this.svgFactory.createElement("svg:line");
                    return i.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]),
                    i.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]),
                    i.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]),
                    i.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]),
                    i.setAttribute("stroke-width", e.borderStyle.width),
                    i.setAttribute("stroke", "transparent"),
                    n.appendChild(i),
                    this.container.append(n),
                    this._createPopup(this.container, i, e),
                    this.container
                }
            }]),
            t
        }(h)
          , w = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "squareAnnotation";
                    var e = this.data
                      , t = e.rect[2] - e.rect[0]
                      , r = e.rect[3] - e.rect[1]
                      , n = this.svgFactory.create(t, r)
                      , i = e.borderStyle.width
                      , a = this.svgFactory.createElement("svg:rect");
                    return a.setAttribute("x", i / 2),
                    a.setAttribute("y", i / 2),
                    a.setAttribute("width", t - i),
                    a.setAttribute("height", r - i),
                    a.setAttribute("stroke-width", i),
                    a.setAttribute("stroke", "transparent"),
                    a.setAttribute("fill", "none"),
                    n.appendChild(a),
                    this.container.append(n),
                    this._createPopup(this.container, a, e),
                    this.container
                }
            }]),
            t
        }(h)
          , C = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "circleAnnotation";
                    var e = this.data
                      , t = e.rect[2] - e.rect[0]
                      , r = e.rect[3] - e.rect[1]
                      , n = this.svgFactory.create(t, r)
                      , i = e.borderStyle.width
                      , a = this.svgFactory.createElement("svg:ellipse");
                    return a.setAttribute("cx", t / 2),
                    a.setAttribute("cy", r / 2),
                    a.setAttribute("rx", t / 2 - i / 2),
                    a.setAttribute("ry", r / 2 - i / 2),
                    a.setAttribute("stroke-width", i),
                    a.setAttribute("stroke", "transparent"),
                    a.setAttribute("fill", "none"),
                    n.appendChild(a),
                    this.container.append(n),
                    this._createPopup(this.container, a, e),
                    this.container
                }
            }]),
            t
        }(h)
          , P = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents)
                  , i = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0));
                return i.containerClassName = "polylineAnnotation",
                i.svgElementName = "svg:polyline",
                i
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = this.containerClassName;
                    for (var e = this.data, t = e.rect[2] - e.rect[0], r = e.rect[3] - e.rect[1], n = this.svgFactory.create(t, r), i = e.vertices, a = [], o = 0, s = i.length; s > o; o++) {
                        var u = i[o].x - e.rect[0]
                          , l = e.rect[3] - i[o].y;
                        a.push(u + "," + l)
                    }
                    a = a.join(" ");
                    var c = e.borderStyle.width
                      , h = this.svgFactory.createElement(this.svgElementName);
                    return h.setAttribute("points", a),
                    h.setAttribute("stroke-width", c),
                    h.setAttribute("stroke", "transparent"),
                    h.setAttribute("fill", "none"),
                    n.appendChild(h),
                    this.container.append(n),
                    this._createPopup(this.container, h, e),
                    this.container
                }
            }]),
            t
        }(h)
          , k = function(e) {
            function t(e) {
                a(this, t);
                var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                return r.containerClassName = "polygonAnnotation",
                r.svgElementName = "svg:polygon",
                r
            }
            return i(t, e),
            t
        }(P)
          , R = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    return this.container.className = "highlightAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }]),
            t
        }(h)
          , x = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    return this.container.className = "underlineAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }]),
            t
        }(h)
          , T = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    return this.container.className = "squigglyAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }]),
            t
        }(h)
          , E = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    return this.container.className = "strikeoutAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }]),
            t
        }(h)
          , O = function(e) {
            function t(e) {
                a(this, t);
                var r = !!(e.data.hasPopup || e.data.title || e.data.contents);
                return n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, r, !0))
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    return this.container.className = "stampAnnotation",
                    this.data.hasPopup || this._createPopup(this.container, null, this.data),
                    this.container
                }
            }]),
            t
        }(h)
          , j = function(e) {
            function t(e) {
                a(this, t);
                var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, !0))
                  , i = r.data.file;
                return r.filename = u.getFilenameFromUrl(i.filename),
                r.content = i.content,
                r.linkService.onFileAttachmentAnnotation({
                    id: l.stringToPDFString(i.filename),
                    filename: i.filename,
                    content: i.content
                }),
                r
            }
            return i(t, e),
            s(t, [{
                key: "render",
                value: function() {
                    this.container.className = "fileAttachmentAnnotation";
                    var e = document.createElement("div");
                    return e.style.height = this.container.style.height,
                    e.style.width = this.container.style.width,
                    e.addEventListener("dblclick", this._download.bind(this)),
                    this.data.hasPopup || !this.data.title && !this.data.contents || this._createPopup(this.container, e, this.data),
                    this.container.appendChild(e),
                    this.container
                }
            }, {
                key: "_download",
                value: function() {
                    return this.downloadManager ? void this.downloadManager.downloadData(this.content, this.filename, "") : void l.warn("Download cannot be started due to unavailable download manager")
                }
            }]),
            t
        }(h)
          , I = function() {
            function e() {
                a(this, e)
            }
            return s(e, null, [{
                key: "render",
                value: function(e) {
                    for (var t = 0, r = e.annotations.length; r > t; t++) {
                        var n = e.annotations[t];
                        if (n) {
                            var i = c.create({
                                data: n,
                                layer: e.div,
                                page: e.page,
                                viewport: e.viewport,
                                linkService: e.linkService,
                                downloadManager: e.downloadManager,
                                imageResourcesPath: e.imageResourcesPath || "",
                                renderInteractiveForms: e.renderInteractiveForms || !1,
                                svgFactory: new u.DOMSVGFactory
                            });
                            i.isRenderable && e.div.appendChild(i.render())
                        }
                    }
                }
            }, {
                key: "update",
                value: function(e) {
                    for (var t = 0, r = e.annotations.length; r > t; t++) {
                        var n = e.annotations[t]
                          , i = e.div.querySelector('[data-annotation-id="' + n.id + '"]');
                        i && (i.style.transform = "matrix(" + e.viewport.transform.join(",") + ")")
                    }
                    e.div.removeAttribute("hidden")
                }
            }]),
            e
        }();
        t.AnnotationLayer = I
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.SVGGraphics = void 0;
        var i = r(0)
          , a = r(24)
          , o = r(25)
          , s = n(o)
          , u = function() {
            throw new Error("Not implemented: SVGGraphics")
        }
          , l = {
            fontStyle: "normal",
            fontWeight: "normal",
            fillColor: "#000000"
        }
          , c = function() {
            function e(e, t, r) {
                for (var n = -1, i = t; r > i; i++) {
                    var a = 255 & (n ^ e[i])
                      , o = c[a];
                    n = n >>> 8 ^ o
                }
                return -1 ^ n
            }
            function t(t, r, n, i) {
                var a = i
                  , o = r.length;
                n[a] = o >> 24 & 255,
                n[a + 1] = o >> 16 & 255,
                n[a + 2] = o >> 8 & 255,
                n[a + 3] = 255 & o,
                a += 4,
                n[a] = 255 & t.charCodeAt(0),
                n[a + 1] = 255 & t.charCodeAt(1),
                n[a + 2] = 255 & t.charCodeAt(2),
                n[a + 3] = 255 & t.charCodeAt(3),
                a += 4,
                n.set(r, a),
                a += r.length;
                var s = e(n, i + 4, a);
                n[a] = s >> 24 & 255,
                n[a + 1] = s >> 16 & 255,
                n[a + 2] = s >> 8 & 255,
                n[a + 3] = 255 & s
            }
            function r(e, t, r) {
                for (var n = 1, i = 0, a = t; r > a; ++a)
                    n = (n + (255 & e[a])) % 65521,
                    i = (i + n) % 65521;
                return i << 16 | n
            }
            function n(e) {
                if (!s.default())
                    return a(e);
                try {
                    var t;
                    t = parseInt(process.versions.node) >= 8 ? e : new Buffer(e);
                    var r = require("zlib").deflateSync(t, {
                        level: 9
                    });
                    return r instanceof Uint8Array ? r : new Uint8Array(r)
                } catch (n) {
                    i.warn("Not compressing PNG because zlib.deflateSync is unavailable: " + n)
                }
                return a(e)
            }
            function a(e) {
                var t = e.length
                  , n = 65535
                  , i = Math.ceil(t / n)
                  , a = new Uint8Array(2 + t + 5 * i + 4)
                  , o = 0;
                a[o++] = 120,
                a[o++] = 156;
                for (var s = 0; t > n; )
                    a[o++] = 0,
                    a[o++] = 255,
                    a[o++] = 255,
                    a[o++] = 0,
                    a[o++] = 0,
                    a.set(e.subarray(s, s + n), o),
                    o += n,
                    s += n,
                    t -= n;
                a[o++] = 1,
                a[o++] = 255 & t,
                a[o++] = t >> 8 & 255,
                a[o++] = 65535 & ~t & 255,
                a[o++] = (65535 & ~t) >> 8 & 255,
                a.set(e.subarray(s), o),
                o += e.length - s;
                var u = r(e, 0, e.length);
                return a[o++] = u >> 24 & 255,
                a[o++] = u >> 16 & 255,
                a[o++] = u >> 8 & 255,
                a[o++] = 255 & u,
                a
            }
            function o(e, r, a, o) {
                var s, c, h, d = e.width, f = e.height, p = e.data;
                switch (r) {
                case i.ImageKind.GRAYSCALE_1BPP:
                    c = 0,
                    s = 1,
                    h = d + 7 >> 3;
                    break;
                case i.ImageKind.RGB_24BPP:
                    c = 2,
                    s = 8,
                    h = 3 * d;
                    break;
                case i.ImageKind.RGBA_32BPP:
                    c = 6,
                    s = 8,
                    h = 4 * d;
                    break;
                default:
                    throw new Error("invalid format")
                }
                var m, v, g = new Uint8Array((1 + h) * f), b = 0, _ = 0;
                for (m = 0; f > m; ++m)
                    g[b++] = 0,
                    g.set(p.subarray(_, _ + h), b),
                    _ += h,
                    b += h;
                if (r === i.ImageKind.GRAYSCALE_1BPP && o)
                    for (b = 0,
                    m = 0; f > m; m++)
                        for (b++,
                        v = 0; h > v; v++)
                            g[b++] ^= 255;
                var y = new Uint8Array([d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, 255 & d, f >> 24 & 255, f >> 16 & 255, f >> 8 & 255, 255 & f, s, c, 0, 0, 0])
                  , A = n(g)
                  , S = u.length + 3 * l + y.length + A.length
                  , w = new Uint8Array(S)
                  , C = 0;
                return w.set(u, C),
                C += u.length,
                t("IHDR", y, w, C),
                C += l + y.length,
                t("IDATA", A, w, C),
                C += l + A.length,
                t("IEND", new Uint8Array(0), w, C),
                i.createObjectURL(w, "image/png", a)
            }
            for (var u = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), l = 12, c = new Int32Array(256), h = 0; 256 > h; h++) {
                for (var d = h, f = 0; 8 > f; f++)
                    d = 1 & d ? 3988292384 ^ d >> 1 & 2147483647 : d >> 1 & 2147483647;
                c[h] = d
            }
            return function(e, t, r) {
                var n = void 0 === e.kind ? i.ImageKind.GRAYSCALE_1BPP : e.kind;
                return o(e, n, t, r)
            }
        }()
          , h = function() {
            function e() {
                this.fontSizeScale = 1,
                this.fontWeight = l.fontWeight,
                this.fontSize = 0,
                this.textMatrix = i.IDENTITY_MATRIX,
                this.fontMatrix = i.FONT_IDENTITY_MATRIX,
                this.leading = 0,
                this.x = 0,
                this.y = 0,
                this.lineX = 0,
                this.lineY = 0,
                this.charSpacing = 0,
                this.wordSpacing = 0,
                this.textHScale = 1,
                this.textRise = 0,
                this.fillColor = l.fillColor,
                this.strokeColor = "#000000",
                this.fillAlpha = 1,
                this.strokeAlpha = 1,
                this.lineWidth = 1,
                this.lineJoin = "",
                this.lineCap = "",
                this.miterLimit = 0,
                this.dashArray = [],
                this.dashPhase = 0,
                this.dependencies = [],
                this.activeClipUrl = null,
                this.clipGroup = null,
                this.maskId = ""
            }
            return e.prototype = {
                clone: function() {
                    return Object.create(this)
                },
                setCurrentPoint: function(e, t) {
                    this.x = e,
                    this.y = t
                }
            },
            e
        }();
        t.SVGGraphics = u = function() {
            function e(e) {
                for (var t = [], r = [], n = e.length, i = 0; n > i; i++)
                    "save" !== e[i].fn ? "restore" === e[i].fn ? t = r.pop() : t.push(e[i]) : (t.push({
                        fnId: 92,
                        fn: "group",
                        items: []
                    }),
                    r.push(t),
                    t = t[t.length - 1].items);
                return t
            }
            function t(e) {
                if (Number.isInteger(e))
                    return e.toString();
                var t = e.toFixed(10)
                  , r = t.length - 1;
                if ("0" !== t[r])
                    return t;
                do
                    r--;
                while ("0" === t[r]);return t.substr(0, "." === t[r] ? r : r + 1)
            }
            function r(e) {
                if (0 === e[4] && 0 === e[5]) {
                    if (0 === e[1] && 0 === e[2])
                        return 1 === e[0] && 1 === e[3] ? "" : "scale(" + t(e[0]) + " " + t(e[3]) + ")";
                    if (e[0] === e[3] && e[1] === -e[2]) {
                        var r = 180 * Math.acos(e[0]) / Math.PI;
                        return "rotate(" + t(r) + ")"
                    }
                } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3])
                    return "translate(" + t(e[4]) + " " + t(e[5]) + ")";
                return "matrix(" + t(e[0]) + " " + t(e[1]) + " " + t(e[2]) + " " + t(e[3]) + " " + t(e[4]) + " " + t(e[5]) + ")"
            }
            function n(e, t, r) {
                this.svgFactory = new a.DOMSVGFactory,
                this.current = new h,
                this.transformMatrix = i.IDENTITY_MATRIX,
                this.transformStack = [],
                this.extraStack = [],
                this.commonObjs = e,
                this.objs = t,
                this.pendingClip = null,
                this.pendingEOFill = !1,
                this.embedFonts = !1,
                this.embeddedFonts = Object.create(null),
                this.cssStyle = null,
                this.forceDataSchema = !!r
            }
            var o = "http://www.w3.org/XML/1998/namespace"
              , s = "http://www.w3.org/1999/xlink"
              , u = ["butt", "round", "square"]
              , d = ["miter", "round", "bevel"]
              , f = 0
              , p = 0;
            return n.prototype = {
                save: function() {
                    this.transformStack.push(this.transformMatrix);
                    var e = this.current;
                    this.extraStack.push(e),
                    this.current = e.clone()
                },
                restore: function() {
                    this.transformMatrix = this.transformStack.pop(),
                    this.current = this.extraStack.pop(),
                    this.pendingClip = null,
                    this.tgrp = null
                },
                group: function(e) {
                    this.save(),
                    this.executeOpTree(e),
                    this.restore()
                },
                loadDependencies: function(e) {
                    for (var t = this, r = e.fnArray, n = r.length, a = e.argsArray, o = 0; n > o; o++)
                        if (i.OPS.dependency === r[o])
                            for (var s = a[o], u = 0, l = s.length; l > u; u++) {
                                var c, h = s[u], d = "g_" === h.substring(0, 2);
                                c = new Promise(d ? function(e) {
                                    t.commonObjs.get(h, e)
                                }
                                : function(e) {
                                    t.objs.get(h, e)
                                }
                                ),
                                this.current.dependencies.push(c)
                            }
                    return Promise.all(this.current.dependencies)
                },
                transform: function(e, t, r, n, a, o) {
                    var s = [e, t, r, n, a, o];
                    this.transformMatrix = i.Util.transform(this.transformMatrix, s),
                    this.tgrp = null
                },
                getSVG: function(e, t) {
                    var r = this;
                    this.viewport = t;
                    var n = this._initialize(t);
                    return this.loadDependencies(e).then(function() {
                        r.transformMatrix = i.IDENTITY_MATRIX;
                        var t = r.convertOpList(e);
                        return r.executeOpTree(t),
                        n
                    })
                },
                convertOpList: function(t) {
                    var r = t.argsArray
                      , n = t.fnArray
                      , a = n.length
                      , o = []
                      , s = [];
                    for (var u in i.OPS)
                        o[i.OPS[u]] = u;
                    for (var l = 0; a > l; l++) {
                        var c = n[l];
                        s.push({
                            fnId: c,
                            fn: o[c],
                            args: r[l]
                        })
                    }
                    return e(s)
                },
                executeOpTree: function(e) {
                    for (var t = e.length, r = 0; t > r; r++) {
                        var n = e[r].fn
                          , a = e[r].fnId
                          , o = e[r].args;
                        switch (0 | a) {
                        case i.OPS.beginText:
                            this.beginText();
                            break;
                        case i.OPS.dependency:
                            break;
                        case i.OPS.setLeading:
                            this.setLeading(o);
                            break;
                        case i.OPS.setLeadingMoveText:
                            this.setLeadingMoveText(o[0], o[1]);
                            break;
                        case i.OPS.setFont:
                            this.setFont(o);
                            break;
                        case i.OPS.showText:
                            this.showText(o[0]);
                            break;
                        case i.OPS.showSpacedText:
                            this.showText(o[0]);
                            break;
                        case i.OPS.endText:
                            this.endText();
                            break;
                        case i.OPS.moveText:
                            this.moveText(o[0], o[1]);
                            break;
                        case i.OPS.setCharSpacing:
                            this.setCharSpacing(o[0]);
                            break;
                        case i.OPS.setWordSpacing:
                            this.setWordSpacing(o[0]);
                            break;
                        case i.OPS.setHScale:
                            this.setHScale(o[0]);
                            break;
                        case i.OPS.setTextMatrix:
                            this.setTextMatrix(o[0], o[1], o[2], o[3], o[4], o[5]);
                            break;
                        case i.OPS.setTextRise:
                            this.setTextRise(o[0]);
                            break;
                        case i.OPS.setLineWidth:
                            this.setLineWidth(o[0]);
                            break;
                        case i.OPS.setLineJoin:
                            this.setLineJoin(o[0]);
                            break;
                        case i.OPS.setLineCap:
                            this.setLineCap(o[0]);
                            break;
                        case i.OPS.setMiterLimit:
                            this.setMiterLimit(o[0]);
                            break;
                        case i.OPS.setFillRGBColor:
                            this.setFillRGBColor(o[0], o[1], o[2]);
                            break;
                        case i.OPS.setStrokeRGBColor:
                            this.setStrokeRGBColor(o[0], o[1], o[2]);
                            break;
                        case i.OPS.setDash:
                            this.setDash(o[0], o[1]);
                            break;
                        case i.OPS.setGState:
                            this.setGState(o[0]);
                            break;
                        case i.OPS.fill:
                            this.fill();
                            break;
                        case i.OPS.eoFill:
                            this.eoFill();
                            break;
                        case i.OPS.stroke:
                            this.stroke();
                            break;
                        case i.OPS.fillStroke:
                            this.fillStroke();
                            break;
                        case i.OPS.eoFillStroke:
                            this.eoFillStroke();
                            break;
                        case i.OPS.clip:
                            this.clip("nonzero");
                            break;
                        case i.OPS.eoClip:
                            this.clip("evenodd");
                            break;
                        case i.OPS.paintSolidColorImageMask:
                            this.paintSolidColorImageMask();
                            break;
                        case i.OPS.paintJpegXObject:
                            this.paintJpegXObject(o[0], o[1], o[2]);
                            break;
                        case i.OPS.paintImageXObject:
                            this.paintImageXObject(o[0]);
                            break;
                        case i.OPS.paintInlineImageXObject:
                            this.paintInlineImageXObject(o[0]);
                            break;
                        case i.OPS.paintImageMaskXObject:
                            this.paintImageMaskXObject(o[0]);
                            break;
                        case i.OPS.paintFormXObjectBegin:
                            this.paintFormXObjectBegin(o[0], o[1]);
                            break;
                        case i.OPS.paintFormXObjectEnd:
                            this.paintFormXObjectEnd();
                            break;
                        case i.OPS.closePath:
                            this.closePath();
                            break;
                        case i.OPS.closeStroke:
                            this.closeStroke();
                            break;
                        case i.OPS.closeFillStroke:
                            this.closeFillStroke();
                            break;
                        case i.OPS.closeEOFillStroke:
                            this.closeEOFillStroke();
                            break;
                        case i.OPS.nextLine:
                            this.nextLine();
                            break;
                        case i.OPS.transform:
                            this.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                            break;
                        case i.OPS.constructPath:
                            this.constructPath(o[0], o[1]);
                            break;
                        case i.OPS.endPath:
                            this.endPath();
                            break;
                        case 92:
                            this.group(e[r].items);
                            break;
                        default:
                            i.warn("Unimplemented operator " + n)
                        }
                    }
                },
                setWordSpacing: function(e) {
                    this.current.wordSpacing = e
                },
                setCharSpacing: function(e) {
                    this.current.charSpacing = e
                },
                nextLine: function() {
                    this.moveText(0, this.current.leading)
                },
                setTextMatrix: function(e, r, n, i, a, o) {
                    var s = this.current;
                    this.current.textMatrix = this.current.lineMatrix = [e, r, n, i, a, o],
                    this.current.x = this.current.lineX = 0,
                    this.current.y = this.current.lineY = 0,
                    s.xcoords = [],
                    s.tspan = this.svgFactory.createElement("svg:tspan"),
                    s.tspan.setAttributeNS(null, "font-family", s.fontFamily),
                    s.tspan.setAttributeNS(null, "font-size", t(s.fontSize) + "px"),
                    s.tspan.setAttributeNS(null, "y", t(-s.y)),
                    s.txtElement = this.svgFactory.createElement("svg:text"),
                    s.txtElement.appendChild(s.tspan)
                },
                beginText: function() {
                    this.current.x = this.current.lineX = 0,
                    this.current.y = this.current.lineY = 0,
                    this.current.textMatrix = i.IDENTITY_MATRIX,
                    this.current.lineMatrix = i.IDENTITY_MATRIX,
                    this.current.tspan = this.svgFactory.createElement("svg:tspan"),
                    this.current.txtElement = this.svgFactory.createElement("svg:text"),
                    this.current.txtgrp = this.svgFactory.createElement("svg:g"),
                    this.current.xcoords = []
                },
                moveText: function(e, r) {
                    var n = this.current;
                    this.current.x = this.current.lineX += e,
                    this.current.y = this.current.lineY += r,
                    n.xcoords = [],
                    n.tspan = this.svgFactory.createElement("svg:tspan"),
                    n.tspan.setAttributeNS(null, "font-family", n.fontFamily),
                    n.tspan.setAttributeNS(null, "font-size", t(n.fontSize) + "px"),
                    n.tspan.setAttributeNS(null, "y", t(-n.y))
                },
                showText: function(e) {
                    var n = this.current
                      , a = n.font
                      , s = n.fontSize;
                    if (0 !== s) {
                        var u, c = n.charSpacing, h = n.wordSpacing, d = n.fontDirection, f = n.textHScale * d, p = e.length, m = a.vertical, v = s * n.fontMatrix[0], g = 0;
                        for (u = 0; p > u; ++u) {
                            var b = e[u];
                            if (null !== b)
                                if (i.isNum(b))
                                    g += -b * s * .001;
                                else {
                                    var _ = b.width
                                      , y = b.fontChar
                                      , A = (b.isSpace ? h : 0) + c
                                      , S = _ * v + A * d;
                                    b.isInFont || a.missingFile ? (n.xcoords.push(n.x + g * f),
                                    n.tspan.textContent += y,
                                    g += S) : g += S
                                }
                            else
                                g += d * h
                        }
                        m ? n.y -= g * f : n.x += g * f,
                        n.tspan.setAttributeNS(null, "x", n.xcoords.map(t).join(" ")),
                        n.tspan.setAttributeNS(null, "y", t(-n.y)),
                        n.tspan.setAttributeNS(null, "font-family", n.fontFamily),
                        n.tspan.setAttributeNS(null, "font-size", t(n.fontSize) + "px"),
                        n.fontStyle !== l.fontStyle && n.tspan.setAttributeNS(null, "font-style", n.fontStyle),
                        n.fontWeight !== l.fontWeight && n.tspan.setAttributeNS(null, "font-weight", n.fontWeight),
                        n.fillColor !== l.fillColor && n.tspan.setAttributeNS(null, "fill", n.fillColor);
                        var w = n.textMatrix;
                        0 !== n.textRise && (w = w.slice(),
                        w[5] += n.textRise),
                        n.txtElement.setAttributeNS(null, "transform", r(w) + " scale(1, -1)"),
                        n.txtElement.setAttributeNS(o, "xml:space", "preserve"),
                        n.txtElement.appendChild(n.tspan),
                        n.txtgrp.appendChild(n.txtElement),
                        this._ensureTransformGroup().appendChild(n.txtElement)
                    }
                },
                setLeadingMoveText: function(e, t) {
                    this.setLeading(-t),
                    this.moveText(e, t)
                },
                addFontStyle: function(e) {
                    this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"),
                    this.cssStyle.setAttributeNS(null, "type", "text/css"),
                    this.defs.appendChild(this.cssStyle));
                    var t = i.createObjectURL(e.data, e.mimetype, this.forceDataSchema);
                    this.cssStyle.textContent += '@font-face { font-family: "' + e.loadedName + '"; src: url(' + t + "); }\n"
                },
                setFont: function(e) {
                    var r = this.current
                      , n = this.commonObjs.get(e[0])
                      , a = e[1];
                    this.current.font = n,
                    this.embedFonts && n.data && !this.embeddedFonts[n.loadedName] && (this.addFontStyle(n),
                    this.embeddedFonts[n.loadedName] = n),
                    r.fontMatrix = n.fontMatrix ? n.fontMatrix : i.FONT_IDENTITY_MATRIX;
                    var o = n.black ? n.bold ? "bolder" : "bold" : n.bold ? "bold" : "normal"
                      , s = n.italic ? "italic" : "normal";
                    0 > a ? (a = -a,
                    r.fontDirection = -1) : r.fontDirection = 1,
                    r.fontSize = a,
                    r.fontFamily = n.loadedName,
                    r.fontWeight = o,
                    r.fontStyle = s,
                    r.tspan = this.svgFactory.createElement("svg:tspan"),
                    r.tspan.setAttributeNS(null, "y", t(-r.y)),
                    r.xcoords = []
                },
                endText: function() {},
                setLineWidth: function(e) {
                    this.current.lineWidth = e
                },
                setLineCap: function(e) {
                    this.current.lineCap = u[e]
                },
                setLineJoin: function(e) {
                    this.current.lineJoin = d[e]
                },
                setMiterLimit: function(e) {
                    this.current.miterLimit = e
                },
                setStrokeAlpha: function(e) {
                    this.current.strokeAlpha = e
                },
                setStrokeRGBColor: function(e, t, r) {
                    var n = i.Util.makeCssRgb(e, t, r);
                    this.current.strokeColor = n
                },
                setFillAlpha: function(e) {
                    this.current.fillAlpha = e
                },
                setFillRGBColor: function(e, t, r) {
                    var n = i.Util.makeCssRgb(e, t, r);
                    this.current.fillColor = n,
                    this.current.tspan = this.svgFactory.createElement("svg:tspan"),
                    this.current.xcoords = []
                },
                setDash: function(e, t) {
                    this.current.dashArray = e,
                    this.current.dashPhase = t
                },
                constructPath: function(e, r) {
                    var n = this.current
                      , a = n.x
                      , o = n.y;
                    n.path = this.svgFactory.createElement("svg:path");
                    for (var s = [], u = e.length, l = 0, c = 0; u > l; l++)
                        switch (0 | e[l]) {
                        case i.OPS.rectangle:
                            a = r[c++],
                            o = r[c++];
                            var h = r[c++]
                              , d = r[c++]
                              , f = a + h
                              , p = o + d;
                            s.push("M", t(a), t(o), "L", t(f), t(o), "L", t(f), t(p), "L", t(a), t(p), "Z");
                            break;
                        case i.OPS.moveTo:
                            a = r[c++],
                            o = r[c++],
                            s.push("M", t(a), t(o));
                            break;
                        case i.OPS.lineTo:
                            a = r[c++],
                            o = r[c++],
                            s.push("L", t(a), t(o));
                            break;
                        case i.OPS.curveTo:
                            a = r[c + 4],
                            o = r[c + 5],
                            s.push("C", t(r[c]), t(r[c + 1]), t(r[c + 2]), t(r[c + 3]), t(a), t(o)),
                            c += 6;
                            break;
                        case i.OPS.curveTo2:
                            a = r[c + 2],
                            o = r[c + 3],
                            s.push("C", t(a), t(o), t(r[c]), t(r[c + 1]), t(r[c + 2]), t(r[c + 3])),
                            c += 4;
                            break;
                        case i.OPS.curveTo3:
                            a = r[c + 2],
                            o = r[c + 3],
                            s.push("C", t(r[c]), t(r[c + 1]), t(a), t(o), t(a), t(o)),
                            c += 4;
                            break;
                        case i.OPS.closePath:
                            s.push("Z")
                        }
                    n.path.setAttributeNS(null, "d", s.join(" ")),
                    n.path.setAttributeNS(null, "fill", "none"),
                    this._ensureTransformGroup().appendChild(n.path),
                    n.element = n.path,
                    n.setCurrentPoint(a, o)
                },
                endPath: function() {
                    if (this.pendingClip) {
                        var e = this.current
                          , t = "clippath" + f;
                        f++;
                        var n = this.svgFactory.createElement("svg:clipPath");
                        n.setAttributeNS(null, "id", t),
                        n.setAttributeNS(null, "transform", r(this.transformMatrix));
                        var i = e.element.cloneNode();
                        "evenodd" === this.pendingClip ? i.setAttributeNS(null, "clip-rule", "evenodd") : i.setAttributeNS(null, "clip-rule", "nonzero"),
                        this.pendingClip = null,
                        n.appendChild(i),
                        this.defs.appendChild(n),
                        e.activeClipUrl && (e.clipGroup = null,
                        this.extraStack.forEach(function(e) {
                            e.clipGroup = null
                        }),
                        n.setAttributeNS(null, "clip-path", e.activeClipUrl)),
                        e.activeClipUrl = "url(#" + t + ")",
                        this.tgrp = null
                    }
                },
                clip: function(e) {
                    this.pendingClip = e
                },
                closePath: function() {
                    var e = this.current;
                    if (e.path) {
                        var t = e.path.getAttributeNS(null, "d");
                        t += "Z",
                        e.path.setAttributeNS(null, "d", t)
                    }
                },
                setLeading: function(e) {
                    this.current.leading = -e
                },
                setTextRise: function(e) {
                    this.current.textRise = e
                },
                setHScale: function(e) {
                    this.current.textHScale = e / 100
                },
                setGState: function(e) {
                    for (var t = 0, r = e.length; r > t; t++) {
                        var n = e[t]
                          , a = n[0]
                          , o = n[1];
                        switch (a) {
                        case "LW":
                            this.setLineWidth(o);
                            break;
                        case "LC":
                            this.setLineCap(o);
                            break;
                        case "LJ":
                            this.setLineJoin(o);
                            break;
                        case "ML":
                            this.setMiterLimit(o);
                            break;
                        case "D":
                            this.setDash(o[0], o[1]);
                            break;
                        case "Font":
                            this.setFont(o);
                            break;
                        case "CA":
                            this.setStrokeAlpha(o);
                            break;
                        case "ca":
                            this.setFillAlpha(o);
                            break;
                        default:
                            i.warn("Unimplemented graphic state " + a)
                        }
                    }
                },
                fill: function() {
                    var e = this.current;
                    e.element && (e.element.setAttributeNS(null, "fill", e.fillColor),
                    e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha),
                    this.endPath())
                },
                stroke: function() {
                    var e = this.current;
                    e.element && (e.element.setAttributeNS(null, "stroke", e.strokeColor),
                    e.element.setAttributeNS(null, "stroke-opacity", e.strokeAlpha),
                    e.element.setAttributeNS(null, "stroke-miterlimit", t(e.miterLimit)),
                    e.element.setAttributeNS(null, "stroke-linecap", e.lineCap),
                    e.element.setAttributeNS(null, "stroke-linejoin", e.lineJoin),
                    e.element.setAttributeNS(null, "stroke-width", t(e.lineWidth) + "px"),
                    e.element.setAttributeNS(null, "stroke-dasharray", e.dashArray.map(t).join(" ")),
                    e.element.setAttributeNS(null, "stroke-dashoffset", t(e.dashPhase) + "px"),
                    e.element.setAttributeNS(null, "fill", "none"),
                    this.endPath())
                },
                eoFill: function() {
                    this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd"),
                    this.fill()
                },
                fillStroke: function() {
                    this.stroke(),
                    this.fill()
                },
                eoFillStroke: function() {
                    this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd"),
                    this.fillStroke()
                },
                closeStroke: function() {
                    this.closePath(),
                    this.stroke()
                },
                closeFillStroke: function() {
                    this.closePath(),
                    this.fillStroke()
                },
                closeEOFillStroke: function() {
                    this.closePath(),
                    this.eoFillStroke()
                },
                paintSolidColorImageMask: function() {
                    var e = this.current
                      , t = this.svgFactory.createElement("svg:rect");
                    t.setAttributeNS(null, "x", "0"),
                    t.setAttributeNS(null, "y", "0"),
                    t.setAttributeNS(null, "width", "1px"),
                    t.setAttributeNS(null, "height", "1px"),
                    t.setAttributeNS(null, "fill", e.fillColor),
                    this._ensureTransformGroup().appendChild(t)
                },
                paintJpegXObject: function(e, r, n) {
                    var i = this.objs.get(e)
                      , a = this.svgFactory.createElement("svg:image");
                    a.setAttributeNS(s, "xlink:href", i.src),
                    a.setAttributeNS(null, "width", t(r)),
                    a.setAttributeNS(null, "height", t(n)),
                    a.setAttributeNS(null, "x", "0"),
                    a.setAttributeNS(null, "y", t(-n)),
                    a.setAttributeNS(null, "transform", "scale(" + t(1 / r) + " " + t(-1 / n) + ")"),
                    this._ensureTransformGroup().appendChild(a)
                },
                paintImageXObject: function(e) {
                    var t = this.objs.get(e);
                    return t ? void this.paintInlineImageXObject(t) : void i.warn("Dependent image isn't ready yet")
                },
                paintInlineImageXObject: function(e, r) {
                    var n = e.width
                      , i = e.height
                      , a = c(e, this.forceDataSchema, !!r)
                      , o = this.svgFactory.createElement("svg:rect");
                    o.setAttributeNS(null, "x", "0"),
                    o.setAttributeNS(null, "y", "0"),
                    o.setAttributeNS(null, "width", t(n)),
                    o.setAttributeNS(null, "height", t(i)),
                    this.current.element = o,
                    this.clip("nonzero");
                    var u = this.svgFactory.createElement("svg:image");
                    u.setAttributeNS(s, "xlink:href", a),
                    u.setAttributeNS(null, "x", "0"),
                    u.setAttributeNS(null, "y", t(-i)),
                    u.setAttributeNS(null, "width", t(n) + "px"),
                    u.setAttributeNS(null, "height", t(i) + "px"),
                    u.setAttributeNS(null, "transform", "scale(" + t(1 / n) + " " + t(-1 / i) + ")"),
                    r ? r.appendChild(u) : this._ensureTransformGroup().appendChild(u)
                },
                paintImageMaskXObject: function(e) {
                    var r = this.current
                      , n = e.width
                      , i = e.height
                      , a = r.fillColor;
                    r.maskId = "mask" + p++;
                    var o = this.svgFactory.createElement("svg:mask");
                    o.setAttributeNS(null, "id", r.maskId);
                    var s = this.svgFactory.createElement("svg:rect");
                    s.setAttributeNS(null, "x", "0"),
                    s.setAttributeNS(null, "y", "0"),
                    s.setAttributeNS(null, "width", t(n)),
                    s.setAttributeNS(null, "height", t(i)),
                    s.setAttributeNS(null, "fill", a),
                    s.setAttributeNS(null, "mask", "url(#" + r.maskId + ")"),
                    this.defs.appendChild(o),
                    this._ensureTransformGroup().appendChild(s),
                    this.paintInlineImageXObject(e, o)
                },
                paintFormXObjectBegin: function(e, r) {
                    if (Array.isArray(e) && 6 === e.length && this.transform(e[0], e[1], e[2], e[3], e[4], e[5]),
                    Array.isArray(r) && 4 === r.length) {
                        var n = r[2] - r[0]
                          , i = r[3] - r[1]
                          , a = this.svgFactory.createElement("svg:rect");
                        a.setAttributeNS(null, "x", r[0]),
                        a.setAttributeNS(null, "y", r[1]),
                        a.setAttributeNS(null, "width", t(n)),
                        a.setAttributeNS(null, "height", t(i)),
                        this.current.element = a,
                        this.clip("nonzero"),
                        this.endPath()
                    }
                },
                paintFormXObjectEnd: function() {},
                _initialize: function(e) {
                    var t = this.svgFactory.create(e.width, e.height)
                      , n = this.svgFactory.createElement("svg:defs");
                    t.appendChild(n),
                    this.defs = n;
                    var i = this.svgFactory.createElement("svg:g");
                    return i.setAttributeNS(null, "transform", r(e.transform)),
                    t.appendChild(i),
                    this.svg = i,
                    t
                },
                _ensureClipGroup: function() {
                    if (!this.current.clipGroup) {
                        var e = this.svgFactory.createElement("svg:g");
                        e.setAttributeNS(null, "clip-path", this.current.activeClipUrl),
                        this.svg.appendChild(e),
                        this.current.clipGroup = e
                    }
                    return this.current.clipGroup
                },
                _ensureTransformGroup: function() {
                    return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"),
                    this.tgrp.setAttributeNS(null, "transform", r(this.transformMatrix)),
                    this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)),
                    this.tgrp
                }
            },
            n
        }(),
        t.SVGGraphics = u
    }
    , function(e, t, r) {
        "use strict";
        function n(e, t) {
            if (!e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        function i(e, t) {
            if ("function" != typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }
        function a(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function o(e) {
            var t = p.parse(e);
            return "file:" === t.protocol || t.host ? t : /^[a-z]:[/\\]/i.test(e) ? p.parse("file:///" + e) : (t.host || (t.protocol = "file:"),
            t)
        }
        function s(e, t) {
            return {
                protocol: e.protocol,
                auth: e.auth,
                host: e.hostname,
                port: e.port,
                path: e.path,
                method: "GET",
                headers: t
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PDFNodeStream = void 0;
        var u = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r),
                n && e(t, n),
                t
            }
        }()
          , l = r(0)
          , c = r(39)
          , h = require("fs")
          , d = require("http")
          , f = require("https")
          , p = require("url")
          , m = /^file:\/\/\/[a-zA-Z]:\//
          , v = function() {
            function e(t) {
                a(this, e),
                this.source = t,
                this.url = o(t.url),
                this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol,
                this.isFsUrl = "file:" === this.url.protocol,
                this.httpHeaders = this.isHttp && t.httpHeaders || {},
                this._fullRequest = null,
                this._rangeRequestReaders = []
            }
            return u(e, [{
                key: "getFullReader",
                value: function() {
                    return l.assert(!this._fullRequest),
                    this._fullRequest = this.isFsUrl ? new A(this) : new _(this),
                    this._fullRequest
                }
            }, {
                key: "getRangeReader",
                value: function(e, t) {
                    var r = this.isFsUrl ? new S(this,e,t) : new y(this,e,t);
                    return this._rangeRequestReaders.push(r),
                    r
                }
            }, {
                key: "cancelAllRequests",
                value: function(e) {
                    this._fullRequest && this._fullRequest.cancel(e);
                    var t = this._rangeRequestReaders.slice(0);
                    t.forEach(function(t) {
                        t.cancel(e)
                    })
                }
            }]),
            e
        }()
          , g = function() {
            function e(t) {
                a(this, e),
                this._url = t.url,
                this._done = !1,
                this._errored = !1,
                this._reason = null,
                this.onProgress = null;
                var r = t.source;
                this._contentLength = r.length,
                this._loaded = 0,
                this._filename = null,
                this._disableRange = r.disableRange || !1,
                this._rangeChunkSize = r.rangeChunkSize,
                this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
                this._isStreamingSupported = !r.disableStream,
                this._isRangeSupported = !r.disableRange,
                this._readableStream = null,
                this._readCapability = l.createPromiseCapability(),
                this._headersCapability = l.createPromiseCapability()
            }
            return u(e, [{
                key: "read",
                value: function() {
                    var e = this;
                    return this._readCapability.promise.then(function() {
                        if (e._done)
                            return Promise.resolve({
                                value: void 0,
                                done: !0
                            });
                        if (e._errored)
                            return Promise.reject(e._reason);
                        var t = e._readableStream.read();
                        if (null === t)
                            return e._readCapability = l.createPromiseCapability(),
                            e.read();
                        e._loaded += t.length,
                        e.onProgress && e.onProgress({
                            loaded: e._loaded,
                            total: e._contentLength
                        });
                        var r = new Uint8Array(t).buffer;
                        return Promise.resolve({
                            value: r,
                            done: !1
                        })
                    })
                }
            }, {
                key: "cancel",
                value: function(e) {
                    return this._readableStream ? void this._readableStream.destroy(e) : void this._error(e)
                }
            }, {
                key: "_error",
                value: function(e) {
                    this._errored = !0,
                    this._reason = e,
                    this._readCapability.resolve()
                }
            }, {
                key: "_setReadableStream",
                value: function(e) {
                    var t = this;
                    this._readableStream = e,
                    e.on("readable", function() {
                        t._readCapability.resolve()
                    }),
                    e.on("end", function() {
                        e.destroy(),
                        t._done = !0,
                        t._readCapability.resolve()
                    }),
                    e.on("error", function(e) {
                        t._error(e)
                    }),
                    !this._isStreamingSupported && this._isRangeSupported && this._error(new l.AbortException("streaming is disabled")),
                    this._errored && this._readableStream.destroy(this._reason)
                }
            }, {
                key: "headersReady",
                get: function() {
                    return this._headersCapability.promise
                }
            }, {
                key: "filename",
                get: function() {
                    return this._filename
                }
            }, {
                key: "contentLength",
                get: function() {
                    return this._contentLength
                }
            }, {
                key: "isRangeSupported",
                get: function() {
                    return this._isRangeSupported
                }
            }, {
                key: "isStreamingSupported",
                get: function() {
                    return this._isStreamingSupported
                }
            }]),
            e
        }()
          , b = function() {
            function e(t) {
                a(this, e),
                this._url = t.url,
                this._done = !1,
                this._errored = !1,
                this._reason = null,
                this.onProgress = null,
                this._loaded = 0,
                this._readableStream = null,
                this._readCapability = l.createPromiseCapability();
                var r = t.source;
                this._isStreamingSupported = !r.disableStream
            }
            return u(e, [{
                key: "read",
                value: function() {
                    var e = this;
                    return this._readCapability.promise.then(function() {
                        if (e._done)
                            return Promise.resolve({
                                value: void 0,
                                done: !0
                            });
                        if (e._errored)
                            return Promise.reject(e._reason);
                        var t = e._readableStream.read();
                        if (null === t)
                            return e._readCapability = l.createPromiseCapability(),
                            e.read();
                        e._loaded += t.length,
                        e.onProgress && e.onProgress({
                            loaded: e._loaded
                        });
                        var r = new Uint8Array(t).buffer;
                        return Promise.resolve({
                            value: r,
                            done: !1
                        })
                    })
                }
            }, {
                key: "cancel",
                value: function(e) {
                    return this._readableStream ? void this._readableStream.destroy(e) : void this._error(e)
                }
            }, {
                key: "_error",
                value: function(e) {
                    this._errored = !0,
                    this._reason = e,
                    this._readCapability.resolve()
                }
            }, {
                key: "_setReadableStream",
                value: function(e) {
                    var t = this;
                    this._readableStream = e,
                    e.on("readable", function() {
                        t._readCapability.resolve()
                    }),
                    e.on("end", function() {
                        e.destroy(),
                        t._done = !0,
                        t._readCapability.resolve()
                    }),
                    e.on("error", function(e) {
                        t._error(e)
                    }),
                    this._errored && this._readableStream.destroy(this._reason)
                }
            }, {
                key: "isStreamingSupported",
                get: function() {
                    return this._isStreamingSupported
                }
            }]),
            e
        }()
          , _ = function(e) {
            function t(e) {
                a(this, t);
                var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                  , i = function(t) {
                    r._headersCapability.resolve(),
                    r._setReadableStream(t);
                    var n = function(e) {
                        return r._readableStream.headers[e.toLowerCase()]
                    }
                      , i = c.validateRangeRequestCapabilities({
                        getResponseHeader: n,
                        isHttp: e.isHttp,
                        rangeChunkSize: r._rangeChunkSize,
                        disableRange: r._disableRange
                    })
                      , a = i.allowRangeRequests
                      , o = i.suggestedLength;
                    r._isRangeSupported = a,
                    r._contentLength = o || r._contentLength,
                    r._filename = c.extractFilenameFromHeader(n)
                };
                return r._request = null,
                r._request = "http:" === r._url.protocol ? d.request(s(r._url, e.httpHeaders), i) : f.request(s(r._url, e.httpHeaders), i),
                r._request.on("error", function(e) {
                    r._errored = !0,
                    r._reason = e,
                    r._headersCapability.reject(e)
                }),
                r._request.end(),
                r
            }
            return i(t, e),
            t
        }(g)
          , y = function(e) {
            function t(e, r, i) {
                a(this, t);
                var o = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                o._httpHeaders = {};
                for (var u in e.httpHeaders) {
                    var l = e.httpHeaders[u];
                    "undefined" != typeof l && (o._httpHeaders[u] = l)
                }
                return o._httpHeaders.Range = "bytes=" + r + "-" + (i - 1),
                o._request = null,
                o._request = "http:" === o._url.protocol ? d.request(s(o._url, o._httpHeaders), function(e) {
                    o._setReadableStream(e)
                }) : f.request(s(o._url, o._httpHeaders), function(e) {
                    o._setReadableStream(e)
                }),
                o._request.on("error", function(e) {
                    o._errored = !0,
                    o._reason = e
                }),
                o._request.end(),
                o
            }
            return i(t, e),
            t
        }(b)
          , A = function(e) {
            function t(e) {
                a(this, t);
                var r = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                  , i = decodeURIComponent(r._url.path);
                return m.test(r._url.href) && (i = i.replace(/^\//, "")),
                h.lstat(i, function(e, t) {
                    return e ? (r._errored = !0,
                    r._reason = e,
                    void r._headersCapability.reject(e)) : (r._contentLength = t.size,
                    r._setReadableStream(h.createReadStream(i)),
                    void r._headersCapability.resolve())
                }),
                r
            }
            return i(t, e),
            t
        }(g)
          , S = function(e) {
            function t(e, r, i) {
                a(this, t);
                var o = n(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e))
                  , s = decodeURIComponent(o._url.path);
                return m.test(o._url.href) && (s = s.replace(/^\//, "")),
                o._setReadableStream(h.createReadStream(s, {
                    start: r,
                    end: i - 1
                })),
                o
            }
            return i(t, e),
            t
        }(b);
        t.PDFNodeStream = v
    }
    , function(e, t) {
        "use strict";
        function r(e) {
            function t(e, t) {
                return new RegExp("(?:^|;)\\s*" + e + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',t)
            }
            function r(e, t) {
                if (e) {
                    if (!/^[^\x00-\xFF]+$/.test(t))
                        return t;
                    try {
                        for (var r = new TextDecoder(e,{
                            fatal: !0
                        }), n = new Array(t.length), i = 0; i < t.length; ++i)
                            n[i] = t.charCodeAt(0);
                        t = r.decode(new Uint8Array(n)),
                        l = !1
                    } catch (a) {
                        /^utf-?8$/i.test(e) && (t = decodeURIComponent(escape(t)),
                        l = !1)
                    }
                }
                return t
            }
            function i(e) {
                return l && /[\x80-\xff]/.test(e) ? r("utf-8", e) : e
            }
            function a(e) {
                for (var r = [], i = void 0, a = t("filename\\*((?!0\\d)\\d+)(\\*?)", "ig"); null !== (i = a.exec(e)); ) {
                    var u = i
                      , l = n(u, 4)
                      , c = l[1]
                      , h = l[2]
                      , d = l[3];
                    if (c = parseInt(c, 10),
                    c in r) {
                        if (0 === c)
                            break
                    } else
                        r[c] = [h, d]
                }
                for (var f = [], p = 0; p < r.length && p in r; ++p) {
                    var m = n(r[p], 2)
                      , v = m[0]
                      , g = m[1];
                    g = o(g),
                    v && (g = unescape(g),
                    0 === p && (g = s(g))),
                    f.push(g)
                }
                return f.join("")
            }
            function o(e) {
                if ('"' === e.charAt(0)) {
                    for (var t = e.slice(1).split('\\"'), r = 0; r < t.length; ++r) {
                        var n = t[r].indexOf('"');
                        -1 !== n && (t[r] = t[r].slice(0, n),
                        t.length = r + 1),
                        t[r] = t[r].replace(/\\(.)/g, "$1")
                    }
                    e = t.join('"')
                }
                return e
            }
            function s(e) {
                var t = e.indexOf("'");
                if (-1 === t)
                    return e;
                var n = e.slice(0, t)
                  , i = e.slice(t + 1)
                  , a = i.replace(/^[^']*'/, "");
                return r(n, a)
            }
            function u(e) {
                return "=?" !== e.slice(0, 2) || /[\x00-\x19\x80-\xff]/.test(e) ? e : e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(e, t, n, i) {
                    if ("q" === n || "Q" === n)
                        return i = i.replace(/_/g, " "),
                        i = i.replace(/=([0-9a-fA-F]{2})/g, function(e, t) {
                            return String.fromCharCode(parseInt(t, 16))
                        }),
                        r(t, i);
                    try {
                        return atob(i)
                    } catch (a) {
                        return i
                    }
                })
            }
            var l = !0
              , c = t("filename\\*", "i").exec(e);
            if (c) {
                c = c[1];
                var h = o(c);
                return h = unescape(h),
                h = s(h),
                h = u(h),
                i(h)
            }
            if (c = a(e)) {
                var d = u(c);
                return i(d)
            }
            if (c = t("filename", "i").exec(e)) {
                c = c[1];
                var f = o(c);
                return f = u(f),
                i(f)
            }
            return ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e(e, t) {
                var r = []
                  , n = !0
                  , i = !1
                  , a = void 0;
                try {
                    for (var o, s = e[Symbol.iterator](); !(n = (o = s.next()).done) && (r.push(o.value),
                    !t || r.length !== t); n = !0)
                        ;
                } catch (u) {
                    i = !0,
                    a = u
                } finally {
                    try {
                        !n && s["return"] && s["return"]()
                    } finally {
                        if (i)
                            throw a
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.getFilenameFromContentDispositionHeader = r
    }
    , function(e, t, r) {
        "use strict";
        function n(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function i(e, t) {
            return {
                method: "GET",
                headers: e,
                mode: "cors",
                credentials: t ? "include" : "same-origin",
                redirect: "follow"
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PDFFetchStream = void 0;
        var a = function() {
            function e(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
                }
            }
            return function(t, r, n) {
                return r && e(t.prototype, r),
                n && e(t, n),
                t
            }
        }()
          , o = r(0)
          , s = r(39)
          , u = function() {
            function e(t) {
                n(this, e),
                this.source = t,
                this.isHttp = /^https?:/i.test(t.url),
                this.httpHeaders = this.isHttp && t.httpHeaders || {},
                this._fullRequestReader = null,
                this._rangeRequestReaders = []
            }
            return a(e, [{
                key: "getFullReader",
                value: function() {
                    return o.assert(!this._fullRequestReader),
                    this._fullRequestReader = new l(this),
                    this._fullRequestReader
                }
            }, {
                key: "getRangeReader",
                value: function(e, t) {
                    var r = new c(this,e,t);
                    return this._rangeRequestReaders.push(r),
                    r
                }
            }, {
                key: "cancelAllRequests",
                value: function(e) {
                    this._fullRequestReader && this._fullRequestReader.cancel(e);
                    var t = this._rangeRequestReaders.slice(0);
                    t.forEach(function(t) {
                        t.cancel(e)
                    })
                }
            }]),
            e
        }()
          , l = function() {
            function e(t) {
                var r = this;
                n(this, e),
                this._stream = t,
                this._reader = null,
                this._loaded = 0,
                this._filename = null;
                var a = t.source;
                this._withCredentials = a.withCredentials,
                this._contentLength = a.length,
                this._headersCapability = o.createPromiseCapability(),
                this._disableRange = a.disableRange || !1,
                this._rangeChunkSize = a.rangeChunkSize,
                this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
                this._isStreamingSupported = !a.disableStream,
                this._isRangeSupported = !a.disableRange,
                this._headers = new Headers;
                for (var u in this._stream.httpHeaders) {
                    var l = this._stream.httpHeaders[u];
                    "undefined" != typeof l && this._headers.append(u, l)
                }
                var c = a.url;
                fetch(c, i(this._headers, this._withCredentials)).then(function(e) {
                    if (!s.validateResponseStatus(e.status))
                        throw s.createResponseStatusError(e.status, c);
                    r._reader = e.body.getReader(),
                    r._headersCapability.resolve();
                    var t = function(t) {
                        return e.headers.get(t)
                    }
                      , n = s.validateRangeRequestCapabilities({
                        getResponseHeader: t,
                        isHttp: r._stream.isHttp,
                        rangeChunkSize: r._rangeChunkSize,
                        disableRange: r._disableRange
                    })
                      , i = n.allowRangeRequests
                      , a = n.suggestedLength;
                    r._isRangeSupported = i,
                    r._contentLength = a || r._contentLength,
                    r._filename = s.extractFilenameFromHeader(t),
                    !r._isStreamingSupported && r._isRangeSupported && r.cancel(new o.AbortException("streaming is disabled"))
                }).catch(this._headersCapability.reject),
                this.onProgress = null
            }
            return a(e, [{
                key: "read",
                value: function() {
                    var e = this;
                    return this._headersCapability.promise.then(function() {
                        return e._reader.read().then(function(t) {
                            var r = t.value
                              , n = t.done;
                            if (n)
                                return Promise.resolve({
                                    value: r,
                                    done: n
                                });
                            e._loaded += r.byteLength,
                            e.onProgress && e.onProgress({
                                loaded: e._loaded,
                                total: e._contentLength
                            });
                            var i = new Uint8Array(r).buffer;
                            return Promise.resolve({
                                value: i,
                                done: !1
                            })
                        })
                    })
                }
            }, {
                key: "cancel",
                value: function(e) {
                    this._reader && this._reader.cancel(e)
                }
            }, {
                key: "headersReady",
                get: function() {
                    return this._headersCapability.promise
                }
            }, {
                key: "filename",
                get: function() {
                    return this._filename
                }
            }, {
                key: "contentLength",
                get: function() {
                    return this._contentLength
                }
            }, {
                key: "isRangeSupported",
                get: function() {
                    return this._isRangeSupported
                }
            }, {
                key: "isStreamingSupported",
                get: function() {
                    return this._isStreamingSupported
                }
            }]),
            e
        }()
          , c = function() {
            function e(t, r, a) {
                var u = this;
                n(this, e),
                this._stream = t,
                this._reader = null,
                this._loaded = 0;
                var l = t.source;
                this._withCredentials = l.withCredentials,
                this._readCapability = o.createPromiseCapability(),
                this._isStreamingSupported = !l.disableStream,
                this._headers = new Headers;
                for (var c in this._stream.httpHeaders) {
                    var h = this._stream.httpHeaders[c];
                    "undefined" != typeof h && this._headers.append(c, h)
                }
                var d = r + "-" + (a - 1);
                this._headers.append("Range", "bytes=" + d);
                var f = l.url;
                fetch(f, i(this._headers, this._withCredentials)).then(function(e) {
                    if (!s.validateResponseStatus(e.status))
                        throw s.createResponseStatusError(e.status, f);
                    u._readCapability.resolve(),
                    u._reader = e.body.getReader()
                }),
                this.onProgress = null
            }
            return a(e, [{
                key: "read",
                value: function() {
                    var e = this;
                    return this._readCapability.promise.then(function() {
                        return e._reader.read().then(function(t) {
                            var r = t.value
                              , n = t.done;
                            if (n)
                                return Promise.resolve({
                                    value: r,
                                    done: n
                                });
                            e._loaded += r.byteLength,
                            e.onProgress && e.onProgress({
                                loaded: e._loaded
                            });
                            var i = new Uint8Array(r).buffer;
                            return Promise.resolve({
                                value: i,
                                done: !1
                            })
                        })
                    })
                }
            }, {
                key: "cancel",
                value: function(e) {
                    this._reader && this._reader.cancel(e)
                }
            }, {
                key: "isStreamingSupported",
                get: function() {
                    return this._isStreamingSupported
                }
            }]),
            e
        }();
        t.PDFFetchStream = u
    }
    , function(e, t, r) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        function i(e, t) {
            this.url = e,
            t = t || {},
            this.isHttp = /^https?:/i.test(e),
            this.httpHeaders = this.isHttp && t.httpHeaders || {},
            this.withCredentials = t.withCredentials || !1,
            this.getXhr = t.getXhr || function() {
                return new XMLHttpRequest
            }
            ,
            this.currXhrId = 0,
            this.pendingRequests = Object.create(null),
            this.loadedRequests = Object.create(null)
        }
        function a(e) {
            var t = e.response;
            if ("string" != typeof t)
                return t;
            var r = l.stringToBytes(t);
            return r.buffer
        }
        function o(e) {
            this._source = e,
            this._manager = new i(e.url,{
                httpHeaders: e.httpHeaders,
                withCredentials: e.withCredentials
            }),
            this._rangeChunkSize = e.rangeChunkSize,
            this._fullRequestReader = null,
            this._rangeRequestReaders = []
        }
        function s(e, t) {
            this._manager = e;
            var r = {
                onHeadersReceived: this._onHeadersReceived.bind(this),
                onProgressiveData: t.disableStream ? null : this._onProgressiveData.bind(this),
                onDone: this._onDone.bind(this),
                onError: this._onError.bind(this),
                onProgress: this._onProgress.bind(this)
            };
            this._url = t.url,
            this._fullRequestId = e.requestFull(r),
            this._headersReceivedCapability = l.createPromiseCapability(),
            this._disableRange = t.disableRange || !1,
            this._contentLength = t.length,
            this._rangeChunkSize = t.rangeChunkSize,
            this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
            this._isStreamingSupported = !1,
            this._isRangeSupported = !1,
            this._cachedChunks = [],
            this._requests = [],
            this._done = !1,
            this._storedError = void 0,
            this._filename = null,
            this.onProgress = null
        }
        function u(e, t, r) {
            this._manager = e;
            var n = {
                onDone: this._onDone.bind(this),
                onProgress: this._onProgress.bind(this)
            };
            this._requestId = e.requestRange(t, r, n),
            this._requests = [],
            this._queuedChunk = null,
            this._done = !1,
            this.onProgress = null,
            this.onClosed = null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.NetworkManager = t.PDFNetworkStream = void 0;
        var l = r(0)
          , c = r(39)
          , h = r(18)
          , d = n(h)
          , f = 200
          , p = 206
          , m = function() {
            try {
                var e = new XMLHttpRequest;
                return e.open("GET", d.default.location.href),
                e.responseType = "moz-chunked-arraybuffer",
                "moz-chunked-arraybuffer" === e.responseType
            } catch (t) {
                return !1
            }
        }();
        i.prototype = {
            requestRange: function(e, t, r) {
                var n = {
                    begin: e,
                    end: t
                };
                for (var i in r)
                    n[i] = r[i];
                return this.request(n)
            },
            requestFull: function(e) {
                return this.request(e)
            },
            request: function(e) {
                var t = this.getXhr()
                  , r = this.currXhrId++
                  , n = this.pendingRequests[r] = {
                    xhr: t
                };
                t.open("GET", this.url),
                t.withCredentials = this.withCredentials;
                for (var i in this.httpHeaders) {
                    var a = this.httpHeaders[i];
                    "undefined" != typeof a && t.setRequestHeader(i, a)
                }
                if (this.isHttp && "begin"in e && "end"in e) {
                    var o = e.begin + "-" + (e.end - 1);
                    t.setRequestHeader("Range", "bytes=" + o),
                    n.expectedStatus = 206
                } else
                    n.expectedStatus = 200;
                var s = m && !!e.onProgressiveData;
                return s ? (t.responseType = "moz-chunked-arraybuffer",
                n.onProgressiveData = e.onProgressiveData,
                n.mozChunked = !0) : t.responseType = "arraybuffer",
                e.onError && (t.onerror = function() {
                    e.onError(t.status)
                }
                ),
                t.onreadystatechange = this.onStateChange.bind(this, r),
                t.onprogress = this.onProgress.bind(this, r),
                n.onHeadersReceived = e.onHeadersReceived,
                n.onDone = e.onDone,
                n.onError = e.onError,
                n.onProgress = e.onProgress,
                t.send(null),
                r
            },
            onProgress: function(e, t) {
                var r = this.pendingRequests[e];
                if (r) {
                    if (r.mozChunked) {
                        var n = a(r.xhr);
                        r.onProgressiveData(n)
                    }
                    var i = r.onProgress;
                    i && i(t)
                }
            },
            onStateChange: function(e) {
                var t = this.pendingRequests[e];
                if (t) {
                    var r = t.xhr;
                    if (r.readyState >= 2 && t.onHeadersReceived && (t.onHeadersReceived(),
                    delete t.onHeadersReceived),
                    4 === r.readyState && e in this.pendingRequests) {
                        if (delete this.pendingRequests[e],
                        0 === r.status && this.isHttp)
                            return void (t.onError && t.onError(r.status));
                        var n = r.status || f
                          , i = n === f && t.expectedStatus === p;
                        if (!i && n !== t.expectedStatus)
                            return void (t.onError && t.onError(r.status));
                        this.loadedRequests[e] = !0;
                        var o = a(r);
                        if (n === p) {
                            var s = r.getResponseHeader("Content-Range")
                              , u = /bytes (\d+)-(\d+)\/(\d+)/.exec(s)
                              , l = parseInt(u[1], 10);
                            t.onDone({
                                begin: l,
                                chunk: o
                            })
                        } else
                            t.onProgressiveData ? t.onDone(null) : o ? t.onDone({
                                begin: 0,
                                chunk: o
                            }) : t.onError && t.onError(r.status)
                    }
                }
            },
            hasPendingRequests: function() {
                for (var e in this.pendingRequests)
                    return !0;
                return !1
            },
            getRequestXhr: function(e) {
                return this.pendingRequests[e].xhr
            },
            isStreamingRequest: function(e) {
                return !!this.pendingRequests[e].onProgressiveData
            },
            isPendingRequest: function(e) {
                return e in this.pendingRequests
            },
            isLoadedRequest: function(e) {
                return e in this.loadedRequests
            },
            abortAllRequests: function() {
                for (var e in this.pendingRequests)
                    this.abortRequest(0 | e)
            },
            abortRequest: function(e) {
                var t = this.pendingRequests[e].xhr;
                delete this.pendingRequests[e],
                t.abort()
            }
        },
        o.prototype = {
            _onRangeRequestReaderClosed: function(e) {
                var t = this._rangeRequestReaders.indexOf(e);
                t >= 0 && this._rangeRequestReaders.splice(t, 1)
            },
            getFullReader: function() {
                return l.assert(!this._fullRequestReader),
                this._fullRequestReader = new s(this._manager,this._source),
                this._fullRequestReader
            },
            getRangeReader: function(e, t) {
                var r = new u(this._manager,e,t);
                return r.onClosed = this._onRangeRequestReaderClosed.bind(this),
                this._rangeRequestReaders.push(r),
                r
            },
            cancelAllRequests: function(e) {
                this._fullRequestReader && this._fullRequestReader.cancel(e);
                var t = this._rangeRequestReaders.slice(0);
                t.forEach(function(t) {
                    t.cancel(e)
                })
            }
        },
        s.prototype = {
            _onHeadersReceived: function() {
                var e = this._fullRequestId
                  , t = this._manager.getRequestXhr(e)
                  , r = function(e) {
                    return t.getResponseHeader(e)
                }
                  , n = c.validateRangeRequestCapabilities({
                    getResponseHeader: r,
                    isHttp: this._manager.isHttp,
                    rangeChunkSize: this._rangeChunkSize,
                    disableRange: this._disableRange
                })
                  , i = n.allowRangeRequests
                  , a = n.suggestedLength;
                i && (this._isRangeSupported = !0),
                this._contentLength = a || this._contentLength,
                this._filename = c.extractFilenameFromHeader(r);
                var o = this._manager;
                o.isStreamingRequest(e) ? this._isStreamingSupported = !0 : this._isRangeSupported && o.abortRequest(e),
                this._headersReceivedCapability.resolve()
            },
            _onProgressiveData: function(e) {
                if (this._requests.length > 0) {
                    var t = this._requests.shift();
                    t.resolve({
                        value: e,
                        done: !1
                    })
                } else
                    this._cachedChunks.push(e)
            },
            _onDone: function(e) {
                e && this._onProgressiveData(e.chunk),
                this._done = !0,
                this._cachedChunks.length > 0 || (this._requests.forEach(function(e) {
                    e.resolve({
                        value: void 0,
                        done: !0
                    })
                }),
                this._requests = [])
            },
            _onError: function(e) {
                var t = this._url
                  , r = c.createResponseStatusError(e, t);
                this._storedError = r,
                this._headersReceivedCapability.reject(r),
                this._requests.forEach(function(e) {
                    e.reject(r)
                }),
                this._requests = [],
                this._cachedChunks = []
            },
            _onProgress: function(e) {
                this.onProgress && this.onProgress({
                    loaded: e.loaded,
                    total: e.lengthComputable ? e.total : this._contentLength
                })
            },
            get filename() {
                return this._filename
            },
            get isRangeSupported() {
                return this._isRangeSupported
            },
            get isStreamingSupported() {
                return this._isStreamingSupported
            },
            get contentLength() {
                return this._contentLength
            },
            get headersReady() {
                return this._headersReceivedCapability.promise
            },
            read: function() {
                if (this._storedError)
                    return Promise.reject(this._storedError);
                if (this._cachedChunks.length > 0) {
                    var e = this._cachedChunks.shift();
                    return Promise.resolve({
                        value: e,
                        done: !1
                    })
                }
                if (this._done)
                    return Promise.resolve({
                        value: void 0,
                        done: !0
                    });
                var t = l.createPromiseCapability();
                return this._requests.push(t),
                t.promise
            },
            cancel: function(e) {
                this._done = !0,
                this._headersReceivedCapability.reject(e),
                this._requests.forEach(function(e) {
                    e.resolve({
                        value: void 0,
                        done: !0
                    })
                }),
                this._requests = [],
                this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId),
                this._fullRequestReader = null
            }
        },
        u.prototype = {
            _close: function() {
                this.onClosed && this.onClosed(this)
            },
            _onDone: function(e) {
                var t = e.chunk;
                if (this._requests.length > 0) {
                    var r = this._requests.shift();
                    r.resolve({
                        value: t,
                        done: !1
                    })
                } else
                    this._queuedChunk = t;
                this._done = !0,
                this._requests.forEach(function(e) {
                    e.resolve({
                        value: void 0,
                        done: !0
                    })
                }),
                this._requests = [],
                this._close()
            },
            _onProgress: function(e) {
                !this.isStreamingSupported && this.onProgress && this.onProgress({
                    loaded: e.loaded
                })
            },
            get isStreamingSupported() {
                return !1
            },
            read: function() {
                if (null !== this._queuedChunk) {
                    var e = this._queuedChunk;
                    return this._queuedChunk = null,
                    Promise.resolve({
                        value: e,
                        done: !1
                    })
                }
                if (this._done)
                    return Promise.resolve({
                        value: void 0,
                        done: !0
                    });
                var t = l.createPromiseCapability();
                return this._requests.push(t),
                t.promise
            },
            cancel: function() {
                this._done = !0,
                this._requests.forEach(function(e) {
                    e.resolve({
                        value: void 0,
                        done: !0
                    })
                }),
                this._requests = [],
                this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId),
                this._close()
            }
        },
        t.PDFNetworkStream = o,
        t.NetworkManager = i
    }
    ])
});
