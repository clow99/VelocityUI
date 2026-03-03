import { jsxs as p, jsx as e } from "react/jsx-runtime";
import y, { useRef as ee, useEffect as je, useState as pe, useId as Ce } from "react";
const qe = "_button_u2ihs_1", Ee = "_loading_u2ihs_51", Te = "_sm_u2ihs_65", We = "_md_u2ihs_77", Fe = "_lg_u2ihs_89", Se = "_primary_u2ihs_103", Re = "_secondary_u2ihs_129", De = "_outline_u2ihs_155", Me = "_ghost_u2ihs_179", Ae = "_danger_u2ihs_201", Oe = "_fullWidth_u2ihs_227", ze = "_spinner_u2ihs_237", He = "_spin_u2ihs_237", P = {
  button: qe,
  loading: Ee,
  sm: Te,
  md: We,
  lg: Fe,
  primary: Se,
  secondary: Re,
  outline: De,
  ghost: Me,
  danger: Ae,
  fullWidth: Oe,
  spinner: ze,
  spin: He
}, Ve = y.forwardRef(
  ({
    variant: o = "primary",
    size: n = "md",
    loading: t = !1,
    fullWidth: s = !1,
    leftIcon: i,
    rightIcon: c,
    children: u,
    className: d,
    disabled: l,
    ...b
  }, f) => {
    const h = [
      P.button,
      P[o],
      P[n],
      s ? P.fullWidth : "",
      t ? P.loading : "",
      d ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p(
      "button",
      {
        ref: f,
        className: h,
        disabled: l || t,
        "aria-busy": t,
        ...b,
        children: [
          t && /* @__PURE__ */ e("span", { className: P.spinner, "aria-hidden": "true" }),
          !t && i && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: i }),
          u,
          !t && c && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: c })
        ]
      }
    );
  }
);
Ve.displayName = "Button";
const Ue = "_wrapper_oes7a_1", Pe = "_label_oes7a_15", Ke = "_required_oes7a_29", Ge = "_inputWrapper_oes7a_39", Je = "_input_oes7a_39", Qe = "_error_oes7a_109", Xe = "_sm_oes7a_127", Ye = "_md_oes7a_139", Ze = "_lg_oes7a_151", et = "_hasLeft_oes7a_165", tt = "_hasRight_oes7a_173", ot = "_iconLeft_oes7a_181", nt = "_iconRight_oes7a_183", rt = "_hint_oes7a_219", st = "_errorText_oes7a_231", at = "_floatingWrapper_oes7a_247", lt = "_inputFloating_oes7a_257", it = "_floatingLabelEl_oes7a_295", ct = "_floatingLabelSm_oes7a_327", dt = "_floatingLabelMd_oes7a_329", _t = "_floatingLabelLg_oes7a_331", ut = "_floatingLabelWithLeft_oes7a_337", pt = "_floatingLabelError_oes7a_377", w = {
  wrapper: Ue,
  label: Pe,
  required: Ke,
  inputWrapper: Ge,
  input: Je,
  error: Qe,
  sm: Xe,
  md: Ye,
  lg: Ze,
  hasLeft: et,
  hasRight: tt,
  iconLeft: ot,
  iconRight: nt,
  hint: rt,
  errorText: st,
  floatingWrapper: at,
  inputFloating: lt,
  floatingLabelEl: it,
  floatingLabelSm: ct,
  floatingLabelMd: dt,
  floatingLabelLg: _t,
  floatingLabelWithLeft: ut,
  floatingLabelError: pt
}, ht = () => /* @__PURE__ */ e("svg", { width: "16", height: "16", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }
) }), mt = y.forwardRef(
  ({
    label: o,
    size: n = "md",
    error: t,
    hint: s,
    leftIcon: i,
    rightIcon: c,
    search: u = !1,
    searchIcon: d,
    searchIconPosition: l = "left",
    leftIconClassName: b,
    rightIconClassName: f,
    required: h,
    fullWidth: _,
    floatingLabel: m,
    className: x,
    id: r,
    placeholder: g,
    ...v
  }, C) => {
    const k = r ?? (o ? `vui-input-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), D = k ? `${k}-error` : void 0, q = k ? `${k}-hint` : void 0, M = u || !!d, V = d ?? /* @__PURE__ */ e(ht, {});
    let T = i, I = c, J = !1, Q = !1;
    M && (l === "right" ? I || (I = V, Q = !0) : T || (T = V, J = !0));
    const te = [
      w.input,
      w[n],
      m ? w.inputFloating : "",
      t ? w.error : "",
      T ? w.hasLeft : "",
      I ? w.hasRight : "",
      x ?? ""
    ].filter(Boolean).join(" "), oe = [
      w.floatingLabelEl,
      w[`floatingLabel${n.charAt(0).toUpperCase() + n.slice(1)}`],
      T ? w.floatingLabelWithLeft : "",
      t ? w.floatingLabelError : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p("div", { className: w.wrapper, children: [
      o && !m && /* @__PURE__ */ p("label", { htmlFor: k, className: w.label, children: [
        o,
        h && /* @__PURE__ */ e("span", { className: w.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ p("div", { className: `${w.inputWrapper}${m ? ` ${w.floatingWrapper}` : ""}`, children: [
        T && /* @__PURE__ */ e(
          "span",
          {
            className: [w.iconLeft, b ?? ""].filter(Boolean).join(" "),
            "data-slot": "left-icon",
            "data-search-icon": J ? "true" : void 0,
            "aria-hidden": "true",
            children: T
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            ref: C,
            id: k,
            className: te,
            required: h,
            "aria-invalid": !!t,
            "aria-describedby": [t ? D : null, s ? q : null].filter(Boolean).join(" ") || void 0,
            placeholder: m ? " " : g,
            ...v
          }
        ),
        o && m && /* @__PURE__ */ p("label", { htmlFor: k, className: oe, children: [
          o,
          h && /* @__PURE__ */ e("span", { className: w.required, "aria-hidden": "true", children: "*" })
        ] }),
        I && /* @__PURE__ */ e(
          "span",
          {
            className: [w.iconRight, f ?? ""].filter(Boolean).join(" "),
            "data-slot": "right-icon",
            "data-search-icon": Q ? "true" : void 0,
            "aria-hidden": "true",
            children: I
          }
        )
      ] }),
      t && /* @__PURE__ */ e("span", { id: D, className: w.errorText, role: "alert", children: t }),
      s && !t && /* @__PURE__ */ e("span", { id: q, className: w.hint, children: s })
    ] });
  }
);
mt.displayName = "Input";
const ft = "_title_3f7c8_1", bt = "_xs_3f7c8_17", gt = "_sm_3f7c8_27", vt = "_md_3f7c8_37", $t = "_lg_3f7c8_47", wt = "_xl_3f7c8_57", yt = "_xxl_3f7c8_67", xt = "_light_3f7c8_79", kt = "_normal_3f7c8_87", Nt = "_medium_3f7c8_95", Lt = "_semibold_3f7c8_103", It = "_bold_3f7c8_111", Bt = "_extrabold_3f7c8_119", jt = "_left_3f7c8_129", Ct = "_center_3f7c8_137", qt = "_right_3f7c8_145", Et = "_muted_3f7c8_163", Tt = "_primary_3f7c8_171", Wt = "_gradient_3f7c8_179", Z = {
  title: ft,
  xs: bt,
  sm: gt,
  md: vt,
  lg: $t,
  xl: wt,
  xxl: yt,
  light: xt,
  normal: kt,
  medium: Nt,
  semibold: Lt,
  bold: It,
  extrabold: Bt,
  left: jt,
  center: Ct,
  right: qt,
  default: "_default_3f7c8_155",
  muted: Et,
  primary: Tt,
  gradient: Wt
}, Ft = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs"
}, Qr = ({
  level: o = "h1",
  size: n,
  weight: t = "bold",
  align: s = "left",
  color: i = "default",
  children: c,
  className: u,
  ...d
}) => {
  const l = n ?? Ft[o], b = [
    Z.title,
    Z[l],
    Z[t],
    Z[s],
    Z[i],
    u ?? ""
  ].filter(Boolean).join(" ");
  return y.createElement(o, { className: b, ...d }, c);
}, St = "_badge_26q6t_1", Rt = "_sm_26q6t_27", Dt = "_md_26q6t_37", Mt = "_lg_26q6t_47", At = "_info_26q6t_71", Ot = "_success_26q6t_83", zt = "_warning_26q6t_95", Ht = "_danger_26q6t_107", Vt = "_primary_26q6t_119", Ut = "_dot_26q6t_133", le = {
  badge: St,
  sm: Rt,
  md: Dt,
  lg: Mt,
  default: "_default_26q6t_59",
  info: At,
  success: Ot,
  warning: zt,
  danger: Ht,
  primary: Vt,
  dot: Ut
}, Xr = ({
  variant: o = "default",
  size: n = "md",
  dot: t = !1,
  leftIcon: s,
  children: i,
  className: c,
  ...u
}) => {
  const d = [
    le.badge,
    le[o],
    le[n],
    c ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ p("span", { className: d, ...u, children: [
    t && /* @__PURE__ */ e("span", { className: le.dot, "aria-hidden": "true" }),
    !t && s && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s }),
    i
  ] });
}, Pt = "_card_pl1wm_1", Kt = "_bordered_pl1wm_21", Gt = "_shadow_pl1wm_29", Jt = "_elevated_pl1wm_37", Qt = "_ghost_pl1wm_45", Xt = "_sm_pl1wm_57", Yt = "_cardHeader_pl1wm_57", Zt = "_cardBody_pl1wm_59", eo = "_cardFooter_pl1wm_61", to = "_md_pl1wm_69", oo = "_lg_pl1wm_81", no = "_hoverable_pl1wm_143", H = {
  card: Pt,
  bordered: Kt,
  shadow: Gt,
  elevated: Jt,
  ghost: Qt,
  sm: Xt,
  cardHeader: Yt,
  cardBody: Zt,
  cardFooter: eo,
  md: to,
  lg: oo,
  hoverable: no
}, ve = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${H.cardHeader} ${n ?? ""}`, ...t, children: o });
ve.displayName = "Card.Header";
const $e = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${H.cardBody} ${n ?? ""}`, ...t, children: o });
$e.displayName = "Card.Body";
const we = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${H.cardFooter} ${n ?? ""}`, ...t, children: o });
we.displayName = "Card.Footer";
const ro = ({
  variant: o = "bordered",
  size: n = "md",
  hoverable: t = !1,
  children: s,
  className: i,
  ...c
}) => {
  const u = [
    H.card,
    H[o],
    H[n],
    t ? H.hoverable : "",
    i ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: u, ...c, children: s });
}, ce = ro;
ce.Header = ve;
ce.Body = $e;
ce.Footer = we;
ce.displayName = "Card";
const so = "_wrapper_1xu0d_1", ao = "_wrapperFullWidth_1xu0d_7", lo = "_label_1xu0d_11", io = "_required_1xu0d_18", co = "_textarea_1xu0d_23", _o = "_hasError_1xu0d_53", uo = "_sm_1xu0d_62", po = "_md_1xu0d_67", ho = "_lg_1xu0d_72", mo = "_none_1xu0d_78", fo = "_vertical_1xu0d_82", bo = "_horizontal_1xu0d_86", go = "_both_1xu0d_90", vo = "_fullWidth_1xu0d_94", $o = "_hint_1xu0d_98", wo = "_errorText_1xu0d_104", E = {
  wrapper: so,
  wrapperFullWidth: ao,
  label: lo,
  required: io,
  textarea: co,
  hasError: _o,
  sm: uo,
  md: po,
  lg: ho,
  none: mo,
  vertical: fo,
  horizontal: bo,
  both: go,
  fullWidth: vo,
  hint: $o,
  errorText: wo
}, yo = y.forwardRef(
  ({
    label: o,
    size: n = "md",
    error: t,
    hint: s,
    required: i,
    fullWidth: c = !1,
    resize: u = "vertical",
    className: d,
    id: l,
    ...b
  }, f) => {
    const h = l ?? (o ? `vui-textarea-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), _ = h ? `${h}-error` : void 0, m = h ? `${h}-hint` : void 0, x = [
      E.textarea,
      E[n],
      E[u],
      t ? E.hasError : "",
      c ? E.fullWidth : "",
      d ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p("div", { className: `${E.wrapper}${c ? ` ${E.wrapperFullWidth}` : ""}`, children: [
      o && /* @__PURE__ */ p("label", { htmlFor: h, className: E.label, children: [
        o,
        i && /* @__PURE__ */ e("span", { className: E.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: f,
          id: h,
          className: x,
          required: i,
          "aria-invalid": !!t,
          "aria-describedby": [t ? _ : null, s && !t ? m : null].filter(Boolean).join(" ") || void 0,
          ...b
        }
      ),
      t && /* @__PURE__ */ e("span", { id: _, className: E.errorText, role: "alert", children: t }),
      s && !t && /* @__PURE__ */ e("span", { id: m, className: E.hint, children: s })
    ] });
  }
);
yo.displayName = "Textarea";
const xo = "_wrapper_1cpn4_1", ko = "_wrapperFullWidth_1cpn4_7", No = "_label_1cpn4_11", Lo = "_required_1cpn4_18", Io = "_selectWrapper_1cpn4_23", Bo = "_hiddenSelect_1cpn4_46", jo = "_trigger_1cpn4_53", Co = "_hasError_1cpn4_103", qo = "_sm_1cpn4_114", Eo = "_md_1cpn4_120", To = "_lg_1cpn4_126", Wo = "_fullWidth_1cpn4_132", Fo = "_valueText_1cpn4_136", So = "_placeholder_1cpn4_144", Ro = "_chevron_1cpn4_148", Do = "_isOpen_1cpn4_180", Mo = "_menu_1cpn4_184", Ao = "_option_1cpn4_203", Oo = "_optionFocused_1cpn4_222", zo = "_optionSelected_1cpn4_229", Ho = "_optionLabel_1cpn4_238", Vo = "_optionCheck_1cpn4_243", Uo = "_optionCheckVisible_1cpn4_250", Po = "_hint_1cpn4_260", Ko = "_errorText_1cpn4_266", $ = {
  wrapper: xo,
  wrapperFullWidth: ko,
  label: No,
  required: Lo,
  selectWrapper: Io,
  hiddenSelect: Bo,
  trigger: jo,
  hasError: Co,
  sm: qo,
  md: Eo,
  lg: To,
  fullWidth: Wo,
  valueText: Fo,
  placeholder: So,
  chevron: Ro,
  isOpen: Do,
  menu: Mo,
  option: Ao,
  optionFocused: Oo,
  optionSelected: zo,
  optionLabel: Ho,
  optionCheck: Vo,
  optionCheckVisible: Uo,
  hint: Po,
  errorText: Ko
};
function Go(o) {
  return y.Children.toArray(o).flatMap((n) => {
    if (!y.isValidElement(n) || n.type !== "option")
      return [];
    const t = n.props.value, s = typeof n.props.children == "string" ? n.props.children : String(t ?? "");
    return t == null ? [] : [
      {
        value: String(t),
        label: s,
        disabled: !!n.props.disabled
      }
    ];
  });
}
const Jo = y.forwardRef(
  ({
    label: o,
    size: n = "md",
    error: t,
    hint: s,
    required: i,
    fullWidth: c = !1,
    options: u,
    placeholder: d,
    className: l,
    id: b,
    children: f,
    value: h,
    defaultValue: _,
    onChange: m,
    onBlur: x,
    onFocus: r,
    onKeyDown: g,
    disabled: v,
    name: C,
    autoComplete: k,
    form: D,
    ...q
  }, M) => {
    const V = y.useRef(null), T = y.useRef(null);
    y.useImperativeHandle(M, () => V.current);
    const I = b ?? (o ? `vui-select-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), J = I ? `${I}-error` : void 0, Q = I ? `${I}-hint` : void 0, te = I ? `${I}-listbox` : void 0, oe = I ? `${I}-label` : void 0, N = y.useMemo(
      () => u || Go(f),
      [f, u]
    ), ne = h !== void 0, A = N.find((a) => !a.disabled), Ne = String(_ ?? (d ? "" : (A == null ? void 0 : A.value) ?? "")), [_e, he] = y.useState(Ne), re = String(ne ? h ?? "" : _e), [O, U] = y.useState(!1), [X, se] = y.useState(-1);
    y.useEffect(() => {
      if (ne || !N.length) return;
      N.some((L) => L.value === _e) || he((A == null ? void 0 : A.value) ?? "");
    }, [N, ne, _e, A]), y.useEffect(() => {
      const a = (L) => {
        T.current && !T.current.contains(L.target) && U(!1);
      };
      return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
    }, []);
    const ae = N.find((a) => a.value === re), Le = (ae == null ? void 0 : ae.label) ?? d ?? "", Ie = [
      $.trigger,
      $[n],
      t ? $.hasError : "",
      c ? $.fullWidth : "",
      O ? $.isOpen : "",
      l ?? ""
    ].filter(Boolean).join(" "), me = (a) => {
      var B;
      ne || he(a);
      const L = V.current;
      if (L) {
        const Y = (B = Object.getOwnPropertyDescriptor(
          HTMLSelectElement.prototype,
          "value"
        )) == null ? void 0 : B.set;
        Y == null || Y.call(L, a), L.dispatchEvent(new Event("change", { bubbles: !0 }));
      }
    }, ue = () => {
      if (v || !N.length) return;
      U(!0);
      const a = N.findIndex((B) => B.value === re && !B.disabled);
      if (a >= 0) {
        se(a);
        return;
      }
      const L = N.findIndex((B) => !B.disabled);
      se(L);
    }, fe = (a) => {
      if (!N.length) return;
      let L = X;
      for (let B = 0; B < N.length; B += 1)
        if (L = (L + a + N.length) % N.length, !N[L].disabled) {
          se(L);
          return;
        }
    }, Be = (a) => {
      if (g == null || g(a), !a.defaultPrevented) {
        if (!O && (a.key === "ArrowDown" || a.key === "ArrowUp")) {
          a.preventDefault(), ue();
          return;
        }
        if (!O && (a.key === "Enter" || a.key === " ")) {
          a.preventDefault(), ue();
          return;
        }
        if (O) {
          if (a.key === "Escape") {
            a.preventDefault(), U(!1);
            return;
          }
          if (a.key === "ArrowDown") {
            a.preventDefault(), fe(1);
            return;
          }
          if (a.key === "ArrowUp") {
            a.preventDefault(), fe(-1);
            return;
          }
          (a.key === "Enter" || a.key === " ") && (a.preventDefault(), X >= 0 && !N[X].disabled && (me(N[X].value), U(!1)));
        }
      }
    };
    return /* @__PURE__ */ p("div", { className: `${$.wrapper}${c ? ` ${$.wrapperFullWidth}` : ""}`, children: [
      o && /* @__PURE__ */ p("label", { id: oe, className: $.label, children: [
        o,
        i && /* @__PURE__ */ e("span", { className: $.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ p("div", { className: $.selectWrapper, ref: T, children: [
        /* @__PURE__ */ p(
          "select",
          {
            ref: V,
            id: I,
            className: $.hiddenSelect,
            value: re,
            required: i,
            disabled: v,
            name: C,
            form: D,
            autoComplete: k,
            "aria-invalid": !!t,
            "aria-describedby": [t ? J : null, s && !t ? Q : null].filter(Boolean).join(" ") || void 0,
            "aria-hidden": "true",
            tabIndex: -1,
            onChange: m ?? (() => {
            }),
            ...q,
            children: [
              d && /* @__PURE__ */ e("option", { value: "", disabled: i, children: d }),
              N.map((a) => /* @__PURE__ */ e("option", { value: a.value, disabled: a.disabled, children: a.label }, a.value))
            ]
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: Ie,
            disabled: v,
            role: "combobox",
            "aria-invalid": !!t,
            "aria-labelledby": oe,
            "aria-haspopup": "listbox",
            "aria-expanded": O,
            "aria-controls": te,
            onClick: () => O ? U(!1) : ue(),
            onKeyDown: Be,
            onFocus: (a) => r == null ? void 0 : r(a),
            onBlur: (a) => x == null ? void 0 : x(a),
            children: /* @__PURE__ */ e("span", { className: `${$.valueText}${ae ? "" : ` ${$.placeholder}`}`, children: Le })
          }
        ),
        /* @__PURE__ */ e("span", { className: $.chevron, "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
          }
        ) }) }),
        O && /* @__PURE__ */ e("ul", { id: te, role: "listbox", className: $.menu, children: N.map((a, L) => {
          const B = a.value === re, Y = L === X;
          return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": B,
              className: [
                $.option,
                B ? $.optionSelected : "",
                Y ? $.optionFocused : ""
              ].filter(Boolean).join(" "),
              disabled: a.disabled,
              onMouseEnter: () => se(L),
              onClick: () => {
                me(a.value), U(!1);
              },
              children: [
                /* @__PURE__ */ e("span", { className: $.optionLabel, children: a.label }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: `${$.optionCheck}${B ? ` ${$.optionCheckVisible}` : ""}`,
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ e("svg", { width: "14", height: "14", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2.25,
                        d: "M5 13l4 4L19 7"
                      }
                    ) })
                  }
                )
              ]
            }
          ) }, a.value);
        }) })
      ] }),
      t && /* @__PURE__ */ e("span", { id: J, className: $.errorText, role: "alert", children: t }),
      s && !t && /* @__PURE__ */ e("span", { id: Q, className: $.hint, children: s })
    ] });
  }
);
Jo.displayName = "Select";
const Qo = "_wrapper_iu9cq_1", Xo = "_row_iu9cq_7", Yo = "_checkbox_iu9cq_14", Zo = "_hasError_iu9cq_51", en = "_sm_iu9cq_60", tn = "_md_iu9cq_74", on = "_lg_iu9cq_88", nn = "_label_iu9cq_102", rn = "_description_iu9cq_113", sn = "_errorText_iu9cq_123", F = {
  wrapper: Qo,
  row: Xo,
  checkbox: Yo,
  hasError: Zo,
  sm: en,
  md: tn,
  lg: on,
  label: nn,
  description: rn,
  errorText: sn
}, an = y.forwardRef(
  ({ label: o, description: n, error: t, size: s = "md", className: i, id: c, ...u }, d) => {
    const l = c ?? (o ? `vui-checkbox-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), b = l ? `${l}-error` : void 0, f = l && n ? `${l}-desc` : void 0, h = [
      F.checkbox,
      F[s],
      t ? F.hasError : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ p("div", { className: `${F.wrapper} ${F[s]}`, children: [
      /* @__PURE__ */ p("div", { className: F.row, children: [
        /* @__PURE__ */ e(
          "input",
          {
            ref: d,
            type: "checkbox",
            id: l,
            className: h,
            "aria-invalid": !!t,
            "aria-describedby": [t ? b : null, f].filter(Boolean).join(" ") || void 0,
            ...u
          }
        ),
        o && /* @__PURE__ */ e("label", { htmlFor: l, className: F.label, children: o })
      ] }),
      n && !t && /* @__PURE__ */ e("span", { id: f, className: F.description, children: n }),
      t && /* @__PURE__ */ e("span", { id: b, className: F.errorText, role: "alert", children: t })
    ] });
  }
);
an.displayName = "Checkbox";
const ln = "_fieldset_nj7or_1", cn = "_legend_nj7or_10", dn = "_required_nj7or_19", _n = "_group_nj7or_24", un = "_vertical_nj7or_28", pn = "_horizontal_nj7or_33", hn = "_option_nj7or_39", mn = "_radio_nj7or_46", fn = "_hasError_nj7or_81", bn = "_sm_nj7or_86", gn = "_md_nj7or_87", vn = "_lg_nj7or_88", $n = "_optionContent_nj7or_90", wn = "_optionLabel_nj7or_96", yn = "_optionDescription_nj7or_107", xn = "_hint_nj7or_113", kn = "_errorText_nj7or_119", j = {
  fieldset: ln,
  legend: cn,
  required: dn,
  group: _n,
  vertical: un,
  horizontal: pn,
  option: hn,
  radio: mn,
  hasError: fn,
  sm: bn,
  md: gn,
  lg: vn,
  optionContent: $n,
  optionLabel: wn,
  optionDescription: yn,
  hint: xn,
  errorText: kn
}, Yr = ({
  name: o,
  label: n,
  options: t,
  value: s,
  defaultValue: i,
  onChange: c,
  size: u = "md",
  orientation: d = "vertical",
  error: l,
  hint: b,
  required: f
}) => {
  const h = `vui-radiogroup-${o}`, _ = `${h}-error`, m = `${h}-hint`, x = s !== void 0;
  return /* @__PURE__ */ p(
    "fieldset",
    {
      className: `${j.fieldset} ${j[u]}`,
      "aria-describedby": [l ? _ : null, b && !l ? m : null].filter(Boolean).join(" ") || void 0,
      children: [
        n && /* @__PURE__ */ p("legend", { className: j.legend, children: [
          n,
          f && /* @__PURE__ */ e("span", { className: j.required, "aria-hidden": "true", children: "*" })
        ] }),
        /* @__PURE__ */ e("div", { className: `${j.group} ${j[d]}`, children: t.map((r) => {
          const g = `${h}-${r.value}`, v = x ? { checked: s === r.value } : { defaultChecked: i === r.value };
          return /* @__PURE__ */ p("div", { className: j.option, children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                id: g,
                name: o,
                value: r.value,
                disabled: r.disabled,
                required: f,
                onChange: () => c == null ? void 0 : c(r.value),
                className: `${j.radio} ${l ? j.hasError : ""}`,
                "aria-invalid": l ? !0 : void 0,
                ...v
              }
            ),
            /* @__PURE__ */ p("div", { className: j.optionContent, children: [
              /* @__PURE__ */ e("label", { htmlFor: g, className: j.optionLabel, children: r.label }),
              r.description && /* @__PURE__ */ e("span", { className: j.optionDescription, children: r.description })
            ] })
          ] }, r.value);
        }) }),
        l && /* @__PURE__ */ e("span", { id: _, className: j.errorText, role: "alert", children: l }),
        b && !l && /* @__PURE__ */ e("span", { id: m, className: j.hint, children: b })
      ]
    }
  );
}, Nn = "_wrapper_okiio_1", Ln = "_labelRow_okiio_7", In = "_track_okiio_15", Bn = "_input_okiio_23", jn = "_thumb_okiio_32", Cn = "_labelText_okiio_65", qn = "_sm_okiio_74", En = "_md_okiio_80", Tn = "_lg_okiio_86", Wn = "_description_okiio_98", R = {
  wrapper: Nn,
  labelRow: Ln,
  track: In,
  input: Bn,
  thumb: jn,
  labelText: Cn,
  sm: qn,
  md: En,
  lg: Tn,
  description: Wn
}, Fn = y.forwardRef(
  ({ label: o, description: n, size: t = "md", className: s, id: i, ...c }, u) => {
    const d = i ?? (o ? `vui-switch-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), l = d && n ? `${d}-desc` : void 0;
    return /* @__PURE__ */ p("div", { className: `${R.wrapper} ${R[t]}`, children: [
      /* @__PURE__ */ p("label", { className: R.labelRow, htmlFor: d, children: [
        /* @__PURE__ */ p("span", { className: R.track, children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: u,
              type: "checkbox",
              role: "switch",
              id: d,
              className: `${R.input} ${s ?? ""}`,
              "aria-describedby": l || void 0,
              ...c
            }
          ),
          /* @__PURE__ */ e("span", { className: R.thumb, "aria-hidden": "true" })
        ] }),
        o && /* @__PURE__ */ e("span", { className: R.labelText, children: o })
      ] }),
      n && /* @__PURE__ */ e("span", { id: l, className: R.description, children: n })
    ] });
  }
);
Fn.displayName = "Switch";
const Sn = "_overlay_gedqr_1", Rn = "_overlayFadeIn_gedqr_1", Dn = "_dialog_gedqr_19", Mn = "_dialogSlideUp_gedqr_1", An = "_sm_gedqr_39", On = "_md_gedqr_40", zn = "_lg_gedqr_41", Hn = "_xl_gedqr_42", Vn = "_header_gedqr_45", Un = "_title_gedqr_51", Pn = "_description_gedqr_59", Kn = "_body_gedqr_66", Gn = "_footer_gedqr_71", Jn = "_closeBtn_gedqr_81", W = {
  overlay: Sn,
  overlayFadeIn: Rn,
  dialog: Dn,
  dialogSlideUp: Mn,
  sm: An,
  md: On,
  lg: zn,
  xl: Hn,
  header: Vn,
  title: Un,
  description: Pn,
  body: Kn,
  footer: Gn,
  closeBtn: Jn
}, be = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', ye = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${W.header} ${n ?? ""}`, ...t, children: o });
ye.displayName = "Dialog.Header";
const xe = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${W.body} ${n ?? ""}`, ...t, children: o });
xe.displayName = "Dialog.Body";
const ke = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${W.footer} ${n ?? ""}`, ...t, children: o });
ke.displayName = "Dialog.Footer";
const ge = { current: 0 }, Qn = ({
  open: o,
  onClose: n,
  title: t,
  description: s,
  size: i = "md",
  children: c,
  className: u,
  closeOnOverlayClick: d = !0
}) => {
  const l = ee(null), b = ee(`vui-dialog-title-${++ge.current}`).current, f = ee(`vui-dialog-desc-${ge.current}`).current, h = ee(null);
  if (je(() => {
    if (!o) return;
    h.current = document.activeElement, document.body.style.overflow = "hidden";
    const x = requestAnimationFrame(() => {
      var v, C;
      const g = (v = l.current) == null ? void 0 : v.querySelectorAll(be);
      (C = g == null ? void 0 : g[0]) == null || C.focus();
    }), r = (g) => {
      if (g.key === "Escape") {
        n();
        return;
      }
      if (g.key === "Tab" && l.current) {
        const v = Array.from(
          l.current.querySelectorAll(be)
        );
        if (v.length === 0) {
          g.preventDefault();
          return;
        }
        const C = v[0], k = v[v.length - 1];
        g.shiftKey ? document.activeElement === C && (k.focus(), g.preventDefault()) : document.activeElement === k && (C.focus(), g.preventDefault());
      }
    };
    return document.addEventListener("keydown", r), () => {
      var g;
      cancelAnimationFrame(x), document.removeEventListener("keydown", r), document.body.style.overflow = "", (g = h.current) == null || g.focus();
    };
  }, [o, n]), !o) return null;
  const _ = (m) => {
    d && m.target === m.currentTarget && n();
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: W.overlay,
      onClick: _,
      "aria-modal": "true",
      role: "presentation",
      children: /* @__PURE__ */ p(
        "div",
        {
          ref: l,
          role: "dialog",
          "aria-labelledby": t ? b : void 0,
          "aria-describedby": s ? f : void 0,
          className: [W.dialog, W[i], u ?? ""].filter(Boolean).join(" "),
          children: [
            t && /* @__PURE__ */ p("div", { className: W.header, children: [
              /* @__PURE__ */ e("p", { id: b, className: W.title, children: t }),
              s && /* @__PURE__ */ e("p", { id: f, className: W.description, children: s })
            ] }),
            c,
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: W.closeBtn,
                onClick: n,
                "aria-label": "Close dialog",
                children: /* @__PURE__ */ e(
                  "svg",
                  {
                    width: "18",
                    height: "18",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    "aria-hidden": "true",
                    children: /* @__PURE__ */ e(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M6 18L18 6M6 6l12 12"
                      }
                    )
                  }
                )
              }
            )
          ]
        }
      )
    }
  );
}, de = Qn;
de.Header = ye;
de.Body = xe;
de.Footer = ke;
de.displayName = "Dialog";
const Xn = "_wrapper_16e9w_1", Yn = "_tooltip_16e9w_6", Zn = "_visible_16e9w_25", er = "_top_16e9w_30", tr = "_bottom_16e9w_36", or = "_left_16e9w_42", nr = "_right_16e9w_48", rr = "_arrow_16e9w_55", sr = "_arrowTop_16e9w_61", ar = "_arrowBottom_16e9w_70", lr = "_arrowLeft_16e9w_79", ir = "_arrowRight_16e9w_88", K = {
  wrapper: Xn,
  tooltip: Yn,
  visible: Zn,
  top: er,
  bottom: tr,
  left: or,
  right: nr,
  arrow: rr,
  arrowTop: sr,
  arrowBottom: ar,
  arrowLeft: lr,
  arrowRight: ir
}, Zr = ({
  content: o,
  children: n,
  placement: t = "top",
  delay: s = 0
}) => {
  const [i, c] = pe(!1), d = `vui-tooltip-${Ce().replace(/:/g, "")}`, l = y.useRef(null), b = () => {
    s > 0 ? l.current = setTimeout(() => c(!0), s) : c(!0);
  }, f = () => {
    l.current && clearTimeout(l.current), c(!1);
  }, h = y.cloneElement(n, {
    "aria-describedby": i ? d : void 0
  });
  return /* @__PURE__ */ p(
    "span",
    {
      className: K.wrapper,
      onMouseEnter: b,
      onMouseLeave: f,
      onFocus: b,
      onBlur: f,
      children: [
        h,
        /* @__PURE__ */ p(
          "span",
          {
            id: d,
            role: "tooltip",
            className: [K.tooltip, K[t], i ? K.visible : ""].filter(Boolean).join(" "),
            "aria-hidden": !i,
            children: [
              o,
              /* @__PURE__ */ e("span", { className: `${K.arrow} ${K[`arrow${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}, cr = "_tabs_16y0p_1", dr = "_tablist_16y0p_8", _r = "_underline_16y0p_14", ur = "_tab_16y0p_1", pr = "_activeTab_16y0p_39", hr = "_pills_16y0p_50", mr = "_boxed_16y0p_89", fr = "_panel_16y0p_139", G = {
  tabs: cr,
  tablist: dr,
  underline: _r,
  tab: ur,
  activeTab: pr,
  pills: hr,
  boxed: mr,
  panel: fr
}, es = ({
  items: o,
  defaultValue: n,
  value: t,
  onChange: s,
  variant: i = "underline"
}) => {
  var x;
  const c = t !== void 0, [u, d] = pe(
    n ?? ((x = o[0]) == null ? void 0 : x.value) ?? ""
  ), l = c ? t : u, b = ee(null), f = (r) => {
    c || d(r), s == null || s(r);
  }, h = (r, g) => {
    var D;
    const v = o.filter((q) => !q.disabled), C = v.findIndex((q) => q.value === o[g].value);
    let k = null;
    if (r.key === "ArrowRight" ? k = (C + 1) % v.length : r.key === "ArrowLeft" ? k = (C - 1 + v.length) % v.length : r.key === "Home" ? k = 0 : r.key === "End" && (k = v.length - 1), k !== null) {
      r.preventDefault();
      const q = v[k];
      f(q.value);
      const M = (D = b.current) == null ? void 0 : D.querySelector(
        `[data-value="${q.value}"]`
      );
      M == null || M.focus();
    }
  }, _ = (r) => `vui-tabpanel-${r}`, m = (r) => `vui-tab-${r}`;
  return /* @__PURE__ */ p("div", { className: G.tabs, children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: b,
        role: "tablist",
        className: [G.tablist, G[i]].filter(Boolean).join(" "),
        children: o.map((r, g) => /* @__PURE__ */ e(
          "button",
          {
            id: m(r.value),
            role: "tab",
            type: "button",
            "data-value": r.value,
            "aria-selected": l === r.value,
            "aria-controls": _(r.value),
            disabled: r.disabled,
            tabIndex: l === r.value ? 0 : -1,
            className: [
              G.tab,
              l === r.value ? G.activeTab : ""
            ].filter(Boolean).join(" "),
            onClick: () => f(r.value),
            onKeyDown: (v) => h(v, g),
            children: r.label
          },
          r.value
        ))
      }
    ),
    o.map((r) => /* @__PURE__ */ e(
      "div",
      {
        id: _(r.value),
        role: "tabpanel",
        "aria-labelledby": m(r.value),
        hidden: l !== r.value,
        className: G.panel,
        children: r.children
      },
      r.value
    ))
  ] });
}, br = "_accordion_wacbm_1", gr = "_bordered_wacbm_7", vr = "_item_wacbm_13", $r = "_flush_wacbm_17", wr = "_separated_wacbm_21", yr = "_heading_wacbm_35", xr = "_trigger_wacbm_40", kr = "_icon_wacbm_72", Nr = "_open_wacbm_80", Lr = "_contentOuter_wacbm_85", Ir = "_contentInner_wacbm_95", S = {
  accordion: br,
  bordered: gr,
  item: vr,
  flush: $r,
  separated: wr,
  heading: yr,
  trigger: xr,
  icon: kr,
  open: Nr,
  contentOuter: Lr,
  contentInner: Ir
}, ts = ({
  items: o,
  defaultValue: n,
  value: t,
  onChange: s,
  multiple: i = !1,
  variant: c = "bordered"
}) => {
  const u = t !== void 0, d = (_) => _ ? Array.isArray(_) ? _ : [_] : [], [l, b] = pe(d(n)), f = u ? d(t) : l, h = (_) => {
    let m;
    f.includes(_) ? m = f.filter((x) => x !== _) : m = i ? [...f, _] : [_], u || b(m), s == null || s(i ? m : m[0] ?? "");
  };
  return /* @__PURE__ */ e("div", { className: [S.accordion, S[c]].filter(Boolean).join(" "), children: o.map((_) => {
    const m = f.includes(_.value), x = `vui-accordion-trigger-${_.value}`, r = `vui-accordion-panel-${_.value}`;
    return /* @__PURE__ */ p(
      "div",
      {
        className: [S.item, m ? S.open : ""].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("h3", { className: S.heading, children: /* @__PURE__ */ p(
            "button",
            {
              id: x,
              type: "button",
              "aria-expanded": m,
              "aria-controls": r,
              disabled: _.disabled,
              className: S.trigger,
              onClick: () => !_.disabled && h(_.value),
              children: [
                /* @__PURE__ */ e("span", { children: _.title }),
                /* @__PURE__ */ e("span", { className: S.icon, "aria-hidden": "true", children: /* @__PURE__ */ e(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /* @__PURE__ */ e(
                      "path",
                      {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M19 9l-7 7-7-7"
                      }
                    )
                  }
                ) })
              ]
            }
          ) }),
          /* @__PURE__ */ e(
            "div",
            {
              id: r,
              role: "region",
              "aria-labelledby": x,
              className: S.contentOuter,
              children: /* @__PURE__ */ e("div", { className: S.contentInner, children: _.content })
            }
          )
        ]
      },
      _.value
    );
  }) });
}, Br = "_alert_b1vtk_1", jr = "_icon_b1vtk_12", Cr = "_content_b1vtk_19", qr = "_title_b1vtk_24", Er = "_body_b1vtk_31", Tr = "_closeBtn_b1vtk_35", Wr = "_info_b1vtk_64", Fr = "_success_b1vtk_70", Sr = "_warning_b1vtk_76", Rr = "_danger_b1vtk_82", z = {
  alert: Br,
  icon: jr,
  content: Cr,
  title: qr,
  body: Er,
  closeBtn: Tr,
  info: Wr,
  success: Fr,
  warning: Sr,
  danger: Rr
}, Dr = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), Mr = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), Ar = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }
) }), Or = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), zr = {
  info: /* @__PURE__ */ e(Dr, {}),
  success: /* @__PURE__ */ e(Mr, {}),
  warning: /* @__PURE__ */ e(Ar, {}),
  danger: /* @__PURE__ */ e(Or, {})
}, os = ({
  variant: o = "info",
  title: n,
  icon: t,
  onClose: s,
  children: i,
  className: c,
  ...u
}) => {
  const d = [z.alert, z[o], c ?? ""].filter(Boolean).join(" "), l = t !== void 0 ? t : zr[o];
  return /* @__PURE__ */ p("div", { className: d, role: "alert", ...u, children: [
    l && /* @__PURE__ */ e("span", { className: z.icon, "aria-hidden": "true", children: l }),
    /* @__PURE__ */ p("div", { className: z.content, children: [
      n && /* @__PURE__ */ e("p", { className: z.title, children: n }),
      /* @__PURE__ */ e("div", { className: z.body, children: i })
    ] }),
    s && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: z.closeBtn,
        onClick: s,
        "aria-label": "Dismiss alert",
        children: /* @__PURE__ */ e(
          "svg",
          {
            width: "16",
            height: "16",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            "aria-hidden": "true",
            children: /* @__PURE__ */ e(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M6 18L18 6M6 6l12 12"
              }
            )
          }
        )
      }
    )
  ] });
}, Hr = "_divider_vfae1_1", Vr = "_horizontal_vfae1_6", Ur = "_vertical_vfae1_12", Pr = "_withLabel_vfae1_19", Kr = "_label_vfae1_33", ie = {
  divider: Hr,
  horizontal: Vr,
  vertical: Ur,
  withLabel: Pr,
  label: Kr
}, ns = ({
  orientation: o = "horizontal",
  label: n,
  className: t,
  ...s
}) => {
  const i = [
    ie.divider,
    ie[o],
    n ? ie.withLabel : "",
    t ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      role: "separator",
      "aria-orientation": o,
      className: i,
      ...s,
      children: n && /* @__PURE__ */ e("span", { className: ie.label, children: n })
    }
  );
};
export {
  ts as Accordion,
  os as Alert,
  Xr as Badge,
  Ve as Button,
  ce as Card,
  an as Checkbox,
  de as Dialog,
  ns as Divider,
  mt as Input,
  Yr as RadioGroup,
  Jo as Select,
  Fn as Switch,
  es as Tabs,
  yo as Textarea,
  Qr as Title,
  Zr as Tooltip
};
