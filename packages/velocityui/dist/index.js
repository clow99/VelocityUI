import { jsxs as d, jsx as e, Fragment as st } from "react/jsx-runtime";
import j, { useRef as A, useEffect as ae, useState as O, useId as Pe, useCallback as ye, useContext as bt, createContext as gt } from "react";
import { createPortal as Ke } from "react-dom";
const vt = "_button_1skux_1", wt = "_loading_1skux_67", $t = "_sm_1skux_81", kt = "_md_1skux_93", yt = "_lg_1skux_105", Nt = "_primary_1skux_119", xt = "_secondary_1skux_145", Bt = "_outline_1skux_171", Lt = "_ghost_1skux_195", jt = "_danger_1skux_217", zt = "_fullWidth_1skux_243", It = "_pulse_1skux_251", Ct = "_buttonPulse_1skux_1", Wt = "_shine_1skux_259", qt = "_buttonShine_1skux_1", Et = "_spinner_1skux_289", Rt = "_spin_1skux_289", ce = {
  button: vt,
  loading: wt,
  sm: $t,
  md: kt,
  lg: yt,
  primary: Nt,
  secondary: xt,
  outline: Bt,
  ghost: Lt,
  danger: jt,
  fullWidth: zt,
  pulse: It,
  buttonPulse: Ct,
  shine: Wt,
  buttonShine: qt,
  spinner: Et,
  spin: Rt
}, St = j.forwardRef(
  ({
    variant: t = "primary",
    size: o = "md",
    animation: n = "none",
    loading: s = !1,
    fullWidth: r = !1,
    leftIcon: i,
    rightIcon: l,
    children: a,
    className: c,
    disabled: _,
    ...p
  }, m) => {
    const u = [
      ce.button,
      ce[t],
      ce[o],
      n !== "none" ? ce[n] : "",
      r ? ce.fullWidth : "",
      s ? ce.loading : "",
      c ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "button",
      {
        ref: m,
        className: u,
        disabled: _ || s,
        "aria-busy": s,
        ...p,
        children: [
          s && /* @__PURE__ */ e("span", { className: ce.spinner, "aria-hidden": "true" }),
          !s && i && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: i }),
          a,
          !s && l && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: l })
        ]
      }
    );
  }
);
St.displayName = "Button";
const Tt = "_wrapper_1bqzb_1", Dt = "_label_1bqzb_15", Mt = "_required_1bqzb_29", Ft = "_inputWrapper_1bqzb_39", At = "_input_1bqzb_39", Ht = "_error_1bqzb_109", Pt = "_sm_1bqzb_127", Ot = "_md_1bqzb_139", Ut = "_lg_1bqzb_151", Vt = "_hasLeft_1bqzb_165", Xt = "_hasRight_1bqzb_173", Yt = "_iconLeft_1bqzb_181", Kt = "_iconRight_1bqzb_183", Gt = "_hint_1bqzb_221", Jt = "_errorText_1bqzb_233", Qt = "_floatingWrapper_1bqzb_249", Zt = "_inputFloating_1bqzb_259", en = "_floatingLabelEl_1bqzb_297", tn = "_floatingLabelSm_1bqzb_329", nn = "_floatingLabelMd_1bqzb_331", on = "_floatingLabelLg_1bqzb_333", sn = "_floatingLabelWithLeft_1bqzb_339", rn = "_floatingLabelError_1bqzb_379", z = {
  wrapper: Tt,
  label: Dt,
  required: Mt,
  inputWrapper: Ft,
  input: At,
  error: Ht,
  sm: Pt,
  md: Ot,
  lg: Ut,
  hasLeft: Vt,
  hasRight: Xt,
  iconLeft: Yt,
  iconRight: Kt,
  hint: Gt,
  errorText: Jt,
  floatingWrapper: Qt,
  inputFloating: Zt,
  floatingLabelEl: en,
  floatingLabelSm: tn,
  floatingLabelMd: nn,
  floatingLabelLg: on,
  floatingLabelWithLeft: sn,
  floatingLabelError: rn
}, an = () => /* @__PURE__ */ e("svg", { width: "16", height: "16", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }
) }), ln = j.forwardRef(
  ({
    label: t,
    size: o = "md",
    error: n,
    hint: s,
    leftIcon: r,
    rightIcon: i,
    search: l = !1,
    searchIcon: a,
    searchIconPosition: c = "left",
    leftIconClassName: _,
    rightIconClassName: p,
    required: m,
    fullWidth: u,
    floatingLabel: f,
    className: v,
    id: h,
    placeholder: g,
    ...w
  }, B) => {
    const k = h ?? (t ? `vui-input-${t.toLowerCase().replace(/\s+/g, "-")}` : void 0), C = k ? `${k}-error` : void 0, N = k ? `${k}-hint` : void 0, H = l || !!a, x = a ?? /* @__PURE__ */ e(an, {});
    let $ = r, y = i, G = !1, ne = !1;
    H && (c === "right" ? y || (y = x, ne = !0) : $ || ($ = x, G = !0));
    const he = [
      z.input,
      z[o],
      f ? z.inputFloating : "",
      n ? z.error : "",
      $ ? z.hasLeft : "",
      y ? z.hasRight : "",
      v ?? ""
    ].filter(Boolean).join(" "), Ce = [
      z.floatingLabelEl,
      z[`floatingLabel${o.charAt(0).toUpperCase() + o.slice(1)}`],
      $ ? z.floatingLabelWithLeft : "",
      n ? z.floatingLabelError : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { className: z.wrapper, children: [
      t && !f && /* @__PURE__ */ d("label", { htmlFor: k, className: z.label, children: [
        t,
        m && /* @__PURE__ */ e("span", { className: z.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ d("div", { className: `${z.inputWrapper}${f ? ` ${z.floatingWrapper}` : ""}`, children: [
        $ && /* @__PURE__ */ e(
          "span",
          {
            className: [z.iconLeft, _ ?? ""].filter(Boolean).join(" "),
            "data-slot": "left-icon",
            "data-search-icon": G ? "true" : void 0,
            "aria-hidden": "true",
            children: $
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            ref: B,
            id: k,
            className: he,
            required: m,
            "aria-invalid": !!n,
            "aria-describedby": [n ? C : null, s ? N : null].filter(Boolean).join(" ") || void 0,
            placeholder: f ? " " : g,
            ...w
          }
        ),
        t && f && /* @__PURE__ */ d("label", { htmlFor: k, className: Ce, children: [
          t,
          m && /* @__PURE__ */ e("span", { className: z.required, "aria-hidden": "true", children: "*" })
        ] }),
        y && /* @__PURE__ */ e(
          "span",
          {
            className: [z.iconRight, p ?? ""].filter(Boolean).join(" "),
            "data-slot": "right-icon",
            "data-search-icon": ne ? "true" : void 0,
            "aria-hidden": "true",
            children: y
          }
        )
      ] }),
      n && /* @__PURE__ */ e("span", { id: C, className: z.errorText, role: "alert", children: n }),
      s && !n && /* @__PURE__ */ e("span", { id: N, className: z.hint, children: s })
    ] });
  }
);
ln.displayName = "Input";
const cn = "_title_3f7c8_1", dn = "_xs_3f7c8_17", _n = "_sm_3f7c8_27", un = "_md_3f7c8_37", hn = "_lg_3f7c8_47", pn = "_xl_3f7c8_57", mn = "_xxl_3f7c8_67", fn = "_light_3f7c8_79", bn = "_normal_3f7c8_87", gn = "_medium_3f7c8_95", vn = "_semibold_3f7c8_103", wn = "_bold_3f7c8_111", $n = "_extrabold_3f7c8_119", kn = "_left_3f7c8_129", yn = "_center_3f7c8_137", Nn = "_right_3f7c8_145", xn = "_muted_3f7c8_163", Bn = "_primary_3f7c8_171", Ln = "_gradient_3f7c8_179", Be = {
  title: cn,
  xs: dn,
  sm: _n,
  md: un,
  lg: hn,
  xl: pn,
  xxl: mn,
  light: fn,
  normal: bn,
  medium: gn,
  semibold: vn,
  bold: wn,
  extrabold: $n,
  left: kn,
  center: yn,
  right: Nn,
  default: "_default_3f7c8_155",
  muted: xn,
  primary: Bn,
  gradient: Ln
}, jn = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs"
}, V_ = ({
  as: t,
  level: o = "h1",
  size: n,
  weight: s = "bold",
  align: r = "left",
  color: i = "default",
  children: l,
  className: a,
  ...c
}) => {
  const _ = t ?? o, p = n ?? jn[_], m = [
    Be.title,
    Be[p],
    Be[s],
    Be[r],
    Be[i],
    a ?? ""
  ].filter(Boolean).join(" ");
  return j.createElement(_, { className: m, ...c }, l);
}, zn = "_badge_142ir_1", In = "_sm_142ir_47", Cn = "_md_142ir_57", Wn = "_lg_142ir_67", qn = "_info_142ir_91", En = "_success_142ir_103", Rn = "_warning_142ir_115", Sn = "_danger_142ir_127", Tn = "_primary_142ir_139", Dn = "_dot_142ir_153", Mn = "_pulse_142ir_169", Fn = "_badgePulse_142ir_1", An = "_badgeDotPulse_142ir_1", Hn = "_shine_142ir_185", Pn = "_badgeShine_142ir_1", Le = {
  badge: zn,
  sm: In,
  md: Cn,
  lg: Wn,
  default: "_default_142ir_79",
  info: qn,
  success: En,
  warning: Rn,
  danger: Sn,
  primary: Tn,
  dot: Dn,
  pulse: Mn,
  badgePulse: Fn,
  badgeDotPulse: An,
  shine: Hn,
  badgeShine: Pn
}, X_ = ({
  variant: t = "default",
  size: o = "md",
  animation: n = "none",
  dot: s = !1,
  leftIcon: r,
  children: i,
  className: l,
  ...a
}) => {
  const c = [
    Le.badge,
    Le[t],
    Le[o],
    n !== "none" ? Le[n] : "",
    l ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("span", { className: c, ...a, children: [
    s && /* @__PURE__ */ e("span", { className: Le.dot, "aria-hidden": "true" }),
    !s && r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r }),
    i
  ] });
}, On = "_card_pl1wm_1", Un = "_bordered_pl1wm_21", Vn = "_shadow_pl1wm_29", Xn = "_elevated_pl1wm_37", Yn = "_ghost_pl1wm_45", Kn = "_sm_pl1wm_57", Gn = "_cardHeader_pl1wm_57", Jn = "_cardBody_pl1wm_59", Qn = "_cardFooter_pl1wm_61", Zn = "_md_pl1wm_69", eo = "_lg_pl1wm_81", to = "_hoverable_pl1wm_143", ue = {
  card: On,
  bordered: Un,
  shadow: Vn,
  elevated: Xn,
  ghost: Yn,
  sm: Kn,
  cardHeader: Gn,
  cardBody: Jn,
  cardFooter: Qn,
  md: Zn,
  lg: eo,
  hoverable: to
}, rt = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${ue.cardHeader} ${o ?? ""}`, ...n, children: t });
rt.displayName = "Card.Header";
const at = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${ue.cardBody} ${o ?? ""}`, ...n, children: t });
at.displayName = "Card.Body";
const it = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${ue.cardFooter} ${o ?? ""}`, ...n, children: t });
it.displayName = "Card.Footer";
const no = ({
  variant: t = "bordered",
  size: o = "md",
  hoverable: n = !1,
  children: s,
  className: r,
  ...i
}) => {
  const l = [
    ue.card,
    ue[t],
    ue[o],
    n ? ue.hoverable : "",
    r ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: l, ...i, children: s });
}, Oe = no;
Oe.Header = rt;
Oe.Body = at;
Oe.Footer = it;
Oe.displayName = "Card";
const oo = "_root_y54b0_1", so = "_background_y54b0_12", ro = "_interactive_y54b0_19", ao = "_content_y54b0_23", Se = {
  root: oo,
  background: so,
  interactive: ro,
  content: ao
}, io = {
  subtle: {
    "--vui-ambient-opacity": "0.62",
    "--vui-ambient-blur": "88px",
    "--vui-ambient-scale": "0.92"
  },
  medium: {
    "--vui-ambient-opacity": "0.82",
    "--vui-ambient-blur": "112px",
    "--vui-ambient-scale": "1"
  },
  vivid: {
    "--vui-ambient-opacity": "1",
    "--vui-ambient-blur": "136px",
    "--vui-ambient-scale": "1.08"
  }
}, lo = {
  slow: {
    "--vui-ambient-duration": "24s",
    "--vui-ambient-speed-multiplier": "0.72"
  },
  medium: {
    "--vui-ambient-duration": "18s",
    "--vui-ambient-speed-multiplier": "1"
  },
  fast: {
    "--vui-ambient-duration": "13s",
    "--vui-ambient-speed-multiplier": "1.25"
  }
}, Y_ = ({
  background: t,
  contentClassName: o,
  intensity: n = "medium",
  speed: s = "medium",
  interactive: r = !1,
  className: i,
  style: l,
  children: a,
  ...c
}) => {
  const _ = [
    Se.root,
    r ? Se.interactive : "",
    i ?? ""
  ].filter(Boolean).join(" "), p = [Se.content, o ?? ""].filter(Boolean).join(" "), m = {
    ...io[n],
    ...lo[s],
    ...l
  };
  return /* @__PURE__ */ d("div", { className: _, style: m, ...c, children: [
    t ? /* @__PURE__ */ e("div", { className: Se.background, children: t }) : null,
    /* @__PURE__ */ e("div", { className: p, children: a })
  ] });
}, co = "_root_1h0b6_1", _o = "_orb_1h0b6_8", uo = "_floatOrb_1h0b6_1", ho = "_primary_1h0b6_19", po = "_secondary_1h0b6_25", mo = "_accent_1h0b6_33", fo = "_highlight_1h0b6_40", bo = "_hero_1h0b6_48", go = "_diagonal_1h0b6_68", vo = "_spotlight_1h0b6_88", X = {
  root: co,
  orb: _o,
  floatOrb: uo,
  primary: ho,
  secondary: po,
  accent: mo,
  highlight: fo,
  hero: bo,
  diagonal: go,
  spotlight: vo
}, K_ = ({
  variant: t = "hero",
  className: o,
  ...n
}) => {
  const s = [X.root, X[t], o ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: s, "aria-hidden": "true", ...n, children: [
    /* @__PURE__ */ e("span", { className: `${X.orb} ${X.primary}` }),
    /* @__PURE__ */ e("span", { className: `${X.orb} ${X.secondary}` }),
    /* @__PURE__ */ e("span", { className: `${X.orb} ${X.accent}` }),
    /* @__PURE__ */ e("span", { className: `${X.orb} ${X.highlight}` })
  ] });
}, wo = "_root_3f8d1_1", $o = "_grid_3f8d1_9", ko = "_glow_3f8d1_10", yo = "_beam_3f8d1_11", No = "_sweepBeam_3f8d1_1", xo = "_spotlight_3f8d1_49", Bo = "_panel_3f8d1_57", je = {
  root: wo,
  grid: $o,
  glow: ko,
  beam: yo,
  sweepBeam: No,
  default: "_default_3f8d1_45",
  spotlight: xo,
  panel: Bo
}, G_ = ({
  variant: t = "default",
  className: o,
  ...n
}) => {
  const s = [je.root, je[t], o ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: s, "aria-hidden": "true", ...n, children: [
    /* @__PURE__ */ e("span", { className: je.grid }),
    /* @__PURE__ */ e("span", { className: je.glow }),
    /* @__PURE__ */ e("span", { className: je.beam })
  ] });
}, Lo = "_wrapper_1xu0d_1", jo = "_wrapperFullWidth_1xu0d_7", zo = "_label_1xu0d_11", Io = "_required_1xu0d_18", Co = "_textarea_1xu0d_23", Wo = "_hasError_1xu0d_53", qo = "_sm_1xu0d_62", Eo = "_md_1xu0d_67", Ro = "_lg_1xu0d_72", So = "_none_1xu0d_78", To = "_vertical_1xu0d_82", Do = "_horizontal_1xu0d_86", Mo = "_both_1xu0d_90", Fo = "_fullWidth_1xu0d_94", Ao = "_hint_1xu0d_98", Ho = "_errorText_1xu0d_104", U = {
  wrapper: Lo,
  wrapperFullWidth: jo,
  label: zo,
  required: Io,
  textarea: Co,
  hasError: Wo,
  sm: qo,
  md: Eo,
  lg: Ro,
  none: So,
  vertical: To,
  horizontal: Do,
  both: Mo,
  fullWidth: Fo,
  hint: Ao,
  errorText: Ho
}, Po = j.forwardRef(
  ({
    label: t,
    size: o = "md",
    error: n,
    hint: s,
    required: r,
    fullWidth: i = !1,
    resize: l = "vertical",
    className: a,
    id: c,
    ..._
  }, p) => {
    const m = c ?? (t ? `vui-textarea-${t.toLowerCase().replace(/\s+/g, "-")}` : void 0), u = m ? `${m}-error` : void 0, f = m ? `${m}-hint` : void 0, v = [
      U.textarea,
      U[o],
      U[l],
      n ? U.hasError : "",
      i ? U.fullWidth : "",
      a ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { className: `${U.wrapper}${i ? ` ${U.wrapperFullWidth}` : ""}`, children: [
      t && /* @__PURE__ */ d("label", { htmlFor: m, className: U.label, children: [
        t,
        r && /* @__PURE__ */ e("span", { className: U.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: p,
          id: m,
          className: v,
          required: r,
          "aria-invalid": !!n,
          "aria-describedby": [n ? u : null, s && !n ? f : null].filter(Boolean).join(" ") || void 0,
          ..._
        }
      ),
      n && /* @__PURE__ */ e("span", { id: u, className: U.errorText, role: "alert", children: n }),
      s && !n && /* @__PURE__ */ e("span", { id: f, className: U.hint, children: s })
    ] });
  }
);
Po.displayName = "Textarea";
const Oo = "_wrapper_1cpn4_1", Uo = "_wrapperFullWidth_1cpn4_7", Vo = "_label_1cpn4_11", Xo = "_required_1cpn4_18", Yo = "_selectWrapper_1cpn4_23", Ko = "_hiddenSelect_1cpn4_46", Go = "_trigger_1cpn4_53", Jo = "_hasError_1cpn4_103", Qo = "_sm_1cpn4_114", Zo = "_md_1cpn4_120", es = "_lg_1cpn4_126", ts = "_fullWidth_1cpn4_132", ns = "_valueText_1cpn4_136", os = "_placeholder_1cpn4_144", ss = "_chevron_1cpn4_148", rs = "_isOpen_1cpn4_180", as = "_menu_1cpn4_184", is = "_option_1cpn4_203", ls = "_optionFocused_1cpn4_222", cs = "_optionSelected_1cpn4_229", ds = "_optionLabel_1cpn4_238", _s = "_optionCheck_1cpn4_243", us = "_optionCheckVisible_1cpn4_250", hs = "_hint_1cpn4_260", ps = "_errorText_1cpn4_266", L = {
  wrapper: Oo,
  wrapperFullWidth: Uo,
  label: Vo,
  required: Xo,
  selectWrapper: Yo,
  hiddenSelect: Ko,
  trigger: Go,
  hasError: Jo,
  sm: Qo,
  md: Zo,
  lg: es,
  fullWidth: ts,
  valueText: ns,
  placeholder: os,
  chevron: ss,
  isOpen: rs,
  menu: as,
  option: is,
  optionFocused: ls,
  optionSelected: cs,
  optionLabel: ds,
  optionCheck: _s,
  optionCheckVisible: us,
  hint: hs,
  errorText: ps
};
function ms(t) {
  return j.Children.toArray(t).flatMap((o) => {
    if (!j.isValidElement(o) || o.type !== "option")
      return [];
    const n = o.props.value, s = typeof o.props.children == "string" ? o.props.children : String(n ?? "");
    return n == null ? [] : [
      {
        value: String(n),
        label: s,
        disabled: !!o.props.disabled
      }
    ];
  });
}
const fs = j.forwardRef(
  ({
    label: t,
    size: o = "md",
    error: n,
    hint: s,
    required: r,
    fullWidth: i = !1,
    options: l,
    placeholder: a,
    className: c,
    id: _,
    children: p,
    value: m,
    defaultValue: u,
    onChange: f,
    onBlur: v,
    onFocus: h,
    onKeyDown: g,
    disabled: w,
    name: B,
    autoComplete: k,
    form: C,
    ...N
  }, H) => {
    const x = j.useRef(null), $ = j.useRef(null);
    j.useImperativeHandle(H, () => x.current);
    const y = _ ?? (t ? `vui-select-${t.toLowerCase().replace(/\s+/g, "-")}` : void 0), G = y ? `${y}-error` : void 0, ne = y ? `${y}-hint` : void 0, he = y ? `${y}-listbox` : void 0, Ce = y ? `${y}-label` : void 0, W = j.useMemo(
      () => l || ms(p),
      [p, l]
    ), We = m !== void 0, ie = W.find((b) => !b.disabled), ht = String(u ?? (a ? "" : (ie == null ? void 0 : ie.value) ?? "")), [Ve, Ge] = j.useState(ht), qe = String(We ? m ?? "" : Ve), [le, pe] = j.useState(!1), [Ne, Ee] = j.useState(-1);
    j.useEffect(() => {
      if (We || !W.length) return;
      W.some((q) => q.value === Ve) || Ge((ie == null ? void 0 : ie.value) ?? "");
    }, [W, We, Ve, ie]), j.useEffect(() => {
      const b = (q) => {
        $.current && !$.current.contains(q.target) && pe(!1);
      };
      return document.addEventListener("mousedown", b), () => document.removeEventListener("mousedown", b);
    }, []);
    const Re = W.find((b) => b.value === qe), pt = (Re == null ? void 0 : Re.label) ?? a ?? "", mt = [
      L.trigger,
      L[o],
      n ? L.hasError : "",
      i ? L.fullWidth : "",
      le ? L.isOpen : "",
      c ?? ""
    ].filter(Boolean).join(" "), Je = (b) => {
      var R;
      We || Ge(b);
      const q = x.current;
      if (q) {
        const xe = (R = Object.getOwnPropertyDescriptor(
          HTMLSelectElement.prototype,
          "value"
        )) == null ? void 0 : R.set;
        xe == null || xe.call(q, b), q.dispatchEvent(new Event("change", { bubbles: !0 }));
      }
    }, Xe = () => {
      if (w || !W.length) return;
      pe(!0);
      const b = W.findIndex((R) => R.value === qe && !R.disabled);
      if (b >= 0) {
        Ee(b);
        return;
      }
      const q = W.findIndex((R) => !R.disabled);
      Ee(q);
    }, Qe = (b) => {
      if (!W.length) return;
      let q = Ne;
      for (let R = 0; R < W.length; R += 1)
        if (q = (q + b + W.length) % W.length, !W[q].disabled) {
          Ee(q);
          return;
        }
    }, ft = (b) => {
      if (g == null || g(b), !b.defaultPrevented) {
        if (!le && (b.key === "ArrowDown" || b.key === "ArrowUp")) {
          b.preventDefault(), Xe();
          return;
        }
        if (!le && (b.key === "Enter" || b.key === " ")) {
          b.preventDefault(), Xe();
          return;
        }
        if (le) {
          if (b.key === "Escape") {
            b.preventDefault(), pe(!1);
            return;
          }
          if (b.key === "ArrowDown") {
            b.preventDefault(), Qe(1);
            return;
          }
          if (b.key === "ArrowUp") {
            b.preventDefault(), Qe(-1);
            return;
          }
          (b.key === "Enter" || b.key === " ") && (b.preventDefault(), Ne >= 0 && !W[Ne].disabled && (Je(W[Ne].value), pe(!1)));
        }
      }
    };
    return /* @__PURE__ */ d("div", { className: `${L.wrapper}${i ? ` ${L.wrapperFullWidth}` : ""}`, children: [
      t && /* @__PURE__ */ d("label", { id: Ce, className: L.label, children: [
        t,
        r && /* @__PURE__ */ e("span", { className: L.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ d("div", { className: L.selectWrapper, ref: $, children: [
        /* @__PURE__ */ d(
          "select",
          {
            ref: x,
            id: y,
            className: L.hiddenSelect,
            value: qe,
            required: r,
            disabled: w,
            name: B,
            form: C,
            autoComplete: k,
            "aria-invalid": !!n,
            "aria-describedby": [n ? G : null, s && !n ? ne : null].filter(Boolean).join(" ") || void 0,
            "aria-hidden": "true",
            tabIndex: -1,
            onChange: f ?? (() => {
            }),
            ...N,
            children: [
              a && /* @__PURE__ */ e("option", { value: "", disabled: r, children: a }),
              W.map((b) => /* @__PURE__ */ e("option", { value: b.value, disabled: b.disabled, children: b.label }, b.value))
            ]
          }
        ),
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: mt,
            disabled: w,
            role: "combobox",
            "aria-invalid": !!n,
            "aria-labelledby": Ce,
            "aria-haspopup": "listbox",
            "aria-expanded": le,
            "aria-controls": he,
            onClick: () => le ? pe(!1) : Xe(),
            onKeyDown: ft,
            onFocus: (b) => h == null ? void 0 : h(b),
            onBlur: (b) => v == null ? void 0 : v(b),
            children: /* @__PURE__ */ e("span", { className: `${L.valueText}${Re ? "" : ` ${L.placeholder}`}`, children: pt })
          }
        ),
        /* @__PURE__ */ e("span", { className: L.chevron, "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
          }
        ) }) }),
        le && /* @__PURE__ */ e("ul", { id: he, role: "listbox", className: L.menu, children: W.map((b, q) => {
          const R = b.value === qe, xe = q === Ne;
          return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": R,
              className: [
                L.option,
                R ? L.optionSelected : "",
                xe ? L.optionFocused : ""
              ].filter(Boolean).join(" "),
              disabled: b.disabled,
              onMouseEnter: () => Ee(q),
              onClick: () => {
                Je(b.value), pe(!1);
              },
              children: [
                /* @__PURE__ */ e("span", { className: L.optionLabel, children: b.label }),
                /* @__PURE__ */ e(
                  "span",
                  {
                    className: `${L.optionCheck}${R ? ` ${L.optionCheckVisible}` : ""}`,
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
          ) }, b.value);
        }) })
      ] }),
      n && /* @__PURE__ */ e("span", { id: G, className: L.errorText, role: "alert", children: n }),
      s && !n && /* @__PURE__ */ e("span", { id: ne, className: L.hint, children: s })
    ] });
  }
);
fs.displayName = "Select";
const bs = "_wrapper_iu9cq_1", gs = "_row_iu9cq_7", vs = "_checkbox_iu9cq_14", ws = "_hasError_iu9cq_51", $s = "_sm_iu9cq_60", ks = "_md_iu9cq_74", ys = "_lg_iu9cq_88", Ns = "_label_iu9cq_102", xs = "_description_iu9cq_113", Bs = "_errorText_iu9cq_123", J = {
  wrapper: bs,
  row: gs,
  checkbox: vs,
  hasError: ws,
  sm: $s,
  md: ks,
  lg: ys,
  label: Ns,
  description: xs,
  errorText: Bs
}, Ls = j.forwardRef(
  ({ label: t, description: o, error: n, size: s = "md", className: r, id: i, ...l }, a) => {
    const c = i ?? (t ? `vui-checkbox-${t.toLowerCase().replace(/\s+/g, "-")}` : void 0), _ = c ? `${c}-error` : void 0, p = c && o ? `${c}-desc` : void 0, m = [
      J.checkbox,
      J[s],
      n ? J.hasError : "",
      r ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { className: `${J.wrapper} ${J[s]}`, children: [
      /* @__PURE__ */ d("div", { className: J.row, children: [
        /* @__PURE__ */ e(
          "input",
          {
            ref: a,
            type: "checkbox",
            id: c,
            className: m,
            "aria-invalid": !!n,
            "aria-describedby": [n ? _ : null, p].filter(Boolean).join(" ") || void 0,
            ...l
          }
        ),
        t && /* @__PURE__ */ e("label", { htmlFor: c, className: J.label, children: t })
      ] }),
      o && !n && /* @__PURE__ */ e("span", { id: p, className: J.description, children: o }),
      n && /* @__PURE__ */ e("span", { id: _, className: J.errorText, role: "alert", children: n })
    ] });
  }
);
Ls.displayName = "Checkbox";
const js = "_fieldset_nj7or_1", zs = "_legend_nj7or_10", Is = "_required_nj7or_19", Cs = "_group_nj7or_24", Ws = "_vertical_nj7or_28", qs = "_horizontal_nj7or_33", Es = "_option_nj7or_39", Rs = "_radio_nj7or_46", Ss = "_hasError_nj7or_81", Ts = "_sm_nj7or_86", Ds = "_md_nj7or_87", Ms = "_lg_nj7or_88", Fs = "_optionContent_nj7or_90", As = "_optionLabel_nj7or_96", Hs = "_optionDescription_nj7or_107", Ps = "_hint_nj7or_113", Os = "_errorText_nj7or_119", S = {
  fieldset: js,
  legend: zs,
  required: Is,
  group: Cs,
  vertical: Ws,
  horizontal: qs,
  option: Es,
  radio: Rs,
  hasError: Ss,
  sm: Ts,
  md: Ds,
  lg: Ms,
  optionContent: Fs,
  optionLabel: As,
  optionDescription: Hs,
  hint: Ps,
  errorText: Os
}, J_ = ({
  name: t,
  label: o,
  options: n,
  value: s,
  defaultValue: r,
  onChange: i,
  size: l = "md",
  orientation: a = "vertical",
  error: c,
  hint: _,
  required: p
}) => {
  const m = `vui-radiogroup-${t}`, u = `${m}-error`, f = `${m}-hint`, v = s !== void 0;
  return /* @__PURE__ */ d(
    "fieldset",
    {
      className: `${S.fieldset} ${S[l]}`,
      "aria-describedby": [c ? u : null, _ && !c ? f : null].filter(Boolean).join(" ") || void 0,
      children: [
        o && /* @__PURE__ */ d("legend", { className: S.legend, children: [
          o,
          p && /* @__PURE__ */ e("span", { className: S.required, "aria-hidden": "true", children: "*" })
        ] }),
        /* @__PURE__ */ e("div", { className: `${S.group} ${S[a]}`, children: n.map((h) => {
          const g = `${m}-${h.value}`, w = v ? { checked: s === h.value } : { defaultChecked: r === h.value };
          return /* @__PURE__ */ d("div", { className: S.option, children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                id: g,
                name: t,
                value: h.value,
                disabled: h.disabled,
                required: p,
                onChange: () => i == null ? void 0 : i(h.value),
                className: `${S.radio} ${c ? S.hasError : ""}`,
                "aria-invalid": c ? !0 : void 0,
                ...w
              }
            ),
            /* @__PURE__ */ d("div", { className: S.optionContent, children: [
              /* @__PURE__ */ e("label", { htmlFor: g, className: S.optionLabel, children: h.label }),
              h.description && /* @__PURE__ */ e("span", { className: S.optionDescription, children: h.description })
            ] })
          ] }, h.value);
        }) }),
        c && /* @__PURE__ */ e("span", { id: u, className: S.errorText, role: "alert", children: c }),
        _ && !c && /* @__PURE__ */ e("span", { id: f, className: S.hint, children: _ })
      ]
    }
  );
}, Us = "_wrapper_okiio_1", Vs = "_labelRow_okiio_7", Xs = "_track_okiio_15", Ys = "_input_okiio_23", Ks = "_thumb_okiio_32", Gs = "_labelText_okiio_65", Js = "_sm_okiio_74", Qs = "_md_okiio_80", Zs = "_lg_okiio_86", er = "_description_okiio_98", oe = {
  wrapper: Us,
  labelRow: Vs,
  track: Xs,
  input: Ys,
  thumb: Ks,
  labelText: Gs,
  sm: Js,
  md: Qs,
  lg: Zs,
  description: er
}, tr = j.forwardRef(
  ({ label: t, description: o, size: n = "md", className: s, id: r, ...i }, l) => {
    const a = r ?? (t ? `vui-switch-${t.toLowerCase().replace(/\s+/g, "-")}` : void 0), c = a && o ? `${a}-desc` : void 0;
    return /* @__PURE__ */ d("div", { className: `${oe.wrapper} ${oe[n]}`, children: [
      /* @__PURE__ */ d("label", { className: oe.labelRow, htmlFor: a, children: [
        /* @__PURE__ */ d("span", { className: oe.track, children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: l,
              type: "checkbox",
              role: "switch",
              id: a,
              className: `${oe.input} ${s ?? ""}`,
              "aria-describedby": c || void 0,
              ...i
            }
          ),
          /* @__PURE__ */ e("span", { className: oe.thumb, "aria-hidden": "true" })
        ] }),
        t && /* @__PURE__ */ e("span", { className: oe.labelText, children: t })
      ] }),
      o && /* @__PURE__ */ e("span", { id: c, className: oe.description, children: o })
    ] });
  }
);
tr.displayName = "Switch";
const nr = "_overlay_gedqr_1", or = "_overlayFadeIn_gedqr_1", sr = "_dialog_gedqr_19", rr = "_dialogSlideUp_gedqr_1", ar = "_sm_gedqr_39", ir = "_md_gedqr_40", lr = "_lg_gedqr_41", cr = "_xl_gedqr_42", dr = "_header_gedqr_45", _r = "_title_gedqr_51", ur = "_description_gedqr_59", hr = "_body_gedqr_66", pr = "_footer_gedqr_71", mr = "_closeBtn_gedqr_81", K = {
  overlay: nr,
  overlayFadeIn: or,
  dialog: sr,
  dialogSlideUp: rr,
  sm: ar,
  md: ir,
  lg: lr,
  xl: cr,
  header: dr,
  title: _r,
  description: ur,
  body: hr,
  footer: pr,
  closeBtn: mr
}, Ze = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', lt = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${K.header} ${o ?? ""}`, ...n, children: t });
lt.displayName = "Dialog.Header";
const ct = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${K.body} ${o ?? ""}`, ...n, children: t });
ct.displayName = "Dialog.Body";
const dt = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${K.footer} ${o ?? ""}`, ...n, children: t });
dt.displayName = "Dialog.Footer";
const et = { current: 0 }, fr = ({
  open: t,
  onClose: o,
  title: n,
  description: s,
  size: r = "md",
  children: i,
  className: l,
  closeOnOverlayClick: a = !0
}) => {
  const c = A(null), _ = A(`vui-dialog-title-${++et.current}`).current, p = A(`vui-dialog-desc-${et.current}`).current, m = A(null);
  if (ae(() => {
    if (!t) return;
    m.current = document.activeElement, document.body.style.overflow = "hidden";
    const v = requestAnimationFrame(() => {
      var w, B;
      const g = (w = c.current) == null ? void 0 : w.querySelectorAll(Ze);
      (B = g == null ? void 0 : g[0]) == null || B.focus();
    }), h = (g) => {
      if (g.key === "Escape") {
        o();
        return;
      }
      if (g.key === "Tab" && c.current) {
        const w = Array.from(
          c.current.querySelectorAll(Ze)
        );
        if (w.length === 0) {
          g.preventDefault();
          return;
        }
        const B = w[0], k = w[w.length - 1];
        g.shiftKey ? document.activeElement === B && (k.focus(), g.preventDefault()) : document.activeElement === k && (B.focus(), g.preventDefault());
      }
    };
    return document.addEventListener("keydown", h), () => {
      var g;
      cancelAnimationFrame(v), document.removeEventListener("keydown", h), document.body.style.overflow = "", (g = m.current) == null || g.focus();
    };
  }, [t, o]), !t) return null;
  const u = (f) => {
    a && f.target === f.currentTarget && o();
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: K.overlay,
      onClick: u,
      "aria-modal": "true",
      role: "presentation",
      children: /* @__PURE__ */ d(
        "div",
        {
          ref: c,
          role: "dialog",
          "aria-labelledby": n ? _ : void 0,
          "aria-describedby": s ? p : void 0,
          className: [K.dialog, K[r], l ?? ""].filter(Boolean).join(" "),
          children: [
            n && /* @__PURE__ */ d("div", { className: K.header, children: [
              /* @__PURE__ */ e("p", { id: _, className: K.title, children: n }),
              s && /* @__PURE__ */ e("p", { id: p, className: K.description, children: s })
            ] }),
            i,
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: K.closeBtn,
                onClick: o,
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
}, Ue = fr;
Ue.Header = lt;
Ue.Body = ct;
Ue.Footer = dt;
Ue.displayName = "Dialog";
const br = "_wrapper_16e9w_1", gr = "_tooltip_16e9w_6", vr = "_visible_16e9w_25", wr = "_top_16e9w_30", $r = "_bottom_16e9w_36", kr = "_left_16e9w_42", yr = "_right_16e9w_48", Nr = "_arrow_16e9w_55", xr = "_arrowTop_16e9w_61", Br = "_arrowBottom_16e9w_70", Lr = "_arrowLeft_16e9w_79", jr = "_arrowRight_16e9w_88", me = {
  wrapper: br,
  tooltip: gr,
  visible: vr,
  top: wr,
  bottom: $r,
  left: kr,
  right: yr,
  arrow: Nr,
  arrowTop: xr,
  arrowBottom: Br,
  arrowLeft: Lr,
  arrowRight: jr
}, Q_ = ({
  content: t,
  children: o,
  placement: n = "top",
  delay: s = 0
}) => {
  const [r, i] = O(!1), a = `vui-tooltip-${Pe().replace(/:/g, "")}`, c = j.useRef(null), _ = () => {
    s > 0 ? c.current = setTimeout(() => i(!0), s) : i(!0);
  }, p = () => {
    c.current && clearTimeout(c.current), i(!1);
  }, m = j.cloneElement(o, {
    "aria-describedby": r ? a : void 0
  });
  return /* @__PURE__ */ d(
    "span",
    {
      className: me.wrapper,
      onMouseEnter: _,
      onMouseLeave: p,
      onFocus: _,
      onBlur: p,
      children: [
        m,
        /* @__PURE__ */ d(
          "span",
          {
            id: a,
            role: "tooltip",
            className: [me.tooltip, me[n], r ? me.visible : ""].filter(Boolean).join(" "),
            "aria-hidden": !r,
            children: [
              t,
              /* @__PURE__ */ e("span", { className: `${me.arrow} ${me[`arrow${n.charAt(0).toUpperCase()}${n.slice(1)}`]}`, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}, zr = "_tabs_16y0p_1", Ir = "_tablist_16y0p_8", Cr = "_underline_16y0p_14", Wr = "_tab_16y0p_1", qr = "_activeTab_16y0p_39", Er = "_pills_16y0p_50", Rr = "_boxed_16y0p_89", Sr = "_panel_16y0p_139", fe = {
  tabs: zr,
  tablist: Ir,
  underline: Cr,
  tab: Wr,
  activeTab: qr,
  pills: Er,
  boxed: Rr,
  panel: Sr
}, Z_ = ({
  items: t,
  defaultValue: o,
  value: n,
  onChange: s,
  variant: r = "underline"
}) => {
  var v;
  const i = n !== void 0, [l, a] = O(
    o ?? ((v = t[0]) == null ? void 0 : v.value) ?? ""
  ), c = i ? n : l, _ = A(null), p = (h) => {
    i || a(h), s == null || s(h);
  }, m = (h, g) => {
    var C;
    const w = t.filter((N) => !N.disabled), B = w.findIndex((N) => N.value === t[g].value);
    let k = null;
    if (h.key === "ArrowRight" ? k = (B + 1) % w.length : h.key === "ArrowLeft" ? k = (B - 1 + w.length) % w.length : h.key === "Home" ? k = 0 : h.key === "End" && (k = w.length - 1), k !== null) {
      h.preventDefault();
      const N = w[k];
      p(N.value);
      const H = (C = _.current) == null ? void 0 : C.querySelector(
        `[data-value="${N.value}"]`
      );
      H == null || H.focus();
    }
  }, u = (h) => `vui-tabpanel-${h}`, f = (h) => `vui-tab-${h}`;
  return /* @__PURE__ */ d("div", { className: fe.tabs, children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: _,
        role: "tablist",
        className: [fe.tablist, fe[r]].filter(Boolean).join(" "),
        children: t.map((h, g) => /* @__PURE__ */ e(
          "button",
          {
            id: f(h.value),
            role: "tab",
            type: "button",
            "data-value": h.value,
            "aria-selected": c === h.value,
            "aria-controls": u(h.value),
            disabled: h.disabled,
            tabIndex: c === h.value ? 0 : -1,
            className: [
              fe.tab,
              c === h.value ? fe.activeTab : ""
            ].filter(Boolean).join(" "),
            onClick: () => p(h.value),
            onKeyDown: (w) => m(w, g),
            children: h.label
          },
          h.value
        ))
      }
    ),
    t.map((h) => /* @__PURE__ */ e(
      "div",
      {
        id: u(h.value),
        role: "tabpanel",
        "aria-labelledby": f(h.value),
        hidden: c !== h.value,
        className: fe.panel,
        children: h.children
      },
      h.value
    ))
  ] });
}, Tr = "_accordion_wacbm_1", Dr = "_bordered_wacbm_7", Mr = "_item_wacbm_13", Fr = "_flush_wacbm_17", Ar = "_separated_wacbm_21", Hr = "_heading_wacbm_35", Pr = "_trigger_wacbm_40", Or = "_icon_wacbm_72", Ur = "_open_wacbm_80", Vr = "_contentOuter_wacbm_85", Xr = "_contentInner_wacbm_95", Q = {
  accordion: Tr,
  bordered: Dr,
  item: Mr,
  flush: Fr,
  separated: Ar,
  heading: Hr,
  trigger: Pr,
  icon: Or,
  open: Ur,
  contentOuter: Vr,
  contentInner: Xr
}, eu = ({
  items: t,
  defaultValue: o,
  value: n,
  onChange: s,
  multiple: r = !1,
  variant: i = "bordered"
}) => {
  const l = n !== void 0, a = (u) => u ? Array.isArray(u) ? u : [u] : [], [c, _] = O(a(o)), p = l ? a(n) : c, m = (u) => {
    let f;
    p.includes(u) ? f = p.filter((v) => v !== u) : f = r ? [...p, u] : [u], l || _(f), s == null || s(r ? f : f[0] ?? "");
  };
  return /* @__PURE__ */ e("div", { className: [Q.accordion, Q[i]].filter(Boolean).join(" "), children: t.map((u) => {
    const f = p.includes(u.value), v = `vui-accordion-trigger-${u.value}`, h = `vui-accordion-panel-${u.value}`;
    return /* @__PURE__ */ d(
      "div",
      {
        className: [Q.item, f ? Q.open : ""].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("h3", { className: Q.heading, children: /* @__PURE__ */ d(
            "button",
            {
              id: v,
              type: "button",
              "aria-expanded": f,
              "aria-controls": h,
              disabled: u.disabled,
              className: Q.trigger,
              onClick: () => !u.disabled && m(u.value),
              children: [
                /* @__PURE__ */ e("span", { children: u.title }),
                /* @__PURE__ */ e("span", { className: Q.icon, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
              id: h,
              role: "region",
              "aria-labelledby": v,
              className: Q.contentOuter,
              children: /* @__PURE__ */ e("div", { className: Q.contentInner, children: u.content })
            }
          )
        ]
      },
      u.value
    );
  }) });
}, Yr = "_alert_b1vtk_1", Kr = "_icon_b1vtk_12", Gr = "_content_b1vtk_19", Jr = "_title_b1vtk_24", Qr = "_body_b1vtk_31", Zr = "_closeBtn_b1vtk_35", ea = "_info_b1vtk_64", ta = "_success_b1vtk_70", na = "_warning_b1vtk_76", oa = "_danger_b1vtk_82", de = {
  alert: Yr,
  icon: Kr,
  content: Gr,
  title: Jr,
  body: Qr,
  closeBtn: Zr,
  info: ea,
  success: ta,
  warning: na,
  danger: oa
}, sa = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), ra = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), aa = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }
) }), ia = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), la = {
  info: /* @__PURE__ */ e(sa, {}),
  success: /* @__PURE__ */ e(ra, {}),
  warning: /* @__PURE__ */ e(aa, {}),
  danger: /* @__PURE__ */ e(ia, {})
}, tu = ({
  variant: t = "info",
  title: o,
  icon: n,
  onClose: s,
  children: r,
  className: i,
  ...l
}) => {
  const a = [de.alert, de[t], i ?? ""].filter(Boolean).join(" "), c = n !== void 0 ? n : la[t];
  return /* @__PURE__ */ d("div", { className: a, role: "alert", ...l, children: [
    c && /* @__PURE__ */ e("span", { className: de.icon, "aria-hidden": "true", children: c }),
    /* @__PURE__ */ d("div", { className: de.content, children: [
      o && /* @__PURE__ */ e("p", { className: de.title, children: o }),
      /* @__PURE__ */ e("div", { className: de.body, children: r })
    ] }),
    s && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: de.closeBtn,
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
}, ca = "_divider_vfae1_1", da = "_horizontal_vfae1_6", _a = "_vertical_vfae1_12", ua = "_withLabel_vfae1_19", ha = "_label_vfae1_33", Te = {
  divider: ca,
  horizontal: da,
  vertical: _a,
  withLabel: ua,
  label: ha
}, nu = ({
  orientation: t = "horizontal",
  label: o,
  className: n,
  ...s
}) => {
  const r = [
    Te.divider,
    Te[t],
    o ? Te.withLabel : "",
    n ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      role: "separator",
      "aria-orientation": t,
      className: r,
      ...s,
      children: o && /* @__PURE__ */ e("span", { className: Te.label, children: o })
    }
  );
}, pa = "_spinner_1232t_1", ma = "_svg_1232t_8", fa = "_spin_1232t_1", ba = "_track_1232t_17", ga = "_arc_1232t_21", va = "_sm_1232t_27", wa = "_md_1232t_33", $a = "_lg_1232t_39", ka = "_primary_1232t_46", ya = "_muted_1232t_50", Na = "_white_1232t_54", be = {
  spinner: pa,
  svg: ma,
  spin: fa,
  track: ba,
  arc: ga,
  sm: va,
  md: wa,
  lg: $a,
  primary: ka,
  muted: ya,
  white: Na
}, ou = ({
  size: t = "md",
  color: o = "primary",
  label: n = "Loading…",
  className: s,
  ...r
}) => {
  const i = [be.spinner, be[t], be[o], s ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("span", { className: i, role: "status", "aria-label": n, ...r, children: /* @__PURE__ */ d(
    "svg",
    {
      className: be.svg,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ e(
          "circle",
          {
            className: be.track,
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "3"
          }
        ),
        /* @__PURE__ */ e(
          "circle",
          {
            className: be.arc,
            cx: "12",
            cy: "12",
            r: "10",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round"
          }
        )
      ]
    }
  ) });
}, xa = "_block_tuupu_1", Ba = "_stack_tuupu_13", Ye = {
  block: xa,
  stack: Ba
}, _e = (t) => {
  if (t !== void 0)
    return typeof t == "number" ? `${t}px` : t;
}, su = ({
  width: t,
  height: o,
  radius: n,
  lines: s,
  gap: r,
  className: i,
  style: l,
  ...a
}) => {
  if (s && s > 1) {
    const c = _e(r) ?? "0.5rem";
    return /* @__PURE__ */ e(
      "span",
      {
        className: [Ye.stack, i ?? ""].filter(Boolean).join(" "),
        style: { gap: c, ...l },
        "aria-hidden": "true",
        ...a,
        children: Array.from({ length: s }).map((_, p) => {
          const m = p === s - 1;
          return /* @__PURE__ */ e(
            "span",
            {
              className: Ye.block,
              style: {
                width: m ? "75%" : _e(t) ?? "100%",
                height: _e(o) ?? "1rem",
                borderRadius: _e(n) ?? "var(--vui-radius-sm, 0.375rem)"
              }
            },
            p
          );
        })
      }
    );
  }
  return /* @__PURE__ */ e(
    "span",
    {
      className: [Ye.block, i ?? ""].filter(Boolean).join(" "),
      style: {
        width: _e(t),
        height: _e(o) ?? "1rem",
        borderRadius: _e(n) ?? "var(--vui-radius-sm, 0.375rem)",
        ...l
      },
      "aria-hidden": "true",
      ...a
    }
  );
}, La = "_wrapper_xgu51_1", ja = "_labelRow_xgu51_8", za = "_label_xgu51_8", Ia = "_value_xgu51_20", Ca = "_track_xgu51_26", Wa = "_sm_xgu51_33", qa = "_md_xgu51_34", Ea = "_lg_xgu51_35", Ra = "_bar_xgu51_37", Sa = "_primary_xgu51_43", Ta = "_success_xgu51_44", Da = "_warning_xgu51_45", Ma = "_danger_xgu51_46", se = {
  wrapper: La,
  labelRow: ja,
  label: za,
  value: Ia,
  track: Ca,
  sm: Wa,
  md: qa,
  lg: Ea,
  bar: Ra,
  primary: Sa,
  success: Ta,
  warning: Da,
  danger: Ma
}, ru = ({
  value: t,
  variant: o = "primary",
  size: n = "md",
  label: s,
  showValue: r = !1,
  className: i,
  ...l
}) => {
  const a = Math.min(100, Math.max(0, t));
  return /* @__PURE__ */ d("div", { className: [se.wrapper, i ?? ""].filter(Boolean).join(" "), ...l, children: [
    (s || r) && /* @__PURE__ */ d("div", { className: se.labelRow, children: [
      s && /* @__PURE__ */ e("span", { className: se.label, children: s }),
      r && /* @__PURE__ */ d("span", { className: se.value, children: [
        a,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: [se.track, se[n]].filter(Boolean).join(" "),
        role: "progressbar",
        "aria-valuenow": a,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": s ?? `${a}%`,
        children: /* @__PURE__ */ e(
          "div",
          {
            className: [se.bar, se[o]].filter(Boolean).join(" "),
            style: { width: `${a}%` }
          }
        )
      }
    )
  ] });
}, Fa = "_container_2etd3_1", Aa = "_toast_2etd3_14", Ha = "_slideUp_2etd3_1", Pa = "_message_2etd3_31", Oa = "_close_2etd3_38", Ua = "_info_2etd3_63", Va = "_success_2etd3_69", Xa = "_warning_2etd3_75", Ya = "_danger_2etd3_81", Ie = {
  container: Fa,
  toast: Aa,
  slideUp: Ha,
  message: Pa,
  close: Oa,
  info: Ua,
  success: Va,
  warning: Xa,
  danger: Ya
}, _t = gt(null);
let Ka = 0;
const Ga = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }), Ja = ({ item: t, onRemove: o }) => {
  const n = A(null);
  ae(() => {
    const r = t.duration ?? 4e3;
    return r > 0 && (n.current = setTimeout(() => o(t.id), r)), () => {
      n.current && clearTimeout(n.current);
    };
  }, [t.id, t.duration, o]);
  const s = [Ie.toast, Ie[t.variant ?? "info"]].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: s, role: "alert", "aria-live": "assertive", children: [
    /* @__PURE__ */ e("span", { className: Ie.message, children: t.message }),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Ie.close,
        onClick: () => o(t.id),
        "aria-label": "Dismiss notification",
        children: /* @__PURE__ */ e(Ga, {})
      }
    )
  ] });
}, au = ({ children: t }) => {
  const [o, n] = O([]), s = ye((i) => {
    const l = `toast-${++Ka}`;
    n((a) => [...a, { ...i, id: l }]);
  }, []), r = ye((i) => {
    n((l) => l.filter((a) => a.id !== i));
  }, []);
  return /* @__PURE__ */ d(_t.Provider, { value: { addToast: s, removeToast: r }, children: [
    t,
    typeof document < "u" && Ke(
      /* @__PURE__ */ e("div", { className: Ie.container, "aria-label": "Notifications", children: o.map((i) => /* @__PURE__ */ e(Ja, { item: i, onRemove: r }, i.id)) }),
      document.body
    )
  ] });
}, iu = () => {
  const t = bt(_t);
  if (!t)
    throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}, Qa = "_avatar_14l02_1", Za = "_xs_14l02_15", ei = "_sm_14l02_16", ti = "_md_14l02_17", ni = "_lg_14l02_18", oi = "_xl_14l02_19", si = "_circle_14l02_22", ri = "_square_14l02_23", ai = "_img_14l02_25", ii = "_initials_14l02_32", li = "_fallbackIcon_14l02_37", ci = "_status_14l02_44", di = "_online_14l02_57", _i = "_away_14l02_58", ui = "_offline_14l02_59", hi = "_statusPulse_14l02_61", pi = "_avatarStatusPulse_14l02_1", Z = {
  avatar: Qa,
  xs: Za,
  sm: ei,
  md: ti,
  lg: ni,
  xl: oi,
  circle: si,
  square: ri,
  img: ai,
  initials: ii,
  fallbackIcon: li,
  status: ci,
  online: di,
  away: _i,
  offline: ui,
  statusPulse: hi,
  avatarStatusPulse: pi
};
function mi(t) {
  const o = t.trim().split(/\s+/);
  return o.length === 1 ? o[0].charAt(0).toUpperCase() : (o[0].charAt(0) + o[o.length - 1].charAt(0)).toUpperCase();
}
const lu = ({
  src: t,
  alt: o,
  name: n,
  size: s = "md",
  shape: r = "circle",
  status: i,
  statusAnimation: l = "none",
  className: a,
  ...c
}) => {
  const [_, p] = O(!1), m = [Z.avatar, Z[s], Z[r], a ?? ""].filter(Boolean).join(" "), u = t && !_, f = n ? mi(n) : null;
  return /* @__PURE__ */ d("span", { className: m, "aria-label": o ?? n, ...c, children: [
    u ? /* @__PURE__ */ e(
      "img",
      {
        src: t,
        alt: o ?? n ?? "",
        className: Z.img,
        onError: () => p(!0)
      }
    ) : f ? /* @__PURE__ */ e("span", { className: Z.initials, "aria-hidden": "true", children: f }) : /* @__PURE__ */ e("svg", { className: Z.fallbackIcon, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { d: "M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" }) }),
    i && /* @__PURE__ */ e(
      "span",
      {
        className: [
          Z.status,
          Z[i],
          l === "pulse" ? Z.statusPulse : ""
        ].filter(Boolean).join(" "),
        "aria-label": i
      }
    )
  ] });
}, fi = "_tag_13w40_1", bi = "_sm_13w40_14", gi = "_md_13w40_19", vi = "_lg_13w40_24", wi = "_info_13w40_36", $i = "_success_13w40_42", ki = "_warning_13w40_48", yi = "_danger_13w40_54", Ni = "_primary_13w40_60", xi = "_label_13w40_66", Bi = "_icon_13w40_70", Li = "_close_13w40_75", ge = {
  tag: fi,
  sm: bi,
  md: gi,
  lg: vi,
  default: "_default_13w40_30",
  info: wi,
  success: $i,
  warning: ki,
  danger: yi,
  primary: Ni,
  label: xi,
  icon: Bi,
  close: Li
}, cu = ({
  variant: t = "default",
  size: o = "md",
  onClose: n,
  leftIcon: s,
  children: r,
  className: i,
  ...l
}) => {
  const a = [ge.tag, ge[t], ge[o], i ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("span", { className: a, ...l, children: [
    s && /* @__PURE__ */ e("span", { className: ge.icon, "aria-hidden": "true", children: s }),
    /* @__PURE__ */ e("span", { className: ge.label, children: r }),
    n && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: ge.close,
        onClick: (c) => {
          c.stopPropagation(), n();
        },
        "aria-label": "Remove",
        children: /* @__PURE__ */ e("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M6 18L18 6M6 6l12 12" }) })
      }
    )
  ] });
}, ji = "_root_6ieqa_1", zi = "_icon_6ieqa_11", Ii = "_title_6ieqa_23", Ci = "_description_6ieqa_31", Wi = "_action_6ieqa_39", ze = {
  root: ji,
  icon: zi,
  title: Ii,
  description: Ci,
  action: Wi
}, du = ({
  icon: t,
  title: o,
  description: n,
  action: s,
  className: r,
  ...i
}) => /* @__PURE__ */ d("div", { className: [ze.root, r ?? ""].filter(Boolean).join(" "), ...i, children: [
  t && /* @__PURE__ */ e("span", { className: ze.icon, "aria-hidden": "true", children: t }),
  /* @__PURE__ */ e("p", { className: ze.title, children: o }),
  n && /* @__PURE__ */ e("p", { className: ze.description, children: n }),
  s && /* @__PURE__ */ e("div", { className: ze.action, children: s })
] }), qi = "_nav_1s2na_1", Ei = "_list_1s2na_5", Ri = "_item_1s2na_15", Si = "_separator_1s2na_20", Ti = "_crumb_1s2na_27", Di = "_link_1s2na_33", Mi = "_current_1s2na_50", ee = {
  nav: qi,
  list: Ei,
  item: Ri,
  separator: Si,
  crumb: Ti,
  link: Di,
  current: Mi
}, Fi = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 18l6-6-6-6" }) }), _u = ({
  items: t,
  separator: o,
  className: n,
  ...s
}) => {
  const r = o ?? /* @__PURE__ */ e(Fi, {});
  return /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: [ee.nav, n ?? ""].filter(Boolean).join(" "), ...s, children: /* @__PURE__ */ e("ol", { className: ee.list, children: t.map((i, l) => {
    const a = l === t.length - 1;
    return /* @__PURE__ */ d("li", { className: ee.item, children: [
      l > 0 && /* @__PURE__ */ e("span", { className: ee.separator, "aria-hidden": "true", children: r }),
      a || !i.href ? /* @__PURE__ */ e(
        "span",
        {
          className: [ee.crumb, a ? ee.current : ee.link].filter(Boolean).join(" "),
          "aria-current": a ? "page" : void 0,
          children: i.label
        }
      ) : /* @__PURE__ */ e("a", { href: i.href, className: [ee.crumb, ee.link].filter(Boolean).join(" "), children: i.label })
    ] }, l);
  }) }) });
}, Ai = "_nav_10kny_1", Hi = "_list_10kny_5", Pi = "_btn_10kny_14", Oi = "_disabled_10kny_32", Ui = "_active_10kny_32", Vi = "_dots_10kny_54", D = {
  nav: Ai,
  list: Hi,
  btn: Pi,
  disabled: Oi,
  active: Ui,
  dots: Vi
};
function De(t, o) {
  const n = o - t + 1;
  return Array.from({ length: n }, (s, r) => t + r);
}
function Xi(t, o, n) {
  const s = n * 2 + 5;
  if (o <= s)
    return De(1, o);
  const r = Math.max(t - n, 1), i = Math.min(t + n, o), l = r > 2, a = i < o - 1;
  return !l && a ? [...De(1, 3 + n * 2), "...", o] : l && !a ? [1, "...", ...De(o - (2 + n * 2), o)] : [1, "...", ...De(r, i), "...", o];
}
const Yi = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 18l-6-6 6-6" }) }), Ki = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 18l6-6-6-6" }) }), Gi = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 17l-5-5 5-5M18 17l-5-5 5-5" }) }), Ji = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 17l5-5-5-5M6 17l5-5-5-5" }) }), uu = ({
  page: t,
  totalPages: o,
  onChange: n,
  siblingCount: s = 1,
  showFirstLast: r = !0,
  className: i,
  ...l
}) => {
  const a = Xi(t, o, s), c = (_) => {
    _ < 1 || _ > o || _ === t || n(_);
  };
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "Pagination",
      className: [D.nav, i ?? ""].filter(Boolean).join(" "),
      ...l,
      children: /* @__PURE__ */ d("ul", { className: D.list, children: [
        r && /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            className: [D.btn, t === 1 ? D.disabled : ""].filter(Boolean).join(" "),
            onClick: () => c(1),
            disabled: t === 1,
            "aria-label": "First page",
            children: /* @__PURE__ */ e(Gi, {})
          }
        ) }),
        /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            className: [D.btn, t === 1 ? D.disabled : ""].filter(Boolean).join(" "),
            onClick: () => c(t - 1),
            disabled: t === 1,
            "aria-label": "Previous page",
            children: /* @__PURE__ */ e(Yi, {})
          }
        ) }),
        a.map(
          (_, p) => _ === "..." ? /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("span", { className: D.dots, children: "…" }) }, `dots-${p}`) : /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
            "button",
            {
              className: [D.btn, _ === t ? D.active : ""].filter(Boolean).join(" "),
              onClick: () => c(_),
              "aria-label": `Page ${_}`,
              "aria-current": _ === t ? "page" : void 0,
              children: _
            }
          ) }, _)
        ),
        /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            className: [D.btn, t === o ? D.disabled : ""].filter(Boolean).join(" "),
            onClick: () => c(t + 1),
            disabled: t === o,
            "aria-label": "Next page",
            children: /* @__PURE__ */ e(Ki, {})
          }
        ) }),
        r && /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            className: [D.btn, t === o ? D.disabled : ""].filter(Boolean).join(" "),
            onClick: () => c(o),
            disabled: t === o,
            "aria-label": "Last page",
            children: /* @__PURE__ */ e(Ji, {})
          }
        ) })
      ] })
    }
  );
}, Qi = "_root_1wmfi_1", Zi = "_horizontal_1wmfi_6", el = "_vertical_1wmfi_11", tl = "_step_1wmfi_16", nl = "_connector_1wmfi_32", ol = "_indicator_1wmfi_37", sl = "_circle_1wmfi_55", rl = "_pending_1wmfi_88", al = "_active_1wmfi_94", il = "_completed_1wmfi_100", ll = "_content_1wmfi_111", cl = "_label_1wmfi_127", dl = "_description_1wmfi_139", M = {
  root: Qi,
  horizontal: Zi,
  vertical: el,
  step: tl,
  connector: nl,
  indicator: ol,
  circle: sl,
  pending: rl,
  active: al,
  completed: il,
  content: ll,
  label: cl,
  description: dl
}, _l = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M5 13l4 4L19 7" }) }), hu = ({
  steps: t,
  currentStep: o,
  orientation: n = "horizontal",
  variant: s = "default",
  className: r,
  ...i
}) => {
  const l = [
    M.root,
    M[n],
    M[s],
    r ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      className: l,
      role: "list",
      "aria-label": "Steps",
      ...i,
      children: t.map((a, c) => {
        const _ = c + 1, p = _ < o, m = _ === o, u = c === t.length - 1, f = [
          M.step,
          p ? M.completed : "",
          m ? M.active : "",
          !p && !m ? M.pending : ""
        ].filter(Boolean).join(" ");
        return /* @__PURE__ */ d("div", { className: f, role: "listitem", children: [
          /* @__PURE__ */ d("div", { className: M.indicator, children: [
            /* @__PURE__ */ e("span", { className: M.circle, children: p ? /* @__PURE__ */ e(_l, {}) : /* @__PURE__ */ e("span", { children: _ }) }),
            !u && /* @__PURE__ */ e("span", { className: M.connector, "aria-hidden": "true" })
          ] }),
          s !== "compact" && /* @__PURE__ */ d("div", { className: M.content, children: [
            /* @__PURE__ */ e("span", { className: M.label, children: a.label }),
            a.description && /* @__PURE__ */ e("span", { className: M.description, children: a.description })
          ] })
        ] }, c);
      })
    }
  );
}, ul = "_triggerWrapper_v2cko_1", hl = "_popover_v2cko_6", pl = "_fadeIn_v2cko_1", ml = "_arrow_v2cko_24", fl = "_bottom_v2cko_34", bl = "_top_v2cko_42", gl = "_right_v2cko_50", vl = "_left_v2cko_58", Me = {
  triggerWrapper: ul,
  popover: hl,
  fadeIn: pl,
  arrow: ml,
  bottom: fl,
  top: bl,
  right: gl,
  left: vl
};
function wl(t, o, n) {
  const { top: s, left: r, bottom: i, right: l, width: a, height: c } = t, _ = o.offsetWidth, p = o.offsetHeight, m = 8;
  switch (n) {
    case "top":
      return { top: s - p - m + window.scrollY, left: r + a / 2 - _ / 2 + window.scrollX };
    case "bottom":
      return { top: i + m + window.scrollY, left: r + a / 2 - _ / 2 + window.scrollX };
    case "left":
      return { top: s + c / 2 - p / 2 + window.scrollY, left: r - _ - m + window.scrollX };
    case "right":
      return { top: s + c / 2 - p / 2 + window.scrollY, left: l + m + window.scrollX };
  }
}
const pu = ({
  trigger: t,
  content: o,
  placement: n = "bottom",
  open: s,
  onOpenChange: r,
  className: i
}) => {
  const l = s !== void 0, [a, c] = O(!1), _ = l ? s : a, p = A(null), m = A(null), [u, f] = O({ top: 0, left: 0 }), v = ye(
    (w) => {
      l || c(w), r == null || r(w);
    },
    [l, r]
  ), h = ye(() => {
    if (!p.current || !m.current) return;
    const w = p.current.getBoundingClientRect();
    f(wl(w, m.current, n));
  }, [n]);
  ae(() => {
    if (_)
      return h(), window.addEventListener("resize", h), window.addEventListener("scroll", h, !0), () => {
        window.removeEventListener("resize", h), window.removeEventListener("scroll", h, !0);
      };
  }, [_, h]), ae(() => {
    if (!_) return;
    const w = (k) => {
      var C, N;
      !((C = p.current) != null && C.contains(k.target)) && !((N = m.current) != null && N.contains(k.target)) && v(!1);
    }, B = (k) => {
      k.key === "Escape" && v(!1);
    };
    return document.addEventListener("mousedown", w), document.addEventListener("keydown", B), () => {
      document.removeEventListener("mousedown", w), document.removeEventListener("keydown", B);
    };
  }, [_, v]);
  const g = [Me.popover, Me[n], i ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ d(st, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: p,
        className: Me.triggerWrapper,
        onClick: () => v(!_),
        "aria-expanded": _,
        "aria-haspopup": "true",
        children: t
      }
    ),
    _ && typeof document < "u" && Ke(
      /* @__PURE__ */ d(
        "div",
        {
          ref: m,
          className: g,
          style: { top: u.top, left: u.left },
          role: "dialog",
          children: [
            /* @__PURE__ */ e("div", { className: Me.arrow, "aria-hidden": "true" }),
            o
          ]
        }
      ),
      document.body
    )
  ] });
}, $l = "_triggerWrapper_19rgz_1", kl = "_menu_19rgz_6", yl = "_item_19rgz_23", Nl = "_itemDisabled_19rgz_41", xl = "_itemIcon_19rgz_56", Bl = "_separator_19rgz_63", ve = {
  triggerWrapper: $l,
  menu: kl,
  item: yl,
  itemDisabled: Nl,
  itemIcon: xl,
  separator: Bl
};
function Ll(t, o, n) {
  const { top: s, left: r, bottom: i, right: l } = t, a = o.offsetHeight, c = o.offsetWidth, _ = 4;
  switch (n) {
    case "bottom-start":
      return { top: i + _ + window.scrollY, left: r + window.scrollX };
    case "bottom-end":
      return { top: i + _ + window.scrollY, left: l - c + window.scrollX };
    case "top-start":
      return { top: s - a - _ + window.scrollY, left: r + window.scrollX };
    case "top-end":
      return { top: s - a - _ + window.scrollY, left: l - c + window.scrollX };
    default:
      return { top: i + _ + window.scrollY, left: r + window.scrollX };
  }
}
const mu = ({
  trigger: t,
  items: o,
  placement: n = "bottom-start",
  className: s
}) => {
  const [r, i] = O(!1), l = A(null), a = A(null), [c, _] = O({ top: 0, left: 0 }), p = ye(() => {
    if (!l.current || !a.current) return;
    const u = l.current.getBoundingClientRect();
    _(Ll(u, a.current, n));
  }, [n]);
  ae(() => {
    if (r)
      return p(), window.addEventListener("resize", p), window.addEventListener("scroll", p, !0), () => {
        window.removeEventListener("resize", p), window.removeEventListener("scroll", p, !0);
      };
  }, [r, p]), ae(() => {
    if (!r) return;
    const u = (v) => {
      var h, g;
      !((h = l.current) != null && h.contains(v.target)) && !((g = a.current) != null && g.contains(v.target)) && i(!1);
    }, f = (v) => {
      var h;
      if (v.key === "Escape") {
        i(!1);
        const g = (h = l.current) == null ? void 0 : h.querySelector("button, a, [tabindex]");
        g == null || g.focus();
      }
    };
    return document.addEventListener("mousedown", u), document.addEventListener("keydown", f), () => {
      document.removeEventListener("mousedown", u), document.removeEventListener("keydown", f);
    };
  }, [r]);
  const m = (u) => {
    var f;
    u.disabled || ((f = u.onClick) == null || f.call(u), i(!1));
  };
  return /* @__PURE__ */ d(st, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: l,
        className: ve.triggerWrapper,
        onClick: () => i((u) => !u),
        "aria-haspopup": "menu",
        "aria-expanded": r,
        children: t
      }
    ),
    r && typeof document < "u" && Ke(
      /* @__PURE__ */ e(
        "div",
        {
          ref: a,
          className: [ve.menu, s ?? ""].filter(Boolean).join(" "),
          style: { top: c.top, left: c.left },
          role: "menu",
          children: o.map((u, f) => u.separator ? /* @__PURE__ */ e("div", { className: ve.separator, role: "separator" }, f) : /* @__PURE__ */ d(
            "button",
            {
              type: "button",
              role: "menuitem",
              className: [ve.item, u.disabled ? ve.itemDisabled : ""].filter(Boolean).join(" "),
              onClick: () => m(u),
              disabled: u.disabled,
              children: [
                u.icon && /* @__PURE__ */ e("span", { className: ve.itemIcon, "aria-hidden": "true", children: u.icon }),
                /* @__PURE__ */ e("span", { children: u.label })
              ]
            },
            f
          ))
        }
      ),
      document.body
    )
  ] });
}, jl = "_wrapper_13j54_1", zl = "_wrapperDisabled_13j54_8", Il = "_labelRow_13j54_13", Cl = "_label_13j54_13", Wl = "_valueDisplay_13j54_25", ql = "_trackWrapper_13j54_31", El = "_sm_13j54_37", Rl = "_md_13j54_38", Sl = "_lg_13j54_39", Tl = "_trackBg_13j54_41", Dl = "_trackFill_13j54_51", Ml = "_input_13j54_61", Y = {
  wrapper: jl,
  wrapperDisabled: zl,
  labelRow: Il,
  label: Cl,
  valueDisplay: Wl,
  trackWrapper: ql,
  sm: El,
  md: Rl,
  lg: Sl,
  trackBg: Tl,
  trackFill: Dl,
  input: Ml
}, fu = ({
  min: t = 0,
  max: o = 100,
  step: n = 1,
  value: s,
  onChange: r,
  label: i,
  showValue: l = !1,
  size: a = "md",
  disabled: c,
  className: _,
  id: p,
  ...m
}) => {
  const u = Pe(), f = p ?? u, v = s !== void 0 ? (s - t) / (o - t) * 100 : 0;
  return /* @__PURE__ */ d("div", { className: [Y.wrapper, c ? Y.wrapperDisabled : "", _ ?? ""].filter(Boolean).join(" "), children: [
    (i || l) && /* @__PURE__ */ d("div", { className: Y.labelRow, children: [
      i && /* @__PURE__ */ e("label", { htmlFor: f, className: Y.label, children: i }),
      l && s !== void 0 && /* @__PURE__ */ e("span", { className: Y.valueDisplay, children: s })
    ] }),
    /* @__PURE__ */ d("div", { className: [Y.trackWrapper, Y[a]].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ e("div", { className: Y.trackBg }),
      /* @__PURE__ */ e("div", { className: Y.trackFill, style: { width: `${v}%` } }),
      /* @__PURE__ */ e(
        "input",
        {
          id: f,
          type: "range",
          min: t,
          max: o,
          step: n,
          value: s,
          disabled: c,
          onChange: (h) => r == null ? void 0 : r(Number(h.target.value)),
          className: Y.input,
          "aria-valuemin": t,
          "aria-valuemax": o,
          "aria-valuenow": s,
          ...m
        }
      )
    ] })
  ] });
}, Fl = "_root_q5j4f_1", Al = "_label_q5j4f_7", Hl = "_required_q5j4f_14", Pl = "_wrapper_q5j4f_18", Ol = "_hasError_q5j4f_33", Ul = "_disabled_q5j4f_41", Vl = "_sm_q5j4f_47", Xl = "_md_q5j4f_48", Yl = "_lg_q5j4f_49", Kl = "_input_q5j4f_51", Gl = "_stepBtn_q5j4f_72", Jl = "_errorMsg_q5j4f_96", Ql = "_hintMsg_q5j4f_103", P = {
  root: Fl,
  label: Al,
  required: Hl,
  wrapper: Pl,
  hasError: Ol,
  disabled: Ul,
  sm: Vl,
  md: Xl,
  lg: Yl,
  input: Kl,
  stepBtn: Gl,
  errorMsg: Jl,
  hintMsg: Ql
}, bu = ({
  value: t,
  onChange: o,
  min: n,
  max: s,
  step: r = 1,
  label: i,
  error: l,
  hint: a,
  size: c = "md",
  disabled: _,
  required: p,
  id: m,
  className: u,
  ...f
}) => {
  const v = Pe(), h = m ?? v, g = `${h}-hint`, w = `${h}-error`, B = () => {
    const N = (t ?? 0) - r;
    n !== void 0 && N < n || o == null || o(N);
  }, k = () => {
    const N = (t ?? 0) + r;
    s !== void 0 && N > s || o == null || o(N);
  }, C = [
    P.wrapper,
    P[c],
    l ? P.hasError : "",
    _ ? P.disabled : "",
    u ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: P.root, children: [
    i && /* @__PURE__ */ d("label", { htmlFor: h, className: P.label, children: [
      i,
      p && /* @__PURE__ */ e("span", { className: P.required, "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ d("div", { className: C, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: P.stepBtn,
          onClick: B,
          disabled: _ || n !== void 0 && (t ?? 0) <= n,
          "aria-label": "Decrease value",
          tabIndex: -1,
          children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M5 12h14" }) })
        }
      ),
      /* @__PURE__ */ e(
        "input",
        {
          id: h,
          type: "number",
          className: P.input,
          value: t,
          min: n,
          max: s,
          step: r,
          disabled: _,
          required: p,
          "aria-invalid": !!l,
          "aria-describedby": l ? w : a ? g : void 0,
          onChange: (N) => o == null ? void 0 : o(N.target.valueAsNumber),
          ...f
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: P.stepBtn,
          onClick: k,
          disabled: _ || s !== void 0 && (t ?? 0) >= s,
          "aria-label": "Increase value",
          tabIndex: -1,
          children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M12 5v14M5 12h14" }) })
        }
      )
    ] }),
    l && /* @__PURE__ */ e("p", { id: w, className: P.errorMsg, role: "alert", children: l }),
    !l && a && /* @__PURE__ */ e("p", { id: g, className: P.hintMsg, children: a })
  ] });
}, Zl = "_root_10bwd_1", ec = "_label_10bwd_7", tc = "_zone_10bwd_14", nc = "_zoneDisabled_10bwd_29", oc = "_dragging_10bwd_34", sc = "_zoneError_10bwd_39", rc = "_hiddenInput_10bwd_48", ac = "_uploadIcon_10bwd_52", ic = "_zoneText_10bwd_56", lc = "_zoneLink_10bwd_61", cc = "_zoneHint_10bwd_68", dc = "_errorMsg_10bwd_73", _c = "_fileList_10bwd_79", uc = "_fileItem_10bwd_88", hc = "_fileName_10bwd_98", pc = "_fileSize_10bwd_108", mc = "_removeBtn_10bwd_114", E = {
  root: Zl,
  label: ec,
  zone: tc,
  zoneDisabled: nc,
  dragging: oc,
  zoneError: sc,
  hiddenInput: rc,
  uploadIcon: ac,
  zoneText: ic,
  zoneLink: lc,
  zoneHint: cc,
  errorMsg: dc,
  fileList: _c,
  fileItem: uc,
  fileName: hc,
  fileSize: pc,
  removeBtn: mc
}, fc = () => /* @__PURE__ */ e("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" }) });
function tt(t) {
  return t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / (1024 * 1024)).toFixed(1)} MB`;
}
const gu = ({
  accept: t,
  multiple: o = !1,
  maxSize: n,
  onChange: s,
  label: r,
  hint: i,
  error: l,
  disabled: a = !1,
  className: c,
  id: _
}) => {
  const p = Pe(), m = _ ?? p, u = A(null), [f, v] = O(!1), [h, g] = O([]), [w, B] = O(null), k = l ?? w, C = ($) => {
    if (!$) return;
    const y = Array.from($);
    if (n && y.filter((he) => he.size > n).length > 0) {
      B(`File exceeds maximum size of ${tt(n)}.`);
      return;
    }
    B(null);
    const G = o ? y : y.slice(0, 1);
    g(G), s == null || s(G);
  }, N = ($) => {
    $.preventDefault(), v(!1), a || C($.dataTransfer.files);
  }, H = ($) => {
    const y = h.filter((G, ne) => ne !== $);
    g(y), s == null || s(y);
  }, x = [
    E.zone,
    f ? E.dragging : "",
    k ? E.zoneError : "",
    a ? E.zoneDisabled : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: [E.root, c ?? ""].filter(Boolean).join(" "), children: [
    r && /* @__PURE__ */ e("span", { className: E.label, children: r }),
    /* @__PURE__ */ d(
      "label",
      {
        htmlFor: m,
        className: x,
        onDragOver: ($) => {
          $.preventDefault(), a || v(!0);
        },
        onDragLeave: () => v(!1),
        onDrop: N,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: u,
              id: m,
              type: "file",
              accept: t,
              multiple: o,
              disabled: a,
              className: E.hiddenInput,
              onChange: ($) => C($.target.files)
            }
          ),
          /* @__PURE__ */ e("span", { className: E.uploadIcon, children: /* @__PURE__ */ e(fc, {}) }),
          /* @__PURE__ */ d("span", { className: E.zoneText, children: [
            /* @__PURE__ */ e("span", { className: E.zoneLink, children: "Choose files" }),
            " or drag and drop"
          ] }),
          i && /* @__PURE__ */ e("span", { className: E.zoneHint, children: i })
        ]
      }
    ),
    k && /* @__PURE__ */ e("p", { className: E.errorMsg, role: "alert", children: k }),
    h.length > 0 && /* @__PURE__ */ e("ul", { className: E.fileList, children: h.map(($, y) => /* @__PURE__ */ d("li", { className: E.fileItem, children: [
      /* @__PURE__ */ e("span", { className: E.fileName, children: $.name }),
      /* @__PURE__ */ e("span", { className: E.fileSize, children: tt($.size) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: E.removeBtn,
          onClick: () => H(y),
          "aria-label": `Remove ${$.name}`,
          children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }, y)) })
  ] });
}, bc = "_wrapper_i5kin_1", gc = "_table_i5kin_8", vc = "_sm_i5kin_15", wc = "_th_i5kin_15", $c = "_td_i5kin_16", kc = "_md_i5kin_21", yc = "_lg_i5kin_27", Nc = "_thContent_i5kin_43", xc = "_sortable_i5kin_49", Bc = "_sortActive_i5kin_58", Lc = "_sortIcon_i5kin_62", jc = "_tr_i5kin_72", zc = "_striped_i5kin_91", Ic = "_bordered_i5kin_100", Cc = "_empty_i5kin_105", F = {
  wrapper: bc,
  table: gc,
  sm: vc,
  th: wc,
  td: $c,
  md: kc,
  lg: yc,
  thContent: Nc,
  sortable: xc,
  sortActive: Bc,
  sortIcon: Lc,
  tr: jc,
  striped: zc,
  bordered: Ic,
  empty: Cc
}, Wc = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }) }), qc = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }), Ec = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 9l4-4 4 4M16 15l-4 4-4-4" }) });
function vu({
  columns: t,
  data: o,
  sortKey: n,
  sortDir: s,
  onSort: r,
  striped: i = !1,
  bordered: l = !1,
  size: a = "md",
  className: c,
  ..._
}) {
  const p = (u) => {
    if (!u.sortable || !r) return;
    const f = n === u.key && s === "asc" ? "desc" : "asc";
    r(u.key, f);
  }, m = [
    F.table,
    F[a],
    i ? F.striped : "",
    l ? F.bordered : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      className: [F.wrapper, c ?? ""].filter(Boolean).join(" "),
      ..._,
      children: /* @__PURE__ */ d("table", { className: m, children: [
        /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: t.map((u) => {
          const f = n === u.key, v = [
            F.th,
            u.sortable ? F.sortable : "",
            f ? F.sortActive : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ e(
            "th",
            {
              className: v,
              onClick: () => p(u),
              "aria-sort": f ? s === "asc" ? "ascending" : "descending" : u.sortable ? "none" : void 0,
              children: /* @__PURE__ */ d("span", { className: F.thContent, children: [
                u.header,
                u.sortable && /* @__PURE__ */ e("span", { className: F.sortIcon, children: f ? s === "asc" ? /* @__PURE__ */ e(Wc, {}) : /* @__PURE__ */ e(qc, {}) : /* @__PURE__ */ e(Ec, {}) })
              ] })
            },
            u.key
          );
        }) }) }),
        /* @__PURE__ */ e("tbody", { children: o.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: F.empty, children: "No data available." }) }) : o.map((u, f) => /* @__PURE__ */ e("tr", { className: F.tr, children: t.map((v) => {
          const h = u[v.key], g = v.render ? v.render(h, u, f) : h;
          return /* @__PURE__ */ e("td", { className: F.td, children: g }, v.key);
        }) }, f)) })
      ] })
    }
  );
}
const Rc = "_root_d7z0d_1", Sc = "_sent_d7z0d_9", Tc = "_received_d7z0d_13", Dc = "_ai_d7z0d_14", Mc = "_system_d7z0d_18", Fc = "_avatarSlot_d7z0d_23", Ac = "_avatar_d7z0d_23", Hc = "_avatarSpacer_d7z0d_37", Pc = "_content_d7z0d_42", Oc = "_header_d7z0d_60", Uc = "_username_d7z0d_67", Vc = "_time_d7z0d_73", Xc = "_bubble_d7z0d_79", Yc = "_first_d7z0d_107", Kc = "_middle_d7z0d_111", Gc = "_last_d7z0d_115", Jc = "_systemText_d7z0d_141", Qc = "_body_d7z0d_150", Zc = "_cursor_d7z0d_155", ed = "_cursorBlink_d7z0d_1", td = "_footer_d7z0d_166", nd = "_actions_d7z0d_173", od = "_status_d7z0d_178", sd = "_statusRead_d7z0d_183", I = {
  root: Rc,
  sent: Sc,
  received: Tc,
  ai: Dc,
  system: Mc,
  avatarSlot: Fc,
  avatar: Ac,
  avatarSpacer: Hc,
  content: Pc,
  header: Oc,
  username: Uc,
  time: Vc,
  bubble: Xc,
  first: Yc,
  middle: Kc,
  last: Gc,
  systemText: Jc,
  body: Qc,
  cursor: Zc,
  cursorBlink: ed,
  footer: td,
  actions: nd,
  status: od,
  statusRead: sd
};
function rd() {
  return /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("polyline", { points: "20 6 9 17 4 12" }) });
}
function nt() {
  return /* @__PURE__ */ d("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M18 6 7 17l-5-5" }),
    /* @__PURE__ */ e("path", { d: "m22 10-9.5 9.5L10 17" })
  ] });
}
const ad = {
  sent: /* @__PURE__ */ e(rd, {}),
  delivered: /* @__PURE__ */ e(nt, {}),
  read: /* @__PURE__ */ e(nt, {})
}, wu = ({
  variant: t = "received",
  avatar: o,
  username: n,
  timestamp: s,
  status: r,
  grouping: i = "single",
  isStreaming: l = !1,
  actions: a,
  children: c,
  className: _,
  ...p
}) => {
  const m = [
    I.root,
    I[t],
    I[i],
    _ ?? ""
  ].filter(Boolean).join(" ");
  if (t === "system")
    return /* @__PURE__ */ e("div", { className: m, ...p, children: /* @__PURE__ */ e("div", { className: I.systemText, children: c }) });
  const u = o && (i === "single" || i === "last"), f = (n || s) && (i === "single" || i === "first");
  return /* @__PURE__ */ d("div", { className: m, ...p, children: [
    /* @__PURE__ */ e("div", { className: I.avatarSlot, children: u ? /* @__PURE__ */ e("div", { className: I.avatar, children: o }) : /* @__PURE__ */ e("div", { className: I.avatarSpacer }) }),
    /* @__PURE__ */ d("div", { className: I.content, children: [
      f && /* @__PURE__ */ d("div", { className: I.header, children: [
        n && /* @__PURE__ */ e("span", { className: I.username, children: n }),
        s && /* @__PURE__ */ e("span", { className: I.time, children: s })
      ] }),
      /* @__PURE__ */ e("div", { className: I.bubble, children: /* @__PURE__ */ d("div", { className: I.body, children: [
        c,
        l && /* @__PURE__ */ e("span", { className: I.cursor, "aria-hidden": "true" })
      ] }) }),
      (a || r) && /* @__PURE__ */ d("div", { className: I.footer, children: [
        a && /* @__PURE__ */ e("div", { className: I.actions, children: a }),
        r && t === "sent" && /* @__PURE__ */ e("span", { className: `${I.status} ${r === "read" ? I.statusRead : ""}`, "aria-label": r, children: ad[r] })
      ] })
    ] })
  ] });
}, id = "_root_1w79c_1", ld = "_disabled_1w79c_17", cd = "_textarea_1w79c_22", dd = "_slot_1w79c_46", _d = "_sendButton_1w79c_52", we = {
  root: id,
  disabled: ld,
  textarea: cd,
  slot: dd,
  sendButton: _d
};
function ud() {
  return /* @__PURE__ */ d("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
    /* @__PURE__ */ e("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
  ] });
}
const hd = j.forwardRef(
  ({
    value: t,
    onChange: o,
    onSend: n,
    onAttach: s,
    maxRows: r = 5,
    leftSlot: i,
    rightSlot: l,
    showSendButton: a = !0,
    sendOnEnter: c = !0,
    placeholder: _ = "Type a message…",
    disabled: p,
    className: m,
    ...u
  }, f) => {
    var H;
    const v = A(null), h = f ?? v, g = ye(() => {
      const x = h.current;
      if (!x) return;
      x.style.height = "auto";
      const y = (parseFloat(getComputedStyle(x).lineHeight) || 20) * r;
      x.style.height = `${Math.min(x.scrollHeight, y)}px`;
    }, [r, h]);
    ae(() => {
      g();
    }, [t, g]);
    const w = (x) => {
      o == null || o(x.target.value), g();
    }, B = () => {
      var $;
      const x = (($ = h.current) == null ? void 0 : $.value) ?? t ?? "";
      x.trim() && n && n(x.trim());
    }, k = (x) => {
      var $;
      c && x.key === "Enter" && !x.shiftKey && (x.preventDefault(), B()), ($ = u.onKeyDown) == null || $.call(u, x);
    }, C = [we.root, p ? we.disabled : "", m ?? ""].filter(Boolean).join(" "), N = (t ?? ((H = h.current) == null ? void 0 : H.value) ?? "").trim().length > 0;
    return /* @__PURE__ */ d("div", { className: C, children: [
      i && /* @__PURE__ */ e("div", { className: we.slot, children: i }),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: h,
          className: we.textarea,
          value: t,
          onChange: w,
          onKeyDown: k,
          placeholder: _,
          disabled: p,
          rows: 1,
          ...u
        }
      ),
      l && /* @__PURE__ */ e("div", { className: we.slot, children: l }),
      a && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: we.sendButton,
          onClick: B,
          disabled: p || !N,
          "aria-label": "Send message",
          children: /* @__PURE__ */ e(ud, {})
        }
      )
    ] });
  }
);
hd.displayName = "ChatInput";
const pd = "_list_u1347_1", md = "_empty_u1347_7", fd = "_item_u1347_14", bd = "_active_u1347_38", gd = "_avatarWrapper_u1347_46", vd = "_avatar_u1347_46", wd = "_avatarFallback_u1347_61", $d = "_onlineDot_u1347_74", kd = "_info_u1347_85", yd = "_topRow_u1347_93", Nd = "_name_u1347_100", xd = "_time_u1347_109", Bd = "_lastMessage_u1347_116", Ld = "_unread_u1347_125", T = {
  list: pd,
  empty: md,
  item: fd,
  active: bd,
  avatarWrapper: gd,
  avatar: vd,
  avatarFallback: wd,
  onlineDot: $d,
  info: kd,
  topRow: yd,
  name: Nd,
  time: xd,
  lastMessage: Bd,
  unread: Ld
}, $u = ({
  conversations: t,
  activeId: o,
  onSelect: n,
  emptyText: s = "No conversations",
  className: r,
  ...i
}) => {
  const l = [T.list, r ?? ""].filter(Boolean).join(" ");
  return t.length === 0 ? /* @__PURE__ */ e("div", { className: l, ...i, children: /* @__PURE__ */ e("p", { className: T.empty, children: s }) }) : /* @__PURE__ */ e("div", { className: l, role: "listbox", "aria-label": "Conversations", ...i, children: t.map((a) => {
    const c = a.id === o, _ = [T.item, c ? T.active : ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        role: "option",
        "aria-selected": c,
        className: _,
        onClick: () => n == null ? void 0 : n(a.id),
        children: [
          /* @__PURE__ */ d("div", { className: T.avatarWrapper, children: [
            a.avatar ? /* @__PURE__ */ e("div", { className: T.avatar, children: a.avatar }) : /* @__PURE__ */ e("div", { className: T.avatarFallback, "aria-hidden": "true", children: a.name.charAt(0).toUpperCase() }),
            a.online && /* @__PURE__ */ e("span", { className: T.onlineDot, "aria-label": "Online" })
          ] }),
          /* @__PURE__ */ d("div", { className: T.info, children: [
            /* @__PURE__ */ d("div", { className: T.topRow, children: [
              /* @__PURE__ */ e("span", { className: T.name, children: a.name }),
              a.timestamp && /* @__PURE__ */ e("span", { className: T.time, children: a.timestamp })
            ] }),
            a.lastMessage && /* @__PURE__ */ e("p", { className: T.lastMessage, children: a.lastMessage })
          ] }),
          a.unread != null && a.unread > 0 && /* @__PURE__ */ e("span", { className: T.unread, "aria-label": `${a.unread} unread`, children: a.unread > 99 ? "99+" : a.unread })
        ]
      },
      a.id
    );
  }) });
}, jd = "_window_171g8_1", zd = "_header_171g8_11", Id = "_messages_171g8_15", Cd = "_footer_171g8_24", Fe = {
  window: jd,
  header: zd,
  messages: Id,
  footer: Cd
}, Wd = j.forwardRef(
  ({ header: t, footer: o, autoScroll: n = !0, children: s, className: r, ...i }, l) => {
    const a = A(null);
    ae(() => {
      n && a.current && (a.current.scrollTop = a.current.scrollHeight);
    }, [s, n]);
    const c = [Fe.window, r ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ d("div", { ref: l, className: c, ...i, children: [
      t && /* @__PURE__ */ e("div", { className: Fe.header, children: t }),
      /* @__PURE__ */ e("div", { ref: a, className: Fe.messages, children: s }),
      o && /* @__PURE__ */ e("div", { className: Fe.footer, children: o })
    ] });
  }
);
Wd.displayName = "ChatWindow";
const qd = "_header_1xu0b_1", Ed = "_left_1xu0b_12", Rd = "_backButton_1xu0b_20", Sd = "_avatarWrapper_1xu0b_45", Td = "_avatar_1xu0b_45", Dd = "_statusDot_1xu0b_60", Md = "_online_1xu0b_70", Fd = "_offline_1xu0b_74", Ad = "_away_1xu0b_78", Hd = "_info_1xu0b_82", Pd = "_title_1xu0b_88", Od = "_subtitle_1xu0b_97", Ud = "_actions_1xu0b_105", V = {
  header: qd,
  left: Ed,
  backButton: Rd,
  avatarWrapper: Sd,
  avatar: Td,
  statusDot: Dd,
  online: Md,
  offline: Fd,
  away: Ad,
  info: Hd,
  title: Pd,
  subtitle: Od,
  actions: Ud
};
function Vd() {
  return /* @__PURE__ */ d("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
    /* @__PURE__ */ e("polyline", { points: "12 19 5 12 12 5" })
  ] });
}
const ku = ({
  title: t,
  subtitle: o,
  avatar: n,
  status: s,
  actions: r,
  onBack: i,
  className: l,
  ...a
}) => {
  const c = [V.header, l ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: c, ...a, children: [
    /* @__PURE__ */ d("div", { className: V.left, children: [
      i && /* @__PURE__ */ e("button", { type: "button", className: V.backButton, onClick: i, "aria-label": "Go back", children: /* @__PURE__ */ e(Vd, {}) }),
      n && /* @__PURE__ */ d("div", { className: V.avatarWrapper, children: [
        /* @__PURE__ */ e("div", { className: V.avatar, children: n }),
        s && /* @__PURE__ */ e("span", { className: `${V.statusDot} ${V[s]}`, "aria-label": s })
      ] }),
      /* @__PURE__ */ d("div", { className: V.info, children: [
        /* @__PURE__ */ e("span", { className: V.title, children: t }),
        o && /* @__PURE__ */ e("span", { className: V.subtitle, children: o })
      ] })
    ] }),
    r && /* @__PURE__ */ e("div", { className: V.actions, children: r })
  ] });
}, Xd = "_indicator_1c024_1", Yd = "_dots_1c024_8", Kd = "_dot_1c024_8", Gd = "_text_1c024_34", $e = {
  indicator: Xd,
  dots: Yd,
  dot: Kd,
  text: Gd
};
function Jd(t) {
  return t.length === 0 ? "" : t.length === 1 ? `${t[0]} is typing` : t.length === 2 ? `${t[0]} and ${t[1]} are typing` : `${t[0]} and ${t.length - 1} others are typing`;
}
const yu = ({
  users: t = [],
  className: o,
  ...n
}) => {
  const s = [$e.indicator, o ?? ""].filter(Boolean).join(" "), r = Jd(t);
  return /* @__PURE__ */ d("div", { className: s, role: "status", "aria-label": r || "Someone is typing", ...n, children: [
    /* @__PURE__ */ d("span", { className: $e.dots, "aria-hidden": "true", children: [
      /* @__PURE__ */ e("span", { className: $e.dot }),
      /* @__PURE__ */ e("span", { className: $e.dot }),
      /* @__PURE__ */ e("span", { className: $e.dot })
    ] }),
    r && /* @__PURE__ */ e("span", { className: $e.text, children: r })
  ] });
}, Qd = "_timestamp_1ddjc_1", Zd = "_line_1ddjc_9", e_ = "_text_1ddjc_15", Ae = {
  timestamp: Qd,
  line: Zd,
  text: e_
}, Nu = ({
  children: t,
  className: o,
  ...n
}) => {
  const s = [Ae.timestamp, o ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: s, role: "separator", "aria-label": typeof t == "string" ? t : void 0, ...n, children: [
    /* @__PURE__ */ e("span", { className: Ae.line, "aria-hidden": "true" }),
    /* @__PURE__ */ e("span", { className: Ae.text, children: t }),
    /* @__PURE__ */ e("span", { className: Ae.line, "aria-hidden": "true" })
  ] });
}, t_ = "_reaction_1wf9z_1", n_ = "_active_1wf9z_25", o_ = "_emoji_1wf9z_35", s_ = "_count_1wf9z_40", He = {
  reaction: t_,
  active: n_,
  emoji: o_,
  count: s_
}, r_ = j.forwardRef(
  ({ emoji: t, count: o = 1, active: n = !1, className: s, ...r }, i) => {
    const l = [
      He.reaction,
      n ? He.active : "",
      s ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ d(
      "button",
      {
        ref: i,
        type: "button",
        className: l,
        "aria-pressed": n,
        "aria-label": `${t} ${o}`,
        ...r,
        children: [
          /* @__PURE__ */ e("span", { className: He.emoji, children: t }),
          /* @__PURE__ */ e("span", { className: He.count, children: o })
        ]
      }
    );
  }
);
r_.displayName = "ChatReaction";
const a_ = "_attachment_hawg9_1", i_ = "_file_hawg9_9", l_ = "_video_hawg9_10", c_ = "_audio_hawg9_11", d_ = "_icon_hawg9_18", __ = "_info_hawg9_30", u_ = "_fileName_hawg9_38", h_ = "_fileSize_hawg9_47", p_ = "_downloadButton_hawg9_52", m_ = "_image_hawg9_78", f_ = "_imageButton_hawg9_86", te = {
  attachment: a_,
  file: i_,
  video: l_,
  audio: c_,
  icon: d_,
  info: __,
  fileName: u_,
  fileSize: h_,
  downloadButton: p_,
  image: m_,
  imageButton: f_
};
function ut() {
  return /* @__PURE__ */ d("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" })
  ] });
}
function b_() {
  return /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("polygon", { points: "5 3 19 12 5 21 5 3" }) });
}
function g_() {
  return /* @__PURE__ */ d("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M9 18V5l12-2v13" }),
    /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
    /* @__PURE__ */ e("circle", { cx: "18", cy: "16", r: "3" })
  ] });
}
function v_() {
  return /* @__PURE__ */ d("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ e("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] });
}
const w_ = {
  file: ut,
  video: b_,
  audio: g_
}, xu = ({
  variant: t = "file",
  src: o,
  fileName: n,
  fileSize: s,
  onDownload: r,
  onPreview: i,
  className: l,
  ...a
}) => {
  const c = [te.attachment, te[t], l ?? ""].filter(Boolean).join(" ");
  if (t === "image" && o)
    return /* @__PURE__ */ e("div", { className: c, ...a, children: /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: te.imageButton,
        onClick: i,
        "aria-label": n ? `Preview ${n}` : "Preview image",
        children: /* @__PURE__ */ e("img", { src: o, alt: n ?? "Attachment", className: te.image, loading: "lazy" })
      }
    ) });
  const _ = w_[t] ?? ut;
  return /* @__PURE__ */ d("div", { className: c, ...a, children: [
    /* @__PURE__ */ e("span", { className: te.icon, "aria-hidden": "true", children: /* @__PURE__ */ e(_, {}) }),
    /* @__PURE__ */ d("div", { className: te.info, children: [
      /* @__PURE__ */ e("span", { className: te.fileName, children: n ?? "File" }),
      s && /* @__PURE__ */ e("span", { className: te.fileSize, children: s })
    ] }),
    r && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: te.downloadButton,
        onClick: r,
        "aria-label": `Download ${n ?? "file"}`,
        children: /* @__PURE__ */ e(v_, {})
      }
    )
  ] });
}, $_ = "_status_1h1yp_1", k_ = "_dot_1h1yp_8", y_ = "_label_1h1yp_14", N_ = "_sm_1h1yp_20", x_ = "_md_1h1yp_25", B_ = "_lg_1h1yp_30", L_ = "_online_1h1yp_36", j_ = "_offline_1h1yp_40", z_ = "_away_1h1yp_44", I_ = "_busy_1h1yp_48", C_ = "_dnd_1h1yp_52", W_ = "_pulse_1h1yp_57", q_ = "_statusPulse_1h1yp_1", ke = {
  status: $_,
  dot: k_,
  label: y_,
  sm: N_,
  md: x_,
  lg: B_,
  online: L_,
  offline: j_,
  away: z_,
  busy: I_,
  dnd: C_,
  pulse: W_,
  statusPulse: q_
}, ot = {
  online: "Online",
  offline: "Offline",
  away: "Away",
  busy: "Busy",
  dnd: "Do not disturb"
}, Bu = ({
  variant: t = "offline",
  size: o = "md",
  showLabel: n = !1,
  pulse: s = !1,
  className: r,
  ...i
}) => {
  const l = [
    ke.status,
    ke[t],
    ke[o],
    s && t === "online" ? ke.pulse : "",
    r ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("span", { className: l, role: "status", "aria-label": ot[t], ...i, children: [
    /* @__PURE__ */ e("span", { className: ke.dot, "aria-hidden": "true" }),
    n && /* @__PURE__ */ e("span", { className: ke.label, children: ot[t] })
  ] });
}, E_ = "_thread_fnasz_1", R_ = "_summary_fnasz_7", S_ = "_participants_fnasz_30", T_ = "_participant_fnasz_30", D_ = "_replyText_fnasz_50", M_ = "_lastReply_fnasz_57", F_ = "_content_fnasz_63", A_ = "_expanded_fnasz_70", re = {
  thread: E_,
  summary: R_,
  participants: S_,
  participant: T_,
  replyText: D_,
  lastReply: M_,
  content: F_,
  expanded: A_
};
function H_({ expanded: t }) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: { transition: "transform 0.2s", transform: t ? "rotate(90deg)" : "rotate(0deg)" },
      children: /* @__PURE__ */ e("polyline", { points: "9 18 15 12 9 6" })
    }
  );
}
const Lu = ({
  replyCount: t = 0,
  lastReplyTimestamp: o,
  participants: n = [],
  expanded: s = !1,
  onToggle: r,
  children: i,
  className: l,
  ...a
}) => {
  const c = [re.thread, s ? re.expanded : "", l ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ d("div", { className: c, ...a, children: [
    /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        className: re.summary,
        onClick: r,
        "aria-expanded": s,
        children: [
          n.length > 0 && /* @__PURE__ */ e("div", { className: re.participants, children: n.slice(0, 3).map((_, p) => /* @__PURE__ */ e("span", { className: re.participant, "aria-hidden": "true", children: _ }, p)) }),
          /* @__PURE__ */ e("span", { className: re.replyText, children: t === 1 ? "1 reply" : `${t} replies` }),
          o && /* @__PURE__ */ d("span", { className: re.lastReply, children: [
            "Last reply ",
            o
          ] }),
          /* @__PURE__ */ e(H_, { expanded: s })
        ]
      }
    ),
    s && i && /* @__PURE__ */ e("div", { className: re.content, children: i })
  ] });
};
export {
  eu as Accordion,
  tu as Alert,
  Y_ as AnimatedBackground,
  lu as Avatar,
  X_ as Badge,
  _u as Breadcrumb,
  St as Button,
  Oe as Card,
  xu as ChatAttachment,
  wu as ChatBubble,
  ku as ChatHeader,
  hd as ChatInput,
  $u as ChatList,
  r_ as ChatReaction,
  Bu as ChatStatus,
  Lu as ChatThread,
  Nu as ChatTimestamp,
  Wd as ChatWindow,
  Ls as Checkbox,
  Ue as Dialog,
  nu as Divider,
  mu as Dropdown,
  du as EmptyState,
  gu as FileUpload,
  K_ as GradientOrbs,
  G_ as GridGlow,
  ln as Input,
  bu as NumberInput,
  uu as Pagination,
  pu as Popover,
  ru as Progress,
  J_ as RadioGroup,
  fs as Select,
  su as Skeleton,
  fu as Slider,
  ou as Spinner,
  hu as Stepper,
  tr as Switch,
  vu as Table,
  Z_ as Tabs,
  cu as Tag,
  Po as Textarea,
  V_ as Title,
  au as ToastProvider,
  Q_ as Tooltip,
  yu as TypingIndicator,
  iu as useToast
};
