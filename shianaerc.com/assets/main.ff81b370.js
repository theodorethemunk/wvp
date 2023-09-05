(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload")) return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) t(i);
    new MutationObserver(i => {
        for (const n of i)
            if (n.type === "childList")
                for (const s of n.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && t(s)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function r(i) {
        const n = {};
        return i.integrity && (n.integrity = i.integrity), i.referrerpolicy && (n.referrerPolicy = i.referrerpolicy), i.crossorigin === "use-credentials" ? n.credentials = "include" : i.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function t(i) {
        if (i.ep) return;
        i.ep = !0;
        const n = r(i);
        fetch(i.href, n)
    }
})();

function Gt(a) {
    if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return a
}

function So(a, e) {
    a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.__proto__ = e
}
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var ht = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    ni = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    ys, Je, me, vt = 1e8,
    j = 1 / vt,
    Hn = Math.PI * 2,
    Ua = Hn / 4,
    $a = 0,
    ko = Math.sqrt,
    Ga = Math.cos,
    qa = Math.sin,
    Ce = function(e) {
        return typeof e == "string"
    },
    ce = function(e) {
        return typeof e == "function"
    },
    jt = function(e) {
        return typeof e == "number"
    },
    vs = function(e) {
        return typeof e > "u"
    },
    Vt = function(e) {
        return typeof e == "object"
    },
    et = function(e) {
        return e !== !1
    },
    Po = function() {
        return typeof window < "u"
    },
    Gi = function(e) {
        return ce(e) || Ce(e)
    },
    Co = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    Ne = Array.isArray,
    Zn = /(?:-?\.?\d|\.)+/gi,
    Oo = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Zr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    An = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    Mo = /[+-]=-?[.\d]+/,
    Do = /[^,'"\[\]\s]+/gi,
    Ha = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    ne, mt, Kn, xs, _t = {},
    pn = {},
    Eo, Ao = function(e) {
        return (pn = Lr(e, _t)) && dt
    },
    bs = function(e, r) {
        return console.warn("Invalid property", e, "set to", r, "Missing plugin? gsap.registerPlugin()")
    },
    gn = function(e, r) {
        return !r && console.warn(e)
    },
    Ro = function(e, r) {
        return e && (_t[e] = r) && pn && (pn[e] = r) || _t
    },
    Bi = function() {
        return 0
    },
    Za = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    sn = {
        suppressEvents: !0,
        kill: !1
    },
    Ka = {
        suppressEvents: !0
    },
    Ts = {},
    cr = [],
    jn = {},
    Lo, lt = {},
    Rn = {},
    Xs = 30,
    on = [],
    ws = "",
    Ss = function(e) {
        var r = e[0],
            t, i;
        if (Vt(r) || ce(r) || (e = [e]), !(t = (r._gsap || {}).harness)) {
            for (i = on.length; i-- && !on[i].targetTest(r););
            t = on[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new ra(e[i], t))) || e.splice(i, 1);
        return e
    },
    Or = function(e) {
        return e._gsap || Ss(xt(e))[0]._gsap
    },
    Fo = function(e, r, t) {
        return (t = e[r]) && ce(t) ? e[r]() : vs(t) && e.getAttribute && e.getAttribute(r) || t
    },
    tt = function(e, r) {
        return (e = e.split(",")).forEach(r) || e
    },
    de = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    De = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Jr = function(e, r) {
        var t = r.charAt(0),
            i = parseFloat(r.substr(2));
        return e = parseFloat(e), t === "+" ? e + i : t === "-" ? e - i : t === "*" ? e * i : e / i
    },
    ja = function(e, r) {
        for (var t = r.length, i = 0; e.indexOf(r[i]) < 0 && ++i < t;);
        return i < t
    },
    mn = function() {
        var e = cr.length,
            r = cr.slice(0),
            t, i;
        for (jn = {}, cr.length = 0, t = 0; t < e; t++) i = r[t], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    },
    zo = function(e, r, t, i) {
        cr.length && mn(), e.render(r, t, i || Je && r < 0 && (e._initted || e._startAt)), cr.length && mn()
    },
    Io = function(e) {
        var r = parseFloat(e);
        return (r || r === 0) && (e + "").match(Do).length < 2 ? r : Ce(e) ? e.trim() : e
    },
    Bo = function(e) {
        return e
    },
    wt = function(e, r) {
        for (var t in r) t in e || (e[t] = r[t]);
        return e
    },
    Qa = function(e) {
        return function(r, t) {
            for (var i in t) i in r || i === "duration" && e || i === "ease" || (r[i] = t[i])
        }
    },
    Lr = function(e, r) {
        for (var t in r) e[t] = r[t];
        return e
    },
    Vs = function a(e, r) {
        for (var t in r) t !== "__proto__" && t !== "constructor" && t !== "prototype" && (e[t] = Vt(r[t]) ? a(e[t] || (e[t] = {}), r[t]) : r[t]);
        return e
    },
    yn = function(e, r) {
        var t = {},
            i;
        for (i in e) i in r || (t[i] = e[i]);
        return t
    },
    Oi = function(e) {
        var r = e.parent || ne,
            t = e.keyframes ? Qa(Ne(e.keyframes)) : wt;
        if (et(e.inherit))
            for (; r;) t(e, r.vars.defaults), r = r.parent || r._dp;
        return e
    },
    Ja = function(e, r) {
        for (var t = e.length, i = t === r.length; i && t-- && e[t] === r[t];);
        return t < 0
    },
    No = function(e, r, t, i, n) {
        t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
        var s = e[i],
            o;
        if (n)
            for (o = r[n]; s && s[n] > o;) s = s._prev;
        return s ? (r._next = s._next, s._next = r) : (r._next = e[t], e[t] = r), r._next ? r._next._prev = r : e[i] = r, r._prev = s, r.parent = r._dp = e, r
    },
    Cn = function(e, r, t, i) {
        t === void 0 && (t = "_first"), i === void 0 && (i = "_last");
        var n = r._prev,
            s = r._next;
        n ? n._next = s : e[t] === r && (e[t] = s), s ? s._prev = n : e[i] === r && (e[i] = n), r._next = r._prev = r.parent = null
    },
    dr = function(e, r) {
        e.parent && (!r || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
    },
    Mr = function(e, r) {
        if (e && (!r || r._end > e._dur || r._start < 0))
            for (var t = e; t;) t._dirty = 1, t = t.parent;
        return e
    },
    eu = function(e) {
        for (var r = e.parent; r && r.parent;) r._dirty = 1, r.totalDuration(), r = r.parent;
        return e
    },
    Qn = function(e, r, t, i) {
        return e._startAt && (Je ? e._startAt.revert(sn) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(r, !0, i))
    },
    tu = function a(e) {
        return !e || e._ts && a(e.parent)
    },
    Ws = function(e) {
        return e._repeat ? si(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    si = function(e, r) {
        var t = Math.floor(e /= r);
        return e && t === e ? t - 1 : t
    },
    vn = function(e, r) {
        return (e - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
    },
    On = function(e) {
        return e._end = De(e._start + (e._tDur / Math.abs(e._ts || e._rts || j) || 0))
    },
    Mn = function(e, r) {
        var t = e._dp;
        return t && t.smoothChildTiming && e._ts && (e._start = De(t._time - (e._ts > 0 ? r / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - r) / -e._ts)), On(e), t._dirty || Mr(t, e)), e
    },
    Yo = function(e, r) {
        var t;
        if ((r._time || r._initted && !r._dur) && (t = vn(e.rawTime(), r), (!r._dur || $i(0, r.totalDuration(), t) - r._tTime > j) && r.render(t, !0)), Mr(e, r)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (t = e; t._dp;) t.rawTime() >= 0 && t.totalTime(t._tTime), t = t._dp;
            e._zTime = -j
        }
    },
    It = function(e, r, t, i) {
        return r.parent && dr(r), r._start = De((jt(t) ? t : t || e !== ne ? gt(e, t, r) : e._time) + r._delay), r._end = De(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), No(e, r, "_first", "_last", e._sort ? "_start" : 0), Jn(r) || (e._recent = r), i || Yo(e, r), e._ts < 0 && Mn(e, e._tTime), e
    },
    Xo = function(e, r) {
        return (_t.ScrollTrigger || bs("scrollTrigger", r)) && _t.ScrollTrigger.create(r, e)
    },
    Vo = function(e, r, t, i, n) {
        if (Ps(e, r, n), !e._initted) return 1;
        if (!t && e._pt && !Je && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Lo !== ft.frame) return cr.push(e), e._lazy = [n, i], 1
    },
    ru = function a(e) {
        var r = e.parent;
        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || a(r))
    },
    Jn = function(e) {
        var r = e.data;
        return r === "isFromStart" || r === "isStart"
    },
    iu = function(e, r, t, i) {
        var n = e.ratio,
            s = r < 0 || !r && (!e._start && ru(e) && !(!e._initted && Jn(e)) || (e._ts < 0 || e._dp._ts < 0) && !Jn(e)) ? 0 : 1,
            o = e._rDelay,
            u = 0,
            l, f, d;
        if (o && e._repeat && (u = $i(0, e._tDur, r), f = si(u, o), e._yoyo && f & 1 && (s = 1 - s), f !== si(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || Je || i || e._zTime === j || !r && e._zTime) {
            if (!e._initted && Vo(e, r, i, t, u)) return;
            for (d = e._zTime, e._zTime = r || (t ? j : 0), t || (t = r && !d), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = u, l = e._pt; l;) l.r(s, l.d), l = l._next;
            r < 0 && Qn(e, r, t, !0), e._onUpdate && !t && bt(e, "onUpdate"), u && e._repeat && !t && e.parent && bt(e, "onRepeat"), (r >= e._tDur || r < 0) && e.ratio === s && (s && dr(e, 1), !t && !Je && (bt(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = r)
    },
    nu = function(e, r, t) {
        var i;
        if (t > r)
            for (i = e._first; i && i._start <= t;) {
                if (i.data === "isPause" && i._start > r) return i;
                i = i._next
            } else
                for (i = e._last; i && i._start >= t;) {
                    if (i.data === "isPause" && i._start < r) return i;
                    i = i._prev
                }
    },
    oi = function(e, r, t, i) {
        var n = e._repeat,
            s = De(r) || 0,
            o = e._tTime / e._tDur;
        return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : De(s * (n + 1) + e._rDelay * n) : s, o > 0 && !i && Mn(e, e._tTime = e._tDur * o), e.parent && On(e), t || Mr(e.parent, e), e
    },
    Us = function(e) {
        return e instanceof Qe ? Mr(e) : oi(e, e._dur)
    },
    su = {
        _start: 0,
        endTime: Bi,
        totalDuration: Bi
    },
    gt = function a(e, r, t) {
        var i = e.labels,
            n = e._recent || su,
            s = e.duration() >= vt ? n.endTime(!1) : e._dur,
            o, u, l;
        return Ce(r) && (isNaN(r) || r in i) ? (u = r.charAt(0), l = r.substr(-1) === "%", o = r.indexOf("="), u === "<" || u === ">" ? (o >= 0 && (r = r.replace(/=/, "")), (u === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (l ? (o < 0 ? n : t).totalDuration() / 100 : 1)) : o < 0 ? (r in i || (i[r] = s), i[r]) : (u = parseFloat(r.charAt(o - 1) + r.substr(o + 1)), l && t && (u = u / 100 * (Ne(t) ? t[0] : t).totalDuration()), o > 1 ? a(e, r.substr(0, o - 1), t) + u : s + u)) : r == null ? s : +r
    },
    Mi = function(e, r, t) {
        var i = jt(r[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            s = r[n],
            o, u;
        if (i && (s.duration = r[1]), s.parent = t, e) {
            for (o = s, u = t; u && !("immediateRender" in o);) o = u.vars.defaults || {}, u = et(u.vars.inherit) && u.parent;
            s.immediateRender = et(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = r[n - 1]
        }
        return new be(r[0], s, r[n + 1])
    },
    mr = function(e, r) {
        return e || e === 0 ? r(e) : r
    },
    $i = function(e, r, t) {
        return t < e ? e : t > r ? r : t
    },
    Ie = function(e, r) {
        return !Ce(e) || !(r = Ha.exec(e)) ? "" : r[1]
    },
    ou = function(e, r, t) {
        return mr(t, function(i) {
            return $i(e, r, i)
        })
    },
    es = [].slice,
    Wo = function(e, r) {
        return e && Vt(e) && "length" in e && (!r && !e.length || e.length - 1 in e && Vt(e[0])) && !e.nodeType && e !== mt
    },
    au = function(e, r, t) {
        return t === void 0 && (t = []), e.forEach(function(i) {
            var n;
            return Ce(i) && !r || Wo(i, 1) ? (n = t).push.apply(n, xt(i)) : t.push(i)
        }) || t
    },
    xt = function(e, r, t) {
        return me && !r && me.selector ? me.selector(e) : Ce(e) && !t && (Kn || !ai()) ? es.call((r || xs).querySelectorAll(e), 0) : Ne(e) ? au(e, t) : Wo(e) ? es.call(e, 0) : e ? [e] : []
    },
    ts = function(e) {
        return e = xt(e)[0] || gn("Invalid scope") || {},
            function(r) {
                var t = e.current || e.nativeElement || e;
                return xt(r, t.querySelectorAll ? t : t === e ? gn("Invalid scope") || xs.createElement("div") : e)
            }
    },
    Uo = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    $o = function(e) {
        if (ce(e)) return e;
        var r = Vt(e) ? e : {
                each: e
            },
            t = Dr(r.ease),
            i = r.from || 0,
            n = parseFloat(r.base) || 0,
            s = {},
            o = i > 0 && i < 1,
            u = isNaN(i) || o,
            l = r.axis,
            f = i,
            d = i;
        return Ce(i) ? f = d = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !o && u && (f = i[0], d = i[1]),
            function(c, h, p) {
                var _ = (p || r).length,
                    m = s[_],
                    y, b, T, v, k, C, S, O, P;
                if (!m) {
                    if (P = r.grid === "auto" ? 0 : (r.grid || [1, vt])[1], !P) {
                        for (S = -vt; S < (S = p[P++].getBoundingClientRect().left) && P < _;);
                        P--
                    }
                    for (m = s[_] = [], y = u ? Math.min(P, _) * f - .5 : i % P, b = P === vt ? 0 : u ? _ * d / P - .5 : i / P | 0, S = 0, O = vt, C = 0; C < _; C++) T = C % P - y, v = b - (C / P | 0), m[C] = k = l ? Math.abs(l === "y" ? v : T) : ko(T * T + v * v), k > S && (S = k), k < O && (O = k);
                    i === "random" && Uo(m), m.max = S - O, m.min = O, m.v = _ = (parseFloat(r.amount) || parseFloat(r.each) * (P > _ ? _ - 1 : l ? l === "y" ? _ / P : P : Math.max(P, _ / P)) || 0) * (i === "edges" ? -1 : 1), m.b = _ < 0 ? n - _ : n, m.u = Ie(r.amount || r.each) || 0, t = t && _ < 0 ? Jo(t) : t
                }
                return _ = (m[c] - m.min) / m.max || 0, De(m.b + (t ? t(_) : _) * m.v) + m.u
            }
    },
    rs = function(e) {
        var r = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(t) {
            var i = De(Math.round(parseFloat(t) / e) * e * r);
            return (i - i % 1) / r + (jt(t) ? 0 : Ie(t))
        }
    },
    Go = function(e, r) {
        var t = Ne(e),
            i, n;
        return !t && Vt(e) && (i = t = e.radius || vt, e.values ? (e = xt(e.values), (n = !jt(e[0])) && (i *= i)) : e = rs(e.increment)), mr(r, t ? ce(e) ? function(s) {
            return n = e(s), Math.abs(n - s) <= i ? n : s
        } : function(s) {
            for (var o = parseFloat(n ? s.x : s), u = parseFloat(n ? s.y : 0), l = vt, f = 0, d = e.length, c, h; d--;) n ? (c = e[d].x - o, h = e[d].y - u, c = c * c + h * h) : c = Math.abs(e[d] - o), c < l && (l = c, f = d);
            return f = !i || l <= i ? e[f] : s, n || f === s || jt(s) ? f : f + Ie(s)
        } : rs(e))
    },
    qo = function(e, r, t, i) {
        return mr(Ne(e) ? !r : t === !0 ? !!(t = 0) : !i, function() {
            return Ne(e) ? e[~~(Math.random() * e.length)] : (t = t || 1e-5) && (i = t < 1 ? Math.pow(10, (t + "").length - 2) : 1) && Math.floor(Math.round((e - t / 2 + Math.random() * (r - e + t * .99)) / t) * t * i) / i
        })
    },
    uu = function() {
        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
        return function(i) {
            return r.reduce(function(n, s) {
                return s(n)
            }, i)
        }
    },
    lu = function(e, r) {
        return function(t) {
            return e(parseFloat(t)) + (r || Ie(t))
        }
    },
    fu = function(e, r, t) {
        return Zo(e, r, 0, 1, t)
    },
    Ho = function(e, r, t) {
        return mr(t, function(i) {
            return e[~~r(i)]
        })
    },
    cu = function a(e, r, t) {
        var i = r - e;
        return Ne(e) ? Ho(e, a(0, e.length), r) : mr(t, function(n) {
            return (i + (n - e) % i) % i + e
        })
    },
    hu = function a(e, r, t) {
        var i = r - e,
            n = i * 2;
        return Ne(e) ? Ho(e, a(0, e.length - 1), r) : mr(t, function(s) {
            return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s)
        })
    },
    Ni = function(e) {
        for (var r = 0, t = "", i, n, s, o; ~(i = e.indexOf("random(", r));) s = e.indexOf(")", i), o = e.charAt(i + 7) === "[", n = e.substr(i + 7, s - i - 7).match(o ? Do : Zn), t += e.substr(r, i - r) + qo(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), r = s + 1;
        return t + e.substr(r, e.length - r)
    },
    Zo = function(e, r, t, i, n) {
        var s = r - e,
            o = i - t;
        return mr(n, function(u) {
            return t + ((u - e) / s * o || 0)
        })
    },
    _u = function a(e, r, t, i) {
        var n = isNaN(e + r) ? 0 : function(h) {
            return (1 - h) * e + h * r
        };
        if (!n) {
            var s = Ce(e),
                o = {},
                u, l, f, d, c;
            if (t === !0 && (i = 1) && (t = null), s) e = {
                p: e
            }, r = {
                p: r
            };
            else if (Ne(e) && !Ne(r)) {
                for (f = [], d = e.length, c = d - 2, l = 1; l < d; l++) f.push(a(e[l - 1], e[l]));
                d--, n = function(p) {
                    p *= d;
                    var _ = Math.min(c, ~~p);
                    return f[_](p - _)
                }, t = r
            } else i || (e = Lr(Ne(e) ? [] : {}, e));
            if (!f) {
                for (u in r) ks.call(o, e, u, "get", r[u]);
                n = function(p) {
                    return Ms(p, o) || (s ? e.p : e)
                }
            }
        }
        return mr(t, n)
    },
    $s = function(e, r, t) {
        var i = e.labels,
            n = vt,
            s, o, u;
        for (s in i) o = i[s] - r, o < 0 == !!t && o && n > (o = Math.abs(o)) && (u = s, n = o);
        return u
    },
    bt = function(e, r, t) {
        var i = e.vars,
            n = i[r],
            s = me,
            o = e._ctx,
            u, l, f;
        if (!!n) return u = i[r + "Params"], l = i.callbackScope || e, t && cr.length && mn(), o && (me = o), f = u ? n.apply(l, u) : n.call(l), me = s, f
    },
    wi = function(e) {
        return dr(e), e.scrollTrigger && e.scrollTrigger.kill(!!Je), e.progress() < 1 && bt(e, "onInterrupt"), e
    },
    Kr, du = function(e) {
        e = !e.name && e.default || e;
        var r = e.name,
            t = ce(e),
            i = r && !t && e.init ? function() {
                this._props = []
            } : e,
            n = {
                init: Bi,
                render: Ms,
                add: ks,
                kill: Du,
                modifier: Mu,
                rawVars: 0
            },
            s = {
                targetTest: 0,
                get: 0,
                getSetter: Os,
                aliases: {},
                register: 0
            };
        if (ai(), e !== i) {
            if (lt[r]) return;
            wt(i, wt(yn(e, n), s)), Lr(i.prototype, Lr(n, yn(e, s))), lt[i.prop = r] = i, e.targetTest && (on.push(i), Ts[r] = 1), r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
        }
        Ro(r, i), e.register && e.register(dt, i, rt)
    },
    J = 255,
    Si = {
        aqua: [0, J, J],
        lime: [0, J, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, J],
        navy: [0, 0, 128],
        white: [J, J, J],
        olive: [128, 128, 0],
        yellow: [J, J, 0],
        orange: [J, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [J, 0, 0],
        pink: [J, 192, 203],
        cyan: [0, J, J],
        transparent: [J, J, J, 0]
    },
    Ln = function(e, r, t) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? r + (t - r) * e * 6 : e < .5 ? t : e * 3 < 2 ? r + (t - r) * (2 / 3 - e) * 6 : r) * J + .5 | 0
    },
    Ko = function(e, r, t) {
        var i = e ? jt(e) ? [e >> 16, e >> 8 & J, e & J] : 0 : Si.black,
            n, s, o, u, l, f, d, c, h, p;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Si[e]) i = Si[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & J, i & J, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & J, e & J]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = p = e.match(Zn), !r) u = +i[0] % 360 / 360, l = +i[1] / 100, f = +i[2] / 100, s = f <= .5 ? f * (l + 1) : f + l - f * l, n = f * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = Ln(u + 1 / 3, n, s), i[1] = Ln(u, n, s), i[2] = Ln(u - 1 / 3, n, s);
                else if (~e.indexOf("=")) return i = e.match(Oo), t && i.length < 4 && (i[3] = 1), i
            } else i = e.match(Zn) || Si.transparent;
            i = i.map(Number)
        }
        return r && !p && (n = i[0] / J, s = i[1] / J, o = i[2] / J, d = Math.max(n, s, o), c = Math.min(n, s, o), f = (d + c) / 2, d === c ? u = l = 0 : (h = d - c, l = f > .5 ? h / (2 - d - c) : h / (d + c), u = d === n ? (s - o) / h + (s < o ? 6 : 0) : d === s ? (o - n) / h + 2 : (n - s) / h + 4, u *= 60), i[0] = ~~(u + .5), i[1] = ~~(l * 100 + .5), i[2] = ~~(f * 100 + .5)), t && i.length < 4 && (i[3] = 1), i
    },
    jo = function(e) {
        var r = [],
            t = [],
            i = -1;
        return e.split(hr).forEach(function(n) {
            var s = n.match(Zr) || [];
            r.push.apply(r, s), t.push(i += s.length + 1)
        }), r.c = t, r
    },
    Gs = function(e, r, t) {
        var i = "",
            n = (e + i).match(hr),
            s = r ? "hsla(" : "rgba(",
            o = 0,
            u, l, f, d;
        if (!n) return e;
        if (n = n.map(function(c) {
                return (c = Ko(c, r, 1)) && s + (r ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
            }), t && (f = jo(e), u = t.c, u.join(i) !== f.c.join(i)))
            for (l = e.replace(hr, "1").split(Zr), d = l.length - 1; o < d; o++) i += l[o] + (~u.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (f.length ? f : n.length ? n : t).shift());
        if (!l)
            for (l = e.split(hr), d = l.length - 1; o < d; o++) i += l[o] + n[o];
        return i + l[d]
    },
    hr = function() {
        var a = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in Si) a += "|" + e + "\\b";
        return new RegExp(a + ")", "gi")
    }(),
    pu = /hsl[a]?\(/,
    Qo = function(e) {
        var r = e.join(" "),
            t;
        if (hr.lastIndex = 0, hr.test(r)) return t = pu.test(r), e[1] = Gs(e[1], t), e[0] = Gs(e[0], t, jo(e[1])), !0
    },
    Yi, ft = function() {
        var a = Date.now,
            e = 500,
            r = 33,
            t = a(),
            i = t,
            n = 1e3 / 240,
            s = n,
            o = [],
            u, l, f, d, c, h, p = function _(m) {
                var y = a() - i,
                    b = m === !0,
                    T, v, k, C;
                if (y > e && (t += y - r), i += y, k = i - t, T = k - s, (T > 0 || b) && (C = ++d.frame, c = k - d.time * 1e3, d.time = k = k / 1e3, s += T + (T >= n ? 4 : n - T), v = 1), b || (u = l(_)), v)
                    for (h = 0; h < o.length; h++) o[h](k, c, C, m)
            };
        return d = {
            time: 0,
            frame: 0,
            tick: function() {
                p(!0)
            },
            deltaRatio: function(m) {
                return c / (1e3 / (m || 60))
            },
            wake: function() {
                Eo && (!Kn && Po() && (mt = Kn = window, xs = mt.document || {}, _t.gsap = dt, (mt.gsapVersions || (mt.gsapVersions = [])).push(dt.version), Ao(pn || mt.GreenSockGlobals || !mt.gsap && mt || {}), f = mt.requestAnimationFrame), u && d.sleep(), l = f || function(m) {
                    return setTimeout(m, s - d.time * 1e3 + 1 | 0)
                }, Yi = 1, p(2))
            },
            sleep: function() {
                (f ? mt.cancelAnimationFrame : clearTimeout)(u), Yi = 0, l = Bi
            },
            lagSmoothing: function(m, y) {
                e = m || 1 / j, r = Math.min(y, e, 0)
            },
            fps: function(m) {
                n = 1e3 / (m || 240), s = d.time * 1e3 + n
            },
            add: function(m, y, b) {
                var T = y ? function(v, k, C, S) {
                    m(v, k, C, S), d.remove(T)
                } : m;
                return d.remove(m), o[b ? "unshift" : "push"](T), ai(), T
            },
            remove: function(m, y) {
                ~(y = o.indexOf(m)) && o.splice(y, 1) && h >= y && h--
            },
            _listeners: o
        }, d
    }(),
    ai = function() {
        return !Yi && ft.wake()
    },
    $ = {},
    gu = /^[\d.\-M][\d.\-,\s]/,
    mu = /["']/g,
    yu = function(e) {
        for (var r = {}, t = e.substr(1, e.length - 3).split(":"), i = t[0], n = 1, s = t.length, o, u, l; n < s; n++) u = t[n], o = n !== s - 1 ? u.lastIndexOf(",") : u.length, l = u.substr(0, o), r[i] = isNaN(l) ? l.replace(mu, "").trim() : +l, i = u.substr(o + 1).trim();
        return r
    },
    vu = function(e) {
        var r = e.indexOf("(") + 1,
            t = e.indexOf(")"),
            i = e.indexOf("(", r);
        return e.substring(r, ~i && i < t ? e.indexOf(")", t + 1) : t)
    },
    xu = function(e) {
        var r = (e + "").split("("),
            t = $[r[0]];
        return t && r.length > 1 && t.config ? t.config.apply(null, ~e.indexOf("{") ? [yu(r[1])] : vu(e).split(",").map(Io)) : $._CE && gu.test(e) ? $._CE("", e) : t
    },
    Jo = function(e) {
        return function(r) {
            return 1 - e(1 - r)
        }
    },
    ea = function a(e, r) {
        for (var t = e._first, i; t;) t instanceof Qe ? a(t, r) : t.vars.yoyoEase && (!t._yoyo || !t._repeat) && t._yoyo !== r && (t.timeline ? a(t.timeline, r) : (i = t._ease, t._ease = t._yEase, t._yEase = i, t._yoyo = r)), t = t._next
    },
    Dr = function(e, r) {
        return e && (ce(e) ? e : $[e] || xu(e)) || r
    },
    Nr = function(e, r, t, i) {
        t === void 0 && (t = function(u) {
            return 1 - r(1 - u)
        }), i === void 0 && (i = function(u) {
            return u < .5 ? r(u * 2) / 2 : 1 - r((1 - u) * 2) / 2
        });
        var n = {
                easeIn: r,
                easeOut: t,
                easeInOut: i
            },
            s;
        return tt(e, function(o) {
            $[o] = _t[o] = n, $[s = o.toLowerCase()] = t;
            for (var u in n) $[s + (u === "easeIn" ? ".in" : u === "easeOut" ? ".out" : ".inOut")] = $[o + "." + u] = n[u]
        }), n
    },
    ta = function(e) {
        return function(r) {
            return r < .5 ? (1 - e(1 - r * 2)) / 2 : .5 + e((r - .5) * 2) / 2
        }
    },
    Fn = function a(e, r, t) {
        var i = r >= 1 ? r : 1,
            n = (t || (e ? .3 : .45)) / (r < 1 ? r : 1),
            s = n / Hn * (Math.asin(1 / i) || 0),
            o = function(f) {
                return f === 1 ? 1 : i * Math.pow(2, -10 * f) * qa((f - s) * n) + 1
            },
            u = e === "out" ? o : e === "in" ? function(l) {
                return 1 - o(1 - l)
            } : ta(o);
        return n = Hn / n, u.config = function(l, f) {
            return a(e, l, f)
        }, u
    },
    zn = function a(e, r) {
        r === void 0 && (r = 1.70158);
        var t = function(s) {
                return s ? --s * s * ((r + 1) * s + r) + 1 : 0
            },
            i = e === "out" ? t : e === "in" ? function(n) {
                return 1 - t(1 - n)
            } : ta(t);
        return i.config = function(n) {
            return a(e, n)
        }, i
    };
tt("Linear,Quad,Cubic,Quart,Quint,Strong", function(a, e) {
    var r = e < 5 ? e + 1 : e;
    Nr(a + ",Power" + (r - 1), e ? function(t) {
        return Math.pow(t, r)
    } : function(t) {
        return t
    }, function(t) {
        return 1 - Math.pow(1 - t, r)
    }, function(t) {
        return t < .5 ? Math.pow(t * 2, r) / 2 : 1 - Math.pow((1 - t) * 2, r) / 2
    })
});
$.Linear.easeNone = $.none = $.Linear.easeIn;
Nr("Elastic", Fn("in"), Fn("out"), Fn());
(function(a, e) {
    var r = 1 / e,
        t = 2 * r,
        i = 2.5 * r,
        n = function(o) {
            return o < r ? a * o * o : o < t ? a * Math.pow(o - 1.5 / e, 2) + .75 : o < i ? a * (o -= 2.25 / e) * o + .9375 : a * Math.pow(o - 2.625 / e, 2) + .984375
        };
    Nr("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
Nr("Expo", function(a) {
    return a ? Math.pow(2, 10 * (a - 1)) : 0
});
Nr("Circ", function(a) {
    return -(ko(1 - a * a) - 1)
});
Nr("Sine", function(a) {
    return a === 1 ? 1 : -Ga(a * Ua) + 1
});
Nr("Back", zn("in"), zn("out"), zn());
$.SteppedEase = $.steps = _t.SteppedEase = {
    config: function(e, r) {
        e === void 0 && (e = 1);
        var t = 1 / e,
            i = e + (r ? 0 : 1),
            n = r ? 1 : 0,
            s = 1 - j;
        return function(o) {
            return ((i * $i(0, s, o) | 0) + n) * t
        }
    }
};
ni.ease = $["quad.out"];
tt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(a) {
    return ws += a + "," + a + "Params,"
});
var ra = function(e, r) {
        this.id = $a++, e._gsap = this, this.target = e, this.harness = r, this.get = r ? r.get : Fo, this.set = r ? r.getSetter : Os
    },
    ui = function() {
        function a(r) {
            this.vars = r, this._delay = +r.delay || 0, (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0, this._yoyo = !!r.yoyo || !!r.yoyoEase), this._ts = 1, oi(this, +r.duration, 1, 1), this.data = r.data, me && (this._ctx = me, me.data.push(this)), Yi || ft.wake()
        }
        var e = a.prototype;
        return e.delay = function(t) {
            return t || t === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, e.duration = function(t) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, e.totalDuration = function(t) {
            return arguments.length ? (this._dirty = 0, oi(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(t, i) {
            if (ai(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Mn(this, t), !n._dp || n.parent || Yo(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && It(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !i || this._initted && Math.abs(this._zTime) === j || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), zo(this, t, i)), this
        }, e.time = function(t, i) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ws(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), i) : this._time
        }, e.totalProgress = function(t, i) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function(t, i) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - t : t) + Ws(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function(t, i) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * n, i) : this._repeat ? si(this._tTime, n) + 1 : 1
        }, e.timeScale = function(t) {
            if (!arguments.length) return this._rts === -j ? 0 : this._rts;
            if (this._rts === t) return this;
            var i = this.parent && this._ts ? vn(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -j ? 0 : this._rts, this.totalTime($i(-this._delay, this._tDur, i), !0), On(this), eu(this)
        }, e.paused = function(t) {
            return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (ai(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== j && (this._tTime -= j)))), this) : this._ps
        }, e.startTime = function(t) {
            if (arguments.length) {
                this._start = t;
                var i = this.parent || this._dp;
                return i && (i._sort || !this.parent) && It(i, this, t - this._delay), this
            }
            return this._start
        }, e.endTime = function(t) {
            return this._start + (et(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(t) {
            var i = this.parent || this._dp;
            return i ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? vn(i.rawTime(t), this) : this._tTime : this._tTime
        }, e.revert = function(t) {
            t === void 0 && (t = Ka);
            var i = Je;
            return Je = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), this.data !== "nested" && t.kill !== !1 && this.kill(), Je = i, this
        }, e.globalTime = function(t) {
            for (var i = this, n = arguments.length ? t : i.rawTime(); i;) n = i._start + n / (i._ts || 1), i = i._dp;
            return !this.parent && this.vars.immediateRender ? -1 : n
        }, e.repeat = function(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Us(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(t) {
            if (arguments.length) {
                var i = this._time;
                return this._rDelay = t, Us(this), i ? this.time(i) : this
            }
            return this._rDelay
        }, e.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, e.seek = function(t, i) {
            return this.totalTime(gt(this, t), et(i))
        }, e.restart = function(t, i) {
            return this.play().totalTime(t ? -this._delay : 0, et(i))
        }, e.play = function(t, i) {
            return t != null && this.seek(t, i), this.reversed(!1).paused(!1)
        }, e.reverse = function(t, i) {
            return t != null && this.seek(t || this.totalDuration(), i), this.reversed(!0).paused(!1)
        }, e.pause = function(t, i) {
            return t != null && this.seek(t, i), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -j : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -j, this
        }, e.isActive = function() {
            var t = this.parent || this._dp,
                i = this._start,
                n;
            return !!(!t || this._ts && this._initted && t.isActive() && (n = t.rawTime(!0)) >= i && n < this.endTime(!0) - j)
        }, e.eventCallback = function(t, i, n) {
            var s = this.vars;
            return arguments.length > 1 ? (i ? (s[t] = i, n && (s[t + "Params"] = n), t === "onUpdate" && (this._onUpdate = i)) : delete s[t], this) : s[t]
        }, e.then = function(t) {
            var i = this;
            return new Promise(function(n) {
                var s = ce(t) ? t : Bo,
                    o = function() {
                        var l = i.then;
                        i.then = null, ce(s) && (s = s(i)) && (s.then || s === i) && (i.then = l), n(s), i.then = l
                    };
                i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o
            })
        }, e.kill = function() {
            wi(this)
        }, a
    }();
wt(ui.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -j,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Qe = function(a) {
    So(e, a);

    function e(t, i) {
        var n;
        return t === void 0 && (t = {}), n = a.call(this, t) || this, n.labels = {}, n.smoothChildTiming = !!t.smoothChildTiming, n.autoRemoveChildren = !!t.autoRemoveChildren, n._sort = et(t.sortChildren), ne && It(t.parent || ne, Gt(n), i), t.reversed && n.reverse(), t.paused && n.paused(!0), t.scrollTrigger && Xo(Gt(n), t.scrollTrigger), n
    }
    var r = e.prototype;
    return r.to = function(i, n, s) {
        return Mi(0, arguments, this), this
    }, r.from = function(i, n, s) {
        return Mi(1, arguments, this), this
    }, r.fromTo = function(i, n, s, o) {
        return Mi(2, arguments, this), this
    }, r.set = function(i, n, s) {
        return n.duration = 0, n.parent = this, Oi(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new be(i, n, gt(this, s), 1), this
    }, r.call = function(i, n, s) {
        return It(this, be.delayedCall(0, i, n), s)
    }, r.staggerTo = function(i, n, s, o, u, l, f) {
        return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = f, s.parent = this, new be(i, s, gt(this, u)), this
    }, r.staggerFrom = function(i, n, s, o, u, l, f) {
        return s.runBackwards = 1, Oi(s).immediateRender = et(s.immediateRender), this.staggerTo(i, n, s, o, u, l, f)
    }, r.staggerFromTo = function(i, n, s, o, u, l, f, d) {
        return o.startAt = s, Oi(o).immediateRender = et(o.immediateRender), this.staggerTo(i, n, o, u, l, f, d)
    }, r.render = function(i, n, s) {
        var o = this._time,
            u = this._dirty ? this.totalDuration() : this._tDur,
            l = this._dur,
            f = i <= 0 ? 0 : De(i),
            d = this._zTime < 0 != i < 0 && (this._initted || !l),
            c, h, p, _, m, y, b, T, v, k, C, S;
        if (this !== ne && f > u && i >= 0 && (f = u), f !== this._tTime || s || d) {
            if (o !== this._time && l && (f += this._time - o, i += this._time - o), c = f, v = this._start, T = this._ts, y = !T, d && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
                if (C = this._yoyo, m = l + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(m * 100 + i, n, s);
                if (c = De(f % m), f === u ? (_ = this._repeat, c = l) : (_ = ~~(f / m), _ && _ === f / m && (c = l, _--), c > l && (c = l)), k = si(this._tTime, m), !o && this._tTime && k !== _ && (k = _), C && _ & 1 && (c = l - c, S = 1), _ !== k && !this._lock) {
                    var O = C && k & 1,
                        P = O === (C && _ & 1);
                    if (_ < k && (O = !O), o = O ? 0 : l, this._lock = 1, this.render(o || (S ? 0 : De(_ * m)), n, !l)._lock = 0, this._tTime = f, !n && this.parent && bt(this, "onRepeat"), this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1), o && o !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (l = this._dur, u = this._tDur, P && (this._lock = 2, o = O ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !S && this.invalidate()), this._lock = 0, !this._ts && !y) return this;
                    ea(this, S)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (b = nu(this, De(o), De(c)), b && (f -= c - (c = b._start))), this._tTime = f, this._time = c, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && c && !n && (bt(this, "onStart"), this._tTime !== f)) return this;
            if (c >= o && i >= 0)
                for (h = this._first; h;) {
                    if (p = h._next, (h._act || c >= h._start) && h._ts && b !== h) {
                        if (h.parent !== this) return this.render(i, n, s);
                        if (h.render(h._ts > 0 ? (c - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (c - h._start) * h._ts, n, s), c !== this._time || !this._ts && !y) {
                            b = 0, p && (f += this._zTime = -j);
                            break
                        }
                    }
                    h = p
                } else {
                    h = this._last;
                    for (var M = i < 0 ? i : c; h;) {
                        if (p = h._prev, (h._act || M <= h._end) && h._ts && b !== h) {
                            if (h.parent !== this) return this.render(i, n, s);
                            if (h.render(h._ts > 0 ? (M - h._start) * h._ts : (h._dirty ? h.totalDuration() : h._tDur) + (M - h._start) * h._ts, n, s || Je && (h._initted || h._startAt)), c !== this._time || !this._ts && !y) {
                                b = 0, p && (f += this._zTime = M ? -j : j);
                                break
                            }
                        }
                        h = p
                    }
                }
            if (b && !n && (this.pause(), b.render(c >= o ? 0 : -j)._zTime = c >= o ? 1 : -1, this._ts)) return this._start = v, On(this), this.render(i, n, s);
            this._onUpdate && !n && bt(this, "onUpdate", !0), (f === u && this._tTime >= this.totalDuration() || !f && o) && (v === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (f === u && this._ts > 0 || !f && this._ts < 0) && dr(this, 1), !n && !(i < 0 && !o) && (f || o || !u) && (bt(this, f === u && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(f < u && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, r.add = function(i, n) {
        var s = this;
        if (jt(n) || (n = gt(this, n, i)), !(i instanceof ui)) {
            if (Ne(i)) return i.forEach(function(o) {
                return s.add(o, n)
            }), this;
            if (Ce(i)) return this.addLabel(i, n);
            if (ce(i)) i = be.delayedCall(0, i);
            else return this
        }
        return this !== i ? It(this, i, n) : this
    }, r.getChildren = function(i, n, s, o) {
        i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -vt);
        for (var u = [], l = this._first; l;) l._start >= o && (l instanceof be ? n && u.push(l) : (s && u.push(l), i && u.push.apply(u, l.getChildren(!0, n, s)))), l = l._next;
        return u
    }, r.getById = function(i) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === i) return n[s]
    }, r.remove = function(i) {
        return Ce(i) ? this.removeLabel(i) : ce(i) ? this.killTweensOf(i) : (Cn(this, i), i === this._recent && (this._recent = this._last), Mr(this))
    }, r.totalTime = function(i, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = De(ft.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), a.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime
    }, r.addLabel = function(i, n) {
        return this.labels[i] = gt(this, n), this
    }, r.removeLabel = function(i) {
        return delete this.labels[i], this
    }, r.addPause = function(i, n, s) {
        var o = be.delayedCall(0, n || Bi, s);
        return o.data = "isPause", this._hasPause = 1, It(this, o, gt(this, i))
    }, r.removePause = function(i) {
        var n = this._first;
        for (i = gt(this, i); n;) n._start === i && n.data === "isPause" && dr(n), n = n._next
    }, r.killTweensOf = function(i, n, s) {
        for (var o = this.getTweensOf(i, s), u = o.length; u--;) sr !== o[u] && o[u].kill(i, n);
        return this
    }, r.getTweensOf = function(i, n) {
        for (var s = [], o = xt(i), u = this._first, l = jt(n), f; u;) u instanceof be ? ja(u._targets, o) && (l ? (!sr || u._initted && u._ts) && u.globalTime(0) <= n && u.globalTime(u.totalDuration()) > n : !n || u.isActive()) && s.push(u) : (f = u.getTweensOf(o, n)).length && s.push.apply(s, f), u = u._next;
        return s
    }, r.tweenTo = function(i, n) {
        n = n || {};
        var s = this,
            o = gt(s, i),
            u = n,
            l = u.startAt,
            f = u.onStart,
            d = u.onStartParams,
            c = u.immediateRender,
            h, p = be.to(s, wt({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || j,
                onStart: function() {
                    if (s.pause(), !h) {
                        var m = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
                        p._dur !== m && oi(p, m, 0, 1).render(p._time, !0, !0), h = 1
                    }
                    f && f.apply(p, d || [])
                }
            }, n));
        return c ? p.render(0) : p
    }, r.tweenFromTo = function(i, n, s) {
        return this.tweenTo(n, wt({
            startAt: {
                time: gt(this, i)
            }
        }, s))
    }, r.recent = function() {
        return this._recent
    }, r.nextLabel = function(i) {
        return i === void 0 && (i = this._time), $s(this, gt(this, i))
    }, r.previousLabel = function(i) {
        return i === void 0 && (i = this._time), $s(this, gt(this, i), 1)
    }, r.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + j)
    }, r.shiftChildren = function(i, n, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, u = this.labels, l; o;) o._start >= s && (o._start += i, o._end += i), o = o._next;
        if (n)
            for (l in u) u[l] >= s && (u[l] += i);
        return Mr(this)
    }, r.invalidate = function(i) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(i), n = n._next;
        return a.prototype.invalidate.call(this, i)
    }, r.clear = function(i) {
        i === void 0 && (i = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), Mr(this)
    }, r.totalDuration = function(i) {
        var n = 0,
            s = this,
            o = s._last,
            u = vt,
            l, f, d;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (d = s.parent; o;) l = o._prev, o._dirty && o.totalDuration(), f = o._start, f > u && s._sort && o._ts && !s._lock ? (s._lock = 1, It(s, o, f - o._delay, 1)._lock = 0) : u = f, f < 0 && o._ts && (n -= f, (!d && !s._dp || d && d.smoothChildTiming) && (s._start += f / s._ts, s._time -= f, s._tTime -= f), s.shiftChildren(-f, !1, -1 / 0), u = 0), o._end > n && o._ts && (n = o._end), o = l;
            oi(s, s === ne && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function(i) {
        if (ne._ts && (zo(ne, vn(i, ne)), Lo = ft.frame), ft.frame >= Xs) {
            Xs += ht.autoSleep || 120;
            var n = ne._first;
            if ((!n || !n._ts) && ht.autoSleep && ft._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || ft.sleep()
            }
        }
    }, e
}(ui);
wt(Qe.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var bu = function(e, r, t, i, n, s, o) {
        var u = new rt(this._pt, e, r, 0, 1, ua, null, n),
            l = 0,
            f = 0,
            d, c, h, p, _, m, y, b;
        for (u.b = t, u.e = i, t += "", i += "", (y = ~i.indexOf("random(")) && (i = Ni(i)), s && (b = [t, i], s(b, e, r), t = b[0], i = b[1]), c = t.match(An) || []; d = An.exec(i);) p = d[0], _ = i.substring(l, d.index), h ? h = (h + 1) % 5 : _.substr(-5) === "rgba(" && (h = 1), p !== c[f++] && (m = parseFloat(c[f - 1]) || 0, u._pt = {
            _next: u._pt,
            p: _ || f === 1 ? _ : ",",
            s: m,
            c: p.charAt(1) === "=" ? Jr(m, p) - m : parseFloat(p) - m,
            m: h && h < 4 ? Math.round : 0
        }, l = An.lastIndex);
        return u.c = l < i.length ? i.substring(l, i.length) : "", u.fp = o, (Mo.test(i) || y) && (u.e = 0), this._pt = u, u
    },
    ks = function(e, r, t, i, n, s, o, u, l, f) {
        ce(i) && (i = i(n || 0, e, s));
        var d = e[r],
            c = t !== "get" ? t : ce(d) ? l ? e[r.indexOf("set") || !ce(e["get" + r.substr(3)]) ? r : "get" + r.substr(3)](l) : e[r]() : d,
            h = ce(d) ? l ? Pu : oa : Cs,
            p;
        if (Ce(i) && (~i.indexOf("random(") && (i = Ni(i)), i.charAt(1) === "=" && (p = Jr(c, i) + (Ie(c) || 0), (p || p === 0) && (i = p))), !f || c !== i || is) return !isNaN(c * i) && i !== "" ? (p = new rt(this._pt, e, r, +c || 0, i - (c || 0), typeof d == "boolean" ? Ou : aa, 0, h), l && (p.fp = l), o && p.modifier(o, this, e), this._pt = p) : (!d && !(r in e) && bs(r, i), bu.call(this, e, r, c, i, h, u || ht.stringFilter, l))
    },
    Tu = function(e, r, t, i, n) {
        if (ce(e) && (e = Di(e, n, r, t, i)), !Vt(e) || e.style && e.nodeType || Ne(e) || Co(e)) return Ce(e) ? Di(e, n, r, t, i) : e;
        var s = {},
            o;
        for (o in e) s[o] = Di(e[o], n, r, t, i);
        return s
    },
    ia = function(e, r, t, i, n, s) {
        var o, u, l, f;
        if (lt[e] && (o = new lt[e]).init(n, o.rawVars ? r[e] : Tu(r[e], i, n, s, t), t, i, s) !== !1 && (t._pt = u = new rt(t._pt, n, e, 0, 1, o.render, o, 0, o.priority), t !== Kr))
            for (l = t._ptLookup[t._targets.indexOf(n)], f = o._props.length; f--;) l[o._props[f]] = u;
        return o
    },
    sr, is, Ps = function a(e, r, t) {
        var i = e.vars,
            n = i.ease,
            s = i.startAt,
            o = i.immediateRender,
            u = i.lazy,
            l = i.onUpdate,
            f = i.onUpdateParams,
            d = i.callbackScope,
            c = i.runBackwards,
            h = i.yoyoEase,
            p = i.keyframes,
            _ = i.autoRevert,
            m = e._dur,
            y = e._startAt,
            b = e._targets,
            T = e.parent,
            v = T && T.data === "nested" ? T.vars.targets : b,
            k = e._overwrite === "auto" && !ys,
            C = e.timeline,
            S, O, P, M, E, R, Z, Y, I, F, V, B, Q;
        if (C && (!p || !n) && (n = "none"), e._ease = Dr(n, ni.ease), e._yEase = h ? Jo(Dr(h === !0 ? n : h, ni.ease)) : 0, h && e._yoyo && !e._repeat && (h = e._yEase, e._yEase = e._ease, e._ease = h), e._from = !C && !!i.runBackwards, !C || p && !i.stagger) {
            if (Y = b[0] ? Or(b[0]).harness : 0, B = Y && i[Y.prop], S = yn(i, Ts), y && (y._zTime < 0 && y.progress(1), r < 0 && c && o && !_ ? y.render(-1, !0) : y.revert(c && m ? sn : Za), y._lazy = 0), s) {
                if (dr(e._startAt = be.set(b, wt({
                        data: "isStart",
                        overwrite: !1,
                        parent: T,
                        immediateRender: !0,
                        lazy: et(u),
                        startAt: null,
                        delay: 0,
                        onUpdate: l,
                        onUpdateParams: f,
                        callbackScope: d,
                        stagger: 0
                    }, s))), e._startAt._dp = 0, r < 0 && (Je || !o && !_) && e._startAt.revert(sn), o && m && r <= 0 && t <= 0) {
                    r && (e._zTime = r);
                    return
                }
            } else if (c && m && !y) {
                if (r && (o = !1), P = wt({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: o && et(u),
                        immediateRender: o,
                        stagger: 0,
                        parent: T
                    }, S), B && (P[Y.prop] = B), dr(e._startAt = be.set(b, P)), e._startAt._dp = 0, r < 0 && (Je ? e._startAt.revert(sn) : e._startAt.render(-1, !0)), e._zTime = r, !o) a(e._startAt, j, j);
                else if (!r) return
            }
            for (e._pt = e._ptCache = 0, u = m && et(u) || u && !m, O = 0; O < b.length; O++) {
                if (E = b[O], Z = E._gsap || Ss(b)[O]._gsap, e._ptLookup[O] = F = {}, jn[Z.id] && cr.length && mn(), V = v === b ? O : v.indexOf(E), Y && (I = new Y).init(E, B || S, e, V, v) !== !1 && (e._pt = M = new rt(e._pt, E, I.name, 0, 1, I.render, I, 0, I.priority), I._props.forEach(function(g) {
                        F[g] = M
                    }), I.priority && (R = 1)), !Y || B)
                    for (P in S) lt[P] && (I = ia(P, S, e, V, E, v)) ? I.priority && (R = 1) : F[P] = M = ks.call(e, E, P, "get", S[P], V, v, 0, i.stringFilter);
                e._op && e._op[O] && e.kill(E, e._op[O]), k && e._pt && (sr = e, ne.killTweensOf(E, F, e.globalTime(r)), Q = !e.parent, sr = 0), e._pt && u && (jn[Z.id] = 1)
            }
            R && la(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = l, e._initted = (!e._op || e._pt) && !Q, p && r <= 0 && C.render(vt, !0, !0)
    },
    wu = function(e, r, t, i, n, s, o) {
        var u = (e._pt && e._ptCache || (e._ptCache = {}))[r],
            l, f, d, c;
        if (!u)
            for (u = e._ptCache[r] = [], d = e._ptLookup, c = e._targets.length; c--;) {
                if (l = d[c][r], l && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== r && l.fp !== r;) l = l._next;
                if (!l) return is = 1, e.vars[r] = "+=0", Ps(e, o), is = 0, 1;
                u.push(l)
            }
        for (c = u.length; c--;) f = u[c], l = f._pt || f, l.s = (i || i === 0) && !n ? i : l.s + (i || 0) + s * l.c, l.c = t - l.s, f.e && (f.e = de(t) + Ie(f.e)), f.b && (f.b = l.s + Ie(f.b))
    },
    Su = function(e, r) {
        var t = e[0] ? Or(e[0]).harness : 0,
            i = t && t.aliases,
            n, s, o, u;
        if (!i) return r;
        n = Lr({}, r);
        for (s in i)
            if (s in n)
                for (u = i[s].split(","), o = u.length; o--;) n[u[o]] = n[s];
        return n
    },
    ku = function(e, r, t, i) {
        var n = r.ease || i || "power1.inOut",
            s, o;
        if (Ne(r)) o = t[e] || (t[e] = []), r.forEach(function(u, l) {
            return o.push({
                t: l / (r.length - 1) * 100,
                v: u,
                e: n
            })
        });
        else
            for (s in r) o = t[s] || (t[s] = []), s === "ease" || o.push({
                t: parseFloat(e),
                v: r[s],
                e: n
            })
    },
    Di = function(e, r, t, i, n) {
        return ce(e) ? e.call(r, t, i, n) : Ce(e) && ~e.indexOf("random(") ? Ni(e) : e
    },
    na = ws + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    sa = {};
tt(na + ",id,stagger,delay,duration,paused,scrollTrigger", function(a) {
    return sa[a] = 1
});
var be = function(a) {
    So(e, a);

    function e(t, i, n, s) {
        var o;
        typeof i == "number" && (n.duration = i, i = n, n = null), o = a.call(this, s ? i : Oi(i)) || this;
        var u = o.vars,
            l = u.duration,
            f = u.delay,
            d = u.immediateRender,
            c = u.stagger,
            h = u.overwrite,
            p = u.keyframes,
            _ = u.defaults,
            m = u.scrollTrigger,
            y = u.yoyoEase,
            b = i.parent || ne,
            T = (Ne(t) || Co(t) ? jt(t[0]) : "length" in i) ? [t] : xt(t),
            v, k, C, S, O, P, M, E;
        if (o._targets = T.length ? Ss(T) : gn("GSAP target " + t + " not found. https://greensock.com", !ht.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = h, p || c || Gi(l) || Gi(f)) {
            if (i = o.vars, v = o.timeline = new Qe({
                    data: "nested",
                    defaults: _ || {},
                    targets: b && b.data === "nested" ? b.vars.targets : T
                }), v.kill(), v.parent = v._dp = Gt(o), v._start = 0, c || Gi(l) || Gi(f)) {
                if (S = T.length, M = c && $o(c), Vt(c))
                    for (O in c) ~na.indexOf(O) && (E || (E = {}), E[O] = c[O]);
                for (k = 0; k < S; k++) C = yn(i, sa), C.stagger = 0, y && (C.yoyoEase = y), E && Lr(C, E), P = T[k], C.duration = +Di(l, Gt(o), k, P, T), C.delay = (+Di(f, Gt(o), k, P, T) || 0) - o._delay, !c && S === 1 && C.delay && (o._delay = f = C.delay, o._start += f, C.delay = 0), v.to(P, C, M ? M(k, P, T) : 0), v._ease = $.none;
                v.duration() ? l = f = 0 : o.timeline = 0
            } else if (p) {
                Oi(wt(v.vars.defaults, {
                    ease: "none"
                })), v._ease = Dr(p.ease || i.ease || "none");
                var R = 0,
                    Z, Y, I;
                if (Ne(p)) p.forEach(function(F) {
                    return v.to(T, F, ">")
                }), v.duration();
                else {
                    C = {};
                    for (O in p) O === "ease" || O === "easeEach" || ku(O, p[O], C, p.easeEach);
                    for (O in C)
                        for (Z = C[O].sort(function(F, V) {
                                return F.t - V.t
                            }), R = 0, k = 0; k < Z.length; k++) Y = Z[k], I = {
                            ease: Y.e,
                            duration: (Y.t - (k ? Z[k - 1].t : 0)) / 100 * l
                        }, I[O] = Y.v, v.to(T, I, R), R += I.duration;
                    v.duration() < l && v.to({}, {
                        duration: l - v.duration()
                    })
                }
            }
            l || o.duration(l = v.duration())
        } else o.timeline = 0;
        return h === !0 && !ys && (sr = Gt(o), ne.killTweensOf(T), sr = 0), It(b, Gt(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (d || !l && !p && o._start === De(b._time) && et(d) && tu(Gt(o)) && b.data !== "nested") && (o._tTime = -j, o.render(Math.max(0, -f) || 0)), m && Xo(Gt(o), m), o
    }
    var r = e.prototype;
    return r.render = function(i, n, s) {
        var o = this._time,
            u = this._tDur,
            l = this._dur,
            f = i < 0,
            d = i > u - j && !f ? u : i < j ? 0 : i,
            c, h, p, _, m, y, b, T, v;
        if (!l) iu(this, i, n, s);
        else if (d !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
            if (c = d, T = this.timeline, this._repeat) {
                if (_ = l + this._rDelay, this._repeat < -1 && f) return this.totalTime(_ * 100 + i, n, s);
                if (c = De(d % _), d === u ? (p = this._repeat, c = l) : (p = ~~(d / _), p && p === d / _ && (c = l, p--), c > l && (c = l)), y = this._yoyo && p & 1, y && (v = this._yEase, c = l - c), m = si(this._tTime, _), c === o && !s && this._initted) return this._tTime = d, this;
                p !== m && (T && this._yEase && ea(T, y), this.vars.repeatRefresh && !y && !this._lock && (this._lock = s = 1, this.render(De(_ * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Vo(this, f ? i : c, s, n, d)) return this._tTime = 0, this;
                if (o !== this._time) return this;
                if (l !== this._dur) return this.render(i, n, s)
            }
            if (this._tTime = d, this._time = c, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = b = (v || this._ease)(c / l), this._from && (this.ratio = b = 1 - b), c && !o && !n && (bt(this, "onStart"), this._tTime !== d)) return this;
            for (h = this._pt; h;) h.r(b, h.d), h = h._next;
            T && T.render(i < 0 ? i : !c && y ? -j : T._dur * T._ease(c / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (f && Qn(this, i, n, s), bt(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && bt(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (f && !this._onUpdate && Qn(this, i, !0, !0), (i || !l) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && dr(this, 1), !n && !(f && !o) && (d || o || y) && (bt(this, d === u ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < u && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, r.targets = function() {
        return this._targets
    }, r.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), a.prototype.invalidate.call(this, i)
    }, r.resetTo = function(i, n, s, o) {
        Yi || ft.wake(), this._ts || this.play();
        var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            l;
        return this._initted || Ps(this, u), l = this._ease(u / this._dur), wu(this, i, n, s, o, l, u) ? this.resetTo(i, n, s, o) : (Mn(this, 0), this.parent || No(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, r.kill = function(i, n) {
        if (n === void 0 && (n = "all"), !i && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? wi(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, sr && sr.vars.overwrite !== !0)._first || wi(this), this.parent && s !== this.timeline.totalDuration() && oi(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var o = this._targets,
            u = i ? xt(i) : o,
            l = this._ptLookup,
            f = this._pt,
            d, c, h, p, _, m, y;
        if ((!n || n === "all") && Ja(o, u)) return n === "all" && (this._pt = 0), wi(this);
        for (d = this._op = this._op || [], n !== "all" && (Ce(n) && (_ = {}, tt(n, function(b) {
                return _[b] = 1
            }), n = _), n = Su(o, n)), y = o.length; y--;)
            if (~u.indexOf(o[y])) {
                c = l[y], n === "all" ? (d[y] = n, p = c, h = {}) : (h = d[y] = d[y] || {}, p = n);
                for (_ in p) m = c && c[_], m && ((!("kill" in m.d) || m.d.kill(_) === !0) && Cn(this, m, "_pt"), delete c[_]), h !== "all" && (h[_] = 1)
            }
        return this._initted && !this._pt && f && wi(this), this
    }, e.to = function(i, n) {
        return new e(i, n, arguments[2])
    }, e.from = function(i, n) {
        return Mi(1, arguments)
    }, e.delayedCall = function(i, n, s, o) {
        return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: o
        })
    }, e.fromTo = function(i, n, s) {
        return Mi(2, arguments)
    }, e.set = function(i, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n)
    }, e.killTweensOf = function(i, n, s) {
        return ne.killTweensOf(i, n, s)
    }, e
}(ui);
wt(be.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
tt("staggerTo,staggerFrom,staggerFromTo", function(a) {
    be[a] = function() {
        var e = new Qe,
            r = es.call(arguments, 0);
        return r.splice(a === "staggerFromTo" ? 5 : 4, 0, 0), e[a].apply(e, r)
    }
});
var Cs = function(e, r, t) {
        return e[r] = t
    },
    oa = function(e, r, t) {
        return e[r](t)
    },
    Pu = function(e, r, t, i) {
        return e[r](i.fp, t)
    },
    Cu = function(e, r, t) {
        return e.setAttribute(r, t)
    },
    Os = function(e, r) {
        return ce(e[r]) ? oa : vs(e[r]) && e.setAttribute ? Cu : Cs
    },
    aa = function(e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e6) / 1e6, r)
    },
    Ou = function(e, r) {
        return r.set(r.t, r.p, !!(r.s + r.c * e), r)
    },
    ua = function(e, r) {
        var t = r._pt,
            i = "";
        if (!e && r.b) i = r.b;
        else if (e === 1 && r.e) i = r.e;
        else {
            for (; t;) i = t.p + (t.m ? t.m(t.s + t.c * e) : Math.round((t.s + t.c * e) * 1e4) / 1e4) + i, t = t._next;
            i += r.c
        }
        r.set(r.t, r.p, i, r)
    },
    Ms = function(e, r) {
        for (var t = r._pt; t;) t.r(e, t.d), t = t._next
    },
    Mu = function(e, r, t, i) {
        for (var n = this._pt, s; n;) s = n._next, n.p === i && n.modifier(e, r, t), n = s
    },
    Du = function(e) {
        for (var r = this._pt, t, i; r;) i = r._next, r.p === e && !r.op || r.op === e ? Cn(this, r, "_pt") : r.dep || (t = 1), r = i;
        return !t
    },
    Eu = function(e, r, t, i) {
        i.mSet(e, r, i.m.call(i.tween, t, i.mt), i)
    },
    la = function(e) {
        for (var r = e._pt, t, i, n, s; r;) {
            for (t = r._next, i = n; i && i.pr > r.pr;) i = i._next;
            (r._prev = i ? i._prev : s) ? r._prev._next = r: n = r, (r._next = i) ? i._prev = r : s = r, r = t
        }
        e._pt = n
    },
    rt = function() {
        function a(r, t, i, n, s, o, u, l, f) {
            this.t = t, this.s = n, this.c = s, this.p = i, this.r = o || aa, this.d = u || this, this.set = l || Cs, this.pr = f || 0, this._next = r, r && (r._prev = this)
        }
        var e = a.prototype;
        return e.modifier = function(t, i, n) {
            this.mSet = this.mSet || this.set, this.set = Eu, this.m = t, this.mt = n, this.tween = i
        }, a
    }();
tt(ws + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(a) {
    return Ts[a] = 1
});
_t.TweenMax = _t.TweenLite = be;
_t.TimelineLite = _t.TimelineMax = Qe;
ne = new Qe({
    sortChildren: !1,
    defaults: ni,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
ht.stringFilter = Qo;
var li = [],
    an = {},
    Au = [],
    qs = 0,
    In = function(e) {
        return (an[e] || Au).map(function(r) {
            return r()
        })
    },
    ns = function() {
        var e = Date.now(),
            r = [];
        e - qs > 2 && (In("matchMediaInit"), li.forEach(function(t) {
            var i = t.queries,
                n = t.conditions,
                s, o, u, l;
            for (o in i) s = mt.matchMedia(i[o]).matches, s && (u = 1), s !== n[o] && (n[o] = s, l = 1);
            l && (t.revert(), u && r.push(t))
        }), In("matchMediaRevert"), r.forEach(function(t) {
            return t.onMatch(t)
        }), qs = e, In("matchMedia"))
    },
    fa = function() {
        function a(r, t) {
            this.selector = t && ts(t), this.data = [], this._r = [], this.isReverted = !1, r && this.add(r)
        }
        var e = a.prototype;
        return e.add = function(t, i, n) {
            ce(t) && (n = i, i = t, t = ce);
            var s = this,
                o = function() {
                    var l = me,
                        f = s.selector,
                        d;
                    return l && l !== s && l.data.push(s), n && (s.selector = ts(n)), me = s, d = i.apply(s, arguments), ce(d) && s._r.push(d), me = l, s.selector = f, s.isReverted = !1, d
                };
            return s.last = o, t === ce ? o(s) : t ? s[t] = o : o
        }, e.ignore = function(t) {
            var i = me;
            me = null, t(this), me = i
        }, e.getTweens = function() {
            var t = [];
            return this.data.forEach(function(i) {
                return i instanceof a ? t.push.apply(t, i.getTweens()) : i instanceof be && !(i.parent && i.parent.data === "nested") && t.push(i)
            }), t
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(t, i) {
            var n = this;
            if (t) {
                var s = this.getTweens();
                this.data.forEach(function(u) {
                    u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(l) {
                        return s.splice(s.indexOf(l), 1)
                    }))
                }), s.map(function(u) {
                    return {
                        g: u.globalTime(0),
                        t: u
                    }
                }).sort(function(u, l) {
                    return l.g - u.g || -1
                }).forEach(function(u) {
                    return u.t.revert(t)
                }), this.data.forEach(function(u) {
                    return !(u instanceof ui) && u.revert && u.revert(t)
                }), this._r.forEach(function(u) {
                    return u(t, n)
                }), this.isReverted = !0
            } else this.data.forEach(function(u) {
                return u.kill && u.kill()
            });
            if (this.clear(), i) {
                var o = li.indexOf(this);
                ~o && li.splice(o, 1)
            }
        }, e.revert = function(t) {
            this.kill(t || {})
        }, a
    }(),
    Ru = function() {
        function a(r) {
            this.contexts = [], this.scope = r
        }
        var e = a.prototype;
        return e.add = function(t, i, n) {
            Vt(t) || (t = {
                matches: t
            });
            var s = new fa(0, n || this.scope),
                o = s.conditions = {},
                u, l, f;
            this.contexts.push(s), i = s.add("onMatch", i), s.queries = t;
            for (l in t) l === "all" ? f = 1 : (u = mt.matchMedia(t[l]), u && (li.indexOf(s) < 0 && li.push(s), (o[l] = u.matches) && (f = 1), u.addListener ? u.addListener(ns) : u.addEventListener("change", ns)));
            return f && i(s), this
        }, e.revert = function(t) {
            this.kill(t || {})
        }, e.kill = function(t) {
            this.contexts.forEach(function(i) {
                return i.kill(t, !0)
            })
        }, a
    }(),
    xn = {
        registerPlugin: function() {
            for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
            r.forEach(function(i) {
                return du(i)
            })
        },
        timeline: function(e) {
            return new Qe(e)
        },
        getTweensOf: function(e, r) {
            return ne.getTweensOf(e, r)
        },
        getProperty: function(e, r, t, i) {
            Ce(e) && (e = xt(e)[0]);
            var n = Or(e || {}).get,
                s = t ? Bo : Io;
            return t === "native" && (t = ""), e && (r ? s((lt[r] && lt[r].get || n)(e, r, t, i)) : function(o, u, l) {
                return s((lt[o] && lt[o].get || n)(e, o, u, l))
            })
        },
        quickSetter: function(e, r, t) {
            if (e = xt(e), e.length > 1) {
                var i = e.map(function(f) {
                        return dt.quickSetter(f, r, t)
                    }),
                    n = i.length;
                return function(f) {
                    for (var d = n; d--;) i[d](f)
                }
            }
            e = e[0] || {};
            var s = lt[r],
                o = Or(e),
                u = o.harness && (o.harness.aliases || {})[r] || r,
                l = s ? function(f) {
                    var d = new s;
                    Kr._pt = 0, d.init(e, t ? f + t : f, Kr, 0, [e]), d.render(1, d), Kr._pt && Ms(1, Kr)
                } : o.set(e, u);
            return s ? l : function(f) {
                return l(e, u, t ? f + t : f, o, 1)
            }
        },
        quickTo: function(e, r, t) {
            var i, n = dt.to(e, Lr((i = {}, i[r] = "+=0.1", i.paused = !0, i), t || {})),
                s = function(u, l, f) {
                    return n.resetTo(r, u, l, f)
                };
            return s.tween = n, s
        },
        isTweening: function(e) {
            return ne.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = Dr(e.ease, ni.ease)), Vs(ni, e || {})
        },
        config: function(e) {
            return Vs(ht, e || {})
        },
        registerEffect: function(e) {
            var r = e.name,
                t = e.effect,
                i = e.plugins,
                n = e.defaults,
                s = e.extendTimeline;
            (i || "").split(",").forEach(function(o) {
                return o && !lt[o] && !_t[o] && gn(r + " effect requires " + o + " plugin.")
            }), Rn[r] = function(o, u, l) {
                return t(xt(o), wt(u || {}, n), l)
            }, s && (Qe.prototype[r] = function(o, u, l) {
                return this.add(Rn[r](o, Vt(u) ? u : (l = u) && {}, this), l)
            })
        },
        registerEase: function(e, r) {
            $[e] = Dr(r)
        },
        parseEase: function(e, r) {
            return arguments.length ? Dr(e, r) : $
        },
        getById: function(e) {
            return ne.getById(e)
        },
        exportRoot: function(e, r) {
            e === void 0 && (e = {});
            var t = new Qe(e),
                i, n;
            for (t.smoothChildTiming = et(e.smoothChildTiming), ne.remove(t), t._dp = 0, t._time = t._tTime = ne._time, i = ne._first; i;) n = i._next, (r || !(!i._dur && i instanceof be && i.vars.onComplete === i._targets[0])) && It(t, i, i._start - i._delay), i = n;
            return It(ne, t, 0), t
        },
        context: function(e, r) {
            return e ? new fa(e, r) : me
        },
        matchMedia: function(e) {
            return new Ru(e)
        },
        matchMediaRefresh: function() {
            return li.forEach(function(e) {
                var r = e.conditions,
                    t, i;
                for (i in r) r[i] && (r[i] = !1, t = 1);
                t && e.revert()
            }) || ns()
        },
        addEventListener: function(e, r) {
            var t = an[e] || (an[e] = []);
            ~t.indexOf(r) || t.push(r)
        },
        removeEventListener: function(e, r) {
            var t = an[e],
                i = t && t.indexOf(r);
            i >= 0 && t.splice(i, 1)
        },
        utils: {
            wrap: cu,
            wrapYoyo: hu,
            distribute: $o,
            random: qo,
            snap: Go,
            normalize: fu,
            getUnit: Ie,
            clamp: ou,
            splitColor: Ko,
            toArray: xt,
            selector: ts,
            mapRange: Zo,
            pipe: uu,
            unitize: lu,
            interpolate: _u,
            shuffle: Uo
        },
        install: Ao,
        effects: Rn,
        ticker: ft,
        updateRoot: Qe.updateRoot,
        plugins: lt,
        globalTimeline: ne,
        core: {
            PropTween: rt,
            globals: Ro,
            Tween: be,
            Timeline: Qe,
            Animation: ui,
            getCache: Or,
            _removeLinkedListItem: Cn,
            reverting: function() {
                return Je
            },
            context: function(e) {
                return e && me && (me.data.push(e), e._ctx = me), me
            },
            suppressOverwrites: function(e) {
                return ys = e
            }
        }
    };
tt("to,from,fromTo,delayedCall,set,killTweensOf", function(a) {
    return xn[a] = be[a]
});
ft.add(Qe.updateRoot);
Kr = xn.to({}, {
    duration: 0
});
var Lu = function(e, r) {
        for (var t = e._pt; t && t.p !== r && t.op !== r && t.fp !== r;) t = t._next;
        return t
    },
    Fu = function(e, r) {
        var t = e._targets,
            i, n, s;
        for (i in r)
            for (n = t.length; n--;) s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = Lu(s, i)), s && s.modifier && s.modifier(r[i], e, t[n], i))
    },
    Bn = function(e, r) {
        return {
            name: e,
            rawVars: 1,
            init: function(i, n, s) {
                s._onInit = function(o) {
                    var u, l;
                    if (Ce(n) && (u = {}, tt(n, function(f) {
                            return u[f] = 1
                        }), n = u), r) {
                        u = {};
                        for (l in n) u[l] = r(n[l]);
                        n = u
                    }
                    Fu(o, n)
                }
            }
        }
    },
    dt = xn.registerPlugin({
        name: "attr",
        init: function(e, r, t, i, n) {
            var s, o, u;
            this.tween = t;
            for (s in r) u = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (u || 0) + "", r[s], i, n, 0, 0, s), o.op = s, o.b = u, this._props.push(s)
        },
        render: function(e, r) {
            for (var t = r._pt; t;) Je ? t.set(t.t, t.p, t.b, t) : t.r(e, t.d), t = t._next
        }
    }, {
        name: "endArray",
        init: function(e, r) {
            for (var t = r.length; t--;) this.add(e, t, e[t] || 0, r[t], 0, 0, 0, 0, 0, 1)
        }
    }, Bn("roundProps", rs), Bn("modifiers"), Bn("snap", Go)) || xn;
be.version = Qe.version = dt.version = "3.11.3";
Eo = 1;
Po() && ai();
$.Power0;
var Hs = $.Power1;
$.Power2;
$.Power3;
$.Power4;
$.Linear;
$.Quad;
$.Cubic;
$.Quart;
$.Quint;
$.Strong;
$.Elastic;
$.Back;
$.SteppedEase;
$.Bounce;
$.Sine;
$.Expo;
$.Circ;
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Zs, or, ei, Ds, Pr, Ks, Es, zu = function() {
        return typeof window < "u"
    },
    Qt = {},
    wr = 180 / Math.PI,
    ti = Math.PI / 180,
    Ur = Math.atan2,
    js = 1e8,
    As = /([A-Z])/g,
    Iu = /(left|right|width|margin|padding|x)/i,
    Bu = /[\s,\(]\S/,
    Zt = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    ss = function(e, r) {
        return r.set(r.t, r.p, Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    Nu = function(e, r) {
        return r.set(r.t, r.p, e === 1 ? r.e : Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u, r)
    },
    Yu = function(e, r) {
        return r.set(r.t, r.p, e ? Math.round((r.s + r.c * e) * 1e4) / 1e4 + r.u : r.b, r)
    },
    Xu = function(e, r) {
        var t = r.s + r.c * e;
        r.set(r.t, r.p, ~~(t + (t < 0 ? -.5 : .5)) + r.u, r)
    },
    ca = function(e, r) {
        return r.set(r.t, r.p, e ? r.e : r.b, r)
    },
    ha = function(e, r) {
        return r.set(r.t, r.p, e !== 1 ? r.b : r.e, r)
    },
    Vu = function(e, r, t) {
        return e.style[r] = t
    },
    Wu = function(e, r, t) {
        return e.style.setProperty(r, t)
    },
    Uu = function(e, r, t) {
        return e._gsap[r] = t
    },
    $u = function(e, r, t) {
        return e._gsap.scaleX = e._gsap.scaleY = t
    },
    Gu = function(e, r, t, i, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = t, s.renderTransform(n, s)
    },
    qu = function(e, r, t, i, n) {
        var s = e._gsap;
        s[r] = t, s.renderTransform(n, s)
    },
    se = "transform",
    Dt = se + "Origin",
    Hu = function(e, r) {
        var t = this,
            i = this.target,
            n = i.style;
        if (e in Qt) {
            if (this.tfm = this.tfm || {}, e !== "transform" && (e = Zt[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
                    return t.tfm[s] = qt(i, s)
                }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : qt(i, e)), this.props.indexOf(se) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(Dt, r, "")), e = se
        }(n || r) && this.props.push(e, r, n[e])
    },
    _a = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    Zu = function() {
        var e = this.props,
            r = this.target,
            t = r.style,
            i = r._gsap,
            n, s;
        for (n = 0; n < e.length; n += 3) e[n + 1] ? r[e[n]] = e[n + 2] : e[n + 2] ? t[e[n]] = e[n + 2] : t.removeProperty(e[n].replace(As, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) i[s] = this.tfm[s];
            i.svg && (i.renderTransform(), r.setAttribute("data-svg-origin", this.svgo || "")), n = Es(), n && !n.isStart && !t[se] && (_a(t), i.uncache = 1)
        }
    },
    da = function(e, r) {
        var t = {
            target: e,
            props: [],
            revert: Zu,
            save: Hu
        };
        return r && r.split(",").forEach(function(i) {
            return t.save(i)
        }), t
    },
    pa, os = function(e, r) {
        var t = or.createElementNS ? or.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : or.createElement(e);
        return t.style ? t : or.createElement(e)
    },
    Yt = function a(e, r, t) {
        var i = getComputedStyle(e);
        return i[r] || i.getPropertyValue(r.replace(As, "-$1").toLowerCase()) || i.getPropertyValue(r) || !t && a(e, fi(r) || r, 1) || ""
    },
    Qs = "O,Moz,ms,Ms,Webkit".split(","),
    fi = function(e, r, t) {
        var i = r || Pr,
            n = i.style,
            s = 5;
        if (e in n && !t) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Qs[s] + e in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Qs[s] : "") + e
    },
    as = function() {
        zu() && window.document && (Zs = window, or = Zs.document, ei = or.documentElement, Pr = os("div") || {
            style: {}
        }, os("div"), se = fi(se), Dt = se + "Origin", Pr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", pa = !!fi("perspective"), Es = dt.core.reverting, Ds = 1)
    },
    Nn = function a(e) {
        var r = os("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            t = this.parentNode,
            i = this.nextSibling,
            n = this.style.cssText,
            s;
        if (ei.appendChild(r), r.appendChild(this), this.style.display = "block", e) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = a
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return t && (i ? t.insertBefore(this, i) : t.appendChild(this)), ei.removeChild(r), this.style.cssText = n, s
    },
    Js = function(e, r) {
        for (var t = r.length; t--;)
            if (e.hasAttribute(r[t])) return e.getAttribute(r[t])
    },
    ga = function(e) {
        var r;
        try {
            r = e.getBBox()
        } catch {
            r = Nn.call(e, !0)
        }
        return r && (r.width || r.height) || e.getBBox === Nn || (r = Nn.call(e, !0)), r && !r.width && !r.x && !r.y ? {
            x: +Js(e, ["x", "cx", "x1"]) || 0,
            y: +Js(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : r
    },
    ma = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && ga(e))
    },
    Xi = function(e, r) {
        if (r) {
            var t = e.style;
            r in Qt && r !== Dt && (r = se), t.removeProperty ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r), t.removeProperty(r.replace(As, "-$1").toLowerCase())) : t.removeAttribute(r)
        }
    },
    ar = function(e, r, t, i, n, s) {
        var o = new rt(e._pt, r, t, 0, 1, s ? ha : ca);
        return e._pt = o, o.b = i, o.e = n, e._props.push(t), o
    },
    eo = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    Ku = {
        grid: 1,
        flex: 1
    },
    pr = function a(e, r, t, i) {
        var n = parseFloat(t) || 0,
            s = (t + "").trim().substr((n + "").length) || "px",
            o = Pr.style,
            u = Iu.test(r),
            l = e.tagName.toLowerCase() === "svg",
            f = (l ? "client" : "offset") + (u ? "Width" : "Height"),
            d = 100,
            c = i === "px",
            h = i === "%",
            p, _, m, y;
        return i === s || !n || eo[i] || eo[s] ? n : (s !== "px" && !c && (n = a(e, r, t, "px")), y = e.getCTM && ma(e), (h || s === "%") && (Qt[r] || ~r.indexOf("adius")) ? (p = y ? e.getBBox()[u ? "width" : "height"] : e[f], de(h ? n / p * d : n / 100 * p)) : (o[u ? "width" : "height"] = d + (c ? s : i), _ = ~r.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, y && (_ = (e.ownerSVGElement || {}).parentNode), (!_ || _ === or || !_.appendChild) && (_ = or.body), m = _._gsap, m && h && m.width && u && m.time === ft.time && !m.uncache ? de(n / m.width * d) : ((h || s === "%") && !Ku[Yt(_, "display")] && (o.position = Yt(e, "position")), _ === e && (o.position = "static"), _.appendChild(Pr), p = Pr[f], _.removeChild(Pr), o.position = "absolute", u && h && (m = Or(_), m.time = ft.time, m.width = _[f]), de(c ? p * n / d : p && n ? d / p * n : 0))))
    },
    qt = function(e, r, t, i) {
        var n;
        return Ds || as(), r in Zt && r !== "transform" && (r = Zt[r], ~r.indexOf(",") && (r = r.split(",")[0])), Qt[r] && r !== "transform" ? (n = Wi(e, i), n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : Tn(Yt(e, Dt)) + " " + n.zOrigin + "px") : (n = e.style[r], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = bn[r] && bn[r](e, r, t) || Yt(e, r) || Fo(e, r) || (r === "opacity" ? 1 : 0))), t && !~(n + "").trim().indexOf(" ") ? pr(e, r, n, t) + t : n
    },
    ju = function(e, r, t, i) {
        if (!t || t === "none") {
            var n = fi(r, e, 1),
                s = n && Yt(e, n, 1);
            s && s !== t ? (r = n, t = s) : r === "borderColor" && (t = Yt(e, "borderTopColor"))
        }
        var o = new rt(this._pt, e.style, r, 0, 1, ua),
            u = 0,
            l = 0,
            f, d, c, h, p, _, m, y, b, T, v, k;
        if (o.b = t, o.e = i, t += "", i += "", i === "auto" && (e.style[r] = i, i = Yt(e, r) || i, e.style[r] = t), f = [t, i], Qo(f), t = f[0], i = f[1], c = t.match(Zr) || [], k = i.match(Zr) || [], k.length) {
            for (; d = Zr.exec(i);) m = d[0], b = i.substring(u, d.index), p ? p = (p + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (p = 1), m !== (_ = c[l++] || "") && (h = parseFloat(_) || 0, v = _.substr((h + "").length), m.charAt(1) === "=" && (m = Jr(h, m) + v), y = parseFloat(m), T = m.substr((y + "").length), u = Zr.lastIndex - T.length, T || (T = T || ht.units[r] || v, u === i.length && (i += T, o.e += T)), v !== T && (h = pr(e, r, _, T) || 0), o._pt = {
                _next: o._pt,
                p: b || l === 1 ? b : ",",
                s: h,
                c: y - h,
                m: p && p < 4 || r === "zIndex" ? Math.round : 0
            });
            o.c = u < i.length ? i.substring(u, i.length) : ""
        } else o.r = r === "display" && i === "none" ? ha : ca;
        return Mo.test(i) && (o.e = 0), this._pt = o, o
    },
    to = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    Qu = function(e) {
        var r = e.split(" "),
            t = r[0],
            i = r[1] || "50%";
        return (t === "top" || t === "bottom" || i === "left" || i === "right") && (e = t, t = i, i = e), r[0] = to[t] || t, r[1] = to[i] || i, r.join(" ")
    },
    Ju = function(e, r) {
        if (r.tween && r.tween._time === r.tween._dur) {
            var t = r.t,
                i = t.style,
                n = r.u,
                s = t._gsap,
                o, u, l;
            if (n === "all" || n === !0) i.cssText = "", u = 1;
            else
                for (n = n.split(","), l = n.length; --l > -1;) o = n[l], Qt[o] && (u = 1, o = o === "transformOrigin" ? Dt : se), Xi(t, o);
            u && (Xi(t, se), s && (s.svg && t.removeAttribute("transform"), Wi(t, 1), s.uncache = 1, _a(i)))
        }
    },
    bn = {
        clearProps: function(e, r, t, i, n) {
            if (n.data !== "isFromStart") {
                var s = e._pt = new rt(e._pt, r, t, 0, 0, Ju);
                return s.u = i, s.pr = -10, s.tween = n, e._props.push(t), 1
            }
        }
    },
    Vi = [1, 0, 0, 1, 0, 0],
    ya = {},
    va = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    ro = function(e) {
        var r = Yt(e, se);
        return va(r) ? Vi : r.substr(7).match(Oo).map(de)
    },
    Rs = function(e, r) {
        var t = e._gsap || Or(e),
            i = e.style,
            n = ro(e),
            s, o, u, l;
        return t.svg && e.getAttribute("transform") ? (u = e.transform.baseVal.consolidate().matrix, n = [u.a, u.b, u.c, u.d, u.e, u.f], n.join(",") === "1,0,0,1,0,0" ? Vi : n) : (n === Vi && !e.offsetParent && e !== ei && !t.svg && (u = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (l = 1, o = e.nextElementSibling, ei.appendChild(e)), n = ro(e), u ? i.display = u : Xi(e, "display"), l && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : ei.removeChild(e))), r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    us = function(e, r, t, i, n, s) {
        var o = e._gsap,
            u = n || Rs(e, !0),
            l = o.xOrigin || 0,
            f = o.yOrigin || 0,
            d = o.xOffset || 0,
            c = o.yOffset || 0,
            h = u[0],
            p = u[1],
            _ = u[2],
            m = u[3],
            y = u[4],
            b = u[5],
            T = r.split(" "),
            v = parseFloat(T[0]) || 0,
            k = parseFloat(T[1]) || 0,
            C, S, O, P;
        t ? u !== Vi && (S = h * m - p * _) && (O = v * (m / S) + k * (-_ / S) + (_ * b - m * y) / S, P = v * (-p / S) + k * (h / S) - (h * b - p * y) / S, v = O, k = P) : (C = ga(e), v = C.x + (~T[0].indexOf("%") ? v / 100 * C.width : v), k = C.y + (~(T[1] || T[0]).indexOf("%") ? k / 100 * C.height : k)), i || i !== !1 && o.smooth ? (y = v - l, b = k - f, o.xOffset = d + (y * h + b * _) - y, o.yOffset = c + (y * p + b * m) - b) : o.xOffset = o.yOffset = 0, o.xOrigin = v, o.yOrigin = k, o.smooth = !!i, o.origin = r, o.originIsAbsolute = !!t, e.style[Dt] = "0px 0px", s && (ar(s, o, "xOrigin", l, v), ar(s, o, "yOrigin", f, k), ar(s, o, "xOffset", d, o.xOffset), ar(s, o, "yOffset", c, o.yOffset)), e.setAttribute("data-svg-origin", v + " " + k)
    },
    Wi = function(e, r) {
        var t = e._gsap || new ra(e);
        if ("x" in t && !r && !t.uncache) return t;
        var i = e.style,
            n = t.scaleX < 0,
            s = "px",
            o = "deg",
            u = getComputedStyle(e),
            l = Yt(e, Dt) || "0",
            f, d, c, h, p, _, m, y, b, T, v, k, C, S, O, P, M, E, R, Z, Y, I, F, V, B, Q, g, we, Ee, St, Se, Ae;
        return f = d = c = _ = m = y = b = T = v = 0, h = p = 1, t.svg = !!(e.getCTM && ma(e)), u.translate && ((u.translate !== "none" || u.scale !== "none" || u.rotate !== "none") && (i[se] = (u.translate !== "none" ? "translate3d(" + (u.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (u.rotate !== "none" ? "rotate(" + u.rotate + ") " : "") + (u.scale !== "none" ? "scale(" + u.scale.split(" ").join(",") + ") " : "") + (u[se] !== "none" ? u[se] : "")), i.scale = i.rotate = i.translate = "none"), S = Rs(e, t.svg), t.svg && (t.uncache ? (B = e.getBBox(), l = t.xOrigin - B.x + "px " + (t.yOrigin - B.y) + "px", V = "") : V = !r && e.getAttribute("data-svg-origin"), us(e, V || l, !!V || t.originIsAbsolute, t.smooth !== !1, S)), k = t.xOrigin || 0, C = t.yOrigin || 0, S !== Vi && (E = S[0], R = S[1], Z = S[2], Y = S[3], f = I = S[4], d = F = S[5], S.length === 6 ? (h = Math.sqrt(E * E + R * R), p = Math.sqrt(Y * Y + Z * Z), _ = E || R ? Ur(R, E) * wr : 0, b = Z || Y ? Ur(Z, Y) * wr + _ : 0, b && (p *= Math.abs(Math.cos(b * ti))), t.svg && (f -= k - (k * E + C * Z), d -= C - (k * R + C * Y))) : (Ae = S[6], St = S[7], g = S[8], we = S[9], Ee = S[10], Se = S[11], f = S[12], d = S[13], c = S[14], O = Ur(Ae, Ee), m = O * wr, O && (P = Math.cos(-O), M = Math.sin(-O), V = I * P + g * M, B = F * P + we * M, Q = Ae * P + Ee * M, g = I * -M + g * P, we = F * -M + we * P, Ee = Ae * -M + Ee * P, Se = St * -M + Se * P, I = V, F = B, Ae = Q), O = Ur(-Z, Ee), y = O * wr, O && (P = Math.cos(-O), M = Math.sin(-O), V = E * P - g * M, B = R * P - we * M, Q = Z * P - Ee * M, Se = Y * M + Se * P, E = V, R = B, Z = Q), O = Ur(R, E), _ = O * wr, O && (P = Math.cos(O), M = Math.sin(O), V = E * P + R * M, B = I * P + F * M, R = R * P - E * M, F = F * P - I * M, E = V, I = B), m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0, y = 180 - y), h = de(Math.sqrt(E * E + R * R + Z * Z)), p = de(Math.sqrt(F * F + Ae * Ae)), O = Ur(I, F), b = Math.abs(O) > 2e-4 ? O * wr : 0, v = Se ? 1 / (Se < 0 ? -Se : Se) : 0), t.svg && (V = e.getAttribute("transform"), t.forceCSS = e.setAttribute("transform", "") || !va(Yt(e, se)), V && e.setAttribute("transform", V))), Math.abs(b) > 90 && Math.abs(b) < 270 && (n ? (h *= -1, b += _ <= 0 ? 180 : -180, _ += _ <= 0 ? 180 : -180) : (p *= -1, b += b <= 0 ? 180 : -180)), r = r || t.uncache, t.x = f - ((t.xPercent = f && (!r && t.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? e.offsetWidth * t.xPercent / 100 : 0) + s, t.y = d - ((t.yPercent = d && (!r && t.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * t.yPercent / 100 : 0) + s, t.z = c + s, t.scaleX = de(h), t.scaleY = de(p), t.rotation = de(_) + o, t.rotationX = de(m) + o, t.rotationY = de(y) + o, t.skewX = b + o, t.skewY = T + o, t.transformPerspective = v + s, (t.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (i[Dt] = Tn(l)), t.xOffset = t.yOffset = 0, t.force3D = ht.force3D, t.renderTransform = t.svg ? tl : pa ? xa : el, t.uncache = 0, t
    },
    Tn = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    Yn = function(e, r, t) {
        var i = Ie(r);
        return de(parseFloat(r) + parseFloat(pr(e, "x", t + "px", i))) + i
    },
    el = function(e, r) {
        r.z = "0px", r.rotationY = r.rotationX = "0deg", r.force3D = 0, xa(e, r)
    },
    br = "0deg",
    xi = "0px",
    Tr = ") ",
    xa = function(e, r) {
        var t = r || this,
            i = t.xPercent,
            n = t.yPercent,
            s = t.x,
            o = t.y,
            u = t.z,
            l = t.rotation,
            f = t.rotationY,
            d = t.rotationX,
            c = t.skewX,
            h = t.skewY,
            p = t.scaleX,
            _ = t.scaleY,
            m = t.transformPerspective,
            y = t.force3D,
            b = t.target,
            T = t.zOrigin,
            v = "",
            k = y === "auto" && e && e !== 1 || y === !0;
        if (T && (d !== br || f !== br)) {
            var C = parseFloat(f) * ti,
                S = Math.sin(C),
                O = Math.cos(C),
                P;
            C = parseFloat(d) * ti, P = Math.cos(C), s = Yn(b, s, S * P * -T), o = Yn(b, o, -Math.sin(C) * -T), u = Yn(b, u, O * P * -T + T)
        }
        m !== xi && (v += "perspective(" + m + Tr), (i || n) && (v += "translate(" + i + "%, " + n + "%) "), (k || s !== xi || o !== xi || u !== xi) && (v += u !== xi || k ? "translate3d(" + s + ", " + o + ", " + u + ") " : "translate(" + s + ", " + o + Tr), l !== br && (v += "rotate(" + l + Tr), f !== br && (v += "rotateY(" + f + Tr), d !== br && (v += "rotateX(" + d + Tr), (c !== br || h !== br) && (v += "skew(" + c + ", " + h + Tr), (p !== 1 || _ !== 1) && (v += "scale(" + p + ", " + _ + Tr), b.style[se] = v || "translate(0, 0)"
    },
    tl = function(e, r) {
        var t = r || this,
            i = t.xPercent,
            n = t.yPercent,
            s = t.x,
            o = t.y,
            u = t.rotation,
            l = t.skewX,
            f = t.skewY,
            d = t.scaleX,
            c = t.scaleY,
            h = t.target,
            p = t.xOrigin,
            _ = t.yOrigin,
            m = t.xOffset,
            y = t.yOffset,
            b = t.forceCSS,
            T = parseFloat(s),
            v = parseFloat(o),
            k, C, S, O, P;
        u = parseFloat(u), l = parseFloat(l), f = parseFloat(f), f && (f = parseFloat(f), l += f, u += f), u || l ? (u *= ti, l *= ti, k = Math.cos(u) * d, C = Math.sin(u) * d, S = Math.sin(u - l) * -c, O = Math.cos(u - l) * c, l && (f *= ti, P = Math.tan(l - f), P = Math.sqrt(1 + P * P), S *= P, O *= P, f && (P = Math.tan(f), P = Math.sqrt(1 + P * P), k *= P, C *= P)), k = de(k), C = de(C), S = de(S), O = de(O)) : (k = d, O = c, C = S = 0), (T && !~(s + "").indexOf("px") || v && !~(o + "").indexOf("px")) && (T = pr(h, "x", s, "px"), v = pr(h, "y", o, "px")), (p || _ || m || y) && (T = de(T + p - (p * k + _ * S) + m), v = de(v + _ - (p * C + _ * O) + y)), (i || n) && (P = h.getBBox(), T = de(T + i / 100 * P.width), v = de(v + n / 100 * P.height)), P = "matrix(" + k + "," + C + "," + S + "," + O + "," + T + "," + v + ")", h.setAttribute("transform", P), b && (h.style[se] = P)
    },
    rl = function(e, r, t, i, n) {
        var s = 360,
            o = Ce(n),
            u = parseFloat(n) * (o && ~n.indexOf("rad") ? wr : 1),
            l = u - i,
            f = i + l + "deg",
            d, c;
        return o && (d = n.split("_")[1], d === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), d === "cw" && l < 0 ? l = (l + s * js) % s - ~~(l / s) * s : d === "ccw" && l > 0 && (l = (l - s * js) % s - ~~(l / s) * s)), e._pt = c = new rt(e._pt, r, t, i, l, Nu), c.e = f, c.u = "deg", e._props.push(t), c
    },
    io = function(e, r) {
        for (var t in r) e[t] = r[t];
        return e
    },
    il = function(e, r, t) {
        var i = io({}, t._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = t.style,
            o, u, l, f, d, c, h, p;
        i.svg ? (l = t.getAttribute("transform"), t.setAttribute("transform", ""), s[se] = r, o = Wi(t, 1), Xi(t, se), t.setAttribute("transform", l)) : (l = getComputedStyle(t)[se], s[se] = r, o = Wi(t, 1), s[se] = l);
        for (u in Qt) l = i[u], f = o[u], l !== f && n.indexOf(u) < 0 && (h = Ie(l), p = Ie(f), d = h !== p ? pr(t, u, l, p) : parseFloat(l), c = parseFloat(f), e._pt = new rt(e._pt, o, u, d, c - d, ss), e._pt.u = p || 0, e._props.push(u));
        io(o, i)
    };
tt("padding,margin,Width,Radius", function(a, e) {
    var r = "Top",
        t = "Right",
        i = "Bottom",
        n = "Left",
        s = (e < 3 ? [r, t, i, n] : [r + n, r + t, i + t, i + n]).map(function(o) {
            return e < 2 ? a + o : "border" + o + a
        });
    bn[e > 1 ? "border" + a : a] = function(o, u, l, f, d) {
        var c, h;
        if (arguments.length < 4) return c = s.map(function(p) {
            return qt(o, p, l)
        }), h = c.join(" "), h.split(c[0]).length === 5 ? c[0] : h;
        c = (f + "").split(" "), h = {}, s.forEach(function(p, _) {
            return h[p] = c[_] = c[_] || c[(_ - 1) / 2 | 0]
        }), o.init(u, h, d)
    }
});
var ba = {
    name: "css",
    register: as,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, r, t, i, n) {
        var s = this._props,
            o = e.style,
            u = t.vars.startAt,
            l, f, d, c, h, p, _, m, y, b, T, v, k, C, S, O;
        Ds || as(), this.styles = this.styles || da(e), O = this.styles.props, this.tween = t;
        for (_ in r)
            if (_ !== "autoRound" && (f = r[_], !(lt[_] && ia(_, r, t, i, e, n)))) {
                if (h = typeof f, p = bn[_], h === "function" && (f = f.call(t, i, e, n), h = typeof f), h === "string" && ~f.indexOf("random(") && (f = Ni(f)), p) p(this, e, _, f, t) && (S = 1);
                else if (_.substr(0, 2) === "--") l = (getComputedStyle(e).getPropertyValue(_) + "").trim(), f += "", hr.lastIndex = 0, hr.test(l) || (m = Ie(l), y = Ie(f)), y ? m !== y && (l = pr(e, _, l, y) + y) : m && (f += m), this.add(o, "setProperty", l, f, i, n, 0, 0, _), s.push(_), O.push(_, 0, o[_]);
                else if (h !== "undefined") {
                    if (u && _ in u ? (l = typeof u[_] == "function" ? u[_].call(t, i, e, n) : u[_], Ce(l) && ~l.indexOf("random(") && (l = Ni(l)), Ie(l + "") || (l += ht.units[_] || Ie(qt(e, _)) || ""), (l + "").charAt(1) === "=" && (l = qt(e, _))) : l = qt(e, _), c = parseFloat(l), b = h === "string" && f.charAt(1) === "=" && f.substr(0, 2), b && (f = f.substr(2)), d = parseFloat(f), _ in Zt && (_ === "autoAlpha" && (c === 1 && qt(e, "visibility") === "hidden" && d && (c = 0), O.push("visibility", 0, o.visibility), ar(this, o, "visibility", c ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), _ !== "scale" && _ !== "transform" && (_ = Zt[_], ~_.indexOf(",") && (_ = _.split(",")[0]))), T = _ in Qt, T) {
                        if (this.styles.save(_), v || (k = e._gsap, k.renderTransform && !r.parseTransform || Wi(e, r.parseTransform), C = r.smoothOrigin !== !1 && k.smooth, v = this._pt = new rt(this._pt, o, se, 0, 1, k.renderTransform, k, 0, -1), v.dep = 1), _ === "scale") this._pt = new rt(this._pt, k, "scaleY", c, (b ? Jr(c, b + d) : d) - c || 0, ss), this._pt.u = 0, s.push("scaleY", _), _ += "X";
                        else if (_ === "transformOrigin") {
                            O.push(Dt, 0, o[Dt]), f = Qu(f), k.svg ? us(e, f, 0, C, 0, this) : (y = parseFloat(f.split(" ")[2]) || 0, y !== k.zOrigin && ar(this, k, "zOrigin", k.zOrigin, y), ar(this, o, _, Tn(l), Tn(f)));
                            continue
                        } else if (_ === "svgOrigin") {
                            us(e, f, 1, C, 0, this);
                            continue
                        } else if (_ in ya) {
                            rl(this, k, _, c, b ? Jr(c, b + f) : f);
                            continue
                        } else if (_ === "smoothOrigin") {
                            ar(this, k, "smooth", k.smooth, f);
                            continue
                        } else if (_ === "force3D") {
                            k[_] = f;
                            continue
                        } else if (_ === "transform") {
                            il(this, f, e);
                            continue
                        }
                    } else _ in o || (_ = fi(_) || _);
                    if (T || (d || d === 0) && (c || c === 0) && !Bu.test(f) && _ in o) m = (l + "").substr((c + "").length), d || (d = 0), y = Ie(f) || (_ in ht.units ? ht.units[_] : m), m !== y && (c = pr(e, _, l, y)), this._pt = new rt(this._pt, T ? k : o, _, c, (b ? Jr(c, b + d) : d) - c, !T && (y === "px" || _ === "zIndex") && r.autoRound !== !1 ? Xu : ss), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = l, this._pt.r = Yu);
                    else if (_ in o) ju.call(this, e, _, l, b ? b + f : f);
                    else if (_ in e) this.add(e, _, l || e[_], b ? b + f : f, i, n);
                    else {
                        bs(_, f);
                        continue
                    }
                    T || (_ in o ? O.push(_, 0, o[_]) : O.push(_, 1, l || e[_])), s.push(_)
                }
            }
        S && la(this)
    },
    render: function(e, r) {
        if (r.tween._time || !Es())
            for (var t = r._pt; t;) t.r(e, t.d), t = t._next;
        else r.styles.revert()
    },
    get: qt,
    aliases: Zt,
    getSetter: function(e, r, t) {
        var i = Zt[r];
        return i && i.indexOf(",") < 0 && (r = i), r in Qt && r !== Dt && (e._gsap.x || qt(e, "x")) ? t && Ks === t ? r === "scale" ? $u : Uu : (Ks = t || {}) && (r === "scale" ? Gu : qu) : e.style && !vs(e.style[r]) ? Vu : ~r.indexOf("-") ? Wu : Os(e, r)
    },
    core: {
        _removeProperty: Xi,
        _getMatrix: Rs
    }
};
dt.utils.checkPrefix = fi;
dt.core.getStyleSaver = da;
(function(a, e, r, t) {
    var i = tt(a + "," + e + "," + r, function(n) {
        Qt[n] = 1
    });
    tt(e, function(n) {
        ht.units[n] = "deg", ya[n] = 1
    }), Zt[i[13]] = a + "," + e, tt(t, function(n) {
        var s = n.split(":");
        Zt[s[1]] = i[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
tt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(a) {
    ht.units[a] = "px"
});
dt.registerPlugin(ba);
var je = dt.registerPlugin(ba) || dt;
je.core.Tween;

function no(a, e) {
    for (var r = 0; r < e.length; r++) {
        var t = e[r];
        t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(a, t.key, t)
    }
}

function nl(a, e, r) {
    return e && no(a.prototype, e), r && no(a, r), a
}
/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Be, ls, ct, ur, lr, ri, Ta, Sr, Ei, wa, Kt, Ct, Sa = function() {
        return Be || typeof window < "u" && (Be = window.gsap) && Be.registerPlugin && Be
    },
    ka = 1,
    jr = [],
    U = [],
    Xt = [],
    Ai = Date.now,
    fs = function(e, r) {
        return r
    },
    sl = function() {
        var e = Ei.core,
            r = e.bridge || {},
            t = e._scrollers,
            i = e._proxies;
        t.push.apply(t, U), i.push.apply(i, Xt), U = t, Xt = i, fs = function(s, o) {
            return r[s](o)
        }
    },
    _r = function(e, r) {
        return ~Xt.indexOf(e) && Xt[Xt.indexOf(e) + 1][r]
    },
    Ri = function(e) {
        return !!~wa.indexOf(e)
    },
    Ze = function(e, r, t, i, n) {
        return e.addEventListener(r, t, {
            passive: !i,
            capture: !!n
        })
    },
    Ue = function(e, r, t, i) {
        return e.removeEventListener(r, t, !!i)
    },
    qi = "scrollLeft",
    Hi = "scrollTop",
    cs = function() {
        return Kt && Kt.isPressed || U.cache++
    },
    wn = function(e, r) {
        var t = function i(n) {
            if (n || n === 0) {
                ka && (ct.history.scrollRestoration = "manual");
                var s = Kt && Kt.isPressed;
                n = i.v = Math.round(n) || (Kt && Kt.iOS ? 1 : 0), e(n), i.cacheID = U.cache, s && fs("ss", n)
            } else(r || U.cache !== i.cacheID || fs("ref")) && (i.cacheID = U.cache, i.v = e());
            return i.v + i.offset
        };
        return t.offset = 0, e && t
    },
    qe = {
        s: qi,
        p: "left",
        p2: "Left",
        os: "right",
        os2: "Right",
        d: "width",
        d2: "Width",
        a: "x",
        sc: wn(function(a) {
            return arguments.length ? ct.scrollTo(a, Te.sc()) : ct.pageXOffset || ur[qi] || lr[qi] || ri[qi] || 0
        })
    },
    Te = {
        s: Hi,
        p: "top",
        p2: "Top",
        os: "bottom",
        os2: "Bottom",
        d: "height",
        d2: "Height",
        a: "y",
        op: qe,
        sc: wn(function(a) {
            return arguments.length ? ct.scrollTo(qe.sc(), a) : ct.pageYOffset || ur[Hi] || lr[Hi] || ri[Hi] || 0
        })
    },
    Ke = function(e) {
        return Be.utils.toArray(e)[0] || (typeof e == "string" && Be.config().nullTargetWarn !== !1 ? console.warn("Element not found:", e) : null)
    },
    gr = function(e, r) {
        var t = r.s,
            i = r.sc;
        Ri(e) && (e = ur.scrollingElement || lr);
        var n = U.indexOf(e),
            s = i === Te.sc ? 1 : 2;
        !~n && (n = U.push(e) - 1), U[n + s] || e.addEventListener("scroll", cs);
        var o = U[n + s],
            u = o || (U[n + s] = wn(_r(e, t), !0) || (Ri(e) ? i : wn(function(l) {
                return arguments.length ? e[t] = l : e[t]
            })));
        return u.target = e, o || (u.smooth = Be.getProperty(e, "scrollBehavior") === "smooth"), u
    },
    hs = function(e, r, t) {
        var i = e,
            n = e,
            s = Ai(),
            o = s,
            u = r || 50,
            l = Math.max(500, u * 3),
            f = function(p, _) {
                var m = Ai();
                _ || m - s > u ? (n = i, i = p, o = s, s = m) : t ? i += p : i = n + (p - n) / (m - o) * (s - o)
            },
            d = function() {
                n = i = t ? 0 : i, o = s = 0
            },
            c = function(p) {
                var _ = o,
                    m = n,
                    y = Ai();
                return (p || p === 0) && p !== i && f(p), s === o || y - o > l ? 0 : (i + (t ? m : -m)) / ((t ? y : s) - _) * 1e3
            };
        return {
            update: f,
            reset: d,
            getVelocity: c
        }
    },
    bi = function(e, r) {
        return r && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    },
    so = function(e) {
        var r = Math.max.apply(Math, e),
            t = Math.min.apply(Math, e);
        return Math.abs(r) >= Math.abs(t) ? r : t
    },
    Pa = function() {
        Ei = Be.core.globals().ScrollTrigger, Ei && Ei.core && sl()
    },
    Ca = function(e) {
        return Be = e || Sa(), Be && typeof document < "u" && document.body && (ct = window, ur = document, lr = ur.documentElement, ri = ur.body, wa = [ct, ur, lr, ri], Be.utils.clamp, Sr = "onpointerenter" in ri ? "pointer" : "mouse", Ta = ye.isTouch = ct.matchMedia && ct.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in ct || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, Ct = ye.eventTypes = ("ontouchstart" in lr ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in lr ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return ka = 0
        }, 500), Pa(), ls = 1), ls
    };
qe.op = Te;
U.cache = 0;
var ye = function() {
    function a(r) {
        this.init(r)
    }
    var e = a.prototype;
    return e.init = function(t) {
        ls || Ca(Be) || console.warn("Please gsap.registerPlugin(Observer)"), Ei || Pa();
        var i = t.tolerance,
            n = t.dragMinimum,
            s = t.type,
            o = t.target,
            u = t.lineHeight,
            l = t.debounce,
            f = t.preventDefault,
            d = t.onStop,
            c = t.onStopDelay,
            h = t.ignore,
            p = t.wheelSpeed,
            _ = t.event,
            m = t.onDragStart,
            y = t.onDragEnd,
            b = t.onDrag,
            T = t.onPress,
            v = t.onRelease,
            k = t.onRight,
            C = t.onLeft,
            S = t.onUp,
            O = t.onDown,
            P = t.onChangeX,
            M = t.onChangeY,
            E = t.onChange,
            R = t.onToggleX,
            Z = t.onToggleY,
            Y = t.onHover,
            I = t.onHoverEnd,
            F = t.onMove,
            V = t.ignoreCheck,
            B = t.isNormalizer,
            Q = t.onGestureStart,
            g = t.onGestureEnd,
            we = t.onWheel,
            Ee = t.onEnable,
            St = t.onDisable,
            Se = t.onClick,
            Ae = t.scrollSpeed,
            te = t.capture,
            Re = t.allowClicks,
            Ye = t.lockAxis,
            hi = t.onLockAxis;
        this.target = o = Ke(o) || lr, this.vars = t, h && (h = Be.utils.toArray(h)), i = i || 1e-9, n = n || 0, p = p || 1, Ae = Ae || 1, s = s || "wheel,touch,pointer", l = l !== !1, u || (u = parseFloat(ct.getComputedStyle(ri).lineHeight) || 22);
        var it, pt, H, Le, nt, Et, Xe, x = this,
            Wt = 0,
            re = 0,
            Jt = gr(o, qe),
            er = gr(o, Te),
            Yr = Jt(),
            Ve = er(),
            _i = ~s.indexOf("touch") && !~s.indexOf("pointer") && Ct[0] === "pointerdown",
            tr = Ri(o),
            he = o.ownerDocument || ur,
            st = [0, 0, 0],
            Fe = [0, 0, 0],
            di = 0,
            We = function() {
                return di = Ai()
            },
            At = function(w, D) {
                return (x.event = w) && h && ~h.indexOf(w.target) || D && _i && w.pointerType !== "touch" || V && V(w, D)
            },
            pi = function() {
                x._vx.reset(), x._vy.reset(), pt.pause(), d && d(x)
            },
            rr = function() {
                var w = x.deltaX = so(st),
                    D = x.deltaY = so(Fe),
                    A = Math.abs(w) >= i,
                    z = Math.abs(D) >= i;
                E && (A || z) && E(x, w, D, st, Fe), A && (k && x.deltaX > 0 && k(x), C && x.deltaX < 0 && C(x), P && P(x), R && x.deltaX < 0 != Wt < 0 && R(x), Wt = x.deltaX, st[0] = st[1] = st[2] = 0), z && (O && x.deltaY > 0 && O(x), S && x.deltaY < 0 && S(x), M && M(x), Z && x.deltaY < 0 != re < 0 && Z(x), re = x.deltaY, Fe[0] = Fe[1] = Fe[2] = 0), (Le || H) && (F && F(x), H && (b(x), H = !1), Le = !1), Et && !(Et = !1) && hi && hi(x), nt && (we(x), nt = !1), it = 0
            },
            yr = function(w, D, A) {
                st[A] += w, Fe[A] += D, x._vx.update(w), x._vy.update(D), l ? it || (it = requestAnimationFrame(rr)) : rr()
            },
            Xr = function(w, D) {
                Ye && !Xe && (x.axis = Xe = Math.abs(w) > Math.abs(D) ? "x" : "y", Et = !0), Xe !== "y" && (st[2] += w, x._vx.update(w, !0)), Xe !== "x" && (Fe[2] += D, x._vy.update(D, !0)), l ? it || (it = requestAnimationFrame(rr)) : rr()
            },
            K = function(w) {
                if (!At(w, 1)) {
                    w = bi(w, f);
                    var D = w.clientX,
                        A = w.clientY,
                        z = D - x.x,
                        ve = A - x.y,
                        N = x.isDragging;
                    x.x = D, x.y = A, (N || Math.abs(x.startX - D) >= n || Math.abs(x.startY - A) >= n) && (b && (H = !0), N || (x.isDragging = !0), Xr(z, ve), N || m && m(x))
                }
            },
            ir = x.onPress = function(q) {
                At(q, 1) || (x.axis = Xe = null, pt.pause(), x.isPressed = !0, q = bi(q), Wt = re = 0, x.startX = x.x = q.clientX, x.startY = x.y = q.clientY, x._vx.reset(), x._vy.reset(), Ze(B ? o : he, Ct[1], K, f, !0), x.deltaX = x.deltaY = 0, T && T(x))
            },
            ot = function(w) {
                if (!At(w, 1)) {
                    Ue(B ? o : he, Ct[1], K, !0);
                    var D = x.isDragging && (Math.abs(x.x - x.startX) > 3 || Math.abs(x.y - x.startY) > 3),
                        A = bi(w);
                    D || (x._vx.reset(), x._vy.reset(), f && Re && Be.delayedCall(.08, function() {
                        if (Ai() - di > 300 && !w.defaultPrevented) {
                            if (w.target.click) w.target.click();
                            else if (he.createEvent) {
                                var z = he.createEvent("MouseEvents");
                                z.initMouseEvent("click", !0, !0, ct, 1, A.screenX, A.screenY, A.clientX, A.clientY, !1, !1, !1, !1, 0, null), w.target.dispatchEvent(z)
                            }
                        }
                    })), x.isDragging = x.isGesturing = x.isPressed = !1, d && !B && pt.restart(!0), y && D && y(x), v && v(x, D)
                }
            },
            kt = function(w) {
                return w.touches && w.touches.length > 1 && (x.isGesturing = !0) && Q(w, x.isDragging)
            },
            Rt = function() {
                return (x.isGesturing = !1) || g(x)
            },
            Lt = function(w) {
                if (!At(w)) {
                    var D = Jt(),
                        A = er();
                    yr((D - Yr) * Ae, (A - Ve) * Ae, 1), Yr = D, Ve = A, d && pt.restart(!0)
                }
            },
            vr = function(w) {
                if (!At(w)) {
                    w = bi(w, f), we && (nt = !0);
                    var D = (w.deltaMode === 1 ? u : w.deltaMode === 2 ? ct.innerHeight : 1) * p;
                    yr(w.deltaX * D, w.deltaY * D, 0), d && !B && pt.restart(!0)
                }
            },
            Vr = function(w) {
                if (!At(w)) {
                    var D = w.clientX,
                        A = w.clientY,
                        z = D - x.x,
                        ve = A - x.y;
                    x.x = D, x.y = A, Le = !0, (z || ve) && Xr(z, ve)
                }
            },
            Ut = function(w) {
                x.event = w, Y(x)
            },
            gi = function(w) {
                x.event = w, I(x)
            },
            mi = function(w) {
                return At(w) || bi(w, f) && Se(x)
            };
        pt = x._dc = Be.delayedCall(c || .25, pi).pause(), x.deltaX = x.deltaY = 0, x._vx = hs(0, 50, !0), x._vy = hs(0, 50, !0), x.scrollX = Jt, x.scrollY = er, x.isDragging = x.isGesturing = x.isPressed = !1, x.enable = function(q) {
            return x.isEnabled || (Ze(tr ? he : o, "scroll", cs), s.indexOf("scroll") >= 0 && Ze(tr ? he : o, "scroll", Lt, f, te), s.indexOf("wheel") >= 0 && Ze(o, "wheel", vr, f, te), (s.indexOf("touch") >= 0 && Ta || s.indexOf("pointer") >= 0) && (Ze(o, Ct[0], ir, f, te), Ze(he, Ct[2], ot), Ze(he, Ct[3], ot), Re && Ze(o, "click", We, !1, !0), Se && Ze(o, "click", mi), Q && Ze(he, "gesturestart", kt), g && Ze(he, "gestureend", Rt), Y && Ze(o, Sr + "enter", Ut), I && Ze(o, Sr + "leave", gi), F && Ze(o, Sr + "move", Vr)), x.isEnabled = !0, q && q.type && ir(q), Ee && Ee(x)), x
        }, x.disable = function() {
            x.isEnabled && (jr.filter(function(q) {
                return q !== x && Ri(q.target)
            }).length || Ue(tr ? he : o, "scroll", cs), x.isPressed && (x._vx.reset(), x._vy.reset(), Ue(B ? o : he, Ct[1], K, !0)), Ue(tr ? he : o, "scroll", Lt, te), Ue(o, "wheel", vr, te), Ue(o, Ct[0], ir, te), Ue(he, Ct[2], ot), Ue(he, Ct[3], ot), Ue(o, "click", We, !0), Ue(o, "click", mi), Ue(he, "gesturestart", kt), Ue(he, "gestureend", Rt), Ue(o, Sr + "enter", Ut), Ue(o, Sr + "leave", gi), Ue(o, Sr + "move", Vr), x.isEnabled = x.isPressed = x.isDragging = !1, St && St(x))
        }, x.kill = function() {
            x.disable();
            var q = jr.indexOf(x);
            q >= 0 && jr.splice(q, 1), Kt === x && (Kt = 0)
        }, jr.push(x), B && Ri(o) && (Kt = x), x.enable(_)
    }, nl(a, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]), a
}();
ye.version = "3.11.3";
ye.create = function(a) {
    return new ye(a)
};
ye.register = Ca;
ye.getAll = function() {
    return jr.slice()
};
ye.getById = function(a) {
    return jr.filter(function(e) {
        return e.vars.id === a
    })[0]
};
Sa() && Be.registerPlugin(ye);
/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var L, qr, W, ie, Bt, fe, Oa, Sn, kn, Qr, un, Zi, ze, Dn, _s, $e, oo, ao, Hr, Ma, Xn, Da, at, Ea, Aa, Ra, nr, ds, Ls, Vn, Ki = 1,
    Ge = Date.now,
    Wn = Ge(),
    Tt = 0,
    ji = 0,
    uo = function() {
        return Dn = 1
    },
    lo = function() {
        return Dn = 0
    },
    zt = function(e) {
        return e
    },
    ki = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    La = function() {
        return typeof window < "u"
    },
    Fa = function() {
        return L || La() && (L = window.gsap) && L.registerPlugin && L
    },
    Fr = function(e) {
        return !!~Oa.indexOf(e)
    },
    za = function(e) {
        return _r(e, "getBoundingClientRect") || (Fr(e) ? function() {
            return dn.width = W.innerWidth, dn.height = W.innerHeight, dn
        } : function() {
            return Ht(e)
        })
    },
    ol = function(e, r, t) {
        var i = t.d,
            n = t.d2,
            s = t.a;
        return (s = _r(e, "getBoundingClientRect")) ? function() {
            return s()[i]
        } : function() {
            return (r ? W["inner" + n] : e["client" + n]) || 0
        }
    },
    al = function(e, r) {
        return !r || ~Xt.indexOf(e) ? za(e) : function() {
            return dn
        }
    },
    fr = function(e, r) {
        var t = r.s,
            i = r.d2,
            n = r.d,
            s = r.a;
        return (t = "scroll" + i) && (s = _r(e, t)) ? s() - za(e)()[n] : Fr(e) ? (Bt[t] || fe[t]) - (W["inner" + i] || Bt["client" + i] || fe["client" + i]) : e[t] - e["offset" + i]
    },
    Qi = function(e, r) {
        for (var t = 0; t < Hr.length; t += 3)(!r || ~r.indexOf(Hr[t + 1])) && e(Hr[t], Hr[t + 1], Hr[t + 2])
    },
    Ot = function(e) {
        return typeof e == "string"
    },
    He = function(e) {
        return typeof e == "function"
    },
    Pi = function(e) {
        return typeof e == "number"
    },
    ln = function(e) {
        return typeof e == "object"
    },
    Ti = function(e, r, t) {
        return e && e.progress(r ? 0 : 1) && t && e.pause()
    },
    Un = function(e, r) {
        if (e.enabled) {
            var t = r(e);
            t && t.totalTime && (e.callbackAnimation = t)
        }
    },
    $r = Math.abs,
    Ia = "left",
    Ba = "top",
    Fs = "right",
    zs = "bottom",
    Er = "width",
    Ar = "height",
    Li = "Right",
    Fi = "Left",
    zi = "Top",
    Ii = "Bottom",
    _e = "padding",
    yt = "margin",
    ci = "Width",
    Is = "Height",
    Oe = "px",
    Nt = function(e) {
        return W.getComputedStyle(e)
    },
    ul = function(e) {
        var r = Nt(e).position;
        e.style.position = r === "absolute" || r === "fixed" ? r : "relative"
    },
    fo = function(e, r) {
        for (var t in r) t in e || (e[t] = r[t]);
        return e
    },
    Ht = function(e, r) {
        var t = r && Nt(e)[_s] !== "matrix(1, 0, 0, 1, 0, 0)" && L.to(e, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1),
            i = e.getBoundingClientRect();
        return t && t.progress(0).kill(), i
    },
    ps = function(e, r) {
        var t = r.d2;
        return e["offset" + t] || e["client" + t] || 0
    },
    Na = function(e) {
        var r = [],
            t = e.labels,
            i = e.duration(),
            n;
        for (n in t) r.push(t[n] / i);
        return r
    },
    ll = function(e) {
        return function(r) {
            return L.utils.snap(Na(e), r)
        }
    },
    Bs = function(e) {
        var r = L.utils.snap(e),
            t = Array.isArray(e) && e.slice(0).sort(function(i, n) {
                return i - n
            });
        return t ? function(i, n, s) {
            s === void 0 && (s = .001);
            var o;
            if (!n) return r(i);
            if (n > 0) {
                for (i -= s, o = 0; o < t.length; o++)
                    if (t[o] >= i) return t[o];
                return t[o - 1]
            } else
                for (o = t.length, i += s; o--;)
                    if (t[o] <= i) return t[o];
            return t[0]
        } : function(i, n, s) {
            s === void 0 && (s = .001);
            var o = r(i);
            return !n || Math.abs(o - i) < s || o - i < 0 == n < 0 ? o : r(n < 0 ? i - e : i + e)
        }
    },
    fl = function(e) {
        return function(r, t) {
            return Bs(Na(e))(r, t.direction)
        }
    },
    Ji = function(e, r, t, i) {
        return t.split(",").forEach(function(n) {
            return e(r, n, i)
        })
    },
    Me = function(e, r, t, i, n) {
        return e.addEventListener(r, t, {
            passive: !i,
            capture: !!n
        })
    },
    Pe = function(e, r, t, i) {
        return e.removeEventListener(r, t, !!i)
    },
    en = function(e, r, t) {
        return t && t.wheelHandler && e(r, "wheel", t)
    },
    co = {
        startColor: "green",
        endColor: "red",
        indent: 0,
        fontSize: "16px",
        fontWeight: "normal"
    },
    tn = {
        toggleActions: "play",
        anticipatePin: 0
    },
    Pn = {
        top: 0,
        left: 0,
        center: .5,
        bottom: 1,
        right: 1
    },
    fn = function(e, r) {
        if (Ot(e)) {
            var t = e.indexOf("="),
                i = ~t ? +(e.charAt(t - 1) + 1) * parseFloat(e.substr(t + 1)) : 0;
            ~t && (e.indexOf("%") > t && (i *= r / 100), e = e.substr(0, t - 1)), e = i + (e in Pn ? Pn[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0)
        }
        return e
    },
    rn = function(e, r, t, i, n, s, o, u) {
        var l = n.startColor,
            f = n.endColor,
            d = n.fontSize,
            c = n.indent,
            h = n.fontWeight,
            p = ie.createElement("div"),
            _ = Fr(t) || _r(t, "pinType") === "fixed",
            m = e.indexOf("scroller") !== -1,
            y = _ ? fe : t,
            b = e.indexOf("start") !== -1,
            T = b ? l : f,
            v = "border-color:" + T + ";font-size:" + d + ";color:" + T + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return v += "position:" + ((m || u) && _ ? "fixed;" : "absolute;"), (m || u || !_) && (v += (i === Te ? Fs : zs) + ":" + (s + parseFloat(c)) + "px;"), o && (v += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = b, p.setAttribute("class", "gsap-marker-" + e + (r ? " marker-" + r : "")), p.style.cssText = v, p.innerText = r || r === 0 ? e + "-" + r : e, y.children[0] ? y.insertBefore(p, y.children[0]) : y.appendChild(p), p._offset = p["offset" + i.op.d2], cn(p, 0, i, b), p
    },
    cn = function(e, r, t, i) {
        var n = {
                display: "block"
            },
            s = t[i ? "os2" : "p2"],
            o = t[i ? "p2" : "os2"];
        e._isFlipped = i, n[t.a + "Percent"] = i ? -100 : 0, n[t.a] = i ? "1px" : 0, n["border" + s + ci] = 1, n["border" + o + ci] = 0, n[t.p] = r + "px", L.set(e, n)
    },
    X = [],
    gs = {},
    Ui, ho = function() {
        return Ge() - Tt > 34 && (Ui || (Ui = requestAnimationFrame(Br)))
    },
    Gr = function() {
        (!at || !at.isPressed || at.startX > fe.clientWidth) && (U.cache++, at ? Ui || (Ui = requestAnimationFrame(Br)) : Br(), Tt || Ir("scrollStart"), Tt = Ge())
    },
    $n = function() {
        Ra = W.innerWidth, Aa = W.innerHeight
    },
    Ci = function() {
        U.cache++, !ze && !Da && !ie.fullscreenElement && !ie.webkitFullscreenElement && (!Ea || Ra !== W.innerWidth || Math.abs(W.innerHeight - Aa) > W.innerHeight * .25) && Sn.restart(!0)
    },
    zr = {},
    cl = [],
    Ya = function a() {
        return Pe(G, "scrollEnd", a) || Cr(!0)
    },
    Ir = function(e) {
        return zr[e] && zr[e].map(function(r) {
            return r()
        }) || cl
    },
    ut = [],
    Xa = function(e) {
        for (var r = 0; r < ut.length; r += 5)(!e || ut[r + 4] && ut[r + 4].query === e) && (ut[r].style.cssText = ut[r + 1], ut[r].getBBox && ut[r].setAttribute("transform", ut[r + 2] || ""), ut[r + 3].uncache = 1)
    },
    Ns = function(e, r) {
        var t;
        for ($e = 0; $e < X.length; $e++) t = X[$e], t && (!r || t._ctx === r) && (e ? t.kill(1) : t.revert(!0, !0));
        r && Xa(r), r || Ir("revert")
    },
    Va = function(e, r) {
        U.cache++, (r || !Mt) && U.forEach(function(t) {
            return He(t) && t.cacheID++ && (t.rec = 0)
        }), Ot(e) && (W.history.scrollRestoration = Ls = e)
    },
    Mt, Rr = 0,
    _o, hl = function() {
        if (_o !== Rr) {
            var e = _o = Rr;
            requestAnimationFrame(function() {
                return e === Rr && Cr(!0)
            })
        }
    },
    Cr = function(e, r) {
        if (Tt && !e) {
            Me(G, "scrollEnd", Ya);
            return
        }
        Mt = G.isRefreshing = !0, U.forEach(function(i) {
            return He(i) && i.cacheID++ && (i.rec = i())
        });
        var t = Ir("refreshInit");
        Ma && G.sort(), r || Ns(), U.forEach(function(i) {
            He(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"), i(0))
        }), X.slice(0).forEach(function(i) {
            return i.refresh()
        }), X.forEach(function(i, n) {
            if (i._subPinOffset && i.pin) {
                var s = i.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    o = i.pin[s];
                i.revert(!0, 1), i.adjustPinSpacing(i.pin[s] - o), i.revert(!1, 1)
            }
        }), X.forEach(function(i) {
            return i.vars.end === "max" && i.setPositions(i.start, Math.max(i.start + 1, fr(i.scroller, i._dir)))
        }), t.forEach(function(i) {
            return i && i.render && i.render(-1)
        }), U.forEach(function(i) {
            He(i) && (i.smooth && requestAnimationFrame(function() {
                return i.target.style.scrollBehavior = "smooth"
            }), i.rec && i(i.rec))
        }), Va(Ls, 1), Sn.pause(), Rr++, Br(2), X.forEach(function(i) {
            return He(i.vars.onRefresh) && i.vars.onRefresh(i)
        }), Mt = G.isRefreshing = !1, Ir("refresh")
    },
    po = 0,
    hn = 1,
    kr, Br = function(e) {
        if (!Mt || e === 2) {
            G.isUpdating = !0, kr && kr.update(0);
            var r = X.length,
                t = Ge(),
                i = t - Wn >= 50,
                n = r && X[0].scroll();
            if (hn = po > n ? -1 : 1, po = n, i && (Tt && !Dn && t - Tt > 200 && (Tt = 0, Ir("scrollEnd")), un = Wn, Wn = t), hn < 0) {
                for ($e = r; $e-- > 0;) X[$e] && X[$e].update(0, i);
                hn = 1
            } else
                for ($e = 0; $e < r; $e++) X[$e] && X[$e].update(0, i);
            G.isUpdating = !1
        }
        Ui = 0
    },
    ms = [Ia, Ba, zs, Fs, yt + Ii, yt + Li, yt + zi, yt + Fi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
    _n = ms.concat([Er, Ar, "boxSizing", "max" + ci, "max" + Is, "position", yt, _e, _e + zi, _e + Li, _e + Ii, _e + Fi]),
    _l = function(e, r, t) {
        ii(t);
        var i = e._gsap;
        if (i.spacerIsNative) ii(i.spacerState);
        else if (e._gsap.swappedIn) {
            var n = r.parentNode;
            n && (n.insertBefore(e, r), n.removeChild(r))
        }
        e._gsap.swappedIn = !1
    },
    Gn = function(e, r, t, i) {
        if (!e._gsap.swappedIn) {
            for (var n = ms.length, s = r.style, o = e.style, u; n--;) u = ms[n], s[u] = t[u];
            s.position = t.position === "absolute" ? "absolute" : "relative", t.display === "inline" && (s.display = "inline-block"), o[zs] = o[Fs] = "auto", s.flexBasis = t.flexBasis || "auto", s.overflow = "visible", s.boxSizing = "border-box", s[Er] = ps(e, qe) + Oe, s[Ar] = ps(e, Te) + Oe, s[_e] = o[yt] = o[Ba] = o[Ia] = "0", ii(i), o[Er] = o["max" + ci] = t[Er], o[Ar] = o["max" + Is] = t[Ar], o[_e] = t[_e], e.parentNode !== r && (e.parentNode.insertBefore(r, e), r.appendChild(e)), e._gsap.swappedIn = !0
        }
    },
    dl = /([A-Z])/g,
    ii = function(e) {
        if (e) {
            var r = e.t.style,
                t = e.length,
                i = 0,
                n, s;
            for ((e.t._gsap || L.core.getCache(e.t)).uncache = 1; i < t; i += 2) s = e[i + 1], n = e[i], s ? r[n] = s : r[n] && r.removeProperty(n.replace(dl, "-$1").toLowerCase())
        }
    },
    nn = function(e) {
        for (var r = _n.length, t = e.style, i = [], n = 0; n < r; n++) i.push(_n[n], t[_n[n]]);
        return i.t = e, i
    },
    pl = function(e, r, t) {
        for (var i = [], n = e.length, s = t ? 8 : 0, o; s < n; s += 2) o = e[s], i.push(o, o in r ? r[o] : e[s + 1]);
        return i.t = e.t, i
    },
    dn = {
        left: 0,
        top: 0
    },
    go = function(e, r, t, i, n, s, o, u, l, f, d, c, h) {
        He(e) && (e = e(u)), Ot(e) && e.substr(0, 3) === "max" && (e = c + (e.charAt(4) === "=" ? fn("0" + e.substr(3), t) : 0));
        var p = h ? h.time() : 0,
            _, m, y;
        if (h && h.seek(0), Pi(e)) o && cn(o, t, i, !0);
        else {
            He(r) && (r = r(u));
            var b = (e || "0").split(" "),
                T, v, k, C;
            y = Ke(r) || fe, T = Ht(y) || {}, (!T || !T.left && !T.top) && Nt(y).display === "none" && (C = y.style.display, y.style.display = "block", T = Ht(y), C ? y.style.display = C : y.style.removeProperty("display")), v = fn(b[0], T[i.d]), k = fn(b[1] || "0", t), e = T[i.p] - l[i.p] - f + v + n - k, o && cn(o, k, i, t - k < 20 || o._isStart && k > 20), t -= t - k
        }
        if (s) {
            var S = e + t,
                O = s._isStart;
            _ = "scroll" + i.d2, cn(s, S, i, O && S > 20 || !O && (d ? Math.max(fe[_], Bt[_]) : s.parentNode[_]) <= S + 1), d && (l = Ht(o), d && (s.style[i.op.p] = l[i.op.p] - i.op.m - s._offset + Oe))
        }
        return h && y && (_ = Ht(y), h.seek(c), m = Ht(y), h._caScrollDist = _[i.p] - m[i.p], e = e / h._caScrollDist * c), h && h.seek(p), h ? e : Math.round(e)
    },
    gl = /(webkit|moz|length|cssText|inset)/i,
    mo = function(e, r, t, i) {
        if (e.parentNode !== r) {
            var n = e.style,
                s, o;
            if (r === fe) {
                e._stOrig = n.cssText, o = Nt(e);
                for (s in o) !+s && !gl.test(s) && o[s] && typeof n[s] == "string" && s !== "0" && (n[s] = o[s]);
                n.top = t, n.left = i
            } else n.cssText = e._stOrig;
            L.core.getCache(e).uncache = 1, r.appendChild(e)
        }
    },
    yo = function(e, r) {
        var t = gr(e, r),
            i = "_scroll" + r.p2,
            n, s, o = function u(l, f, d, c, h) {
                var p = u.tween,
                    _ = f.onComplete,
                    m = {};
                return d = d || t(), h = c && h || 0, c = c || l - d, p && p.kill(), n = Math.round(d), f[i] = l, f.modifiers = m, m[i] = function(y) {
                    return y = Math.round(t()), y !== n && y !== s && Math.abs(y - n) > 3 && Math.abs(y - s) > 3 ? (p.kill(), u.tween = 0) : y = d + c * p.ratio + h * p.ratio * p.ratio, s = n, n = Math.round(y)
                }, f.onComplete = function() {
                    u.tween = 0, _ && _.call(p)
                }, p = u.tween = L.to(e, f), p
            };
        return e[i] = t, t.wheelHandler = function() {
            return o.tween && o.tween.kill() && (o.tween = 0)
        }, Me(e, "wheel", t.wheelHandler), o
    },
    G = function() {
        function a(r, t) {
            qr || a.register(L) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(r, t)
        }
        var e = a.prototype;
        return e.init = function(t, i) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !ji) {
                this.update = this.refresh = this.kill = zt;
                return
            }
            t = fo(Ot(t) || Pi(t) || t.nodeType ? {
                trigger: t
            } : t, tn);
            var n = t,
                s = n.onUpdate,
                o = n.toggleClass,
                u = n.id,
                l = n.onToggle,
                f = n.onRefresh,
                d = n.scrub,
                c = n.trigger,
                h = n.pin,
                p = n.pinSpacing,
                _ = n.invalidateOnRefresh,
                m = n.anticipatePin,
                y = n.onScrubComplete,
                b = n.onSnapComplete,
                T = n.once,
                v = n.snap,
                k = n.pinReparent,
                C = n.pinSpacer,
                S = n.containerAnimation,
                O = n.fastScrollEnd,
                P = n.preventOverlaps,
                M = t.horizontal || t.containerAnimation && t.horizontal !== !1 ? qe : Te,
                E = !d && d !== 0,
                R = Ke(t.scroller || W),
                Z = L.core.getCache(R),
                Y = Fr(R),
                I = ("pinType" in t ? t.pinType : _r(R, "pinType") || Y && "fixed") === "fixed",
                F = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                V = E && t.toggleActions.split(" "),
                B = "markers" in t ? t.markers : tn.markers,
                Q = Y ? 0 : parseFloat(Nt(R)["border" + M.p2 + ci]) || 0,
                g = this,
                we = t.onRefreshInit && function() {
                    return t.onRefreshInit(g)
                },
                Ee = ol(R, Y, M),
                St = al(R, Y),
                Se = 0,
                Ae = 0,
                te = gr(R, M),
                Re, Ye, hi, it, pt, H, Le, nt, Et, Xe, x, Wt, re, Jt, er, Yr, Ve, _i, tr, he, st, Fe, di, We, At, pi, rr, yr, Xr, K, ir, ot, kt, Rt, Lt, vr, Vr, Ut;
            if (ds(g), g._dir = M, m *= 45, g.scroller = R, g.scroll = S ? S.time.bind(S) : te, it = te(), g.vars = t, i = i || t.animation, "refreshPriority" in t && (Ma = 1, t.refreshPriority === -9999 && (kr = g)), Z.tweenScroll = Z.tweenScroll || {
                    top: yo(R, Te),
                    left: yo(R, qe)
                }, g.tweenTo = Re = Z.tweenScroll[M.p], g.scrubDuration = function(w) {
                    ir = Pi(w) && w, ir ? K ? K.duration(w) : K = L.to(i, {
                        ease: "expo",
                        totalProgress: "+=0.001",
                        duration: ir,
                        paused: !0,
                        onComplete: function() {
                            return y && y(g)
                        }
                    }) : (K && K.progress(1).kill(), K = 0)
                }, i && (i.vars.lazy = !1, i._initted || i.vars.immediateRender !== !1 && t.immediateRender !== !1 && i.duration() && i.render(0, !0, !0), g.animation = i.pause(), i.scrollTrigger = g, g.scrubDuration(d), yr = 0, u || (u = i.vars.id)), X.push(g), v && ((!ln(v) || v.push) && (v = {
                    snapTo: v
                }), "scrollBehavior" in fe.style && L.set(Y ? [fe, Bt] : R, {
                    scrollBehavior: "auto"
                }), U.forEach(function(w) {
                    return He(w) && w.target === (Y ? ie.scrollingElement || Bt : R) && (w.smooth = !1)
                }), hi = He(v.snapTo) ? v.snapTo : v.snapTo === "labels" ? ll(i) : v.snapTo === "labelsDirectional" ? fl(i) : v.directional !== !1 ? function(w, D) {
                    return Bs(v.snapTo)(w, Ge() - Ae < 500 ? 0 : D.direction)
                } : L.utils.snap(v.snapTo), ot = v.duration || {
                    min: .1,
                    max: 2
                }, ot = ln(ot) ? Qr(ot.min, ot.max) : Qr(ot, ot), kt = L.delayedCall(v.delay || ir / 2 || .1, function() {
                    var w = te(),
                        D = Ge() - Ae < 500,
                        A = Re.tween;
                    if ((D || Math.abs(g.getVelocity()) < 10) && !A && !Dn && Se !== w) {
                        var z = (w - H) / re,
                            ve = i && !E ? i.totalProgress() : z,
                            N = D ? 0 : (ve - Xr) / (Ge() - un) * 1e3 || 0,
                            pe = L.utils.clamp(-z, 1 - z, $r(N / 2) * N / .185),
                            oe = z + (v.inertia === !1 ? 0 : pe),
                            Ft = Qr(0, 1, hi(oe, g)),
                            ee = Math.round(H + Ft * re),
                            ke = v,
                            Pt = ke.onStart,
                            ae = ke.onInterrupt,
                            ue = ke.onComplete;
                        if (w <= Le && w >= H && ee !== w) {
                            if (A && !A._initted && A.data <= $r(ee - w)) return;
                            v.inertia === !1 && (pe = Ft - z), Re(ee, {
                                duration: ot($r(Math.max($r(oe - ve), $r(Ft - ve)) * .185 / N / .05 || 0)),
                                ease: v.ease || "power3",
                                data: $r(ee - w),
                                onInterrupt: function() {
                                    return kt.restart(!0) && ae && ae(g)
                                },
                                onComplete: function() {
                                    g.update(), Se = te(), yr = Xr = i && !E ? i.totalProgress() : g.progress, b && b(g), ue && ue(g)
                                }
                            }, w, pe * re, ee - w - pe * re), Pt && Pt(g, Re.tween)
                        }
                    } else g.isActive && Se !== w && kt.restart(!0)
                }).pause()), u && (gs[u] = g), c = g.trigger = Ke(c || h), Ut = c && c._gsap && c._gsap.stRevert, Ut && (Ut = Ut(g)), h = h === !0 ? c : Ke(h), Ot(o) && (o = {
                    targets: c,
                    className: o
                }), h && (p === !1 || p === yt || (p = !p && h.parentNode && h.parentNode.style && Nt(h.parentNode).display === "flex" ? !1 : _e), g.pin = h, Ye = L.core.getCache(h), Ye.spacer ? Jt = Ye.pinState : (C && (C = Ke(C), C && !C.nodeType && (C = C.current || C.nativeElement), Ye.spacerIsNative = !!C, C && (Ye.spacerState = nn(C))), Ye.spacer = Ve = C || ie.createElement("div"), Ve.classList.add("pin-spacer"), u && Ve.classList.add("pin-spacer-" + u), Ye.pinState = Jt = nn(h)), t.force3D !== !1 && L.set(h, {
                    force3D: !0
                }), g.spacer = Ve = Ye.spacer, rr = Nt(h), di = rr[p + M.os2], tr = L.getProperty(h), he = L.quickSetter(h, M.a, Oe), Gn(h, Ve, rr), Yr = nn(h)), B) {
                Wt = ln(B) ? fo(B, co) : co, Xe = rn("scroller-start", u, R, M, Wt, 0), x = rn("scroller-end", u, R, M, Wt, 0, Xe), _i = Xe["offset" + M.op.d2];
                var gi = Ke(_r(R, "content") || R);
                nt = this.markerStart = rn("start", u, gi, M, Wt, _i, 0, S), Et = this.markerEnd = rn("end", u, gi, M, Wt, _i, 0, S), S && (Vr = L.quickSetter([nt, Et], M.a, Oe)), !I && !(Xt.length && _r(R, "fixedMarkers") === !0) && (ul(Y ? fe : R), L.set([Xe, x], {
                    force3D: !0
                }), At = L.quickSetter(Xe, M.a, Oe), pi = L.quickSetter(x, M.a, Oe))
            }
            if (S) {
                var mi = S.vars.onUpdate,
                    q = S.vars.onUpdateParams;
                S.eventCallback("onUpdate", function() {
                    g.update(0, 0, 1), mi && mi.apply(q || [])
                })
            }
            g.previous = function() {
                return X[X.indexOf(g) - 1]
            }, g.next = function() {
                return X[X.indexOf(g) + 1]
            }, g.revert = function(w, D) {
                if (!D) return g.kill(!0);
                var A = w !== !1 || !g.enabled,
                    z = ze;
                A !== g.isReverted && (A && (Lt = Math.max(te(), g.scroll.rec || 0), Rt = g.progress, vr = i && i.progress()), nt && [nt, Et, Xe, x].forEach(function(ve) {
                    return ve.style.display = A ? "none" : "block"
                }), A && (ze = 1, g.update(A)), h && (A ? _l(h, Ve, Jt) : (!k || !g.isActive) && Gn(h, Ve, Nt(h), We)), A || g.update(A), ze = z, g.isReverted = A)
            }, g.refresh = function(w, D) {
                if (!((ze || !g.enabled) && !D)) {
                    if (h && w && Tt) {
                        Me(a, "scrollEnd", Ya);
                        return
                    }!Mt && we && we(g), ze = 1, Ae = Ge(), Re.tween && (Re.tween.kill(), Re.tween = 0), K && K.pause(), _ && i && i.revert({
                        kill: !1
                    }).invalidate(), g.isReverted || g.revert(!0, !0), g._subPinOffset = !1;
                    for (var A = Ee(), z = St(), ve = S ? S.duration() : fr(R, M), N = 0, pe = 0, oe = t.end, Ft = t.endTrigger || c, ee = t.start || (t.start === 0 || !c ? 0 : h ? "0 0" : "0 100%"), ke = g.pinnedContainer = t.pinnedContainer && Ke(t.pinnedContainer), Pt = c && Math.max(0, X.indexOf(g)) || 0, ae = Pt, ue, ge, Wr, xr, xe, le, $t, En, Ys, yi; ae--;) le = X[ae], le.end || le.refresh(0, 1) || (ze = 1), $t = le.pin, $t && ($t === c || $t === h) && !le.isReverted && (yi || (yi = []), yi.unshift(le), le.revert(!0, !0)), le !== X[ae] && (Pt--, ae--);
                    for (He(ee) && (ee = ee(g)), H = go(ee, c, A, M, te(), nt, Xe, g, z, Q, I, ve, S) || (h ? -.001 : 0), He(oe) && (oe = oe(g)), Ot(oe) && !oe.indexOf("+=") && (~oe.indexOf(" ") ? oe = (Ot(ee) ? ee.split(" ")[0] : "") + oe : (N = fn(oe.substr(2), A), oe = Ot(ee) ? ee : H + N, Ft = c)), Le = Math.max(H, go(oe || (Ft ? "100% 0" : ve), Ft, A, M, te() + N, Et, x, g, z, Q, I, ve, S)) || -.001, re = Le - H || (H -= .01) && .001, N = 0, ae = Pt; ae--;) le = X[ae], $t = le.pin, $t && le.start - le._pinPush <= H && !S && le.end > 0 && (ue = le.end - le.start, ($t === c && le.start - le._pinPush < H || $t === ke) && !Pi(ee) && (N += ue * (1 - le.progress)), $t === h && (pe += ue));
                    if (H += N, Le += N, g._pinPush = pe, nt && N && (ue = {}, ue[M.a] = "+=" + N, ke && (ue[M.p] = "-=" + te()), L.set([nt, Et], ue)), h) ue = Nt(h), xr = M === Te, Wr = te(), st = parseFloat(tr(M.a)) + pe, !ve && Le > 1 && ((Y ? fe : R).style["overflow-" + M.a] = "scroll"), Gn(h, Ve, ue), Yr = nn(h), ge = Ht(h, !0), En = I && gr(R, xr ? qe : Te)(), p && (We = [p + M.os2, re + pe + Oe], We.t = Ve, ae = p === _e ? ps(h, M) + re + pe : 0, ae && We.push(M.d, ae + Oe), ii(We), ke && X.forEach(function(vi) {
                        vi.pin === ke && vi.vars.pinSpacing !== !1 && (vi._subPinOffset = !0)
                    }), I && te(Lt)), I && (xe = {
                        top: ge.top + (xr ? Wr - H : En) + Oe,
                        left: ge.left + (xr ? En : Wr - H) + Oe,
                        boxSizing: "border-box",
                        position: "fixed"
                    }, xe[Er] = xe["max" + ci] = Math.ceil(ge.width) + Oe, xe[Ar] = xe["max" + Is] = Math.ceil(ge.height) + Oe, xe[yt] = xe[yt + zi] = xe[yt + Li] = xe[yt + Ii] = xe[yt + Fi] = "0", xe[_e] = ue[_e], xe[_e + zi] = ue[_e + zi], xe[_e + Li] = ue[_e + Li], xe[_e + Ii] = ue[_e + Ii], xe[_e + Fi] = ue[_e + Fi], er = pl(Jt, xe, k), Mt && te(0)), i ? (Ys = i._initted, Xn(1), i.render(i.duration(), !0, !0), Fe = tr(M.a) - st + re + pe, re !== Fe && I && er.splice(er.length - 2, 2), i.render(0, !0, !0), Ys || i.invalidate(!0), i.parent || i.totalTime(i.totalTime()), Xn(0)) : Fe = re;
                    else if (c && te() && !S)
                        for (ge = c.parentNode; ge && ge !== fe;) ge._pinOffset && (H -= ge._pinOffset, Le -= ge._pinOffset), ge = ge.parentNode;
                    yi && yi.forEach(function(vi) {
                        return vi.revert(!1, !0)
                    }), g.start = H, g.end = Le, it = pt = Mt ? Lt : te(), !S && !Mt && (it < Lt && te(Lt), g.scroll.rec = 0), g.revert(!1, !0), kt && (Se = -1, g.isActive && te(H + re * Rt), kt.restart(!0)), ze = 0, i && E && (i._initted || vr) && i.progress() !== vr && i.progress(vr, !0).render(i.time(), !0, !0), (Rt !== g.progress || S) && (i && !E && i.totalProgress(Rt, !0), g.progress = (it - H) / re === Rt ? 0 : Rt), h && p && (Ve._pinOffset = Math.round(g.progress * Fe)), f && !Mt && f(g)
                }
            }, g.getVelocity = function() {
                return (te() - pt) / (Ge() - un) * 1e3 || 0
            }, g.endAnimation = function() {
                Ti(g.callbackAnimation), i && (K ? K.progress(1) : i.paused() ? E || Ti(i, g.direction < 0, 1) : Ti(i, i.reversed()))
            }, g.labelToScroll = function(w) {
                return i && i.labels && (H || g.refresh() || H) + i.labels[w] / i.duration() * re || 0
            }, g.getTrailing = function(w) {
                var D = X.indexOf(g),
                    A = g.direction > 0 ? X.slice(0, D).reverse() : X.slice(D + 1);
                return (Ot(w) ? A.filter(function(z) {
                    return z.vars.preventOverlaps === w
                }) : A).filter(function(z) {
                    return g.direction > 0 ? z.end <= H : z.start >= Le
                })
            }, g.update = function(w, D, A) {
                if (!(S && !A && !w)) {
                    var z = Mt ? Lt : g.scroll(),
                        ve = w ? 0 : (z - H) / re,
                        N = ve < 0 ? 0 : ve > 1 ? 1 : ve || 0,
                        pe = g.progress,
                        oe, Ft, ee, ke, Pt, ae, ue, ge;
                    if (D && (pt = it, it = S ? te() : z, v && (Xr = yr, yr = i && !E ? i.totalProgress() : N)), m && !N && h && !ze && !Ki && Tt && H < z + (z - pt) / (Ge() - un) * m && (N = 1e-4), N !== pe && g.enabled) {
                        if (oe = g.isActive = !!N && N < 1, Ft = !!pe && pe < 1, ae = oe !== Ft, Pt = ae || !!N != !!pe, g.direction = N > pe ? 1 : -1, g.progress = N, Pt && !ze && (ee = N && !pe ? 0 : N === 1 ? 1 : pe === 1 ? 2 : 3, E && (ke = !ae && V[ee + 1] !== "none" && V[ee + 1] || V[ee], ge = i && (ke === "complete" || ke === "reset" || ke in i))), P && (ae || ge) && (ge || d || !i) && (He(P) ? P(g) : g.getTrailing(P).forEach(function(le) {
                                return le.endAnimation()
                            })), E || (K && !ze && !Ki ? ((S || kr && kr !== g) && K.render(K._dp._time - K._start), K.resetTo ? K.resetTo("totalProgress", N, i._tTime / i._tDur) : (K.vars.totalProgress = N, K.invalidate().restart())) : i && i.totalProgress(N, !!ze)), h) {
                            if (w && p && (Ve.style[p + M.os2] = di), !I) he(ki(st + Fe * N));
                            else if (Pt) {
                                if (ue = !w && N > pe && Le + 1 > z && z + 1 >= fr(R, M), k)
                                    if (!w && (oe || ue)) {
                                        var Wr = Ht(h, !0),
                                            xr = z - H;
                                        mo(h, fe, Wr.top + (M === Te ? xr : 0) + Oe, Wr.left + (M === Te ? 0 : xr) + Oe)
                                    } else mo(h, Ve);
                                ii(oe || ue ? er : Yr), Fe !== re && N < 1 && oe || he(st + (N === 1 && !ue ? Fe : 0))
                            }
                        }
                        v && !Re.tween && !ze && !Ki && kt.restart(!0), o && (ae || T && N && (N < 1 || !Vn)) && kn(o.targets).forEach(function(le) {
                            return le.classList[oe || T ? "add" : "remove"](o.className)
                        }), s && !E && !w && s(g), Pt && !ze ? (E && (ge && (ke === "complete" ? i.pause().totalProgress(1) : ke === "reset" ? i.restart(!0).pause() : ke === "restart" ? i.restart(!0) : i[ke]()), s && s(g)), (ae || !Vn) && (l && ae && Un(g, l), F[ee] && Un(g, F[ee]), T && (N === 1 ? g.kill(!1, 1) : F[ee] = 0), ae || (ee = N === 1 ? 1 : 3, F[ee] && Un(g, F[ee]))), O && !oe && Math.abs(g.getVelocity()) > (Pi(O) ? O : 2500) && (Ti(g.callbackAnimation), K ? K.progress(1) : Ti(i, ke === "reverse" ? 1 : !N, 1))) : E && s && !ze && s(g)
                    }
                    if (pi) {
                        var xe = S ? z / S.duration() * (S._caScrollDist || 0) : z;
                        At(xe + (Xe._isFlipped ? 1 : 0)), pi(xe)
                    }
                    Vr && Vr(-z / S.duration() * (S._caScrollDist || 0))
                }
            }, g.enable = function(w, D) {
                g.enabled || (g.enabled = !0, Me(R, "resize", Ci), Me(Y ? ie : R, "scroll", Gr), we && Me(a, "refreshInit", we), w !== !1 && (g.progress = Rt = 0, it = pt = Se = te()), D !== !1 && g.refresh())
            }, g.getTween = function(w) {
                return w && Re ? Re.tween : K
            }, g.setPositions = function(w, D) {
                h && (st += w - H, Fe += D - w - re, p === _e && g.adjustPinSpacing(D - w - re)), g.start = H = w, g.end = Le = D, re = D - w, g.update()
            }, g.adjustPinSpacing = function(w) {
                if (We) {
                    var D = We.indexOf(M.d) + 1;
                    We[D] = parseFloat(We[D]) + w + Oe, We[1] = parseFloat(We[1]) + w + Oe, ii(We)
                }
            }, g.disable = function(w, D) {
                if (g.enabled && (w !== !1 && g.revert(!0, !0), g.enabled = g.isActive = !1, D || K && K.pause(), Lt = 0, Ye && (Ye.uncache = 1), we && Pe(a, "refreshInit", we), kt && (kt.pause(), Re.tween && Re.tween.kill() && (Re.tween = 0)), !Y)) {
                    for (var A = X.length; A--;)
                        if (X[A].scroller === R && X[A] !== g) return;
                    Pe(R, "resize", Ci), Pe(R, "scroll", Gr)
                }
            }, g.kill = function(w, D) {
                g.disable(w, D), K && !D && K.kill(), u && delete gs[u];
                var A = X.indexOf(g);
                A >= 0 && X.splice(A, 1), A === $e && hn > 0 && $e--, A = 0, X.forEach(function(z) {
                    return z.scroller === g.scroller && (A = 1)
                }), A || Mt || (g.scroll.rec = 0), i && (i.scrollTrigger = null, w && i.revert({
                    kill: !1
                }), D || i.kill()), nt && [nt, Et, Xe, x].forEach(function(z) {
                    return z.parentNode && z.parentNode.removeChild(z)
                }), kr === g && (kr = 0), h && (Ye && (Ye.uncache = 1), A = 0, X.forEach(function(z) {
                    return z.pin === h && A++
                }), A || (Ye.spacer = 0)), t.onKill && t.onKill(g)
            }, g.enable(!1, !1), Ut && Ut(g), !i || !i.add || re ? g.refresh() : L.delayedCall(.01, function() {
                return H || Le || g.refresh()
            }) && (re = .01) && (H = Le = 0), h && hl()
        }, a.register = function(t) {
            return qr || (L = t || Fa(), La() && window.document && a.enable(), qr = ji), qr
        }, a.defaults = function(t) {
            if (t)
                for (var i in t) tn[i] = t[i];
            return tn
        }, a.disable = function(t, i) {
            ji = 0, X.forEach(function(s) {
                return s[i ? "kill" : "disable"](t)
            }), Pe(W, "wheel", Gr), Pe(ie, "scroll", Gr), clearInterval(Zi), Pe(ie, "touchcancel", zt), Pe(fe, "touchstart", zt), Ji(Pe, ie, "pointerdown,touchstart,mousedown", uo), Ji(Pe, ie, "pointerup,touchend,mouseup", lo), Sn.kill(), Qi(Pe);
            for (var n = 0; n < U.length; n += 3) en(Pe, U[n], U[n + 1]), en(Pe, U[n], U[n + 2])
        }, a.enable = function() {
            if (W = window, ie = document, Bt = ie.documentElement, fe = ie.body, L && (kn = L.utils.toArray, Qr = L.utils.clamp, ds = L.core.context || zt, Xn = L.core.suppressOverwrites || zt, Ls = W.history.scrollRestoration || "auto", L.core.globals("ScrollTrigger", a), fe)) {
                ji = 1, ye.register(L), a.isTouch = ye.isTouch, nr = ye.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), Me(W, "wheel", Gr), Oa = [W, ie, Bt, fe], L.matchMedia ? (a.matchMedia = function(u) {
                    var l = L.matchMedia(),
                        f;
                    for (f in u) l.add(f, u[f]);
                    return l
                }, L.addEventListener("matchMediaInit", function() {
                    return Ns()
                }), L.addEventListener("matchMediaRevert", function() {
                    return Xa()
                }), L.addEventListener("matchMedia", function() {
                    Cr(0, 1), Ir("matchMedia")
                }), L.matchMedia("(orientation: portrait)", function() {
                    return $n(), $n
                })) : console.warn("Requires GSAP 3.11.0 or later"), $n(), Me(ie, "scroll", Gr);
                var t = fe.style,
                    i = t.borderTopStyle,
                    n = L.core.Animation.prototype,
                    s, o;
                for (n.revert || Object.defineProperty(n, "revert", {
                        value: function() {
                            return this.time(-.01, !0)
                        }
                    }), t.borderTopStyle = "solid", s = Ht(fe), Te.m = Math.round(s.top + Te.sc()) || 0, qe.m = Math.round(s.left + qe.sc()) || 0, i ? t.borderTopStyle = i : t.removeProperty("border-top-style"), Zi = setInterval(ho, 250), L.delayedCall(.5, function() {
                        return Ki = 0
                    }), Me(ie, "touchcancel", zt), Me(fe, "touchstart", zt), Ji(Me, ie, "pointerdown,touchstart,mousedown", uo), Ji(Me, ie, "pointerup,touchend,mouseup", lo), _s = L.utils.checkPrefix("transform"), _n.push(_s), qr = Ge(), Sn = L.delayedCall(.2, Cr).pause(), Hr = [ie, "visibilitychange", function() {
                        var u = W.innerWidth,
                            l = W.innerHeight;
                        ie.hidden ? (oo = u, ao = l) : (oo !== u || ao !== l) && Ci()
                    }, ie, "DOMContentLoaded", Cr, W, "load", Cr, W, "resize", Ci], Qi(Me), X.forEach(function(u) {
                        return u.enable(0, 1)
                    }), o = 0; o < U.length; o += 3) en(Pe, U[o], U[o + 1]), en(Pe, U[o], U[o + 2])
            }
        }, a.config = function(t) {
            "limitCallbacks" in t && (Vn = !!t.limitCallbacks);
            var i = t.syncInterval;
            i && clearInterval(Zi) || (Zi = i) && setInterval(ho, i), "ignoreMobileResize" in t && (Ea = a.isTouch === 1 && t.ignoreMobileResize), "autoRefreshEvents" in t && (Qi(Pe) || Qi(Me, t.autoRefreshEvents || "none"), Da = (t.autoRefreshEvents + "").indexOf("resize") === -1)
        }, a.scrollerProxy = function(t, i) {
            var n = Ke(t),
                s = U.indexOf(n),
                o = Fr(n);
            ~s && U.splice(s, o ? 6 : 2), i && (o ? Xt.unshift(W, i, fe, i, Bt, i) : Xt.unshift(n, i))
        }, a.clearMatchMedia = function(t) {
            X.forEach(function(i) {
                return i._ctx && i._ctx.query === t && i._ctx.kill(!0, !0)
            })
        }, a.isInViewport = function(t, i, n) {
            var s = (Ot(t) ? Ke(t) : t).getBoundingClientRect(),
                o = s[n ? Er : Ar] * i || 0;
            return n ? s.right - o > 0 && s.left + o < W.innerWidth : s.bottom - o > 0 && s.top + o < W.innerHeight
        }, a.positionInViewport = function(t, i, n) {
            Ot(t) && (t = Ke(t));
            var s = t.getBoundingClientRect(),
                o = s[n ? Er : Ar],
                u = i == null ? o / 2 : i in Pn ? Pn[i] * o : ~i.indexOf("%") ? parseFloat(i) * o / 100 : parseFloat(i) || 0;
            return n ? (s.left + u) / W.innerWidth : (s.top + u) / W.innerHeight
        }, a.killAll = function(t) {
            if (X.forEach(function(n) {
                    return n.vars.id !== "ScrollSmoother" && n.kill()
                }), t !== !0) {
                var i = zr.killAll || [];
                zr = {}, i.forEach(function(n) {
                    return n()
                })
            }
        }, a
    }();
G.version = "3.11.3";
G.saveStyles = function(a) {
    return a ? kn(a).forEach(function(e) {
        if (e && e.style) {
            var r = ut.indexOf(e);
            r >= 0 && ut.splice(r, 5), ut.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), L.core.getCache(e), ds())
        }
    }) : ut
};
G.revert = function(a, e) {
    return Ns(!a, e)
};
G.create = function(a, e) {
    return new G(a, e)
};
G.refresh = function(a) {
    return a ? Ci() : (qr || G.register()) && Cr(!0)
};
G.update = Br;
G.clearScrollMemory = Va;
G.maxScroll = function(a, e) {
    return fr(a, e ? qe : Te)
};
G.getScrollFunc = function(a, e) {
    return gr(Ke(a), e ? qe : Te)
};
G.getById = function(a) {
    return gs[a]
};
G.getAll = function() {
    return X.filter(function(a) {
        return a.vars.id !== "ScrollSmoother"
    })
};
G.isScrolling = function() {
    return !!Tt
};
G.snapDirectional = Bs;
G.addEventListener = function(a, e) {
    var r = zr[a] || (zr[a] = []);
    ~r.indexOf(e) || r.push(e)
};
G.removeEventListener = function(a, e) {
    var r = zr[a],
        t = r && r.indexOf(e);
    t >= 0 && r.splice(t, 1)
};
G.batch = function(a, e) {
    var r = [],
        t = {},
        i = e.interval || .016,
        n = e.batchMax || 1e9,
        s = function(l, f) {
            var d = [],
                c = [],
                h = L.delayedCall(i, function() {
                    f(d, c), d = [], c = []
                }).pause();
            return function(p) {
                d.length || h.restart(!0), d.push(p.trigger), c.push(p), n <= d.length && h.progress(1)
            }
        },
        o;
    for (o in e) t[o] = o.substr(0, 2) === "on" && He(e[o]) && o !== "onRefreshInit" ? s(o, e[o]) : e[o];
    return He(n) && (n = n(), Me(G, "refresh", function() {
        return n = e.batchMax()
    })), kn(a).forEach(function(u) {
        var l = {};
        for (o in t) l[o] = t[o];
        l.trigger = u, r.push(G.create(l))
    }), r
};
var vo = function(e, r, t, i) {
        return r > i ? e(i) : r < 0 && e(0), t > i ? (i - r) / (t - r) : t < 0 ? r / (r - t) : 1
    },
    qn = function a(e, r) {
        r === !0 ? e.style.removeProperty("touch-action") : e.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (ye.isTouch ? " pinch-zoom" : "") : "none", e === Bt && a(fe, r)
    },
    xo = {
        auto: 1,
        scroll: 1
    },
    ml = function(e) {
        var r = e.event,
            t = e.target,
            i = e.axis,
            n = (r.changedTouches ? r.changedTouches[0] : r).target,
            s = n._gsap || L.core.getCache(n),
            o = Ge(),
            u;
        if (!s._isScrollT || o - s._isScrollT > 2e3) {
            for (; n && n.scrollHeight <= n.clientHeight;) n = n.parentNode;
            s._isScroll = n && !Fr(n) && n !== t && (xo[(u = Nt(n)).overflowY] || xo[u.overflowX]), s._isScrollT = o
        }(s._isScroll || i === "x") && (r.stopPropagation(), r._gsapAllow = !0)
    },
    Wa = function(e, r, t, i) {
        return ye.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: r,
            onWheel: i = i && ml,
            onPress: i,
            onDrag: i,
            onScroll: i,
            onEnable: function() {
                return t && Me(ie, ye.eventTypes[0], To, !1, !0)
            },
            onDisable: function() {
                return Pe(ie, ye.eventTypes[0], To, !0)
            }
        })
    },
    yl = /(input|label|select|textarea)/i,
    bo, To = function(e) {
        var r = yl.test(e.target.tagName);
        (r || bo) && (e._gsapAllow = !0, bo = r)
    },
    vl = function(e) {
        ln(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var r = e,
            t = r.normalizeScrollX,
            i = r.momentum,
            n = r.allowNestedScroll,
            s, o, u = Ke(e.target) || Bt,
            l = L.core.globals().ScrollSmoother,
            f = l && l.get(),
            d = nr && (e.content && Ke(e.content) || f && e.content !== !1 && !f.smooth() && f.content()),
            c = gr(u, Te),
            h = gr(u, qe),
            p = 1,
            _ = (ye.isTouch && W.visualViewport ? W.visualViewport.scale * W.visualViewport.width : W.outerWidth) / W.innerWidth,
            m = 0,
            y = He(i) ? function() {
                return i(s)
            } : function() {
                return i || 2.8
            },
            b, T, v = Wa(u, e.type, !0, n),
            k = function() {
                return T = !1
            },
            C = zt,
            S = zt,
            O = function() {
                o = fr(u, Te), S = Qr(nr ? 1 : 0, o), t && (C = Qr(0, fr(u, qe))), b = Rr
            },
            P = function() {
                d._gsap.y = ki(parseFloat(d._gsap.y) + c.offset) + "px", d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(d._gsap.y) + ", 0, 1)", c.offset = c.cacheID = 0
            },
            M = function() {
                if (T) {
                    requestAnimationFrame(k);
                    var V = ki(s.deltaY / 2),
                        B = S(c.v - V);
                    if (d && B !== c.v + c.offset) {
                        c.offset = B - c.v;
                        var Q = ki((parseFloat(d && d._gsap.y) || 0) - c.offset);
                        d.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + Q + ", 0, 1)", d._gsap.y = Q + "px", c.cacheID = U.cache, Br()
                    }
                    return !0
                }
                c.offset && P(), T = !0
            },
            E, R, Z, Y, I = function() {
                O(), E.isActive() && E.vars.scrollY > o && (c() > o ? E.progress(1) && c(o) : E.resetTo("scrollY", o))
            };
        return d && L.set(d, {
            y: "+=0"
        }), e.ignoreCheck = function(F) {
            return nr && F.type === "touchmove" && M() || p > 1.05 && F.type !== "touchstart" || s.isGesturing || F.touches && F.touches.length > 1
        }, e.onPress = function() {
            var F = p;
            p = ki((W.visualViewport && W.visualViewport.scale || 1) / _), E.pause(), F !== p && qn(u, p > 1.01 ? !0 : t ? !1 : "x"), R = h(), Z = c(), O(), b = Rr
        }, e.onRelease = e.onGestureStart = function(F, V) {
            if (c.offset && P(), !V) Y.restart(!0);
            else {
                U.cache++;
                var B = y(),
                    Q, g;
                t && (Q = h(), g = Q + B * .05 * -F.velocityX / .227, B *= vo(h, Q, g, fr(u, qe)), E.vars.scrollX = C(g)), Q = c(), g = Q + B * .05 * -F.velocityY / .227, B *= vo(c, Q, g, fr(u, Te)), E.vars.scrollY = S(g), E.invalidate().duration(B).play(.01), (nr && E.vars.scrollY >= o || Q >= o - 1) && L.to({}, {
                    onUpdate: I,
                    duration: B
                })
            }
        }, e.onWheel = function() {
            E._ts && E.pause(), Ge() - m > 1e3 && (b = 0, m = Ge())
        }, e.onChange = function(F, V, B, Q, g) {
            if (Rr !== b && O(), V && t && h(C(Q[2] === V ? R + (F.startX - F.x) : h() + V - Q[1])), B) {
                c.offset && P();
                var we = g[2] === B,
                    Ee = we ? Z + F.startY - F.y : c() + B - g[1],
                    St = S(Ee);
                we && Ee !== St && (Z += St - Ee), c(St)
            }(B || V) && Br()
        }, e.onEnable = function() {
            qn(u, t ? !1 : "x"), G.addEventListener("refresh", I), Me(W, "resize", I), c.smooth && (c.target.style.scrollBehavior = "auto", c.smooth = h.smooth = !1), v.enable()
        }, e.onDisable = function() {
            qn(u, !0), Pe(W, "resize", I), G.removeEventListener("refresh", I), v.kill()
        }, e.lockAxis = e.lockAxis !== !1, s = new ye(e), s.iOS = nr, nr && !c() && c(1), nr && L.ticker.add(zt), Y = s._dc, E = L.to(s, {
            ease: "power4",
            paused: !0,
            scrollX: t ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            onComplete: Y.vars.onComplete
        }), s
    };
G.sort = function(a) {
    return X.sort(a || function(e, r) {
        return (e.vars.refreshPriority || 0) * -1e6 + e.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
    })
};
G.observe = function(a) {
    return new ye(a)
};
G.normalizeScroll = function(a) {
    if (typeof a > "u") return at;
    if (a === !0 && at) return at.enable();
    if (a === !1) return at && at.kill();
    var e = a instanceof ye ? a : vl(a);
    return at && at.target === e.target && at.kill(), Fr(e.target) && (at = e), e
};
G.core = {
    _getVelocityProp: hs,
    _inputObserver: Wa,
    _scrollers: U,
    _proxies: Xt,
    bridge: {
        ss: function() {
            Tt || Ir("scrollStart"), Tt = Ge()
        },
        ref: function() {
            return ze
        }
    }
};
Fa() && L.registerPlugin(G);
je.registerPlugin(G);
const xl = () => {
        let a = je.matchMedia();
        const e = () => {
                document.querySelector("#codeby").addEventListener("mouseenter", () => {
                    je.to("#codeby a", {
                        color: "#2e2e2e"
                    }), je.to("#codeby a span", {
                        color: "#000000"
                    })
                }), document.querySelector("#codeby").addEventListener("mouseout", () => {
                    je.to("#codeby a", {
                        color: "#e6e6e6"
                    }), je.to("#codeby a span", {
                        color: "#f0f0f0"
                    })
                })
            },
            r = t => je.timeline({
                scrollTrigger: {
                    trigger: "#ImgWrapper",
                    start: "0% 0%",
                    end: "100% 0%",
                    pin: "#ImgWrapper",
                    scrub: t
                }
            }).to("#ImgWrapper #img6", {
                transform: "translateZ(4500px)"
            }, 0).to("#ImgWrapper #img5", {
                transform: "translateZ(3100px)"
            }, 0).to("#ImgWrapper #img4", {
                transform: "translateZ(2800px)"
            }, 0).to("#ImgWrapper #img3", {
                transform: "translateZ(2600px)"
            }, 0).to("#ImgWrapper #img2", {
                transform: "translateZ(2400px)"
            }, 0).to("#ImgWrapper #img1", {
                transform: "translateZ(2200px)"
            }, 0).from(".nfts", {
                y: 130,
                opacity: 0
            }, .31);
        a.add("(min-width: 1024px)", () => {
            e(), r(2.2)
        }), a.add("(max-width: 1023px)", () => {
            r(1.5)
        })
    },
    bl = () => {
        let a = je.matchMedia();
        const e = document.getElementById("games");
        a.add("(min-width: 1024px)", () => {
            je.timeline({
                ease: Hs,
                scrollTrigger: {
                    trigger: e,
                    start: "-10% 10%",
                    end: "100% 0",
                    pinSpacing: !0
                }
            }).fromTo(".games__gradient", {
                backgroundSize: "0% 0%"
            }, {
                backgroundSize: "100% 100%"
            }).from(".js-kart-text", {
                opacity: 0,
                scale: .8
            }).fromTo(".kart", {
                opacity: 0,
                scale: .8,
                delay: 1
            }, {
                opacity: 1,
                scale: 1
            }).fromTo(".js-kart-text", {
                rotation: 0
            }, {
                scale: 1,
                rotation: 20
            }).fromTo(".js-kart-text", {
                rotation: 20
            }, {
                rotation: 0
            }).from(".js-kart-coins", {
                opacity: 0
            }, "<")
        }), a.add("(max-width: 1023px)", () => {
            je.timeline({
                ease: Hs,
                scrollTrigger: {
                    trigger: e,
                    start: "0% 0%",
                    end: "100% 0"
                }
            }).fromTo(".games__gradient", {
                backgroundSize: "0% 0%"
            }, {
                backgroundSize: "100% 100%"
            }).from(".js-kart-text", {
                opacity: 0,
                scale: .8
            }).fromTo(".kart", {
                opacity: 0,
                scale: .8
            }, {
                opacity: 1,
                scale: 1
            }).fromTo(".js-kart-text", {
                rotation: 0
            }, {
                scale: 1,
                rotation: 20
            }).fromTo(".js-kart-text", {
                rotation: 20
            }, {
                rotation: 0
            }).from(".js-kart-coins", {
                opacity: 0
            }, "<")
        })
    },
    Tl = () => {
        const a = document.getElementById("shiaverse");
        let e = je.matchMedia();
        e.add("(min-width: 1024px)", () => {
            je.timeline({
                scrollTrigger: {
                    trigger: a,
                    start: "20% 50%"
                }
            }).from(".shia-vr", {
                y: "100%",
                duration: 1
            }).from(".shiaverse-coins", {
                scale: .8,
                opacity: 0
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).from(".shiaverse-coins", {
                scale: .8,
                opacity: 0
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            }).to(".shiaverse-fist", {
                scale: 1
            }).to(".shiaverse-fist", {
                scale: 1.1
            })
        }), e.add("(max-width: 1023px)", () => {
            je.timeline({
                scrollTrigger: {
                    trigger: a,
                    start: "top 30%",
                    end: "bottom 100%",
                    toggleActions: "play none none none"
                }
            }).from(".shia-vr", {
                y: 100,
                opacity: 0
            }).from(".shiaverse-coins", {
                scale: .8,
                opacity: 0
            })
        })
    },
    wl = () => {
        const a = document.getElementById("burger"),
            e = document.getElementById("nav"),
            r = document.body;
        a && a.addEventListener("click", i => {
            i.currentTarget.classList.toggle("navbar__burger--is-active"), e.classList.toggle("navbar__nav--is-visible"), r.classList.toggle("is-non-scrollable")
        });
        const t = document.getElementsByClassName("dropdown__btn");
        if (t)
            for (let i = 0; i < t.length; i++) t[0].addEventListener("click", n => {
                n.preventDefault(), document.getElementById("dropdown-content").classList.toggle("dropdown__content--is-visible")
            })
    },
    Sl = () => {
        const a = document.getElementById("nav"),
            e = document.body;
        a.classList.remove("navbar__nav--is-visible"), e.classList.remove("is-non-scrollable")
    };
async function wo() {
    wl(), Tl(), bl(), xl();
    const a = document.querySelectorAll(".navbar__menu-link"),
        e = document.getElementById("burger");
    a.forEach(r => r.addEventListener("click", () => {
        e.classList.remove("navbar__burger--is-active"), Sl()
    }))
}
document.readyState === "complete" ? wo() : window.addEventListener("load", wo);