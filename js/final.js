(function (e, t) {
  "use strict";
  function n(e) {
    var t = e.length,
      n = ut.type(e);
    return ut.isWindow(e)
      ? !1
      : 1 === e.nodeType && t
      ? !0
      : "array" === n ||
        ("function" !== n &&
          (0 === t || ("number" == typeof t && t > 0 && t - 1 in e)));
  }
  function r(e) {
    var t = (Et[e] = {});
    return (
      ut.each(e.match(ft) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function i(e, n, r, i) {
    if (ut.acceptData(e)) {
      var s,
        o,
        u = ut.expando,
        a = "string" == typeof n,
        f = e.nodeType,
        l = f ? ut.cache : e,
        c = f ? e[u] : e[u] && u;
      if ((c && l[c] && (i || l[c].data)) || !a || r !== t)
        return (
          c || (f ? (e[u] = c = Y.pop() || ut.guid++) : (c = u)),
          l[c] || ((l[c] = {}), f || (l[c].toJSON = ut.noop)),
          ("object" == typeof n || "function" == typeof n) &&
            (i
              ? (l[c] = ut.extend(l[c], n))
              : (l[c].data = ut.extend(l[c].data, n))),
          (s = l[c]),
          i || (s.data || (s.data = {}), (s = s.data)),
          r !== t && (s[ut.camelCase(n)] = r),
          a ? ((o = s[n]), null == o && (o = s[ut.camelCase(n)])) : (o = s),
          o
        );
    }
  }
  function s(e, t, n) {
    if (ut.acceptData(e)) {
      var r,
        i,
        s,
        o = e.nodeType,
        a = o ? ut.cache : e,
        f = o ? e[ut.expando] : ut.expando;
      if (a[f]) {
        if (t && (r = n ? a[f] : a[f].data)) {
          ut.isArray(t)
            ? (t = t.concat(ut.map(t, ut.camelCase)))
            : t in r
            ? (t = [t])
            : ((t = ut.camelCase(t)), (t = t in r ? [t] : t.split(" ")));
          for (i = 0, s = t.length; s > i; i++) delete r[t[i]];
          if (!(n ? u : ut.isEmptyObject)(r)) return;
        }
        (n || (delete a[f].data, u(a[f]))) &&
          (o
            ? ut.cleanData([e], !0)
            : ut.support.deleteExpando || a != a.window
            ? delete a[f]
            : (a[f] = null));
      }
    }
  }
  function o(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(xt, "-$1").toLowerCase();
      if (((r = e.getAttribute(i)), "string" == typeof r)) {
        try {
          r =
            "true" === r
              ? !0
              : "false" === r
              ? !1
              : "null" === r
              ? null
              : +r + "" === r
              ? +r
              : St.test(r)
              ? ut.parseJSON(r)
              : r;
        } catch (s) {}
        ut.data(e, n, r);
      } else r = t;
    }
    return r;
  }
  function u(e) {
    var t;
    for (t in e)
      if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t)
        return !1;
    return !0;
  }
  function a() {
    return !0;
  }
  function f() {
    return !1;
  }
  function l(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e;
  }
  function c(e, t, n) {
    if (((t = t || 0), ut.isFunction(t)))
      return ut.grep(e, function (e, r) {
        var i = !!t.call(e, r, e);
        return i === n;
      });
    if (t.nodeType)
      return ut.grep(e, function (e) {
        return (e === t) === n;
      });
    if ("string" == typeof t) {
      var r = ut.grep(e, function (e) {
        return 1 === e.nodeType;
      });
      if (Rt.test(t)) return ut.filter(t, r, !n);
      t = ut.filter(t, r);
    }
    return ut.grep(e, function (e) {
      return ut.inArray(e, t) >= 0 === n;
    });
  }
  function h(e) {
    var t = Wt.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) for (; t.length; ) n.createElement(t.pop());
    return n;
  }
  function p(e, t) {
    return (
      e.getElementsByTagName(t)[0] ||
      e.appendChild(e.ownerDocument.createElement(t))
    );
  }
  function d(e) {
    var t = e.getAttributeNode("type");
    return (e.type = (t && t.specified) + "/" + e.type), e;
  }
  function v(e) {
    var t = nn.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function m(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"));
  }
  function g(e, t) {
    if (1 === t.nodeType && ut.hasData(e)) {
      var n,
        r,
        i,
        s = ut._data(e),
        o = ut._data(t, s),
        u = s.events;
      if (u) {
        delete o.handle, (o.events = {});
        for (n in u)
          for (r = 0, i = u[n].length; i > r; r++) ut.event.add(t, n, u[n][r]);
      }
      o.data && (o.data = ut.extend({}, o.data));
    }
  }
  function y(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (
        ((n = t.nodeName.toLowerCase()),
        !ut.support.noCloneEvent && t[ut.expando])
      ) {
        r = ut._data(t);
        for (i in r.events) ut.removeEvent(t, i, r.handle);
        t.removeAttribute(ut.expando);
      }
      "script" === n && t.text !== e.text
        ? ((d(t).text = e.text), v(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          ut.support.html5Clone &&
            e.innerHTML &&
            !ut.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && Zt.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
  }
  function b(e, n) {
    var r,
      i,
      s = 0,
      o =
        e.getElementsByTagName !== t
          ? e.getElementsByTagName(n || "*")
          : e.querySelectorAll !== t
          ? e.querySelectorAll(n || "*")
          : t;
    if (!o)
      for (o = [], r = e.childNodes || e; null != (i = r[s]); s++)
        !n || ut.nodeName(i, n) ? o.push(i) : ut.merge(o, b(i, n));
    return n === t || (n && ut.nodeName(e, n)) ? ut.merge([e], o) : o;
  }
  function w(e) {
    Zt.test(e.type) && (e.defaultChecked = e.checked);
  }
  function E(e, t) {
    if (t in e) return t;
    for (
      var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = xn.length;
      i--;

    )
      if (((t = xn[i] + n), t in e)) return t;
    return r;
  }
  function S(e, t) {
    return (
      (e = t || e),
      "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    );
  }
  function x(e, t) {
    for (var n, r = [], i = 0, s = e.length; s > i; i++)
      (n = e[i]),
        n.style &&
          ((r[i] = ut._data(n, "olddisplay")),
          t
            ? (r[i] || "none" !== n.style.display || (n.style.display = ""),
              "" === n.style.display &&
                S(n) &&
                (r[i] = ut._data(n, "olddisplay", k(n.nodeName))))
            : r[i] || S(n) || ut._data(n, "olddisplay", ut.css(n, "display")));
    for (i = 0; s > i; i++)
      (n = e[i]),
        n.style &&
          ((t && "none" !== n.style.display && "" !== n.style.display) ||
            (n.style.display = t ? r[i] || "" : "none"));
    return e;
  }
  function T(e, t, n) {
    var r = mn.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function N(e, t, n, r, i) {
    for (
      var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        o = 0;
      4 > s;
      s += 2
    )
      "margin" === n && (o += ut.css(e, n + Sn[s], !0, i)),
        r
          ? ("content" === n && (o -= ut.css(e, "padding" + Sn[s], !0, i)),
            "margin" !== n &&
              (o -= ut.css(e, "border" + Sn[s] + "Width", !0, i)))
          : ((o += ut.css(e, "padding" + Sn[s], !0, i)),
            "padding" !== n &&
              (o += ut.css(e, "border" + Sn[s] + "Width", !0, i)));
    return o;
  }
  function C(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      s = fn(e),
      o =
        ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, s);
    if (0 >= i || null == i) {
      if (
        ((i = an(e, t, s)),
        (0 > i || null == i) && (i = e.style[t]),
        gn.test(i))
      )
        return i;
      (r = o && (ut.support.boxSizingReliable || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + N(e, t, n || (o ? "border" : "content"), r, s) + "px";
  }
  function k(e) {
    var t = $,
      n = bn[e];
    return (
      n ||
        ((n = L(e, t)),
        ("none" !== n && n) ||
          ((ln = (
            ln ||
            ut("<iframe frameborder='0' width='0' height='0'>").css(
              "cssText",
              "display:block !important"
            )
          ).appendTo(t.documentElement)),
          (t = (ln[0].contentWindow || ln[0].contentDocument).document),
          t.write("<!doctype html><html><body>"),
          t.close(),
          (n = L(e, t)),
          ln.detach()),
        (bn[e] = n)),
      n
    );
  }
  function L(e, t) {
    var n = ut(t.createElement(e)).appendTo(t.body),
      r = ut.css(n[0], "display");
    return n.remove(), r;
  }
  function A(e, t, n, r) {
    var i;
    if (ut.isArray(t))
      ut.each(t, function (t, i) {
        n || Nn.test(e)
          ? r(e, i)
          : A(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== ut.type(t)) r(e, t);
    else for (i in t) A(e + "[" + i + "]", t[i], n, r);
  }
  function O(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        s = t.toLowerCase().match(ft) || [];
      if (ut.isFunction(n))
        for (; (r = s[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function M(e, n, r, i) {
    function s(a) {
      var f;
      return (
        (o[a] = !0),
        ut.each(e[a] || [], function (e, a) {
          var l = a(n, r, i);
          return "string" != typeof l || u || o[l]
            ? u
              ? !(f = l)
              : t
            : (n.dataTypes.unshift(l), s(l), !1);
        }),
        f
      );
    }
    var o = {},
      u = e === Un;
    return s(n.dataTypes[0]) || (!o["*"] && s("*"));
  }
  function _(e, n) {
    var r,
      i,
      s = ut.ajaxSettings.flatOptions || {};
    for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
    return i && ut.extend(!0, e, i), e;
  }
  function D(e, n, r) {
    var i,
      s,
      o,
      u,
      a = e.contents,
      f = e.dataTypes,
      l = e.responseFields;
    for (s in l) s in r && (n[l[s]] = r[s]);
    for (; "*" === f[0]; )
      f.shift(),
        i === t && (i = e.mimeType || n.getResponseHeader("Content-Type"));
    if (i)
      for (s in a)
        if (a[s] && a[s].test(i)) {
          f.unshift(s);
          break;
        }
    if (f[0] in r) o = f[0];
    else {
      for (s in r) {
        if (!f[0] || e.converters[s + " " + f[0]]) {
          o = s;
          break;
        }
        u || (u = s);
      }
      o = o || u;
    }
    return o ? (o !== f[0] && f.unshift(o), r[o]) : t;
  }
  function P(e, t) {
    var n,
      r,
      i,
      s,
      o = {},
      u = 0,
      a = e.dataTypes.slice(),
      f = a[0];
    if ((e.dataFilter && (t = e.dataFilter(t, e.dataType)), a[1]))
      for (n in e.converters) o[n.toLowerCase()] = e.converters[n];
    for (; (i = a[++u]); )
      if ("*" !== i) {
        if ("*" !== f && f !== i) {
          if (((n = o[f + " " + i] || o["* " + i]), !n))
            for (r in o)
              if (
                ((s = r.split(" ")),
                s[1] === i && (n = o[f + " " + s[0]] || o["* " + s[0]]))
              ) {
                n === !0
                  ? (n = o[r])
                  : o[r] !== !0 && ((i = s[0]), a.splice(u--, 0, i));
                break;
              }
          if (n !== !0)
            if (n && e["throws"]) t = n(t);
            else
              try {
                t = n(t);
              } catch (l) {
                return {
                  state: "parsererror",
                  error: n ? l : "No conversion from " + f + " to " + i,
                };
              }
        }
        f = i;
      }
    return { state: "success", data: t };
  }
  function H() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function B() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  function j() {
    return (
      setTimeout(function () {
        Gn = t;
      }),
      (Gn = ut.now())
    );
  }
  function F(e, t) {
    ut.each(t, function (t, n) {
      for (
        var r = (rr[t] || []).concat(rr["*"]), i = 0, s = r.length;
        s > i;
        i++
      )
        if (r[i].call(e, t, n)) return;
    });
  }
  function I(e, t, n) {
    var r,
      i,
      s = 0,
      o = nr.length,
      u = ut.Deferred().always(function () {
        delete a.elem;
      }),
      a = function () {
        if (i) return !1;
        for (
          var t = Gn || j(),
            n = Math.max(0, f.startTime + f.duration - t),
            r = n / f.duration || 0,
            s = 1 - r,
            o = 0,
            a = f.tweens.length;
          a > o;
          o++
        )
          f.tweens[o].run(s);
        return (
          u.notifyWith(e, [f, s, n]),
          1 > s && a ? n : (u.resolveWith(e, [f]), !1)
        );
      },
      f = u.promise({
        elem: e,
        props: ut.extend({}, t),
        opts: ut.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Gn || j(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = ut.Tween(
            e,
            f.opts,
            t,
            n,
            f.opts.specialEasing[t] || f.opts.easing
          );
          return f.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? f.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) f.tweens[n].run(1);
          return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this;
        },
      }),
      l = f.props;
    for (q(l, f.opts.specialEasing); o > s; s++)
      if ((r = nr[s].call(f, e, l, f.opts))) return r;
    return (
      F(f, l),
      ut.isFunction(f.opts.start) && f.opts.start.call(e, f),
      ut.fx.timer(ut.extend(a, { elem: e, anim: f, queue: f.opts.queue })),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always)
    );
  }
  function q(e, t) {
    var n, r, i, s, o;
    for (n in e)
      if (
        ((r = ut.camelCase(n)),
        (i = t[r]),
        (s = e[n]),
        ut.isArray(s) && ((i = s[1]), (s = e[n] = s[0])),
        n !== r && ((e[r] = s), delete e[n]),
        (o = ut.cssHooks[r]),
        o && "expand" in o)
      ) {
        (s = o.expand(s)), delete e[r];
        for (n in s) n in e || ((e[n] = s[n]), (t[n] = i));
      } else t[r] = i;
  }
  function R(e, t, n) {
    var r,
      i,
      s,
      o,
      u,
      a,
      f,
      l,
      c,
      h = this,
      p = e.style,
      d = {},
      v = [],
      m = e.nodeType && S(e);
    n.queue ||
      ((l = ut._queueHooks(e, "fx")),
      null == l.unqueued &&
        ((l.unqueued = 0),
        (c = l.empty.fire),
        (l.empty.fire = function () {
          l.unqueued || c();
        })),
      l.unqueued++,
      h.always(function () {
        h.always(function () {
          l.unqueued--, ut.queue(e, "fx").length || l.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
        "inline" === ut.css(e, "display") &&
          "none" === ut.css(e, "float") &&
          (ut.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName)
            ? (p.zoom = 1)
            : (p.display = "inline-block"))),
      n.overflow &&
        ((p.overflow = "hidden"),
        ut.support.shrinkWrapBlocks ||
          h.done(function () {
            (p.overflow = n.overflow[0]),
              (p.overflowX = n.overflow[1]),
              (p.overflowY = n.overflow[2]);
          }));
    for (r in t)
      if (((s = t[r]), Zn.exec(s))) {
        if (
          (delete t[r], (a = a || "toggle" === s), s === (m ? "hide" : "show"))
        )
          continue;
        v.push(r);
      }
    if ((o = v.length)) {
      (u = ut._data(e, "fxshow") || ut._data(e, "fxshow", {})),
        "hidden" in u && (m = u.hidden),
        a && (u.hidden = !m),
        m
          ? ut(e).show()
          : h.done(function () {
              ut(e).hide();
            }),
        h.done(function () {
          var t;
          ut._removeData(e, "fxshow");
          for (t in d) ut.style(e, t, d[t]);
        });
      for (r = 0; o > r; r++)
        (i = v[r]),
          (f = h.createTween(i, m ? u[i] : 0)),
          (d[i] = u[i] || ut.style(e, i)),
          i in u ||
            ((u[i] = f.start),
            m &&
              ((f.end = f.start),
              (f.start = "width" === i || "height" === i ? 1 : 0)));
    }
  }
  function U(e, t, n, r, i) {
    return new U.prototype.init(e, t, n, r, i);
  }
  function z(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      (n = Sn[i]), (r["margin" + n] = r["padding" + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  function W(e) {
    return ut.isWindow(e)
      ? e
      : 9 === e.nodeType
      ? e.defaultView || e.parentWindow
      : !1;
  }
  var X,
    V,
    $ = e.document,
    J = e.location,
    K = e.jQuery,
    Q = e.$,
    G = {},
    Y = [],
    Z = "1.9.0",
    et = Y.concat,
    tt = Y.push,
    nt = Y.slice,
    rt = Y.indexOf,
    it = G.toString,
    st = G.hasOwnProperty,
    ot = Z.trim,
    ut = function (e, t) {
      return new ut.fn.init(e, t, X);
    },
    at = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ft = /\S+/g,
    lt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ct = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ht = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    pt = /^[\],:{}\s]*$/,
    dt = /(?:^|:|,)(?:\s*\[)+/g,
    vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    mt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    gt = /^-ms-/,
    yt = /-([\da-z])/gi,
    bt = function (e, t) {
      return t.toUpperCase();
    },
    wt = function () {
      $.addEventListener
        ? ($.removeEventListener("DOMContentLoaded", wt, !1), ut.ready())
        : "complete" === $.readyState &&
          ($.detachEvent("onreadystatechange", wt), ut.ready());
    };
  (ut.fn = ut.prototype =
    {
      jquery: Z,
      constructor: ut,
      init: function (e, n, r) {
        var i, s;
        if (!e) return this;
        if ("string" == typeof e) {
          if (
            ((i =
              "<" === e.charAt(0) &&
              ">" === e.charAt(e.length - 1) &&
              e.length >= 3
                ? [null, e, null]
                : ct.exec(e)),
            !i || (!i[1] && n))
          )
            return !n || n.jquery
              ? (n || r).find(e)
              : this.constructor(n).find(e);
          if (i[1]) {
            if (
              ((n = n instanceof ut ? n[0] : n),
              ut.merge(
                this,
                ut.parseHTML(
                  i[1],
                  n && n.nodeType ? n.ownerDocument || n : $,
                  !0
                )
              ),
              ht.test(i[1]) && ut.isPlainObject(n))
            )
              for (i in n)
                ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
            return this;
          }
          if (((s = $.getElementById(i[2])), s && s.parentNode)) {
            if (s.id !== i[2]) return r.find(e);
            (this.length = 1), (this[0] = s);
          }
          return (this.context = $), (this.selector = e), this;
        }
        return e.nodeType
          ? ((this.context = this[0] = e), (this.length = 1), this)
          : ut.isFunction(e)
          ? r.ready(e)
          : (e.selector !== t &&
              ((this.selector = e.selector), (this.context = e.context)),
            ut.makeArray(e, this));
      },
      selector: "",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return nt.call(this);
      },
      get: function (e) {
        return null == e
          ? this.toArray()
          : 0 > e
          ? this[this.length + e]
          : this[e];
      },
      pushStack: function (e) {
        var t = ut.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return ut.each(this, e, t);
      },
      ready: function (e) {
        return ut.ready.promise().done(e), this;
      },
      slice: function () {
        return this.pushStack(nt.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      map: function (e) {
        return this.pushStack(
          ut.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: tt,
      sort: [].sort,
      splice: [].splice,
    }),
    (ut.fn.init.prototype = ut.fn),
    (ut.extend = ut.fn.extend =
      function () {
        var e,
          n,
          r,
          i,
          s,
          o,
          u = arguments[0] || {},
          a = 1,
          f = arguments.length,
          l = !1;
        for (
          "boolean" == typeof u && ((l = u), (u = arguments[1] || {}), (a = 2)),
            "object" == typeof u || ut.isFunction(u) || (u = {}),
            f === a && ((u = this), --a);
          f > a;
          a++
        )
          if (null != (e = arguments[a]))
            for (n in e)
              (r = u[n]),
                (i = e[n]),
                u !== i &&
                  (l && i && (ut.isPlainObject(i) || (s = ut.isArray(i)))
                    ? (s
                        ? ((s = !1), (o = r && ut.isArray(r) ? r : []))
                        : (o = r && ut.isPlainObject(r) ? r : {}),
                      (u[n] = ut.extend(l, o, i)))
                    : i !== t && (u[n] = i));
        return u;
      }),
    ut.extend({
      noConflict: function (t) {
        return (
          e.$ === ut && (e.$ = Q), t && e.jQuery === ut && (e.jQuery = K), ut
        );
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? ut.readyWait++ : ut.ready(!0);
      },
      ready: function (e) {
        if (e === !0 ? !--ut.readyWait : !ut.isReady) {
          if (!$.body) return setTimeout(ut.ready);
          (ut.isReady = !0),
            (e !== !0 && --ut.readyWait > 0) ||
              (V.resolveWith($, [ut]),
              ut.fn.trigger && ut($).trigger("ready").off("ready"));
        }
      },
      isFunction: function (e) {
        return "function" === ut.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === ut.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? G[it.call(e)] || "object"
          : typeof e;
      },
      isPlainObject: function (e) {
        if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !st.call(e, "constructor") &&
            !st.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (n) {
          return !1;
        }
        var r;
        for (r in e);
        return r === t || st.call(e, r);
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      error: function (e) {
        throw Error(e);
      },
      parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && ((n = t), (t = !1)), (t = t || $);
        var r = ht.exec(e),
          i = !n && [];
        return r
          ? [t.createElement(r[1])]
          : ((r = ut.buildFragment([e], t, i)),
            i && ut(i).remove(),
            ut.merge([], r.childNodes));
      },
      parseJSON: function (n) {
        return e.JSON && e.JSON.parse
          ? e.JSON.parse(n)
          : null === n
          ? n
          : "string" == typeof n &&
            ((n = ut.trim(n)),
            n && pt.test(n.replace(vt, "@").replace(mt, "]").replace(dt, "")))
          ? Function("return " + n)()
          : (ut.error("Invalid JSON: " + n), t);
      },
      parseXML: function (n) {
        var r, i;
        if (!n || "string" != typeof n) return null;
        try {
          e.DOMParser
            ? ((i = new DOMParser()), (r = i.parseFromString(n, "text/xml")))
            : ((r = new ActiveXObject("Microsoft.XMLDOM")),
              (r.async = "false"),
              r.loadXML(n));
        } catch (s) {
          r = t;
        }
        return (
          (r &&
            r.documentElement &&
            !r.getElementsByTagName("parsererror").length) ||
            ut.error("Invalid XML: " + n),
          r
        );
      },
      noop: function () {},
      globalEval: function (t) {
        t &&
          ut.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(gt, "ms-").replace(yt, bt);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, r) {
        var i,
          s = 0,
          o = e.length,
          u = n(e);
        if (r) {
          if (u) for (; o > s && ((i = t.apply(e[s], r)), i !== !1); s++);
          else for (s in e) if (((i = t.apply(e[s], r)), i === !1)) break;
        } else if (u)
          for (; o > s && ((i = t.call(e[s], s, e[s])), i !== !1); s++);
        else for (s in e) if (((i = t.call(e[s], s, e[s])), i === !1)) break;
        return e;
      },
      trim:
        ot && !ot.call("﻿ ")
          ? function (e) {
              return null == e ? "" : ot.call(e);
            }
          : function (e) {
              return null == e ? "" : (e + "").replace(lt, "");
            },
      makeArray: function (e, t) {
        var r = t || [];
        return (
          null != e &&
            (n(Object(e))
              ? ut.merge(r, "string" == typeof e ? [e] : e)
              : tt.call(r, e)),
          r
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (rt) return rt.call(t, e, n);
          for (
            r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
            r > n;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, n) {
        var r = n.length,
          i = e.length,
          s = 0;
        if ("number" == typeof r) for (; r > s; s++) e[i++] = n[s];
        else for (; n[s] !== t; ) e[i++] = n[s++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        var r,
          i = [],
          s = 0,
          o = e.length;
        for (n = !!n; o > s; s++) (r = !!t(e[s], s)), n !== r && i.push(e[s]);
        return i;
      },
      map: function (e, t, r) {
        var i,
          s = 0,
          o = e.length,
          u = n(e),
          a = [];
        if (u)
          for (; o > s; s++)
            (i = t(e[s], s, r)), null != i && (a[a.length] = i);
        else for (s in e) (i = t(e[s], s, r)), null != i && (a[a.length] = i);
        return et.apply([], a);
      },
      guid: 1,
      proxy: function (e, n) {
        var r, i, s;
        return (
          "string" == typeof n && ((r = e[n]), (n = e), (e = r)),
          ut.isFunction(e)
            ? ((i = nt.call(arguments, 2)),
              (s = function () {
                return e.apply(n || this, i.concat(nt.call(arguments)));
              }),
              (s.guid = e.guid = e.guid || ut.guid++),
              s)
            : t
        );
      },
      access: function (e, n, r, i, s, o, u) {
        var a = 0,
          f = e.length,
          l = null == r;
        if ("object" === ut.type(r)) {
          s = !0;
          for (a in r) ut.access(e, n, a, r[a], !0, o, u);
        } else if (
          i !== t &&
          ((s = !0),
          ut.isFunction(i) || (u = !0),
          l &&
            (u
              ? (n.call(e, i), (n = null))
              : ((l = n),
                (n = function (e, t, n) {
                  return l.call(ut(e), n);
                }))),
          n)
        )
          for (; f > a; a++) n(e[a], r, u ? i : i.call(e[a], a, n(e[a], r)));
        return s ? e : l ? n.call(e) : f ? n(e[0], r) : o;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    (ut.ready.promise = function (t) {
      if (!V)
        if (((V = ut.Deferred()), "complete" === $.readyState))
          setTimeout(ut.ready);
        else if ($.addEventListener)
          $.addEventListener("DOMContentLoaded", wt, !1),
            e.addEventListener("load", ut.ready, !1);
        else {
          $.attachEvent("onreadystatechange", wt),
            e.attachEvent("onload", ut.ready);
          var n = !1;
          try {
            n = null == e.frameElement && $.documentElement;
          } catch (r) {}
          n &&
            n.doScroll &&
            (function i() {
              if (!ut.isReady) {
                try {
                  n.doScroll("left");
                } catch (e) {
                  return setTimeout(i, 50);
                }
                ut.ready();
              }
            })();
        }
      return V.promise(t);
    }),
    ut.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        G["[object " + t + "]"] = t.toLowerCase();
      }
    ),
    (X = ut($));
  var Et = {};
  (ut.Callbacks = function (e) {
    e = "string" == typeof e ? Et[e] || r(e) : ut.extend({}, e);
    var n,
      i,
      s,
      o,
      u,
      a,
      f = [],
      l = !e.once && [],
      c = function (t) {
        for (
          n = e.memory && t, i = !0, a = o || 0, o = 0, u = f.length, s = !0;
          f && u > a;
          a++
        )
          if (f[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            n = !1;
            break;
          }
        (s = !1),
          f && (l ? l.length && c(l.shift()) : n ? (f = []) : h.disable());
      },
      h = {
        add: function () {
          if (f) {
            var t = f.length;
            (function r(t) {
              ut.each(t, function (t, n) {
                var i = ut.type(n);
                "function" === i
                  ? (e.unique && h.has(n)) || f.push(n)
                  : n && n.length && "string" !== i && r(n);
              });
            })(arguments),
              s ? (u = f.length) : n && ((o = t), c(n));
          }
          return this;
        },
        remove: function () {
          return (
            f &&
              ut.each(arguments, function (e, t) {
                for (var n; (n = ut.inArray(t, f, n)) > -1; )
                  f.splice(n, 1), s && (u >= n && u--, a >= n && a--);
              }),
            this
          );
        },
        has: function (e) {
          return ut.inArray(e, f) > -1;
        },
        empty: function () {
          return (f = []), this;
        },
        disable: function () {
          return (f = l = n = t), this;
        },
        disabled: function () {
          return !f;
        },
        lock: function () {
          return (l = t), n || h.disable(), this;
        },
        locked: function () {
          return !l;
        },
        fireWith: function (e, t) {
          return (
            (t = t || []),
            (t = [e, t.slice ? t.slice() : t]),
            !f || (i && !l) || (s ? l.push(t) : c(t)),
            this
          );
        },
        fire: function () {
          return h.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return h;
  }),
    ut.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", ut.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ut.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ut.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return ut
                .Deferred(function (n) {
                  ut.each(t, function (t, s) {
                    var o = s[0],
                      u = ut.isFunction(e[t]) && e[t];
                    i[s[1]](function () {
                      var e = u && u.apply(this, arguments);
                      e && ut.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[o + "With"](
                            this === r ? n.promise() : this,
                            u ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? ut.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          ut.each(t, function (e, s) {
            var o = s[2],
              u = s[3];
            (r[s[1]] = o.add),
              u &&
                o.add(
                  function () {
                    n = u;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[s[0]] = function () {
                return i[s[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[s[0] + "With"] = o.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t,
          n,
          r,
          i = 0,
          s = nt.call(arguments),
          o = s.length,
          u = 1 !== o || (e && ut.isFunction(e.promise)) ? o : 0,
          a = 1 === u ? e : ut.Deferred(),
          f = function (e, n, r) {
            return function (i) {
              (n[e] = this),
                (r[e] = arguments.length > 1 ? nt.call(arguments) : i),
                r === t ? a.notifyWith(n, r) : --u || a.resolveWith(n, r);
            };
          };
        if (o > 1)
          for (t = Array(o), n = Array(o), r = Array(o); o > i; i++)
            s[i] && ut.isFunction(s[i].promise)
              ? s[i]
                  .promise()
                  .done(f(i, r, s))
                  .fail(a.reject)
                  .progress(f(i, n, t))
              : --u;
        return u || a.resolveWith(r, s), a.promise();
      },
    }),
    (ut.support = (function () {
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h = $.createElement("div");
      if (
        (h.setAttribute("className", "t"),
        (h.innerHTML =
          "  <link><table></table><a href='/a'>a</a><input type='checkbox'>"),
        (r = h.getElementsByTagName("*")),
        (i = h.getElementsByTagName("a")[0]),
        !r || !i || !r.length)
      )
        return {};
      (s = $.createElement("select")),
        (o = s.appendChild($.createElement("option"))),
        (u = h.getElementsByTagName("input")[0]),
        (i.style.cssText = "top:1px;float:left;opacity:.5"),
        (n = {
          getSetAttribute: "t" !== h.className,
          leadingWhitespace: 3 === h.firstChild.nodeType,
          tbody: !h.getElementsByTagName("tbody").length,
          htmlSerialize: !!h.getElementsByTagName("link").length,
          style: /top/.test(i.getAttribute("style")),
          hrefNormalized: "/a" === i.getAttribute("href"),
          opacity: /^0.5/.test(i.style.opacity),
          cssFloat: !!i.style.cssFloat,
          checkOn: !!u.value,
          optSelected: o.selected,
          enctype: !!$.createElement("form").enctype,
          html5Clone:
            "<:nav></:nav>" !== $.createElement("nav").cloneNode(!0).outerHTML,
          boxModel: "CSS1Compat" === $.compatMode,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (u.checked = !0),
        (n.noCloneChecked = u.cloneNode(!0).checked),
        (s.disabled = !0),
        (n.optDisabled = !o.disabled);
      try {
        delete h.test;
      } catch (p) {
        n.deleteExpando = !1;
      }
      (u = $.createElement("input")),
        u.setAttribute("value", ""),
        (n.input = "" === u.getAttribute("value")),
        (u.value = "t"),
        u.setAttribute("type", "radio"),
        (n.radioValue = "t" === u.value),
        u.setAttribute("checked", "t"),
        u.setAttribute("name", "t"),
        (a = $.createDocumentFragment()),
        a.appendChild(u),
        (n.appendChecked = u.checked),
        (n.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
        h.attachEvent &&
          (h.attachEvent("onclick", function () {
            n.noCloneEvent = !1;
          }),
          h.cloneNode(!0).click());
      for (c in { submit: !0, change: !0, focusin: !0 })
        h.setAttribute((f = "on" + c), "t"),
          (n[c + "Bubbles"] = f in e || h.attributes[f].expando === !1);
      return (
        (h.style.backgroundClip = "content-box"),
        (h.cloneNode(!0).style.backgroundClip = ""),
        (n.clearCloneStyle = "content-box" === h.style.backgroundClip),
        ut(function () {
          var r,
            i,
            s,
            o =
              "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            u = $.getElementsByTagName("body")[0];
          u &&
            ((r = $.createElement("div")),
            (r.style.cssText =
              "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
            u.appendChild(r).appendChild(h),
            (h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (s = h.getElementsByTagName("td")),
            (s[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (l = 0 === s[0].offsetHeight),
            (s[0].style.display = ""),
            (s[1].style.display = "none"),
            (n.reliableHiddenOffsets = l && 0 === s[0].offsetHeight),
            (h.innerHTML = ""),
            (h.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (n.boxSizing = 4 === h.offsetWidth),
            (n.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop),
            e.getComputedStyle &&
              ((n.pixelPosition =
                "1%" !== (e.getComputedStyle(h, null) || {}).top),
              (n.boxSizingReliable =
                "4px" ===
                (e.getComputedStyle(h, null) || { width: "4px" }).width),
              (i = h.appendChild($.createElement("div"))),
              (i.style.cssText = h.style.cssText = o),
              (i.style.marginRight = i.style.width = "0"),
              (h.style.width = "1px"),
              (n.reliableMarginRight = !parseFloat(
                (e.getComputedStyle(i, null) || {}).marginRight
              ))),
            h.style.zoom !== t &&
              ((h.innerHTML = ""),
              (h.style.cssText =
                o + "width:1px;padding:1px;display:inline;zoom:1"),
              (n.inlineBlockNeedsLayout = 3 === h.offsetWidth),
              (h.style.display = "block"),
              (h.innerHTML = "<div></div>"),
              (h.firstChild.style.width = "5px"),
              (n.shrinkWrapBlocks = 3 !== h.offsetWidth),
              (u.style.zoom = 1)),
            u.removeChild(r),
            (r = h = s = i = null));
        }),
        (r = s = a = o = i = u = null),
        n
      );
    })());
  var St = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    xt = /([A-Z])/g;
  ut.extend({
    cache: {},
    expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (e) {
      return (
        (e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando]), !!e && !u(e)
      );
    },
    data: function (e, t, n) {
      return i(e, t, n, !1);
    },
    removeData: function (e, t) {
      return s(e, t, !1);
    },
    _data: function (e, t, n) {
      return i(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return s(e, t, !0);
    },
    acceptData: function (e) {
      var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
      return !t || (t !== !0 && e.getAttribute("classid") === t);
    },
  }),
    ut.fn.extend({
      data: function (e, n) {
        var r,
          i,
          s = this[0],
          u = 0,
          a = null;
        if (e === t) {
          if (
            this.length &&
            ((a = ut.data(s)), 1 === s.nodeType && !ut._data(s, "parsedAttrs"))
          ) {
            for (r = s.attributes; r.length > u; u++)
              (i = r[u].name),
                i.indexOf("data-") ||
                  ((i = ut.camelCase(i.substring(5))), o(s, i, a[i]));
            ut._data(s, "parsedAttrs", !0);
          }
          return a;
        }
        return "object" == typeof e
          ? this.each(function () {
              ut.data(this, e);
            })
          : ut.access(
              this,
              function (n) {
                return n === t
                  ? s
                    ? o(s, e, ut.data(s, e))
                    : null
                  : (this.each(function () {
                      ut.data(this, e, n);
                    }),
                    t);
              },
              null,
              n,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          ut.removeData(this, e);
        });
      },
    }),
    ut.extend({
      queue: function (e, n, r) {
        var i;
        return e
          ? ((n = (n || "fx") + "queue"),
            (i = ut._data(e, n)),
            r &&
              (!i || ut.isArray(r)
                ? (i = ut._data(e, n, ut.makeArray(r)))
                : i.push(r)),
            i || [])
          : t;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = ut.queue(e, t),
          r = n.length,
          i = n.shift(),
          s = ut._queueHooks(e, t),
          o = function () {
            ut.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          (s.cur = i),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            i.call(e, o, s)),
          !r && s && s.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          ut._data(e, n) ||
          ut._data(e, n, {
            empty: ut.Callbacks("once memory").add(function () {
              ut._removeData(e, t + "queue"), ut._removeData(e, n);
            }),
          })
        );
      },
    }),
    ut.fn.extend({
      queue: function (e, n) {
        var r = 2;
        return (
          "string" != typeof e && ((n = e), (e = "fx"), r--),
          r > arguments.length
            ? ut.queue(this[0], e)
            : n === t
            ? this
            : this.each(function () {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e),
                  "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          ut.dequeue(this, e);
        });
      },
      delay: function (e, t) {
        return (
          (e = ut.fx ? ut.fx.speeds[e] || e : e),
          (t = t || "fx"),
          this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
              clearTimeout(r);
            };
          })
        );
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, n) {
        var r,
          i = 1,
          s = ut.Deferred(),
          o = this,
          u = this.length,
          a = function () {
            --i || s.resolveWith(o, [o]);
          };
        for ("string" != typeof e && ((n = e), (e = t)), e = e || "fx"; u--; )
          (r = ut._data(o[u], e + "queueHooks")),
            r && r.empty && (i++, r.empty.add(a));
        return a(), s.promise(n);
      },
    });
  var Tt,
    Nt,
    Ct = /[\t\r\n]/g,
    kt = /\r/g,
    Lt = /^(?:input|select|textarea|button|object)$/i,
    At = /^(?:a|area)$/i,
    Ot =
      /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
    Mt = /^(?:checked|selected)$/i,
    _t = ut.support.getSetAttribute,
    Dt = ut.support.input;
  ut.fn.extend({
    attr: function (e, t) {
      return ut.access(this, ut.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        ut.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return ut.access(this, ut.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = ut.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = t), delete this[e];
          } catch (n) {}
        })
      );
    },
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o = 0,
        u = this.length,
        a = "string" == typeof e && e;
      if (ut.isFunction(e))
        return this.each(function (t) {
          ut(this).addClass(e.call(this, t, this.className));
        });
      if (a)
        for (t = (e || "").match(ft) || []; u > o; o++)
          if (
            ((n = this[o]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ct, " ") : " ")))
          ) {
            for (s = 0; (i = t[s++]); )
              0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = ut.trim(r);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o = 0,
        u = this.length,
        a = 0 === arguments.length || ("string" == typeof e && e);
      if (ut.isFunction(e))
        return this.each(function (t) {
          ut(this).removeClass(e.call(this, t, this.className));
        });
      if (a)
        for (t = (e || "").match(ft) || []; u > o; o++)
          if (
            ((n = this[o]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(Ct, " ") : "")))
          ) {
            for (s = 0; (i = t[s++]); )
              for (; r.indexOf(" " + i + " ") >= 0; )
                r = r.replace(" " + i + " ", " ");
            n.className = e ? ut.trim(r) : "";
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = "boolean" == typeof t;
      return ut.isFunction(e)
        ? this.each(function (n) {
            ut(this).toggleClass(e.call(this, n, this.className, t), t);
          })
        : this.each(function () {
            if ("string" === n)
              for (
                var i, s = 0, o = ut(this), u = t, a = e.match(ft) || [];
                (i = a[s++]);

              )
                (u = r ? u : !o.hasClass(i)),
                  o[u ? "addClass" : "removeClass"](i);
            else
              ("undefined" === n || "boolean" === n) &&
                (this.className &&
                  ut._data(this, "__className__", this.className),
                (this.className =
                  this.className || e === !1
                    ? ""
                    : ut._data(this, "__className__") || ""));
          });
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(Ct, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
    val: function (e) {
      var n,
        r,
        i,
        s = this[0];
      {
        if (arguments.length)
          return (
            (i = ut.isFunction(e)),
            this.each(function (r) {
              var s,
                o = ut(this);
              1 === this.nodeType &&
                ((s = i ? e.call(this, r, o.val()) : e),
                null == s
                  ? (s = "")
                  : "number" == typeof s
                  ? (s += "")
                  : ut.isArray(s) &&
                    (s = ut.map(s, function (e) {
                      return null == e ? "" : e + "";
                    })),
                (n =
                  ut.valHooks[this.type] ||
                  ut.valHooks[this.nodeName.toLowerCase()]),
                (n && "set" in n && n.set(this, s, "value") !== t) ||
                  (this.value = s));
            })
          );
        if (s)
          return (
            (n = ut.valHooks[s.type] || ut.valHooks[s.nodeName.toLowerCase()]),
            n && "get" in n && (r = n.get(s, "value")) !== t
              ? r
              : ((r = s.value),
                "string" == typeof r ? r.replace(kt, "") : null == r ? "" : r)
          );
      }
    },
  }),
    ut.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text;
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                s = "select-one" === e.type || 0 > i,
                o = s ? null : [],
                u = s ? i + 1 : r.length,
                a = 0 > i ? u : s ? i : 0;
              u > a;
              a++
            )
              if (
                ((n = r[a]),
                !(
                  (!n.selected && a !== i) ||
                  (ut.support.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    ut.nodeName(n.parentNode, "optgroup"))
                ))
              ) {
                if (((t = ut(n).val()), s)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            var n = ut.makeArray(t);
            return (
              ut(e)
                .find("option")
                .each(function () {
                  this.selected = ut.inArray(ut(this).val(), n) >= 0;
                }),
              n.length || (e.selectedIndex = -1),
              n
            );
          },
        },
      },
      attr: function (e, n, r) {
        var i,
          s,
          o,
          u = e.nodeType;
        if (e && 3 !== u && 8 !== u && 2 !== u)
          return e.getAttribute === t
            ? ut.prop(e, n, r)
            : ((o = 1 !== u || !ut.isXMLDoc(e)),
              o &&
                ((n = n.toLowerCase()),
                (s = ut.attrHooks[n] || (Ot.test(n) ? Nt : Tt))),
              r === t
                ? s && o && "get" in s && null !== (i = s.get(e, n))
                  ? i
                  : (e.getAttribute !== t && (i = e.getAttribute(n)),
                    null == i ? t : i)
                : null !== r
                ? s && o && "set" in s && (i = s.set(e, r, n)) !== t
                  ? i
                  : (e.setAttribute(n, r + ""), r)
                : (ut.removeAttr(e, n), t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          s = t && t.match(ft);
        if (s && 1 === e.nodeType)
          for (; (n = s[i++]); )
            (r = ut.propFix[n] || n),
              Ot.test(n)
                ? !_t && Mt.test(n)
                  ? (e[ut.camelCase("default-" + n)] = e[r] = !1)
                  : (e[r] = !1)
                : ut.attr(e, n, ""),
              e.removeAttribute(_t ? n : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (
              !ut.support.radioValue &&
              "radio" === t &&
              ut.nodeName(e, "input")
            ) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (e, n, r) {
        var i,
          s,
          o,
          u = e.nodeType;
        if (e && 3 !== u && 8 !== u && 2 !== u)
          return (
            (o = 1 !== u || !ut.isXMLDoc(e)),
            o && ((n = ut.propFix[n] || n), (s = ut.propHooks[n])),
            r !== t
              ? s && "set" in s && (i = s.set(e, r, n)) !== t
                ? i
                : (e[n] = r)
              : s && "get" in s && null !== (i = s.get(e, n))
              ? i
              : e[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var n = e.getAttributeNode("tabindex");
            return n && n.specified
              ? parseInt(n.value, 10)
              : Lt.test(e.nodeName) || (At.test(e.nodeName) && e.href)
              ? 0
              : t;
          },
        },
      },
    }),
    (Nt = {
      get: function (e, n) {
        var r = ut.prop(e, n),
          i = "boolean" == typeof r && e.getAttribute(n),
          s =
            "boolean" == typeof r
              ? Dt && _t
                ? null != i
                : Mt.test(n)
                ? e[ut.camelCase("default-" + n)]
                : !!i
              : e.getAttributeNode(n);
        return s && s.value !== !1 ? n.toLowerCase() : t;
      },
      set: function (e, t, n) {
        return (
          t === !1
            ? ut.removeAttr(e, n)
            : (Dt && _t) || !Mt.test(n)
            ? e.setAttribute((!_t && ut.propFix[n]) || n, n)
            : (e[ut.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    (Dt && _t) ||
      (ut.attrHooks.value = {
        get: function (e, n) {
          var r = e.getAttributeNode(n);
          return ut.nodeName(e, "input")
            ? e.defaultValue
            : r && r.specified
            ? r.value
            : t;
        },
        set: function (e, n, r) {
          return ut.nodeName(e, "input")
            ? ((e.defaultValue = n), t)
            : Tt && Tt.set(e, n, r);
        },
      }),
    _t ||
      ((Tt = ut.valHooks.button =
        {
          get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r &&
              ("id" === n || "name" === n || "coords" === n
                ? "" !== r.value
                : r.specified)
              ? r.value
              : t;
          },
          set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return (
              i || e.setAttributeNode((i = e.ownerDocument.createAttribute(r))),
              (i.value = n += ""),
              "value" === r || n === e.getAttribute(r) ? n : t
            );
          },
        }),
      (ut.attrHooks.contenteditable = {
        get: Tt.get,
        set: function (e, t, n) {
          Tt.set(e, "" === t ? !1 : t, n);
        },
      }),
      ut.each(["width", "height"], function (e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
          set: function (e, r) {
            return "" === r ? (e.setAttribute(n, "auto"), r) : t;
          },
        });
      })),
    ut.support.hrefNormalized ||
      (ut.each(["href", "src", "width", "height"], function (e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
          get: function (e) {
            var r = e.getAttribute(n, 2);
            return null == r ? t : r;
          },
        });
      }),
      ut.each(["href", "src"], function (e, t) {
        ut.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      })),
    ut.support.style ||
      (ut.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || t;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      }),
    ut.support.optSelected ||
      (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      })),
    ut.support.enctype || (ut.propFix.enctype = "encoding"),
    ut.support.checkOn ||
      ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = {
          get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          },
        };
      }),
    ut.each(["radio", "checkbox"], function () {
      ut.valHooks[this] = ut.extend(ut.valHooks[this], {
        set: function (e, n) {
          return ut.isArray(n)
            ? (e.checked = ut.inArray(ut(e).val(), n) >= 0)
            : t;
        },
      });
    });
  var Pt = /^(?:input|select|textarea)$/i,
    Ht = /^key/,
    Bt = /^(?:mouse|contextmenu)|click/,
    jt = /^(?:focusinfocus|focusoutblur)$/,
    Ft = /^([^.]*)(?:\.(.+)|)$/;
  (ut.event = {
    global: {},
    add: function (e, n, r, i, s) {
      var o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g = 3 !== e.nodeType && 8 !== e.nodeType && ut._data(e);
      if (g) {
        for (
          r.handler && ((o = r), (r = o.handler), (s = o.selector)),
            r.guid || (r.guid = ut.guid++),
            (f = g.events) || (f = g.events = {}),
            (u = g.handle) ||
              ((u = g.handle =
                function (e) {
                  return ut === t || (e && ut.event.triggered === e.type)
                    ? t
                    : ut.event.dispatch.apply(u.elem, arguments);
                }),
              (u.elem = e)),
            n = (n || "").match(ft) || [""],
            l = n.length;
          l--;

        )
          (a = Ft.exec(n[l]) || []),
            (d = m = a[1]),
            (v = (a[2] || "").split(".").sort()),
            (h = ut.event.special[d] || {}),
            (d = (s ? h.delegateType : h.bindType) || d),
            (h = ut.event.special[d] || {}),
            (c = ut.extend(
              {
                type: d,
                origType: m,
                data: i,
                handler: r,
                guid: r.guid,
                selector: s,
                needsContext: s && ut.expr.match.needsContext.test(s),
                namespace: v.join("."),
              },
              o
            )),
            (p = f[d]) ||
              ((p = f[d] = []),
              (p.delegateCount = 0),
              (h.setup && h.setup.call(e, i, v, u) !== !1) ||
                (e.addEventListener
                  ? e.addEventListener(d, u, !1)
                  : e.attachEvent && e.attachEvent("on" + d, u))),
            h.add &&
              (h.add.call(e, c), c.handler.guid || (c.handler.guid = r.guid)),
            s ? p.splice(p.delegateCount++, 0, c) : p.push(c),
            (ut.event.global[d] = !0);
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m = ut.hasData(e) && ut._data(e);
      if (m && (a = m.events)) {
        for (t = (t || "").match(ft) || [""], f = t.length; f--; )
          if (
            ((u = Ft.exec(t[f]) || []),
            (p = v = u[1]),
            (d = (u[2] || "").split(".").sort()),
            p)
          ) {
            for (
              c = ut.event.special[p] || {},
                p = (r ? c.delegateType : c.bindType) || p,
                h = a[p] || [],
                u =
                  u[2] &&
                  RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = s = h.length;
              s--;

            )
              (l = h[s]),
                (!i && v !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (u && !u.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (h.splice(s, 1),
                  l.selector && h.delegateCount--,
                  c.remove && c.remove.call(e, l));
            o &&
              !h.length &&
              ((c.teardown && c.teardown.call(e, d, m.handle) !== !1) ||
                ut.removeEvent(e, p, m.handle),
              delete a[p]);
          } else for (p in a) ut.event.remove(e, p + t[f], n, r, !0);
        ut.isEmptyObject(a) && (delete m.handle, ut._removeData(e, "events"));
      }
    },
    trigger: function (n, r, i, s) {
      var o,
        u,
        a,
        f,
        l,
        c,
        h,
        p = [i || $],
        d = n.type || n,
        v = n.namespace ? n.namespace.split(".") : [];
      if (
        ((u = a = i = i || $),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !jt.test(d + ut.event.triggered) &&
          (d.indexOf(".") >= 0 &&
            ((v = d.split(".")), (d = v.shift()), v.sort()),
          (l = 0 > d.indexOf(":") && "on" + d),
          (n = n[ut.expando] ? n : new ut.Event(d, "object" == typeof n && n)),
          (n.isTrigger = !0),
          (n.namespace = v.join(".")),
          (n.namespace_re = n.namespace
            ? RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (n.result = t),
          n.target || (n.target = i),
          (r = null == r ? [n] : ut.makeArray(r, [n])),
          (h = ut.event.special[d] || {}),
          s || !h.trigger || h.trigger.apply(i, r) !== !1))
      ) {
        if (!s && !h.noBubble && !ut.isWindow(i)) {
          for (
            f = h.delegateType || d, jt.test(f + d) || (u = u.parentNode);
            u;
            u = u.parentNode
          )
            p.push(u), (a = u);
          a === (i.ownerDocument || $) &&
            p.push(a.defaultView || a.parentWindow || e);
        }
        for (o = 0; (u = p[o++]) && !n.isPropagationStopped(); )
          (n.type = o > 1 ? f : h.bindType || d),
            (c =
              (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle")),
            c && c.apply(u, r),
            (c = l && u[l]),
            c &&
              ut.acceptData(u) &&
              c.apply &&
              c.apply(u, r) === !1 &&
              n.preventDefault();
        if (
          ((n.type = d),
          !(
            s ||
            n.isDefaultPrevented() ||
            (h._default && h._default.apply(i.ownerDocument, r) !== !1) ||
            ("click" === d && ut.nodeName(i, "a")) ||
            !ut.acceptData(i) ||
            !l ||
            !i[d] ||
            ut.isWindow(i)
          ))
        ) {
          (a = i[l]), a && (i[l] = null), (ut.event.triggered = d);
          try {
            i[d]();
          } catch (m) {}
          (ut.event.triggered = t), a && (i[l] = a);
        }
        return n.result;
      }
    },
    dispatch: function (e) {
      e = ut.event.fix(e);
      var n,
        r,
        i,
        s,
        o,
        u = [],
        a = nt.call(arguments),
        f = (ut._data(this, "events") || {})[e.type] || [],
        l = ut.event.special[e.type] || {};
      if (
        ((a[0] = e),
        (e.delegateTarget = this),
        !l.preDispatch || l.preDispatch.call(this, e) !== !1)
      ) {
        for (
          u = ut.event.handlers.call(this, e, f), n = 0;
          (s = u[n++]) && !e.isPropagationStopped();

        )
          for (
            e.currentTarget = s.elem, r = 0;
            (o = s.handlers[r++]) && !e.isImmediatePropagationStopped();

          )
            (!e.namespace_re || e.namespace_re.test(o.namespace)) &&
              ((e.handleObj = o),
              (e.data = o.data),
              (i = (
                (ut.event.special[o.origType] || {}).handle || o.handler
              ).apply(s.elem, a)),
              i !== t &&
                (e.result = i) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, n) {
      var r,
        i,
        s,
        o,
        u = [],
        a = n.delegateCount,
        f = e.target;
      if (a && f.nodeType && (!e.button || "click" !== e.type))
        for (; f != this; f = f.parentNode || this)
          if (f.disabled !== !0 || "click" !== e.type) {
            for (i = [], r = 0; a > r; r++)
              (o = n[r]),
                (s = o.selector + " "),
                i[s] === t &&
                  (i[s] = o.needsContext
                    ? ut(s, this).index(f) >= 0
                    : ut.find(s, this, null, [f]).length),
                i[s] && i.push(o);
            i.length && u.push({ elem: f, handlers: i });
          }
      return n.length > a && u.push({ elem: this, handlers: n.slice(a) }), u;
    },
    fix: function (e) {
      if (e[ut.expando]) return e;
      var t,
        n,
        r = e,
        i = ut.event.fixHooks[e.type] || {},
        s = i.props ? this.props.concat(i.props) : this.props;
      for (e = new ut.Event(r), t = s.length; t--; ) (n = s[t]), (e[n] = r[n]);
      return (
        e.target || (e.target = r.srcElement || $),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        i.filter ? i.filter(e, r) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, n) {
        var r,
          i,
          s,
          o = n.button,
          u = n.fromElement;
        return (
          null == e.pageX &&
            null != n.clientX &&
            ((r = e.target.ownerDocument || $),
            (i = r.documentElement),
            (s = r.body),
            (e.pageX =
              n.clientX +
              ((i && i.scrollLeft) || (s && s.scrollLeft) || 0) -
              ((i && i.clientLeft) || (s && s.clientLeft) || 0)),
            (e.pageY =
              n.clientY +
              ((i && i.scrollTop) || (s && s.scrollTop) || 0) -
              ((i && i.clientTop) || (s && s.clientTop) || 0))),
          !e.relatedTarget &&
            u &&
            (e.relatedTarget = u === e.target ? n.toElement : u),
          e.which ||
            o === t ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      click: {
        trigger: function () {
          return ut.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : t;
        },
      },
      focus: {
        trigger: function () {
          if (this !== $.activeElement && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === $.activeElement && this.blur ? (this.blur(), !1) : t;
        },
        delegateType: "focusout",
      },
      beforeunload: {
        postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = ut.extend(new ut.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (ut.removeEvent = $.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, n, r) {
          var i = "on" + n;
          e.detachEvent && (e[i] === t && (e[i] = null), e.detachEvent(i, r));
        }),
    (ut.Event = function (e, n) {
      return this instanceof ut.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                e.returnValue === !1 ||
                (e.getPreventDefault && e.getPreventDefault())
                  ? a
                  : f))
            : (this.type = e),
          n && ut.extend(this, n),
          (this.timeStamp = (e && e.timeStamp) || ut.now()),
          (this[ut.expando] = !0),
          t)
        : new ut.Event(e, n);
    }),
    (ut.Event.prototype = {
      isDefaultPrevented: f,
      isPropagationStopped: f,
      isImmediatePropagationStopped: f,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = a),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = a),
          e &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = a), this.stopPropagation();
      },
    }),
    ut.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        ut.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              s = e.handleObj;
            return (
              (!i || (i !== r && !ut.contains(r, i))) &&
                ((e.type = s.origType),
                (n = s.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    ut.support.submitBubbles ||
      (ut.event.special.submit = {
        setup: function () {
          return ut.nodeName(this, "form")
            ? !1
            : (ut.event.add(
                this,
                "click._submit keypress._submit",
                function (e) {
                  var n = e.target,
                    r =
                      ut.nodeName(n, "input") || ut.nodeName(n, "button")
                        ? n.form
                        : t;
                  r &&
                    !ut._data(r, "submitBubbles") &&
                    (ut.event.add(r, "submit._submit", function (e) {
                      e._submit_bubble = !0;
                    }),
                    ut._data(r, "submitBubbles", !0));
                }
              ),
              t);
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              ut.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          return ut.nodeName(this, "form")
            ? !1
            : (ut.event.remove(this, "._submit"), t);
        },
      }),
    ut.support.changeBubbles ||
      (ut.event.special.change = {
        setup: function () {
          return Pt.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (ut.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                ut.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    ut.event.simulate("change", this, e, !0);
                })),
              !1)
            : (ut.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Pt.test(t.nodeName) &&
                  !ut._data(t, "changeBubbles") &&
                  (ut.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      ut.event.simulate("change", this.parentNode, e, !0);
                  }),
                  ut._data(t, "changeBubbles", !0));
              }),
              t);
        },
        handle: function (e) {
          var n = e.target;
          return this !== n ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== n.type && "checkbox" !== n.type)
            ? e.handleObj.handler.apply(this, arguments)
            : t;
        },
        teardown: function () {
          return ut.event.remove(this, "._change"), !Pt.test(this.nodeName);
        },
      }),
    ut.support.focusinBubbles ||
      ut.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = 0,
          r = function (e) {
            ut.event.simulate(t, e.target, ut.event.fix(e), !0);
          };
        ut.event.special[t] = {
          setup: function () {
            0 === n++ && $.addEventListener(e, r, !0);
          },
          teardown: function () {
            0 === --n && $.removeEventListener(e, r, !0);
          },
        };
      }),
    ut.fn.extend({
      on: function (e, n, r, i, s) {
        var o, u;
        if ("object" == typeof e) {
          "string" != typeof n && ((r = r || n), (n = t));
          for (u in e) this.on(u, n, r, e[u], s);
          return this;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = t))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = t))
                : ((i = r), (r = n), (n = t))),
          i === !1)
        )
          i = f;
        else if (!i) return this;
        return (
          1 === s &&
            ((o = i),
            (i = function (e) {
              return ut().off(e), o.apply(this, arguments);
            }),
            (i.guid = o.guid || (o.guid = ut.guid++))),
          this.each(function () {
            ut.event.add(this, e, i, r, n);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, n, r) {
        var i, s;
        if (e && e.preventDefault && e.handleObj)
          return (
            (i = e.handleObj),
            ut(e.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (s in e) this.off(s, n, e[s]);
          return this;
        }
        return (
          (n === !1 || "function" == typeof n) && ((r = n), (n = t)),
          r === !1 && (r = f),
          this.each(function () {
            ut.event.remove(this, e, r, n);
          })
        );
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      trigger: function (e, t) {
        return this.each(function () {
          ut.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, n) {
        var r = this[0];
        return r ? ut.event.trigger(e, n, r, !0) : t;
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    ut.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        (ut.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        }),
          Ht.test(t) && (ut.event.fixHooks[t] = ut.event.keyHooks),
          Bt.test(t) && (ut.event.fixHooks[t] = ut.event.mouseHooks);
      }
    ),
    (function (e, t) {
      function n(e) {
        return dt.test(e + "");
      }
      function r() {
        var e,
          t = [];
        return (e = function (n, r) {
          return (
            t.push((n += " ")) > T.cacheLength && delete e[t.shift()],
            (e[n] = r)
          );
        });
      }
      function i(e) {
        return (e[I] = !0), e;
      }
      function s(e) {
        var t = M.createElement("div");
        try {
          return e(t);
        } catch (n) {
          return !1;
        } finally {
          t = null;
        }
      }
      function o(e, t, n, r) {
        var i, s, o, u, a, f, l, p, d, v;
        if (
          ((t ? t.ownerDocument || t : q) !== M && O(t),
          (t = t || M),
          (n = n || []),
          !e || "string" != typeof e)
        )
          return n;
        if (1 !== (u = t.nodeType) && 9 !== u) return [];
        if (!D && !r) {
          if ((i = vt.exec(e)))
            if ((o = i[1])) {
              if (9 === u) {
                if (((s = t.getElementById(o)), !s || !s.parentNode)) return n;
                if (s.id === o) return n.push(s), n;
              } else if (
                t.ownerDocument &&
                (s = t.ownerDocument.getElementById(o)) &&
                j(t, s) &&
                s.id === o
              )
                return n.push(s), n;
            } else {
              if (i[2])
                return G.apply(n, Y.call(t.getElementsByTagName(e), 0)), n;
              if ((o = i[3]) && R.getByClassName && t.getElementsByClassName)
                return G.apply(n, Y.call(t.getElementsByClassName(o), 0)), n;
            }
          if (R.qsa && !P.test(e)) {
            if (
              ((l = !0),
              (p = I),
              (d = t),
              (v = 9 === u && e),
              1 === u && "object" !== t.nodeName.toLowerCase())
            ) {
              for (
                f = c(e),
                  (l = t.getAttribute("id"))
                    ? (p = l.replace(yt, "\\$&"))
                    : t.setAttribute("id", p),
                  p = "[id='" + p + "'] ",
                  a = f.length;
                a--;

              )
                f[a] = p + h(f[a]);
              (d = (pt.test(e) && t.parentNode) || t), (v = f.join(","));
            }
            if (v)
              try {
                return G.apply(n, Y.call(d.querySelectorAll(v), 0)), n;
              } catch (m) {
              } finally {
                l || t.removeAttribute("id");
              }
          }
        }
        return w(e.replace(ot, "$1"), t, n, r);
      }
      function u(e, t) {
        for (var n = e && t && e.nextSibling; n; n = n.nextSibling)
          if (n === t) return -1;
        return e ? 1 : -1;
      }
      function a(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return "input" === n && t.type === e;
        };
      }
      function f(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function l(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, r) {
              for (var i, s = e([], n.length, t), o = s.length; o--; )
                n[(i = s[o])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function c(e, t) {
        var n,
          r,
          i,
          s,
          u,
          a,
          f,
          l = X[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (u = e, a = [], f = T.preFilter; u; ) {
          (!n || (r = at.exec(u))) &&
            (r && (u = u.slice(r[0].length) || u), a.push((i = []))),
            (n = !1),
            (r = ft.exec(u)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(ot, " ") }),
              (u = u.slice(n.length)));
          for (s in T.filter)
            !(r = ht[s].exec(u)) ||
              (f[s] && !(r = f[s](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: s, matches: r }),
              (u = u.slice(n.length)));
          if (!n) break;
        }
        return t ? u.length : u ? o.error(e) : X(e, a).slice(0);
      }
      function h(e) {
        for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
        return r;
      }
      function p(e, t, n) {
        var r = t.dir,
          i = n && "parentNode" === t.dir,
          s = z++;
        return t.first
          ? function (t, n, s) {
              for (; (t = t[r]); ) if (1 === t.nodeType || i) return e(t, n, s);
            }
          : function (t, n, o) {
              var u,
                a,
                f,
                l = U + " " + s;
              if (o) {
                for (; (t = t[r]); )
                  if ((1 === t.nodeType || i) && e(t, n, o)) return !0;
              } else
                for (; (t = t[r]); )
                  if (1 === t.nodeType || i)
                    if (((f = t[I] || (t[I] = {})), (a = f[r]) && a[0] === l)) {
                      if ((u = a[1]) === !0 || u === x) return u === !0;
                    } else if (
                      ((a = f[r] = [l]), (a[1] = e(t, n, o) || x), a[1] === !0)
                    )
                      return !0;
            };
      }
      function d(e) {
        return e.length > 1
          ? function (t, n, r) {
              for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function v(e, t, n, r, i) {
        for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)
          (s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
        return o;
      }
      function m(e, t, n, r, s, o) {
        return (
          r && !r[I] && (r = m(r)),
          s && !s[I] && (s = m(s, o)),
          i(function (i, o, u, a) {
            var f,
              l,
              c,
              h = [],
              p = [],
              d = o.length,
              m = i || b(t || "*", u.nodeType ? [u] : u, []),
              g = !e || (!i && t) ? m : v(m, h, e, u, a),
              y = n ? (s || (i ? e : d || r) ? [] : o) : g;
            if ((n && n(g, y, u, a), r))
              for (f = v(y, p), r(f, [], u, a), l = f.length; l--; )
                (c = f[l]) && (y[p[l]] = !(g[p[l]] = c));
            if (i) {
              if (s || e) {
                if (s) {
                  for (f = [], l = y.length; l--; )
                    (c = y[l]) && f.push((g[l] = c));
                  s(null, (y = []), f, a);
                }
                for (l = y.length; l--; )
                  (c = y[l]) &&
                    (f = s ? Z.call(i, c) : h[l]) > -1 &&
                    (i[f] = !(o[f] = c));
              }
            } else (y = v(y === o ? y.splice(d, y.length) : y)), s ? s(null, o, y, a) : G.apply(o, y);
          })
        );
      }
      function g(e) {
        for (
          var t,
            n,
            r,
            i = e.length,
            s = T.relative[e[0].type],
            o = s || T.relative[" "],
            u = s ? 1 : 0,
            a = p(
              function (e) {
                return e === t;
              },
              o,
              !0
            ),
            f = p(
              function (e) {
                return Z.call(t, e) > -1;
              },
              o,
              !0
            ),
            l = [
              function (e, n, r) {
                return (
                  (!s && (r || n !== A)) ||
                  ((t = n).nodeType ? a(e, n, r) : f(e, n, r))
                );
              },
            ];
          i > u;
          u++
        )
          if ((n = T.relative[e[u].type])) l = [p(d(l), n)];
          else {
            if (((n = T.filter[e[u].type].apply(null, e[u].matches)), n[I])) {
              for (r = ++u; i > r && !T.relative[e[r].type]; r++);
              return m(
                u > 1 && d(l),
                u > 1 && h(e.slice(0, u - 1)).replace(ot, "$1"),
                n,
                r > u && g(e.slice(u, r)),
                i > r && g((e = e.slice(r))),
                i > r && h(e)
              );
            }
            l.push(n);
          }
        return d(l);
      }
      function y(e, t) {
        var n = 0,
          r = t.length > 0,
          s = e.length > 0,
          u = function (i, u, a, f, l) {
            var c,
              h,
              p,
              d = [],
              m = 0,
              g = "0",
              y = i && [],
              b = null != l,
              w = A,
              E = i || (s && T.find.TAG("*", (l && u.parentNode) || u)),
              S = (U += null == w ? 1 : Math.E);
            for (b && ((A = u !== M && u), (x = n)); null != (c = E[g]); g++) {
              if (s && c) {
                for (h = 0; (p = e[h]); h++)
                  if (p(c, u, a)) {
                    f.push(c);
                    break;
                  }
                b && ((U = S), (x = ++n));
              }
              r && ((c = !p && c) && m--, i && y.push(c));
            }
            if (((m += g), r && g !== m)) {
              for (h = 0; (p = t[h]); h++) p(y, d, u, a);
              if (i) {
                if (m > 0) for (; g--; ) y[g] || d[g] || (d[g] = Q.call(f));
                d = v(d);
              }
              G.apply(f, d),
                b && !i && d.length > 0 && m + t.length > 1 && o.uniqueSort(f);
            }
            return b && ((U = S), (A = w)), y;
          };
        return r ? i(u) : u;
      }
      function b(e, t, n) {
        for (var r = 0, i = t.length; i > r; r++) o(e, t[r], n);
        return n;
      }
      function w(e, t, n, r) {
        var i,
          s,
          o,
          u,
          a,
          f = c(e);
        if (!r && 1 === f.length) {
          if (
            ((s = f[0] = f[0].slice(0)),
            s.length > 2 &&
              "ID" === (o = s[0]).type &&
              9 === t.nodeType &&
              !D &&
              T.relative[s[1].type])
          ) {
            if (((t = T.find.ID(o.matches[0].replace(wt, Et), t)[0]), !t))
              return n;
            e = e.slice(s.shift().value.length);
          }
          for (
            i = ht.needsContext.test(e) ? -1 : s.length - 1;
            i >= 0 && ((o = s[i]), !T.relative[(u = o.type)]);
            i--
          )
            if (
              (a = T.find[u]) &&
              (r = a(
                o.matches[0].replace(wt, Et),
                (pt.test(s[0].type) && t.parentNode) || t
              ))
            ) {
              if ((s.splice(i, 1), (e = r.length && h(s)), !e))
                return G.apply(n, Y.call(r, 0)), n;
              break;
            }
        }
        return k(e, f)(r, t, D, n, pt.test(e)), n;
      }
      function E() {}
      var S,
        x,
        T,
        N,
        C,
        k,
        L,
        A,
        O,
        M,
        _,
        D,
        P,
        H,
        B,
        j,
        F,
        I = "sizzle" + -new Date(),
        q = e.document,
        R = {},
        U = 0,
        z = 0,
        W = r(),
        X = r(),
        V = r(),
        $ = typeof t,
        J = 1 << 31,
        K = [],
        Q = K.pop,
        G = K.push,
        Y = K.slice,
        Z =
          K.indexOf ||
          function (e) {
            for (var t = 0, n = this.length; n > t; t++)
              if (this[t] === e) return t;
            return -1;
          },
        et = "[\\x20\\t\\r\\n\\f]",
        tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        nt = tt.replace("w", "w#"),
        rt = "([*^$|!~]?=)",
        it =
          "\\[" +
          et +
          "*(" +
          tt +
          ")" +
          et +
          "*(?:" +
          rt +
          et +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          nt +
          ")|)|)" +
          et +
          "*\\]",
        st =
          ":(" +
          tt +
          ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
          it.replace(3, 8) +
          ")*)|.*)\\)|)",
        ot = RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"),
        at = RegExp("^" + et + "*," + et + "*"),
        ft = RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"),
        lt = RegExp(st),
        ct = RegExp("^" + nt + "$"),
        ht = {
          ID: RegExp("^#(" + tt + ")"),
          CLASS: RegExp("^\\.(" + tt + ")"),
          NAME: RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
          TAG: RegExp("^(" + tt.replace("w", "w*") + ")"),
          ATTR: RegExp("^" + it),
          PSEUDO: RegExp("^" + st),
          CHILD: RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              et +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              et +
              "*(?:([+-]|)" +
              et +
              "*(\\d+)|))" +
              et +
              "*\\)|)",
            "i"
          ),
          needsContext: RegExp(
            "^" +
              et +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              et +
              "*((?:-\\d)?\\d*)" +
              et +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        pt = /[\x20\t\r\n\f]*[+~]/,
        dt = /\{\s*\[native code\]\s*\}/,
        vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        mt = /^(?:input|select|textarea|button)$/i,
        gt = /^h\d$/i,
        yt = /'|\\/g,
        bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
        wt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
        Et = function (e, t) {
          var n = "0x" + t - 65536;
          return n !== n
            ? t
            : 0 > n
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode(55296 | (n >> 10), 56320 | (1023 & n));
        };
      try {
        Y.call(_.childNodes, 0)[0].nodeType;
      } catch (St) {
        Y = function (e) {
          for (var t, n = []; (t = this[e]); e++) n.push(t);
          return n;
        };
      }
      (C = o.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? "HTML" !== t.nodeName : !1;
        }),
        (O = o.setDocument =
          function (e) {
            var r = e ? e.ownerDocument || e : q;
            return r !== M && 9 === r.nodeType && r.documentElement
              ? ((M = r),
                (_ = r.documentElement),
                (D = C(r)),
                (R.tagNameNoComments = s(function (e) {
                  return (
                    e.appendChild(r.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (R.attributes = s(function (e) {
                  e.innerHTML = "<select></select>";
                  var t = typeof e.lastChild.getAttribute("multiple");
                  return "boolean" !== t && "string" !== t;
                })),
                (R.getByClassName = s(function (e) {
                  return (
                    (e.innerHTML =
                      "<div class='hidden e'></div><div class='hidden'></div>"),
                    e.getElementsByClassName &&
                    e.getElementsByClassName("e").length
                      ? ((e.lastChild.className = "e"),
                        2 === e.getElementsByClassName("e").length)
                      : !1
                  );
                })),
                (R.getByName = s(function (e) {
                  (e.id = I + 0),
                    (e.innerHTML =
                      "<a name='" + I + "'></a><div name='" + I + "'></div>"),
                    _.insertBefore(e, _.firstChild);
                  var t =
                    r.getElementsByName &&
                    r.getElementsByName(I).length ===
                      2 + r.getElementsByName(I + 0).length;
                  return (
                    (R.getIdNotName = !r.getElementById(I)), _.removeChild(e), t
                  );
                })),
                (T.attrHandle = s(function (e) {
                  return (
                    (e.innerHTML = "<a href='#'></a>"),
                    e.firstChild &&
                      typeof e.firstChild.getAttribute !== $ &&
                      "#" === e.firstChild.getAttribute("href")
                  );
                })
                  ? {}
                  : {
                      href: function (e) {
                        return e.getAttribute("href", 2);
                      },
                      type: function (e) {
                        return e.getAttribute("type");
                      },
                    }),
                R.getIdNotName
                  ? ((T.find.ID = function (e, t) {
                      if (typeof t.getElementById !== $ && !D) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : [];
                      }
                    }),
                    (T.filter.ID = function (e) {
                      var t = e.replace(wt, Et);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }))
                  : ((T.find.ID = function (e, n) {
                      if (typeof n.getElementById !== $ && !D) {
                        var r = n.getElementById(e);
                        return r
                          ? r.id === e ||
                            (typeof r.getAttributeNode !== $ &&
                              r.getAttributeNode("id").value === e)
                            ? [r]
                            : t
                          : [];
                      }
                    }),
                    (T.filter.ID = function (e) {
                      var t = e.replace(wt, Et);
                      return function (e) {
                        var n =
                          typeof e.getAttributeNode !== $ &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    })),
                (T.find.TAG = R.tagNameNoComments
                  ? function (e, n) {
                      return typeof n.getElementsByTagName !== $
                        ? n.getElementsByTagName(e)
                        : t;
                    }
                  : function (e, t) {
                      var n,
                        r = [],
                        i = 0,
                        s = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = s[i]); i++) 1 === n.nodeType && r.push(n);
                        return r;
                      }
                      return s;
                    }),
                (T.find.NAME =
                  R.getByName &&
                  function (e, n) {
                    return typeof n.getElementsByName !== $
                      ? n.getElementsByName(name)
                      : t;
                  }),
                (T.find.CLASS =
                  R.getByClassName &&
                  function (e, n) {
                    return typeof n.getElementsByClassName === $ || D
                      ? t
                      : n.getElementsByClassName(e);
                  }),
                (H = []),
                (P = [":focus"]),
                (R.qsa = n(r.querySelectorAll)) &&
                  (s(function (e) {
                    (e.innerHTML =
                      "<select><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length ||
                        P.push(
                          "\\[" +
                            et +
                            "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                        ),
                      e.querySelectorAll(":checked").length ||
                        P.push(":checked");
                  }),
                  s(function (e) {
                    (e.innerHTML = "<input type='hidden' i=''>"),
                      e.querySelectorAll("[i^='']").length &&
                        P.push("[*^$]=" + et + "*(?:\"\"|'')"),
                      e.querySelectorAll(":enabled").length ||
                        P.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      P.push(",.*:");
                  })),
                (R.matchesSelector = n(
                  (B =
                    _.matchesSelector ||
                    _.mozMatchesSelector ||
                    _.webkitMatchesSelector ||
                    _.oMatchesSelector ||
                    _.msMatchesSelector)
                )) &&
                  s(function (e) {
                    (R.disconnectedMatch = B.call(e, "div")),
                      B.call(e, "[s!='']:x"),
                      H.push("!=", st);
                  }),
                (P = RegExp(P.join("|"))),
                (H = RegExp(H.join("|"))),
                (j =
                  n(_.contains) || _.compareDocumentPosition
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          r = t && t.parentNode;
                        return (
                          e === r ||
                          !(
                            !r ||
                            1 !== r.nodeType ||
                            !(n.contains
                              ? n.contains(r)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(r))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (F = _.compareDocumentPosition
                  ? function (e, t) {
                      var n;
                      return e === t
                        ? ((L = !0), 0)
                        : (n =
                            t.compareDocumentPosition &&
                            e.compareDocumentPosition &&
                            e.compareDocumentPosition(t))
                        ? 1 & n ||
                          (e.parentNode && 11 === e.parentNode.nodeType)
                          ? e === r || j(q, e)
                            ? -1
                            : t === r || j(q, t)
                            ? 1
                            : 0
                          : 4 & n
                          ? -1
                          : 1
                        : e.compareDocumentPosition
                        ? -1
                        : 1;
                    }
                  : function (e, t) {
                      var n,
                        i = 0,
                        s = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        f = [t];
                      if (e === t) return (L = !0), 0;
                      if (e.sourceIndex && t.sourceIndex)
                        return (
                          (~t.sourceIndex || J) -
                          ((j(q, e) && ~e.sourceIndex) || J)
                        );
                      if (!s || !o)
                        return e === r ? -1 : t === r ? 1 : s ? -1 : o ? 1 : 0;
                      if (s === o) return u(e, t);
                      for (n = e; (n = n.parentNode); ) a.unshift(n);
                      for (n = t; (n = n.parentNode); ) f.unshift(n);
                      for (; a[i] === f[i]; ) i++;
                      return i
                        ? u(a[i], f[i])
                        : a[i] === q
                        ? -1
                        : f[i] === q
                        ? 1
                        : 0;
                    }),
                (L = !1),
                [0, 0].sort(F),
                (R.detectDuplicates = L),
                M)
              : M;
          }),
        (o.matches = function (e, t) {
          return o(e, null, null, t);
        }),
        (o.matchesSelector = function (e, t) {
          if (
            ((e.ownerDocument || e) !== M && O(e),
            (t = t.replace(bt, "='$1']")),
            !(!R.matchesSelector || D || (H && H.test(t)) || P.test(t)))
          )
            try {
              var n = B.call(e, t);
              if (
                n ||
                R.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return n;
            } catch (r) {}
          return o(t, M, null, [e]).length > 0;
        }),
        (o.contains = function (e, t) {
          return (e.ownerDocument || e) !== M && O(e), j(e, t);
        }),
        (o.attr = function (e, t) {
          var n;
          return (
            (e.ownerDocument || e) !== M && O(e),
            D || (t = t.toLowerCase()),
            (n = T.attrHandle[t])
              ? n(e)
              : D || R.attributes
              ? e.getAttribute(t)
              : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) &&
                e[t] === !0
              ? t
              : n && n.specified
              ? n.value
              : null
          );
        }),
        (o.error = function (e) {
          throw Error("Syntax error, unrecognized expression: " + e);
        }),
        (o.uniqueSort = function (e) {
          var t,
            n = [],
            r = 1,
            i = 0;
          if (((L = !R.detectDuplicates), e.sort(F), L)) {
            for (; (t = e[r]); r++) t === e[r - 1] && (i = n.push(r));
            for (; i--; ) e.splice(n[i], 1);
          }
          return e;
        }),
        (N = o.getText =
          function (e) {
            var t,
              n = "",
              r = 0,
              i = e.nodeType;
            if (i) {
              if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += N(e);
              } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (; (t = e[r]); r++) n += N(t);
            return n;
          }),
        (T = o.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(wt, Et)),
                  (e[3] = (e[4] || e[5] || "").replace(wt, Et)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || o.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && o.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[5] && e[2];
                return ht.CHILD.test(e[0])
                  ? null
                  : (e[4]
                      ? (e[2] = e[4])
                      : n &&
                        lt.test(n) &&
                        (t = c(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : ((e = e.replace(wt, Et).toLowerCase()),
                    function (t) {
                      return t.nodeName && t.nodeName.toLowerCase() === e;
                    });
              },
              CLASS: function (e) {
                var t = W[e + " "];
                return (
                  t ||
                  ((t = RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) &&
                    W(e, function (e) {
                      return t.test(
                        e.className ||
                          (typeof e.getAttribute !== $ &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, t, n) {
                return function (r) {
                  var i = o.attr(r, e);
                  return null == i
                    ? "!=" === t
                    : t
                    ? ((i += ""),
                      "=" === t
                        ? i === n
                        : "!=" === t
                        ? i !== n
                        : "^=" === t
                        ? n && 0 === i.indexOf(n)
                        : "*=" === t
                        ? n && i.indexOf(n) > -1
                        : "$=" === t
                        ? n && i.substr(i.length - n.length) === n
                        : "~=" === t
                        ? (" " + i + " ").indexOf(n) > -1
                        : "|=" === t
                        ? i === n || i.substr(0, n.length + 1) === n + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (e, t, n, r, i) {
                var s = "nth" !== e.slice(0, 3),
                  o = "last" !== e.slice(-4),
                  u = "of-type" === t;
                return 1 === r && 0 === i
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, a) {
                      var f,
                        l,
                        c,
                        h,
                        p,
                        d,
                        v = s !== o ? "nextSibling" : "previousSibling",
                        m = t.parentNode,
                        g = u && t.nodeName.toLowerCase(),
                        y = !a && !u;
                      if (m) {
                        if (s) {
                          for (; v; ) {
                            for (c = t; (c = c[v]); )
                              if (
                                u
                                  ? c.nodeName.toLowerCase() === g
                                  : 1 === c.nodeType
                              )
                                return !1;
                            d = v = "only" === e && !d && "nextSibling";
                          }
                          return !0;
                        }
                        if (((d = [o ? m.firstChild : m.lastChild]), o && y)) {
                          for (
                            l = m[I] || (m[I] = {}),
                              f = l[e] || [],
                              p = f[0] === U && f[1],
                              h = f[0] === U && f[2],
                              c = p && m.childNodes[p];
                            (c = (++p && c && c[v]) || (h = p = 0) || d.pop());

                          )
                            if (1 === c.nodeType && ++h && c === t) {
                              l[e] = [U, p, h];
                              break;
                            }
                        } else if (
                          y &&
                          (f = (t[I] || (t[I] = {}))[e]) &&
                          f[0] === U
                        )
                          h = f[1];
                        else
                          for (
                            ;
                            (c =
                              (++p && c && c[v]) || (h = p = 0) || d.pop()) &&
                            ((u
                              ? c.nodeName.toLowerCase() !== g
                              : 1 !== c.nodeType) ||
                              !++h ||
                              (y && ((c[I] || (c[I] = {}))[e] = [U, h]),
                              c !== t));

                          );
                        return (h -= i), h === r || (0 === h % r && h / r >= 0);
                      }
                    };
              },
              PSEUDO: function (e, t) {
                var n,
                  r =
                    T.pseudos[e] ||
                    T.setFilters[e.toLowerCase()] ||
                    o.error("unsupported pseudo: " + e);
                return r[I]
                  ? r(t)
                  : r.length > 1
                  ? ((n = [e, e, "", t]),
                    T.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function (e, n) {
                          for (var i, s = r(e, t), o = s.length; o--; )
                            (i = Z.call(e, s[o])), (e[i] = !(n[i] = s[o]));
                        })
                      : function (e) {
                          return r(e, 0, n);
                        })
                  : r;
              },
            },
            pseudos: {
              not: i(function (e) {
                var t = [],
                  n = [],
                  r = k(e.replace(ot, "$1"));
                return r[I]
                  ? i(function (e, t, n, i) {
                      for (var s, o = r(e, null, i, []), u = e.length; u--; )
                        (s = o[u]) && (e[u] = !(t[u] = s));
                    })
                  : function (e, i, s) {
                      return (t[0] = e), r(t, null, s, n), !n.pop();
                    };
              }),
              has: i(function (e) {
                return function (t) {
                  return o(e, t).length > 0;
                };
              }),
              contains: i(function (e) {
                return function (t) {
                  return (t.textContent || t.innerText || N(t)).indexOf(e) > -1;
                };
              }),
              lang: i(function (e) {
                return (
                  ct.test(e || "") || o.error("unsupported lang: " + e),
                  (e = e.replace(wt, Et).toLowerCase()),
                  function (t) {
                    var n;
                    do
                      if (
                        (n = D
                          ? t.getAttribute("xml:lang") || t.getAttribute("lang")
                          : t.lang)
                      )
                        return (
                          (n = n.toLowerCase()),
                          n === e || 0 === n.indexOf(e + "-")
                        );
                    while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === _;
              },
              focus: function (e) {
                return (
                  e === M.activeElement &&
                  (!M.hasFocus || M.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: function (e) {
                return e.disabled === !1;
              },
              disabled: function (e) {
                return e.disabled === !0;
              },
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)
                    return !1;
                return !0;
              },
              parent: function (e) {
                return !T.pseudos.empty(e);
              },
              header: function (e) {
                return gt.test(e.nodeName);
              },
              input: function (e) {
                return mt.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    t.toLowerCase() === e.type)
                );
              },
              first: l(function () {
                return [0];
              }),
              last: l(function (e, t) {
                return [t - 1];
              }),
              eq: l(function (e, t, n) {
                return [0 > n ? n + t : n];
              }),
              even: l(function (e, t) {
                for (var n = 0; t > n; n += 2) e.push(n);
                return e;
              }),
              odd: l(function (e, t) {
                for (var n = 1; t > n; n += 2) e.push(n);
                return e;
              }),
              lt: l(function (e, t, n) {
                for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                return e;
              }),
              gt: l(function (e, t, n) {
                for (var r = 0 > n ? n + t : n; t > ++r; ) e.push(r);
                return e;
              }),
            },
          });
      for (S in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        T.pseudos[S] = a(S);
      for (S in { submit: !0, reset: !0 }) T.pseudos[S] = f(S);
      (k = o.compile =
        function (e, t) {
          var n,
            r = [],
            i = [],
            s = V[e + " "];
          if (!s) {
            for (t || (t = c(e)), n = t.length; n--; )
              (s = g(t[n])), s[I] ? r.push(s) : i.push(s);
            s = V(e, y(i, r));
          }
          return s;
        }),
        (T.pseudos.nth = T.pseudos.eq),
        (T.filters = E.prototype = T.pseudos),
        (T.setFilters = new E()),
        O(),
        (o.attr = ut.attr),
        (ut.find = o),
        (ut.expr = o.selectors),
        (ut.expr[":"] = ut.expr.pseudos),
        (ut.unique = o.uniqueSort),
        (ut.text = o.getText),
        (ut.isXMLDoc = o.isXML),
        (ut.contains = o.contains);
    })(e);
  var It = /Until$/,
    qt = /^(?:parents|prev(?:Until|All))/,
    Rt = /^.[^:#\[\.,]*$/,
    Ut = ut.expr.match.needsContext,
    zt = { children: !0, contents: !0, next: !0, prev: !0 };
  ut.fn.extend({
    find: function (e) {
      var t, n, r;
      if ("string" != typeof e)
        return (
          (r = this),
          this.pushStack(
            ut(e).filter(function () {
              for (t = 0; r.length > t; t++)
                if (ut.contains(r[t], this)) return !0;
            })
          )
        );
      for (n = [], t = 0; this.length > t; t++) ut.find(e, this[t], n);
      return (
        (n = this.pushStack(ut.unique(n))),
        (n.selector = (this.selector ? this.selector + " " : "") + e),
        n
      );
    },
    has: function (e) {
      var t,
        n = ut(e, this),
        r = n.length;
      return this.filter(function () {
        for (t = 0; r > t; t++) if (ut.contains(this, n[t])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(c(this, e, !1));
    },
    filter: function (e) {
      return this.pushStack(c(this, e, !0));
    },
    is: function (e) {
      return (
        !!e &&
        ("string" == typeof e
          ? Ut.test(e)
            ? ut(e, this.context).index(this[0]) >= 0
            : ut.filter(e, this).length > 0
          : this.filter(e).length > 0)
      );
    },
    closest: function (e, t) {
      for (
        var n,
          r = 0,
          i = this.length,
          s = [],
          o = Ut.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0;
        i > r;
        r++
      )
        for (
          n = this[r];
          n && n.ownerDocument && n !== t && 11 !== n.nodeType;

        ) {
          if (o ? o.index(n) > -1 : ut.find.matchesSelector(n, e)) {
            s.push(n);
            break;
          }
          n = n.parentNode;
        }
      return this.pushStack(s.length > 1 ? ut.unique(s) : s);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? ut.inArray(this[0], ut(e))
          : ut.inArray(e.jquery ? e[0] : e, this)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      var n =
          "string" == typeof e
            ? ut(e, t)
            : ut.makeArray(e && e.nodeType ? [e] : e),
        r = ut.merge(this.get(), n);
      return this.pushStack(ut.unique(r));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    (ut.fn.andSelf = ut.fn.addBack),
    ut.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ut.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return ut.dir(e, "parentNode", n);
        },
        next: function (e) {
          return l(e, "nextSibling");
        },
        prev: function (e) {
          return l(e, "previousSibling");
        },
        nextAll: function (e) {
          return ut.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return ut.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return ut.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return ut.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return ut.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ut.sibling(e.firstChild);
        },
        contents: function (e) {
          return ut.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : ut.merge([], e.childNodes);
        },
      },
      function (e, t) {
        ut.fn[e] = function (n, r) {
          var i = ut.map(this, t, n);
          return (
            It.test(e) || (r = n),
            r && "string" == typeof r && (i = ut.filter(r, i)),
            (i = this.length > 1 && !zt[e] ? ut.unique(i) : i),
            this.length > 1 && qt.test(e) && (i = i.reverse()),
            this.pushStack(i)
          );
        };
      }
    ),
    ut.extend({
      filter: function (e, t, n) {
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length
            ? ut.find.matchesSelector(t[0], e)
              ? [t[0]]
              : []
            : ut.find.matches(e, t)
        );
      },
      dir: function (e, n, r) {
        for (
          var i = [], s = e[n];
          s &&
          9 !== s.nodeType &&
          (r === t || 1 !== s.nodeType || !ut(s).is(r));

        )
          1 === s.nodeType && i.push(s), (s = s[n]);
        return i;
      },
      sibling: function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
    });
  var Wt =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Xt = / jQuery\d+="(?:null|\d+)"/g,
    Vt = RegExp("<(?:" + Wt + ")[\\s>]", "i"),
    $t = /^\s+/,
    Jt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\>/gi,
    Kt = /<([\w:]+)/,
    Qt = /<tbody/i,
    Gt = /<|&#?\w+;/,
    Yt = /<(?:script|style|link)/i,
    Zt = /^(?:checkbox|radio)$/i,
    en = /checked\s*(?:[^=]|=\s*.checked.)/i,
    tn = /^$|\/(?:java|ecma)script/i,
    nn = /^true\/(.*)/,
    rn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    sn = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ut.support.htmlSerialize
        ? [0, "", ""]
        : [1, "X<div>", "</div>"],
    },
    on = h($),
    un = on.appendChild($.createElement("div"));
  (sn.optgroup = sn.option),
    (sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead),
    (sn.th = sn.td),
    ut.fn.extend({
      text: function (e) {
        return ut.access(
          this,
          function (e) {
            return e === t
              ? ut.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || $).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      wrapAll: function (e) {
        if (ut.isFunction(e))
          return this.each(function (t) {
            ut(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (
                  var e = this;
                  e.firstChild && 1 === e.firstChild.nodeType;

                )
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return ut.isFunction(e)
          ? this.each(function (t) {
              ut(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = ut(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = ut.isFunction(e);
        return this.each(function (n) {
          ut(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (e) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            this.appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          (1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType) &&
            this.insertBefore(e, this.firstChild);
        });
      },
      before: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, !1, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (var n, r = 0; null != (n = this[r]); r++)
          (!e || ut.filter(e, [n]).length > 0) &&
            (t || 1 !== n.nodeType || ut.cleanData(b(n)),
            n.parentNode &&
              (t && ut.contains(n.ownerDocument, n) && m(b(n, "script")),
              n.parentNode.removeChild(n)));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild; )
            e.removeChild(e.firstChild);
          e.options && ut.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null == e ? !1 : e),
          (t = null == t ? e : t),
          this.map(function () {
            return ut.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return ut.access(
          this,
          function (e) {
            var n = this[0] || {},
              r = 0,
              i = this.length;
            if (e === t)
              return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t;
            if (
              !(
                "string" != typeof e ||
                Yt.test(e) ||
                (!ut.support.htmlSerialize && Vt.test(e)) ||
                (!ut.support.leadingWhitespace && $t.test(e)) ||
                sn[(Kt.exec(e) || ["", ""])[1].toLowerCase()]
              )
            ) {
              e = e.replace(Jt, "<$1></$2>");
              try {
                for (; i > r; r++)
                  (n = this[r] || {}),
                    1 === n.nodeType &&
                      (ut.cleanData(b(n, !1)), (n.innerHTML = e));
                n = 0;
              } catch (s) {}
            }
            n && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function (e) {
        var t = ut.isFunction(e);
        return (
          t || "string" == typeof e || (e = ut(e).not(this).detach()),
          this.domManip([e], !0, function (e) {
            var t = this.nextSibling,
              n = this.parentNode;
            ((n && 1 === this.nodeType) || 11 === this.nodeType) &&
              (ut(this).remove(),
              t ? t.parentNode.insertBefore(e, t) : n.appendChild(e));
          })
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, n, r) {
        e = et.apply([], e);
        var i,
          s,
          o,
          u,
          a,
          f,
          l = 0,
          c = this.length,
          h = this,
          m = c - 1,
          g = e[0],
          y = ut.isFunction(g);
        if (
          y ||
          (!(1 >= c || "string" != typeof g || ut.support.checkClone) &&
            en.test(g))
        )
          return this.each(function (i) {
            var s = h.eq(i);
            y && (e[0] = g.call(this, i, n ? s.html() : t)),
              s.domManip(e, n, r);
          });
        if (
          c &&
          ((i = ut.buildFragment(e, this[0].ownerDocument, !1, this)),
          (s = i.firstChild),
          1 === i.childNodes.length && (i = s),
          s)
        ) {
          for (
            n = n && ut.nodeName(s, "tr"),
              o = ut.map(b(i, "script"), d),
              u = o.length;
            c > l;
            l++
          )
            (a = i),
              l !== m &&
                ((a = ut.clone(a, !0, !0)), u && ut.merge(o, b(a, "script"))),
              r.call(
                n && ut.nodeName(this[l], "table")
                  ? p(this[l], "tbody")
                  : this[l],
                a,
                l
              );
          if (u)
            for (
              f = o[o.length - 1].ownerDocument, ut.map(o, v), l = 0;
              u > l;
              l++
            )
              (a = o[l]),
                tn.test(a.type || "") &&
                  !ut._data(a, "globalEval") &&
                  ut.contains(f, a) &&
                  (a.src
                    ? ut.ajax({
                        url: a.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                      })
                    : ut.globalEval(
                        (a.text || a.textContent || a.innerHTML || "").replace(
                          rn,
                          ""
                        )
                      ));
          i = s = null;
        }
        return this;
      },
    }),
    ut.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        ut.fn[e] = function (e) {
          for (var n, r = 0, i = [], s = ut(e), o = s.length - 1; o >= r; r++)
            (n = r === o ? this : this.clone(!0)),
              ut(s[r])[t](n),
              tt.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    ),
    ut.extend({
      clone: function (e, t, n) {
        var r,
          i,
          s,
          o,
          u,
          a = ut.contains(e.ownerDocument, e);
        if (
          (ut.support.html5Clone ||
          ut.isXMLDoc(e) ||
          !Vt.test("<" + e.nodeName + ">")
            ? (u = e.cloneNode(!0))
            : ((un.innerHTML = e.outerHTML),
              un.removeChild((u = un.firstChild))),
          !(
            (ut.support.noCloneEvent && ut.support.noCloneChecked) ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            ut.isXMLDoc(e)
          ))
        )
          for (r = b(u), i = b(e), o = 0; null != (s = i[o]); ++o)
            r[o] && y(s, r[o]);
        if (t)
          if (n)
            for (i = i || b(e), r = r || b(u), o = 0; null != (s = i[o]); o++)
              g(s, r[o]);
          else g(e, u);
        return (
          (r = b(u, "script")),
          r.length > 0 && m(r, !a && b(e, "script")),
          (r = i = s = null),
          u
        );
      },
      buildFragment: function (e, t, n, r) {
        for (
          var i, s, o, u, a, f, l, c = e.length, p = h(t), d = [], v = 0;
          c > v;
          v++
        )
          if (((s = e[v]), s || 0 === s))
            if ("object" === ut.type(s)) ut.merge(d, s.nodeType ? [s] : s);
            else if (Gt.test(s)) {
              for (
                u = u || p.appendChild(t.createElement("div")),
                  o = (Kt.exec(s) || ["", ""])[1].toLowerCase(),
                  a = sn[o] || sn._default,
                  u.innerHTML = a[1] + s.replace(Jt, "<$1></$2>") + a[2],
                  l = a[0];
                l--;

              )
                u = u.lastChild;
              if (
                (!ut.support.leadingWhitespace &&
                  $t.test(s) &&
                  d.push(t.createTextNode($t.exec(s)[0])),
                !ut.support.tbody)
              )
                for (
                  s =
                    "table" !== o || Qt.test(s)
                      ? "<table>" !== a[1] || Qt.test(s)
                        ? 0
                        : u
                      : u.firstChild,
                    l = s && s.childNodes.length;
                  l--;

                )
                  ut.nodeName((f = s.childNodes[l]), "tbody") &&
                    !f.childNodes.length &&
                    s.removeChild(f);
              for (
                ut.merge(d, u.childNodes), u.textContent = "";
                u.firstChild;

              )
                u.removeChild(u.firstChild);
              u = p.lastChild;
            } else d.push(t.createTextNode(s));
        for (
          u && p.removeChild(u),
            ut.support.appendChecked || ut.grep(b(d, "input"), w),
            v = 0;
          (s = d[v++]);

        )
          if (
            (!r || -1 === ut.inArray(s, r)) &&
            ((i = ut.contains(s.ownerDocument, s)),
            (u = b(p.appendChild(s), "script")),
            i && m(u),
            n)
          )
            for (l = 0; (s = u[l++]); ) tn.test(s.type || "") && n.push(s);
        return (u = null), p;
      },
      cleanData: function (e, n) {
        for (
          var r,
            i,
            s,
            o,
            u = 0,
            a = ut.expando,
            f = ut.cache,
            l = ut.support.deleteExpando,
            c = ut.event.special;
          null != (s = e[u]);
          u++
        )
          if ((n || ut.acceptData(s)) && ((i = s[a]), (r = i && f[i]))) {
            if (r.events)
              for (o in r.events)
                c[o] ? ut.event.remove(s, o) : ut.removeEvent(s, o, r.handle);
            f[i] &&
              (delete f[i],
              l
                ? delete s[a]
                : s.removeAttribute !== t
                ? s.removeAttribute(a)
                : (s[a] = null),
              Y.push(i));
          }
      },
    });
  var an,
    fn,
    ln,
    cn = /alpha\([^)]*\)/i,
    hn = /opacity\s*=\s*([^)]*)/,
    pn = /^(top|right|bottom|left)$/,
    dn = /^(none|table(?!-c[ea]).+)/,
    vn = /^margin/,
    mn = RegExp("^(" + at + ")(.*)$", "i"),
    gn = RegExp("^(" + at + ")(?!px)[a-z%]+$", "i"),
    yn = RegExp("^([+-])=(" + at + ")", "i"),
    bn = { BODY: "block" },
    wn = { position: "absolute", visibility: "hidden", display: "block" },
    En = { letterSpacing: 0, fontWeight: 400 },
    Sn = ["Top", "Right", "Bottom", "Left"],
    xn = ["Webkit", "O", "Moz", "ms"];
  ut.fn.extend({
    css: function (e, n) {
      return ut.access(
        this,
        function (e, n, r) {
          var i,
            s,
            o = {},
            u = 0;
          if (ut.isArray(n)) {
            for (i = fn(e), s = n.length; s > u; u++)
              o[n[u]] = ut.css(e, n[u], !1, i);
            return o;
          }
          return r !== t ? ut.style(e, n, r) : ut.css(e, n);
        },
        e,
        n,
        arguments.length > 1
      );
    },
    show: function () {
      return x(this, !0);
    },
    hide: function () {
      return x(this);
    },
    toggle: function (e) {
      var t = "boolean" == typeof e;
      return this.each(function () {
        (t ? e : S(this)) ? ut(this).show() : ut(this).hide();
      });
    },
  }),
    ut.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = an(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: ut.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var s,
            o,
            u,
            a = ut.camelCase(n),
            f = e.style;
          if (
            ((n = ut.cssProps[a] || (ut.cssProps[a] = E(f, a))),
            (u = ut.cssHooks[n] || ut.cssHooks[a]),
            r === t)
          )
            return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
          if (
            ((o = typeof r),
            "string" === o &&
              (s = yn.exec(r)) &&
              ((r = (s[1] + 1) * s[2] + parseFloat(ut.css(e, n))),
              (o = "number")),
            !(
              null == r ||
              ("number" === o && isNaN(r)) ||
              ("number" !== o || ut.cssNumber[a] || (r += "px"),
              ut.support.clearCloneStyle ||
                "" !== r ||
                0 !== n.indexOf("background") ||
                (f[n] = "inherit"),
              u && "set" in u && (r = u.set(e, r, i)) === t)
            ))
          )
            try {
              f[n] = r;
            } catch (l) {}
        }
      },
      css: function (e, n, r, i) {
        var s,
          o,
          u,
          a = ut.camelCase(n);
        return (
          (n = ut.cssProps[a] || (ut.cssProps[a] = E(e.style, a))),
          (u = ut.cssHooks[n] || ut.cssHooks[a]),
          u && "get" in u && (s = u.get(e, !0, r)),
          s === t && (s = an(e, n, i)),
          "normal" === s && n in En && (s = En[n]),
          r
            ? ((o = parseFloat(s)), r === !0 || ut.isNumeric(o) ? o || 0 : s)
            : s
        );
      },
      swap: function (e, t, n, r) {
        var i,
          s,
          o = {};
        for (s in t) (o[s] = e.style[s]), (e.style[s] = t[s]);
        i = n.apply(e, r || []);
        for (s in t) e.style[s] = o[s];
        return i;
      },
    }),
    e.getComputedStyle
      ? ((fn = function (t) {
          return e.getComputedStyle(t, null);
        }),
        (an = function (e, n, r) {
          var i,
            s,
            o,
            u = r || fn(e),
            a = u ? u.getPropertyValue(n) || u[n] : t,
            f = e.style;
          return (
            u &&
              ("" !== a ||
                ut.contains(e.ownerDocument, e) ||
                (a = ut.style(e, n)),
              gn.test(a) &&
                vn.test(n) &&
                ((i = f.width),
                (s = f.minWidth),
                (o = f.maxWidth),
                (f.minWidth = f.maxWidth = f.width = a),
                (a = u.width),
                (f.width = i),
                (f.minWidth = s),
                (f.maxWidth = o))),
            a
          );
        }))
      : $.documentElement.currentStyle &&
        ((fn = function (e) {
          return e.currentStyle;
        }),
        (an = function (e, n, r) {
          var i,
            s,
            o,
            u = r || fn(e),
            a = u ? u[n] : t,
            f = e.style;
          return (
            null == a && f && f[n] && (a = f[n]),
            gn.test(a) &&
              !pn.test(n) &&
              ((i = f.left),
              (s = e.runtimeStyle),
              (o = s && s.left),
              o && (s.left = e.currentStyle.left),
              (f.left = "fontSize" === n ? "1em" : a),
              (a = f.pixelLeft + "px"),
              (f.left = i),
              o && (s.left = o)),
            "" === a ? "auto" : a
          );
        })),
    ut.each(["height", "width"], function (e, n) {
      ut.cssHooks[n] = {
        get: function (e, r, i) {
          return r
            ? 0 === e.offsetWidth && dn.test(ut.css(e, "display"))
              ? ut.swap(e, wn, function () {
                  return C(e, n, i);
                })
              : C(e, n, i)
            : t;
        },
        set: function (e, t, r) {
          var i = r && fn(e);
          return T(
            e,
            t,
            r
              ? N(
                  e,
                  n,
                  r,
                  ut.support.boxSizing &&
                    "border-box" === ut.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    ut.support.opacity ||
      (ut.cssHooks.opacity = {
        get: function (e, t) {
          return hn.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            s = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === ut.trim(s.replace(cn, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = cn.test(s) ? s.replace(cn, i) : s + " " + i);
        },
      }),
    ut(function () {
      ut.support.reliableMarginRight ||
        (ut.cssHooks.marginRight = {
          get: function (e, n) {
            return n
              ? ut.swap(e, { display: "inline-block" }, an, [e, "marginRight"])
              : t;
          },
        }),
        !ut.support.pixelPosition &&
          ut.fn.position &&
          ut.each(["top", "left"], function (e, n) {
            ut.cssHooks[n] = {
              get: function (e, r) {
                return r
                  ? ((r = an(e, n)),
                    gn.test(r) ? ut(e).position()[n] + "px" : r)
                  : t;
              },
            };
          });
    }),
    ut.expr &&
      ut.expr.filters &&
      ((ut.expr.filters.hidden = function (e) {
        return (
          (0 === e.offsetWidth && 0 === e.offsetHeight) ||
          (!ut.support.reliableHiddenOffsets &&
            "none" === ((e.style && e.style.display) || ut.css(e, "display")))
        );
      }),
      (ut.expr.filters.visible = function (e) {
        return !ut.expr.filters.hidden(e);
      })),
    ut.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (ut.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n];
            4 > r;
            r++
          )
            i[e + Sn[r] + t] = s[r] || s[r - 2] || s[0];
          return i;
        },
      }),
        vn.test(e) || (ut.cssHooks[e + t].set = T);
    });
  var Tn = /%20/g,
    Nn = /\[\]$/,
    Cn = /\r?\n/g,
    kn = /^(?:submit|button|image|reset)$/i,
    Ln = /^(?:input|select|textarea|keygen)/i;
  ut.fn.extend({
    serialize: function () {
      return ut.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var e = ut.prop(this, "elements");
        return e ? ut.makeArray(e) : this;
      })
        .filter(function () {
          var e = this.type;
          return (
            this.name &&
            !ut(this).is(":disabled") &&
            Ln.test(this.nodeName) &&
            !kn.test(e) &&
            (this.checked || !Zt.test(e))
          );
        })
        .map(function (e, t) {
          var n = ut(this).val();
          return null == n
            ? null
            : ut.isArray(n)
            ? ut.map(n, function (e) {
                return { name: t.name, value: e.replace(Cn, "\r\n") };
              })
            : { name: t.name, value: n.replace(Cn, "\r\n") };
        })
        .get();
    },
  }),
    (ut.param = function (e, n) {
      var r,
        i = [],
        s = function (e, t) {
          (t = ut.isFunction(t) ? t() : null == t ? "" : t),
            (i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
        };
      if (
        (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional),
        ut.isArray(e) || (e.jquery && !ut.isPlainObject(e)))
      )
        ut.each(e, function () {
          s(this.name, this.value);
        });
      else for (r in e) A(r, e[r], n, s);
      return i.join("&").replace(Tn, "+");
    });
  var An,
    On,
    Mn = ut.now(),
    _n = /\?/,
    Dn = /#.*$/,
    Pn = /([?&])_=[^&]*/,
    Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    jn = /^(?:GET|HEAD)$/,
    Fn = /^\/\//,
    In = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    qn = ut.fn.load,
    Rn = {},
    Un = {},
    zn = "*/".concat("*");
  try {
    On = J.href;
  } catch (Wn) {
    (On = $.createElement("a")), (On.href = ""), (On = On.href);
  }
  (An = In.exec(On.toLowerCase()) || []),
    (ut.fn.load = function (e, n, r) {
      if ("string" != typeof e && qn) return qn.apply(this, arguments);
      var i,
        s,
        o,
        u = this,
        a = e.indexOf(" ");
      return (
        a >= 0 && ((i = e.slice(a, e.length)), (e = e.slice(0, a))),
        ut.isFunction(n)
          ? ((r = n), (n = t))
          : n && "object" == typeof n && (s = "POST"),
        u.length > 0 &&
          ut
            .ajax({ url: e, type: s, dataType: "html", data: n })
            .done(function (e) {
              (o = arguments),
                u.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e);
            })
            .complete(
              r &&
                function (e, t) {
                  u.each(r, o || [e.responseText, t, e]);
                }
            ),
        this
      );
    }),
    ut.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        ut.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    ut.each(["get", "post"], function (e, n) {
      ut[n] = function (e, r, i, s) {
        return (
          ut.isFunction(r) && ((s = s || i), (i = r), (r = t)),
          ut.ajax({ url: e, type: n, dataType: s, data: r, success: i })
        );
      };
    }),
    ut.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: On,
        type: "GET",
        isLocal: Bn.test(An[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": zn,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": e.String,
          "text html": !0,
          "text json": ut.parseJSON,
          "text xml": ut.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? _(_(e, ut.ajaxSettings), t) : _(ut.ajaxSettings, e);
      },
      ajaxPrefilter: O(Rn),
      ajaxTransport: O(Un),
      ajax: function (e, n) {
        function r(e, n, r, u) {
          var f,
            c,
            y,
            b,
            E,
            x = n;
          2 !== w &&
            ((w = 2),
            a && clearTimeout(a),
            (i = t),
            (o = u || ""),
            (S.readyState = e > 0 ? 4 : 0),
            r && (b = D(h, S, r)),
            (e >= 200 && 300 > e) || 304 === e
              ? (h.ifModified &&
                  ((E = S.getResponseHeader("Last-Modified")),
                  E && (ut.lastModified[s] = E),
                  (E = S.getResponseHeader("etag")),
                  E && (ut.etag[s] = E)),
                304 === e
                  ? ((f = !0), (x = "notmodified"))
                  : ((f = P(h, b)),
                    (x = f.state),
                    (c = f.data),
                    (y = f.error),
                    (f = !y)))
              : ((y = x), (e || !x) && ((x = "error"), 0 > e && (e = 0))),
            (S.status = e),
            (S.statusText = (n || x) + ""),
            f ? v.resolveWith(p, [c, x, S]) : v.rejectWith(p, [S, x, y]),
            S.statusCode(g),
            (g = t),
            l && d.trigger(f ? "ajaxSuccess" : "ajaxError", [S, h, f ? c : y]),
            m.fireWith(p, [S, x]),
            l &&
              (d.trigger("ajaxComplete", [S, h]),
              --ut.active || ut.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((n = e), (e = t)), (n = n || {});
        var i,
          s,
          o,
          u,
          a,
          f,
          l,
          c,
          h = ut.ajaxSetup({}, n),
          p = h.context || h,
          d = h.context && (p.nodeType || p.jquery) ? ut(p) : ut.event,
          v = ut.Deferred(),
          m = ut.Callbacks("once memory"),
          g = h.statusCode || {},
          y = {},
          b = {},
          w = 0,
          E = "canceled",
          S = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (2 === w) {
                if (!u)
                  for (u = {}; (t = Hn.exec(o)); ) u[t[1].toLowerCase()] = t[2];
                t = u[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return 2 === w ? o : null;
            },
            setRequestHeader: function (e, t) {
              var n = e.toLowerCase();
              return w || ((e = b[n] = b[n] || e), (y[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return w || (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (2 > w) for (t in e) g[t] = [g[t], e[t]];
                else S.always(e[S.status]);
              return this;
            },
            abort: function (e) {
              var t = e || E;
              return i && i.abort(t), r(0, t), this;
            },
          };
        if (
          ((v.promise(S).complete = m.add),
          (S.success = S.done),
          (S.error = S.fail),
          (h.url = ((e || h.url || On) + "")
            .replace(Dn, "")
            .replace(Fn, An[1] + "//")),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = ut
            .trim(h.dataType || "*")
            .toLowerCase()
            .match(ft) || [""]),
          null == h.crossDomain &&
            ((f = In.exec(h.url.toLowerCase())),
            (h.crossDomain = !(
              !f ||
              (f[1] === An[1] &&
                f[2] === An[2] &&
                (f[3] || ("http:" === f[1] ? 80 : 443)) ==
                  (An[3] || ("http:" === An[1] ? 80 : 443)))
            ))),
          h.data &&
            h.processData &&
            "string" != typeof h.data &&
            (h.data = ut.param(h.data, h.traditional)),
          M(Rn, h, n, S),
          2 === w)
        )
          return S;
        (l = h.global),
          l && 0 === ut.active++ && ut.event.trigger("ajaxStart"),
          (h.type = h.type.toUpperCase()),
          (h.hasContent = !jn.test(h.type)),
          (s = h.url),
          h.hasContent ||
            (h.data &&
              ((s = h.url += (_n.test(s) ? "&" : "?") + h.data), delete h.data),
            h.cache === !1 &&
              (h.url = Pn.test(s)
                ? s.replace(Pn, "$1_=" + Mn++)
                : s + (_n.test(s) ? "&" : "?") + "_=" + Mn++)),
          h.ifModified &&
            (ut.lastModified[s] &&
              S.setRequestHeader("If-Modified-Since", ut.lastModified[s]),
            ut.etag[s] && S.setRequestHeader("If-None-Match", ut.etag[s])),
          ((h.data && h.hasContent && h.contentType !== !1) || n.contentType) &&
            S.setRequestHeader("Content-Type", h.contentType),
          S.setRequestHeader(
            "Accept",
            h.dataTypes[0] && h.accepts[h.dataTypes[0]]
              ? h.accepts[h.dataTypes[0]] +
                  ("*" !== h.dataTypes[0] ? ", " + zn + "; q=0.01" : "")
              : h.accepts["*"]
          );
        for (c in h.headers) S.setRequestHeader(c, h.headers[c]);
        if (h.beforeSend && (h.beforeSend.call(p, S, h) === !1 || 2 === w))
          return S.abort();
        E = "abort";
        for (c in { success: 1, error: 1, complete: 1 }) S[c](h[c]);
        if ((i = M(Un, h, n, S))) {
          (S.readyState = 1),
            l && d.trigger("ajaxSend", [S, h]),
            h.async &&
              h.timeout > 0 &&
              (a = setTimeout(function () {
                S.abort("timeout");
              }, h.timeout));
          try {
            (w = 1), i.send(y, r);
          } catch (x) {
            if (!(2 > w)) throw x;
            r(-1, x);
          }
        } else r(-1, "No Transport");
        return S;
      },
      getScript: function (e, n) {
        return ut.get(e, t, n, "script");
      },
      getJSON: function (e, t, n) {
        return ut.get(e, t, n, "json");
      },
    }),
    ut.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (e) {
          return ut.globalEval(e), e;
        },
      },
    }),
    ut.ajaxPrefilter("script", function (e) {
      e.cache === t && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    ut.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var n,
          r = $.head || ut("head")[0] || $.documentElement;
        return {
          send: function (t, i) {
            (n = $.createElement("script")),
              (n.async = !0),
              e.scriptCharset && (n.charset = e.scriptCharset),
              (n.src = e.url),
              (n.onload = n.onreadystatechange =
                function (e, t) {
                  (t ||
                    !n.readyState ||
                    /loaded|complete/.test(n.readyState)) &&
                    ((n.onload = n.onreadystatechange = null),
                    n.parentNode && n.parentNode.removeChild(n),
                    (n = null),
                    t || i(200, "success"));
                }),
              r.insertBefore(n, r.firstChild);
          },
          abort: function () {
            n && n.onload(t, !0);
          },
        };
      }
    });
  var Xn = [],
    Vn = /(=)\?(?=&|$)|\?\?/;
  ut.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xn.pop() || ut.expando + "_" + Mn++;
      return (this[e] = !0), e;
    },
  }),
    ut.ajaxPrefilter("json jsonp", function (n, r, i) {
      var s,
        o,
        u,
        a =
          n.jsonp !== !1 &&
          (Vn.test(n.url)
            ? "url"
            : "string" == typeof n.data &&
              !(n.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Vn.test(n.data) &&
              "data");
      return a || "jsonp" === n.dataTypes[0]
        ? ((s = n.jsonpCallback =
            ut.isFunction(n.jsonpCallback)
              ? n.jsonpCallback()
              : n.jsonpCallback),
          a
            ? (n[a] = n[a].replace(Vn, "$1" + s))
            : n.jsonp !== !1 &&
              (n.url += (_n.test(n.url) ? "&" : "?") + n.jsonp + "=" + s),
          (n.converters["script json"] = function () {
            return u || ut.error(s + " was not called"), u[0];
          }),
          (n.dataTypes[0] = "json"),
          (o = e[s]),
          (e[s] = function () {
            u = arguments;
          }),
          i.always(function () {
            (e[s] = o),
              n[s] && ((n.jsonpCallback = r.jsonpCallback), Xn.push(s)),
              u && ut.isFunction(o) && o(u[0]),
              (u = o = t);
          }),
          "script")
        : t;
    });
  var $n,
    Jn,
    Kn = 0,
    Qn =
      e.ActiveXObject &&
      function () {
        var e;
        for (e in $n) $n[e](t, !0);
      };
  (ut.ajaxSettings.xhr = e.ActiveXObject
    ? function () {
        return (!this.isLocal && H()) || B();
      }
    : H),
    (Jn = ut.ajaxSettings.xhr()),
    (ut.support.cors = !!Jn && "withCredentials" in Jn),
    (Jn = ut.support.ajax = !!Jn),
    Jn &&
      ut.ajaxTransport(function (n) {
        if (!n.crossDomain || ut.support.cors) {
          var r;
          return {
            send: function (i, s) {
              var o,
                u,
                a = n.xhr();
              if (
                (n.username
                  ? a.open(n.type, n.url, n.async, n.username, n.password)
                  : a.open(n.type, n.url, n.async),
                n.xhrFields)
              )
                for (u in n.xhrFields) a[u] = n.xhrFields[u];
              n.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(n.mimeType),
                n.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (u in i) a.setRequestHeader(u, i[u]);
              } catch (f) {}
              a.send((n.hasContent && n.data) || null),
                (r = function (e, i) {
                  var u, f, l, c, h;
                  try {
                    if (r && (i || 4 === a.readyState))
                      if (
                        ((r = t),
                        o &&
                          ((a.onreadystatechange = ut.noop),
                          Qn && delete $n[o]),
                        i)
                      )
                        4 !== a.readyState && a.abort();
                      else {
                        (c = {}),
                          (u = a.status),
                          (h = a.responseXML),
                          (l = a.getAllResponseHeaders()),
                          h && h.documentElement && (c.xml = h),
                          "string" == typeof a.responseText &&
                            (c.text = a.responseText);
                        try {
                          f = a.statusText;
                        } catch (p) {
                          f = "";
                        }
                        u || !n.isLocal || n.crossDomain
                          ? 1223 === u && (u = 204)
                          : (u = c.text ? 200 : 404);
                      }
                  } catch (d) {
                    i || s(-1, d);
                  }
                  c && s(u, f, c, l);
                }),
                n.async
                  ? 4 === a.readyState
                    ? setTimeout(r)
                    : ((o = ++Kn),
                      Qn && ($n || (($n = {}), ut(e).unload(Qn)), ($n[o] = r)),
                      (a.onreadystatechange = r))
                  : r();
            },
            abort: function () {
              r && r(t, !0);
            },
          };
        }
      });
  var Gn,
    Yn,
    Zn = /^(?:toggle|show|hide)$/,
    er = RegExp("^(?:([+-])=|)(" + at + ")([a-z%]*)$", "i"),
    tr = /queueHooks$/,
    nr = [R],
    rr = {
      "*": [
        function (e, t) {
          var n,
            r,
            i = this.createTween(e, t),
            s = er.exec(t),
            o = i.cur(),
            u = +o || 0,
            a = 1,
            f = 20;
          if (s) {
            if (
              ((n = +s[2]),
              (r = s[3] || (ut.cssNumber[e] ? "" : "px")),
              "px" !== r && u)
            ) {
              u = ut.css(i.elem, e, !0) || n || 1;
              do (a = a || ".5"), (u /= a), ut.style(i.elem, e, u + r);
              while (a !== (a = i.cur() / o) && 1 !== a && --f);
            }
            (i.unit = r),
              (i.start = u),
              (i.end = s[1] ? u + (s[1] + 1) * n : n);
          }
          return i;
        },
      ],
    };
  (ut.Animation = ut.extend(I, {
    tweener: function (e, t) {
      ut.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]), (rr[n] = rr[n] || []), rr[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? nr.unshift(e) : nr.push(e);
    },
  })),
    (ut.Tween = U),
    (U.prototype = {
      constructor: U,
      init: function (e, t, n, r, i, s) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = s || (ut.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = U.propHooks[this.prop];
        return e && e.get ? e.get(this) : U.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = U.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? ut.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : U.propHooks._default.set(this),
          this
        );
      },
    }),
    (U.prototype.init.prototype = U.prototype),
    (U.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = ut.css(e.elem, e.prop, "auto")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function (e) {
          ut.fx.step[e.prop]
            ? ut.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop])
            ? ut.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (U.propHooks.scrollTop = U.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    ut.each(["toggle", "show", "hide"], function (e, t) {
      var n = ut.fn[t];
      ut.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(z(t, !0), e, r, i);
      };
    }),
    ut.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(S)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = ut.isEmptyObject(e),
          s = ut.speed(t, n, r),
          o = function () {
            var t = I(this, ut.extend({}, e), s);
            (o.finish = function () {
              t.stop(!0);
            }),
              (i || ut._data(this, "finish")) && t.stop(!0);
          };
        return (
          (o.finish = o),
          i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        );
      },
      stop: function (e, n, r) {
        var i = function (e) {
          var t = e.stop;
          delete e.stop, t(r);
        };
        return (
          "string" != typeof e && ((r = n), (n = e), (e = t)),
          n && e !== !1 && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              n = null != e && e + "queueHooks",
              s = ut.timers,
              o = ut._data(this);
            if (n) o[n] && o[n].stop && i(o[n]);
            else for (n in o) o[n] && o[n].stop && tr.test(n) && i(o[n]);
            for (n = s.length; n--; )
              s[n].elem !== this ||
                (null != e && s[n].queue !== e) ||
                (s[n].anim.stop(r), (t = !1), s.splice(n, 1));
            (t || !r) && ut.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function () {
            var t,
              n = ut._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              s = ut.timers,
              o = r ? r.length : 0;
            for (
              n.finish = !0,
                ut.queue(this, e, []),
                i && i.cur && i.cur.finish && i.cur.finish.call(this),
                t = s.length;
              t--;

            )
              s[t].elem === this &&
                s[t].queue === e &&
                (s[t].anim.stop(!0), s.splice(t, 1));
            for (t = 0; o > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    ut.each(
      {
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        ut.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (ut.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? ut.extend({}, e)
          : {
              complete: n || (!n && t) || (ut.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !ut.isFunction(t) && t),
            };
      return (
        (r.duration = ut.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in ut.fx.speeds
          ? ut.fx.speeds[r.duration]
          : ut.fx.speeds._default),
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          ut.isFunction(r.old) && r.old.call(this),
            r.queue && ut.dequeue(this, r.queue);
        }),
        r
      );
    }),
    (ut.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (ut.timers = []),
    (ut.fx = U.prototype.init),
    (ut.fx.tick = function () {
      var e,
        n = ut.timers,
        r = 0;
      for (Gn = ut.now(); n.length > r; r++)
        (e = n[r]), e() || n[r] !== e || n.splice(r--, 1);
      n.length || ut.fx.stop(), (Gn = t);
    }),
    (ut.fx.timer = function (e) {
      e() && ut.timers.push(e) && ut.fx.start();
    }),
    (ut.fx.interval = 13),
    (ut.fx.start = function () {
      Yn || (Yn = setInterval(ut.fx.tick, ut.fx.interval));
    }),
    (ut.fx.stop = function () {
      clearInterval(Yn), (Yn = null);
    }),
    (ut.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (ut.fx.step = {}),
    ut.expr &&
      ut.expr.filters &&
      (ut.expr.filters.animated = function (e) {
        return ut.grep(ut.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
    (ut.fn.offset = function (e) {
      if (arguments.length)
        return e === t
          ? this
          : this.each(function (t) {
              ut.offset.setOffset(this, e, t);
            });
      var n,
        r,
        i = { top: 0, left: 0 },
        s = this[0],
        o = s && s.ownerDocument;
      if (o)
        return (
          (n = o.documentElement),
          ut.contains(n, s)
            ? (s.getBoundingClientRect !== t && (i = s.getBoundingClientRect()),
              (r = W(o)),
              {
                top:
                  i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                left:
                  i.left +
                  (r.pageXOffset || n.scrollLeft) -
                  (n.clientLeft || 0),
              })
            : i
        );
    }),
    (ut.offset = {
      setOffset: function (e, t, n) {
        var r = ut.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i,
          s,
          o = ut(e),
          u = o.offset(),
          a = ut.css(e, "top"),
          f = ut.css(e, "left"),
          l =
            ("absolute" === r || "fixed" === r) &&
            ut.inArray("auto", [a, f]) > -1,
          c = {},
          h = {};
        l
          ? ((h = o.position()), (i = h.top), (s = h.left))
          : ((i = parseFloat(a) || 0), (s = parseFloat(f) || 0)),
          ut.isFunction(t) && (t = t.call(e, n, u)),
          null != t.top && (c.top = t.top - u.top + i),
          null != t.left && (c.left = t.left - u.left + s),
          "using" in t ? t.using.call(e, c) : o.css(c);
      },
    }),
    ut.fn.extend({
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === ut.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                ut.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += ut.css(e[0], "borderTopWidth", !0)),
                (n.left += ut.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - ut.css(r, "marginTop", !0),
              left: t.left - n.left - ut.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent || $.documentElement;
            e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");

          )
            e = e.offsetParent;
          return e || $.documentElement;
        });
      },
    }),
    ut.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function (i) {
          return ut.access(
            this,
            function (e, i, s) {
              var o = W(e);
              return s === t
                ? o
                  ? n in o
                    ? o[n]
                    : o.document.documentElement[i]
                  : e[i]
                : (o
                    ? o.scrollTo(
                        r ? ut(o).scrollLeft() : s,
                        r ? s : ut(o).scrollTop()
                      )
                    : (e[i] = s),
                  t);
            },
            e,
            i,
            arguments.length,
            null
          );
        };
      }
    ),
    ut.each({ Height: "height", Width: "width" }, function (e, n) {
      ut.each(
        { padding: "inner" + e, content: n, "": "outer" + e },
        function (r, i) {
          ut.fn[i] = function (i, s) {
            var o = arguments.length && (r || "boolean" != typeof i),
              u = r || (i === !0 || s === !0 ? "margin" : "border");
            return ut.access(
              this,
              function (n, r, i) {
                var s;
                return ut.isWindow(n)
                  ? n.document.documentElement["client" + e]
                  : 9 === n.nodeType
                  ? ((s = n.documentElement),
                    Math.max(
                      n.body["scroll" + e],
                      s["scroll" + e],
                      n.body["offset" + e],
                      s["offset" + e],
                      s["client" + e]
                    ))
                  : i === t
                  ? ut.css(n, r, u)
                  : ut.style(n, r, i, u);
              },
              n,
              o ? i : t,
              o,
              null
            );
          };
        }
      );
    }),
    (e.jQuery = e.$ = ut),
    "function" == typeof define &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return ut;
      });
})(window);
(function (e) {
  var t = null,
    n = {
      init: function (n) {
        var i = e.extend(
          {
            slideTransition: "none",
            slideTransitionSpeed: 0,
            slideEndAnimation: true,
            position: "0,0",
            transitionIn: "left",
            transitionOut: "left",
            fullWidth: false,
            delay: 0,
            timeout: 2e3,
            speedIn: 2500,
            speedOut: 1e3,
            easeIn: "easeOutExpo",
            easeOut: "easeOutCubic",
            controls: false,
            pager: false,
            autoChange: true,
            pauseOnHover: true,
            backgroundAnimation: false,
            backgroundElement: null,
            backgroundX: 500,
            backgroundY: 500,
            backgroundSpeed: 2500,
            backgroundEase: "easeOutCubic",
            responsive: true,
            increase: false,
            dimensions: "",
            startCallback: null,
            startNextSlideCallback: null,
            stopCallback: null,
            pauseCallback: null,
            resumeCallback: null,
            nextSlideCallback: null,
            prevSlideCallback: null,
            pagerCallback: null,
          },
          n
        );
        return this.each(function () {
          t = new r(this, i);
        });
      },
      pause: function () {
        t.pause(true);
      },
      resume: function () {
        t.resume();
      },
      stop: function () {
        t.stop();
      },
      start: function () {
        t.start();
      },
      startNextSlide: function () {
        t.startNextSlide();
      },
    };
  var r = function (t, n) {
    function r() {
      if (n.controls) {
        K.append('<a href="#" class="prev"></a><a href="#" class="next" ></a>');
        K.find(".next").bind("click", function () {
          return v();
        });
        K.find(".prev").bind("click", function () {
          return d();
        });
      }
      if (n.pauseOnHover) {
        K.bind({
          mouseenter: function () {
            u(false);
          },
          mouseleave: function () {
            a();
          },
        });
      }
      if (n.fullWidth) {
        K.css({ overflow: "visible" });
      } else {
        K.css({ overflow: "hidden" });
      }
      if (n.pager) {
        var t = typeof n.pager !== "boolean";
        Q = t ? n.pager : e('<div class="fs-pager-wrapper"></div>');
        if (!t) {
          K.append(Q);
        } else {
          Q.addClass("fs-custom-pager-wrapper");
        }
      }
      K.children(".slide").each(function (r) {
        var i = e(this);
        i.children().attr("rel", r).addClass("fs_obj");
        i.children("[data-fixed]").addClass("fs_fixed_obj");
        if (n.pager || t) {
          var s = e('<a rel="' + r + '" href="#"></a>').bind(
            "click",
            function () {
              return p(this);
            }
          );
          Q.append(s);
        }
      });
      if (n.pager) {
        Q = e(Q).children("a");
      }
      if (n.responsive) {
        P();
      }
      if (K.find(".fs_loader").length > 0) {
        K.find(".fs_loader").remove();
      }
      i();
    }
    function i() {
      z.stop = false;
      z.pause = false;
      z.running = true;
      m("slide");
      h(n.startCallback);
    }
    function s() {
      z.stop = false;
      z.pause = false;
      z.running = true;
      f();
      h(n.startNextSlideCallback);
    }
    function o() {
      z.stop = true;
      z.running = false;
      K.find(".slide").stop(true, true);
      K.find(".fs_obj").stop(true, true).removeClass("fs-animation");
      R(X);
      h(n.stopCallback);
    }
    function u(e) {
      z.pause = true;
      z.running = false;
      if (e) {
        K.find(".fs-animation").finish();
      }
      h(n.pauseCallback);
    }
    function a() {
      z.stop = false;
      z.pause = false;
      z.running = true;
      if (z.slideComplete) {
        m("slide");
      } else if (z.stepComplete) {
        m("step");
      } else {
        if (z.finishedObjs < z.maxObjs) {
        } else if (z.currentStep < z.maxStep) {
          m("step");
        } else {
          m("slide");
        }
      }
      h(n.resumeCallback);
    }
    function f() {
      z.lastSlide = z.currentSlide;
      z.currentSlide += 1;
      z.stop = false;
      z.pause = false;
      z.running = true;
      y();
      h(n.nextSlideCallback);
    }
    function l() {
      z.lastSlide = z.currentSlide;
      z.currentSlide -= 1;
      z.stop = false;
      z.pause = false;
      z.running = true;
      y();
      h(n.prevSlideCallback);
    }
    function c(e) {
      z.lastSlide = z.currentSlide;
      z.currentSlide = e;
      z.stop = false;
      z.pause = false;
      z.running = true;
      y();
      h(n.pagerCallback);
    }
    function h(t) {
      e.isFunction(t) &&
        t.call(this, K, z.currentSlide, z.lastSlide, z.currentStep);
    }
    function p(t) {
      var n = parseInt(e(t).attr("rel"));
      if (n != z.currentSlide) {
        o();
        c(n);
      }
      return false;
    }
    function d() {
      o();
      l();
      return false;
    }
    function v() {
      o();
      f();
      return false;
    }
    function m(e) {
      if (!z.pause && !z.stop && z.running) {
        switch (e) {
          case "slide":
            z.slideComplete = false;
            g();
            break;
          case "step":
            z.stepComplete = false;
            T();
            break;
          case "obj":
            C();
            break;
        }
      }
    }
    function g() {
      var e = n.timeout;
      if (z.init) {
        z.init = false;
        y(true);
      } else {
        X.push(
          setTimeout(function () {
            if (z.maxSlide == 0 && z.running == true) {
            } else {
              z.lastSlide = z.currentSlide;
              z.currentSlide += 1;
              y();
            }
          }, e)
        );
      }
    }
    function y(e) {
      K.find(".active-slide").removeClass("active-slide");
      if (z.currentSlide > z.maxSlide) {
        z.currentSlide = 0;
      }
      if (z.currentSlide < 0) {
        z.currentSlide = z.maxSlide;
      }
      W.currentSlide = K.children(".slide:eq(" + z.currentSlide + ")").addClass(
        "active-slide"
      );
      if (W.currentSlide.length == 0) {
        z.currentSlide = 0;
        W.currentSlide = K.children(".slide:eq(" + z.currentSlide + ")");
      }
      if (z.lastSlide != null) {
        if (z.lastSlide < 0) {
          z.lastSlide = z.maxSlide;
        }
        W.lastSlide = K.children(".slide:eq(" + z.lastSlide + ")");
      }
      if (e) {
        W.animation = "none";
      } else {
        W.animation = W.currentSlide.attr("data-in");
        if (W.animation == null) {
          W.animation = n.slideTransition;
        }
      }
      if (n.slideEndAnimation && z.lastSlide != null) {
        L();
      } else {
        switch (W.animation) {
          case "none":
            b();
            E();
            break;
          case "scrollLeft":
            b();
            E();
            break;
          case "scrollRight":
            b();
            E();
            break;
          case "scrollTop":
            b();
            E();
            break;
          case "scrollBottom":
            b();
            E();
            break;
          default:
            b();
            break;
        }
      }
    }
    function b() {
      if (n.backgroundAnimation) {
        D();
      }
      if (n.pager) {
        Q.removeClass("active");
        Q.eq(z.currentSlide).addClass("active");
      }
      x();
      W.currentSlide.children().hide();
      z.currentStep = 0;
      z.currentObj = 0;
      z.maxObjs = 0;
      z.finishedObjs = 0;
      W.currentSlide.children("[data-fixed]").show();
      A();
    }
    function w(e) {
      if (W.lastSlide != null) {
        W.lastSlide.hide();
      }
      if (e.hasClass("active-slide")) {
        m("step");
      }
    }
    function E() {
      if (W.lastSlide == null) {
        return;
      }
      if (W.animation != "none") {
        O();
      }
    }
    function S() {}
    function x() {
      var t = W.currentSlide.children(),
        n = 0;
      t.each(function () {
        var t = parseFloat(e(this).attr("data-step"));
        n = t > n ? t : n;
      });
      z.maxStep = n;
    }
    function T() {
      var e;
      if (z.currentStep == 0) {
        e = W.currentSlide.children(
          '*:not([data-step]):not([data-fixed]), *[data-step="' +
            z.currentStep +
            '"]:not([data-fixed])'
        );
      } else {
        e = W.currentSlide.children(
          '*[data-step="' + z.currentStep + '"]:not([data-fixed])'
        );
      }
      z.maxObjs = e.length;
      V = e;
      if (z.maxObjs > 0) {
        z.currentObj = 0;
        z.finishedObjs = 0;
        m("obj");
      } else {
        N();
      }
    }
    function N() {
      z.stepComplete = true;
      z.currentStep += 1;
      if (z.currentStep > z.maxStep) {
        if (n.autoChange) {
          z.currentStep = 0;
          z.slideComplete = true;
          m("slide");
        }
        return;
      }
      m("step");
    }
    function C() {
      var t = e(V[z.currentObj]);
      t.addClass("fs-animation");
      var r = t.attr("data-position"),
        i = t.attr("data-in"),
        s = t.attr("data-delay"),
        o = t.attr("data-time"),
        u = t.attr("data-ease-in"),
        a = t.attr("data-special");
      if (r == null) {
        r = n.position.split(",");
      } else {
        r = r.split(",");
      }
      if (i == null) {
        i = n.transitionIn;
      }
      if (s == null) {
        s = n.delay;
      }
      if (u == null) {
        u = n.easeIn;
      }
      M(t, r, i, s, o, u, a);
      z.currentObj += 1;
      if (z.currentObj < z.maxObjs) {
        m("obj");
      } else {
        z.currentObj = 0;
      }
    }
    function k(e) {
      e.removeClass("fs-animation");
      if (e.attr("rel") == z.currentSlide) {
        z.finishedObjs += 1;
        if (z.finishedObjs == z.maxObjs) {
          N();
        }
      }
    }
    function L() {
      var t = W.lastSlide.children(":not([data-fixed])");
      t.each(function () {
        var t = e(this),
          r = t.position(),
          i = t.attr("data-out"),
          s = t.attr("data-ease-out");
        if (i == null) {
          i = n.transitionOut;
        }
        if (s == null) {
          s = n.easeOut;
        }
        _(t, r, i, null, s);
      })
        .promise()
        .done(function () {
          E();
          b();
        });
    }
    function A() {
      var e = W.currentSlide,
        t = {},
        r = {},
        i = n.slideTransitionSpeed,
        s = W.animation;
      if (n.responsive) {
        unit = "%";
      } else {
        unit = "px";
      }
      switch (s) {
        case "slideLeft":
          t.left = G + unit;
          t.top = "0" + unit;
          t.display = "block";
          r.left = "0" + unit;
          r.top = "0" + unit;
          break;
        case "slideTop":
          t.left = "0" + unit;
          t.top = -et + unit;
          t.display = "block";
          r.left = "0" + unit;
          r.top = "0" + unit;
          break;
        case "slideBottom":
          t.left = "0" + unit;
          t.top = et + unit;
          t.display = "block";
          r.left = "0" + unit;
          r.top = "0" + unit;
          break;
        case "slideRight":
          t.left = -G + unit;
          t.top = "0" + unit;
          t.display = "block";
          r.left = "0" + unit;
          r.top = "0" + unit;
          break;
        case "fade":
          t.left = "0" + unit;
          t.top = "0" + unit;
          t.display = "block";
          t.opacity = 0;
          r.opacity = 1;
          break;
        case "none":
          t.left = "0" + unit;
          t.top = "0" + unit;
          t.display = "block";
          i = 0;
          break;
        case "scrollLeft":
          t.left = G + unit;
          t.top = "0" + unit;
          t.display = "block";
          r.left = "0" + unit;
          r.top = "0" + unit;
          break;
        case "scrollTop":
          t.left = "0" + unit;
          t.top = -et + unit;
          t.display = "block";
          r.left = "0" + unit;
          r.top = "0" + unit;
          break;
        case "scrollBottom":
          t.left = "0" + unit;
          t.top = et + unit;
          t.display = "block";
          r.left = "0" + unit;
          r.top = "0" + unit;
          break;
        case "scrollRight":
          t.left = -G + unit;
          t.top = "0" + unit;
          t.display = "block";
          r.left = "0" + unit;
          r.top = "0" + unit;
          break;
      }
      e.css(t).animate(r, i, "linear", function () {
        w(e);
      });
    }
    function O() {
      var e = {},
        t = {},
        r = n.slideTransitionSpeed,
        i = null,
        s = W.animation;
      if (n.responsive) {
        i = "%";
      } else {
        i = "px";
      }
      switch (s) {
        case "scrollLeft":
          t.left = -G + i;
          t.top = "0" + i;
          break;
        case "scrollTop":
          t.left = "0" + i;
          t.top = et + i;
          break;
        case "scrollBottom":
          t.left = "0" + i;
          t.top = -et + i;
          break;
        case "scrollRight":
          t.left = G + i;
          t.top = "0" + i;
          break;
        default:
          r = 0;
          break;
      }
      W.lastSlide.animate(t, r, "linear", function () {
        S();
      });
    }
    function M(t, r, i, s, o, u, a) {
      var f = {},
        l = {},
        c = n.speedIn,
        h = null;
      if (n.responsive) {
        h = "%";
      } else {
        h = "px";
      }
      if (o != null && o != "") {
        c = o - s;
      }
      f.opacity = 1;
      switch (i) {
        case "left":
          f.top = r[0];
          f.left = G;
          break;
        case "bottomLeft":
          f.top = et;
          f.left = G;
          break;
        case "topLeft":
          f.top = t.outerHeight() * -1;
          f.left = G;
          break;
        case "top":
          f.top = t.outerHeight() * -1;
          f.left = r[1];
          break;
        case "bottom":
          f.top = et;
          f.left = r[1];
          break;
        case "right":
          f.top = r[0];
          f.left = -Z - t.outerWidth();
          break;
        case "bottomRight":
          f.top = et;
          f.left = -Z - t.outerWidth();
          break;
        case "topRight":
          f.top = t.outerHeight() * -1;
          f.left = -Z - t.outerWidth();
          break;
        case "fade":
          f.top = r[0];
          f.left = r[1];
          f.opacity = 0;
          l.opacity = 1;
          break;
        case "none":
          f.top = r[0];
          f.left = r[1];
          f.display = "none";
          c = 0;
          break;
      }
      l.top = r[0];
      l.left = r[1];
      l.left = l.left + h;
      l.top = l.top + h;
      f.left = f.left + h;
      f.top = f.top + h;
      X.push(
        setTimeout(function () {
          if (a == "cycle" && t.attr("rel") == z.currentSlide) {
            var r = t.prev();
            if (r.length > 0) {
              var i = e(r).attr("data-position").split(",");
              i = { top: i[0], left: i[1] };
              var s = e(r).attr("data-out");
              if (s == null) {
                s = n.transitionOut;
              }
              _(r, i, s, c);
            }
          }
          t.css(f)
            .show()
            .animate(l, c, u, function () {
              k(t);
            })
            .addClass("fs_obj_active");
        }, s)
      );
    }
    function _(e, t, r, i, s) {
      var o = {},
        u = {},
        a = null;
      i = n.speedOut;
      if (n.responsive) {
        a = "%";
      } else {
        a = "px";
      }
      var f = e.outerWidth(),
        l = e.outerHeight();
      if (n.responsive) {
        f = I(f, $);
        l = I(l, J);
      }
      switch (r) {
        case "left":
          u.left = -Z - 100 - f;
          break;
        case "bottomLeft":
          u.top = et;
          u.left = -Z - 100 - f;
          break;
        case "topLeft":
          u.top = -l;
          u.left = -Z - 100 - f;
          break;
        case "top":
          u.top = -l;
          break;
        case "bottom":
          u.top = et;
          break;
        case "right":
          u.left = G;
          break;
        case "bottomRight":
          u.top = et;
          u.left = G;
          break;
        case "topRight":
          u.top = -l;
          u.left = G;
          break;
        case "fade":
          o.opacity = 1;
          u.opacity = 0;
          break;
        case "hide":
          u.display = "none";
          i = 0;
          break;
        default:
          u.display = "none";
          i = 0;
          break;
      }
      if (typeof u.top != "undefined") {
        if (u.top.toString().indexOf("px") > 0) {
          u.top = u.top.substring(0, u.top.length - 2);
          if (n.responsive) {
            u.top = I(u.top, J);
          }
        }
      }
      if (typeof u.left != "undefined") {
        if (u.left.toString().indexOf("px") > 0) {
          u.left = u.left.substring(0, u.left.length - 2);
          if (n.responsive) {
            u.left = I(u.left, $);
          }
        }
      }
      u.left = u.left + a;
      u.top = u.top + a;
      e.css(o)
        .animate(u, i, s, function () {
          e.hide();
        })
        .removeClass("fs_obj_active");
    }
    function D() {
      var t;
      if (n.backgroundElement == null || n.backgroundElement == "") {
        t = K.parent();
      } else {
        t = e(n.backgroundElement);
      }
      var r = t.css("background-position");
      r = r.split(" ");
      var i = n.backgroundX,
        s = n.backgroundY,
        o = Number(r[0].replace(/[px,%]/g, "")) + Number(i),
        u = Number(r[1].replace(/[px,%]/g, "")) + Number(s);
      t.animate(
        { backgroundPositionX: o + "px", backgroundPositionY: u + "px" },
        n.backgroundSpeed,
        n.backgroundEase
      );
    }
    function P() {
      var r = n.dimensions.split(","),
        i = U();
      $ = r["0"];
      J = r["1"];
      if (!n.increase) {
        e(t).css({ maxWidth: $ + "px" });
      }
      var s = K.children(".slide").find("*");
      s.each(function () {
        var t = e(this),
          n = null,
          r = null,
          s = null;
        if (t.attr("data-position") != null) {
          var o = t.attr("data-position").split(",");
          n = I(o[1], $);
          r = I(o[0], J);
          t.attr("data-position", r + "," + n);
        }
        if (t.attr("width") != null && t.attr("width") != "") {
          s = t.attr("width");
          n = I(s, $);
          t.attr("width", n + "%");
          t.css("width", n + "%");
        } else if (t.css("width") != "0px") {
          s = t.css("width");
          if (s.indexOf("px") > 0) {
            s = s.substring(0, s.length - 2);
            n = I(s, $);
            t.css("width", n + "%");
          }
        } else if (t.prop("tagName").toLowerCase() == "img" && i != -1) {
          s = H(t);
          n = I(s, $);
          t.css("width", n + "%").attr("width", n + "%");
        } else if (t.prop("tagName").toLowerCase() == "img") {
          s = t.get(0).width;
          n = I(s, $);
          t.css("width", n + "%");
        }
        if (t.attr("height") != null && t.attr("height") != "") {
          s = t.attr("height");
          r = I(s, J);
          t.attr("height", r + "%");
          t.css("height", r + "%");
        } else if (t.css("height") != "0px") {
          s = t.css("height");
          if (s.indexOf("px") > 0) {
            s = s.substring(0, s.length - 2);
            r = I(s, J);
            t.css("height", r + "%");
          }
        } else if (t.prop("tagName").toLowerCase() == "img" && i != -1) {
          s = B(t);
          r = I(s, J);
          t.css("height", r + "%").attr("height", r + "%");
        } else if (t.prop("tagName").toLowerCase() == "img") {
          s = t.get(0).height;
          r = I(s, J);
          t.css("height", r + "%");
        }
        t.attr("data-fontsize", t.css("font-size"));
      });
      K.css({ width: "auto", height: "auto" }).append(
        '<div class="fs-stretcher" style="width:' +
          $ +
          "px; height:" +
          J +
          'px"></div>'
      );
      j();
      e(window).bind("resize", function () {
        j();
      });
    }
    function H(e) {
      var t = new Image();
      t.src = e.attr("src");
      return t.width;
    }
    function B(e) {
      var t = new Image();
      t.src = e.attr("src");
      return t.height;
    }
    function j() {
      var t = K.innerWidth(),
        r = K.innerHeight();
      if (t <= $ || n.increase) {
        var i = $ / J,
          s = t / i;
        K.find(".fs-stretcher").css({ width: t + "px", height: s + "px" });
      }
      Y = e("body").width();
      var o = K.width();
      Z = I((Y - o) / 2, $);
      G = 100;
      if (n.fullWidth) {
        G = 100 + Z * 2;
      }
      et = 100;
      if (z.init == false || t < $) {
        F();
      }
    }
    function F() {
      var t = null,
        n = null,
        r = K.children(".slide").find("*");
      r.each(function () {
        obj = e(this);
        var t = obj.attr("data-fontsize");
        if (t.indexOf("px") > 0) {
          t = t.substring(0, t.length - 2);
          n = I(t, J) * (K.find(".fs-stretcher").height() / 100);
          obj.css("fontSize", n + "px");
          obj.css("lineHeight", "100%");
        }
      });
    }
    function I(e, t) {
      return e / (t / 100);
    }
    function q(e) {
      clearTimeout(e);
    }
    function R(t) {
      var n = t.length;
      e.each(t, function (e) {
        clearTimeout(this);
        if (e == n - 1) {
          t = [];
        }
      });
    }
    function U() {
      var e = -1;
      if (navigator.appName == "Microsoft Internet Explorer") {
        var t = navigator.userAgent;
        var n = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
        if (n.exec(t) != null) e = parseFloat(RegExp.$1);
      }
      return e;
    }
    var z = {
        init: true,
        running: false,
        pause: false,
        stop: false,
        slideComplete: false,
        stepComplete: false,
        controlsActive: true,
        currentSlide: 0,
        lastSlide: null,
        maxSlide: 0,
        currentStep: 0,
        maxStep: 0,
        currentObj: 0,
        maxObjs: 0,
        finishedObjs: 0,
      },
      W = { currentSlide: null, lastSlide: null, animationkey: "none" },
      X = [],
      V = null,
      $ = null,
      J = null;
    e(t).wrapInner('<div class="fraction-slider" >');
    var K = e(t).find(".fraction-slider"),
      Q = null;
    z.maxSlide = K.children(".slide").length - 1;
    var G = K.width(),
      Y = e("body").width(),
      Z = 0;
    if (n.fullWidth) {
      Z = (Y - G) / 2;
      G = Y;
    }
    var et = K.height();
    r();
    this.start = function () {
      i();
    };
    this.startNextSlide = function () {
      s();
    };
    this.stop = function () {
      o();
    };
    this.pause = function () {
      u(false);
    };
    this.resume = function () {
      a();
    };
  };
  e.fn.fractionSlider = function (t) {
    if (n[t]) {
      return n[t].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof t == "object" || !t) {
      return n.init.apply(this, arguments);
    } else {
      e.error("Method " + t + " does not exist on jQuery.tooltip");
    }
  };
  var i = {};
  e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
    i[t] = function (t) {
      return Math.pow(t, e + 2);
    };
  });
  e.extend(i, {
    Sine: function (e) {
      return 1 - Math.cos((e * Math.PI) / 2);
    },
    Circ: function (e) {
      return 1 - Math.sqrt(1 - e * e);
    },
    Elastic: function (e) {
      return e == 0 || e == 1
        ? e
        : -Math.pow(2, 8 * (e - 1)) *
            Math.sin((((e - 1) * 80 - 7.5) * Math.PI) / 15);
    },
    Back: function (e) {
      return e * e * (3 * e - 2);
    },
    Bounce: function (e) {
      var t,
        n = 4;
      while (e < ((t = Math.pow(2, --n)) - 1) / 11) {}
      return (
        1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((t * 3 - 2) / 22 - e, 2)
      );
    },
  });
  e.each(i, function (t, n) {
    e.easing["easeIn" + t] = n;
    e.easing["easeOut" + t] = function (e) {
      return 1 - n(1 - e);
    };
    e.easing["easeInOut" + t] = function (e) {
      return e < 0.5 ? n(e * 2) / 2 : 1 - n(e * -2 + 2) / 2;
    };
  });
})(jQuery);
$(window).load(function () {
  $(".slider").fractionSlider({
    fullWidth: true,
    controls: true,
    pager: true,
    responsive: true,
    dimensions: "1000,400",
    increase: false,
    pauseOnHover: true,
    slideEndAnimation: true,
  });
});
!(function (e, t) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  function y(e) {
    var t = e.length,
      n = p.type(e);
    return "function" === n || p.isWindow(e)
      ? !1
      : 1 === e.nodeType && t
      ? !0
      : "array" === n ||
        0 === t ||
        ("number" == typeof t && t > 0 && t - 1 in e);
  }
  function x(e, t, n) {
    if (p.isFunction(t))
      return p.grep(e, function (e, r) {
        return !!t.call(e, r, e) !== n;
      });
    if (t.nodeType)
      return p.grep(e, function (e) {
        return (e === t) !== n;
      });
    if ("string" == typeof t) {
      if (S.test(t)) return p.filter(t, e, n);
      t = p.filter(t, e);
    }
    return p.grep(e, function (e) {
      return p.inArray(e, t) >= 0 !== n;
    });
  }
  function O(e, t) {
    do e = e[t];
    while (e && 1 !== e.nodeType);
    return e;
  }
  function D(e) {
    var t = (_[e] = {});
    return (
      p.each(e.match(M) || [], function (e, n) {
        t[n] = !0;
      }),
      t
    );
  }
  function H() {
    N.addEventListener
      ? (N.removeEventListener("DOMContentLoaded", B, !1),
        e.removeEventListener("load", B, !1))
      : (N.detachEvent("onreadystatechange", B), e.detachEvent("onload", B));
  }
  function B() {
    (N.addEventListener ||
      "load" === event.type ||
      "complete" === N.readyState) &&
      (H(), p.ready());
  }
  function R(e, t, n) {
    if (void 0 === n && 1 === e.nodeType) {
      var r = "data-" + t.replace(q, "-$1").toLowerCase();
      if (((n = e.getAttribute(r)), "string" == typeof n)) {
        try {
          n =
            "true" === n
              ? !0
              : "false" === n
              ? !1
              : "null" === n
              ? null
              : +n + "" === n
              ? +n
              : I.test(n)
              ? p.parseJSON(n)
              : n;
        } catch (i) {}
        p.data(e, t, n);
      } else n = void 0;
    }
    return n;
  }
  function U(e) {
    var t;
    for (t in e)
      if (("data" !== t || !p.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
    return !0;
  }
  function z(e, t, r, i) {
    if (p.acceptData(e)) {
      var s,
        o,
        u = p.expando,
        a = e.nodeType,
        f = a ? p.cache : e,
        l = a ? e[u] : e[u] && u;
      if (
        (l && f[l] && (i || f[l].data)) ||
        void 0 !== r ||
        "string" != typeof t
      )
        return (
          l || (l = a ? (e[u] = n.pop() || p.guid++) : u),
          f[l] || (f[l] = a ? {} : { toJSON: p.noop }),
          ("object" == typeof t || "function" == typeof t) &&
            (i
              ? (f[l] = p.extend(f[l], t))
              : (f[l].data = p.extend(f[l].data, t))),
          (o = f[l]),
          i || (o.data || (o.data = {}), (o = o.data)),
          void 0 !== r && (o[p.camelCase(t)] = r),
          "string" == typeof t
            ? ((s = o[t]), null == s && (s = o[p.camelCase(t)]))
            : (s = o),
          s
        );
    }
  }
  function W(e, t, n) {
    if (p.acceptData(e)) {
      var r,
        i,
        s = e.nodeType,
        o = s ? p.cache : e,
        u = s ? e[p.expando] : p.expando;
      if (o[u]) {
        if (t && (r = n ? o[u] : o[u].data)) {
          p.isArray(t)
            ? (t = t.concat(p.map(t, p.camelCase)))
            : t in r
            ? (t = [t])
            : ((t = p.camelCase(t)), (t = t in r ? [t] : t.split(" "))),
            (i = t.length);
          while (i--) delete r[t[i]];
          if (n ? !U(r) : !p.isEmptyObject(r)) return;
        }
        (n || (delete o[u].data, U(o[u]))) &&
          (s
            ? p.cleanData([e], !0)
            : c.deleteExpando || o != o.window
            ? delete o[u]
            : (o[u] = null));
      }
    }
  }
  function tt() {
    return !0;
  }
  function nt() {
    return !1;
  }
  function rt() {
    try {
      return N.activeElement;
    } catch (e) {}
  }
  function it(e) {
    var t = st.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n;
  }
  function Et(e, t) {
    var n,
      r,
      i = 0,
      s =
        typeof e.getElementsByTagName !== j
          ? e.getElementsByTagName(t || "*")
          : typeof e.querySelectorAll !== j
          ? e.querySelectorAll(t || "*")
          : void 0;
    if (!s)
      for (s = [], n = e.childNodes || e; null != (r = n[i]); i++)
        !t || p.nodeName(r, t) ? s.push(r) : p.merge(s, Et(r, t));
    return void 0 === t || (t && p.nodeName(e, t)) ? p.merge([e], s) : s;
  }
  function St(e) {
    K.test(e.type) && (e.defaultChecked = e.checked);
  }
  function xt(e, t) {
    return p.nodeName(e, "table") &&
      p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function Tt(e) {
    return (e.type = (null !== p.find.attr(e, "type")) + "/" + e.type), e;
  }
  function Nt(e) {
    var t = mt.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function Ct(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++)
      p._data(n, "globalEval", !t || p._data(t[r], "globalEval"));
  }
  function kt(e, t) {
    if (1 === t.nodeType && p.hasData(e)) {
      var n,
        r,
        i,
        s = p._data(e),
        o = p._data(t, s),
        u = s.events;
      if (u) {
        delete o.handle, (o.events = {});
        for (n in u)
          for (r = 0, i = u[n].length; i > r; r++) p.event.add(t, n, u[n][r]);
      }
      o.data && (o.data = p.extend({}, o.data));
    }
  }
  function Lt(e, t) {
    var n, r, i;
    if (1 === t.nodeType) {
      if (((n = t.nodeName.toLowerCase()), !c.noCloneEvent && t[p.expando])) {
        i = p._data(t);
        for (r in i.events) p.removeEvent(t, r, i.handle);
        t.removeAttribute(p.expando);
      }
      "script" === n && t.text !== e.text
        ? ((Tt(t).text = e.text), Nt(t))
        : "object" === n
        ? (t.parentNode && (t.outerHTML = e.outerHTML),
          c.html5Clone &&
            e.innerHTML &&
            !p.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
        : "input" === n && K.test(e.type)
        ? ((t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value))
        : "option" === n
        ? (t.defaultSelected = t.selected = e.defaultSelected)
        : ("input" === n || "textarea" === n) &&
          (t.defaultValue = e.defaultValue);
    }
  }
  function Mt(t, n) {
    var r = p(n.createElement(t)).appendTo(n.body),
      i = e.getDefaultComputedStyle
        ? e.getDefaultComputedStyle(r[0]).display
        : p.css(r[0], "display");
    return r.detach(), i;
  }
  function _t(e) {
    var t = N,
      n = Ot[e];
    return (
      n ||
        ((n = Mt(e, t)),
        ("none" !== n && n) ||
          ((At = (
            At || p("<iframe frameborder='0' width='0' height='0'>")
          ).appendTo(t.documentElement)),
          (t = (At[0].contentWindow || At[0].contentDocument).document),
          t.write(),
          t.close(),
          (n = Mt(e, t)),
          At.detach()),
        (Ot[e] = n)),
      n
    );
  }
  function Ft(e, t) {
    return {
      get: function () {
        var n = e();
        if (null != n)
          return n
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
      },
    };
  }
  function $t(e, t) {
    if (t in e) return t;
    var n = t.charAt(0).toUpperCase() + t.slice(1),
      r = t,
      i = Vt.length;
    while (i--) if (((t = Vt[i] + n), t in e)) return t;
    return r;
  }
  function Jt(e, t) {
    for (var n, r, i, s = [], o = 0, u = e.length; u > o; o++)
      (r = e[o]),
        r.style &&
          ((s[o] = p._data(r, "olddisplay")),
          (n = r.style.display),
          t
            ? (s[o] || "none" !== n || (r.style.display = ""),
              "" === r.style.display &&
                $(r) &&
                (s[o] = p._data(r, "olddisplay", _t(r.nodeName))))
            : s[o] ||
              ((i = $(r)),
              ((n && "none" !== n) || !i) &&
                p._data(r, "olddisplay", i ? n : p.css(r, "display"))));
    for (o = 0; u > o; o++)
      (r = e[o]),
        r.style &&
          ((t && "none" !== r.style.display && "" !== r.style.display) ||
            (r.style.display = t ? s[o] || "" : "none"));
    return e;
  }
  function Kt(e, t, n) {
    var r = Ut.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function Qt(e, t, n, r, i) {
    for (
      var s = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
        o = 0;
      4 > s;
      s += 2
    )
      "margin" === n && (o += p.css(e, n + V[s], !0, i)),
        r
          ? ("content" === n && (o -= p.css(e, "padding" + V[s], !0, i)),
            "margin" !== n && (o -= p.css(e, "border" + V[s] + "Width", !0, i)))
          : ((o += p.css(e, "padding" + V[s], !0, i)),
            "padding" !== n &&
              (o += p.css(e, "border" + V[s] + "Width", !0, i)));
    return o;
  }
  function Gt(e, t, n) {
    var r = !0,
      i = "width" === t ? e.offsetWidth : e.offsetHeight,
      s = Ht(e),
      o = c.boxSizing() && "border-box" === p.css(e, "boxSizing", !1, s);
    if (0 >= i || null == i) {
      if (
        ((i = Bt(e, t, s)),
        (0 > i || null == i) && (i = e.style[t]),
        Pt.test(i))
      )
        return i;
      (r = o && (c.boxSizingReliable() || i === e.style[t])),
        (i = parseFloat(i) || 0);
    }
    return i + Qt(e, t, n || (o ? "border" : "content"), r, s) + "px";
  }
  function Yt(e, t, n, r, i) {
    return new Yt.prototype.init(e, t, n, r, i);
  }
  function un() {
    return (
      setTimeout(function () {
        Zt = void 0;
      }),
      (Zt = p.now())
    );
  }
  function an(e, t) {
    var n,
      r = { height: e },
      i = 0;
    for (t = t ? 1 : 0; 4 > i; i += 2 - t)
      (n = V[i]), (r["margin" + n] = r["padding" + n] = e);
    return t && (r.opacity = r.width = e), r;
  }
  function fn(e, t, n) {
    for (
      var r, i = (on[t] || []).concat(on["*"]), s = 0, o = i.length;
      o > s;
      s++
    )
      if ((r = i[s].call(n, t, e))) return r;
  }
  function ln(e, t, n) {
    var r,
      i,
      s,
      o,
      u,
      a,
      f,
      l,
      h = this,
      d = {},
      v = e.style,
      m = e.nodeType && $(e),
      g = p._data(e, "fxshow");
    n.queue ||
      ((u = p._queueHooks(e, "fx")),
      null == u.unqueued &&
        ((u.unqueued = 0),
        (a = u.empty.fire),
        (u.empty.fire = function () {
          u.unqueued || a();
        })),
      u.unqueued++,
      h.always(function () {
        h.always(function () {
          u.unqueued--, p.queue(e, "fx").length || u.empty.fire();
        });
      })),
      1 === e.nodeType &&
        ("height" in t || "width" in t) &&
        ((n.overflow = [v.overflow, v.overflowX, v.overflowY]),
        (f = p.css(e, "display")),
        (l = _t(e.nodeName)),
        "none" === f && (f = l),
        "inline" === f &&
          "none" === p.css(e, "float") &&
          (c.inlineBlockNeedsLayout && "inline" !== l
            ? (v.zoom = 1)
            : (v.display = "inline-block"))),
      n.overflow &&
        ((v.overflow = "hidden"),
        c.shrinkWrapBlocks() ||
          h.always(function () {
            (v.overflow = n.overflow[0]),
              (v.overflowX = n.overflow[1]),
              (v.overflowY = n.overflow[2]);
          }));
    for (r in t)
      if (((i = t[r]), tn.exec(i))) {
        if (
          (delete t[r], (s = s || "toggle" === i), i === (m ? "hide" : "show"))
        ) {
          if ("show" !== i || !g || void 0 === g[r]) continue;
          m = !0;
        }
        d[r] = (g && g[r]) || p.style(e, r);
      }
    if (!p.isEmptyObject(d)) {
      g ? "hidden" in g && (m = g.hidden) : (g = p._data(e, "fxshow", {})),
        s && (g.hidden = !m),
        m
          ? p(e).show()
          : h.done(function () {
              p(e).hide();
            }),
        h.done(function () {
          var t;
          p._removeData(e, "fxshow");
          for (t in d) p.style(e, t, d[t]);
        });
      for (r in d)
        (o = fn(m ? g[r] : 0, r, h)),
          r in g ||
            ((g[r] = o.start),
            m &&
              ((o.end = o.start),
              (o.start = "width" === r || "height" === r ? 1 : 0)));
    }
  }
  function cn(e, t) {
    var n, r, i, s, o;
    for (n in e)
      if (
        ((r = p.camelCase(n)),
        (i = t[r]),
        (s = e[n]),
        p.isArray(s) && ((i = s[1]), (s = e[n] = s[0])),
        n !== r && ((e[r] = s), delete e[n]),
        (o = p.cssHooks[r]),
        o && "expand" in o)
      ) {
        (s = o.expand(s)), delete e[r];
        for (n in s) n in e || ((e[n] = s[n]), (t[n] = i));
      } else t[r] = i;
  }
  function hn(e, t, n) {
    var r,
      i,
      s = 0,
      o = sn.length,
      u = p.Deferred().always(function () {
        delete a.elem;
      }),
      a = function () {
        if (i) return !1;
        for (
          var t = Zt || un(),
            n = Math.max(0, f.startTime + f.duration - t),
            r = n / f.duration || 0,
            s = 1 - r,
            o = 0,
            a = f.tweens.length;
          a > o;
          o++
        )
          f.tweens[o].run(s);
        return (
          u.notifyWith(e, [f, s, n]),
          1 > s && a ? n : (u.resolveWith(e, [f]), !1)
        );
      },
      f = u.promise({
        elem: e,
        props: p.extend({}, t),
        opts: p.extend(!0, { specialEasing: {} }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Zt || un(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = p.Tween(
            e,
            f.opts,
            t,
            n,
            f.opts.specialEasing[t] || f.opts.easing
          );
          return f.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? f.tweens.length : 0;
          if (i) return this;
          for (i = !0; r > n; n++) f.tweens[n].run(1);
          return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this;
        },
      }),
      l = f.props;
    for (cn(l, f.opts.specialEasing); o > s; s++)
      if ((r = sn[s].call(f, e, l, f.opts))) return r;
    return (
      p.map(l, fn, f),
      p.isFunction(f.opts.start) && f.opts.start.call(e, f),
      p.fx.timer(p.extend(a, { elem: e, anim: f, queue: f.opts.queue })),
      f
        .progress(f.opts.progress)
        .done(f.opts.done, f.opts.complete)
        .fail(f.opts.fail)
        .always(f.opts.always)
    );
  }
  function In(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        s = t.toLowerCase().match(M) || [];
      if (p.isFunction(n))
        while ((r = s[i++]))
          "+" === r.charAt(0)
            ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
            : (e[r] = e[r] || []).push(n);
    };
  }
  function qn(e, t, n, r) {
    function o(u) {
      var a;
      return (
        (i[u] = !0),
        p.each(e[u] || [], function (e, u) {
          var f = u(t, n, r);
          return "string" != typeof f || s || i[f]
            ? s
              ? !(a = f)
              : void 0
            : (t.dataTypes.unshift(f), o(f), !1);
        }),
        a
      );
    }
    var i = {},
      s = e === Bn;
    return o(t.dataTypes[0]) || (!i["*"] && o("*"));
  }
  function Rn(e, t) {
    var n,
      r,
      i = p.ajaxSettings.flatOptions || {};
    for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
    return n && p.extend(!0, e, n), e;
  }
  function Un(e, t, n) {
    var r,
      i,
      s,
      o,
      u = e.contents,
      a = e.dataTypes;
    while ("*" === a[0])
      a.shift(),
        void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
    if (i)
      for (o in u)
        if (u[o] && u[o].test(i)) {
          a.unshift(o);
          break;
        }
    if (a[0] in n) s = a[0];
    else {
      for (o in n) {
        if (!a[0] || e.converters[o + " " + a[0]]) {
          s = o;
          break;
        }
        r || (r = o);
      }
      s = s || r;
    }
    return s ? (s !== a[0] && a.unshift(s), n[s]) : void 0;
  }
  function zn(e, t, n, r) {
    var i,
      s,
      o,
      u,
      a,
      f = {},
      l = e.dataTypes.slice();
    if (l[1]) for (o in e.converters) f[o.toLowerCase()] = e.converters[o];
    s = l.shift();
    while (s)
      if (
        (e.responseFields[s] && (n[e.responseFields[s]] = t),
        !a && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (a = s),
        (s = l.shift()))
      )
        if ("*" === s) s = a;
        else if ("*" !== a && a !== s) {
          if (((o = f[a + " " + s] || f["* " + s]), !o))
            for (i in f)
              if (
                ((u = i.split(" ")),
                u[1] === s && (o = f[a + " " + u[0]] || f["* " + u[0]]))
              ) {
                o === !0
                  ? (o = f[i])
                  : f[i] !== !0 && ((s = u[0]), l.unshift(u[1]));
                break;
              }
          if (o !== !0)
            if (o && e["throws"]) t = o(t);
            else
              try {
                t = o(t);
              } catch (c) {
                return {
                  state: "parsererror",
                  error: o ? c : "No conversion from " + a + " to " + s,
                };
              }
        }
    return { state: "success", data: t };
  }
  function Kn(e, t, n, r) {
    var i;
    if (p.isArray(t))
      p.each(t, function (t, i) {
        n || Xn.test(e)
          ? r(e, i)
          : Kn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== p.type(t)) r(e, t);
    else for (i in t) Kn(e + "[" + i + "]", t[i], n, r);
  }
  function Zn() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function er() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  function sr(e) {
    return p.isWindow(e)
      ? e
      : 9 === e.nodeType
      ? e.defaultView || e.parentWindow
      : !1;
  }
  var n = [],
    r = n.slice,
    i = n.concat,
    s = n.push,
    o = n.indexOf,
    u = {},
    a = u.toString,
    f = u.hasOwnProperty,
    l = "".trim,
    c = {},
    h = "1.11.0",
    p = function (e, t) {
      return new p.fn.init(e, t);
    },
    d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    v = /^-ms-/,
    m = /-([\da-z])/gi,
    g = function (e, t) {
      return t.toUpperCase();
    };
  (p.fn = p.prototype =
    {
      jquery: h,
      constructor: p,
      selector: "",
      length: 0,
      toArray: function () {
        return r.call(this);
      },
      get: function (e) {
        return null != e
          ? 0 > e
            ? this[e + this.length]
            : this[e]
          : r.call(this);
      },
      pushStack: function (e) {
        var t = p.merge(this.constructor(), e);
        return (t.prevObject = this), (t.context = this.context), t;
      },
      each: function (e, t) {
        return p.each(this, e, t);
      },
      map: function (e) {
        return this.pushStack(
          p.map(this, function (t, n) {
            return e.call(t, n, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(r.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: s,
      sort: n.sort,
      splice: n.splice,
    }),
    (p.extend = p.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          s,
          o = arguments[0] || {},
          u = 1,
          a = arguments.length,
          f = !1;
        for (
          "boolean" == typeof o && ((f = o), (o = arguments[u] || {}), u++),
            "object" == typeof o || p.isFunction(o) || (o = {}),
            u === a && ((o = this), u--);
          a > u;
          u++
        )
          if (null != (i = arguments[u]))
            for (r in i)
              (e = o[r]),
                (n = i[r]),
                o !== n &&
                  (f && n && (p.isPlainObject(n) || (t = p.isArray(n)))
                    ? (t
                        ? ((t = !1), (s = e && p.isArray(e) ? e : []))
                        : (s = e && p.isPlainObject(e) ? e : {}),
                      (o[r] = p.extend(f, s, n)))
                    : void 0 !== n && (o[r] = n));
        return o;
      }),
    p.extend({
      expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isFunction: function (e) {
        return "function" === p.type(e);
      },
      isArray:
        Array.isArray ||
        function (e) {
          return "array" === p.type(e);
        },
      isWindow: function (e) {
        return null != e && e == e.window;
      },
      isNumeric: function (e) {
        return e - parseFloat(e) >= 0;
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      isPlainObject: function (e) {
        var t;
        if (!e || "object" !== p.type(e) || e.nodeType || p.isWindow(e))
          return !1;
        try {
          if (
            e.constructor &&
            !f.call(e, "constructor") &&
            !f.call(e.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (n) {
          return !1;
        }
        if (c.ownLast) for (t in e) return f.call(e, t);
        for (t in e);
        return void 0 === t || f.call(e, t);
      },
      type: function (e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? u[a.call(e)] || "object"
          : typeof e;
      },
      globalEval: function (t) {
        t &&
          p.trim(t) &&
          (
            e.execScript ||
            function (t) {
              e.eval.call(e, t);
            }
          )(t);
      },
      camelCase: function (e) {
        return e.replace(v, "ms-").replace(m, g);
      },
      nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      },
      each: function (e, t, n) {
        var r,
          i = 0,
          s = e.length,
          o = y(e);
        if (n) {
          if (o) {
            for (; s > i; i++) if (((r = t.apply(e[i], n)), r === !1)) break;
          } else for (i in e) if (((r = t.apply(e[i], n)), r === !1)) break;
        } else if (o) {
          for (; s > i; i++) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
        } else for (i in e) if (((r = t.call(e[i], i, e[i])), r === !1)) break;
        return e;
      },
      trim:
        l && !l.call("﻿ ")
          ? function (e) {
              return null == e ? "" : l.call(e);
            }
          : function (e) {
              return null == e ? "" : (e + "").replace(d, "");
            },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (y(Object(e))
              ? p.merge(n, "string" == typeof e ? [e] : e)
              : s.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        var r;
        if (t) {
          if (o) return o.call(t, e, n);
          for (
            r = t.length, n = n ? (0 > n ? Math.max(0, r + n) : n) : 0;
            r > n;
            n++
          )
            if (n in t && t[n] === e) return n;
        }
        return -1;
      },
      merge: function (e, t) {
        var n = +t.length,
          r = 0,
          i = e.length;
        while (n > r) e[i++] = t[r++];
        if (n !== n) while (void 0 !== t[r]) e[i++] = t[r++];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r, i = [], s = 0, o = e.length, u = !n; o > s; s++)
          (r = !t(e[s], s)), r !== u && i.push(e[s]);
        return i;
      },
      map: function (e, t, n) {
        var r,
          s = 0,
          o = e.length,
          u = y(e),
          a = [];
        if (u) for (; o > s; s++) (r = t(e[s], s, n)), null != r && a.push(r);
        else for (s in e) (r = t(e[s], s, n)), null != r && a.push(r);
        return i.apply([], a);
      },
      guid: 1,
      proxy: function (e, t) {
        var n, i, s;
        return (
          "string" == typeof t && ((s = e[t]), (t = e), (e = s)),
          p.isFunction(e)
            ? ((n = r.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, n.concat(r.call(arguments)));
              }),
              (i.guid = e.guid = e.guid || p.guid++),
              i)
            : void 0
        );
      },
      now: function () {
        return +new Date();
      },
      support: c,
    }),
    p.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (e, t) {
        u["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var b = (function (e) {
    function rt(e, t, r, i) {
      var s, o, u, a, f, h, v, m, w, E;
      if (
        ((t ? t.ownerDocument || t : b) !== c && l(t),
        (t = t || c),
        (r = r || []),
        !e || "string" != typeof e)
      )
        return r;
      if (1 !== (a = t.nodeType) && 9 !== a) return [];
      if (p && !i) {
        if ((s = G.exec(e)))
          if ((u = s[1])) {
            if (9 === a) {
              if (((o = t.getElementById(u)), !o || !o.parentNode)) return r;
              if (o.id === u) return r.push(o), r;
            } else if (
              t.ownerDocument &&
              (o = t.ownerDocument.getElementById(u)) &&
              g(t, o) &&
              o.id === u
            )
              return r.push(o), r;
          } else {
            if (s[2]) return _.apply(r, t.getElementsByTagName(e)), r;
            if (
              (u = s[3]) &&
              n.getElementsByClassName &&
              t.getElementsByClassName
            )
              return _.apply(r, t.getElementsByClassName(u)), r;
          }
        if (n.qsa && (!d || !d.test(e))) {
          if (
            ((m = v = y),
            (w = t),
            (E = 9 === a && e),
            1 === a && "object" !== t.nodeName.toLowerCase())
          ) {
            (h = dt(e)),
              (v = t.getAttribute("id"))
                ? (m = v.replace(Z, "\\$&"))
                : t.setAttribute("id", m),
              (m = "[id='" + m + "'] "),
              (f = h.length);
            while (f--) h[f] = m + vt(h[f]);
            (w = (Y.test(e) && ht(t.parentNode)) || t), (E = h.join(","));
          }
          if (E)
            try {
              return _.apply(r, w.querySelectorAll(E)), r;
            } catch (S) {
            } finally {
              v || t.removeAttribute("id");
            }
        }
      }
      return xt(e.replace(R, "$1"), t, r, i);
    }
    function it() {
      function t(n, i) {
        return (
          e.push(n + " ") > r.cacheLength && delete t[e.shift()],
          (t[n + " "] = i)
        );
      }
      var e = [];
      return t;
    }
    function st(e) {
      return (e[y] = !0), e;
    }
    function ot(e) {
      var t = c.createElement("div");
      try {
        return !!e(t);
      } catch (n) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ut(e, t) {
      var n = e.split("|"),
        i = e.length;
      while (i--) r.attrHandle[n[i]] = t;
    }
    function at(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          (~t.sourceIndex || k) - (~e.sourceIndex || k);
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function ft(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return "input" === n && t.type === e;
      };
    }
    function lt(e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();
        return ("input" === n || "button" === n) && t.type === e;
      };
    }
    function ct(e) {
      return st(function (t) {
        return (
          (t = +t),
          st(function (n, r) {
            var i,
              s = e([], n.length, t),
              o = s.length;
            while (o--) n[(i = s[o])] && (n[i] = !(r[i] = n[i]));
          })
        );
      });
    }
    function ht(e) {
      return e && typeof e.getElementsByTagName !== C && e;
    }
    function pt() {}
    function dt(e, t) {
      var n,
        i,
        s,
        o,
        u,
        a,
        f,
        l = x[e + " "];
      if (l) return t ? 0 : l.slice(0);
      (u = e), (a = []), (f = r.preFilter);
      while (u) {
        (!n || (i = U.exec(u))) &&
          (i && (u = u.slice(i[0].length) || u), a.push((s = []))),
          (n = !1),
          (i = z.exec(u)) &&
            ((n = i.shift()),
            s.push({ value: n, type: i[0].replace(R, " ") }),
            (u = u.slice(n.length)));
        for (o in r.filter)
          !(i = $[o].exec(u)) ||
            (f[o] && !(i = f[o](i))) ||
            ((n = i.shift()),
            s.push({ value: n, type: o, matches: i }),
            (u = u.slice(n.length)));
        if (!n) break;
      }
      return t ? u.length : u ? rt.error(e) : x(e, a).slice(0);
    }
    function vt(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
      return r;
    }
    function mt(e, t, n) {
      var r = t.dir,
        i = n && "parentNode" === r,
        s = E++;
      return t.first
        ? function (t, n, s) {
            while ((t = t[r])) if (1 === t.nodeType || i) return e(t, n, s);
          }
        : function (t, n, o) {
            var u,
              a,
              f = [w, s];
            if (o) {
              while ((t = t[r]))
                if ((1 === t.nodeType || i) && e(t, n, o)) return !0;
            } else
              while ((t = t[r]))
                if (1 === t.nodeType || i) {
                  if (
                    ((a = t[y] || (t[y] = {})),
                    (u = a[r]) && u[0] === w && u[1] === s)
                  )
                    return (f[2] = u[2]);
                  if (((a[r] = f), (f[2] = e(t, n, o)))) return !0;
                }
          };
    }
    function gt(e) {
      return e.length > 1
        ? function (t, n, r) {
            var i = e.length;
            while (i--) if (!e[i](t, n, r)) return !1;
            return !0;
          }
        : e[0];
    }
    function yt(e, t, n, r, i) {
      for (var s, o = [], u = 0, a = e.length, f = null != t; a > u; u++)
        (s = e[u]) && (!n || n(s, r, i)) && (o.push(s), f && t.push(u));
      return o;
    }
    function bt(e, t, n, r, i, s) {
      return (
        r && !r[y] && (r = bt(r)),
        i && !i[y] && (i = bt(i, s)),
        st(function (s, o, u, a) {
          var f,
            l,
            c,
            h = [],
            p = [],
            d = o.length,
            v = s || St(t || "*", u.nodeType ? [u] : u, []),
            m = !e || (!s && t) ? v : yt(v, h, e, u, a),
            g = n ? (i || (s ? e : d || r) ? [] : o) : m;
          if ((n && n(m, g, u, a), r)) {
            (f = yt(g, p)), r(f, [], u, a), (l = f.length);
            while (l--) (c = f[l]) && (g[p[l]] = !(m[p[l]] = c));
          }
          if (s) {
            if (i || e) {
              if (i) {
                (f = []), (l = g.length);
                while (l--) (c = g[l]) && f.push((m[l] = c));
                i(null, (g = []), f, a);
              }
              l = g.length;
              while (l--)
                (c = g[l]) &&
                  (f = i ? P.call(s, c) : h[l]) > -1 &&
                  (s[f] = !(o[f] = c));
            }
          } else (g = yt(g === o ? g.splice(d, g.length) : g)), i ? i(null, o, g, a) : _.apply(o, g);
        })
      );
    }
    function wt(e) {
      for (
        var t,
          n,
          i,
          s = e.length,
          o = r.relative[e[0].type],
          a = o || r.relative[" "],
          f = o ? 1 : 0,
          l = mt(
            function (e) {
              return e === t;
            },
            a,
            !0
          ),
          c = mt(
            function (e) {
              return P.call(t, e) > -1;
            },
            a,
            !0
          ),
          h = [
            function (e, n, r) {
              return (
                (!o && (r || n !== u)) ||
                ((t = n).nodeType ? l(e, n, r) : c(e, n, r))
              );
            },
          ];
        s > f;
        f++
      )
        if ((n = r.relative[e[f].type])) h = [mt(gt(h), n)];
        else {
          if (((n = r.filter[e[f].type].apply(null, e[f].matches)), n[y])) {
            for (i = ++f; s > i; i++) if (r.relative[e[i].type]) break;
            return bt(
              f > 1 && gt(h),
              f > 1 &&
                vt(
                  e
                    .slice(0, f - 1)
                    .concat({ value: " " === e[f - 2].type ? "*" : "" })
                ).replace(R, "$1"),
              n,
              i > f && wt(e.slice(f, i)),
              s > i && wt((e = e.slice(i))),
              s > i && vt(e)
            );
          }
          h.push(n);
        }
      return gt(h);
    }
    function Et(e, t) {
      var n = t.length > 0,
        i = e.length > 0,
        s = function (s, o, a, f, l) {
          var h,
            p,
            d,
            v = 0,
            m = "0",
            g = s && [],
            y = [],
            b = u,
            E = s || (i && r.find.TAG("*", l)),
            S = (w += null == b ? 1 : Math.random() || 0.1),
            x = E.length;
          for (l && (u = o !== c && o); m !== x && null != (h = E[m]); m++) {
            if (i && h) {
              p = 0;
              while ((d = e[p++]))
                if (d(h, o, a)) {
                  f.push(h);
                  break;
                }
              l && (w = S);
            }
            n && ((h = !d && h) && v--, s && g.push(h));
          }
          if (((v += m), n && m !== v)) {
            p = 0;
            while ((d = t[p++])) d(g, y, o, a);
            if (s) {
              if (v > 0) while (m--) g[m] || y[m] || (y[m] = O.call(f));
              y = yt(y);
            }
            _.apply(f, y),
              l && !s && y.length > 0 && v + t.length > 1 && rt.uniqueSort(f);
          }
          return l && ((w = S), (u = b)), g;
        };
      return n ? st(s) : s;
    }
    function St(e, t, n) {
      for (var r = 0, i = t.length; i > r; r++) rt(e, t[r], n);
      return n;
    }
    function xt(e, t, i, s) {
      var u,
        a,
        f,
        l,
        c,
        h = dt(e);
      if (!s && 1 === h.length) {
        if (
          ((a = h[0] = h[0].slice(0)),
          a.length > 2 &&
            "ID" === (f = a[0]).type &&
            n.getById &&
            9 === t.nodeType &&
            p &&
            r.relative[a[1].type])
        ) {
          if (((t = (r.find.ID(f.matches[0].replace(et, tt), t) || [])[0]), !t))
            return i;
          e = e.slice(a.shift().value.length);
        }
        u = $.needsContext.test(e) ? 0 : a.length;
        while (u--) {
          if (((f = a[u]), r.relative[(l = f.type)])) break;
          if (
            (c = r.find[l]) &&
            (s = c(
              f.matches[0].replace(et, tt),
              (Y.test(a[0].type) && ht(t.parentNode)) || t
            ))
          ) {
            if ((a.splice(u, 1), (e = s.length && vt(a)), !e))
              return _.apply(i, s), i;
            break;
          }
        }
      }
      return o(e, h)(s, t, !p, i, (Y.test(e) && ht(t.parentNode)) || t), i;
    }
    var t,
      n,
      r,
      i,
      s,
      o,
      u,
      a,
      f,
      l,
      c,
      h,
      p,
      d,
      v,
      m,
      g,
      y = "sizzle" + -new Date(),
      b = e.document,
      w = 0,
      E = 0,
      S = it(),
      x = it(),
      T = it(),
      N = function (e, t) {
        return e === t && (f = !0), 0;
      },
      C = "undefined",
      k = 1 << 31,
      L = {}.hasOwnProperty,
      A = [],
      O = A.pop,
      M = A.push,
      _ = A.push,
      D = A.slice,
      P =
        A.indexOf ||
        function (e) {
          for (var t = 0, n = this.length; n > t; t++)
            if (this[t] === e) return t;
          return -1;
        },
      H =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      B = "[\\x20\\t\\r\\n\\f]",
      j = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      F = j.replace("w", "w#"),
      I =
        "\\[" +
        B +
        "*(" +
        j +
        ")" +
        B +
        "*(?:([*^$|!~]?=)" +
        B +
        "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
        F +
        ")|)|)" +
        B +
        "*\\]",
      q =
        ":(" +
        j +
        ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
        I.replace(3, 8) +
        ")*)|.*)\\)|)",
      R = new RegExp("^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$", "g"),
      U = new RegExp("^" + B + "*," + B + "*"),
      z = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"),
      W = new RegExp("=" + B + "*([^\\]'\"]*?)" + B + "*\\]", "g"),
      X = new RegExp(q),
      V = new RegExp("^" + F + "$"),
      $ = {
        ID: new RegExp("^#(" + j + ")"),
        CLASS: new RegExp("^\\.(" + j + ")"),
        TAG: new RegExp("^(" + j.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + q),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            B +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            B +
            "*(?:([+-]|)" +
            B +
            "*(\\d+)|))" +
            B +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + H + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            B +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            B +
            "*((?:-\\d)?\\d*)" +
            B +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      J = /^(?:input|select|textarea|button)$/i,
      K = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      Y = /[+~]/,
      Z = /'|\\/g,
      et = new RegExp("\\\\([\\da-f]{1,6}" + B + "?|(" + B + ")|.)", "ig"),
      tt = function (e, t, n) {
        var r = "0x" + t - 65536;
        return r !== r || n
          ? t
          : 0 > r
          ? String.fromCharCode(r + 65536)
          : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
      };
    try {
      _.apply((A = D.call(b.childNodes)), b.childNodes),
        A[b.childNodes.length].nodeType;
    } catch (nt) {
      _ = {
        apply: A.length
          ? function (e, t) {
              M.apply(e, D.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    (n = rt.support = {}),
      (s = rt.isXML =
        function (e) {
          var t = e && (e.ownerDocument || e).documentElement;
          return t ? "HTML" !== t.nodeName : !1;
        }),
      (l = rt.setDocument =
        function (e) {
          var t,
            i = e ? e.ownerDocument || e : b,
            o = i.defaultView;
          return i !== c && 9 === i.nodeType && i.documentElement
            ? ((c = i),
              (h = i.documentElement),
              (p = !s(i)),
              o &&
                o !== o.top &&
                (o.addEventListener
                  ? o.addEventListener(
                      "unload",
                      function () {
                        l();
                      },
                      !1
                    )
                  : o.attachEvent &&
                    o.attachEvent("onunload", function () {
                      l();
                    })),
              (n.attributes = ot(function (e) {
                return (e.className = "i"), !e.getAttribute("className");
              })),
              (n.getElementsByTagName = ot(function (e) {
                return (
                  e.appendChild(i.createComment("")),
                  !e.getElementsByTagName("*").length
                );
              })),
              (n.getElementsByClassName =
                Q.test(i.getElementsByClassName) &&
                ot(function (e) {
                  return (
                    (e.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (e.firstChild.className = "i"),
                    2 === e.getElementsByClassName("i").length
                  );
                })),
              (n.getById = ot(function (e) {
                return (
                  (h.appendChild(e).id = y),
                  !i.getElementsByName || !i.getElementsByName(y).length
                );
              })),
              n.getById
                ? ((r.find.ID = function (e, t) {
                    if (typeof t.getElementById !== C && p) {
                      var n = t.getElementById(e);
                      return n && n.parentNode ? [n] : [];
                    }
                  }),
                  (r.filter.ID = function (e) {
                    var t = e.replace(et, tt);
                    return function (e) {
                      return e.getAttribute("id") === t;
                    };
                  }))
                : (delete r.find.ID,
                  (r.filter.ID = function (e) {
                    var t = e.replace(et, tt);
                    return function (e) {
                      var n =
                        typeof e.getAttributeNode !== C &&
                        e.getAttributeNode("id");
                      return n && n.value === t;
                    };
                  })),
              (r.find.TAG = n.getElementsByTagName
                ? function (e, t) {
                    return typeof t.getElementsByTagName !== C
                      ? t.getElementsByTagName(e)
                      : void 0;
                  }
                : function (e, t) {
                    var n,
                      r = [],
                      i = 0,
                      s = t.getElementsByTagName(e);
                    if ("*" === e) {
                      while ((n = s[i++])) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return s;
                  }),
              (r.find.CLASS =
                n.getElementsByClassName &&
                function (e, t) {
                  return typeof t.getElementsByClassName !== C && p
                    ? t.getElementsByClassName(e)
                    : void 0;
                }),
              (v = []),
              (d = []),
              (n.qsa = Q.test(i.querySelectorAll)) &&
                (ot(function (e) {
                  (e.innerHTML =
                    "<select t=''><option selected=''></option></select>"),
                    e.querySelectorAll("[t^='']").length &&
                      d.push("[*^$]=" + B + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length ||
                      d.push("\\[" + B + "*(?:value|" + H + ")"),
                    e.querySelectorAll(":checked").length || d.push(":checked");
                }),
                ot(function (e) {
                  var t = i.createElement("input");
                  t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length &&
                      d.push("name" + B + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length ||
                      d.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    d.push(",.*:");
                })),
              (n.matchesSelector = Q.test(
                (m =
                  h.webkitMatchesSelector ||
                  h.mozMatchesSelector ||
                  h.oMatchesSelector ||
                  h.msMatchesSelector)
              )) &&
                ot(function (e) {
                  (n.disconnectedMatch = m.call(e, "div")),
                    m.call(e, "[s!='']:x"),
                    v.push("!=", q);
                }),
              (d = d.length && new RegExp(d.join("|"))),
              (v = v.length && new RegExp(v.join("|"))),
              (t = Q.test(h.compareDocumentPosition)),
              (g =
                t || Q.test(h.contains)
                  ? function (e, t) {
                      var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return (
                        e === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : e.compareDocumentPosition &&
                              16 & e.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (e, t) {
                      if (t) while ((t = t.parentNode)) if (t === e) return !0;
                      return !1;
                    }),
              (N = t
                ? function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var r =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return r
                      ? r
                      : ((r =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & r ||
                        (!n.sortDetached && t.compareDocumentPosition(e) === r)
                          ? e === i || (e.ownerDocument === b && g(b, e))
                            ? -1
                            : t === i || (t.ownerDocument === b && g(b, t))
                            ? 1
                            : a
                            ? P.call(a, e) - P.call(a, t)
                            : 0
                          : 4 & r
                          ? -1
                          : 1);
                  }
                : function (e, t) {
                    if (e === t) return (f = !0), 0;
                    var n,
                      r = 0,
                      s = e.parentNode,
                      o = t.parentNode,
                      u = [e],
                      l = [t];
                    if (!s || !o)
                      return e === i
                        ? -1
                        : t === i
                        ? 1
                        : s
                        ? -1
                        : o
                        ? 1
                        : a
                        ? P.call(a, e) - P.call(a, t)
                        : 0;
                    if (s === o) return at(e, t);
                    n = e;
                    while ((n = n.parentNode)) u.unshift(n);
                    n = t;
                    while ((n = n.parentNode)) l.unshift(n);
                    while (u[r] === l[r]) r++;
                    return r
                      ? at(u[r], l[r])
                      : u[r] === b
                      ? -1
                      : l[r] === b
                      ? 1
                      : 0;
                  }),
              i)
            : c;
        }),
      (rt.matches = function (e, t) {
        return rt(e, null, null, t);
      }),
      (rt.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== c && l(e),
          (t = t.replace(W, "='$1']")),
          !(!n.matchesSelector || !p || (v && v.test(t)) || (d && d.test(t))))
        )
          try {
            var r = m.call(e, t);
            if (
              r ||
              n.disconnectedMatch ||
              (e.document && 11 !== e.document.nodeType)
            )
              return r;
          } catch (i) {}
        return rt(t, c, null, [e]).length > 0;
      }),
      (rt.contains = function (e, t) {
        return (e.ownerDocument || e) !== c && l(e), g(e, t);
      }),
      (rt.attr = function (e, t) {
        (e.ownerDocument || e) !== c && l(e);
        var i = r.attrHandle[t.toLowerCase()],
          s = i && L.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !p) : void 0;
        return void 0 !== s
          ? s
          : n.attributes || !p
          ? e.getAttribute(t)
          : (s = e.getAttributeNode(t)) && s.specified
          ? s.value
          : null;
      }),
      (rt.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (rt.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          s = 0;
        if (
          ((f = !n.detectDuplicates),
          (a = !n.sortStable && e.slice(0)),
          e.sort(N),
          f)
        ) {
          while ((t = e[s++])) t === e[s] && (i = r.push(s));
          while (i--) e.splice(r[i], 1);
        }
        return (a = null), e;
      }),
      (i = rt.getText =
        function (e) {
          var t,
            n = "",
            r = 0,
            s = e.nodeType;
          if (s) {
            if (1 === s || 9 === s || 11 === s) {
              if ("string" == typeof e.textContent) return e.textContent;
              for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
            } else if (3 === s || 4 === s) return e.nodeValue;
          } else while ((t = e[r++])) n += i(t);
          return n;
        }),
      (r = rt.selectors =
        {
          cacheLength: 50,
          createPseudo: st,
          match: $,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (e) {
              return (
                (e[1] = e[1].replace(et, tt)),
                (e[3] = (e[4] || e[5] || "").replace(et, tt)),
                "~=" === e[2] && (e[3] = " " + e[3] + " "),
                e.slice(0, 4)
              );
            },
            CHILD: function (e) {
              return (
                (e[1] = e[1].toLowerCase()),
                "nth" === e[1].slice(0, 3)
                  ? (e[3] || rt.error(e[0]),
                    (e[4] = +(e[4]
                      ? e[5] + (e[6] || 1)
                      : 2 * ("even" === e[3] || "odd" === e[3]))),
                    (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                  : e[3] && rt.error(e[0]),
                e
              );
            },
            PSEUDO: function (e) {
              var t,
                n = !e[5] && e[2];
              return $.CHILD.test(e[0])
                ? null
                : (e[3] && void 0 !== e[4]
                    ? (e[2] = e[4])
                    : n &&
                      X.test(n) &&
                      (t = dt(n, !0)) &&
                      (t = n.indexOf(")", n.length - t) - n.length) &&
                      ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                  e.slice(0, 3));
            },
          },
          filter: {
            TAG: function (e) {
              var t = e.replace(et, tt).toLowerCase();
              return "*" === e
                ? function () {
                    return !0;
                  }
                : function (e) {
                    return e.nodeName && e.nodeName.toLowerCase() === t;
                  };
            },
            CLASS: function (e) {
              var t = S[e + " "];
              return (
                t ||
                ((t = new RegExp("(^|" + B + ")" + e + "(" + B + "|$)")) &&
                  S(e, function (e) {
                    return t.test(
                      ("string" == typeof e.className && e.className) ||
                        (typeof e.getAttribute !== C &&
                          e.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (e, t, n) {
              return function (r) {
                var i = rt.attr(r, e);
                return null == i
                  ? "!=" === t
                  : t
                  ? ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && i.indexOf(n) > -1
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + i + " ").indexOf(n) > -1
                      : "|=" === t
                      ? i === n || i.slice(0, n.length + 1) === n + "-"
                      : !1)
                  : !0;
              };
            },
            CHILD: function (e, t, n, r, i) {
              var s = "nth" !== e.slice(0, 3),
                o = "last" !== e.slice(-4),
                u = "of-type" === t;
              return 1 === r && 0 === i
                ? function (e) {
                    return !!e.parentNode;
                  }
                : function (t, n, a) {
                    var f,
                      l,
                      c,
                      h,
                      p,
                      d,
                      v = s !== o ? "nextSibling" : "previousSibling",
                      m = t.parentNode,
                      g = u && t.nodeName.toLowerCase(),
                      b = !a && !u;
                    if (m) {
                      if (s) {
                        while (v) {
                          c = t;
                          while ((c = c[v]))
                            if (
                              u
                                ? c.nodeName.toLowerCase() === g
                                : 1 === c.nodeType
                            )
                              return !1;
                          d = v = "only" === e && !d && "nextSibling";
                        }
                        return !0;
                      }
                      if (((d = [o ? m.firstChild : m.lastChild]), o && b)) {
                        (l = m[y] || (m[y] = {})),
                          (f = l[e] || []),
                          (p = f[0] === w && f[1]),
                          (h = f[0] === w && f[2]),
                          (c = p && m.childNodes[p]);
                        while (
                          (c = (++p && c && c[v]) || (h = p = 0) || d.pop())
                        )
                          if (1 === c.nodeType && ++h && c === t) {
                            l[e] = [w, p, h];
                            break;
                          }
                      } else if (
                        b &&
                        (f = (t[y] || (t[y] = {}))[e]) &&
                        f[0] === w
                      )
                        h = f[1];
                      else
                        while (
                          (c = (++p && c && c[v]) || (h = p = 0) || d.pop())
                        )
                          if (
                            (u
                              ? c.nodeName.toLowerCase() === g
                              : 1 === c.nodeType) &&
                            ++h &&
                            (b && ((c[y] || (c[y] = {}))[e] = [w, h]), c === t)
                          )
                            break;
                      return (h -= i), h === r || (h % r === 0 && h / r >= 0);
                    }
                  };
            },
            PSEUDO: function (e, t) {
              var n,
                i =
                  r.pseudos[e] ||
                  r.setFilters[e.toLowerCase()] ||
                  rt.error("unsupported pseudo: " + e);
              return i[y]
                ? i(t)
                : i.length > 1
                ? ((n = [e, e, "", t]),
                  r.setFilters.hasOwnProperty(e.toLowerCase())
                    ? st(function (e, n) {
                        var r,
                          s = i(e, t),
                          o = s.length;
                        while (o--)
                          (r = P.call(e, s[o])), (e[r] = !(n[r] = s[o]));
                      })
                    : function (e) {
                        return i(e, 0, n);
                      })
                : i;
            },
          },
          pseudos: {
            not: st(function (e) {
              var t = [],
                n = [],
                r = o(e.replace(R, "$1"));
              return r[y]
                ? st(function (e, t, n, i) {
                    var s,
                      o = r(e, null, i, []),
                      u = e.length;
                    while (u--) (s = o[u]) && (e[u] = !(t[u] = s));
                  })
                : function (e, i, s) {
                    return (t[0] = e), r(t, null, s, n), !n.pop();
                  };
            }),
            has: st(function (e) {
              return function (t) {
                return rt(e, t).length > 0;
              };
            }),
            contains: st(function (e) {
              return function (t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
              };
            }),
            lang: st(function (e) {
              return (
                V.test(e || "") || rt.error("unsupported lang: " + e),
                (e = e.replace(et, tt).toLowerCase()),
                function (t) {
                  var n;
                  do
                    if (
                      (n = p
                        ? t.lang
                        : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()),
                        n === e || 0 === n.indexOf(e + "-")
                      );
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1;
                }
              );
            }),
            target: function (t) {
              var n = e.location && e.location.hash;
              return n && n.slice(1) === t.id;
            },
            root: function (e) {
              return e === h;
            },
            focus: function (e) {
              return (
                e === c.activeElement &&
                (!c.hasFocus || c.hasFocus()) &&
                !!(e.type || e.href || ~e.tabIndex)
              );
            },
            enabled: function (e) {
              return e.disabled === !1;
            },
            disabled: function (e) {
              return e.disabled === !0;
            },
            checked: function (e) {
              var t = e.nodeName.toLowerCase();
              return (
                ("input" === t && !!e.checked) ||
                ("option" === t && !!e.selected)
              );
            },
            selected: function (e) {
              return (
                e.parentNode && e.parentNode.selectedIndex, e.selected === !0
              );
            },
            empty: function (e) {
              for (e = e.firstChild; e; e = e.nextSibling)
                if (e.nodeType < 6) return !1;
              return !0;
            },
            parent: function (e) {
              return !r.pseudos.empty(e);
            },
            header: function (e) {
              return K.test(e.nodeName);
            },
            input: function (e) {
              return J.test(e.nodeName);
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return ("input" === t && "button" === e.type) || "button" === t;
            },
            text: function (e) {
              var t;
              return (
                "input" === e.nodeName.toLowerCase() &&
                "text" === e.type &&
                (null == (t = e.getAttribute("type")) ||
                  "text" === t.toLowerCase())
              );
            },
            first: ct(function () {
              return [0];
            }),
            last: ct(function (e, t) {
              return [t - 1];
            }),
            eq: ct(function (e, t, n) {
              return [0 > n ? n + t : n];
            }),
            even: ct(function (e, t) {
              for (var n = 0; t > n; n += 2) e.push(n);
              return e;
            }),
            odd: ct(function (e, t) {
              for (var n = 1; t > n; n += 2) e.push(n);
              return e;
            }),
            lt: ct(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
              return e;
            }),
            gt: ct(function (e, t, n) {
              for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
              return e;
            }),
          },
        }),
      (r.pseudos.nth = r.pseudos.eq);
    for (t in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      r.pseudos[t] = ft(t);
    for (t in { submit: !0, reset: !0 }) r.pseudos[t] = lt(t);
    (pt.prototype = r.filters = r.pseudos), (r.setFilters = new pt());
    o = rt.compile = function (e, t) {
      var n,
        r = [],
        i = [],
        s = T[e + " "];
      if (!s) {
        t || (t = dt(e)), (n = t.length);
        while (n--) (s = wt(t[n])), s[y] ? r.push(s) : i.push(s);
        s = T(e, Et(i, r));
      }
      return s;
    };
    return (
      (n.sortStable = y.split("").sort(N).join("") === y),
      (n.detectDuplicates = !!f),
      l(),
      (n.sortDetached = ot(function (e) {
        return 1 & e.compareDocumentPosition(c.createElement("div"));
      })),
      ot(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        ut("type|href|height|width", function (e, t, n) {
          return n
            ? void 0
            : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (n.attributes &&
        ot(function (e) {
          return (
            (e.innerHTML = "<input>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        ut("value", function (e, t, n) {
          return n || "input" !== e.nodeName.toLowerCase()
            ? void 0
            : e.defaultValue;
        }),
      ot(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        ut(H, function (e, t, n) {
          var r;
          return n
            ? void 0
            : e[t] === !0
            ? t.toLowerCase()
            : (r = e.getAttributeNode(t)) && r.specified
            ? r.value
            : null;
        }),
      rt
    );
  })(e);
  (p.find = b),
    (p.expr = b.selectors),
    (p.expr[":"] = p.expr.pseudos),
    (p.unique = b.uniqueSort),
    (p.text = b.getText),
    (p.isXMLDoc = b.isXML),
    (p.contains = b.contains);
  var w = p.expr.match.needsContext,
    E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    S = /^.[^:#\[\.,]*$/;
  (p.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? p.find.matchesSelector(r, e)
          ? [r]
          : []
        : p.find.matches(
            e,
            p.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    p.fn.extend({
      find: function (e) {
        var t,
          n = [],
          r = this,
          i = r.length;
        if ("string" != typeof e)
          return this.pushStack(
            p(e).filter(function () {
              for (t = 0; i > t; t++) if (p.contains(r[t], this)) return !0;
            })
          );
        for (t = 0; i > t; t++) p.find(e, r[t], n);
        return (
          (n = this.pushStack(i > 1 ? p.unique(n) : n)),
          (n.selector = this.selector ? this.selector + " " + e : e),
          n
        );
      },
      filter: function (e) {
        return this.pushStack(x(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(x(this, e || [], !0));
      },
      is: function (e) {
        return !!x(this, "string" == typeof e && w.test(e) ? p(e) : e || [], !1)
          .length;
      },
    });
  var T,
    N = e.document,
    C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    k = (p.fn.init = function (e, t) {
      var n, r;
      if (!e) return this;
      if ("string" == typeof e) {
        if (
          ((n =
            "<" === e.charAt(0) &&
            ">" === e.charAt(e.length - 1) &&
            e.length >= 3
              ? [null, e, null]
              : C.exec(e)),
          !n || (!n[1] && t))
        )
          return !t || t.jquery
            ? (t || T).find(e)
            : this.constructor(t).find(e);
        if (n[1]) {
          if (
            ((t = t instanceof p ? t[0] : t),
            p.merge(
              this,
              p.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : N, !0)
            ),
            E.test(n[1]) && p.isPlainObject(t))
          )
            for (n in t)
              p.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          return this;
        }
        if (((r = N.getElementById(n[2])), r && r.parentNode)) {
          if (r.id !== n[2]) return T.find(e);
          (this.length = 1), (this[0] = r);
        }
        return (this.context = N), (this.selector = e), this;
      }
      return e.nodeType
        ? ((this.context = this[0] = e), (this.length = 1), this)
        : p.isFunction(e)
        ? "undefined" != typeof T.ready
          ? T.ready(e)
          : e(p)
        : (void 0 !== e.selector &&
            ((this.selector = e.selector), (this.context = e.context)),
          p.makeArray(e, this));
    });
  (k.prototype = p.fn), (T = p(N));
  var L = /^(?:parents|prev(?:Until|All))/,
    A = { children: !0, contents: !0, next: !0, prev: !0 };
  p.extend({
    dir: function (e, t, n) {
      var r = [],
        i = e[t];
      while (
        i &&
        9 !== i.nodeType &&
        (void 0 === n || 1 !== i.nodeType || !p(i).is(n))
      )
        1 === i.nodeType && r.push(i), (i = i[t]);
      return r;
    },
    sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
  }),
    p.fn.extend({
      has: function (e) {
        var t,
          n = p(e, this),
          r = n.length;
        return this.filter(function () {
          for (t = 0; r > t; t++) if (p.contains(this, n[t])) return !0;
        });
      },
      closest: function (e, t) {
        for (
          var n,
            r = 0,
            i = this.length,
            s = [],
            o = w.test(e) || "string" != typeof e ? p(e, t || this.context) : 0;
          i > r;
          r++
        )
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (o
                ? o.index(n) > -1
                : 1 === n.nodeType && p.find.matchesSelector(n, e))
            ) {
              s.push(n);
              break;
            }
        return this.pushStack(s.length > 1 ? p.unique(s) : s);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? p.inArray(this[0], p(e))
            : p.inArray(e.jquery ? e[0] : e, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(p.unique(p.merge(this.get(), p(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    });
  p.each(
    {
      parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function (e) {
        return p.dir(e, "parentNode");
      },
      parentsUntil: function (e, t, n) {
        return p.dir(e, "parentNode", n);
      },
      next: function (e) {
        return O(e, "nextSibling");
      },
      prev: function (e) {
        return O(e, "previousSibling");
      },
      nextAll: function (e) {
        return p.dir(e, "nextSibling");
      },
      prevAll: function (e) {
        return p.dir(e, "previousSibling");
      },
      nextUntil: function (e, t, n) {
        return p.dir(e, "nextSibling", n);
      },
      prevUntil: function (e, t, n) {
        return p.dir(e, "previousSibling", n);
      },
      siblings: function (e) {
        return p.sibling((e.parentNode || {}).firstChild, e);
      },
      children: function (e) {
        return p.sibling(e.firstChild);
      },
      contents: function (e) {
        return p.nodeName(e, "iframe")
          ? e.contentDocument || e.contentWindow.document
          : p.merge([], e.childNodes);
      },
    },
    function (e, t) {
      p.fn[e] = function (n, r) {
        var i = p.map(this, t, n);
        return (
          "Until" !== e.slice(-5) && (r = n),
          r && "string" == typeof r && (i = p.filter(r, i)),
          this.length > 1 &&
            (A[e] || (i = p.unique(i)), L.test(e) && (i = i.reverse())),
          this.pushStack(i)
        );
      };
    }
  );
  var M = /\S+/g,
    _ = {};
  (p.Callbacks = function (e) {
    e = "string" == typeof e ? _[e] || D(e) : p.extend({}, e);
    var t,
      n,
      r,
      i,
      s,
      o,
      u = [],
      a = !e.once && [],
      f = function (c) {
        for (
          n = e.memory && c, r = !0, s = o || 0, o = 0, i = u.length, t = !0;
          u && i > s;
          s++
        )
          if (u[s].apply(c[0], c[1]) === !1 && e.stopOnFalse) {
            n = !1;
            break;
          }
        (t = !1),
          u && (a ? a.length && f(a.shift()) : n ? (u = []) : l.disable());
      },
      l = {
        add: function () {
          if (u) {
            var r = u.length;
            !(function s(t) {
              p.each(t, function (t, n) {
                var r = p.type(n);
                "function" === r
                  ? (e.unique && l.has(n)) || u.push(n)
                  : n && n.length && "string" !== r && s(n);
              });
            })(arguments),
              t ? (i = u.length) : n && ((o = r), f(n));
          }
          return this;
        },
        remove: function () {
          return (
            u &&
              p.each(arguments, function (e, n) {
                var r;
                while ((r = p.inArray(n, u, r)) > -1)
                  u.splice(r, 1), t && (i >= r && i--, s >= r && s--);
              }),
            this
          );
        },
        has: function (e) {
          return e ? p.inArray(e, u) > -1 : !(!u || !u.length);
        },
        empty: function () {
          return (u = []), (i = 0), this;
        },
        disable: function () {
          return (u = a = n = void 0), this;
        },
        disabled: function () {
          return !u;
        },
        lock: function () {
          return (a = void 0), n || l.disable(), this;
        },
        locked: function () {
          return !a;
        },
        fireWith: function (e, n) {
          return (
            !u ||
              (r && !a) ||
              ((n = n || []),
              (n = [e, n.slice ? n.slice() : n]),
              t ? a.push(n) : f(n)),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!r;
        },
      };
    return l;
  }),
    p.extend({
      Deferred: function (e) {
        var t = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")],
          ],
          n = "pending",
          r = {
            state: function () {
              return n;
            },
            always: function () {
              return i.done(arguments).fail(arguments), this;
            },
            then: function () {
              var e = arguments;
              return p
                .Deferred(function (n) {
                  p.each(t, function (t, s) {
                    var o = p.isFunction(e[t]) && e[t];
                    i[s[1]](function () {
                      var e = o && o.apply(this, arguments);
                      e && p.isFunction(e.promise)
                        ? e
                            .promise()
                            .done(n.resolve)
                            .fail(n.reject)
                            .progress(n.notify)
                        : n[s[0] + "With"](
                            this === r ? n.promise() : this,
                            o ? [e] : arguments
                          );
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? p.extend(e, r) : r;
            },
          },
          i = {};
        return (
          (r.pipe = r.then),
          p.each(t, function (e, s) {
            var o = s[2],
              u = s[3];
            (r[s[1]] = o.add),
              u &&
                o.add(
                  function () {
                    n = u;
                  },
                  t[1 ^ e][2].disable,
                  t[2][2].lock
                ),
              (i[s[0]] = function () {
                return i[s[0] + "With"](this === i ? r : this, arguments), this;
              }),
              (i[s[0] + "With"] = o.fireWith);
          }),
          r.promise(i),
          e && e.call(i, i),
          i
        );
      },
      when: function (e) {
        var t = 0,
          n = r.call(arguments),
          i = n.length,
          s = 1 !== i || (e && p.isFunction(e.promise)) ? i : 0,
          o = 1 === s ? e : p.Deferred(),
          u = function (e, t, n) {
            return function (i) {
              (t[e] = this),
                (n[e] = arguments.length > 1 ? r.call(arguments) : i),
                n === a ? o.notifyWith(t, n) : --s || o.resolveWith(t, n);
            };
          },
          a,
          f,
          l;
        if (i > 1)
          for (a = new Array(i), f = new Array(i), l = new Array(i); i > t; t++)
            n[t] && p.isFunction(n[t].promise)
              ? n[t]
                  .promise()
                  .done(u(t, l, n))
                  .fail(o.reject)
                  .progress(u(t, f, a))
              : --s;
        return s || o.resolveWith(l, n), o.promise();
      },
    });
  var P;
  (p.fn.ready = function (e) {
    return p.ready.promise().done(e), this;
  }),
    p.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (e) {
        e ? p.readyWait++ : p.ready(!0);
      },
      ready: function (e) {
        if (e === !0 ? !--p.readyWait : !p.isReady) {
          if (!N.body) return setTimeout(p.ready);
          (p.isReady = !0),
            (e !== !0 && --p.readyWait > 0) ||
              (P.resolveWith(N, [p]),
              p.fn.trigger && p(N).trigger("ready").off("ready"));
        }
      },
    });
  p.ready.promise = function (t) {
    if (!P)
      if (((P = p.Deferred()), "complete" === N.readyState))
        setTimeout(p.ready);
      else if (N.addEventListener)
        N.addEventListener("DOMContentLoaded", B, !1),
          e.addEventListener("load", B, !1);
      else {
        N.attachEvent("onreadystatechange", B), e.attachEvent("onload", B);
        var n = !1;
        try {
          n = null == e.frameElement && N.documentElement;
        } catch (r) {}
        n &&
          n.doScroll &&
          !(function i() {
            if (!p.isReady) {
              try {
                n.doScroll("left");
              } catch (e) {
                return setTimeout(i, 50);
              }
              H(), p.ready();
            }
          })();
      }
    return P.promise(t);
  };
  var j = "undefined",
    F;
  for (F in p(c)) break;
  (c.ownLast = "0" !== F),
    (c.inlineBlockNeedsLayout = !1),
    p(function () {
      var e,
        t,
        n = N.getElementsByTagName("body")[0];
      n &&
        ((e = N.createElement("div")),
        (e.style.cssText =
          "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px"),
        (t = N.createElement("div")),
        n.appendChild(e).appendChild(t),
        typeof t.style.zoom !== j &&
          ((t.style.cssText =
            "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1"),
          (c.inlineBlockNeedsLayout = 3 === t.offsetWidth) &&
            (n.style.zoom = 1)),
        n.removeChild(e),
        (e = t = null));
    }),
    (function () {
      var e = N.createElement("div");
      if (null == c.deleteExpando) {
        c.deleteExpando = !0;
        try {
          delete e.test;
        } catch (t) {
          c.deleteExpando = !1;
        }
      }
      e = null;
    })(),
    (p.acceptData = function (e) {
      var t = p.noData[(e.nodeName + " ").toLowerCase()],
        n = +e.nodeType || 1;
      return 1 !== n && 9 !== n
        ? !1
        : !t || (t !== !0 && e.getAttribute("classid") === t);
    });
  var I = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    q = /([A-Z])/g;
  p.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    },
    hasData: function (e) {
      return (
        (e = e.nodeType ? p.cache[e[p.expando]] : e[p.expando]), !!e && !U(e)
      );
    },
    data: function (e, t, n) {
      return z(e, t, n);
    },
    removeData: function (e, t) {
      return W(e, t);
    },
    _data: function (e, t, n) {
      return z(e, t, n, !0);
    },
    _removeData: function (e, t) {
      return W(e, t, !0);
    },
  }),
    p.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          s = this[0],
          o = s && s.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((i = p.data(s)), 1 === s.nodeType && !p._data(s, "parsedAttrs"))
          ) {
            n = o.length;
            while (n--)
              (r = o[n].name),
                0 === r.indexOf("data-") &&
                  ((r = p.camelCase(r.slice(5))), R(s, r, i[r]));
            p._data(s, "parsedAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              p.data(this, e);
            })
          : arguments.length > 1
          ? this.each(function () {
              p.data(this, e, t);
            })
          : s
          ? R(s, e, p.data(s, e))
          : void 0;
      },
      removeData: function (e) {
        return this.each(function () {
          p.removeData(this, e);
        });
      },
    }),
    p.extend({
      queue: function (e, t, n) {
        var r;
        return e
          ? ((t = (t || "fx") + "queue"),
            (r = p._data(e, t)),
            n &&
              (!r || p.isArray(n)
                ? (r = p._data(e, t, p.makeArray(n)))
                : r.push(n)),
            r || [])
          : void 0;
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = p.queue(e, t),
          r = n.length,
          i = n.shift(),
          s = p._queueHooks(e, t),
          o = function () {
            p.dequeue(e, t);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete s.stop,
            i.call(e, o, s)),
          !r && s && s.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          p._data(e, n) ||
          p._data(e, n, {
            empty: p.Callbacks("once memory").add(function () {
              p._removeData(e, t + "queue"), p._removeData(e, n);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? p.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = p.queue(this, e, t);
                p._queueHooks(this, e),
                  "fx" === e && "inprogress" !== n[0] && p.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          p.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = p.Deferred(),
          s = this,
          o = this.length,
          u = function () {
            --r || i.resolveWith(s, [s]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (o--)
          (n = p._data(s[o], e + "queueHooks")),
            n && n.empty && (r++, n.empty.add(u));
        return u(), i.promise(t);
      },
    });
  var X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    V = ["Top", "Right", "Bottom", "Left"],
    $ = function (e, t) {
      return (
        (e = t || e),
        "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
      );
    },
    J = (p.access = function (e, t, n, r, i, s, o) {
      var u = 0,
        a = e.length,
        f = null == n;
      if ("object" === p.type(n)) {
        i = !0;
        for (u in n) p.access(e, t, u, n[u], !0, s, o);
      } else if (
        void 0 !== r &&
        ((i = !0),
        p.isFunction(r) || (o = !0),
        f &&
          (o
            ? (t.call(e, r), (t = null))
            : ((f = t),
              (t = function (e, t, n) {
                return f.call(p(e), n);
              }))),
        t)
      )
        for (; a > u; u++) t(e[u], n, o ? r : r.call(e[u], u, t(e[u], n)));
      return i ? e : f ? t.call(e) : a ? t(e[0], n) : s;
    }),
    K = /^(?:checkbox|radio)$/i;
  !(function () {
    var e = N.createDocumentFragment(),
      t = N.createElement("div"),
      n = N.createElement("input");
    if (
      (t.setAttribute("className", "t"),
      (t.innerHTML = "  <link><table></table><a href='/a'>a</a>"),
      (c.leadingWhitespace = 3 === t.firstChild.nodeType),
      (c.tbody = !t.getElementsByTagName("tbody").length),
      (c.htmlSerialize = !!t.getElementsByTagName("link").length),
      (c.html5Clone =
        "<:nav></:nav>" !== N.createElement("nav").cloneNode(!0).outerHTML),
      (n.type = "checkbox"),
      (n.checked = !0),
      e.appendChild(n),
      (c.appendChecked = n.checked),
      (t.innerHTML = "<textarea>x</textarea>"),
      (c.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue),
      e.appendChild(t),
      (t.innerHTML = "<input type='radio' checked='checked' name='t'>"),
      (c.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (c.noCloneEvent = !0),
      t.attachEvent &&
        (t.attachEvent("onclick", function () {
          c.noCloneEvent = !1;
        }),
        t.cloneNode(!0).click()),
      null == c.deleteExpando)
    ) {
      c.deleteExpando = !0;
      try {
        delete t.test;
      } catch (r) {
        c.deleteExpando = !1;
      }
    }
    e = t = n = null;
  })(),
    (function () {
      var t,
        n,
        r = N.createElement("div");
      for (t in { submit: !0, change: !0, focusin: !0 })
        (n = "on" + t),
          (c[t + "Bubbles"] = n in e) ||
            (r.setAttribute(n, "t"),
            (c[t + "Bubbles"] = r.attributes[n].expando === !1));
      r = null;
    })();
  var Q = /^(?:input|select|textarea)$/i,
    G = /^key/,
    Y = /^(?:mouse|contextmenu)|click/,
    Z = /^(?:focusinfocus|focusoutblur)$/,
    et = /^([^.]*)(?:\.(.+)|)$/;
  (p.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        d,
        v,
        m,
        g = p._data(e);
      if (g) {
        n.handler && ((a = n), (n = a.handler), (i = a.selector)),
          n.guid || (n.guid = p.guid++),
          (o = g.events) || (o = g.events = {}),
          (l = g.handle) ||
            ((l = g.handle =
              function (e) {
                return typeof p === j || (e && p.event.triggered === e.type)
                  ? void 0
                  : p.event.dispatch.apply(l.elem, arguments);
              }),
            (l.elem = e)),
          (t = (t || "").match(M) || [""]),
          (u = t.length);
        while (u--)
          (s = et.exec(t[u]) || []),
            (d = m = s[1]),
            (v = (s[2] || "").split(".").sort()),
            d &&
              ((f = p.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = p.event.special[d] || {}),
              (c = p.extend(
                {
                  type: d,
                  origType: m,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && p.expr.match.needsContext.test(i),
                  namespace: v.join("."),
                },
                a
              )),
              (h = o[d]) ||
                ((h = o[d] = []),
                (h.delegateCount = 0),
                (f.setup && f.setup.call(e, r, v, l) !== !1) ||
                  (e.addEventListener
                    ? e.addEventListener(d, l, !1)
                    : e.attachEvent && e.attachEvent("on" + d, l))),
              f.add &&
                (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? h.splice(h.delegateCount++, 0, c) : h.push(c),
              (p.event.global[d] = !0));
        e = null;
      }
    },
    remove: function (e, t, n, r, i) {
      var s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        d,
        v,
        m,
        g = p.hasData(e) && p._data(e);
      if (g && (l = g.events)) {
        (t = (t || "").match(M) || [""]), (f = t.length);
        while (f--)
          if (
            ((u = et.exec(t[f]) || []),
            (d = m = u[1]),
            (v = (u[2] || "").split(".").sort()),
            d)
          ) {
            (c = p.event.special[d] || {}),
              (d = (r ? c.delegateType : c.bindType) || d),
              (h = l[d] || []),
              (u =
                u[2] &&
                new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = s = h.length);
            while (s--)
              (o = h[s]),
                (!i && m !== o.origType) ||
                  (n && n.guid !== o.guid) ||
                  (u && !u.test(o.namespace)) ||
                  (r && r !== o.selector && ("**" !== r || !o.selector)) ||
                  (h.splice(s, 1),
                  o.selector && h.delegateCount--,
                  c.remove && c.remove.call(e, o));
            a &&
              !h.length &&
              ((c.teardown && c.teardown.call(e, v, g.handle) !== !1) ||
                p.removeEvent(e, d, g.handle),
              delete l[d]);
          } else for (d in l) p.event.remove(e, d + t[f], n, r, !0);
        p.isEmptyObject(l) && (delete g.handle, p._removeData(e, "events"));
      }
    },
    trigger: function (t, n, r, i) {
      var s,
        o,
        u,
        a,
        l,
        c,
        h,
        d = [r || N],
        v = f.call(t, "type") ? t.type : t,
        m = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((u = c = r = r || N),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Z.test(v + p.event.triggered) &&
          (v.indexOf(".") >= 0 &&
            ((m = v.split(".")), (v = m.shift()), m.sort()),
          (o = v.indexOf(":") < 0 && "on" + v),
          (t = t[p.expando] ? t : new p.Event(v, "object" == typeof t && t)),
          (t.isTrigger = i ? 2 : 3),
          (t.namespace = m.join(".")),
          (t.namespace_re = t.namespace
            ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : p.makeArray(n, [t])),
          (l = p.event.special[v] || {}),
          i || !l.trigger || l.trigger.apply(r, n) !== !1))
      ) {
        if (!i && !l.noBubble && !p.isWindow(r)) {
          for (
            a = l.delegateType || v, Z.test(a + v) || (u = u.parentNode);
            u;
            u = u.parentNode
          )
            d.push(u), (c = u);
          c === (r.ownerDocument || N) &&
            d.push(c.defaultView || c.parentWindow || e);
        }
        h = 0;
        while ((u = d[h++]) && !t.isPropagationStopped())
          (t.type = h > 1 ? a : l.bindType || v),
            (s = (p._data(u, "events") || {})[t.type] && p._data(u, "handle")),
            s && s.apply(u, n),
            (s = o && u[o]),
            s &&
              s.apply &&
              p.acceptData(u) &&
              ((t.result = s.apply(u, n)),
              t.result === !1 && t.preventDefault());
        if (
          ((t.type = v),
          !i &&
            !t.isDefaultPrevented() &&
            (!l._default || l._default.apply(d.pop(), n) === !1) &&
            p.acceptData(r) &&
            o &&
            r[v] &&
            !p.isWindow(r))
        ) {
          (c = r[o]), c && (r[o] = null), (p.event.triggered = v);
          try {
            r[v]();
          } catch (g) {}
          (p.event.triggered = void 0), c && (r[o] = c);
        }
        return t.result;
      }
    },
    dispatch: function (e) {
      e = p.event.fix(e);
      var t,
        n,
        i,
        s,
        o,
        u = [],
        a = r.call(arguments),
        f = (p._data(this, "events") || {})[e.type] || [],
        l = p.event.special[e.type] || {};
      if (
        ((a[0] = e),
        (e.delegateTarget = this),
        !l.preDispatch || l.preDispatch.call(this, e) !== !1)
      ) {
        (u = p.event.handlers.call(this, e, f)), (t = 0);
        while ((s = u[t++]) && !e.isPropagationStopped()) {
          (e.currentTarget = s.elem), (o = 0);
          while ((i = s.handlers[o++]) && !e.isImmediatePropagationStopped())
            (!e.namespace_re || e.namespace_re.test(i.namespace)) &&
              ((e.handleObj = i),
              (e.data = i.data),
              (n = (
                (p.event.special[i.origType] || {}).handle || i.handler
              ).apply(s.elem, a)),
              void 0 !== n &&
                (e.result = n) === !1 &&
                (e.preventDefault(), e.stopPropagation()));
        }
        return l.postDispatch && l.postDispatch.call(this, e), e.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        s,
        o = [],
        u = t.delegateCount,
        a = e.target;
      if (u && a.nodeType && (!e.button || "click" !== e.type))
        for (; a != this; a = a.parentNode || this)
          if (1 === a.nodeType && (a.disabled !== !0 || "click" !== e.type)) {
            for (i = [], s = 0; u > s; s++)
              (r = t[s]),
                (n = r.selector + " "),
                void 0 === i[n] &&
                  (i[n] = r.needsContext
                    ? p(n, this).index(a) >= 0
                    : p.find(n, this, null, [a]).length),
                i[n] && i.push(r);
            i.length && o.push({ elem: a, handlers: i });
          }
      return u < t.length && o.push({ elem: this, handlers: t.slice(u) }), o;
    },
    fix: function (e) {
      if (e[p.expando]) return e;
      var t,
        n,
        r,
        i = e.type,
        s = e,
        o = this.fixHooks[i];
      o ||
        (this.fixHooks[i] = o =
          Y.test(i) ? this.mouseHooks : G.test(i) ? this.keyHooks : {}),
        (r = o.props ? this.props.concat(o.props) : this.props),
        (e = new p.Event(s)),
        (t = r.length);
      while (t--) (n = r[t]), (e[n] = s[n]);
      return (
        e.target || (e.target = s.srcElement || N),
        3 === e.target.nodeType && (e.target = e.target.parentNode),
        (e.metaKey = !!e.metaKey),
        o.filter ? o.filter(e, s) : e
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        return (
          null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
          e
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, t) {
        var n,
          r,
          i,
          s = t.button,
          o = t.fromElement;
        return (
          null == e.pageX &&
            null != t.clientX &&
            ((r = e.target.ownerDocument || N),
            (i = r.documentElement),
            (n = r.body),
            (e.pageX =
              t.clientX +
              ((i && i.scrollLeft) || (n && n.scrollLeft) || 0) -
              ((i && i.clientLeft) || (n && n.clientLeft) || 0)),
            (e.pageY =
              t.clientY +
              ((i && i.scrollTop) || (n && n.scrollTop) || 0) -
              ((i && i.clientTop) || (n && n.clientTop) || 0))),
          !e.relatedTarget &&
            o &&
            (e.relatedTarget = o === e.target ? t.toElement : o),
          e.which ||
            void 0 === s ||
            (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
          e
        );
      },
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== rt() && this.focus)
            try {
              return this.focus(), !1;
            } catch (e) {}
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === rt() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return p.nodeName(this, "input") &&
            "checkbox" === this.type &&
            this.click
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (e) {
          return p.nodeName(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && (e.originalEvent.returnValue = e.result);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = p.extend(new p.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? p.event.trigger(i, null, t) : p.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (p.removeEvent = N.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, t, n) {
          var r = "on" + t;
          e.detachEvent &&
            (typeof e[r] === j && (e[r] = null), e.detachEvent(r, n));
        }),
    (p.Event = function (e, t) {
      return this instanceof p.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented &&
                  (e.returnValue === !1 ||
                    (e.getPreventDefault && e.getPreventDefault())))
                  ? tt
                  : nt))
            : (this.type = e),
          t && p.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || p.now()),
          void (this[p.expando] = !0))
        : new p.Event(e, t);
    }),
    (p.Event.prototype = {
      isDefaultPrevented: nt,
      isPropagationStopped: nt,
      isImmediatePropagationStopped: nt,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = tt),
          e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = tt),
          e &&
            (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = tt), this.stopPropagation();
      },
    }),
    p.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        p.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = this,
              i = e.relatedTarget,
              s = e.handleObj;
            return (
              (!i || (i !== r && !p.contains(r, i))) &&
                ((e.type = s.origType),
                (n = s.handler.apply(this, arguments)),
                (e.type = t)),
              n
            );
          },
        };
      }
    ),
    c.submitBubbles ||
      (p.event.special.submit = {
        setup: function () {
          return p.nodeName(this, "form")
            ? !1
            : void p.event.add(
                this,
                "click._submit keypress._submit",
                function (e) {
                  var t = e.target,
                    n =
                      p.nodeName(t, "input") || p.nodeName(t, "button")
                        ? t.form
                        : void 0;
                  n &&
                    !p._data(n, "submitBubbles") &&
                    (p.event.add(n, "submit._submit", function (e) {
                      e._submit_bubble = !0;
                    }),
                    p._data(n, "submitBubbles", !0));
                }
              );
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
            this.parentNode &&
              !e.isTrigger &&
              p.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          return p.nodeName(this, "form")
            ? !1
            : void p.event.remove(this, "._submit");
        },
      }),
    c.changeBubbles ||
      (p.event.special.change = {
        setup: function () {
          return Q.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
                (p.event.add(this, "propertychange._change", function (e) {
                  "checked" === e.originalEvent.propertyName &&
                    (this._just_changed = !0);
                }),
                p.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    (this._just_changed = !1),
                    p.event.simulate("change", this, e, !0);
                })),
              !1)
            : void p.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Q.test(t.nodeName) &&
                  !p._data(t, "changeBubbles") &&
                  (p.event.add(t, "change._change", function (e) {
                    !this.parentNode ||
                      e.isSimulated ||
                      e.isTrigger ||
                      p.event.simulate("change", this.parentNode, e, !0);
                  }),
                  p._data(t, "changeBubbles", !0));
              });
        },
        handle: function (e) {
          var t = e.target;
          return this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            ("radio" !== t.type && "checkbox" !== t.type)
            ? e.handleObj.handler.apply(this, arguments)
            : void 0;
        },
        teardown: function () {
          return p.event.remove(this, "._change"), !Q.test(this.nodeName);
        },
      }),
    c.focusinBubbles ||
      p.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          p.event.simulate(t, e.target, p.event.fix(e), !0);
        };
        p.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = p._data(r, t);
            i || r.addEventListener(e, n, !0), p._data(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = p._data(r, t) - 1;
            i
              ? p._data(r, t, i)
              : (r.removeEventListener(e, n, !0), p._removeData(r, t));
          },
        };
      }),
    p.fn.extend({
      on: function (e, t, n, r, i) {
        var s, o;
        if ("object" == typeof e) {
          "string" != typeof t && ((n = n || t), (t = void 0));
          for (s in e) this.on(s, t, n, e[s], i);
          return this;
        }
        if (
          (null == n && null == r
            ? ((r = t), (n = t = void 0))
            : null == r &&
              ("string" == typeof t
                ? ((r = n), (n = void 0))
                : ((r = n), (n = t), (t = void 0))),
          r === !1)
        )
          r = nt;
        else if (!r) return this;
        return (
          1 === i &&
            ((o = r),
            (r = function (e) {
              return p().off(e), o.apply(this, arguments);
            }),
            (r.guid = o.guid || (o.guid = p.guid++))),
          this.each(function () {
            p.event.add(this, e, r, n, t);
          })
        );
      },
      one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            p(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (t === !1 || "function" == typeof t) && ((n = t), (t = void 0)),
          n === !1 && (n = nt),
          this.each(function () {
            p.event.remove(this, e, n, t);
          })
        );
      },
      trigger: function (e, t) {
        return this.each(function () {
          p.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        return n ? p.event.trigger(e, t, n, !0) : void 0;
      },
    });
  var st =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    ot = / jQuery\d+="(?:null|\d+)"/g,
    ut = new RegExp("<(?:" + st + ")[\\s>]", "i"),
    at = /^\s+/,
    ft =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\>/gi,
    lt = /<([\w:]+)/,
    ct = /<tbody/i,
    ht = /<|&#?\w+;/,
    pt = /<(?:script|style|link)/i,
    dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    vt = /^$|\/(?:java|ecma)script/i,
    mt = /^true\/(.*)/,
    gt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    yt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: c.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
    },
    bt = it(N),
    wt = bt.appendChild(N.createElement("div"));
  (yt.optgroup = yt.option),
    (yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead),
    (yt.th = yt.td);
  p.extend({
    clone: function (e, t, n) {
      var r,
        i,
        s,
        o,
        u,
        a = p.contains(e.ownerDocument, e);
      if (
        (c.html5Clone || p.isXMLDoc(e) || !ut.test("<" + e.nodeName + ">")
          ? (s = e.cloneNode(!0))
          : ((wt.innerHTML = e.outerHTML), wt.removeChild((s = wt.firstChild))),
        !(
          (c.noCloneEvent && c.noCloneChecked) ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          p.isXMLDoc(e)
        ))
      )
        for (r = Et(s), u = Et(e), o = 0; null != (i = u[o]); ++o)
          r[o] && Lt(i, r[o]);
      if (t)
        if (n)
          for (u = u || Et(e), r = r || Et(s), o = 0; null != (i = u[o]); o++)
            kt(i, r[o]);
        else kt(e, s);
      return (
        (r = Et(s, "script")),
        r.length > 0 && Ct(r, !a && Et(e, "script")),
        (r = u = i = null),
        s
      );
    },
    buildFragment: function (e, t, n, r) {
      for (
        var i, s, o, u, a, f, l, h = e.length, d = it(t), v = [], m = 0;
        h > m;
        m++
      )
        if (((s = e[m]), s || 0 === s))
          if ("object" === p.type(s)) p.merge(v, s.nodeType ? [s] : s);
          else if (ht.test(s)) {
            (u = u || d.appendChild(t.createElement("div"))),
              (a = (lt.exec(s) || ["", ""])[1].toLowerCase()),
              (l = yt[a] || yt._default),
              (u.innerHTML = l[1] + s.replace(ft, "<$1></$2>") + l[2]),
              (i = l[0]);
            while (i--) u = u.lastChild;
            if (
              (!c.leadingWhitespace &&
                at.test(s) &&
                v.push(t.createTextNode(at.exec(s)[0])),
              !c.tbody)
            ) {
              (s =
                "table" !== a || ct.test(s)
                  ? "<table>" !== l[1] || ct.test(s)
                    ? 0
                    : u
                  : u.firstChild),
                (i = s && s.childNodes.length);
              while (i--)
                p.nodeName((f = s.childNodes[i]), "tbody") &&
                  !f.childNodes.length &&
                  s.removeChild(f);
            }
            p.merge(v, u.childNodes), (u.textContent = "");
            while (u.firstChild) u.removeChild(u.firstChild);
            u = d.lastChild;
          } else v.push(t.createTextNode(s));
      u && d.removeChild(u),
        c.appendChecked || p.grep(Et(v, "input"), St),
        (m = 0);
      while ((s = v[m++]))
        if (
          (!r || -1 === p.inArray(s, r)) &&
          ((o = p.contains(s.ownerDocument, s)),
          (u = Et(d.appendChild(s), "script")),
          o && Ct(u),
          n)
        ) {
          i = 0;
          while ((s = u[i++])) vt.test(s.type || "") && n.push(s);
        }
      return (u = null), d;
    },
    cleanData: function (e, t) {
      for (
        var r,
          i,
          s,
          o,
          u = 0,
          a = p.expando,
          f = p.cache,
          l = c.deleteExpando,
          h = p.event.special;
        null != (r = e[u]);
        u++
      )
        if ((t || p.acceptData(r)) && ((s = r[a]), (o = s && f[s]))) {
          if (o.events)
            for (i in o.events)
              h[i] ? p.event.remove(r, i) : p.removeEvent(r, i, o.handle);
          f[s] &&
            (delete f[s],
            l
              ? delete r[a]
              : typeof r.removeAttribute !== j
              ? r.removeAttribute(a)
              : (r[a] = null),
            n.push(s));
        }
    },
  }),
    p.fn.extend({
      text: function (e) {
        return J(
          this,
          function (e) {
            return void 0 === e
              ? p.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || N).createTextNode(e)
                );
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = xt(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = xt(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      remove: function (e, t) {
        for (
          var n, r = e ? p.filter(e, this) : this, i = 0;
          null != (n = r[i]);
          i++
        )
          t || 1 !== n.nodeType || p.cleanData(Et(n)),
            n.parentNode &&
              (t && p.contains(n.ownerDocument, n) && Ct(Et(n, "script")),
              n.parentNode.removeChild(n));
        return this;
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && p.cleanData(Et(e, !1));
          while (e.firstChild) e.removeChild(e.firstChild);
          e.options && p.nodeName(e, "select") && (e.options.length = 0);
        }
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null == e ? !1 : e),
          (t = null == t ? e : t),
          this.map(function () {
            return p.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return J(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e)
              return 1 === t.nodeType ? t.innerHTML.replace(ot, "") : void 0;
            if (
              !(
                "string" != typeof e ||
                pt.test(e) ||
                (!c.htmlSerialize && ut.test(e)) ||
                (!c.leadingWhitespace && at.test(e)) ||
                yt[(lt.exec(e) || ["", ""])[1].toLowerCase()]
              )
            ) {
              e = e.replace(ft, "<$1></$2>");
              try {
                for (; r > n; n++)
                  (t = this[n] || {}),
                    1 === t.nodeType &&
                      (p.cleanData(Et(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (i) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = arguments[0];
        return (
          this.domManip(arguments, function (t) {
            (e = this.parentNode),
              p.cleanData(Et(this)),
              e && e.replaceChild(t, this);
          }),
          e && (e.length || e.nodeType) ? this : this.remove()
        );
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, t) {
        e = i.apply([], e);
        var n,
          r,
          s,
          o,
          u,
          a,
          f = 0,
          l = this.length,
          h = this,
          d = l - 1,
          v = e[0],
          m = p.isFunction(v);
        if (m || (l > 1 && "string" == typeof v && !c.checkClone && dt.test(v)))
          return this.each(function (n) {
            var r = h.eq(n);
            m && (e[0] = v.call(this, n, r.html())), r.domManip(e, t);
          });
        if (
          l &&
          ((a = p.buildFragment(e, this[0].ownerDocument, !1, this)),
          (n = a.firstChild),
          1 === a.childNodes.length && (a = n),
          n)
        ) {
          for (o = p.map(Et(a, "script"), Tt), s = o.length; l > f; f++)
            (r = a),
              f !== d &&
                ((r = p.clone(r, !0, !0)), s && p.merge(o, Et(r, "script"))),
              t.call(this[f], r, f);
          if (s)
            for (
              u = o[o.length - 1].ownerDocument, p.map(o, Nt), f = 0;
              s > f;
              f++
            )
              (r = o[f]),
                vt.test(r.type || "") &&
                  !p._data(r, "globalEval") &&
                  p.contains(u, r) &&
                  (r.src
                    ? p._evalUrl && p._evalUrl(r.src)
                    : p.globalEval(
                        (r.text || r.textContent || r.innerHTML || "").replace(
                          gt,
                          ""
                        )
                      ));
          a = n = null;
        }
        return this;
      },
    }),
    p.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        p.fn[e] = function (e) {
          for (var n, r = 0, i = [], o = p(e), u = o.length - 1; u >= r; r++)
            (n = r === u ? this : this.clone(!0)),
              p(o[r])[t](n),
              s.apply(i, n.get());
          return this.pushStack(i);
        };
      }
    );
  var At,
    Ot = {};
  !(function () {
    var e,
      t,
      n = N.createElement("div"),
      r =
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    (n.innerHTML =
      "  <link><table></table><a href='/a'>a</a><input type='checkbox'>"),
      (e = n.getElementsByTagName("a")[0]),
      (e.style.cssText = "float:left;opacity:.5"),
      (c.opacity = /^0.5/.test(e.style.opacity)),
      (c.cssFloat = !!e.style.cssFloat),
      (n.style.backgroundClip = "content-box"),
      (n.cloneNode(!0).style.backgroundClip = ""),
      (c.clearCloneStyle = "content-box" === n.style.backgroundClip),
      (e = n = null),
      (c.shrinkWrapBlocks = function () {
        var e, n, i, s;
        if (null == t) {
          if (((e = N.getElementsByTagName("body")[0]), !e)) return;
          (s =
            "border:0;width:0;height:0;position:absolute;top:0;left:-9999px"),
            (n = N.createElement("div")),
            (i = N.createElement("div")),
            e.appendChild(n).appendChild(i),
            (t = !1),
            typeof i.style.zoom !== j &&
              ((i.style.cssText = r + ";width:1px;padding:1px;zoom:1"),
              (i.innerHTML = "<div></div>"),
              (i.firstChild.style.width = "5px"),
              (t = 3 !== i.offsetWidth)),
            e.removeChild(n),
            (e = n = i = null);
        }
        return t;
      });
  })();
  var Dt = /^margin/,
    Pt = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
    Ht,
    Bt,
    jt = /^(top|right|bottom|left)$/;
  e.getComputedStyle
    ? ((Ht = function (e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null);
      }),
      (Bt = function (e, t, n) {
        var r,
          i,
          s,
          o,
          u = e.style;
        return (
          (n = n || Ht(e)),
          (o = n ? n.getPropertyValue(t) || n[t] : void 0),
          n &&
            ("" !== o || p.contains(e.ownerDocument, e) || (o = p.style(e, t)),
            Pt.test(o) &&
              Dt.test(t) &&
              ((r = u.width),
              (i = u.minWidth),
              (s = u.maxWidth),
              (u.minWidth = u.maxWidth = u.width = o),
              (o = n.width),
              (u.width = r),
              (u.minWidth = i),
              (u.maxWidth = s))),
          void 0 === o ? o : o + ""
        );
      }))
    : N.documentElement.currentStyle &&
      ((Ht = function (e) {
        return e.currentStyle;
      }),
      (Bt = function (e, t, n) {
        var r,
          i,
          s,
          o,
          u = e.style;
        return (
          (n = n || Ht(e)),
          (o = n ? n[t] : void 0),
          null == o && u && u[t] && (o = u[t]),
          Pt.test(o) &&
            !jt.test(t) &&
            ((r = u.left),
            (i = e.runtimeStyle),
            (s = i && i.left),
            s && (i.left = e.currentStyle.left),
            (u.left = "fontSize" === t ? "1em" : o),
            (o = u.pixelLeft + "px"),
            (u.left = r),
            s && (i.left = s)),
          void 0 === o ? o : o + "" || "auto"
        );
      }));
  !(function () {
    function l() {
      var t,
        n,
        u = N.getElementsByTagName("body")[0];
      u &&
        ((t = N.createElement("div")),
        (n = N.createElement("div")),
        (t.style.cssText = a),
        u.appendChild(t).appendChild(n),
        (n.style.cssText =
          "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%"),
        p.swap(u, null != u.style.zoom ? { zoom: 1 } : {}, function () {
          r = 4 === n.offsetWidth;
        }),
        (i = !0),
        (s = !1),
        (o = !0),
        e.getComputedStyle &&
          ((s = "1%" !== (e.getComputedStyle(n, null) || {}).top),
          (i =
            "4px" === (e.getComputedStyle(n, null) || { width: "4px" }).width)),
        u.removeChild(t),
        (n = u = null));
    }
    var t,
      n,
      r,
      i,
      s,
      o,
      u = N.createElement("div"),
      a = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px",
      f =
        "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";
    (u.innerHTML =
      "  <link><table></table><a href='/a'>a</a><input type='checkbox'>"),
      (t = u.getElementsByTagName("a")[0]),
      (t.style.cssText = "float:left;opacity:.5"),
      (c.opacity = /^0.5/.test(t.style.opacity)),
      (c.cssFloat = !!t.style.cssFloat),
      (u.style.backgroundClip = "content-box"),
      (u.cloneNode(!0).style.backgroundClip = ""),
      (c.clearCloneStyle = "content-box" === u.style.backgroundClip),
      (t = u = null),
      p.extend(c, {
        reliableHiddenOffsets: function () {
          if (null != n) return n;
          var e,
            t,
            r,
            i = N.createElement("div"),
            s = N.getElementsByTagName("body")[0];
          if (s)
            return (
              i.setAttribute("className", "t"),
              (i.innerHTML =
                "  <link><table></table><a href='/a'>a</a><input type='checkbox'>"),
              (e = N.createElement("div")),
              (e.style.cssText = a),
              s.appendChild(e).appendChild(i),
              (i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (t = i.getElementsByTagName("td")),
              (t[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
              (r = 0 === t[0].offsetHeight),
              (t[0].style.display = ""),
              (t[1].style.display = "none"),
              (n = r && 0 === t[0].offsetHeight),
              s.removeChild(e),
              (i = s = null),
              n
            );
        },
        boxSizing: function () {
          return null == r && l(), r;
        },
        boxSizingReliable: function () {
          return null == i && l(), i;
        },
        pixelPosition: function () {
          return null == s && l(), s;
        },
        reliableMarginRight: function () {
          var t, n, r, i;
          if (null == o && e.getComputedStyle) {
            if (((t = N.getElementsByTagName("body")[0]), !t)) return;
            (n = N.createElement("div")),
              (r = N.createElement("div")),
              (n.style.cssText = a),
              t.appendChild(n).appendChild(r),
              (i = r.appendChild(N.createElement("div"))),
              (i.style.cssText = r.style.cssText = f),
              (i.style.marginRight = i.style.width = "0"),
              (r.style.width = "1px"),
              (o = !parseFloat(
                (e.getComputedStyle(i, null) || {}).marginRight
              )),
              t.removeChild(n);
          }
          return o;
        },
      });
  })(),
    (p.swap = function (e, t, n, r) {
      var i,
        s,
        o = {};
      for (s in t) (o[s] = e.style[s]), (e.style[s] = t[s]);
      i = n.apply(e, r || []);
      for (s in t) e.style[s] = o[s];
      return i;
    });
  var It = /alpha\([^)]*\)/i,
    qt = /opacity\s*=\s*([^)]*)/,
    Rt = /^(none|table(?!-c[ea]).+)/,
    Ut = new RegExp("^(" + X + ")(.*)$", "i"),
    zt = new RegExp("^([+-])=(" + X + ")", "i"),
    Wt = { position: "absolute", visibility: "hidden", display: "block" },
    Xt = { letterSpacing: 0, fontWeight: 400 },
    Vt = ["Webkit", "O", "Moz", "ms"];
  p.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Bt(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: c.cssFloat ? "cssFloat" : "styleFloat" },
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          s,
          o,
          u = p.camelCase(t),
          a = e.style;
        if (
          ((t = p.cssProps[u] || (p.cssProps[u] = $t(a, u))),
          (o = p.cssHooks[t] || p.cssHooks[u]),
          void 0 === n)
        )
          return o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i : a[t];
        if (
          ((s = typeof n),
          "string" === s &&
            (i = zt.exec(n)) &&
            ((n = (i[1] + 1) * i[2] + parseFloat(p.css(e, t))), (s = "number")),
          null != n &&
            n === n &&
            ("number" !== s || p.cssNumber[u] || (n += "px"),
            c.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (a[t] = "inherit"),
            !(o && "set" in o && void 0 === (n = o.set(e, n, r)))))
        )
          try {
            (a[t] = ""), (a[t] = n);
          } catch (f) {}
      }
    },
    css: function (e, t, n, r) {
      var i,
        s,
        o,
        u = p.camelCase(t);
      return (
        (t = p.cssProps[u] || (p.cssProps[u] = $t(e.style, u))),
        (o = p.cssHooks[t] || p.cssHooks[u]),
        o && "get" in o && (s = o.get(e, !0, n)),
        void 0 === s && (s = Bt(e, t, r)),
        "normal" === s && t in Xt && (s = Xt[t]),
        "" === n || n
          ? ((i = parseFloat(s)), n === !0 || p.isNumeric(i) ? i || 0 : s)
          : s
      );
    },
  }),
    p.each(["height", "width"], function (e, t) {
      p.cssHooks[t] = {
        get: function (e, n, r) {
          return n
            ? 0 === e.offsetWidth && Rt.test(p.css(e, "display"))
              ? p.swap(e, Wt, function () {
                  return Gt(e, t, r);
                })
              : Gt(e, t, r)
            : void 0;
        },
        set: function (e, n, r) {
          var i = r && Ht(e);
          return Kt(
            e,
            n,
            r
              ? Qt(
                  e,
                  t,
                  r,
                  c.boxSizing() &&
                    "border-box" === p.css(e, "boxSizing", !1, i),
                  i
                )
              : 0
          );
        },
      };
    }),
    c.opacity ||
      (p.cssHooks.opacity = {
        get: function (e, t) {
          return qt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = p.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            s = (r && r.filter) || n.filter || "";
          (n.zoom = 1),
            ((t >= 1 || "" === t) &&
              "" === p.trim(s.replace(It, "")) &&
              n.removeAttribute &&
              (n.removeAttribute("filter"), "" === t || (r && !r.filter))) ||
              (n.filter = It.test(s) ? s.replace(It, i) : s + " " + i);
        },
      }),
    (p.cssHooks.marginRight = Ft(c.reliableMarginRight, function (e, t) {
      return t
        ? p.swap(e, { display: "inline-block" }, Bt, [e, "marginRight"])
        : void 0;
    })),
    p.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (p.cssHooks[e + t] = {
        expand: function (n) {
          for (
            var r = 0, i = {}, s = "string" == typeof n ? n.split(" ") : [n];
            4 > r;
            r++
          )
            i[e + V[r] + t] = s[r] || s[r - 2] || s[0];
          return i;
        },
      }),
        Dt.test(e) || (p.cssHooks[e + t].set = Kt);
    }),
    p.fn.extend({
      css: function (e, t) {
        return J(
          this,
          function (e, t, n) {
            var r,
              i,
              s = {},
              o = 0;
            if (p.isArray(t)) {
              for (r = Ht(e), i = t.length; i > o; o++)
                s[t[o]] = p.css(e, t[o], !1, r);
              return s;
            }
            return void 0 !== n ? p.style(e, t, n) : p.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
      show: function () {
        return Jt(this, !0);
      },
      hide: function () {
        return Jt(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              $(this) ? p(this).show() : p(this).hide();
            });
      },
    });
  (p.Tween = Yt),
    (Yt.prototype = {
      constructor: Yt,
      init: function (e, t, n, r, i, s) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || "swing"),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = s || (p.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Yt.propHooks[this.prop];
        return e && e.get ? e.get(this) : Yt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Yt.propHooks[this.prop];
        return (
          (this.pos = t =
            this.options.duration
              ? p.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                )
              : e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Yt.propHooks._default.set(this),
          this
        );
      },
    }),
    (Yt.prototype.init.prototype = Yt.prototype),
    (Yt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return null == e.elem[e.prop] ||
            (e.elem.style && null != e.elem.style[e.prop])
            ? ((t = p.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0)
            : e.elem[e.prop];
        },
        set: function (e) {
          p.fx.step[e.prop]
            ? p.fx.step[e.prop](e)
            : e.elem.style &&
              (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop])
            ? p.style(e.elem, e.prop, e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    (Yt.propHooks.scrollTop = Yt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (p.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
    }),
    (p.fx = Yt.prototype.init),
    (p.fx.step = {});
  var Zt,
    en,
    tn = /^(?:toggle|show|hide)$/,
    nn = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
    rn = /queueHooks$/,
    sn = [ln],
    on = {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t),
            r = n.cur(),
            i = nn.exec(t),
            s = (i && i[3]) || (p.cssNumber[e] ? "" : "px"),
            o =
              (p.cssNumber[e] || ("px" !== s && +r)) &&
              nn.exec(p.css(n.elem, e)),
            u = 1,
            a = 20;
          if (o && o[3] !== s) {
            (s = s || o[3]), (i = i || []), (o = +r || 1);
            do (u = u || ".5"), (o /= u), p.style(n.elem, e, o + s);
            while (u !== (u = n.cur() / r) && 1 !== u && --a);
          }
          return (
            i &&
              ((o = n.start = +o || +r || 0),
              (n.unit = s),
              (n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2])),
            n
          );
        },
      ],
    };
  (p.Animation = p.extend(hn, {
    tweener: function (e, t) {
      p.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.split(" "));
      for (var n, r = 0, i = e.length; i > r; r++)
        (n = e[r]), (on[n] = on[n] || []), on[n].unshift(t);
    },
    prefilter: function (e, t) {
      t ? sn.unshift(e) : sn.push(e);
    },
  })),
    (p.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? p.extend({}, e)
          : {
              complete: n || (!n && t) || (p.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !p.isFunction(t) && t),
            };
      return (
        (r.duration = p.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in p.fx.speeds
          ? p.fx.speeds[r.duration]
          : p.fx.speeds._default),
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          p.isFunction(r.old) && r.old.call(this),
            r.queue && p.dequeue(this, r.queue);
        }),
        r
      );
    }),
    p.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter($)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = p.isEmptyObject(e),
          s = p.speed(t, n, r),
          o = function () {
            var t = hn(this, p.extend({}, e), s);
            (i || p._data(this, "finish")) && t.stop(!0);
          };
        return (
          (o.finish = o),
          i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        );
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && e !== !1 && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              s = p.timers,
              o = p._data(this);
            if (i) o[i] && o[i].stop && r(o[i]);
            else for (i in o) o[i] && o[i].stop && rn.test(i) && r(o[i]);
            for (i = s.length; i--; )
              s[i].elem !== this ||
                (null != e && s[i].queue !== e) ||
                (s[i].anim.stop(n), (t = !1), s.splice(i, 1));
            (t || !n) && p.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          e !== !1 && (e = e || "fx"),
          this.each(function () {
            var t,
              n = p._data(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              s = p.timers,
              o = r ? r.length : 0;
            for (
              n.finish = !0,
                p.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = s.length;
              t--;

            )
              s[t].elem === this &&
                s[t].queue === e &&
                (s[t].anim.stop(!0), s.splice(t, 1));
            for (t = 0; o > t; t++)
              r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    p.each(["toggle", "show", "hide"], function (e, t) {
      var n = p.fn[t];
      p.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e
          ? n.apply(this, arguments)
          : this.animate(an(t, !0), e, r, i);
      };
    }),
    p.each(
      {
        slideDown: an("show"),
        slideUp: an("hide"),
        slideToggle: an("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        p.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (p.timers = []),
    (p.fx.tick = function () {
      var e,
        t = p.timers,
        n = 0;
      for (Zt = p.now(); n < t.length; n++)
        (e = t[n]), e() || t[n] !== e || t.splice(n--, 1);
      t.length || p.fx.stop(), (Zt = void 0);
    }),
    (p.fx.timer = function (e) {
      p.timers.push(e), e() ? p.fx.start() : p.timers.pop();
    }),
    (p.fx.interval = 13),
    (p.fx.start = function () {
      en || (en = setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.stop = function () {
      clearInterval(en), (en = null);
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fn.delay = function (e, t) {
      return (
        (e = p.fx ? p.fx.speeds[e] || e : e),
        (t = t || "fx"),
        this.queue(t, function (t, n) {
          var r = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var e,
        t,
        n,
        r,
        i = N.createElement("div");
      i.setAttribute("className", "t"),
        (i.innerHTML =
          "  <link><table></table><a href='/a'>a</a><input type='checkbox'>"),
        (e = i.getElementsByTagName("a")[0]),
        (n = N.createElement("select")),
        (r = n.appendChild(N.createElement("option"))),
        (t = i.getElementsByTagName("input")[0]),
        (e.style.cssText = "top:1px"),
        (c.getSetAttribute = "t" !== i.className),
        (c.style = /top/.test(e.getAttribute("style"))),
        (c.hrefNormalized = "/a" === e.getAttribute("href")),
        (c.checkOn = !!t.value),
        (c.optSelected = r.selected),
        (c.enctype = !!N.createElement("form").enctype),
        (n.disabled = !0),
        (c.optDisabled = !r.disabled),
        (t = N.createElement("input")),
        t.setAttribute("value", ""),
        (c.input = "" === t.getAttribute("value")),
        (t.value = "t"),
        t.setAttribute("type", "radio"),
        (c.radioValue = "t" === t.value),
        (e = t = n = r = i = null);
    })();
  var pn = /\r/g;
  p.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      {
        if (arguments.length)
          return (
            (r = p.isFunction(e)),
            this.each(function (n) {
              var i;
              1 === this.nodeType &&
                ((i = r ? e.call(this, n, p(this).val()) : e),
                null == i
                  ? (i = "")
                  : "number" == typeof i
                  ? (i += "")
                  : p.isArray(i) &&
                    (i = p.map(i, function (e) {
                      return null == e ? "" : e + "";
                    })),
                (t =
                  p.valHooks[this.type] ||
                  p.valHooks[this.nodeName.toLowerCase()]),
                (t && "set" in t && void 0 !== t.set(this, i, "value")) ||
                  (this.value = i));
            })
          );
        if (i)
          return (
            (t = p.valHooks[i.type] || p.valHooks[i.nodeName.toLowerCase()]),
            t && "get" in t && void 0 !== (n = t.get(i, "value"))
              ? n
              : ((n = i.value),
                "string" == typeof n ? n.replace(pn, "") : null == n ? "" : n)
          );
      }
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = p.find.attr(e, "value");
            return null != t ? t : p.text(e);
          },
        },
        select: {
          get: function (e) {
            for (
              var t,
                n,
                r = e.options,
                i = e.selectedIndex,
                s = "select-one" === e.type || 0 > i,
                o = s ? null : [],
                u = s ? i + 1 : r.length,
                a = 0 > i ? u : s ? i : 0;
              u > a;
              a++
            )
              if (
                ((n = r[a]),
                !(
                  (!n.selected && a !== i) ||
                  (c.optDisabled
                    ? n.disabled
                    : null !== n.getAttribute("disabled")) ||
                  (n.parentNode.disabled &&
                    p.nodeName(n.parentNode, "optgroup"))
                ))
              ) {
                if (((t = p(n).val()), s)) return t;
                o.push(t);
              }
            return o;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              s = p.makeArray(t),
              o = i.length;
            while (o--)
              if (((r = i[o]), p.inArray(p.valHooks.option.get(r), s) >= 0))
                try {
                  r.selected = n = !0;
                } catch (u) {
                  r.scrollHeight;
                }
              else r.selected = !1;
            return n || (e.selectedIndex = -1), i;
          },
        },
      },
    }),
    p.each(["radio", "checkbox"], function () {
      (p.valHooks[this] = {
        set: function (e, t) {
          return p.isArray(t)
            ? (e.checked = p.inArray(p(e).val(), t) >= 0)
            : void 0;
        },
      }),
        c.checkOn ||
          (p.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var dn,
    vn,
    mn = p.expr.attrHandle,
    gn = /^(?:checked|selected)$/i,
    yn = c.getSetAttribute,
    bn = c.input;
  p.fn.extend({
    attr: function (e, t) {
      return J(this, p.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        p.removeAttr(this, e);
      });
    },
  }),
    p.extend({
      attr: function (e, t, n) {
        var r,
          i,
          s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)
          return typeof e.getAttribute === j
            ? p.prop(e, t, n)
            : ((1 === s && p.isXMLDoc(e)) ||
                ((t = t.toLowerCase()),
                (r = p.attrHooks[t] || (p.expr.match.bool.test(t) ? vn : dn))),
              void 0 === n
                ? r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : ((i = p.find.attr(e, t)), null == i ? void 0 : i)
                : null !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e.setAttribute(t, n + ""), n)
                : void p.removeAttr(e, t));
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i = 0,
          s = t && t.match(M);
        if (s && 1 === e.nodeType)
          while ((n = s[i++]))
            (r = p.propFix[n] || n),
              p.expr.match.bool.test(n)
                ? (bn && yn) || !gn.test(n)
                  ? (e[r] = !1)
                  : (e[p.camelCase("default-" + n)] = e[r] = !1)
                : p.attr(e, n, ""),
              e.removeAttribute(yn ? n : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!c.radioValue && "radio" === t && p.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
    }),
    (vn = {
      set: function (e, t, n) {
        return (
          t === !1
            ? p.removeAttr(e, n)
            : (bn && yn) || !gn.test(n)
            ? e.setAttribute((!yn && p.propFix[n]) || n, n)
            : (e[p.camelCase("default-" + n)] = e[n] = !0),
          n
        );
      },
    }),
    p.each(p.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = mn[t] || p.find.attr;
      mn[t] =
        (bn && yn) || !gn.test(t)
          ? function (e, t, r) {
              var i, s;
              return (
                r ||
                  ((s = mn[t]),
                  (mn[t] = i),
                  (i = null != n(e, t, r) ? t.toLowerCase() : null),
                  (mn[t] = s)),
                i
              );
            }
          : function (e, t, n) {
              return n
                ? void 0
                : e[p.camelCase("default-" + t)]
                ? t.toLowerCase()
                : null;
            };
    }),
    (bn && yn) ||
      (p.attrHooks.value = {
        set: function (e, t, n) {
          return p.nodeName(e, "input")
            ? void (e.defaultValue = t)
            : dn && dn.set(e, t, n);
        },
      }),
    yn ||
      ((dn = {
        set: function (e, t, n) {
          var r = e.getAttributeNode(n);
          return (
            r || e.setAttributeNode((r = e.ownerDocument.createAttribute(n))),
            (r.value = t += ""),
            "value" === n || t === e.getAttribute(n) ? t : void 0
          );
        },
      }),
      (mn.id =
        mn.name =
        mn.coords =
          function (e, t, n) {
            var r;
            return n
              ? void 0
              : (r = e.getAttributeNode(t)) && "" !== r.value
              ? r.value
              : null;
          }),
      (p.valHooks.button = {
        get: function (e, t) {
          var n = e.getAttributeNode(t);
          return n && n.specified ? n.value : void 0;
        },
        set: dn.set,
      }),
      (p.attrHooks.contenteditable = {
        set: function (e, t, n) {
          dn.set(e, "" === t ? !1 : t, n);
        },
      }),
      p.each(["width", "height"], function (e, t) {
        p.attrHooks[t] = {
          set: function (e, n) {
            return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
          },
        };
      })),
    c.style ||
      (p.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || void 0;
        },
        set: function (e, t) {
          return (e.style.cssText = t + "");
        },
      });
  var wn = /^(?:input|select|textarea|button|object)$/i,
    En = /^(?:a|area)$/i;
  p.fn.extend({
    prop: function (e, t) {
      return J(this, p.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return (
        (e = p.propFix[e] || e),
        this.each(function () {
          try {
            (this[e] = void 0), delete this[e];
          } catch (t) {}
        })
      );
    },
  }),
    p.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (e, t, n) {
        var r,
          i,
          s,
          o = e.nodeType;
        if (e && 3 !== o && 8 !== o && 2 !== o)
          return (
            (s = 1 !== o || !p.isXMLDoc(e)),
            s && ((t = p.propFix[t] || t), (i = p.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = p.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : wn.test(e.nodeName) || (En.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
    }),
    c.hrefNormalized ||
      p.each(["href", "src"], function (e, t) {
        p.propHooks[t] = {
          get: function (e) {
            return e.getAttribute(t, 4);
          },
        };
      }),
    c.optSelected ||
      (p.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return (
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
          );
        },
      }),
    p.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        p.propFix[this.toLowerCase()] = this;
      }
    ),
    c.enctype || (p.propFix.enctype = "encoding");
  var Sn = /[\t\r\n\f]/g;
  p.fn.extend({
    addClass: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o,
        u = 0,
        a = this.length,
        f = "string" == typeof e && e;
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).addClass(e.call(this, t, this.className));
        });
      if (f)
        for (t = (e || "").match(M) || []; a > u; u++)
          if (
            ((n = this[u]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(Sn, " ") : " ")))
          ) {
            s = 0;
            while ((i = t[s++])) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
            (o = p.trim(r)), n.className !== o && (n.className = o);
          }
      return this;
    },
    removeClass: function (e) {
      var t,
        n,
        r,
        i,
        s,
        o,
        u = 0,
        a = this.length,
        f = 0 === arguments.length || ("string" == typeof e && e);
      if (p.isFunction(e))
        return this.each(function (t) {
          p(this).removeClass(e.call(this, t, this.className));
        });
      if (f)
        for (t = (e || "").match(M) || []; a > u; u++)
          if (
            ((n = this[u]),
            (r =
              1 === n.nodeType &&
              (n.className ? (" " + n.className + " ").replace(Sn, " ") : "")))
          ) {
            s = 0;
            while ((i = t[s++]))
              while (r.indexOf(" " + i + " ") >= 0)
                r = r.replace(" " + i + " ", " ");
            (o = e ? p.trim(r) : ""), n.className !== o && (n.className = o);
          }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e;
      return "boolean" == typeof t && "string" === n
        ? t
          ? this.addClass(e)
          : this.removeClass(e)
        : this.each(
            p.isFunction(e)
              ? function (n) {
                  p(this).toggleClass(e.call(this, n, this.className, t), t);
                }
              : function () {
                  if ("string" === n) {
                    var t,
                      r = 0,
                      i = p(this),
                      s = e.match(M) || [];
                    while ((t = s[r++]))
                      i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                  } else
                    (n === j || "boolean" === n) &&
                      (this.className &&
                        p._data(this, "__className__", this.className),
                      (this.className =
                        this.className || e === !1
                          ? ""
                          : p._data(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
        if (
          1 === this[n].nodeType &&
          (" " + this[n].className + " ").replace(Sn, " ").indexOf(t) >= 0
        )
          return !0;
      return !1;
    },
  }),
    p.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        p.fn[t] = function (e, n) {
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        };
      }
    ),
    p.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
    });
  var xn = p.now(),
    Tn = /\?/,
    Nn =
      /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  (p.parseJSON = function (t) {
    if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
    var n,
      r = null,
      i = p.trim(t + "");
    return i &&
      !p.trim(
        i.replace(Nn, function (e, t, i, s) {
          return (
            n && t && (r = 0), 0 === r ? e : ((n = i || t), (r += !s - !i), "")
          );
        })
      )
      ? Function("return " + i)()
      : p.error("Invalid JSON: " + t);
  }),
    (p.parseXML = function (t) {
      var n, r;
      if (!t || "string" != typeof t) return null;
      try {
        e.DOMParser
          ? ((r = new DOMParser()), (n = r.parseFromString(t, "text/xml")))
          : ((n = new ActiveXObject("Microsoft.XMLDOM")),
            (n.async = "false"),
            n.loadXML(t));
      } catch (i) {
        n = void 0;
      }
      return (
        (n &&
          n.documentElement &&
          !n.getElementsByTagName("parsererror").length) ||
          p.error("Invalid XML: " + t),
        n
      );
    });
  var Cn,
    kn,
    Ln = /#.*$/,
    An = /([?&])_=[^&]*/,
    On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    _n = /^(?:GET|HEAD)$/,
    Dn = /^\/\//,
    Pn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Hn = {},
    Bn = {},
    jn = "*/".concat("*");
  try {
    kn = location.href;
  } catch (Fn) {
    (kn = N.createElement("a")), (kn.href = ""), (kn = kn.href);
  }
  Cn = Pn.exec(kn.toLowerCase()) || [];
  p.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: kn,
      type: "GET",
      isLocal: Mn.test(Cn[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": jn,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript",
      },
      contents: { xml: /xml/, html: /html/, json: /json/ },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON",
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML,
      },
      flatOptions: { url: !0, context: !0 },
    },
    ajaxSetup: function (e, t) {
      return t ? Rn(Rn(e, p.ajaxSettings), t) : Rn(p.ajaxSettings, e);
    },
    ajaxPrefilter: In(Hn),
    ajaxTransport: In(Bn),
    ajax: function (e, t) {
      function x(e, t, n, r) {
        var f,
          g,
          y,
          w,
          S,
          x = t;
        2 !== b &&
          ((b = 2),
          o && clearTimeout(o),
          (a = void 0),
          (s = r || ""),
          (E.readyState = e > 0 ? 4 : 0),
          (f = (e >= 200 && 300 > e) || 304 === e),
          n && (w = Un(l, E, n)),
          (w = zn(l, w, E, f)),
          f
            ? (l.ifModified &&
                ((S = E.getResponseHeader("Last-Modified")),
                S && (p.lastModified[i] = S),
                (S = E.getResponseHeader("etag")),
                S && (p.etag[i] = S)),
              204 === e || "HEAD" === l.type
                ? (x = "nocontent")
                : 304 === e
                ? (x = "notmodified")
                : ((x = w.state), (g = w.data), (y = w.error), (f = !y)))
            : ((y = x), (e || !x) && ((x = "error"), 0 > e && (e = 0))),
          (E.status = e),
          (E.statusText = (t || x) + ""),
          f ? d.resolveWith(c, [g, x, E]) : d.rejectWith(c, [E, x, y]),
          E.statusCode(m),
          (m = void 0),
          u && h.trigger(f ? "ajaxSuccess" : "ajaxError", [E, l, f ? g : y]),
          v.fireWith(c, [E, x]),
          u &&
            (h.trigger("ajaxComplete", [E, l]),
            --p.active || p.event.trigger("ajaxStop")));
      }
      "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
      var n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l = p.ajaxSetup({}, t),
        c = l.context || l,
        h = l.context && (c.nodeType || c.jquery) ? p(c) : p.event,
        d = p.Deferred(),
        v = p.Callbacks("once memory"),
        m = l.statusCode || {},
        g = {},
        y = {},
        b = 0,
        w = "canceled",
        E = {
          readyState: 0,
          getResponseHeader: function (e) {
            var t;
            if (2 === b) {
              if (!f) {
                f = {};
                while ((t = On.exec(s))) f[t[1].toLowerCase()] = t[2];
              }
              t = f[e.toLowerCase()];
            }
            return null == t ? null : t;
          },
          getAllResponseHeaders: function () {
            return 2 === b ? s : null;
          },
          setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || ((e = y[n] = y[n] || e), (g[e] = t)), this;
          },
          overrideMimeType: function (e) {
            return b || (l.mimeType = e), this;
          },
          statusCode: function (e) {
            var t;
            if (e)
              if (2 > b) for (t in e) m[t] = [m[t], e[t]];
              else E.always(e[E.status]);
            return this;
          },
          abort: function (e) {
            var t = e || w;
            return a && a.abort(t), x(0, t), this;
          },
        };
      if (
        ((d.promise(E).complete = v.add),
        (E.success = E.done),
        (E.error = E.fail),
        (l.url = ((e || l.url || kn) + "")
          .replace(Ln, "")
          .replace(Dn, Cn[1] + "//")),
        (l.type = t.method || t.type || l.method || l.type),
        (l.dataTypes = p
          .trim(l.dataType || "*")
          .toLowerCase()
          .match(M) || [""]),
        null == l.crossDomain &&
          ((n = Pn.exec(l.url.toLowerCase())),
          (l.crossDomain = !(
            !n ||
            (n[1] === Cn[1] &&
              n[2] === Cn[2] &&
              (n[3] || ("http:" === n[1] ? "80" : "443")) ===
                (Cn[3] || ("http:" === Cn[1] ? "80" : "443")))
          ))),
        l.data &&
          l.processData &&
          "string" != typeof l.data &&
          (l.data = p.param(l.data, l.traditional)),
        qn(Hn, l, t, E),
        2 === b)
      )
        return E;
      (u = l.global),
        u && 0 === p.active++ && p.event.trigger("ajaxStart"),
        (l.type = l.type.toUpperCase()),
        (l.hasContent = !_n.test(l.type)),
        (i = l.url),
        l.hasContent ||
          (l.data &&
            ((i = l.url += (Tn.test(i) ? "&" : "?") + l.data), delete l.data),
          l.cache === !1 &&
            (l.url = An.test(i)
              ? i.replace(An, "$1_=" + xn++)
              : i + (Tn.test(i) ? "&" : "?") + "_=" + xn++)),
        l.ifModified &&
          (p.lastModified[i] &&
            E.setRequestHeader("If-Modified-Since", p.lastModified[i]),
          p.etag[i] && E.setRequestHeader("If-None-Match", p.etag[i])),
        ((l.data && l.hasContent && l.contentType !== !1) || t.contentType) &&
          E.setRequestHeader("Content-Type", l.contentType),
        E.setRequestHeader(
          "Accept",
          l.dataTypes[0] && l.accepts[l.dataTypes[0]]
            ? l.accepts[l.dataTypes[0]] +
                ("*" !== l.dataTypes[0] ? ", " + jn + "; q=0.01" : "")
            : l.accepts["*"]
        );
      for (r in l.headers) E.setRequestHeader(r, l.headers[r]);
      if (l.beforeSend && (l.beforeSend.call(c, E, l) === !1 || 2 === b))
        return E.abort();
      w = "abort";
      for (r in { success: 1, error: 1, complete: 1 }) E[r](l[r]);
      if ((a = qn(Bn, l, t, E))) {
        (E.readyState = 1),
          u && h.trigger("ajaxSend", [E, l]),
          l.async &&
            l.timeout > 0 &&
            (o = setTimeout(function () {
              E.abort("timeout");
            }, l.timeout));
        try {
          (b = 1), a.send(g, x);
        } catch (S) {
          if (!(2 > b)) throw S;
          x(-1, S);
        }
      } else x(-1, "No Transport");
      return E;
    },
    getJSON: function (e, t, n) {
      return p.get(e, t, n, "json");
    },
    getScript: function (e, t) {
      return p.get(e, void 0, t, "script");
    },
  }),
    p.each(["get", "post"], function (e, t) {
      p[t] = function (e, n, r, i) {
        return (
          p.isFunction(n) && ((i = i || r), (r = n), (n = void 0)),
          p.ajax({ url: e, type: t, dataType: i, data: n, success: r })
        );
      };
    }),
    p.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        p.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    (p._evalUrl = function (e) {
      return p.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    p.fn.extend({
      wrapAll: function (e) {
        if (p.isFunction(e))
          return this.each(function (t) {
            p(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = p(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstChild && 1 === e.firstChild.nodeType)
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        return this.each(
          p.isFunction(e)
            ? function (t) {
                p(this).wrapInner(e.call(this, t));
              }
            : function () {
                var t = p(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              }
        );
      },
      wrap: function (e) {
        var t = p.isFunction(e);
        return this.each(function (n) {
          p(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (p.expr.filters.hidden = function (e) {
      return (
        (e.offsetWidth <= 0 && e.offsetHeight <= 0) ||
        (!c.reliableHiddenOffsets() &&
          "none" === ((e.style && e.style.display) || p.css(e, "display")))
      );
    }),
    (p.expr.filters.visible = function (e) {
      return !p.expr.filters.hidden(e);
    });
  var Wn = /%20/g,
    Xn = /\[\]$/,
    Vn = /\r?\n/g,
    $n = /^(?:submit|button|image|reset|file)$/i,
    Jn = /^(?:input|select|textarea|keygen)/i;
  (p.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        (t = p.isFunction(t) ? t() : null == t ? "" : t),
          (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t));
      };
    if (
      (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional),
      p.isArray(e) || (e.jquery && !p.isPlainObject(e)))
    )
      p.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Kn(n, e[n], t, i);
    return r.join("&").replace(Wn, "+");
  }),
    p.fn.extend({
      serialize: function () {
        return p.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = p.prop(this, "elements");
          return e ? p.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !p(this).is(":disabled") &&
              Jn.test(this.nodeName) &&
              !$n.test(e) &&
              (this.checked || !K.test(e))
            );
          })
          .map(function (e, t) {
            var n = p(this).val();
            return null == n
              ? null
              : p.isArray(n)
              ? p.map(n, function (e) {
                  return { name: t.name, value: e.replace(Vn, "\r\n") };
                })
              : { name: t.name, value: n.replace(Vn, "\r\n") };
          })
          .get();
      },
    }),
    (p.ajaxSettings.xhr =
      void 0 !== e.ActiveXObject
        ? function () {
            return (
              (!this.isLocal &&
                /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                Zn()) ||
              er()
            );
          }
        : Zn);
  var Qn = 0,
    Gn = {},
    Yn = p.ajaxSettings.xhr();
  e.ActiveXObject &&
    p(e).on("unload", function () {
      for (var e in Gn) Gn[e](void 0, !0);
    }),
    (c.cors = !!Yn && "withCredentials" in Yn),
    (Yn = c.ajax = !!Yn),
    Yn &&
      p.ajaxTransport(function (e) {
        if (!e.crossDomain || c.cors) {
          var t;
          return {
            send: function (n, r) {
              var i,
                s = e.xhr(),
                o = ++Qn;
              if (
                (s.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (i in e.xhrFields) s[i] = e.xhrFields[i];
              e.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  n["X-Requested-With"] ||
                  (n["X-Requested-With"] = "XMLHttpRequest");
              for (i in n) void 0 !== n[i] && s.setRequestHeader(i, n[i] + "");
              s.send((e.hasContent && e.data) || null),
                (t = function (n, i) {
                  var u, a, f;
                  if (t && (i || 4 === s.readyState))
                    if (
                      (delete Gn[o],
                      (t = void 0),
                      (s.onreadystatechange = p.noop),
                      i)
                    )
                      4 !== s.readyState && s.abort();
                    else {
                      (f = {}),
                        (u = s.status),
                        "string" == typeof s.responseText &&
                          (f.text = s.responseText);
                      try {
                        a = s.statusText;
                      } catch (l) {
                        a = "";
                      }
                      u || !e.isLocal || e.crossDomain
                        ? 1223 === u && (u = 204)
                        : (u = f.text ? 200 : 404);
                    }
                  f && r(u, a, f, s.getAllResponseHeaders());
                }),
                e.async
                  ? 4 === s.readyState
                    ? setTimeout(t)
                    : (s.onreadystatechange = Gn[o] = t)
                  : t();
            },
            abort: function () {
              t && t(void 0, !0);
            },
          };
        }
      });
  p.ajaxSetup({
    accepts: {
      script:
        "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
    },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      "text script": function (e) {
        return p.globalEval(e), e;
      },
    },
  }),
    p.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    p.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var t,
          n = N.head || p("head")[0] || N.documentElement;
        return {
          send: function (r, i) {
            (t = N.createElement("script")),
              (t.async = !0),
              e.scriptCharset && (t.charset = e.scriptCharset),
              (t.src = e.url),
              (t.onload = t.onreadystatechange =
                function (e, n) {
                  (n ||
                    !t.readyState ||
                    /loaded|complete/.test(t.readyState)) &&
                    ((t.onload = t.onreadystatechange = null),
                    t.parentNode && t.parentNode.removeChild(t),
                    (t = null),
                    n || i(200, "success"));
                }),
              n.insertBefore(t, n.firstChild);
          },
          abort: function () {
            t && t.onload(void 0, !0);
          },
        };
      }
    });
  var tr = [],
    nr = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = tr.pop() || p.expando + "_" + xn++;
      return (this[e] = !0), e;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        s,
        o,
        u =
          t.jsonp !== !1 &&
          (nr.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              !(t.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              nr.test(t.data) &&
              "data");
      return u || "jsonp" === t.dataTypes[0]
        ? ((i = t.jsonpCallback =
            p.isFunction(t.jsonpCallback)
              ? t.jsonpCallback()
              : t.jsonpCallback),
          u
            ? (t[u] = t[u].replace(nr, "$1" + i))
            : t.jsonp !== !1 &&
              (t.url += (Tn.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return o || p.error(i + " was not called"), o[0];
          }),
          (t.dataTypes[0] = "json"),
          (s = e[i]),
          (e[i] = function () {
            o = arguments;
          }),
          r.always(function () {
            (e[i] = s),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), tr.push(i)),
              o && p.isFunction(s) && s(o[0]),
              (o = s = void 0);
          }),
          "script")
        : void 0;
    }),
    (p.parseHTML = function (e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && ((n = t), (t = !1)), (t = t || N);
      var r = E.exec(e),
        i = !n && [];
      return r
        ? [t.createElement(r[1])]
        : ((r = p.buildFragment([e], t, i)),
          i && i.length && p(i).remove(),
          p.merge([], r.childNodes));
    });
  var rr = p.fn.load;
  (p.fn.load = function (e, t, n) {
    if ("string" != typeof e && rr) return rr.apply(this, arguments);
    var r,
      i,
      s,
      o = this,
      u = e.indexOf(" ");
    return (
      u >= 0 && ((r = e.slice(u, e.length)), (e = e.slice(0, u))),
      p.isFunction(t)
        ? ((n = t), (t = void 0))
        : t && "object" == typeof t && (s = "POST"),
      o.length > 0 &&
        p
          .ajax({ url: e, type: s, dataType: "html", data: t })
          .done(function (e) {
            (i = arguments),
              o.html(r ? p("<div>").append(p.parseHTML(e)).find(r) : e);
          })
          .complete(
            n &&
              function (e, t) {
                o.each(n, i || [e.responseText, t, e]);
              }
          ),
      this
    );
  }),
    (p.expr.filters.animated = function (e) {
      return p.grep(p.timers, function (t) {
        return e === t.elem;
      }).length;
    });
  var ir = e.document.documentElement;
  (p.offset = {
    setOffset: function (e, t, n) {
      var r,
        i,
        s,
        o,
        u,
        a,
        f,
        l = p.css(e, "position"),
        c = p(e),
        h = {};
      "static" === l && (e.style.position = "relative"),
        (u = c.offset()),
        (s = p.css(e, "top")),
        (a = p.css(e, "left")),
        (f =
          ("absolute" === l || "fixed" === l) &&
          p.inArray("auto", [s, a]) > -1),
        f
          ? ((r = c.position()), (o = r.top), (i = r.left))
          : ((o = parseFloat(s) || 0), (i = parseFloat(a) || 0)),
        p.isFunction(t) && (t = t.call(e, n, u)),
        null != t.top && (h.top = t.top - u.top + o),
        null != t.left && (h.left = t.left - u.left + i),
        "using" in t ? t.using.call(e, h) : c.css(h);
    },
  }),
    p.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                p.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = { top: 0, left: 0 },
          i = this[0],
          s = i && i.ownerDocument;
        if (s)
          return (
            (t = s.documentElement),
            p.contains(t, i)
              ? (typeof i.getBoundingClientRect !== j &&
                  (r = i.getBoundingClientRect()),
                (n = sr(s)),
                {
                  top:
                    r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                  left:
                    r.left +
                    (n.pageXOffset || t.scrollLeft) -
                    (t.clientLeft || 0),
                })
              : r
          );
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];
          return (
            "fixed" === p.css(r, "position")
              ? (t = r.getBoundingClientRect())
              : ((e = this.offsetParent()),
                (t = this.offset()),
                p.nodeName(e[0], "html") || (n = e.offset()),
                (n.top += p.css(e[0], "borderTopWidth", !0)),
                (n.left += p.css(e[0], "borderLeftWidth", !0))),
            {
              top: t.top - n.top - p.css(r, "marginTop", !0),
              left: t.left - n.left - p.css(r, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent || ir;
          while (
            e &&
            !p.nodeName(e, "html") &&
            "static" === p.css(e, "position")
          )
            e = e.offsetParent;
          return e || ir;
        });
      },
    }),
    p.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var n = /Y/.test(t);
        p.fn[e] = function (r) {
          return J(
            this,
            function (e, r, i) {
              var s = sr(e);
              return void 0 === i
                ? s
                  ? t in s
                    ? s[t]
                    : s.document.documentElement[r]
                  : e[r]
                : void (s
                    ? s.scrollTo(
                        n ? p(s).scrollLeft() : i,
                        n ? i : p(s).scrollTop()
                      )
                    : (e[r] = i));
            },
            e,
            r,
            arguments.length,
            null
          );
        };
      }
    ),
    p.each(["top", "left"], function (e, t) {
      p.cssHooks[t] = Ft(c.pixelPosition, function (e, n) {
        return n
          ? ((n = Bt(e, t)), Pt.test(n) ? p(e).position()[t] + "px" : n)
          : void 0;
      });
    }),
    p.each({ Height: "height", Width: "width" }, function (e, t) {
      p.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (n, r) {
          p.fn[r] = function (r, i) {
            var s = arguments.length && (n || "boolean" != typeof r),
              o = n || (r === !0 || i === !0 ? "margin" : "border");
            return J(
              this,
              function (t, n, r) {
                var i;
                return p.isWindow(t)
                  ? t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((i = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      i["scroll" + e],
                      t.body["offset" + e],
                      i["offset" + e],
                      i["client" + e]
                    ))
                  : void 0 === r
                  ? p.css(t, n, o)
                  : p.style(t, n, r, o);
              },
              t,
              s ? r : void 0,
              s,
              null
            );
          };
        }
      );
    }),
    (p.fn.size = function () {
      return this.length;
    }),
    (p.fn.andSelf = p.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return p;
      });
  var or = e.jQuery,
    ur = e.$;
  return (
    (p.noConflict = function (t) {
      return e.$ === p && (e.$ = ur), t && e.jQuery === p && (e.jQuery = or), p;
    }),
    typeof t === j && (e.jQuery = e.$ = p),
    p
  );
});
if ("undefined" == typeof jQuery)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (e) {
  "use strict";
  function t() {
    var e = document.createElement("bootstrap"),
      t = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend",
      };
    for (var n in t) if (void 0 !== e.style[n]) return { end: t[n] };
    return !1;
  }
  (e.fn.emulateTransitionEnd = function (t) {
    var n = !1,
      r = this;
    e(this).one(e.support.transition.end, function () {
      n = !0;
    });
    var i = function () {
      n || e(r).trigger(e.support.transition.end);
    };
    return setTimeout(i, t), this;
  }),
    e(function () {
      e.support.transition = t();
    });
})(jQuery),
  +(function (e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
      n = function (n) {
        e(n).on("click", t, this.close);
      };
    n.prototype.close = function (t) {
      function n() {
        s.trigger("closed.bs.alert").remove();
      }
      var r = e(this),
        i = r.attr("data-target");
      i || ((i = r.attr("href")), (i = i && i.replace(/.*(?=#[^\s]*$)/, "")));
      var s = e(i);
      t && t.preventDefault(),
        s.length || (s = r.hasClass("alert") ? r : r.parent()),
        s.trigger((t = e.Event("close.bs.alert"))),
        t.isDefaultPrevented() ||
          (s.removeClass("in"),
          e.support.transition && s.hasClass("fade")
            ? s.one(e.support.transition.end, n).emulateTransitionEnd(150)
            : n());
    };
    var r = e.fn.alert;
    (e.fn.alert = function (t) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.alert");
        i || r.data("bs.alert", (i = new n(this))),
          "string" == typeof t && i[t].call(r);
      });
    }),
      (e.fn.alert.Constructor = n),
      (e.fn.alert.noConflict = function () {
        return (e.fn.alert = r), this;
      }),
      e(document).on("click.bs.alert.data-api", t, n.prototype.close);
  })(jQuery),
  +(function (e) {
    "use strict";
    var t = function (n, r) {
      (this.$element = e(n)),
        (this.options = e.extend({}, t.DEFAULTS, r)),
        (this.isLoading = !1);
    };
    (t.DEFAULTS = { loadingText: "loading..." }),
      (t.prototype.setState = function (t) {
        var n = "disabled",
          r = this.$element,
          i = r.is("input") ? "val" : "html",
          s = r.data();
        (t += "Text"),
          s.resetText || r.data("resetText", r[i]()),
          r[i](s[t] || this.options[t]),
          setTimeout(
            e.proxy(function () {
              "loadingText" == t
                ? ((this.isLoading = !0), r.addClass(n).attr(n, n))
                : this.isLoading &&
                  ((this.isLoading = !1), r.removeClass(n).removeAttr(n));
            }, this),
            0
          );
      }),
      (t.prototype.toggle = function () {
        var e = !0,
          t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
          var n = this.$element.find("input");
          "radio" == n.prop("type") &&
            (n.prop("checked") && this.$element.hasClass("active")
              ? (e = !1)
              : t.find(".active").removeClass("active")),
            e &&
              n
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        }
        e && this.$element.toggleClass("active");
      });
    var n = e.fn.button;
    (e.fn.button = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.button"),
          s = "object" == typeof n && n;
        i || r.data("bs.button", (i = new t(this, s))),
          "toggle" == n ? i.toggle() : n && i.setState(n);
      });
    }),
      (e.fn.button.Constructor = t),
      (e.fn.button.noConflict = function () {
        return (e.fn.button = n), this;
      }),
      e(document).on(
        "click.bs.button.data-api",
        "[data-toggle^=button]",
        function (t) {
          var n = e(t.target);
          n.hasClass("btn") || (n = n.closest(".btn")),
            n.button("toggle"),
            t.preventDefault();
        }
      );
  })(jQuery),
  +(function (e) {
    "use strict";
    var t = function (t, n) {
      (this.$element = e(t)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = n),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        "hover" == this.options.pause &&
          this.$element
            .on("mouseenter", e.proxy(this.pause, this))
            .on("mouseleave", e.proxy(this.cycle, this));
    };
    (t.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0 }),
      (t.prototype.cycle = function (t) {
        return (
          t || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              e.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (t.prototype.getActiveIndex = function () {
        return (
          (this.$active = this.$element.find(".item.active")),
          (this.$items = this.$active.parent().children()),
          this.$items.index(this.$active)
        );
      }),
      (t.prototype.to = function (t) {
        var n = this,
          r = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              n.to(t);
            })
          : r == t
          ? this.pause().cycle()
          : this.slide(t > r ? "next" : "prev", e(this.$items[t]));
      }),
      (t.prototype.pause = function (t) {
        return (
          t || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            e.support.transition &&
            (this.$element.trigger(e.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (t.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (t.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (t.prototype.slide = function (t, n) {
        var r = this.$element.find(".item.active"),
          i = n || r[t](),
          s = this.interval,
          o = "next" == t ? "left" : "right",
          u = "next" == t ? "first" : "last",
          f = this;
        if (!i.length) {
          if (!this.options.wrap) return;
          i = this.$element.find(".item")[u]();
        }
        if (i.hasClass("active")) return (this.sliding = !1);
        var l = e.Event("slide.bs.carousel", {
          relatedTarget: i[0],
          direction: o,
        });
        return (
          this.$element.trigger(l),
          l.isDefaultPrevented()
            ? void 0
            : ((this.sliding = !0),
              s && this.pause(),
              this.$indicators.length &&
                (this.$indicators.find(".active").removeClass("active"),
                this.$element.one("slid.bs.carousel", function () {
                  var t = e(f.$indicators.children()[f.getActiveIndex()]);
                  t && t.addClass("active");
                })),
              e.support.transition && this.$element.hasClass("slide")
                ? (i.addClass(t),
                  i[0].offsetWidth,
                  r.addClass(o),
                  i.addClass(o),
                  r
                    .one(e.support.transition.end, function () {
                      i.removeClass([t, o].join(" ")).addClass("active"),
                        r.removeClass(["active", o].join(" ")),
                        (f.sliding = !1),
                        setTimeout(function () {
                          f.$element.trigger("slid.bs.carousel");
                        }, 0);
                    })
                    .emulateTransitionEnd(
                      1e3 * r.css("transition-duration").slice(0, -1)
                    ))
                : (r.removeClass("active"),
                  i.addClass("active"),
                  (this.sliding = !1),
                  this.$element.trigger("slid.bs.carousel")),
              s && this.cycle(),
              this)
        );
      });
    var n = e.fn.carousel;
    (e.fn.carousel = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.carousel"),
          s = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n),
          o = "string" == typeof n ? n : s.slide;
        i || r.data("bs.carousel", (i = new t(this, s))),
          "number" == typeof n
            ? i.to(n)
            : o
            ? i[o]()
            : s.interval && i.pause().cycle();
      });
    }),
      (e.fn.carousel.Constructor = t),
      (e.fn.carousel.noConflict = function () {
        return (e.fn.carousel = n), this;
      }),
      e(document).on(
        "click.bs.carousel.data-api",
        "[data-slide], [data-slide-to]",
        function (t) {
          var n,
            r = e(this),
            i = e(
              r.attr("data-target") ||
                ((n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = e.extend({}, i.data(), r.data()),
            o = r.attr("data-slide-to");
          o && (s.interval = !1),
            i.carousel(s),
            (o = r.attr("data-slide-to")) && i.data("bs.carousel").to(o),
            t.preventDefault();
        }
      ),
      e(window).on("load", function () {
        e('[data-ride="carousel"]').each(function () {
          var t = e(this);
          t.carousel(t.data());
        });
      });
  })(jQuery),
  +(function (e) {
    "use strict";
    var t = function (n, r) {
      (this.$element = e(n)),
        (this.options = e.extend({}, t.DEFAULTS, r)),
        (this.transitioning = null),
        this.options.parent && (this.$parent = e(this.options.parent)),
        this.options.toggle && this.toggle();
    };
    (t.DEFAULTS = { toggle: !0 }),
      (t.prototype.dimension = function () {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height";
      }),
      (t.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var t = e.Event("show.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.$parent && this.$parent.find("> .panel > .in");
            if (n && n.length) {
              var r = n.data("bs.collapse");
              if (r && r.transitioning) return;
              n.collapse("hide"), r || n.data("bs.collapse", null);
            }
            var i = this.dimension();
            this.$element.removeClass("collapse").addClass("collapsing")[i](0),
              (this.transitioning = 1);
            var s = function () {
              this.$element
                .removeClass("collapsing")
                .addClass("collapse in")
                [i]("auto"),
                (this.transitioning = 0),
                this.$element.trigger("shown.bs.collapse");
            };
            if (!e.support.transition) return s.call(this);
            var o = e.camelCase(["scroll", i].join("-"));
            this.$element
              .one(e.support.transition.end, e.proxy(s, this))
              .emulateTransitionEnd(350)
              [i](this.$element[0][o]);
          }
        }
      }),
      (t.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var t = e.Event("hide.bs.collapse");
          if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
            var n = this.dimension();
            this.$element[n](this.$element[n]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse")
                .removeClass("in"),
              (this.transitioning = 1);
            var r = function () {
              (this.transitioning = 0),
                this.$element
                  .trigger("hidden.bs.collapse")
                  .removeClass("collapsing")
                  .addClass("collapse");
            };
            return e.support.transition
              ? void this.$element[n](0)
                  .one(e.support.transition.end, e.proxy(r, this))
                  .emulateTransitionEnd(350)
              : r.call(this);
          }
        }
      }),
      (t.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      });
    var n = e.fn.collapse;
    (e.fn.collapse = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.collapse"),
          s = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
        !i && s.toggle && "show" == n && (n = !n),
          i || r.data("bs.collapse", (i = new t(this, s))),
          "string" == typeof n && i[n]();
      });
    }),
      (e.fn.collapse.Constructor = t),
      (e.fn.collapse.noConflict = function () {
        return (e.fn.collapse = n), this;
      }),
      e(document).on(
        "click.bs.collapse.data-api",
        "[data-toggle=collapse]",
        function (t) {
          var n,
            r = e(this),
            i =
              r.attr("data-target") ||
              t.preventDefault() ||
              ((n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            s = e(i),
            o = s.data("bs.collapse"),
            u = o ? "toggle" : r.data(),
            f = r.attr("data-parent"),
            l = f && e(f);
          (o && o.transitioning) ||
            (l &&
              l
                .find('[data-toggle=collapse][data-parent="' + f + '"]')
                .not(r)
                .addClass("collapsed"),
            r[s.hasClass("in") ? "addClass" : "removeClass"]("collapsed")),
            s.collapse(u);
        }
      );
  })(jQuery),
  +(function (e) {
    "use strict";
    function t(t) {
      e(r).remove(),
        e(i).each(function () {
          var r = n(e(this)),
            i = { relatedTarget: this };
          r.hasClass("open") &&
            (r.trigger((t = e.Event("hide.bs.dropdown", i))),
            t.isDefaultPrevented() ||
              r.removeClass("open").trigger("hidden.bs.dropdown", i));
        });
    }
    function n(t) {
      var n = t.attr("data-target");
      n ||
        ((n = t.attr("href")),
        (n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, "")));
      var r = n && e(n);
      return r && r.length ? r : t.parent();
    }
    var r = ".dropdown-backdrop",
      i = "[data-toggle=dropdown]",
      s = function (t) {
        e(t).on("click.bs.dropdown", this.toggle);
      };
    (s.prototype.toggle = function (r) {
      var i = e(this);
      if (!i.is(".disabled, :disabled")) {
        var s = n(i),
          o = s.hasClass("open");
        if ((t(), !o)) {
          "ontouchstart" in document.documentElement &&
            !s.closest(".navbar-nav").length &&
            e('<div class="dropdown-backdrop">')
              .insertAfter(e(this))
              .on("click", t);
          var u = { relatedTarget: this };
          if (
            (s.trigger((r = e.Event("show.bs.dropdown", u))),
            r.isDefaultPrevented())
          )
            return;
          s.toggleClass("open").trigger("shown.bs.dropdown", u), i.focus();
        }
        return !1;
      }
    }),
      (s.prototype.keydown = function (t) {
        if (/(38|40|27)/.test(t.keyCode)) {
          var r = e(this);
          if (
            (t.preventDefault(),
            t.stopPropagation(),
            !r.is(".disabled, :disabled"))
          ) {
            var s = n(r),
              o = s.hasClass("open");
            if (!o || (o && 27 == t.keyCode))
              return 27 == t.which && s.find(i).focus(), r.click();
            var u = " li:not(.divider):visible a",
              f = s.find("[role=menu]" + u + ", [role=listbox]" + u);
            if (f.length) {
              var l = f.index(f.filter(":focus"));
              38 == t.keyCode && l > 0 && l--,
                40 == t.keyCode && l < f.length - 1 && l++,
                ~l || (l = 0),
                f.eq(l).focus();
            }
          }
        }
      });
    var o = e.fn.dropdown;
    (e.fn.dropdown = function (t) {
      return this.each(function () {
        var n = e(this),
          r = n.data("bs.dropdown");
        r || n.data("bs.dropdown", (r = new s(this))),
          "string" == typeof t && r[t].call(n);
      });
    }),
      (e.fn.dropdown.Constructor = s),
      (e.fn.dropdown.noConflict = function () {
        return (e.fn.dropdown = o), this;
      }),
      e(document)
        .on("click.bs.dropdown.data-api", t)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
          e.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", i, s.prototype.toggle)
        .on(
          "keydown.bs.dropdown.data-api",
          i + ", [role=menu], [role=listbox]",
          s.prototype.keydown
        );
  })(jQuery),
  +(function (e) {
    "use strict";
    var t = function (t, n) {
      (this.options = n),
        (this.$element = e(t)),
        (this.$backdrop = this.isShown = null),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            e.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (t.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (t.prototype.toggle = function (e) {
        return this[this.isShown ? "hide" : "show"](e);
      }),
      (t.prototype.show = function (t) {
        var n = this,
          r = e.Event("show.bs.modal", { relatedTarget: t });
        this.$element.trigger(r),
          this.isShown ||
            r.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.escape(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              e.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var r = e.support.transition && n.$element.hasClass("fade");
              n.$element.parent().length || n.$element.appendTo(document.body),
                n.$element.show().scrollTop(0),
                r && n.$element[0].offsetWidth,
                n.$element.addClass("in").attr("aria-hidden", !1),
                n.enforceFocus();
              var i = e.Event("shown.bs.modal", { relatedTarget: t });
              r
                ? n.$element
                    .find(".modal-dialog")
                    .one(e.support.transition.end, function () {
                      n.$element.focus().trigger(i);
                    })
                    .emulateTransitionEnd(300)
                : n.$element.focus().trigger(i);
            }));
      }),
      (t.prototype.hide = function (t) {
        t && t.preventDefault(),
          (t = e.Event("hide.bs.modal")),
          this.$element.trigger(t),
          this.isShown &&
            !t.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            e(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal"),
            e.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one(e.support.transition.end, e.proxy(this.hideModal, this))
                  .emulateTransitionEnd(300)
              : this.hideModal());
      }),
      (t.prototype.enforceFocus = function () {
        e(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            e.proxy(function (e) {
              this.$element[0] === e.target ||
                this.$element.has(e.target).length ||
                this.$element.focus();
            }, this)
          );
      }),
      (t.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keyup.dismiss.bs.modal",
              e.proxy(function (e) {
                27 == e.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
      }),
      (t.prototype.hideModal = function () {
        var e = this;
        this.$element.hide(),
          this.backdrop(function () {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal");
          });
      }),
      (t.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (t.prototype.backdrop = function (t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var r = e.support.transition && n;
          if (
            ((this.$backdrop = e(
              '<div class="modal-backdrop ' + n + '" >'
            ).appendTo(document.body)),
            this.$element.on(
              "click.dismiss.bs.modal",
              e.proxy(function (e) {
                e.target === e.currentTarget &&
                  ("static" == this.options.backdrop
                    ? this.$element[0].focus.call(this.$element[0])
                    : this.hide.call(this));
              }, this)
            ),
            r && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !t)
          )
            return;
          r
            ? this.$backdrop
                .one(e.support.transition.end, t)
                .emulateTransitionEnd(150)
            : t();
        } else
          !this.isShown && this.$backdrop
            ? (this.$backdrop.removeClass("in"),
              e.support.transition && this.$element.hasClass("fade")
                ? this.$backdrop
                    .one(e.support.transition.end, t)
                    .emulateTransitionEnd(150)
                : t())
            : t && t();
      });
    var n = e.fn.modal;
    (e.fn.modal = function (n, r) {
      return this.each(function () {
        var i = e(this),
          s = i.data("bs.modal"),
          o = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
        s || i.data("bs.modal", (s = new t(this, o))),
          "string" == typeof n ? s[n](r) : o.show && s.show(r);
      });
    }),
      (e.fn.modal.Constructor = t),
      (e.fn.modal.noConflict = function () {
        return (e.fn.modal = n), this;
      }),
      e(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (t) {
          var n = e(this),
            r = n.attr("href"),
            i = e(
              n.attr("data-target") || (r && r.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            s = i.data("bs.modal")
              ? "toggle"
              : e.extend({ remote: !/#/.test(r) && r }, i.data(), n.data());
          n.is("a") && t.preventDefault(),
            i.modal(s, this).one("hide", function () {
              n.is(":visible") && n.focus();
            });
        }
      ),
      e(document)
        .on("show.bs.modal", ".modal", function () {
          e(document.body).addClass("modal-open");
        })
        .on("hidden.bs.modal", ".modal", function () {
          e(document.body).removeClass("modal-open");
        });
  })(jQuery),
  +(function (e) {
    "use strict";
    var t = function (e, t) {
      (this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init("tooltip", e, t);
    };
    (t.DEFAULTS = {
      animation: !0,
      placement: "top",
      selector: !1,
      template:
        '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: "hover focus",
      title: "",
      delay: 0,
      html: !1,
      container: !1,
    }),
      (t.prototype.init = function (t, n, r) {
        (this.enabled = !0),
          (this.type = t),
          (this.$element = e(n)),
          (this.options = this.getOptions(r));
        for (var i = this.options.trigger.split(" "), s = i.length; s--; ) {
          var o = i[s];
          if ("click" == o)
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              e.proxy(this.toggle, this)
            );
          else if ("manual" != o) {
            var u = "hover" == o ? "mouseenter" : "focusin",
              f = "hover" == o ? "mouseleave" : "focusout";
            this.$element.on(
              u + "." + this.type,
              this.options.selector,
              e.proxy(this.enter, this)
            ),
              this.$element.on(
                f + "." + this.type,
                this.options.selector,
                e.proxy(this.leave, this)
              );
          }
        }
        this.options.selector
          ? (this._options = e.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (t.prototype.getDefaults = function () {
        return t.DEFAULTS;
      }),
      (t.prototype.getOptions = function (t) {
        return (
          (t = e.extend({}, this.getDefaults(), this.$element.data(), t)),
          t.delay &&
            "number" == typeof t.delay &&
            (t.delay = { show: t.delay, hide: t.delay }),
          t
        );
      }),
      (t.prototype.getDelegateOptions = function () {
        var t = {},
          n = this.getDefaults();
        return (
          this._options &&
            e.each(this._options, function (e, r) {
              n[e] != r && (t[e] = r);
            }),
          t
        );
      }),
      (t.prototype.enter = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget)
                [this.type](this.getDelegateOptions())
                .data("bs." + this.type);
        return (
          clearTimeout(n.timeout),
          (n.hoverState = "in"),
          n.options.delay && n.options.delay.show
            ? void (n.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show();
              }, n.options.delay.show))
            : n.show()
        );
      }),
      (t.prototype.leave = function (t) {
        var n =
          t instanceof this.constructor
            ? t
            : e(t.currentTarget)
                [this.type](this.getDelegateOptions())
                .data("bs." + this.type);
        return (
          clearTimeout(n.timeout),
          (n.hoverState = "out"),
          n.options.delay && n.options.delay.hide
            ? void (n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide();
              }, n.options.delay.hide))
            : n.hide()
        );
      }),
      (t.prototype.show = function () {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          if ((this.$element.trigger(t), t.isDefaultPrevented())) return;
          var n = this,
            r = this.tip();
          this.setContent(), this.options.animation && r.addClass("fade");
          var i =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, r[0], this.$element[0])
                : this.options.placement,
            s = /\s?auto?\s?/i,
            o = s.test(i);
          o && (i = i.replace(s, "") || "top"),
            r.detach().css({ top: 0, left: 0, display: "block" }).addClass(i),
            this.options.container
              ? r.appendTo(this.options.container)
              : r.insertAfter(this.$element);
          var u = this.getPosition(),
            f = r[0].offsetWidth,
            l = r[0].offsetHeight;
          if (o) {
            var c = this.$element.parent(),
              h = i,
              p = document.documentElement.scrollTop || document.body.scrollTop,
              d =
                "body" == this.options.container
                  ? window.innerWidth
                  : c.outerWidth(),
              v =
                "body" == this.options.container
                  ? window.innerHeight
                  : c.outerHeight(),
              m = "body" == this.options.container ? 0 : c.offset().left;
            (i =
              "bottom" == i && u.top + u.height + l - p > v
                ? "top"
                : "top" == i && u.top - p - l < 0
                ? "bottom"
                : "right" == i && u.right + f > d
                ? "left"
                : "left" == i && u.left - f < m
                ? "right"
                : i),
              r.removeClass(h).addClass(i);
          }
          var g = this.getCalculatedOffset(i, u, f, l);
          this.applyPlacement(g, i), (this.hoverState = null);
          var y = function () {
            n.$element.trigger("shown.bs." + n.type);
          };
          e.support.transition && this.$tip.hasClass("fade")
            ? r.one(e.support.transition.end, y).emulateTransitionEnd(150)
            : y();
        }
      }),
      (t.prototype.applyPlacement = function (t, n) {
        var r,
          i = this.tip(),
          s = i[0].offsetWidth,
          o = i[0].offsetHeight,
          u = parseInt(i.css("margin-top"), 10),
          f = parseInt(i.css("margin-left"), 10);
        isNaN(u) && (u = 0),
          isNaN(f) && (f = 0),
          (t.top = t.top + u),
          (t.left = t.left + f),
          e.offset.setOffset(
            i[0],
            e.extend(
              {
                using: function (e) {
                  i.css({ top: Math.round(e.top), left: Math.round(e.left) });
                },
              },
              t
            ),
            0
          ),
          i.addClass("in");
        var l = i[0].offsetWidth,
          c = i[0].offsetHeight;
        if (
          ("top" == n && c != o && ((r = !0), (t.top = t.top + o - c)),
          /bottom|top/.test(n))
        ) {
          var h = 0;
          t.left < 0 &&
            ((h = -2 * t.left),
            (t.left = 0),
            i.offset(t),
            (l = i[0].offsetWidth),
            (c = i[0].offsetHeight)),
            this.replaceArrow(h - s + l, l, "left");
        } else this.replaceArrow(c - o, c, "top");
        r && i.offset(t);
      }),
      (t.prototype.replaceArrow = function (e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "");
      }),
      (t.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
          e.removeClass("fade in top bottom left right");
      }),
      (t.prototype.hide = function () {
        function t() {
          "in" != n.hoverState && r.detach(),
            n.$element.trigger("hidden.bs." + n.type);
        }
        var n = this,
          r = this.tip(),
          i = e.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(i),
          i.isDefaultPrevented()
            ? void 0
            : (r.removeClass("in"),
              e.support.transition && this.$tip.hasClass("fade")
                ? r.one(e.support.transition.end, t).emulateTransitionEnd(150)
                : t(),
              (this.hoverState = null),
              this)
        );
      }),
      (t.prototype.fixTitle = function () {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) &&
          e
            .attr("data-original-title", e.attr("title") || "")
            .attr("title", "");
      }),
      (t.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (t.prototype.getPosition = function () {
        var t = this.$element[0];
        return e.extend(
          {},
          "function" == typeof t.getBoundingClientRect
            ? t.getBoundingClientRect()
            : { width: t.offsetWidth, height: t.offsetHeight },
          this.$element.offset()
        );
      }),
      (t.prototype.getCalculatedOffset = function (e, t, n, r) {
        return "bottom" == e
          ? { top: t.top + t.height, left: t.left + t.width / 2 - n / 2 }
          : "top" == e
          ? { top: t.top - r, left: t.left + t.width / 2 - n / 2 }
          : "left" == e
          ? { top: t.top + t.height / 2 - r / 2, left: t.left - n }
          : { top: t.top + t.height / 2 - r / 2, left: t.left + t.width };
      }),
      (t.prototype.getTitle = function () {
        var e,
          t = this.$element,
          n = this.options;
        return (e =
          t.attr("data-original-title") ||
          ("function" == typeof n.title ? n.title.call(t[0]) : n.title));
      }),
      (t.prototype.tip = function () {
        return (this.$tip = this.$tip || e(this.options.template));
      }),
      (t.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (t.prototype.validate = function () {
        this.$element[0].parentNode ||
          (this.hide(), (this.$element = null), (this.options = null));
      }),
      (t.prototype.enable = function () {
        this.enabled = !0;
      }),
      (t.prototype.disable = function () {
        this.enabled = !1;
      }),
      (t.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (t.prototype.toggle = function (t) {
        var n = t
          ? e(t.currentTarget)
              [this.type](this.getDelegateOptions())
              .data("bs." + this.type)
          : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n);
      }),
      (t.prototype.destroy = function () {
        clearTimeout(this.timeout),
          this.hide()
            .$element.off("." + this.type)
            .removeData("bs." + this.type);
      });
    var n = e.fn.tooltip;
    (e.fn.tooltip = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.tooltip"),
          s = "object" == typeof n && n;
        (i || "destroy" != n) &&
          (i || r.data("bs.tooltip", (i = new t(this, s))),
          "string" == typeof n && i[n]());
      });
    }),
      (e.fn.tooltip.Constructor = t),
      (e.fn.tooltip.noConflict = function () {
        return (e.fn.tooltip = n), this;
      });
  })(jQuery),
  +(function (e) {
    "use strict";
    var t = function (e, t) {
      this.init("popover", e, t);
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    (t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
      placement: "right",
      trigger: "click",
      content: "",
      template:
        '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
    })),
      (t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype)),
      (t.prototype.constructor = t),
      (t.prototype.getDefaults = function () {
        return t.DEFAULTS;
      }),
      (t.prototype.setContent = function () {
        var e = this.tip(),
          t = this.getTitle(),
          n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t),
          e
            .find(".popover-content")
            [
              this.options.html
                ? "string" == typeof n
                  ? "html"
                  : "append"
                : "text"
            ](n),
          e.removeClass("fade top bottom left right in"),
          e.find(".popover-title").html() || e.find(".popover-title").hide();
      }),
      (t.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (t.prototype.getContent = function () {
        var e = this.$element,
          t = this.options;
        return (
          e.attr("data-content") ||
          ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
        );
      }),
      (t.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (t.prototype.tip = function () {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip;
      });
    var n = e.fn.popover;
    (e.fn.popover = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.popover"),
          s = "object" == typeof n && n;
        (i || "destroy" != n) &&
          (i || r.data("bs.popover", (i = new t(this, s))),
          "string" == typeof n && i[n]());
      });
    }),
      (e.fn.popover.Constructor = t),
      (e.fn.popover.noConflict = function () {
        return (e.fn.popover = n), this;
      });
  })(jQuery),
  +(function (e) {
    "use strict";
    function t(n, r) {
      var i,
        s = e.proxy(this.process, this);
      (this.$element = e(e(n).is("body") ? window : n)),
        (this.$body = e("body")),
        (this.$scrollElement = this.$element.on(
          "scroll.bs.scroll-spy.data-api",
          s
        )),
        (this.options = e.extend({}, t.DEFAULTS, r)),
        (this.selector =
          (this.options.target ||
            ((i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "")) ||
            "") + " .nav li > a"),
        (this.offsets = e([])),
        (this.targets = e([])),
        (this.activeTarget = null),
        this.refresh(),
        this.process();
    }
    (t.DEFAULTS = { offset: 10 }),
      (t.prototype.refresh = function () {
        var t = this.$element[0] == window ? "offset" : "position";
        (this.offsets = e([])), (this.targets = e([]));
        {
          var n = this;
          this.$body
            .find(this.selector)
            .map(function () {
              var r = e(this),
                i = r.data("target") || r.attr("href"),
                s = /^#./.test(i) && e(i);
              return (
                (s &&
                  s.length &&
                  s.is(":visible") && [
                    [
                      s[t]().top +
                        (!e.isWindow(n.$scrollElement.get(0)) &&
                          n.$scrollElement.scrollTop()),
                      i,
                    ],
                  ]) ||
                null
              );
            })
            .sort(function (e, t) {
              return e[0] - t[0];
            })
            .each(function () {
              n.offsets.push(this[0]), n.targets.push(this[1]);
            });
        }
      }),
      (t.prototype.process = function () {
        var e,
          t = this.$scrollElement.scrollTop() + this.options.offset,
          n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
          r = n - this.$scrollElement.height(),
          i = this.offsets,
          s = this.targets,
          o = this.activeTarget;
        if (t >= r) return o != (e = s.last()[0]) && this.activate(e);
        if (o && t <= i[0]) return o != (e = s[0]) && this.activate(e);
        for (e = i.length; e--; )
          o != s[e] &&
            t >= i[e] &&
            (!i[e + 1] || t <= i[e + 1]) &&
            this.activate(s[e]);
      }),
      (t.prototype.activate = function (t) {
        (this.activeTarget = t),
          e(this.selector)
            .parentsUntil(this.options.target, ".active")
            .removeClass("active");
        var n =
            this.selector +
            '[data-target="' +
            t +
            '"],' +
            this.selector +
            '[href="' +
            t +
            '"]',
          r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length &&
          (r = r.closest("li.dropdown").addClass("active")),
          r.trigger("activate.bs.scrollspy");
      });
    var n = e.fn.scrollspy;
    (e.fn.scrollspy = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.scrollspy"),
          s = "object" == typeof n && n;
        i || r.data("bs.scrollspy", (i = new t(this, s))),
          "string" == typeof n && i[n]();
      });
    }),
      (e.fn.scrollspy.Constructor = t),
      (e.fn.scrollspy.noConflict = function () {
        return (e.fn.scrollspy = n), this;
      }),
      e(window).on("load", function () {
        e('[data-spy="scroll"]').each(function () {
          var t = e(this);
          t.scrollspy(t.data());
        });
      });
  })(jQuery),
  +(function (e) {
    "use strict";
    var t = function (t) {
      this.element = e(t);
    };
    (t.prototype.show = function () {
      var t = this.element,
        n = t.closest("ul:not(.dropdown-menu)"),
        r = t.data("target");
      if (
        (r ||
          ((r = t.attr("href")), (r = r && r.replace(/.*(?=#[^\s]*$)/, ""))),
        !t.parent("li").hasClass("active"))
      ) {
        var i = n.find(".active:last a")[0],
          s = e.Event("show.bs.tab", { relatedTarget: i });
        if ((t.trigger(s), !s.isDefaultPrevented())) {
          var o = e(r);
          this.activate(t.parent("li"), n),
            this.activate(o, o.parent(), function () {
              t.trigger({ type: "shown.bs.tab", relatedTarget: i });
            });
        }
      }
    }),
      (t.prototype.activate = function (t, n, r) {
        function i() {
          s
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active"),
            t.addClass("active"),
            o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"),
            t.parent(".dropdown-menu") &&
              t.closest("li.dropdown").addClass("active"),
            r && r();
        }
        var s = n.find("> .active"),
          o = r && e.support.transition && s.hasClass("fade");
        o ? s.one(e.support.transition.end, i).emulateTransitionEnd(150) : i(),
          s.removeClass("in");
      });
    var n = e.fn.tab;
    (e.fn.tab = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.tab");
        i || r.data("bs.tab", (i = new t(this))),
          "string" == typeof n && i[n]();
      });
    }),
      (e.fn.tab.Constructor = t),
      (e.fn.tab.noConflict = function () {
        return (e.fn.tab = n), this;
      }),
      e(document).on(
        "click.bs.tab.data-api",
        '[data-toggle="tab"], [data-toggle="pill"]',
        function (t) {
          t.preventDefault(), e(this).tab("show");
        }
      );
  })(jQuery),
  +(function (e) {
    "use strict";
    var t = function (n, r) {
      (this.options = e.extend({}, t.DEFAULTS, r)),
        (this.$window = e(window)
          .on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            e.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = e(n)),
        (this.affixed = this.unpin = this.pinnedOffset = null),
        this.checkPosition();
    };
    (t.RESET = "affix affix-top affix-bottom"),
      (t.DEFAULTS = { offset: 0 }),
      (t.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var e = this.$window.scrollTop(),
          n = this.$element.offset();
        return (this.pinnedOffset = n.top - e);
      }),
      (t.prototype.checkPositionWithEventLoop = function () {
        setTimeout(e.proxy(this.checkPosition, this), 1);
      }),
      (t.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var n = e(document).height(),
            r = this.$window.scrollTop(),
            i = this.$element.offset(),
            s = this.options.offset,
            o = s.top,
            u = s.bottom;
          "top" == this.affixed && (i.top += r),
            "object" != typeof s && (u = o = s),
            "function" == typeof o && (o = s.top(this.$element)),
            "function" == typeof u && (u = s.bottom(this.$element));
          var f =
            null != this.unpin && r + this.unpin <= i.top
              ? !1
              : null != u && i.top + this.$element.height() >= n - u
              ? "bottom"
              : null != o && o >= r
              ? "top"
              : !1;
          if (this.affixed !== f) {
            this.unpin && this.$element.css("top", "");
            var l = "affix" + (f ? "-" + f : ""),
              c = e.Event(l + ".bs.affix");
            this.$element.trigger(c),
              c.isDefaultPrevented() ||
                ((this.affixed = f),
                (this.unpin = "bottom" == f ? this.getPinnedOffset() : null),
                this.$element
                  .removeClass(t.RESET)
                  .addClass(l)
                  .trigger(e.Event(l.replace("affix", "affixed"))),
                "bottom" == f &&
                  this.$element.offset({
                    top: n - u - this.$element.height(),
                  }));
          }
        }
      });
    var n = e.fn.affix;
    (e.fn.affix = function (n) {
      return this.each(function () {
        var r = e(this),
          i = r.data("bs.affix"),
          s = "object" == typeof n && n;
        i || r.data("bs.affix", (i = new t(this, s))),
          "string" == typeof n && i[n]();
      });
    }),
      (e.fn.affix.Constructor = t),
      (e.fn.affix.noConflict = function () {
        return (e.fn.affix = n), this;
      }),
      e(window).on("load", function () {
        e('[data-spy="affix"]').each(function () {
          var t = e(this),
            n = t.data();
          (n.offset = n.offset || {}),
            n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            n.offsetTop && (n.offset.top = n.offsetTop),
            t.affix(n);
        });
      });
  })(jQuery);
(function (e, t) {
  function n(e) {
    return B.isWindow(e)
      ? e
      : e.nodeType === 9
      ? e.defaultView || e.parentWindow
      : !1;
  }
  function r(e) {
    if (!mn[e]) {
      var t = D.body,
        n = B("<" + e + ">").appendTo(t),
        r = n.css("display");
      n.remove();
      if (r === "none" || r === "") {
        gn ||
          ((gn = D.createElement("iframe")),
          (gn.frameBorder = gn.width = gn.height = 0)),
          t.appendChild(gn);
        if (!yn || !gn.createElement)
          (yn = (gn.contentWindow || gn.contentDocument).document),
            yn.write(
              (D.compatMode === "CSS1Compat" ? "<!doctype html>" : "") +
                "<html><body>"
            ),
            yn.close();
        (n = yn.createElement(e)),
          yn.body.appendChild(n),
          (r = B.css(n, "display")),
          t.removeChild(gn);
      }
      mn[e] = r;
    }
    return mn[e];
  }
  function i(e, t) {
    var n = {};
    B.each(Sn.concat.apply([], Sn.slice(0, t)), function () {
      n[this] = e;
    });
    return n;
  }
  function s() {
    xn = t;
  }
  function o() {
    setTimeout(s, 0);
    return (xn = B.now());
  }
  function u() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {}
  }
  function a() {
    try {
      return new e.XMLHttpRequest();
    } catch (t) {}
  }
  function f(e, n) {
    e.dataFilter && (n = e.dataFilter(n, e.dataType));
    var r = e.dataTypes,
      i = {},
      s,
      o,
      u = r.length,
      a,
      f = r[0],
      l,
      c,
      h,
      p,
      d;
    for (s = 1; s < u; s++) {
      if (s === 1)
        for (o in e.converters)
          typeof o == "string" && (i[o.toLowerCase()] = e.converters[o]);
      (l = f), (f = r[s]);
      if (f === "*") f = l;
      else if (l !== "*" && l !== f) {
        (c = l + " " + f), (h = i[c] || i["* " + f]);
        if (!h) {
          d = t;
          for (p in i) {
            a = p.split(" ");
            if (a[0] === l || a[0] === "*") {
              d = i[a[1] + " " + f];
              if (d) {
                (p = i[p]), p === !0 ? (h = d) : d === !0 && (h = p);
                break;
              }
            }
          }
        }
        !h && !d && B.error("No conversion from " + c.replace(" ", " to ")),
          h !== !0 && (n = h ? h(n) : d(p(n)));
      }
    }
    return n;
  }
  function l(e, n, r) {
    var i = e.contents,
      s = e.dataTypes,
      o = e.responseFields,
      u,
      a,
      f,
      l;
    for (a in o) a in r && (n[o[a]] = r[a]);
    while (s[0] === "*")
      s.shift(),
        u === t && (u = e.mimeType || n.getResponseHeader("content-type"));
    if (u)
      for (a in i)
        if (i[a] && i[a].test(u)) {
          s.unshift(a);
          break;
        }
    if (s[0] in r) f = s[0];
    else {
      for (a in r) {
        if (!s[0] || e.converters[a + " " + s[0]]) {
          f = a;
          break;
        }
        l || (l = a);
      }
      f = f || l;
    }
    if (f) {
      f !== s[0] && s.unshift(f);
      return r[f];
    }
  }
  function c(e, t, n, r) {
    if (B.isArray(t))
      B.each(t, function (t, i) {
        n || zt.test(e)
          ? r(e, i)
          : c(
              e + "[" + (typeof i == "object" || B.isArray(i) ? t : "") + "]",
              i,
              n,
              r
            );
      });
    else if (!n && t != null && typeof t == "object")
      for (var i in t) c(e + "[" + i + "]", t[i], n, r);
    else r(e, t);
  }
  function h(e, n) {
    var r,
      i,
      s = B.ajaxSettings.flatOptions || {};
    for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
    i && B.extend(!0, e, i);
  }
  function p(e, n, r, i, s, o) {
    (s = s || n.dataTypes[0]), (o = o || {}), (o[s] = !0);
    var u = e[s],
      a = 0,
      f = u ? u.length : 0,
      l = e === sn,
      c;
    for (; a < f && (l || !c); a++)
      (c = u[a](n, r, i)),
        typeof c == "string" &&
          (!l || o[c]
            ? (c = t)
            : (n.dataTypes.unshift(c), (c = p(e, n, r, i, c, o))));
    (l || !c) && !o["*"] && (c = p(e, n, r, i, "*", o));
    return c;
  }
  function d(e) {
    return function (t, n) {
      typeof t != "string" && ((n = t), (t = "*"));
      if (B.isFunction(n)) {
        var r = t.toLowerCase().split(en),
          i = 0,
          s = r.length,
          o,
          u,
          a;
        for (; i < s; i++)
          (o = r[i]),
            (a = /^\+/.test(o)),
            a && (o = o.substr(1) || "*"),
            (u = e[o] = e[o] || []),
            u[a ? "unshift" : "push"](n);
      }
    };
  }
  function v(e, t, n) {
    var r = t === "width" ? e.offsetWidth : e.offsetHeight,
      i = t === "width" ? jt : Ft,
      s = 0,
      o = i.length;
    if (r > 0) {
      if (n !== "border")
        for (; s < o; s++)
          n || (r -= parseFloat(B.css(e, "padding" + i[s])) || 0),
            n === "margin"
              ? (r += parseFloat(B.css(e, n + i[s])) || 0)
              : (r -= parseFloat(B.css(e, "border" + i[s] + "Width")) || 0);
      return r + "px";
    }
    r = It(e, t, t);
    if (r < 0 || r == null) r = e.style[t] || 0;
    r = parseFloat(r) || 0;
    if (n)
      for (; s < o; s++)
        (r += parseFloat(B.css(e, "padding" + i[s])) || 0),
          n !== "padding" &&
            (r += parseFloat(B.css(e, "border" + i[s] + "Width")) || 0),
          n === "margin" && (r += parseFloat(B.css(e, n + i[s])) || 0);
    return r + "px";
  }
  function m(e, t) {
    t.src
      ? B.ajax({ url: t.src, async: !1, dataType: "script" })
      : B.globalEval(
          (t.text || t.textContent || t.innerHTML || "").replace(kt, "/*$0*/")
        ),
      t.parentNode && t.parentNode.removeChild(t);
  }
  function g(e) {
    var t = D.createElement("div");
    At.appendChild(t), (t.innerHTML = e.outerHTML);
    return t.firstChild;
  }
  function y(e) {
    var t = (e.nodeName || "").toLowerCase();
    t === "input"
      ? b(e)
      : t !== "script" &&
        typeof e.getElementsByTagName != "undefined" &&
        B.grep(e.getElementsByTagName("input"), b);
  }
  function b(e) {
    if (e.type === "checkbox" || e.type === "radio")
      e.defaultChecked = e.checked;
  }
  function w(e) {
    return typeof e.getElementsByTagName != "undefined"
      ? e.getElementsByTagName("*")
      : typeof e.querySelectorAll != "undefined"
      ? e.querySelectorAll("*")
      : [];
  }
  function E(e, t) {
    var n;
    if (t.nodeType === 1) {
      t.clearAttributes && t.clearAttributes(),
        t.mergeAttributes && t.mergeAttributes(e),
        (n = t.nodeName.toLowerCase());
      if (n === "object") t.outerHTML = e.outerHTML;
      else if (n !== "input" || (e.type !== "checkbox" && e.type !== "radio")) {
        if (n === "option") t.selected = e.defaultSelected;
        else if (n === "input" || n === "textarea")
          t.defaultValue = e.defaultValue;
      } else
        e.checked && (t.defaultChecked = t.checked = e.checked),
          t.value !== e.value && (t.value = e.value);
      t.removeAttribute(B.expando);
    }
  }
  function S(e, t) {
    if (t.nodeType === 1 && !!B.hasData(e)) {
      var n,
        r,
        i,
        s = B._data(e),
        o = B._data(t, s),
        u = s.events;
      if (u) {
        delete o.handle, (o.events = {});
        for (n in u)
          for (r = 0, i = u[n].length; r < i; r++)
            B.event.add(
              t,
              n + (u[n][r].namespace ? "." : "") + u[n][r].namespace,
              u[n][r],
              u[n][r].data
            );
      }
      o.data && (o.data = B.extend({}, o.data));
    }
  }
  function x(e, t) {
    return B.nodeName(e, "table")
      ? e.getElementsByTagName("tbody")[0] ||
          e.appendChild(e.ownerDocument.createElement("tbody"))
      : e;
  }
  function T(e) {
    var t = vt.split("|"),
      n = e.createDocumentFragment();
    if (n.createElement) while (t.length) n.createElement(t.pop());
    return n;
  }
  function N(e, t, n) {
    t = t || 0;
    if (B.isFunction(t))
      return B.grep(e, function (e, r) {
        var i = !!t.call(e, r, e);
        return i === n;
      });
    if (t.nodeType)
      return B.grep(e, function (e, r) {
        return (e === t) === n;
      });
    if (typeof t == "string") {
      var r = B.grep(e, function (e) {
        return e.nodeType === 1;
      });
      if (ct.test(t)) return B.filter(t, r, !n);
      t = B.filter(t, r);
    }
    return B.grep(e, function (e, r) {
      return B.inArray(e, t) >= 0 === n;
    });
  }
  function C(e) {
    return !e || !e.parentNode || e.parentNode.nodeType === 11;
  }
  function k() {
    return !0;
  }
  function L() {
    return !1;
  }
  function A(e, t, n) {
    var r = t + "defer",
      i = t + "queue",
      s = t + "mark",
      o = B._data(e, r);
    o &&
      (n === "queue" || !B._data(e, i)) &&
      (n === "mark" || !B._data(e, s)) &&
      setTimeout(function () {
        !B._data(e, i) && !B._data(e, s) && (B.removeData(e, r, !0), o.fire());
      }, 0);
  }
  function O(e) {
    for (var t in e) {
      if (t === "data" && B.isEmptyObject(e[t])) continue;
      if (t !== "toJSON") return !1;
    }
    return !0;
  }
  function M(e, n, r) {
    if (r === t && e.nodeType === 1) {
      var i = "data-" + n.replace(q, "-$1").toLowerCase();
      r = e.getAttribute(i);
      if (typeof r == "string") {
        try {
          r =
            r === "true"
              ? !0
              : r === "false"
              ? !1
              : r === "null"
              ? null
              : B.isNumeric(r)
              ? parseFloat(r)
              : I.test(r)
              ? B.parseJSON(r)
              : r;
        } catch (s) {}
        B.data(e, n, r);
      } else r = t;
    }
    return r;
  }
  function _(e) {
    var t = (j[e] = {}),
      n,
      r;
    e = e.split(/\s+/);
    for (n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
    return t;
  }
  var D = e.document,
    P = e.navigator,
    H = e.location,
    B = (function () {
      function n() {
        if (!r.isReady) {
          try {
            D.documentElement.doScroll("left");
          } catch (e) {
            setTimeout(n, 1);
            return;
          }
          r.ready();
        }
      }
      var r = function (e, t) {
          return new r.fn.init(e, t, o);
        },
        i = e.jQuery,
        s = e.$,
        o,
        u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        a = /\S/,
        f = /^\s+/,
        l = /\s+$/,
        c = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        h = /^[\],:{}\s]*$/,
        p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        d = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        v = /(?:^|:|,)(?:\s*\[)+/g,
        m = /(webkit)[ \/]([\w.]+)/,
        g = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        y = /(msie) ([\w.]+)/,
        b = /(mozilla)(?:.*? rv:([\w.]+))?/,
        w = /-([a-z]|[0-9])/gi,
        E = /^-ms-/,
        S = function (e, t) {
          return (t + "").toUpperCase();
        },
        x = P.userAgent,
        T,
        N,
        C,
        k = Object.prototype.toString,
        L = Object.prototype.hasOwnProperty,
        A = Array.prototype.push,
        O = Array.prototype.slice,
        M = String.prototype.trim,
        _ = Array.prototype.indexOf,
        H = {};
      (r.fn = r.prototype =
        {
          constructor: r,
          init: function (e, n, i) {
            var s, o, a, f;
            if (!e) return this;
            if (e.nodeType) {
              (this.context = this[0] = e), (this.length = 1);
              return this;
            }
            if (e === "body" && !n && D.body) {
              (this.context = D),
                (this[0] = D.body),
                (this.selector = e),
                (this.length = 1);
              return this;
            }
            if (typeof e == "string") {
              e.charAt(0) !== "<" ||
              e.charAt(e.length - 1) !== ">" ||
              e.length < 3
                ? (s = u.exec(e))
                : (s = [null, e, null]);
              if (s && (s[1] || !n)) {
                if (s[1]) {
                  (n = n instanceof r ? n[0] : n),
                    (f = n ? n.ownerDocument || n : D),
                    (a = c.exec(e)),
                    a
                      ? r.isPlainObject(n)
                        ? ((e = [D.createElement(a[1])]),
                          r.fn.attr.call(e, n, !0))
                        : (e = [f.createElement(a[1])])
                      : ((a = r.buildFragment([s[1]], [f])),
                        (e = (a.cacheable ? r.clone(a.fragment) : a.fragment)
                          .childNodes));
                  return r.merge(this, e);
                }
                o = D.getElementById(s[2]);
                if (o && o.parentNode) {
                  if (o.id !== s[2]) return i.find(e);
                  (this.length = 1), (this[0] = o);
                }
                (this.context = D), (this.selector = e);
                return this;
              }
              return !n || n.jquery
                ? (n || i).find(e)
                : this.constructor(n).find(e);
            }
            if (r.isFunction(e)) return i.ready(e);
            e.selector !== t &&
              ((this.selector = e.selector), (this.context = e.context));
            return r.makeArray(e, this);
          },
          selector: "",
          jquery: "1.7.1",
          length: 0,
          size: function () {
            return this.length;
          },
          toArray: function () {
            return O.call(this, 0);
          },
          get: function (e) {
            return e == null
              ? this.toArray()
              : e < 0
              ? this[this.length + e]
              : this[e];
          },
          pushStack: function (e, t, n) {
            var i = this.constructor();
            r.isArray(e) ? A.apply(i, e) : r.merge(i, e),
              (i.prevObject = this),
              (i.context = this.context),
              t === "find"
                ? (i.selector = this.selector + (this.selector ? " " : "") + n)
                : t && (i.selector = this.selector + "." + t + "(" + n + ")");
            return i;
          },
          each: function (e, t) {
            return r.each(this, e, t);
          },
          ready: function (e) {
            r.bindReady(), N.add(e);
            return this;
          },
          eq: function (e) {
            e = +e;
            return e === -1 ? this.slice(e) : this.slice(e, e + 1);
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          slice: function () {
            return this.pushStack(
              O.apply(this, arguments),
              "slice",
              O.call(arguments).join(",")
            );
          },
          map: function (e) {
            return this.pushStack(
              r.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          end: function () {
            return this.prevObject || this.constructor(null);
          },
          push: A,
          sort: [].sort,
          splice: [].splice,
        }),
        (r.fn.init.prototype = r.fn),
        (r.extend = r.fn.extend =
          function () {
            var e,
              n,
              i,
              s,
              o,
              u,
              a = arguments[0] || {},
              f = 1,
              l = arguments.length,
              c = !1;
            typeof a == "boolean" &&
              ((c = a), (a = arguments[1] || {}), (f = 2)),
              typeof a != "object" && !r.isFunction(a) && (a = {}),
              l === f && ((a = this), --f);
            for (; f < l; f++)
              if ((e = arguments[f]) != null)
                for (n in e) {
                  (i = a[n]), (s = e[n]);
                  if (a === s) continue;
                  c && s && (r.isPlainObject(s) || (o = r.isArray(s)))
                    ? (o
                        ? ((o = !1), (u = i && r.isArray(i) ? i : []))
                        : (u = i && r.isPlainObject(i) ? i : {}),
                      (a[n] = r.extend(c, u, s)))
                    : s !== t && (a[n] = s);
                }
            return a;
          }),
        r.extend({
          noConflict: function (t) {
            e.$ === r && (e.$ = s), t && e.jQuery === r && (e.jQuery = i);
            return r;
          },
          isReady: !1,
          readyWait: 1,
          holdReady: function (e) {
            e ? r.readyWait++ : r.ready(!0);
          },
          ready: function (e) {
            if ((e === !0 && !--r.readyWait) || (e !== !0 && !r.isReady)) {
              if (!D.body) return setTimeout(r.ready, 1);
              r.isReady = !0;
              if (e !== !0 && --r.readyWait > 0) return;
              N.fireWith(D, [r]),
                r.fn.trigger && r(D).trigger("ready").off("ready");
            }
          },
          bindReady: function () {
            if (!N) {
              N = r.Callbacks("once memory");
              if (D.readyState === "complete") return setTimeout(r.ready, 1);
              if (D.addEventListener)
                D.addEventListener("DOMContentLoaded", C, !1),
                  e.addEventListener("load", r.ready, !1);
              else if (D.attachEvent) {
                D.attachEvent("onreadystatechange", C),
                  e.attachEvent("onload", r.ready);
                var t = !1;
                try {
                  t = e.frameElement == null;
                } catch (i) {}
                D.documentElement.doScroll && t && n();
              }
            }
          },
          isFunction: function (e) {
            return r.type(e) === "function";
          },
          isArray:
            Array.isArray ||
            function (e) {
              return r.type(e) === "array";
            },
          isWindow: function (e) {
            return e && typeof e == "object" && "setInterval" in e;
          },
          isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          },
          type: function (e) {
            return e == null ? String(e) : H[k.call(e)] || "object";
          },
          isPlainObject: function (e) {
            if (!e || r.type(e) !== "object" || e.nodeType || r.isWindow(e))
              return !1;
            try {
              if (
                e.constructor &&
                !L.call(e, "constructor") &&
                !L.call(e.constructor.prototype, "isPrototypeOf")
              )
                return !1;
            } catch (n) {
              return !1;
            }
            var i;
            for (i in e);
            return i === t || L.call(e, i);
          },
          isEmptyObject: function (e) {
            for (var t in e) return !1;
            return !0;
          },
          error: function (e) {
            throw new Error(e);
          },
          parseJSON: function (t) {
            if (typeof t != "string" || !t) return null;
            t = r.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (h.test(t.replace(p, "@").replace(d, "]").replace(v, "")))
              return new Function("return " + t)();
            r.error("Invalid JSON: " + t);
          },
          parseXML: function (n) {
            var i, s;
            try {
              e.DOMParser
                ? ((s = new DOMParser()),
                  (i = s.parseFromString(n, "text/xml")))
                : ((i = new ActiveXObject("Microsoft.XMLDOM")),
                  (i.async = "false"),
                  i.loadXML(n));
            } catch (o) {
              i = t;
            }
            (!i ||
              !i.documentElement ||
              i.getElementsByTagName("parsererror").length) &&
              r.error("Invalid XML: " + n);
            return i;
          },
          noop: function () {},
          globalEval: function (t) {
            t &&
              a.test(t) &&
              (
                e.execScript ||
                function (t) {
                  e.eval.call(e, t);
                }
              )(t);
          },
          camelCase: function (e) {
            return e.replace(E, "ms-").replace(w, S);
          },
          nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase();
          },
          each: function (e, n, i) {
            var s,
              o = 0,
              u = e.length,
              a = u === t || r.isFunction(e);
            if (i) {
              if (a) {
                for (s in e) if (n.apply(e[s], i) === !1) break;
              } else for (; o < u; ) if (n.apply(e[o++], i) === !1) break;
            } else if (a) {
              for (s in e) if (n.call(e[s], s, e[s]) === !1) break;
            } else for (; o < u; ) if (n.call(e[o], o, e[o++]) === !1) break;
            return e;
          },
          trim: M
            ? function (e) {
                return e == null ? "" : M.call(e);
              }
            : function (e) {
                return e == null ? "" : (e + "").replace(f, "").replace(l, "");
              },
          makeArray: function (e, t) {
            var n = t || [];
            if (e != null) {
              var i = r.type(e);
              e.length == null ||
              i === "string" ||
              i === "function" ||
              i === "regexp" ||
              r.isWindow(e)
                ? A.call(n, e)
                : r.merge(n, e);
            }
            return n;
          },
          inArray: function (e, t, n) {
            var r;
            if (t) {
              if (_) return _.call(t, e, n);
              (r = t.length), (n = n ? (n < 0 ? Math.max(0, r + n) : n) : 0);
              for (; n < r; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
          },
          merge: function (e, n) {
            var r = e.length,
              i = 0;
            if (typeof n.length == "number")
              for (var s = n.length; i < s; i++) e[r++] = n[i];
            else while (n[i] !== t) e[r++] = n[i++];
            e.length = r;
            return e;
          },
          grep: function (e, t, n) {
            var r = [],
              i;
            n = !!n;
            for (var s = 0, o = e.length; s < o; s++)
              (i = !!t(e[s], s)), n !== i && r.push(e[s]);
            return r;
          },
          map: function (e, n, i) {
            var s,
              o,
              u = [],
              a = 0,
              f = e.length,
              l =
                e instanceof r ||
                (f !== t &&
                  typeof f == "number" &&
                  ((f > 0 && e[0] && e[f - 1]) || f === 0 || r.isArray(e)));
            if (l)
              for (; a < f; a++)
                (s = n(e[a], a, i)), s != null && (u[u.length] = s);
            else
              for (o in e) (s = n(e[o], o, i)), s != null && (u[u.length] = s);
            return u.concat.apply([], u);
          },
          guid: 1,
          proxy: function (e, n) {
            if (typeof n == "string") {
              var i = e[n];
              (n = e), (e = i);
            }
            if (!r.isFunction(e)) return t;
            var s = O.call(arguments, 2),
              o = function () {
                return e.apply(n, s.concat(O.call(arguments)));
              };
            o.guid = e.guid = e.guid || o.guid || r.guid++;
            return o;
          },
          access: function (e, n, i, s, o, u) {
            var a = e.length;
            if (typeof n == "object") {
              for (var f in n) r.access(e, f, n[f], s, o, i);
              return e;
            }
            if (i !== t) {
              s = !u && s && r.isFunction(i);
              for (var l = 0; l < a; l++)
                o(e[l], n, s ? i.call(e[l], l, o(e[l], n)) : i, u);
              return e;
            }
            return a ? o(e[0], n) : t;
          },
          now: function () {
            return new Date().getTime();
          },
          uaMatch: function (e) {
            e = e.toLowerCase();
            var t =
              m.exec(e) ||
              g.exec(e) ||
              y.exec(e) ||
              (e.indexOf("compatible") < 0 && b.exec(e)) ||
              [];
            return { browser: t[1] || "", version: t[2] || "0" };
          },
          sub: function () {
            function e(t, n) {
              return new e.fn.init(t, n);
            }
            r.extend(!0, e, this),
              (e.superclass = this),
              (e.fn = e.prototype = this()),
              (e.fn.constructor = e),
              (e.sub = this.sub),
              (e.fn.init = function (n, i) {
                i && i instanceof r && !(i instanceof e) && (i = e(i));
                return r.fn.init.call(this, n, i, t);
              }),
              (e.fn.init.prototype = e.fn);
            var t = e(D);
            return e;
          },
          browser: {},
        }),
        r.each(
          "Boolean Number String Function Array Date RegExp Object".split(" "),
          function (e, t) {
            H["[object " + t + "]"] = t.toLowerCase();
          }
        ),
        (T = r.uaMatch(x)),
        T.browser &&
          ((r.browser[T.browser] = !0), (r.browser.version = T.version)),
        r.browser.webkit && (r.browser.safari = !0),
        a.test(" ") && ((f = /^[\s\xA0]+/), (l = /[\s\xA0]+$/)),
        (o = r(D)),
        D.addEventListener
          ? (C = function () {
              D.removeEventListener("DOMContentLoaded", C, !1), r.ready();
            })
          : D.attachEvent &&
            (C = function () {
              D.readyState === "complete" &&
                (D.detachEvent("onreadystatechange", C), r.ready());
            });
      return r;
    })(),
    j = {};
  B.Callbacks = function (e) {
    e = e ? j[e] || _(e) : {};
    var n = [],
      r = [],
      i,
      s,
      o,
      u,
      a,
      f = function (t) {
        var r, i, s, o, u;
        for (r = 0, i = t.length; r < i; r++)
          (s = t[r]),
            (o = B.type(s)),
            o === "array"
              ? f(s)
              : o === "function" && (!e.unique || !c.has(s)) && n.push(s);
      },
      l = function (t, f) {
        (f = f || []),
          (i = !e.memory || [t, f]),
          (s = !0),
          (a = o || 0),
          (o = 0),
          (u = n.length);
        for (; n && a < u; a++)
          if (n[a].apply(t, f) === !1 && e.stopOnFalse) {
            i = !0;
            break;
          }
        (s = !1),
          n &&
            (e.once
              ? i === !0
                ? c.disable()
                : (n = [])
              : r && r.length && ((i = r.shift()), c.fireWith(i[0], i[1])));
      },
      c = {
        add: function () {
          if (n) {
            var e = n.length;
            f(arguments),
              s ? (u = n.length) : i && i !== !0 && ((o = e), l(i[0], i[1]));
          }
          return this;
        },
        remove: function () {
          if (n) {
            var t = arguments,
              r = 0,
              i = t.length;
            for (; r < i; r++)
              for (var o = 0; o < n.length; o++)
                if (t[r] === n[o]) {
                  s && o <= u && (u--, o <= a && a--), n.splice(o--, 1);
                  if (e.unique) break;
                }
          }
          return this;
        },
        has: function (e) {
          if (n) {
            var t = 0,
              r = n.length;
            for (; t < r; t++) if (e === n[t]) return !0;
          }
          return !1;
        },
        empty: function () {
          n = [];
          return this;
        },
        disable: function () {
          n = r = i = t;
          return this;
        },
        disabled: function () {
          return !n;
        },
        lock: function () {
          (r = t), (!i || i === !0) && c.disable();
          return this;
        },
        locked: function () {
          return !r;
        },
        fireWith: function (t, n) {
          r && (s ? e.once || r.push([t, n]) : (!e.once || !i) && l(t, n));
          return this;
        },
        fire: function () {
          c.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!i;
        },
      };
    return c;
  };
  var F = [].slice;
  B.extend({
    Deferred: function (e) {
      var t = B.Callbacks("once memory"),
        n = B.Callbacks("once memory"),
        r = B.Callbacks("memory"),
        i = "pending",
        s = { resolve: t, reject: n, notify: r },
        o = {
          done: t.add,
          fail: n.add,
          progress: r.add,
          state: function () {
            return i;
          },
          isResolved: t.fired,
          isRejected: n.fired,
          then: function (e, t, n) {
            u.done(e).fail(t).progress(n);
            return this;
          },
          always: function () {
            u.done.apply(u, arguments).fail.apply(u, arguments);
            return this;
          },
          pipe: function (e, t, n) {
            return B.Deferred(function (r) {
              B.each(
                {
                  done: [e, "resolve"],
                  fail: [t, "reject"],
                  progress: [n, "notify"],
                },
                function (e, t) {
                  var n = t[0],
                    i = t[1],
                    s;
                  B.isFunction(n)
                    ? u[e](function () {
                        (s = n.apply(this, arguments)),
                          s && B.isFunction(s.promise)
                            ? s.promise().then(r.resolve, r.reject, r.notify)
                            : r[i + "With"](this === u ? r : this, [s]);
                      })
                    : u[e](r[i]);
                }
              );
            }).promise();
          },
          promise: function (e) {
            if (e == null) e = o;
            else for (var t in o) e[t] = o[t];
            return e;
          },
        },
        u = o.promise({}),
        a;
      for (a in s) (u[a] = s[a].fire), (u[a + "With"] = s[a].fireWith);
      u
        .done(
          function () {
            i = "resolved";
          },
          n.disable,
          r.lock
        )
        .fail(
          function () {
            i = "rejected";
          },
          t.disable,
          r.lock
        ),
        e && e.call(u, u);
      return u;
    },
    when: function (e) {
      function t(e) {
        return function (t) {
          (o[e] = arguments.length > 1 ? F.call(arguments, 0) : t),
            f.notifyWith(l, o);
        };
      }
      function n(e) {
        return function (t) {
          (r[e] = arguments.length > 1 ? F.call(arguments, 0) : t),
            --u || f.resolveWith(f, r);
        };
      }
      var r = F.call(arguments, 0),
        i = 0,
        s = r.length,
        o = Array(s),
        u = s,
        a = s,
        f = s <= 1 && e && B.isFunction(e.promise) ? e : B.Deferred(),
        l = f.promise();
      if (s > 1) {
        for (; i < s; i++)
          r[i] && r[i].promise && B.isFunction(r[i].promise)
            ? r[i].promise().then(n(i), f.reject, t(i))
            : --u;
        u || f.resolveWith(f, r);
      } else f !== e && f.resolveWith(f, s ? [e] : []);
      return l;
    },
  }),
    (B.support = (function () {
      var t,
        n,
        r,
        i,
        s,
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d = D.createElement("div"),
        v = D.documentElement;
      d.setAttribute("className", "t"),
        (d.innerHTML =
          "   <link><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'>"),
        (n = d.getElementsByTagName("*")),
        (r = d.getElementsByTagName("a")[0]);
      if (!n || !n.length || !r) return {};
      (i = D.createElement("select")),
        (s = i.appendChild(D.createElement("option"))),
        (o = d.getElementsByTagName("input")[0]),
        (t = {
          leadingWhitespace: d.firstChild.nodeType === 3,
          tbody: !d.getElementsByTagName("tbody").length,
          htmlSerialize: !!d.getElementsByTagName("link").length,
          style: /top/.test(r.getAttribute("style")),
          hrefNormalized: r.getAttribute("href") === "/a",
          opacity: /^0.55/.test(r.style.opacity),
          cssFloat: !!r.style.cssFloat,
          checkOn: o.value === "on",
          optSelected: s.selected,
          getSetAttribute: d.className !== "t",
          enctype: !!D.createElement("form").enctype,
          html5Clone:
            D.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
        }),
        (o.checked = !0),
        (t.noCloneChecked = o.cloneNode(!0).checked),
        (i.disabled = !0),
        (t.optDisabled = !s.disabled);
      try {
        delete d.test;
      } catch (m) {
        t.deleteExpando = !1;
      }
      !d.addEventListener &&
        d.attachEvent &&
        d.fireEvent &&
        (d.attachEvent("onclick", function () {
          t.noCloneEvent = !1;
        }),
        d.cloneNode(!0).fireEvent("onclick")),
        (o = D.createElement("input")),
        (o.value = "t"),
        o.setAttribute("type", "radio"),
        (t.radioValue = o.value === "t"),
        o.setAttribute("checked", "checked"),
        d.appendChild(o),
        (a = D.createDocumentFragment()),
        a.appendChild(d.lastChild),
        (t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.appendChecked = o.checked),
        a.removeChild(o),
        a.appendChild(d),
        (d.innerHTML = ""),
        e.getComputedStyle &&
          ((u = D.createElement("div")),
          (u.style.width = "0"),
          (u.style.marginRight = "0"),
          (d.style.width = "2px"),
          d.appendChild(u),
          (t.reliableMarginRight =
            (parseInt(
              (e.getComputedStyle(u, null) || { marginRight: 0 }).marginRight,
              10
            ) || 0) === 0));
      if (d.attachEvent)
        for (h in { submit: 1, change: 1, focusin: 1 })
          (c = "on" + h),
            (p = c in d),
            p ||
              (d.setAttribute(c, "return;"), (p = typeof d[c] == "function")),
            (t[h + "Bubbles"] = p);
      a.removeChild(d),
        (a = i = s = u = d = o = null),
        B(function () {
          var e,
            n,
            r,
            i,
            s,
            o,
            u,
            a,
            l,
            c,
            h,
            v = D.getElementsByTagName("body")[0];
          !v ||
            ((u = 1),
            (a =
              "position:absolute;top:0;left:0;width:1px;height:1px;margin:0;"),
            (l = "visibility:hidden;border:0;"),
            (c = "style='" + a + "border:5px solid #000;padding:0;'"),
            (h =
              "<div " +
              c +
              "><div></div></div>" +
              "<table " +
              c +
              " cellpadding='0' cellspacing='0'>" +
              "<tr><td></td></tr></table>"),
            (e = D.createElement("div")),
            (e.style.cssText =
              l +
              "width:0;height:0;position:static;top:0;margin-top:" +
              u +
              "px"),
            v.insertBefore(e, v.firstChild),
            (d = D.createElement("div")),
            e.appendChild(d),
            (d.innerHTML =
              "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>"),
            (f = d.getElementsByTagName("td")),
            (p = f[0].offsetHeight === 0),
            (f[0].style.display = ""),
            (f[1].style.display = "none"),
            (t.reliableHiddenOffsets = p && f[0].offsetHeight === 0),
            (d.innerHTML = ""),
            (d.style.width = d.style.paddingLeft = "1px"),
            (B.boxModel = t.boxModel = d.offsetWidth === 2),
            typeof d.style.zoom != "undefined" &&
              ((d.style.display = "inline"),
              (d.style.zoom = 1),
              (t.inlineBlockNeedsLayout = d.offsetWidth === 2),
              (d.style.display = ""),
              (d.innerHTML = "<div style='width:4px;'></div>"),
              (t.shrinkWrapBlocks = d.offsetWidth !== 2)),
            (d.style.cssText = a + l),
            (d.innerHTML = h),
            (n = d.firstChild),
            (r = n.firstChild),
            (s = n.nextSibling.firstChild.firstChild),
            (o = {
              doesNotAddBorder: r.offsetTop !== 5,
              doesAddBorderForTableAndCells: s.offsetTop === 5,
            }),
            (r.style.position = "fixed"),
            (r.style.top = "20px"),
            (o.fixedPosition = r.offsetTop === 20 || r.offsetTop === 15),
            (r.style.position = r.style.top = ""),
            (n.style.overflow = "hidden"),
            (n.style.position = "relative"),
            (o.subtractsBorderForOverflowNotVisible = r.offsetTop === -5),
            (o.doesNotIncludeMarginInBodyOffset = v.offsetTop !== u),
            v.removeChild(e),
            (d = e = null),
            B.extend(t, o));
        });
      return t;
    })());
  var I = /^(?:\{.*\}|\[.*\])$/,
    q = /([A-Z])/g;
  B.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (B.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (e) {
      e = e.nodeType ? B.cache[e[B.expando]] : e[B.expando];
      return !!e && !O(e);
    },
    data: function (e, n, r, i) {
      if (!!B.acceptData(e)) {
        var s,
          o,
          u,
          a = B.expando,
          f = typeof n == "string",
          l = e.nodeType,
          c = l ? B.cache : e,
          h = l ? e[a] : e[a] && a,
          p = n === "events";
        if ((!h || !c[h] || (!p && !i && !c[h].data)) && f && r === t) return;
        h || (l ? (e[a] = h = ++B.uuid) : (h = a)),
          c[h] || ((c[h] = {}), l || (c[h].toJSON = B.noop));
        if (typeof n == "object" || typeof n == "function")
          i ? (c[h] = B.extend(c[h], n)) : (c[h].data = B.extend(c[h].data, n));
        (s = o = c[h]),
          i || (o.data || (o.data = {}), (o = o.data)),
          r !== t && (o[B.camelCase(n)] = r);
        if (p && !o[n]) return s.events;
        f ? ((u = o[n]), u == null && (u = o[B.camelCase(n)])) : (u = o);
        return u;
      }
    },
    removeData: function (e, t, n) {
      if (!!B.acceptData(e)) {
        var r,
          i,
          s,
          o = B.expando,
          u = e.nodeType,
          a = u ? B.cache : e,
          f = u ? e[o] : o;
        if (!a[f]) return;
        if (t) {
          r = n ? a[f] : a[f].data;
          if (r) {
            B.isArray(t) ||
              (t in r
                ? (t = [t])
                : ((t = B.camelCase(t)),
                  t in r ? (t = [t]) : (t = t.split(" "))));
            for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
            if (!(n ? O : B.isEmptyObject)(r)) return;
          }
        }
        if (!n) {
          delete a[f].data;
          if (!O(a[f])) return;
        }
        B.support.deleteExpando || !a.setInterval ? delete a[f] : (a[f] = null),
          u &&
            (B.support.deleteExpando
              ? delete e[o]
              : e.removeAttribute
              ? e.removeAttribute(o)
              : (e[o] = null));
      }
    },
    _data: function (e, t, n) {
      return B.data(e, t, n, !0);
    },
    acceptData: function (e) {
      if (e.nodeName) {
        var t = B.noData[e.nodeName.toLowerCase()];
        if (t) return t !== !0 && e.getAttribute("classid") === t;
      }
      return !0;
    },
  }),
    B.fn.extend({
      data: function (e, n) {
        var r,
          i,
          s,
          o = null;
        if (typeof e == "undefined") {
          if (this.length) {
            o = B.data(this[0]);
            if (this[0].nodeType === 1 && !B._data(this[0], "parsedAttrs")) {
              i = this[0].attributes;
              for (var u = 0, a = i.length; u < a; u++)
                (s = i[u].name),
                  s.indexOf("data-") === 0 &&
                    ((s = B.camelCase(s.substring(5))), M(this[0], s, o[s]));
              B._data(this[0], "parsedAttrs", !0);
            }
          }
          return o;
        }
        if (typeof e == "object")
          return this.each(function () {
            B.data(this, e);
          });
        (r = e.split(".")), (r[1] = r[1] ? "." + r[1] : "");
        if (n === t) {
          (o = this.triggerHandler("getData" + r[1] + "!", [r[0]])),
            o === t &&
              this.length &&
              ((o = B.data(this[0], e)), (o = M(this[0], e, o)));
          return o === t && r[1] ? this.data(r[0]) : o;
        }
        return this.each(function () {
          var t = B(this),
            i = [r[0], n];
          t.triggerHandler("setData" + r[1] + "!", i),
            B.data(this, e, n),
            t.triggerHandler("changeData" + r[1] + "!", i);
        });
      },
      removeData: function (e) {
        return this.each(function () {
          B.removeData(this, e);
        });
      },
    }),
    B.extend({
      _mark: function (e, t) {
        e &&
          ((t = (t || "fx") + "mark"), B._data(e, t, (B._data(e, t) || 0) + 1));
      },
      _unmark: function (e, t, n) {
        e !== !0 && ((n = t), (t = e), (e = !1));
        if (t) {
          n = n || "fx";
          var r = n + "mark",
            i = e ? 0 : (B._data(t, r) || 1) - 1;
          i ? B._data(t, r, i) : (B.removeData(t, r, !0), A(t, n, "mark"));
        }
      },
      queue: function (e, t, n) {
        var r;
        if (e) {
          (t = (t || "fx") + "queue"),
            (r = B._data(e, t)),
            n &&
              (!r || B.isArray(n)
                ? (r = B._data(e, t, B.makeArray(n)))
                : r.push(n));
          return r || [];
        }
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = B.queue(e, t),
          r = n.shift(),
          i = {};
        r === "inprogress" && (r = n.shift()),
          r &&
            (t === "fx" && n.unshift("inprogress"),
            B._data(e, t + ".run", i),
            r.call(
              e,
              function () {
                B.dequeue(e, t);
              },
              i
            )),
          n.length ||
            (B.removeData(e, t + "queue " + t + ".run", !0), A(e, t, "queue"));
      },
    }),
    B.fn.extend({
      queue: function (e, n) {
        typeof e != "string" && ((n = e), (e = "fx"));
        if (n === t) return B.queue(this[0], e);
        return this.each(function () {
          var t = B.queue(this, e, n);
          e === "fx" && t[0] !== "inprogress" && B.dequeue(this, e);
        });
      },
      dequeue: function (e) {
        return this.each(function () {
          B.dequeue(this, e);
        });
      },
      delay: function (e, t) {
        (e = B.fx ? B.fx.speeds[e] || e : e), (t = t || "fx");
        return this.queue(t, function (t, n) {
          var r = setTimeout(t, e);
          n.stop = function () {
            clearTimeout(r);
          };
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, n) {
        function r() {
          --u || i.resolveWith(s, [s]);
        }
        typeof e != "string" && ((n = e), (e = t)), (e = e || "fx");
        var i = B.Deferred(),
          s = this,
          o = s.length,
          u = 1,
          a = e + "defer",
          f = e + "queue",
          l = e + "mark",
          c;
        while (o--)
          if (
            (c =
              B.data(s[o], a, t, !0) ||
              ((B.data(s[o], f, t, !0) || B.data(s[o], l, t, !0)) &&
                B.data(s[o], a, B.Callbacks("once memory"), !0)))
          )
            u++, c.add(r);
        r();
        return i.promise();
      },
    });
  var R = /[\n\t\r]/g,
    U = /\s+/,
    z = /\r/g,
    W = /^(?:button|input)$/i,
    X = /^(?:button|input|object|select|textarea)$/i,
    V = /^a(?:rea)?$/i,
    $ =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    J = B.support.getSetAttribute,
    K,
    Q,
    G;
  B.fn.extend({
    attr: function (e, t) {
      return B.access(this, e, t, !0, B.attr);
    },
    removeAttr: function (e) {
      return this.each(function () {
        B.removeAttr(this, e);
      });
    },
    prop: function (e, t) {
      return B.access(this, e, t, !0, B.prop);
    },
    removeProp: function (e) {
      e = B.propFix[e] || e;
      return this.each(function () {
        try {
          (this[e] = t), delete this[e];
        } catch (n) {}
      });
    },
    addClass: function (e) {
      var t, n, r, i, s, o, u;
      if (B.isFunction(e))
        return this.each(function (t) {
          B(this).addClass(e.call(this, t, this.className));
        });
      if (e && typeof e == "string") {
        t = e.split(U);
        for (n = 0, r = this.length; n < r; n++) {
          i = this[n];
          if (i.nodeType === 1)
            if (!i.className && t.length === 1) i.className = e;
            else {
              s = " " + i.className + " ";
              for (o = 0, u = t.length; o < u; o++)
                ~s.indexOf(" " + t[o] + " ") || (s += t[o] + " ");
              i.className = B.trim(s);
            }
        }
      }
      return this;
    },
    removeClass: function (e) {
      var n, r, i, s, o, u, a;
      if (B.isFunction(e))
        return this.each(function (t) {
          B(this).removeClass(e.call(this, t, this.className));
        });
      if ((e && typeof e == "string") || e === t) {
        n = (e || "").split(U);
        for (r = 0, i = this.length; r < i; r++) {
          s = this[r];
          if (s.nodeType === 1 && s.className)
            if (e) {
              o = (" " + s.className + " ").replace(R, " ");
              for (u = 0, a = n.length; u < a; u++)
                o = o.replace(" " + n[u] + " ", " ");
              s.className = B.trim(o);
            } else s.className = "";
        }
      }
      return this;
    },
    toggleClass: function (e, t) {
      var n = typeof e,
        r = typeof t == "boolean";
      if (B.isFunction(e))
        return this.each(function (n) {
          B(this).toggleClass(e.call(this, n, this.className, t), t);
        });
      return this.each(function () {
        if (n === "string") {
          var i,
            s = 0,
            o = B(this),
            u = t,
            a = e.split(U);
          while ((i = a[s++]))
            (u = r ? u : !o.hasClass(i)), o[u ? "addClass" : "removeClass"](i);
        } else if (n === "undefined" || n === "boolean") this.className && B._data(this, "__className__", this.className), (this.className = this.className || e === !1 ? "" : B._data(this, "__className__") || "");
      });
    },
    hasClass: function (e) {
      var t = " " + e + " ",
        n = 0,
        r = this.length;
      for (; n < r; n++)
        if (
          this[n].nodeType === 1 &&
          (" " + this[n].className + " ").replace(R, " ").indexOf(t) > -1
        )
          return !0;
      return !1;
    },
    val: function (e) {
      var n,
        r,
        i,
        s = this[0];
      {
        if (!!arguments.length) {
          i = B.isFunction(e);
          return this.each(function (r) {
            var s = B(this),
              o;
            if (this.nodeType === 1) {
              i ? (o = e.call(this, r, s.val())) : (o = e),
                o == null
                  ? (o = "")
                  : typeof o == "number"
                  ? (o += "")
                  : B.isArray(o) &&
                    (o = B.map(o, function (e) {
                      return e == null ? "" : e + "";
                    })),
                (n =
                  B.valHooks[this.nodeName.toLowerCase()] ||
                  B.valHooks[this.type]);
              if (!n || !("set" in n) || n.set(this, o, "value") === t)
                this.value = o;
            }
          });
        }
        if (s) {
          n = B.valHooks[s.nodeName.toLowerCase()] || B.valHooks[s.type];
          if (n && "get" in n && (r = n.get(s, "value")) !== t) return r;
          r = s.value;
          return typeof r == "string" ? r.replace(z, "") : r == null ? "" : r;
        }
      }
    },
  }),
    B.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = e.attributes.value;
            return !t || t.specified ? e.value : e.text;
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i,
              s = e.selectedIndex,
              o = [],
              u = e.options,
              a = e.type === "select-one";
            if (s < 0) return null;
            (n = a ? s : 0), (r = a ? s + 1 : u.length);
            for (; n < r; n++) {
              i = u[n];
              if (
                i.selected &&
                (B.support.optDisabled
                  ? !i.disabled
                  : i.getAttribute("disabled") === null) &&
                (!i.parentNode.disabled ||
                  !B.nodeName(i.parentNode, "optgroup"))
              ) {
                t = B(i).val();
                if (a) return t;
                o.push(t);
              }
            }
            if (a && !o.length && u.length) return B(u[s]).val();
            return o;
          },
          set: function (e, t) {
            var n = B.makeArray(t);
            B(e)
              .find("option")
              .each(function () {
                this.selected = B.inArray(B(this).val(), n) >= 0;
              }),
              n.length || (e.selectedIndex = -1);
            return n;
          },
        },
      },
      attrFn: {
        val: !0,
        css: !0,
        html: !0,
        text: !0,
        data: !0,
        width: !0,
        height: !0,
        offset: !0,
      },
      attr: function (e, n, r, i) {
        var s,
          o,
          u,
          a = e.nodeType;
        if (!!e && a !== 3 && a !== 8 && a !== 2) {
          if (i && n in B.attrFn) return B(e)[n](r);
          if (typeof e.getAttribute == "undefined") return B.prop(e, n, r);
          (u = a !== 1 || !B.isXMLDoc(e)),
            u &&
              ((n = n.toLowerCase()),
              (o = B.attrHooks[n] || ($.test(n) ? Q : K)));
          if (r !== t) {
            if (r === null) {
              B.removeAttr(e, n);
              return;
            }
            if (o && "set" in o && u && (s = o.set(e, r, n)) !== t) return s;
            e.setAttribute(n, "" + r);
            return r;
          }
          if (o && "get" in o && u && (s = o.get(e, n)) !== null) return s;
          s = e.getAttribute(n);
          return s === null ? t : s;
        }
      },
      removeAttr: function (e, t) {
        var n,
          r,
          i,
          s,
          o = 0;
        if (t && e.nodeType === 1) {
          (r = t.toLowerCase().split(U)), (s = r.length);
          for (; o < s; o++)
            (i = r[o]),
              i &&
                ((n = B.propFix[i] || i),
                B.attr(e, i, ""),
                e.removeAttribute(J ? i : n),
                $.test(i) && n in e && (e[n] = !1));
        }
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (W.test(e.nodeName) && e.parentNode)
              B.error("type property can't be changed");
            else if (
              !B.support.radioValue &&
              t === "radio" &&
              B.nodeName(e, "input")
            ) {
              var n = e.value;
              e.setAttribute("type", t), n && (e.value = n);
              return t;
            }
          },
        },
        value: {
          get: function (e, t) {
            if (K && B.nodeName(e, "button")) return K.get(e, t);
            return t in e ? e.value : null;
          },
          set: function (e, t, n) {
            if (K && B.nodeName(e, "button")) return K.set(e, t, n);
            e.value = t;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (e, n, r) {
        var i,
          s,
          o,
          u = e.nodeType;
        if (!!e && u !== 3 && u !== 8 && u !== 2) {
          (o = u !== 1 || !B.isXMLDoc(e)),
            o && ((n = B.propFix[n] || n), (s = B.propHooks[n]));
          return r !== t
            ? s && "set" in s && (i = s.set(e, r, n)) !== t
              ? i
              : (e[n] = r)
            : s && "get" in s && (i = s.get(e, n)) !== null
            ? i
            : e[n];
        }
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var n = e.getAttributeNode("tabindex");
            return n && n.specified
              ? parseInt(n.value, 10)
              : X.test(e.nodeName) || (V.test(e.nodeName) && e.href)
              ? 0
              : t;
          },
        },
      },
    }),
    (B.attrHooks.tabindex = B.propHooks.tabIndex),
    (Q = {
      get: function (e, n) {
        var r,
          i = B.prop(e, n);
        return i === !0 ||
          (typeof i != "boolean" &&
            (r = e.getAttributeNode(n)) &&
            r.nodeValue !== !1)
          ? n.toLowerCase()
          : t;
      },
      set: function (e, t, n) {
        var r;
        t === !1
          ? B.removeAttr(e, n)
          : ((r = B.propFix[n] || n),
            r in e && (e[r] = !0),
            e.setAttribute(n, n.toLowerCase()));
        return n;
      },
    }),
    J ||
      ((G = { name: !0, id: !0 }),
      (K = B.valHooks.button =
        {
          get: function (e, n) {
            var r;
            r = e.getAttributeNode(n);
            return r && (G[n] ? r.nodeValue !== "" : r.specified)
              ? r.nodeValue
              : t;
          },
          set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            r || ((r = D.createAttribute(n)), e.setAttributeNode(r));
            return (r.nodeValue = t + "");
          },
        }),
      (B.attrHooks.tabindex.set = K.set),
      B.each(["width", "height"], function (e, t) {
        B.attrHooks[t] = B.extend(B.attrHooks[t], {
          set: function (e, n) {
            if (n === "") {
              e.setAttribute(t, "auto");
              return n;
            }
          },
        });
      }),
      (B.attrHooks.contenteditable = {
        get: K.get,
        set: function (e, t, n) {
          t === "" && (t = "false"), K.set(e, t, n);
        },
      })),
    B.support.hrefNormalized ||
      B.each(["href", "src", "width", "height"], function (e, n) {
        B.attrHooks[n] = B.extend(B.attrHooks[n], {
          get: function (e) {
            var r = e.getAttribute(n, 2);
            return r === null ? t : r;
          },
        });
      }),
    B.support.style ||
      (B.attrHooks.style = {
        get: function (e) {
          return e.style.cssText.toLowerCase() || t;
        },
        set: function (e, t) {
          return (e.style.cssText = "" + t);
        },
      }),
    B.support.optSelected ||
      (B.propHooks.selected = B.extend(B.propHooks.selected, {
        get: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          return null;
        },
      })),
    B.support.enctype || (B.propFix.enctype = "encoding"),
    B.support.checkOn ||
      B.each(["radio", "checkbox"], function () {
        B.valHooks[this] = {
          get: function (e) {
            return e.getAttribute("value") === null ? "on" : e.value;
          },
        };
      }),
    B.each(["radio", "checkbox"], function () {
      B.valHooks[this] = B.extend(B.valHooks[this], {
        set: function (e, t) {
          if (B.isArray(t)) return (e.checked = B.inArray(B(e).val(), t) >= 0);
        },
      });
    });
  var Y = /^(?:textarea|input|select)$/i,
    Z = /^([^\.]*)?(?:\.(.+))?$/,
    et = /\bhover(\.\S+)?\b/,
    tt = /^key/,
    nt = /^(?:mouse|contextmenu)|click/,
    rt = /^(?:focusinfocus|focusoutblur)$/,
    it = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
    st = function (e) {
      var t = it.exec(e);
      t &&
        ((t[1] = (t[1] || "").toLowerCase()),
        (t[3] = t[3] && new RegExp("(?:^|\\s)" + t[3] + "(?:\\s|$)")));
      return t;
    },
    ot = function (e, t) {
      var n = e.attributes || {};
      return (
        (!t[1] || e.nodeName.toLowerCase() === t[1]) &&
        (!t[2] || (n.id || {}).value === t[2]) &&
        (!t[3] || t[3].test((n["class"] || {}).value))
      );
    },
    ut = function (e) {
      return B.event.special.hover
        ? e
        : e.replace(et, "mouseenter$1 mouseleave$1");
    };
  (B.event = {
    add: function (e, n, r, i, s) {
      var o, u, a, f, l, c, h, p, d, v, m, g;
      if (
        !(e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = B._data(e)))
      ) {
        r.handler && ((d = r), (r = d.handler)),
          r.guid || (r.guid = B.guid++),
          (a = o.events),
          a || (o.events = a = {}),
          (u = o.handle),
          u ||
            ((o.handle = u =
              function (e) {
                return typeof B != "undefined" &&
                  (!e || B.event.triggered !== e.type)
                  ? B.event.dispatch.apply(u.elem, arguments)
                  : t;
              }),
            (u.elem = e)),
          (n = B.trim(ut(n)).split(" "));
        for (f = 0; f < n.length; f++) {
          (l = Z.exec(n[f]) || []),
            (c = l[1]),
            (h = (l[2] || "").split(".").sort()),
            (g = B.event.special[c] || {}),
            (c = (s ? g.delegateType : g.bindType) || c),
            (g = B.event.special[c] || {}),
            (p = B.extend(
              {
                type: c,
                origType: l[1],
                data: i,
                handler: r,
                guid: r.guid,
                selector: s,
                quick: st(s),
                namespace: h.join("."),
              },
              d
            )),
            (m = a[c]);
          if (!m) {
            (m = a[c] = []), (m.delegateCount = 0);
            if (!g.setup || g.setup.call(e, i, h, u) === !1)
              e.addEventListener
                ? e.addEventListener(c, u, !1)
                : e.attachEvent && e.attachEvent("on" + c, u);
          }
          g.add &&
            (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)),
            s ? m.splice(m.delegateCount++, 0, p) : m.push(p),
            (B.event.global[c] = !0);
        }
        e = null;
      }
    },
    global: {},
    remove: function (e, t, n, r, i) {
      var s = B.hasData(e) && B._data(e),
        o,
        u,
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g;
      if (!!s && !!(p = s.events)) {
        t = B.trim(ut(t || "")).split(" ");
        for (o = 0; o < t.length; o++) {
          (u = Z.exec(t[o]) || []), (a = f = u[1]), (l = u[2]);
          if (!a) {
            for (a in p) B.event.remove(e, a + t[o], n, r, !0);
            continue;
          }
          (d = B.event.special[a] || {}),
            (a = (r ? d.delegateType : d.bindType) || a),
            (m = p[a] || []),
            (c = m.length),
            (l = l
              ? new RegExp(
                  "(^|\\.)" +
                    l.split(".").sort().join("\\.(?:.*\\.)?") +
                    "(\\.|$)"
                )
              : null);
          for (h = 0; h < m.length; h++)
            (g = m[h]),
              (i || f === g.origType) &&
                (!n || n.guid === g.guid) &&
                (!l || l.test(g.namespace)) &&
                (!r || r === g.selector || (r === "**" && g.selector)) &&
                (m.splice(h--, 1),
                g.selector && m.delegateCount--,
                d.remove && d.remove.call(e, g));
          m.length === 0 &&
            c !== m.length &&
            ((!d.teardown || d.teardown.call(e, l) === !1) &&
              B.removeEvent(e, a, s.handle),
            delete p[a]);
        }
        B.isEmptyObject(p) &&
          ((v = s.handle),
          v && (v.elem = null),
          B.removeData(e, ["events", "handle"], !0));
      }
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (n, r, i, s) {
      if (!i || (i.nodeType !== 3 && i.nodeType !== 8)) {
        var o = n.type || n,
          u = [],
          a,
          f,
          l,
          c,
          h,
          p,
          d,
          v,
          m,
          g;
        if (rt.test(o + B.event.triggered)) return;
        o.indexOf("!") >= 0 && ((o = o.slice(0, -1)), (f = !0)),
          o.indexOf(".") >= 0 &&
            ((u = o.split(".")), (o = u.shift()), u.sort());
        if ((!i || B.event.customEvent[o]) && !B.event.global[o]) return;
        (n =
          typeof n == "object"
            ? n[B.expando]
              ? n
              : new B.Event(o, n)
            : new B.Event(o)),
          (n.type = o),
          (n.isTrigger = !0),
          (n.exclusive = f),
          (n.namespace = u.join(".")),
          (n.namespace_re = n.namespace
            ? new RegExp("(^|\\.)" + u.join("\\.(?:.*\\.)?") + "(\\.|$)")
            : null),
          (p = o.indexOf(":") < 0 ? "on" + o : "");
        if (!i) {
          a = B.cache;
          for (l in a)
            a[l].events &&
              a[l].events[o] &&
              B.event.trigger(n, r, a[l].handle.elem, !0);
          return;
        }
        (n.result = t),
          n.target || (n.target = i),
          (r = r != null ? B.makeArray(r) : []),
          r.unshift(n),
          (d = B.event.special[o] || {});
        if (d.trigger && d.trigger.apply(i, r) === !1) return;
        m = [[i, d.bindType || o]];
        if (!s && !d.noBubble && !B.isWindow(i)) {
          (g = d.delegateType || o),
            (c = rt.test(g + o) ? i : i.parentNode),
            (h = null);
          for (; c; c = c.parentNode) m.push([c, g]), (h = c);
          h &&
            h === i.ownerDocument &&
            m.push([h.defaultView || h.parentWindow || e, g]);
        }
        for (l = 0; l < m.length && !n.isPropagationStopped(); l++)
          (c = m[l][0]),
            (n.type = m[l][1]),
            (v = (B._data(c, "events") || {})[n.type] && B._data(c, "handle")),
            v && v.apply(c, r),
            (v = p && c[p]),
            v && B.acceptData(c) && v.apply(c, r) === !1 && n.preventDefault();
        (n.type = o),
          !s &&
            !n.isDefaultPrevented() &&
            (!d._default || d._default.apply(i.ownerDocument, r) === !1) &&
            (o !== "click" || !B.nodeName(i, "a")) &&
            B.acceptData(i) &&
            p &&
            i[o] &&
            ((o !== "focus" && o !== "blur") || n.target.offsetWidth !== 0) &&
            !B.isWindow(i) &&
            ((h = i[p]),
            h && (i[p] = null),
            (B.event.triggered = o),
            i[o](),
            (B.event.triggered = t),
            h && (i[p] = h));
        return n.result;
      }
    },
    dispatch: function (n) {
      n = B.event.fix(n || e.event);
      var r = (B._data(this, "events") || {})[n.type] || [],
        i = r.delegateCount,
        s = [].slice.call(arguments, 0),
        o = !n.exclusive && !n.namespace,
        u = [],
        a,
        f,
        l,
        c,
        h,
        p,
        d,
        v,
        m,
        g,
        y;
      (s[0] = n), (n.delegateTarget = this);
      if (i && !n.target.disabled && (!n.button || n.type !== "click")) {
        (c = B(this)), (c.context = this.ownerDocument || this);
        for (l = n.target; l != this; l = l.parentNode || this) {
          (p = {}), (v = []), (c[0] = l);
          for (a = 0; a < i; a++)
            (m = r[a]),
              (g = m.selector),
              p[g] === t && (p[g] = m.quick ? ot(l, m.quick) : c.is(g)),
              p[g] && v.push(m);
          v.length && u.push({ elem: l, matches: v });
        }
      }
      r.length > i && u.push({ elem: this, matches: r.slice(i) });
      for (a = 0; a < u.length && !n.isPropagationStopped(); a++) {
        (d = u[a]), (n.currentTarget = d.elem);
        for (
          f = 0;
          f < d.matches.length && !n.isImmediatePropagationStopped();
          f++
        ) {
          m = d.matches[f];
          if (
            o ||
            (!n.namespace && !m.namespace) ||
            (n.namespace_re && n.namespace_re.test(m.namespace))
          )
            (n.data = m.data),
              (n.handleObj = m),
              (h = (
                (B.event.special[m.origType] || {}).handle || m.handler
              ).apply(d.elem, s)),
              h !== t &&
                ((n.result = h),
                h === !1 && (n.preventDefault(), n.stopPropagation()));
        }
      }
      return n.result;
    },
    props:
      "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (e, t) {
        e.which == null &&
          (e.which = t.charCode != null ? t.charCode : t.keyCode);
        return e;
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (e, n) {
        var r,
          i,
          s,
          o = n.button,
          u = n.fromElement;
        e.pageX == null &&
          n.clientX != null &&
          ((r = e.target.ownerDocument || D),
          (i = r.documentElement),
          (s = r.body),
          (e.pageX =
            n.clientX +
            ((i && i.scrollLeft) || (s && s.scrollLeft) || 0) -
            ((i && i.clientLeft) || (s && s.clientLeft) || 0)),
          (e.pageY =
            n.clientY +
            ((i && i.scrollTop) || (s && s.scrollTop) || 0) -
            ((i && i.clientTop) || (s && s.clientTop) || 0))),
          !e.relatedTarget &&
            u &&
            (e.relatedTarget = u === e.target ? n.toElement : u),
          !e.which &&
            o !== t &&
            (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0);
        return e;
      },
    },
    fix: function (e) {
      if (e[B.expando]) return e;
      var n,
        r,
        i = e,
        s = B.event.fixHooks[e.type] || {},
        o = s.props ? this.props.concat(s.props) : this.props;
      e = B.Event(i);
      for (n = o.length; n; ) (r = o[--n]), (e[r] = i[r]);
      e.target || (e.target = i.srcElement || D),
        e.target.nodeType === 3 && (e.target = e.target.parentNode),
        e.metaKey === t && (e.metaKey = e.ctrlKey);
      return s.filter ? s.filter(e, i) : e;
    },
    special: {
      ready: { setup: B.bindReady },
      load: { noBubble: !0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (e, t, n) {
          B.isWindow(this) && (this.onbeforeunload = n);
        },
        teardown: function (e, t) {
          this.onbeforeunload === t && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (e, t, n, r) {
      var i = B.extend(new B.Event(), n, {
        type: e,
        isSimulated: !0,
        originalEvent: {},
      });
      r ? B.event.trigger(i, null, t) : B.event.dispatch.call(t, i),
        i.isDefaultPrevented() && n.preventDefault();
    },
  }),
    (B.event.handle = B.event.dispatch),
    (B.removeEvent = D.removeEventListener
      ? function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n, !1);
        }
      : function (e, t, n) {
          e.detachEvent && e.detachEvent("on" + t, n);
        }),
    (B.Event = function (e, t) {
      if (!(this instanceof B.Event)) return new B.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            e.returnValue === !1 ||
            (e.getPreventDefault && e.getPreventDefault())
              ? k
              : L))
        : (this.type = e),
        t && B.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || B.now()),
        (this[B.expando] = !0);
    }),
    (B.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = k;
        var e = this.originalEvent;
        !e || (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
      },
      stopPropagation: function () {
        this.isPropagationStopped = k;
        var e = this.originalEvent;
        !e || (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = k), this.stopPropagation();
      },
      isDefaultPrevented: L,
      isPropagationStopped: L,
      isImmediatePropagationStopped: L,
    }),
    B.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (e, t) {
        B.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n = this,
              r = e.relatedTarget,
              i = e.handleObj,
              s = i.selector,
              o;
            if (!r || (r !== n && !B.contains(n, r)))
              (e.type = i.origType),
                (o = i.handler.apply(this, arguments)),
                (e.type = t);
            return o;
          },
        };
      }
    ),
    B.support.submitBubbles ||
      (B.event.special.submit = {
        setup: function () {
          if (B.nodeName(this, "form")) return !1;
          B.event.add(this, "click._submit keypress._submit", function (e) {
            var n = e.target,
              r =
                B.nodeName(n, "input") || B.nodeName(n, "button") ? n.form : t;
            r &&
              !r._submit_attached &&
              (B.event.add(r, "submit._submit", function (e) {
                this.parentNode &&
                  !e.isTrigger &&
                  B.event.simulate("submit", this.parentNode, e, !0);
              }),
              (r._submit_attached = !0));
          });
        },
        teardown: function () {
          if (B.nodeName(this, "form")) return !1;
          B.event.remove(this, "._submit");
        },
      }),
    B.support.changeBubbles ||
      (B.event.special.change = {
        setup: function () {
          if (Y.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")
              B.event.add(this, "propertychange._change", function (e) {
                e.originalEvent.propertyName === "checked" &&
                  (this._just_changed = !0);
              }),
                B.event.add(this, "click._change", function (e) {
                  this._just_changed &&
                    !e.isTrigger &&
                    ((this._just_changed = !1),
                    B.event.simulate("change", this, e, !0));
                });
            return !1;
          }
          B.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            Y.test(t.nodeName) &&
              !t._change_attached &&
              (B.event.add(t, "change._change", function (e) {
                this.parentNode &&
                  !e.isSimulated &&
                  !e.isTrigger &&
                  B.event.simulate("change", this.parentNode, e, !0);
              }),
              (t._change_attached = !0));
          });
        },
        handle: function (e) {
          var t = e.target;
          if (
            this !== t ||
            e.isSimulated ||
            e.isTrigger ||
            (t.type !== "radio" && t.type !== "checkbox")
          )
            return e.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          B.event.remove(this, "._change");
          return Y.test(this.nodeName);
        },
      }),
    B.support.focusinBubbles ||
      B.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = 0,
          r = function (e) {
            B.event.simulate(t, e.target, B.event.fix(e), !0);
          };
        B.event.special[t] = {
          setup: function () {
            n++ === 0 && D.addEventListener(e, r, !0);
          },
          teardown: function () {
            --n === 0 && D.removeEventListener(e, r, !0);
          },
        };
      }),
    B.fn.extend({
      on: function (e, n, r, i, s) {
        var o, u;
        if (typeof e == "object") {
          typeof n != "string" && ((r = n), (n = t));
          for (u in e) this.on(u, n, r, e[u], s);
          return this;
        }
        r == null && i == null
          ? ((i = n), (r = n = t))
          : i == null &&
            (typeof n == "string"
              ? ((i = r), (r = t))
              : ((i = r), (r = n), (n = t)));
        if (i === !1) i = L;
        else if (!i) return this;
        s === 1 &&
          ((o = i),
          (i = function (e) {
            B().off(e);
            return o.apply(this, arguments);
          }),
          (i.guid = o.guid || (o.guid = B.guid++)));
        return this.each(function () {
          B.event.add(this, e, i, r, n);
        });
      },
      one: function (e, t, n, r) {
        return this.on.call(this, e, t, n, r, 1);
      },
      off: function (e, n, r) {
        if (e && e.preventDefault && e.handleObj) {
          var i = e.handleObj;
          B(e.delegateTarget).off(
            i.namespace ? i.type + "." + i.namespace : i.type,
            i.selector,
            i.handler
          );
          return this;
        }
        if (typeof e == "object") {
          for (var s in e) this.off(s, n, e[s]);
          return this;
        }
        if (n === !1 || typeof n == "function") (r = n), (n = t);
        r === !1 && (r = L);
        return this.each(function () {
          B.event.remove(this, e, r, n);
        });
      },
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      live: function (e, t, n) {
        B(this.context).on(e, this.selector, t, n);
        return this;
      },
      die: function (e, t) {
        B(this.context).off(e, this.selector || "**", t);
        return this;
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return arguments.length == 1 ? this.off(e, "**") : this.off(t, e, n);
      },
      trigger: function (e, t) {
        return this.each(function () {
          B.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        if (this[0]) return B.event.trigger(e, t, this[0], !0);
      },
      toggle: function (e) {
        var t = arguments,
          n = e.guid || B.guid++,
          r = 0,
          i = function (n) {
            var i = (B._data(this, "lastToggle" + e.guid) || 0) % r;
            B._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault();
            return t[i].apply(this, arguments) || !1;
          };
        i.guid = n;
        while (r < t.length) t[r++].guid = n;
        return this.click(i);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    B.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (e, t) {
        (B.fn[t] = function (e, n) {
          n == null && ((n = e), (e = null));
          return arguments.length > 0
            ? this.on(t, null, e, n)
            : this.trigger(t);
        }),
          B.attrFn && (B.attrFn[t] = !0),
          tt.test(t) && (B.event.fixHooks[t] = B.event.keyHooks),
          nt.test(t) && (B.event.fixHooks[t] = B.event.mouseHooks);
      }
    ),
    (function () {
      function e(e, t, n, r, s, o) {
        for (var u = 0, a = r.length; u < a; u++) {
          var f = r[u];
          if (f) {
            var l = !1;
            f = f[e];
            while (f) {
              if (f[i] === n) {
                l = r[f.sizset];
                break;
              }
              if (f.nodeType === 1) {
                o || ((f[i] = n), (f.sizset = u));
                if (typeof t != "string") {
                  if (f === t) {
                    l = !0;
                    break;
                  }
                } else if (h.filter(t, [f]).length > 0) {
                  l = f;
                  break;
                }
              }
              f = f[e];
            }
            r[u] = l;
          }
        }
      }
      function n(e, t, n, r, s, o) {
        for (var u = 0, a = r.length; u < a; u++) {
          var f = r[u];
          if (f) {
            var l = !1;
            f = f[e];
            while (f) {
              if (f[i] === n) {
                l = r[f.sizset];
                break;
              }
              f.nodeType === 1 && !o && ((f[i] = n), (f.sizset = u));
              if (f.nodeName.toLowerCase() === t) {
                l = f;
                break;
              }
              f = f[e];
            }
            r[u] = l;
          }
        }
      }
      var r =
          /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        i = "sizcache" + (Math.random() + "").replace(".", ""),
        s = 0,
        o = Object.prototype.toString,
        u = !1,
        a = !0,
        f = /\\/g,
        l = /\r\n/g,
        c = /\W/;
      [0, 0].sort(function () {
        a = !1;
        return 0;
      });
      var h = function (e, t, n, i) {
        (n = n || []), (t = t || D);
        var s = t;
        if (t.nodeType !== 1 && t.nodeType !== 9) return [];
        if (!e || typeof e != "string") return n;
        var u,
          a,
          f,
          l,
          c,
          p,
          m,
          g,
          b = !0,
          w = h.isXML(t),
          E = [],
          x = e;
        do {
          r.exec(""), (u = r.exec(x));
          if (u) {
            (x = u[3]), E.push(u[1]);
            if (u[2]) {
              l = u[3];
              break;
            }
          }
        } while (u);
        if (E.length > 1 && v.exec(e))
          if (E.length === 2 && d.relative[E[0]]) a = S(E[0] + E[1], t, i);
          else {
            a = d.relative[E[0]] ? [t] : h(E.shift(), t);
            while (E.length)
              (e = E.shift()),
                d.relative[e] && (e += E.shift()),
                (a = S(e, a, i));
          }
        else {
          !i &&
            E.length > 1 &&
            t.nodeType === 9 &&
            !w &&
            d.match.ID.test(E[0]) &&
            !d.match.ID.test(E[E.length - 1]) &&
            ((c = h.find(E.shift(), t, w)),
            (t = c.expr ? h.filter(c.expr, c.set)[0] : c.set[0]));
          if (t) {
            (c = i
              ? { expr: E.pop(), set: y(i) }
              : h.find(
                  E.pop(),
                  E.length === 1 &&
                    (E[0] === "~" || E[0] === "+") &&
                    t.parentNode
                    ? t.parentNode
                    : t,
                  w
                )),
              (a = c.expr ? h.filter(c.expr, c.set) : c.set),
              E.length > 0 ? (f = y(a)) : (b = !1);
            while (E.length)
              (p = E.pop()),
                (m = p),
                d.relative[p] ? (m = E.pop()) : (p = ""),
                m == null && (m = t),
                d.relative[p](f, m, w);
          } else f = E = [];
        }
        f || (f = a), f || h.error(p || e);
        if (o.call(f) === "[object Array]")
          if (!b) n.push.apply(n, f);
          else if (t && t.nodeType === 1)
            for (g = 0; f[g] != null; g++)
              f[g] &&
                (f[g] === !0 || (f[g].nodeType === 1 && h.contains(t, f[g]))) &&
                n.push(a[g]);
          else
            for (g = 0; f[g] != null; g++)
              f[g] && f[g].nodeType === 1 && n.push(a[g]);
        else y(f, n);
        l && (h(l, s, n, i), h.uniqueSort(n));
        return n;
      };
      (h.uniqueSort = function (e) {
        if (w) {
          (u = a), e.sort(w);
          if (u)
            for (var t = 1; t < e.length; t++)
              e[t] === e[t - 1] && e.splice(t--, 1);
        }
        return e;
      }),
        (h.matches = function (e, t) {
          return h(e, null, null, t);
        }),
        (h.matchesSelector = function (e, t) {
          return h(t, null, null, [e]).length > 0;
        }),
        (h.find = function (e, t, n) {
          var r, i, s, o, u, a;
          if (!e) return [];
          for (i = 0, s = d.order.length; i < s; i++) {
            u = d.order[i];
            if ((o = d.leftMatch[u].exec(e))) {
              (a = o[1]), o.splice(1, 1);
              if (a.substr(a.length - 1) !== "\\") {
                (o[1] = (o[1] || "").replace(f, "")), (r = d.find[u](o, t, n));
                if (r != null) {
                  e = e.replace(d.match[u], "");
                  break;
                }
              }
            }
          }
          r ||
            (r =
              typeof t.getElementsByTagName != "undefined"
                ? t.getElementsByTagName("*")
                : []);
          return { set: r, expr: e };
        }),
        (h.filter = function (e, n, r, i) {
          var s,
            o,
            u,
            a,
            f,
            l,
            c,
            p,
            v,
            m = e,
            g = [],
            y = n,
            b = n && n[0] && h.isXML(n[0]);
          while (e && n.length) {
            for (u in d.filter)
              if ((s = d.leftMatch[u].exec(e)) != null && s[2]) {
                (l = d.filter[u]), (c = s[1]), (o = !1), s.splice(1, 1);
                if (c.substr(c.length - 1) === "\\") continue;
                y === g && (g = []);
                if (d.preFilter[u]) {
                  s = d.preFilter[u](s, y, r, g, i, b);
                  if (!s) o = a = !0;
                  else if (s === !0) continue;
                }
                if (s)
                  for (p = 0; (f = y[p]) != null; p++)
                    f &&
                      ((a = l(f, s, p, y)),
                      (v = i ^ a),
                      r && a != null
                        ? v
                          ? (o = !0)
                          : (y[p] = !1)
                        : v && (g.push(f), (o = !0)));
                if (a !== t) {
                  r || (y = g), (e = e.replace(d.match[u], ""));
                  if (!o) return [];
                  break;
                }
              }
            if (e === m)
              if (o == null) h.error(e);
              else break;
            m = e;
          }
          return y;
        }),
        (h.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        });
      var p = (h.getText = function (e) {
          var t,
            n,
            r = e.nodeType,
            i = "";
          if (r) {
            if (r === 1 || r === 9) {
              if (typeof e.textContent == "string") return e.textContent;
              if (typeof e.innerText == "string")
                return e.innerText.replace(l, "");
              for (e = e.firstChild; e; e = e.nextSibling) i += p(e);
            } else if (r === 3 || r === 4) return e.nodeValue;
          } else for (t = 0; (n = e[t]); t++) n.nodeType !== 8 && (i += p(n));
          return i;
        }),
        d = (h.selectors = {
          order: ["ID", "NAME", "TAG"],
          match: {
            ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
            NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
            ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
            TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
            CHILD:
              /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
            PSEUDO:
              /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/,
          },
          leftMatch: {},
          attrMap: { class: "className", for: "htmlFor" },
          attrHandle: {
            href: function (e) {
              return e.getAttribute("href");
            },
            type: function (e) {
              return e.getAttribute("type");
            },
          },
          relative: {
            "+": function (e, t) {
              var n = typeof t == "string",
                r = n && !c.test(t),
                i = n && !r;
              r && (t = t.toLowerCase());
              for (var s = 0, o = e.length, u; s < o; s++)
                if ((u = e[s])) {
                  while ((u = u.previousSibling) && u.nodeType !== 1);
                  e[s] =
                    i || (u && u.nodeName.toLowerCase() === t)
                      ? u || !1
                      : u === t;
                }
              i && h.filter(t, e, !0);
            },
            ">": function (e, t) {
              var n,
                r = typeof t == "string",
                i = 0,
                s = e.length;
              if (r && !c.test(t)) {
                t = t.toLowerCase();
                for (; i < s; i++) {
                  n = e[i];
                  if (n) {
                    var o = n.parentNode;
                    e[i] = o.nodeName.toLowerCase() === t ? o : !1;
                  }
                }
              } else {
                for (; i < s; i++)
                  (n = e[i]),
                    n && (e[i] = r ? n.parentNode : n.parentNode === t);
                r && h.filter(t, e, !0);
              }
            },
            "": function (t, r, i) {
              var o,
                u = s++,
                a = e;
              typeof r == "string" &&
                !c.test(r) &&
                ((r = r.toLowerCase()), (o = r), (a = n)),
                a("parentNode", r, u, t, o, i);
            },
            "~": function (t, r, i) {
              var o,
                u = s++,
                a = e;
              typeof r == "string" &&
                !c.test(r) &&
                ((r = r.toLowerCase()), (o = r), (a = n)),
                a("previousSibling", r, u, t, o, i);
            },
          },
          find: {
            ID: function (e, t, n) {
              if (typeof t.getElementById != "undefined" && !n) {
                var r = t.getElementById(e[1]);
                return r && r.parentNode ? [r] : [];
              }
            },
            NAME: function (e, t) {
              if (typeof t.getElementsByName != "undefined") {
                var n = [],
                  r = t.getElementsByName(e[1]);
                for (var i = 0, s = r.length; i < s; i++)
                  r[i].getAttribute("name") === e[1] && n.push(r[i]);
                return n.length === 0 ? null : n;
              }
            },
            TAG: function (e, t) {
              if (typeof t.getElementsByTagName != "undefined")
                return t.getElementsByTagName(e[1]);
            },
          },
          preFilter: {
            CLASS: function (e, t, n, r, i, s) {
              e = " " + e[1].replace(f, "") + " ";
              if (s) return e;
              for (var o = 0, u; (u = t[o]) != null; o++)
                u &&
                  (i ^
                  (u.className &&
                    (" " + u.className + " ")
                      .replace(/[\t\n\r]/g, " ")
                      .indexOf(e) >= 0)
                    ? n || r.push(u)
                    : n && (t[o] = !1));
              return !1;
            },
            ID: function (e) {
              return e[1].replace(f, "");
            },
            TAG: function (e, t) {
              return e[1].replace(f, "").toLowerCase();
            },
            CHILD: function (e) {
              if (e[1] === "nth") {
                e[2] || h.error(e[0]), (e[2] = e[2].replace(/^\+|\s*/g, ""));
                var t = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                  (e[2] === "even" && "2n") ||
                    (e[2] === "odd" && "2n+1") ||
                    (!/\D/.test(e[2]) && "0n+" + e[2]) ||
                    e[2]
                );
                (e[2] = t[1] + (t[2] || 1) - 0), (e[3] = t[3] - 0);
              } else e[2] && h.error(e[0]);
              e[0] = s++;
              return e;
            },
            ATTR: function (e, t, n, r, i, s) {
              var o = (e[1] = e[1].replace(f, ""));
              !s && d.attrMap[o] && (e[1] = d.attrMap[o]),
                (e[4] = (e[4] || e[5] || "").replace(f, "")),
                e[2] === "~=" && (e[4] = " " + e[4] + " ");
              return e;
            },
            PSEUDO: function (e, t, n, i, s) {
              if (e[1] === "not")
                if ((r.exec(e[3]) || "").length > 1 || /^\w/.test(e[3]))
                  e[3] = h(e[3], null, null, t);
                else {
                  var o = h.filter(e[3], t, n, !0 ^ s);
                  n || i.push.apply(i, o);
                  return !1;
                }
              else if (d.match.POS.test(e[0]) || d.match.CHILD.test(e[0]))
                return !0;
              return e;
            },
            POS: function (e) {
              e.unshift(!0);
              return e;
            },
          },
          filters: {
            enabled: function (e) {
              return e.disabled === !1 && e.type !== "hidden";
            },
            disabled: function (e) {
              return e.disabled === !0;
            },
            checked: function (e) {
              return e.checked === !0;
            },
            selected: function (e) {
              e.parentNode && e.parentNode.selectedIndex;
              return e.selected === !0;
            },
            parent: function (e) {
              return !!e.firstChild;
            },
            empty: function (e) {
              return !e.firstChild;
            },
            has: function (e, t, n) {
              return !!h(n[3], e).length;
            },
            header: function (e) {
              return /h\d/i.test(e.nodeName);
            },
            text: function (e) {
              var t = e.getAttribute("type"),
                n = e.type;
              return (
                e.nodeName.toLowerCase() === "input" &&
                "text" === n &&
                (t === n || t === null)
              );
            },
            radio: function (e) {
              return e.nodeName.toLowerCase() === "input" && "radio" === e.type;
            },
            checkbox: function (e) {
              return (
                e.nodeName.toLowerCase() === "input" && "checkbox" === e.type
              );
            },
            file: function (e) {
              return e.nodeName.toLowerCase() === "input" && "file" === e.type;
            },
            password: function (e) {
              return (
                e.nodeName.toLowerCase() === "input" && "password" === e.type
              );
            },
            submit: function (e) {
              var t = e.nodeName.toLowerCase();
              return (t === "input" || t === "button") && "submit" === e.type;
            },
            image: function (e) {
              return e.nodeName.toLowerCase() === "input" && "image" === e.type;
            },
            reset: function (e) {
              var t = e.nodeName.toLowerCase();
              return (t === "input" || t === "button") && "reset" === e.type;
            },
            button: function (e) {
              var t = e.nodeName.toLowerCase();
              return (t === "input" && "button" === e.type) || t === "button";
            },
            input: function (e) {
              return /input|select|textarea|button/i.test(e.nodeName);
            },
            focus: function (e) {
              return e === e.ownerDocument.activeElement;
            },
          },
          setFilters: {
            first: function (e, t) {
              return t === 0;
            },
            last: function (e, t, n, r) {
              return t === r.length - 1;
            },
            even: function (e, t) {
              return t % 2 === 0;
            },
            odd: function (e, t) {
              return t % 2 === 1;
            },
            lt: function (e, t, n) {
              return t < n[3] - 0;
            },
            gt: function (e, t, n) {
              return t > n[3] - 0;
            },
            nth: function (e, t, n) {
              return n[3] - 0 === t;
            },
            eq: function (e, t, n) {
              return n[3] - 0 === t;
            },
          },
          filter: {
            PSEUDO: function (e, t, n, r) {
              var i = t[1],
                s = d.filters[i];
              if (s) return s(e, n, t, r);
              if (i === "contains")
                return (
                  (e.textContent || e.innerText || p([e]) || "").indexOf(
                    t[3]
                  ) >= 0
                );
              if (i === "not") {
                var o = t[3];
                for (var u = 0, a = o.length; u < a; u++)
                  if (o[u] === e) return !1;
                return !0;
              }
              h.error(i);
            },
            CHILD: function (e, t) {
              var n,
                r,
                s,
                o,
                u,
                a,
                f,
                l = t[1],
                c = e;
              switch (l) {
                case "only":
                case "first":
                  while ((c = c.previousSibling))
                    if (c.nodeType === 1) return !1;
                  if (l === "first") return !0;
                  c = e;
                case "last":
                  while ((c = c.nextSibling)) if (c.nodeType === 1) return !1;
                  return !0;
                case "nth":
                  (n = t[2]), (r = t[3]);
                  if (n === 1 && r === 0) return !0;
                  (s = t[0]), (o = e.parentNode);
                  if (o && (o[i] !== s || !e.nodeIndex)) {
                    a = 0;
                    for (c = o.firstChild; c; c = c.nextSibling)
                      c.nodeType === 1 && (c.nodeIndex = ++a);
                    o[i] = s;
                  }
                  f = e.nodeIndex - r;
                  return n === 0 ? f === 0 : f % n === 0 && f / n >= 0;
              }
            },
            ID: function (e, t) {
              return e.nodeType === 1 && e.getAttribute("id") === t;
            },
            TAG: function (e, t) {
              return (
                (t === "*" && e.nodeType === 1) ||
                (!!e.nodeName && e.nodeName.toLowerCase() === t)
              );
            },
            CLASS: function (e, t) {
              return (
                (" " + (e.className || e.getAttribute("class")) + " ").indexOf(
                  t
                ) > -1
              );
            },
            ATTR: function (e, t) {
              var n = t[1],
                r = h.attr
                  ? h.attr(e, n)
                  : d.attrHandle[n]
                  ? d.attrHandle[n](e)
                  : e[n] != null
                  ? e[n]
                  : e.getAttribute(n),
                i = r + "",
                s = t[2],
                o = t[4];
              return r == null
                ? s === "!="
                : !s && h.attr
                ? r != null
                : s === "="
                ? i === o
                : s === "*="
                ? i.indexOf(o) >= 0
                : s === "~="
                ? (" " + i + " ").indexOf(o) >= 0
                : o
                ? s === "!="
                  ? i !== o
                  : s === "^="
                  ? i.indexOf(o) === 0
                  : s === "$="
                  ? i.substr(i.length - o.length) === o
                  : s === "|="
                  ? i === o || i.substr(0, o.length + 1) === o + "-"
                  : !1
                : i && r !== !1;
            },
            POS: function (e, t, n, r) {
              var i = t[2],
                s = d.setFilters[i];
              if (s) return s(e, n, t, r);
            },
          },
        }),
        v = d.match.POS,
        m = function (e, t) {
          return "\\" + (t - 0 + 1);
        };
      for (var g in d.match)
        (d.match[g] = new RegExp(
          d.match[g].source + /(?![^\[]*\])(?![^\(]*\))/.source
        )),
          (d.leftMatch[g] = new RegExp(
            /(^(?:.|\r|\n)*?)/.source + d.match[g].source.replace(/\\(\d+)/g, m)
          ));
      var y = function (e, t) {
        e = Array.prototype.slice.call(e, 0);
        if (t) {
          t.push.apply(t, e);
          return t;
        }
        return e;
      };
      try {
        Array.prototype.slice.call(D.documentElement.childNodes, 0)[0].nodeType;
      } catch (b) {
        y = function (e, t) {
          var n = 0,
            r = t || [];
          if (o.call(e) === "[object Array]") Array.prototype.push.apply(r, e);
          else if (typeof e.length == "number")
            for (var i = e.length; n < i; n++) r.push(e[n]);
          else for (; e[n]; n++) r.push(e[n]);
          return r;
        };
      }
      var w, E;
      D.documentElement.compareDocumentPosition
        ? (w = function (e, t) {
            if (e === t) {
              u = !0;
              return 0;
            }
            if (!e.compareDocumentPosition || !t.compareDocumentPosition)
              return e.compareDocumentPosition ? -1 : 1;
            return e.compareDocumentPosition(t) & 4 ? -1 : 1;
          })
        : ((w = function (e, t) {
            if (e === t) {
              u = !0;
              return 0;
            }
            if (e.sourceIndex && t.sourceIndex)
              return e.sourceIndex - t.sourceIndex;
            var n,
              r,
              i = [],
              s = [],
              o = e.parentNode,
              a = t.parentNode,
              f = o;
            if (o === a) return E(e, t);
            if (!o) return -1;
            if (!a) return 1;
            while (f) i.unshift(f), (f = f.parentNode);
            f = a;
            while (f) s.unshift(f), (f = f.parentNode);
            (n = i.length), (r = s.length);
            for (var l = 0; l < n && l < r; l++)
              if (i[l] !== s[l]) return E(i[l], s[l]);
            return l === n ? E(e, s[l], -1) : E(i[l], t, 1);
          }),
          (E = function (e, t, n) {
            if (e === t) return n;
            var r = e.nextSibling;
            while (r) {
              if (r === t) return -1;
              r = r.nextSibling;
            }
            return 1;
          })),
        (function () {
          var e = D.createElement("div"),
            n = "script" + new Date().getTime(),
            r = D.documentElement;
          (e.innerHTML = "<a name='" + n + "'>"),
            r.insertBefore(e, r.firstChild),
            D.getElementById(n) &&
              ((d.find.ID = function (e, n, r) {
                if (typeof n.getElementById != "undefined" && !r) {
                  var i = n.getElementById(e[1]);
                  return i
                    ? i.id === e[1] ||
                      (typeof i.getAttributeNode != "undefined" &&
                        i.getAttributeNode("id").nodeValue === e[1])
                      ? [i]
                      : t
                    : [];
                }
              }),
              (d.filter.ID = function (e, t) {
                var n =
                  typeof e.getAttributeNode != "undefined" &&
                  e.getAttributeNode("id");
                return e.nodeType === 1 && n && n.nodeValue === t;
              })),
            r.removeChild(e),
            (r = e = null);
        })(),
        (function () {
          var e = D.createElement("div");
          e.appendChild(D.createComment("")),
            e.getElementsByTagName("*").length > 0 &&
              (d.find.TAG = function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if (e[1] === "*") {
                  var r = [];
                  for (var i = 0; n[i]; i++)
                    n[i].nodeType === 1 && r.push(n[i]);
                  n = r;
                }
                return n;
              }),
            (e.innerHTML = "<a href='#'></a>"),
            e.firstChild &&
              typeof e.firstChild.getAttribute != "undefined" &&
              e.firstChild.getAttribute("href") !== "#" &&
              (d.attrHandle.href = function (e) {
                return e.getAttribute("href", 2);
              }),
            (e = null);
        })(),
        D.querySelectorAll &&
          (function () {
            var e = h,
              t = D.createElement("div"),
              n = "__sizzle__";
            t.innerHTML = "<p class='TEST'></p>";
            if (
              !t.querySelectorAll ||
              t.querySelectorAll(".TEST").length !== 0
            ) {
              h = function (t, r, i, s) {
                r = r || D;
                if (!s && !h.isXML(r)) {
                  var o = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(t);
                  if (o && (r.nodeType === 1 || r.nodeType === 9)) {
                    if (o[1]) return y(r.getElementsByTagName(t), i);
                    if (o[2] && d.find.CLASS && r.getElementsByClassName)
                      return y(r.getElementsByClassName(o[2]), i);
                  }
                  if (r.nodeType === 9) {
                    if (t === "body" && r.body) return y([r.body], i);
                    if (o && o[3]) {
                      var u = r.getElementById(o[3]);
                      if (!u || !u.parentNode) return y([], i);
                      if (u.id === o[3]) return y([u], i);
                    }
                    try {
                      return y(r.querySelectorAll(t), i);
                    } catch (a) {}
                  } else if (
                    r.nodeType === 1 &&
                    r.nodeName.toLowerCase() !== "object"
                  ) {
                    var f = r,
                      l = r.getAttribute("id"),
                      c = l || n,
                      p = r.parentNode,
                      v = /^\s*[+~]/.test(t);
                    l ? (c = c.replace(/'/g, "\\$&")) : r.setAttribute("id", c),
                      v && p && (r = r.parentNode);
                    try {
                      if (!v || p)
                        return y(
                          r.querySelectorAll("[id='" + c + "'] " + t),
                          i
                        );
                    } catch (m) {
                    } finally {
                      l || f.removeAttribute("id");
                    }
                  }
                }
                return e(t, r, i, s);
              };
              for (var r in e) h[r] = e[r];
              t = null;
            }
          })(),
        (function () {
          var e = D.documentElement,
            t =
              e.matchesSelector ||
              e.mozMatchesSelector ||
              e.webkitMatchesSelector ||
              e.msMatchesSelector;
          if (t) {
            var n = !t.call(D.createElement("div"), "div"),
              r = !1;
            try {
              t.call(D.documentElement, "[test!='']:sizzle");
            } catch (i) {
              r = !0;
            }
            h.matchesSelector = function (e, i) {
              i = i.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
              if (!h.isXML(e))
                try {
                  if (r || (!d.match.PSEUDO.test(i) && !/!=/.test(i))) {
                    var s = t.call(e, i);
                    if (s || !n || (e.document && e.document.nodeType !== 11))
                      return s;
                  }
                } catch (o) {}
              return h(i, null, null, [e]).length > 0;
            };
          }
        })(),
        (function () {
          var e = D.createElement("div");
          e.innerHTML = "<div class='test e'></div><div class='test'></div>";
          if (
            !!e.getElementsByClassName &&
            e.getElementsByClassName("e").length !== 0
          ) {
            e.lastChild.className = "e";
            if (e.getElementsByClassName("e").length === 1) return;
            d.order.splice(1, 0, "CLASS"),
              (d.find.CLASS = function (e, t, n) {
                if (typeof t.getElementsByClassName != "undefined" && !n)
                  return t.getElementsByClassName(e[1]);
              }),
              (e = null);
          }
        })(),
        D.documentElement.contains
          ? (h.contains = function (e, t) {
              return e !== t && (e.contains ? e.contains(t) : !0);
            })
          : D.documentElement.compareDocumentPosition
          ? (h.contains = function (e, t) {
              return !!(e.compareDocumentPosition(t) & 16);
            })
          : (h.contains = function () {
              return !1;
            }),
        (h.isXML = function (e) {
          var t = (e ? e.ownerDocument || e : 0).documentElement;
          return t ? t.nodeName !== "HTML" : !1;
        });
      var S = function (e, t, n) {
        var r,
          i = [],
          s = "",
          o = t.nodeType ? [t] : t;
        while ((r = d.match.PSEUDO.exec(e)))
          (s += r[0]), (e = e.replace(d.match.PSEUDO, ""));
        e = d.relative[e] ? e + "*" : e;
        for (var u = 0, a = o.length; u < a; u++) h(e, o[u], i, n);
        return h.filter(s, i);
      };
      (h.attr = B.attr),
        (h.selectors.attrMap = {}),
        (B.find = h),
        (B.expr = h.selectors),
        (B.expr[":"] = B.expr.filters),
        (B.unique = h.uniqueSort),
        (B.text = h.getText),
        (B.isXMLDoc = h.isXML),
        (B.contains = h.contains);
    })();
  var at = /Until$/,
    ft = /^(?:parents|prevUntil|prevAll)/,
    lt = /,/,
    ct = /^.[^:#\[\.,]*$/,
    ht = Array.prototype.slice,
    pt = B.expr.match.POS,
    dt = { children: !0, contents: !0, next: !0, prev: !0 };
  B.fn.extend({
    find: function (e) {
      var t = this,
        n,
        r;
      if (typeof e != "string")
        return B(e).filter(function () {
          for (n = 0, r = t.length; n < r; n++)
            if (B.contains(t[n], this)) return !0;
        });
      var i = this.pushStack("", "find", e),
        s,
        o,
        u;
      for (n = 0, r = this.length; n < r; n++) {
        (s = i.length), B.find(e, this[n], i);
        if (n > 0)
          for (o = s; o < i.length; o++)
            for (u = 0; u < s; u++)
              if (i[u] === i[o]) {
                i.splice(o--, 1);
                break;
              }
      }
      return i;
    },
    has: function (e) {
      var t = B(e);
      return this.filter(function () {
        for (var e = 0, n = t.length; e < n; e++)
          if (B.contains(this, t[e])) return !0;
      });
    },
    not: function (e) {
      return this.pushStack(N(this, e, !1), "not", e);
    },
    filter: function (e) {
      return this.pushStack(N(this, e, !0), "filter", e);
    },
    is: function (e) {
      return (
        !!e &&
        (typeof e == "string"
          ? pt.test(e)
            ? B(e, this.context).index(this[0]) >= 0
            : B.filter(e, this).length > 0
          : this.filter(e).length > 0)
      );
    },
    closest: function (e, t) {
      var n = [],
        r,
        i,
        s = this[0];
      if (B.isArray(e)) {
        var o = 1;
        while (s && s.ownerDocument && s !== t) {
          for (r = 0; r < e.length; r++)
            B(s).is(e[r]) && n.push({ selector: e[r], elem: s, level: o });
          (s = s.parentNode), o++;
        }
        return n;
      }
      var u = pt.test(e) || typeof e != "string" ? B(e, t || this.context) : 0;
      for (r = 0, i = this.length; r < i; r++) {
        s = this[r];
        while (s) {
          if (u ? u.index(s) > -1 : B.find.matchesSelector(s, e)) {
            n.push(s);
            break;
          }
          s = s.parentNode;
          if (!s || !s.ownerDocument || s === t || s.nodeType === 11) break;
        }
      }
      n = n.length > 1 ? B.unique(n) : n;
      return this.pushStack(n, "closest", e);
    },
    index: function (e) {
      if (!e) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
      if (typeof e == "string") return B.inArray(this[0], B(e));
      return B.inArray(e.jquery ? e[0] : e, this);
    },
    add: function (e, t) {
      var n =
          typeof e == "string"
            ? B(e, t)
            : B.makeArray(e && e.nodeType ? [e] : e),
        r = B.merge(this.get(), n);
      return this.pushStack(C(n[0]) || C(r[0]) ? r : B.unique(r));
    },
    andSelf: function () {
      return this.add(this.prevObject);
    },
  }),
    B.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && t.nodeType !== 11 ? t : null;
        },
        parents: function (e) {
          return B.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return B.dir(e, "parentNode", n);
        },
        next: function (e) {
          return B.nth(e, 2, "nextSibling");
        },
        prev: function (e) {
          return B.nth(e, 2, "previousSibling");
        },
        nextAll: function (e) {
          return B.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return B.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return B.dir(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return B.dir(e, "previousSibling", n);
        },
        siblings: function (e) {
          return B.sibling(e.parentNode.firstChild, e);
        },
        children: function (e) {
          return B.sibling(e.firstChild);
        },
        contents: function (e) {
          return B.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : B.makeArray(e.childNodes);
        },
      },
      function (e, t) {
        B.fn[e] = function (n, r) {
          var i = B.map(this, t, n);
          at.test(e) || (r = n),
            r && typeof r == "string" && (i = B.filter(r, i)),
            (i = this.length > 1 && !dt[e] ? B.unique(i) : i),
            (this.length > 1 || lt.test(r)) && ft.test(e) && (i = i.reverse());
          return this.pushStack(i, e, ht.call(arguments).join(","));
        };
      }
    ),
    B.extend({
      filter: function (e, t, n) {
        n && (e = ":not(" + e + ")");
        return t.length === 1
          ? B.find.matchesSelector(t[0], e)
            ? [t[0]]
            : []
          : B.find.matches(e, t);
      },
      dir: function (e, n, r) {
        var i = [],
          s = e[n];
        while (
          s &&
          s.nodeType !== 9 &&
          (r === t || s.nodeType !== 1 || !B(s).is(r))
        )
          s.nodeType === 1 && i.push(s), (s = s[n]);
        return i;
      },
      nth: function (e, t, n, r) {
        t = t || 1;
        var i = 0;
        for (; e; e = e[n]) if (e.nodeType === 1 && ++i === t) break;
        return e;
      },
      sibling: function (e, t) {
        var n = [];
        for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
        return n;
      },
    });
  var vt =
      "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    mt = / jQuery\d+="(?:\d+|null)"/g,
    gt = /^\s+/,
    yt =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\>/gi,
    bt = /<([\w:]+)/,
    wt = /<tbody/i,
    Et = /<|&#?\w+;/,
    St = /<(?:script|style)/i,
    xt = /<(?:script|object|embed|option|style)/i,
    Tt = new RegExp("<(?:" + vt + ")", "i"),
    Nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ct = /\/(java|ecma)script/i,
    kt = /^\s*<!(?:\[CDATA\[|\-\-)/,
    Lt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    At = T(D);
  (Lt.optgroup = Lt.option),
    (Lt.tbody = Lt.tfoot = Lt.colgroup = Lt.caption = Lt.thead),
    (Lt.th = Lt.td),
    B.support.htmlSerialize || (Lt._default = [1, "div<div>", "</div>"]),
    B.fn.extend({
      text: function (e) {
        if (B.isFunction(e))
          return this.each(function (t) {
            var n = B(this);
            n.text(e.call(this, t, n.text()));
          });
        if (typeof e != "object" && e !== t)
          return this.empty().append(
            ((this[0] && this[0].ownerDocument) || D).createTextNode(e)
          );
        return B.text(this);
      },
      wrapAll: function (e) {
        if (B.isFunction(e))
          return this.each(function (t) {
            B(this).wrapAll(e.call(this, t));
          });
        if (this[0]) {
          var t = B(e, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstChild && e.firstChild.nodeType === 1)
                  e = e.firstChild;
                return e;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (e) {
        if (B.isFunction(e))
          return this.each(function (t) {
            B(this).wrapInner(e.call(this, t));
          });
        return this.each(function () {
          var t = B(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function (e) {
        var t = B.isFunction(e);
        return this.each(function (n) {
          B(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            B.nodeName(this, "body") || B(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (e) {
          this.nodeType === 1 && this.appendChild(e);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (e) {
          this.nodeType === 1 && this.insertBefore(e, this.firstChild);
        });
      },
      before: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this);
          });
        if (arguments.length) {
          var e = B.clean(arguments);
          e.push.apply(e, this.toArray());
          return this.pushStack(e, "before", arguments);
        }
      },
      after: function () {
        if (this[0] && this[0].parentNode)
          return this.domManip(arguments, !1, function (e) {
            this.parentNode.insertBefore(e, this.nextSibling);
          });
        if (arguments.length) {
          var e = this.pushStack(this, "after", arguments);
          e.push.apply(e, B.clean(arguments));
          return e;
        }
      },
      remove: function (e, t) {
        for (var n = 0, r; (r = this[n]) != null; n++)
          if (!e || B.filter(e, [r]).length)
            !t &&
              r.nodeType === 1 &&
              (B.cleanData(r.getElementsByTagName("*")), B.cleanData([r])),
              r.parentNode && r.parentNode.removeChild(r);
        return this;
      },
      empty: function () {
        for (var e = 0, t; (t = this[e]) != null; e++) {
          t.nodeType === 1 && B.cleanData(t.getElementsByTagName("*"));
          while (t.firstChild) t.removeChild(t.firstChild);
        }
        return this;
      },
      clone: function (e, t) {
        (e = e == null ? !1 : e), (t = t == null ? e : t);
        return this.map(function () {
          return B.clone(this, e, t);
        });
      },
      html: function (e) {
        if (e === t)
          return this[0] && this[0].nodeType === 1
            ? this[0].innerHTML.replace(mt, "")
            : null;
        if (
          typeof e == "string" &&
          !St.test(e) &&
          (B.support.leadingWhitespace || !gt.test(e)) &&
          !Lt[(bt.exec(e) || ["", ""])[1].toLowerCase()]
        ) {
          e = e.replace(yt, "<$1></$2>");
          try {
            for (var n = 0, r = this.length; n < r; n++)
              this[n].nodeType === 1 &&
                (B.cleanData(this[n].getElementsByTagName("*")),
                (this[n].innerHTML = e));
          } catch (i) {
            this.empty().append(e);
          }
        } else
          B.isFunction(e)
            ? this.each(function (t) {
                var n = B(this);
                n.html(e.call(this, t, n.html()));
              })
            : this.empty().append(e);
        return this;
      },
      replaceWith: function (e) {
        if (this[0] && this[0].parentNode) {
          if (B.isFunction(e))
            return this.each(function (t) {
              var n = B(this),
                r = n.html();
              n.replaceWith(e.call(this, t, r));
            });
          typeof e != "string" && (e = B(e).detach());
          return this.each(function () {
            var t = this.nextSibling,
              n = this.parentNode;
            B(this).remove(), t ? B(t).before(e) : B(n).append(e);
          });
        }
        return this.length
          ? this.pushStack(B(B.isFunction(e) ? e() : e), "replaceWith", e)
          : this;
      },
      detach: function (e) {
        return this.remove(e, !0);
      },
      domManip: function (e, n, r) {
        var i,
          s,
          o,
          u,
          a = e[0],
          f = [];
        if (
          !B.support.checkClone &&
          arguments.length === 3 &&
          typeof a == "string" &&
          Nt.test(a)
        )
          return this.each(function () {
            B(this).domManip(e, n, r, !0);
          });
        if (B.isFunction(a))
          return this.each(function (i) {
            var s = B(this);
            (e[0] = a.call(this, i, n ? s.html() : t)), s.domManip(e, n, r);
          });
        if (this[0]) {
          (u = a && a.parentNode),
            B.support.parentNode &&
            u &&
            u.nodeType === 11 &&
            u.childNodes.length === this.length
              ? (i = { fragment: u })
              : (i = B.buildFragment(e, this, f)),
            (o = i.fragment),
            o.childNodes.length === 1
              ? (s = o = o.firstChild)
              : (s = o.firstChild);
          if (s) {
            n = n && B.nodeName(s, "tr");
            for (var l = 0, c = this.length, h = c - 1; l < c; l++)
              r.call(
                n ? x(this[l], s) : this[l],
                i.cacheable || (c > 1 && l < h) ? B.clone(o, !0, !0) : o
              );
          }
          f.length && B.each(f, m);
        }
        return this;
      },
    }),
    (B.buildFragment = function (e, t, n) {
      var r,
        i,
        s,
        o,
        u = e[0];
      t && t[0] && (o = t[0].ownerDocument || t[0]),
        o.createDocumentFragment || (o = D),
        e.length === 1 &&
          typeof u == "string" &&
          u.length < 512 &&
          o === D &&
          u.charAt(0) === "<" &&
          !xt.test(u) &&
          (B.support.checkClone || !Nt.test(u)) &&
          (B.support.html5Clone || !Tt.test(u)) &&
          ((i = !0), (s = B.fragments[u]), s && s !== 1 && (r = s)),
        r || ((r = o.createDocumentFragment()), B.clean(e, o, r, n)),
        i && (B.fragments[u] = s ? r : 1);
      return { fragment: r, cacheable: i };
    }),
    (B.fragments = {}),
    B.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        B.fn[e] = function (n) {
          var r = [],
            i = B(n),
            s = this.length === 1 && this[0].parentNode;
          if (
            s &&
            s.nodeType === 11 &&
            s.childNodes.length === 1 &&
            i.length === 1
          ) {
            i[t](this[0]);
            return this;
          }
          for (var o = 0, u = i.length; o < u; o++) {
            var a = (o > 0 ? this.clone(!0) : this).get();
            B(i[o])[t](a), (r = r.concat(a));
          }
          return this.pushStack(r, e, i.selector);
        };
      }
    ),
    B.extend({
      clone: function (e, t, n) {
        var r,
          i,
          s,
          o =
            B.support.html5Clone || !Tt.test("<" + e.nodeName)
              ? e.cloneNode(!0)
              : g(e);
        if (
          (!B.support.noCloneEvent || !B.support.noCloneChecked) &&
          (e.nodeType === 1 || e.nodeType === 11) &&
          !B.isXMLDoc(e)
        ) {
          E(e, o), (r = w(e)), (i = w(o));
          for (s = 0; r[s]; ++s) i[s] && E(r[s], i[s]);
        }
        if (t) {
          S(e, o);
          if (n) {
            (r = w(e)), (i = w(o));
            for (s = 0; r[s]; ++s) S(r[s], i[s]);
          }
        }
        r = i = null;
        return o;
      },
      clean: function (e, t, n, r) {
        var i;
        (t = t || D),
          typeof t.createElement == "undefined" &&
            (t = t.ownerDocument || (t[0] && t[0].ownerDocument) || D);
        var s = [],
          o;
        for (var u = 0, a; (a = e[u]) != null; u++) {
          typeof a == "number" && (a += "");
          if (!a) continue;
          if (typeof a == "string")
            if (!Et.test(a)) a = t.createTextNode(a);
            else {
              a = a.replace(yt, "<$1></$2>");
              var f = (bt.exec(a) || ["", ""])[1].toLowerCase(),
                l = Lt[f] || Lt._default,
                c = l[0],
                h = t.createElement("div");
              t === D ? At.appendChild(h) : T(t).appendChild(h),
                (h.innerHTML = l[1] + a + l[2]);
              while (c--) h = h.lastChild;
              if (!B.support.tbody) {
                var p = wt.test(a),
                  d =
                    f === "table" && !p
                      ? h.firstChild && h.firstChild.childNodes
                      : l[1] === "<table>" && !p
                      ? h.childNodes
                      : [];
                for (o = d.length - 1; o >= 0; --o)
                  B.nodeName(d[o], "tbody") &&
                    !d[o].childNodes.length &&
                    d[o].parentNode.removeChild(d[o]);
              }
              !B.support.leadingWhitespace &&
                gt.test(a) &&
                h.insertBefore(t.createTextNode(gt.exec(a)[0]), h.firstChild),
                (a = h.childNodes);
            }
          var v;
          if (!B.support.appendChecked)
            if (a[0] && typeof (v = a.length) == "number")
              for (o = 0; o < v; o++) y(a[o]);
            else y(a);
          a.nodeType ? s.push(a) : (s = B.merge(s, a));
        }
        if (n) {
          i = function (e) {
            return !e.type || Ct.test(e.type);
          };
          for (u = 0; s[u]; u++)
            if (
              r &&
              B.nodeName(s[u], "script") &&
              (!s[u].type || s[u].type.toLowerCase() === "text/javascript")
            )
              r.push(
                s[u].parentNode ? s[u].parentNode.removeChild(s[u]) : s[u]
              );
            else {
              if (s[u].nodeType === 1) {
                var m = B.grep(s[u].getElementsByTagName("script"), i);
                s.splice.apply(s, [u + 1, 0].concat(m));
              }
              n.appendChild(s[u]);
            }
        }
        return s;
      },
      cleanData: function (e) {
        var t,
          n,
          r = B.cache,
          i = B.event.special,
          s = B.support.deleteExpando;
        for (var o = 0, u; (u = e[o]) != null; o++) {
          if (u.nodeName && B.noData[u.nodeName.toLowerCase()]) continue;
          n = u[B.expando];
          if (n) {
            t = r[n];
            if (t && t.events) {
              for (var a in t.events)
                i[a] ? B.event.remove(u, a) : B.removeEvent(u, a, t.handle);
              t.handle && (t.handle.elem = null);
            }
            s
              ? delete u[B.expando]
              : u.removeAttribute && u.removeAttribute(B.expando),
              delete r[n];
          }
        }
      },
    });
  var Ot = /alpha\([^)]*\)/i,
    Mt = /opacity=([^)]*)/,
    _t = /([A-Z]|^ms)/g,
    Dt = /^-?\d+(?:px)?$/i,
    Pt = /^-?\d/,
    Ht = /^([\-+])=([\-+.\de]+)/,
    Bt = { position: "absolute", visibility: "hidden", display: "block" },
    jt = ["Left", "Right"],
    Ft = ["Top", "Bottom"],
    It,
    qt,
    Rt;
  (B.fn.css = function (e, n) {
    if (arguments.length === 2 && n === t) return this;
    return B.access(this, e, n, !0, function (e, n, r) {
      return r !== t ? B.style(e, n, r) : B.css(e, n);
    });
  }),
    B.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = It(e, "opacity", "opacity");
              return n === "" ? "1" : n;
            }
            return e.style.opacity;
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: B.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (e, n, r, i) {
        if (!!e && e.nodeType !== 3 && e.nodeType !== 8 && !!e.style) {
          var s,
            o,
            u = B.camelCase(n),
            a = e.style,
            f = B.cssHooks[u];
          n = B.cssProps[u] || u;
          if (r === t) {
            if (f && "get" in f && (s = f.get(e, !1, i)) !== t) return s;
            return a[n];
          }
          (o = typeof r),
            o === "string" &&
              (s = Ht.exec(r)) &&
              ((r = +(s[1] + 1) * +s[2] + parseFloat(B.css(e, n))),
              (o = "number"));
          if (r == null || (o === "number" && isNaN(r))) return;
          o === "number" && !B.cssNumber[u] && (r += "px");
          if (!f || !("set" in f) || (r = f.set(e, r)) !== t)
            try {
              a[n] = r;
            } catch (l) {}
        }
      },
      css: function (e, n, r) {
        var i, s;
        (n = B.camelCase(n)),
          (s = B.cssHooks[n]),
          (n = B.cssProps[n] || n),
          n === "cssFloat" && (n = "float");
        if (s && "get" in s && (i = s.get(e, !0, r)) !== t) return i;
        if (It) return It(e, n);
      },
      swap: function (e, t, n) {
        var r = {};
        for (var i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
        n.call(e);
        for (i in t) e.style[i] = r[i];
      },
    }),
    (B.curCSS = B.css),
    B.each(["height", "width"], function (e, t) {
      B.cssHooks[t] = {
        get: function (e, n, r) {
          var i;
          if (n) {
            if (e.offsetWidth !== 0) return v(e, t, r);
            B.swap(e, Bt, function () {
              i = v(e, t, r);
            });
            return i;
          }
        },
        set: function (e, t) {
          if (!Dt.test(t)) return t;
          t = parseFloat(t);
          if (t >= 0) return t + "px";
        },
      };
    }),
    B.support.opacity ||
      (B.cssHooks.opacity = {
        get: function (e, t) {
          return Mt.test(
            (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100 + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var n = e.style,
            r = e.currentStyle,
            i = B.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
            s = (r && r.filter) || n.filter || "";
          n.zoom = 1;
          if (t >= 1 && B.trim(s.replace(Ot, "")) === "") {
            n.removeAttribute("filter");
            if (r && !r.filter) return;
          }
          n.filter = Ot.test(s) ? s.replace(Ot, i) : s + " " + i;
        },
      }),
    B(function () {
      B.support.reliableMarginRight ||
        (B.cssHooks.marginRight = {
          get: function (e, t) {
            var n;
            B.swap(e, { display: "inline-block" }, function () {
              t
                ? (n = It(e, "margin-right", "marginRight"))
                : (n = e.style.marginRight);
            });
            return n;
          },
        });
    }),
    D.defaultView &&
      D.defaultView.getComputedStyle &&
      (qt = function (e, t) {
        var n, r, i;
        (t = t.replace(_t, "-$1").toLowerCase()),
          (r = e.ownerDocument.defaultView) &&
            (i = r.getComputedStyle(e, null)) &&
            ((n = i.getPropertyValue(t)),
            n === "" &&
              !B.contains(e.ownerDocument.documentElement, e) &&
              (n = B.style(e, t)));
        return n;
      }),
    D.documentElement.currentStyle &&
      (Rt = function (e, t) {
        var n,
          r,
          i,
          s = e.currentStyle && e.currentStyle[t],
          o = e.style;
        s === null && o && (i = o[t]) && (s = i),
          !Dt.test(s) &&
            Pt.test(s) &&
            ((n = o.left),
            (r = e.runtimeStyle && e.runtimeStyle.left),
            r && (e.runtimeStyle.left = e.currentStyle.left),
            (o.left = t === "fontSize" ? "1em" : s || 0),
            (s = o.pixelLeft + "px"),
            (o.left = n),
            r && (e.runtimeStyle.left = r));
        return s === "" ? "auto" : s;
      }),
    (It = qt || Rt),
    B.expr &&
      B.expr.filters &&
      ((B.expr.filters.hidden = function (e) {
        var t = e.offsetWidth,
          n = e.offsetHeight;
        return (
          (t === 0 && n === 0) ||
          (!B.support.reliableHiddenOffsets &&
            ((e.style && e.style.display) || B.css(e, "display")) === "none")
        );
      }),
      (B.expr.filters.visible = function (e) {
        return !B.expr.filters.hidden(e);
      }));
  var Ut = /%20/g,
    zt = /\[\]$/,
    Wt = /\r?\n/g,
    Xt = /#.*$/,
    Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    $t =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    Jt = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    Kt = /^(?:GET|HEAD)$/,
    Qt = /^\/\//,
    Gt = /\?/,
    Yt = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    Zt = /^(?:select|textarea)/i,
    en = /\s+/,
    tn = /([?&])_=[^&]*/,
    nn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
    rn = B.fn.load,
    sn = {},
    on = {},
    un,
    an,
    fn = ["*/"] + ["*"];
  try {
    un = H.href;
  } catch (ln) {
    (un = D.createElement("a")), (un.href = ""), (un = un.href);
  }
  (an = nn.exec(un.toLowerCase()) || []),
    B.fn.extend({
      load: function (e, n, r) {
        if (typeof e != "string" && rn) return rn.apply(this, arguments);
        if (!this.length) return this;
        var i = e.indexOf(" ");
        if (i >= 0) {
          var s = e.slice(i, e.length);
          e = e.slice(0, i);
        }
        var o = "GET";
        n &&
          (B.isFunction(n)
            ? ((r = n), (n = t))
            : typeof n == "object" &&
              ((n = B.param(n, B.ajaxSettings.traditional)), (o = "POST")));
        var u = this;
        B.ajax({
          url: e,
          type: o,
          dataType: "html",
          data: n,
          complete: function (e, t, n) {
            (n = e.responseText),
              e.isResolved() &&
                (e.done(function (e) {
                  n = e;
                }),
                u.html(s ? B("<div>").append(n.replace(Yt, "")).find(s) : n)),
              r && u.each(r, [n, t, e]);
          },
        });
        return this;
      },
      serialize: function () {
        return B.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          return this.elements ? B.makeArray(this.elements) : this;
        })
          .filter(function () {
            return (
              this.name &&
              !this.disabled &&
              (this.checked || Zt.test(this.nodeName) || $t.test(this.type))
            );
          })
          .map(function (e, t) {
            var n = B(this).val();
            return n == null
              ? null
              : B.isArray(n)
              ? B.map(n, function (e, n) {
                  return { name: t.name, value: e.replace(Wt, "\r\n") };
                })
              : { name: t.name, value: n.replace(Wt, "\r\n") };
          })
          .get();
      },
    }),
    B.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (e, t) {
        B.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    B.each(["get", "post"], function (e, n) {
      B[n] = function (e, r, i, s) {
        B.isFunction(r) && ((s = s || i), (i = r), (r = t));
        return B.ajax({ type: n, url: e, data: r, success: i, dataType: s });
      };
    }),
    B.extend({
      getScript: function (e, n) {
        return B.get(e, t, n, "script");
      },
      getJSON: function (e, t, n) {
        return B.get(e, t, n, "json");
      },
      ajaxSetup: function (e, t) {
        t ? h(e, B.ajaxSettings) : ((t = e), (e = B.ajaxSettings)), h(e, t);
        return e;
      },
      ajaxSettings: {
        url: un,
        isLocal: Jt.test(an[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": fn,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": e.String,
          "text html": !0,
          "text json": B.parseJSON,
          "text xml": B.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: d(sn),
      ajaxTransport: d(on),
      ajax: function (e, n) {
        function r(e, n, r, p) {
          if (E !== 2) {
            (E = 2),
              b && clearTimeout(b),
              (y = t),
              (m = p || ""),
              (T.readyState = e > 0 ? 4 : 0);
            var d,
              v,
              g,
              w = n,
              x = r ? l(i, T, r) : t,
              N,
              C;
            if ((e >= 200 && e < 300) || e === 304) {
              if (i.ifModified) {
                if ((N = T.getResponseHeader("Last-Modified")))
                  B.lastModified[h] = N;
                if ((C = T.getResponseHeader("Etag"))) B.etag[h] = C;
              }
              if (e === 304) (w = "notmodified"), (d = !0);
              else
                try {
                  (v = f(i, x)), (w = "success"), (d = !0);
                } catch (k) {
                  (w = "parsererror"), (g = k);
                }
            } else {
              g = w;
              if (!w || e) (w = "error"), e < 0 && (e = 0);
            }
            (T.status = e),
              (T.statusText = "" + (n || w)),
              d ? u.resolveWith(s, [v, w, T]) : u.rejectWith(s, [T, w, g]),
              T.statusCode(c),
              (c = t),
              S &&
                o.trigger("ajax" + (d ? "Success" : "Error"), [
                  T,
                  i,
                  d ? v : g,
                ]),
              a.fireWith(s, [T, w]),
              S &&
                (o.trigger("ajaxComplete", [T, i]),
                --B.active || B.event.trigger("ajaxStop"));
          }
        }
        typeof e == "object" && ((n = e), (e = t)), (n = n || {});
        var i = B.ajaxSetup({}, n),
          s = i.context || i,
          o = s !== i && (s.nodeType || s instanceof B) ? B(s) : B.event,
          u = B.Deferred(),
          a = B.Callbacks("once memory"),
          c = i.statusCode || {},
          h,
          d = {},
          v = {},
          m,
          g,
          y,
          b,
          w,
          E = 0,
          S,
          x,
          T = {
            readyState: 0,
            setRequestHeader: function (e, t) {
              if (!E) {
                var n = e.toLowerCase();
                (e = v[n] = v[n] || e), (d[e] = t);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return E === 2 ? m : null;
            },
            getResponseHeader: function (e) {
              var n;
              if (E === 2) {
                if (!g) {
                  g = {};
                  while ((n = Vt.exec(m))) g[n[1].toLowerCase()] = n[2];
                }
                n = g[e.toLowerCase()];
              }
              return n === t ? null : n;
            },
            overrideMimeType: function (e) {
              E || (i.mimeType = e);
              return this;
            },
            abort: function (e) {
              (e = e || "abort"), y && y.abort(e), r(0, e);
              return this;
            },
          };
        u.promise(T),
          (T.success = T.done),
          (T.error = T.fail),
          (T.complete = a.add),
          (T.statusCode = function (e) {
            if (e) {
              var t;
              if (E < 2) for (t in e) c[t] = [c[t], e[t]];
              else (t = e[T.status]), T.then(t, t);
            }
            return this;
          }),
          (i.url = ((e || i.url) + "")
            .replace(Xt, "")
            .replace(Qt, an[1] + "//")),
          (i.dataTypes = B.trim(i.dataType || "*")
            .toLowerCase()
            .split(en)),
          i.crossDomain == null &&
            ((w = nn.exec(i.url.toLowerCase())),
            (i.crossDomain = !(
              !w ||
              (w[1] == an[1] &&
                w[2] == an[2] &&
                (w[3] || (w[1] === "http:" ? 80 : 443)) ==
                  (an[3] || (an[1] === "http:" ? 80 : 443)))
            ))),
          i.data &&
            i.processData &&
            typeof i.data != "string" &&
            (i.data = B.param(i.data, i.traditional)),
          p(sn, i, n, T);
        if (E === 2) return !1;
        (S = i.global),
          (i.type = i.type.toUpperCase()),
          (i.hasContent = !Kt.test(i.type)),
          S && B.active++ === 0 && B.event.trigger("ajaxStart");
        if (!i.hasContent) {
          i.data &&
            ((i.url += (Gt.test(i.url) ? "&" : "?") + i.data), delete i.data),
            (h = i.url);
          if (i.cache === !1) {
            var N = B.now(),
              C = i.url.replace(tn, "$1_=" + N);
            i.url =
              C + (C === i.url ? (Gt.test(i.url) ? "&" : "?") + "_=" + N : "");
          }
        }
        ((i.data && i.hasContent && i.contentType !== !1) || n.contentType) &&
          T.setRequestHeader("Content-Type", i.contentType),
          i.ifModified &&
            ((h = h || i.url),
            B.lastModified[h] &&
              T.setRequestHeader("If-Modified-Since", B.lastModified[h]),
            B.etag[h] && T.setRequestHeader("If-None-Match", B.etag[h])),
          T.setRequestHeader(
            "Accept",
            i.dataTypes[0] && i.accepts[i.dataTypes[0]]
              ? i.accepts[i.dataTypes[0]] +
                  (i.dataTypes[0] !== "*" ? ", " + fn + "; q=0.01" : "")
              : i.accepts["*"]
          );
        for (x in i.headers) T.setRequestHeader(x, i.headers[x]);
        if (i.beforeSend && (i.beforeSend.call(s, T, i) === !1 || E === 2)) {
          T.abort();
          return !1;
        }
        for (x in { success: 1, error: 1, complete: 1 }) T[x](i[x]);
        y = p(on, i, n, T);
        if (!y) r(-1, "No Transport");
        else {
          (T.readyState = 1),
            S && o.trigger("ajaxSend", [T, i]),
            i.async &&
              i.timeout > 0 &&
              (b = setTimeout(function () {
                T.abort("timeout");
              }, i.timeout));
          try {
            (E = 1), y.send(d, r);
          } catch (k) {
            if (E < 2) r(-1, k);
            else throw k;
          }
        }
        return T;
      },
      param: function (e, n) {
        var r = [],
          i = function (e, t) {
            (t = B.isFunction(t) ? t() : t),
              (r[r.length] =
                encodeURIComponent(e) + "=" + encodeURIComponent(t));
          };
        n === t && (n = B.ajaxSettings.traditional);
        if (B.isArray(e) || (e.jquery && !B.isPlainObject(e)))
          B.each(e, function () {
            i(this.name, this.value);
          });
        else for (var s in e) c(s, e[s], n, i);
        return r.join("&").replace(Ut, "+");
      },
    }),
    B.extend({ active: 0, lastModified: {}, etag: {} });
  var cn = B.now(),
    hn = /(\=)\?(&|$)|\?\?/i;
  B.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      return B.expando + "_" + cn++;
    },
  }),
    B.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i =
        t.contentType === "application/x-www-form-urlencoded" &&
        typeof t.data == "string";
      if (
        t.dataTypes[0] === "jsonp" ||
        (t.jsonp !== !1 && (hn.test(t.url) || (i && hn.test(t.data))))
      ) {
        var s,
          o = (t.jsonpCallback = B.isFunction(t.jsonpCallback)
            ? t.jsonpCallback()
            : t.jsonpCallback),
          u = e[o],
          a = t.url,
          f = t.data,
          l = "$1" + o + "$2";
        t.jsonp !== !1 &&
          ((a = a.replace(hn, l)),
          t.url === a &&
            (i && (f = f.replace(hn, l)),
            t.data === f &&
              (a += (/\?/.test(a) ? "&" : "?") + t.jsonp + "=" + o))),
          (t.url = a),
          (t.data = f),
          (e[o] = function (e) {
            s = [e];
          }),
          r.always(function () {
            (e[o] = u), s && B.isFunction(u) && e[o](s[0]);
          }),
          (t.converters["script json"] = function () {
            s || B.error(o + " was not called");
            return s[0];
          }),
          (t.dataTypes[0] = "json");
        return "script";
      }
    }),
    B.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (e) {
          B.globalEval(e);
          return e;
        },
      },
    }),
    B.ajaxPrefilter("script", function (e) {
      e.cache === t && (e.cache = !1),
        e.crossDomain && ((e.type = "GET"), (e.global = !1));
    }),
    B.ajaxTransport("script", function (e) {
      if (e.crossDomain) {
        var n,
          r = D.head || D.getElementsByTagName("head")[0] || D.documentElement;
        return {
          send: function (i, s) {
            (n = D.createElement("script")),
              (n.async = "async"),
              e.scriptCharset && (n.charset = e.scriptCharset),
              (n.src = e.url),
              (n.onload = n.onreadystatechange =
                function (e, i) {
                  if (
                    i ||
                    !n.readyState ||
                    /loaded|complete/.test(n.readyState)
                  )
                    (n.onload = n.onreadystatechange = null),
                      r && n.parentNode && r.removeChild(n),
                      (n = t),
                      i || s(200, "success");
                }),
              r.insertBefore(n, r.firstChild);
          },
          abort: function () {
            n && n.onload(0, 1);
          },
        };
      }
    });
  var pn = e.ActiveXObject
      ? function () {
          for (var e in vn) vn[e](0, 1);
        }
      : !1,
    dn = 0,
    vn;
  (B.ajaxSettings.xhr = e.ActiveXObject
    ? function () {
        return (!this.isLocal && a()) || u();
      }
    : a),
    (function (e) {
      B.extend(B.support, { ajax: !!e, cors: !!e && "withCredentials" in e });
    })(B.ajaxSettings.xhr()),
    B.support.ajax &&
      B.ajaxTransport(function (n) {
        if (!n.crossDomain || B.support.cors) {
          var r;
          return {
            send: function (i, s) {
              var o = n.xhr(),
                u,
                a;
              n.username
                ? o.open(n.type, n.url, n.async, n.username, n.password)
                : o.open(n.type, n.url, n.async);
              if (n.xhrFields) for (a in n.xhrFields) o[a] = n.xhrFields[a];
              n.mimeType &&
                o.overrideMimeType &&
                o.overrideMimeType(n.mimeType),
                !n.crossDomain &&
                  !i["X-Requested-With"] &&
                  (i["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (a in i) o.setRequestHeader(a, i[a]);
              } catch (f) {}
              o.send((n.hasContent && n.data) || null),
                (r = function (e, i) {
                  var a, f, l, c, h;
                  try {
                    if (r && (i || o.readyState === 4)) {
                      (r = t),
                        u &&
                          ((o.onreadystatechange = B.noop), pn && delete vn[u]);
                      if (i) o.readyState !== 4 && o.abort();
                      else {
                        (a = o.status),
                          (l = o.getAllResponseHeaders()),
                          (c = {}),
                          (h = o.responseXML),
                          h && h.documentElement && (c.xml = h),
                          (c.text = o.responseText);
                        try {
                          f = o.statusText;
                        } catch (p) {
                          f = "";
                        }
                        !a && n.isLocal && !n.crossDomain
                          ? (a = c.text ? 200 : 404)
                          : a === 1223 && (a = 204);
                      }
                    }
                  } catch (d) {
                    i || s(-1, d);
                  }
                  c && s(a, f, c, l);
                }),
                !n.async || o.readyState === 4
                  ? r()
                  : ((u = ++dn),
                    pn && (vn || ((vn = {}), B(e).unload(pn)), (vn[u] = r)),
                    (o.onreadystatechange = r));
            },
            abort: function () {
              r && r(0, 1);
            },
          };
        }
      });
  var mn = {},
    gn,
    yn,
    bn = /^(?:toggle|show|hide)$/,
    wn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
    En,
    Sn = [
      ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
      ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
      ["opacity"],
    ],
    xn;
  B.fn.extend({
    show: function (e, t, n) {
      var s, o;
      if (e || e === 0) return this.animate(i("show", 3), e, t, n);
      for (var u = 0, a = this.length; u < a; u++)
        (s = this[u]),
          s.style &&
            ((o = s.style.display),
            !B._data(s, "olddisplay") &&
              o === "none" &&
              (o = s.style.display = ""),
            o === "" &&
              B.css(s, "display") === "none" &&
              B._data(s, "olddisplay", r(s.nodeName)));
      for (u = 0; u < a; u++) {
        s = this[u];
        if (s.style) {
          o = s.style.display;
          if (o === "" || o === "none")
            s.style.display = B._data(s, "olddisplay") || "";
        }
      }
      return this;
    },
    hide: function (e, t, n) {
      if (e || e === 0) return this.animate(i("hide", 3), e, t, n);
      var r,
        s,
        o = 0,
        u = this.length;
      for (; o < u; o++)
        (r = this[o]),
          r.style &&
            ((s = B.css(r, "display")),
            s !== "none" &&
              !B._data(r, "olddisplay") &&
              B._data(r, "olddisplay", s));
      for (o = 0; o < u; o++) this[o].style && (this[o].style.display = "none");
      return this;
    },
    _toggle: B.fn.toggle,
    toggle: function (e, t, n) {
      var r = typeof e == "boolean";
      B.isFunction(e) && B.isFunction(t)
        ? this._toggle.apply(this, arguments)
        : e == null || r
        ? this.each(function () {
            var t = r ? e : B(this).is(":hidden");
            B(this)[t ? "show" : "hide"]();
          })
        : this.animate(i("toggle", 3), e, t, n);
      return this;
    },
    fadeTo: function (e, t, n, r) {
      return this.filter(":hidden")
        .css("opacity", 0)
        .show()
        .end()
        .animate({ opacity: t }, e, n, r);
    },
    animate: function (e, t, n, i) {
      function s() {
        o.queue === !1 && B._mark(this);
        var t = B.extend({}, o),
          n = this.nodeType === 1,
          i = n && B(this).is(":hidden"),
          s,
          u,
          a,
          f,
          l,
          c,
          h,
          p,
          d;
        t.animatedProperties = {};
        for (a in e) {
          (s = B.camelCase(a)),
            a !== s && ((e[s] = e[a]), delete e[a]),
            (u = e[s]),
            B.isArray(u)
              ? ((t.animatedProperties[s] = u[1]), (u = e[s] = u[0]))
              : (t.animatedProperties[s] =
                  (t.specialEasing && t.specialEasing[s]) ||
                  t.easing ||
                  "swing");
          if ((u === "hide" && i) || (u === "show" && !i))
            return t.complete.call(this);
          n &&
            (s === "height" || s === "width") &&
            ((t.overflow = [
              this.style.overflow,
              this.style.overflowX,
              this.style.overflowY,
            ]),
            B.css(this, "display") === "inline" &&
              B.css(this, "float") === "none" &&
              (!B.support.inlineBlockNeedsLayout ||
              r(this.nodeName) === "inline"
                ? (this.style.display = "inline-block")
                : (this.style.zoom = 1)));
        }
        t.overflow != null && (this.style.overflow = "hidden");
        for (a in e)
          (f = new B.fx(this, t, a)),
            (u = e[a]),
            bn.test(u)
              ? ((d =
                  B._data(this, "toggle" + a) ||
                  (u === "toggle" ? (i ? "show" : "hide") : 0)),
                d
                  ? (B._data(
                      this,
                      "toggle" + a,
                      d === "show" ? "hide" : "show"
                    ),
                    f[d]())
                  : f[u]())
              : ((l = wn.exec(u)),
                (c = f.cur()),
                l
                  ? ((h = parseFloat(l[2])),
                    (p = l[3] || (B.cssNumber[a] ? "" : "px")),
                    p !== "px" &&
                      (B.style(this, a, (h || 1) + p),
                      (c = ((h || 1) / f.cur()) * c),
                      B.style(this, a, c + p)),
                    l[1] && (h = (l[1] === "-=" ? -1 : 1) * h + c),
                    f.custom(c, h, p))
                  : f.custom(c, u, ""));
        return !0;
      }
      var o = B.speed(t, n, i);
      if (B.isEmptyObject(e)) return this.each(o.complete, [!1]);
      e = B.extend({}, e);
      return o.queue === !1 ? this.each(s) : this.queue(o.queue, s);
    },
    stop: function (e, n, r) {
      typeof e != "string" && ((r = n), (n = e), (e = t)),
        n && e !== !1 && this.queue(e || "fx", []);
      return this.each(function () {
        function t(e, t, n) {
          var i = t[n];
          B.removeData(e, n, !0), i.stop(r);
        }
        var n,
          i = !1,
          s = B.timers,
          o = B._data(this);
        r || B._unmark(!0, this);
        if (e == null)
          for (n in o)
            o[n] &&
              o[n].stop &&
              n.indexOf(".run") === n.length - 4 &&
              t(this, o, n);
        else o[(n = e + ".run")] && o[n].stop && t(this, o, n);
        for (n = s.length; n--; )
          s[n].elem === this &&
            (e == null || s[n].queue === e) &&
            (r ? s[n](!0) : s[n].saveState(), (i = !0), s.splice(n, 1));
        (!r || !i) && B.dequeue(this, e);
      });
    },
  }),
    B.each(
      {
        slideDown: i("show", 1),
        slideUp: i("hide", 1),
        slideToggle: i("toggle", 1),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        B.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    B.extend({
      speed: function (e, t, n) {
        var r =
          e && typeof e == "object"
            ? B.extend({}, e)
            : {
                complete: n || (!n && t) || (B.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !B.isFunction(t) && t),
              };
        r.duration = B.fx.off
          ? 0
          : typeof r.duration == "number"
          ? r.duration
          : r.duration in B.fx.speeds
          ? B.fx.speeds[r.duration]
          : B.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        (r.old = r.complete),
          (r.complete = function (e) {
            B.isFunction(r.old) && r.old.call(this),
              r.queue ? B.dequeue(this, r.queue) : e !== !1 && B._unmark(this);
          });
        return r;
      },
      easing: {
        linear: function (e, t, n, r) {
          return n + r * e;
        },
        swing: function (e, t, n, r) {
          return (-Math.cos(e * Math.PI) / 2 + 0.5) * r + n;
        },
      },
      timers: [],
      fx: function (e, t, n) {
        (this.options = t),
          (this.elem = e),
          (this.prop = n),
          (t.orig = t.orig || {});
      },
    }),
    (B.fx.prototype = {
      update: function () {
        this.options.step && this.options.step.call(this.elem, this.now, this),
          (B.fx.step[this.prop] || B.fx.step._default)(this);
      },
      cur: function () {
        if (
          this.elem[this.prop] != null &&
          (!this.elem.style || this.elem.style[this.prop] == null)
        )
          return this.elem[this.prop];
        var e,
          t = B.css(this.elem, this.prop);
        return isNaN((e = parseFloat(t))) ? (!t || t === "auto" ? 0 : t) : e;
      },
      custom: function (e, n, r) {
        function i(e) {
          return s.step(e);
        }
        var s = this,
          u = B.fx;
        (this.startTime = xn || o()),
          (this.end = n),
          (this.now = this.start = e),
          (this.pos = this.state = 0),
          (this.unit = r || this.unit || (B.cssNumber[this.prop] ? "" : "px")),
          (i.queue = this.options.queue),
          (i.elem = this.elem),
          (i.saveState = function () {
            s.options.hide &&
              B._data(s.elem, "fxshow" + s.prop) === t &&
              B._data(s.elem, "fxshow" + s.prop, s.start);
          }),
          i() &&
            B.timers.push(i) &&
            !En &&
            (En = setInterval(u.tick, u.interval));
      },
      show: function () {
        var e = B._data(this.elem, "fxshow" + this.prop);
        (this.options.orig[this.prop] = e || B.style(this.elem, this.prop)),
          (this.options.show = !0),
          e !== t
            ? this.custom(this.cur(), e)
            : this.custom(
                this.prop === "width" || this.prop === "height" ? 1 : 0,
                this.cur()
              ),
          B(this.elem).show();
      },
      hide: function () {
        (this.options.orig[this.prop] =
          B._data(this.elem, "fxshow" + this.prop) ||
          B.style(this.elem, this.prop)),
          (this.options.hide = !0),
          this.custom(this.cur(), 0);
      },
      step: function (e) {
        var t,
          n,
          r,
          i = xn || o(),
          s = !0,
          u = this.elem,
          a = this.options;
        if (e || i >= a.duration + this.startTime) {
          (this.now = this.end),
            (this.pos = this.state = 1),
            this.update(),
            (a.animatedProperties[this.prop] = !0);
          for (t in a.animatedProperties)
            a.animatedProperties[t] !== !0 && (s = !1);
          if (s) {
            a.overflow != null &&
              !B.support.shrinkWrapBlocks &&
              B.each(["", "X", "Y"], function (e, t) {
                u.style["overflow" + t] = a.overflow[e];
              }),
              a.hide && B(u).hide();
            if (a.hide || a.show)
              for (t in a.animatedProperties)
                B.style(u, t, a.orig[t]),
                  B.removeData(u, "fxshow" + t, !0),
                  B.removeData(u, "toggle" + t, !0);
            (r = a.complete), r && ((a.complete = !1), r.call(u));
          }
          return !1;
        }
        a.duration == Infinity
          ? (this.now = i)
          : ((n = i - this.startTime),
            (this.state = n / a.duration),
            (this.pos = B.easing[a.animatedProperties[this.prop]](
              this.state,
              n,
              0,
              1,
              a.duration
            )),
            (this.now = this.start + (this.end - this.start) * this.pos)),
          this.update();
        return !0;
      },
    }),
    B.extend(B.fx, {
      tick: function () {
        var e,
          t = B.timers,
          n = 0;
        for (; n < t.length; n++)
          (e = t[n]), !e() && t[n] === e && t.splice(n--, 1);
        t.length || B.fx.stop();
      },
      interval: 13,
      stop: function () {
        clearInterval(En), (En = null);
      },
      speeds: { slow: 600, fast: 200, _default: 400 },
      step: {
        opacity: function (e) {
          B.style(e.elem, "opacity", e.now);
        },
        _default: function (e) {
          e.elem.style && e.elem.style[e.prop] != null
            ? (e.elem.style[e.prop] = e.now + e.unit)
            : (e.elem[e.prop] = e.now);
        },
      },
    }),
    B.each(["width", "height"], function (e, t) {
      B.fx.step[t] = function (e) {
        B.style(e.elem, t, Math.max(0, e.now) + e.unit);
      };
    }),
    B.expr &&
      B.expr.filters &&
      (B.expr.filters.animated = function (e) {
        return B.grep(B.timers, function (t) {
          return e === t.elem;
        }).length;
      });
  var Tn = /^t(?:able|d|h)$/i,
    Nn = /^(?:body|html)$/i;
  "getBoundingClientRect" in D.documentElement
    ? (B.fn.offset = function (e) {
        var t = this[0],
          r;
        if (e)
          return this.each(function (t) {
            B.offset.setOffset(this, e, t);
          });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
        try {
          r = t.getBoundingClientRect();
        } catch (i) {}
        var s = t.ownerDocument,
          o = s.documentElement;
        if (!r || !B.contains(o, t))
          return r ? { top: r.top, left: r.left } : { top: 0, left: 0 };
        var u = s.body,
          a = n(s),
          f = o.clientTop || u.clientTop || 0,
          l = o.clientLeft || u.clientLeft || 0,
          c =
            a.pageYOffset || (B.support.boxModel && o.scrollTop) || u.scrollTop,
          h =
            a.pageXOffset ||
            (B.support.boxModel && o.scrollLeft) ||
            u.scrollLeft,
          p = r.top + c - f,
          d = r.left + h - l;
        return { top: p, left: d };
      })
    : (B.fn.offset = function (e) {
        var t = this[0];
        if (e)
          return this.each(function (t) {
            B.offset.setOffset(this, e, t);
          });
        if (!t || !t.ownerDocument) return null;
        if (t === t.ownerDocument.body) return B.offset.bodyOffset(t);
        var n,
          r = t.offsetParent,
          i = t,
          s = t.ownerDocument,
          o = s.documentElement,
          u = s.body,
          a = s.defaultView,
          f = a ? a.getComputedStyle(t, null) : t.currentStyle,
          l = t.offsetTop,
          c = t.offsetLeft;
        while ((t = t.parentNode) && t !== u && t !== o) {
          if (B.support.fixedPosition && f.position === "fixed") break;
          (n = a ? a.getComputedStyle(t, null) : t.currentStyle),
            (l -= t.scrollTop),
            (c -= t.scrollLeft),
            t === r &&
              ((l += t.offsetTop),
              (c += t.offsetLeft),
              B.support.doesNotAddBorder &&
                (!B.support.doesAddBorderForTableAndCells ||
                  !Tn.test(t.nodeName)) &&
                ((l += parseFloat(n.borderTopWidth) || 0),
                (c += parseFloat(n.borderLeftWidth) || 0)),
              (i = r),
              (r = t.offsetParent)),
            B.support.subtractsBorderForOverflowNotVisible &&
              n.overflow !== "visible" &&
              ((l += parseFloat(n.borderTopWidth) || 0),
              (c += parseFloat(n.borderLeftWidth) || 0)),
            (f = n);
        }
        if (f.position === "relative" || f.position === "static")
          (l += u.offsetTop), (c += u.offsetLeft);
        B.support.fixedPosition &&
          f.position === "fixed" &&
          ((l += Math.max(o.scrollTop, u.scrollTop)),
          (c += Math.max(o.scrollLeft, u.scrollLeft)));
        return { top: l, left: c };
      }),
    (B.offset = {
      bodyOffset: function (e) {
        var t = e.offsetTop,
          n = e.offsetLeft;
        B.support.doesNotIncludeMarginInBodyOffset &&
          ((t += parseFloat(B.css(e, "marginTop")) || 0),
          (n += parseFloat(B.css(e, "marginLeft")) || 0));
        return { top: t, left: n };
      },
      setOffset: function (e, t, n) {
        var r = B.css(e, "position");
        r === "static" && (e.style.position = "relative");
        var i = B(e),
          s = i.offset(),
          o = B.css(e, "top"),
          u = B.css(e, "left"),
          a =
            (r === "absolute" || r === "fixed") &&
            B.inArray("auto", [o, u]) > -1,
          f = {},
          l = {},
          c,
          h;
        a
          ? ((l = i.position()), (c = l.top), (h = l.left))
          : ((c = parseFloat(o) || 0), (h = parseFloat(u) || 0)),
          B.isFunction(t) && (t = t.call(e, n, s)),
          t.top != null && (f.top = t.top - s.top + c),
          t.left != null && (f.left = t.left - s.left + h),
          "using" in t ? t.using.call(e, f) : i.css(f);
      },
    }),
    B.fn.extend({
      position: function () {
        if (!this[0]) return null;
        var e = this[0],
          t = this.offsetParent(),
          n = this.offset(),
          r = Nn.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
        (n.top -= parseFloat(B.css(e, "marginTop")) || 0),
          (n.left -= parseFloat(B.css(e, "marginLeft")) || 0),
          (r.top += parseFloat(B.css(t[0], "borderTopWidth")) || 0),
          (r.left += parseFloat(B.css(t[0], "borderLeftWidth")) || 0);
        return { top: n.top - r.top, left: n.left - r.left };
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent || D.body;
          while (e && !Nn.test(e.nodeName) && B.css(e, "position") === "static")
            e = e.offsetParent;
          return e;
        });
      },
    }),
    B.each(["Left", "Top"], function (e, r) {
      var i = "scroll" + r;
      B.fn[i] = function (r) {
        var s, o;
        if (r === t) {
          s = this[0];
          if (!s) return null;
          o = n(s);
          return o
            ? "pageXOffset" in o
              ? o[e ? "pageYOffset" : "pageXOffset"]
              : (B.support.boxModel && o.document.documentElement[i]) ||
                o.document.body[i]
            : s[i];
        }
        return this.each(function () {
          (o = n(this)),
            o
              ? o.scrollTo(e ? B(o).scrollLeft() : r, e ? r : B(o).scrollTop())
              : (this[i] = r);
        });
      };
    }),
    B.each(["Height", "Width"], function (e, n) {
      var r = n.toLowerCase();
      (B.fn["inner" + n] = function () {
        var e = this[0];
        return e
          ? e.style
            ? parseFloat(B.css(e, r, "padding"))
            : this[r]()
          : null;
      }),
        (B.fn["outer" + n] = function (e) {
          var t = this[0];
          return t
            ? t.style
              ? parseFloat(B.css(t, r, e ? "margin" : "border"))
              : this[r]()
            : null;
        }),
        (B.fn[r] = function (e) {
          var i = this[0];
          if (!i) return e == null ? null : this;
          if (B.isFunction(e))
            return this.each(function (t) {
              var n = B(this);
              n[r](e.call(this, t, n[r]()));
            });
          if (B.isWindow(i)) {
            var s = i.document.documentElement["client" + n],
              o = i.document.body;
            return (
              (i.document.compatMode === "CSS1Compat" && s) ||
              (o && o["client" + n]) ||
              s
            );
          }
          if (i.nodeType === 9)
            return Math.max(
              i.documentElement["client" + n],
              i.body["scroll" + n],
              i.documentElement["scroll" + n],
              i.body["offset" + n],
              i.documentElement["offset" + n]
            );
          if (e === t) {
            var u = B.css(i, r),
              a = parseFloat(u);
            return B.isNumeric(a) ? a : u;
          }
          return this.css(r, typeof e == "string" ? e : e + "px");
        });
    }),
    (e.jQuery = e.$ = B),
    typeof define == "function" &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return B;
      });
})(window);
(function (e) {
  e.fn.flexisel = function (t) {
    var n = e.extend(
      {
        visibleItems: 4,
        animationSpeed: 200,
        autoPlay: false,
        autoPlaySpeed: 3e3,
        pauseOnHover: true,
        setMaxWidthAndHeight: false,
        enableResponsiveBreakpoints: true,
        clone: true,
        responsiveBreakpoints: {
          portrait: { changePoint: 480, visibleItems: 1 },
          landscape: { changePoint: 640, visibleItems: 2 },
          tablet: { changePoint: 768, visibleItems: 3 },
        },
      },
      t
    );
    var r = e(this);
    var i = e.extend(n, t);
    var s;
    var o = true;
    var u = i.visibleItems;
    var a = r.children().length;
    var f = [];
    var l = {
      init: function () {
        return this.each(function () {
          l.appendHTML();
          l.setEventHandlers();
          l.initializeItems();
        });
      },
      initializeItems: function () {
        var t = r.parent();
        var n = t.height();
        var o = r.children();
        l.sortResponsiveObject(i.responsiveBreakpoints);
        var a = t.width();
        s = a / u;
        o.width(s);
        if (i.clone) {
          o.last().insertBefore(o.first());
          o.last().insertBefore(o.first());
          r.css({ left: -s });
        }
        r.fadeIn();
        e(window).trigger("resize");
      },
      appendHTML: function () {
        r.addClass("nbs-flexisel-ul");
        r.wrap(
          "<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>"
        );
        r.find("li").addClass("nbs-flexisel-item");
        if (i.setMaxWidthAndHeight) {
          var t = e(".nbs-flexisel-item img").width();
          var n = e(".nbs-flexisel-item img").height();
          e(".nbs-flexisel-item img").css("max-width", t);
          e(".nbs-flexisel-item img").css("max-height", n);
        }
        e(
          "<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>"
        ).insertAfter(r);
        if (i.clone) {
          var s = r.children().clone();
          r.append(s);
        }
      },
      setEventHandlers: function () {
        var t = r.parent();
        var n = r.children();
        var a = t.find(e(".nbs-flexisel-nav-left"));
        var f = t.find(e(".nbs-flexisel-nav-right"));
        e(window).on("resize", function (o) {
          l.setResponsiveEvents();
          var c = e(t).width();
          var h = e(t).height();
          s = c / u;
          n.width(s);
          if (i.clone) {
            r.css({ left: -s });
          } else {
            r.css({ left: 0 });
          }
          var p = a.height() / 2;
          var d = h / 2 - p;
          a.css("top", d + "px");
          f.css("top", d + "px");
        });
        e(a).on("click", function (e) {
          l.scrollLeft();
        });
        e(f).on("click", function (e) {
          l.scrollRight();
        });
        if (i.pauseOnHover == true) {
          e(".nbs-flexisel-item").on({
            mouseenter: function () {
              o = false;
            },
            mouseleave: function () {
              o = true;
            },
          });
        }
        if (i.autoPlay == true) {
          setInterval(function () {
            if (o == true) l.scrollRight();
          }, i.autoPlaySpeed);
        }
      },
      setResponsiveEvents: function () {
        var t = e("html").width();
        if (i.enableResponsiveBreakpoints) {
          var n = f[f.length - 1].changePoint;
          for (var r in f) {
            if (t >= n) {
              u = i.visibleItems;
              break;
            } else {
              if (t < f[r].changePoint) {
                u = f[r].visibleItems;
                break;
              } else continue;
            }
          }
        }
      },
      sortResponsiveObject: function (e) {
        var t = [];
        for (var n in e) {
          t.push(e[n]);
        }
        t.sort(function (e, t) {
          return e.changePoint - t.changePoint;
        });
        f = t;
      },
      scrollLeft: function () {
        if (r.position().left < 0) {
          if (o == true) {
            o = false;
            var e = r.parent();
            var t = e.width();
            s = t / u;
            var n = r.children();
            r.animate(
              { left: "+=" + s },
              {
                queue: false,
                duration: i.animationSpeed,
                easing: "linear",
                complete: function () {
                  if (i.clone) {
                    n.last().insertBefore(n.first());
                  }
                  l.adjustScroll();
                  o = true;
                },
              }
            );
          }
        }
      },
      scrollRight: function () {
        var e = r.parent();
        var t = e.width();
        s = t / u;
        var n = s - t;
        var f = r.position().left + (a - u) * s - t;
        if (n <= Math.ceil(f) && !i.clone) {
          if (o == true) {
            o = false;
            r.animate(
              { left: "-=" + s },
              {
                queue: false,
                duration: i.animationSpeed,
                easing: "linear",
                complete: function () {
                  l.adjustScroll();
                  o = true;
                },
              }
            );
          }
        } else if (i.clone) {
          if (o == true) {
            o = false;
            var c = r.children();
            r.animate(
              { left: "-=" + s },
              {
                queue: false,
                duration: i.animationSpeed,
                easing: "linear",
                complete: function () {
                  c.first().insertAfter(c.last());
                  l.adjustScroll();
                  o = true;
                },
              }
            );
          }
        }
      },
      adjustScroll: function () {
        var e = r.parent();
        var t = r.children();
        var n = e.width();
        s = n / u;
        t.width(s);
        if (i.clone) {
          r.css({ left: -s });
        }
      },
    };
    if (l[t]) {
      return l[t].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof t === "object" || !t) {
      return l.init.apply(this);
    } else {
      e.error('Method "' + method + '" does not exist in flexisel plugin!');
    }
  };
})(jQuery)(function (e) {
  var t = function (n, r) {
    this.$form = e(n);
    this.options = e.extend({}, t.DEFAULT_OPTIONS, r);
    this.$invalidField = null;
    this.$submitButton = null;
    this.STATUS_NOT_VALIDATED = "NOT_VALIDATED";
    this.STATUS_VALIDATING = "VALIDATING";
    this.STATUS_INVALID = "INVALID";
    this.STATUS_VALID = "VALID";
    var i = (function () {
      var e = 3,
        t = document.createElement("div"),
        n = t.all || [];
      while (
        ((t.innerHTML = "<!--[if gt IE " + ++e + "]><br><![endif]-->"), n[0])
      );
      return e > 4 ? e : !e;
    })();
    var s = document.createElement("div");
    this._changeEvent = i === 9 || !("oninput" in s) ? "keyup" : "input";
    this._submitIfValid = null;
    this._init();
  };
  t.DEFAULT_OPTIONS = {
    elementClass: "bv-form",
    message: "This value is not valid",
    threshold: null,
    excluded: [":disabled", ":hidden", ":not(:visible)"],
    feedbackIcons: { valid: null, invalid: null, validating: null },
    submitButtons: '[type="submit"]',
    submitHandler: null,
    live: "enabled",
    fields: null,
  };
  t.prototype = {
    constructor: t,
    _init: function () {
      var t = this,
        n = {
          excluded: this.$form.attr("data-bv-excluded"),
          trigger: this.$form.attr("data-bv-trigger"),
          message: this.$form.attr("data-bv-message"),
          submitButtons: this.$form.attr("data-bv-submitbuttons"),
          threshold: this.$form.attr("data-bv-threshold"),
          live: this.$form.attr("data-bv-live"),
          fields: {},
          feedbackIcons: {
            valid: this.$form.attr("data-bv-feedbackicons-valid"),
            invalid: this.$form.attr("data-bv-feedbackicons-invalid"),
            validating: this.$form.attr("data-bv-feedbackicons-validating"),
          },
        },
        r,
        i,
        s,
        o,
        u,
        a,
        f;
      this.$form
        .attr("novalidate", "novalidate")
        .addClass(this.options.elementClass)
        .on("submit.bv", function (e) {
          e.preventDefault();
          t.validate();
        })
        .on("click", this.options.submitButtons, function () {
          t.$submitButton = e(this);
          t._submitIfValid = true;
        })
        .find("[name], [data-bv-field]")
        .each(function () {
          var l = e(this);
          if (t._isExcluded(l)) {
            return;
          }
          var c = l.attr("name") || l.attr("data-bv-field"),
            h = {};
          for (i in e.fn.bootstrapValidator.validators) {
            r = e.fn.bootstrapValidator.validators[i];
            s = l.attr("data-bv-" + i.toLowerCase()) + "";
            f =
              "function" == typeof r.enableByHtml5
                ? r.enableByHtml5(e(this))
                : null;
            if (
              (f && s != "false") ||
              (f !== true && ("" == s || "true" == s))
            ) {
              r.html5Attributes = r.html5Attributes || { message: "message" };
              h[i] = e.extend({}, f == true ? {} : f, h[i]);
              for (a in r.html5Attributes) {
                o = r.html5Attributes[a];
                u = l.attr("data-bv-" + i.toLowerCase() + "-" + a);
                if (u) {
                  if ("true" == u) {
                    u = true;
                  } else if ("false" == u) {
                    u = false;
                  }
                  h[i][o] = u;
                }
              }
            }
          }
          var p = {
            trigger: l.attr("data-bv-trigger"),
            message: l.attr("data-bv-message"),
            container: l.attr("data-bv-container"),
            selector: l.attr("data-bv-selector"),
            threshold: l.attr("data-bv-threshold"),
            validators: h,
          };
          if (!e.isEmptyObject(p.validators) && !e.isEmptyObject(p)) {
            l.attr("data-bv-field", c);
            n.fields[c] = e.extend({}, p, n.fields[c]);
          }
        })
        .end()
        .find(this.options.submitButtons)
        .each(function () {
          e("<input>")
            .attr("type", "hidden")
            .attr("name", e(this).attr("name"))
            .val(e(this).val())
            .appendTo(t.$form);
        });
      this.options = e.extend(true, this.options, n);
      for (var l in this.options.fields) {
        this._initField(l);
      }
      this.setLiveMode(this.options.live);
    },
    _initField: function (t) {
      if (
        this.options.fields[t] == null ||
        this.options.fields[t].validators == null
      ) {
        return;
      }
      var n = this.getFieldElements(t);
      if (n == null) {
        delete this.options.fields[t];
        return;
      }
      for (var r in this.options.fields[t].validators) {
        if (!e.fn.bootstrapValidator.validators[r]) {
          delete this.options.fields[t].validators[r];
        }
      }
      var i = this,
        s = n.attr("type"),
        o =
          "radio" == s ||
          "checkbox" == s ||
          "file" == s ||
          "SELECT" == n[0].tagName
            ? "change"
            : i._changeEvent,
        u = n.length,
        a = u == 1 || "radio" == s || "checkbox" == s;
      for (var f = 0; f < u; f++) {
        var l = e(n[f]),
          c = l.parents(".form-group"),
          h = this.options.fields[t].container
            ? c.find(this.options.fields[t].container)
            : this._getMessageContainer(l);
        if (!l.attr("data-bv-field")) {
          l.attr("data-bv-field", t);
        }
        l.on(o + ".update.bv", function () {
          i._submitIfValid = false;
          a
            ? i.updateStatus(t, i.STATUS_NOT_VALIDATED, null)
            : i.updateElementStatus(e(this), i.STATUS_NOT_VALIDATED, null);
        });
        l.data("bv.messages", h);
        for (r in this.options.fields[t].validators) {
          l.data("bv.result." + r, this.STATUS_NOT_VALIDATED);
          if (!a || f == u - 1) {
            e("<small>")
              .css("display", "none")
              .attr("data-bv-validator", r)
              .attr("data-bv-validator-for", t)
              .html(
                this.options.fields[t].validators[r].message ||
                  this.options.fields[t].message ||
                  this.options.message
              )
              .addClass("help-block")
              .appendTo(h);
          }
        }
        if (
          this.options.feedbackIcons &&
          this.options.feedbackIcons.validating &&
          this.options.feedbackIcons.invalid &&
          this.options.feedbackIcons.valid &&
          (!a || f == u - 1)
        ) {
          c.addClass("has-feedback");
          var p = e("<i>")
            .css("display", "none")
            .addClass("form-control-feedback")
            .attr("data-bv-icon-for", t)
            .insertAfter(l);
          if (c.find("label").length == 0) {
            p.css("top", 0);
          }
        }
      }
      if (this.options.fields[t]["enabled"] == null) {
        this.options.fields[t]["enabled"] = true;
      }
    },
    _getMessageContainer: function (e) {
      var t = e.parent();
      if (t.hasClass("form-group")) {
        return t;
      }
      var n = t.attr("class");
      if (!n) {
        return this._getMessageContainer(t);
      }
      n = n.split(" ");
      var r = n.length;
      for (var i = 0; i < r; i++) {
        if (
          /^col-(xs|sm|md|lg)-\d+$/.test(n[i]) ||
          /^col-(xs|sm|md|lg)-offset-\d+$/.test(n[i])
        ) {
          return t;
        }
      }
      return this._getMessageContainer(t);
    },
    _submit: function () {
      if (!this.isValid()) {
        if ("submitted" == this.options.live) {
          this.setLiveMode("enabled");
        }
        if (this.$invalidField) {
          var t = this.$invalidField.parents(".tab-pane"),
            n;
          if (t && (n = t.attr("id"))) {
            e('a[href="#' + n + '"][data-toggle="tab"]').trigger(
              "click.bs.tab.data-api"
            );
          }
          this.$invalidField.focus();
        }
        return;
      }
      if (
        this.options.submitHandler &&
        "function" == typeof this.options.submitHandler
      ) {
        this.options.submitHandler.call(
          this,
          this,
          this.$form,
          this.$submitButton
        );
      } else {
        this.disableSubmitButtons(true).defaultSubmit();
      }
    },
    _isExcluded: function (t) {
      if (this.options.excluded) {
        if ("string" == typeof this.options.excluded) {
          this.options.excluded = e.map(
            this.options.excluded.split(","),
            function (t) {
              return e.trim(t);
            }
          );
        }
        var n = this.options.excluded.length;
        for (var r = 0; r < n; r++) {
          if (
            ("string" == typeof this.options.excluded[r] &&
              t.is(this.options.excluded[r])) ||
            ("function" == typeof this.options.excluded[r] &&
              this.options.excluded[r].call(this, t, this) == true)
          ) {
            return true;
          }
        }
      }
      return false;
    },
    _exceedThreshold: function (e) {
      var t = e.attr("data-bv-field"),
        n = this.options.fields[t].threshold || this.options.threshold;
      if (!n) {
        return true;
      }
      var r = e.attr("type"),
        i =
          [
            "button",
            "checkbox",
            "file",
            "hidden",
            "image",
            "radio",
            "reset",
            "submit",
          ].indexOf(r) != -1;
      return i || e.val().length >= n;
    },
    getFieldElements: function (t) {
      var n = this.options.fields[t].selector
        ? e(this.options.fields[t].selector)
        : this.$form.find('[name="' + t + '"]');
      return n.length == 0 ? null : n;
    },
    setLiveMode: function (t) {
      this.options.live = t;
      if ("submitted" == t) {
        return this;
      }
      var n = this;
      for (var r in this.options.fields) {
        (function (i) {
          var s = n.getFieldElements(i);
          if (s) {
            var o = s.attr("type"),
              u = s.length,
              a = u == 1 || "radio" == o || "checkbox" == o,
              f =
                n.options.fields[r].trigger ||
                n.options.trigger ||
                ("radio" == o ||
                "checkbox" == o ||
                "file" == o ||
                "SELECT" == s[0].tagName
                  ? "change"
                  : n._changeEvent),
              l = e
                .map(f.split(" "), function (e) {
                  return e + ".live.bv";
                })
                .join(" ");
            for (var c = 0; c < u; c++) {
              "enabled" == t
                ? e(s[c]).on(l, function () {
                    if (n._exceedThreshold(e(this))) {
                      a
                        ? n.validateField(i)
                        : n.validateFieldElement(e(this), false);
                    }
                  })
                : e(s[c]).off(l);
            }
          }
        })(r);
      }
      return this;
    },
    disableSubmitButtons: function (e) {
      if (!e) {
        this.$form.find(this.options.submitButtons).removeAttr("disabled");
      } else if (this.options.live != "disabled") {
        this.$form
          .find(this.options.submitButtons)
          .attr("disabled", "disabled");
      }
      return this;
    },
    validate: function () {
      if (!this.options.fields) {
        return this;
      }
      this.disableSubmitButtons(true);
      for (var e in this.options.fields) {
        this.validateField(e);
      }
      if (this.$submitButton) {
        this._submit();
      }
      return this;
    },
    validateField: function (t) {
      var n = this.getFieldElements(t),
        r = n.attr("type"),
        i = "radio" == r || "checkbox" == r ? 1 : n.length;
      for (var s = 0; s < i; s++) {
        this.validateFieldElement(e(n[s]), i == 1);
      }
      return this;
    },
    validateFieldElement: function (t, n) {
      var r = this,
        i = t.attr("data-bv-field"),
        s = this.options.fields[i].validators,
        o,
        u;
      if (!this.options.fields[i]["enabled"] || this._isExcluded(t)) {
        return this;
      }
      for (o in s) {
        if (t.data("bv.dfs." + o)) {
          t.data("bv.dfs." + o).reject();
        }
        var a = t.data("bv.result." + o);
        if (a == this.STATUS_VALID || a == this.STATUS_INVALID) {
          continue;
        }
        t.data("bv.result." + o, this.STATUS_VALIDATING);
        u = e.fn.bootstrapValidator.validators[o].validate(this, t, s[o]);
        if ("object" == typeof u) {
          n
            ? this.updateStatus(i, this.STATUS_VALIDATING, o)
            : this.updateElementStatus(t, this.STATUS_VALIDATING, o);
          t.data("bv.dfs." + o, u);
          u.done(function (e, t, i) {
            e.removeData("bv.dfs." + t);
            n
              ? r.updateStatus(
                  e.attr("data-bv-field"),
                  i ? r.STATUS_VALID : r.STATUS_INVALID,
                  t
                )
              : r.updateElementStatus(
                  e,
                  i ? r.STATUS_VALID : r.STATUS_INVALID,
                  t
                );
            if (i && r._submitIfValid == true) {
              r._submit();
            }
          });
        } else if ("boolean" == typeof u) {
          n
            ? this.updateStatus(
                i,
                u ? this.STATUS_VALID : this.STATUS_INVALID,
                o
              )
            : this.updateElementStatus(
                t,
                u ? this.STATUS_VALID : this.STATUS_INVALID,
                o
              );
        }
      }
      return this;
    },
    updateStatus: function (t, n, r) {
      var i = this.getFieldElements(t),
        s = i.attr("type"),
        o = "radio" == s || "checkbox" == s ? 1 : i.length;
      for (var u = 0; u < o; u++) {
        this.updateElementStatus(e(i[u]), n, r);
      }
      return this;
    },
    updateElementStatus: function (t, n, r) {
      var i = this,
        s = t.attr("data-bv-field"),
        o = t.parents(".form-group"),
        u = t.data("bv.messages"),
        a = u.find(".help-block[data-bv-validator]"),
        f = o.find('.form-control-feedback[data-bv-icon-for="' + s + '"]');
      if (r) {
        t.data("bv.result." + r, n);
      } else {
        for (var l in this.options.fields[s].validators) {
          t.data("bv.result." + l, n);
        }
      }
      var c = t.parents(".tab-pane"),
        h,
        p;
      if (c && (h = c.attr("id"))) {
        p = e('a[href="#' + h + '"][data-toggle="tab"]').parent();
      }
      switch (n) {
        case this.STATUS_VALIDATING:
          this.disableSubmitButtons(true);
          o.removeClass("has-success").removeClass("has-error");
          r
            ? a.filter('.help-block[data-bv-validator="' + r + '"]').hide()
            : a.hide();
          if (f) {
            f.removeClass(this.options.feedbackIcons.valid)
              .removeClass(this.options.feedbackIcons.invalid)
              .addClass(this.options.feedbackIcons.validating)
              .show();
          }
          if (p) {
            p.removeClass("bv-tab-success").removeClass("bv-tab-error");
          }
          break;
        case this.STATUS_INVALID:
          this.disableSubmitButtons(true);
          o.removeClass("has-success").addClass("has-error");
          r ? a.filter('[data-bv-validator="' + r + '"]').show() : a.show();
          if (f) {
            f.removeClass(this.options.feedbackIcons.valid)
              .removeClass(this.options.feedbackIcons.validating)
              .addClass(this.options.feedbackIcons.invalid)
              .show();
          }
          if (p) {
            p.removeClass("bv-tab-success").addClass("bv-tab-error");
          }
          break;
        case this.STATUS_VALID:
          r ? a.filter('[data-bv-validator="' + r + '"]').hide() : a.hide();
          var d =
            a.filter(function () {
              var n = e(this).css("display"),
                r = e(this).attr("data-bv-validator");
              return "block" == n || t.data("bv.result." + r) != i.STATUS_VALID;
            }).length == 0;
          this.disableSubmitButtons(!d);
          if (f) {
            f.removeClass(this.options.feedbackIcons.invalid)
              .removeClass(this.options.feedbackIcons.validating)
              .removeClass(this.options.feedbackIcons.valid)
              .addClass(
                d
                  ? this.options.feedbackIcons.valid
                  : this.options.feedbackIcons.invalid
              )
              .show();
          }
          var v = function (n) {
            return (
              n.find(".help-block[data-bv-validator]").filter(function () {
                var n = e(this).css("display"),
                  r = e(this).attr("data-bv-validator");
                return (
                  "block" == n ||
                  (t.data("bv.result." + r) &&
                    t.data("bv.result." + r) != i.STATUS_VALID)
                );
              }).length == 0
            );
          };
          o.removeClass("has-error has-success").addClass(
            v(o) ? "has-success" : "has-error"
          );
          if (p) {
            p.removeClass("bv-tab-success")
              .removeClass("bv-tab-error")
              .addClass(v(c) ? "bv-tab-success" : "bv-tab-error");
          }
          break;
        case this.STATUS_NOT_VALIDATED:
        default:
          this.disableSubmitButtons(false);
          o.removeClass("has-success").removeClass("has-error");
          r
            ? a.filter('.help-block[data-bv-validator="' + r + '"]').hide()
            : a.hide();
          if (f) {
            f.removeClass(this.options.feedbackIcons.valid)
              .removeClass(this.options.feedbackIcons.invalid)
              .removeClass(this.options.feedbackIcons.validating)
              .hide();
          }
          if (p) {
            p.removeClass("bv-tab-success").removeClass("bv-tab-error");
          }
          break;
      }
      return this;
    },
    isValid: function () {
      var t, n, r, i, s, o, u, a;
      for (n in this.options.fields) {
        if (
          this.options.fields[n] == null ||
          !this.options.fields[n]["enabled"]
        ) {
          continue;
        }
        t = this.getFieldElements(n);
        i = t.attr("type");
        u = "radio" == i || "checkbox" == i ? 1 : t.length;
        for (a = 0; a < u; a++) {
          r = e(t[a]);
          if (this._isExcluded(r)) {
            continue;
          }
          for (o in this.options.fields[n].validators) {
            s = r.data("bv.result." + o);
            if (s == this.STATUS_NOT_VALIDATED || s == this.STATUS_VALIDATING) {
              return false;
            }
            if (s == this.STATUS_INVALID) {
              this.$invalidField = r;
              return false;
            }
          }
        }
      }
      return true;
    },
    defaultSubmit: function () {
      this.$form.off("submit.bv").submit();
    },
    resetForm: function (t) {
      var n, r, i, s, o;
      for (n in this.options.fields) {
        r = this.getFieldElements(n);
        i = r.length;
        for (var u = 0; u < i; u++) {
          for (o in this.options.fields[n].validators) {
            e(r[u]).removeData("bv.dfs." + o);
          }
        }
        this.updateStatus(n, this.STATUS_NOT_VALIDATED, null);
        if (t) {
          s = r.attr("type");
          "radio" == s || "checkbox" == s
            ? r.removeAttr("checked").removeAttr("selected")
            : r.val("");
        }
      }
      this.$invalidField = null;
      this.$submitButton = null;
      this.disableSubmitButtons(false);
      return this;
    },
    enableFieldValidators: function (e, t) {
      this.options.fields[e]["enabled"] = t;
      this.updateStatus(e, this.STATUS_NOT_VALIDATED, null);
      return this;
    },
  };
  e.fn.bootstrapValidator = function (n) {
    var r = arguments;
    return this.each(function () {
      var i = e(this),
        s = i.data("bootstrapValidator"),
        o = "object" == typeof n && n;
      if (!s) {
        s = new t(this, o);
        i.data("bootstrapValidator", s);
      }
      if ("string" == typeof n) {
        s[n].apply(s, Array.prototype.slice.call(r, 1));
      }
    });
  };
  e.fn.bootstrapValidator.validators = {};
  e.fn.bootstrapValidator.Constructor = t;
  e.fn.bootstrapValidator.helpers = {
    date: function (e, t, n, r) {
      if (e < 1e3 || e > 9999 || t == 0 || t > 12) {
        return false;
      }
      var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      if (e % 400 == 0 || (e % 100 != 0 && e % 4 == 0)) {
        i[1] = 29;
      }
      if (n < 0 || n > i[t - 1]) {
        return false;
      }
      if (r === true) {
        var s = new Date(),
          o = s.getFullYear(),
          u = s.getMonth(),
          a = s.getDate();
        return (
          e < o || (e == o && t - 1 < u) || (e == o && t - 1 == u && n < a)
        );
      }
      return true;
    },
    luhn: function (e) {
      var t = e.length,
        n = 0,
        r = [
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [0, 2, 4, 6, 8, 1, 3, 5, 7, 9],
        ],
        i = 0;
      while (t--) {
        i += r[n][parseInt(e.charAt(t), 10)];
        n ^= 1;
      }
      return i % 10 === 0 && i > 0;
    },
    mod_11_10: function (e) {
      var t = 5,
        n = e.length;
      for (var r = 0; r < n; r++) {
        t = ((((t || 10) * 2) % 11) + parseInt(e.charAt(r), 10)) % 10;
      }
      return t == 1;
    },
    mod_37_36: function (e, t) {
      t = t || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var n = t.length,
        r = e.length,
        i = Math.floor(n / 2);
      for (var s = 0; s < r; s++) {
        i = ((((i || n) * 2) % (n + 1)) + t.indexOf(e.charAt(s))) % n;
      }
      return i == 1;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.base64 = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(
        r
      );
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.between = {
    html5Attributes: {
      message: "message",
      min: "min",
      max: "max",
      inclusive: "inclusive",
    },
    enableByHtml5: function (e) {
      if ("range" == e.attr("type")) {
        return { min: e.attr("min"), max: e.attr("max") };
      }
      return false;
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      r = parseFloat(r);
      return n.inclusive === true
        ? r > n.min && r < n.max
        : r >= n.min && r <= n.max;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.callback = {
    validate: function (t, n, r) {
      var i = n.val();
      if (r.callback && "function" == typeof r.callback) {
        var s = new e.Deferred();
        s.resolve(n, "callback", r.callback.call(this, i, t));
        return s;
      }
      return true;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.choice = {
    html5Attributes: { message: "message", min: "min", max: "max" },
    validate: function (e, t, n) {
      var r = t.is("select")
        ? e
            .getFieldElements(t.attr("data-bv-field"))
            .find("option")
            .filter(":selected").length
        : e.getFieldElements(t.attr("data-bv-field")).filter(":checked").length;
      if ((n.min && r < n.min) || (n.max && r > n.max)) {
        return false;
      }
      return true;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.creditCard = {
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      if (/[^0-9-\s]+/.test(i)) {
        return false;
      }
      i = i.replace(/\D/g, "");
      if (!e.fn.bootstrapValidator.helpers.luhn(i)) {
        return false;
      }
      var s = {
        AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] },
        DINERS_CLUB: {
          length: [14],
          prefix: ["300", "301", "302", "303", "304", "305", "36"],
        },
        DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] },
        DISCOVER: {
          length: [16],
          prefix: [
            "6011",
            "622126",
            "622127",
            "622128",
            "622129",
            "62213",
            "62214",
            "62215",
            "62216",
            "62217",
            "62218",
            "62219",
            "6222",
            "6223",
            "6224",
            "6225",
            "6226",
            "6227",
            "6228",
            "62290",
            "62291",
            "622920",
            "622921",
            "622922",
            "622923",
            "622924",
            "622925",
            "644",
            "645",
            "646",
            "647",
            "648",
            "649",
            "65",
          ],
        },
        JCB: {
          length: [16],
          prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"],
        },
        LASER: {
          length: [16, 17, 18, 19],
          prefix: ["6304", "6706", "6771", "6709"],
        },
        MAESTRO: {
          length: [12, 13, 14, 15, 16, 17, 18, 19],
          prefix: [
            "5018",
            "5020",
            "5038",
            "6304",
            "6759",
            "6761",
            "6762",
            "6763",
            "6764",
            "6765",
            "6766",
          ],
        },
        MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] },
        SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] },
        UNIONPAY: {
          length: [16, 17, 18, 19],
          prefix: [
            "622126",
            "622127",
            "622128",
            "622129",
            "62213",
            "62214",
            "62215",
            "62216",
            "62217",
            "62218",
            "62219",
            "6222",
            "6223",
            "6224",
            "6225",
            "6226",
            "6227",
            "6228",
            "62290",
            "62291",
            "622920",
            "622921",
            "622922",
            "622923",
            "622924",
            "622925",
          ],
        },
        VISA: { length: [16], prefix: ["4"] },
      };
      var o, u;
      for (o in s) {
        for (u in s[o]["prefix"]) {
          if (
            i.substr(0, s[o]["prefix"][u].length) == s[o]["prefix"][u] &&
            s[o]["length"].indexOf(i.length) != -1
          ) {
            return true;
          }
        }
      }
      return false;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.cusip = {
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      i = i.toUpperCase();
      if (!/^[0-9A-Z]{9}$/.test(i)) {
        return false;
      }
      var s = e.map(i.split(""), function (e) {
          var t = e.charCodeAt(0);
          return t >= "A".charCodeAt(0) && t <= "Z".charCodeAt(0)
            ? t - "A".charCodeAt(0) + 10
            : e;
        }),
        o = s.length,
        u = 0;
      for (var a = 0; a < o - 1; a++) {
        var f = parseInt(s[a]);
        if (a % 2 != 0) {
          f *= 2;
        }
        if (f > 9) {
          f -= 9;
        }
        u += f;
      }
      u = (10 - (u % 10)) % 10;
      return u == s[o - 1];
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.cvv = {
    html5Attributes: { message: "message", ccfield: "creditCardField" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      if (!/^[0-9]{3,4}$/.test(r)) {
        return false;
      }
      if (!n.creditCardField) {
        return true;
      }
      var i = e.getFieldElements(n.creditCardField).val();
      if (i == "") {
        return true;
      }
      i = i.replace(/\D/g, "");
      var s = {
        AMERICAN_EXPRESS: { length: [15], prefix: ["34", "37"] },
        DINERS_CLUB: {
          length: [14],
          prefix: ["300", "301", "302", "303", "304", "305", "36"],
        },
        DINERS_CLUB_US: { length: [16], prefix: ["54", "55"] },
        DISCOVER: {
          length: [16],
          prefix: [
            "6011",
            "622126",
            "622127",
            "622128",
            "622129",
            "62213",
            "62214",
            "62215",
            "62216",
            "62217",
            "62218",
            "62219",
            "6222",
            "6223",
            "6224",
            "6225",
            "6226",
            "6227",
            "6228",
            "62290",
            "62291",
            "622920",
            "622921",
            "622922",
            "622923",
            "622924",
            "622925",
            "644",
            "645",
            "646",
            "647",
            "648",
            "649",
            "65",
          ],
        },
        JCB: {
          length: [16],
          prefix: ["3528", "3529", "353", "354", "355", "356", "357", "358"],
        },
        LASER: {
          length: [16, 17, 18, 19],
          prefix: ["6304", "6706", "6771", "6709"],
        },
        MAESTRO: {
          length: [12, 13, 14, 15, 16, 17, 18, 19],
          prefix: [
            "5018",
            "5020",
            "5038",
            "6304",
            "6759",
            "6761",
            "6762",
            "6763",
            "6764",
            "6765",
            "6766",
          ],
        },
        MASTERCARD: { length: [16], prefix: ["51", "52", "53", "54", "55"] },
        SOLO: { length: [16, 18, 19], prefix: ["6334", "6767"] },
        UNIONPAY: {
          length: [16, 17, 18, 19],
          prefix: [
            "622126",
            "622127",
            "622128",
            "622129",
            "62213",
            "62214",
            "62215",
            "62216",
            "62217",
            "62218",
            "62219",
            "6222",
            "6223",
            "6224",
            "6225",
            "6226",
            "6227",
            "6228",
            "62290",
            "62291",
            "622920",
            "622921",
            "622922",
            "622923",
            "622924",
            "622925",
          ],
        },
        VISA: { length: [16], prefix: ["4"] },
      };
      var o,
        u,
        a = null;
      for (o in s) {
        for (u in s[o]["prefix"]) {
          if (
            i.substr(0, s[o]["prefix"][u].length) == s[o]["prefix"][u] &&
            s[o]["length"].indexOf(i.length) != -1
          ) {
            a = o;
            break;
          }
        }
      }
      return a == null
        ? false
        : "AMERICAN_EXPRESS" == a
        ? r.length == 4
        : r.length == 3;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.date = {
    html5Attributes: { message: "message", format: "format" },
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      r.format = r.format || "MM/DD/YYYY";
      var s = r.format.split(" "),
        o = s[0],
        u = s.length > 1 ? s[1] : null,
        a = s.length > 2 ? s[2] : null,
        f = i.split(" "),
        l = f[0],
        c = f.length > 1 ? f[1] : null;
      if (s.length != f.length) {
        return false;
      }
      var h = l.indexOf("/") != -1 ? "/" : l.indexOf("-") != -1 ? "-" : null;
      if (h == null) {
        return false;
      }
      l = l.split(h);
      o = o.split(h);
      var p = l[o.indexOf("YYYY")],
        d = l[o.indexOf("MM")],
        v = l[o.indexOf("DD")];
      var m = null,
        g = null,
        y = null;
      if (u) {
        (u = u.split(":")), (c = c.split(":"));
        if (u.length != c.length) {
          return false;
        }
        g = c.length > 0 ? c[0] : null;
        m = c.length > 1 ? c[1] : null;
        y = c.length > 2 ? c[2] : null;
        if (y) {
          y = parseInt(y, 10);
          if (y < 0 || y > 60) {
            return false;
          }
        }
        if (g) {
          g = parseInt(g, 10);
          if (g < 0 || g >= 24 || (a && g > 12)) {
            return false;
          }
        }
        if (m) {
          m = parseInt(m, 10);
          if (m < 0 || m > 59) {
            return false;
          }
        }
      }
      v = parseInt(v, 10);
      d = parseInt(d, 10);
      p = parseInt(p, 10);
      return e.fn.bootstrapValidator.helpers.date(p, d, v);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.different = {
    html5Attributes: { message: "message", field: "field" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = e.getFieldElements(n.field);
      if (i == null) {
        return true;
      }
      if (r != i.val()) {
        e.updateStatus(n.field, e.STATUS_VALID, "different");
        return true;
      } else {
        return false;
      }
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.digits = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      return /^\d+$/.test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.ean = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      if (!/^(\d{8}|\d{12}|\d{13})$/.test(r)) {
        return false;
      }
      var i = r.length,
        s = 0,
        o = i == 8 ? [3, 1] : [1, 3];
      for (var u = 0; u < i - 1; u++) {
        s += parseInt(r.charAt(u)) * o[u % 2];
      }
      s = 10 - (s % 10);
      return s == r.charAt(i - 1);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.emailAddress = {
    enableByHtml5: function (e) {
      return "email" == e.attr("type");
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return i.test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.file = {
    html5Attributes: {
      extension: "extension",
      maxsize: "maxSize",
      message: "message",
      type: "type",
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i,
        s = n.extension ? n.extension.split(",") : null,
        o = n.type ? n.type.split(",") : null,
        u = window.File && window.FileList && window.FileReader;
      if (u) {
        var a = t.get(0).files,
          f = a.length;
        for (var l = 0; l < f; l++) {
          if (n.maxSize && a[l].size > parseInt(n.maxSize)) {
            return false;
          }
          i = a[l].name.substr(a[l].name.lastIndexOf(".") + 1);
          if (s && s.indexOf(i) == -1) {
            return false;
          }
          if (o && o.indexOf(a[l].type) == -1) {
            return false;
          }
        }
      } else {
        i = r.substr(r.lastIndexOf(".") + 1);
        if (s && s.indexOf(i) == -1) {
          return false;
        }
      }
      return true;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.greaterThan = {
    html5Attributes: {
      message: "message",
      value: "value",
      inclusive: "inclusive",
    },
    enableByHtml5: function (e) {
      var t = e.attr("min");
      if (t) {
        return { value: t };
      }
      return false;
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      r = parseFloat(r);
      return n.inclusive === true ? r > n.value : r >= n.value;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.grid = {
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      i = i.toUpperCase();
      if (
        !/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(
          i
        )
      ) {
        return false;
      }
      i = i.replace(/\s/g, "").replace(/-/g, "");
      if ("GRID:" == i.substr(0, 5)) {
        i = i.substr(5);
      }
      return e.fn.bootstrapValidator.helpers.mod_37_36(i);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.hex = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      return /^[0-9a-fA-F]+$/.test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.hexColor = {
    enableByHtml5: function (e) {
      return "color" == e.attr("type");
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.iban = {
    html5Attributes: { message: "message", country: "country" },
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      var s = {
        AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
        AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
        AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
        AO: "AO[0-9]{2}[0-9]{21}",
        AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
        AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
        BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
        BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
        BF: "BF[0-9]{2}[0-9]{23}",
        BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
        BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
        BI: "BI[0-9]{2}[0-9]{12}",
        BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
        BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
        CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
        CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
        CM: "CM[0-9]{2}[0-9]{23}",
        CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
        CV: "CV[0-9]{2}[0-9]{21}",
        CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
        CZ: "CZ[0-9]{2}[0-9]{20}",
        DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
        DK: "DK[0-9]{2}[0-9]{14}",
        DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
        DZ: "DZ[0-9]{2}[0-9]{20}",
        EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
        ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
        FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
        FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
        FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
        GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
        GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
        GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
        GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
        GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
        GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
        HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
        HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
        IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
        IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
        IR: "IR[0-9]{2}[0-9]{22}",
        IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
        IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
        JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
        KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
        KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
        LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
        LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
        LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
        LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
        LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
        MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
        MD: "MD[0-9]{2}[A-Z0-9]{20}",
        ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
        MG: "MG[0-9]{2}[0-9]{23}",
        MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
        ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
        MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
        MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
        MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
        MZ: "MZ[0-9]{2}[0-9]{21}",
        NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
        NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
        PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
        PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
        PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
        PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
        QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
        RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
        RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
        SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
        SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
        SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
        SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
        SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
        SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
        TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
        TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
        VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}",
      };
      i = i.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
      var o = r.country || i.substr(0, 2);
      if (!s[o]) {
        return false;
      }
      if (!new RegExp("^" + s[o] + "$").test(i)) {
        return false;
      }
      i = i.substr(4) + i.substr(0, 4);
      i = e.map(i.split(""), function (e) {
        var t = e.charCodeAt(0);
        return t >= "A".charCodeAt(0) && t <= "Z".charCodeAt(0)
          ? t - "A".charCodeAt(0) + 10
          : e;
      });
      i = i.join("");
      var u = parseInt(i.substr(0, 1), 10),
        a = i.length;
      for (var f = 1; f < a; ++f) {
        u = (u * 10 + parseInt(i.substr(f, 1), 10)) % 97;
      }
      return u == 1;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.id = {
    html5Attributes: { message: "message", country: "country" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = n.country || r.substr(0, 2),
        s = ["_", i.toLowerCase()].join("");
      if (this[s] && "function" == typeof this[s]) {
        return this[s](r);
      }
      return true;
    },
    _validateJMBG: function (e, t) {
      if (!/^\d{13}$/.test(e)) {
        return false;
      }
      var n = parseInt(e.substr(0, 2), 10),
        r = parseInt(e.substr(2, 2), 10),
        i = parseInt(e.substr(4, 3), 10),
        s = parseInt(e.substr(7, 2), 10),
        o = parseInt(e.substr(12, 1), 10);
      if (n > 31 || r > 12) {
        return false;
      }
      var u = 0;
      for (var a = 0; a < 6; a++) {
        u += (7 - a) * (parseInt(e.charAt(a)) + parseInt(e.charAt(a + 6)));
      }
      u = 11 - (u % 11);
      if (u == 10 || u == 11) {
        u = 0;
      }
      if (u != o) {
        return false;
      }
      switch (t.toUpperCase()) {
        case "BA":
          return 10 <= s && s <= 19;
        case "MK":
          return 41 <= s && s <= 49;
        case "ME":
          return 20 <= s && s <= 29;
        case "RS":
          return 70 <= s && s <= 99;
        case "SI":
          return 50 <= s && s <= 59;
        default:
          return true;
      }
    },
    _ba: function (e) {
      return this._validateJMBG(e, "BA");
    },
    _mk: function (e) {
      return this._validateJMBG(e, "MK");
    },
    _me: function (e) {
      return this._validateJMBG(e, "ME");
    },
    _rs: function (e) {
      return this._validateJMBG(e, "RS");
    },
    _si: function (e) {
      return this._validateJMBG(e, "SI");
    },
    _bg: function (t) {
      if (!/^\d{10}$/.test(t) && !/^\d{6}\s\d{3}\s\d{1}$/.test(t)) {
        return false;
      }
      t = t.replace(/\s/g, "");
      var n = parseInt(t.substr(0, 2), 10) + 1900,
        r = parseInt(t.substr(2, 2), 10),
        i = parseInt(t.substr(4, 2), 10);
      if (r > 40) {
        n += 100;
        r -= 40;
      } else if (r > 20) {
        n -= 100;
        r -= 20;
      }
      if (!e.fn.bootstrapValidator.helpers.date(n, r, i)) {
        return false;
      }
      var s = 0,
        o = [2, 4, 8, 5, 10, 9, 7, 3, 6];
      for (var u = 0; u < 9; u++) {
        s += parseInt(t.charAt(u)) * o[u];
      }
      s = (s % 11) % 10;
      return s == t.substr(9, 1);
    },
    _br: function (e) {
      if (
        /^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(e)
      ) {
        return false;
      }
      if (!/^\d{11}$/.test(e) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(e)) {
        return false;
      }
      e = e.replace(/\./g, "").replace(/-/g, "");
      var t = 0;
      for (var n = 0; n < 9; n++) {
        t += (10 - n) * parseInt(e.charAt(n));
      }
      t = 11 - (t % 11);
      if (t == 10 || t == 11) {
        t = 0;
      }
      if (t != e.charAt(9)) {
        return false;
      }
      var r = 0;
      for (n = 0; n < 10; n++) {
        r += (11 - n) * parseInt(e.charAt(n));
      }
      r = 11 - (r % 11);
      if (r == 10 || r == 11) {
        r = 0;
      }
      return r == e.charAt(10);
    },
    _ch: function (e) {
      if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(e)) {
        return false;
      }
      e = e.replace(/\D/g, "").substr(3);
      var t = e.length,
        n = 0,
        r = t == 8 ? [3, 1] : [1, 3];
      for (var i = 0; i < t - 1; i++) {
        n += parseInt(e.charAt(i)) * r[i % 2];
      }
      n = 10 - (n % 10);
      return n == e.charAt(t - 1);
    },
    _cl: function (e) {
      if (!/^\d{7,8}[-]{0,1}[0-9K]$/.test(e)) {
        return false;
      }
      e = e.replace(/\D/g, "");
      while (e.length < 9) {
        e = "0" + e;
      }
      var t = 0,
        n = [3, 2, 7, 6, 5, 4, 3, 2];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      t = 11 - (t % 11);
      if (t == 11) {
        t = 0;
      } else if (t == 10) {
        t = "K";
      }
      return t == e.charAt(8);
    },
    _cz: function (t) {
      if (!/^\d{9,10}$/.test(t)) {
        return false;
      }
      var n = 1900 + parseInt(t.substr(0, 2)),
        r = (parseInt(t.substr(2, 2)) % 50) % 20,
        i = parseInt(t.substr(4, 2));
      if (t.length == 9) {
        if (n >= 1980) {
          n -= 100;
        }
        if (n > 1953) {
          return false;
        }
      } else if (n < 1954) {
        n += 100;
      }
      if (!e.fn.bootstrapValidator.helpers.date(n, r, i)) {
        return false;
      }
      if (t.length == 10) {
        var s = parseInt(t.substr(0, 9), 10) % 11;
        if (n < 1985) {
          s = s % 10;
        }
        return s == t.substr(9, 1);
      }
      return true;
    },
    _dk: function (t) {
      if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t)) {
        return false;
      }
      t = t.replace(/-/g, "");
      var n = parseInt(t.substr(0, 2), 10),
        r = parseInt(t.substr(2, 2), 10),
        i = parseInt(t.substr(4, 2), 10);
      switch (true) {
        case "5678".indexOf(t.charAt(6)) != -1 && i >= 58:
          i += 1800;
          break;
        case "0123".indexOf(t.charAt(6)) != -1:
        case "49".indexOf(t.charAt(6)) != -1 && i >= 37:
          i += 1900;
          break;
        default:
          i += 2e3;
          break;
      }
      return e.fn.bootstrapValidator.helpers.date(i, r, n);
    },
    _ee: function (e) {
      return this._lt(e);
    },
    _es: function (e) {
      if (
        !/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(e) &&
        !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(e)
      ) {
        return false;
      }
      e = e.replace(/-/g, "");
      var t = "XYZ".indexOf(e.charAt(0));
      if (t != -1) {
        e = t + e.substr(1) + "";
      }
      var n = parseInt(e.substr(0, 8), 10);
      n = "TRWAGMYFPDXBNJZSQVHLCKE"[n % 23];
      return n == e.substr(8, 1);
    },
    _fi: function (t) {
      if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(t)) {
        return false;
      }
      var n = parseInt(t.substr(0, 2), 10),
        r = parseInt(t.substr(2, 2), 10),
        i = parseInt(t.substr(4, 2), 10),
        s = { "+": 1800, "-": 1900, A: 2e3 };
      i = s[t.charAt(6)] + i;
      if (!e.fn.bootstrapValidator.helpers.date(i, r, n)) {
        return false;
      }
      var o = parseInt(t.substr(7, 3));
      if (o < 2) {
        return false;
      }
      var u = t.substr(0, 6) + t.substr(7, 3) + "";
      u = parseInt(u);
      return "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(u % 31) == t.charAt(10);
    },
    _hr: function (t) {
      if (!/^[0-9]{11}$/.test(t)) {
        return false;
      }
      return e.fn.bootstrapValidator.helpers.mod_11_10(t);
    },
    _ie: function (e) {
      if (!/^\d{7}[A-W][AHWTX]?$/.test(e)) {
        return false;
      }
      var t = function (e) {
        while (e.length < 7) {
          e = "0" + e;
        }
        var t = "WABCDEFGHIJKLMNOPQRSTUV",
          n = 0;
        for (var r = 0; r < 7; r++) {
          n += parseInt(e.charAt(r)) * (8 - r);
        }
        n += 9 * t.indexOf(e.substr(7));
        return t[n % 23];
      };
      if (e.length == 9 && ("A" == e.charAt(8) || "H" == e.charAt(8))) {
        return e.charAt(7) == t(e.substr(0, 7) + e.substr(8) + "");
      } else {
        return e.charAt(7) == t(e.substr(0, 7));
      }
    },
    _is: function (t) {
      if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(t)) {
        return false;
      }
      t = t.replace(/-/g, "");
      var n = parseInt(t.substr(0, 2), 10),
        r = parseInt(t.substr(2, 2), 10),
        i = parseInt(t.substr(4, 2), 10),
        s = parseInt(t.charAt(9));
      i = s == 9 ? 1900 + i : (20 + s) * 100 + i;
      if (!e.fn.bootstrapValidator.helpers.date(i, r, n, true)) {
        return false;
      }
      var o = 0,
        u = [3, 2, 7, 6, 5, 4, 3, 2];
      for (var a = 0; a < 8; a++) {
        o += parseInt(t.charAt(a)) * u[a];
      }
      o = 11 - (o % 11);
      return o == t.charAt(8);
    },
    _lt: function (t) {
      if (!/^[0-9]{11}$/.test(t)) {
        return false;
      }
      var n = parseInt(t.charAt(0)),
        r = parseInt(t.substr(1, 2), 10),
        i = parseInt(t.substr(3, 2), 10),
        s = parseInt(t.substr(5, 2), 10),
        o = n % 2 == 0 ? 17 + n / 2 : 17 + (n + 1) / 2;
      r = o * 100 + r;
      if (!e.fn.bootstrapValidator.helpers.date(r, i, s, true)) {
        return false;
      }
      var u = 0,
        a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
      for (var f = 0; f < 10; f++) {
        u += parseInt(t.charAt(f)) * a[f];
      }
      u = u % 11;
      if (u != 10) {
        return u == t.charAt(10);
      }
      u = 0;
      a = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
      for (f = 0; f < 10; f++) {
        u += parseInt(t.charAt(f)) * a[f];
      }
      u = u % 11;
      if (u == 10) {
        u = 0;
      }
      return u == t.charAt(10);
    },
    _lv: function (t) {
      if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(t)) {
        return false;
      }
      t = t.replace(/\D/g, "");
      var n = parseInt(t.substr(0, 2)),
        r = parseInt(t.substr(2, 2)),
        i = parseInt(t.substr(4, 2));
      i = i + 1800 + parseInt(t.charAt(6)) * 100;
      if (!e.fn.bootstrapValidator.helpers.date(i, r, n, true)) {
        return false;
      }
      var s = 0,
        o = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
      for (var u = 0; u < 10; u++) {
        s += parseInt(t.charAt(u)) * o[u];
      }
      s = ((s + 1) % 11) % 10;
      return s == t.charAt(10);
    },
    _nl: function (e) {
      while (e.length < 9) {
        e = "0" + e;
      }
      if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(e)) {
        return false;
      }
      e = e.replace(/\./g, "");
      if (parseInt(e, 10) == 0) {
        return false;
      }
      var t = 0,
        n = e.length;
      for (var r = 0; r < n - 1; r++) {
        t += (9 - r) * parseInt(e.charAt(r));
      }
      t = t % 11;
      if (t == 10) {
        t = 0;
      }
      return t == e.charAt(n - 1);
    },
    _ro: function (t) {
      if (!/^[0-9]{13}$/.test(t)) {
        return false;
      }
      var n = parseInt(t.charAt(0));
      if (n == 0 || n == 7 || n == 8) {
        return false;
      }
      var r = parseInt(t.substr(1, 2), 10),
        i = parseInt(t.substr(3, 2), 10),
        s = parseInt(t.substr(5, 2), 10),
        o = { 1: 1900, 2: 1900, 3: 1800, 4: 1800, 5: 2e3, 6: 2e3 };
      if (s > 31 && i > 12) {
        return false;
      }
      if (n != 9) {
        r = o[n + ""] + r;
        if (!e.fn.bootstrapValidator.helpers.date(r, i, s)) {
          return false;
        }
      }
      var u = 0,
        a = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9],
        f = t.length;
      for (var l = 0; l < f - 1; l++) {
        u += parseInt(t.charAt(l)) * a[l];
      }
      u = u % 11;
      if (u == 10) {
        u = 1;
      }
      return u == t.charAt(f - 1);
    },
    _se: function (t) {
      if (!/^[0-9]{10}$/.test(t) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(t)) {
        return false;
      }
      t = t.replace(/[^0-9]/g, "");
      var n = parseInt(t.substr(0, 2)) + 1900,
        r = parseInt(t.substr(2, 2)),
        i = parseInt(t.substr(4, 2));
      if (!e.fn.bootstrapValidator.helpers.date(n, r, i)) {
        return false;
      }
      return e.fn.bootstrapValidator.helpers.luhn(t);
    },
    _sk: function (e) {
      return this._cz(e);
    },
    _sm: function (e) {
      return /^\d{5}$/.test(e);
    },
    _za: function (t) {
      if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(t)) {
        return false;
      }
      var n = parseInt(t.substr(0, 2)),
        r = new Date().getFullYear() % 100,
        i = parseInt(t.substr(2, 2)),
        s = parseInt(t.substr(4, 2));
      n = n >= r ? n + 1900 : n + 2e3;
      if (!e.fn.bootstrapValidator.helpers.date(n, i, s)) {
        return false;
      }
      return e.fn.bootstrapValidator.helpers.luhn(t);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.identical = {
    html5Attributes: { message: "message", field: "field" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = e.getFieldElements(n.field);
      if (i == null) {
        return true;
      }
      if (r == i.val()) {
        e.updateStatus(n.field, e.STATUS_VALID, "identical");
        return true;
      } else {
        return false;
      }
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.imei = {
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      switch (true) {
        case /^\d{15}$/.test(i):
        case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(i):
        case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(i):
          i = i.replace(/[^0-9]/g, "");
          return e.fn.bootstrapValidator.helpers.luhn(i);
          break;
        case /^\d{14}$/.test(i):
        case /^\d{16}$/.test(i):
        case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(i):
        case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(i):
          return true;
        default:
          return false;
      }
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.integer = {
    enableByHtml5: function (e) {
      return "number" == e.attr("type");
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      return /^(?:-?(?:0|[1-9][0-9]*))$/.test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.ip = {
    html5Attributes: { message: "message", ipv4: "ipv4", ipv6: "ipv6" },
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      r = e.extend({}, { ipv4: true, ipv6: true }, r);
      if (r.ipv4) {
        return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          i
        );
      } else if (r.ipv6) {
        return /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(
          str
        );
      }
      return false;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.isbn = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i;
      switch (true) {
        case /^\d{9}[\dX]$/.test(r):
        case r.length == 13 && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):
        case r.length == 13 && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):
          i = "ISBN10";
          break;
        case /^(978|979)\d{9}[\dX]$/.test(r):
        case r.length == 17 && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(r):
        case r.length == 17 &&
          /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(r):
          i = "ISBN13";
          break;
        default:
          return false;
      }
      r = r.replace(/[^0-9X]/gi, "");
      var s = r.split(""),
        o = s.length,
        u = 0,
        a;
      switch (i) {
        case "ISBN10":
          u = 0;
          for (var f = 0; f < o - 1; f++) {
            u += (10 - f) * parseInt(s[f]);
          }
          a = 11 - (u % 11);
          if (a == 11) {
            a = 0;
          } else if (a == 10) {
            a = "X";
          }
          return a + "" == s[o - 1];
        case "ISBN13":
          u = 0;
          for (var f = 0; f < o - 1; f++) {
            u += f % 2 == 0 ? parseInt(s[f]) : parseInt(s[f]) * 3;
          }
          a = 10 - (u % 10);
          if (a == 10) {
            a = "0";
          }
          return a + "" == s[o - 1];
        default:
          return false;
      }
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.isin = {
    COUNTRY_CODES:
      "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      r = r.toUpperCase();
      var i = new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$");
      if (!i.test(r)) {
        return false;
      }
      var s = "",
        o = r.length;
      for (var u = 0; u < o - 1; u++) {
        var a = r.charCodeAt(u);
        s += a > 57 ? (a - 55).toString() : r.charAt(u);
      }
      var f = "",
        l = s.length,
        c = l % 2 != 0 ? 0 : 1;
      for (u = 0; u < l; u++) {
        f += parseInt(s[u]) * (u % 2 == c ? 2 : 1) + "";
      }
      var h = 0;
      for (u = 0; u < f.length; u++) {
        h += parseInt(f.charAt(u));
      }
      h = (10 - (h % 10)) % 10;
      return h == r.charAt(o - 1);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.ismn = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i;
      switch (true) {
        case /^M\d{9}$/.test(r):
        case /^M-\d{4}-\d{4}-\d{1}$/.test(r):
        case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(r):
          i = "ISMN10";
          break;
        case /^9790\d{9}$/.test(r):
        case /^979-0-\d{4}-\d{4}-\d{1}$/.test(r):
        case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(r):
          i = "ISMN13";
          break;
        default:
          return false;
      }
      if ("ISMN10" == i) {
        r = "9790" + r.substr(1);
      }
      r = r.replace(/[^0-9]/gi, "");
      var s = r.length,
        o = 0,
        u = [1, 3];
      for (var a = 0; a < s - 1; a++) {
        o += parseInt(r.charAt(a)) * u[a % 2];
      }
      o = 10 - (o % 10);
      return o == r.charAt(s - 1);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.issn = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      if (!/^\d{4}\-\d{3}[\dX]$/.test(r)) {
        return false;
      }
      r = r.replace(/[^0-9X]/gi, "");
      var i = r.split(""),
        s = i.length,
        o = 0;
      if (i[7] == "X") {
        i[7] = 10;
      }
      for (var u = 0; u < s; u++) {
        o += (8 - u) * parseInt(i[u]);
      }
      return o % 11 == 0;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.lessThan = {
    html5Attributes: {
      message: "message",
      value: "value",
      inclusive: "inclusive",
    },
    enableByHtml5: function (e) {
      var t = e.attr("max");
      if (t) {
        return { value: t };
      }
      return false;
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      r = parseFloat(r);
      return n.inclusive === false ? r <= n.value : r < n.value;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.mac = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      return /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.notEmpty = {
    enableByHtml5: function (e) {
      var t = e.attr("required") + "";
      return "required" == t || "true" == t;
    },
    validate: function (t, n, r) {
      var i = n.attr("type");
      if ("radio" == i || "checkbox" == i) {
        return (
          t.getFieldElements(n.attr("data-bv-field")).filter(":checked")
            .length > 0
        );
      }
      return e.trim(n.val()) != "";
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.numeric = {
    html5Attributes: { message: "message", separator: "separator" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = n.separator || ".";
      if (i != ".") {
        r = r.replace(i, ".");
      }
      return !isNaN(parseFloat(r)) && isFinite(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.phone = {
    html5Attributes: { message: "message", country: "country" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = (n.country || "US").toUpperCase();
      switch (i) {
        case "US":
        default:
          r = r.replace(/\D/g, "");
          return (
            /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(
              r
            ) && r.length == 10
          );
      }
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.regexp = {
    html5Attributes: { message: "message", regexp: "regexp" },
    enableByHtml5: function (e) {
      var t = e.attr("pattern");
      if (t) {
        return { regexp: t };
      }
      return false;
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = "string" == typeof n.regexp ? new RegExp(n.regexp) : n.regexp;
      return i.test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.remote = {
    html5Attributes: { message: "message", url: "url", name: "name" },
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      var s = n.attr("data-bv-field"),
        o = r.data;
      if (o == null) {
        o = {};
      }
      if ("function" == typeof o) {
        o = o.call(this, t);
      }
      o[r.name || s] = i;
      var u = new e.Deferred();
      var a = e.ajax({ type: "POST", url: r.url, dataType: "json", data: o });
      a.then(function (e) {
        u.resolve(n, "remote", e.valid === true || e.valid === "true");
      });
      u.fail(function () {
        a.abort();
      });
      return u;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.rtn = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      if (!/^\d{9}$/.test(r)) {
        return false;
      }
      var i = 0;
      for (var s = 0; s < r.length; s += 3) {
        i +=
          parseInt(r.charAt(s), 10) * 3 +
          parseInt(r.charAt(s + 1), 10) * 7 +
          parseInt(r.charAt(s + 2), 10);
      }
      return i != 0 && i % 10 == 0;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.sedol = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      r = r.toUpperCase();
      if (!/^[0-9A-Z]{7}$/.test(r)) {
        return false;
      }
      var i = 0,
        s = [1, 3, 1, 7, 3, 9, 1],
        o = r.length;
      for (var u = 0; u < o - 1; u++) {
        i += s[u] * parseInt(r.charAt(u), 36);
      }
      i = (10 - (i % 10)) % 10;
      return i == r.charAt(o - 1);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.siren = {
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      if (!/^\d{9}$/.test(i)) {
        return false;
      }
      return e.fn.bootstrapValidator.helpers.luhn(i);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.siret = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = 0,
        s = r.length,
        o;
      for (var u = 0; u < s; u++) {
        o = parseInt(r.charAt(u), 10);
        if (u % 2 == 0) {
          o = o * 2;
          if (o > 9) {
            o -= 9;
          }
        }
        i += o;
      }
      return i % 10 == 0;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.step = {
    html5Attributes: { message: "message", base: "baseValue", step: "step" },
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      r = e.extend({}, { baseValue: 0, step: 1 }, r);
      i = parseFloat(i);
      if (isNaN(i) || !isFinite(i)) {
        return false;
      }
      var s = function (e, t) {
          var n = Math.pow(10, t);
          e = e * n;
          var r = (e > 0) | -(e < 0),
            i = e % 1 === 0.5 * r;
          if (i) {
            return (Math.floor(e) + (r > 0)) / n;
          } else {
            return Math.round(e) / n;
          }
        },
        o = function (e, t) {
          if (t == 0) {
            return 1;
          }
          var n = (e + "").split("."),
            r = (t + "").split("."),
            i =
              (n.length == 1 ? 0 : n[1].length) +
              (r.length == 1 ? 0 : r[1].length);
          return s(e - t * Math.floor(e / t), i);
        };
      var u = o(i - r.baseValue, r.step);
      return u == 0 || u == r.step;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.stringCase = {
    html5Attributes: { message: "message", case: "case" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = (n["case"] || "lower").toLowerCase();
      switch (i) {
        case "upper":
          return r === r.toUpperCase();
        case "lower":
        default:
          return r === r.toLowerCase();
      }
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.stringLength = {
    html5Attributes: { message: "message", min: "min", max: "max" },
    enableByHtml5: function (e) {
      var t = e.attr("maxlength");
      if (t) {
        return { max: parseInt(t, 10) };
      }
      return false;
    },
    validate: function (t, n, r) {
      var i = n.val();
      if (i == "") {
        return true;
      }
      var s = e.trim(i).length;
      if ((r.min && s < r.min) || (r.max && s > r.max)) {
        return false;
      }
      return true;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.uri = {
    enableByHtml5: function (e) {
      return "url" == e.attr("type");
    },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = new RegExp(
        "^" +
          "(?:(?:https?|ftp)://)" +
          "(?:\\S+(?::\\S*)?@)?" +
          "(?:" +
          "(?!10(?:\\.\\d{1,3}){3})" +
          "(?!127(?:\\.\\d{1,3}){3})" +
          "(?!169\\.254(?:\\.\\d{1,3}){2})" +
          "(?!192\\.168(?:\\.\\d{1,3}){2})" +
          "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
          "|" +
          "(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)" +
          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*" +
          "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
          ")" +
          "(?::\\d{2,5})?" +
          "(?:/[^\\s]*)?" +
          "$",
        "i"
      );
      return i.test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.uuid = {
    html5Attributes: { message: "message", version: "version" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = {
          3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
          4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
          5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
          all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        },
        s = n.version ? n.version + "" : "all";
      return null == i[s] ? true : i[s].test(r);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.vat = {
    html5Attributes: { message: "message", country: "country" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      var i = n.country || r.substr(0, 2),
        s = ["_", i.toLowerCase()].join("");
      if (this[s] && "function" == typeof this[s]) {
        return this[s](r);
      }
      return true;
    },
    _at: function (e) {
      if (!/^ATU[0-9]{8}$/.test(e)) {
        return false;
      }
      e = e.substr(3);
      var t = 0,
        n = [1, 2, 1, 2, 1, 2, 1],
        r = 0;
      for (var i = 0; i < 7; i++) {
        r = parseInt(e.charAt(i)) * n[i];
        if (r > 9) {
          r = Math.floor(r / 10) + (r % 10);
        }
        t += r;
      }
      t = 10 - ((t + 4) % 10);
      if (t == 10) {
        t = 0;
      }
      return t == e.substr(7, 1);
    },
    _be: function (e) {
      if (!/^BE[0]{0,1}[0-9]{9}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      if (e.length == 9) {
        e = "0" + e;
      }
      if (e.substr(1, 1) == 0) {
        return false;
      }
      var t = parseInt(e.substr(0, 8), 10) + parseInt(e.substr(8, 2), 10);
      return t % 97 == 0;
    },
    _bg: function (t) {
      if (!/^BG[0-9]{9,10}$/.test(t)) {
        return false;
      }
      t = t.substr(2);
      var n = 0,
        r = 0,
        i = [],
        s = 0;
      if (t.length == 9) {
        for (s = 0; s < 8; s++) {
          r += parseInt(t.charAt(s)) * (s + 1);
        }
        r = r % 11;
        if (r == 10) {
          r = 0;
          for (s = 0; s < 8; s++) {
            r += parseInt(t.charAt(s)) * (s + 3);
          }
        }
        r = r % 10;
        return r == t.substr(8);
      } else if (t.length == 10) {
        var o = function (t) {
            var n = parseInt(t.substr(0, 2), 10) + 1900,
              r = parseInt(t.substr(2, 2), 10),
              i = parseInt(t.substr(4, 2), 10);
            if (r > 40) {
              n += 100;
              r -= 40;
            } else if (r > 20) {
              n -= 100;
              r -= 20;
            }
            if (!e.fn.bootstrapValidator.helpers.date(n, r, i)) {
              return false;
            }
            var s = 0,
              o = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (var u = 0; u < 9; u++) {
              s += parseInt(t.charAt(u)) * o[u];
            }
            s = (s % 11) % 10;
            return s == t.substr(9, 1);
          },
          u = function (e) {
            var t = 0,
              n = [21, 19, 17, 13, 11, 9, 7, 3, 1];
            for (var r = 0; r < 9; r++) {
              t += parseInt(e.charAt(r)) * n[r];
            }
            t = t % 10;
            return t == e.substr(9, 1);
          },
          a = function (e) {
            var t = 0,
              n = [4, 3, 2, 7, 6, 5, 4, 3, 2];
            for (var r = 0; r < 9; r++) {
              t += parseInt(e.charAt(r)) * n[r];
            }
            t = 11 - (t % 11);
            if (t == 10) {
              return false;
            }
            if (t == 11) {
              t = 0;
            }
            return t == e.substr(9, 1);
          };
        return o(t) || u(t) || a(t);
      }
      return false;
    },
    _ch: function (e) {
      if (!/^CHE[0-9]{9}(MWST)?$/.test(e)) {
        return false;
      }
      e = e.substr(3);
      var t = 0,
        n = [5, 4, 3, 2, 7, 6, 5, 4];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r), 10) * n[r];
      }
      t = 11 - (t % 11);
      if (t == 10) {
        return false;
      }
      if (t == 11) {
        t = 0;
      }
      return t == e.substr(8, 1);
    },
    _cy: function (e) {
      if (!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      if (e.substr(0, 2) == "12") {
        return false;
      }
      var t = 0,
        n = { 0: 1, 1: 0, 2: 5, 3: 7, 4: 9, 5: 13, 6: 15, 7: 17, 8: 19, 9: 21 };
      for (var r = 0; r < 8; r++) {
        var i = parseInt(e.charAt(r), 10);
        if (r % 2 == 0) {
          i = n[i + ""];
        }
        t += i;
      }
      t = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[t % 26];
      return t == e.substr(8, 1);
    },
    _cz: function (t) {
      if (!/^CZ[0-9]{8,10}$/.test(t)) {
        return false;
      }
      t = t.substr(2);
      var n = 0,
        r = 0;
      if (t.length == 8) {
        if (t.charAt(0) + "" == "9") {
          return false;
        }
        n = 0;
        for (r = 0; r < 7; r++) {
          n += parseInt(t.charAt(r), 10) * (8 - r);
        }
        n = 11 - (n % 11);
        if (n == 10) {
          n = 0;
        }
        if (n == 11) {
          n = 1;
        }
        return n == t.substr(7, 1);
      } else if (t.length == 9 && t.charAt(0) + "" == "6") {
        n = 0;
        for (r = 0; r < 7; r++) {
          n += parseInt(t.charAt(r + 1), 10) * (8 - r);
        }
        n = 11 - (n % 11);
        if (n == 10) {
          n = 0;
        }
        if (n == 11) {
          n = 1;
        }
        n = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][n - 1];
        return n == t.substr(8, 1);
      } else if (t.length == 9 || t.length == 10) {
        var i = 1900 + parseInt(t.substr(0, 2)),
          s = (parseInt(t.substr(2, 2)) % 50) % 20,
          o = parseInt(t.substr(4, 2));
        if (t.length == 9) {
          if (i >= 1980) {
            i -= 100;
          }
          if (i > 1953) {
            return false;
          }
        } else if (i < 1954) {
          i += 100;
        }
        if (!e.fn.bootstrapValidator.helpers.date(i, s, o)) {
          return false;
        }
        if (t.length == 10) {
          var u = parseInt(t.substr(0, 9), 10) % 11;
          if (i < 1985) {
            u = u % 10;
          }
          return u == t.substr(9, 1);
        }
        return true;
      }
      return false;
    },
    _de: function (t) {
      if (!/^DE[0-9]{9}$/.test(t)) {
        return false;
      }
      t = t.substr(2);
      return e.fn.bootstrapValidator.helpers.mod_11_10(t);
    },
    _dk: function (e) {
      if (!/^DK[0-9]{8}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [2, 7, 6, 5, 4, 3, 2, 1];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r), 10) * n[r];
      }
      return t % 11 == 0;
    },
    _ee: function (e) {
      if (!/^EE[0-9]{9}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [3, 7, 1, 3, 7, 1, 3, 7, 1];
      for (var r = 0; r < 9; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      return t % 10 == 0;
    },
    _es: function (e) {
      if (!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = function (e) {
          var t = parseInt(e.substr(0, 8), 10);
          t = "TRWAGMYFPDXBNJZSQVHLCKE"[t % 23];
          return t == e.substr(8, 1);
        },
        n = function (e) {
          var t = ["XYZ".indexOf(e.charAt(0)), e.substr(1)].join("");
          t = parseInt(t, 10);
          t = "TRWAGMYFPDXBNJZSQVHLCKE"[t % 23];
          return t == e.substr(8, 1);
        },
        r = function (e) {
          var t = e.charAt(0),
            n;
          if ("KLM".indexOf(t) != -1) {
            n = parseInt(e.substr(1, 8), 10);
            n = "TRWAGMYFPDXBNJZSQVHLCKE"[n % 23];
            return n == e.substr(8, 1);
          } else if ("ABCDEFGHJNPQRSUVW".indexOf(t) != -1) {
            var r = 0,
              i = [2, 1, 2, 1, 2, 1, 2],
              s = 0;
            for (var o = 0; o < 7; o++) {
              s = parseInt(e.charAt(o + 1)) * i[o];
              if (s > 9) {
                s = Math.floor(s / 10) + (s % 10);
              }
              r += s;
            }
            r = 10 - (r % 10);
            return r == e.substr(8, 1) || "JABCDEFGHI"[r] == e.substr(8, 1);
          }
          return false;
        };
      var i = e.charAt(0);
      if (/^[0-9]$/.test(i)) {
        return t(e);
      } else if (/^[XYZ]$/.test(i)) {
        return n(e);
      } else {
        return r(e);
      }
    },
    _fi: function (e) {
      if (!/^FI[0-9]{8}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [7, 9, 10, 5, 8, 4, 2, 1];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      return t % 11 == 0;
    },
    _fr: function (t) {
      if (!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(t)) {
        return false;
      }
      t = t.substr(2);
      if (!e.fn.bootstrapValidator.helpers.luhn(t.substr(2))) {
        return false;
      }
      if (/^[0-9]{2}$/.test(t.substr(0, 2))) {
        return t.substr(0, 2) == parseInt(t.substr(2) + "12", 10) % 97;
      } else {
        var n = "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ",
          r;
        if (/^[0-9]{1}$/.test(t.charAt(0))) {
          r = n.indexOf(t.charAt(0)) * 24 + n.indexOf(t.charAt(1)) - 10;
        } else {
          r = n.indexOf(t.charAt(0)) * 34 + n.indexOf(t.charAt(1)) - 100;
        }
        return (
          (parseInt(t.substr(2), 10) + 1 + Math.floor(r / 11)) % 11 == r % 11
        );
      }
    },
    _gb: function (e) {
      if (
        !/^GB[0-9]{9}$/.test(e) &&
        !/^GB[0-9]{12}$/.test(e) &&
        !/^GBGD[0-9]{3}$/.test(e) &&
        !/^GBHA[0-9]{3}$/.test(e) &&
        !/^GB(GD|HA)8888[0-9]{5}$/.test(e)
      ) {
        return false;
      }
      e = e.substr(2);
      var t = e.length;
      if (t == 5) {
        var n = e.substr(0, 2),
          r = parseInt(e.substr(2));
        return ("GD" == n && r < 500) || ("HA" == n && r >= 500);
      } else if (
        t == 11 &&
        ("GD8888" == e.substr(0, 6) || "HA8888" == e.substr(0, 6))
      ) {
        if (
          ("GD" == e.substr(0, 2) && parseInt(e.substr(6, 3)) >= 500) ||
          ("HA" == e.substr(0, 2) && parseInt(e.substr(6, 3)) < 500)
        ) {
          return false;
        }
        return parseInt(e.substr(6, 3)) % 97 == parseInt(e.substr(9, 2));
      } else if (t == 9 || t == 12) {
        var i = 0,
          s = [8, 7, 6, 5, 4, 3, 2, 10, 1];
        for (var o = 0; o < 9; o++) {
          i += parseInt(e.charAt(o)) * s[o];
        }
        i = i % 97;
        if (parseInt(e.substr(0, 3)) >= 100) {
          return i == 0 || i == 42 || i == 55;
        } else {
          return i == 0;
        }
      }
      return true;
    },
    _gr: function (e) {
      if (!/^GR[0-9]{9}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      if (e.length == 8) {
        e = "0" + e;
      }
      var t = 0,
        n = [256, 128, 64, 32, 16, 8, 4, 2];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      t = (t % 11) % 10;
      return t == e.substr(8, 1);
    },
    _el: function (e) {
      if (!/^EL[0-9]{9}$/.test(e)) {
        return false;
      }
      e = "GR" + e.substr(2);
      return this._gr(e);
    },
    _hu: function (e) {
      if (!/^HU[0-9]{8}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [9, 7, 3, 1, 9, 7, 3, 1];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      return t % 10 == 0;
    },
    _hr: function (t) {
      if (!/^HR[0-9]{11}$/.test(t)) {
        return false;
      }
      t = t.substr(2);
      return e.fn.bootstrapValidator.helpers.mod_11_10(t);
    },
    _ie: function (e) {
      if (!/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = function (e) {
        while (e.length < 7) {
          e = "0" + e;
        }
        var t = "WABCDEFGHIJKLMNOPQRSTUV",
          n = 0;
        for (var r = 0; r < 7; r++) {
          n += parseInt(e.charAt(r)) * (8 - r);
        }
        n += 9 * t.indexOf(e.substr(7));
        return t[n % 23];
      };
      if (/^[0-9]+$/.test(e.substr(0, 7))) {
        return e.charAt(7) == t(e.substr(0, 7) + e.substr(8) + "");
      } else if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(e.charAt(1)) != -1) {
        return e.charAt(7) == t(e.substr(2, 5) + e.substr(0, 1) + "");
      }
      return true;
    },
    _it: function (t) {
      if (!/^IT[0-9]{11}$/.test(t)) {
        return false;
      }
      t = t.substr(2);
      if (parseInt(t.substr(0, 7)) == 0) {
        return false;
      }
      var n = parseInt(t.substr(7, 3));
      if (n < 1 || (n > 201 && n != 999 && n != 888)) {
        return false;
      }
      return e.fn.bootstrapValidator.helpers.luhn(t);
    },
    _lt: function (e) {
      if (!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = e.length,
        n = 0;
      for (var r = 0; r < t - 1; r++) {
        n += parseInt(e.charAt(r)) * (1 + (r % 9));
      }
      var i = n % 11;
      if (i == 10) {
        n = 0;
        for (var r = 0; r < t - 1; r++) {
          n += parseInt(e.charAt(r)) * (1 + ((r + 2) % 9));
        }
      }
      i = (i % 11) % 10;
      return i == e.charAt(t - 1);
    },
    _lu: function (e) {
      if (!/^LU[0-9]{8}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      return e.substr(0, 6) % 89 == e.substr(6, 2);
    },
    _lv: function (t) {
      if (!/^LV[0-9]{11}$/.test(t)) {
        return false;
      }
      t = t.substr(2);
      var n = parseInt(t.charAt(0)),
        r = 0,
        i = [],
        s = 0,
        o = t.length;
      if (n > 3) {
        r = 0;
        i = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
        for (s = 0; s < o; s++) {
          r += parseInt(t.charAt(s)) * i[s];
        }
        r = r % 11;
        return r == 3;
      } else {
        var u = parseInt(t.substr(0, 2)),
          a = parseInt(t.substr(2, 2)),
          f = parseInt(t.substr(4, 2));
        f = f + 1800 + parseInt(t.charAt(6)) * 100;
        if (!e.fn.bootstrapValidator.helpers.date(f, a, u)) {
          return false;
        }
        r = 0;
        i = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
        for (s = 0; s < o - 1; s++) {
          r += parseInt(t.charAt(s)) * i[s];
        }
        r = ((r + 1) % 11) % 10;
        return r == t.charAt(o - 1);
      }
      return true;
    },
    _mt: function (e) {
      if (!/^MT[0-9]{8}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [3, 4, 6, 7, 8, 9, 10, 1];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      return t % 37 == 0;
    },
    _nl: function (e) {
      if (!/^NL[0-9]{9}B[0-9]{2}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [9, 8, 7, 6, 5, 4, 3, 2];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      t = t % 11;
      if (t > 9) {
        t = 0;
      }
      return t == e.substr(8, 1);
    },
    _no: function (e) {
      if (!/^NO[0-9]{9}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [3, 2, 7, 6, 5, 4, 3, 2];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      t = 11 - (t % 11);
      if (t == 11) {
        t = 0;
      }
      return t == e.substr(8, 1);
    },
    _pl: function (e) {
      if (!/^PL[0-9]{10}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1];
      for (var r = 0; r < 10; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      return t % 11 == 0;
    },
    _pt: function (e) {
      if (!/^PT[0-9]{9}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [9, 8, 7, 6, 5, 4, 3, 2];
      for (var r = 0; r < 8; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      t = 11 - (t % 11);
      if (t > 9) {
        t = 0;
      }
      return t == e.substr(8, 1);
    },
    _ro: function (e) {
      if (!/^RO[1-9][0-9]{1,9}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = e.length,
        n = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - t),
        r = 0;
      for (var i = 0; i < t - 1; i++) {
        r += parseInt(e.charAt(i)) * n[i];
      }
      r = ((10 * r) % 11) % 10;
      return r == e.substr(t - 1, 1);
    },
    _ru: function (e) {
      if (!/^RU([0-9]{9}|[0-9]{12})$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      if (e.length == 10) {
        var t = 0,
          n = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        for (var r = 0; r < 10; r++) {
          t += parseInt(e.charAt(r)) * n[r];
        }
        t = t % 11;
        if (t > 9) {
          t = t % 10;
        }
        return t == e.substr(9, 1);
      } else if (e.length == 12) {
        var i = 0,
          s = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0],
          o = 0,
          u = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
        for (var r = 0; r < 11; r++) {
          i += parseInt(e.charAt(r)) * s[r];
          o += parseInt(e.charAt(r)) * u[r];
        }
        i = i % 11;
        if (i > 9) {
          i = i % 10;
        }
        o = o % 11;
        if (o > 9) {
          o = o % 10;
        }
        return i == e.substr(10, 1) && o == e.substr(11, 1);
      }
      return false;
    },
    _rs: function (e) {
      if (!/^RS[0-9]{9}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 10,
        n = 0;
      for (var r = 0; r < 8; r++) {
        n = (parseInt(e.charAt(r)) + t) % 10;
        if (n == 0) {
          n = 10;
        }
        t = (2 * n) % 11;
      }
      return (t + parseInt(e.substr(8, 1))) % 10 == 1;
    },
    _se: function (t) {
      if (!/^SE[0-9]{10}01$/.test(t)) {
        return false;
      }
      t = t.substr(2, 10);
      return e.fn.bootstrapValidator.helpers.luhn(t);
    },
    _si: function (e) {
      if (!/^SI[0-9]{8}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      var t = 0,
        n = [8, 7, 6, 5, 4, 3, 2];
      for (var r = 0; r < 7; r++) {
        t += parseInt(e.charAt(r)) * n[r];
      }
      t = 11 - (t % 11);
      if (t == 10) {
        t = 0;
      }
      return t == e.substr(7, 1);
    },
    _sk: function (e) {
      if (!/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(e)) {
        return false;
      }
      e = e.substr(2);
      return e % 11 == 0;
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.vin = {
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "") {
        return true;
      }
      if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(r)) {
        return false;
      }
      r = r.toUpperCase();
      var i = {
          A: 1,
          B: 2,
          C: 3,
          D: 4,
          E: 5,
          F: 6,
          G: 7,
          H: 8,
          J: 1,
          K: 2,
          L: 3,
          M: 4,
          N: 5,
          P: 7,
          R: 9,
          S: 2,
          T: 3,
          U: 4,
          V: 5,
          W: 6,
          X: 7,
          Y: 8,
          Z: 9,
          1: 1,
          2: 2,
          3: 3,
          4: 4,
          5: 5,
          6: 6,
          7: 7,
          8: 8,
          9: 9,
          0: 0,
        },
        s = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
        o = 0,
        u = r.length;
      for (var a = 0; a < u; a++) {
        o += i[r.charAt(a) + ""] * s[a];
      }
      var f = o % 11;
      if (f == 10) {
        f = "X";
      }
      return f == r.charAt(8);
    },
  };
})(window.jQuery);
(function (e) {
  e.fn.bootstrapValidator.validators.zipCode = {
    html5Attributes: { message: "message", country: "country" },
    validate: function (e, t, n) {
      var r = t.val();
      if (r == "" || !n.country) {
        return true;
      }
      var i = (n.country || "US").toUpperCase();
      switch (i) {
        case "CA":
          return /(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}\s?[0-9]{1}(?:A|B|C|E|G|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}/i.test(
            r
          );
        case "DK":
          return /^(DK(-|\s)?)?\d{4}$/i.test(r);
        case "GB":
          return this._gb(r);
        case "IT":
          return /^(I-|IT-)?\d{5}$/i.test(r);
        case "NL":
          return /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(r);
        case "SE":
          return /^(S-)?\d{3}\s?\d{2}$/i.test(r);
        case "US":
        default:
          return /^\d{4,5}([\-]\d{4})?$/.test(r);
      }
    },
    _gb: function (e) {
      var t = "[ABCDEFGHIJKLMNOPRSTUWYZ]",
        n = "[ABCDEFGHKLMNOPQRSTUVWXY]",
        r = "[ABCDEFGHJKPMNRSTUVWXY]",
        i = "[ABEHMNPRVWXY]",
        s = "[ABDEFGHJLNPQRSTUWXYZ]",
        o = [
          new RegExp(
            "^(" + t + "{1}" + n + "?[0-9]{1,2})(\\s*)([0-9]{1}" + s + "{2})$",
            "i"
          ),
          new RegExp(
            "^(" + t + "{1}[0-9]{1}" + r + "{1})(\\s*)([0-9]{1}" + s + "{2})$",
            "i"
          ),
          new RegExp(
            "^(" +
              t +
              "{1}" +
              n +
              "{1}?[0-9]{1}" +
              i +
              "{1})(\\s*)([0-9]{1}" +
              s +
              "{2})$",
            "i"
          ),
          new RegExp(
            "^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$",
            "i"
          ),
          /^(GIR)(\s*)(0AA)$/i,
          /^(BFPO)(\s*)([0-9]{1,4})$/i,
          /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,
          /^([A-Z]{4})(\s*)(1ZZ)$/i,
          /^(AI-2640)$/i,
        ];
      for (var u = 0; u < o.length; u++) {
        if (o[u].test(e)) {
          return true;
        }
      }
      return false;
    },
  };
})(window.jQuery);
