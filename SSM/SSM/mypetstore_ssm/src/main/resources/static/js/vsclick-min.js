!function (t, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports.VsClick = n() : t.VsClick = n()
}(window, (function () {
    return function (t) {
        var n = {};

        function r(e) {
            if (n[e]) return n[e].exports;
            var o = n[e] = {i: e, l: !1, exports: {}};
            return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
        }

        return r.m = t, r.c = n, r.d = function (t, n, e) {
            r.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: e})
        }, r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, r.t = function (t, n) {
            if (1 & n && (t = r(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var e = Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t) for (var o in t) r.d(e, o, function (n) {
                return t[n]
            }.bind(null, o));
            return e
        }, r.n = function (t) {
            var n = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return r.d(n, "a", n), n
        }, r.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, r.p = "", r(r.s = 224)
    }([function (t, n) {
        var r = Array.isArray;
        t.exports = r
    }, function (t, n, r) {
        var e = r(103), o = r(146), i = r(14), u = r(0), c = r(156);
        t.exports = function (t) {
            return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? u(t) ? o(t[0], t[1]) : e(t) : c(t)
        }
    }, function (t, n, r) {
        var e = r(46), o = "object" == typeof self && self && self.Object === Object && self,
            i = e || o || Function("return this")();
        t.exports = i
    }, function (t, n, r) {
        t.exports = {clamp: r(220), inRange: r(221), random: r(223)}
    }, function (t, n, r) {
        var e = r(92), o = r(54)(e);
        t.exports = o
    }, function (t, n, r) {
        var e = r(45), o = r(31);
        t.exports = function (t) {
            return null != t && o(t.length) && !e(t)
        }
    }, function (t, n, r) {
        var e = r(83), o = r(89);
        t.exports = function (t, n) {
            var r = o(t, n);
            return e(r) ? r : void 0
        }
    }, function (t, n, r) {
        var e = r(10), o = r(85), i = r(86), u = e ? e.toStringTag : void 0;
        t.exports = function (t) {
            return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : u && u in Object(t) ? o(t) : i(t)
        }
    }, function (t, n, r) {
        var e = r(94), o = r(53), i = r(5);
        t.exports = function (t) {
            return i(t) ? e(t) : o(t)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return null != t && "object" == typeof t
        }
    }, function (t, n, r) {
        var e = r(2).Symbol;
        t.exports = e
    }, function (t, n) {
        t.exports = function (t) {
            var n = typeof t;
            return null != t && ("object" == n || "function" == n)
        }
    }, function (t, n, r) {
        var e = r(7), o = r(9);
        t.exports = function (t) {
            return "symbol" == typeof t || o(t) && "[object Symbol]" == e(t)
        }
    }, function (t, n, r) {
        var e = r(12);
        t.exports = function (t) {
            if ("string" == typeof t || e(t)) return t;
            var n = t + "";
            return "0" == n && 1 / t == -1 / 0 ? "-0" : n
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t
        }
    }, function (t, n, r) {
        var e = r(32), o = r(5), i = r(30), u = r(11);
        t.exports = function (t, n, r) {
            if (!u(r)) return !1;
            var c = typeof n;
            return !!("number" == c ? o(r) && i(n, r.length) : "string" == c && n in r) && e(r[n], t)
        }
    }, function (t, n, r) {
        var e = r(39);
        t.exports = function (t) {
            var n = e(t), r = n % 1;
            return n == n ? r ? n - r : n : 0
        }
    }, function (t, n, r) {
        var e = r(90), o = r(91), i = r(1), u = r(0);
        t.exports = function (t, n) {
            return function (r, c) {
                var f = u(r) ? e : o, a = n ? n() : {};
                return f(r, t, i(c, 2), a)
            }
        }
    }, function (t, n, r) {
        var e = r(105), o = r(106), i = r(107), u = r(108), c = r(109);

        function f(t) {
            var n = -1, r = null == t ? 0 : t.length;
            for (this.clear(); ++n < r;) {
                var e = t[n];
                this.set(e[0], e[1])
            }
        }

        f.prototype.clear = e, f.prototype.delete = o, f.prototype.get = i, f.prototype.has = u, f.prototype.set = c, t.exports = f
    }, function (t, n, r) {
        var e = r(32);
        t.exports = function (t, n) {
            for (var r = t.length; r--;) if (e(t[r][0], n)) return r;
            return -1
        }
    }, function (t, n, r) {
        var e = r(6)(Object, "create");
        t.exports = e
    }, function (t, n, r) {
        var e = r(123);
        t.exports = function (t, n) {
            var r = t.__data__;
            return e(n) ? r["string" == typeof n ? "string" : "hash"] : r.map
        }
    }, function (t, n, r) {
        var e = r(36), o = r(13);
        t.exports = function (t, n) {
            for (var r = 0, i = (n = e(n, t)).length; null != t && r < i;) t = t[o(n[r++])];
            return r && r == i ? t : void 0
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var r = -1, e = null == t ? 0 : t.length, o = Array(e); ++r < e;) o[r] = n(t[r], r, t);
            return o
        }
    }, function (t, n, r) {
        var e = r(59), o = r(173);
        t.exports = function t(n, r, i, u, c) {
            var f = -1, a = n.length;
            for (i || (i = o), c || (c = []); ++f < a;) {
                var s = n[f];
                r > 0 && i(s) ? r > 1 ? t(s, r - 1, i, u, c) : e(c, s) : u || (c[c.length] = s)
            }
            return c
        }
    }, function (t, n, r) {
        var e = r(23), o = r(1), i = r(70), u = r(0);
        t.exports = function (t, n) {
            return (u(t) ? e : i)(t, o(n, 3))
        }
    }, function (t, n, r) {
        var e = r(181), o = r(8);
        t.exports = function (t) {
            return null == t ? [] : e(t, o(t))
        }
    }, function (t, n, r) {
        var e = r(42);
        t.exports = function (t, n) {
            var r = -1, o = t.length, i = o - 1;
            for (n = void 0 === n ? o : n; ++r < n;) {
                var u = e(r, i), c = t[u];
                t[u] = t[r], t[r] = c
            }
            return t.length = n, t
        }
    }, function (t, n, r) {
        var e = r(44);
        t.exports = function (t, n, r) {
            "__proto__" == n && e ? e(t, n, {configurable: !0, enumerable: !0, value: r, writable: !0}) : t[n] = r
        }
    }, function (t, n, r) {
        var e = r(96), o = r(9), i = Object.prototype, u = i.hasOwnProperty, c = i.propertyIsEnumerable,
            f = e(function () {
                return arguments
            }()) ? e : function (t) {
                return o(t) && u.call(t, "callee") && !c.call(t, "callee")
            };
        t.exports = f
    }, function (t, n) {
        var r = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, n) {
            var e = typeof t;
            return !!(n = null == n ? 9007199254740991 : n) && ("number" == e || "symbol" != e && r.test(t)) && t > -1 && t % 1 == 0 && t < n
        }
    }, function (t, n) {
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return t === n || t != t && n != n
        }
    }, function (t, n, r) {
        var e = r(6)(r(2), "Map");
        t.exports = e
    }, function (t, n, r) {
        var e = r(115), o = r(122), i = r(124), u = r(125), c = r(126);

        function f(t) {
            var n = -1, r = null == t ? 0 : t.length;
            for (this.clear(); ++n < r;) {
                var e = t[n];
                this.set(e[0], e[1])
            }
        }

        f.prototype.clear = e, f.prototype.delete = o, f.prototype.get = i, f.prototype.has = u, f.prototype.set = c, t.exports = f
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var r = -1, e = null == t ? 0 : t.length, o = 0, i = []; ++r < e;) {
                var u = t[r];
                n(u, r, t) && (i[o++] = u)
            }
            return i
        }
    }, function (t, n, r) {
        var e = r(0), o = r(37), i = r(148), u = r(151);
        t.exports = function (t, n) {
            return e(t) ? t : o(t, n) ? [t] : i(u(t))
        }
    }, function (t, n, r) {
        var e = r(0), o = r(12), i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, u = /^\w*$/;
        t.exports = function (t, n) {
            if (e(t)) return !1;
            var r = typeof t;
            return !("number" != r && "symbol" != r && "boolean" != r && null != t && !o(t)) || (u.test(t) || !i.test(t) || null != n && t in Object(n))
        }
    }, function (t, n) {
        t.exports = function (t, n, r, e) {
            for (var o = t.length, i = r + (e ? 1 : -1); e ? i-- : ++i < o;) if (n(t[i], i, t)) return i;
            return -1
        }
    }, function (t, n, r) {
        var e = r(40);
        t.exports = function (t) {
            return t ? (t = e(t)) === 1 / 0 || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
        }
    }, function (t, n, r) {
        var e = r(11), o = r(12), i = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, c = /^0b[01]+$/i, f = /^0o[0-7]+$/i,
            a = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (o(t)) return NaN;
            if (e(t)) {
                var n = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = e(n) ? n + "" : n
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(i, "");
            var r = c.test(t);
            return r || f.test(t) ? a(t.slice(2), r ? 2 : 8) : u.test(t) ? NaN : +t
        }
    }, function (t, n) {
        t.exports = function (t, n, r) {
            switch (r.length) {
                case 0:
                    return t.call(n);
                case 1:
                    return t.call(n, r[0]);
                case 2:
                    return t.call(n, r[0], r[1]);
                case 3:
                    return t.call(n, r[0], r[1], r[2])
            }
            return t.apply(n, r)
        }
    }, function (t, n) {
        var r = Math.floor, e = Math.random;
        t.exports = function (t, n) {
            return t + r(e() * (n - t + 1))
        }
    }, function (t, n) {
        t.exports = function (t, n, r) {
            return t == t && (void 0 !== r && (t = t <= r ? t : r), void 0 !== n && (t = t >= n ? t : n)), t
        }
    }, function (t, n, r) {
        var e = r(6), o = function () {
            try {
                var t = e(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {
            }
        }();
        t.exports = o
    }, function (t, n, r) {
        var e = r(7), o = r(11);
        t.exports = function (t) {
            if (!o(t)) return !1;
            var n = e(t);
            return "[object Function]" == n || "[object GeneratorFunction]" == n || "[object AsyncFunction]" == n || "[object Proxy]" == n
        }
    }, function (t, n, r) {
        (function (n) {
            var r = "object" == typeof n && n && n.Object === Object && n;
            t.exports = r
        }).call(this, r(84))
    }, function (t, n) {
        var r = Function.prototype.toString;
        t.exports = function (t) {
            if (null != t) {
                try {
                    return r.call(t)
                } catch (t) {
                }
                try {
                    return t + ""
                } catch (t) {
                }
            }
            return ""
        }
    }, function (t, n) {
        t.exports = function (t) {
            return function (n, r, e) {
                for (var o = -1, i = Object(n), u = e(n), c = u.length; c--;) {
                    var f = u[t ? c : ++o];
                    if (!1 === r(i[f], f, i)) break
                }
                return n
            }
        }
    }, function (t, n, r) {
        (function (t) {
            var e = r(2), o = r(97), i = n && !n.nodeType && n, u = i && "object" == typeof t && t && !t.nodeType && t,
                c = u && u.exports === i ? e.Buffer : void 0, f = (c ? c.isBuffer : void 0) || o;
            t.exports = f
        }).call(this, r(50)(t))
    }, function (t, n) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {
            }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0, get: function () {
                    return t.i
                }
            }), t.webpackPolyfill = 1), t
        }
    }, function (t, n, r) {
        var e = r(98), o = r(52), i = r(99), u = i && i.isTypedArray, c = u ? o(u) : e;
        t.exports = c
    }, function (t, n) {
        t.exports = function (t) {
            return function (n) {
                return t(n)
            }
        }
    }, function (t, n, r) {
        var e = r(100), o = r(101), i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!e(t)) return o(t);
            var n = [];
            for (var r in Object(t)) i.call(t, r) && "constructor" != r && n.push(r);
            return n
        }
    }, function (t, n, r) {
        var e = r(5);
        t.exports = function (t, n) {
            return function (r, o) {
                if (null == r) return r;
                if (!e(r)) return t(r, o);
                for (var i = r.length, u = n ? i : -1, c = Object(r); (n ? u-- : ++u < i) && !1 !== o(c[u], u, c);) ;
                return r
            }
        }
    }, function (t, n, r) {
        var e = r(18), o = r(110), i = r(111), u = r(112), c = r(113), f = r(114);

        function a(t) {
            var n = this.__data__ = new e(t);
            this.size = n.size
        }

        a.prototype.clear = o, a.prototype.delete = i, a.prototype.get = u, a.prototype.has = c, a.prototype.set = f, t.exports = a
    }, function (t, n, r) {
        var e = r(127), o = r(9);
        t.exports = function t(n, r, i, u, c) {
            return n === r || (null == n || null == r || !o(n) && !o(r) ? n != n && r != r : e(n, r, i, u, t, c))
        }
    }, function (t, n, r) {
        var e = r(128), o = r(58), i = r(131);
        t.exports = function (t, n, r, u, c, f) {
            var a = 1 & r, s = t.length, p = n.length;
            if (s != p && !(a && p > s)) return !1;
            var l = f.get(t), v = f.get(n);
            if (l && v) return l == n && v == t;
            var h = -1, d = !0, x = 2 & r ? new e : void 0;
            for (f.set(t, n), f.set(n, t); ++h < s;) {
                var y = t[h], g = n[h];
                if (u) var b = a ? u(g, y, h, n, t, f) : u(y, g, h, t, n, f);
                if (void 0 !== b) {
                    if (b) continue;
                    d = !1;
                    break
                }
                if (x) {
                    if (!o(n, (function (t, n) {
                        if (!i(x, n) && (y === t || c(y, t, r, u, f))) return x.push(n)
                    }))) {
                        d = !1;
                        break
                    }
                } else if (y !== g && !c(y, g, r, u, f)) {
                    d = !1;
                    break
                }
            }
            return f.delete(t), f.delete(n), d
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var r = -1, e = null == t ? 0 : t.length; ++r < e;) if (n(t[r], r, t)) return !0;
            return !1
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var r = -1, e = n.length, o = t.length; ++r < e;) t[o + r] = n[r];
            return t
        }
    }, function (t, n, r) {
        var e = r(141), o = r(33), i = r(142), u = r(143), c = r(144), f = r(7), a = r(47), s = a(e), p = a(o),
            l = a(i), v = a(u), h = a(c), d = f;
        (e && "[object DataView]" != d(new e(new ArrayBuffer(1))) || o && "[object Map]" != d(new o) || i && "[object Promise]" != d(i.resolve()) || u && "[object Set]" != d(new u) || c && "[object WeakMap]" != d(new c)) && (d = function (t) {
            var n = f(t), r = "[object Object]" == n ? t.constructor : void 0, e = r ? a(r) : "";
            if (e) switch (e) {
                case s:
                    return "[object DataView]";
                case p:
                    return "[object Map]";
                case l:
                    return "[object Promise]";
                case v:
                    return "[object Set]";
                case h:
                    return "[object WeakMap]"
            }
            return n
        }), t.exports = d
    }, function (t, n, r) {
        var e = r(11);
        t.exports = function (t) {
            return t == t && !e(t)
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return function (r) {
                return null != r && (r[t] === n && (void 0 !== n || t in Object(r)))
            }
        }
    }, function (t, n) {
        t.exports = function (t) {
            return function (n) {
                return null == n ? void 0 : n[t]
            }
        }
    }, function (t, n, r) {
        var e = r(159), o = r(4), i = r(65), u = r(0);
        t.exports = function (t, n) {
            return (u(t) ? e : o)(t, i(n))
        }
    }, function (t, n, r) {
        var e = r(14);
        t.exports = function (t) {
            return "function" == typeof t ? t : e
        }
    }, function (t, n, r) {
        var e = r(161), o = r(67), i = r(65), u = r(0);
        t.exports = function (t, n) {
            return (u(t) ? e : o)(t, i(n))
        }
    }, function (t, n, r) {
        var e = r(162), o = r(54)(e, !0);
        t.exports = o
    }, function (t, n, r) {
        var e = r(4);
        t.exports = function (t, n) {
            var r = [];
            return e(t, (function (t, e, o) {
                n(t, e, o) && r.push(t)
            })), r
        }
    }, function (t, n, r) {
        var e = r(1), o = r(5), i = r(8);
        t.exports = function (t) {
            return function (n, r, u) {
                var c = Object(n);
                if (!o(n)) {
                    var f = e(r, 3);
                    n = i(n), r = function (t) {
                        return f(c[t], t, c)
                    }
                }
                var a = t(n, r, u);
                return a > -1 ? c[f ? n[a] : a] : void 0
            }
        }
    }, function (t, n, r) {
        var e = r(4), o = r(5);
        t.exports = function (t, n) {
            var r = -1, i = o(t) ? Array(t.length) : [];
            return e(t, (function (t, e, o) {
                i[++r] = n(t, e, o)
            })), i
        }
    }, function (t, n, r) {
        var e = r(7), o = r(0), i = r(9);
        t.exports = function (t) {
            return "string" == typeof t || !o(t) && i(t) && "[object String]" == e(t)
        }
    }, function (t, n, r) {
        var e = r(14), o = r(187), i = r(188);
        t.exports = function (t, n) {
            return i(o(t, n, e), t + "")
        }
    }, function (t, n, r) {
        var e = r(23), o = r(22), i = r(1), u = r(70), c = r(194), f = r(52), a = r(195), s = r(14), p = r(0);
        t.exports = function (t, n, r) {
            n = n.length ? e(n, (function (t) {
                return p(t) ? function (n) {
                    return o(n, 1 === t.length ? t[0] : t)
                } : t
            })) : [s];
            var l = -1;
            n = e(n, f(i));
            var v = u(t, (function (t, r, o) {
                return {
                    criteria: e(n, (function (n) {
                        return n(t)
                    })), index: ++l, value: t
                }
            }));
            return c(v, (function (t, n) {
                return a(t, n, r)
            }))
        }
    }, function (t, n) {
        t.exports = function (t, n, r, e, o) {
            return o(t, (function (t, o, i) {
                r = e ? (e = !1, t) : n(r, t, o, i)
            })), r
        }
    }, function (t, n, r) {
        var e = r(42);
        t.exports = function (t) {
            var n = t.length;
            return n ? t[e(0, n - 1)] : void 0
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            var r = -1, e = t.length;
            for (n || (n = Array(e)); ++r < e;) n[r] = t[r];
            return n
        }
    }, function (t, n, r) {
        t.exports = {
            countBy: r(82),
            each: r(158),
            eachRight: r(160),
            every: r(164),
            filter: r(167),
            find: r(168),
            findLast: r(170),
            flatMap: r(172),
            flatMapDeep: r(174),
            flatMapDepth: r(175),
            forEach: r(64),
            forEachRight: r(66),
            groupBy: r(176),
            includes: r(177),
            invokeMap: r(182),
            keyBy: r(192),
            map: r(25),
            orderBy: r(193),
            partition: r(197),
            reduce: r(198),
            reduceRight: r(200),
            reject: r(202),
            sample: r(204),
            sampleSize: r(206),
            shuffle: r(209),
            size: r(212),
            some: r(217),
            sortBy: r(219)
        }
    }, function (t, n, r) {
        var e = r(79), o = r(80);
        "string" == typeof (o = o.__esModule ? o.default : o) && (o = [[t.i, o, ""]]);
        var i = {insert: "head", singleton: !1};
        e(o, i);
        t.exports = o.locals || {}
    }, function (t, n, r) {
        "use strict";
        var e, o = function () {
            return void 0 === e && (e = Boolean(window && document && document.all && !window.atob)), e
        }, i = function () {
            var t = {};
            return function (n) {
                if (void 0 === t[n]) {
                    var r = document.querySelector(n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (t) {
                        r = null
                    }
                    t[n] = r
                }
                return t[n]
            }
        }(), u = [];

        function c(t) {
            for (var n = -1, r = 0; r < u.length; r++) if (u[r].identifier === t) {
                n = r;
                break
            }
            return n
        }

        function f(t, n) {
            for (var r = {}, e = [], o = 0; o < t.length; o++) {
                var i = t[o], f = n.base ? i[0] + n.base : i[0], a = r[f] || 0, s = "".concat(f, " ").concat(a);
                r[f] = a + 1;
                var p = c(s), l = {css: i[1], media: i[2], sourceMap: i[3]};
                -1 !== p ? (u[p].references++, u[p].updater(l)) : u.push({
                    identifier: s,
                    updater: x(l, n),
                    references: 1
                }), e.push(s)
            }
            return e
        }

        function a(t) {
            var n = document.createElement("style"), e = t.attributes || {};
            if (void 0 === e.nonce) {
                var o = r.nc;
                o && (e.nonce = o)
            }
            if (Object.keys(e).forEach((function (t) {
                n.setAttribute(t, e[t])
            })), "function" == typeof t.insert) t.insert(n); else {
                var u = i(t.insert || "head");
                if (!u) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                u.appendChild(n)
            }
            return n
        }

        var s, p = (s = [], function (t, n) {
            return s[t] = n, s.filter(Boolean).join("\n")
        });

        function l(t, n, r, e) {
            var o = r ? "" : e.media ? "@media ".concat(e.media, " {").concat(e.css, "}") : e.css;
            if (t.styleSheet) t.styleSheet.cssText = p(n, o); else {
                var i = document.createTextNode(o), u = t.childNodes;
                u[n] && t.removeChild(u[n]), u.length ? t.insertBefore(i, u[n]) : t.appendChild(i)
            }
        }

        function v(t, n, r) {
            var e = r.css, o = r.media, i = r.sourceMap;
            if (o ? t.setAttribute("media", o) : t.removeAttribute("media"), i && btoa && (e += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleSheet) t.styleSheet.cssText = e; else {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                t.appendChild(document.createTextNode(e))
            }
        }

        var h = null, d = 0;

        function x(t, n) {
            var r, e, o;
            if (n.singleton) {
                var i = d++;
                r = h || (h = a(n)), e = l.bind(null, r, i, !1), o = l.bind(null, r, i, !0)
            } else r = a(n), e = v.bind(null, r, n), o = function () {
                !function (t) {
                    if (null === t.parentNode) return !1;
                    t.parentNode.removeChild(t)
                }(r)
            };
            return e(t), function (n) {
                if (n) {
                    if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) return;
                    e(t = n)
                } else o()
            }
        }

        t.exports = function (t, n) {
            (n = n || {}).singleton || "boolean" == typeof n.singleton || (n.singleton = o());
            var r = f(t = t || [], n);
            return function (t) {
                if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                    for (var e = 0; e < r.length; e++) {
                        var o = c(r[e]);
                        u[o].references--
                    }
                    for (var i = f(t, n), a = 0; a < r.length; a++) {
                        var s = c(r[a]);
                        0 === u[s].references && (u[s].updater(), u.splice(s, 1))
                    }
                    r = i
                }
            }
        }
    }, function (t, n, r) {
        (t.exports = r(81)(!1)).push([t.i, ".vsClick{position:fixed;z-index:999999;top:0;left:0;pointer-events:none}.vsClick-dom{position:absolute;z-index:999999;top:0;left:0;pointer-events:none}\n", ""])
    }, function (t, n, r) {
        "use strict";
        t.exports = function (t) {
            var n = [];
            return n.toString = function () {
                return this.map((function (n) {
                    var r = function (t, n) {
                        var r = t[1] || "", e = t[3];
                        if (!e) return r;
                        if (n && "function" == typeof btoa) {
                            var o = (u = e, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(u)))) + " */"),
                                i = e.sources.map((function (t) {
                                    return "/*# sourceURL=" + e.sourceRoot + t + " */"
                                }));
                            return [r].concat(i).concat([o]).join("\n")
                        }
                        var u;
                        return [r].join("\n")
                    }(n, t);
                    return n[2] ? "@media " + n[2] + "{" + r + "}" : r
                })).join("")
            }, n.i = function (t, r) {
                "string" == typeof t && (t = [[null, t, ""]]);
                for (var e = {}, o = 0; o < this.length; o++) {
                    var i = this[o][0];
                    null != i && (e[i] = !0)
                }
                for (o = 0; o < t.length; o++) {
                    var u = t[o];
                    null != u[0] && e[u[0]] || (r && !u[2] ? u[2] = r : r && (u[2] = "(" + u[2] + ") and (" + r + ")"), n.push(u))
                }
            }, n
        }
    }, function (t, n, r) {
        var e = r(28), o = r(17), i = Object.prototype.hasOwnProperty, u = o((function (t, n, r) {
            i.call(t, r) ? ++t[r] : e(t, r, 1)
        }));
        t.exports = u
    }, function (t, n, r) {
        var e = r(45), o = r(87), i = r(11), u = r(47), c = /^\[object .+?Constructor\]$/, f = Function.prototype,
            a = Object.prototype, s = f.toString, p = a.hasOwnProperty,
            l = RegExp("^" + s.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        t.exports = function (t) {
            return !(!i(t) || o(t)) && (e(t) ? l : c).test(u(t))
        }
    }, function (t, n) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }, function (t, n, r) {
        var e = r(10), o = Object.prototype, i = o.hasOwnProperty, u = o.toString, c = e ? e.toStringTag : void 0;
        t.exports = function (t) {
            var n = i.call(t, c), r = t[c];
            try {
                t[c] = void 0;
                var e = !0
            } catch (t) {
            }
            var o = u.call(t);
            return e && (n ? t[c] = r : delete t[c]), o
        }
    }, function (t, n) {
        var r = Object.prototype.toString;
        t.exports = function (t) {
            return r.call(t)
        }
    }, function (t, n, r) {
        var e, o = r(88), i = (e = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e : "";
        t.exports = function (t) {
            return !!i && i in t
        }
    }, function (t, n, r) {
        var e = r(2)["__core-js_shared__"];
        t.exports = e
    }, function (t, n) {
        t.exports = function (t, n) {
            return null == t ? void 0 : t[n]
        }
    }, function (t, n) {
        t.exports = function (t, n, r, e) {
            for (var o = -1, i = null == t ? 0 : t.length; ++o < i;) {
                var u = t[o];
                n(e, u, r(u), t)
            }
            return e
        }
    }, function (t, n, r) {
        var e = r(4);
        t.exports = function (t, n, r, o) {
            return e(t, (function (t, e, i) {
                n(o, t, r(t), i)
            })), o
        }
    }, function (t, n, r) {
        var e = r(93), o = r(8);
        t.exports = function (t, n) {
            return t && e(t, n, o)
        }
    }, function (t, n, r) {
        var e = r(48)();
        t.exports = e
    }, function (t, n, r) {
        var e = r(95), o = r(29), i = r(0), u = r(49), c = r(30), f = r(51), a = Object.prototype.hasOwnProperty;
        t.exports = function (t, n) {
            var r = i(t), s = !r && o(t), p = !r && !s && u(t), l = !r && !s && !p && f(t), v = r || s || p || l,
                h = v ? e(t.length, String) : [], d = h.length;
            for (var x in t) !n && !a.call(t, x) || v && ("length" == x || p && ("offset" == x || "parent" == x) || l && ("buffer" == x || "byteLength" == x || "byteOffset" == x) || c(x, d)) || h.push(x);
            return h
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var r = -1, e = Array(t); ++r < t;) e[r] = n(r);
            return e
        }
    }, function (t, n, r) {
        var e = r(7), o = r(9);
        t.exports = function (t) {
            return o(t) && "[object Arguments]" == e(t)
        }
    }, function (t, n) {
        t.exports = function () {
            return !1
        }
    }, function (t, n, r) {
        var e = r(7), o = r(31), i = r(9), u = {};
        u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, t.exports = function (t) {
            return i(t) && o(t.length) && !!u[e(t)]
        }
    }, function (t, n, r) {
        (function (t) {
            var e = r(46), o = n && !n.nodeType && n, i = o && "object" == typeof t && t && !t.nodeType && t,
                u = i && i.exports === o && e.process, c = function () {
                    try {
                        var t = i && i.require && i.require("util").types;
                        return t || u && u.binding && u.binding("util")
                    } catch (t) {
                    }
                }();
            t.exports = c
        }).call(this, r(50)(t))
    }, function (t, n) {
        var r = Object.prototype;
        t.exports = function (t) {
            var n = t && t.constructor;
            return t === ("function" == typeof n && n.prototype || r)
        }
    }, function (t, n, r) {
        var e = r(102)(Object.keys, Object);
        t.exports = e
    }, function (t, n) {
        t.exports = function (t, n) {
            return function (r) {
                return t(n(r))
            }
        }
    }, function (t, n, r) {
        var e = r(104), o = r(145), i = r(62);
        t.exports = function (t) {
            var n = o(t);
            return 1 == n.length && n[0][2] ? i(n[0][0], n[0][1]) : function (r) {
                return r === t || e(r, t, n)
            }
        }
    }, function (t, n, r) {
        var e = r(55), o = r(56);
        t.exports = function (t, n, r, i) {
            var u = r.length, c = u, f = !i;
            if (null == t) return !c;
            for (t = Object(t); u--;) {
                var a = r[u];
                if (f && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
            }
            for (; ++u < c;) {
                var s = (a = r[u])[0], p = t[s], l = a[1];
                if (f && a[2]) {
                    if (void 0 === p && !(s in t)) return !1
                } else {
                    var v = new e;
                    if (i) var h = i(p, l, s, t, n, v);
                    if (!(void 0 === h ? o(l, p, 3, i, v) : h)) return !1
                }
            }
            return !0
        }
    }, function (t, n) {
        t.exports = function () {
            this.__data__ = [], this.size = 0
        }
    }, function (t, n, r) {
        var e = r(19), o = Array.prototype.splice;
        t.exports = function (t) {
            var n = this.__data__, r = e(n, t);
            return !(r < 0) && (r == n.length - 1 ? n.pop() : o.call(n, r, 1), --this.size, !0)
        }
    }, function (t, n, r) {
        var e = r(19);
        t.exports = function (t) {
            var n = this.__data__, r = e(n, t);
            return r < 0 ? void 0 : n[r][1]
        }
    }, function (t, n, r) {
        var e = r(19);
        t.exports = function (t) {
            return e(this.__data__, t) > -1
        }
    }, function (t, n, r) {
        var e = r(19);
        t.exports = function (t, n) {
            var r = this.__data__, o = e(r, t);
            return o < 0 ? (++this.size, r.push([t, n])) : r[o][1] = n, this
        }
    }, function (t, n, r) {
        var e = r(18);
        t.exports = function () {
            this.__data__ = new e, this.size = 0
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = this.__data__, r = n.delete(t);
            return this.size = n.size, r
        }
    }, function (t, n) {
        t.exports = function (t) {
            return this.__data__.get(t)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return this.__data__.has(t)
        }
    }, function (t, n, r) {
        var e = r(18), o = r(33), i = r(34);
        t.exports = function (t, n) {
            var r = this.__data__;
            if (r instanceof e) {
                var u = r.__data__;
                if (!o || u.length < 199) return u.push([t, n]), this.size = ++r.size, this;
                r = this.__data__ = new i(u)
            }
            return r.set(t, n), this.size = r.size, this
        }
    }, function (t, n, r) {
        var e = r(116), o = r(18), i = r(33);
        t.exports = function () {
            this.size = 0, this.__data__ = {hash: new e, map: new (i || o), string: new e}
        }
    }, function (t, n, r) {
        var e = r(117), o = r(118), i = r(119), u = r(120), c = r(121);

        function f(t) {
            var n = -1, r = null == t ? 0 : t.length;
            for (this.clear(); ++n < r;) {
                var e = t[n];
                this.set(e[0], e[1])
            }
        }

        f.prototype.clear = e, f.prototype.delete = o, f.prototype.get = i, f.prototype.has = u, f.prototype.set = c, t.exports = f
    }, function (t, n, r) {
        var e = r(20);
        t.exports = function () {
            this.__data__ = e ? e(null) : {}, this.size = 0
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = this.has(t) && delete this.__data__[t];
            return this.size -= n ? 1 : 0, n
        }
    }, function (t, n, r) {
        var e = r(20), o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var n = this.__data__;
            if (e) {
                var r = n[t];
                return "__lodash_hash_undefined__" === r ? void 0 : r
            }
            return o.call(n, t) ? n[t] : void 0
        }
    }, function (t, n, r) {
        var e = r(20), o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var n = this.__data__;
            return e ? void 0 !== n[t] : o.call(n, t)
        }
    }, function (t, n, r) {
        var e = r(20);
        t.exports = function (t, n) {
            var r = this.__data__;
            return this.size += this.has(t) ? 0 : 1, r[t] = e && void 0 === n ? "__lodash_hash_undefined__" : n, this
        }
    }, function (t, n, r) {
        var e = r(21);
        t.exports = function (t) {
            var n = e(this, t).delete(t);
            return this.size -= n ? 1 : 0, n
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = typeof t;
            return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== t : null === t
        }
    }, function (t, n, r) {
        var e = r(21);
        t.exports = function (t) {
            return e(this, t).get(t)
        }
    }, function (t, n, r) {
        var e = r(21);
        t.exports = function (t) {
            return e(this, t).has(t)
        }
    }, function (t, n, r) {
        var e = r(21);
        t.exports = function (t, n) {
            var r = e(this, t), o = r.size;
            return r.set(t, n), this.size += r.size == o ? 0 : 1, this
        }
    }, function (t, n, r) {
        var e = r(55), o = r(57), i = r(132), u = r(136), c = r(60), f = r(0), a = r(49), s = r(51),
            p = "[object Object]", l = Object.prototype.hasOwnProperty;
        t.exports = function (t, n, r, v, h, d) {
            var x = f(t), y = f(n), g = x ? "[object Array]" : c(t), b = y ? "[object Array]" : c(n),
                m = (g = "[object Arguments]" == g ? p : g) == p, j = (b = "[object Arguments]" == b ? p : b) == p,
                _ = g == b;
            if (_ && a(t)) {
                if (!a(n)) return !1;
                x = !0, m = !1
            }
            if (_ && !m) return d || (d = new e), x || s(t) ? o(t, n, r, v, h, d) : i(t, n, g, r, v, h, d);
            if (!(1 & r)) {
                var w = m && l.call(t, "__wrapped__"), O = j && l.call(n, "__wrapped__");
                if (w || O) {
                    var S = w ? t.value() : t, A = O ? n.value() : n;
                    return d || (d = new e), h(S, A, r, v, d)
                }
            }
            return !!_ && (d || (d = new e), u(t, n, r, v, h, d))
        }
    }, function (t, n, r) {
        var e = r(34), o = r(129), i = r(130);

        function u(t) {
            var n = -1, r = null == t ? 0 : t.length;
            for (this.__data__ = new e; ++n < r;) this.add(t[n])
        }

        u.prototype.add = u.prototype.push = o, u.prototype.has = i, t.exports = u
    }, function (t, n) {
        t.exports = function (t) {
            return this.__data__.set(t, "__lodash_hash_undefined__"), this
        }
    }, function (t, n) {
        t.exports = function (t) {
            return this.__data__.has(t)
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return t.has(n)
        }
    }, function (t, n, r) {
        var e = r(10), o = r(133), i = r(32), u = r(57), c = r(134), f = r(135), a = e ? e.prototype : void 0,
            s = a ? a.valueOf : void 0;
        t.exports = function (t, n, r, e, a, p, l) {
            switch (r) {
                case"[object DataView]":
                    if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset) return !1;
                    t = t.buffer, n = n.buffer;
                case"[object ArrayBuffer]":
                    return !(t.byteLength != n.byteLength || !p(new o(t), new o(n)));
                case"[object Boolean]":
                case"[object Date]":
                case"[object Number]":
                    return i(+t, +n);
                case"[object Error]":
                    return t.name == n.name && t.message == n.message;
                case"[object RegExp]":
                case"[object String]":
                    return t == n + "";
                case"[object Map]":
                    var v = c;
                case"[object Set]":
                    var h = 1 & e;
                    if (v || (v = f), t.size != n.size && !h) return !1;
                    var d = l.get(t);
                    if (d) return d == n;
                    e |= 2, l.set(t, n);
                    var x = u(v(t), v(n), e, a, p, l);
                    return l.delete(t), x;
                case"[object Symbol]":
                    if (s) return s.call(t) == s.call(n)
            }
            return !1
        }
    }, function (t, n, r) {
        var e = r(2).Uint8Array;
        t.exports = e
    }, function (t, n) {
        t.exports = function (t) {
            var n = -1, r = Array(t.size);
            return t.forEach((function (t, e) {
                r[++n] = [e, t]
            })), r
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = -1, r = Array(t.size);
            return t.forEach((function (t) {
                r[++n] = t
            })), r
        }
    }, function (t, n, r) {
        var e = r(137), o = Object.prototype.hasOwnProperty;
        t.exports = function (t, n, r, i, u, c) {
            var f = 1 & r, a = e(t), s = a.length;
            if (s != e(n).length && !f) return !1;
            for (var p = s; p--;) {
                var l = a[p];
                if (!(f ? l in n : o.call(n, l))) return !1
            }
            var v = c.get(t), h = c.get(n);
            if (v && h) return v == n && h == t;
            var d = !0;
            c.set(t, n), c.set(n, t);
            for (var x = f; ++p < s;) {
                var y = t[l = a[p]], g = n[l];
                if (i) var b = f ? i(g, y, l, n, t, c) : i(y, g, l, t, n, c);
                if (!(void 0 === b ? y === g || u(y, g, r, i, c) : b)) {
                    d = !1;
                    break
                }
                x || (x = "constructor" == l)
            }
            if (d && !x) {
                var m = t.constructor, j = n.constructor;
                m != j && "constructor" in t && "constructor" in n && !("function" == typeof m && m instanceof m && "function" == typeof j && j instanceof j) && (d = !1)
            }
            return c.delete(t), c.delete(n), d
        }
    }, function (t, n, r) {
        var e = r(138), o = r(139), i = r(8);
        t.exports = function (t) {
            return e(t, i, o)
        }
    }, function (t, n, r) {
        var e = r(59), o = r(0);
        t.exports = function (t, n, r) {
            var i = n(t);
            return o(t) ? i : e(i, r(t))
        }
    }, function (t, n, r) {
        var e = r(35), o = r(140), i = Object.prototype.propertyIsEnumerable, u = Object.getOwnPropertySymbols,
            c = u ? function (t) {
                return null == t ? [] : (t = Object(t), e(u(t), (function (n) {
                    return i.call(t, n)
                })))
            } : o;
        t.exports = c
    }, function (t, n) {
        t.exports = function () {
            return []
        }
    }, function (t, n, r) {
        var e = r(6)(r(2), "DataView");
        t.exports = e
    }, function (t, n, r) {
        var e = r(6)(r(2), "Promise");
        t.exports = e
    }, function (t, n, r) {
        var e = r(6)(r(2), "Set");
        t.exports = e
    }, function (t, n, r) {
        var e = r(6)(r(2), "WeakMap");
        t.exports = e
    }, function (t, n, r) {
        var e = r(61), o = r(8);
        t.exports = function (t) {
            for (var n = o(t), r = n.length; r--;) {
                var i = n[r], u = t[i];
                n[r] = [i, u, e(u)]
            }
            return n
        }
    }, function (t, n, r) {
        var e = r(56), o = r(147), i = r(153), u = r(37), c = r(61), f = r(62), a = r(13);
        t.exports = function (t, n) {
            return u(t) && c(n) ? f(a(t), n) : function (r) {
                var u = o(r, t);
                return void 0 === u && u === n ? i(r, t) : e(n, u, 3)
            }
        }
    }, function (t, n, r) {
        var e = r(22);
        t.exports = function (t, n, r) {
            var o = null == t ? void 0 : e(t, n);
            return void 0 === o ? r : o
        }
    }, function (t, n, r) {
        var e = r(149),
            o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            i = /\\(\\)?/g, u = e((function (t) {
                var n = [];
                return 46 === t.charCodeAt(0) && n.push(""), t.replace(o, (function (t, r, e, o) {
                    n.push(e ? o.replace(i, "$1") : r || t)
                })), n
            }));
        t.exports = u
    }, function (t, n, r) {
        var e = r(150);
        t.exports = function (t) {
            var n = e(t, (function (t) {
                return 500 === r.size && r.clear(), t
            })), r = n.cache;
            return n
        }
    }, function (t, n, r) {
        var e = r(34);

        function o(t, n) {
            if ("function" != typeof t || null != n && "function" != typeof n) throw new TypeError("Expected a function");
            var r = function () {
                var e = arguments, o = n ? n.apply(this, e) : e[0], i = r.cache;
                if (i.has(o)) return i.get(o);
                var u = t.apply(this, e);
                return r.cache = i.set(o, u) || i, u
            };
            return r.cache = new (o.Cache || e), r
        }

        o.Cache = e, t.exports = o
    }, function (t, n, r) {
        var e = r(152);
        t.exports = function (t) {
            return null == t ? "" : e(t)
        }
    }, function (t, n, r) {
        var e = r(10), o = r(23), i = r(0), u = r(12), c = e ? e.prototype : void 0, f = c ? c.toString : void 0;
        t.exports = function t(n) {
            if ("string" == typeof n) return n;
            if (i(n)) return o(n, t) + "";
            if (u(n)) return f ? f.call(n) : "";
            var r = n + "";
            return "0" == r && 1 / n == -1 / 0 ? "-0" : r
        }
    }, function (t, n, r) {
        var e = r(154), o = r(155);
        t.exports = function (t, n) {
            return null != t && o(t, n, e)
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            return null != t && n in Object(t)
        }
    }, function (t, n, r) {
        var e = r(36), o = r(29), i = r(0), u = r(30), c = r(31), f = r(13);
        t.exports = function (t, n, r) {
            for (var a = -1, s = (n = e(n, t)).length, p = !1; ++a < s;) {
                var l = f(n[a]);
                if (!(p = null != t && r(t, l))) break;
                t = t[l]
            }
            return p || ++a != s ? p : !!(s = null == t ? 0 : t.length) && c(s) && u(l, s) && (i(t) || o(t))
        }
    }, function (t, n, r) {
        var e = r(63), o = r(157), i = r(37), u = r(13);
        t.exports = function (t) {
            return i(t) ? e(u(t)) : o(t)
        }
    }, function (t, n, r) {
        var e = r(22);
        t.exports = function (t) {
            return function (n) {
                return e(n, t)
            }
        }
    }, function (t, n, r) {
        t.exports = r(64)
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var r = -1, e = null == t ? 0 : t.length; ++r < e && !1 !== n(t[r], r, t);) ;
            return t
        }
    }, function (t, n, r) {
        t.exports = r(66)
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var r = null == t ? 0 : t.length; r-- && !1 !== n(t[r], r, t);) ;
            return t
        }
    }, function (t, n, r) {
        var e = r(163), o = r(8);
        t.exports = function (t, n) {
            return t && e(t, n, o)
        }
    }, function (t, n, r) {
        var e = r(48)(!0);
        t.exports = e
    }, function (t, n, r) {
        var e = r(165), o = r(166), i = r(1), u = r(0), c = r(15);
        t.exports = function (t, n, r) {
            var f = u(t) ? e : o;
            return r && c(t, n, r) && (n = void 0), f(t, i(n, 3))
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            for (var r = -1, e = null == t ? 0 : t.length; ++r < e;) if (!n(t[r], r, t)) return !1;
            return !0
        }
    }, function (t, n, r) {
        var e = r(4);
        t.exports = function (t, n) {
            var r = !0;
            return e(t, (function (t, e, o) {
                return r = !!n(t, e, o)
            })), r
        }
    }, function (t, n, r) {
        var e = r(35), o = r(68), i = r(1), u = r(0);
        t.exports = function (t, n) {
            return (u(t) ? e : o)(t, i(n, 3))
        }
    }, function (t, n, r) {
        var e = r(69)(r(169));
        t.exports = e
    }, function (t, n, r) {
        var e = r(38), o = r(1), i = r(16), u = Math.max;
        t.exports = function (t, n, r) {
            var c = null == t ? 0 : t.length;
            if (!c) return -1;
            var f = null == r ? 0 : i(r);
            return f < 0 && (f = u(c + f, 0)), e(t, o(n, 3), f)
        }
    }, function (t, n, r) {
        var e = r(69)(r(171));
        t.exports = e
    }, function (t, n, r) {
        var e = r(38), o = r(1), i = r(16), u = Math.max, c = Math.min;
        t.exports = function (t, n, r) {
            var f = null == t ? 0 : t.length;
            if (!f) return -1;
            var a = f - 1;
            return void 0 !== r && (a = i(r), a = r < 0 ? u(f + a, 0) : c(a, f - 1)), e(t, o(n, 3), a, !0)
        }
    }, function (t, n, r) {
        var e = r(24), o = r(25);
        t.exports = function (t, n) {
            return e(o(t, n), 1)
        }
    }, function (t, n, r) {
        var e = r(10), o = r(29), i = r(0), u = e ? e.isConcatSpreadable : void 0;
        t.exports = function (t) {
            return i(t) || o(t) || !!(u && t && t[u])
        }
    }, function (t, n, r) {
        var e = r(24), o = r(25);
        t.exports = function (t, n) {
            return e(o(t, n), 1 / 0)
        }
    }, function (t, n, r) {
        var e = r(24), o = r(25), i = r(16);
        t.exports = function (t, n, r) {
            return r = void 0 === r ? 1 : i(r), e(o(t, n), r)
        }
    }, function (t, n, r) {
        var e = r(28), o = r(17), i = Object.prototype.hasOwnProperty, u = o((function (t, n, r) {
            i.call(t, r) ? t[r].push(n) : e(t, r, [n])
        }));
        t.exports = u
    }, function (t, n, r) {
        var e = r(178), o = r(5), i = r(71), u = r(16), c = r(26), f = Math.max;
        t.exports = function (t, n, r, a) {
            t = o(t) ? t : c(t), r = r && !a ? u(r) : 0;
            var s = t.length;
            return r < 0 && (r = f(s + r, 0)), i(t) ? r <= s && t.indexOf(n, r) > -1 : !!s && e(t, n, r) > -1
        }
    }, function (t, n, r) {
        var e = r(38), o = r(179), i = r(180);
        t.exports = function (t, n, r) {
            return n == n ? i(t, n, r) : e(t, o, r)
        }
    }, function (t, n) {
        t.exports = function (t) {
            return t != t
        }
    }, function (t, n) {
        t.exports = function (t, n, r) {
            for (var e = r - 1, o = t.length; ++e < o;) if (t[e] === n) return e;
            return -1
        }
    }, function (t, n, r) {
        var e = r(23);
        t.exports = function (t, n) {
            return e(n, (function (n) {
                return t[n]
            }))
        }
    }, function (t, n, r) {
        var e = r(41), o = r(4), i = r(183), u = r(72), c = r(5), f = u((function (t, n, r) {
            var u = -1, f = "function" == typeof n, a = c(t) ? Array(t.length) : [];
            return o(t, (function (t) {
                a[++u] = f ? e(n, t, r) : i(t, n, r)
            })), a
        }));
        t.exports = f
    }, function (t, n, r) {
        var e = r(41), o = r(36), i = r(184), u = r(185), c = r(13);
        t.exports = function (t, n, r) {
            n = o(n, t);
            var f = null == (t = u(t, n)) ? t : t[c(i(n))];
            return null == f ? void 0 : e(f, t, r)
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = null == t ? 0 : t.length;
            return n ? t[n - 1] : void 0
        }
    }, function (t, n, r) {
        var e = r(22), o = r(186);
        t.exports = function (t, n) {
            return n.length < 2 ? t : e(t, o(n, 0, -1))
        }
    }, function (t, n) {
        t.exports = function (t, n, r) {
            var e = -1, o = t.length;
            n < 0 && (n = -n > o ? 0 : o + n), (r = r > o ? o : r) < 0 && (r += o), o = n > r ? 0 : r - n >>> 0, n >>>= 0;
            for (var i = Array(o); ++e < o;) i[e] = t[e + n];
            return i
        }
    }, function (t, n, r) {
        var e = r(41), o = Math.max;
        t.exports = function (t, n, r) {
            return n = o(void 0 === n ? t.length - 1 : n, 0), function () {
                for (var i = arguments, u = -1, c = o(i.length - n, 0), f = Array(c); ++u < c;) f[u] = i[n + u];
                u = -1;
                for (var a = Array(n + 1); ++u < n;) a[u] = i[u];
                return a[n] = r(f), e(t, this, a)
            }
        }
    }, function (t, n, r) {
        var e = r(189), o = r(191)(e);
        t.exports = o
    }, function (t, n, r) {
        var e = r(190), o = r(44), i = r(14), u = o ? function (t, n) {
            return o(t, "toString", {configurable: !0, enumerable: !1, value: e(n), writable: !0})
        } : i;
        t.exports = u
    }, function (t, n) {
        t.exports = function (t) {
            return function () {
                return t
            }
        }
    }, function (t, n) {
        var r = Date.now;
        t.exports = function (t) {
            var n = 0, e = 0;
            return function () {
                var o = r(), i = 16 - (o - e);
                if (e = o, i > 0) {
                    if (++n >= 800) return arguments[0]
                } else n = 0;
                return t.apply(void 0, arguments)
            }
        }
    }, function (t, n, r) {
        var e = r(28), o = r(17)((function (t, n, r) {
            e(t, r, n)
        }));
        t.exports = o
    }, function (t, n, r) {
        var e = r(73), o = r(0);
        t.exports = function (t, n, r, i) {
            return null == t ? [] : (o(n) || (n = null == n ? [] : [n]), o(r = i ? void 0 : r) || (r = null == r ? [] : [r]), e(t, n, r))
        }
    }, function (t, n) {
        t.exports = function (t, n) {
            var r = t.length;
            for (t.sort(n); r--;) t[r] = t[r].value;
            return t
        }
    }, function (t, n, r) {
        var e = r(196);
        t.exports = function (t, n, r) {
            for (var o = -1, i = t.criteria, u = n.criteria, c = i.length, f = r.length; ++o < c;) {
                var a = e(i[o], u[o]);
                if (a) return o >= f ? a : a * ("desc" == r[o] ? -1 : 1)
            }
            return t.index - n.index
        }
    }, function (t, n, r) {
        var e = r(12);
        t.exports = function (t, n) {
            if (t !== n) {
                var r = void 0 !== t, o = null === t, i = t == t, u = e(t), c = void 0 !== n, f = null === n,
                    a = n == n, s = e(n);
                if (!f && !s && !u && t > n || u && c && a && !f && !s || o && c && a || !r && a || !i) return 1;
                if (!o && !u && !s && t < n || s && r && i && !o && !u || f && r && i || !c && i || !a) return -1
            }
            return 0
        }
    }, function (t, n, r) {
        var e = r(17)((function (t, n, r) {
            t[r ? 0 : 1].push(n)
        }), (function () {
            return [[], []]
        }));
        t.exports = e
    }, function (t, n, r) {
        var e = r(199), o = r(4), i = r(1), u = r(74), c = r(0);
        t.exports = function (t, n, r) {
            var f = c(t) ? e : u, a = arguments.length < 3;
            return f(t, i(n, 4), r, a, o)
        }
    }, function (t, n) {
        t.exports = function (t, n, r, e) {
            var o = -1, i = null == t ? 0 : t.length;
            for (e && i && (r = t[++o]); ++o < i;) r = n(r, t[o], o, t);
            return r
        }
    }, function (t, n, r) {
        var e = r(201), o = r(67), i = r(1), u = r(74), c = r(0);
        t.exports = function (t, n, r) {
            var f = c(t) ? e : u, a = arguments.length < 3;
            return f(t, i(n, 4), r, a, o)
        }
    }, function (t, n) {
        t.exports = function (t, n, r, e) {
            var o = null == t ? 0 : t.length;
            for (e && o && (r = t[--o]); o--;) r = n(r, t[o], o, t);
            return r
        }
    }, function (t, n, r) {
        var e = r(35), o = r(68), i = r(1), u = r(0), c = r(203);
        t.exports = function (t, n) {
            return (u(t) ? e : o)(t, c(i(n, 3)))
        }
    }, function (t, n) {
        t.exports = function (t) {
            if ("function" != typeof t) throw new TypeError("Expected a function");
            return function () {
                var n = arguments;
                switch (n.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, n[0]);
                    case 2:
                        return !t.call(this, n[0], n[1]);
                    case 3:
                        return !t.call(this, n[0], n[1], n[2])
                }
                return !t.apply(this, n)
            }
        }
    }, function (t, n, r) {
        var e = r(75), o = r(205), i = r(0);
        t.exports = function (t) {
            return (i(t) ? e : o)(t)
        }
    }, function (t, n, r) {
        var e = r(75), o = r(26);
        t.exports = function (t) {
            return e(o(t))
        }
    }, function (t, n, r) {
        var e = r(207), o = r(208), i = r(0), u = r(15), c = r(16);
        t.exports = function (t, n, r) {
            return n = (r ? u(t, n, r) : void 0 === n) ? 1 : c(n), (i(t) ? e : o)(t, n)
        }
    }, function (t, n, r) {
        var e = r(43), o = r(76), i = r(27);
        t.exports = function (t, n) {
            return i(o(t), e(n, 0, t.length))
        }
    }, function (t, n, r) {
        var e = r(43), o = r(27), i = r(26);
        t.exports = function (t, n) {
            var r = i(t);
            return o(r, e(n, 0, r.length))
        }
    }, function (t, n, r) {
        var e = r(210), o = r(211), i = r(0);
        t.exports = function (t) {
            return (i(t) ? e : o)(t)
        }
    }, function (t, n, r) {
        var e = r(76), o = r(27);
        t.exports = function (t) {
            return o(e(t))
        }
    }, function (t, n, r) {
        var e = r(27), o = r(26);
        t.exports = function (t) {
            return e(o(t))
        }
    }, function (t, n, r) {
        var e = r(53), o = r(60), i = r(5), u = r(71), c = r(213);
        t.exports = function (t) {
            if (null == t) return 0;
            if (i(t)) return u(t) ? c(t) : t.length;
            var n = o(t);
            return "[object Map]" == n || "[object Set]" == n ? t.size : e(t).length
        }
    }, function (t, n, r) {
        var e = r(214), o = r(215), i = r(216);
        t.exports = function (t) {
            return o(t) ? i(t) : e(t)
        }
    }, function (t, n, r) {
        var e = r(63)("length");
        t.exports = e
    }, function (t, n) {
        var r = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
        t.exports = function (t) {
            return r.test(t)
        }
    }, function (t, n) {
        var r = "[\\ud800-\\udfff]", e = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            o = "\\ud83c[\\udffb-\\udfff]", i = "[^\\ud800-\\udfff]", u = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            c = "[\\ud800-\\udbff][\\udc00-\\udfff]", f = "(?:" + e + "|" + o + ")" + "?",
            a = "[\\ufe0e\\ufe0f]?" + f + ("(?:\\u200d(?:" + [i, u, c].join("|") + ")[\\ufe0e\\ufe0f]?" + f + ")*"),
            s = "(?:" + [i + e + "?", e, u, c, r].join("|") + ")", p = RegExp(o + "(?=" + o + ")|" + s + a, "g");
        t.exports = function (t) {
            for (var n = p.lastIndex = 0; p.test(t);) ++n;
            return n
        }
    }, function (t, n, r) {
        var e = r(58), o = r(1), i = r(218), u = r(0), c = r(15);
        t.exports = function (t, n, r) {
            var f = u(t) ? e : i;
            return r && c(t, n, r) && (n = void 0), f(t, o(n, 3))
        }
    }, function (t, n, r) {
        var e = r(4);
        t.exports = function (t, n) {
            var r;
            return e(t, (function (t, e, o) {
                return !(r = n(t, e, o))
            })), !!r
        }
    }, function (t, n, r) {
        var e = r(24), o = r(73), i = r(72), u = r(15), c = i((function (t, n) {
            if (null == t) return [];
            var r = n.length;
            return r > 1 && u(t, n[0], n[1]) ? n = [] : r > 2 && u(n[0], n[1], n[2]) && (n = [n[0]]), o(t, e(n, 1), [])
        }));
        t.exports = c
    }, function (t, n, r) {
        var e = r(43), o = r(40);
        t.exports = function (t, n, r) {
            return void 0 === r && (r = n, n = void 0), void 0 !== r && (r = (r = o(r)) == r ? r : 0), void 0 !== n && (n = (n = o(n)) == n ? n : 0), e(o(t), n, r)
        }
    }, function (t, n, r) {
        var e = r(222), o = r(39), i = r(40);
        t.exports = function (t, n, r) {
            return n = o(n), void 0 === r ? (r = n, n = 0) : r = o(r), t = i(t), e(t, n, r)
        }
    }, function (t, n) {
        var r = Math.max, e = Math.min;
        t.exports = function (t, n, o) {
            return t >= e(n, o) && t < r(n, o)
        }
    }, function (t, n, r) {
        var e = r(42), o = r(15), i = r(39), u = parseFloat, c = Math.min, f = Math.random;
        t.exports = function (t, n, r) {
            if (r && "boolean" != typeof r && o(t, n, r) && (n = r = void 0), void 0 === r && ("boolean" == typeof n ? (r = n, n = void 0) : "boolean" == typeof t && (r = t, t = void 0)), void 0 === t && void 0 === n ? (t = 0, n = 1) : (t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n)), t > n) {
                var a = t;
                t = n, n = a
            }
            if (r || t % 1 || n % 1) {
                var s = f();
                return c(t + s * (n - t + u("1e-" + ((s + "").length - 1))), n)
            }
            return e(t, n)
        }
    }, function (t, n, r) {
        "use strict";
        r.r(n);
        r(78);
        var e = [function () {
            var t = this.config, n = this.observer;
            !function r() {
                t.ctx.clearRect(0, 0, t.ctx.canvas.width, t.ctx.canvas.height), n.run(), requestAnimationFrame(r)
            }()
        }], o = function () {
            var t = this, n = {
                effect: "drop",
                dom: window,
                color: ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
                emoji: [],
                height: 20,
                width: 20,
                timer: 2e3,
                type: void 0
            };
            return t.config || (t.config = {}), t.config.emoji && (t.config.emoji instanceof Array && t.config.emoji.every((function (t) {
                return "string" == typeof t
            })) || delete t.config.emoji), t.config.dom && (t.config.dom = document.getElementsByClassName(t.config.dom)[0], t.config.dom instanceof Element || delete t.config.dom), Object.assign(n, t.config), t.config = n, !0
        }, i = [function () {
            var t = this.config;
            this.initDom = function () {
                t.cvs = document.createElement("canvas"), t.cvs.className = t.dom == window ? "vsClick" : "vsClick-dom", t.ctx = t.cvs.getContext("2d"), t.dom != window ? t.dom.appendChild(t.cvs) : document.body.appendChild(t.cvs)
            }, this.initDom()
        }], u = [function () {
            var t = this.config;
            this.initStyle = function () {
                t.cvs.height = t.dom.innerHeight || t.dom.clientHeight, t.cvs.width = t.dom.innerWidth || t.dom.clientWidth
            }, this.initStyle()
        }], c = [function () {
            var t = this;
            i.forEach((function (n) {
                n.call(t)
            }))
        }, function () {
            var t = this;
            u.forEach((function (n) {
                n.call(t)
            }))
        }], f = r(77), a = r.n(f), s = r(3), p = r.n(s);

        function l(t) {
            var n = this;
            n.option = {
                x: 0,
                y: 0,
                vx: parseFloat(p.a.random(-2, 2, !0).toPrecision(3)),
                vy: parseFloat(p.a.random(-2, 2, !0).toPrecision(3)),
                vdown: 0,
                g: .5,
                f: .95,
                b: .75,
                k: -5,
                width: 5,
                height: 5,
                timer: 1e3,
                context: void 0,
                color: "#000000",
                emoji: void 0,
                minish: !1,
                spring: !1,
                slide: !1,
                add: !1,
                lucency: !1,
                drop: !1
            }, Object.assign(n.option, t), t.color instanceof Array && (n.option.color = t.color[p.a.random(0, t.color.length - 1)]), t.vx instanceof Array && (n.option.vx = parseFloat(p.a.random(t.vx[0], t.vx[1], !0).toPrecision(3))), t.vy instanceof Array && (n.option.vy = parseFloat(p.a.random(t.vy[0], t.vy[1], !0).toPrecision(3))), t.emoji instanceof Array && (n.option.emoji = t.emoji[p.a.random(0, t.emoji.length - 1)]);
            var r = n.option;
            r.emoji ? (r.x = r.x - r.width / 1.5, r.y = r.y + r.height / 3) : (r.x = r.x - r.width / 2, r.y = r.y - r.height / 2), n.animation = function (t) {
                n.attrStyle(), r.lucency && n.attrLucency(t), r.add && n.attrAdd(), r.drop && n.attrDrop(), r.minish && n.attrMini(t), r.spring && n.attrSpring(), r.slide && !r.spring && n.attrSlide(), r.emoji ? n.renderText() : n.render()
            }, n.attrDrop = function () {
                r.x = r.x + r.vx, r.y = r.y + r.vy + r.vdown, r.vdown = r.vdown + r.g
            }, n.attrLucency = function (t) {
                var n = parseInt((r.timer - t) / r.timer * 255, 10);
                n = (n = n < 0 ? "0" : n.toString(16)).length < 2 ? "0" + n : n, r.ctx.fillStyle = r.color + n
            }, n.attrAdd = function () {
                r.x = r.x + r.vx, r.y = r.y + r.vy
            }, n.attrMini = function (t) {
                r.width_old = r.width_old ? r.width_old : r.width, r.height_old = r.height_old ? r.height_old : r.height;
                var n = (r.timer - t) / r.timer;
                n = n > 0 ? n : 0, r.width = r.width_old * n, r.height = r.height_old * n
            }, n.attrSpring = function () {
                var t = r.emoji ? r.height / 5 : r.height;
                r.y >= r.cvs.height - t && (r.vdown = 0, r.y = r.cvs.height - t, r.vy = (r.vy + r.k) * r.b, r.vx = r.vx * r.f, r.k = 0)
            }, n.attrSlide = function () {
                var t = r.emoji ? r.height / 5 : r.height;
                r.y >= r.cvs.height - t && (r.vydown = 0, r.y = r.cvs.height - t, r.vx = r.vx * r.f)
            }, n.attrStyle = function () {
                r.ctx.fillStyle = r.color
            }, n.render = function () {
                r.ctx.beginPath(), r.ctx.fillRect(r.x, r.y, r.width, r.height)
            }, n.renderText = function () {
                r.ctx.beginPath(), r.ctx.font = r.width + "px serif", r.ctx.fillText(r.emoji, r.x, r.y)
            }
        }

        function v() {
            var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            this.option = {}, Object.assign(this.option, n);
            var r = this.option, e = r.Particle, o = r.width, i = r.height, u = r.observer, c = function (n) {
                var r = new e(Object.assign(t.option, n));
                u.set((function (t, n) {
                    r.animation(t), t > r.option.timer && u.remove(n)
                }))
            };
            this.sudoku = function (t) {
                setTimeout(c, 0, {x: t.x, y: t.y}), setTimeout(c, 50, {
                    x: t.x,
                    y: t.y - i
                }), setTimeout(c, 100, {x: t.x + o, y: t.y}), setTimeout(c, 150, {
                    x: t.x + o,
                    y: t.y - i
                }), setTimeout(c, 200, {x: t.x - o, y: t.y}), setTimeout(c, 250, {
                    x: t.x,
                    y: t.y + i
                }), setTimeout(c, 300, {x: t.x + o, y: t.y + i}), setTimeout(c, 350, {
                    x: t.x - o,
                    y: t.y - i
                }), setTimeout(c, 400, {x: t.x - o, y: t.y + i})
            }, this.timer = function (t) {
                for (var n = 0; n < 10; n++) setTimeout(c, 50 * n, {x: t.x, y: t.y})
            }, this.sync = function (t) {
                for (var n = 0; n < 10; n++) c({x: t.x, y: t.y})
            }
        }

        var h = [function () {
            var t = this.config, n = this.observer;
            this.effectStart = new v({
                Particle: l,
                observer: n,
                height: t.height,
                width: t.width,
                ctx: t.ctx,
                cvs: t.cvs,
                color: t.color,
                emoji: t.emoji,
                timer: t.timer,
                lucency: !0
            })[t.type || "sudoku"]
        }, function () {
            var t = this.config, n = this.observer;
            "spread" === t.effect && (this.effectStart = new v({
                Particle: l,
                observer: n,
                height: t.height,
                width: t.width,
                ctx: t.ctx,
                cvs: t.cvs,
                color: t.color,
                emoji: t.emoji,
                timer: t.timer,
                add: !0,
                lucency: t.lucency || !1,
                minish: t.minish || !1
            })[t.type || "sync"])
        }, function () {
            var t = this.config, n = this.observer;
            "drop" === t.effect && (this.effectStart = new v({
                Particle: l,
                observer: n,
                height: t.height,
                width: t.width,
                ctx: t.ctx,
                cvs: t.cvs,
                color: t.color,
                emoji: t.emoji,
                timer: t.timer,
                drop: !0,
                spring: t.spring,
                slide: t.slide,
                vy: [-5, 0]
            })[t.type || "sync"])
        }];
        r.d(n, "default", (function () {
            return x
        })), console.log("\n%c VsClick by%c https://blog.iocdacc.com \n", "color: #fff;background-image: linear-gradient(90deg, rgb(47, 172, 178) 0%, rgb(45, 190, 96) 100%);padding:5px 1px;", "color: #fff;background-image: linear-gradient(90deg, rgb(45, 190, 96) 0%, rgb(255, 255, 255) 100%);padding:5px 0;width: 200px;display: inline-block;");
        var d = [function () {
            var t = [];
            this.observer = {
                set: function (n) {
                    t.push({fun: n, time: 0})
                }, run: function () {
                    t.length > 0 && a.a.forEachRight(t, (function (t, n) {
                        0 === t.time && (t.time = Date.now()), t.fun(Date.now() - t.time, n)
                    }))
                }, remove: function (n) {
                    t.splice(n, 1)
                }
            }
        }, function () {
            var t = this;
            c.forEach((function (n) {
                n.call(t)
            }))
        }, function () {
            var t = this;
            h.forEach((function (n) {
                return n.call(t)
            }))
        }, function () {
            var t = this;
            e.forEach((function (n) {
                n.call(t)
            }))
        }, function () {
            var t = this, n = t.config;
            n.dom.onclick = function (r) {
                var e = n.dom == window ? r.clientX : r.layerX, o = n.dom == window ? r.clientY : r.layerY;
                t.effectStart({x: e, y: o})
            }
        }];

        function x() {
            var t = this;
            this.config = arguments.length <= 0 ? void 0 : arguments[0], o.call(this) && d.forEach((function (n) {
                n.call(t)
            }))
        }
    }]).default
}));