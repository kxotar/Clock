!function (t, n) {
     "object" == typeof exports && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.d3 = t.d3 || {})
}(this, function (t) {
     "use strict";
     function n(t, n) {
          return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
     }

     function e(t) {
          return 1 === t.length && (t = r(t)), {
               left: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); i > r;) {
                         var a = r + i >>> 1;
                         t(n[a], e) < 0 ? r = a + 1 : i = a
                    }
                    return r
               }, right: function (n, e, r, i) {
                    for (null == r && (r = 0), null == i && (i = n.length); i > r;) {
                         var a = r + i >>> 1;
                         t(n[a], e) > 0 ? i = a : r = a + 1
                    }
                    return r
               }
          }
     }

     function r(t) {
          return function (e, r) {
               return n(t(e), r)
          }
     }

     function i(t, n) {
          return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
     }

     function a(t) {
          return null === t ? NaN : +t
     }

     function o(t, n) {
          var e, r, i = t.length, o = 0, u = 0, s = -1, c = 0;
          if (null == n)for (; ++s < i;)isNaN(e = a(t[s])) || (r = e - o, o += r / ++c, u += r * (e - o)); else for (; ++s < i;)isNaN(e = a(n(t[s], s, t))) || (r = e - o, o += r / ++c, u += r * (e - o));
          return c > 1 ? u / (c - 1) : void 0
     }

     function u(t, n) {
          var e = o(t, n);
          return e ? Math.sqrt(e) : e
     }

     function s(t, n) {
          var e, r, i, a = -1, o = t.length;
          if (null == n) {
               for (; ++a < o;)if (null != (r = t[a]) && r >= r) {
                    e = i = r;
                    break
               }
               for (; ++a < o;)null != (r = t[a]) && (e > r && (e = r), r > i && (i = r))
          } else {
               for (; ++a < o;)if (null != (r = n(t[a], a, t)) && r >= r) {
                    e = i = r;
                    break
               }
               for (; ++a < o;)null != (r = n(t[a], a, t)) && (e > r && (e = r), r > i && (i = r))
          }
          return [e, i]
     }

     function c(t) {
          return function () {
               return t
          }
     }

     function f(t) {
          return t
     }

     function l(t, n, e) {
          t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : 3 > i ? 1 : +e;
          for (var r = -1, i = 0 | Math.max(0, Math.ceil((n - t) / e)), a = new Array(i); ++r < i;)a[r] = t + r * e;
          return a
     }

     function h(t, n, e) {
          var r = d(t, n, e);
          return l(Math.ceil(t / r) * r, Math.floor(n / r) * r + r / 2, r)
     }

     function d(t, n, e) {
          var r = Math.abs(n - t) / Math.max(0, e), i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)), a = r / i;
          return a >= vc ? i *= 10 : a >= bc ? i *= 5 : a >= xc && (i *= 2), t > n ? -i : i
     }

     function p(t) {
          return Math.ceil(Math.log(t.length) / Math.LN2) + 1
     }

     function _(t) {
          return +t
     }

     function y() {
          function t(t) {
               var i, a, o = t.length, u = new Array(o);
               for (i = 0; o > i; ++i)u[i] = +n(t[i], i, t);
               var s = e(u), c = +s[0], f = +s[1], l = r(u, c, f);
               Array.isArray(l) || (l = h(c, f, +l));
               var d = l.length;
               for (i = 0; d > i; ++i)l[i] = +l[i];
               for (; l[0] <= c;)l.shift(), --d;
               for (; l[d - 1] >= f;)l.pop(), --d;
               var p, _ = new Array(d + 1);
               for (i = 0; d >= i; ++i)p = _[i] = [], p.x0 = i > 0 ? l[i - 1] : c, p.x1 = d > i ? l[i] : f;
               for (i = 0; o > i; ++i)a = u[i], a >= c && f >= a && _[gc(l, a, 0, d)].push(t[i]);
               return _
          }

          var n = f, e = s, r = p;
          return t.value = function (e) {
               return arguments.length ? (n = "function" == typeof e ? e : c(+e), t) : n
          }, t.domain = function (n) {
               return arguments.length ? (e = "function" == typeof n ? n : c([+n[0], +n[1]]), t) : e
          }, t.thresholds = function (n) {
               return arguments.length ? (r = "function" == typeof n ? n : c(Array.isArray(n) ? Array.prototype.map.call(n, _) : +n), t) : r
          }, t
     }

     function g(t, n, e) {
          if (null == e && (e = a), r = t.length) {
               if ((n = +n) <= 0 || 2 > r)return +e(t[0], 0, t);
               if (n >= 1)return +e(t[r - 1], r - 1, t);
               var r, i = (r - 1) * n, o = Math.floor(i), u = +e(t[o], o, t), s = +e(t[o + 1], o + 1, t);
               return u + (s - u) * (i - o)
          }
     }

     function m(t, e, r) {
          return t.sort(n), Math.ceil((r - e) / (2 * (g(t, .75) - g(t, .25)) * Math.pow(t.length, -1 / 3)))
     }

     function v(t, n, e) {
          return Math.ceil((e - n) / (3.5 * u(t) * Math.pow(t.length, -1 / 3)))
     }

     function b(t, n) {
          var e, r, i = -1, a = t.length;
          if (null == n) {
               for (; ++i < a;)if (null != (r = t[i]) && r >= r) {
                    e = r;
                    break
               }
               for (; ++i < a;)null != (r = t[i]) && r > e && (e = r)
          } else {
               for (; ++i < a;)if (null != (r = n(t[i], i, t)) && r >= r) {
                    e = r;
                    break
               }
               for (; ++i < a;)null != (r = n(t[i], i, t)) && r > e && (e = r)
          }
          return e
     }

     function x(t, n) {
          var e, r = 0, i = t.length, o = -1, u = i;
          if (null == n)for (; ++o < i;)isNaN(e = a(t[o])) ? --u : r += e; else for (; ++o < i;)isNaN(e = a(n(t[o], o, t))) ? --u : r += e;
          return u ? r / u : void 0
     }

     function M(t, e) {
          var r, i = [], o = t.length, u = -1;
          if (null == e)for (; ++u < o;)isNaN(r = a(t[u])) || i.push(r); else for (; ++u < o;)isNaN(r = a(e(t[u], u, t))) || i.push(r);
          return g(i.sort(n), .5)
     }

     function w(t) {
          for (var n, e, r, i = t.length, a = -1, o = 0; ++a < i;)o += t[a].length;
          for (e = new Array(o); --i >= 0;)for (r = t[i], n = r.length; --n >= 0;)e[--o] = r[n];
          return e
     }

     function T(t, n) {
          var e, r, i = -1, a = t.length;
          if (null == n) {
               for (; ++i < a;)if (null != (r = t[i]) && r >= r) {
                    e = r;
                    break
               }
               for (; ++i < a;)null != (r = t[i]) && e > r && (e = r)
          } else {
               for (; ++i < a;)if (null != (r = n(t[i], i, t)) && r >= r) {
                    e = r;
                    break
               }
               for (; ++i < a;)null != (r = n(t[i], i, t)) && e > r && (e = r)
          }
          return e
     }

     function k(t) {
          for (var n = 0, e = t.length - 1, r = t[0], i = new Array(0 > e ? 0 : e); e > n;)i[n] = [r, r = t[++n]];
          return i
     }

     function S(t, n) {
          for (var e = n.length, r = new Array(e); e--;)r[e] = t[n[e]];
          return r
     }

     function A(t, e) {
          if (r = t.length) {
               var r, i, a = 0, o = 0, u = t[o];
               for (e || (e = n); ++a < r;)(e(i = t[a], u) < 0 || 0 !== e(u, u)) && (u = i, o = a);
               return 0 === e(u, u) ? o : void 0
          }
     }

     function N(t, n, e) {
          for (var r, i, a = (null == e ? t.length : e) - (n = null == n ? 0 : +n); a;)i = Math.random() * a-- | 0, r = t[a + n], t[a + n] = t[i + n], t[i + n] = r;
          return t
     }

     function C(t, n) {
          var e, r = 0, i = t.length, a = -1;
          if (null == n)for (; ++a < i;)(e = +t[a]) && (r += e); else for (; ++a < i;)(e = +n(t[a], a, t)) && (r += e);
          return r
     }

     function E(t) {
          if (!(i = t.length))return [];
          for (var n = -1, e = T(t, P), r = new Array(e); ++n < e;)for (var i, a = -1, o = r[n] = new Array(i); ++a < i;)o[a] = t[a][n];
          return r
     }

     function P(t) {
          return t.length
     }

     function D() {
          return E(arguments)
     }

     function F() {
     }

     function L(t, n) {
          var e = new F;
          if (t instanceof F)t.each(function (t, n) {
               e.set(n, t)
          }); else if (Array.isArray(t)) {
               var r, i = -1, a = t.length;
               if (null == n)for (; ++i < a;)e.set(i, t[i]); else for (; ++i < a;)e.set(n(r = t[i], i, t), r)
          } else if (t)for (var o in t)e.set(o, t[o]);
          return e
     }

     function U() {
          function t(n, i, o, u) {
               if (i >= a.length)return r ? r(n) : e ? n.sort(e) : n;
               for (var s, c, f, l = -1, h = n.length, d = a[i++], p = L(), _ = o(); ++l < h;)(f = p.get(s = d(c = n[l]) + "")) ? f.push(c) : p.set(s, [c]);
               return p.each(function (n, e) {
                    u(_, e, t(n, i, o, u))
               }), _
          }

          function n(t, e) {
               if (e >= a.length)return t;
               var r = [], i = o[e++];
               return t.each(function (t, i) {
                    r.push({key: i, values: n(t, e)})
               }), i ? r.sort(function (t, n) {
                    return i(t.key, n.key)
               }) : r
          }

          var e, r, i, a = [], o = [];
          return i = {
               object: function (n) {
                    return t(n, 0, Y, O)
               }, map: function (n) {
                    return t(n, 0, H, R)
               }, entries: function (e) {
                    return n(t(e, 0, H, R), 0)
               }, key: function (t) {
                    return a.push(t), i
               }, sortKeys: function (t) {
                    return o[a.length - 1] = t, i
               }, sortValues: function (t) {
                    return e = t, i
               }, rollup: function (t) {
                    return r = t, i
               }
          }
     }

     function Y() {
          return {}
     }

     function O(t, n, e) {
          t[n] = e
     }

     function H() {
          return L()
     }

     function R(t, n, e) {
          t.set(n, e)
     }

     function j() {
     }

     function z(t, n) {
          var e = new j;
          if (t instanceof j)t.each(function (t) {
               e.add(t)
          }); else if (t) {
               var r = -1, i = t.length;
               if (null == n)for (; ++r < i;)e.add(t[r]); else for (; ++r < i;)e.add(n(t[r], r, t))
          }
          return e
     }

     function q(t) {
          var n = [];
          for (var e in t)n.push(e);
          return n
     }

     function I(t) {
          var n = [];
          for (var e in t)n.push(t[e]);
          return n
     }

     function X(t) {
          var n = [];
          for (var e in t)n.push({key: e, value: t[e]});
          return n
     }

     function J(t, n) {
          return t = null == t ? 0 : +t, n = null == n ? 1 : +n, 1 === arguments.length ? (n = t, t = 0) : n -= t, function () {
               return Math.random() * n + t
          }
     }

     function B(t, n) {
          var e, r;
          return t = null == t ? 0 : +t, n = null == n ? 1 : +n, function () {
               var i;
               if (null != e)i = e, e = null; else do e = 2 * Math.random() - 1, i = 2 * Math.random() - 1, r = e * e + i * i; while (!r || r > 1);
               return t + n * i * Math.sqrt(-2 * Math.log(r) / r)
          }
     }

     function W() {
          var t = B.apply(this, arguments);
          return function () {
               return Math.exp(t())
          }
     }

     function V(t) {
          return function () {
               for (var n = 0, e = 0; t > e; ++e)n += Math.random();
               return n
          }
     }

     function $(t) {
          var n = V(t);
          return function () {
               return n() / t
          }
     }

     function Z(t) {
          return function () {
               return -Math.log(1 - Math.random()) / t
          }
     }

     function G(t) {
          return +t
     }

     function K(t) {
          return t * t
     }

     function Q(t) {
          return t * (2 - t)
     }

     function tt(t) {
          return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
     }

     function nt(t) {
          return t * t * t
     }

     function et(t) {
          return --t * t * t + 1
     }

     function rt(t) {
          return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2
     }

     function it(t) {
          return 1 - Math.cos(t * Cc)
     }

     function at(t) {
          return Math.sin(t * Cc)
     }

     function ot(t) {
          return (1 - Math.cos(Nc * t)) / 2
     }

     function ut(t) {
          return Math.pow(2, 10 * t - 10)
     }

     function st(t) {
          return 1 - Math.pow(2, -10 * t)
     }

     function ct(t) {
          return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2
     }

     function ft(t) {
          return 1 - Math.sqrt(1 - t * t)
     }

     function lt(t) {
          return Math.sqrt(1 - --t * t)
     }

     function ht(t) {
          return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2
     }

     function dt(t) {
          return 1 - pt(1 - t)
     }

     function pt(t) {
          return (t = +t) < Ec ? Rc * t * t : Dc > t ? Rc * (t -= Pc) * t + Fc : Uc > t ? Rc * (t -= Lc) * t + Yc : Rc * (t -= Oc) * t + Hc
     }

     function _t(t) {
          return ((t *= 2) <= 1 ? 1 - pt(1 - t) : pt(t - 1) + 1) / 2
     }

     function yt(t) {
          for (var n, e = -1, r = t.length, i = t[r - 1], a = 0; ++e < r;)n = i, i = t[e], a += n[1] * i[0] - n[0] * i[1];
          return a / 2
     }

     function gt(t) {
          for (var n, e, r = -1, i = t.length, a = 0, o = 0, u = t[i - 1], s = 0; ++r < i;)n = u, u = t[r], s += e = n[0] * u[1] - u[0] * n[1], a += (n[0] + u[0]) * e, o += (n[1] + u[1]) * e;
          return s *= 3, [a / s, o / s]
     }

     function mt(t, n, e) {
          return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0])
     }

     function vt(t, n) {
          return t[0] - n[0] || t[1] - n[1]
     }

     function bt(t) {
          for (var n = t.length, e = [0, 1], r = 2, i = 2; n > i; ++i) {
               for (; r > 1 && mt(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;)--r;
               e[r++] = i
          }
          return e.slice(0, r)
     }

     function xt(t) {
          if ((e = t.length) < 3)return null;
          var n, e, r = new Array(e), i = new Array(e);
          for (n = 0; e > n; ++n)r[n] = [+t[n][0], +t[n][1], n];
          for (r.sort(vt), n = 0; e > n; ++n)i[n] = [r[n][0], -r[n][1]];
          var a = bt(r), o = bt(i), u = o[0] === a[0], s = o[o.length - 1] === a[a.length - 1], c = [];
          for (n = a.length - 1; n >= 0; --n)c.push(t[r[a[n]][2]]);
          for (n = +u; n < o.length - s; ++n)c.push(t[r[o[n]][2]]);
          return c
     }

     function Mt(t, n) {
          for (var e, r, i = t.length, a = t[i - 1], o = n[0], u = n[1], s = a[0], c = a[1], f = !1, l = 0; i > l; ++l)a = t[l], e = a[0], r = a[1], r > u != c > u && (s - e) * (u - r) / (c - r) + e > o && (f = !f), s = e, c = r;
          return f
     }

     function wt(t) {
          for (var n, e, r = -1, i = t.length, a = t[i - 1], o = a[0], u = a[1], s = 0; ++r < i;)n = o, e = u, a = t[r], o = a[0], u = a[1], n -= o, e -= u, s += Math.sqrt(n * n + e * e);
          return s
     }

     function Tt() {
          this._x0 = this._y0 = this._x1 = this._y1 = null, this._ = []
     }

     function kt() {
          return new Tt
     }

     function St(t) {
          return t[0]
     }

     function At(t) {
          return t[1]
     }

     function Nt(t) {
          return function () {
               return t
          }
     }

     function Ct() {
          this.x = null, this.y = null, this.leaf = !0, this.data = null, this.nodes = []
     }

     function Et(t, n, e, r, i, a) {
          if (!t(n, e, r, i, a)) {
               var o = (e + i) / 2, u = (r + a) / 2, s = n.nodes;
               s[0] && Et(t, s[0], e, r, o, u), s[1] && Et(t, s[1], o, r, i, u), s[2] && Et(t, s[2], e, u, o, a), s[3] && Et(t, s[3], o, u, i, a)
          }
     }

     function Pt(t, n, e, r, i, a, o) {
          var u, s = 1 / 0;
          return function c(t, f, l, h, d) {
               if (!(f > a || l > o || r > h || i > d)) {
                    if (null != t.x) {
                         var p = n - t.x, _ = e - t.y, y = p * p + _ * _;
                         if (s > y) {
                              var g = Math.sqrt(s = y);
                              r = n - g, i = e - g, a = n + g, o = e + g, u = t
                         }
                    }
                    for (var m = t.nodes, v = (f + h) / 2, b = (l + d) / 2, x = n >= v, M = e >= b, w = M << 1 | x, T = w + 4; T > w; ++w)if (t = m[3 & w])switch (3 & w) {
                         case 0:
                              c(t, f, l, v, b);
                              break;
                         case 1:
                              c(t, v, l, h, b);
                              break;
                         case 2:
                              c(t, f, b, v, d);
                              break;
                         case 3:
                              c(t, v, b, h, d)
                    }
               }
          }(t, r, i, a, o), u && u.data
     }

     function Dt() {
          function t(t) {
               function u(t, n, e, r, i, a, o, u) {
                    if (!isNaN(e) && !isNaN(r))if (t.leaf) {
                         var c = t.x, f = t.y;
                         if (null != c)if (Math.abs(c - e) + Math.abs(f - r) < .01)s(t, n, e, r, i, a, o, u); else {
                              var l = t.data;
                              t.x = t.y = t.data = null, s(t, l, c, f, i, a, o, u), s(t, n, e, r, i, a, o, u)
                         } else t.x = e, t.y = r, t.data = n
                    } else s(t, n, e, r, i, a, o, u)
               }

               function s(t, n, e, r, i, a, o, s) {
                    var c = (i + o) / 2, f = (a + s) / 2, l = e >= c, h = r >= f, d = h << 1 | l;
                    t.leaf = !1, t = t.nodes[d] || (t.nodes[d] = new Ct), l ? i = c : o = c, h ? a = f : s = f, u(t, n, e, r, i, a, o, s)
               }

               var c, f, l, h, d, p, _, y, g, m = "function" == typeof a ? a : Nt(a), v = "function" == typeof o ? o : Nt(o);
               if (t || (t = []), null != n)p = n, _ = r, y = e, g = i; else for (y = g = -(p = _ = 1 / 0), f = [], l = [], d = t.length, h = 0; d > h; ++h) {
                    var b = +m(c = t[h], h, t), x = +v(c, h, t);
                    p > b && (p = b), _ > x && (_ = x), b > y && (y = b), x > g && (g = x), f.push(b), l.push(x)
               }
               var M = y - p, w = g - _;
               isFinite(M) && isFinite(w) && (M > w ? g = _ + M : y = p + w);
               var T = new Ct;
               if (T.add = function (t) {
                         return u(T, t, +m(t, ++h), +v(t, h), p, _, y, g), T
                    }, T.visit = function (t) {
                         return Et(t, T, p, _, y, g), T
                    }, T.find = function (t, n) {
                         return Pt(T, t, n, p, _, y, g)
                    }, h = -1, null == n) {
                    for (; ++h < d;)u(T, t[h], f[h], l[h], p, _, y, g);
                    --h
               } else t.forEach(T.add);
               return f = l = t = c = null, T
          }

          var n, e, r, i, a = St, o = At;
          return t.x = function (n) {
               return arguments.length ? (a = n, t) : a
          }, t.y = function (n) {
               return arguments.length ? (o = n, t) : o
          }, t.extent = function (a) {
               return arguments.length ? (null == a ? n = r = e = i = null : (n = +a[0][0], r = +a[0][1], e = +a[1][0], i = +a[1][1]), t) : null == n ? null : [[n, r], [e, i]]
          }, t.size = function (a) {
               return arguments.length ? (null == a ? n = r = e = i = null : (n = r = 0, e = +a[0], i = +a[1]), t) : null == n ? null : [e - n, i - r]
          }, t
     }

     function Ft(t) {
          if (!(t >= 1))throw new Error;
          this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
     }

     function Lt(t) {
          if (!t._start)try {
               Ut(t)
          } catch (n) {
               t._tasks[t._ended + t._active - 1] && Ot(t, n)
          }
     }

     function Ut(t) {
          for (; t._start = t._waiting && t._active < t._size;) {
               var n = t._ended + t._active, e = t._tasks[n], r = e.length - 1, i = e[r];
               e[r] = Yt(t, n), --t._waiting, ++t._active, e = i.apply(null, e), t._tasks[n] && (t._tasks[n] = e || nf)
          }
     }

     function Yt(t, n) {
          return function (e, r) {
               t._tasks[n] && (--t._active, ++t._ended, t._tasks[n] = null, null == t._error && (null != e ? Ot(t, e) : (t._data[n] = r, t._waiting ? Lt(t) : Ht(t))))
          }
     }

     function Ot(t, n) {
          var e, r = t._tasks.length;
          for (t._error = n, t._data = void 0, t._waiting = NaN; --r >= 0;)if ((e = t._tasks[r]) && (t._tasks[r] = null, e.abort))try {
               e.abort()
          } catch (n) {
          }
          t._active = NaN, Ht(t)
     }

     function Ht(t) {
          !t._active && t._call && t._call(t._error, t._data)
     }

     function Rt(t) {
          return new Ft(arguments.length ? +t : 1 / 0)
     }

     function jt(t) {
          return function () {
               return t
          }
     }

     function zt(t) {
          return t.innerRadius
     }

     function qt(t) {
          return t.outerRadius
     }

     function It(t) {
          return t.startAngle
     }

     function Xt(t) {
          return t.endAngle
     }

     function Jt(t) {
          return t && t.padAngle
     }

     function Bt(t) {
          return t >= 1 ? af : -1 >= t ? -af : Math.asin(t)
     }

     function Wt(t, n, e, r, i, a, o, u) {
          var s = e - t, c = r - n, f = o - i, l = u - a, h = (f * (n - a) - l * (t - i)) / (l * s - f * c);
          return [t + h * s, n + h * c]
     }

     function Vt(t, n, e, r, i, a, o) {
          var u = t - e, s = n - r, c = (o ? a : -a) / Math.sqrt(u * u + s * s), f = c * s, l = -c * u, h = t + f, d = n + l, p = e + f, _ = r + l, y = (h + p) / 2, g = (d + _) / 2, m = p - h, v = _ - d, b = m * m + v * v, x = i - a, M = h * _ - p * d, w = (0 > v ? -1 : 1) * Math.sqrt(Math.max(0, x * x * b - M * M)), T = (M * v - m * w) / b, k = (-M * m - v * w) / b, S = (M * v + m * w) / b, A = (-M * m + v * w) / b, N = T - y, C = k - g, E = S - y, P = A - g;
          return N * N + C * C > E * E + P * P && (T = S, k = A), {
               cx: T,
               cy: k,
               x01: -f,
               y01: -l,
               x11: T * (i / x - 1),
               y11: k * (i / x - 1)
          }
     }

     function $t() {
          function t() {
               var t, c, f = +n.apply(this, arguments), l = +e.apply(this, arguments), h = a.apply(this, arguments) - af, d = o.apply(this, arguments) - af, p = Math.abs(d - h), _ = d > h;
               if (s || (s = t = kt()), f > l && (c = l, l = f, f = c), l > ef)if (p > of - ef)s.moveTo(l * Math.cos(h), l * Math.sin(h)), s.arc(0, 0, l, h, d, !_), f > ef && (s.moveTo(f * Math.cos(d), f * Math.sin(d)), s.arc(0, 0, f, d, h, _)); else {
                    var y, g, m = h, v = d, b = h, x = d, M = p, w = p, T = u.apply(this, arguments) / 2, k = T > ef && (i ? +i.apply(this, arguments) : Math.sqrt(f * f + l * l)), S = Math.min(Math.abs(l - f) / 2, +r.apply(this, arguments)), A = S, N = S;
                    if (k > ef) {
                         var C = Bt(k / f * Math.sin(T)), E = Bt(k / l * Math.sin(T));
                         (M -= 2 * C) > ef ? (C *= _ ? 1 : -1, b += C, x -= C) : (M = 0, b = x = (h + d) / 2), (w -= 2 * E) > ef ? (E *= _ ? 1 : -1, m += E, v -= E) : (w = 0, m = v = (h + d) / 2)
                    }
                    var P = l * Math.cos(m), D = l * Math.sin(m), F = f * Math.cos(x), L = f * Math.sin(x);
                    if (S > ef) {
                         var U = l * Math.cos(v), Y = l * Math.sin(v), O = f * Math.cos(b), H = f * Math.sin(b);
                         if (rf > p) {
                              var R = M > ef ? Wt(P, D, O, H, U, Y, F, L) : [F, L], j = P - R[0], z = D - R[1], q = U - R[0], I = Y - R[1], X = 1 / Math.sin(Math.acos((j * q + z * I) / (Math.sqrt(j * j + z * z) * Math.sqrt(q * q + I * I))) / 2), J = Math.sqrt(R[0] * R[0] + R[1] * R[1]);
                              A = Math.min(S, (f - J) / (X - 1)), N = Math.min(S, (l - J) / (X + 1))
                         }
                    }
                    w > ef ? N > ef ? (y = Vt(O, H, P, D, l, N, _), g = Vt(U, Y, F, L, l, N, _), s.moveTo(y.cx + y.x01, y.cy + y.y01), S > N ? s.arc(y.cx, y.cy, N, Math.atan2(y.y01, y.x01), Math.atan2(g.y01, g.x01), !_) : (s.arc(y.cx, y.cy, N, Math.atan2(y.y01, y.x01), Math.atan2(y.y11, y.x11), !_), s.arc(0, 0, l, Math.atan2(y.cy + y.y11, y.cx + y.x11), Math.atan2(g.cy + g.y11, g.cx + g.x11), !_), s.arc(g.cx, g.cy, N, Math.atan2(g.y11, g.x11), Math.atan2(g.y01, g.x01), !_))) : (s.moveTo(P, D), s.arc(0, 0, l, m, v, !_)) : s.moveTo(P, D), f > ef && M > ef ? A > ef ? (y = Vt(F, L, U, Y, f, -A, _), g = Vt(P, D, O, H, f, -A, _), s.lineTo(y.cx + y.x01, y.cy + y.y01), S > A ? s.arc(y.cx, y.cy, A, Math.atan2(y.y01, y.x01), Math.atan2(g.y01, g.x01), !_) : (s.arc(y.cx, y.cy, A, Math.atan2(y.y01, y.x01), Math.atan2(y.y11, y.x11), !_), s.arc(0, 0, f, Math.atan2(y.cy + y.y11, y.cx + y.x11), Math.atan2(g.cy + g.y11, g.cx + g.x11), _), s.arc(g.cx, g.cy, A, Math.atan2(g.y11, g.x11), Math.atan2(g.y01, g.x01), !_))) : s.arc(0, 0, f, x, b, _) : s.lineTo(F, L)
               } else s.moveTo(0, 0);
               return s.closePath(), t ? (s = null, t + "" || null) : void 0
          }

          var n = zt, e = qt, r = jt(0), i = null, a = It, o = Xt, u = Jt, s = null;
          return t.centroid = function () {
               var t = (+n.apply(this, arguments) + +e.apply(this, arguments)) / 2, r = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - rf / 2;
               return [Math.cos(r) * t, Math.sin(r) * t]
          }, t.innerRadius = function (e) {
               return arguments.length ? (n = "function" == typeof e ? e : jt(+e), t) : n
          }, t.outerRadius = function (n) {
               return arguments.length ? (e = "function" == typeof n ? n : jt(+n), t) : e
          }, t.cornerRadius = function (n) {
               return arguments.length ? (r = "function" == typeof n ? n : jt(+n), t) : r
          }, t.padRadius = function (n) {
               return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : jt(+n), t) : i
          }, t.startAngle = function (n) {
               return arguments.length ? (a = "function" == typeof n ? n : jt(+n), t) : a
          }, t.endAngle = function (n) {
               return arguments.length ? (o = "function" == typeof n ? n : jt(+n), t) : o
          }, t.padAngle = function (n) {
               return arguments.length ? (u = "function" == typeof n ? n : jt(+n), t) : u
          }, t.context = function (n) {
               return arguments.length ? (s = null == n ? null : n, t) : s
          }, t
     }

     function Zt(t) {
          this._context = t
     }

     function Gt(t) {
          return new Zt(t)
     }

     function Kt(t) {
          return t[0]
     }

     function Qt(t) {
          return t[1]
     }

     function tn() {
          function t(t) {
               var c, f, l, h, d, p = t.length, _ = !1, y = new Array(p), g = new Array(p);
               for (null == o && (s = u(d = kt())), c = 0; p >= c; ++c) {
                    if (!(p > c && a(h = t[c], c, t)) === _)if (_ = !_)f = c, s.areaStart(), s.lineStart(); else {
                         for (s.lineEnd(), s.lineStart(), l = c - 1; l >= f; --l)s.point(y[l], g[l]);
                         s.lineEnd(), s.areaEnd()
                    }
                    _ && (y[c] = +n(h, c, t), g[c] = +r(h, c, t), s.point(e ? +e(h, c, t) : y[c], i ? +i(h, c, t) : g[c]))
               }
               return d ? (s = null, d + "" || null) : void 0
          }

          var n = Kt, e = null, r = jt(0), i = Qt, a = jt(!0), o = null, u = Gt, s = null;
          return t.x = function (r) {
               return arguments.length ? (n = "function" == typeof r ? r : jt(+r), e = null, t) : n
          }, t.x0 = function (e) {
               return arguments.length ? (n = "function" == typeof e ? e : jt(+e), t) : n
          }, t.x1 = function (n) {
               return arguments.length ? (e = null == n ? null : "function" == typeof n ? n : jt(+n), t) : e
          }, t.y = function (n) {
               return arguments.length ? (r = "function" == typeof n ? n : jt(+n), i = null, t) : r
          }, t.y0 = function (n) {
               return arguments.length ? (r = "function" == typeof n ? n : jt(+n), t) : r
          }, t.y1 = function (n) {
               return arguments.length ? (i = null == n ? null : "function" == typeof n ? n : jt(+n), t) : i
          }, t.defined = function (n) {
               return arguments.length ? (a = "function" == typeof n ? n : jt(!!n), t) : a
          }, t.curve = function (n) {
               return arguments.length ? (u = n, null != o && (s = u(o)), t) : u
          }, t.context = function (n) {
               return arguments.length ? (null == n ? o = s = null : s = u(o = n), t) : o
          }, t
     }

     function nn() {
          function t(t) {
               var u, s, c, f = t.length, l = !1;
               for (null == i && (o = a(c = kt())), u = 0; f >= u; ++u)!(f > u && r(s = t[u], u, t)) === l && ((l = !l) ? o.lineStart() : o.lineEnd()), l && o.point(+n(s, u, t), +e(s, u, t));
               return c ? (o = null, c + "" || null) : void 0
          }

          var n = Kt, e = Qt, r = jt(!0), i = null, a = Gt, o = null;
          return t.x = function (e) {
               return arguments.length ? (n = "function" == typeof e ? e : jt(+e), t) : n
          }, t.y = function (n) {
               return arguments.length ? (e = "function" == typeof n ? n : jt(+n), t) : e
          }, t.defined = function (n) {
               return arguments.length ? (r = "function" == typeof n ? n : jt(!!n), t) : r
          }, t.curve = function (n) {
               return arguments.length ? (a = n, null != i && (o = a(i)), t) : a
          }, t.context = function (n) {
               return arguments.length ? (null == n ? i = o = null : o = a(i = n), t) : i
          }, t
     }

     function en(t, n) {
          return t > n ? -1 : n > t ? 1 : n >= t ? 0 : NaN
     }

     function rn(t) {
          return t
     }

     function an() {
          function t(t) {
               var u, s, c, f, l, h = t.length, d = 0, p = new Array(h), _ = new Array(h), y = +i.apply(this, arguments), g = Math.min(of, Math.max(-of, a.apply(this, arguments) - y)), m = Math.min(Math.abs(g) / h, o.apply(this, arguments)), v = m * (0 > g ? -1 : 1);
               for (u = 0; h > u; ++u)(l = _[p[u] = u] = +n(t[u], u, t)) > 0 && (d += l);
               for (null != e ? p.sort(function (t, n) {
                    return e(_[t], _[n])
               }) : null !== r && p.sort(function (n, e) {
                    return r(t[n], t[e])
               }), u = 0, c = d ? (g - h * v) / d : 0; h > u; ++u, y = f)s = p[u], l = _[s], f = y + (l > 0 ? l * c : 0) + v, _[s] = {
                    data: t[s],
                    index: u,
                    value: l,
                    startAngle: y,
                    endAngle: f,
                    padAngle: m
               };
               return _
          }

          var n = rn, e = en, r = null, i = jt(0), a = jt(of), o = jt(0);
          return t.value = function (e) {
               return arguments.length ? (n = "function" == typeof e ? e : jt(+e), t) : n
          }, t.sortValues = function (n) {
               return arguments.length ? (e = n, r = null, t) : e
          }, t.sort = function (n) {
               return arguments.length ? (r = n, e = null, t) : r
          }, t.startAngle = function (n) {
               return arguments.length ? (i = "function" == typeof n ? n : jt(+n), t) : i
          }, t.endAngle = function (n) {
               return arguments.length ? (a = "function" == typeof n ? n : jt(+n), t) : a
          }, t.padAngle = function (n) {
               return arguments.length ? (o = "function" == typeof n ? n : jt(+n), t) : o
          }, t
     }

     function on(t) {
          this._curve = t
     }

     function un(t) {
          function n(n) {
               return new on(t(n))
          }

          return n._curve = t, n
     }

     function sn() {
          var t = tn(), n = t.curve;
          return t.angle = t.x, delete t.x, t.startAngle = t.x0, delete t.x0, t.endAngle = t.x1, delete t.x1, t.radius = t.y, delete t.y, t.innerRadius = t.y0, delete t.y0, t.outerRadius = t.y1, delete t.y1, t.curve = function (t) {
               return arguments.length ? n(un(t)) : n()._curve
          }, t.curve(Gt)
     }

     function cn() {
          var t = nn(), n = t.curve;
          return t.angle = t.x, delete t.x, t.radius = t.y, delete t.y, t.curve = function (t) {
               return arguments.length ? n(un(t)) : n()._curve
          }, t.curve(Gt)
     }

     function fn() {
          function t() {
               var t;
               return r || (r = t = kt()), n.apply(this, arguments).draw(r, +e.apply(this, arguments)), t ? (r = null, t + "" || null) : void 0
          }

          var n = jt(uf), e = jt(64), r = null;
          return t.type = function (e) {
               return arguments.length ? (n = "function" == typeof e ? e : jt(e), t) : n
          }, t.size = function (n) {
               return arguments.length ? (e = "function" == typeof n ? n : jt(+n), t) : e
          }, t.context = function (n) {
               return arguments.length ? (r = null == n ? null : n, t) : r
          }, t
     }

     function ln() {
     }

     function hn(t, n, e) {
          t._context.bezierCurveTo((2 * t._x0 + t._x1) / 3, (2 * t._y0 + t._y1) / 3, (t._x0 + 2 * t._x1) / 3, (t._y0 + 2 * t._y1) / 3, (t._x0 + 4 * t._x1 + n) / 6, (t._y0 + 4 * t._y1 + e) / 6)
     }

     function dn(t) {
          this._context = t
     }

     function pn(t) {
          return new dn(t)
     }

     function _n(t) {
          this._context = t
     }

     function yn(t) {
          return new _n(t)
     }

     function gn(t) {
          this._context = t
     }

     function mn(t) {
          return new gn(t)
     }

     function vn(t, n) {
          this._basis = new dn(t), this._beta = n
     }

     function bn(t, n, e) {
          t._context.bezierCurveTo(t._x1 + t._k * (t._x2 - t._x0), t._y1 + t._k * (t._y2 - t._y0), t._x2 + t._k * (t._x1 - n), t._y2 + t._k * (t._y1 - e), t._x2, t._y2)
     }

     function xn(t, n) {
          this._context = t, this._k = (1 - n) / 6
     }

     function Mn(t, n) {
          this._context = t, this._k = (1 - n) / 6
     }

     function wn(t, n) {
          this._context = t, this._k = (1 - n) / 6
     }

     function Tn(t, n, e) {
          var r = t._x1, i = t._y1, a = t._x2, o = t._y2;
          if (t._l01_a > ef) {
               var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a, s = 3 * t._l01_a * (t._l01_a + t._l12_a);
               r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s, i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s
          }
          if (t._l23_a > ef) {
               var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a, f = 3 * t._l23_a * (t._l23_a + t._l12_a);
               a = (a * c + t._x1 * t._l23_2a - n * t._l12_2a) / f, o = (o * c + t._y1 * t._l23_2a - e * t._l12_2a) / f
          }
          t._context.bezierCurveTo(r, i, a, o, t._x2, t._y2)
     }

     function kn(t, n) {
          this._context = t, this._alpha = n
     }

     function Sn(t, n) {
          this._context = t, this._alpha = n
     }

     function An(t, n) {
          this._context = t, this._alpha = n
     }

     function Nn(t) {
          this._context = t
     }

     function Cn(t) {
          return new Nn(t)
     }

     function En(t) {
          return 0 > t ? -1 : 1
     }

     function Pn(t, n, e) {
          var r = t._x1 - t._x0, i = n - t._x1, a = (t._y1 - t._y0) / (r || 0 > i && -0), o = (e - t._y1) / (i || 0 > r && -0), u = (a * i + o * r) / (r + i);
          return (En(a) + En(o)) * Math.min(Math.abs(a), Math.abs(o), .5 * Math.abs(u)) || 0
     }

     function Dn(t, n) {
          var e = t._x1 - t._x0;
          return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n
     }

     function Fn(t, n, e) {
          var r = t._x0, i = t._y0, a = t._x1, o = t._y1, u = (a - r) / 3;
          t._context.bezierCurveTo(r + u, i + u * n, a - u, o - u * e, a, o)
     }

     function Ln(t) {
          this._context = t
     }

     function Un(t) {
          this._context = new Yn(t)
     }

     function Yn(t) {
          this._context = t
     }

     function On(t) {
          return new Ln(t)
     }

     function Hn(t) {
          return new Un(t)
     }

     function Rn(t) {
          this._context = t
     }

     function jn(t) {
          var n, e, r = t.length - 1, i = new Array(r), a = new Array(r), o = new Array(r);
          for (i[0] = 0, a[0] = 2, o[0] = t[0] + 2 * t[1], n = 1; r - 1 > n; ++n)i[n] = 1, a[n] = 4, o[n] = 4 * t[n] + 2 * t[n + 1];
          for (i[r - 1] = 2, a[r - 1] = 7, o[r - 1] = 8 * t[r - 1] + t[r], n = 1; r > n; ++n)e = i[n] / a[n - 1], a[n] -= e, o[n] -= e * o[n - 1];
          for (i[r - 1] = o[r - 1] / a[r - 1], n = r - 2; n >= 0; --n)i[n] = (o[n] - i[n + 1]) / a[n];
          for (a[r - 1] = (t[r] + i[r - 1]) / 2, n = 0; r - 1 > n; ++n)a[n] = 2 * t[n + 1] - i[n + 1];
          return [i, a]
     }

     function zn(t) {
          return new Rn(t)
     }

     function qn(t, n) {
          this._context = t, this._t = n
     }

     function In(t) {
          return new qn(t, .5)
     }

     function Xn(t) {
          return new qn(t, 0)
     }

     function Jn(t) {
          return new qn(t, 1)
     }

     function Bn(t, n) {
          if ((r = t.length) > 1)for (var e, r, i = 1, a = t[n[0]], o = a.length; r > i; ++i) {
               e = a, a = t[n[i]];
               for (var u = 0; o > u; ++u)a[u][1] += a[u][0] = isNaN(e[u][1]) ? e[u][0] : e[u][1]
          }
     }

     function Wn(t) {
          for (var n = t.length, e = new Array(n); --n >= 0;)e[n] = n;
          return e
     }

     function Vn(t, n) {
          return t[n]
     }

     function $n() {
          function t(t) {
               var a, o, u = n.apply(this, arguments), s = t.length, c = u.length, f = new Array(c);
               for (a = 0; c > a; ++a) {
                    for (var l, h = u[a], d = f[a] = new Array(s), p = 0; s > p; ++p)d[p] = l = [0, +i(t[p], h, p, t)], l.data = t[p];
                    d.key = h
               }
               for (a = 0, o = e(f); c > a; ++a)f[o[a]].index = a;
               return r(f, o), f
          }

          var n = jt([]), e = Wn, r = Bn, i = Vn;
          return t.keys = function (e) {
               return arguments.length ? (n = "function" == typeof e ? e : jt(Ff.call(e)), t) : n
          }, t.value = function (n) {
               return arguments.length ? (i = "function" == typeof n ? n : jt(+n), t) : i
          }, t.order = function (n) {
               return arguments.length ? (e = null == n ? Wn : "function" == typeof n ? n : jt(Ff.call(n)), t) : e
          }, t.offset = function (n) {
               return arguments.length ? (r = null == n ? Bn : n, t) : r
          }, t
     }

     function Zn(t, n) {
          if ((r = t.length) > 0) {
               for (var e, r, i, a = 0, o = t[0].length; o > a; ++a) {
                    for (i = e = 0; r > e; ++e)i += t[e][a][1] || 0;
                    if (i)for (e = 0; r > e; ++e)t[e][a][1] /= i
               }
               Bn(t, n)
          }
     }

     function Gn(t, n) {
          if ((e = t.length) > 0) {
               for (var e, r = 0, i = t[n[0]], a = i.length; a > r; ++r) {
                    for (var o = 0, u = 0; e > o; ++o)u += t[o][r][1] || 0;
                    i[r][1] += i[r][0] = -u / 2
               }
               Bn(t, n)
          }
     }

     function Kn(t, n) {
          if ((i = t.length) > 0 && (r = (e = t[n[0]]).length) > 0) {
               for (var e, r, i, a = 0, o = 1; r > o; ++o) {
                    for (var u = 0, s = 0, c = 0; i > u; ++u) {
                         for (var f = t[n[u]], l = f[o][1] || 0, h = f[o - 1][1] || 0, d = (l - h) / 2, p = 0; u > p; ++p) {
                              var _ = t[n[p]], y = _[o][1] || 0, g = _[o - 1][1] || 0;
                              d += y - g
                         }
                         s += l, c += d * l
                    }
                    e[o - 1][1] += e[o - 1][0] = a, s && (a -= c / s)
               }
               e[o - 1][1] += e[o - 1][0] = a, Bn(t, n)
          }
     }

     function Qn(t) {
          var n = t.map(te);
          return Wn(t).sort(function (t, e) {
               return n[t] - n[e]
          })
     }

     function te(t) {
          for (var n, e = 0, r = -1, i = t.length; ++r < i;)(n = +t[r][1]) && (e += n);
          return e
     }

     function ne(t) {
          return Qn(t).reverse()
     }

     function ee(t) {
          var n, e, r = t.length, i = t.map(te), a = Wn(t).sort(function (t, n) {
               return i[n] - i[t]
          }), o = 0, u = 0, s = [], c = [];
          for (n = 0; r > n; ++n)e = a[n], u > o ? (o += i[e], s.push(e)) : (u += i[e], c.push(e));
          return c.reverse().concat(s)
     }

     function re(t) {
          return Wn(t).reverse()
     }

     function ie(t, n, e) {
          t.prototype = n.prototype = e, e.constructor = t
     }

     function ae(t, n) {
          var e = Object.create(t.prototype);
          for (var r in n)e[r] = n[r];
          return e
     }

     function oe() {
     }

     function ue(t) {
          var n;
          return t = (t + "").trim().toLowerCase(), (n = Yf.exec(t)) ? (n = parseInt(n[1], 16), new he(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1)) : (n = Of.exec(t)) ? se(parseInt(n[1], 16)) : (n = Hf.exec(t)) ? new he(n[1], n[2], n[3], 1) : (n = Rf.exec(t)) ? new he(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = jf.exec(t)) ? ce(n[1], n[2], n[3], n[4]) : (n = zf.exec(t)) ? ce(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = qf.exec(t)) ? de(n[1], n[2] / 100, n[3] / 100, 1) : (n = If.exec(t)) ? de(n[1], n[2] / 100, n[3] / 100, n[4]) : Xf.hasOwnProperty(t) ? se(Xf[t]) : "transparent" === t ? new he(NaN, NaN, NaN, 0) : null
     }

     function se(t) {
          return new he(t >> 16 & 255, t >> 8 & 255, 255 & t, 1)
     }

     function ce(t, n, e, r) {
          return 0 >= r && (t = n = e = NaN), new he(t, n, e, r)
     }

     function fe(t) {
          return t instanceof oe || (t = ue(t)), t ? (t = t.rgb(), new he(t.r, t.g, t.b, t.opacity)) : new he
     }

     function le(t, n, e, r) {
          return 1 === arguments.length ? fe(t) : new he(t, n, e, null == r ? 1 : r)
     }

     function he(t, n, e, r) {
          this.r = +t, this.g = +n, this.b = +e, this.opacity = +r
     }

     function de(t, n, e, r) {
          return 0 >= r ? t = n = e = NaN : 0 >= e || e >= 1 ? t = n = NaN : 0 >= n && (t = NaN), new ye(t, n, e, r)
     }

     function pe(t) {
          if (t instanceof ye)return new ye(t.h, t.s, t.l, t.opacity);
          if (t instanceof oe || (t = ue(t)), !t)return new ye;
          if (t instanceof ye)return t;
          t = t.rgb();
          var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), a = Math.max(n, e, r), o = NaN, u = a - i, s = (a + i) / 2;
          return u ? (o = n === a ? (e - r) / u + 6 * (r > e) : e === a ? (r - n) / u + 2 : (n - e) / u + 4, u /= .5 > s ? a + i : 2 - a - i, o *= 60) : u = s > 0 && 1 > s ? 0 : o, new ye(o, u, s, t.opacity)
     }

     function _e(t, n, e, r) {
          return 1 === arguments.length ? pe(t) : new ye(t, n, e, null == r ? 1 : r)
     }

     function ye(t, n, e, r) {
          this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
     }

     function ge(t, n, e) {
          return 255 * (60 > t ? n + (e - n) * t / 60 : 180 > t ? e : 240 > t ? n + (e - n) * (240 - t) / 60 : n)
     }

     function me(t) {
          if (t instanceof be)return new be(t.l, t.a, t.b, t.opacity);
          if (t instanceof Ae) {
               var n = t.h * Jf;
               return new be(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity)
          }
          t instanceof he || (t = fe(t));
          var e = Te(t.r), r = Te(t.g), i = Te(t.b), a = xe((.4124564 * e + .3575761 * r + .1804375 * i) / Vf), o = xe((.2126729 * e + .7151522 * r + .072175 * i) / $f), u = xe((.0193339 * e + .119192 * r + .9503041 * i) / Zf);
          return new be(116 * o - 16, 500 * (a - o), 200 * (o - u), t.opacity)
     }

     function ve(t, n, e, r) {
          return 1 === arguments.length ? me(t) : new be(t, n, e, null == r ? 1 : r)
     }

     function be(t, n, e, r) {
          this.l = +t, this.a = +n, this.b = +e, this.opacity = +r
     }

     function xe(t) {
          return t > tl ? Math.pow(t, 1 / 3) : t / Qf + Gf
     }

     function Me(t) {
          return t > Kf ? t * t * t : Qf * (t - Gf)
     }

     function we(t) {
          return 255 * (.0031308 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055)
     }

     function Te(t) {
          return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
     }

     function ke(t) {
          if (t instanceof Ae)return new Ae(t.h, t.c, t.l, t.opacity);
          t instanceof be || (t = me(t));
          var n = Math.atan2(t.b, t.a) * Bf;
          return new Ae(0 > n ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity)
     }

     function Se(t, n, e, r) {
          return 1 === arguments.length ? ke(t) : new Ae(t, n, e, null == r ? 1 : r)
     }

     function Ae(t, n, e, r) {
          this.h = +t, this.c = +n, this.l = +e, this.opacity = +r
     }

     function Ne(t) {
          if (t instanceof Ee)return new Ee(t.h, t.s, t.l, t.opacity);
          t instanceof he || (t = fe(t));
          var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = (sl * r + ol * n - ul * e) / (sl + ol - ul), a = r - i, o = (al * (e - i) - rl * a) / il, u = Math.sqrt(o * o + a * a) / (al * i * (1 - i)), s = u ? Math.atan2(o, a) * Bf - 120 : NaN;
          return new Ee(0 > s ? s + 360 : s, u, i, t.opacity)
     }

     function Ce(t, n, e, r) {
          return 1 === arguments.length ? Ne(t) : new Ee(t, n, e, null == r ? 1 : r)
     }

     function Ee(t, n, e, r) {
          this.h = +t, this.s = +n, this.l = +e, this.opacity = +r
     }

     function Pe(t) {
          return function () {
               return t
          }
     }

     function De(t, n) {
          return function (e) {
               return t + e * n
          }
     }

     function Fe(t, n, e) {
          return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
               return Math.pow(t + r * n, e)
          }
     }

     function Le(t, n) {
          var e = n - t;
          return e ? De(t, e > 180 || -180 > e ? e - 360 * Math.round(e / 360) : e) : Pe(isNaN(t) ? n : t)
     }

     function Ue(t) {
          return 1 === (t = +t) ? Ye : function (n, e) {
               return e - n ? Fe(n, e, t) : Pe(isNaN(n) ? e : n)
          }
     }

     function Ye(t, n) {
          var e = n - t;
          return e ? De(t, e) : Pe(isNaN(t) ? n : t)
     }

     function Oe(t, n) {
          var e, r = [], i = [], a = t ? t.length : 0, o = n ? n.length : 0, u = Math.min(a, o);
          for (e = 0; u > e; ++e)r.push(Ie(t[e], n[e]));
          for (; a > e; ++e)i[e] = t[e];
          for (; o > e; ++e)i[e] = n[e];
          return function (t) {
               for (e = 0; u > e; ++e)i[e] = r[e](t);
               return i
          }
     }

     function He(t, n) {
          return t = +t, n -= t, function (e) {
               return t + n * e
          }
     }

     function Re(t, n) {
          var e, r = {}, i = {};
          null !== t && "object" == typeof t || (t = {}), null !== n && "object" == typeof n || (n = {});
          for (e in t)e in n ? r[e] = Ie(t[e], n[e]) : i[e] = t[e];
          for (e in n)e in t || (i[e] = n[e]);
          return function (t) {
               for (e in r)i[e] = r[e](t);
               return i
          }
     }

     function je(t) {
          return function () {
               return t
          }
     }

     function ze(t) {
          return function (n) {
               return t(n) + ""
          }
     }

     function qe(t, n) {
          var e, r, i, a = pl.lastIndex = _l.lastIndex = 0, o = -1, u = [], s = [];
          for (t += "", n += ""; (e = pl.exec(t)) && (r = _l.exec(n));)(i = r.index) > a && (i = n.slice(a, i), u[o] ? u[o] += i : u[++o] = i), (e = e[0]) === (r = r[0]) ? u[o] ? u[o] += r : u[++o] = r : (u[++o] = null, s.push({
               i: o,
               x: He(e, r)
          })), a = _l.lastIndex;
          return a < n.length && (i = n.slice(a), u[o] ? u[o] += i : u[++o] = i), u.length < 2 ? s[0] ? ze(s[0].x) : je(n) : (n = s.length, function (t) {
               for (var e, r = 0; n > r; ++r)u[(e = s[r]).i] = e.x(t);
               return u.join("")
          })
     }

     function Ie(t, n) {
          var e, r = typeof n;
          return null == n || "boolean" === r ? Pe(n) : ("number" === r ? He : "string" === r ? (e = ue(n)) ? (n = e, dl) : qe : n instanceof ue ? dl : Array.isArray(n) ? Oe : Re)(t, n)
     }

     function Xe(t, n) {
          return t = +t, n -= t, function (e) {
               return Math.round(t + n * e)
          }
     }

     function Je(t, n, e, r, i, a) {
          if (t * r === n * e)return null;
          var o = Math.sqrt(t * t + n * n);
          t /= o, n /= o;
          var u = t * e + n * r;
          e -= t * u, r -= n * u;
          var s = Math.sqrt(e * e + r * r);
          return e /= s, r /= s, u /= s, n * e > t * r && (t = -t, n = -n, u = -u, o = -o), {
               translateX: i,
               translateY: a,
               rotate: Math.atan2(n, t) * yl,
               skewX: Math.atan(u) * yl,
               scaleX: o,
               scaleY: s
          }
     }

     function Be(t) {
          if ("none" === t)return gl;
          cl || (cl = document.createElement("DIV"), fl = document.documentElement, ll = document.defaultView), cl.style.transform = t, t = ll.getComputedStyle(fl.appendChild(cl), null).getPropertyValue("transform"), fl.removeChild(cl);
          var n = t.slice(7, -1).split(",");
          return Je(+n[0], +n[1], +n[2], +n[3], +n[4], +n[5])
     }

     function We(t) {
          hl || (hl = document.createElementNS("http://www.w3.org/2000/svg", "g")), hl.setAttribute("transform", null == t ? "" : t);
          var n = hl.transform.baseVal.consolidate().matrix;
          return Je(n.a, n.b, n.c, n.d, n.e, n.f)
     }

     function Ve(t, n, e, r) {
          function i(t) {
               return t.length ? t.pop() + " " : ""
          }

          function a(t, r, i, a, o, u) {
               if (t !== i || r !== a) {
                    var s = o.push("translate(", null, n, null, e);
                    u.push({i: s - 4, x: He(t, i)}, {i: s - 2, x: He(r, a)})
               } else(i || a) && o.push("translate(" + i + n + a + e)
          }

          function o(t, n, e, a) {
               t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), a.push({
                    i: e.push(i(e) + "rotate(", null, r) - 2,
                    x: He(t, n)
               })) : n && e.push(i(e) + "rotate(" + n + r)
          }

          function u(t, n, e, a) {
               t !== n ? a.push({
                    i: e.push(i(e) + "skewX(", null, r) - 2,
                    x: He(t, n)
               }) : n && e.push(i(e) + "skewX(" + n + r)
          }

          function s(t, n, e, r, a, o) {
               if (t !== e || n !== r) {
                    var u = a.push(i(a) + "scale(", null, ",", null, ")");
                    o.push({i: u - 4, x: He(t, e)}, {i: u - 2, x: He(n, r)})
               } else 1 === e && 1 === r || a.push(i(a) + "scale(" + e + "," + r + ")")
          }

          return function (n, e) {
               var r = [], i = [];
               return n = t(n), e = t(e), a(n.translateX, n.translateY, e.translateX, e.translateY, r, i), o(n.rotate, e.rotate, r, i), u(n.skewX, e.skewX, r, i), s(n.scaleX, n.scaleY, e.scaleX, e.scaleY, r, i), n = e = null, function (t) {
                    for (var n, e = -1, a = i.length; ++e < a;)r[(n = i[e]).i] = n.x(t);
                    return r.join("")
               }
          }
     }

     function $e(t) {
          return ((t = Math.exp(t)) + 1 / t) / 2
     }

     function Ze(t) {
          return ((t = Math.exp(t)) - 1 / t) / 2
     }

     function Ge(t) {
          return ((t = Math.exp(2 * t)) - 1) / (t + 1)
     }

     function Ke(t, n) {
          var e, r, i = t[0], a = t[1], o = t[2], u = n[0], s = n[1], c = n[2], f = u - i, l = s - a, h = f * f + l * l;
          if (wl > h)r = Math.log(c / o) / bl, e = function (t) {
               return [i + t * f, a + t * l, o * Math.exp(bl * t * r)]
          }; else {
               var d = Math.sqrt(h), p = (c * c - o * o + Ml * h) / (2 * o * xl * d), _ = (c * c - o * o - Ml * h) / (2 * c * xl * d), y = Math.log(Math.sqrt(p * p + 1) - p), g = Math.log(Math.sqrt(_ * _ + 1) - _);
               r = (g - y) / bl, e = function (t) {
                    var n = t * r, e = $e(y), u = o / (xl * d) * (e * Ge(bl * n + y) - Ze(y));
                    return [i + u * f, a + u * l, o * e / $e(bl * n + y)]
               }
          }
          return e.duration = 1e3 * r, e
     }

     function Qe(t, n) {
          var e = Le((t = _e(t)).h, (n = _e(n)).h), r = Ye(t.s, n.s), i = Ye(t.l, n.l), a = Ye(t.opacity, n.opacity);
          return function (n) {
               return t.h = e(n), t.s = r(n), t.l = i(n), t.opacity = a(n), t + ""
          }
     }

     function tr(t, n) {
          var e = Ye((t = _e(t)).h, (n = _e(n)).h), r = Ye(t.s, n.s), i = Ye(t.l, n.l), a = Ye(t.opacity, n.opacity);
          return function (n) {
               return t.h = e(n), t.s = r(n), t.l = i(n), t.opacity = a(n), t + ""
          }
     }

     function nr(t, n) {
          var e = Ye((t = ve(t)).l, (n = ve(n)).l), r = Ye(t.a, n.a), i = Ye(t.b, n.b), a = Ye(t.opacity, n.opacity);
          return function (n) {
               return t.l = e(n), t.a = r(n), t.b = i(n), t.opacity = a(n), t + ""
          }
     }

     function er(t, n) {
          var e = Le((t = Se(t)).h, (n = Se(n)).h), r = Ye(t.c, n.c), i = Ye(t.l, n.l), a = Ye(t.opacity, n.opacity);
          return function (n) {
               return t.h = e(n), t.c = r(n), t.l = i(n), t.opacity = a(n), t + ""
          }
     }

     function rr(t, n) {
          var e = Ye((t = Se(t)).h, (n = Se(n)).h), r = Ye(t.c, n.c), i = Ye(t.l, n.l), a = Ye(t.opacity, n.opacity);
          return function (n) {
               return t.h = e(n), t.c = r(n), t.l = i(n), t.opacity = a(n), t + ""
          }
     }

     function ir() {
          for (var t, n = 0, e = arguments.length, r = {}; e > n; ++n) {
               if (!(t = arguments[n] + "") || t in r)throw new Error;
               r[t] = []
          }
          return new ar(r)
     }

     function ar(t) {
          this._ = t
     }

     function or(t, n) {
          return t.trim().split(/^|\s+/).map(function (t) {
               var e = "", r = t.indexOf(".");
               if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t))throw new Error;
               return {type: t, name: e}
          })
     }

     function ur(t, n) {
          for (var e, r = 0, i = t.length; i > r; ++r)if ((e = t[r]).name === n)return e.value
     }

     function sr(t, n, e) {
          for (var r = 0, i = t.length; i > r; ++r)if (t[r].name === n) {
               t[r] = Sl, t = t.slice(0, r).concat(t.slice(r + 1));
               break
          }
          return null != e && t.push({name: n, value: e}), t
     }

     function cr(t) {
          return new Function("d", "return {" + t.map(function (t, n) {
                    return JSON.stringify(t) + ": d[" + n + "]"
               }).join(",") + "}")
     }

     function fr(t, n) {
          var e = cr(t);
          return function (r, i) {
               return n(e(r), i, t)
          }
     }

     function lr(t) {
          var n = Object.create(null), e = [];
          return t.forEach(function (t) {
               for (var r in t)r in n || e.push(n[r] = r)
          }), e
     }

     function hr(t) {
          function n(t, n) {
               var r, i, a = e(t, function (t, e) {
                    return r ? r(t, e - 1) : (i = t, void(r = n ? fr(t, n) : cr(t)))
               });
               return a.columns = i, a
          }

          function e(t, n) {
               function e() {
                    if (f >= c)return o;
                    if (i)return i = !1, a;
                    var n, e = f;
                    if (34 === t.charCodeAt(e)) {
                         for (var r = e; r++ < c;)if (34 === t.charCodeAt(r)) {
                              if (34 !== t.charCodeAt(r + 1))break;
                              ++r
                         }
                         return f = r + 2, n = t.charCodeAt(r + 1), 13 === n ? (i = !0, 10 === t.charCodeAt(r + 2) && ++f) : 10 === n && (i = !0), t.slice(e + 1, r).replace(/""/g, '"')
                    }
                    for (; c > f;) {
                         var u = 1;
                         if (n = t.charCodeAt(f++), 10 === n)i = !0; else if (13 === n)i = !0, 10 === t.charCodeAt(f) && (++f, ++u); else if (n !== s)continue;
                         return t.slice(e, f - u)
                    }
                    return t.slice(e)
               }

               for (var r, i, a = {}, o = {}, u = [], c = t.length, f = 0, l = 0; (r = e()) !== o;) {
                    for (var h = []; r !== a && r !== o;)h.push(r), r = e();
                    n && null == (h = n(h, l++)) || u.push(h)
               }
               return u
          }

          function r(n, e) {
               return null == e && (e = lr(n)), [e.map(o).join(t)].concat(n.map(function (n) {
                    return e.map(function (t) {
                         return o(n[t])
                    }).join(t)
               })).join("\n")
          }

          function i(t) {
               return t.map(a).join("\n")
          }

          function a(n) {
               return n.map(o).join(t)
          }

          function o(t) {
               return u.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
          }

          var u = new RegExp('["' + t + "\n]"), s = t.charCodeAt(0);
          return {parse: n, parseRows: e, format: r, formatRows: i}
     }

     function dr(t, n) {
          function e(t) {
               var n, e = c.status;
               if (!e && _r(c) || e >= 200 && 300 > e || 304 === e) {
                    if (a)try {
                         n = a.call(r, c)
                    } catch (i) {
                         return void u.call("error", r, i)
                    } else n = c;
                    u.call("load", r, n)
               } else u.call("error", r, t)
          }

          var r, i, a, o, u = ir("beforesend", "progress", "load", "error"), s = L(), c = new XMLHttpRequest, f = null, l = null, h = 0;
          return "undefined" == typeof XDomainRequest || "withCredentials" in c || !/^(http(s)?:)?\/\//.test(t) || (c = new XDomainRequest), "onload" in c ? c.onload = c.onerror = c.ontimeout = e : c.onreadystatechange = function (t) {
               c.readyState > 3 && e(t)
          }, c.onprogress = function (t) {
               u.call("progress", r, t)
          }, r = {
               header: function (t, n) {
                    return t = (t + "").toLowerCase(), arguments.length < 2 ? s.get(t) : (null == n ? s.remove(t) : s.set(t, n + ""), r)
               }, mimeType: function (t) {
                    return arguments.length ? (i = null == t ? null : t + "", r) : i
               }, responseType: function (t) {
                    return arguments.length ? (o = t, r) : o
               }, timeout: function (t) {
                    return arguments.length ? (h = +t, r) : h
               }, user: function (t) {
                    return arguments.length < 1 ? f : (f = null == t ? null : t + "", r)
               }, password: function (t) {
                    return arguments.length < 1 ? l : (l = null == t ? null : t + "", r)
               }, response: function (t) {
                    return a = t, r
               }, get: function (t, n) {
                    return r.send("GET", t, n)
               }, post: function (t, n) {
                    return r.send("POST", t, n)
               }, send: function (n, e, a) {
                    return a || "function" != typeof e || (a = e, e = null), a && 1 === a.length && (a = pr(a)), c.open(n, t, !0, f, l), null == i || s.has("accept") || s.set("accept", i + ",*/*"), c.setRequestHeader && s.each(function (t, n) {
                         c.setRequestHeader(n, t)
                    }), null != i && c.overrideMimeType && c.overrideMimeType(i), null != o && (c.responseType = o), h > 0 && (c.timeout = h), a && r.on("error", a).on("load", function (t) {
                         a(null, t)
                    }), u.call("beforesend", r, c), c.send(null == e ? null : e), r
               }, abort: function () {
                    return c.abort(), r
               }, on: function () {
                    var t = u.on.apply(u, arguments);
                    return t === u ? r : t
               }
          }, n ? r.get(n) : r
     }

     function pr(t) {
          return function (n, e) {
               t(null == n ? e : null)
          }
     }

     function _r(t) {
          var n = t.responseType;
          return n && "text" !== n ? t.response : t.responseText
     }

     function yr(t, n) {
          return function (e, r) {
               var i = dr(e).mimeType(t).response(n);
               return r ? i.get(r) : i
          }
     }

     function gr(t, n) {
          return function (e, r, i) {
               arguments.length < 3 && (i = r, r = null);
               var a = dr(e).mimeType(t);
               return a.row = function (t) {
                    return arguments.length ? a.response(mr(n, r = t)) : r
               }, a.row(r), i ? a.get(i) : a
          }
     }

     function mr(t, n) {
          return function (e) {
               return t(e.responseText, n)
          }
     }

     function vr() {
          return Zl || (Ql(br), Zl = Kl.now() + Gl)
     }

     function br() {
          Zl = 0
     }

     function xr() {
          this._call = this._time = this._next = null
     }

     function Mr(t, n, e) {
          var r = new xr;
          return r.restart(t, n, e), r
     }

     function wr() {
          vr(), ++Jl;
          for (var t, n = Al; n;)(t = Zl - n._time) >= 0 && n._call.call(null, t), n = n._next;
          --Jl
     }

     function Tr(t) {
          Zl = ($l = t || Kl.now()) + Gl, Jl = Bl = 0;
          try {
               wr()
          } finally {
               Jl = 0, Sr(), Zl = 0
          }
     }

     function kr() {
          var t = Kl.now(), n = t - $l;
          n > Vl && (Gl -= n, $l = t)
     }

     function Sr() {
          for (var t, n = Al, e = 1 / 0; n;)n._call ? (e > n._time && (e = n._time), n = (t = n)._next) : n = t ? t._next = n._next : Al = n._next;
          Nl = t, Ar(e)
     }

     function Ar(t) {
          if (!Jl) {
               Bl && (Bl = clearTimeout(Bl));
               var n = t - Zl;
               n > 24 ? (1 / 0 > t && (Bl = setTimeout(Tr, n)), Wl && (Wl = clearInterval(Wl))) : (Wl || (Wl = setInterval(kr, Vl)), Jl = 1, Ql(Tr))
          }
     }

     function Nr(t, n, e) {
          var r = new xr;
          return n = null == n ? 0 : +n, r.restart(function (e) {
               r.stop(), t(e + n)
          }, n, e), r
     }

     function Cr(t, n, e) {
          var r = new xr, i = n;
          return null == n ? (r.restart(t, n, e), r) : (n = +n, e = null == e ? vr() : +e, r.restart(function a(o) {
               o += i, r.restart(a, i += n, e), t(o)
          }, n, e), r)
     }

     function Er(t, n, e, r) {
          function i(n) {
               return t(n = new Date(+n)), n
          }

          return i.floor = i, i.ceil = function (e) {
               return t(e = new Date(e - 1)), n(e, 1), t(e), e
          }, i.round = function (t) {
               var n = i(t), e = i.ceil(t);
               return e - t > t - n ? n : e
          }, i.offset = function (t, e) {
               return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t
          }, i.range = function (e, r, a) {
               var o = [];
               if (e = i.ceil(e), a = null == a ? 1 : Math.floor(a), !(r > e && a > 0))return o;
               do o.push(new Date(+e)); while (n(e, a), t(e), r > e);
               return o
          }, i.filter = function (e) {
               return Er(function (n) {
                    for (; t(n), !e(n);)n.setTime(n - 1)
               }, function (t, r) {
                    for (; --r >= 0;)for (; n(t, 1), !e(t););
               })
          }, e && (i.count = function (n, r) {
               return th.setTime(+n), nh.setTime(+r), t(th), t(nh), Math.floor(e(th, nh))
          }, i.every = function (t) {
               return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? i.filter(r ? function (n) {
                    return r(n) % t === 0
               } : function (n) {
                    return i.count(0, n) % t === 0
               }) : i : null
          }), i
     }

     function Pr(t) {
          return Er(function (n) {
               n.setHours(0, 0, 0, 0), n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7)
          }, function (t, n) {
               t.setDate(t.getDate() + 7 * n)
          }, function (t, n) {
               return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ah) / sh
          })
     }

     function Dr(t) {
          return Er(function (n) {
               n.setUTCHours(0, 0, 0, 0), n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7)
          }, function (t, n) {
               t.setUTCDate(t.getUTCDate() + 7 * n)
          }, function (t, n) {
               return (n - t) / sh
          })
     }

     function Fr(t, n) {
          if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0)return null;
          var e, r = t.slice(0, e);
          return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)]
     }

     function Lr(t) {
          return t = Fr(Math.abs(t)), t ? t[1] : NaN
     }

     function Ur(t, n) {
          return function (e, r) {
               for (var i = e.length, a = [], o = 0, u = t[0], s = 0; i > 0 && u > 0 && (s + u + 1 > r && (u = Math.max(1, r - s)), a.push(e.substring(i -= u, i + u)), !((s += u + 1) > r));)u = t[o = (o + 1) % t.length];
               return a.reverse().join(n)
          }
     }

     function Yr(t, n) {
          t = t.toPrecision(n);
          t:for (var e, r = t.length, i = 1, a = -1; r > i; ++i)switch (t[i]) {
               case".":
                    a = e = i;
                    break;
               case"0":
                    0 === a && (a = i), e = i;
                    break;
               case"e":
                    break t;
               default:
                    a > 0 && (a = 0)
          }
          return a > 0 ? t.slice(0, a) + t.slice(e + 1) : t
     }

     function Or(t, n) {
          var e = Fr(t, n);
          if (!e)return t + "";
          var r = e[0], i = e[1], a = i - (rh = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1, o = r.length;
          return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Fr(t, Math.max(0, n + a - 1))[0]
     }

     function Hr(t, n) {
          var e = Fr(t, n);
          if (!e)return t + "";
          var r = e[0], i = e[1];
          return 0 > i ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0")
     }

     function Rr(t) {
          return new jr(t)
     }

     function jr(t) {
          if (!(n = dd.exec(t)))throw new Error("invalid format: " + t);
          var n, e = n[1] || " ", r = n[2] || ">", i = n[3] || "-", a = n[4] || "", o = !!n[5], u = n[6] && +n[6], s = !!n[7], c = n[8] && +n[8].slice(1), f = n[9] || "";
          "n" === f ? (s = !0, f = "g") : hd[f] || (f = ""), (o || "0" === e && "=" === r) && (o = !0, e = "0", r = "="), this.fill = e, this.align = r, this.sign = i, this.symbol = a, this.zero = o, this.width = u, this.comma = s, this.precision = c, this.type = f
     }

     function zr(t) {
          return t
     }

     function qr(t) {
          function n(t) {
               function n(t) {
                    var n, i, s, m = p, v = _;
                    if ("c" === d)v = y(t) + v, t = ""; else {
                         t = +t;
                         var b = (0 > t || 0 > 1 / t) && (t *= -1, !0);
                         if (t = y(t, h), b)for (n = -1, i = t.length, b = !1; ++n < i;)if (s = t.charCodeAt(n), s > 48 && 58 > s || "x" === d && s > 96 && 103 > s || "X" === d && s > 64 && 71 > s) {
                              b = !0;
                              break
                         }
                         if (m = (b ? "(" === u ? u : "-" : "-" === u || "(" === u ? "" : u) + m, v = v + ("s" === d ? pd[8 + rh / 3] : "") + (b && "(" === u ? ")" : ""), g)for (n = -1, i = t.length; ++n < i;)if (s = t.charCodeAt(n), 48 > s || s > 57) {
                              v = (46 === s ? a + t.slice(n + 1) : t.slice(n)) + v, t = t.slice(0, n);
                              break
                         }
                    }
                    l && !c && (t = r(t, 1 / 0));
                    var x = m.length + t.length + v.length, M = f > x ? new Array(f - x + 1).join(e) : "";
                    switch (l && c && (t = r(M + t, M.length ? f - v.length : 1 / 0), M = ""), o) {
                         case"<":
                              return m + t + v + M;
                         case"=":
                              return m + M + t + v;
                         case"^":
                              return M.slice(0, x = M.length >> 1) + m + t + v + M.slice(x)
                    }
                    return M + m + t + v
               }

               t = Rr(t);
               var e = t.fill, o = t.align, u = t.sign, s = t.symbol, c = t.zero, f = t.width, l = t.comma, h = t.precision, d = t.type, p = "$" === s ? i[0] : "#" === s && /[boxX]/.test(d) ? "0" + d.toLowerCase() : "", _ = "$" === s ? i[1] : /[%p]/.test(d) ? "%" : "", y = hd[d], g = !d || /[defgprs%]/.test(d);
               return h = null == h ? d ? 6 : 12 : /[gprs]/.test(d) ? Math.max(1, Math.min(21, h)) : Math.max(0, Math.min(20, h)), n.toString = function () {
                    return t + ""
               }, n
          }

          function e(t, e) {
               var r = n((t = Rr(t), t.type = "f", t)), i = 3 * Math.max(-8, Math.min(8, Math.floor(Lr(e) / 3))), a = Math.pow(10, -i), o = pd[8 + i / 3];
               return function (t) {
                    return r(a * t) + o
               }
          }

          var r = t.grouping && t.thousands ? Ur(t.grouping, t.thousands) : zr, i = t.currency, a = t.decimal;
          return {format: n, formatPrefix: e}
     }

     function Ir(t) {
          return Math.max(0, -Lr(Math.abs(t)))
     }

     function Xr(t, n) {
          return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(Lr(n) / 3))) - Lr(Math.abs(t)))
     }

     function Jr(t, n) {
          return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Lr(n) - Lr(t)) + 1
     }

     function Br(t) {
          if (0 <= t.y && t.y < 100) {
               var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
               return n.setFullYear(t.y), n
          }
          return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L)
     }

     function Wr(t) {
          if (0 <= t.y && t.y < 100) {
               var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
               return n.setUTCFullYear(t.y), n
          }
          return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L))
     }

     function Vr(t) {
          return {y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0}
     }

     function $r(t) {
          function n(t, n) {
               return function (e) {
                    var r, i, a, o = [], u = -1, s = 0, c = t.length;
                    for (e instanceof Date || (e = new Date(+e)); ++u < c;)37 === t.charCodeAt(u) && (o.push(t.slice(s, u)), null != (i = jd[r = t.charAt(++u)]) ? r = t.charAt(++u) : i = "e" === r ? " " : "0", (a = n[r]) && (r = a(e, i)), o.push(r), s = u + 1);
                    return o.push(t.slice(s, u)), o.join("")
               }
          }

          function e(t, n) {
               return function (e) {
                    var i = Vr(1900), a = r(i, t, e += "", 0);
                    if (a != e.length)return null;
                    if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "W" in i || "U" in i) {
                         "w" in i || (i.w = "W" in i ? 1 : 0);
                         var o = "Z" in i ? Wr(Vr(i.y)).getUTCDay() : n(Vr(i.y)).getDay();
                         i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7
                    }
                    return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, Wr(i)) : n(i)
               }
          }

          function r(t, n, e, r) {
               for (var i, a, o = 0, u = n.length, s = e.length; u > o;) {
                    if (r >= s)return -1;
                    if (i = n.charCodeAt(o++), 37 === i) {
                         if (i = n.charAt(o++), a = q[i in jd ? n.charAt(o++) : i], !a || (r = a(t, e, r)) < 0)return -1
                    } else if (i != e.charCodeAt(r++))return -1
               }
               return r
          }

          function i(t, n, e) {
               var r = E.exec(n.slice(e));
               return r ? (t.p = P[r[0].toLowerCase()], e + r[0].length) : -1
          }

          function a(t, n, e) {
               var r = L.exec(n.slice(e));
               return r ? (t.w = U[r[0].toLowerCase()], e + r[0].length) : -1
          }

          function o(t, n, e) {
               var r = D.exec(n.slice(e));
               return r ? (t.w = F[r[0].toLowerCase()], e + r[0].length) : -1
          }

          function u(t, n, e) {
               var r = H.exec(n.slice(e));
               return r ? (t.m = R[r[0].toLowerCase()], e + r[0].length) : -1
          }

          function s(t, n, e) {
               var r = Y.exec(n.slice(e));
               return r ? (t.m = O[r[0].toLowerCase()], e + r[0].length) : -1
          }

          function c(t, n, e) {
               return r(t, M, n, e)
          }

          function f(t, n, e) {
               return r(t, w, n, e)
          }

          function l(t, n, e) {
               return r(t, T, n, e)
          }

          function h(t) {
               return A[t.getDay()]
          }

          function d(t) {
               return S[t.getDay()]
          }

          function p(t) {
               return C[t.getMonth()]
          }

          function _(t) {
               return N[t.getMonth()]
          }

          function y(t) {
               return k[+(t.getHours() >= 12)]
          }

          function g(t) {
               return A[t.getUTCDay()]
          }

          function m(t) {
               return S[t.getUTCDay()]
          }

          function v(t) {
               return C[t.getUTCMonth()]
          }

          function b(t) {
               return N[t.getUTCMonth()]
          }

          function x(t) {
               return k[+(t.getUTCHours() >= 12)]
          }

          var M = t.dateTime, w = t.date, T = t.time, k = t.periods, S = t.days, A = t.shortDays, N = t.months, C = t.shortMonths, E = Kr(k), P = Qr(k), D = Kr(S), F = Qr(S), L = Kr(A), U = Qr(A), Y = Kr(N), O = Qr(N), H = Kr(C), R = Qr(C), j = {
               a: h,
               A: d,
               b: p,
               B: _,
               c: null,
               d: pi,
               e: pi,
               H: _i,
               I: yi,
               j: gi,
               L: mi,
               m: vi,
               M: bi,
               p: y,
               S: xi,
               U: Mi,
               w: wi,
               W: Ti,
               x: null,
               X: null,
               y: ki,
               Y: Si,
               Z: Ai,
               "%": qi
          }, z = {
               a: g,
               A: m,
               b: v,
               B: b,
               c: null,
               d: Ni,
               e: Ni,
               H: Ci,
               I: Ei,
               j: Pi,
               L: Di,
               m: Fi,
               M: Li,
               p: x,
               S: Ui,
               U: Yi,
               w: Oi,
               W: Hi,
               x: null,
               X: null,
               y: Ri,
               Y: ji,
               Z: zi,
               "%": qi
          }, q = {
               a: a,
               A: o,
               b: u,
               B: s,
               c: c,
               d: ui,
               e: ui,
               H: ci,
               I: ci,
               j: si,
               L: hi,
               m: oi,
               M: fi,
               p: i,
               S: li,
               U: ni,
               w: ti,
               W: ei,
               x: f,
               X: l,
               y: ii,
               Y: ri,
               Z: ai,
               "%": di
          };
          return j.x = n(w, j), j.X = n(T, j), j.c = n(M, j), z.x = n(w, z), z.X = n(T, z), z.c = n(M, z), {
               format: function (t) {
                    var e = n(t += "", j);
                    return e.toString = function () {
                         return t
                    }, e
               }, parse: function (t) {
                    var n = e(t += "", Br);
                    return n.toString = function () {
                         return t
                    }, n
               }, utcFormat: function (t) {
                    var e = n(t += "", z);
                    return e.toString = function () {
                         return t
                    }, e
               }, utcParse: function (t) {
                    var n = e(t, Wr);
                    return n.toString = function () {
                         return t
                    }, n
               }
          }
     }

     function Zr(t, n, e) {
          var r = 0 > t ? "-" : "", i = (r ? -t : t) + "", a = i.length;
          return r + (e > a ? new Array(e - a + 1).join(n) + i : i)
     }

     function Gr(t) {
          return t.replace(Id, "\\$&")
     }

     function Kr(t) {
          return new RegExp("^(?:" + t.map(Gr).join("|") + ")", "i")
     }

     function Qr(t) {
          for (var n = {}, e = -1, r = t.length; ++e < r;)n[t[e].toLowerCase()] = e;
          return n
     }

     function ti(t, n, e) {
          var r = zd.exec(n.slice(e, e + 1));
          return r ? (t.w = +r[0], e + r[0].length) : -1
     }

     function ni(t, n, e) {
          var r = zd.exec(n.slice(e));
          return r ? (t.U = +r[0], e + r[0].length) : -1
     }

     function ei(t, n, e) {
          var r = zd.exec(n.slice(e));
          return r ? (t.W = +r[0], e + r[0].length) : -1
     }

     function ri(t, n, e) {
          var r = zd.exec(n.slice(e, e + 4));
          return r ? (t.y = +r[0], e + r[0].length) : -1
     }

     function ii(t, n, e) {
          var r = zd.exec(n.slice(e, e + 2));
          return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1
     }

     function ai(t, n, e) {
          var r = /^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e, e + 6));
          return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1
     }

     function oi(t, n, e) {
          var r = zd.exec(n.slice(e, e + 2));
          return r ? (t.m = r[0] - 1, e + r[0].length) : -1
     }

     function ui(t, n, e) {
          var r = zd.exec(n.slice(e, e + 2));
          return r ? (t.d = +r[0], e + r[0].length) : -1
     }

     function si(t, n, e) {
          var r = zd.exec(n.slice(e, e + 3));
          return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1
     }

     function ci(t, n, e) {
          var r = zd.exec(n.slice(e, e + 2));
          return r ? (t.H = +r[0], e + r[0].length) : -1
     }

     function fi(t, n, e) {
          var r = zd.exec(n.slice(e, e + 2));
          return r ? (t.M = +r[0], e + r[0].length) : -1
     }

     function li(t, n, e) {
          var r = zd.exec(n.slice(e, e + 2));
          return r ? (t.S = +r[0], e + r[0].length) : -1
     }

     function hi(t, n, e) {
          var r = zd.exec(n.slice(e, e + 3));
          return r ? (t.L = +r[0], e + r[0].length) : -1
     }

     function di(t, n, e) {
          var r = qd.exec(n.slice(e, e + 1));
          return r ? e + r[0].length : -1
     }

     function pi(t, n) {
          return Zr(t.getDate(), n, 2)
     }

     function _i(t, n) {
          return Zr(t.getHours(), n, 2)
     }

     function yi(t, n) {
          return Zr(t.getHours() % 12 || 12, n, 2)
     }

     function gi(t, n) {
          return Zr(1 + hh.count(xh(t), t), n, 3)
     }

     function mi(t, n) {
          return Zr(t.getMilliseconds(), n, 3)
     }

     function vi(t, n) {
          return Zr(t.getMonth() + 1, n, 2)
     }

     function bi(t, n) {
          return Zr(t.getMinutes(), n, 2)
     }

     function xi(t, n) {
          return Zr(t.getSeconds(), n, 2)
     }

     function Mi(t, n) {
          return Zr(dh.count(xh(t), t), n, 2)
     }

     function wi(t) {
          return t.getDay()
     }

     function Ti(t, n) {
          return Zr(ph.count(xh(t), t), n, 2)
     }

     function ki(t, n) {
          return Zr(t.getFullYear() % 100, n, 2)
     }

     function Si(t, n) {
          return Zr(t.getFullYear() % 1e4, n, 4)
     }

     function Ai(t) {
          var n = t.getTimezoneOffset();
          return (n > 0 ? "-" : (n *= -1, "+")) + Zr(n / 60 | 0, "0", 2) + Zr(n % 60, "0", 2)
     }

     function Ni(t, n) {
          return Zr(t.getUTCDate(), n, 2)
     }

     function Ci(t, n) {
          return Zr(t.getUTCHours(), n, 2)
     }

     function Ei(t, n) {
          return Zr(t.getUTCHours() % 12 || 12, n, 2)
     }

     function Pi(t, n) {
          return Zr(1 + Th.count(Fh(t), t), n, 3)
     }

     function Di(t, n) {
          return Zr(t.getUTCMilliseconds(), n, 3)
     }

     function Fi(t, n) {
          return Zr(t.getUTCMonth() + 1, n, 2)
     }

     function Li(t, n) {
          return Zr(t.getUTCMinutes(), n, 2)
     }

     function Ui(t, n) {
          return Zr(t.getUTCSeconds(), n, 2)
     }

     function Yi(t, n) {
          return Zr(kh.count(Fh(t), t), n, 2)
     }

     function Oi(t) {
          return t.getUTCDay()
     }

     function Hi(t, n) {
          return Zr(Sh.count(Fh(t), t), n, 2)
     }

     function Ri(t, n) {
          return Zr(t.getUTCFullYear() % 100, n, 2)
     }

     function ji(t, n) {
          return Zr(t.getUTCFullYear() % 1e4, n, 4)
     }

     function zi() {
          return "+0000"
     }

     function qi() {
          return "%"
     }

     function Ii(t) {
          return t.toISOString()
     }

     function Xi(t) {
          var n = new Date(t);
          return isNaN(n) ? null : n
     }

     function Ji() {
          function t(t) {
               var a = t + "", o = n.get(a);
               if (!o) {
                    if (i !== Mp)return i;
                    n.set(a, o = e.push(t))
               }
               return r[(o - 1) % r.length]
          }

          var n = L(), e = [], r = [], i = Mp;
          return t.domain = function (r) {
               if (!arguments.length)return e.slice();
               e = [], n = L();
               for (var i, a, o = -1, u = r.length; ++o < u;)n.has(a = (i = r[o]) + "") || n.set(a, e.push(i));
               return t
          }, t.range = function (n) {
               return arguments.length ? (r = xp.call(n), t) : r.slice()
          }, t.unknown = function (n) {
               return arguments.length ? (i = n, t) : i
          }, t.copy = function () {
               return Ji().domain(e).range(r).unknown(i)
          }, t
     }

     function Bi() {
          function t() {
               var t = i().length, r = o[1] < o[0], h = o[r - 0], d = o[1 - r];
               n = (d - h) / Math.max(1, t - s + 2 * c), u && (n = Math.floor(n)), h += (d - h - n * (t - s)) * f, e = n * (1 - s), u && (h = Math.round(h), e = Math.round(e));
               var p = l(t).map(function (t) {
                    return h + n * t
               });
               return a(r ? p.reverse() : p)
          }

          var n, e, r = Ji().unknown(void 0), i = r.domain, a = r.range, o = [0, 1], u = !1, s = 0, c = 0, f = .5;
          return delete r.unknown, r.domain = function (n) {
               return arguments.length ? (i(n), t()) : i()
          }, r.range = function (n) {
               return arguments.length ? (o = [+n[0], +n[1]], t()) : o.slice()
          }, r.rangeRound = function (n) {
               return o = [+n[0], +n[1]], u = !0, t()
          }, r.bandwidth = function () {
               return e
          }, r.step = function () {
               return n
          }, r.round = function (n) {
               return arguments.length ? (u = !!n, t()) : u
          }, r.padding = function (n) {
               return arguments.length ? (s = c = Math.max(0, Math.min(1, n)), t()) : s
          }, r.paddingInner = function (n) {
               return arguments.length ? (s = Math.max(0, Math.min(1, n)), t()) : s
          }, r.paddingOuter = function (n) {
               return arguments.length ? (c = Math.max(0, Math.min(1, n)), t()) : c
          }, r.align = function (n) {
               return arguments.length ? (f = Math.max(0, Math.min(1, n)), t()) : f
          }, r.copy = function () {
               return Bi().domain(i()).range(o).round(u).paddingInner(s).paddingOuter(c).align(f)
          }, t()
     }

     function Wi(t) {
          var n = t.copy;
          return t.padding = t.paddingOuter, delete t.paddingInner, delete t.paddingOuter, t.copy = function () {
               return Wi(n())
          }, t
     }

     function Vi() {
          return Wi(Bi().paddingInner(1))
     }

     function $i(t) {
          return function () {
               return t
          }
     }

     function Zi(t) {
          return +t
     }

     function Gi(t, n) {
          return (n -= t = +t) ? function (e) {
               return (e - t) / n
          } : $i(n)
     }

     function Ki(t) {
          return function (n, e) {
               var r = t(n = +n, e = +e);
               return function (t) {
                    return n >= t ? 0 : t >= e ? 1 : r(t)
               }
          }
     }

     function Qi(t) {
          return function (n, e) {
               var r = t(n = +n, e = +e);
               return function (t) {
                    return 0 >= t ? n : t >= 1 ? e : r(t)
               }
          }
     }

     function ta(t, n, e, r) {
          var i = t[0], a = t[1], o = n[0], u = n[1];
          return i > a ? (i = e(a, i), o = r(u, o)) : (i = e(i, a), o = r(o, u)), function (t) {
               return o(i(t))
          }
     }

     function na(t, n, e, r) {
          var i = Math.min(t.length, n.length) - 1, a = new Array(i), o = new Array(i), u = -1;
          for (t[i] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++u < i;)a[u] = e(t[u], t[u + 1]), o[u] = r(n[u], n[u + 1]);
          return function (n) {
               var e = gc(t, n, 1, i) - 1;
               return o[e](a[e](n))
          }
     }

     function ea(t, n) {
          return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())
     }

     function ra(t, n) {
          function e() {
               var e = Math.min(o.length, u.length) > 2 ? na : ta;
               return i = e(o, u, c ? Ki(t) : t, s), a = e(u, o, Gi, c ? Qi(n) : n), r
          }

          function r(t) {
               return i(+t)
          }

          var i, a, o = wp, u = wp, s = Ie, c = !1;
          return r.invert = function (t) {
               return a(+t)
          }, r.domain = function (t) {
               return arguments.length ? (o = bp.call(t, Zi), e()) : o.slice()
          }, r.range = function (t) {
               return arguments.length ? (u = xp.call(t), e()) : u.slice()
          }, r.rangeRound = function (t) {
               return u = xp.call(t), s = Xe, e()
          }, r.clamp = function (t) {
               return arguments.length ? (c = !!t, e()) : c
          }, r.interpolate = function (t) {
               return arguments.length ? (s = t, e()) : s
          }, e()
     }

     function ia(t, n, e) {
          var r, i = t[0], a = t[t.length - 1], o = d(i, a, null == n ? 10 : n);
          switch (e = Rr(null == e ? ",f" : e), e.type) {
               case"s":
                    var u = Math.max(Math.abs(i), Math.abs(a));
                    return null != e.precision || isNaN(r = Xr(o, u)) || (e.precision = r), Rd(e, u);
               case"":
               case"e":
               case"g":
               case"p":
               case"r":
                    null != e.precision || isNaN(r = Jr(o, Math.max(Math.abs(i), Math.abs(a)))) || (e.precision = r - ("e" === e.type));
                    break;
               case"f":
               case"%":
                    null != e.precision || isNaN(r = Ir(o)) || (e.precision = r - 2 * ("%" === e.type))
          }
          return Hd(e)
     }

     function aa(t) {
          var n = t.domain;
          return t.ticks = function (t) {
               var e = n();
               return h(e[0], e[e.length - 1], null == t ? 10 : t)
          }, t.tickFormat = function (t, e) {
               return ia(n(), t, e)
          }, t.nice = function (e) {
               var r = n(), i = r.length - 1, a = null == e ? 10 : e, o = r[0], u = r[i], s = d(o, u, a);
               return s && (s = d(Math.floor(o / s) * s, Math.ceil(u / s) * s, a), r[0] = Math.floor(o / s) * s, r[i] = Math.ceil(u / s) * s, n(r)), t
          }, t
     }

     function oa() {
          var t = ra(Gi, He);
          return t.copy = function () {
               return ea(t, oa())
          }, aa(t)
     }

     function ua() {
          function t(t) {
               return +t
          }

          var n = [0, 1];
          return t.invert = t, t.domain = t.range = function (e) {
               return arguments.length ? (n = bp.call(e, Zi), t) : n.slice()
          }, t.copy = function () {
               return ua().domain(n)
          }, aa(t)
     }

     function sa(t, n) {
          t = t.slice();
          var e, r = 0, i = t.length - 1, a = t[r], o = t[i];
          return a > o && (e = r, r = i, i = e, e = a, a = o, o = e), t[r] = n.floor(a), t[i] = n.ceil(o), t
     }

     function ca(t, n) {
          return (n = Math.log(n / t)) ? function (e) {
               return Math.log(e / t) / n
          } : $i(n)
     }

     function fa(t, n) {
          return 0 > t ? function (e) {
               return -Math.pow(-n, e) * Math.pow(-t, 1 - e)
          } : function (e) {
               return Math.pow(n, e) * Math.pow(t, 1 - e)
          }
     }

     function la(t) {
          return isFinite(t) ? +("1e" + t) : 0 > t ? 0 : t
     }

     function ha(t) {
          return 10 === t ? la : t === Math.E ? Math.exp : function (n) {
               return Math.pow(t, n)
          }
     }

     function da(t) {
          return t === Math.E ? Math.log : 10 === t && Math.log10 || 2 === t && Math.log2 || (t = Math.log(t), function (n) {
               return Math.log(n) / t
          })
     }

     function pa(t) {
          return function (n) {
               return -t(-n)
          }
     }

     function _a() {
          function t() {
               return i = da(r), a = ha(r), e()[0] < 0 && (i = pa(i), a = pa(a)), n
          }

          var n = ra(ca, fa).domain([1, 10]), e = n.domain, r = 10, i = da(10), a = ha(10);
          return n.base = function (n) {
               return arguments.length ? (r = +n, t()) : r
          }, n.domain = function (n) {
               return arguments.length ? (e(n), t()) : e()
          }, n.ticks = function (t) {
               var n, o = e(), u = o[0], s = o[o.length - 1];
               (n = u > s) && (d = u, u = s, s = d);
               var c, f, l, d = i(u), p = i(s), _ = null == t ? 10 : +t, y = [];
               if (!(r % 1) && _ > p - d) {
                    if (d = Math.round(d) - 1, p = Math.round(p) + 1, u > 0) {
                         for (; p > d; ++d)for (f = 1, c = a(d); r > f; ++f)if (l = c * f, !(u > l)) {
                              if (l > s)break;
                              y.push(l)
                         }
                    } else for (; p > d; ++d)for (f = r - 1, c = a(d); f >= 1; --f)if (l = c * f, !(u > l)) {
                         if (l > s)break;
                         y.push(l)
                    }
                    n && y.reverse()
               } else y = h(d, p, Math.min(p - d, _)).map(a);
               return y
          }, n.tickFormat = function (t, e) {
               if (null == e && (e = 10 === r ? ".0e" : ","), "function" != typeof e && (e = Hd(e)), t === 1 / 0)return e;
               null == t && (t = 10);
               var o = Math.max(1, r * t / n.ticks().length);
               return function (t) {
                    var n = t / a(Math.round(i(t)));
                    return r - .5 > n * r && (n *= r), o >= n ? e(t) : ""
               }
          }, n.nice = function () {
               return e(sa(e(), {
                    floor: function (t) {
                         return a(Math.floor(i(t)))
                    }, ceil: function (t) {
                         return a(Math.ceil(i(t)))
                    }
               }))
          }, n.copy = function () {
               return ea(n, _a().base(r))
          }, n
     }

     function ya(t, n) {
          return 0 > t ? -Math.pow(-t, n) : Math.pow(t, n)
     }

     function ga() {
          function t(t, n) {
               return (n = ya(n, e) - (t = ya(t, e))) ? function (r) {
                    return (ya(r, e) - t) / n
               } : $i(n)
          }

          function n(t, n) {
               return n = ya(n, e) - (t = ya(t, e)), function (r) {
                    return ya(t + n * r, 1 / e)
               }
          }

          var e = 1, r = ra(t, n), i = r.domain;
          return r.exponent = function (t) {
               return arguments.length ? (e = +t, i(i())) : e
          }, r.copy = function () {
               return ea(r, ga().exponent(e))
          }, aa(r)
     }

     function ma() {
          return ga().exponent(.5)
     }

     function va() {
          function t() {
               var t = 0, n = Math.max(1, i.length);
               for (a = new Array(n - 1); ++t < n;)a[t - 1] = g(r, t / n);
               return e
          }

          function e(t) {
               return isNaN(t = +t) ? void 0 : i[gc(a, t)]
          }

          var r = [], i = [], a = [];
          return e.invertExtent = function (t) {
               var n = i.indexOf(t);
               return 0 > n ? [NaN, NaN] : [n > 0 ? a[n - 1] : r[0], n < a.length ? a[n] : r[r.length - 1]]
          }, e.domain = function (e) {
               if (!arguments.length)return r.slice();
               r = [];
               for (var i, a = 0, o = e.length; o > a; ++a)i = e[a], null == i || isNaN(i = +i) || r.push(i);
               return r.sort(n), t()
          }, e.range = function (n) {
               return arguments.length ? (i = xp.call(n), t()) : i.slice()
          }, e.quantiles = function () {
               return a.slice()
          }, e.copy = function () {
               return va().domain(r).range(i)
          }, e
     }

     function ba() {
          function t(t) {
               return t >= t ? o[gc(a, t, 0, i)] : void 0
          }

          function n() {
               var n = -1;
               for (a = new Array(i); ++n < i;)a[n] = ((n + 1) * r - (n - i) * e) / (i + 1);
               return t
          }

          var e = 0, r = 1, i = 1, a = [.5], o = [0, 1];
          return t.domain = function (t) {
               return arguments.length ? (e = +t[0], r = +t[1], n()) : [e, r]
          }, t.range = function (t) {
               return arguments.length ? (i = (o = xp.call(t)).length - 1, n()) : o.slice()
          }, t.invertExtent = function (t) {
               var n = o.indexOf(t);
               return 0 > n ? [NaN, NaN] : 1 > n ? [e, a[0]] : n >= i ? [a[i - 1], r] : [a[n - 1], a[n]]
          }, t.copy = function () {
               return ba().domain([e, r]).range(o)
          }, aa(t)
     }

     function xa() {
          function t(t) {
               return t >= t ? e[gc(n, t, 0, r)] : void 0
          }

          var n = [.5], e = [0, 1], r = 1;
          return t.domain = function (i) {
               return arguments.length ? (n = xp.call(i), r = Math.min(n.length, e.length - 1), t) : n.slice()
          }, t.range = function (i) {
               return arguments.length ? (e = xp.call(i), r = Math.min(n.length, e.length - 1), t) : e.slice()
          }, t.invertExtent = function (t) {
               var r = e.indexOf(t);
               return [n[r - 1], n[r]]
          }, t.copy = function () {
               return xa().domain(n).range(e)
          }, t
     }

     function Ma(t) {
          return new Date(t)
     }

     function wa(t, n, r, i, a, o, u, s, c) {
          function f(e) {
               return (u(e) < e ? y : o(e) < e ? g : a(e) < e ? m : i(e) < e ? v : n(e) < e ? r(e) < e ? b : x : t(e) < e ? M : w)(e)
          }

          function l(n, r, i, a) {
               if (null == n && (n = 10), "number" == typeof n) {
                    var o = Math.abs(i - r) / n, u = e(function (t) {
                         return t[2]
                    }).right(T, o);
                    u === T.length ? (a = d(r / Ep, i / Ep, n), n = t) : u ? (u = T[o / T[u - 1][2] < T[u][2] / o ? u - 1 : u], a = u[1], n = u[0]) : (a = d(r, i, n), n = s)
               }
               return null == a ? n : n.every(a)
          }

          var h = ra(Gi, He), p = h.invert, _ = h.domain, y = c(".%L"), g = c(":%S"), m = c("%I:%M"), v = c("%I %p"), b = c("%a %d"), x = c("%b %d"), M = c("%B"), w = c("%Y"), T = [[u, 1, Tp], [u, 5, 5 * Tp], [u, 15, 15 * Tp], [u, 30, 30 * Tp], [o, 1, kp], [o, 5, 5 * kp], [o, 15, 15 * kp], [o, 30, 30 * kp], [a, 1, Sp], [a, 3, 3 * Sp], [a, 6, 6 * Sp], [a, 12, 12 * Sp], [i, 1, Ap], [i, 2, 2 * Ap], [r, 1, Np], [n, 1, Cp], [n, 3, 3 * Cp], [t, 1, Ep]];
          return h.invert = function (t) {
               return new Date(p(t))
          }, h.domain = function (t) {
               return arguments.length ? _(t) : _().map(Ma)
          }, h.ticks = function (t, n) {
               var e, r = _(), i = r[0], a = r[r.length - 1], o = i > a;
               return o && (e = i, i = a, a = e), e = l(t, i, a, n), e = e ? e.range(i, a + 1) : [], o ? e.reverse() : e
          }, h.tickFormat = function (t) {
               return null == t ? f : c(t)
          }, h.nice = function (t, n) {
               var e = _();
               return (t = l(t, e[0], e[e.length - 1], n)) ? _(sa(e, t)) : h
          }, h.copy = function () {
               return ea(h, wa(t, n, r, i, a, o, u, s, c))
          }, h
     }

     function Ta() {
          return wa(xh, bh, dh, hh, lh, fh, ch, eh, _p).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)])
     }

     function ka() {
          return wa(Fh, Dh, kh, Th, wh, Mh, Gh, $h, gp).domain([Date.UTC(2e3, 0, 1), Date.UTC(2e3, 0, 2)])
     }

     function Sa(t) {
          return t.match(/.{6}/g).map(function (t) {
               return "#" + t
          })
     }

     function Aa() {
          return Ji().range(Pp)
     }

     function Na() {
          return Ji().range(Dp)
     }

     function Ca() {
          return Ji().range(Fp)
     }

     function Ea() {
          return Ji().range(Lp)
     }

     function Pa() {
          return oa().interpolate(kl).range([Ce(300, .5, 0), Ce(-240, .5, 1)])
     }

     function Da(t) {
          function n(n) {
               var a = (n - e) / (r - e);
               return t(i ? Math.max(0, Math.min(1, a)) : a)
          }

          var e = 0, r = 1, i = !1;
          return n.domain = function (t) {
               return arguments.length ? (e = +t[0], r = +t[1], n) : [e, r]
          }, n.clamp = function (t) {
               return arguments.length ? (i = !!t, n) : i
          }, n.copy = function () {
               return Da(t).domain([e, r]).clamp(i)
          }, aa(n)
     }

     function Fa() {
          return Da(kl(Ce(-100, .75, .35), Ce(80, 1.5, .8)))
     }

     function La() {
          return Da(kl(Ce(260, .75, .35), Ce(80, 1.5, .8)))
     }

     function Ua() {
          var t = Ce();
          return Da(function (n) {
               (0 > n || n > 1) && (n -= Math.floor(n));
               var e = Math.abs(n - .5);
               return t.h = 360 * n - 100, t.s = 1.5 - 1.5 * e, t.l = .8 - .9 * e, t + ""
          })
     }

     function Ya(t) {
          var n = Da(function (n) {
               return t[Math.round(n * t.length - n)]
          }).clamp(!0);
          return delete n.clamp, n
     }

     function Oa() {
          return Ya(Up)
     }

     function Ha() {
          return Ya(Yp)
     }

     function Ra() {
          return Ya(Op)
     }

     function ja() {
          return Ya(Hp)
     }

     function za(t) {
          var n = t += "", e = n.indexOf(":");
          return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), jp.hasOwnProperty(n) ? {
               space: jp[n],
               local: t
          } : t
     }

     function qa(t) {
          return function () {
               var n = this.ownerDocument, e = this.namespaceURI;
               return e === Rp && n.documentElement.namespaceURI === Rp ? n.createElement(t) : n.createElementNS(e, t)
          }
     }

     function Ia(t) {
          return function () {
               return this.ownerDocument.createElementNS(t.space, t.local)
          }
     }

     function Xa(t) {
          var n = za(t);
          return (n.local ? Ia : qa)(n)
     }

     function Ja(t, n, e) {
          return t = Ba(t, n, e), function (n) {
               var e = n.relatedTarget;
               e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n)
          }
     }

     function Ba(n, e, r) {
          return function (i) {
               var a = t.event;
               t.event = i;
               try {
                    n.call(this, this.__data__, e, r)
               } finally {
                    t.event = a
               }
          }
     }

     function Wa(t) {
          return t.trim().split(/^|\s+/).map(function (t) {
               var n = "", e = t.indexOf(".");
               return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {type: t, name: n}
          })
     }

     function Va(t) {
          return function () {
               var n = this.__on;
               if (n) {
                    for (var e, r = 0, i = -1, a = n.length; a > r; ++r)e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++i] = e : this.removeEventListener(e.type, e.listener, e.capture);
                    ++i ? n.length = i : delete this.__on
               }
          }
     }

     function $a(t, n, e) {
          var r = Jp.hasOwnProperty(t.type) ? Ja : Ba;
          return function (i, a, o) {
               var u, s = this.__on, c = r(n, a, o);
               if (s)for (var f = 0, l = s.length; l > f; ++f)if ((u = s[f]).type === t.type && u.name === t.name)return this.removeEventListener(u.type, u.listener, u.capture), this.addEventListener(u.type, u.listener = c, u.capture = e), void(u.value = n);
               this.addEventListener(t.type, c, e), u = {
                    type: t.type,
                    name: t.name,
                    value: n,
                    listener: c,
                    capture: e
               }, s ? s.push(u) : this.__on = [u]
          }
     }

     function Za(t, n, e) {
          var r, i, a = Wa(t + ""), o = a.length;
          {
               if (!(arguments.length < 2)) {
                    for (u = n ? $a : Va, null == e && (e = !1), r = 0; o > r; ++r)this.each(u(a[r], n, e));
                    return this
               }
               var u = this.node().__on;
               if (u)for (var s, c = 0, f = u.length; f > c; ++c)for (r = 0, s = u[c]; o > r; ++r)if ((i = a[r]).type === s.type && i.name === s.name)return s.value
          }
     }

     function Ga() {
          for (var n, e = t.event; n = e.sourceEvent;)e = n;
          return e
     }

     function Ka(t) {
          return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView
     }

     function Qa(t) {
          return function () {
               return this.querySelector(t)
          }
     }

     function to(t) {
          "function" != typeof t && (t = Qa(t));
          for (var n = this._groups, e = n.length, r = new Array(e), i = 0; e > i; ++i)for (var a, o, u = n[i], s = u.length, c = r[i] = new Array(s), f = 0; s > f; ++f)(a = u[f]) && (o = t.call(a, a.__data__, f, u)) && ("__data__" in a && (o.__data__ = a.__data__), c[f] = o);
          return new yu(r, this._parents)
     }

     function no(t) {
          return function () {
               return this.querySelectorAll(t)
          }
     }

     function eo(t) {
          "function" != typeof t && (t = no(t));
          for (var n = this._groups, e = n.length, r = [], i = [], a = 0; e > a; ++a)for (var o, u = n[a], s = u.length, c = 0; s > c; ++c)(o = u[c]) && (r.push(t.call(o, o.__data__, c, u)), i.push(o));
          return new yu(r, i)
     }

     function ro(t) {
          "function" != typeof t && (t = Xp(t));
          for (var n = this._groups, e = n.length, r = new Array(e), i = 0; e > i; ++i)for (var a, o = n[i], u = o.length, s = r[i] = new Array(u), c = 0; u > c; ++c)(a = o[c]) && t.call(a, a.__data__, c, o) && (s[c] = a);
          return new yu(r, this._parents)
     }

     function io(t) {
          return function () {
               return t
          }
     }

     function ao(t, n, e, r, i, a) {
          for (var o, u = 0, s = n.length, c = a.length; c > u; ++u)(o = n[u]) ? (o.__data__ = a[u], r[u] = o) : e[u] = new so(t, a[u]);
          for (; s > u; ++u)(o = n[u]) && (i[u] = o)
     }

     function oo(t, n, e, r, i, a, o) {
          var u, s, c, f = {}, l = n.length, h = a.length, d = new Array(l);
          for (u = 0; l > u; ++u)(s = n[u]) && (d[u] = c = Wp + o.call(s, s.__data__, u, n), f[c] || (f[c] = s));
          for (u = 0; h > u; ++u)c = Wp + o.call(t, a[u], u, a), (s = f[c]) ? s !== !0 && (r[u] = s, s.__data__ = a[u]) : e[u] = new so(t, a[u]), f[c] = !0;
          for (u = 0; l > u; ++u)(s = n[u]) && f[d[u]] !== !0 && (i[u] = s)
     }

     function uo(t, n) {
          if (!t)return d = new Array(this.size()), c = -1, this.each(function (t) {
               d[++c] = t
          }), d;
          var e = n ? oo : ao, r = this._parents, i = this._groups;
          "function" != typeof t && (t = io(t));
          for (var a = i.length, o = new Array(a), u = new Array(a), s = new Array(a), c = 0; a > c; ++c) {
               var f = r[c], l = i[c], h = l.length, d = t.call(f, f && f.__data__, c, r), p = d.length, _ = u[c] = new Array(p), y = o[c] = new Array(p), g = s[c] = new Array(h);
               e(f, l, _, y, g, d, n);
               for (var m, v, b = 0, x = 0; p > b; ++b)if (m = _[b]) {
                    for (b >= x && (x = b + 1); !(v = y[x]) && ++x < p;);
                    m._next = v || null
               }
          }
          return o = new yu(o, r), o._enter = u, o._exit = s, o
     }

     function so(t, n) {
          this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n
     }

     function co(t) {
          return new Array(t.length)
     }

     function fo() {
          return new yu(this._enter || this._groups.map(co), this._parents)
     }

     function lo() {
          return new yu(this._exit || this._groups.map(co), this._parents)
     }

     function ho(t) {
          for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), u = 0; a > u; ++u)for (var s, c = n[u], f = e[u], l = c.length, h = o[u] = new Array(l), d = 0; l > d; ++d)(s = c[d] || f[d]) && (h[d] = s);
          for (; r > u; ++u)o[u] = n[u];
          return new yu(o, this._parents)
     }

     function po() {
          for (var t = this._groups, n = -1, e = t.length; ++n < e;)for (var r, i = t[n], a = i.length - 1, o = i[a]; --a >= 0;)(r = i[a]) && (o && o !== r.nextSibling && o.parentNode.insertBefore(r, o), o = r);
          return this
     }

     function _o(t) {
          function n(n, e) {
               return n && e ? t(n.__data__, e.__data__) : !n - !e
          }

          t || (t = yo);
          for (var e = this._groups, r = e.length, i = new Array(r), a = 0; r > a; ++a) {
               for (var o, u = e[a], s = u.length, c = i[a] = new Array(s), f = 0; s > f; ++f)(o = u[f]) && (c[f] = o);
               c.sort(n)
          }
          return new yu(i, this._parents).order()
     }

     function yo(t, n) {
          return n > t ? -1 : t > n ? 1 : t >= n ? 0 : NaN
     }

     function go() {
          var t = arguments[0];
          return arguments[0] = this, t.apply(null, arguments), this
     }

     function mo() {
          var t = new Array(this.size()), n = -1;
          return this.each(function () {
               t[++n] = this
          }), t
     }

     function vo() {
          for (var t = this._groups, n = 0, e = t.length; e > n; ++n)for (var r = t[n], i = 0, a = r.length; a > i; ++i) {
               var o = r[i];
               if (o)return o
          }
          return null
     }

     function bo() {
          var t = 0;
          return this.each(function () {
               ++t
          }), t
     }

     function xo() {
          return !this.node()
     }

     function Mo(t) {
          for (var n = this._groups, e = 0, r = n.length; r > e; ++e)for (var i, a = n[e], o = 0, u = a.length; u > o; ++o)(i = a[o]) && t.call(i, i.__data__, o, a);
          return this
     }

     function wo(t) {
          return function () {
               this.removeAttribute(t)
          }
     }

     function To(t) {
          return function () {
               this.removeAttributeNS(t.space, t.local)
          }
     }

     function ko(t, n) {
          return function () {
               this.setAttribute(t, n)
          }
     }

     function So(t, n) {
          return function () {
               this.setAttributeNS(t.space, t.local, n)
          }
     }

     function Ao(t, n) {
          return function () {
               var e = n.apply(this, arguments);
               null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
          }
     }

     function No(t, n) {
          return function () {
               var e = n.apply(this, arguments);
               null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
          }
     }

     function Co(t, n) {
          var e = za(t);
          if (arguments.length < 2) {
               var r = this.node();
               return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e)
          }
          return this.each((null == n ? e.local ? To : wo : "function" == typeof n ? e.local ? No : Ao : e.local ? So : ko)(e, n))
     }

     function Eo(t) {
          return function () {
               this.style.removeProperty(t)
          }
     }

     function Po(t, n, e) {
          return function () {
               this.style.setProperty(t, n, e)
          }
     }

     function Do(t, n, e) {
          return function () {
               var r = n.apply(this, arguments);
               null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
          }
     }

     function Fo(t, n, e) {
          var r;
          return arguments.length > 1 ? this.each((null == n ? Eo : "function" == typeof n ? Do : Po)(t, n, null == e ? "" : e)) : Ka(r = this.node()).getComputedStyle(r, null).getPropertyValue(t)
     }

     function Lo(t) {
          return function () {
               delete this[t]
          }
     }

     function Uo(t, n) {
          return function () {
               this[t] = n
          }
     }

     function Yo(t, n) {
          return function () {
               var e = n.apply(this, arguments);
               null == e ? delete this[t] : this[t] = e
          }
     }

     function Oo(t, n) {
          return arguments.length > 1 ? this.each((null == n ? Lo : "function" == typeof n ? Yo : Uo)(t, n)) : this.node()[t]
     }

     function Ho(t) {
          return t.trim().split(/^|\s+/)
     }

     function Ro(t) {
          return t.classList || new jo(t)
     }

     function jo(t) {
          this._node = t, this._names = Ho(t.getAttribute("class") || "")
     }

     function zo(t, n) {
          for (var e = Ro(t), r = -1, i = n.length; ++r < i;)e.add(n[r])
     }

     function qo(t, n) {
          for (var e = Ro(t), r = -1, i = n.length; ++r < i;)e.remove(n[r])
     }

     function Io(t) {
          return function () {
               zo(this, t)
          }
     }

     function Xo(t) {
          return function () {
               qo(this, t)
          }
     }

     function Jo(t, n) {
          return function () {
               (n.apply(this, arguments) ? zo : qo)(this, t)
          }
     }

     function Bo(t, n) {
          var e = Ho(t + "");
          if (arguments.length < 2) {
               for (var r = Ro(this.node()), i = -1, a = e.length; ++i < a;)if (!r.contains(e[i]))return !1;
               return !0
          }
          return this.each(("function" == typeof n ? Jo : n ? Io : Xo)(e, n))
     }

     function Wo() {
          this.textContent = ""
     }

     function Vo(t) {
          return function () {
               this.textContent = t
          }
     }

     function $o(t) {
          return function () {
               var n = t.apply(this, arguments);
               this.textContent = null == n ? "" : n
          }
     }

     function Zo(t) {
          return arguments.length ? this.each(null == t ? Wo : ("function" == typeof t ? $o : Vo)(t)) : this.node().textContent
     }

     function Go() {
          this.innerHTML = ""
     }

     function Ko(t) {
          return function () {
               this.innerHTML = t
          }
     }

     function Qo(t) {
          return function () {
               var n = t.apply(this, arguments);
               this.innerHTML = null == n ? "" : n
          }
     }

     function tu(t) {
          return arguments.length ? this.each(null == t ? Go : ("function" == typeof t ? Qo : Ko)(t)) : this.node().innerHTML
     }

     function nu() {
          this.parentNode.appendChild(this)
     }

     function eu() {
          return this.each(nu)
     }

     function ru() {
          this.parentNode.insertBefore(this, this.parentNode.firstChild)
     }

     function iu() {
          return this.each(ru)
     }

     function au(t) {
          return function () {
               return this.appendChild(t.apply(this, arguments))
          }
     }

     function ou(t, n) {
          return function () {
               return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null)
          }
     }

     function uu() {
          return null
     }

     function su(t, n) {
          var e = "function" == typeof t ? t : Xa(t);
          return this.select(arguments.length < 2 ? au(e) : ou(e, null == n ? uu : "function" == typeof n ? n : Qa(n)))
     }

     function cu() {
          var t = this.parentNode;
          t && t.removeChild(this)
     }

     function fu() {
          return this.each(cu)
     }

     function lu(t) {
          return arguments.length ? this.property("__data__", t) : this.node().__data__
     }

     function hu(t, n, e) {
          var r = Ka(t), i = r.CustomEvent;
          i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i)
     }

     function du(t, n) {
          return function () {
               return hu(this, t, n)
          }
     }

     function pu(t, n) {
          return function () {
               return hu(this, t, n.apply(this, arguments))
          }
     }

     function _u(t, n) {
          return this.each(("function" == typeof n ? pu : du)(t, n))
     }

     function yu(t, n) {
          this._groups = t, this._parents = n
     }

     function gu() {
          return new yu([[document.documentElement]], Vp)
     }

     function mu(t) {
          return "string" == typeof t ? new yu([[document.querySelector(t)]], [document.documentElement]) : new yu([[t]], Vp)
     }

     function vu(t, n) {
          var e = t.ownerSVGElement || t;
          if (e.createSVGPoint) {
               var r = e.createSVGPoint();
               if (0 > $p) {
                    var i = Ka(t);
                    if (i.scrollX || i.scrollY) {
                         e = mu(i.document.body).append("svg").style({
                              position: "absolute",
                              top: 0,
                              left: 0,
                              margin: 0,
                              padding: 0,
                              border: "none"
                         }, "important");
                         var a = e.node().getScreenCTM();
                         $p = !(a.f || a.e), e.remove()
                    }
               }
               return $p ? (r.x = n.pageX, r.y = n.pageY) : (r.x = n.clientX, r.y = n.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
          }
          var o = t.getBoundingClientRect();
          return [n.clientX - o.left - t.clientLeft, n.clientY - o.top - t.clientTop]
     }

     function bu(t, n) {
          return null == n && (n = Ga()), n.changedTouches && (n = n.changedTouches[0]), vu(t, n)
     }

     function xu(t) {
          return "string" == typeof t ? new yu([document.querySelectorAll(t)], [document.documentElement]) : new yu([t], Vp)
     }

     function Mu(t, n, e) {
          arguments.length < 3 && (e = n, n = Ga().changedTouches);
          for (var r, i = 0, a = n ? n.length : 0; a > i; ++i)if ((r = n[i]).identifier === e)return vu(t, r);
          return null
     }

     function wu(t, n) {
          null == n && (n = Ga().touches);
          for (var e = 0, r = n ? n.length : 0, i = new Array(r); r > e; ++e)i[e] = vu(t, n[e]);
          return i
     }

     function Tu(t, n, e, r, i, a) {
          var o = t.__transition;
          if (o) {
               if (e in o)return
          } else t.__transition = {};
          Nu(t, e, {
               name: n,
               index: r,
               group: i,
               on: Zp,
               tween: Gp,
               time: a.time,
               delay: a.delay,
               duration: a.duration,
               ease: a.ease,
               timer: null,
               state: Kp
          })
     }

     function ku(t, n) {
          var e = t.__transition;
          if (!e || !(e = e[n]) || e.state > Kp)throw new Error("too late");
          return e
     }

     function Su(t, n) {
          var e = t.__transition;
          if (!e || !(e = e[n]) || e.state > t_)throw new Error("too late");
          return e
     }

     function Au(t, n) {
          var e = t.__transition;
          if (!e || !(e = e[n]))throw new Error("too late");
          return e
     }

     function Nu(t, n, e) {
          function r(t) {
               e.state = Qp, e.delay <= t ? i(t - e.delay) : e.timer.restart(i, e.delay, e.time)
          }

          function i(r) {
               var i, s, c, f;
               for (i in u)f = u[i], f.name === e.name && (f.state === n_ ? (f.state = r_, f.timer.stop(), f.on.call("interrupt", t, t.__data__, f.index, f.group), delete u[i]) : n > +i && (f.state = r_, f.timer.stop(), delete u[i]));
               if (Nr(function () {
                         e.state === n_ && (e.timer.restart(a, e.delay, e.time), a(r))
                    }), e.state = t_, e.on.call("start", t, t.__data__, e.index, e.group), e.state === t_) {
                    for (e.state = n_, o = new Array(c = e.tween.length), i = 0, s = -1; c > i; ++i)(f = e.tween[i].value.call(t, t.__data__, e.index, e.group)) && (o[++s] = f);
                    o.length = s + 1
               }
          }

          function a(r) {
               for (var i = r < e.duration ? e.ease.call(null, r / e.duration) : (e.state = e_, 1), a = -1, s = o.length; ++a < s;)o[a].call(null, i);
               if (e.state === e_) {
                    e.state = r_, e.timer.stop(), e.on.call("end", t, t.__data__, e.index, e.group);
                    for (a in u)if (+a !== n)return void delete u[n];
                    delete t.__transition
               }
          }

          var o, u = t.__transition;
          u[n] = e, e.timer = Mr(r, 0, e.time)
     }

     function Cu(t) {
          return t = null == t ? null : t + "", this.each(function () {
               var n, e, r, i = this.__transition, a = !0;
               if (i) {
                    for (r in i)(n = i[r]).name === t ? (e = n.state === n_, n.state = r_, n.timer.stop(), e && n.on.call("interrupt", this, this.__data__, n.index, n.group), delete i[r]) : a = !1;
                    a && delete this.__transition
               }
          })
     }

     function Eu(t, n) {
          var e, r;
          return function () {
               var i = Su(this, t), a = i.tween;
               if (a !== e) {
                    r = e = a;
                    for (var o = 0, u = r.length; u > o; ++o)if (r[o].name === n) {
                         r = r.slice(), r.splice(o, 1);
                         break
                    }
               }
               i.tween = r
          }
     }

     function Pu(t, n, e) {
          var r, i;
          if ("function" != typeof e)throw new Error;
          return function () {
               var a = Su(this, t), o = a.tween;
               if (o !== r) {
                    i = (r = o).slice();
                    for (var u = {name: n, value: e}, s = 0, c = i.length; c > s; ++s)if (i[s].name === n) {
                         i[s] = u;
                         break
                    }
                    s === c && i.push(u)
               }
               a.tween = i
          }
     }

     function Du(t, n) {
          var e = this._id;
          if (t += "", arguments.length < 2) {
               for (var r, i = Au(this.node(), e).tween, a = 0, o = i.length; o > a; ++a)if ((r = i[a]).name === t)return r.value;
               return null
          }
          return this.each((null == n ? Eu : Pu)(e, t, n))
     }

     function Fu(t, n, e) {
          var r = t._id;
          return t.each(function () {
               var t = Su(this, r);
               (t.value || (t.value = {}))[n] = e.apply(this, arguments)
          }), function (t) {
               return Au(t, r).value[n]
          }
     }

     function Lu(t, n) {
          var e;
          return ("number" == typeof n ? He : n instanceof ue ? dl : (e = ue(n)) ? (n = e, dl) : qe)(t, n)
     }

     function Uu(t) {
          return function () {
               this.removeAttribute(t)
          }
     }

     function Yu(t) {
          return function () {
               this.removeAttributeNS(t.space, t.local)
          }
     }

     function Ou(t, n, e) {
          var r, i;
          return function () {
               var a = this.getAttribute(t);
               return a === e ? null : a === r ? i : i = n(r = a, e)
          }
     }

     function Hu(t, n, e) {
          var r, i;
          return function () {
               var a = this.getAttributeNS(t.space, t.local);
               return a === e ? null : a === r ? i : i = n(r = a, e)
          }
     }

     function Ru(t, n, e) {
          var r, i, a;
          return function () {
               var o, u = e(this);
               return null == u ? void this.removeAttribute(t) : (o = this.getAttribute(t), o === u ? null : o === r && u === i ? a : a = n(r = o, i = u))
          }
     }

     function ju(t, n, e) {
          var r, i, a;
          return function () {
               var o, u = e(this);
               return null == u ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), o === u ? null : o === r && u === i ? a : a = n(r = o, i = u))
          }
     }

     function zu(t, n) {
          var e = za(t), r = "transform" === e ? vl : Lu;
          return this.attrTween(t, "function" == typeof n ? (e.local ? ju : Ru)(e, r, Fu(this, "attr." + t, n)) : null == n ? (e.local ? Yu : Uu)(e) : (e.local ? Hu : Ou)(e, r, n))
     }

     function qu(t, n) {
          function e() {
               var e = this, r = n.apply(e, arguments);
               return r && function (n) {
                         e.setAttributeNS(t.space, t.local, r(n))
                    }
          }

          return e._value = n, e
     }

     function Iu(t, n) {
          function e() {
               var e = this, r = n.apply(e, arguments);
               return r && function (n) {
                         e.setAttribute(t, r(n))
                    }
          }

          return e._value = n, e
     }

     function Xu(t, n) {
          var e = "attr." + t;
          if (arguments.length < 2)return (e = this.tween(e)) && e._value;
          if (null == n)return this.tween(e, null);
          if ("function" != typeof n)throw new Error;
          var r = za(t);
          return this.tween(e, (r.local ? qu : Iu)(r, n))
     }

     function Ju(t, n) {
          return function () {
               ku(this, t).delay = +n.apply(this, arguments)
          }
     }

     function Bu(t, n) {
          return n = +n, function () {
               ku(this, t).delay = n
          }
     }

     function Wu(t) {
          var n = this._id;
          return arguments.length ? this.each(("function" == typeof t ? Ju : Bu)(n, t)) : Au(this.node(), n).delay
     }

     function Vu(t, n) {
          return function () {
               Su(this, t).duration = +n.apply(this, arguments)
          }
     }

     function $u(t, n) {
          return n = +n, function () {
               Su(this, t).duration = n
          }
     }

     function Zu(t) {
          var n = this._id;
          return arguments.length ? this.each(("function" == typeof t ? Vu : $u)(n, t)) : Au(this.node(), n).duration
     }

     function Gu(t, n) {
          if ("function" != typeof n)throw new Error;
          return function () {
               Su(this, t).ease = n
          }
     }

     function Ku(t) {
          var n = this._id;
          return arguments.length ? this.each(Gu(n, t)) : Au(this.node(), n).ease
     }

     function Qu(t) {
          "function" != typeof t && (t = Xp(t));
          for (var n = this._groups, e = n.length, r = new Array(e), i = 0; e > i; ++i)for (var a, o = n[i], u = o.length, s = r[i] = new Array(u), c = 0; u > c; ++c)(a = o[c]) && t.call(a, a.__data__, c, o) && (s[c] = a);
          return new bs(r, this._parents, this._name, this._id)
     }

     function ts(t) {
          if (t._id !== this._id)throw new Error;
          for (var n = this._groups, e = t._groups, r = n.length, i = e.length, a = Math.min(r, i), o = new Array(r), u = 0; a > u; ++u)for (var s, c = n[u], f = e[u], l = c.length, h = o[u] = new Array(l), d = 0; l > d; ++d)(s = c[d] || f[d]) && (h[d] = s);
          for (; r > u; ++u)o[u] = n[u];
          return new bs(o, this._parents, this._name, this._id)
     }

     function ns(t) {
          return (t + "").trim().split(/^|\s+/).every(function (t) {
               var n = t.indexOf(".");
               return n >= 0 && (t = t.slice(0, n)), !t || "start" === t
          })
     }

     function es(t, n, e) {
          var r, i, a = ns(n) ? ku : Su;
          return function () {
               var o = a(this, t), u = o.on;
               u !== r && (i = (r = u).copy()).on(n, e), o.on = i
          }
     }

     function rs(t, n) {
          var e = this._id;
          return arguments.length < 2 ? Au(this.node(), e).on.on(t) : this.each(es(e, t, n))
     }

     function is(t) {
          return function () {
               var n = this.parentNode;
               for (var e in this.__transition)if (+e !== t)return;
               n && n.removeChild(this)
          }
     }

     function as() {
          return this.on("end.remove", is(this._id))
     }

     function os(t) {
          var n = this._name, e = this._id;
          "function" != typeof t && (t = Qa(t));
          for (var r = this._groups, i = r.length, a = new Array(i), o = 0; i > o; ++o)for (var u, s, c = r[o], f = c.length, l = a[o] = new Array(f), h = 0; f > h; ++h)(u = c[h]) && (s = t.call(u, u.__data__, h, c)) && ("__data__" in u && (s.__data__ = u.__data__), l[h] = s, Tu(l[h], n, e, h, l, Au(u, e)));
          return new bs(a, this._parents, n, e)
     }

     function us(t) {
          var n = this._name, e = this._id;
          "function" != typeof t && (t = no(t));
          for (var r = this._groups, i = r.length, a = [], o = [], u = 0; i > u; ++u)for (var s, c = r[u], f = c.length, l = 0; f > l; ++l)if (s = c[l]) {
               for (var h, d = t.call(s, s.__data__, l, c), p = Au(s, e), _ = 0, y = d.length; y > _; ++_)(h = d[_]) && Tu(h, n, e, _, d, p);
               a.push(d), o.push(s)
          }
          return new bs(a, o, n, e)
     }

     function ss() {
          return new i_(this._groups, this._parents)
     }

     function cs(t, n) {
          var e, r, i;
          return function () {
               var a = Ka(this).getComputedStyle(this, null), o = a.getPropertyValue(t), u = (this.style.removeProperty(t), a.getPropertyValue(t));
               return o === u ? null : o === e && u === r ? i : i = n(e = o, r = u)
          }
     }

     function fs(t) {
          return function () {
               this.style.removeProperty(t)
          }
     }

     function ls(t, n, e) {
          var r, i;
          return function () {
               var a = Ka(this).getComputedStyle(this, null).getPropertyValue(t);
               return a === e ? null : a === r ? i : i = n(r = a, e)
          }
     }

     function hs(t, n, e) {
          var r, i, a;
          return function () {
               var o = Ka(this).getComputedStyle(this, null), u = o.getPropertyValue(t), s = e(this);
               return null == s && (this.style.removeProperty(t), s = o.getPropertyValue(t)), u === s ? null : u === r && s === i ? a : a = n(r = u, i = s)
          }
     }

     function ds(t, n, e) {
          var r = "transform" == (t += "") ? ml : Lu;
          return null == n ? this.styleTween(t, cs(t, r)).on("end.style." + t, fs(t)) : this.styleTween(t, "function" == typeof n ? hs(t, r, Fu(this, "style." + t, n)) : ls(t, r, n), e)
     }

     function ps(t, n, e) {
          function r() {
               var r = this, i = n.apply(r, arguments);
               return i && function (n) {
                         r.style.setProperty(t, i(n), e)
                    }
          }

          return r._value = n, r
     }

     function _s(t, n, e) {
          var r = "style." + (t += "");
          if (arguments.length < 2)return (r = this.tween(r)) && r._value;
          if (null == n)return this.tween(r, null);
          if ("function" != typeof n)throw new Error;
          return this.tween(r, ps(t, n, null == e ? "" : e))
     }

     function ys(t) {
          return function () {
               this.textContent = t
          }
     }

     function gs(t) {
          return function () {
               var n = t(this);
               this.textContent = null == n ? "" : n
          }
     }

     function ms(t) {
          return this.tween("text", "function" == typeof t ? gs(Fu(this, "text", t)) : ys(null == t ? "" : t + ""))
     }

     function vs() {
          for (var t = this._name, n = this._id, e = Ms(), r = this._groups, i = r.length, a = 0; i > a; ++a)for (var o, u = r[a], s = u.length, c = 0; s > c; ++c)if (o = u[c]) {
               var f = Au(o, n);
               Tu(o, t, e, c, u, {time: f.time + f.delay + f.duration, delay: 0, duration: f.duration, ease: f.ease})
          }
          return new bs(r, this._parents, t, e)
     }

     function bs(t, n, e, r) {
          this._groups = t, this._parents = n, this._name = e, this._id = r
     }

     function xs(t) {
          return gu().transition(t)
     }

     function Ms() {
          return ++a_
     }

     function ws(t, n) {
          for (var e; !(e = t.__transition) || !(e = e[n]);)if (!(t = t.parentNode))return u_.time = vr(), u_;
          return e
     }

     function Ts(t) {
          var n, e;
          t instanceof bs ? (n = t._id, t = t._name) : (n = Ms(), (e = u_).time = vr(), t = null == t ? null : t + "");
          for (var r = this._groups, i = r.length, a = 0; i > a; ++a)for (var o, u = r[a], s = u.length, c = 0; s > c; ++c)(o = u[c]) && Tu(o, t, n, c, u, e || ws(o, n));
          return new bs(r, this._parents, t, n)
     }

     function ks(t, n) {
          var e, r, i = t.__transition;
          if (i) {
               n = null == n ? null : n + "";
               for (r in i)if ((e = i[r]).state > Qp && e.name === n)return new bs([[t]], s_, n, +r)
          }
          return null
     }

     function Ss(t) {
          return t
     }

     function As(t, n, e) {
          var r = t(e);
          return "translate(" + (isFinite(r) ? r : n(e)) + ",0)"
     }

     function Ns(t, n, e) {
          var r = t(e);
          return "translate(0," + (isFinite(r) ? r : n(e)) + ")"
     }

     function Cs(t) {
          var n = t.bandwidth() / 2;
          return function (e) {
               return t(e) + n
          }
     }

     function Es(t, n) {
          function e(e) {
               var c = null == i ? n.ticks ? n.ticks.apply(n, r) : n.domain() : i, f = null == a ? n.tickFormat ? n.tickFormat.apply(n, r) : Ss : a, l = Math.max(o, 0) + s, h = t === f_ || t === h_ ? As : Ns, d = n.range(), p = d[0], _ = d[d.length - 1], y = (n.bandwidth ? Cs : Ss)(n.copy()), g = e.selection ? e.selection() : e, m = g.selectAll(".domain").data([null]), v = g.selectAll(".tick").data(c, n).order(), b = v.exit(), x = v.enter().append("g", ".domain").attr("class", "tick"), M = v.select("line"), w = v.select("text");
               switch (m = m.merge(m.enter().append("path").attr("class", "domain")), v = v.merge(x), M = M.merge(x.append("line")), w = w.merge(x.append("text")), e !== g && (m = m.transition(e), v = v.transition(e), b = b.transition(e).style("opacity", p_).attr("transform", function (t) {
                    return h(y, this.parentNode.__axis || y, t)
               }), x.style("opacity", p_).attr("transform", function (t) {
                    return h(this.parentNode.__axis || y, y, t)
               }), M = M.transition(e), w = w.transition(e)), v.style("opacity", 1).attr("transform", function (t) {
                    return h(y, y, t)
               }), b.remove(), w.text(f), t) {
                    case f_:
                         m.attr("d", "M" + p + "," + -u + "V0H" + _ + "V" + -u), M.attr("x2", 0).attr("y2", -o), w.attr("x", 0).attr("y", -l).attr("dy", "0em").style("text-anchor", "middle");
                         break;
                    case l_:
                         m.attr("d", "M" + u + "," + p + "H0V" + _ + "H" + u), M.attr("y2", 0).attr("x2", o), w.attr("y", 0).attr("x", l).attr("dy", ".32em").style("text-anchor", "start");
                         break;
                    case h_:
                         m.attr("d", "M" + p + "," + u + "V0H" + _ + "V" + u), M.attr("x2", 0).attr("y2", o), w.attr("x", 0).attr("y", l).attr("dy", ".71em").style("text-anchor", "middle");
                         break;
                    case d_:
                         m.attr("d", "M" + -u + "," + p + "H0V" + _ + "H" + -u), M.attr("y2", 0).attr("x2", -o), w.attr("y", 0).attr("x", -l).attr("dy", ".32em").style("text-anchor", "end")
               }
               g.each(function () {
                    this.__axis = y
               })
          }

          var r = [], i = null, a = null, o = 6, u = 6, s = 3;
          return e.scale = function (t) {
               return arguments.length ? (n = t, e) : n
          }, e.ticks = function () {
               return r = c_.call(arguments), e
          }, e.tickArguments = function (t) {
               return arguments.length ? (r = null == t ? [] : c_.call(t), e) : r.slice()
          }, e.tickValues = function (t) {
               return arguments.length ? (i = null == t ? null : c_.call(t), e) : i && i.slice()
          }, e.tickFormat = function (t) {
               return arguments.length ? (a = t, e) : a
          }, e.tickSize = function (t) {
               return arguments.length ? (o = u = +t, e) : o
          }, e.tickSizeInner = function (t) {
               return arguments.length ? (o = +t, e) : o
          }, e.tickSizeOuter = function (t) {
               return arguments.length ? (u = +t, e) : u
          }, e.tickPadding = function (t) {
               return arguments.length ? (s = +t, e) : s
          }, e
     }

     function Ps(t) {
          return Es(f_, t)
     }

     function Ds(t) {
          return Es(l_, t)
     }

     function Fs(t) {
          return Es(h_, t)
     }

     function Ls(t) {
          return Es(d_, t)
     }

     function Us(t) {
          return function () {
               return t
          }
     }

     function Ys(t) {
          return t[0]
     }

     function Os(t) {
          return t[1]
     }

     function Hs() {
          this._ = null
     }

     function Rs(t) {
          t.U = t.C = t.L = t.R = t.P = t.N = null
     }

     function js(t, n) {
          var e = n, r = n.R, i = e.U;
          i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e
     }

     function zs(t, n) {
          var e = n, r = n.L, i = e.U;
          i ? i.L === e ? i.L = r : i.R = r : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e
     }

     function qs(t) {
          for (; t.L;)t = t.L;
          return t
     }

     function Is(t, n, e, r) {
          var i = [null, null], a = v_.push(i) - 1;
          return i.left = t, i.right = n, e && Js(i, t, n, e), r && Js(i, n, t, r), g_[t.index].halfedges.push(a), g_[n.index].halfedges.push(a), i
     }

     function Xs(t, n, e) {
          var r = [n, e];
          return r.left = t, r
     }

     function Js(t, n, e, r) {
          t[0] || t[1] ? t.left === e ? t[1] = r : t[0] = r : (t[0] = r, t.left = n, t.right = e)
     }

     function Bs(t, n, e, r, i) {
          var a, o, u = t[0], s = t[1], c = u[0], f = u[1], l = s[0], h = s[1], d = 0, p = 1, _ = l - c, y = h - f;
          if (o = n - c, _ || !(o > 0)) {
               if (o /= _, 0 > _) {
                    if (d > o)return;
                    p > o && (p = o)
               } else if (_ > 0) {
                    if (o > p)return;
                    o > d && (d = o)
               }
               if (o = r - c, _ || !(0 > o)) {
                    if (o /= _, 0 > _) {
                         if (o > p)return;
                         o > d && (d = o)
                    } else if (_ > 0) {
                         if (d > o)return;
                         p > o && (p = o)
                    }
                    if (o = e - f, y || !(o > 0)) {
                         if (o /= y, 0 > y) {
                              if (d > o)return;
                              p > o && (p = o)
                         } else if (y > 0) {
                              if (o > p)return;
                              o > d && (d = o)
                         }
                         if (o = i - f, y || !(0 > o)) {
                              if (o /= y, 0 > y) {
                                   if (o > p)return;
                                   o > d && (d = o)
                              } else if (y > 0) {
                                   if (d > o)return;
                                   p > o && (p = o)
                              }
                              return d > 0 || 1 > p ? (a = t.left, o = t.right, d > 0 && (u = [c + d * _, f + d * y]), 1 > p && (s = [c + p * _, f + p * y]), t = [u, s], t.left = a, t.right = o, t) : t
                         }
                    }
               }
          }
     }

     function Ws(t, n, e, r, i) {
          var a = t[1];
          if (a)return t;
          var o, u, s = t[0], c = t.left, f = t.right, l = c[0], h = c[1], d = f[0], p = f[1], _ = (l + d) / 2, y = (h + p) / 2;
          if (p === h) {
               if (n > _ || _ >= r)return;
               if (l > d) {
                    if (s) {
                         if (s[1] >= i)return
                    } else s = [_, e];
                    a = [_, i]
               } else {
                    if (s) {
                         if (s[1] < e)return
                    } else s = [_, i];
                    a = [_, e]
               }
          } else if (o = (l - d) / (p - h), u = y - o * _, -1 > o || o > 1)if (l > d) {
               if (s) {
                    if (s[1] >= i)return
               } else s = [(e - u) / o, e];
               a = [(i - u) / o, i]
          } else {
               if (s) {
                    if (s[1] < e)return
               } else s = [(i - u) / o, i];
               a = [(e - u) / o, e]
          } else if (p > h) {
               if (s) {
                    if (s[0] >= r)return
               } else s = [n, o * n + u];
               a = [r, o * r + u]
          } else {
               if (s) {
                    if (s[0] < n)return
               } else s = [r, o * r + u];
               a = [n, o * n + u]
          }
          return t = [s, a], t.left = c, t.right = f, t
     }

     function Vs(t, n, e, r) {
          for (var i, a = v_.length, o = new Array(a); a--;)(i = Ws(v_[a], t, n, e, r)) && (i = Bs(i, t, n, e, r)) && (Math.abs(i[0][0] - i[1][0]) > M_ || Math.abs(i[0][1] - i[1][1]) > M_) && (o[a] = i);
          return o
     }

     function $s(t) {
          return g_[t.index] = {site: t, halfedges: []}
     }

     function Zs(t, n) {
          var e = t.site, r = n.left, i = n.right;
          return e === i && (i = r, r = e), i ? Math.atan2(i[1] - r[1], i[0] - r[0]) : (e === r ? (r = n[1], i = n[0]) : (r = n[0], i = n[1]), Math.atan2(r[0] - i[0], i[1] - r[1]))
     }

     function Gs(t, n) {
          return n[+(n.left !== t.site)]
     }

     function Ks(t, n) {
          return n[+(n.left === t.site)]
     }

     function Qs() {
          for (var t, n, e, r, i = 0, a = g_.length; a > i; ++i)if ((t = g_[i]) && (r = (n = t.halfedges).length)) {
               var o = new Array(r), u = new Array(r);
               for (e = 0; r > e; ++e)o[e] = e, u[e] = Zs(t, v_[n[e]]);
               for (o.sort(function (t, n) {
                    return u[n] - u[t]
               }), e = 0; r > e; ++e)u[e] = n[o[e]];
               for (e = 0; r > e; ++e)n[e] = u[e]
          }
     }

     function tc(t, n, e, r, i) {
          for (var a, o, u, s, c, f, l, h, d, p, _ = g_.length; _--;)if (a = g_[_]) {
               for (u = a.halfedges, o = u.length; o--;)t[u[o]] || u.splice(o, 1);
               for (o = 0, s = u.length; s > o;)h = Ks(a, t[u[o]]), d = h[0], p = h[1], c = Gs(a, t[u[++o % s]]), f = c[0], l = c[1], (Math.abs(d - f) > M_ || Math.abs(p - l) > M_) && (u.splice(o, 0, t.push(Xs(a.site, h, Math.abs(d - n) < M_ && i - p > M_ ? [n, Math.abs(f - n) < M_ ? l : i] : Math.abs(p - i) < M_ && r - d > M_ ? [Math.abs(l - i) < M_ ? f : r, i] : Math.abs(d - r) < M_ && p - e > M_ ? [r, Math.abs(f - r) < M_ ? l : e] : Math.abs(p - e) < M_ && d - n > M_ ? [Math.abs(l - e) < M_ ? f : n, e] : null)) - 1), ++s)
          }
     }

     function nc() {
          Rs(this), this.x = this.y = this.arc = this.site = this.cy = null
     }

     function ec(t) {
          var n = t.P, e = t.N;
          if (n && e) {
               var r = n.site, i = t.site, a = e.site;
               if (r !== a) {
                    var o = i[0], u = i[1], s = r[0] - o, c = r[1] - u, f = a[0] - o, l = a[1] - u, h = 2 * (s * l - c * f);
                    if (!(h >= -w_)) {
                         var d = s * s + c * c, p = f * f + l * l, _ = (l * d - c * p) / h, y = (s * p - f * d) / h, g = b_.pop() || new nc;
                         g.arc = t, g.site = i, g.x = _ + o, g.y = (g.cy = y + u) + Math.sqrt(_ * _ + y * y), t.circle = g;
                         for (var m = null, v = m_._; v;)if (g.y < v.y || g.y === v.y && g.x <= v.x) {
                              if (!v.L) {
                                   m = v.P;
                                   break
                              }
                              v = v.L
                         } else {
                              if (!v.R) {
                                   m = v;
                                   break
                              }
                              v = v.R
                         }
                         m_.insert(m, g), m || (__ = g)
                    }
               }
          }
     }

     function rc(t) {
          var n = t.circle;
          n && (n.P || (__ = n.N), m_.remove(n), b_.push(n), Rs(n), t.circle = null)
     }

     function ic() {
          Rs(this), this.edge = this.site = this.circle = null
     }

     function ac(t) {
          var n = x_.pop() || new ic;
          return n.site = t, n
     }

     function oc(t) {
          rc(t), y_.remove(t), x_.push(t), Rs(t)
     }

     function uc(t) {
          var n = t.circle, e = n.x, r = n.cy, i = [e, r], a = t.P, o = t.N, u = [t];
          oc(t);
          for (var s = a; s.circle && Math.abs(e - s.circle.x) < M_ && Math.abs(r - s.circle.cy) < M_;)a = s.P, u.unshift(s), oc(s), s = a;
          u.unshift(s), rc(s);
          for (var c = o; c.circle && Math.abs(e - c.circle.x) < M_ && Math.abs(r - c.circle.cy) < M_;)o = c.N, u.push(c), oc(c), c = o;
          u.push(c), rc(c);
          var f, l = u.length;
          for (f = 1; l > f; ++f)c = u[f], s = u[f - 1], Js(c.edge, s.site, c.site, i);
          s = u[0], c = u[l - 1], c.edge = Is(s.site, c.site, null, i), ec(s), ec(c)
     }

     function sc(t) {
          for (var n, e, r, i, a = t[0], o = t[1], u = y_._; u;)if (r = cc(u, o) - a, r > M_)u = u.L; else {
               if (i = a - fc(u, o), !(i > M_)) {
                    r > -M_ ? (n = u.P, e = u) : i > -M_ ? (n = u, e = u.N) : n = e = u;
                    break
               }
               if (!u.R) {
                    n = u;
                    break
               }
               u = u.R
          }
          $s(t);
          var s = ac(t);
          if (y_.insert(n, s), n || e) {
               if (n === e)return rc(n), e = ac(n.site), y_.insert(s, e), s.edge = e.edge = Is(n.site, s.site), ec(n), void ec(e);
               if (!e)return void(s.edge = Is(n.site, s.site));
               rc(n), rc(e);
               var c = n.site, f = c[0], l = c[1], h = t[0] - f, d = t[1] - l, p = e.site, _ = p[0] - f, y = p[1] - l, g = 2 * (h * y - d * _), m = h * h + d * d, v = _ * _ + y * y, b = {
                    x: (y * m - d * v) / g + f,
                    y: (h * v - _ * m) / g + l
               };
               Js(e.edge, c, p, b), s.edge = Is(c, t, null, b), e.edge = Is(t, p, null, b), ec(n), ec(e)
          }
     }

     function cc(t, n) {
          var e = t.site, r = e[0], i = e[1], a = i - n;
          if (!a)return r;
          var o = t.P;
          if (!o)return -(1 / 0);
          e = o.site;
          var u = e[0], s = e[1], c = s - n;
          if (!c)return u;
          var f = u - r, l = 1 / a - 1 / c, h = f / c;
          return l ? (-h + Math.sqrt(h * h - 2 * l * (f * f / (-2 * c) - s + c / 2 + i - a / 2))) / l + r : (r + u) / 2
     }

     function fc(t, n) {
          var e = t.N;
          if (e)return cc(e, n);
          var r = t.site;
          return r[1] === n ? r[0] : 1 / 0
     }

     function lc(t, n, e) {
          return (t[0] - e[0]) * (n[1] - t[1]) - (t[0] - n[0]) * (e[1] - t[1])
     }

     function hc(t, n) {
          return n[1] - t[1] || n[0] - t[0]
     }

     function dc(t, n) {
          var e, r, i, a = t.sort(hc).pop();
          for (v_ = [], g_ = new Array(t.length), y_ = new Hs, m_ = new Hs; ;)if (i = __, a && (!i || a[1] < i.y || a[1] === i.y && a[0] < i.x))a[0] === e && a[1] === r || (sc(a), e = a[0], r = a[1]), a = t.pop(); else {
               if (!i)break;
               uc(i.arc)
          }
          if (Qs(), n) {
               var o = n[0][0], u = n[0][1], s = n[1][0], c = n[1][1];
               this.extent = [[o, u], [s, c]], this.cellEdges = Vs(o, u, s, c), tc(this.cellEdges, o, u, s, c)
          } else this.cellEdges = v_;
          this.cells = g_, this.edges = v_, y_ = m_ = v_ = g_ = null
     }

     function pc() {
          function t(t) {
               return new dc(t.map(function (r, i) {
                    var a = [Math.round(n(r, i, t) / M_) * M_, Math.round(e(r, i, t) / M_) * M_];
                    return a.index = i, a.data = r, a
               }), r)
          }

          var n = Ys, e = Os, r = null;
          return t.polygons = function (n) {
               return t(n).polygons()
          }, t.links = function (n) {
               return t(n).links()
          }, t.triangles = function (n) {
               return t(n).triangles()
          }, t.x = function (e) {
               return arguments.length ? (n = "function" == typeof e ? e : Us(+e), t) : n
          }, t.y = function (n) {
               return arguments.length ? (e = "function" == typeof n ? n : Us(+n), t) : e
          }, t.extent = function (n) {
               return arguments.length ? (r = null == n ? null : [[+n[0][0], +n[0][1]], [+n[1][0], +n[1][1]]], t) : r && [[r[0][0], r[0][1]], [r[1][0], r[1][1]]]
          }, t.size = function (n) {
               return arguments.length ? (r = null == n ? null : [[0, 0], [+n[0], +n[1]]], t) : r && [r[1][0], r[1][1]]
          }, t
     }

     var _c = "4.0.0-alpha.28", yc = e(n), gc = yc.right, mc = yc.left, vc = Math.sqrt(50), bc = Math.sqrt(10), xc = Math.sqrt(2), Mc = "$";
     F.prototype = L.prototype = {
          constructor: F, has: function (t) {
               return Mc + t in this
          }, get: function (t) {
               return this[Mc + t]
          }, set: function (t, n) {
               return this[Mc + t] = n, this
          }, remove: function (t) {
               var n = Mc + t;
               return n in this && delete this[n]
          }, clear: function () {
               for (var t in this)t[0] === Mc && delete this[t]
          }, keys: function () {
               var t = [];
               for (var n in this)n[0] === Mc && t.push(n.slice(1));
               return t
          }, values: function () {
               var t = [];
               for (var n in this)n[0] === Mc && t.push(this[n]);
               return t
          }, entries: function () {
               var t = [];
               for (var n in this)n[0] === Mc && t.push({key: n.slice(1), value: this[n]});
               return t
          }, size: function () {
               var t = 0;
               for (var n in this)n[0] === Mc && ++t;
               return t
          }, empty: function () {
               for (var t in this)if (t[0] === Mc)return !1;
               return !0
          }, each: function (t) {
               for (var n in this)n[0] === Mc && t(this[n], n.slice(1), this)
          }
     };
     var wc = L.prototype;
     j.prototype = z.prototype = {
          constructor: j, has: wc.has, add: function (t) {
               return t += "", this[Mc + t] = t, this
          }, remove: wc.remove, clear: wc.clear, values: wc.keys, size: wc.size, empty: wc.empty, each: wc.each
     };
     var Tc = 3, kc = function T_(t) {
          function n(n) {
               return Math.pow(n, t)
          }

          return t = +t, n.exponent = T_, n
     }(Tc), Sc = function k_(t) {
          function n(n) {
               return 1 - Math.pow(1 - n, t)
          }

          return t = +t, n.exponent = k_, n
     }(Tc), Ac = function S_(t) {
          function n(n) {
               return ((n *= 2) <= 1 ? Math.pow(n, t) : 2 - Math.pow(2 - n, t)) / 2
          }

          return t = +t, n.exponent = S_, n
     }(Tc), Nc = Math.PI, Cc = Nc / 2, Ec = 4 / 11, Pc = 6 / 11, Dc = 8 / 11, Fc = .75, Lc = 9 / 11, Uc = 10 / 11, Yc = .9375, Oc = 21 / 22, Hc = 63 / 64, Rc = 1 / Ec / Ec, jc = 1.70158, zc = function A_(t) {
          function n(n) {
               return n * n * ((t + 1) * n - t)
          }

          return t = +t, n.overshoot = A_, n
     }(jc), qc = function N_(t) {
          function n(n) {
               return --n * n * ((t + 1) * n + t) + 1
          }

          return t = +t, n.overshoot = N_, n
     }(jc), Ic = function C_(t) {
          function n(n) {
               return ((n *= 2) < 1 ? n * n * ((t + 1) * n - t) : (n -= 2) * n * ((t + 1) * n + t) + 2) / 2
          }

          return t = +t, n.overshoot = C_, n
     }(jc), Xc = 2 * Math.PI, Jc = 1, Bc = .3, Wc = function E_(t, n) {
          function e(e) {
               return t * Math.pow(2, 10 * --e) * Math.sin((r - e) / n)
          }

          var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= Xc);
          return e.amplitude = function (t) {
               return E_(t, n * Xc)
          }, e.period = function (n) {
               return E_(t, n)
          }, e
     }(Jc, Bc), Vc = function P_(t, n) {
          function e(e) {
               return 1 - t * Math.pow(2, -10 * (e = +e)) * Math.sin((e + r) / n)
          }

          var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= Xc);
          return e.amplitude = function (t) {
               return P_(t, n * Xc)
          }, e.period = function (n) {
               return P_(t, n)
          }, e
     }(Jc, Bc), $c = function D_(t, n) {
          function e(e) {
               return ((e = 2 * e - 1) < 0 ? t * Math.pow(2, 10 * e) * Math.sin((r - e) / n) : 2 - t * Math.pow(2, -10 * e) * Math.sin((r + e) / n)) / 2
          }

          var r = Math.asin(1 / (t = Math.max(1, t))) * (n /= Xc);
          return e.amplitude = function (t) {
               return D_(t, n * Xc)
          }, e.period = function (n) {
               return D_(t, n)
          }, e
     }(Jc, Bc), Zc = Math.PI, Gc = 2 * Zc, Kc = 1e-6, Qc = Gc - Kc;
     Tt.prototype = kt.prototype = {
          constructor: Tt, moveTo: function (t, n) {
               this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n)
          }, closePath: function () {
               null !== this._x1 && (this._x1 = this._x0, this._y1 = this._y0, this._.push("Z"))
          }, lineTo: function (t, n) {
               this._.push("L", this._x1 = +t, ",", this._y1 = +n)
          }, quadraticCurveTo: function (t, n, e, r) {
               this._.push("Q", +t, ",", +n, ",", this._x1 = +e, ",", this._y1 = +r)
          }, bezierCurveTo: function (t, n, e, r, i, a) {
               this._.push("C", +t, ",", +n, ",", +e, ",", +r, ",", this._x1 = +i, ",", this._y1 = +a)
          }, arcTo: function (t, n, e, r, i) {
               t = +t, n = +n, e = +e, r = +r, i = +i;
               var a = this._x1, o = this._y1, u = e - t, s = r - n, c = a - t, f = o - n, l = c * c + f * f;
               if (0 > i)throw new Error("negative radius: " + i);
               if (null === this._x1)this._.push("M", this._x1 = t, ",", this._y1 = n); else if (l > Kc)if (Math.abs(f * u - s * c) > Kc && i) {
                    var h = e - a, d = r - o, p = u * u + s * s, _ = h * h + d * d, y = Math.sqrt(p), g = Math.sqrt(l), m = i * Math.tan((Zc - Math.acos((p + l - _) / (2 * y * g))) / 2), v = m / g, b = m / y;
                    Math.abs(v - 1) > Kc && this._.push("L", t + v * c, ",", n + v * f), this._.push("A", i, ",", i, ",0,0,", +(f * h > c * d), ",", this._x1 = t + b * u, ",", this._y1 = n + b * s)
               } else this._.push("L", this._x1 = t, ",", this._y1 = n); else;
          }, arc: function (t, n, e, r, i, a) {
               t = +t, n = +n, e = +e;
               var o = e * Math.cos(r), u = e * Math.sin(r), s = t + o, c = n + u, f = 1 ^ a, l = a ? r - i : i - r;
               if (0 > e)throw new Error("negative radius: " + e);
               null === this._x1 ? this._.push("M", s, ",", c) : (Math.abs(this._x1 - s) > Kc || Math.abs(this._y1 - c) > Kc) && this._.push("L", s, ",", c), e && (l > Qc ? this._.push("A", e, ",", e, ",0,1,", f, ",", t - o, ",", n - u, "A", e, ",", e, ",0,1,", f, ",", this._x1 = s, ",", this._y1 = c) : (0 > l && (l = l % Gc + Gc), this._.push("A", e, ",", e, ",0,", +(l >= Zc), ",", f, ",", this._x1 = t + e * Math.cos(i), ",", this._y1 = n + e * Math.sin(i))))
          }, rect: function (t, n, e, r) {
               this._.push("M", this._x0 = this._x1 = +t, ",", this._y0 = this._y1 = +n, "h", +e, "v", +r, "h", -e, "Z")
          }, toString: function () {
               return this._.join("")
          }
     };
     var tf = [].slice, nf = {};
     Ft.prototype = Rt.prototype = {
          constructor: Ft, defer: function (t) {
               if ("function" != typeof t || this._call)throw new Error;
               if (null != this._error)return this;
               var n = tf.call(arguments, 1);
               return n.push(t), ++this._waiting, this._tasks.push(n), Lt(this), this
          }, abort: function () {
               return null == this._error && Ot(this, new Error("abort")), this
          }, await: function (t) {
               if ("function" != typeof t || this._call)throw new Error;
               return this._call = function (n, e) {
                    t.apply(null, [n].concat(e))
               }, Ht(this), this
          }, awaitAll: function (t) {
               if ("function" != typeof t || this._call)throw new Error;
               return this._call = t, Ht(this), this
          }
     };
     var ef = 1e-12, rf = Math.PI, af = rf / 2, of = 2 * rf;
     Zt.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._point = 0
          }, lineEnd: function () {
               (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               switch (t = +t, n = +n, this._point) {
                    case 0:
                         this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                         break;
                    case 1:
                         this._point = 2;
                    default:
                         this._context.lineTo(t, n)
               }
          }
     }, on.prototype = {
          areaStart: function () {
               this._curve.areaStart()
          }, areaEnd: function () {
               this._curve.areaEnd()
          }, lineStart: function () {
               this._curve.lineStart()
          }, lineEnd: function () {
               this._curve.lineEnd()
          }, point: function (t, n) {
               this._curve.point(n * Math.sin(t), n * -Math.cos(t))
          }
     };
     var uf = {
          draw: function (t, n) {
               var e = Math.sqrt(n / rf);
               t.moveTo(e, 0), t.arc(0, 0, e, 0, of)
          }
     }, sf = {
          draw: function (t, n) {
               var e = Math.sqrt(n / 5) / 2;
               t.moveTo(-3 * e, -e), t.lineTo(-e, -e), t.lineTo(-e, -3 * e), t.lineTo(e, -3 * e), t.lineTo(e, -e), t.lineTo(3 * e, -e), t.lineTo(3 * e, e), t.lineTo(e, e), t.lineTo(e, 3 * e), t.lineTo(-e, 3 * e), t.lineTo(-e, e), t.lineTo(-3 * e, e), t.closePath()
          }
     }, cf = Math.sqrt(1 / 3), ff = 2 * cf, lf = {
          draw: function (t, n) {
               var e = Math.sqrt(n / ff), r = e * cf;
               t.moveTo(0, -e), t.lineTo(r, 0), t.lineTo(0, e), t.lineTo(-r, 0), t.closePath()
          }
     }, hf = .8908130915292852, df = Math.sin(rf / 10) / Math.sin(7 * rf / 10), pf = Math.sin(of / 10) * df, _f = -Math.cos(of / 10) * df, yf = {
          draw: function (t, n) {
               var e = Math.sqrt(n * hf), r = pf * e, i = _f * e;
               t.moveTo(0, -e), t.lineTo(r, i);
               for (var a = 1; 5 > a; ++a) {
                    var o = of * a / 5, u = Math.cos(o), s = Math.sin(o);
                    t.lineTo(s * e, -u * e), t.lineTo(u * r - s * i, s * r + u * i)
               }
               t.closePath()
          }
     }, gf = {
          draw: function (t, n) {
               var e = Math.sqrt(n), r = -e / 2;
               t.rect(r, r, e, e)
          }
     }, mf = Math.sqrt(3), vf = {
          draw: function (t, n) {
               var e = -Math.sqrt(n / (3 * mf));
               t.moveTo(0, 2 * e), t.lineTo(-mf * e, -e), t.lineTo(mf * e, -e), t.closePath()
          }
     }, bf = -.5, xf = Math.sqrt(3) / 2, Mf = 1 / Math.sqrt(12), wf = 3 * (Mf / 2 + 1), Tf = {
          draw: function (t, n) {
               var e = Math.sqrt(n / wf), r = e / 2, i = e * Mf, a = r, o = e * Mf + e, u = -a, s = o;
               t.moveTo(r, i), t.lineTo(a, o), t.lineTo(u, s), t.lineTo(bf * r - xf * i, xf * r + bf * i), t.lineTo(bf * a - xf * o, xf * a + bf * o), t.lineTo(bf * u - xf * s, xf * u + bf * s), t.lineTo(bf * r + xf * i, bf * i - xf * r), t.lineTo(bf * a + xf * o, bf * o - xf * a), t.lineTo(bf * u + xf * s, bf * s - xf * u), t.closePath()
          }
     }, kf = [uf, sf, lf, gf, yf, vf, Tf];
     dn.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
          }, lineEnd: function () {
               switch (this._point) {
                    case 3:
                         hn(this, this._x1, this._y1);
                    case 2:
                         this._context.lineTo(this._x1, this._y1)
               }
               (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               switch (t = +t, n = +n, this._point) {
                    case 0:
                         this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                         break;
                    case 1:
                         this._point = 2;
                         break;
                    case 2:
                         this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
                    default:
                         hn(this, t, n)
               }
               this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n;
          }
     }, _n.prototype = {
          areaStart: ln, areaEnd: ln, lineStart: function () {
               this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0
          }, lineEnd: function () {
               switch (this._point) {
                    case 1:
                         this._context.moveTo(this._x2, this._y2), this._context.closePath();
                         break;
                    case 2:
                         this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
                         break;
                    case 3:
                         this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4)
               }
          }, point: function (t, n) {
               switch (t = +t, n = +n, this._point) {
                    case 0:
                         this._point = 1, this._x2 = t, this._y2 = n;
                         break;
                    case 1:
                         this._point = 2, this._x3 = t, this._y3 = n;
                         break;
                    case 2:
                         this._point = 3, this._x4 = t, this._y4 = n, this._context.moveTo((this._x0 + 4 * this._x1 + t) / 6, (this._y0 + 4 * this._y1 + n) / 6);
                         break;
                    default:
                         hn(this, t, n)
               }
               this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
          }
     }, gn.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0
          }, lineEnd: function () {
               (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               switch (t = +t, n = +n, this._point) {
                    case 0:
                         this._point = 1;
                         break;
                    case 1:
                         this._point = 2;
                         break;
                    case 2:
                         this._point = 3;
                         var e = (this._x0 + 4 * this._x1 + t) / 6, r = (this._y0 + 4 * this._y1 + n) / 6;
                         this._line ? this._context.lineTo(e, r) : this._context.moveTo(e, r);
                         break;
                    case 3:
                         this._point = 4;
                    default:
                         hn(this, t, n)
               }
               this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n
          }
     }, vn.prototype = {
          lineStart: function () {
               this._x = [], this._y = [], this._basis.lineStart()
          }, lineEnd: function () {
               var t = this._x, n = this._y, e = t.length - 1;
               if (e > 0)for (var r, i = t[0], a = n[0], o = t[e] - i, u = n[e] - a, s = -1; ++s <= e;)r = s / e, this._basis.point(this._beta * t[s] + (1 - this._beta) * (i + r * o), this._beta * n[s] + (1 - this._beta) * (a + r * u));
               this._x = this._y = null, this._basis.lineEnd()
          }, point: function (t, n) {
               this._x.push(+t), this._y.push(+n)
          }
     };
     var Sf = function F_(t) {
          function n(n) {
               return 1 === t ? new dn(n) : new vn(n, t)
          }

          return n.beta = function (t) {
               return F_(+t)
          }, n
     }(.85);
     xn.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
          }, lineEnd: function () {
               switch (this._point) {
                    case 2:
                         this._context.lineTo(this._x2, this._y2);
                         break;
                    case 3:
                         bn(this, this._x1, this._y1)
               }
               (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               switch (t = +t, n = +n, this._point) {
                    case 0:
                         this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                         break;
                    case 1:
                         this._point = 2, this._x1 = t, this._y1 = n;
                         break;
                    case 2:
                         this._point = 3;
                    default:
                         bn(this, t, n)
               }
               this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
          }
     };
     var Af = function L_(t) {
          function n(n) {
               return new xn(n, t)
          }

          return n.tension = function (t) {
               return L_(+t)
          }, n
     }(0);
     Mn.prototype = {
          areaStart: ln, areaEnd: ln, lineStart: function () {
               this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0
          }, lineEnd: function () {
               switch (this._point) {
                    case 1:
                         this._context.moveTo(this._x3, this._y3), this._context.closePath();
                         break;
                    case 2:
                         this._context.lineTo(this._x3, this._y3), this._context.closePath();
                         break;
                    case 3:
                         this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
               }
          }, point: function (t, n) {
               switch (t = +t, n = +n, this._point) {
                    case 0:
                         this._point = 1, this._x3 = t, this._y3 = n;
                         break;
                    case 1:
                         this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                         break;
                    case 2:
                         this._point = 3, this._x5 = t, this._y5 = n;
                         break;
                    default:
                         bn(this, t, n)
               }
               this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
          }
     };
     var Nf = function U_(t) {
          function n(n) {
               return new Mn(n, t)
          }

          return n.tension = function (t) {
               return U_(+t)
          }, n
     }(0);
     wn.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0
          }, lineEnd: function () {
               (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               switch (t = +t, n = +n, this._point) {
                    case 0:
                         this._point = 1;
                         break;
                    case 1:
                         this._point = 2;
                         break;
                    case 2:
                         this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                         break;
                    case 3:
                         this._point = 4;
                    default:
                         bn(this, t, n)
               }
               this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
          }
     };
     var Cf = function Y_(t) {
          function n(n) {
               return new wn(n, t)
          }

          return n.tension = function (t) {
               return Y_(+t)
          }, n
     }(0);
     kn.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
          }, lineEnd: function () {
               switch (this._point) {
                    case 2:
                         this._context.lineTo(this._x2, this._y2);
                         break;
                    case 3:
                         this.point(this, this._x2, this._y2)
               }
               (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t, r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
               }
               switch (this._point) {
                    case 0:
                         this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                         break;
                    case 1:
                         this._point = 2;
                         break;
                    case 2:
                         this._point = 3;
                    default:
                         Tn(this, t, n)
               }
               this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
          }
     };
     var Ef = function O_(t) {
          function n(n) {
               return t ? new kn(n, t) : new xn(n, 0)
          }

          return n.alpha = function (t) {
               return O_(+t)
          }, n
     }(.5);
     Sn.prototype = {
          areaStart: ln, areaEnd: ln, lineStart: function () {
               this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
          }, lineEnd: function () {
               switch (this._point) {
                    case 1:
                         this._context.moveTo(this._x3, this._y3), this._context.closePath();
                         break;
                    case 2:
                         this._context.lineTo(this._x3, this._y3), this._context.closePath();
                         break;
                    case 3:
                         this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5)
               }
          }, point: function (t, n) {
               if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t, r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
               }
               switch (this._point) {
                    case 0:
                         this._point = 1, this._x3 = t, this._y3 = n;
                         break;
                    case 1:
                         this._point = 2, this._context.moveTo(this._x4 = t, this._y4 = n);
                         break;
                    case 2:
                         this._point = 3, this._x5 = t, this._y5 = n;
                         break;
                    default:
                         Tn(this, t, n)
               }
               this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
          }
     };
     var Pf = function H_(t) {
          function n(n) {
               return t ? new Sn(n, t) : new Mn(n, 0)
          }

          return n.alpha = function (t) {
               return H_(+t)
          }, n
     }(.5);
     An.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0
          }, lineEnd: function () {
               (this._line || 0 !== this._line && 3 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               if (t = +t, n = +n, this._point) {
                    var e = this._x2 - t, r = this._y2 - n;
                    this._l23_a = Math.sqrt(this._l23_2a = Math.pow(e * e + r * r, this._alpha))
               }
               switch (this._point) {
                    case 0:
                         this._point = 1;
                         break;
                    case 1:
                         this._point = 2;
                         break;
                    case 2:
                         this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
                         break;
                    case 3:
                         this._point = 4;
                    default:
                         Tn(this, t, n)
               }
               this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t, this._y0 = this._y1, this._y1 = this._y2, this._y2 = n
          }
     };
     var Df = function R_(t) {
          function n(n) {
               return t ? new An(n, t) : new wn(n, 0)
          }

          return n.alpha = function (t) {
               return R_(+t)
          }, n
     }(.5);
     Nn.prototype = {
          areaStart: ln, areaEnd: ln, lineStart: function () {
               this._point = 0
          }, lineEnd: function () {
               this._point && this._context.closePath()
          }, point: function (t, n) {
               t = +t, n = +n, this._point ? this._context.lineTo(t, n) : (this._point = 1, this._context.moveTo(t, n))
          }
     }, Ln.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0
          }, lineEnd: function () {
               switch (this._point) {
                    case 2:
                         this._context.lineTo(this._x1, this._y1);
                         break;
                    case 3:
                         Fn(this, this._t0, Dn(this, this._t0))
               }
               (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               var e = NaN;
               if (t = +t, n = +n, t !== this._x1 || n !== this._y1) {
                    switch (this._point) {
                         case 0:
                              this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                              break;
                         case 1:
                              this._point = 2;
                              break;
                         case 2:
                              this._point = 3, Fn(this, Dn(this, e = Pn(this, t, n)), e);
                              break;
                         default:
                              Fn(this, this._t0, e = Pn(this, t, n))
                    }
                    this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e
               }
          }
     }, (Un.prototype = Object.create(Ln.prototype)).point = function (t, n) {
          Ln.prototype.point.call(this, n, t)
     }, Yn.prototype = {
          moveTo: function (t, n) {
               this._context.moveTo(n, t)
          }, closePath: function () {
               this._context.closePath()
          }, lineTo: function (t, n) {
               this._context.lineTo(n, t)
          }, bezierCurveTo: function (t, n, e, r, i, a) {
               this._context.bezierCurveTo(n, t, r, e, a, i)
          }
     }, Rn.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x = [], this._y = []
          }, lineEnd: function () {
               var t = this._x, n = this._y, e = t.length;
               if (e)if (this._line ? this._context.lineTo(t[0], n[0]) : this._context.moveTo(t[0], n[0]), 2 === e)this._context.lineTo(t[1], n[1]); else for (var r = jn(t), i = jn(n), a = 0, o = 1; e > o; ++a, ++o)this._context.bezierCurveTo(r[0][a], i[0][a], r[1][a], i[1][a], t[o], n[o]);
               (this._line || 0 !== this._line && 1 === e) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null
          }, point: function (t, n) {
               this._x.push(+t), this._y.push(+n)
          }
     }, qn.prototype = {
          areaStart: function () {
               this._line = 0
          }, areaEnd: function () {
               this._line = NaN
          }, lineStart: function () {
               this._x = this._y = NaN, this._point = 0
          }, lineEnd: function () {
               0 < this._t && this._t < 1 && 2 === this._point && this._context.lineTo(this._x, this._y), (this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line
          }, point: function (t, n) {
               switch (t = +t, n = +n, this._point) {
                    case 0:
                         this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
                         break;
                    case 1:
                         this._point = 2;
                    default:
                         var e = t > this._x ? this._t : 1 - this._t;
                         if (0 >= e)this._context.lineTo(this._x, n), this._context.lineTo(t, n); else if (e >= 1)this._context.lineTo(t, this._y), this._context.lineTo(t, n); else {
                              var r = (this._x + t) * e;
                              this._context.lineTo(r, this._y), this._context.lineTo(r, n)
                         }
               }
               this._x = t, this._y = n
          }
     };
     var Ff = Array.prototype.slice, Lf = .7, Uf = 1 / Lf, Yf = /^#([0-9a-f]{3})$/, Of = /^#([0-9a-f]{6})$/, Hf = /^rgb\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*\)$/, Rf = /^rgb\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, jf = /^rgba\(\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+)\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, zf = /^rgba\(\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, qf = /^hsl\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*\)$/, If = /^hsla\(\s*([-+]?\d+(?:\.\d+)?)\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)%\s*,\s*([-+]?\d+(?:\.\d+)?)\s*\)$/, Xf = {
          aliceblue: 15792383,
          antiquewhite: 16444375,
          aqua: 65535,
          aquamarine: 8388564,
          azure: 15794175,
          beige: 16119260,
          bisque: 16770244,
          black: 0,
          blanchedalmond: 16772045,
          blue: 255,
          blueviolet: 9055202,
          brown: 10824234,
          burlywood: 14596231,
          cadetblue: 6266528,
          chartreuse: 8388352,
          chocolate: 13789470,
          coral: 16744272,
          cornflowerblue: 6591981,
          cornsilk: 16775388,
          crimson: 14423100,
          cyan: 65535,
          darkblue: 139,
          darkcyan: 35723,
          darkgoldenrod: 12092939,
          darkgray: 11119017,
          darkgreen: 25600,
          darkgrey: 11119017,
          darkkhaki: 12433259,
          darkmagenta: 9109643,
          darkolivegreen: 5597999,
          darkorange: 16747520,
          darkorchid: 10040012,
          darkred: 9109504,
          darksalmon: 15308410,
          darkseagreen: 9419919,
          darkslateblue: 4734347,
          darkslategray: 3100495,
          darkslategrey: 3100495,
          darkturquoise: 52945,
          darkviolet: 9699539,
          deeppink: 16716947,
          deepskyblue: 49151,
          dimgray: 6908265,
          dimgrey: 6908265,
          dodgerblue: 2003199,
          firebrick: 11674146,
          floralwhite: 16775920,
          forestgreen: 2263842,
          fuchsia: 16711935,
          gainsboro: 14474460,
          ghostwhite: 16316671,
          gold: 16766720,
          goldenrod: 14329120,
          gray: 8421504,
          green: 32768,
          greenyellow: 11403055,
          grey: 8421504,
          honeydew: 15794160,
          hotpink: 16738740,
          indianred: 13458524,
          indigo: 4915330,
          ivory: 16777200,
          khaki: 15787660,
          lavender: 15132410,
          lavenderblush: 16773365,
          lawngreen: 8190976,
          lemonchiffon: 16775885,
          lightblue: 11393254,
          lightcoral: 15761536,
          lightcyan: 14745599,
          lightgoldenrodyellow: 16448210,
          lightgray: 13882323,
          lightgreen: 9498256,
          lightgrey: 13882323,
          lightpink: 16758465,
          lightsalmon: 16752762,
          lightseagreen: 2142890,
          lightskyblue: 8900346,
          lightslategray: 7833753,
          lightslategrey: 7833753,
          lightsteelblue: 11584734,
          lightyellow: 16777184,
          lime: 65280,
          limegreen: 3329330,
          linen: 16445670,
          magenta: 16711935,
          maroon: 8388608,
          mediumaquamarine: 6737322,
          mediumblue: 205,
          mediumorchid: 12211667,
          mediumpurple: 9662683,
          mediumseagreen: 3978097,
          mediumslateblue: 8087790,
          mediumspringgreen: 64154,
          mediumturquoise: 4772300,
          mediumvioletred: 13047173,
          midnightblue: 1644912,
          mintcream: 16121850,
          mistyrose: 16770273,
          moccasin: 16770229,
          navajowhite: 16768685,
          navy: 128,
          oldlace: 16643558,
          olive: 8421376,
          olivedrab: 7048739,
          orange: 16753920,
          orangered: 16729344,
          orchid: 14315734,
          palegoldenrod: 15657130,
          palegreen: 10025880,
          paleturquoise: 11529966,
          palevioletred: 14381203,
          papayawhip: 16773077,
          peachpuff: 16767673,
          peru: 13468991,
          pink: 16761035,
          plum: 14524637,
          powderblue: 11591910,
          purple: 8388736,
          rebeccapurple: 6697881,
          red: 16711680,
          rosybrown: 12357519,
          royalblue: 4286945,
          saddlebrown: 9127187,
          salmon: 16416882,
          sandybrown: 16032864,
          seagreen: 3050327,
          seashell: 16774638,
          sienna: 10506797,
          silver: 12632256,
          skyblue: 8900331,
          slateblue: 6970061,
          slategray: 7372944,
          slategrey: 7372944,
          snow: 16775930,
          springgreen: 65407,
          steelblue: 4620980,
          tan: 13808780,
          teal: 32896,
          thistle: 14204888,
          tomato: 16737095,
          turquoise: 4251856,
          violet: 15631086,
          wheat: 16113331,
          white: 16777215,
          whitesmoke: 16119285,
          yellow: 16776960,
          yellowgreen: 10145074
     };
     ie(oe, ue, {
          displayable: function () {
               return this.rgb().displayable()
          }, toString: function () {
               return this.rgb() + ""
          }
     }), ie(he, le, ae(oe, {
          brighter: function (t) {
               return t = null == t ? Uf : Math.pow(Uf, t), new he(this.r * t, this.g * t, this.b * t, this.opacity)
          }, darker: function (t) {
               return t = null == t ? Lf : Math.pow(Lf, t), new he(this.r * t, this.g * t, this.b * t, this.opacity)
          }, rgb: function () {
               return this
          }, displayable: function () {
               return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1
          }, toString: function () {
               var t = this.opacity;
               return t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t)), (1 === t ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")")
          }
     })), ie(ye, _e, ae(oe, {
          brighter: function (t) {
               return t = null == t ? Uf : Math.pow(Uf, t), new ye(this.h, this.s, this.l * t, this.opacity)
          }, darker: function (t) {
               return t = null == t ? Lf : Math.pow(Lf, t), new ye(this.h, this.s, this.l * t, this.opacity)
          }, rgb: function () {
               var t = this.h % 360 + 360 * (this.h < 0), n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (.5 > e ? e : 1 - e) * n, i = 2 * e - r;
               return new he(ge(t >= 240 ? t - 240 : t + 120, i, r), ge(t, i, r), ge(120 > t ? t + 240 : t - 120, i, r), this.opacity)
          }, displayable: function () {
               return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1
          }
     }));
     var Jf = Math.PI / 180, Bf = 180 / Math.PI, Wf = 18, Vf = .95047, $f = 1, Zf = 1.08883, Gf = 4 / 29, Kf = 6 / 29, Qf = 3 * Kf * Kf, tl = Kf * Kf * Kf;
     ie(be, ve, ae(oe, {
          brighter: function (t) {
               return new be(this.l + Wf * (null == t ? 1 : t), this.a, this.b, this.opacity)
          }, darker: function (t) {
               return new be(this.l - Wf * (null == t ? 1 : t), this.a, this.b, this.opacity)
          }, rgb: function () {
               var t = (this.l + 16) / 116, n = isNaN(this.a) ? t : t + this.a / 500, e = isNaN(this.b) ? t : t - this.b / 200;
               return t = $f * Me(t), n = Vf * Me(n), e = Zf * Me(e), new he(we(3.2404542 * n - 1.5371385 * t - .4985314 * e), we(-.969266 * n + 1.8760108 * t + .041556 * e), we(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity)
          }
     })), ie(Ae, Se, ae(oe, {
          brighter: function (t) {
               return new Ae(this.h, this.c, this.l + Wf * (null == t ? 1 : t), this.opacity)
          }, darker: function (t) {
               return new Ae(this.h, this.c, this.l - Wf * (null == t ? 1 : t), this.opacity)
          }, rgb: function () {
               return me(this).rgb()
          }
     }));
     var nl = -.14861, el = 1.78277, rl = -.29227, il = -.90649, al = 1.97294, ol = al * il, ul = al * el, sl = el * rl - il * nl;
     ie(Ee, Ce, ae(oe, {
          brighter: function (t) {
               return t = null == t ? Uf : Math.pow(Uf, t), new Ee(this.h, this.s, this.l * t, this.opacity)
          }, darker: function (t) {
               return t = null == t ? Lf : Math.pow(Lf, t), new Ee(this.h, this.s, this.l * t, this.opacity)
          }, rgb: function () {
               var t = isNaN(this.h) ? 0 : (this.h + 120) * Jf, n = +this.l, e = isNaN(this.s) ? 0 : this.s * n * (1 - n), r = Math.cos(t), i = Math.sin(t);
               return new he(255 * (n + e * (nl * r + el * i)), 255 * (n + e * (rl * r + il * i)), 255 * (n + e * (al * r)), this.opacity)
          }
     }));
     var cl, fl, ll, hl, dl = function j_(t) {
          function n(t, n) {
               var r = e((t = le(t)).r, (n = le(n)).r), i = e(t.g, n.g), a = e(t.b, n.b), o = e(t.opacity, n.opacity);
               return function (n) {
                    return t.r = r(n), t.g = i(n), t.b = a(n), t.opacity = o(n), t + ""
               }
          }

          var e = Ue(t);
          return n.gamma = j_, n
     }(1), pl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _l = new RegExp(pl.source, "g"), yl = 180 / Math.PI, gl = {
          translateX: 0,
          translateY: 0,
          rotate: 0,
          skewX: 0,
          scaleX: 1,
          scaleY: 1
     }, ml = Ve(Be, "px, ", "px)", "deg)"), vl = Ve(We, ", ", ")", ")"), bl = Math.SQRT2, xl = 2, Ml = 4, wl = 1e-12, Tl = function z_(t) {
          function n(n, e) {
               var r = Le((n = Ce(n)).h, (e = Ce(e)).h), i = Ye(n.s, e.s), a = Ye(n.l, e.l), o = Ye(n.opacity, e.opacity);
               return function (e) {
                    return n.h = r(e), n.s = i(e), n.l = a(Math.pow(e, t)), n.opacity = o(e), n + ""
               }
          }

          return t = +t, n.gamma = z_, n
     }(1), kl = function q_(t) {
          function n(n, e) {
               var r = Ye((n = Ce(n)).h, (e = Ce(e)).h), i = Ye(n.s, e.s), a = Ye(n.l, e.l), o = Ye(n.opacity, e.opacity);
               return function (e) {
                    return n.h = r(e), n.s = i(e), n.l = a(Math.pow(e, t)), n.opacity = o(e), n + ""
               }
          }

          return t = +t, n.gamma = q_, n
     }(1), Sl = {
          value: function () {
          }
     };
     ar.prototype = ir.prototype = {
          constructor: ar, on: function (t, n) {
               var e, r = this._, i = or(t + "", r), a = -1, o = i.length;
               {
                    if (!(arguments.length < 2)) {
                         if (null != n && "function" != typeof n)throw new Error;
                         for (; ++a < o;)if (e = (t = i[a]).type)r[e] = sr(r[e], t.name, n); else if (null == n)for (e in r)r[e] = sr(r[e], t.name, null);
                         return this
                    }
                    for (; ++a < o;)if ((e = (t = i[a]).type) && (e = ur(r[e], t.name)))return e
               }
          }, copy: function () {
               var t = {}, n = this._;
               for (var e in n)t[e] = n[e].slice();
               return new ar(t)
          }, call: function (t, n) {
               if ((e = arguments.length - 2) > 0)for (var e, r = new Array(e), i = 0; e > i; ++i)r[i] = arguments[i + 2];
               this.apply(t, n, r)
          }, apply: function (t, n, e) {
               if (!this._.hasOwnProperty(t))throw new Error;
               for (var r = this._[t], i = 0, a = r.length; a > i; ++i)r[i].value.apply(n, e)
          }
     };
     var Al, Nl, Cl = hr(","), El = Cl.parse, Pl = Cl.parseRows, Dl = Cl.format, Fl = Cl.formatRows, Ll = hr("	"), Ul = Ll.parse, Yl = Ll.parseRows, Ol = Ll.format, Hl = Ll.formatRows, Rl = yr("text/html", function (t) {
          return document.createRange().createContextualFragment(t.responseText)
     }), jl = yr("application/json", function (t) {
          return JSON.parse(t.responseText)
     }), zl = yr("text/plain", function (t) {
          return t.responseText
     }), ql = yr("application/xml", function (t) {
          var n = t.responseXML;
          if (!n)throw new Error("parse error");
          return n
     }), Il = gr("text/csv", El), Xl = gr("text/tab-separated-values", Ul), Jl = 0, Bl = 0, Wl = 0, Vl = 1e3, $l = 0, Zl = 0, Gl = 0, Kl = "object" == typeof performance ? performance : Date, Ql = "function" == typeof requestAnimationFrame ? requestAnimationFrame : function (t) {
          return setTimeout(t, 17)
     };
     xr.prototype = Mr.prototype = {
          constructor: xr, restart: function (t, n, e) {
               if ("function" != typeof t)throw new TypeError("callback is not a function");
               e = (null == e ? vr() : +e) + (null == n ? 0 : +n), this._call || (Nl ? Nl._next = this : Al = this, Nl = this), this._call = t, this._time = e, Ar()
          }, stop: function () {
               this._call && (this._call = null, this._time = 1 / 0, Ar())
          }
     };
     var th = new Date, nh = new Date, eh = Er(function () {
     }, function (t, n) {
          t.setTime(+t + n)
     }, function (t, n) {
          return n - t
     });
     eh.every = function (t) {
          return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? Er(function (n) {
               n.setTime(Math.floor(n / t) * t)
          }, function (n, e) {
               n.setTime(+n + e * t)
          }, function (n, e) {
               return (e - n) / t
          }) : eh : null
     };
     var rh, ih = 1e3, ah = 6e4, oh = 36e5, uh = 864e5, sh = 6048e5, ch = Er(function (t) {
          t.setTime(Math.floor(t / ih) * ih)
     }, function (t, n) {
          t.setTime(+t + n * ih)
     }, function (t, n) {
          return (n - t) / ih
     }, function (t) {
          return t.getUTCSeconds()
     }), fh = Er(function (t) {
          t.setTime(Math.floor(t / ah) * ah)
     }, function (t, n) {
          t.setTime(+t + n * ah)
     }, function (t, n) {
          return (n - t) / ah
     }, function (t) {
          return t.getMinutes()
     }), lh = Er(function (t) {
          var n = t.getTimezoneOffset() * ah % oh;
          0 > n && (n += oh), t.setTime(Math.floor((+t - n) / oh) * oh + n)
     }, function (t, n) {
          t.setTime(+t + n * oh)
     }, function (t, n) {
          return (n - t) / oh
     }, function (t) {
          return t.getHours()
     }), hh = Er(function (t) {
          t.setHours(0, 0, 0, 0)
     }, function (t, n) {
          t.setDate(t.getDate() + n)
     }, function (t, n) {
          return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ah) / uh
     }, function (t) {
          return t.getDate() - 1
     }), dh = Pr(0), ph = Pr(1), _h = Pr(2), yh = Pr(3), gh = Pr(4), mh = Pr(5), vh = Pr(6), bh = Er(function (t) {
          t.setHours(0, 0, 0, 0), t.setDate(1)
     }, function (t, n) {
          t.setMonth(t.getMonth() + n)
     }, function (t, n) {
          return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
     }, function (t) {
          return t.getMonth()
     }), xh = Er(function (t) {
          t.setHours(0, 0, 0, 0), t.setMonth(0, 1)
     }, function (t, n) {
          t.setFullYear(t.getFullYear() + n)
     }, function (t, n) {
          return n.getFullYear() - t.getFullYear()
     }, function (t) {
          return t.getFullYear()
     }), Mh = Er(function (t) {
          t.setUTCSeconds(0, 0)
     }, function (t, n) {
          t.setTime(+t + n * ah)
     }, function (t, n) {
          return (n - t) / ah
     }, function (t) {
          return t.getUTCMinutes()
     }), wh = Er(function (t) {
          t.setUTCMinutes(0, 0, 0)
     }, function (t, n) {
          t.setTime(+t + n * oh)
     }, function (t, n) {
          return (n - t) / oh
     }, function (t) {
          return t.getUTCHours()
     }), Th = Er(function (t) {
          t.setUTCHours(0, 0, 0, 0)
     }, function (t, n) {
          t.setUTCDate(t.getUTCDate() + n)
     }, function (t, n) {
          return (n - t) / uh
     }, function (t) {
          return t.getUTCDate() - 1
     }), kh = Dr(0), Sh = Dr(1), Ah = Dr(2), Nh = Dr(3), Ch = Dr(4), Eh = Dr(5), Ph = Dr(6), Dh = Er(function (t) {
          t.setUTCHours(0, 0, 0, 0), t.setUTCDate(1)
     }, function (t, n) {
          t.setUTCMonth(t.getUTCMonth() + n)
     }, function (t, n) {
          return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear())
     }, function (t) {
          return t.getUTCMonth()
     }), Fh = Er(function (t) {
          t.setUTCHours(0, 0, 0, 0), t.setUTCMonth(0, 1)
     }, function (t, n) {
          t.setUTCFullYear(t.getUTCFullYear() + n)
     }, function (t, n) {
          return n.getUTCFullYear() - t.getUTCFullYear()
     }, function (t) {
          return t.getUTCFullYear()
     }), Lh = eh.range, Uh = ch.range, Yh = fh.range, Oh = lh.range, Hh = hh.range, Rh = dh.range, jh = ph.range, zh = _h.range, qh = yh.range, Ih = gh.range, Xh = mh.range, Jh = vh.range, Bh = dh.range, Wh = bh.range, Vh = xh.range, $h = eh, Zh = Lh, Gh = ch, Kh = Uh, Qh = Mh.range, td = wh.range, nd = Th.range, ed = kh.range, rd = Sh.range, id = Ah.range, ad = Nh.range, od = Ch.range, ud = Eh.range, sd = Ph.range, cd = kh.range, fd = Dh.range, ld = Fh.range, hd = {
          "": Yr,
          "%": function (t, n) {
               return (100 * t).toFixed(n)
          },
          b: function (t) {
               return Math.round(t).toString(2)
          },
          c: function (t) {
               return t + ""
          },
          d: function (t) {
               return Math.round(t).toString(10)
          },
          e: function (t, n) {
               return t.toExponential(n)
          },
          f: function (t, n) {
               return t.toFixed(n)
          },
          g: function (t, n) {
               return t.toPrecision(n)
          },
          o: function (t) {
               return Math.round(t).toString(8)
          },
          p: function (t, n) {
               return Hr(100 * t, n)
          },
          r: Hr,
          s: Or,
          X: function (t) {
               return Math.round(t).toString(16).toUpperCase()
          },
          x: function (t) {
               return Math.round(t).toString(16)
          }
     }, dd = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;
     jr.prototype.toString = function () {
          return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + this.type
     };
     var pd = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"], _d = qr({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["$", ""]
     }), yd = qr({decimal: ",", thousands: ".", grouping: [3], currency: ["", " €"]}), gd = qr({
          decimal: ",",
          thousands: " ",
          grouping: [3],
          currency: ["", " Kč"]
     }), md = qr({decimal: ",", thousands: "'", grouping: [3], currency: ["", " CHF"]}), vd = qr({
          decimal: ",",
          thousands: ".",
          grouping: [3],
          currency: ["", " €"]
     }), bd = qr({decimal: ".", thousands: ",", grouping: [3], currency: ["$", ""]}), xd = qr({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["£", ""]
     }), Md = qr({decimal: ",", thousands: ".", grouping: [3], currency: ["", " €"]}), wd = qr({
          decimal: ",",
          thousands: " ",
          grouping: [3],
          currency: ["", " €"]
     }), Td = qr({decimal: ",", thousands: " ", grouping: [3], currency: ["", "$"]}), kd = qr({
          decimal: ",",
          thousands: ".",
          grouping: [3],
          currency: ["", " €"]
     }), Sd = qr({decimal: ".", thousands: ",", grouping: [3], currency: ["₪", ""]}), Ad = qr({
          decimal: ",",
          thousands: " ",
          grouping: [3],
          currency: ["", " Ft"]
     }), Nd = qr({decimal: ",", thousands: ".", grouping: [3], currency: ["€", ""]}), Cd = qr({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["", "円"]
     }), Ed = qr({decimal: ".", thousands: ",", grouping: [3], currency: ["₩", ""]}), Pd = qr({
          decimal: ",",
          thousands: ".",
          grouping: [3],
          currency: ["", " ден."]
     }), Dd = qr({decimal: ",", thousands: ".", grouping: [3], currency: ["€ ", ""]}), Fd = qr({
          decimal: ",",
          thousands: ".",
          grouping: [3],
          currency: ["", "zł"]
     }), Ld = qr({decimal: ",", thousands: ".", grouping: [3], currency: ["R$", ""]}), Ud = qr({
          decimal: ",",
          thousands: " ",
          grouping: [3],
          currency: ["", " руб."]
     }), Yd = qr({decimal: ",", thousands: " ", grouping: [3], currency: ["", "SEK"]}), Od = qr({
          decimal: ".",
          thousands: ",",
          grouping: [3],
          currency: ["¥", ""]
     }), Hd = _d.format, Rd = _d.formatPrefix, jd = {
          "-": "",
          _: " ",
          0: "0"
     }, zd = /^\s*\d+/, qd = /^%/, Id = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g, Xd = $r({
          dateTime: "%a %b %e %X %Y",
          date: "%m/%d/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     }), Jd = $r({
          dateTime: "%A, %e de %B de %Y, %X",
          date: "%d/%m/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["diumenge", "dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte"],
          shortDays: ["dg.", "dl.", "dt.", "dc.", "dj.", "dv.", "ds."],
          months: ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"],
          shortMonths: ["gen.", "febr.", "març", "abr.", "maig", "juny", "jul.", "ag.", "set.", "oct.", "nov.", "des."]
     }), Bd = $r({
          dateTime: "%A, der %e. %B %Y, %X",
          date: "%d.%m.%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
          shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
          shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
     }), Wd = $r({
          dateTime: "%A, der %e. %B %Y, %X",
          date: "%d.%m.%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
          shortDays: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
          months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
          shortMonths: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"]
     }), Vd = $r({
          dateTime: "%a %b %e %X %Y",
          date: "%Y-%m-%d",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     }), $d = $r({
          dateTime: "%a %e %b %X %Y",
          date: "%d/%m/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     }), Zd = $r({
          dateTime: "%A, %e de %B de %Y, %X",
          date: "%d/%m/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
          shortDays: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
          months: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
          shortMonths: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"]
     }), Gd = $r({
          dateTime: "%A, %-d. %Bta %Y klo %X",
          date: "%-d.%-m.%Y",
          time: "%H:%M:%S",
          periods: ["a.m.", "p.m."],
          days: ["sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai"],
          shortDays: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"],
          months: ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"],
          shortMonths: ["Tammi", "Helmi", "Maalis", "Huhti", "Touko", "Kesä", "Heinä", "Elo", "Syys", "Loka", "Marras", "Joulu"]
     }), Kd = $r({
          dateTime: "%a %e %b %Y %X",
          date: "%Y-%m-%d",
          time: "%H:%M:%S",
          periods: ["", ""],
          days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
          shortDays: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"],
          months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
          shortMonths: ["jan", "fév", "mar", "avr", "mai", "jui", "jul", "aoû", "sep", "oct", "nov", "déc"]
     }), Qd = $r({
          dateTime: "%A, le %e %B %Y, %X",
          date: "%d/%m/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"],
          shortDays: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
          months: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"],
          shortMonths: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]
     }), tp = $r({
          dateTime: "%A, %e ב%B %Y %X",
          date: "%d.%m.%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
          shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
          months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
          shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
     }), np = $r({
          dateTime: "%Y. %B %-e., %A %X",
          date: "%Y. %m. %d.",
          time: "%H:%M:%S",
          periods: ["de.", "du."],
          days: ["vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat"],
          shortDays: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
          months: ["január", "február", "március", "április", "május", "június", "július", "augusztus", "szeptember", "október", "november", "december"],
          shortMonths: ["jan.", "feb.", "már.", "ápr.", "máj.", "jún.", "júl.", "aug.", "szept.", "okt.", "nov.", "dec."]
     }), ep = $r({
          dateTime: "%A %e %B %Y, %X",
          date: "%d/%m/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
          shortDays: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
          months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
          shortMonths: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"]
     }), rp = $r({
          dateTime: "%Y %b %e %a %X",
          date: "%Y/%m/%d",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
          shortDays: ["日", "月", "火", "水", "木", "金", "土"],
          months: ["睦月", "如月", "弥生", "卯月", "皐月", "水無月", "文月", "葉月", "長月", "神無月", "霜月", "師走"],
          shortMonths: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"]
     }), ip = $r({
          dateTime: "%Y/%m/%d %a %X",
          date: "%Y/%m/%d",
          time: "%H:%M:%S",
          periods: ["오전", "오후"],
          days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
          shortDays: ["일", "월", "화", "수", "목", "금", "토"],
          months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          shortMonths: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
     }), ap = $r({
          dateTime: "%A, %e %B %Y г. %X",
          date: "%d.%m.%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"],
          shortDays: ["нед", "пон", "вто", "сре", "чет", "пет", "саб"],
          months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"],
          shortMonths: ["јан", "фев", "мар", "апр", "мај", "јун", "јул", "авг", "сеп", "окт", "ное", "дек"]
     }), op = $r({
          dateTime: "%a %e %B %Y %T",
          date: "%d-%m-%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"],
          shortDays: ["zo", "ma", "di", "wo", "do", "vr", "za"],
          months: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
          shortMonths: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"]
     }), up = $r({
          dateTime: "%A, %e %B %Y, %X",
          date: "%d/%m/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
          shortDays: ["Niedz.", "Pon.", "Wt.", "Śr.", "Czw.", "Pt.", "Sob."],
          months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
          shortMonths: ["Stycz.", "Luty", "Marz.", "Kwie.", "Maj", "Czerw.", "Lipc.", "Sierp.", "Wrz.", "Paźdz.", "Listop.", "Grudz."]
     }), sp = $r({
          dateTime: "%A, %e de %B de %Y. %X",
          date: "%d/%m/%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
          shortDays: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
          months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
          shortMonths: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
     }), cp = $r({
          dateTime: "%A, %e %B %Y г. %X",
          date: "%d.%m.%Y",
          time: "%H:%M:%S",
          periods: ["AM", "PM"],
          days: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
          shortDays: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
          months: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
          shortMonths: ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
     }), fp = $r({
          dateTime: "%A den %d %B %Y %X",
          date: "%Y-%m-%d",
          time: "%H:%M:%S",
          periods: ["fm", "em"],
          days: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"],
          shortDays: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"],
          months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
          shortMonths: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"]
     }), lp = $r({
          dateTime: "%a %b %e %X %Y",
          date: "%Y/%-m/%-d",
          time: "%H:%M:%S",
          periods: ["上午", "下午"],
          days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
          shortDays: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
          months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
          shortMonths: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
     }), hp = "%Y-%m-%dT%H:%M:%S.%LZ", dp = Date.prototype.toISOString ? Ii : Xd.utcFormat(hp), pp = +new Date("2000-01-01T00:00:00.000Z") ? Xi : Xd.utcParse(hp), _p = Xd.format, yp = Xd.parse, gp = Xd.utcFormat, mp = Xd.utcParse, vp = Array.prototype, bp = vp.map, xp = vp.slice, Mp = {name: "implicit"}, wp = [0, 1], Tp = 1e3, kp = 60 * Tp, Sp = 60 * kp, Ap = 24 * Sp, Np = 7 * Ap, Cp = 30 * Ap, Ep = 365 * Ap, Pp = Sa("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Dp = Sa("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), Fp = Sa("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), Lp = Sa("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), Up = Sa("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"), Yp = Sa("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"), Op = Sa("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"), Hp = Sa("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"), Rp = "http://www.w3.org/1999/xhtml", jp = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: Rp,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/"
     }, zp = function (t) {
          return function () {
               return this.matches(t)
          }
     };
     if ("undefined" != typeof document) {
          var qp = document.documentElement;
          if (!qp.matches) {
               var Ip = qp.webkitMatchesSelector || qp.msMatchesSelector || qp.mozMatchesSelector || qp.oMatchesSelector;
               zp = function (t) {
                    return function () {
                         return Ip.call(this, t)
                    }
               }
          }
     }
     var Xp = zp, Jp = {};
     if (t.event = null, "undefined" != typeof document) {
          var Bp = document.documentElement;
          "onmouseenter" in Bp || (Jp = {mouseenter: "mouseover", mouseleave: "mouseout"})
     }
     var Wp = "$";
     so.prototype = {
          constructor: so, appendChild: function (t) {
               return this._parent.insertBefore(t, this._next)
          }, insertBefore: function (t, n) {
               return this._parent.insertBefore(t, n)
          }, querySelector: function (t) {
               return this._parent.querySelector(t)
          }, querySelectorAll: function (t) {
               return this._parent.querySelectorAll(t)
          }
     }, jo.prototype = {
          add: function (t) {
               var n = this._names.indexOf(t);
               0 > n && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")))
          }, remove: function (t) {
               var n = this._names.indexOf(t);
               n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")))
          }, contains: function (t) {
               return this._names.indexOf(t) >= 0
          }
     };
     var Vp = [null];
     yu.prototype = gu.prototype = {
          constructor: yu,
          select: to,
          selectAll: eo,
          filter: ro,
          data: uo,
          enter: fo,
          exit: lo,
          merge: ho,
          order: po,
          sort: _o,
          call: go,
          nodes: mo,
          node: vo,
          size: bo,
          empty: xo,
          each: Mo,
          attr: Co,
          style: Fo,
          property: Oo,
          classed: Bo,
          text: Zo,
          html: tu,
          raise: eu,
          lower: iu,
          append: su,
          remove: fu,
          datum: lu,
          on: Za,
          dispatch: _u
     };
     var $p = "undefined" != typeof navigator && /WebKit/.test(navigator.userAgent) ? -1 : 0, Zp = ir("start", "end", "interrupt"), Gp = [], Kp = 0, Qp = 1, t_ = 2, n_ = 3, e_ = 4, r_ = 5, i_ = gu.prototype.constructor, a_ = 0, o_ = gu.prototype;
     bs.prototype = xs.prototype = {
          constructor: bs,
          select: os,
          selectAll: us,
          filter: Qu,
          merge: ts,
          selection: ss,
          transition: vs,
          call: o_.call,
          nodes: o_.nodes,
          node: o_.node,
          size: o_.size,
          empty: o_.empty,
          each: o_.each,
          on: rs,
          attr: zu,
          attrTween: Xu,
          style: ds,
          styleTween: _s,
          text: ms,
          remove: as,
          tween: Du,
          delay: Wu,
          duration: Zu,
          ease: Ku
     };
     var u_ = {time: null, delay: 0, duration: 250, ease: rt};
     gu.prototype.interrupt = Cu, gu.prototype.transition = Ts;
     var s_ = [null], c_ = Array.prototype.slice, f_ = 1, l_ = 2, h_ = 3, d_ = 4, p_ = 1e-6;
     Hs.prototype = {
          constructor: Hs, insert: function (t, n) {
               var e, r, i;
               if (t) {
                    if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                         for (t = t.R; t.L;)t = t.L;
                         t.L = n
                    } else t.R = n;
                    e = t
               } else this._ ? (t = qs(this._), n.P = null, n.N = t, t.P = t.L = n, e = t) : (n.P = n.N = null, this._ = n, e = null);
               for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;)r = e.U, e === r.L ? (i = r.R, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.R && (js(this, e), t = e, e = t.U), e.C = !1, r.C = !0, zs(this, r))) : (i = r.L, i && i.C ? (e.C = i.C = !1, r.C = !0, t = r) : (t === e.L && (zs(this, e), t = e, e = t.U), e.C = !1, r.C = !0, js(this, r))), e = t.U;
               this._.C = !1
          }, remove: function (t) {
               t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
               var n, e, r, i = t.U, a = t.L, o = t.R;
               if (e = a ? o ? qs(o) : a : o, i ? i.L === t ? i.L = e : i.R = e : this._ = e, a && o ? (r = e.C, e.C = t.C, e.L = a, a.U = e, e !== o ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = o, o.U = e) : (e.U = i, i = e, t = e.R)) : (r = t.C, t = e), t && (t.U = i), !r) {
                    if (t && t.C)return void(t.C = !1);
                    do {
                         if (t === this._)break;
                         if (t === i.L) {
                              if (n = i.R, n.C && (n.C = !1, i.C = !0, js(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                   n.R && n.R.C || (n.L.C = !1, n.C = !0, zs(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, js(this, i), t = this._;
                                   break
                              }
                         } else if (n = i.L, n.C && (n.C = !1, i.C = !0, zs(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                              n.L && n.L.C || (n.R.C = !1, n.C = !0, js(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, zs(this, i), t = this._;
                              break
                         }
                         n.C = !0, t = i, i = i.U
                    } while (!t.C);
                    t && (t.C = !1)
               }
          }
     };
     var __, y_, g_, m_, v_, b_ = [], x_ = [], M_ = 1e-6, w_ = 1e-12;
     dc.prototype = {
          constructor: dc, polygons: function () {
               var t = this.cells, n = this.cellEdges, e = this.extent, r = e[0][0], i = e[0][1], a = e[1][0], o = e[1][1], u = new Array(t.length);
               return t.forEach(function (t, e) {
                    var s, c = t.site, f = t.halfedges;
                    if (f.length)s = f.map(function (e) {
                         return Gs(t, n[e])
                    }); else {
                         if (!(c[0] >= r && c[0] <= a && c[1] >= i && c[1] <= o))return;
                         s = [[r, o], [a, o], [a, i], [r, i]]
                    }
                    u[e] = s, s.data = c.data
               }), u
          }, triangles: function () {
               var t = [], n = this.edges;
               return this.cells.forEach(function (e, r) {
                    for (var i, a = e.site, o = e.halfedges, u = -1, s = o.length, c = n[o[s - 1]], f = c.left === a ? c.right : c.left; ++u < s;)i = f, c = n[o[u]], f = c.left === a ? c.right : c.left, r < i.index && r < f.index && lc(a, i, f) < 0 && t.push([a.data, i.data, f.data])
               }), t
          }, links: function () {
               return this.edges.filter(function (t) {
                    return t.right
               }).map(function (t) {
                    return {source: t.left.data, target: t.right.data}
               })
          }
     }, t.version = _c, t.bisect = gc, t.bisectRight = gc, t.bisectLeft = mc, t.ascending = n, t.bisector = e, t.descending = i, t.deviation = u, t.extent = s, t.histogram = y, t.thresholdFreedmanDiaconis = m, t.thresholdScott = v, t.thresholdSturges = p, t.max = b, t.mean = x, t.median = M, t.merge = w, t.min = T, t.pairs = k, t.permute = S, t.quantile = g, t.range = l, t.scan = A, t.shuffle = N, t.sum = C, t.ticks = h, t.transpose = E, t.variance = o, t.zip = D, t.entries = X, t.keys = q, t.values = I, t.map = L, t.set = z, t.nest = U, t.randomUniform = J, t.randomNormal = B, t.randomLogNormal = W, t.randomBates = $, t.randomIrwinHall = V, t.randomExponential = Z, t.easeLinear = G, t.easeQuad = tt, t.easeQuadIn = K, t.easeQuadOut = Q, t.easeQuadInOut = tt, t.easeCubic = rt, t.easeCubicIn = nt, t.easeCubicOut = et, t.easeCubicInOut = rt, t.easePoly = Ac, t.easePolyIn = kc, t.easePolyOut = Sc, t.easePolyInOut = Ac, t.easeSin = ot, t.easeSinIn = it, t.easeSinOut = at, t.easeSinInOut = ot, t.easeExp = ct, t.easeExpIn = ut, t.easeExpOut = st, t.easeExpInOut = ct, t.easeCircle = ht, t.easeCircleIn = ft, t.easeCircleOut = lt, t.easeCircleInOut = ht, t.easeBounce = pt, t.easeBounceIn = dt, t.easeBounceOut = pt, t.easeBounceInOut = _t, t.easeBack = Ic, t.easeBackIn = zc, t.easeBackOut = qc, t.easeBackInOut = Ic, t.easeElastic = Vc, t.easeElasticIn = Wc, t.easeElasticOut = Vc, t.easeElasticInOut = $c, t.polygonArea = yt, t.polygonCentroid = gt, t.polygonHull = xt, t.polygonContains = Mt, t.polygonLength = wt, t.path = kt, t.quadtree = Dt, t.queue = Rt, t.arc = $t, t.area = tn, t.line = nn, t.pie = an, t.radialArea = sn, t.radialLine = cn, t.symbol = fn, t.symbols = kf, t.symbolCircle = uf, t.symbolCross = sf, t.symbolDiamond = lf, t.symbolSquare = gf, t.symbolStar = yf, t.symbolTriangle = vf,t.symbolWye = Tf,t.curveBasisClosed = yn,t.curveBasisOpen = mn,t.curveBasis = pn,t.curveBundle = Sf,t.curveCardinalClosed = Nf,t.curveCardinalOpen = Cf,t.curveCardinal = Af,t.curveCatmullRomClosed = Pf,t.curveCatmullRomOpen = Df,t.curveCatmullRom = Ef,t.curveLinearClosed = Cn,t.curveLinear = Gt,t.curveMonotoneX = On,t.curveMonotoneY = Hn,t.curveNatural = zn,t.curveStep = In,t.curveStepAfter = Jn,t.curveStepBefore = Xn,t.stack = $n,t.stackOffsetExpand = Zn,t.stackOffsetNone = Bn,t.stackOffsetSilhouette = Gn,t.stackOffsetWiggle = Kn,t.stackOrderAscending = Qn,t.stackOrderDescending = ne,t.stackOrderInsideOut = ee,t.stackOrderNone = Wn,t.stackOrderReverse = re,t.color = ue,t.rgb = le,t.hsl = _e,t.lab = ve,t.hcl = Se,t.cubehelix = Ce,t.interpolate = Ie,t.interpolateArray = Oe,t.interpolateNumber = He,t.interpolateObject = Re,t.interpolateRound = Xe,t.interpolateString = qe,t.interpolateTransformCss = ml,t.interpolateTransformSvg = vl,t.interpolateZoom = Ke,t.interpolateRgb = dl,t.interpolateHsl = Qe,t.interpolateHslLong = tr,t.interpolateLab = nr,t.interpolateHcl = er,t.interpolateHclLong = rr,t.interpolateCubehelix = Tl,t.interpolateCubehelixLong = kl,t.dispatch = ir,t.dsvFormat = hr,t.csvParse = El,t.csvParseRows = Pl,t.csvFormat = Dl,t.csvFormatRows = Fl,t.tsvParse = Ul,t.tsvParseRows = Yl,t.tsvFormat = Ol,t.tsvFormatRows = Hl,t.request = dr,t.html = Rl,t.json = jl,t.text = zl,t.xml = ql,t.csv = Il,t.tsv = Xl,t.now = vr,t.timer = Mr,t.timerFlush = wr,t.timeout = Nr,t.interval = Cr,t.timeInterval = Er,t.timeMillisecond = eh,t.timeMilliseconds = Lh,t.timeSecond = ch,t.timeSeconds = Uh,t.timeMinute = fh,t.timeMinutes = Yh,t.timeHour = lh,t.timeHours = Oh,t.timeDay = hh,t.timeDays = Hh,t.timeWeek = dh,t.timeWeeks = Bh,t.timeSunday = dh,t.timeSundays = Rh,t.timeMonday = ph,t.timeMondays = jh,t.timeTuesday = _h,t.timeTuesdays = zh,t.timeWednesday = yh,t.timeWednesdays = qh,t.timeThursday = gh,t.timeThursdays = Ih,t.timeFriday = mh,t.timeFridays = Xh,t.timeSaturday = vh,t.timeSaturdays = Jh,t.timeMonth = bh,t.timeMonths = Wh,t.timeYear = xh,t.timeYears = Vh,t.utcMillisecond = $h,t.utcMilliseconds = Zh,t.utcSecond = Gh,t.utcSeconds = Kh,t.utcMinute = Mh,t.utcMinutes = Qh,t.utcHour = wh,t.utcHours = td,t.utcDay = Th,t.utcDays = nd,t.utcWeek = kh,t.utcWeeks = cd,t.utcSunday = kh,t.utcSundays = ed,t.utcMonday = Sh,t.utcMondays = rd,t.utcTuesday = Ah,t.utcTuesdays = id,t.utcWednesday = Nh,t.utcWednesdays = ad,t.utcThursday = Ch,t.utcThursdays = od,t.utcFriday = Eh,t.utcFridays = ud,t.utcSaturday = Ph,t.utcSaturdays = sd,t.utcMonth = Dh,t.utcMonths = fd,t.utcYear = Fh,t.utcYears = ld,t.format = Hd,t.formatPrefix = Rd,t.formatLocale = qr,t.formatCaEs = yd,t.formatCsCz = gd,t.formatDeCh = md,t.formatDeDe = vd,t.formatEnCa = bd,t.formatEnGb = xd,t.formatEnUs = _d,t.formatEsEs = Md,t.formatFiFi = wd,t.formatFrCa = Td,t.formatFrFr = kd,t.formatHeIl = Sd,t.formatHuHu = Ad,t.formatItIt = Nd,t.formatJaJp = Cd,t.formatKoKr = Ed,t.formatMkMk = Pd,t.formatNlNl = Dd,t.formatPlPl = Fd,t.formatPtBr = Ld,t.formatRuRu = Ud,t.formatSvSe = Yd,t.formatZhCn = Od,t.formatSpecifier = Rr,t.precisionFixed = Ir,t.precisionPrefix = Xr,t.precisionRound = Jr,t.timeFormat = _p,t.timeParse = yp,t.utcFormat = gp,t.utcParse = mp,t.isoFormat = dp,t.isoParse = pp,t.timeFormatLocale = $r,t.timeFormatCaEs = Jd,t.timeFormatDeCh = Bd,t.timeFormatDeDe = Wd,t.timeFormatEnCa = Vd,t.timeFormatEnGb = $d,t.timeFormatEnUs = Xd,t.timeFormatEsEs = Zd,t.timeFormatFiFi = Gd,t.timeFormatFrCa = Kd,t.timeFormatFrFr = Qd,t.timeFormatHeIl = tp,t.timeFormatHuHu = np,t.timeFormatItIt = ep,t.timeFormatJaJp = rp,t.timeFormatKoKr = ip,t.timeFormatMkMk = ap,t.timeFormatNlNl = op,t.timeFormatPlPl = up,t.timeFormatPtBr = sp,t.timeFormatRuRu = cp,t.timeFormatSvSe = fp,t.timeFormatZhCn = lp,t.scaleBand = Bi,t.scalePoint = Vi,t.scaleIdentity = ua,t.scaleLinear = oa,t.scaleLog = _a,t.scaleOrdinal = Ji,t.scaleImplicit = Mp,t.scalePow = ga,t.scaleSqrt = ma,t.scaleQuantile = va,t.scaleQuantize = ba,t.scaleThreshold = xa,t.scaleTime = Ta,t.scaleUtc = ka,t.scaleCategory10 = Aa,t.scaleCategory20b = Na,t.scaleCategory20c = Ca,t.scaleCategory20 = Ea,t.scaleCubehelix = Pa,t.scaleRainbow = Ua,t.scaleWarm = Fa,t.scaleCool = La,t.scaleViridis = Oa,t.scaleMagma = Ha,t.scaleInferno = Ra,t.scalePlasma = ja,t.mouse = bu,t.namespace = za,t.namespaces = jp,t.select = mu,t.selectAll = xu,t.selection = gu,t.touch = Mu,t.touches = wu,t.active = ks,t.transition = xs,t.axisTop = Ps,t.axisRight = Ds,t.axisBottom = Fs,t.axisLeft = Ls,t.voronoi = pc
});