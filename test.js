/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var X_ = Object.create;
  var nn = Object.defineProperty;
  var B_ = Object.getOwnPropertyDescriptor;
  var j_ = Object.getOwnPropertyNames;
  var z_ = Object.getPrototypeOf,
    K_ = Object.prototype.hasOwnProperty;
  var ge = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Fe = (e, t) => {
      for (var r in t) nn(e, r, { get: t[r], enumerable: !0 });
    },
    Ss = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of j_(t))
          !K_.call(e, i) &&
            i !== r &&
            nn(e, i, {
              get: () => t[i],
              enumerable: !(n = B_(t, i)) || n.enumerable,
            });
      return e;
    };
  var le = (e, t, r) => (
      (r = e != null ? X_(z_(e)) : {}),
      Ss(
        t || !e || !e.__esModule
          ? nn(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    rt = (e) => Ss(nn({}, "__esModule", { value: !0 }), e);
  var Ri = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, _) {
        var x = new E.Bare();
        return x.init(l, _);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (_) {
          return "-" + _.toLowerCase();
        });
      }
      function n(l) {
        var _ = parseInt(l.slice(1), 16),
          x = (_ >> 16) & 255,
          A = (_ >> 8) & 255,
          I = 255 & _;
        return [x, A, I];
      }
      function i(l, _, x) {
        return (
          "#" + ((1 << 24) | (l << 16) | (_ << 8) | x).toString(16).slice(1)
        );
      }
      function o() {}
      function a(l, _) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof _ + "] " + _);
      }
      function s(l, _, x) {
        f("Units do not match [" + l + "]: " + _ + ", " + x);
      }
      function u(l, _, x) {
        if ((_ !== void 0 && (x = _), l === void 0)) return x;
        var A = x;
        return (
          Me.test(l) || !Xe.test(l)
            ? (A = parseInt(l, 10))
            : Xe.test(l) && (A = 1e3 * parseFloat(l)),
          0 > A && (A = 0),
          A === A ? A : x
        );
      }
      function f(l) {
        oe.debug && window && window.console.warn(l);
      }
      function h(l) {
        for (var _ = -1, x = l ? l.length : 0, A = []; ++_ < x; ) {
          var I = l[_];
          I && A.push(I);
        }
        return A;
      }
      var v = (function (l, _, x) {
          function A(ie) {
            return typeof ie == "object";
          }
          function I(ie) {
            return typeof ie == "function";
          }
          function C() {}
          function Z(ie, ve) {
            function W() {
              var Ce = new ae();
              return I(Ce.init) && Ce.init.apply(Ce, arguments), Ce;
            }
            function ae() {}
            ve === x && ((ve = ie), (ie = Object)), (W.Bare = ae);
            var se,
              be = (C[l] = ie[l]),
              tt = (ae[l] = W[l] = new C());
            return (
              (tt.constructor = W),
              (W.mixin = function (Ce) {
                return (ae[l] = W[l] = Z(W, Ce)[l]), W;
              }),
              (W.open = function (Ce) {
                if (
                  ((se = {}),
                  I(Ce) ? (se = Ce.call(W, tt, be, W, ie)) : A(Ce) && (se = Ce),
                  A(se))
                )
                  for (var mr in se) _.call(se, mr) && (tt[mr] = se[mr]);
                return I(tt.init) || (tt.init = ie), W;
              }),
              W.open(ve)
            );
          }
          return Z;
        })("prototype", {}.hasOwnProperty),
        g = {
          ease: [
            "ease",
            function (l, _, x, A) {
              var I = (l /= A) * l,
                C = I * l;
              return (
                _ +
                x * (-2.75 * C * I + 11 * I * I + -15.5 * C + 8 * I + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, _, x, A) {
              var I = (l /= A) * l,
                C = I * l;
              return _ + x * (-1 * C * I + 3 * I * I + -3 * C + 2 * I);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, _, x, A) {
              var I = (l /= A) * l,
                C = I * l;
              return (
                _ +
                x * (0.3 * C * I + -1.6 * I * I + 2.2 * C + -1.8 * I + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, _, x, A) {
              var I = (l /= A) * l,
                C = I * l;
              return _ + x * (2 * C * I + -5 * I * I + 2 * C + 2 * I);
            },
          ],
          linear: [
            "linear",
            function (l, _, x, A) {
              return (x * l) / A + _;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, _, x, A) {
              return x * (l /= A) * l + _;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, _, x, A) {
              return -x * (l /= A) * (l - 2) + _;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, _, x, A) {
              return (l /= A / 2) < 1
                ? (x / 2) * l * l + _
                : (-x / 2) * (--l * (l - 2) - 1) + _;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, _, x, A) {
              return x * (l /= A) * l * l + _;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, _, x, A) {
              return x * ((l = l / A - 1) * l * l + 1) + _;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, _, x, A) {
              return (l /= A / 2) < 1
                ? (x / 2) * l * l * l + _
                : (x / 2) * ((l -= 2) * l * l + 2) + _;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, _, x, A) {
              return x * (l /= A) * l * l * l + _;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, _, x, A) {
              return -x * ((l = l / A - 1) * l * l * l - 1) + _;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, _, x, A) {
              return (l /= A / 2) < 1
                ? (x / 2) * l * l * l * l + _
                : (-x / 2) * ((l -= 2) * l * l * l - 2) + _;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, _, x, A) {
              return x * (l /= A) * l * l * l * l + _;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, _, x, A) {
              return x * ((l = l / A - 1) * l * l * l * l + 1) + _;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, _, x, A) {
              return (l /= A / 2) < 1
                ? (x / 2) * l * l * l * l * l + _
                : (x / 2) * ((l -= 2) * l * l * l * l + 2) + _;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, _, x, A) {
              return -x * Math.cos((l / A) * (Math.PI / 2)) + x + _;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, _, x, A) {
              return x * Math.sin((l / A) * (Math.PI / 2)) + _;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, _, x, A) {
              return (-x / 2) * (Math.cos((Math.PI * l) / A) - 1) + _;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, _, x, A) {
              return l === 0 ? _ : x * Math.pow(2, 10 * (l / A - 1)) + _;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, _, x, A) {
              return l === A
                ? _ + x
                : x * (-Math.pow(2, (-10 * l) / A) + 1) + _;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, _, x, A) {
              return l === 0
                ? _
                : l === A
                ? _ + x
                : (l /= A / 2) < 1
                ? (x / 2) * Math.pow(2, 10 * (l - 1)) + _
                : (x / 2) * (-Math.pow(2, -10 * --l) + 2) + _;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, _, x, A) {
              return -x * (Math.sqrt(1 - (l /= A) * l) - 1) + _;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, _, x, A) {
              return x * Math.sqrt(1 - (l = l / A - 1) * l) + _;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, _, x, A) {
              return (l /= A / 2) < 1
                ? (-x / 2) * (Math.sqrt(1 - l * l) - 1) + _
                : (x / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + _;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, _, x, A, I) {
              return (
                I === void 0 && (I = 1.70158),
                x * (l /= A) * l * ((I + 1) * l - I) + _
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, _, x, A, I) {
              return (
                I === void 0 && (I = 1.70158),
                x * ((l = l / A - 1) * l * ((I + 1) * l + I) + 1) + _
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, _, x, A, I) {
              return (
                I === void 0 && (I = 1.70158),
                (l /= A / 2) < 1
                  ? (x / 2) * l * l * (((I *= 1.525) + 1) * l - I) + _
                  : (x / 2) *
                      ((l -= 2) * l * (((I *= 1.525) + 1) * l + I) + 2) +
                    _
              );
            },
          ],
        },
        m = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        T = document,
        O = window,
        M = "bkwld-tram",
        R = /[\-\.0-9]/g,
        L = /[A-Z]/,
        S = "number",
        P = /^(rgb|#)/,
        q = /(em|cm|mm|in|pt|pc|px)$/,
        N = /(em|cm|mm|in|pt|pc|px|%)$/,
        H = /(deg|rad|turn)$/,
        B = "unitless",
        K = /(all|none) 0s ease 0s/,
        J = /^(width|height)$/,
        re = " ",
        G = T.createElement("a"),
        w = ["Webkit", "Moz", "O", "ms"],
        D = ["-webkit-", "-moz-", "-o-", "-ms-"],
        X = function (l) {
          if (l in G.style) return { dom: l, css: l };
          var _,
            x,
            A = "",
            I = l.split("-");
          for (_ = 0; _ < I.length; _++)
            A += I[_].charAt(0).toUpperCase() + I[_].slice(1);
          for (_ = 0; _ < w.length; _++)
            if (((x = w[_] + A), x in G.style))
              return { dom: x, css: D[_] + l };
        },
        k = (t.support = {
          bind: Function.prototype.bind,
          transform: X("transform"),
          transition: X("transition"),
          backface: X("backface-visibility"),
          timing: X("transition-timing-function"),
        });
      if (k.transition) {
        var ee = k.timing.dom;
        if (((G.style[ee] = g["ease-in-back"][0]), !G.style[ee]))
          for (var ne in m) g[ne][0] = m[ne];
      }
      var F = (t.frame = (function () {
          var l =
            O.requestAnimationFrame ||
            O.webkitRequestAnimationFrame ||
            O.mozRequestAnimationFrame ||
            O.oRequestAnimationFrame ||
            O.msRequestAnimationFrame;
          return l && k.bind
            ? l.bind(O)
            : function (_) {
                O.setTimeout(_, 16);
              };
        })()),
        z = (t.now = (function () {
          var l = O.performance,
            _ = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return _ && k.bind
            ? _.bind(l)
            : Date.now ||
                function () {
                  return +new Date();
                };
        })()),
        d = v(function (l) {
          function _(te, ce) {
            var me = h(("" + te).split(re)),
              de = me[0];
            ce = ce || {};
            var Le = V[de];
            if (!Le) return f("Unsupported property: " + de);
            if (!ce.weak || !this.props[de]) {
              var je = Le[0],
                De = this.props[de];
              return (
                De || (De = this.props[de] = new je.Bare()),
                De.init(this.$el, me, Le, ce),
                De
              );
            }
          }
          function x(te, ce, me) {
            if (te) {
              var de = typeof te;
              if (
                (ce ||
                  (this.timer && this.timer.destroy(),
                  (this.queue = []),
                  (this.active = !1)),
                de == "number" && ce)
              )
                return (
                  (this.timer = new ue({
                    duration: te,
                    context: this,
                    complete: C,
                  })),
                  void (this.active = !0)
                );
              if (de == "string" && ce) {
                switch (te) {
                  case "hide":
                    W.call(this);
                    break;
                  case "stop":
                    Z.call(this);
                    break;
                  case "redraw":
                    ae.call(this);
                    break;
                  default:
                    _.call(this, te, me && me[1]);
                }
                return C.call(this);
              }
              if (de == "function") return void te.call(this, this);
              if (de == "object") {
                var Le = 0;
                tt.call(
                  this,
                  te,
                  function (Te, H_) {
                    Te.span > Le && (Le = Te.span), Te.stop(), Te.animate(H_);
                  },
                  function (Te) {
                    "wait" in Te && (Le = u(Te.wait, 0));
                  }
                ),
                  be.call(this),
                  Le > 0 &&
                    ((this.timer = new ue({ duration: Le, context: this })),
                    (this.active = !0),
                    ce && (this.timer.complete = C));
                var je = this,
                  De = !1,
                  rn = {};
                F(function () {
                  tt.call(je, te, function (Te) {
                    Te.active && ((De = !0), (rn[Te.name] = Te.nextStyle));
                  }),
                    De && je.$el.css(rn);
                });
              }
            }
          }
          function A(te) {
            (te = u(te, 0)),
              this.active
                ? this.queue.push({ options: te })
                : ((this.timer = new ue({
                    duration: te,
                    context: this,
                    complete: C,
                  })),
                  (this.active = !0));
          }
          function I(te) {
            return this.active
              ? (this.queue.push({ options: te, args: arguments }),
                void (this.timer.complete = C))
              : f(
                  "No active transition timer. Use start() or wait() before then()."
                );
          }
          function C() {
            if (
              (this.timer && this.timer.destroy(),
              (this.active = !1),
              this.queue.length)
            ) {
              var te = this.queue.shift();
              x.call(this, te.options, !0, te.args);
            }
          }
          function Z(te) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ce;
            typeof te == "string"
              ? ((ce = {}), (ce[te] = 1))
              : (ce = typeof te == "object" && te != null ? te : this.props),
              tt.call(this, ce, Ce),
              be.call(this);
          }
          function ie(te) {
            Z.call(this, te), tt.call(this, te, mr, W_);
          }
          function ve(te) {
            typeof te != "string" && (te = "block"),
              (this.el.style.display = te);
          }
          function W() {
            Z.call(this), (this.el.style.display = "none");
          }
          function ae() {
            this.el.offsetHeight;
          }
          function se() {
            Z.call(this), e.removeData(this.el, M), (this.$el = this.el = null);
          }
          function be() {
            var te,
              ce,
              me = [];
            this.upstream && me.push(this.upstream);
            for (te in this.props)
              (ce = this.props[te]), ce.active && me.push(ce.string);
            (me = me.join(",")),
              this.style !== me &&
                ((this.style = me), (this.el.style[k.transition.dom] = me));
          }
          function tt(te, ce, me) {
            var de,
              Le,
              je,
              De,
              rn = ce !== Ce,
              Te = {};
            for (de in te)
              (je = te[de]),
                de in fe
                  ? (Te.transform || (Te.transform = {}),
                    (Te.transform[de] = je))
                  : (L.test(de) && (de = r(de)),
                    de in V ? (Te[de] = je) : (De || (De = {}), (De[de] = je)));
            for (de in Te) {
              if (((je = Te[de]), (Le = this.props[de]), !Le)) {
                if (!rn) continue;
                Le = _.call(this, de);
              }
              ce.call(this, Le, je);
            }
            me && De && me.call(this, De);
          }
          function Ce(te) {
            te.stop();
          }
          function mr(te, ce) {
            te.set(ce);
          }
          function W_(te) {
            this.$el.css(te);
          }
          function Be(te, ce) {
            l[te] = function () {
              return this.children
                ? k_.call(this, ce, arguments)
                : (this.el && ce.apply(this, arguments), this);
            };
          }
          function k_(te, ce) {
            var me,
              de = this.children.length;
            for (me = 0; de > me; me++) te.apply(this.children[me], ce);
            return this;
          }
          (l.init = function (te) {
            if (
              ((this.$el = e(te)),
              (this.el = this.$el[0]),
              (this.props = {}),
              (this.queue = []),
              (this.style = ""),
              (this.active = !1),
              oe.keepInherited && !oe.fallback)
            ) {
              var ce = U(this.el, "transition");
              ce && !K.test(ce) && (this.upstream = ce);
            }
            k.backface &&
              oe.hideBackface &&
              p(this.el, k.backface.css, "hidden");
          }),
            Be("add", _),
            Be("start", x),
            Be("wait", A),
            Be("then", I),
            Be("next", C),
            Be("stop", Z),
            Be("set", ie),
            Be("show", ve),
            Be("hide", W),
            Be("redraw", ae),
            Be("destroy", se);
        }),
        E = v(d, function (l) {
          function _(x, A) {
            var I = e.data(x, M) || e.data(x, M, new d.Bare());
            return I.el || I.init(x), A ? I.start(A) : I;
          }
          l.init = function (x, A) {
            var I = e(x);
            if (!I.length) return this;
            if (I.length === 1) return _(I[0], A);
            var C = [];
            return (
              I.each(function (Z, ie) {
                C.push(_(ie, A));
              }),
              (this.children = C),
              this
            );
          };
        }),
        b = v(function (l) {
          function _() {
            var C = this.get();
            this.update("auto");
            var Z = this.get();
            return this.update(C), Z;
          }
          function x(C, Z, ie) {
            return Z !== void 0 && (ie = Z), C in g ? C : ie;
          }
          function A(C) {
            var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
            return (Z ? i(Z[1], Z[2], Z[3]) : C).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var I = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (C, Z, ie, ve) {
            (this.$el = C), (this.el = C[0]);
            var W = Z[0];
            ie[2] && (W = ie[2]),
              Y[W] && (W = Y[W]),
              (this.name = W),
              (this.type = ie[1]),
              (this.duration = u(Z[1], this.duration, I.duration)),
              (this.ease = x(Z[2], this.ease, I.ease)),
              (this.delay = u(Z[3], this.delay, I.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = J.test(this.name)),
              (this.unit = ve.unit || this.unit || oe.defaultUnit),
              (this.angle = ve.angle || this.angle || oe.defaultAngle),
              oe.fallback || ve.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    re +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? re + g[this.ease][0] : "") +
                    (this.delay ? re + this.delay + "ms" : "")));
          }),
            (l.set = function (C) {
              (C = this.convert(C, this.type)), this.update(C), this.redraw();
            }),
            (l.transition = function (C) {
              (this.active = !0),
                (C = this.convert(C, this.type)),
                this.auto &&
                  (this.el.style[this.name] == "auto" &&
                    (this.update(this.get()), this.redraw()),
                  C == "auto" && (C = _.call(this))),
                (this.nextStyle = C);
            }),
            (l.fallback = function (C) {
              var Z =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (C = this.convert(C, this.type)),
                this.auto &&
                  (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                  C == "auto" && (C = _.call(this))),
                (this.tween = new Q({
                  from: Z,
                  to: C,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return U(this.el, this.name);
            }),
            (l.update = function (C) {
              p(this.el, this.name, C);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                (this.nextStyle = null),
                p(this.el, this.name, this.get()));
              var C = this.tween;
              C && C.context && C.destroy();
            }),
            (l.convert = function (C, Z) {
              if (C == "auto" && this.auto) return C;
              var ie,
                ve = typeof C == "number",
                W = typeof C == "string";
              switch (Z) {
                case S:
                  if (ve) return C;
                  if (W && C.replace(R, "") === "") return +C;
                  ie = "number(unitless)";
                  break;
                case P:
                  if (W) {
                    if (C === "" && this.original) return this.original;
                    if (Z.test(C))
                      return C.charAt(0) == "#" && C.length == 7 ? C : A(C);
                  }
                  ie = "hex or rgb string";
                  break;
                case q:
                  if (ve) return C + this.unit;
                  if (W && Z.test(C)) return C;
                  ie = "number(px) or string(unit)";
                  break;
                case N:
                  if (ve) return C + this.unit;
                  if (W && Z.test(C)) return C;
                  ie = "number(px) or string(unit or %)";
                  break;
                case H:
                  if (ve) return C + this.angle;
                  if (W && Z.test(C)) return C;
                  ie = "number(deg) or string(angle)";
                  break;
                case B:
                  if (ve || (W && N.test(C))) return C;
                  ie = "number(unitless) or string(unit or %)";
              }
              return a(ie, C), C;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        y = v(b, function (l, _) {
          l.init = function () {
            _.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), P));
          };
        }),
        j = v(b, function (l, _) {
          (l.init = function () {
            _.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (x) {
              this.$el[this.name](x);
            });
        }),
        $ = v(b, function (l, _) {
          function x(A, I) {
            var C, Z, ie, ve, W;
            for (C in A)
              (ve = fe[C]),
                (ie = ve[0]),
                (Z = ve[1] || C),
                (W = this.convert(A[C], ie)),
                I.call(this, Z, W, ie);
          }
          (l.init = function () {
            _.init.apply(this, arguments),
              this.current ||
                ((this.current = {}),
                fe.perspective &&
                  oe.perspective &&
                  ((this.current.perspective = oe.perspective),
                  p(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (A) {
              x.call(this, A, function (I, C) {
                this.current[I] = C;
              }),
                p(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (A) {
              var I = this.values(A);
              this.tween = new _e({
                current: this.current,
                values: I,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var C,
                Z = {};
              for (C in this.current) Z[C] = C in I ? I[C] : this.current[C];
              (this.active = !0), (this.nextStyle = this.style(Z));
            }),
            (l.fallback = function (A) {
              var I = this.values(A);
              this.tween = new _e({
                current: this.current,
                values: I,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              p(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (A) {
              var I,
                C = "";
              for (I in A) C += I + "(" + A[I] + ") ";
              return C;
            }),
            (l.values = function (A) {
              var I,
                C = {};
              return (
                x.call(this, A, function (Z, ie, ve) {
                  (C[Z] = ie),
                    this.current[Z] === void 0 &&
                      ((I = 0),
                      ~Z.indexOf("scale") && (I = 1),
                      (this.current[Z] = this.convert(I, ve)));
                }),
                C
              );
            });
        }),
        Q = v(function (l) {
          function _(W) {
            ie.push(W) === 1 && F(x);
          }
          function x() {
            var W,
              ae,
              se,
              be = ie.length;
            if (be)
              for (F(x), ae = z(), W = be; W--; )
                (se = ie[W]), se && se.render(ae);
          }
          function A(W) {
            var ae,
              se = e.inArray(W, ie);
            se >= 0 &&
              ((ae = ie.slice(se + 1)),
              (ie.length = se),
              ae.length && (ie = ie.concat(ae)));
          }
          function I(W) {
            return Math.round(W * ve) / ve;
          }
          function C(W, ae, se) {
            return i(
              W[0] + se * (ae[0] - W[0]),
              W[1] + se * (ae[1] - W[1]),
              W[2] + se * (ae[2] - W[2])
            );
          }
          var Z = { ease: g.ease[1], from: 0, to: 1 };
          (l.init = function (W) {
            (this.duration = W.duration || 0), (this.delay = W.delay || 0);
            var ae = W.ease || Z.ease;
            g[ae] && (ae = g[ae][1]),
              typeof ae != "function" && (ae = Z.ease),
              (this.ease = ae),
              (this.update = W.update || o),
              (this.complete = W.complete || o),
              (this.context = W.context || this),
              (this.name = W.name);
            var se = W.from,
              be = W.to;
            se === void 0 && (se = Z.from),
              be === void 0 && (be = Z.to),
              (this.unit = W.unit || ""),
              typeof se == "number" && typeof be == "number"
                ? ((this.begin = se), (this.change = be - se))
                : this.format(be, se),
              (this.value = this.begin + this.unit),
              (this.start = z()),
              W.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = z()), (this.active = !0), _(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), A(this));
            }),
            (l.render = function (W) {
              var ae,
                se = W - this.start;
              if (this.delay) {
                if (se <= this.delay) return;
                se -= this.delay;
              }
              if (se < this.duration) {
                var be = this.ease(se, 0, 1, this.duration);
                return (
                  (ae = this.startRGB
                    ? C(this.startRGB, this.endRGB, be)
                    : I(this.begin + be * this.change)),
                  (this.value = ae + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (ae = this.endHex || this.begin + this.change),
                (this.value = ae + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (W, ae) {
              if (((ae += ""), (W += ""), W.charAt(0) == "#"))
                return (
                  (this.startRGB = n(ae)),
                  (this.endRGB = n(W)),
                  (this.endHex = W),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var se = ae.replace(R, ""),
                  be = W.replace(R, "");
                se !== be && s("tween", ae, W), (this.unit = se);
              }
              (ae = parseFloat(ae)),
                (W = parseFloat(W)),
                (this.begin = this.value = ae),
                (this.change = W - ae);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ie = [],
            ve = 1e3;
        }),
        ue = v(Q, function (l) {
          (l.init = function (_) {
            (this.duration = _.duration || 0),
              (this.complete = _.complete || o),
              (this.context = _.context),
              this.play();
          }),
            (l.render = function (_) {
              var x = _ - this.start;
              x < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        _e = v(Q, function (l, _) {
          (l.init = function (x) {
            (this.context = x.context),
              (this.update = x.update),
              (this.tweens = []),
              (this.current = x.current);
            var A, I;
            for (A in x.values)
              (I = x.values[A]),
                this.current[A] !== I &&
                  this.tweens.push(
                    new Q({
                      name: A,
                      from: this.current[A],
                      to: I,
                      duration: x.duration,
                      delay: x.delay,
                      ease: x.ease,
                      autoplay: !1,
                    })
                  );
            this.play();
          }),
            (l.render = function (x) {
              var A,
                I,
                C = this.tweens.length,
                Z = !1;
              for (A = C; A--; )
                (I = this.tweens[A]),
                  I.context &&
                    (I.render(x), (this.current[I.name] = I.value), (Z = !0));
              return Z
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((_.destroy.call(this), this.tweens)) {
                var x,
                  A = this.tweens.length;
                for (x = A; x--; ) this.tweens[x].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        oe = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !k.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!k.transition) return (oe.fallback = !0);
        oe.agentTests.push("(" + l + ")");
        var _ = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = _.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new Q(l);
        }),
        (t.delay = function (l, _, x) {
          return new ue({ complete: _, duration: l, context: x });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var p = e.style,
        U = e.css,
        Y = { transform: k.transform && k.transform.css },
        V = {
          color: [y, P],
          background: [y, P, "background-color"],
          "outline-color": [y, P],
          "border-color": [y, P],
          "border-top-color": [y, P],
          "border-right-color": [y, P],
          "border-bottom-color": [y, P],
          "border-left-color": [y, P],
          "border-width": [b, q],
          "border-top-width": [b, q],
          "border-right-width": [b, q],
          "border-bottom-width": [b, q],
          "border-left-width": [b, q],
          "border-spacing": [b, q],
          "letter-spacing": [b, q],
          margin: [b, q],
          "margin-top": [b, q],
          "margin-right": [b, q],
          "margin-bottom": [b, q],
          "margin-left": [b, q],
          padding: [b, q],
          "padding-top": [b, q],
          "padding-right": [b, q],
          "padding-bottom": [b, q],
          "padding-left": [b, q],
          "outline-width": [b, q],
          opacity: [b, S],
          top: [b, N],
          right: [b, N],
          bottom: [b, N],
          left: [b, N],
          "font-size": [b, N],
          "text-indent": [b, N],
          "word-spacing": [b, N],
          width: [b, N],
          "min-width": [b, N],
          "max-width": [b, N],
          height: [b, N],
          "min-height": [b, N],
          "max-height": [b, N],
          "line-height": [b, B],
          "scroll-top": [j, S, "scrollTop"],
          "scroll-left": [j, S, "scrollLeft"],
        },
        fe = {};
      k.transform &&
        ((V.transform = [$]),
        (fe = {
          x: [N, "translateX"],
          y: [N, "translateY"],
          rotate: [H],
          rotateX: [H],
          rotateY: [H],
          scale: [S],
          scaleX: [S],
          scaleY: [S],
          skew: [H],
          skewX: [H],
          skewY: [H],
        })),
        k.transform &&
          k.backface &&
          ((fe.z = [N, "translateZ"]),
          (fe.rotateZ = [H]),
          (fe.scaleZ = [S]),
          (fe.perspective = [q]));
      var Me = /ms/,
        Xe = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Cs = c((qW, Rs) => {
    "use strict";
    var Y_ = window.$,
      $_ = Ri() && Y_.tram;
    Rs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        h = r.forEach,
        v = r.map,
        g = r.reduce,
        m = r.reduceRight,
        T = r.filter,
        O = r.every,
        M = r.some,
        R = r.indexOf,
        L = r.lastIndexOf,
        S = Array.isArray,
        P = Object.keys,
        q = i.bind,
        N =
          (e.each =
          e.forEach =
            function (w, D, X) {
              if (w == null) return w;
              if (h && w.forEach === h) w.forEach(D, X);
              else if (w.length === +w.length) {
                for (var k = 0, ee = w.length; k < ee; k++)
                  if (D.call(X, w[k], k, w) === t) return;
              } else
                for (var ne = e.keys(w), k = 0, ee = ne.length; k < ee; k++)
                  if (D.call(X, w[ne[k]], ne[k], w) === t) return;
              return w;
            });
      (e.map = e.collect =
        function (w, D, X) {
          var k = [];
          return w == null
            ? k
            : v && w.map === v
            ? w.map(D, X)
            : (N(w, function (ee, ne, F) {
                k.push(D.call(X, ee, ne, F));
              }),
              k);
        }),
        (e.find = e.detect =
          function (w, D, X) {
            var k;
            return (
              H(w, function (ee, ne, F) {
                if (D.call(X, ee, ne, F)) return (k = ee), !0;
              }),
              k
            );
          }),
        (e.filter = e.select =
          function (w, D, X) {
            var k = [];
            return w == null
              ? k
              : T && w.filter === T
              ? w.filter(D, X)
              : (N(w, function (ee, ne, F) {
                  D.call(X, ee, ne, F) && k.push(ee);
                }),
                k);
          });
      var H =
        (e.some =
        e.any =
          function (w, D, X) {
            D || (D = e.identity);
            var k = !1;
            return w == null
              ? k
              : M && w.some === M
              ? w.some(D, X)
              : (N(w, function (ee, ne, F) {
                  if (k || (k = D.call(X, ee, ne, F))) return t;
                }),
                !!k);
          });
      (e.contains = e.include =
        function (w, D) {
          return w == null
            ? !1
            : R && w.indexOf === R
            ? w.indexOf(D) != -1
            : H(w, function (X) {
                return X === D;
              });
        }),
        (e.delay = function (w, D) {
          var X = a.call(arguments, 2);
          return setTimeout(function () {
            return w.apply(null, X);
          }, D);
        }),
        (e.defer = function (w) {
          return e.delay.apply(e, [w, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (w) {
          var D, X, k;
          return function () {
            D ||
              ((D = !0),
              (X = arguments),
              (k = this),
              $_.frame(function () {
                (D = !1), w.apply(k, X);
              }));
          };
        }),
        (e.debounce = function (w, D, X) {
          var k,
            ee,
            ne,
            F,
            z,
            d = function () {
              var E = e.now() - F;
              E < D
                ? (k = setTimeout(d, D - E))
                : ((k = null), X || ((z = w.apply(ne, ee)), (ne = ee = null)));
            };
          return function () {
            (ne = this), (ee = arguments), (F = e.now());
            var E = X && !k;
            return (
              k || (k = setTimeout(d, D)),
              E && ((z = w.apply(ne, ee)), (ne = ee = null)),
              z
            );
          };
        }),
        (e.defaults = function (w) {
          if (!e.isObject(w)) return w;
          for (var D = 1, X = arguments.length; D < X; D++) {
            var k = arguments[D];
            for (var ee in k) w[ee] === void 0 && (w[ee] = k[ee]);
          }
          return w;
        }),
        (e.keys = function (w) {
          if (!e.isObject(w)) return [];
          if (P) return P(w);
          var D = [];
          for (var X in w) e.has(w, X) && D.push(X);
          return D;
        }),
        (e.has = function (w, D) {
          return f.call(w, D);
        }),
        (e.isObject = function (w) {
          return w === Object(w);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var B = /(.)^/,
        K = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        J = /\\|'|\r|\n|\u2028|\u2029/g,
        re = function (w) {
          return "\\" + K[w];
        },
        G = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (w, D, X) {
          !D && X && (D = X), (D = e.defaults({}, D, e.templateSettings));
          var k = RegExp(
              [
                (D.escape || B).source,
                (D.interpolate || B).source,
                (D.evaluate || B).source,
              ].join("|") + "|$",
              "g"
            ),
            ee = 0,
            ne = "__p+='";
          w.replace(k, function (E, b, y, j, $) {
            return (
              (ne += w.slice(ee, $).replace(J, re)),
              (ee = $ + E.length),
              b
                ? (ne +=
                    `'+
    ((__t=(` +
                    b +
                    `))==null?'':_.escape(__t))+
    '`)
                : y
                ? (ne +=
                    `'+
    ((__t=(` +
                    y +
                    `))==null?'':__t)+
    '`)
                : j &&
                  (ne +=
                    `';
    ` +
                    j +
                    `
    __p+='`),
              E
            );
          }),
            (ne += `';
    `);
          var F = D.variable;
          if (F) {
            if (!G.test(F))
              throw new Error("variable is not a bare identifier: " + F);
          } else
            (ne =
              `with(obj||{}){
    ` +
              ne +
              `}
    `),
              (F = "obj");
          ne =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
    ` +
            ne +
            `return __p;
    `;
          var z;
          try {
            z = new Function(D.variable || "obj", "_", ne);
          } catch (E) {
            throw ((E.source = ne), E);
          }
          var d = function (E) {
            return z.call(this, E, e);
          };
          return (
            (d.source =
              "function(" +
              F +
              `){
    ` +
              ne +
              "}"),
            d
          );
        }),
        e
      );
    })();
  });
  var We = c((MW, Gs) => {
    "use strict";
    var pe = {},
      Vt = {},
      Wt = [],
      Li = window.Webflow || [],
      Et = window.jQuery,
      Ke = Et(window),
      Q_ = Et(document),
      nt = Et.isFunction,
      ze = (pe._ = Cs()),
      Ns = (pe.tram = Ri() && Et.tram),
      an = !1,
      Ni = !1;
    Ns.config.hideBackface = !1;
    Ns.config.keepInherited = !0;
    pe.define = function (e, t, r) {
      Vt[e] && qs(Vt[e]);
      var n = (Vt[e] = t(Et, ze, r) || {});
      return Ps(n), n;
    };
    pe.require = function (e) {
      return Vt[e];
    };
    function Ps(e) {
      pe.env() &&
        (nt(e.design) && Ke.on("__wf_design", e.design),
        nt(e.preview) && Ke.on("__wf_preview", e.preview)),
        nt(e.destroy) && Ke.on("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && Z_(e);
    }
    function Z_(e) {
      if (an) {
        e.ready();
        return;
      }
      ze.contains(Wt, e.ready) || Wt.push(e.ready);
    }
    function qs(e) {
      nt(e.design) && Ke.off("__wf_design", e.design),
        nt(e.preview) && Ke.off("__wf_preview", e.preview),
        nt(e.destroy) && Ke.off("__wf_destroy", e.destroy),
        e.ready && nt(e.ready) && J_(e);
    }
    function J_(e) {
      Wt = ze.filter(Wt, function (t) {
        return t !== e.ready;
      });
    }
    pe.push = function (e) {
      if (an) {
        nt(e) && e();
        return;
      }
      Li.push(e);
    };
    pe.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var on = navigator.userAgent.toLowerCase(),
      Ms = (pe.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      eb = (pe.env.chrome =
        /chrome/.test(on) &&
        /Google/.test(navigator.vendor) &&
        parseInt(on.match(/chrome\/(\d+)\./)[1], 10)),
      tb = (pe.env.ios = /(ipod|iphone|ipad)/.test(on));
    pe.env.safari = /safari/.test(on) && !eb && !tb;
    var Ci;
    Ms &&
      Q_.on("touchstart mousedown", function (e) {
        Ci = e.target;
      });
    pe.validClick = Ms
      ? function (e) {
          return e === Ci || Et.contains(e, Ci);
        }
      : function () {
          return !0;
        };
    var Ds = "resize.webflow orientationchange.webflow load.webflow",
      rb = "scroll.webflow " + Ds;
    pe.resize = Pi(Ke, Ds);
    pe.scroll = Pi(Ke, rb);
    pe.redraw = Pi();
    function Pi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = ze.throttle(function (i) {
          ze.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (ze.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = ze.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    pe.location = function (e) {
      window.location = e;
    };
    pe.env() && (pe.location = function () {});
    pe.ready = function () {
      (an = !0), Ni ? nb() : ze.each(Wt, Ls), ze.each(Li, Ls), pe.resize.up();
    };
    function Ls(e) {
      nt(e) && e();
    }
    function nb() {
      (Ni = !1), ze.each(Vt, Ps);
    }
    var Rt;
    pe.load = function (e) {
      Rt.then(e);
    };
    function Fs() {
      Rt && (Rt.reject(), Ke.off("load", Rt.resolve)),
        (Rt = new Et.Deferred()),
        Ke.on("load", Rt.resolve);
    }
    pe.destroy = function (e) {
      (e = e || {}),
        (Ni = !0),
        Ke.triggerHandler("__wf_destroy"),
        e.domready != null && (an = e.domready),
        ze.each(Vt, qs),
        pe.resize.off(),
        pe.scroll.off(),
        pe.redraw.off(),
        (Wt = []),
        (Li = []),
        Rt.state() === "pending" && Fs();
    };
    Et(pe.ready);
    Fs();
    Gs.exports = window.Webflow = pe;
  });
  var Ws = c((DW, Vs) => {
    "use strict";
    var Us = We();
    Us.define(
      "brand",
      (Vs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var m = n.attr("data-wf-status"),
            T = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(T) && a.hostname !== T && (m = !0),
            m &&
              !s &&
              ((f = f || v()),
              g(),
              setTimeout(g, 500),
              e(r).off(u, h).on(u, h));
        };
        function h() {
          var m =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", m ? "display: none !important;" : "");
        }
        function v() {
          var m = e('<a class="w-webflow-badge"></a>').attr(
              "href",
              "https://webflow.com?utm_campaign=brandjs"
            ),
            T = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            O = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return m.append(T, O), m[0];
        }
        function g() {
          var m = i.children(o),
            T = m.length && m.get(0) === f,
            O = Us.env("editor");
          if (T) {
            O && m.remove();
            return;
          }
          m.length && m.remove(), O || i.append(f);
        }
        return t;
      })
    );
  });
  var Hs = c((FW, ks) => {
    "use strict";
    var qi = We();
    qi.define(
      "edit",
      (ks.exports = function (e, t, r) {
        if (
          ((r = r || {}),
          (qi.env("test") || qi.env("frame")) && !r.fixture && !ib())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || g,
          h = !1;
        try {
          h =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch {}
        h
          ? f()
          : a.search
          ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
          : i.on(s, v).triggerHandler(s);
        function v() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function g() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, v),
            L(function (P) {
              e.ajax({
                url: R("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: m(P),
              });
            });
        }
        function m(P) {
          return function (q) {
            if (!q) {
              console.error("Could not load editor data");
              return;
            }
            (q.thirdPartyCookiesSupported = P),
              T(M(q.bugReporterScriptPath), function () {
                T(M(q.scriptPath), function () {
                  window.WebflowEditor(q);
                });
              });
          };
        }
        function T(P, q) {
          e.ajax({ type: "GET", url: P, dataType: "script", cache: !0 }).then(
            q,
            O
          );
        }
        function O(P, q, N) {
          throw (console.error("Could not load editor script: " + q), N);
        }
        function M(P) {
          return P.indexOf("//") >= 0
            ? P
            : R("https://editor-api.webflow.com" + P);
        }
        function R(P) {
          return P.replace(/([^:])\/\//g, "$1/");
        }
        function L(P) {
          var q = window.document.createElement("iframe");
          (q.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (q.style.display = "none"),
            (q.sandbox = "allow-scripts allow-same-origin");
          var N = function (H) {
            H.data === "WF_third_party_cookies_unsupported"
              ? (S(q, N), P(!1))
              : H.data === "WF_third_party_cookies_supported" &&
                (S(q, N), P(!0));
          };
          (q.onerror = function () {
            S(q, N), P(!1);
          }),
            window.addEventListener("message", N, !1),
            window.document.body.appendChild(q);
        }
        function S(P, q) {
          window.removeEventListener("message", q, !1), P.remove();
        }
        return n;
      })
    );
    function ib() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Bs = c((GW, Xs) => {
    "use strict";
    var ob = We();
    ob.define(
      "focus-visible",
      (Xs.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(S) {
            return !!(
              S &&
              S !== document &&
              S.nodeName !== "HTML" &&
              S.nodeName !== "BODY" &&
              "classList" in S &&
              "contains" in S.classList
            );
          }
          function u(S) {
            var P = S.type,
              q = S.tagName;
            return !!(
              (q === "INPUT" && a[P] && !S.readOnly) ||
              (q === "TEXTAREA" && !S.readOnly) ||
              S.isContentEditable
            );
          }
          function f(S) {
            S.getAttribute("data-wf-focus-visible") ||
              S.setAttribute("data-wf-focus-visible", "true");
          }
          function h(S) {
            S.getAttribute("data-wf-focus-visible") &&
              S.removeAttribute("data-wf-focus-visible");
          }
          function v(S) {
            S.metaKey ||
              S.altKey ||
              S.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function g() {
            n = !1;
          }
          function m(S) {
            s(S.target) && (n || u(S.target)) && f(S.target);
          }
          function T(S) {
            s(S.target) &&
              S.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
              window.clearTimeout(o),
              (o = window.setTimeout(function () {
                i = !1;
              }, 100)),
              h(S.target));
          }
          function O() {
            document.visibilityState === "hidden" && (i && (n = !0), M());
          }
          function M() {
            document.addEventListener("mousemove", L),
              document.addEventListener("mousedown", L),
              document.addEventListener("mouseup", L),
              document.addEventListener("pointermove", L),
              document.addEventListener("pointerdown", L),
              document.addEventListener("pointerup", L),
              document.addEventListener("touchmove", L),
              document.addEventListener("touchstart", L),
              document.addEventListener("touchend", L);
          }
          function R() {
            document.removeEventListener("mousemove", L),
              document.removeEventListener("mousedown", L),
              document.removeEventListener("mouseup", L),
              document.removeEventListener("pointermove", L),
              document.removeEventListener("pointerdown", L),
              document.removeEventListener("pointerup", L),
              document.removeEventListener("touchmove", L),
              document.removeEventListener("touchstart", L),
              document.removeEventListener("touchend", L);
          }
          function L(S) {
            (S.target.nodeName && S.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), R());
          }
          document.addEventListener("keydown", v, !0),
            document.addEventListener("mousedown", g, !0),
            document.addEventListener("pointerdown", g, !0),
            document.addEventListener("touchstart", g, !0),
            document.addEventListener("visibilitychange", O, !0),
            M(),
            r.addEventListener("focus", m, !0),
            r.addEventListener("blur", T, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ks = c((UW, zs) => {
    "use strict";
    var js = We();
    js.define(
      "focus",
      (zs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
            a.stopPropagation(),
            a.stopImmediatePropagation(),
            e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
            setTimeout(() => {
              for (t = !1, a.target.focus(); e.length > 0; ) {
                var s = e.pop();
                s.target.dispatchEvent(new MouseEvent(s.type, s));
              }
            }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            js.env.safari &&
            (document.addEventListener("mousedown", i, !0),
            document.addEventListener("mouseup", r, !0),
            document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Qs = c((VW, $s) => {
    "use strict";
    var Mi = window.jQuery,
      it = {},
      sn = [],
      Ys = ".w-ix",
      un = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Mi(t).triggerHandler(it.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Mi(t).triggerHandler(it.types.OUTRO));
        },
      };
    it.triggers = {};
    it.types = { INTRO: "w-ix-intro" + Ys, OUTRO: "w-ix-outro" + Ys };
    it.init = function () {
      for (var e = sn.length, t = 0; t < e; t++) {
        var r = sn[t];
        r[0](0, r[1]);
      }
      (sn = []), Mi.extend(it.triggers, un);
    };
    it.async = function () {
      for (var e in un) {
        var t = un[e];
        un.hasOwnProperty(e) &&
          (it.triggers[e] = function (r, n) {
            sn.push([t, n]);
          });
      }
    };
    it.async();
    $s.exports = it;
  });
  var ln = c((WW, eu) => {
    "use strict";
    var Di = Qs();
    function Zs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var ab = window.jQuery,
      cn = {},
      Js = ".w-ix",
      sb = {
        reset: function (e, t) {
          Di.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Di.triggers.intro(e, t), Zs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Di.triggers.outro(e, t), Zs(t, "COMPONENT_INACTIVE");
        },
      };
    cn.triggers = {};
    cn.types = { INTRO: "w-ix-intro" + Js, OUTRO: "w-ix-outro" + Js };
    ab.extend(cn.triggers, sb);
    eu.exports = cn;
  });
  var tu = c((kW, dt) => {
    function Fi(e) {
      return (
        (dt.exports = Fi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  typeof Symbol == "function" &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        (dt.exports.__esModule = !0),
        (dt.exports.default = dt.exports),
        Fi(e)
      );
    }
    (dt.exports = Fi),
      (dt.exports.__esModule = !0),
      (dt.exports.default = dt.exports);
  });
  var fn = c((HW, Er) => {
    var ub = tu().default;
    function ru(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (ru = function (i) {
        return i ? r : t;
      })(e);
    }
    function cb(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (ub(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = ru(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (Er.exports = cb),
      (Er.exports.__esModule = !0),
      (Er.exports.default = Er.exports);
  });
  var nu = c((XW, _r) => {
    function lb(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (_r.exports = lb),
      (_r.exports.__esModule = !0),
      (_r.exports.default = _r.exports);
  });
  var ye = c((BW, iu) => {
    var dn = function (e) {
      return e && e.Math == Math && e;
    };
    iu.exports =
      dn(typeof globalThis == "object" && globalThis) ||
      dn(typeof window == "object" && window) ||
      dn(typeof self == "object" && self) ||
      dn(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var kt = c((jW, ou) => {
    ou.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Ct = c((zW, au) => {
    var fb = kt();
    au.exports = !fb(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var pn = c((KW, su) => {
    var br = Function.prototype.call;
    su.exports = br.bind
      ? br.bind(br)
      : function () {
          return br.apply(br, arguments);
        };
  });
  var fu = c((lu) => {
    "use strict";
    var uu = {}.propertyIsEnumerable,
      cu = Object.getOwnPropertyDescriptor,
      db = cu && !uu.call({ 1: 2 }, 1);
    lu.f = db
      ? function (t) {
          var r = cu(this, t);
          return !!r && r.enumerable;
        }
      : uu;
  });
  var Gi = c(($W, du) => {
    du.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Ye = c((QW, vu) => {
    var pu = Function.prototype,
      Ui = pu.bind,
      Vi = pu.call,
      pb = Ui && Ui.bind(Vi);
    vu.exports = Ui
      ? function (e) {
          return e && pb(Vi, e);
        }
      : function (e) {
          return (
            e &&
            function () {
              return Vi.apply(e, arguments);
            }
          );
        };
  });
  var yu = c((ZW, gu) => {
    var hu = Ye(),
      vb = hu({}.toString),
      hb = hu("".slice);
    gu.exports = function (e) {
      return hb(vb(e), 8, -1);
    };
  });
  var Eu = c((JW, mu) => {
    var gb = ye(),
      yb = Ye(),
      mb = kt(),
      Eb = yu(),
      Wi = gb.Object,
      _b = yb("".split);
    mu.exports = mb(function () {
      return !Wi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
          return Eb(e) == "String" ? _b(e, "") : Wi(e);
        }
      : Wi;
  });
  var ki = c((ek, _u) => {
    var bb = ye(),
      Tb = bb.TypeError;
    _u.exports = function (e) {
      if (e == null) throw Tb("Can't call method on " + e);
      return e;
    };
  });
  var Tr = c((tk, bu) => {
    var Ib = Eu(),
      Ob = ki();
    bu.exports = function (e) {
      return Ib(Ob(e));
    };
  });
  var ot = c((rk, Tu) => {
    Tu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Ht = c((nk, Iu) => {
    var xb = ot();
    Iu.exports = function (e) {
      return typeof e == "object" ? e !== null : xb(e);
    };
  });
  var Ir = c((ik, Ou) => {
    var Hi = ye(),
      wb = ot(),
      Ab = function (e) {
        return wb(e) ? e : void 0;
      };
    Ou.exports = function (e, t) {
      return arguments.length < 2 ? Ab(Hi[e]) : Hi[e] && Hi[e][t];
    };
  });
  var wu = c((ok, xu) => {
    var Sb = Ye();
    xu.exports = Sb({}.isPrototypeOf);
  });
  var Su = c((ak, Au) => {
    var Rb = Ir();
    Au.exports = Rb("navigator", "userAgent") || "";
  });
  var Mu = c((sk, qu) => {
    var Pu = ye(),
      Xi = Su(),
      Ru = Pu.process,
      Cu = Pu.Deno,
      Lu = (Ru && Ru.versions) || (Cu && Cu.version),
      Nu = Lu && Lu.v8,
      $e,
      vn;
    Nu &&
      (($e = Nu.split(".")),
      (vn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1])));
    !vn &&
      Xi &&
      (($e = Xi.match(/Edge\/(\d+)/)),
      (!$e || $e[1] >= 74) &&
        (($e = Xi.match(/Chrome\/(\d+)/)), $e && (vn = +$e[1])));
    qu.exports = vn;
  });
  var Bi = c((uk, Fu) => {
    var Du = Mu(),
      Cb = kt();
    Fu.exports =
      !!Object.getOwnPropertySymbols &&
      !Cb(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Du && Du < 41)
        );
      });
  });
  var ji = c((ck, Gu) => {
    var Lb = Bi();
    Gu.exports = Lb && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var zi = c((lk, Uu) => {
    var Nb = ye(),
      Pb = Ir(),
      qb = ot(),
      Mb = wu(),
      Db = ji(),
      Fb = Nb.Object;
    Uu.exports = Db
      ? function (e) {
          return typeof e == "symbol";
        }
      : function (e) {
          var t = Pb("Symbol");
          return qb(t) && Mb(t.prototype, Fb(e));
        };
  });
  var Wu = c((fk, Vu) => {
    var Gb = ye(),
      Ub = Gb.String;
    Vu.exports = function (e) {
      try {
        return Ub(e);
      } catch {
        return "Object";
      }
    };
  });
  var Hu = c((dk, ku) => {
    var Vb = ye(),
      Wb = ot(),
      kb = Wu(),
      Hb = Vb.TypeError;
    ku.exports = function (e) {
      if (Wb(e)) return e;
      throw Hb(kb(e) + " is not a function");
    };
  });
  var Bu = c((pk, Xu) => {
    var Xb = Hu();
    Xu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : Xb(r);
    };
  });
  var zu = c((vk, ju) => {
    var Bb = ye(),
      Ki = pn(),
      Yi = ot(),
      $i = Ht(),
      jb = Bb.TypeError;
    ju.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && Yi((r = e.toString)) && !$i((n = Ki(r, e)))) ||
        (Yi((r = e.valueOf)) && !$i((n = Ki(r, e)))) ||
        (t !== "string" && Yi((r = e.toString)) && !$i((n = Ki(r, e))))
      )
        return n;
      throw jb("Can't convert object to primitive value");
    };
  });
  var Yu = c((hk, Ku) => {
    Ku.exports = !1;
  });
  var hn = c((gk, Qu) => {
    var $u = ye(),
      zb = Object.defineProperty;
    Qu.exports = function (e, t) {
      try {
        zb($u, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        $u[e] = t;
      }
      return t;
    };
  });
  var gn = c((yk, Ju) => {
    var Kb = ye(),
      Yb = hn(),
      Zu = "__core-js_shared__",
      $b = Kb[Zu] || Yb(Zu, {});
    Ju.exports = $b;
  });
  var Qi = c((mk, tc) => {
    var Qb = Yu(),
      ec = gn();
    (tc.exports = function (e, t) {
      return ec[e] || (ec[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: Qb ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var nc = c((Ek, rc) => {
    var Zb = ye(),
      Jb = ki(),
      eT = Zb.Object;
    rc.exports = function (e) {
      return eT(Jb(e));
    };
  });
  var _t = c((_k, ic) => {
    var tT = Ye(),
      rT = nc(),
      nT = tT({}.hasOwnProperty);
    ic.exports =
      Object.hasOwn ||
      function (t, r) {
        return nT(rT(t), r);
      };
  });
  var Zi = c((bk, oc) => {
    var iT = Ye(),
      oT = 0,
      aT = Math.random(),
      sT = iT((1).toString);
    oc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + sT(++oT + aT, 36);
    };
  });
  var Ji = c((Tk, lc) => {
    var uT = ye(),
      cT = Qi(),
      ac = _t(),
      lT = Zi(),
      sc = Bi(),
      cc = ji(),
      Xt = cT("wks"),
      Lt = uT.Symbol,
      uc = Lt && Lt.for,
      fT = cc ? Lt : (Lt && Lt.withoutSetter) || lT;
    lc.exports = function (e) {
      if (!ac(Xt, e) || !(sc || typeof Xt[e] == "string")) {
        var t = "Symbol." + e;
        sc && ac(Lt, e)
          ? (Xt[e] = Lt[e])
          : cc && uc
          ? (Xt[e] = uc(t))
          : (Xt[e] = fT(t));
      }
      return Xt[e];
    };
  });
  var vc = c((Ik, pc) => {
    var dT = ye(),
      pT = pn(),
      fc = Ht(),
      dc = zi(),
      vT = Bu(),
      hT = zu(),
      gT = Ji(),
      yT = dT.TypeError,
      mT = gT("toPrimitive");
    pc.exports = function (e, t) {
      if (!fc(e) || dc(e)) return e;
      var r = vT(e, mT),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = pT(r, e, t)), !fc(n) || dc(n))
        )
          return n;
        throw yT("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), hT(e, t);
    };
  });
  var eo = c((Ok, hc) => {
    var ET = vc(),
      _T = zi();
    hc.exports = function (e) {
      var t = ET(e, "string");
      return _T(t) ? t : t + "";
    };
  });
  var ro = c((xk, yc) => {
    var bT = ye(),
      gc = Ht(),
      to = bT.document,
      TT = gc(to) && gc(to.createElement);
    yc.exports = function (e) {
      return TT ? to.createElement(e) : {};
    };
  });
  var no = c((wk, mc) => {
    var IT = Ct(),
      OT = kt(),
      xT = ro();
    mc.exports =
      !IT &&
      !OT(function () {
        return (
          Object.defineProperty(xT("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var io = c((_c) => {
    var wT = Ct(),
      AT = pn(),
      ST = fu(),
      RT = Gi(),
      CT = Tr(),
      LT = eo(),
      NT = _t(),
      PT = no(),
      Ec = Object.getOwnPropertyDescriptor;
    _c.f = wT
      ? Ec
      : function (t, r) {
          if (((t = CT(t)), (r = LT(r)), PT))
            try {
              return Ec(t, r);
            } catch {}
          if (NT(t, r)) return RT(!AT(ST.f, t, r), t[r]);
        };
  });
  var Or = c((Sk, Tc) => {
    var bc = ye(),
      qT = Ht(),
      MT = bc.String,
      DT = bc.TypeError;
    Tc.exports = function (e) {
      if (qT(e)) return e;
      throw DT(MT(e) + " is not an object");
    };
  });
  var xr = c((xc) => {
    var FT = ye(),
      GT = Ct(),
      UT = no(),
      Ic = Or(),
      VT = eo(),
      WT = FT.TypeError,
      Oc = Object.defineProperty;
    xc.f = GT
      ? Oc
      : function (t, r, n) {
          if ((Ic(t), (r = VT(r)), Ic(n), UT))
            try {
              return Oc(t, r, n);
            } catch {}
          if ("get" in n || "set" in n) throw WT("Accessors not supported");
          return "value" in n && (t[r] = n.value), t;
        };
  });
  var yn = c((Ck, wc) => {
    var kT = Ct(),
      HT = xr(),
      XT = Gi();
    wc.exports = kT
      ? function (e, t, r) {
          return HT.f(e, t, XT(1, r));
        }
      : function (e, t, r) {
          return (e[t] = r), e;
        };
  });
  var ao = c((Lk, Ac) => {
    var BT = Ye(),
      jT = ot(),
      oo = gn(),
      zT = BT(Function.toString);
    jT(oo.inspectSource) ||
      (oo.inspectSource = function (e) {
        return zT(e);
      });
    Ac.exports = oo.inspectSource;
  });
  var Cc = c((Nk, Rc) => {
    var KT = ye(),
      YT = ot(),
      $T = ao(),
      Sc = KT.WeakMap;
    Rc.exports = YT(Sc) && /native code/.test($T(Sc));
  });
  var so = c((Pk, Nc) => {
    var QT = Qi(),
      ZT = Zi(),
      Lc = QT("keys");
    Nc.exports = function (e) {
      return Lc[e] || (Lc[e] = ZT(e));
    };
  });
  var mn = c((qk, Pc) => {
    Pc.exports = {};
  });
  var Uc = c((Mk, Gc) => {
    var JT = Cc(),
      Fc = ye(),
      uo = Ye(),
      eI = Ht(),
      tI = yn(),
      co = _t(),
      lo = gn(),
      rI = so(),
      nI = mn(),
      qc = "Object already initialized",
      po = Fc.TypeError,
      iI = Fc.WeakMap,
      En,
      wr,
      _n,
      oI = function (e) {
        return _n(e) ? wr(e) : En(e, {});
      },
      aI = function (e) {
        return function (t) {
          var r;
          if (!eI(t) || (r = wr(t)).type !== e)
            throw po("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    JT || lo.state
      ? ((bt = lo.state || (lo.state = new iI())),
        (Mc = uo(bt.get)),
        (fo = uo(bt.has)),
        (Dc = uo(bt.set)),
        (En = function (e, t) {
          if (fo(bt, e)) throw new po(qc);
          return (t.facade = e), Dc(bt, e, t), t;
        }),
        (wr = function (e) {
          return Mc(bt, e) || {};
        }),
        (_n = function (e) {
          return fo(bt, e);
        }))
      : ((Nt = rI("state")),
        (nI[Nt] = !0),
        (En = function (e, t) {
          if (co(e, Nt)) throw new po(qc);
          return (t.facade = e), tI(e, Nt, t), t;
        }),
        (wr = function (e) {
          return co(e, Nt) ? e[Nt] : {};
        }),
        (_n = function (e) {
          return co(e, Nt);
        }));
    var bt, Mc, fo, Dc, Nt;
    Gc.exports = { set: En, get: wr, has: _n, enforce: oI, getterFor: aI };
  });
  var kc = c((Dk, Wc) => {
    var vo = Ct(),
      sI = _t(),
      Vc = Function.prototype,
      uI = vo && Object.getOwnPropertyDescriptor,
      ho = sI(Vc, "name"),
      cI = ho && function () {}.name === "something",
      lI = ho && (!vo || (vo && uI(Vc, "name").configurable));
    Wc.exports = { EXISTS: ho, PROPER: cI, CONFIGURABLE: lI };
  });
  var zc = c((Fk, jc) => {
    var fI = ye(),
      Hc = ot(),
      dI = _t(),
      Xc = yn(),
      pI = hn(),
      vI = ao(),
      Bc = Uc(),
      hI = kc().CONFIGURABLE,
      gI = Bc.get,
      yI = Bc.enforce,
      mI = String(String).split("String");
    (jc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (Hc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
          (!dI(r, "name") || (hI && r.name !== s)) && Xc(r, "name", s),
          (u = yI(r)),
          u.source || (u.source = mI.join(typeof s == "string" ? s : ""))),
        e === fI)
      ) {
        o ? (e[t] = r) : pI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Xc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (Hc(this) && gI(this).source) || vI(this);
    });
  });
  var go = c((Gk, Kc) => {
    var EI = Math.ceil,
      _I = Math.floor;
    Kc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? _I : EI)(t);
    };
  });
  var $c = c((Uk, Yc) => {
    var bI = go(),
      TI = Math.max,
      II = Math.min;
    Yc.exports = function (e, t) {
      var r = bI(e);
      return r < 0 ? TI(r + t, 0) : II(r, t);
    };
  });
  var Zc = c((Vk, Qc) => {
    var OI = go(),
      xI = Math.min;
    Qc.exports = function (e) {
      return e > 0 ? xI(OI(e), 9007199254740991) : 0;
    };
  });
  var el = c((Wk, Jc) => {
    var wI = Zc();
    Jc.exports = function (e) {
      return wI(e.length);
    };
  });
  var yo = c((kk, rl) => {
    var AI = Tr(),
      SI = $c(),
      RI = el(),
      tl = function (e) {
        return function (t, r, n) {
          var i = AI(t),
            o = RI(i),
            a = SI(n, o),
            s;
          if (e && r != r) {
            for (; o > a; ) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    rl.exports = { includes: tl(!0), indexOf: tl(!1) };
  });
  var Eo = c((Hk, il) => {
    var CI = Ye(),
      mo = _t(),
      LI = Tr(),
      NI = yo().indexOf,
      PI = mn(),
      nl = CI([].push);
    il.exports = function (e, t) {
      var r = LI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !mo(PI, o) && mo(r, o) && nl(i, o);
      for (; t.length > n; ) mo(r, (o = t[n++])) && (~NI(i, o) || nl(i, o));
      return i;
    };
  });
  var bn = c((Xk, ol) => {
    ol.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var sl = c((al) => {
    var qI = Eo(),
      MI = bn(),
      DI = MI.concat("length", "prototype");
    al.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return qI(t, DI);
      };
  });
  var cl = c((ul) => {
    ul.f = Object.getOwnPropertySymbols;
  });
  var fl = c((zk, ll) => {
    var FI = Ir(),
      GI = Ye(),
      UI = sl(),
      VI = cl(),
      WI = Or(),
      kI = GI([].concat);
    ll.exports =
      FI("Reflect", "ownKeys") ||
      function (t) {
        var r = UI.f(WI(t)),
          n = VI.f;
        return n ? kI(r, n(t)) : r;
      };
  });
  var pl = c((Kk, dl) => {
    var HI = _t(),
      XI = fl(),
      BI = io(),
      jI = xr();
    dl.exports = function (e, t) {
      for (var r = XI(t), n = jI.f, i = BI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        HI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var hl = c((Yk, vl) => {
    var zI = kt(),
      KI = ot(),
      YI = /#|\.prototype\./,
      Ar = function (e, t) {
        var r = QI[$I(e)];
        return r == JI ? !0 : r == ZI ? !1 : KI(t) ? zI(t) : !!t;
      },
      $I = (Ar.normalize = function (e) {
        return String(e).replace(YI, ".").toLowerCase();
      }),
      QI = (Ar.data = {}),
      ZI = (Ar.NATIVE = "N"),
      JI = (Ar.POLYFILL = "P");
    vl.exports = Ar;
  });
  var yl = c(($k, gl) => {
    var _o = ye(),
      eO = io().f,
      tO = yn(),
      rO = zc(),
      nO = hn(),
      iO = pl(),
      oO = hl();
    gl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        h;
      if (
        (n
          ? (a = _o)
          : i
          ? (a = _o[r] || nO(r, {}))
          : (a = (_o[r] || {}).prototype),
        a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
            e.noTargetGet ? ((h = eO(a, s)), (u = h && h.value)) : (u = a[s]),
            (o = oO(n ? s : r + (i ? "." : "#") + s, e.forced)),
            !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            iO(f, u);
          }
          (e.sham || (u && u.sham)) && tO(f, "sham", !0), rO(a, s, f, e);
        }
    };
  });
  var El = c((Qk, ml) => {
    var aO = Eo(),
      sO = bn();
    ml.exports =
      Object.keys ||
      function (t) {
        return aO(t, sO);
      };
  });
  var bl = c((Zk, _l) => {
    var uO = Ct(),
      cO = xr(),
      lO = Or(),
      fO = Tr(),
      dO = El();
    _l.exports = uO
      ? Object.defineProperties
      : function (t, r) {
          lO(t);
          for (var n = fO(r), i = dO(r), o = i.length, a = 0, s; o > a; )
            cO.f(t, (s = i[a++]), n[s]);
          return t;
        };
  });
  var Il = c((Jk, Tl) => {
    var pO = Ir();
    Tl.exports = pO("document", "documentElement");
  });
  var Ll = c((eH, Cl) => {
    var vO = Or(),
      hO = bl(),
      Ol = bn(),
      gO = mn(),
      yO = Il(),
      mO = ro(),
      EO = so(),
      xl = ">",
      wl = "<",
      To = "prototype",
      Io = "script",
      Sl = EO("IE_PROTO"),
      bo = function () {},
      Rl = function (e) {
        return wl + Io + xl + e + wl + "/" + Io + xl;
      },
      Al = function (e) {
        e.write(Rl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      _O = function () {
        var e = mO("iframe"),
          t = "java" + Io + ":",
          r;
        return (
          (e.style.display = "none"),
          yO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Rl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      Tn,
      In = function () {
        try {
          Tn = new ActiveXObject("htmlfile");
        } catch {}
        In =
          typeof document < "u"
            ? document.domain && Tn
              ? Al(Tn)
              : _O()
            : Al(Tn);
        for (var e = Ol.length; e--; ) delete In[To][Ol[e]];
        return In();
      };
    gO[Sl] = !0;
    Cl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((bo[To] = vO(t)), (n = new bo()), (bo[To] = null), (n[Sl] = t))
            : (n = In()),
          r === void 0 ? n : hO(n, r)
        );
      };
  });
  var Pl = c((tH, Nl) => {
    var bO = Ji(),
      TO = Ll(),
      IO = xr(),
      Oo = bO("unscopables"),
      xo = Array.prototype;
    xo[Oo] == null && IO.f(xo, Oo, { configurable: !0, value: TO(null) });
    Nl.exports = function (e) {
      xo[Oo][e] = !0;
    };
  });
  var ql = c(() => {
    "use strict";
    var OO = yl(),
      xO = yo().includes,
      wO = Pl();
    OO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return xO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    wO("includes");
  });
  var Dl = c((iH, Ml) => {
    var AO = ye(),
      SO = Ye();
    Ml.exports = function (e, t) {
      return SO(AO[e].prototype[t]);
    };
  });
  var Gl = c((oH, Fl) => {
    ql();
    var RO = Dl();
    Fl.exports = RO("Array", "includes");
  });
  var Vl = c((aH, Ul) => {
    var CO = Gl();
    Ul.exports = CO;
  });
  var kl = c((sH, Wl) => {
    var LO = Vl();
    Wl.exports = LO;
  });
  var wo = c((uH, Hl) => {
    var NO =
      typeof global == "object" && global && global.Object === Object && global;
    Hl.exports = NO;
  });
  var Qe = c((cH, Xl) => {
    var PO = wo(),
      qO = typeof self == "object" && self && self.Object === Object && self,
      MO = PO || qO || Function("return this")();
    Xl.exports = MO;
  });
  var Bt = c((lH, Bl) => {
    var DO = Qe(),
      FO = DO.Symbol;
    Bl.exports = FO;
  });
  var Yl = c((fH, Kl) => {
    var jl = Bt(),
      zl = Object.prototype,
      GO = zl.hasOwnProperty,
      UO = zl.toString,
      Sr = jl ? jl.toStringTag : void 0;
    function VO(e) {
      var t = GO.call(e, Sr),
        r = e[Sr];
      try {
        e[Sr] = void 0;
        var n = !0;
      } catch {}
      var i = UO.call(e);
      return n && (t ? (e[Sr] = r) : delete e[Sr]), i;
    }
    Kl.exports = VO;
  });
  var Ql = c((dH, $l) => {
    var WO = Object.prototype,
      kO = WO.toString;
    function HO(e) {
      return kO.call(e);
    }
    $l.exports = HO;
  });
  var Tt = c((pH, ef) => {
    var Zl = Bt(),
      XO = Yl(),
      BO = Ql(),
      jO = "[object Null]",
      zO = "[object Undefined]",
      Jl = Zl ? Zl.toStringTag : void 0;
    function KO(e) {
      return e == null
        ? e === void 0
          ? zO
          : jO
        : Jl && Jl in Object(e)
        ? XO(e)
        : BO(e);
    }
    ef.exports = KO;
  });
  var Ao = c((vH, tf) => {
    function YO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    tf.exports = YO;
  });
  var So = c((hH, rf) => {
    var $O = Ao(),
      QO = $O(Object.getPrototypeOf, Object);
    rf.exports = QO;
  });
  var pt = c((gH, nf) => {
    function ZO(e) {
      return e != null && typeof e == "object";
    }
    nf.exports = ZO;
  });
  var Ro = c((yH, af) => {
    var JO = Tt(),
      ex = So(),
      tx = pt(),
      rx = "[object Object]",
      nx = Function.prototype,
      ix = Object.prototype,
      of = nx.toString,
      ox = ix.hasOwnProperty,
      ax = of.call(Object);
    function sx(e) {
      if (!tx(e) || JO(e) != rx) return !1;
      var t = ex(e);
      if (t === null) return !0;
      var r = ox.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && of.call(r) == ax;
    }
    af.exports = sx;
  });
  var sf = c((Co) => {
    "use strict";
    Object.defineProperty(Co, "__esModule", { value: !0 });
    Co.default = ux;
    function ux(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var uf = c((No, Lo) => {
    "use strict";
    Object.defineProperty(No, "__esModule", { value: !0 });
    var cx = sf(),
      lx = fx(cx);
    function fx(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var jt;
    typeof self < "u"
      ? (jt = self)
      : typeof window < "u"
      ? (jt = window)
      : typeof global < "u"
      ? (jt = global)
      : typeof Lo < "u"
      ? (jt = Lo)
      : (jt = Function("return this")());
    var dx = (0, lx.default)(jt);
    No.default = dx;
  });
  var Po = c((Rr) => {
    "use strict";
    Rr.__esModule = !0;
    Rr.ActionTypes = void 0;
    Rr.default = df;
    var px = Ro(),
      vx = ff(px),
      hx = uf(),
      cf = ff(hx);
    function ff(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var lf = (Rr.ActionTypes = { INIT: "@@redux/INIT" });
    function df(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
        typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(df)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function h() {
        return o;
      }
      function v(O) {
        if (typeof O != "function")
          throw new Error("Expected listener to be a function.");
        var M = !0;
        return (
          f(),
          s.push(O),
          function () {
            if (M) {
              (M = !1), f();
              var L = s.indexOf(O);
              s.splice(L, 1);
            }
          }
        );
      }
      function g(O) {
        if (!(0, vx.default)(O))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof O.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, O));
        } finally {
          u = !1;
        }
        for (var M = (a = s), R = 0; R < M.length; R++) M[R]();
        return O;
      }
      function m(O) {
        if (typeof O != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = O), g({ type: lf.INIT });
      }
      function T() {
        var O,
          M = v;
        return (
          (O = {
            subscribe: function (L) {
              if (typeof L != "object")
                throw new TypeError("Expected the observer to be an object.");
              function S() {
                L.next && L.next(h());
              }
              S();
              var P = M(S);
              return { unsubscribe: P };
            },
          }),
          (O[cf.default] = function () {
            return this;
          }),
          O
        );
      }
      return (
        g({ type: lf.INIT }),
        (n = { dispatch: g, subscribe: v, getState: h, replaceReducer: m }),
        (n[cf.default] = T),
        n
      );
    }
  });
  var Mo = c((qo) => {
    "use strict";
    qo.__esModule = !0;
    qo.default = gx;
    function gx(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var hf = c((Do) => {
    "use strict";
    Do.__esModule = !0;
    Do.default = bx;
    var pf = Po(),
      yx = Ro(),
      bH = vf(yx),
      mx = Mo(),
      TH = vf(mx);
    function vf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Ex(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function _x(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: pf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
              t +
              '" returned undefined when probed with a random type. ' +
              ("Don't try to handle " +
                pf.ActionTypes.INIT +
                ' or other actions in "redux/*" ') +
              "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function bx(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        _x(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
            arguments.length <= 0 || arguments[0] === void 0
              ? {}
              : arguments[0],
          h = arguments[1];
        if (s) throw s;
        if (!1) var v;
        for (var g = !1, m = {}, T = 0; T < o.length; T++) {
          var O = o[T],
            M = r[O],
            R = f[O],
            L = M(R, h);
          if (typeof L > "u") {
            var S = Ex(O, h);
            throw new Error(S);
          }
          (m[O] = L), (g = g || L !== R);
        }
        return g ? m : f;
      };
    }
  });
  var yf = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = Tx;
    function gf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function Tx(e, t) {
      if (typeof e == "function") return gf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
            (e === null ? "null" : typeof e) +
            '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = gf(a, t));
      }
      return n;
    }
  });
  var Uo = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = Ix;
    function Ix() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var mf = c((Vo) => {
    "use strict";
    Vo.__esModule = !0;
    var Ox =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Vo.default = Sx;
    var xx = Uo(),
      wx = Ax(xx);
    function Ax(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function Sx() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            h = {
              getState: s.getState,
              dispatch: function (g) {
                return u(g);
              },
            };
          return (
            (f = t.map(function (v) {
              return v(h);
            })),
            (u = wx.default.apply(void 0, f)(s.dispatch)),
            Ox({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Wo = c((ke) => {
    "use strict";
    ke.__esModule = !0;
    ke.compose =
      ke.applyMiddleware =
      ke.bindActionCreators =
      ke.combineReducers =
      ke.createStore =
        void 0;
    var Rx = Po(),
      Cx = zt(Rx),
      Lx = hf(),
      Nx = zt(Lx),
      Px = yf(),
      qx = zt(Px),
      Mx = mf(),
      Dx = zt(Mx),
      Fx = Uo(),
      Gx = zt(Fx),
      Ux = Mo(),
      AH = zt(Ux);
    function zt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    ke.createStore = Cx.default;
    ke.combineReducers = Nx.default;
    ke.bindActionCreators = qx.default;
    ke.applyMiddleware = Dx.default;
    ke.compose = Gx.default;
  });
  var Ze,
    ko,
    at,
    Vx,
    Wx,
    Ho,
    kx,
    Ef = ge(() => {
      "use strict";
      (Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (ko = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (at = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (Vx = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (Wx = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (Ho = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (kx = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var He,
    Hx,
    Xo = ge(() => {
      "use strict";
      (He = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (Hx = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var Xx,
    _f = ge(() => {
      "use strict";
      Xx = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var Bx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    Bo,
    bf = ge(() => {
      "use strict";
      Xo();
      ({
        TRANSFORM_MOVE: Bx,
        TRANSFORM_SCALE: jx,
        TRANSFORM_ROTATE: zx,
        TRANSFORM_SKEW: Kx,
        STYLE_SIZE: Yx,
        STYLE_FILTER: $x,
        STYLE_FONT_VARIATION: Qx,
      } = He),
        (Bo = {
          [Bx]: !0,
          [jx]: !0,
          [zx]: !0,
          [Kx]: !0,
          [Yx]: !0,
          [$x]: !0,
          [Qx]: !0,
        });
    });
  var Ie = {};
  Fe(Ie, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => vw,
    IX2_ANIMATION_FRAME_CHANGED: () => uw,
    IX2_CLEAR_REQUESTED: () => ow,
    IX2_ELEMENT_STATE_CHANGED: () => pw,
    IX2_EVENT_LISTENER_ADDED: () => aw,
    IX2_EVENT_STATE_CHANGED: () => sw,
    IX2_INSTANCE_ADDED: () => lw,
    IX2_INSTANCE_REMOVED: () => dw,
    IX2_INSTANCE_STARTED: () => fw,
    IX2_MEDIA_QUERIES_DEFINED: () => gw,
    IX2_PARAMETER_CHANGED: () => cw,
    IX2_PLAYBACK_REQUESTED: () => nw,
    IX2_PREVIEW_REQUESTED: () => rw,
    IX2_RAW_DATA_IMPORTED: () => Zx,
    IX2_SESSION_INITIALIZED: () => Jx,
    IX2_SESSION_STARTED: () => ew,
    IX2_SESSION_STOPPED: () => tw,
    IX2_STOP_REQUESTED: () => iw,
    IX2_TEST_FRAME_RENDERED: () => yw,
    IX2_VIEWPORT_WIDTH_CHANGED: () => hw,
  });
  var Zx,
    Jx,
    ew,
    tw,
    rw,
    nw,
    iw,
    ow,
    aw,
    sw,
    uw,
    cw,
    lw,
    fw,
    dw,
    pw,
    vw,
    hw,
    gw,
    yw,
    Tf = ge(() => {
      "use strict";
      (Zx = "IX2_RAW_DATA_IMPORTED"),
        (Jx = "IX2_SESSION_INITIALIZED"),
        (ew = "IX2_SESSION_STARTED"),
        (tw = "IX2_SESSION_STOPPED"),
        (rw = "IX2_PREVIEW_REQUESTED"),
        (nw = "IX2_PLAYBACK_REQUESTED"),
        (iw = "IX2_STOP_REQUESTED"),
        (ow = "IX2_CLEAR_REQUESTED"),
        (aw = "IX2_EVENT_LISTENER_ADDED"),
        (sw = "IX2_EVENT_STATE_CHANGED"),
        (uw = "IX2_ANIMATION_FRAME_CHANGED"),
        (cw = "IX2_PARAMETER_CHANGED"),
        (lw = "IX2_INSTANCE_ADDED"),
        (fw = "IX2_INSTANCE_STARTED"),
        (dw = "IX2_INSTANCE_REMOVED"),
        (pw = "IX2_ELEMENT_STATE_CHANGED"),
        (vw = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (hw = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (gw = "IX2_MEDIA_QUERIES_DEFINED"),
        (yw = "IX2_TEST_FRAME_RENDERED");
    });
  var Re = {};
  Fe(Re, {
    ABSTRACT_NODE: () => hA,
    AUTO: () => iA,
    BACKGROUND: () => Zw,
    BACKGROUND_COLOR: () => Qw,
    BAR_DELIMITER: () => sA,
    BORDER_COLOR: () => Jw,
    BOUNDARY_SELECTOR: () => Tw,
    CHILDREN: () => uA,
    COLON_DELIMITER: () => aA,
    COLOR: () => eA,
    COMMA_DELIMITER: () => oA,
    CONFIG_UNIT: () => Cw,
    CONFIG_VALUE: () => ww,
    CONFIG_X_UNIT: () => Aw,
    CONFIG_X_VALUE: () => Iw,
    CONFIG_Y_UNIT: () => Sw,
    CONFIG_Y_VALUE: () => Ow,
    CONFIG_Z_UNIT: () => Rw,
    CONFIG_Z_VALUE: () => xw,
    DISPLAY: () => tA,
    FILTER: () => zw,
    FLEX: () => rA,
    FONT_VARIATION_SETTINGS: () => Kw,
    HEIGHT: () => $w,
    HTML_ELEMENT: () => pA,
    IMMEDIATE_CHILDREN: () => cA,
    IX2_ID_DELIMITER: () => mw,
    OPACITY: () => jw,
    PARENT: () => fA,
    PLAIN_OBJECT: () => vA,
    PRESERVE_3D: () => dA,
    RENDER_GENERAL: () => yA,
    RENDER_PLUGIN: () => EA,
    RENDER_STYLE: () => mA,
    RENDER_TRANSFORM: () => gA,
    ROTATE_X: () => Vw,
    ROTATE_Y: () => Ww,
    ROTATE_Z: () => kw,
    SCALE_3D: () => Uw,
    SCALE_X: () => Dw,
    SCALE_Y: () => Fw,
    SCALE_Z: () => Gw,
    SIBLINGS: () => lA,
    SKEW: () => Hw,
    SKEW_X: () => Xw,
    SKEW_Y: () => Bw,
    TRANSFORM: () => Lw,
    TRANSLATE_3D: () => Mw,
    TRANSLATE_X: () => Nw,
    TRANSLATE_Y: () => Pw,
    TRANSLATE_Z: () => qw,
    WF_PAGE: () => Ew,
    WIDTH: () => Yw,
    WILL_CHANGE: () => nA,
    W_MOD_IX: () => bw,
    W_MOD_JS: () => _w,
  });
  var mw,
    Ew,
    _w,
    bw,
    Tw,
    Iw,
    Ow,
    xw,
    ww,
    Aw,
    Sw,
    Rw,
    Cw,
    Lw,
    Nw,
    Pw,
    qw,
    Mw,
    Dw,
    Fw,
    Gw,
    Uw,
    Vw,
    Ww,
    kw,
    Hw,
    Xw,
    Bw,
    jw,
    zw,
    Kw,
    Yw,
    $w,
    Qw,
    Zw,
    Jw,
    eA,
    tA,
    rA,
    nA,
    iA,
    oA,
    aA,
    sA,
    uA,
    cA,
    lA,
    fA,
    dA,
    pA,
    vA,
    hA,
    gA,
    yA,
    mA,
    EA,
    If = ge(() => {
      "use strict";
      (mw = "|"),
        (Ew = "data-wf-page"),
        (_w = "w-mod-js"),
        (bw = "w-mod-ix"),
        (Tw = ".w-dyn-item"),
        (Iw = "xValue"),
        (Ow = "yValue"),
        (xw = "zValue"),
        (ww = "value"),
        (Aw = "xUnit"),
        (Sw = "yUnit"),
        (Rw = "zUnit"),
        (Cw = "unit"),
        (Lw = "transform"),
        (Nw = "translateX"),
        (Pw = "translateY"),
        (qw = "translateZ"),
        (Mw = "translate3d"),
        (Dw = "scaleX"),
        (Fw = "scaleY"),
        (Gw = "scaleZ"),
        (Uw = "scale3d"),
        (Vw = "rotateX"),
        (Ww = "rotateY"),
        (kw = "rotateZ"),
        (Hw = "skew"),
        (Xw = "skewX"),
        (Bw = "skewY"),
        (jw = "opacity"),
        (zw = "filter"),
        (Kw = "font-variation-settings"),
        (Yw = "width"),
        ($w = "height"),
        (Qw = "backgroundColor"),
        (Zw = "background"),
        (Jw = "borderColor"),
        (eA = "color"),
        (tA = "display"),
        (rA = "flex"),
        (nA = "willChange"),
        (iA = "AUTO"),
        (oA = ","),
        (aA = ":"),
        (sA = "|"),
        (uA = "CHILDREN"),
        (cA = "IMMEDIATE_CHILDREN"),
        (lA = "SIBLINGS"),
        (fA = "PARENT"),
        (dA = "preserve-3d"),
        (pA = "HTML_ELEMENT"),
        (vA = "PLAIN_OBJECT"),
        (hA = "ABSTRACT_NODE"),
        (gA = "RENDER_TRANSFORM"),
        (yA = "RENDER_GENERAL"),
        (mA = "RENDER_STYLE"),
        (EA = "RENDER_PLUGIN");
    });
  var Of = {};
  Fe(Of, {
    ActionAppliesTo: () => Hx,
    ActionTypeConsts: () => He,
    EventAppliesTo: () => ko,
    EventBasedOn: () => at,
    EventContinuousMouseAxes: () => Vx,
    EventLimitAffectedElements: () => Wx,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => Ie,
    IX2EngineConstants: () => Re,
    InteractionTypeConsts: () => Xx,
    QuickEffectDirectionConsts: () => kx,
    QuickEffectIds: () => Ho,
    ReducedMotionTypes: () => Bo,
  });
  var Ge = ge(() => {
    "use strict";
    Ef();
    Xo();
    _f();
    bf();
    Tf();
    If();
  });
  var _A,
    xf,
    wf = ge(() => {
      "use strict";
      Ge();
      ({ IX2_RAW_DATA_IMPORTED: _A } = Ie),
        (xf = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case _A:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var Kt = c((Ee) => {
    "use strict";
    Object.defineProperty(Ee, "__esModule", { value: !0 });
    var bA =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == "function" &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          };
    Ee.clone = xn;
    Ee.addLast = Rf;
    Ee.addFirst = Cf;
    Ee.removeLast = Lf;
    Ee.removeFirst = Nf;
    Ee.insert = Pf;
    Ee.removeAt = qf;
    Ee.replaceAt = Mf;
    Ee.getIn = wn;
    Ee.set = An;
    Ee.setIn = Sn;
    Ee.update = Ff;
    Ee.updateIn = Gf;
    Ee.merge = Uf;
    Ee.mergeDeep = Vf;
    Ee.mergeIn = Wf;
    Ee.omit = kf;
    Ee.addDefaults = Hf;
    var Af = "INVALID_ARGS";
    function Sf(e) {
      throw new Error(e);
    }
    function jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var TA = {}.hasOwnProperty;
    function xn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Ue(e, t, r) {
      var n = r;
      n == null && Sf(Af);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var h = jo(f);
          if (h.length)
            for (var v = 0; v <= h.length; v++) {
              var g = h[v];
              if (!(e && n[g] !== void 0)) {
                var m = f[g];
                t && On(n[g]) && On(m) && (m = Ue(e, t, n[g], m)),
                  !(m === void 0 || m === n[g]) &&
                    (i || ((i = !0), (n = xn(n))), (n[g] = m));
              }
            }
        }
      }
      return n;
    }
    function On(e) {
      var t = typeof e > "u" ? "undefined" : bA(e);
      return e != null && (t === "object" || t === "function");
    }
    function Rf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Cf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Lf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Nf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Pf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function qf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Mf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function wn(e, t) {
      if ((!Array.isArray(t) && Sf(Af), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function An(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = xn(i);
      return (o[t] = r), o;
    }
    function Df(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          On(e) && On(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Df(a, t, r, n + 1);
      }
      return An(e, o, i);
    }
    function Sn(e, t, r) {
      return t.length ? Df(e, t, r, 0) : r;
    }
    function Ff(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return An(e, t, i);
    }
    function Gf(e, t, r) {
      var n = wn(e, t),
        i = r(n);
      return Sn(e, t, i);
    }
    function Uf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Ue(!1, !1, e, t, r, n, i, o);
    }
    function Vf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Ue(!1, !0, e, t, r, n, i, o);
    }
    function Wf(e, t, r, n, i, o, a) {
      var s = wn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
          f = arguments.length,
          h = Array(f > 7 ? f - 7 : 0),
          v = 7;
        v < f;
        v++
      )
        h[v - 7] = arguments[v];
      return (
        h.length
          ? (u = Ue.call.apply(Ue, [null, !1, !1, s, r, n, i, o, a].concat(h)))
          : (u = Ue(!1, !1, s, r, n, i, o, a)),
        Sn(e, t, u)
      );
    }
    function kf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (TA.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = jo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Hf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Ue.call.apply(Ue, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Ue(!0, !1, e, t, r, n, i, o);
    }
    var IA = {
      clone: xn,
      addLast: Rf,
      addFirst: Cf,
      removeLast: Lf,
      removeFirst: Nf,
      insert: Pf,
      removeAt: qf,
      replaceAt: Mf,
      getIn: wn,
      set: An,
      setIn: Sn,
      update: Ff,
      updateIn: Gf,
      merge: Uf,
      mergeDeep: Vf,
      mergeIn: Wf,
      omit: kf,
      addDefaults: Hf,
    };
    Ee.default = IA;
  });
  var Bf,
    OA,
    xA,
    wA,
    AA,
    SA,
    Xf,
    jf,
    zf = ge(() => {
      "use strict";
      Ge();
      (Bf = le(Kt())),
        ({
          IX2_PREVIEW_REQUESTED: OA,
          IX2_PLAYBACK_REQUESTED: xA,
          IX2_STOP_REQUESTED: wA,
          IX2_CLEAR_REQUESTED: AA,
        } = Ie),
        (SA = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (Xf = Object.create(null, {
          [OA]: { value: "preview" },
          [xA]: { value: "playback" },
          [wA]: { value: "stop" },
          [AA]: { value: "clear" },
        })),
        (jf = (e = SA, t) => {
          if (t.type in Xf) {
            let r = [Xf[t.type]];
            return (0, Bf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var Ne,
    RA,
    CA,
    LA,
    NA,
    PA,
    qA,
    MA,
    DA,
    FA,
    GA,
    Kf,
    UA,
    Yf,
    $f = ge(() => {
      "use strict";
      Ge();
      (Ne = le(Kt())),
        ({
          IX2_SESSION_INITIALIZED: RA,
          IX2_SESSION_STARTED: CA,
          IX2_TEST_FRAME_RENDERED: LA,
          IX2_SESSION_STOPPED: NA,
          IX2_EVENT_LISTENER_ADDED: PA,
          IX2_EVENT_STATE_CHANGED: qA,
          IX2_ANIMATION_FRAME_CHANGED: MA,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: DA,
          IX2_VIEWPORT_WIDTH_CHANGED: FA,
          IX2_MEDIA_QUERIES_DEFINED: GA,
        } = Ie),
        (Kf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (UA = 20),
        (Yf = (e = Kf, t) => {
          switch (t.type) {
            case RA: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, Ne.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case CA:
              return (0, Ne.set)(e, "active", !0);
            case LA: {
              let {
                payload: { step: r = UA },
              } = t;
              return (0, Ne.set)(e, "tick", e.tick + r);
            }
            case NA:
              return Kf;
            case MA: {
              let {
                payload: { now: r },
              } = t;
              return (0, Ne.set)(e, "tick", r);
            }
            case PA: {
              let r = (0, Ne.addLast)(e.eventListeners, t.payload);
              return (0, Ne.set)(e, "eventListeners", r);
            }
            case qA: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, Ne.setIn)(e, ["eventState", r], n);
            }
            case DA: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, Ne.setIn)(e, ["playbackState", r], n);
            }
            case FA: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, Ne.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case GA:
              return (0, Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Zf = c((BH, Qf) => {
    function VA() {
      (this.__data__ = []), (this.size = 0);
    }
    Qf.exports = VA;
  });
  var Rn = c((jH, Jf) => {
    function WA(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Jf.exports = WA;
  });
  var Cr = c((zH, ed) => {
    var kA = Rn();
    function HA(e, t) {
      for (var r = e.length; r--; ) if (kA(e[r][0], t)) return r;
      return -1;
    }
    ed.exports = HA;
  });
  var rd = c((KH, td) => {
    var XA = Cr(),
      BA = Array.prototype,
      jA = BA.splice;
    function zA(e) {
      var t = this.__data__,
        r = XA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : jA.call(t, r, 1), --this.size, !0;
    }
    td.exports = zA;
  });
  var id = c((YH, nd) => {
    var KA = Cr();
    function YA(e) {
      var t = this.__data__,
        r = KA(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    nd.exports = YA;
  });
  var ad = c(($H, od) => {
    var $A = Cr();
    function QA(e) {
      return $A(this.__data__, e) > -1;
    }
    od.exports = QA;
  });
  var ud = c((QH, sd) => {
    var ZA = Cr();
    function JA(e, t) {
      var r = this.__data__,
        n = ZA(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    sd.exports = JA;
  });
  var Lr = c((ZH, cd) => {
    var eS = Zf(),
      tS = rd(),
      rS = id(),
      nS = ad(),
      iS = ud();
    function Yt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Yt.prototype.clear = eS;
    Yt.prototype.delete = tS;
    Yt.prototype.get = rS;
    Yt.prototype.has = nS;
    Yt.prototype.set = iS;
    cd.exports = Yt;
  });
  var fd = c((JH, ld) => {
    var oS = Lr();
    function aS() {
      (this.__data__ = new oS()), (this.size = 0);
    }
    ld.exports = aS;
  });
  var pd = c((eX, dd) => {
    function sS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    dd.exports = sS;
  });
  var hd = c((tX, vd) => {
    function uS(e) {
      return this.__data__.get(e);
    }
    vd.exports = uS;
  });
  var yd = c((rX, gd) => {
    function cS(e) {
      return this.__data__.has(e);
    }
    gd.exports = cS;
  });
  var st = c((nX, md) => {
    function lS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    md.exports = lS;
  });
  var zo = c((iX, Ed) => {
    var fS = Tt(),
      dS = st(),
      pS = "[object AsyncFunction]",
      vS = "[object Function]",
      hS = "[object GeneratorFunction]",
      gS = "[object Proxy]";
    function yS(e) {
      if (!dS(e)) return !1;
      var t = fS(e);
      return t == vS || t == hS || t == pS || t == gS;
    }
    Ed.exports = yS;
  });
  var bd = c((oX, _d) => {
    var mS = Qe(),
      ES = mS["__core-js_shared__"];
    _d.exports = ES;
  });
  var Od = c((aX, Id) => {
    var Ko = bd(),
      Td = (function () {
        var e = /[^.]+$/.exec((Ko && Ko.keys && Ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function _S(e) {
      return !!Td && Td in e;
    }
    Id.exports = _S;
  });
  var Yo = c((sX, xd) => {
    var bS = Function.prototype,
      TS = bS.toString;
    function IS(e) {
      if (e != null) {
        try {
          return TS.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    xd.exports = IS;
  });
  var Ad = c((uX, wd) => {
    var OS = zo(),
      xS = Od(),
      wS = st(),
      AS = Yo(),
      SS = /[\\^$.*+?()[\]{}|]/g,
      RS = /^\[object .+?Constructor\]$/,
      CS = Function.prototype,
      LS = Object.prototype,
      NS = CS.toString,
      PS = LS.hasOwnProperty,
      qS = RegExp(
        "^" +
          NS.call(PS)
            .replace(SS, "\\$&")
            .replace(
              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
              "$1.*?"
            ) +
          "$"
      );
    function MS(e) {
      if (!wS(e) || xS(e)) return !1;
      var t = OS(e) ? qS : RS;
      return t.test(AS(e));
    }
    wd.exports = MS;
  });
  var Rd = c((cX, Sd) => {
    function DS(e, t) {
      return e?.[t];
    }
    Sd.exports = DS;
  });
  var It = c((lX, Cd) => {
    var FS = Ad(),
      GS = Rd();
    function US(e, t) {
      var r = GS(e, t);
      return FS(r) ? r : void 0;
    }
    Cd.exports = US;
  });
  var Cn = c((fX, Ld) => {
    var VS = It(),
      WS = Qe(),
      kS = VS(WS, "Map");
    Ld.exports = kS;
  });
  var Nr = c((dX, Nd) => {
    var HS = It(),
      XS = HS(Object, "create");
    Nd.exports = XS;
  });
  var Md = c((pX, qd) => {
    var Pd = Nr();
    function BS() {
      (this.__data__ = Pd ? Pd(null) : {}), (this.size = 0);
    }
    qd.exports = BS;
  });
  var Fd = c((vX, Dd) => {
    function jS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Dd.exports = jS;
  });
  var Ud = c((hX, Gd) => {
    var zS = Nr(),
      KS = "__lodash_hash_undefined__",
      YS = Object.prototype,
      $S = YS.hasOwnProperty;
    function QS(e) {
      var t = this.__data__;
      if (zS) {
        var r = t[e];
        return r === KS ? void 0 : r;
      }
      return $S.call(t, e) ? t[e] : void 0;
    }
    Gd.exports = QS;
  });
  var Wd = c((gX, Vd) => {
    var ZS = Nr(),
      JS = Object.prototype,
      e0 = JS.hasOwnProperty;
    function t0(e) {
      var t = this.__data__;
      return ZS ? t[e] !== void 0 : e0.call(t, e);
    }
    Vd.exports = t0;
  });
  var Hd = c((yX, kd) => {
    var r0 = Nr(),
      n0 = "__lodash_hash_undefined__";
    function i0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = r0 && t === void 0 ? n0 : t),
        this
      );
    }
    kd.exports = i0;
  });
  var Bd = c((mX, Xd) => {
    var o0 = Md(),
      a0 = Fd(),
      s0 = Ud(),
      u0 = Wd(),
      c0 = Hd();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = o0;
    $t.prototype.delete = a0;
    $t.prototype.get = s0;
    $t.prototype.has = u0;
    $t.prototype.set = c0;
    Xd.exports = $t;
  });
  var Kd = c((EX, zd) => {
    var jd = Bd(),
      l0 = Lr(),
      f0 = Cn();
    function d0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new jd(),
          map: new (f0 || l0)(),
          string: new jd(),
        });
    }
    zd.exports = d0;
  });
  var $d = c((_X, Yd) => {
    function p0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Yd.exports = p0;
  });
  var Pr = c((bX, Qd) => {
    var v0 = $d();
    function h0(e, t) {
      var r = e.__data__;
      return v0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    Qd.exports = h0;
  });
  var Jd = c((TX, Zd) => {
    var g0 = Pr();
    function y0(e) {
      var t = g0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Zd.exports = y0;
  });
  var tp = c((IX, ep) => {
    var m0 = Pr();
    function E0(e) {
      return m0(this, e).get(e);
    }
    ep.exports = E0;
  });
  var np = c((OX, rp) => {
    var _0 = Pr();
    function b0(e) {
      return _0(this, e).has(e);
    }
    rp.exports = b0;
  });
  var op = c((xX, ip) => {
    var T0 = Pr();
    function I0(e, t) {
      var r = T0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    ip.exports = I0;
  });
  var Ln = c((wX, ap) => {
    var O0 = Kd(),
      x0 = Jd(),
      w0 = tp(),
      A0 = np(),
      S0 = op();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r; ) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = O0;
    Qt.prototype.delete = x0;
    Qt.prototype.get = w0;
    Qt.prototype.has = A0;
    Qt.prototype.set = S0;
    ap.exports = Qt;
  });
  var up = c((AX, sp) => {
    var R0 = Lr(),
      C0 = Cn(),
      L0 = Ln(),
      N0 = 200;
    function P0(e, t) {
      var r = this.__data__;
      if (r instanceof R0) {
        var n = r.__data__;
        if (!C0 || n.length < N0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new L0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    sp.exports = P0;
  });
  var $o = c((SX, cp) => {
    var q0 = Lr(),
      M0 = fd(),
      D0 = pd(),
      F0 = hd(),
      G0 = yd(),
      U0 = up();
    function Zt(e) {
      var t = (this.__data__ = new q0(e));
      this.size = t.size;
    }
    Zt.prototype.clear = M0;
    Zt.prototype.delete = D0;
    Zt.prototype.get = F0;
    Zt.prototype.has = G0;
    Zt.prototype.set = U0;
    cp.exports = Zt;
  });
  var fp = c((RX, lp) => {
    var V0 = "__lodash_hash_undefined__";
    function W0(e) {
      return this.__data__.set(e, V0), this;
    }
    lp.exports = W0;
  });
  var pp = c((CX, dp) => {
    function k0(e) {
      return this.__data__.has(e);
    }
    dp.exports = k0;
  });
  var hp = c((LX, vp) => {
    var H0 = Ln(),
      X0 = fp(),
      B0 = pp();
    function Nn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new H0(); ++t < r; ) this.add(e[t]);
    }
    Nn.prototype.add = Nn.prototype.push = X0;
    Nn.prototype.has = B0;
    vp.exports = Nn;
  });
  var yp = c((NX, gp) => {
    function j0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    gp.exports = j0;
  });
  var Ep = c((PX, mp) => {
    function z0(e, t) {
      return e.has(t);
    }
    mp.exports = z0;
  });
  var Qo = c((qX, _p) => {
    var K0 = hp(),
      Y0 = yp(),
      $0 = Ep(),
      Q0 = 1,
      Z0 = 2;
    function J0(e, t, r, n, i, o) {
      var a = r & Q0,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        h = o.get(t);
      if (f && h) return f == t && h == e;
      var v = -1,
        g = !0,
        m = r & Z0 ? new K0() : void 0;
      for (o.set(e, t), o.set(t, e); ++v < s; ) {
        var T = e[v],
          O = t[v];
        if (n) var M = a ? n(O, T, v, t, e, o) : n(T, O, v, e, t, o);
        if (M !== void 0) {
          if (M) continue;
          g = !1;
          break;
        }
        if (m) {
          if (
            !Y0(t, function (R, L) {
              if (!$0(m, L) && (T === R || i(T, R, r, n, o))) return m.push(L);
            })
          ) {
            g = !1;
            break;
          }
        } else if (!(T === O || i(T, O, r, n, o))) {
          g = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), g;
    }
    _p.exports = J0;
  });
  var Tp = c((MX, bp) => {
    var eR = Qe(),
      tR = eR.Uint8Array;
    bp.exports = tR;
  });
  var Op = c((DX, Ip) => {
    function rR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    Ip.exports = rR;
  });
  var wp = c((FX, xp) => {
    function nR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    xp.exports = nR;
  });
  var Lp = c((GX, Cp) => {
    var Ap = Bt(),
      Sp = Tp(),
      iR = Rn(),
      oR = Qo(),
      aR = Op(),
      sR = wp(),
      uR = 1,
      cR = 2,
      lR = "[object Boolean]",
      fR = "[object Date]",
      dR = "[object Error]",
      pR = "[object Map]",
      vR = "[object Number]",
      hR = "[object RegExp]",
      gR = "[object Set]",
      yR = "[object String]",
      mR = "[object Symbol]",
      ER = "[object ArrayBuffer]",
      _R = "[object DataView]",
      Rp = Ap ? Ap.prototype : void 0,
      Zo = Rp ? Rp.valueOf : void 0;
    function bR(e, t, r, n, i, o, a) {
      switch (r) {
        case _R:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case ER:
          return !(e.byteLength != t.byteLength || !o(new Sp(e), new Sp(t)));
        case lR:
        case fR:
        case vR:
          return iR(+e, +t);
        case dR:
          return e.name == t.name && e.message == t.message;
        case hR:
        case yR:
          return e == t + "";
        case pR:
          var s = aR;
        case gR:
          var u = n & uR;
          if ((s || (s = sR), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= cR), a.set(e, t);
          var h = oR(s(e), s(t), n, i, o, a);
          return a.delete(e), h;
        case mR:
          if (Zo) return Zo.call(e) == Zo.call(t);
      }
      return !1;
    }
    Cp.exports = bR;
  });
  var Pn = c((UX, Np) => {
    function TR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r];
      return e;
    }
    Np.exports = TR;
  });
  var xe = c((VX, Pp) => {
    var IR = Array.isArray;
    Pp.exports = IR;
  });
  var Jo = c((WX, qp) => {
    var OR = Pn(),
      xR = xe();
    function wR(e, t, r) {
      var n = t(e);
      return xR(e) ? n : OR(n, r(e));
    }
    qp.exports = wR;
  });
  var Dp = c((kX, Mp) => {
    function AR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n; ) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Mp.exports = AR;
  });
  var ea = c((HX, Fp) => {
    function SR() {
      return [];
    }
    Fp.exports = SR;
  });
  var ta = c((XX, Up) => {
    var RR = Dp(),
      CR = ea(),
      LR = Object.prototype,
      NR = LR.propertyIsEnumerable,
      Gp = Object.getOwnPropertySymbols,
      PR = Gp
        ? function (e) {
            return e == null
              ? []
              : ((e = Object(e)),
                RR(Gp(e), function (t) {
                  return NR.call(e, t);
                }));
          }
        : CR;
    Up.exports = PR;
  });
  var Wp = c((BX, Vp) => {
    function qR(e, t) {
      for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
      return n;
    }
    Vp.exports = qR;
  });
  var Hp = c((jX, kp) => {
    var MR = Tt(),
      DR = pt(),
      FR = "[object Arguments]";
    function GR(e) {
      return DR(e) && MR(e) == FR;
    }
    kp.exports = GR;
  });
  var qr = c((zX, jp) => {
    var Xp = Hp(),
      UR = pt(),
      Bp = Object.prototype,
      VR = Bp.hasOwnProperty,
      WR = Bp.propertyIsEnumerable,
      kR = Xp(
        (function () {
          return arguments;
        })()
      )
        ? Xp
        : function (e) {
            return UR(e) && VR.call(e, "callee") && !WR.call(e, "callee");
          };
    jp.exports = kR;
  });
  var Kp = c((KX, zp) => {
    function HR() {
      return !1;
    }
    zp.exports = HR;
  });
  var qn = c((Mr, Jt) => {
    var XR = Qe(),
      BR = Kp(),
      Qp = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
      Yp = Qp && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
      jR = Yp && Yp.exports === Qp,
      $p = jR ? XR.Buffer : void 0,
      zR = $p ? $p.isBuffer : void 0,
      KR = zR || BR;
    Jt.exports = KR;
  });
  var Mn = c((YX, Zp) => {
    var YR = 9007199254740991,
      $R = /^(?:0|[1-9]\d*)$/;
    function QR(e, t) {
      var r = typeof e;
      return (
        (t = t ?? YR),
        !!t &&
          (r == "number" || (r != "symbol" && $R.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
      );
    }
    Zp.exports = QR;
  });
  var Dn = c(($X, Jp) => {
    var ZR = 9007199254740991;
    function JR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ZR;
    }
    Jp.exports = JR;
  });
  var tv = c((QX, ev) => {
    var eC = Tt(),
      tC = Dn(),
      rC = pt(),
      nC = "[object Arguments]",
      iC = "[object Array]",
      oC = "[object Boolean]",
      aC = "[object Date]",
      sC = "[object Error]",
      uC = "[object Function]",
      cC = "[object Map]",
      lC = "[object Number]",
      fC = "[object Object]",
      dC = "[object RegExp]",
      pC = "[object Set]",
      vC = "[object String]",
      hC = "[object WeakMap]",
      gC = "[object ArrayBuffer]",
      yC = "[object DataView]",
      mC = "[object Float32Array]",
      EC = "[object Float64Array]",
      _C = "[object Int8Array]",
      bC = "[object Int16Array]",
      TC = "[object Int32Array]",
      IC = "[object Uint8Array]",
      OC = "[object Uint8ClampedArray]",
      xC = "[object Uint16Array]",
      wC = "[object Uint32Array]",
      he = {};
    he[mC] =
      he[EC] =
      he[_C] =
      he[bC] =
      he[TC] =
      he[IC] =
      he[OC] =
      he[xC] =
      he[wC] =
        !0;
    he[nC] =
      he[iC] =
      he[gC] =
      he[oC] =
      he[yC] =
      he[aC] =
      he[sC] =
      he[uC] =
      he[cC] =
      he[lC] =
      he[fC] =
      he[dC] =
      he[pC] =
      he[vC] =
      he[hC] =
        !1;
    function AC(e) {
      return rC(e) && tC(e.length) && !!he[eC(e)];
    }
    ev.exports = AC;
  });
  var nv = c((ZX, rv) => {
    function SC(e) {
      return function (t) {
        return e(t);
      };
    }
    rv.exports = SC;
  });
  var ov = c((Dr, er) => {
    var RC = wo(),
      iv = typeof Dr == "object" && Dr && !Dr.nodeType && Dr,
      Fr = iv && typeof er == "object" && er && !er.nodeType && er,
      CC = Fr && Fr.exports === iv,
      ra = CC && RC.process,
      LC = (function () {
        try {
          var e = Fr && Fr.require && Fr.require("util").types;
          return e || (ra && ra.binding && ra.binding("util"));
        } catch {}
      })();
    er.exports = LC;
  });
  var Fn = c((JX, uv) => {
    var NC = tv(),
      PC = nv(),
      av = ov(),
      sv = av && av.isTypedArray,
      qC = sv ? PC(sv) : NC;
    uv.exports = qC;
  });
  var na = c((e5, cv) => {
    var MC = Wp(),
      DC = qr(),
      FC = xe(),
      GC = qn(),
      UC = Mn(),
      VC = Fn(),
      WC = Object.prototype,
      kC = WC.hasOwnProperty;
    function HC(e, t) {
      var r = FC(e),
        n = !r && DC(e),
        i = !r && !n && GC(e),
        o = !r && !n && !i && VC(e),
        a = r || n || i || o,
        s = a ? MC(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || kC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              UC(f, u))
          ) &&
          s.push(f);
      return s;
    }
    cv.exports = HC;
  });
  var Gn = c((t5, lv) => {
    var XC = Object.prototype;
    function BC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || XC;
      return e === r;
    }
    lv.exports = BC;
  });
  var dv = c((r5, fv) => {
    var jC = Ao(),
      zC = jC(Object.keys, Object);
    fv.exports = zC;
  });
  var Un = c((n5, pv) => {
    var KC = Gn(),
      YC = dv(),
      $C = Object.prototype,
      QC = $C.hasOwnProperty;
    function ZC(e) {
      if (!KC(e)) return YC(e);
      var t = [];
      for (var r in Object(e)) QC.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    pv.exports = ZC;
  });
  var Pt = c((i5, vv) => {
    var JC = zo(),
      eL = Dn();
    function tL(e) {
      return e != null && eL(e.length) && !JC(e);
    }
    vv.exports = tL;
  });
  var Gr = c((o5, hv) => {
    var rL = na(),
      nL = Un(),
      iL = Pt();
    function oL(e) {
      return iL(e) ? rL(e) : nL(e);
    }
    hv.exports = oL;
  });
  var yv = c((a5, gv) => {
    var aL = Jo(),
      sL = ta(),
      uL = Gr();
    function cL(e) {
      return aL(e, uL, sL);
    }
    gv.exports = cL;
  });
  var _v = c((s5, Ev) => {
    var mv = yv(),
      lL = 1,
      fL = Object.prototype,
      dL = fL.hasOwnProperty;
    function pL(e, t, r, n, i, o) {
      var a = r & lL,
        s = mv(e),
        u = s.length,
        f = mv(t),
        h = f.length;
      if (u != h && !a) return !1;
      for (var v = u; v--; ) {
        var g = s[v];
        if (!(a ? g in t : dL.call(t, g))) return !1;
      }
      var m = o.get(e),
        T = o.get(t);
      if (m && T) return m == t && T == e;
      var O = !0;
      o.set(e, t), o.set(t, e);
      for (var M = a; ++v < u; ) {
        g = s[v];
        var R = e[g],
          L = t[g];
        if (n) var S = a ? n(L, R, g, t, e, o) : n(R, L, g, e, t, o);
        if (!(S === void 0 ? R === L || i(R, L, r, n, o) : S)) {
          O = !1;
          break;
        }
        M || (M = g == "constructor");
      }
      if (O && !M) {
        var P = e.constructor,
          q = t.constructor;
        P != q &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof P == "function" &&
            P instanceof P &&
            typeof q == "function" &&
            q instanceof q
          ) &&
          (O = !1);
      }
      return o.delete(e), o.delete(t), O;
    }
    Ev.exports = pL;
  });
  var Tv = c((u5, bv) => {
    var vL = It(),
      hL = Qe(),
      gL = vL(hL, "DataView");
    bv.exports = gL;
  });
  var Ov = c((c5, Iv) => {
    var yL = It(),
      mL = Qe(),
      EL = yL(mL, "Promise");
    Iv.exports = EL;
  });
  var wv = c((l5, xv) => {
    var _L = It(),
      bL = Qe(),
      TL = _L(bL, "Set");
    xv.exports = TL;
  });
  var ia = c((f5, Av) => {
    var IL = It(),
      OL = Qe(),
      xL = IL(OL, "WeakMap");
    Av.exports = xL;
  });
  var Vn = c((d5, qv) => {
    var oa = Tv(),
      aa = Cn(),
      sa = Ov(),
      ua = wv(),
      ca = ia(),
      Pv = Tt(),
      tr = Yo(),
      Sv = "[object Map]",
      wL = "[object Object]",
      Rv = "[object Promise]",
      Cv = "[object Set]",
      Lv = "[object WeakMap]",
      Nv = "[object DataView]",
      AL = tr(oa),
      SL = tr(aa),
      RL = tr(sa),
      CL = tr(ua),
      LL = tr(ca),
      qt = Pv;
    ((oa && qt(new oa(new ArrayBuffer(1))) != Nv) ||
      (aa && qt(new aa()) != Sv) ||
      (sa && qt(sa.resolve()) != Rv) ||
      (ua && qt(new ua()) != Cv) ||
      (ca && qt(new ca()) != Lv)) &&
      (qt = function (e) {
        var t = Pv(e),
          r = t == wL ? e.constructor : void 0,
          n = r ? tr(r) : "";
        if (n)
          switch (n) {
            case AL:
              return Nv;
            case SL:
              return Sv;
            case RL:
              return Rv;
            case CL:
              return Cv;
            case LL:
              return Lv;
          }
        return t;
      });
    qv.exports = qt;
  });
  var kv = c((p5, Wv) => {
    var la = $o(),
      NL = Qo(),
      PL = Lp(),
      qL = _v(),
      Mv = Vn(),
      Dv = xe(),
      Fv = qn(),
      ML = Fn(),
      DL = 1,
      Gv = "[object Arguments]",
      Uv = "[object Array]",
      Wn = "[object Object]",
      FL = Object.prototype,
      Vv = FL.hasOwnProperty;
    function GL(e, t, r, n, i, o) {
      var a = Dv(e),
        s = Dv(t),
        u = a ? Uv : Mv(e),
        f = s ? Uv : Mv(t);
      (u = u == Gv ? Wn : u), (f = f == Gv ? Wn : f);
      var h = u == Wn,
        v = f == Wn,
        g = u == f;
      if (g && Fv(e)) {
        if (!Fv(t)) return !1;
        (a = !0), (h = !1);
      }
      if (g && !h)
        return (
          o || (o = new la()),
          a || ML(e) ? NL(e, t, r, n, i, o) : PL(e, t, u, r, n, i, o)
        );
      if (!(r & DL)) {
        var m = h && Vv.call(e, "__wrapped__"),
          T = v && Vv.call(t, "__wrapped__");
        if (m || T) {
          var O = m ? e.value() : e,
            M = T ? t.value() : t;
          return o || (o = new la()), i(O, M, r, n, o);
        }
      }
      return g ? (o || (o = new la()), qL(e, t, r, n, i, o)) : !1;
    }
    Wv.exports = GL;
  });
  var fa = c((v5, Bv) => {
    var UL = kv(),
      Hv = pt();
    function Xv(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Hv(e) && !Hv(t))
        ? e !== e && t !== t
        : UL(e, t, r, n, Xv, i);
    }
    Bv.exports = Xv;
  });
  var zv = c((h5, jv) => {
    var VL = $o(),
      WL = fa(),
      kL = 1,
      HL = 2;
    function XL(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--; ) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o; ) {
        s = r[i];
        var u = s[0],
          f = e[u],
          h = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var v = new VL();
          if (n) var g = n(f, h, u, e, t, v);
          if (!(g === void 0 ? WL(h, f, kL | HL, n, v) : g)) return !1;
        }
      }
      return !0;
    }
    jv.exports = XL;
  });
  var da = c((g5, Kv) => {
    var BL = st();
    function jL(e) {
      return e === e && !BL(e);
    }
    Kv.exports = jL;
  });
  var $v = c((y5, Yv) => {
    var zL = da(),
      KL = Gr();
    function YL(e) {
      for (var t = KL(e), r = t.length; r--; ) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, zL(i)];
      }
      return t;
    }
    Yv.exports = YL;
  });
  var pa = c((m5, Qv) => {
    function $L(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    Qv.exports = $L;
  });
  var Jv = c((E5, Zv) => {
    var QL = zv(),
      ZL = $v(),
      JL = pa();
    function eN(e) {
      var t = ZL(e);
      return t.length == 1 && t[0][2]
        ? JL(t[0][0], t[0][1])
        : function (r) {
            return r === e || QL(r, e, t);
          };
    }
    Zv.exports = eN;
  });
  var Ur = c((_5, eh) => {
    var tN = Tt(),
      rN = pt(),
      nN = "[object Symbol]";
    function iN(e) {
      return typeof e == "symbol" || (rN(e) && tN(e) == nN);
    }
    eh.exports = iN;
  });
  var kn = c((b5, th) => {
    var oN = xe(),
      aN = Ur(),
      sN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      uN = /^\w*$/;
    function cN(e, t) {
      if (oN(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        aN(e)
        ? !0
        : uN.test(e) || !sN.test(e) || (t != null && e in Object(t));
    }
    th.exports = cN;
  });
  var ih = c((T5, nh) => {
    var rh = Ln(),
      lN = "Expected a function";
    function va(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(lN);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (va.Cache || rh)()), r;
    }
    va.Cache = rh;
    nh.exports = va;
  });
  var ah = c((I5, oh) => {
    var fN = ih(),
      dN = 500;
    function pN(e) {
      var t = fN(e, function (n) {
          return r.size === dN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    oh.exports = pN;
  });
  var uh = c((O5, sh) => {
    var vN = ah(),
      hN =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      gN = /\\(\\)?/g,
      yN = vN(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(hN, function (r, n, i, o) {
            t.push(i ? o.replace(gN, "$1") : n || r);
          }),
          t
        );
      });
    sh.exports = yN;
  });
  var ha = c((x5, ch) => {
    function mN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
        i[r] = t(e[r], r, e);
      return i;
    }
    ch.exports = mN;
  });
  var hh = c((w5, vh) => {
    var lh = Bt(),
      EN = ha(),
      _N = xe(),
      bN = Ur(),
      TN = 1 / 0,
      fh = lh ? lh.prototype : void 0,
      dh = fh ? fh.toString : void 0;
    function ph(e) {
      if (typeof e == "string") return e;
      if (_N(e)) return EN(e, ph) + "";
      if (bN(e)) return dh ? dh.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -TN ? "-0" : t;
    }
    vh.exports = ph;
  });
  var yh = c((A5, gh) => {
    var IN = hh();
    function ON(e) {
      return e == null ? "" : IN(e);
    }
    gh.exports = ON;
  });
  var Vr = c((S5, mh) => {
    var xN = xe(),
      wN = kn(),
      AN = uh(),
      SN = yh();
    function RN(e, t) {
      return xN(e) ? e : wN(e, t) ? [e] : AN(SN(e));
    }
    mh.exports = RN;
  });
  var rr = c((R5, Eh) => {
    var CN = Ur(),
      LN = 1 / 0;
    function NN(e) {
      if (typeof e == "string" || CN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -LN ? "-0" : t;
    }
    Eh.exports = NN;
  });
  var Hn = c((C5, _h) => {
    var PN = Vr(),
      qN = rr();
    function MN(e, t) {
      t = PN(t, e);
      for (var r = 0, n = t.length; e != null && r < n; ) e = e[qN(t[r++])];
      return r && r == n ? e : void 0;
    }
    _h.exports = MN;
  });
  var Xn = c((L5, bh) => {
    var DN = Hn();
    function FN(e, t, r) {
      var n = e == null ? void 0 : DN(e, t);
      return n === void 0 ? r : n;
    }
    bh.exports = FN;
  });
  var Ih = c((N5, Th) => {
    function GN(e, t) {
      return e != null && t in Object(e);
    }
    Th.exports = GN;
  });
  var xh = c((P5, Oh) => {
    var UN = Vr(),
      VN = qr(),
      WN = xe(),
      kN = Mn(),
      HN = Dn(),
      XN = rr();
    function BN(e, t, r) {
      t = UN(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i; ) {
        var a = XN(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && HN(i) && kN(a, i) && (WN(e) || VN(e)));
    }
    Oh.exports = BN;
  });
  var Ah = c((q5, wh) => {
    var jN = Ih(),
      zN = xh();
    function KN(e, t) {
      return e != null && zN(e, t, jN);
    }
    wh.exports = KN;
  });
  var Rh = c((M5, Sh) => {
    var YN = fa(),
      $N = Xn(),
      QN = Ah(),
      ZN = kn(),
      JN = da(),
      eP = pa(),
      tP = rr(),
      rP = 1,
      nP = 2;
    function iP(e, t) {
      return ZN(e) && JN(t)
        ? eP(tP(e), t)
        : function (r) {
            var n = $N(r, e);
            return n === void 0 && n === t ? QN(r, e) : YN(t, n, rP | nP);
          };
    }
    Sh.exports = iP;
  });
  var Bn = c((D5, Ch) => {
    function oP(e) {
      return e;
    }
    Ch.exports = oP;
  });
  var ga = c((F5, Lh) => {
    function aP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Lh.exports = aP;
  });
  var Ph = c((G5, Nh) => {
    var sP = Hn();
    function uP(e) {
      return function (t) {
        return sP(t, e);
      };
    }
    Nh.exports = uP;
  });
  var Mh = c((U5, qh) => {
    var cP = ga(),
      lP = Ph(),
      fP = kn(),
      dP = rr();
    function pP(e) {
      return fP(e) ? cP(dP(e)) : lP(e);
    }
    qh.exports = pP;
  });
  var Ot = c((V5, Dh) => {
    var vP = Jv(),
      hP = Rh(),
      gP = Bn(),
      yP = xe(),
      mP = Mh();
    function EP(e) {
      return typeof e == "function"
        ? e
        : e == null
        ? gP
        : typeof e == "object"
        ? yP(e)
          ? hP(e[0], e[1])
          : vP(e)
        : mP(e);
    }
    Dh.exports = EP;
  });
  var ya = c((W5, Fh) => {
    var _P = Ot(),
      bP = Pt(),
      TP = Gr();
    function IP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!bP(t)) {
          var o = _P(r, 3);
          (t = TP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Fh.exports = IP;
  });
  var ma = c((k5, Gh) => {
    function OP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i; )
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Gh.exports = OP;
  });
  var Vh = c((H5, Uh) => {
    var xP = /\s/;
    function wP(e) {
      for (var t = e.length; t-- && xP.test(e.charAt(t)); );
      return t;
    }
    Uh.exports = wP;
  });
  var kh = c((X5, Wh) => {
    var AP = Vh(),
      SP = /^\s+/;
    function RP(e) {
      return e && e.slice(0, AP(e) + 1).replace(SP, "");
    }
    Wh.exports = RP;
  });
  var jn = c((B5, Bh) => {
    var CP = kh(),
      Hh = st(),
      LP = Ur(),
      Xh = 0 / 0,
      NP = /^[-+]0x[0-9a-f]+$/i,
      PP = /^0b[01]+$/i,
      qP = /^0o[0-7]+$/i,
      MP = parseInt;
    function DP(e) {
      if (typeof e == "number") return e;
      if (LP(e)) return Xh;
      if (Hh(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Hh(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = CP(e);
      var r = PP.test(e);
      return r || qP.test(e) ? MP(e.slice(2), r ? 2 : 8) : NP.test(e) ? Xh : +e;
    }
    Bh.exports = DP;
  });
  var Kh = c((j5, zh) => {
    var FP = jn(),
      jh = 1 / 0,
      GP = 17976931348623157e292;
    function UP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = FP(e)), e === jh || e === -jh)) {
        var t = e < 0 ? -1 : 1;
        return t * GP;
      }
      return e === e ? e : 0;
    }
    zh.exports = UP;
  });
  var Ea = c((z5, Yh) => {
    var VP = Kh();
    function WP(e) {
      var t = VP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Yh.exports = WP;
  });
  var Qh = c((K5, $h) => {
    var kP = ma(),
      HP = Ot(),
      XP = Ea(),
      BP = Math.max;
    function jP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : XP(r);
      return i < 0 && (i = BP(n + i, 0)), kP(e, HP(t, 3), i);
    }
    $h.exports = jP;
  });
  var _a = c((Y5, Zh) => {
    var zP = ya(),
      KP = Qh(),
      YP = zP(KP);
    Zh.exports = YP;
  });
  var tg = {};
  Fe(tg, {
    ELEMENT_MATCHES: () => $P,
    FLEX_PREFIXED: () => ba,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => xt,
    TRANSFORM_STYLE_PREFIXED: () => Kn,
    withBrowser: () => zn,
  });
  var eg,
    Je,
    zn,
    $P,
    ba,
    xt,
    Jh,
    Kn,
    Yn = ge(() => {
      "use strict";
      (eg = le(_a())),
        (Je = typeof window < "u"),
        (zn = (e, t) => (Je ? e() : t)),
        ($P = zn(() =>
          (0, eg.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (ba = zn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (xt = zn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Jh = xt.split("transform")[0]),
        (Kn = Jh ? Jh + "TransformStyle" : "transformStyle");
    });
  var Ta = c(($5, ag) => {
    var QP = 4,
      ZP = 0.001,
      JP = 1e-7,
      eq = 10,
      Wr = 11,
      $n = 1 / (Wr - 1),
      tq = typeof Float32Array == "function";
    function rg(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function ng(e, t) {
      return 3 * t - 6 * e;
    }
    function ig(e) {
      return 3 * e;
    }
    function Qn(e, t, r) {
      return ((rg(t, r) * e + ng(t, r)) * e + ig(t)) * e;
    }
    function og(e, t, r) {
      return 3 * rg(t, r) * e * e + 2 * ng(t, r) * e + ig(t);
    }
    function rq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = Qn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > JP && ++s < eq);
      return a;
    }
    function nq(e, t, r, n) {
      for (var i = 0; i < QP; ++i) {
        var o = og(t, r, n);
        if (o === 0) return t;
        var a = Qn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    ag.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = tq ? new Float32Array(Wr) : new Array(Wr);
      if (t !== r || n !== i)
        for (var a = 0; a < Wr; ++a) o[a] = Qn(a * $n, t, n);
      function s(u) {
        for (var f = 0, h = 1, v = Wr - 1; h !== v && o[h] <= u; ++h) f += $n;
        --h;
        var g = (u - o[h]) / (o[h + 1] - o[h]),
          m = f + g * $n,
          T = og(m, t, n);
        return T >= ZP ? nq(u, m, t, n) : T === 0 ? m : rq(u, f, f + $n, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
          ? 0
          : f === 1
          ? 1
          : Qn(s(f), r, i);
      };
    };
  });
  var Hr = {};
  Fe(Hr, {
    bounce: () => Uq,
    bouncePast: () => Vq,
    ease: () => iq,
    easeIn: () => oq,
    easeInOut: () => sq,
    easeOut: () => aq,
    inBack: () => Cq,
    inCirc: () => wq,
    inCubic: () => fq,
    inElastic: () => Pq,
    inExpo: () => Iq,
    inOutBack: () => Nq,
    inOutCirc: () => Sq,
    inOutCubic: () => pq,
    inOutElastic: () => Mq,
    inOutExpo: () => xq,
    inOutQuad: () => lq,
    inOutQuart: () => gq,
    inOutQuint: () => Eq,
    inOutSine: () => Tq,
    inQuad: () => uq,
    inQuart: () => vq,
    inQuint: () => yq,
    inSine: () => _q,
    outBack: () => Lq,
    outBounce: () => Rq,
    outCirc: () => Aq,
    outCubic: () => dq,
    outElastic: () => qq,
    outExpo: () => Oq,
    outQuad: () => cq,
    outQuart: () => hq,
    outQuint: () => mq,
    outSine: () => bq,
    swingFrom: () => Fq,
    swingFromTo: () => Dq,
    swingTo: () => Gq,
  });
  function uq(e) {
    return Math.pow(e, 2);
  }
  function cq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function lq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function fq(e) {
    return Math.pow(e, 3);
  }
  function dq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function pq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function vq(e) {
    return Math.pow(e, 4);
  }
  function hq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function gq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function yq(e) {
    return Math.pow(e, 5);
  }
  function mq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Eq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function _q(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function bq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Tq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function Iq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Oq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function xq(e) {
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (e /= 0.5) < 1
      ? 0.5 * Math.pow(2, 10 * (e - 1))
      : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function wq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function Aq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Sq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Rq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Cq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Lq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Nq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Pq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        -(
          n *
          Math.pow(2, 10 * (e -= 1)) *
          Math.sin(((e - t) * (2 * Math.PI)) / r)
        ));
  }
  function qq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
      ? 1
      : (r || (r = 0.3),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function Mq(e) {
    let t = vt,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
      ? 1
      : (r || (r = 0.3 * 1.5),
        n < 1
          ? ((n = 1), (t = r / 4))
          : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
        e < 1
          ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
          : n *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r) *
              0.5 +
            1);
  }
  function Dq(e) {
    let t = vt;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Fq(e) {
    let t = vt;
    return e * e * ((t + 1) * e - t);
  }
  function Gq(e) {
    let t = vt;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Uq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Vq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
      : e < 2.5 / 2.75
      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var kr,
    vt,
    iq,
    oq,
    aq,
    sq,
    Ia = ge(() => {
      "use strict";
      (kr = le(Ta())),
        (vt = 1.70158),
        (iq = (0, kr.default)(0.25, 0.1, 0.25, 1)),
        (oq = (0, kr.default)(0.42, 0, 1, 1)),
        (aq = (0, kr.default)(0, 0, 0.58, 1)),
        (sq = (0, kr.default)(0.42, 0, 0.58, 1));
    });
  var ug = {};
  Fe(ug, {
    applyEasing: () => kq,
    createBezierEasing: () => Wq,
    optimizeFloat: () => Xr,
  });
  function Xr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Wq(e) {
    return (0, sg.default)(...e);
  }
  function kq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
      ? 1
      : Xr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Hr[e] ? Hr[e](t) : t);
  }
  var sg,
    Oa = ge(() => {
      "use strict";
      Ia();
      sg = le(Ta());
    });
  var fg = {};
  Fe(fg, {
    createElementState: () => lg,
    ixElements: () => rM,
    mergeActionState: () => xa,
  });
  function lg(e, t, r, n, i) {
    let o =
      r === Hq ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, nr.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function xa(e, t, r, n, i) {
    let o = iM(i);
    return (0, nr.mergeIn)(e, [t, tM, r], n, o);
  }
  function iM(e) {
    let { config: t } = e;
    return nM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var nr,
    Z5,
    Hq,
    J5,
    Xq,
    Bq,
    jq,
    zq,
    Kq,
    Yq,
    $q,
    Qq,
    Zq,
    Jq,
    eM,
    cg,
    tM,
    rM,
    nM,
    dg = ge(() => {
      "use strict";
      nr = le(Kt());
      Ge();
      ({
        HTML_ELEMENT: Z5,
        PLAIN_OBJECT: Hq,
        ABSTRACT_NODE: J5,
        CONFIG_X_VALUE: Xq,
        CONFIG_Y_VALUE: Bq,
        CONFIG_Z_VALUE: jq,
        CONFIG_VALUE: zq,
        CONFIG_X_UNIT: Kq,
        CONFIG_Y_UNIT: Yq,
        CONFIG_Z_UNIT: $q,
        CONFIG_UNIT: Qq,
      } = Re),
        ({
          IX2_SESSION_STOPPED: Zq,
          IX2_INSTANCE_ADDED: Jq,
          IX2_ELEMENT_STATE_CHANGED: eM,
        } = Ie),
        (cg = {}),
        (tM = "refState"),
        (rM = (e = cg, t = {}) => {
          switch (t.type) {
            case Zq:
              return cg;
            case Jq: {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a,
                } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, nr.getIn)(u, [r, n]) !== n && (u = lg(u, n, a, r, o)),
                xa(u, r, s, i, o)
              );
            }
            case eM: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return xa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      nM = [
        [Xq, Kq],
        [Bq, Yq],
        [jq, $q],
        [zq, Qq],
      ];
    });
  var pg = c((we) => {
    "use strict";
    Object.defineProperty(we, "__esModule", { value: !0 });
    we.renderPlugin =
      we.getPluginOrigin =
      we.getPluginDuration =
      we.getPluginDestination =
      we.getPluginConfig =
      we.createPluginInstance =
      we.clearPlugin =
        void 0;
    var oM = (e) => e.value;
    we.getPluginConfig = oM;
    var aM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    we.getPluginDuration = aM;
    var sM = (e) => e || { value: 0 };
    we.getPluginOrigin = sM;
    var uM = (e) => ({ value: e.value });
    we.getPluginDestination = uM;
    var cM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    we.createPluginInstance = cM;
    var lM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    we.renderPlugin = lM;
    var fM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    we.clearPlugin = fM;
  });
  var hg = c((Ae) => {
    "use strict";
    Object.defineProperty(Ae, "__esModule", { value: !0 });
    Ae.renderPlugin =
      Ae.getPluginOrigin =
      Ae.getPluginDuration =
      Ae.getPluginDestination =
      Ae.getPluginConfig =
      Ae.createPluginInstance =
      Ae.clearPlugin =
        void 0;
    var dM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      pM = () => window.Webflow.require("spline"),
      vM = (e, t) => e.filter((r) => !t.includes(r)),
      hM = (e, t) => e.value[t];
    Ae.getPluginConfig = hM;
    var gM = () => null;
    Ae.getPluginDuration = gM;
    var vg = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
      }),
      yM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = vM(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = vg[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = vg[a]), o), {});
      };
    Ae.getPluginOrigin = yM;
    var mM = (e) => e.value;
    Ae.getPluginDestination = mM;
    var EM = (e, t) => {
      var r, n;
      let i =
        t == null ||
        (r = t.config) === null ||
        r === void 0 ||
        (n = r.target) === null ||
        n === void 0
          ? void 0
          : n.pluginElement;
      return i ? dM(i) : null;
    };
    Ae.createPluginInstance = EM;
    var _M = (e, t, r) => {
      let n = pM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = _M;
    var bM = () => null;
    Ae.clearPlugin = bM;
  });
  var yg = c((Oe) => {
    "use strict";
    Object.defineProperty(Oe, "__esModule", { value: !0 });
    Oe.getPluginOrigin =
      Oe.getPluginDuration =
      Oe.getPluginDestination =
      Oe.getPluginConfig =
      Oe.createPluginInstance =
      Oe.clearPlugin =
        void 0;
    Oe.normalizeColor = gg;
    Oe.renderPlugin = void 0;
    function gg(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
            ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let h = (1 - Math.abs(2 * f - 1)) * u,
          v = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          g = f - h / 2,
          m,
          T,
          O;
        s >= 0 && s < 60
          ? ((m = h), (T = v), (O = 0))
          : s >= 60 && s < 120
          ? ((m = v), (T = h), (O = 0))
          : s >= 120 && s < 180
          ? ((m = 0), (T = h), (O = v))
          : s >= 180 && s < 240
          ? ((m = 0), (T = v), (O = h))
          : s >= 240 && s < 300
          ? ((m = v), (T = 0), (O = h))
          : ((m = h), (T = 0), (O = v)),
          (t = Math.round((m + g) * 255)),
          (r = Math.round((T + g) * 255)),
          (n = Math.round((O + g) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          h = (1 - Math.abs(2 * f - 1)) * u,
          v = h * (1 - Math.abs(((s / 60) % 2) - 1)),
          g = f - h / 2,
          m,
          T,
          O;
        s >= 0 && s < 60
          ? ((m = h), (T = v), (O = 0))
          : s >= 60 && s < 120
          ? ((m = v), (T = h), (O = 0))
          : s >= 120 && s < 180
          ? ((m = 0), (T = h), (O = v))
          : s >= 180 && s < 240
          ? ((m = 0), (T = v), (O = h))
          : s >= 240 && s < 300
          ? ((m = v), (T = 0), (O = h))
          : ((m = h), (T = 0), (O = v)),
          (t = Math.round((m + g) * 255)),
          (r = Math.round((T + g) * 255)),
          (n = Math.round((O + g) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var TM = (e, t) => e.value[t];
    Oe.getPluginConfig = TM;
    var IM = () => null;
    Oe.getPluginDuration = IM;
    var OM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return gg(i);
    };
    Oe.getPluginOrigin = OM;
    var xM = (e) => e.value;
    Oe.getPluginDestination = xM;
    var wM = () => null;
    Oe.createPluginInstance = wM;
    var AM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: h } = o,
        v;
      a != null && (v = a + i),
        s != null &&
          f != null &&
          u != null &&
          h != null &&
          (v = `rgba(${s}, ${u}, ${f}, ${h})`),
        v != null && document.documentElement.style.setProperty(n, v);
    };
    Oe.renderPlugin = AM;
    var SM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Oe.clearPlugin = SM;
  });
  var mg = c((Zn) => {
    "use strict";
    var Aa = fn().default;
    Object.defineProperty(Zn, "__esModule", { value: !0 });
    Zn.pluginMethodMap = void 0;
    var wa = (Ge(), rt(Of)),
      RM = Aa(pg()),
      CM = Aa(hg()),
      LM = Aa(yg()),
      nB = (Zn.pluginMethodMap = new Map([
        [wa.ActionTypeConsts.PLUGIN_LOTTIE, { ...RM }],
        [wa.ActionTypeConsts.PLUGIN_SPLINE, { ...CM }],
        [wa.ActionTypeConsts.PLUGIN_VARIABLE, { ...LM }],
      ]));
  });
  var Eg = {};
  Fe(Eg, {
    clearPlugin: () => Pa,
    createPluginInstance: () => PM,
    getPluginConfig: () => Ra,
    getPluginDestination: () => La,
    getPluginDuration: () => NM,
    getPluginOrigin: () => Ca,
    isPluginType: () => Mt,
    renderPlugin: () => Na,
  });
  function Mt(e) {
    return Sa.pluginMethodMap.has(e);
  }
  var Sa,
    Dt,
    Ra,
    Ca,
    NM,
    La,
    PM,
    Na,
    Pa,
    qa = ge(() => {
      "use strict";
      Yn();
      Sa = le(mg());
      (Dt = (e) => (t) => {
        if (!Je) return () => null;
        let r = Sa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ra = Dt("getPluginConfig")),
        (Ca = Dt("getPluginOrigin")),
        (NM = Dt("getPluginDuration")),
        (La = Dt("getPluginDestination")),
        (PM = Dt("createPluginInstance")),
        (Na = Dt("renderPlugin")),
        (Pa = Dt("clearPlugin"));
    });
  var bg = c((aB, _g) => {
    function qM(e, t) {
      return e == null || e !== e ? t : e;
    }
    _g.exports = qM;
  });
  var Ig = c((sB, Tg) => {
    function MM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o; ) r = t(r, e[i], i, e);
      return r;
    }
    Tg.exports = MM;
  });
  var xg = c((uB, Og) => {
    function DM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--; ) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Og.exports = DM;
  });
  var Ag = c((cB, wg) => {
    var FM = xg(),
      GM = FM();
    wg.exports = GM;
  });
  var Ma = c((lB, Sg) => {
    var UM = Ag(),
      VM = Gr();
    function WM(e, t) {
      return e && UM(e, t, VM);
    }
    Sg.exports = WM;
  });
  var Cg = c((fB, Rg) => {
    var kM = Pt();
    function HM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!kM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Rg.exports = HM;
  });
  var Da = c((dB, Lg) => {
    var XM = Ma(),
      BM = Cg(),
      jM = BM(XM);
    Lg.exports = jM;
  });
  var Pg = c((pB, Ng) => {
    function zM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Ng.exports = zM;
  });
  var Mg = c((vB, qg) => {
    var KM = Ig(),
      YM = Da(),
      $M = Ot(),
      QM = Pg(),
      ZM = xe();
    function JM(e, t, r) {
      var n = ZM(e) ? KM : QM,
        i = arguments.length < 3;
      return n(e, $M(t, 4), r, i, YM);
    }
    qg.exports = JM;
  });
  var Fg = c((hB, Dg) => {
    var e1 = ma(),
      t1 = Ot(),
      r1 = Ea(),
      n1 = Math.max,
      i1 = Math.min;
    function o1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
          ((i = r1(r)), (i = r < 0 ? n1(n + i, 0) : i1(i, n - 1))),
        e1(e, t1(t, 3), i, !0)
      );
    }
    Dg.exports = o1;
  });
  var Ug = c((gB, Gg) => {
    var a1 = ya(),
      s1 = Fg(),
      u1 = a1(s1);
    Gg.exports = u1;
  });
  function Vg(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function l1(e, t) {
    if (Vg(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!c1.call(t, r[i]) || !Vg(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var c1,
    Fa,
    Wg = ge(() => {
      "use strict";
      c1 = Object.prototype.hasOwnProperty;
      Fa = l1;
    });
  var iy = {};
  Fe(iy, {
    cleanupHTMLElement: () => sD,
    clearAllStyles: () => aD,
    clearObjectCache: () => A1,
    getActionListProgress: () => cD,
    getAffectedElements: () => ka,
    getComputedStyle: () => M1,
    getDestinationValues: () => k1,
    getElementId: () => L1,
    getInstanceId: () => R1,
    getInstanceOrigin: () => G1,
    getItemConfigByKey: () => W1,
    getMaxDurationItemIndex: () => ny,
    getNamespacedParameterId: () => dD,
    getRenderType: () => ey,
    getStyleProp: () => H1,
    mediaQueriesEqual: () => vD,
    observeStore: () => q1,
    reduceListToGroup: () => lD,
    reifyState: () => N1,
    renderHTMLElement: () => X1,
    shallowEqual: () => Fa,
    shouldAllowMediaQuery: () => pD,
    shouldNamespaceEventParameter: () => fD,
    stringifyTarget: () => hD,
  });
  function A1() {
    Jn.clear();
  }
  function R1() {
    return "i" + S1++;
  }
  function L1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + C1++;
  }
  function N1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ni.default)(
        e,
        (a, s) => {
          let { eventTypeId: u } = s;
          return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
        },
        {}
      ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function q1({ store: e, select: t, onChange: r, comparator: n = P1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function Xg(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function ka({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (G, w) =>
          G.concat(
            ka({
              config: { target: w },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: f,
        getSiblingElements: h,
        matchSelector: v,
        elementContains: g,
        isSiblingNode: m,
      } = i,
      { target: T } = e;
    if (!T) return [];
    let {
      id: O,
      objectId: M,
      selector: R,
      selectorGuids: L,
      appliesTo: S,
      useEventTarget: P,
    } = Xg(T);
    if (M) return [Jn.has(M) ? Jn.get(M) : Jn.set(M, {}).get(M)];
    if (S === ko.PAGE) {
      let G = a(O);
      return G ? [G] : [];
    }
    let N = (t?.action?.config?.affectedElements ?? {})[O || R] || {},
      H = !!(N.id || N.selector),
      B,
      K,
      J,
      re = t && s(Xg(t.target));
    if (
      (H
        ? ((B = N.limitAffectedElements), (K = re), (J = s(N)))
        : (K = J = s({ id: O, selector: R, selectorGuids: L })),
      t && P)
    ) {
      let G = r && (J || P === !0) ? [r] : u(re);
      if (J) {
        if (P === O1) return u(J).filter((w) => G.some((D) => g(w, D)));
        if (P === kg) return u(J).filter((w) => G.some((D) => g(D, w)));
        if (P === Hg) return u(J).filter((w) => G.some((D) => m(D, w)));
      }
      return G;
    }
    return K == null || J == null
      ? []
      : Je && n
      ? u(J).filter((G) => n.contains(G))
      : B === kg
      ? u(K, J)
      : B === I1
      ? f(u(K)).filter(v(J))
      : B === Hg
      ? h(u(K)).filter(v(J))
      : u(J);
  }
  function M1({ element: e, actionItem: t }) {
    if (!Je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case ur:
      case cr:
      case lr:
      case fr:
      case oi:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function G1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Mt(a)) return Ca(a)(t[a], n);
    switch (n.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Kr:
        return t[n.actionTypeId] || Ha[n.actionTypeId];
      case Yr:
        return D1(t[n.actionTypeId], n.config.filters);
      case $r:
        return F1(t[n.actionTypeId], n.config.fontVariations);
      case Qg:
        return { value: (0, ht.default)(parseFloat(o(e, ti)), 1) };
      case ur: {
        let s = o(e, ut),
          u = o(e, ct),
          f,
          h;
        return (
          n.config.widthUnit === wt
            ? (f = Bg.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, ht.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === wt
            ? (h = Bg.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (h = (0, ht.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: h }
        );
      }
      case cr:
      case lr:
      case fr:
        return nD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case oi:
        return { value: (0, ht.default)(o(e, ri), r.display) };
      case w1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function k1({ element: e, actionItem: t, elementApi: r }) {
    if (Mt(t.actionTypeId)) return La(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Kr: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case ur: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!Je) return { widthValue: u, heightValue: f };
        if (a === wt) {
          let h = n(e, ut);
          i(e, ut, ""), (u = o(e, "offsetWidth")), i(e, ut, h);
        }
        if (s === wt) {
          let h = n(e, ct);
          i(e, ct, ""), (f = o(e, "offsetHeight")), i(e, ct, h);
        }
        return { widthValue: u, heightValue: f };
      }
      case cr:
      case lr:
      case fr: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case Yr:
        return t.config.filters.reduce(U1, {});
      case $r:
        return t.config.fontVariations.reduce(V1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function ey(e) {
    if (/^TRANSFORM_/.test(e)) return Yg;
    if (/^STYLE_/.test(e)) return Va;
    if (/^GENERAL_/.test(e)) return Ua;
    if (/^PLUGIN_/.test(e)) return $g;
  }
  function H1(e, t) {
    return e === Va ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function X1(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Yg:
        return Y1(e, t, r, i, a);
      case Va:
        return iD(e, t, r, i, o, a);
      case Ua:
        return oD(e, i, a);
      case $g: {
        let { actionTypeId: f } = i;
        if (Mt(f)) return Na(f)(u, t, i);
      }
    }
  }
  function Y1(e, t, r, n, i) {
    let o = K1.map((s) => {
        let u = Ha[s],
          {
            xValue: f = u.xValue,
            yValue: h = u.yValue,
            zValue: v = u.zValue,
            xUnit: g = "",
            yUnit: m = "",
            zUnit: T = "",
          } = t[s] || {};
        switch (s) {
          case or:
            return `${p1}(${f}${g}, ${h}${m}, ${v}${T})`;
          case ar:
            return `${v1}(${f}${g}, ${h}${m}, ${v}${T})`;
          case sr:
            return `${h1}(${f}${g}) ${g1}(${h}${m}) ${y1}(${v}${T})`;
          case Kr:
            return `${m1}(${f}${g}, ${h}${m})`;
          default:
            return "";
        }
      }).join(" "),
      { setStyle: a } = i;
    Ft(e, xt, i), a(e, xt, o), Z1(n, r) && a(e, Kn, E1);
  }
  function $1(e, t, r, n) {
    let i = (0, ni.default)(t, (a, s, u) => `${a} ${u}(${s}${z1(u, r)})`, ""),
      { setStyle: o } = n;
    Ft(e, Br, n), o(e, Br, i);
  }
  function Q1(e, t, r, n) {
    let i = (0, ni.default)(
        t,
        (a, s, u) => (a.push(`"${u}" ${s}`), a),
        []
      ).join(", "),
      { setStyle: o } = n;
    Ft(e, jr, n), o(e, jr, i);
  }
  function Z1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === or && n !== void 0) ||
      (e === ar && n !== void 0) ||
      (e === sr && (t !== void 0 || r !== void 0))
    );
  }
  function rD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function nD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Wa[t],
      o = n(e, i),
      a = eD.test(o) ? o : r[i],
      s = rD(tD, a).split(zr);
    return {
      rValue: (0, ht.default)(parseInt(s[0], 10), 255),
      gValue: (0, ht.default)(parseInt(s[1], 10), 255),
      bValue: (0, ht.default)(parseInt(s[2], 10), 255),
      aValue: (0, ht.default)(parseFloat(s[3]), 1),
    };
  }
  function iD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case ur: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: h } = r;
        f !== void 0 && (s === wt && (s = "px"), Ft(e, ut, o), a(e, ut, f + s)),
          h !== void 0 &&
            (u === wt && (u = "px"), Ft(e, ct, o), a(e, ct, h + u));
        break;
      }
      case Yr: {
        $1(e, r, n.config, o);
        break;
      }
      case $r: {
        Q1(e, r, n.config, o);
        break;
      }
      case cr:
      case lr:
      case fr: {
        let s = Wa[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          h = Math.round(r.bValue),
          v = r.aValue;
        Ft(e, s, o),
          a(e, s, v >= 1 ? `rgb(${u},${f},${h})` : `rgba(${u},${f},${h},${v})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Ft(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function oD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case oi: {
        let { value: i } = t.config;
        i === _1 && Je ? n(e, ri, ba) : n(e, ri, i);
        return;
      }
    }
  }
  function Ft(e, t, r) {
    if (!Je) return;
    let n = Jg[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ir);
    if (!a) {
      o(e, ir, n);
      return;
    }
    let s = a.split(zr).map(Zg);
    s.indexOf(n) === -1 && o(e, ir, s.concat(n).join(zr));
  }
  function ty(e, t, r) {
    if (!Je) return;
    let n = Jg[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, ir);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        ir,
        a
          .split(zr)
          .map(Zg)
          .filter((s) => s !== n)
          .join(zr)
      );
  }
  function aD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && jg({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        jg({ actionList: i[o], elementApi: t });
      });
  }
  function jg({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        zg({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
        i.forEach((o) => {
          let { continuousActionGroups: a } = o;
          a.forEach((s) => {
            zg({ actionGroup: s, event: t, elementApi: r });
          });
        });
  }
  function zg({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Mt(o)
        ? (s = (u) => Pa(o)(u, i))
        : (s = ry({ effect: uD, actionTypeId: o, elementApi: r })),
        ka({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function sD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === ur) {
      let { config: a } = t;
      a.widthUnit === wt && n(e, ut, ""), a.heightUnit === wt && n(e, ct, "");
    }
    i(e, ir) && ry({ effect: ty, actionTypeId: o, elementApi: r })(e);
  }
  function uD(e, t, r) {
    let { setStyle: n } = r;
    ty(e, t, r), n(e, t, ""), t === xt && n(e, Kn, "");
  }
  function ny(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function cD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: h } = u,
          v = h[ny(h)],
          { config: g, actionTypeId: m } = v;
        i.id === v.id && (s = a + o);
        let T = ey(m) === Ua ? 0 : g.duration;
        a += g.delay + T;
      }),
      a > 0 ? Xr(s / a) : 0
    );
  }
  function lD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ii.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
        i.some((s) => {
          let { continuousActionGroups: u } = s;
          return u.some(({ actionItems: f }) => f.some(a));
        }),
      (0, ii.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function fD(e, { basedOn: t }) {
    return (
      (e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null)) ||
      (e === Ze.MOUSE_MOVE && t === at.ELEMENT)
    );
  }
  function dD(e, t) {
    return e + x1 + t;
  }
  function pD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function vD(e, t) {
    return Fa(e && e.sort(), t && t.sort());
  }
  function hD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ga + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ga + r + Ga + n;
  }
  var ht,
    ni,
    ei,
    ii,
    f1,
    d1,
    p1,
    v1,
    h1,
    g1,
    y1,
    m1,
    E1,
    _1,
    ti,
    Br,
    jr,
    ut,
    ct,
    Kg,
    b1,
    T1,
    kg,
    I1,
    Hg,
    O1,
    ri,
    ir,
    wt,
    zr,
    x1,
    Ga,
    Yg,
    Ua,
    Va,
    $g,
    or,
    ar,
    sr,
    Kr,
    Qg,
    Yr,
    $r,
    ur,
    cr,
    lr,
    fr,
    oi,
    w1,
    Zg,
    Wa,
    Jg,
    Jn,
    S1,
    C1,
    P1,
    Bg,
    D1,
    F1,
    U1,
    V1,
    W1,
    Ha,
    B1,
    j1,
    z1,
    K1,
    J1,
    eD,
    tD,
    ry,
    oy = ge(() => {
      "use strict";
      (ht = le(bg())), (ni = le(Mg())), (ei = le(Ug())), (ii = le(Kt()));
      Ge();
      Wg();
      Oa();
      qa();
      Yn();
      ({
        BACKGROUND: f1,
        TRANSFORM: d1,
        TRANSLATE_3D: p1,
        SCALE_3D: v1,
        ROTATE_X: h1,
        ROTATE_Y: g1,
        ROTATE_Z: y1,
        SKEW: m1,
        PRESERVE_3D: E1,
        FLEX: _1,
        OPACITY: ti,
        FILTER: Br,
        FONT_VARIATION_SETTINGS: jr,
        WIDTH: ut,
        HEIGHT: ct,
        BACKGROUND_COLOR: Kg,
        BORDER_COLOR: b1,
        COLOR: T1,
        CHILDREN: kg,
        IMMEDIATE_CHILDREN: I1,
        SIBLINGS: Hg,
        PARENT: O1,
        DISPLAY: ri,
        WILL_CHANGE: ir,
        AUTO: wt,
        COMMA_DELIMITER: zr,
        COLON_DELIMITER: x1,
        BAR_DELIMITER: Ga,
        RENDER_TRANSFORM: Yg,
        RENDER_GENERAL: Ua,
        RENDER_STYLE: Va,
        RENDER_PLUGIN: $g,
      } = Re),
        ({
          TRANSFORM_MOVE: or,
          TRANSFORM_SCALE: ar,
          TRANSFORM_ROTATE: sr,
          TRANSFORM_SKEW: Kr,
          STYLE_OPACITY: Qg,
          STYLE_FILTER: Yr,
          STYLE_FONT_VARIATION: $r,
          STYLE_SIZE: ur,
          STYLE_BACKGROUND_COLOR: cr,
          STYLE_BORDER: lr,
          STYLE_TEXT_COLOR: fr,
          GENERAL_DISPLAY: oi,
          OBJECT_VALUE: w1,
        } = He),
        (Zg = (e) => e.trim()),
        (Wa = Object.freeze({ [cr]: Kg, [lr]: b1, [fr]: T1 })),
        (Jg = Object.freeze({
          [xt]: d1,
          [Kg]: f1,
          [ti]: ti,
          [Br]: Br,
          [ut]: ut,
          [ct]: ct,
          [jr]: jr,
        })),
        (Jn = new Map());
      S1 = 1;
      C1 = 1;
      P1 = (e, t) => e === t;
      (Bg = /px/),
        (D1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = B1[n.type]), r),
            e || {}
          )),
        (F1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
                (r[n.type] = j1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (U1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (V1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (W1 = (e, t, r) => {
          if (Mt(e)) return Ra(e)(r, t);
          switch (e) {
            case Yr: {
              let n = (0, ei.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case $r: {
              let n = (0, ei.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (Ha = {
        [or]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [ar]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [sr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Kr]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (B1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (j1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (z1 = (e, t) => {
          let r = (0, ei.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (K1 = Object.keys(Ha));
      (J1 = "\\(([^)]+)\\)"), (eD = /^rgb/), (tD = RegExp(`rgba?${J1}`));
      ry =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
        (n) => {
          switch (t) {
            case or:
            case ar:
            case sr:
            case Kr:
              e(n, xt, r);
              break;
            case Yr:
              e(n, Br, r);
              break;
            case $r:
              e(n, jr, r);
              break;
            case Qg:
              e(n, ti, r);
              break;
            case ur:
              e(n, ut, r), e(n, ct, r);
              break;
            case cr:
            case lr:
            case fr:
              e(n, Wa[t], r);
              break;
            case oi:
              e(n, ri, r);
              break;
          }
        };
    });
  var Gt = c((Pe) => {
    "use strict";
    var dr = fn().default;
    Object.defineProperty(Pe, "__esModule", { value: !0 });
    Pe.IX2VanillaUtils =
      Pe.IX2VanillaPlugins =
      Pe.IX2ElementsReducer =
      Pe.IX2Easings =
      Pe.IX2EasingUtils =
      Pe.IX2BrowserSupport =
        void 0;
    var gD = dr((Yn(), rt(tg)));
    Pe.IX2BrowserSupport = gD;
    var yD = dr((Ia(), rt(Hr)));
    Pe.IX2Easings = yD;
    var mD = dr((Oa(), rt(ug)));
    Pe.IX2EasingUtils = mD;
    var ED = dr((dg(), rt(fg)));
    Pe.IX2ElementsReducer = ED;
    var _D = dr((qa(), rt(Eg)));
    Pe.IX2VanillaPlugins = _D;
    var bD = dr((oy(), rt(iy)));
    Pe.IX2VanillaUtils = bD;
  });
  var si,
    gt,
    TD,
    ID,
    OD,
    xD,
    wD,
    AD,
    ai,
    ay,
    SD,
    RD,
    Xa,
    CD,
    LD,
    ND,
    PD,
    sy,
    uy = ge(() => {
      "use strict";
      Ge();
      (si = le(Gt())),
        (gt = le(Kt())),
        ({
          IX2_RAW_DATA_IMPORTED: TD,
          IX2_SESSION_STOPPED: ID,
          IX2_INSTANCE_ADDED: OD,
          IX2_INSTANCE_STARTED: xD,
          IX2_INSTANCE_REMOVED: wD,
          IX2_ANIMATION_FRAME_CHANGED: AD,
        } = Ie),
        ({
          optimizeFloat: ai,
          applyEasing: ay,
          createBezierEasing: SD,
        } = si.IX2EasingUtils),
        ({ RENDER_GENERAL: RD } = Re),
        ({
          getItemConfigByKey: Xa,
          getRenderType: CD,
          getStyleProp: LD,
        } = si.IX2VanillaUtils),
        (ND = (e, t) => {
          let {
              position: r,
              parameterId: n,
              actionGroups: i,
              destinationKeys: o,
              smoothing: a,
              restingValue: s,
              actionTypeId: u,
              customEasingFn: f,
              skipMotion: h,
              skipToValue: v,
            } = e,
            { parameters: g } = t.payload,
            m = Math.max(1 - a, 0.01),
            T = g[n];
          T == null && ((m = 1), (T = s));
          let O = Math.max(T, 0) || 0,
            M = ai(O - r),
            R = h ? v : ai(r + M * m),
            L = R * 100;
          if (R === r && e.current) return e;
          let S, P, q, N;
          for (let B = 0, { length: K } = i; B < K; B++) {
            let { keyframe: J, actionItems: re } = i[B];
            if ((B === 0 && (S = re[0]), L >= J)) {
              S = re[0];
              let G = i[B + 1],
                w = G && L !== J;
              (P = w ? G.actionItems[0] : null),
                w && ((q = J / 100), (N = (G.keyframe - J) / 100));
            }
          }
          let H = {};
          if (S && !P)
            for (let B = 0, { length: K } = o; B < K; B++) {
              let J = o[B];
              H[J] = Xa(u, J, S.config);
            }
          else if (S && P && q !== void 0 && N !== void 0) {
            let B = (R - q) / N,
              K = S.config.easing,
              J = ay(K, B, f);
            for (let re = 0, { length: G } = o; re < G; re++) {
              let w = o[re],
                D = Xa(u, w, S.config),
                ee = (Xa(u, w, P.config) - D) * J + D;
              H[w] = ee;
            }
          }
          return (0, gt.merge)(e, { position: R, current: H });
        }),
        (PD = (e, t) => {
          let {
              active: r,
              origin: n,
              start: i,
              immediate: o,
              renderType: a,
              verbose: s,
              actionItem: u,
              destination: f,
              destinationKeys: h,
              pluginDuration: v,
              instanceDelay: g,
              customEasingFn: m,
              skipMotion: T,
            } = e,
            O = u.config.easing,
            { duration: M, delay: R } = u.config;
          v != null && (M = v),
            (R = g ?? R),
            a === RD ? (M = 0) : (o || T) && (M = R = 0);
          let { now: L } = t.payload;
          if (r && n) {
            let S = L - (i + R);
            if (s) {
              let B = L - i,
                K = M + R,
                J = ai(Math.min(Math.max(0, B / K), 1));
              e = (0, gt.set)(e, "verboseTimeElapsed", K * J);
            }
            if (S < 0) return e;
            let P = ai(Math.min(Math.max(0, S / M), 1)),
              q = ay(O, P, m),
              N = {},
              H = null;
            return (
              h.length &&
                (H = h.reduce((B, K) => {
                  let J = f[K],
                    re = parseFloat(n[K]) || 0,
                    w = (parseFloat(J) - re) * q + re;
                  return (B[K] = w), B;
                }, {})),
              (N.current = H),
              (N.position = P),
              P === 1 && ((N.active = !1), (N.complete = !0)),
              (0, gt.merge)(e, N)
            );
          }
          return e;
        }),
        (sy = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case TD:
              return t.payload.ixInstances || Object.freeze({});
            case ID:
              return Object.freeze({});
            case OD: {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: f,
                  isCarrier: h,
                  origin: v,
                  destination: g,
                  immediate: m,
                  verbose: T,
                  continuous: O,
                  parameterId: M,
                  actionGroups: R,
                  smoothing: L,
                  restingValue: S,
                  pluginInstance: P,
                  pluginDuration: q,
                  instanceDelay: N,
                  skipMotion: H,
                  skipToValue: B,
                } = t.payload,
                { actionTypeId: K } = i,
                J = CD(K),
                re = LD(J, K),
                G = Object.keys(g).filter(
                  (D) => g[D] != null && typeof g[D] != "string"
                ),
                { easing: w } = i.config;
              return (0, gt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: v,
                destination: g,
                destinationKeys: G,
                immediate: m,
                verbose: T,
                current: null,
                actionItem: i,
                actionTypeId: K,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: J,
                isCarrier: h,
                styleProp: re,
                continuous: O,
                parameterId: M,
                actionGroups: R,
                smoothing: L,
                restingValue: S,
                pluginInstance: P,
                pluginDuration: q,
                instanceDelay: N,
                skipMotion: H,
                skipToValue: B,
                customEasingFn:
                  Array.isArray(w) && w.length === 4 ? SD(w) : void 0,
              });
            }
            case xD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, gt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case wD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case AD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? ND : PD;
                r = (0, gt.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var qD,
    MD,
    DD,
    cy,
    ly = ge(() => {
      "use strict";
      Ge();
      ({
        IX2_RAW_DATA_IMPORTED: qD,
        IX2_SESSION_STOPPED: MD,
        IX2_PARAMETER_CHANGED: DD,
      } = Ie),
        (cy = (e = {}, t) => {
          switch (t.type) {
            case qD:
              return t.payload.ixParameters || {};
            case MD:
              return {};
            case DD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var py = {};
  Fe(py, { default: () => GD });
  var fy,
    dy,
    FD,
    GD,
    vy = ge(() => {
      "use strict";
      fy = le(Wo());
      wf();
      zf();
      $f();
      dy = le(Gt());
      uy();
      ly();
      ({ ixElements: FD } = dy.IX2ElementsReducer),
        (GD = (0, fy.combineReducers)({
          ixData: xf,
          ixRequest: jf,
          ixSession: Yf,
          ixElements: FD,
          ixInstances: sy,
          ixParameters: cy,
        }));
    });
  var gy = c((PB, hy) => {
    var UD = Tt(),
      VD = xe(),
      WD = pt(),
      kD = "[object String]";
    function HD(e) {
      return typeof e == "string" || (!VD(e) && WD(e) && UD(e) == kD);
    }
    hy.exports = HD;
  });
  var my = c((qB, yy) => {
    var XD = ga(),
      BD = XD("length");
    yy.exports = BD;
  });
  var _y = c((MB, Ey) => {
    var jD = "\\ud800-\\udfff",
      zD = "\\u0300-\\u036f",
      KD = "\\ufe20-\\ufe2f",
      YD = "\\u20d0-\\u20ff",
      $D = zD + KD + YD,
      QD = "\\ufe0e\\ufe0f",
      ZD = "\\u200d",
      JD = RegExp("[" + ZD + jD + $D + QD + "]");
    function eF(e) {
      return JD.test(e);
    }
    Ey.exports = eF;
  });
  var Ry = c((DB, Sy) => {
    var Ty = "\\ud800-\\udfff",
      tF = "\\u0300-\\u036f",
      rF = "\\ufe20-\\ufe2f",
      nF = "\\u20d0-\\u20ff",
      iF = tF + rF + nF,
      oF = "\\ufe0e\\ufe0f",
      aF = "[" + Ty + "]",
      Ba = "[" + iF + "]",
      ja = "\\ud83c[\\udffb-\\udfff]",
      sF = "(?:" + Ba + "|" + ja + ")",
      Iy = "[^" + Ty + "]",
      Oy = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      xy = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      uF = "\\u200d",
      wy = sF + "?",
      Ay = "[" + oF + "]?",
      cF = "(?:" + uF + "(?:" + [Iy, Oy, xy].join("|") + ")" + Ay + wy + ")*",
      lF = Ay + wy + cF,
      fF = "(?:" + [Iy + Ba + "?", Ba, Oy, xy, aF].join("|") + ")",
      by = RegExp(ja + "(?=" + ja + ")|" + fF + lF, "g");
    function dF(e) {
      for (var t = (by.lastIndex = 0); by.test(e); ) ++t;
      return t;
    }
    Sy.exports = dF;
  });
  var Ly = c((FB, Cy) => {
    var pF = my(),
      vF = _y(),
      hF = Ry();
    function gF(e) {
      return vF(e) ? hF(e) : pF(e);
    }
    Cy.exports = gF;
  });
  var Py = c((GB, Ny) => {
    var yF = Un(),
      mF = Vn(),
      EF = Pt(),
      _F = gy(),
      bF = Ly(),
      TF = "[object Map]",
      IF = "[object Set]";
    function OF(e) {
      if (e == null) return 0;
      if (EF(e)) return _F(e) ? bF(e) : e.length;
      var t = mF(e);
      return t == TF || t == IF ? e.size : yF(e).length;
    }
    Ny.exports = OF;
  });
  var My = c((UB, qy) => {
    var xF = "Expected a function";
    function wF(e) {
      if (typeof e != "function") throw new TypeError(xF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    qy.exports = wF;
  });
  var za = c((VB, Dy) => {
    var AF = It(),
      SF = (function () {
        try {
          var e = AF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      })();
    Dy.exports = SF;
  });
  var Ka = c((WB, Gy) => {
    var Fy = za();
    function RF(e, t, r) {
      t == "__proto__" && Fy
        ? Fy(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    Gy.exports = RF;
  });
  var Vy = c((kB, Uy) => {
    var CF = Ka(),
      LF = Rn(),
      NF = Object.prototype,
      PF = NF.hasOwnProperty;
    function qF(e, t, r) {
      var n = e[t];
      (!(PF.call(e, t) && LF(n, r)) || (r === void 0 && !(t in e))) &&
        CF(e, t, r);
    }
    Uy.exports = qF;
  });
  var Hy = c((HB, ky) => {
    var MF = Vy(),
      DF = Vr(),
      FF = Mn(),
      Wy = st(),
      GF = rr();
    function UF(e, t, r, n) {
      if (!Wy(e)) return e;
      t = DF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o; ) {
        var u = GF(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var h = s[u];
          (f = n ? n(h, u, s) : void 0),
            f === void 0 && (f = Wy(h) ? h : FF(t[i + 1]) ? [] : {});
        }
        MF(s, u, f), (s = s[u]);
      }
      return e;
    }
    ky.exports = UF;
  });
  var By = c((XB, Xy) => {
    var VF = Hn(),
      WF = Hy(),
      kF = Vr();
    function HF(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i; ) {
        var a = t[n],
          s = VF(e, a);
        r(s, a) && WF(o, kF(a, e), s);
      }
      return o;
    }
    Xy.exports = HF;
  });
  var zy = c((BB, jy) => {
    var XF = Pn(),
      BF = So(),
      jF = ta(),
      zF = ea(),
      KF = Object.getOwnPropertySymbols,
      YF = KF
        ? function (e) {
            for (var t = []; e; ) XF(t, jF(e)), (e = BF(e));
            return t;
          }
        : zF;
    jy.exports = YF;
  });
  var Yy = c((jB, Ky) => {
    function $F(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    Ky.exports = $F;
  });
  var Qy = c((zB, $y) => {
    var QF = st(),
      ZF = Gn(),
      JF = Yy(),
      e2 = Object.prototype,
      t2 = e2.hasOwnProperty;
    function r2(e) {
      if (!QF(e)) return JF(e);
      var t = ZF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !t2.call(e, n))) || r.push(n);
      return r;
    }
    $y.exports = r2;
  });
  var Jy = c((KB, Zy) => {
    var n2 = na(),
      i2 = Qy(),
      o2 = Pt();
    function a2(e) {
      return o2(e) ? n2(e, !0) : i2(e);
    }
    Zy.exports = a2;
  });
  var tm = c((YB, em) => {
    var s2 = Jo(),
      u2 = zy(),
      c2 = Jy();
    function l2(e) {
      return s2(e, c2, u2);
    }
    em.exports = l2;
  });
  var nm = c(($B, rm) => {
    var f2 = ha(),
      d2 = Ot(),
      p2 = By(),
      v2 = tm();
    function h2(e, t) {
      if (e == null) return {};
      var r = f2(v2(e), function (n) {
        return [n];
      });
      return (
        (t = d2(t)),
        p2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    rm.exports = h2;
  });
  var om = c((QB, im) => {
    var g2 = Ot(),
      y2 = My(),
      m2 = nm();
    function E2(e, t) {
      return m2(e, y2(g2(t)));
    }
    im.exports = E2;
  });
  var sm = c((ZB, am) => {
    var _2 = Un(),
      b2 = Vn(),
      T2 = qr(),
      I2 = xe(),
      O2 = Pt(),
      x2 = qn(),
      w2 = Gn(),
      A2 = Fn(),
      S2 = "[object Map]",
      R2 = "[object Set]",
      C2 = Object.prototype,
      L2 = C2.hasOwnProperty;
    function N2(e) {
      if (e == null) return !0;
      if (
        O2(e) &&
        (I2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          x2(e) ||
          A2(e) ||
          T2(e))
      )
        return !e.length;
      var t = b2(e);
      if (t == S2 || t == R2) return !e.size;
      if (w2(e)) return !_2(e).length;
      for (var r in e) if (L2.call(e, r)) return !1;
      return !0;
    }
    am.exports = N2;
  });
  var cm = c((JB, um) => {
    var P2 = Ka(),
      q2 = Ma(),
      M2 = Ot();
    function D2(e, t) {
      var r = {};
      return (
        (t = M2(t, 3)),
        q2(e, function (n, i, o) {
          P2(r, i, t(n, i, o));
        }),
        r
      );
    }
    um.exports = D2;
  });
  var fm = c((ej, lm) => {
    function F2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    lm.exports = F2;
  });
  var pm = c((tj, dm) => {
    var G2 = Bn();
    function U2(e) {
      return typeof e == "function" ? e : G2;
    }
    dm.exports = U2;
  });
  var hm = c((rj, vm) => {
    var V2 = fm(),
      W2 = Da(),
      k2 = pm(),
      H2 = xe();
    function X2(e, t) {
      var r = H2(e) ? V2 : W2;
      return r(e, k2(t));
    }
    vm.exports = X2;
  });
  var ym = c((nj, gm) => {
    var B2 = Qe(),
      j2 = function () {
        return B2.Date.now();
      };
    gm.exports = j2;
  });
  var _m = c((ij, Em) => {
    var z2 = st(),
      Ya = ym(),
      mm = jn(),
      K2 = "Expected a function",
      Y2 = Math.max,
      $2 = Math.min;
    function Q2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        h = !1,
        v = !1,
        g = !0;
      if (typeof e != "function") throw new TypeError(K2);
      (t = mm(t) || 0),
        z2(r) &&
          ((h = !!r.leading),
          (v = "maxWait" in r),
          (o = v ? Y2(mm(r.maxWait) || 0, t) : o),
          (g = "trailing" in r ? !!r.trailing : g));
      function m(N) {
        var H = n,
          B = i;
        return (n = i = void 0), (f = N), (a = e.apply(B, H)), a;
      }
      function T(N) {
        return (f = N), (s = setTimeout(R, t)), h ? m(N) : a;
      }
      function O(N) {
        var H = N - u,
          B = N - f,
          K = t - H;
        return v ? $2(K, o - B) : K;
      }
      function M(N) {
        var H = N - u,
          B = N - f;
        return u === void 0 || H >= t || H < 0 || (v && B >= o);
      }
      function R() {
        var N = Ya();
        if (M(N)) return L(N);
        s = setTimeout(R, O(N));
      }
      function L(N) {
        return (s = void 0), g && n ? m(N) : ((n = i = void 0), a);
      }
      function S() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function P() {
        return s === void 0 ? a : L(Ya());
      }
      function q() {
        var N = Ya(),
          H = M(N);
        if (((n = arguments), (i = this), (u = N), H)) {
          if (s === void 0) return T(u);
          if (v) return clearTimeout(s), (s = setTimeout(R, t)), m(u);
        }
        return s === void 0 && (s = setTimeout(R, t)), a;
      }
      return (q.cancel = S), (q.flush = P), q;
    }
    Em.exports = Q2;
  });
  var Tm = c((oj, bm) => {
    var Z2 = _m(),
      J2 = st(),
      eG = "Expected a function";
    function tG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(eG);
      return (
        J2(r) &&
          ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        Z2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    bm.exports = tG;
  });
  var Om = {};
  Fe(Om, {
    actionListPlaybackChanged: () => vr,
    animationFrameChanged: () => ci,
    clearRequested: () => wG,
    elementStateChanged: () => ns,
    eventListenerAdded: () => ui,
    eventStateChanged: () => es,
    instanceAdded: () => ts,
    instanceRemoved: () => rs,
    instanceStarted: () => li,
    mediaQueriesDefined: () => os,
    parameterChanged: () => pr,
    playbackRequested: () => OG,
    previewRequested: () => IG,
    rawDataImported: () => $a,
    sessionInitialized: () => Qa,
    sessionStarted: () => Za,
    sessionStopped: () => Ja,
    stopRequested: () => xG,
    testFrameRendered: () => AG,
    viewportWidthChanged: () => is,
  });
  var Im,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    vG,
    hG,
    gG,
    yG,
    mG,
    EG,
    _G,
    bG,
    TG,
    $a,
    Qa,
    Za,
    Ja,
    IG,
    OG,
    xG,
    wG,
    ui,
    AG,
    es,
    ci,
    pr,
    ts,
    li,
    rs,
    ns,
    vr,
    is,
    os,
    fi = ge(() => {
      "use strict";
      Ge();
      (Im = le(Gt())),
        ({
          IX2_RAW_DATA_IMPORTED: rG,
          IX2_SESSION_INITIALIZED: nG,
          IX2_SESSION_STARTED: iG,
          IX2_SESSION_STOPPED: oG,
          IX2_PREVIEW_REQUESTED: aG,
          IX2_PLAYBACK_REQUESTED: sG,
          IX2_STOP_REQUESTED: uG,
          IX2_CLEAR_REQUESTED: cG,
          IX2_EVENT_LISTENER_ADDED: lG,
          IX2_TEST_FRAME_RENDERED: fG,
          IX2_EVENT_STATE_CHANGED: dG,
          IX2_ANIMATION_FRAME_CHANGED: pG,
          IX2_PARAMETER_CHANGED: vG,
          IX2_INSTANCE_ADDED: hG,
          IX2_INSTANCE_STARTED: gG,
          IX2_INSTANCE_REMOVED: yG,
          IX2_ELEMENT_STATE_CHANGED: mG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: EG,
          IX2_VIEWPORT_WIDTH_CHANGED: _G,
          IX2_MEDIA_QUERIES_DEFINED: bG,
        } = Ie),
        ({ reifyState: TG } = Im.IX2VanillaUtils),
        ($a = (e) => ({ type: rG, payload: { ...TG(e) } })),
        (Qa = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: nG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Za = () => ({ type: iG })),
        (Ja = () => ({ type: oG })),
        (IG = ({ rawData: e, defer: t }) => ({
          type: aG,
          payload: { defer: t, rawData: e },
        })),
        (OG = ({
          actionTypeId: e = He.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: sG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (xG = (e) => ({ type: uG, payload: { actionListId: e } })),
        (wG = () => ({ type: cG })),
        (ui = (e, t) => ({
          type: lG,
          payload: { target: e, listenerParams: t },
        })),
        (AG = (e = 1) => ({ type: fG, payload: { step: e } })),
        (es = (e, t) => ({ type: dG, payload: { stateKey: e, newState: t } })),
        (ci = (e, t) => ({ type: pG, payload: { now: e, parameters: t } })),
        (pr = (e, t) => ({ type: vG, payload: { key: e, value: t } })),
        (ts = (e) => ({ type: hG, payload: { ...e } })),
        (li = (e, t) => ({ type: gG, payload: { instanceId: e, time: t } })),
        (rs = (e) => ({ type: yG, payload: { instanceId: e } })),
        (ns = (e, t, r, n) => ({
          type: mG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (vr = ({ actionListId: e, isPlaying: t }) => ({
          type: EG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (is = ({ width: e, mediaQueries: t }) => ({
          type: _G,
          payload: { width: e, mediaQueries: t },
        })),
        (os = () => ({ type: bG }));
    });
  var qe = {};
  Fe(qe, {
    elementContains: () => us,
    getChildElements: () => FG,
    getClosestElement: () => Qr,
    getProperty: () => NG,
    getQuerySelector: () => ss,
    getRefType: () => cs,
    getSiblingElements: () => GG,
    getStyle: () => LG,
    getValidDocument: () => qG,
    isSiblingNode: () => DG,
    matchSelector: () => PG,
    queryDocument: () => MG,
    setStyle: () => CG,
  });
  function CG(e, t, r) {
    e.style[t] = r;
  }
  function LG(e, t) {
    return e.style[t];
  }
  function NG(e, t) {
    return e[t];
  }
  function PG(e) {
    return (t) => t[as](e);
  }
  function ss({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(xm) !== -1) {
        let n = e.split(xm),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(Am)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function qG(e) {
    return e == null || e === document.documentElement.getAttribute(Am)
      ? document
      : null;
  }
  function MG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function us(e, t) {
    return e.contains(t);
  }
  function DG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function FG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function GG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null; )
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function cs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? SG
        : RG
      : null;
  }
  var wm,
    as,
    xm,
    SG,
    RG,
    Am,
    Qr,
    Sm = ge(() => {
      "use strict";
      wm = le(Gt());
      Ge();
      ({ ELEMENT_MATCHES: as } = wm.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: xm,
          HTML_ELEMENT: SG,
          PLAIN_OBJECT: RG,
          WF_PAGE: Am,
        } = Re);
      Qr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let r = e;
            do {
              if (r[as] && r[as](t)) return r;
              r = r.parentNode;
            } while (r != null);
            return null;
          };
    });
  var ls = c((uj, Cm) => {
    var UG = st(),
      Rm = Object.create,
      VG = (function () {
        function e() {}
        return function (t) {
          if (!UG(t)) return {};
          if (Rm) return Rm(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Cm.exports = VG;
  });
  var di = c((cj, Lm) => {
    function WG() {}
    Lm.exports = WG;
  });
  var vi = c((lj, Nm) => {
    var kG = ls(),
      HG = di();
    function pi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    pi.prototype = kG(HG.prototype);
    pi.prototype.constructor = pi;
    Nm.exports = pi;
  });
  var Dm = c((fj, Mm) => {
    var Pm = Bt(),
      XG = qr(),
      BG = xe(),
      qm = Pm ? Pm.isConcatSpreadable : void 0;
    function jG(e) {
      return BG(e) || XG(e) || !!(qm && e && e[qm]);
    }
    Mm.exports = jG;
  });
  var Um = c((dj, Gm) => {
    var zG = Pn(),
      KG = Dm();
    function Fm(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = KG), i || (i = []); ++o < a; ) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Fm(s, t - 1, r, n, i)
            : zG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Gm.exports = Fm;
  });
  var Wm = c((pj, Vm) => {
    var YG = Um();
    function $G(e) {
      var t = e == null ? 0 : e.length;
      return t ? YG(e, 1) : [];
    }
    Vm.exports = $G;
  });
  var Hm = c((vj, km) => {
    function QG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    km.exports = QG;
  });
  var jm = c((hj, Bm) => {
    var ZG = Hm(),
      Xm = Math.max;
    function JG(e, t, r) {
      return (
        (t = Xm(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = Xm(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t; ) s[i] = n[i];
          return (s[t] = r(a)), ZG(e, this, s);
        }
      );
    }
    Bm.exports = JG;
  });
  var Km = c((gj, zm) => {
    function eU(e) {
      return function () {
        return e;
      };
    }
    zm.exports = eU;
  });
  var Qm = c((yj, $m) => {
    var tU = Km(),
      Ym = za(),
      rU = Bn(),
      nU = Ym
        ? function (e, t) {
            return Ym(e, "toString", {
              configurable: !0,
              enumerable: !1,
              value: tU(t),
              writable: !0,
            });
          }
        : rU;
    $m.exports = nU;
  });
  var Jm = c((mj, Zm) => {
    var iU = 800,
      oU = 16,
      aU = Date.now;
    function sU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = aU(),
          i = oU - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= iU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Zm.exports = sU;
  });
  var tE = c((Ej, eE) => {
    var uU = Qm(),
      cU = Jm(),
      lU = cU(uU);
    eE.exports = lU;
  });
  var nE = c((_j, rE) => {
    var fU = Wm(),
      dU = jm(),
      pU = tE();
    function vU(e) {
      return pU(dU(e, void 0, fU), e + "");
    }
    rE.exports = vU;
  });
  var aE = c((bj, oE) => {
    var iE = ia(),
      hU = iE && new iE();
    oE.exports = hU;
  });
  var uE = c((Tj, sE) => {
    function gU() {}
    sE.exports = gU;
  });
  var fs = c((Ij, lE) => {
    var cE = aE(),
      yU = uE(),
      mU = cE
        ? function (e) {
            return cE.get(e);
          }
        : yU;
    lE.exports = mU;
  });
  var dE = c((Oj, fE) => {
    var EU = {};
    fE.exports = EU;
  });
  var ds = c((xj, vE) => {
    var pE = dE(),
      _U = Object.prototype,
      bU = _U.hasOwnProperty;
    function TU(e) {
      for (
        var t = e.name + "", r = pE[t], n = bU.call(pE, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    vE.exports = TU;
  });
  var gi = c((wj, hE) => {
    var IU = ls(),
      OU = di(),
      xU = 4294967295;
    function hi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = xU),
        (this.__views__ = []);
    }
    hi.prototype = IU(OU.prototype);
    hi.prototype.constructor = hi;
    hE.exports = hi;
  });
  var yE = c((Aj, gE) => {
    function wU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
      return t;
    }
    gE.exports = wU;
  });
  var EE = c((Sj, mE) => {
    var AU = gi(),
      SU = vi(),
      RU = yE();
    function CU(e) {
      if (e instanceof AU) return e.clone();
      var t = new SU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = RU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    mE.exports = CU;
  });
  var TE = c((Rj, bE) => {
    var LU = gi(),
      _E = vi(),
      NU = di(),
      PU = xe(),
      qU = pt(),
      MU = EE(),
      DU = Object.prototype,
      FU = DU.hasOwnProperty;
    function yi(e) {
      if (qU(e) && !PU(e) && !(e instanceof LU)) {
        if (e instanceof _E) return e;
        if (FU.call(e, "__wrapped__")) return MU(e);
      }
      return new _E(e);
    }
    yi.prototype = NU.prototype;
    yi.prototype.constructor = yi;
    bE.exports = yi;
  });
  var OE = c((Cj, IE) => {
    var GU = gi(),
      UU = fs(),
      VU = ds(),
      WU = TE();
    function kU(e) {
      var t = VU(e),
        r = WU[t];
      if (typeof r != "function" || !(t in GU.prototype)) return !1;
      if (e === r) return !0;
      var n = UU(r);
      return !!n && e === n[0];
    }
    IE.exports = kU;
  });
  var SE = c((Lj, AE) => {
    var xE = vi(),
      HU = nE(),
      XU = fs(),
      ps = ds(),
      BU = xe(),
      wE = OE(),
      jU = "Expected a function",
      zU = 8,
      KU = 32,
      YU = 128,
      $U = 256;
    function QU(e) {
      return HU(function (t) {
        var r = t.length,
          n = r,
          i = xE.prototype.thru;
        for (e && t.reverse(); n--; ) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(jU);
          if (i && !a && ps(o) == "wrapper") var a = new xE([], !0);
        }
        for (n = a ? n : r; ++n < r; ) {
          o = t[n];
          var s = ps(o),
            u = s == "wrapper" ? XU(o) : void 0;
          u &&
          wE(u[0]) &&
          u[1] == (YU | zU | KU | $U) &&
          !u[4].length &&
          u[9] == 1
            ? (a = a[ps(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && wE(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            h = f[0];
          if (a && f.length == 1 && BU(h)) return a.plant(h).value();
          for (var v = 0, g = r ? t[v].apply(this, f) : h; ++v < r; )
            g = t[v].call(this, g);
          return g;
        };
      });
    }
    AE.exports = QU;
  });
  var CE = c((Nj, RE) => {
    var ZU = SE(),
      JU = ZU();
    RE.exports = JU;
  });
  var NE = c((Pj, LE) => {
    function eV(e, t, r) {
      return (
        e === e &&
          (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    LE.exports = eV;
  });
  var qE = c((qj, PE) => {
    var tV = NE(),
      vs = jn();
    function rV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = vs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = vs(t)), (t = t === t ? t : 0)),
        tV(vs(e), t, r)
      );
    }
    PE.exports = rV;
  });
  var HE,
    XE,
    BE,
    jE,
    nV,
    iV,
    oV,
    aV,
    sV,
    uV,
    cV,
    lV,
    fV,
    dV,
    pV,
    vV,
    hV,
    gV,
    yV,
    zE,
    KE,
    mV,
    EV,
    _V,
    YE,
    bV,
    TV,
    $E,
    IV,
    hs,
    QE,
    ME,
    DE,
    ZE,
    Jr,
    OV,
    lt,
    JE,
    xV,
    Ve,
    et,
    en,
    e_,
    gs,
    FE,
    ys,
    wV,
    Zr,
    AV,
    SV,
    RV,
    t_,
    GE,
    CV,
    UE,
    LV,
    NV,
    PV,
    VE,
    mi,
    Ei,
    WE,
    kE,
    r_,
    n_ = ge(() => {
      "use strict";
      (HE = le(CE())), (XE = le(Xn())), (BE = le(qE()));
      Ge();
      ms();
      fi();
      (jE = le(Gt())),
        ({
          MOUSE_CLICK: nV,
          MOUSE_SECOND_CLICK: iV,
          MOUSE_DOWN: oV,
          MOUSE_UP: aV,
          MOUSE_OVER: sV,
          MOUSE_OUT: uV,
          DROPDOWN_CLOSE: cV,
          DROPDOWN_OPEN: lV,
          SLIDER_ACTIVE: fV,
          SLIDER_INACTIVE: dV,
          TAB_ACTIVE: pV,
          TAB_INACTIVE: vV,
          NAVBAR_CLOSE: hV,
          NAVBAR_OPEN: gV,
          MOUSE_MOVE: yV,
          PAGE_SCROLL_DOWN: zE,
          SCROLL_INTO_VIEW: KE,
          SCROLL_OUT_OF_VIEW: mV,
          PAGE_SCROLL_UP: EV,
          SCROLLING_IN_VIEW: _V,
          PAGE_FINISH: YE,
          ECOMMERCE_CART_CLOSE: bV,
          ECOMMERCE_CART_OPEN: TV,
          PAGE_START: $E,
          PAGE_SCROLL: IV,
        } = Ze),
        (hs = "COMPONENT_ACTIVE"),
        (QE = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: ME } = Re),
        ({ getNamespacedParameterId: DE } = jE.IX2VanillaUtils),
        (ZE = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        (Jr = ZE(({ element: e, nativeEvent: t }) => e === t.target)),
        (OV = ZE(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (lt = (0, HE.default)([Jr, OV])),
        (JE = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !wV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (xV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!JE(e, n);
        }),
        (Ve = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = JE(e, u);
          return (
            f &&
              hr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + ME + n.split(ME)[1],
                actionListId: (0, XE.default)(f, "action.config.actionListId"),
              }),
            hr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            tn({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (en = { handler: et(lt, Ve) }),
        (e_ = { ...en, types: [hs, QE].join(" ") }),
        (gs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (FE = "mouseover mouseout"),
        (ys = { types: gs }),
        (wV = { PAGE_START: $E, PAGE_FINISH: YE }),
        (Zr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, BE.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (AV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (SV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (RV = (e) => {
          let {
              element: t,
              event: { config: r },
            } = e,
            { clientWidth: n, clientHeight: i } = Zr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return AV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (t_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [hs, QE].indexOf(n) !== -1 ? n === hs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (GE = (e) => (t, r) => {
          let n = { elementHovered: SV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (CV = (e) => (t, r) => {
          let n = { ...r, elementVisible: RV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (UE =
          (e) =>
          (t, r = {}) => {
            let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Zr(),
              {
                event: { config: a, eventTypeId: s },
              } = t,
              { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
              h = f === "PX",
              v = i - o,
              g = Number((n / v).toFixed(2));
            if (r && r.percentTop === g) return r;
            let m = (h ? u : (o * (u || 0)) / 100) / v,
              T,
              O,
              M = 0;
            r &&
              ((T = g > r.percentTop),
              (O = r.scrollingDown !== T),
              (M = O ? g : r.anchorTop));
            let R = s === zE ? g >= M + m : g <= M - m,
              L = {
                ...r,
                percentTop: g,
                inBounds: R,
                anchorTop: M,
                scrollingDown: T,
              };
            return (r && R && (O || L.inBounds !== r.inBounds) && e(t, L)) || L;
          }),
        (LV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (NV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (PV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (VE =
          (e) =>
          (t, r = { clickCount: 0 }) => {
            let n = { clickCount: (r.clickCount % 2) + 1 };
            return (n.clickCount !== r.clickCount && e(t, n)) || n;
          }),
        (mi = (e = !0) => ({
          ...e_,
          handler: et(
            e ? lt : Jr,
            t_((t, r) => (r.isActive ? en.handler(t, r) : r))
          ),
        })),
        (Ei = (e = !0) => ({
          ...e_,
          handler: et(
            e ? lt : Jr,
            t_((t, r) => (r.isActive ? r : en.handler(t, r)))
          ),
        })),
        (WE = {
          ...ys,
          handler: CV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === KE) === r
              ? (Ve(e), { ...t, triggered: !0 })
              : t;
          }),
        }),
        (kE = 0.05),
        (r_ = {
          [fV]: mi(),
          [dV]: Ei(),
          [lV]: mi(),
          [cV]: Ei(),
          [gV]: mi(!1),
          [hV]: Ei(!1),
          [pV]: mi(),
          [vV]: Ei(),
          [TV]: { types: "ecommerce-cart-open", handler: et(lt, Ve) },
          [bV]: { types: "ecommerce-cart-close", handler: et(lt, Ve) },
          [nV]: {
            types: "click",
            handler: et(
              lt,
              VE((e, { clickCount: t }) => {
                xV(e) ? t === 1 && Ve(e) : Ve(e);
              })
            ),
          },
          [iV]: {
            types: "click",
            handler: et(
              lt,
              VE((e, { clickCount: t }) => {
                t === 2 && Ve(e);
              })
            ),
          },
          [oV]: { ...en, types: "mousedown" },
          [aV]: { ...en, types: "mouseup" },
          [sV]: {
            types: FE,
            handler: et(
              lt,
              GE((e, t) => {
                t.elementHovered && Ve(e);
              })
            ),
          },
          [uV]: {
            types: FE,
            handler: et(
              lt,
              GE((e, t) => {
                t.elementHovered || Ve(e);
              })
            ),
          },
          [yV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: a,
                  selectedAxis: s,
                  continuousParameterGroupId: u,
                  reverse: f,
                  restingState: h = 0,
                } = r,
                {
                  clientX: v = o.clientX,
                  clientY: g = o.clientY,
                  pageX: m = o.pageX,
                  pageY: T = o.pageY,
                } = n,
                O = s === "X_AXIS",
                M = n.type === "mouseout",
                R = h / 100,
                L = u,
                S = !1;
              switch (a) {
                case at.VIEWPORT: {
                  R = O
                    ? Math.min(v, window.innerWidth) / window.innerWidth
                    : Math.min(g, window.innerHeight) / window.innerHeight;
                  break;
                }
                case at.PAGE: {
                  let {
                    scrollLeft: P,
                    scrollTop: q,
                    scrollWidth: N,
                    scrollHeight: H,
                  } = Zr();
                  R = O ? Math.min(P + m, N) / N : Math.min(q + T, H) / H;
                  break;
                }
                case at.ELEMENT:
                default: {
                  L = DE(i, u);
                  let P = n.type.indexOf("mouse") === 0;
                  if (P && lt({ element: t, nativeEvent: n }) !== !0) break;
                  let q = t.getBoundingClientRect(),
                    { left: N, top: H, width: B, height: K } = q;
                  if (!P && !LV({ left: v, top: g }, q)) break;
                  (S = !0), (R = O ? (v - N) / B : (g - H) / K);
                  break;
                }
              }
              return (
                M && (R > 1 - kE || R < kE) && (R = Math.round(R)),
                (a !== at.ELEMENT || S || S !== o.elementHovered) &&
                  ((R = f ? 1 - R : R), e.dispatch(pr(L, R))),
                {
                  elementHovered: S,
                  clientX: v,
                  clientY: g,
                  pageX: m,
                  pageY: T,
                }
              );
            },
          },
          [IV]: {
            types: gs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Zr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(pr(r, s));
            },
          },
          [_V]: {
            types: gs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: a,
                  scrollWidth: s,
                  scrollHeight: u,
                  clientHeight: f,
                } = Zr(),
                {
                  basedOn: h,
                  selectedAxis: v,
                  continuousParameterGroupId: g,
                  startsEntering: m,
                  startsExiting: T,
                  addEndOffset: O,
                  addStartOffset: M,
                  addOffsetValue: R = 0,
                  endOffsetValue: L = 0,
                } = r,
                S = v === "X_AXIS";
              if (h === at.VIEWPORT) {
                let P = S ? o / s : a / u;
                return (
                  P !== i.scrollPercent && t.dispatch(pr(g, P)),
                  { scrollPercent: P }
                );
              } else {
                let P = DE(n, g),
                  q = e.getBoundingClientRect(),
                  N = (M ? R : 0) / 100,
                  H = (O ? L : 0) / 100;
                (N = m ? N : 1 - N), (H = T ? H : 1 - H);
                let B = q.top + Math.min(q.height * N, f),
                  J = q.top + q.height * H - B,
                  re = Math.min(f + J, u),
                  w = Math.min(Math.max(0, f - B), re) / re;
                return (
                  w !== i.scrollPercent && t.dispatch(pr(P, w)),
                  { scrollPercent: w }
                );
              }
            },
          },
          [KE]: WE,
          [mV]: WE,
          [zE]: {
            ...ys,
            handler: UE((e, t) => {
              t.scrollingDown && Ve(e);
            }),
          },
          [EV]: {
            ...ys,
            handler: UE((e, t) => {
              t.scrollingDown || Ve(e);
            }),
          },
          [YE]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(Jr, NV(Ve)),
          },
          [$E]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(Jr, PV(Ve)),
          },
        });
    });
  var __ = {};
  Fe(__, {
    observeRequests: () => JV,
    startActionGroup: () => tn,
    startEngine: () => xi,
    stopActionGroup: () => hr,
    stopAllActionGroups: () => y_,
    stopEngine: () => wi,
  });
  function JV(e) {
    Ut({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: rW }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: nW }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: iW }),
      Ut({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: oW });
  }
  function eW(e) {
    Ut({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        wi(e),
          p_({ store: e, elementApi: qe }),
          xi({ store: e, allowEvents: !0 }),
          v_();
      },
    });
  }
  function tW(e, t) {
    let r = Ut({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function rW({ rawData: e, defer: t }, r) {
    let n = () => {
      xi({ store: r, rawData: e, allowEvents: !0 }), v_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function v_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function nW(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: f = !0,
      } = e,
      { rawData: h } = e;
    if (n && i && h && s) {
      let v = h.actionLists[n];
      v && (h = kV({ actionList: v, actionItemId: i, rawData: h }));
    }
    if (
      (xi({ store: t, rawData: h, allowEvents: a, testManual: u }),
      (n && r === He.GENERAL_START_ACTION) || Es(r))
    ) {
      hr({ store: t, actionListId: n }),
        g_({ store: t, actionListId: n, eventId: o });
      let v = tn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && v && t.dispatch(vr({ actionListId: n, isPlaying: !s }));
    }
  }
  function iW({ actionListId: e }, t) {
    e ? hr({ store: t, actionListId: e }) : y_({ store: t }), wi(t);
  }
  function oW(e, t) {
    wi(t), p_({ store: t, elementApi: qe });
  }
  function xi({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch($a(t)),
      i.active ||
        (e.dispatch(
          Qa({
            hasBoundaryNodes: !!document.querySelector(bi),
            reducedMotion:
              document.body.hasAttribute("data-wf-ix-vacation") &&
              window.matchMedia("(prefers-reduced-motion)").matches,
          })
        ),
        r &&
          (fW(e), aW(), e.getState().ixSession.hasDefinedMediaQueries && eW(e)),
        e.dispatch(Za()),
        sW(e, n));
  }
  function aW() {
    let { documentElement: e } = document;
    e.className.indexOf(i_) === -1 && (e.className += ` ${i_}`);
  }
  function sW(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(ci(n, o)), t ? tW(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function wi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(uW), jV(), e.dispatch(Ja());
    }
  }
  function uW({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function cW({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: h } = e.getState(),
      { events: v } = f,
      g = v[n],
      { eventTypeId: m } = g,
      T = {},
      O = {},
      M = [],
      { continuousActionGroups: R } = a,
      { id: L } = a;
    HV(m, i) && (L = XV(t, L));
    let S = h.hasBoundaryNodes && r ? Qr(r, bi) : null;
    R.forEach((P) => {
      let { keyframe: q, actionItems: N } = P;
      N.forEach((H) => {
        let { actionTypeId: B } = H,
          { target: K } = H.config;
        if (!K) return;
        let J = K.boundaryMode ? S : null,
          re = zV(K) + _s + B;
        if (((O[re] = lW(O[re], q, H)), !T[re])) {
          T[re] = !0;
          let { config: G } = H;
          Ti({
            config: G,
            event: g,
            eventTarget: r,
            elementRoot: J,
            elementApi: qe,
          }).forEach((w) => {
            M.push({ element: w, key: re });
          });
        }
      });
    }),
      M.forEach(({ element: P, key: q }) => {
        let N = O[q],
          H = (0, yt.default)(N, "[0].actionItems[0]", {}),
          { actionTypeId: B } = H,
          K = Oi(B) ? Ts(B)(P, H) : null,
          J = bs({ element: P, actionItem: H, elementApi: qe }, K);
        Is({
          store: e,
          element: P,
          eventId: n,
          actionListId: o,
          actionItem: H,
          destination: J,
          continuous: !0,
          parameterId: L,
          actionGroups: N,
          smoothing: s,
          restingValue: u,
          pluginInstance: K,
        });
      });
  }
  function lW(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function fW(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    h_(e),
      (0, gr.default)(r, (i, o) => {
        let a = r_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        yW({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && pW(e);
  }
  function pW(e) {
    let t = () => {
      h_(e);
    };
    dW.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ui(window, [r, t]));
    }),
      t();
  }
  function h_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(is({ width: n, mediaQueries: i }));
    }
  }
  function yW({ logic: e, store: t, events: r }) {
    mW(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = vW(r, gW);
    if (!(0, s_.default)(s)) return;
    (0, gr.default)(s, (v, g) => {
      let m = r[g],
        { action: T, id: O, mediaQueries: M = o.mediaQueryKeys } = m,
        { actionListId: R } = T.config;
      KV(M, o.mediaQueryKeys) || t.dispatch(os()),
        T.actionTypeId === He.GENERAL_CONTINUOUS_ACTION &&
          (Array.isArray(m.config) ? m.config : [m.config]).forEach((S) => {
            let { continuousParameterGroupId: P } = S,
              q = (0, yt.default)(a, `${R}.continuousParameterGroups`, []),
              N = (0, a_.default)(q, ({ id: K }) => K === P),
              H = (S.smoothing || 0) / 100,
              B = (S.restingState || 0) / 100;
            N &&
              v.forEach((K, J) => {
                let re = O + _s + J;
                cW({
                  store: t,
                  eventStateKey: re,
                  eventTarget: K,
                  eventId: O,
                  eventConfig: S,
                  actionListId: R,
                  parameterGroup: N,
                  smoothing: H,
                  restingValue: B,
                });
              });
          }),
        (T.actionTypeId === He.GENERAL_START_ACTION || Es(T.actionTypeId)) &&
          g_({ store: t, actionListId: R, eventId: O });
    });
    let u = (v) => {
        let { ixSession: g } = t.getState();
        hW(s, (m, T, O) => {
          let M = r[T],
            R = g.eventState[O],
            { action: L, mediaQueries: S = o.mediaQueryKeys } = M;
          if (!Ii(S, g.mediaQueryKey)) return;
          let P = (q = {}) => {
            let N = i(
              {
                store: t,
                element: m,
                event: M,
                eventConfig: q,
                nativeEvent: v,
                eventStateKey: O,
              },
              R
            );
            YV(N, R) || t.dispatch(es(O, N));
          };
          L.actionTypeId === He.GENERAL_CONTINUOUS_ACTION
            ? (Array.isArray(M.config) ? M.config : [M.config]).forEach(P)
            : P();
        });
      },
      f = (0, f_.default)(u, ZV),
      h = ({ target: v = document, types: g, throttle: m }) => {
        g.split(" ")
          .filter(Boolean)
          .forEach((T) => {
            let O = m ? f : u;
            v.addEventListener(T, O), t.dispatch(ui(v, [T, O]));
          });
      };
    Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e);
  }
  function mW(e) {
    if (!QV) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ss(o);
      t[a] ||
        ((i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
          (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function g_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, yt.default)(u, "actionItemGroups[0].actionItems", []),
        h = (0, yt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ii(h, i.mediaQueryKey)) return;
      f.forEach((v) => {
        let { config: g, actionTypeId: m } = v,
          T =
            g?.target?.useEventTarget === !0 && g?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : g,
          O = Ti({ config: T, event: s, elementApi: qe }),
          M = Oi(m);
        O.forEach((R) => {
          let L = M ? Ts(m)(R, v) : null;
          Is({
            destination: bs({ element: R, actionItem: v, elementApi: qe }, L),
            immediate: !0,
            store: e,
            element: R,
            eventId: r,
            actionItem: v,
            actionListId: t,
            pluginInstance: L,
          });
        });
      });
    }
  }
  function y_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, gr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Os(r, e), i && e.dispatch(vr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function hr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Qr(r, bi) : null;
    (0, gr.default)(o, (u) => {
      let f = (0, yt.default)(u, "actionItem.config.target.boundaryMode"),
        h = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && h) {
        if (s && f && !us(s, u.element)) return;
        Os(u, e),
          u.verbose && e.dispatch(vr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function tn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: h } = u,
      v = h[t] || {},
      { mediaQueries: g = u.mediaQueryKeys } = v,
      m = (0, yt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: T, useFirstGroupAsInitialState: O } = m;
    if (!T || !T.length) return !1;
    o >= T.length && (0, yt.default)(v, "config.loop") && (o = 0),
      o === 0 && O && o++;
    let R =
        (o === 0 || (o === 1 && O)) && Es(v.action?.actionTypeId)
          ? v.config.delay
          : void 0,
      L = (0, yt.default)(T, [o, "actionItems"], []);
    if (!L.length || !Ii(g, f.mediaQueryKey)) return !1;
    let S = f.hasBoundaryNodes && r ? Qr(r, bi) : null,
      P = UV(L),
      q = !1;
    return (
      L.forEach((N, H) => {
        let { config: B, actionTypeId: K } = N,
          J = Oi(K),
          { target: re } = B;
        if (!re) return;
        let G = re.boundaryMode ? S : null;
        Ti({
          config: B,
          event: v,
          eventTarget: r,
          elementRoot: G,
          elementApi: qe,
        }).forEach((D, X) => {
          let k = J ? Ts(K)(D, N) : null,
            ee = J ? $V(K)(D, N) : null;
          q = !0;
          let ne = P === H && X === 0,
            F = VV({ element: D, actionItem: N }),
            z = bs({ element: D, actionItem: N, elementApi: qe }, k);
          Is({
            store: e,
            element: D,
            actionItem: N,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: ne,
            computedStyle: F,
            destination: z,
            immediate: a,
            verbose: s,
            pluginInstance: k,
            pluginDuration: ee,
            instanceDelay: R,
          });
        });
      }),
      q
    );
  }
  function Is(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: h,
      } = n,
      v = !u,
      g = FV(),
      { ixElements: m, ixSession: T, ixData: O } = t.getState(),
      M = DV(m, i),
      { refState: R } = m[M] || {},
      L = cs(i),
      S = T.reducedMotion && Bo[o.actionTypeId],
      P;
    if (S && u)
      switch (O.events[h]?.eventTypeId) {
        case Ze.MOUSE_MOVE:
        case Ze.MOUSE_MOVE_IN_VIEWPORT:
          P = f;
          break;
        default:
          P = 0.5;
          break;
      }
    let q = WV(i, R, r, o, qe, s);
    if (
      (t.dispatch(
        ts({
          instanceId: g,
          elementId: M,
          origin: q,
          refType: L,
          skipMotion: S,
          skipToValue: P,
          ...n,
        })
      ),
      m_(document.body, "ix2-animation-started", g),
      a)
    ) {
      EW(t, g);
      return;
    }
    Ut({ store: t, select: ({ ixInstances: N }) => N[g], onChange: E_ }),
      v && t.dispatch(li(g, T.tick));
  }
  function Os(e, t) {
    m_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === d_ && BV(o, n, qe), t.dispatch(rs(e.id));
  }
  function m_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function EW(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(li(t, 0)), e.dispatch(ci(performance.now(), r));
    let { ixInstances: n } = e.getState();
    E_(n[t], e);
  }
  function E_(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: f,
        groupIndex: h,
        eventId: v,
        eventTarget: g,
        eventStateKey: m,
        actionListId: T,
        isCarrier: O,
        styleProp: M,
        verbose: R,
        pluginInstance: L,
      } = e,
      { ixData: S, ixSession: P } = t.getState(),
      { events: q } = S,
      N = q[v] || {},
      { mediaQueries: H = S.mediaQueryKeys } = N;
    if (Ii(H, P.mediaQueryKey) && (n || r || i)) {
      if (f || (u === MV && i)) {
        t.dispatch(ns(o, s, f, a));
        let { ixElements: B } = t.getState(),
          { ref: K, refType: J, refState: re } = B[o] || {},
          G = re && re[s];
        (J === d_ || Oi(s)) && GV(K, re, G, v, a, M, qe, u, L);
      }
      if (i) {
        if (O) {
          let B = tn({
            store: t,
            eventId: v,
            eventTarget: g,
            eventStateKey: m,
            actionListId: T,
            groupIndex: h + 1,
            verbose: R,
          });
          R && !B && t.dispatch(vr({ actionListId: T, isPlaying: !1 }));
        }
        Os(e, t);
      }
    }
  }
  var a_,
    yt,
    s_,
    u_,
    c_,
    l_,
    gr,
    f_,
    _i,
    qV,
    Es,
    _s,
    bi,
    d_,
    MV,
    i_,
    Ti,
    DV,
    bs,
    Ut,
    FV,
    GV,
    p_,
    UV,
    VV,
    WV,
    kV,
    HV,
    XV,
    Ii,
    BV,
    jV,
    zV,
    KV,
    YV,
    Oi,
    Ts,
    $V,
    o_,
    QV,
    ZV,
    dW,
    vW,
    hW,
    gW,
    ms = ge(() => {
      "use strict";
      (a_ = le(_a())),
        (yt = le(Xn())),
        (s_ = le(Py())),
        (u_ = le(om())),
        (c_ = le(sm())),
        (l_ = le(cm())),
        (gr = le(hm())),
        (f_ = le(Tm()));
      Ge();
      _i = le(Gt());
      fi();
      Sm();
      n_();
      (qV = Object.keys(Ho)),
        (Es = (e) => qV.includes(e)),
        ({
          COLON_DELIMITER: _s,
          BOUNDARY_SELECTOR: bi,
          HTML_ELEMENT: d_,
          RENDER_GENERAL: MV,
          W_MOD_IX: i_,
        } = Re),
        ({
          getAffectedElements: Ti,
          getElementId: DV,
          getDestinationValues: bs,
          observeStore: Ut,
          getInstanceId: FV,
          renderHTMLElement: GV,
          clearAllStyles: p_,
          getMaxDurationItemIndex: UV,
          getComputedStyle: VV,
          getInstanceOrigin: WV,
          reduceListToGroup: kV,
          shouldNamespaceEventParameter: HV,
          getNamespacedParameterId: XV,
          shouldAllowMediaQuery: Ii,
          cleanupHTMLElement: BV,
          clearObjectCache: jV,
          stringifyTarget: zV,
          mediaQueriesEqual: KV,
          shallowEqual: YV,
        } = _i.IX2VanillaUtils),
        ({
          isPluginType: Oi,
          createPluginInstance: Ts,
          getPluginDuration: $V,
        } = _i.IX2VanillaPlugins),
        (o_ = navigator.userAgent),
        (QV = o_.match(/iPad/i) || o_.match(/iPhone/)),
        (ZV = 12);
      dW = ["resize", "orientationchange"];
      (vW = (e, t) => (0, u_.default)((0, l_.default)(e, t), c_.default)),
        (hW = (e, t) => {
          (0, gr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + _s + o;
              t(i, n, a);
            });
          });
        }),
        (gW = (e) => {
          let t = { target: e.target, targets: e.targets };
          return Ti({ config: t, elementApi: qe });
        });
    });
  var T_ = c((mt) => {
    "use strict";
    var _W = fn().default,
      bW = nu().default;
    Object.defineProperty(mt, "__esModule", { value: !0 });
    mt.actions = void 0;
    mt.destroy = b_;
    mt.init = wW;
    mt.setEnv = xW;
    mt.store = void 0;
    kl();
    var TW = Wo(),
      IW = bW((vy(), rt(py))),
      xs = (ms(), rt(__)),
      OW = _W((fi(), rt(Om)));
    mt.actions = OW;
    var ws = (mt.store = (0, TW.createStore)(IW.default));
    function xW(e) {
      e() && (0, xs.observeRequests)(ws);
    }
    function wW(e) {
      b_(), (0, xs.startEngine)({ store: ws, rawData: e, allowEvents: !0 });
    }
    function b_() {
      (0, xs.stopEngine)(ws);
    }
  });
  var w_ = c((Hj, x_) => {
    "use strict";
    var I_ = We(),
      O_ = T_();
    O_.setEnv(I_.env);
    I_.define(
      "ix2",
      (x_.exports = function () {
        return O_;
      })
    );
  });
  var S_ = c((Xj, A_) => {
    "use strict";
    var yr = We();
    yr.define(
      "links",
      (A_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = yr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          h = /\/$/,
          v,
          g;
        r.ready = r.design = r.preview = m;
        function m() {
          (i = o && yr.env("design")),
            (g = yr.env("slug") || a.pathname || ""),
            yr.scroll.off(O),
            (v = []);
          for (var R = document.links, L = 0; L < R.length; ++L) T(R[L]);
          v.length && (yr.scroll.on(O), O());
        }
        function T(R) {
          var L =
            (i && R.getAttribute("href-disabled")) || R.getAttribute("href");
          if (((s.href = L), !(L.indexOf(":") >= 0))) {
            var S = e(R);
            if (
              s.hash.length > 1 &&
              s.host + s.pathname === a.host + a.pathname
            ) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var P = e(s.hash);
              P.length && v.push({ link: S, sec: P, active: !1 });
              return;
            }
            if (!(L === "#" || L === "")) {
              var q = s.href === a.href || L === g || (f.test(L) && h.test(g));
              M(S, u, q);
            }
          }
        }
        function O() {
          var R = n.scrollTop(),
            L = n.height();
          t.each(v, function (S) {
            var P = S.link,
              q = S.sec,
              N = q.offset().top,
              H = q.outerHeight(),
              B = L * 0.5,
              K = q.is(":visible") && N + H - B >= R && N + B <= R + L;
            S.active !== K && ((S.active = K), M(P, u, K));
          });
        }
        function M(R, L, S) {
          var P = R.hasClass(L);
          (S && P) || (!S && !P) || (S ? R.addClass(L) : R.removeClass(L));
        }
        return r;
      })
    );
  });
  var C_ = c((Bj, R_) => {
    "use strict";
    var Ai = We();
    Ai.define(
      "scroll",
      (R_.exports = function (e) {
        var t = {
            WF_CLICK_EMPTY: "click.wf-empty-link",
            WF_CLICK_SCROLL: "click.wf-scroll",
          },
          r = window.location,
          n = T() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (G) {
              window.setTimeout(G, 15);
            },
          u = Ai.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          h = 'a[href="#"]',
          v = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")",
          g = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          m = document.createElement("style");
        m.appendChild(document.createTextNode(g));
        function T() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var O = /^#[a-zA-Z0-9][\w:.-]*$/;
        function M(G) {
          return O.test(G.hash) && G.host + G.pathname === r.host + r.pathname;
        }
        let R =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function L() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            R.matches
          );
        }
        function S(G, w) {
          var D;
          switch (w) {
            case "add":
              (D = G.attr("tabindex")),
                D
                  ? G.attr("data-wf-tabindex-swap", D)
                  : G.attr("tabindex", "-1");
              break;
            case "remove":
              (D = G.attr("data-wf-tabindex-swap")),
                D
                  ? (G.attr("tabindex", D),
                    G.removeAttr("data-wf-tabindex-swap"))
                  : G.removeAttr("tabindex");
              break;
          }
          G.toggleClass("wf-force-outline-none", w === "add");
        }
        function P(G) {
          var w = G.currentTarget;
          if (
            !(
              Ai.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(w.className))
            )
          ) {
            var D = M(w) ? w.hash : "";
            if (D !== "") {
              var X = e(D);
              X.length &&
                (G && (G.preventDefault(), G.stopPropagation()),
                q(D, G),
                window.setTimeout(
                  function () {
                    N(X, function () {
                      S(X, "add"),
                        X.get(0).focus({ preventScroll: !0 }),
                        S(X, "remove");
                    });
                  },
                  G ? 0 : 300
                ));
            }
          }
        }
        function q(G) {
          if (
            r.hash !== G &&
            n &&
            n.pushState &&
            !(Ai.env.chrome && r.protocol === "file:")
          ) {
            var w = n.state && n.state.hash;
            w !== G && n.pushState({ hash: G }, "", G);
          }
        }
        function N(G, w) {
          var D = i.scrollTop(),
            X = H(G);
          if (D !== X) {
            var k = B(G, D, X),
              ee = Date.now(),
              ne = function () {
                var F = Date.now() - ee;
                window.scroll(0, K(D, X, F, k)),
                  F <= k ? s(ne) : typeof w == "function" && w();
              };
            s(ne);
          }
        }
        function H(G) {
          var w = e(f),
            D = w.css("position") === "fixed" ? w.outerHeight() : 0,
            X = G.offset().top - D;
          if (G.data("scroll") === "mid") {
            var k = i.height() - D,
              ee = G.outerHeight();
            ee < k && (X -= Math.round((k - ee) / 2));
          }
          return X;
        }
        function B(G, w, D) {
          if (L()) return 0;
          var X = 1;
          return (
            a.add(G).each(function (k, ee) {
              var ne = parseFloat(ee.getAttribute("data-scroll-time"));
              !isNaN(ne) && ne >= 0 && (X = ne);
            }),
            (472.143 * Math.log(Math.abs(w - D) + 125) - 2e3) * X
          );
        }
        function K(G, w, D, X) {
          return D > X ? w : G + (w - G) * J(D / X);
        }
        function J(G) {
          return G < 0.5
            ? 4 * G * G * G
            : (G - 1) * (2 * G - 2) * (2 * G - 2) + 1;
        }
        function re() {
          var { WF_CLICK_EMPTY: G, WF_CLICK_SCROLL: w } = t;
          o.on(w, v, P),
            o.on(G, h, function (D) {
              D.preventDefault();
            }),
            document.head.insertBefore(m, document.head.firstChild);
        }
        return { ready: re };
      })
    );
  });
  var N_ = c((jj, L_) => {
    "use strict";
    var AW = We();
    AW.define(
      "touch",
      (L_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            h;
          o.addEventListener("touchstart", v, !1),
            o.addEventListener("touchmove", g, !1),
            o.addEventListener("touchend", m, !1),
            o.addEventListener("touchcancel", T, !1),
            o.addEventListener("mousedown", v, !1),
            o.addEventListener("mousemove", g, !1),
            o.addEventListener("mouseup", m, !1),
            o.addEventListener("mouseout", T, !1);
          function v(M) {
            var R = M.touches;
            (R && R.length > 1) ||
              ((a = !0),
              R ? ((s = !0), (f = R[0].clientX)) : (f = M.clientX),
              (h = f));
          }
          function g(M) {
            if (a) {
              if (s && M.type === "mousemove") {
                M.preventDefault(), M.stopPropagation();
                return;
              }
              var R = M.touches,
                L = R ? R[0].clientX : M.clientX,
                S = L - h;
              (h = L),
                Math.abs(S) > u &&
                  r &&
                  String(r()) === "" &&
                  (i("swipe", M, { direction: S > 0 ? "right" : "left" }), T());
            }
          }
          function m(M) {
            if (a && ((a = !1), s && M.type === "mouseup")) {
              M.preventDefault(), M.stopPropagation(), (s = !1);
              return;
            }
          }
          function T() {
            a = !1;
          }
          function O() {
            o.removeEventListener("touchstart", v, !1),
              o.removeEventListener("touchmove", g, !1),
              o.removeEventListener("touchend", m, !1),
              o.removeEventListener("touchcancel", T, !1),
              o.removeEventListener("mousedown", v, !1),
              o.removeEventListener("mousemove", g, !1),
              o.removeEventListener("mouseup", m, !1),
              o.removeEventListener("mouseout", T, !1),
              (o = null);
          }
          this.destroy = O;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var P_ = c((As) => {
    "use strict";
    Object.defineProperty(As, "__esModule", { value: !0 });
    As.default = SW;
    function SW(e, t, r, n, i, o, a, s, u, f, h, v, g) {
      return function (m) {
        e(m);
        var T = m.form,
          O = {
            name: T.attr("data-name") || T.attr("name") || "Untitled Form",
            pageId: T.attr("data-wf-page-id") || "",
            elementId: T.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              T.html()
            ),
            trackingCookies: n(),
          };
        let M = T.attr("data-wf-flow");
        M && (O.wfFlow = M), i(m);
        var R = o(T, O.fields);
        if (R) return a(R);
        if (((O.fileUploads = s(T)), u(m), !f)) {
          h(m);
          return;
        }
        v.ajax({
          url: g,
          type: "POST",
          data: O,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (L) {
            L && L.code === 200 && (m.success = !0), h(m);
          })
          .fail(function () {
            h(m);
          });
      };
    }
  });
  var M_ = c((Kj, q_) => {
    "use strict";
    var Si = We();
    Si.define(
      "forms",
      (q_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          h = /^\S+@\S+$/,
          v = window.alert,
          g = Si.env(),
          m,
          T,
          O,
          M = /list-manage[1-9]?.com/i,
          R = t.debounce(function () {
            v(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
            function () {
              L(), !g && !m && P();
            };
        function L() {
          (u = e("html").attr("data-wf-site")),
            (T = "https://webflow.com/api/v1/form/" + u),
            a &&
              T.indexOf("https://webflow.com") >= 0 &&
              (T = T.replace(
                "https://webflow.com",
                "https://formdata.webflow.com"
              )),
            (O = `${T}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(S);
        }
        function S(F, z) {
          var d = e(z),
            E = e.data(z, s);
          E || (E = e.data(z, s, { form: d })), q(E);
          var b = d.closest("div.w-form");
          (E.done = b.find("> .w-form-done")),
            (E.fail = b.find("> .w-form-fail")),
            (E.fileUploads = b.find(".w-file-upload")),
            E.fileUploads.each(function ($) {
              k($, E);
            });
          var y =
            E.form.attr("aria-label") || E.form.attr("data-name") || "Form";
          E.done.attr("aria-label") || E.form.attr("aria-label", y),
            E.done.attr("tabindex", "-1"),
            E.done.attr("role", "region"),
            E.done.attr("aria-label") ||
              E.done.attr("aria-label", y + " success"),
            E.fail.attr("tabindex", "-1"),
            E.fail.attr("role", "region"),
            E.fail.attr("aria-label") ||
              E.fail.attr("aria-label", y + " failure");
          var j = (E.action = d.attr("action"));
          if (
            ((E.handler = null),
            (E.redirect = d.attr("data-redirect")),
            M.test(j))
          ) {
            E.handler = w;
            return;
          }
          if (!j) {
            if (u) {
              E.handler = (() => {
                let $ = P_().default;
                return $(q, o, Si, J, X, H, v, B, N, u, D, e, T);
              })();
              return;
            }
            R();
          }
        }
        function P() {
          (m = !0),
            n.on("submit", s + " form", function ($) {
              var Q = e.data(this, s);
              Q.handler && ((Q.evt = $), Q.handler(Q));
            });
          let F = ".w-checkbox-input",
            z = ".w-radio-input",
            d = "w--redirected-checked",
            E = "w--redirected-focus",
            b = "w--redirected-focus-visible",
            y = ":focus-visible, [data-wf-focus-visible]",
            j = [
              ["checkbox", F],
              ["radio", z],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + F + ")",
            ($) => {
              e($.target).siblings(F).toggleClass(d);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', ($) => {
              e(`input[name="${$.target.name}"]:not(${F})`).map((ue, _e) =>
                e(_e).siblings(z).removeClass(d)
              );
              let Q = e($.target);
              Q.hasClass("w-radio-input") || Q.siblings(z).addClass(d);
            }),
            j.forEach(([$, Q]) => {
              n.on(
                "focus",
                s + ` form input[type="${$}"]:not(` + Q + ")",
                (ue) => {
                  e(ue.target).siblings(Q).addClass(E),
                    e(ue.target).filter(y).siblings(Q).addClass(b);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${$}"]:not(` + Q + ")",
                  (ue) => {
                    e(ue.target).siblings(Q).removeClass(`${E} ${b}`);
                  }
                );
            });
        }
        function q(F) {
          var z = (F.btn = F.form.find(':input[type="submit"]'));
          (F.wait = F.btn.attr("data-wait") || null),
            (F.success = !1),
            z.prop("disabled", !1),
            F.label && z.val(F.label);
        }
        function N(F) {
          var z = F.btn,
            d = F.wait;
          z.prop("disabled", !0), d && ((F.label = z.val()), z.val(d));
        }
        function H(F, z) {
          var d = null;
          return (
            (z = z || {}),
            F.find(':input:not([type="submit"]):not([type="file"])').each(
              function (E, b) {
                var y = e(b),
                  j = y.attr("type"),
                  $ =
                    y.attr("data-name") || y.attr("name") || "Field " + (E + 1),
                  Q = y.val();
                if (j === "checkbox") Q = y.is(":checked");
                else if (j === "radio") {
                  if (z[$] === null || typeof z[$] == "string") return;
                  Q =
                    F.find(
                      'input[name="' + y.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof Q == "string" && (Q = e.trim(Q)),
                  (z[$] = Q),
                  (d = d || re(y, j, $, Q));
              }
            ),
            d
          );
        }
        function B(F) {
          var z = {};
          return (
            F.find(':input[type="file"]').each(function (d, E) {
              var b = e(E),
                y = b.attr("data-name") || b.attr("name") || "File " + (d + 1),
                j = b.attr("data-value");
              typeof j == "string" && (j = e.trim(j)), (z[y] = j);
            }),
            z
          );
        }
        let K = { _mkto_trk: "marketo" };
        function J() {
          return document.cookie.split("; ").reduce(function (z, d) {
            let E = d.split("="),
              b = E[0];
            if (b in K) {
              let y = K[b],
                j = E.slice(1).join("=");
              z[y] = j;
            }
            return z;
          }, {});
        }
        function re(F, z, d, E) {
          var b = null;
          return (
            z === "password"
              ? (b = "Passwords cannot be submitted.")
              : F.attr("required")
              ? E
                ? f.test(F.attr("type")) &&
                  (h.test(E) ||
                    (b = "Please enter a valid email address for: " + d))
                : (b = "Please fill out the required field: " + d)
              : d === "g-recaptcha-response" &&
                !E &&
                (b = "Please confirm you\u2019re not a robot."),
            b
          );
        }
        function G(F) {
          X(F), D(F);
        }
        function w(F) {
          q(F);
          var z = F.form,
            d = {};
          if (/^https/.test(o.href) && !/^https/.test(F.action)) {
            z.attr("method", "post");
            return;
          }
          X(F);
          var E = H(z, d);
          if (E) return v(E);
          N(F);
          var b;
          t.each(d, function (Q, ue) {
            f.test(ue) && (d.EMAIL = Q),
              /^((full[ _-]?)?name)$/i.test(ue) && (b = Q),
              /^(first[ _-]?name)$/i.test(ue) && (d.FNAME = Q),
              /^(last[ _-]?name)$/i.test(ue) && (d.LNAME = Q);
          }),
            b &&
              !d.FNAME &&
              ((b = b.split(" ")),
              (d.FNAME = b[0]),
              (d.LNAME = d.LNAME || b[1]));
          var y = F.action.replace("/post?", "/post-json?") + "&c=?",
            j = y.indexOf("u=") + 2;
          j = y.substring(j, y.indexOf("&", j));
          var $ = y.indexOf("id=") + 3;
          ($ = y.substring($, y.indexOf("&", $))),
            (d["b_" + j + "_" + $] = ""),
            e
              .ajax({ url: y, data: d, dataType: "jsonp" })
              .done(function (Q) {
                (F.success = Q.result === "success" || /already/.test(Q.msg)),
                  F.success || console.info("MailChimp error: " + Q.msg),
                  D(F);
              })
              .fail(function () {
                D(F);
              });
        }
        function D(F) {
          var z = F.form,
            d = F.redirect,
            E = F.success;
          if (E && d) {
            Si.location(d);
            return;
          }
          F.done.toggle(E),
            F.fail.toggle(!E),
            E ? F.done.focus() : F.fail.focus(),
            z.toggle(!E),
            q(F);
        }
        function X(F) {
          F.evt && F.evt.preventDefault(), (F.evt = null);
        }
        function k(F, z) {
          if (!z.fileUploads || !z.fileUploads[F]) return;
          var d,
            E = e(z.fileUploads[F]),
            b = E.find("> .w-file-upload-default"),
            y = E.find("> .w-file-upload-uploading"),
            j = E.find("> .w-file-upload-success"),
            $ = E.find("> .w-file-upload-error"),
            Q = b.find(".w-file-upload-input"),
            ue = b.find(".w-file-upload-label"),
            _e = ue.children(),
            oe = $.find(".w-file-upload-error-msg"),
            p = j.find(".w-file-upload-file"),
            U = j.find(".w-file-remove-link"),
            Y = p.find(".w-file-upload-file-name"),
            V = oe.attr("data-w-size-error"),
            fe = oe.attr("data-w-type-error"),
            Me = oe.attr("data-w-generic-error");
          if (
            (g ||
              ue.on("click keydown", function (I) {
                (I.type === "keydown" && I.which !== 13 && I.which !== 32) ||
                  (I.preventDefault(), Q.click());
              }),
            ue.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
            U.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
            g)
          )
            Q.on("click", function (I) {
              I.preventDefault();
            }),
              ue.on("click", function (I) {
                I.preventDefault();
              }),
              _e.on("click", function (I) {
                I.preventDefault();
              });
          else {
            U.on("click keydown", function (I) {
              if (I.type === "keydown") {
                if (I.which !== 13 && I.which !== 32) return;
                I.preventDefault();
              }
              Q.removeAttr("data-value"),
                Q.val(""),
                Y.html(""),
                b.toggle(!0),
                j.toggle(!1),
                ue.focus();
            }),
              Q.on("change", function (I) {
                (d = I.target && I.target.files && I.target.files[0]),
                  d &&
                    (b.toggle(!1),
                    $.toggle(!1),
                    y.toggle(!0),
                    y.focus(),
                    Y.text(d.name),
                    A() || N(z),
                    (z.fileUploads[F].uploading = !0),
                    ee(d, _));
              });
            var Xe = ue.outerHeight();
            Q.height(Xe), Q.width(1);
          }
          function l(I) {
            var C = I.responseJSON && I.responseJSON.msg,
              Z = Me;
            typeof C == "string" && C.indexOf("InvalidFileTypeError") === 0
              ? (Z = fe)
              : typeof C == "string" &&
                C.indexOf("MaxFileSizeError") === 0 &&
                (Z = V),
              oe.text(Z),
              Q.removeAttr("data-value"),
              Q.val(""),
              y.toggle(!1),
              b.toggle(!0),
              $.toggle(!0),
              $.focus(),
              (z.fileUploads[F].uploading = !1),
              A() || q(z);
          }
          function _(I, C) {
            if (I) return l(I);
            var Z = C.fileName,
              ie = C.postData,
              ve = C.fileId,
              W = C.s3Url;
            Q.attr("data-value", ve), ne(W, ie, d, Z, x);
          }
          function x(I) {
            if (I) return l(I);
            y.toggle(!1),
              j.css("display", "inline-block"),
              j.focus(),
              (z.fileUploads[F].uploading = !1),
              A() || q(z);
          }
          function A() {
            var I = (z.fileUploads && z.fileUploads.toArray()) || [];
            return I.some(function (C) {
              return C.uploading;
            });
          }
        }
        function ee(F, z) {
          var d = new URLSearchParams({ name: F.name, size: F.size });
          e.ajax({ type: "GET", url: `${O}?${d}`, crossDomain: !0 })
            .done(function (E) {
              z(null, E);
            })
            .fail(function (E) {
              z(E);
            });
        }
        function ne(F, z, d, E, b) {
          var y = new FormData();
          for (var j in z) y.append(j, z[j]);
          y.append("file", d, E),
            e
              .ajax({
                type: "POST",
                url: F,
                data: y,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                b(null);
              })
              .fail(function ($) {
                b($);
              });
        }
        return r;
      })
    );
  });
  var F_ = c((Yj, D_) => {
    "use strict";
    var At = We(),
      RW = ln(),
      Se = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
    At.define(
      "navbar",
      (D_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(window),
          o = e(document),
          a = t.debounce,
          s,
          u,
          f,
          h,
          v = At.env(),
          g = '<div class="w-nav-overlay" data-wf-ignore />',
          m = ".w-nav",
          T = "w--open",
          O = "w--nav-dropdown-open",
          M = "w--nav-dropdown-toggle-open",
          R = "w--nav-dropdown-list-open",
          L = "w--nav-link-open",
          S = RW.triggers,
          P = e();
        (r.ready = r.design = r.preview = q),
          (r.destroy = function () {
            (P = e()), N(), u && u.length && u.each(J);
          });
        function q() {
          (f = v && At.env("design")),
            (h = At.env("editor")),
            (s = e(document.body)),
            (u = o.find(m)),
            u.length && (u.each(K), N(), H());
        }
        function N() {
          At.resize.off(B);
        }
        function H() {
          At.resize.on(B);
        }
        function B() {
          u.each(b);
        }
        function K(p, U) {
          var Y = e(U),
            V = e.data(U, m);
          V ||
            (V = e.data(U, m, {
              open: !1,
              el: Y,
              config: {},
              selectedIdx: -1,
            })),
            (V.menu = Y.find(".w-nav-menu")),
            (V.links = V.menu.find(".w-nav-link")),
            (V.dropdowns = V.menu.find(".w-dropdown")),
            (V.dropdownToggle = V.menu.find(".w-dropdown-toggle")),
            (V.dropdownList = V.menu.find(".w-dropdown-list")),
            (V.button = Y.find(".w-nav-button")),
            (V.container = Y.find(".w-container")),
            (V.overlayContainerId = "w-nav-overlay-" + p),
            (V.outside = d(V));
          var fe = Y.find(".w-nav-brand");
          fe &&
            fe.attr("href") === "/" &&
            fe.attr("aria-label") == null &&
            fe.attr("aria-label", "home"),
            V.button.attr("style", "-webkit-user-select: text;"),
            V.button.attr("aria-label") == null &&
              V.button.attr("aria-label", "menu"),
            V.button.attr("role", "button"),
            V.button.attr("tabindex", "0"),
            V.button.attr("aria-controls", V.overlayContainerId),
            V.button.attr("aria-haspopup", "menu"),
            V.button.attr("aria-expanded", "false"),
            V.el.off(m),
            V.button.off(m),
            V.menu.off(m),
            w(V),
            f
              ? (re(V), V.el.on("setting" + m, D(V)))
              : (G(V),
                V.button.on("click" + m, F(V)),
                V.menu.on("click" + m, "a", z(V)),
                V.button.on("keydown" + m, X(V)),
                V.el.on("keydown" + m, k(V))),
            b(p, U);
        }
        function J(p, U) {
          var Y = e.data(U, m);
          Y && (re(Y), e.removeData(U, m));
        }
        function re(p) {
          p.overlay && (oe(p, !0), p.overlay.remove(), (p.overlay = null));
        }
        function G(p) {
          p.overlay ||
            ((p.overlay = e(g).appendTo(p.el)),
            p.overlay.attr("id", p.overlayContainerId),
            (p.parent = p.menu.parent()),
            oe(p, !0));
        }
        function w(p) {
          var U = {},
            Y = p.config || {},
            V = (U.animation = p.el.attr("data-animation") || "default");
          (U.animOver = /^over/.test(V)),
            (U.animDirect = /left$/.test(V) ? -1 : 1),
            Y.animation !== V && p.open && t.defer(ne, p),
            (U.easing = p.el.attr("data-easing") || "ease"),
            (U.easing2 = p.el.attr("data-easing2") || "ease");
          var fe = p.el.attr("data-duration");
          (U.duration = fe != null ? Number(fe) : 400),
            (U.docHeight = p.el.attr("data-doc-height")),
            (p.config = U);
        }
        function D(p) {
          return function (U, Y) {
            Y = Y || {};
            var V = i.width();
            w(p),
              Y.open === !0 && ue(p, !0),
              Y.open === !1 && oe(p, !0),
              p.open &&
                t.defer(function () {
                  V !== i.width() && ne(p);
                });
          };
        }
        function X(p) {
          return function (U) {
            switch (U.keyCode) {
              case Se.SPACE:
              case Se.ENTER:
                return F(p)(), U.preventDefault(), U.stopPropagation();
              case Se.ESCAPE:
                return oe(p), U.preventDefault(), U.stopPropagation();
              case Se.ARROW_RIGHT:
              case Se.ARROW_DOWN:
              case Se.HOME:
              case Se.END:
                return p.open
                  ? (U.keyCode === Se.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    ee(p),
                    U.preventDefault(),
                    U.stopPropagation())
                  : (U.preventDefault(), U.stopPropagation());
            }
          };
        }
        function k(p) {
          return function (U) {
            if (p.open)
              switch (
                ((p.selectedIdx = p.links.index(document.activeElement)),
                U.keyCode)
              ) {
                case Se.HOME:
                case Se.END:
                  return (
                    U.keyCode === Se.END
                      ? (p.selectedIdx = p.links.length - 1)
                      : (p.selectedIdx = 0),
                    ee(p),
                    U.preventDefault(),
                    U.stopPropagation()
                  );
                case Se.ESCAPE:
                  return (
                    oe(p),
                    p.button.focus(),
                    U.preventDefault(),
                    U.stopPropagation()
                  );
                case Se.ARROW_LEFT:
                case Se.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    ee(p),
                    U.preventDefault(),
                    U.stopPropagation()
                  );
                case Se.ARROW_RIGHT:
                case Se.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    ee(p),
                    U.preventDefault(),
                    U.stopPropagation()
                  );
              }
          };
        }
        function ee(p) {
          if (p.links[p.selectedIdx]) {
            var U = p.links[p.selectedIdx];
            U.focus(), z(U);
          }
        }
        function ne(p) {
          p.open && (oe(p, !0), ue(p, !0));
        }
        function F(p) {
          return a(function () {
            p.open ? oe(p) : ue(p);
          });
        }
        function z(p) {
          return function (U) {
            var Y = e(this),
              V = Y.attr("href");
            if (!At.validClick(U.currentTarget)) {
              U.preventDefault();
              return;
            }
            V && V.indexOf("#") === 0 && p.open && oe(p);
          };
        }
        function d(p) {
          return (
            p.outside && o.off("click" + m, p.outside),
            function (U) {
              var Y = e(U.target);
              (h && Y.closest(".w-editor-bem-EditorOverlay").length) || E(p, Y);
            }
          );
        }
        var E = a(function (p, U) {
          if (p.open) {
            var Y = U.closest(".w-nav-menu");
            p.menu.is(Y) || oe(p);
          }
        });
        function b(p, U) {
          var Y = e.data(U, m),
            V = (Y.collapsed = Y.button.css("display") !== "none");
          if ((Y.open && !V && !f && oe(Y, !0), Y.container.length)) {
            var fe = j(Y);
            Y.links.each(fe), Y.dropdowns.each(fe);
          }
          Y.open && _e(Y);
        }
        var y = "max-width";
        function j(p) {
          var U = p.container.css(y);
          return (
            U === "none" && (U = ""),
            function (Y, V) {
              (V = e(V)), V.css(y, ""), V.css(y) === "none" && V.css(y, U);
            }
          );
        }
        function $(p, U) {
          U.setAttribute("data-nav-menu-open", "");
        }
        function Q(p, U) {
          U.removeAttribute("data-nav-menu-open");
        }
        function ue(p, U) {
          if (p.open) return;
          (p.open = !0),
            p.menu.each($),
            p.links.addClass(L),
            p.dropdowns.addClass(O),
            p.dropdownToggle.addClass(M),
            p.dropdownList.addClass(R),
            p.button.addClass(T);
          var Y = p.config,
            V = Y.animation;
          (V === "none" || !n.support.transform || Y.duration <= 0) && (U = !0);
          var fe = _e(p),
            Me = p.menu.outerHeight(!0),
            Xe = p.menu.outerWidth(!0),
            l = p.el.height(),
            _ = p.el[0];
          if (
            (b(0, _),
            S.intro(0, _),
            At.redraw.up(),
            f || o.on("click" + m, p.outside),
            U)
          ) {
            I();
            return;
          }
          var x = "transform " + Y.duration + "ms " + Y.easing;
          if (
            (p.overlay &&
              ((P = p.menu.prev()), p.overlay.show().append(p.menu)),
            Y.animOver)
          ) {
            n(p.menu)
              .add(x)
              .set({ x: Y.animDirect * Xe, height: fe })
              .start({ x: 0 })
              .then(I),
              p.overlay && p.overlay.width(Xe);
            return;
          }
          var A = l + Me;
          n(p.menu).add(x).set({ y: -A }).start({ y: 0 }).then(I);
          function I() {
            p.button.attr("aria-expanded", "true");
          }
        }
        function _e(p) {
          var U = p.config,
            Y = U.docHeight ? o.height() : s.height();
          return (
            U.animOver
              ? p.menu.height(Y)
              : p.el.css("position") !== "fixed" && (Y -= p.el.outerHeight(!0)),
            p.overlay && p.overlay.height(Y),
            Y
          );
        }
        function oe(p, U) {
          if (!p.open) return;
          (p.open = !1), p.button.removeClass(T);
          var Y = p.config;
          if (
            ((Y.animation === "none" ||
              !n.support.transform ||
              Y.duration <= 0) &&
              (U = !0),
            S.outro(0, p.el[0]),
            o.off("click" + m, p.outside),
            U)
          ) {
            n(p.menu).stop(), _();
            return;
          }
          var V = "transform " + Y.duration + "ms " + Y.easing2,
            fe = p.menu.outerHeight(!0),
            Me = p.menu.outerWidth(!0),
            Xe = p.el.height();
          if (Y.animOver) {
            n(p.menu)
              .add(V)
              .start({ x: Me * Y.animDirect })
              .then(_);
            return;
          }
          var l = Xe + fe;
          n(p.menu).add(V).start({ y: -l }).then(_);
          function _() {
            p.menu.height(""),
              n(p.menu).set({ x: 0, y: 0 }),
              p.menu.each(Q),
              p.links.removeClass(L),
              p.dropdowns.removeClass(O),
              p.dropdownToggle.removeClass(M),
              p.dropdownList.removeClass(R),
              p.overlay &&
                p.overlay.children().length &&
                (P.length ? p.menu.insertAfter(P) : p.menu.prependTo(p.parent),
                p.overlay.attr("style", "").hide()),
              p.el.triggerHandler("w-close"),
              p.button.attr("aria-expanded", "false");
          }
        }
        return r;
      })
    );
  });
  var V_ = c(($j, U_) => {
    "use strict";
    var St = We(),
      CW = ln(),
      ft = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      G_ =
        'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    St.define(
      "slider",
      (U_.exports = function (e, t) {
        var r = {},
          n = e.tram,
          i = e(document),
          o,
          a,
          s = St.env(),
          u = ".w-slider",
          f = '<div class="w-slider-dot" data-wf-ignore />',
          h =
            '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
          v = "w-slider-force-show",
          g = CW.triggers,
          m,
          T = !1;
        (r.ready = function () {
          (a = St.env("design")), O();
        }),
          (r.design = function () {
            (a = !0), setTimeout(O, 1e3);
          }),
          (r.preview = function () {
            (a = !1), O();
          }),
          (r.redraw = function () {
            (T = !0), O(), (T = !1);
          }),
          (r.destroy = M);
        function O() {
          (o = i.find(u)), o.length && (o.each(S), !m && (M(), R()));
        }
        function M() {
          St.resize.off(L), St.redraw.off(r.redraw);
        }
        function R() {
          St.resize.on(L), St.redraw.on(r.redraw);
        }
        function L() {
          o.filter(":visible").each(k);
        }
        function S(d, E) {
          var b = e(E),
            y = e.data(E, u);
          y ||
            (y = e.data(E, u, {
              index: 0,
              depth: 1,
              hasFocus: { keyboard: !1, mouse: !1 },
              el: b,
              config: {},
            })),
            (y.mask = b.children(".w-slider-mask")),
            (y.left = b.children(".w-slider-arrow-left")),
            (y.right = b.children(".w-slider-arrow-right")),
            (y.nav = b.children(".w-slider-nav")),
            (y.slides = y.mask.children(".w-slide")),
            y.slides.each(g.reset),
            T && (y.maskWidth = 0),
            b.attr("role") === void 0 && b.attr("role", "region"),
            b.attr("aria-label") === void 0 && b.attr("aria-label", "carousel");
          var j = y.mask.attr("id");
          if (
            (j || ((j = "w-slider-mask-" + d), y.mask.attr("id", j)),
            !a && !y.ariaLiveLabel && (y.ariaLiveLabel = e(h).appendTo(y.mask)),
            y.left.attr("role", "button"),
            y.left.attr("tabindex", "0"),
            y.left.attr("aria-controls", j),
            y.left.attr("aria-label") === void 0 &&
              y.left.attr("aria-label", "previous slide"),
            y.right.attr("role", "button"),
            y.right.attr("tabindex", "0"),
            y.right.attr("aria-controls", j),
            y.right.attr("aria-label") === void 0 &&
              y.right.attr("aria-label", "next slide"),
            !n.support.transform)
          ) {
            y.left.hide(), y.right.hide(), y.nav.hide(), (m = !0);
            return;
          }
          y.el.off(u),
            y.left.off(u),
            y.right.off(u),
            y.nav.off(u),
            P(y),
            a
              ? (y.el.on("setting" + u, w(y)), G(y), (y.hasTimer = !1))
              : (y.el.on("swipe" + u, w(y)),
                y.left.on("click" + u, B(y)),
                y.right.on("click" + u, K(y)),
                y.left.on("keydown" + u, H(y, B)),
                y.right.on("keydown" + u, H(y, K)),
                y.nav.on("keydown" + u, "> div", w(y)),
                y.config.autoplay &&
                  !y.hasTimer &&
                  ((y.hasTimer = !0), (y.timerCount = 1), re(y)),
                y.el.on("mouseenter" + u, N(y, !0, "mouse")),
                y.el.on("focusin" + u, N(y, !0, "keyboard")),
                y.el.on("mouseleave" + u, N(y, !1, "mouse")),
                y.el.on("focusout" + u, N(y, !1, "keyboard"))),
            y.nav.on("click" + u, "> div", w(y)),
            s ||
              y.mask
                .contents()
                .filter(function () {
                  return this.nodeType === 3;
                })
                .remove();
          var $ = b.filter(":hidden");
          $.addClass(v);
          var Q = b.parents(":hidden");
          Q.addClass(v), T || k(d, E), $.removeClass(v), Q.removeClass(v);
        }
        function P(d) {
          var E = {};
          (E.crossOver = 0),
            (E.animation = d.el.attr("data-animation") || "slide"),
            E.animation === "outin" &&
              ((E.animation = "cross"), (E.crossOver = 0.5)),
            (E.easing = d.el.attr("data-easing") || "ease");
          var b = d.el.attr("data-duration");
          if (
            ((E.duration = b != null ? parseInt(b, 10) : 500),
            q(d.el.attr("data-infinite")) && (E.infinite = !0),
            q(d.el.attr("data-disable-swipe")) && (E.disableSwipe = !0),
            q(d.el.attr("data-hide-arrows"))
              ? (E.hideArrows = !0)
              : d.config.hideArrows && (d.left.show(), d.right.show()),
            q(d.el.attr("data-autoplay")))
          ) {
            (E.autoplay = !0),
              (E.delay = parseInt(d.el.attr("data-delay"), 10) || 2e3),
              (E.timerMax = parseInt(d.el.attr("data-autoplay-limit"), 10));
            var y = "mousedown" + u + " touchstart" + u;
            a ||
              d.el.off(y).one(y, function () {
                G(d);
              });
          }
          var j = d.right.width();
          (E.edge = j ? j + 40 : 100), (d.config = E);
        }
        function q(d) {
          return d === "1" || d === "true";
        }
        function N(d, E, b) {
          return function (y) {
            if (E) d.hasFocus[b] = E;
            else if (
              e.contains(d.el.get(0), y.relatedTarget) ||
              ((d.hasFocus[b] = E),
              (d.hasFocus.mouse && b === "keyboard") ||
                (d.hasFocus.keyboard && b === "mouse"))
            )
              return;
            E
              ? (d.ariaLiveLabel.attr("aria-live", "polite"),
                d.hasTimer && G(d))
              : (d.ariaLiveLabel.attr("aria-live", "off"), d.hasTimer && re(d));
          };
        }
        function H(d, E) {
          return function (b) {
            switch (b.keyCode) {
              case ft.SPACE:
              case ft.ENTER:
                return E(d)(), b.preventDefault(), b.stopPropagation();
            }
          };
        }
        function B(d) {
          return function () {
            X(d, { index: d.index - 1, vector: -1 });
          };
        }
        function K(d) {
          return function () {
            X(d, { index: d.index + 1, vector: 1 });
          };
        }
        function J(d, E) {
          var b = null;
          E === d.slides.length && (O(), ee(d)),
            t.each(d.anchors, function (y, j) {
              e(y.els).each(function ($, Q) {
                e(Q).index() === E && (b = j);
              });
            }),
            b != null && X(d, { index: b, immediate: !0 });
        }
        function re(d) {
          G(d);
          var E = d.config,
            b = E.timerMax;
          (b && d.timerCount++ > b) ||
            (d.timerId = window.setTimeout(function () {
              d.timerId == null || a || (K(d)(), re(d));
            }, E.delay));
        }
        function G(d) {
          window.clearTimeout(d.timerId), (d.timerId = null);
        }
        function w(d) {
          return function (E, b) {
            b = b || {};
            var y = d.config;
            if (a && E.type === "setting") {
              if (b.select === "prev") return B(d)();
              if (b.select === "next") return K(d)();
              if ((P(d), ee(d), b.select == null)) return;
              J(d, b.select);
              return;
            }
            if (E.type === "swipe")
              return y.disableSwipe || St.env("editor")
                ? void 0
                : b.direction === "left"
                ? K(d)()
                : b.direction === "right"
                ? B(d)()
                : void 0;
            if (d.nav.has(E.target).length) {
              var j = e(E.target).index();
              if (
                (E.type === "click" && X(d, { index: j }), E.type === "keydown")
              )
                switch (E.keyCode) {
                  case ft.ENTER:
                  case ft.SPACE: {
                    X(d, { index: j }), E.preventDefault();
                    break;
                  }
                  case ft.ARROW_LEFT:
                  case ft.ARROW_UP: {
                    D(d.nav, Math.max(j - 1, 0)), E.preventDefault();
                    break;
                  }
                  case ft.ARROW_RIGHT:
                  case ft.ARROW_DOWN: {
                    D(d.nav, Math.min(j + 1, d.pages)), E.preventDefault();
                    break;
                  }
                  case ft.HOME: {
                    D(d.nav, 0), E.preventDefault();
                    break;
                  }
                  case ft.END: {
                    D(d.nav, d.pages), E.preventDefault();
                    break;
                  }
                  default:
                    return;
                }
            }
          };
        }
        function D(d, E) {
          var b = d.children().eq(E).focus();
          d.children().not(b);
        }
        function X(d, E) {
          E = E || {};
          var b = d.config,
            y = d.anchors;
          d.previous = d.index;
          var j = E.index,
            $ = {};
          j < 0
            ? ((j = y.length - 1),
              b.infinite &&
                (($.x = -d.endX), ($.from = 0), ($.to = y[0].width)))
            : j >= y.length &&
              ((j = 0),
              b.infinite &&
                (($.x = y[y.length - 1].width),
                ($.from = -y[y.length - 1].x),
                ($.to = $.from - $.x))),
            (d.index = j);
          var Q = d.nav
            .children()
            .eq(j)
            .addClass("w-active")
            .attr("aria-pressed", "true")
            .attr("tabindex", "0");
          d.nav
            .children()
            .not(Q)
            .removeClass("w-active")
            .attr("aria-pressed", "false")
            .attr("tabindex", "-1"),
            b.hideArrows &&
              (d.index === y.length - 1 ? d.right.hide() : d.right.show(),
              d.index === 0 ? d.left.hide() : d.left.show());
          var ue = d.offsetX || 0,
            _e = (d.offsetX = -y[d.index].x),
            oe = { x: _e, opacity: 1, visibility: "" },
            p = e(y[d.index].els),
            U = e(y[d.previous] && y[d.previous].els),
            Y = d.slides.not(p),
            V = b.animation,
            fe = b.easing,
            Me = Math.round(b.duration),
            Xe = E.vector || (d.index > d.previous ? 1 : -1),
            l = "opacity " + Me + "ms " + fe,
            _ = "transform " + Me + "ms " + fe;
          if (
            (p.find(G_).removeAttr("tabindex"),
            p.removeAttr("aria-hidden"),
            p.find("*").removeAttr("aria-hidden"),
            Y.find(G_).attr("tabindex", "-1"),
            Y.attr("aria-hidden", "true"),
            Y.find("*").attr("aria-hidden", "true"),
            a || (p.each(g.intro), Y.each(g.outro)),
            E.immediate && !T)
          ) {
            n(p).set(oe), I();
            return;
          }
          if (d.index === d.previous) return;
          if (
            (a || d.ariaLiveLabel.text(`Slide ${j + 1} of ${y.length}.`),
            V === "cross")
          ) {
            var x = Math.round(Me - Me * b.crossOver),
              A = Math.round(Me - x);
            (l = "opacity " + x + "ms " + fe),
              n(U).set({ visibility: "" }).add(l).start({ opacity: 0 }),
              n(p)
                .set({ visibility: "", x: _e, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .wait(A)
                .then({ opacity: 1 })
                .then(I);
            return;
          }
          if (V === "fade") {
            n(U).set({ visibility: "" }).stop(),
              n(p)
                .set({ visibility: "", x: _e, opacity: 0, zIndex: d.depth++ })
                .add(l)
                .start({ opacity: 1 })
                .then(I);
            return;
          }
          if (V === "over") {
            (oe = { x: d.endX }),
              n(U).set({ visibility: "" }).stop(),
              n(p)
                .set({
                  visibility: "",
                  zIndex: d.depth++,
                  x: _e + y[d.index].width * Xe,
                })
                .add(_)
                .start({ x: _e })
                .then(I);
            return;
          }
          b.infinite && $.x
            ? (n(d.slides.not(U))
                .set({ visibility: "", x: $.x })
                .add(_)
                .start({ x: _e }),
              n(U).set({ visibility: "", x: $.from }).add(_).start({ x: $.to }),
              (d.shifted = U))
            : (b.infinite &&
                d.shifted &&
                (n(d.shifted).set({ visibility: "", x: ue }),
                (d.shifted = null)),
              n(d.slides).set({ visibility: "" }).add(_).start({ x: _e }));
          function I() {
            (p = e(y[d.index].els)),
              (Y = d.slides.not(p)),
              V !== "slide" && (oe.visibility = "hidden"),
              n(Y).set(oe);
          }
        }
        function k(d, E) {
          var b = e.data(E, u);
          if (b) {
            if (F(b)) return ee(b);
            a && z(b) && ee(b);
          }
        }
        function ee(d) {
          var E = 1,
            b = 0,
            y = 0,
            j = 0,
            $ = d.maskWidth,
            Q = $ - d.config.edge;
          Q < 0 && (Q = 0),
            (d.anchors = [{ els: [], x: 0, width: 0 }]),
            d.slides.each(function (_e, oe) {
              y - b > Q &&
                (E++,
                (b += $),
                (d.anchors[E - 1] = { els: [], x: y, width: 0 })),
                (j = e(oe).outerWidth(!0)),
                (y += j),
                (d.anchors[E - 1].width += j),
                d.anchors[E - 1].els.push(oe);
              var p = _e + 1 + " of " + d.slides.length;
              e(oe).attr("aria-label", p), e(oe).attr("role", "group");
            }),
            (d.endX = y),
            a && (d.pages = null),
            d.nav.length && d.pages !== E && ((d.pages = E), ne(d));
          var ue = d.index;
          ue >= E && (ue = E - 1), X(d, { immediate: !0, index: ue });
        }
        function ne(d) {
          var E = [],
            b,
            y = d.el.attr("data-nav-spacing");
          y && (y = parseFloat(y) + "px");
          for (var j = 0, $ = d.pages; j < $; j++)
            (b = e(f)),
              b
                .attr("aria-label", "Show slide " + (j + 1) + " of " + $)
                .attr("aria-pressed", "false")
                .attr("role", "button")
                .attr("tabindex", "-1"),
              d.nav.hasClass("w-num") && b.text(j + 1),
              y != null && b.css({ "margin-left": y, "margin-right": y }),
              E.push(b);
          d.nav.empty().append(E);
        }
        function F(d) {
          var E = d.mask.width();
          return d.maskWidth !== E ? ((d.maskWidth = E), !0) : !1;
        }
        function z(d) {
          var E = 0;
          return (
            d.slides.each(function (b, y) {
              E += e(y).outerWidth(!0);
            }),
            d.slidesWidth !== E ? ((d.slidesWidth = E), !0) : !1
          );
        }
        return r;
      })
    );
  });
  Ws();
  Hs();
  Bs();
  Ks();
  ln();
  w_();
  S_();
  C_();
  N_();
  M_();
  F_();
  V_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:
    
    timm/lib/timm.js:
      (*!
       * Timm
       *
       * Immutability helpers with fast reads and acceptable writes.
       *
       * @copyright Guillermo Grau Panea 2016
       * @license MIT
       *)
    */
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".menu-link",
        originalId: "fc1dcc30-f3fb-3825-8a1c-0c7bb43a1b2f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-link",
          originalId: "fc1dcc30-f3fb-3825-8a1c-0c7bb43a1b2f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1698830913726,
    },
    "e-2": {
      id: "e-2",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-13",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".menu-link",
        originalId: "fc1dcc30-f3fb-3825-8a1c-0c7bb43a1b2f",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".menu-link",
          originalId: "fc1dcc30-f3fb-3825-8a1c-0c7bb43a1b2f",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1698830913727,
    },
    "e-4": {
      id: "e-4",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-16" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "656350de49d8a5147e2f20b2|2abd86fa-4379-889b-2b3d-f97fce4379d0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "656350de49d8a5147e2f20b2|2abd86fa-4379-889b-2b3d-f97fce4379d0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 450,
        direction: null,
        effectIn: true,
      },
      createdOn: 1625409279374,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-8" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".title-container---brix",
        originalId: "ac3b8f53-e0ca-26c0-f272-7a13b915e8c9",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".title-container---brix",
          originalId: "ac3b8f53-e0ca-26c0-f272-7a13b915e8c9",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 200,
        direction: null,
        effectIn: true,
      },
      createdOn: 1626109525268,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".multi-step-form-radio-trigger---brix",
        originalId: "ac3b8f53-e0ca-26c0-f272-7a13b915e948",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".multi-step-form-radio-trigger---brix",
          originalId: "ac3b8f53-e0ca-26c0-f272-7a13b915e948",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1625857191932,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "SLIDE_EFFECT",
        instant: false,
        config: { actionListId: "slideInBottom", autoStopEventId: "e-3" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".multi-step-form-block---brix",
        originalId: "ac3b8f53-e0ca-26c0-f272-7a13b915e8ce",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".multi-step-form-block---brix",
          originalId: "ac3b8f53-e0ca-26c0-f272-7a13b915e8ce",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 20,
        scrollOffsetUnit: "%",
        delay: 400,
        direction: "BOTTOM",
        effectIn: true,
      },
      createdOn: 1626109558552,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "656350de49d8a5147e2f20b2|e30e11a8-377f-5f70-33d1-21a18cffb09e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "656350de49d8a5147e2f20b2|e30e11a8-377f-5f70-33d1-21a18cffb09e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1681313704749,
    },
    "e-15": {
      id: "e-15",
      name: "",
      animationType: "preset",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "FADE_EFFECT",
        instant: false,
        config: { actionListId: "fadeIn", autoStopEventId: "e-16" },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "656350de49d8a5147e2f20b4|630c9a99-9fea-5a1e-ba65-ebf97983624c",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "656350de49d8a5147e2f20b4|630c9a99-9fea-5a1e-ba65-ebf97983624c",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 10,
        scrollOffsetUnit: "%",
        delay: 450,
        direction: null,
        effectIn: true,
      },
      createdOn: 1702666055890,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "nav link in",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-line",
                  selectorGuids: ["00899548-0b9d-f365-9a8c-20b4c07e207e"],
                },
                xValue: -101,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".menu-link",
                  selectorGuids: ["00899548-0b9d-f365-9a8c-20b4c07e2079"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-line",
                  selectorGuids: ["00899548-0b9d-f365-9a8c-20b4c07e207e"],
                },
                xValue: 0,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".menu-link",
                  selectorGuids: ["00899548-0b9d-f365-9a8c-20b4c07e2079"],
                },
                value: 0.5,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1680969109270,
    },
    "a-2": {
      id: "a-2",
      title: "nav link out",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-line",
                  selectorGuids: ["00899548-0b9d-f365-9a8c-20b4c07e207e"],
                },
                xValue: 101,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 500,
                target: {
                  useEventTarget: "SIBLINGS",
                  selector: ".menu-link",
                  selectorGuids: ["00899548-0b9d-f365-9a8c-20b4c07e2079"],
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-3",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".menu-line",
                  selectorGuids: ["00899548-0b9d-f365-9a8c-20b4c07e207e"],
                },
                xValue: -101,
                xUnit: "%",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1680969109270,
    },
    "a-5": {
      id: "a-5",
      title: "Radio Select Different items",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  selector: ".multi-step-form-radio-trigger---brix",
                  selectorGuids: ["5b2dff48-a34d-b697-3474-1c8f001c0e27"],
                },
                globalSwatchId: "",
                rValue: 0,
                bValue: 0,
                gValue: 0,
                aValue: 0,
              },
            },
            {
              id: "a-5-n-2",
              actionTypeId: "STYLE_BORDER",
              config: {
                delay: 0,
                easing: "ease",
                duration: 200,
                target: {
                  useEventTarget: "CHILDREN",
                  selector: ".multi-step-form-radio-trigger---brix",
                  selectorGuids: ["5b2dff48-a34d-b697-3474-1c8f001c0e27"],
                },
                globalSwatchId: "ca76be6e",
                rValue: 74,
                bValue: 255,
                gValue: 58,
                aValue: 1,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1625856186623,
    },
    "a-6": {
      id: "a-6",
      title: "None",
      actionItemGroups: [],
      useFirstGroupAsInitialState: false,
      createdOn: 1681313708335,
    },
    fadeIn: {
      id: "fadeIn",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
    slideInBottom: {
      id: "slideInBottom",
      useFirstGroupAsInitialState: true,
      actionItemGroups: [
        {
          actionItems: [
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 0,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                duration: 0,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 100,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                xValue: 0,
                yValue: 0,
                xUnit: "PX",
                yUnit: "PX",
                zUnit: "PX",
              },
            },
            {
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "outQuart",
                duration: 1000,
                target: {
                  id: "N/A",
                  appliesTo: "TRIGGER_ELEMENT",
                  useEventTarget: true,
                },
                value: 1,
              },
            },
          ],
        },
      ],
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
