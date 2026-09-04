"use client";
import { jsxs as _, jsx as e, Fragment as dt } from "react/jsx-runtime";
import k, { useId as J, useRef as O, useEffect as oe, useState as K, useCallback as Ie, useContext as jt, createContext as Bt } from "react";
import { createPortal as nt } from "react-dom";
const Lt = "_button_k9fti_1", Ct = "_loading_k9fti_40", It = "_sm_k9fti_47", Et = "_md_k9fti_53", Dt = "_lg_k9fti_59", Wt = "_primary_k9fti_66", Tt = "_secondary_k9fti_82", qt = "_outline_k9fti_95", St = "_ghost_k9fti_108", Rt = "_danger_k9fti_120", Mt = "_soft_k9fti_133", Ft = "_iconOnly_k9fti_142", zt = "_fullWidth_k9fti_147", At = "_pulse_k9fti_153", Ot = "_buttonPulse_k9fti_1", Ht = "_shine_k9fti_157", Pt = "_buttonShine_k9fti_1", Ut = "_spinner_k9fti_172", Kt = "_spin_k9fti_172", ce = {
  button: Lt,
  loading: Ct,
  sm: It,
  md: Et,
  lg: Dt,
  primary: Wt,
  secondary: Tt,
  outline: qt,
  ghost: St,
  danger: Rt,
  soft: Mt,
  iconOnly: Ft,
  fullWidth: zt,
  pulse: At,
  buttonPulse: Ot,
  shine: Ht,
  buttonShine: Pt,
  spinner: Ut,
  spin: Kt
}, Vt = k.forwardRef(
  ({
    variant: t = "primary",
    size: o = "md",
    animation: n = "none",
    loading: s = !1,
    fullWidth: a = !1,
    iconOnly: i = !1,
    leftIcon: c,
    rightIcon: r,
    children: d,
    className: l,
    disabled: u,
    ...b
  }, p) => {
    const v = [
      ce.button,
      ce[t],
      ce[o],
      n !== "none" ? ce[n] : "",
      a ? ce.fullWidth : "",
      i ? ce.iconOnly : "",
      s ? ce.loading : "",
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ _(
      "button",
      {
        ref: p,
        className: v,
        disabled: u || s,
        "aria-busy": s,
        ...b,
        children: [
          s && /* @__PURE__ */ e("span", { className: ce.spinner, "aria-hidden": "true" }),
          !s && c && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: c }),
          !(i && s) && d,
          !s && r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r })
        ]
      }
    );
  }
);
Vt.displayName = "Button";
const Gt = "_wrapper_1jhq3_1", Xt = "_label_1jhq3_15", Yt = "_required_1jhq3_29", Jt = "_inputWrapper_1jhq3_39", Qt = "_input_1jhq3_39", Zt = "_error_1jhq3_85", en = "_iconLeft_1jhq3_86", tn = "_iconRight_1jhq3_86", nn = "_inputGroup_1jhq3_87", on = "_addon_1jhq3_90", sn = "_groupError_1jhq3_94", rn = "_groupDisabled_1jhq3_96", an = "_inputFloating_1jhq3_97", ln = "_sm_1jhq3_98", cn = "_md_1jhq3_99", dn = "_lg_1jhq3_100", _n = "_floatingLabelEl_1jhq3_103", un = "_hasLeft_1jhq3_184", hn = "_hasRight_1jhq3_192", pn = "_hint_1jhq3_240", mn = "_errorText_1jhq3_252", fn = "_floatingWrapper_1jhq3_268", bn = "_floatingLabelSm_1jhq3_348", vn = "_floatingLabelMd_1jhq3_350", gn = "_floatingLabelLg_1jhq3_352", yn = "_floatingLabelWithLeft_1jhq3_358", $n = "_floatingLabelError_1jhq3_398", L = {
  wrapper: Gt,
  label: Xt,
  required: Yt,
  inputWrapper: Jt,
  input: Qt,
  error: Zt,
  iconLeft: en,
  iconRight: tn,
  inputGroup: nn,
  addon: on,
  groupError: sn,
  groupDisabled: rn,
  inputFloating: an,
  sm: ln,
  md: cn,
  lg: dn,
  floatingLabelEl: _n,
  hasLeft: un,
  hasRight: hn,
  hint: pn,
  errorText: mn,
  floatingWrapper: fn,
  floatingLabelSm: bn,
  floatingLabelMd: vn,
  floatingLabelLg: gn,
  floatingLabelWithLeft: yn,
  floatingLabelError: $n
}, wn = () => /* @__PURE__ */ e("svg", { width: "16", height: "16", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
  }
) }), kn = k.forwardRef(
  ({
    label: t,
    size: o = "md",
    error: n,
    hint: s,
    leftIcon: a,
    rightIcon: i,
    leadingAddon: c,
    trailingAddon: r,
    search: d = !1,
    searchIcon: l,
    searchIconPosition: u = "left",
    leftIconClassName: b,
    rightIconClassName: p,
    required: v,
    fullWidth: y,
    floatingLabel: h,
    className: j,
    id: g,
    placeholder: x,
    "aria-describedby": N,
    ...m
  }, $) => {
    const w = J(), E = g ?? w, I = E ? `${E}-error` : void 0, F = E ? `${E}-hint` : void 0, z = c != null || r != null, Q = d || !!l, be = l ?? /* @__PURE__ */ e(wn, {});
    let G = a, D = i, ve = !1, ge = !1;
    Q && (u === "right" ? D || (D = be, ge = !0) : G || (G = be, ve = !0));
    const Re = [
      L.input,
      L[o],
      h ? L.inputFloating : "",
      n ? L.error : "",
      G ? L.hasLeft : "",
      D ? L.hasRight : "",
      j ?? ""
    ].filter(Boolean).join(" "), Ee = [
      L.floatingLabelEl,
      L[`floatingLabel${o.charAt(0).toUpperCase() + o.slice(1)}`],
      G ? L.floatingLabelWithLeft : "",
      n ? L.floatingLabelError : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ _("div", { className: L.wrapper, children: [
      t && !h && /* @__PURE__ */ _("label", { htmlFor: E, className: L.label, children: [
        t,
        v && /* @__PURE__ */ e("span", { className: L.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ _("div", { className: z ? [L.inputGroup, L[o], n ? L.groupError : "", m.disabled ? L.groupDisabled : ""].filter(Boolean).join(" ") : void 0, children: [
        c != null && /* @__PURE__ */ e("span", { id: `${E}-leading`, className: L.addon, children: c }),
        /* @__PURE__ */ _(
          "div",
          {
            className: `${L.inputWrapper}${h ? ` ${L.floatingWrapper}` : ""}`,
            children: [
              G && /* @__PURE__ */ e(
                "span",
                {
                  className: [L.iconLeft, b ?? ""].filter(Boolean).join(" "),
                  "data-slot": "left-icon",
                  "data-search-icon": ve ? "true" : void 0,
                  "aria-hidden": "true",
                  children: G
                }
              ),
              /* @__PURE__ */ e(
                "input",
                {
                  ref: $,
                  id: E,
                  className: Re,
                  required: v,
                  "aria-invalid": !!n,
                  "aria-describedby": [N, n ? I : null, s && !n ? F : null, c != null ? `${E}-leading` : null, r != null ? `${E}-trailing` : null].filter(Boolean).join(" ") || void 0,
                  placeholder: h ? " " : x,
                  ...m
                }
              ),
              t && h && /* @__PURE__ */ _("label", { htmlFor: E, className: Ee, children: [
                t,
                v && /* @__PURE__ */ e("span", { className: L.required, "aria-hidden": "true", children: "*" })
              ] }),
              D && /* @__PURE__ */ e(
                "span",
                {
                  className: [L.iconRight, p ?? ""].filter(Boolean).join(" "),
                  "data-slot": "right-icon",
                  "data-search-icon": ge ? "true" : void 0,
                  "aria-hidden": "true",
                  children: D
                }
              )
            ]
          }
        ),
        r != null && /* @__PURE__ */ e("span", { id: `${E}-trailing`, className: L.addon, children: r })
      ] }),
      n && /* @__PURE__ */ e("span", { id: I, className: L.errorText, role: "alert", children: n }),
      s && !n && /* @__PURE__ */ e("span", { id: F, className: L.hint, children: s })
    ] });
  }
);
kn.displayName = "Input";
const Nn = "_title_3f7c8_1", xn = "_xs_3f7c8_17", jn = "_sm_3f7c8_27", Bn = "_md_3f7c8_37", Ln = "_lg_3f7c8_47", Cn = "_xl_3f7c8_57", In = "_xxl_3f7c8_67", En = "_light_3f7c8_79", Dn = "_normal_3f7c8_87", Wn = "_medium_3f7c8_95", Tn = "_semibold_3f7c8_103", qn = "_bold_3f7c8_111", Sn = "_extrabold_3f7c8_119", Rn = "_left_3f7c8_129", Mn = "_center_3f7c8_137", Fn = "_right_3f7c8_145", zn = "_muted_3f7c8_163", An = "_primary_3f7c8_171", On = "_gradient_3f7c8_179", We = {
  title: Nn,
  xs: xn,
  sm: jn,
  md: Bn,
  lg: Ln,
  xl: Cn,
  xxl: In,
  light: En,
  normal: Dn,
  medium: Wn,
  semibold: Tn,
  bold: qn,
  extrabold: Sn,
  left: Rn,
  center: Mn,
  right: Fn,
  default: "_default_3f7c8_155",
  muted: zn,
  primary: An,
  gradient: On
}, Hn = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs"
}, Bu = ({
  as: t,
  level: o = "h1",
  size: n,
  weight: s = "bold",
  align: a = "left",
  color: i = "default",
  children: c,
  className: r,
  ...d
}) => {
  const l = t ?? o, u = n ?? Hn[l], b = [
    We.title,
    We[u],
    We[s],
    We[a],
    We[i],
    r ?? ""
  ].filter(Boolean).join(" ");
  return k.createElement(l, { className: b, ...d }, c);
}, Pn = "_badge_1ts0m_1", Un = "_sm_1ts0m_47", Kn = "_md_1ts0m_57", Vn = "_lg_1ts0m_67", Gn = "_info_1ts0m_91", Xn = "_success_1ts0m_103", Yn = "_warning_1ts0m_115", Jn = "_danger_1ts0m_127", Qn = "_primary_1ts0m_139", Zn = "_soft_1ts0m_152", eo = "_outline_1ts0m_153", to = "_solid_1ts0m_154", no = "_dot_1ts0m_155", oo = "_pulse_1ts0m_171", so = "_badgePulse_1ts0m_1", ro = "_badgeDotPulse_1ts0m_1", ao = "_shine_1ts0m_187", io = "_badgeShine_1ts0m_1", $e = {
  badge: Pn,
  sm: Un,
  md: Kn,
  lg: Vn,
  default: "_default_1ts0m_79",
  info: Gn,
  success: Xn,
  warning: Yn,
  danger: Jn,
  primary: Qn,
  soft: Zn,
  outline: eo,
  solid: to,
  dot: no,
  pulse: oo,
  badgePulse: so,
  badgeDotPulse: ro,
  shine: ao,
  badgeShine: io
}, Lu = ({
  variant: t = "default",
  size: o = "md",
  animation: n = "none",
  dot: s = !1,
  appearance: a,
  leftIcon: i,
  children: c,
  className: r,
  ...d
}) => {
  const l = [
    $e.badge,
    $e[t],
    $e[o],
    a ? $e[a] : "",
    n !== "none" ? $e[n] : "",
    r ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("span", { className: l, ...d, children: [
    s && /* @__PURE__ */ e("span", { className: $e.dot, "aria-hidden": "true" }),
    !s && i && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: i }),
    c
  ] });
}, lo = "_card_xtxrh_1", co = "_bordered_xtxrh_22", _o = "_shadow_xtxrh_29", uo = "_elevated_xtxrh_37", ho = "_ghost_xtxrh_45", po = "_sm_xtxrh_57", mo = "_cardHeader_xtxrh_57", fo = "_cardBody_xtxrh_59", bo = "_cardFooter_xtxrh_61", vo = "_md_xtxrh_69", go = "_lg_xtxrh_81", yo = "_hoverable_xtxrh_142", fe = {
  card: lo,
  bordered: co,
  shadow: _o,
  elevated: uo,
  ghost: ho,
  sm: po,
  cardHeader: mo,
  cardBody: fo,
  cardFooter: bo,
  md: vo,
  lg: go,
  hoverable: yo
}, _t = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${fe.cardHeader} ${o ?? ""}`, ...n, children: t });
_t.displayName = "Card.Header";
const ut = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${fe.cardBody} ${o ?? ""}`, ...n, children: t });
ut.displayName = "Card.Body";
const ht = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${fe.cardFooter} ${o ?? ""}`, ...n, children: t });
ht.displayName = "Card.Footer";
const $o = ({
  variant: t = "bordered",
  size: o = "md",
  hoverable: n = !1,
  children: s,
  className: a,
  ...i
}) => {
  const c = [
    fe.card,
    fe[t],
    fe[o],
    n ? fe.hoverable : "",
    a ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: c, ...i, children: s });
}, Xe = $o;
Xe.Header = _t;
Xe.Body = ut;
Xe.Footer = ht;
Xe.displayName = "Card";
const wo = "_root_1ns2c_1", ko = "_background_1ns2c_23", No = "_interactive_1ns2c_37", xo = "_content_1ns2c_45", Oe = {
  root: wo,
  background: ko,
  interactive: No,
  content: xo
}, jo = {
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
}, Bo = {
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
}, Cu = ({
  background: t,
  contentClassName: o,
  intensity: n = "medium",
  speed: s = "medium",
  interactive: a = !1,
  className: i,
  style: c,
  children: r,
  ...d
}) => {
  const l = [
    Oe.root,
    a ? Oe.interactive : "",
    i ?? ""
  ].filter(Boolean).join(" "), u = [Oe.content, o ?? ""].filter(Boolean).join(" "), b = {
    ...jo[n],
    ...Bo[s],
    ...c
  };
  return /* @__PURE__ */ _("div", { className: l, style: b, ...d, children: [
    t ? /* @__PURE__ */ e("div", { className: Oe.background, children: t }) : null,
    /* @__PURE__ */ e("div", { className: u, children: r })
  ] });
}, Lo = "_root_do658_1", Co = "_orb_do658_15", Io = "_floatOrb_do658_1", Eo = "_primary_do658_37", Do = "_secondary_do658_49", Wo = "_accent_do658_65", To = "_highlight_do658_79", qo = "_hero_do658_95", So = "_diagonal_do658_135", Ro = "_spotlight_do658_175", Z = {
  root: Lo,
  orb: Co,
  floatOrb: Io,
  primary: Eo,
  secondary: Do,
  accent: Wo,
  highlight: To,
  hero: qo,
  diagonal: So,
  spotlight: Ro
}, Iu = ({
  variant: t = "hero",
  className: o,
  ...n
}) => {
  const s = [Z.root, Z[t], o ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: s, "aria-hidden": "true", ...n, children: [
    /* @__PURE__ */ e("span", { className: `${Z.orb} ${Z.primary}` }),
    /* @__PURE__ */ e("span", { className: `${Z.orb} ${Z.secondary}` }),
    /* @__PURE__ */ e("span", { className: `${Z.orb} ${Z.accent}` }),
    /* @__PURE__ */ e("span", { className: `${Z.orb} ${Z.highlight}` })
  ] });
}, Mo = "_root_11m7a_1", Fo = "_grid_11m7a_17", zo = "_glow_11m7a_19", Ao = "_beam_11m7a_21", Oo = "_sweepBeam_11m7a_1", Ho = "_spotlight_11m7a_97", Po = "_panel_11m7a_113", Te = {
  root: Mo,
  grid: Fo,
  glow: zo,
  beam: Ao,
  sweepBeam: Oo,
  default: "_default_11m7a_89",
  spotlight: Ho,
  panel: Po
}, Eu = ({
  variant: t = "default",
  className: o,
  ...n
}) => {
  const s = [Te.root, Te[t], o ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: s, "aria-hidden": "true", ...n, children: [
    /* @__PURE__ */ e("span", { className: Te.grid }),
    /* @__PURE__ */ e("span", { className: Te.glow }),
    /* @__PURE__ */ e("span", { className: Te.beam })
  ] });
}, Uo = "_wrapper_frjg1_1", Ko = "_wrapperFullWidth_frjg1_13", Vo = "_label_frjg1_21", Go = "_required_frjg1_35", Xo = "_textarea_frjg1_45", Yo = "_hasError_frjg1_105", Jo = "_sm_frjg1_123", Qo = "_md_frjg1_133", Zo = "_lg_frjg1_143", es = "_none_frjg1_155", ts = "_vertical_frjg1_163", ns = "_horizontal_frjg1_171", os = "_both_frjg1_179", ss = "_fullWidth_frjg1_187", rs = "_hint_frjg1_195", as = "_errorText_frjg1_207", X = {
  wrapper: Uo,
  wrapperFullWidth: Ko,
  label: Vo,
  required: Go,
  textarea: Xo,
  hasError: Yo,
  sm: Jo,
  md: Qo,
  lg: Zo,
  none: es,
  vertical: ts,
  horizontal: ns,
  both: os,
  fullWidth: ss,
  hint: rs,
  errorText: as
}, is = k.forwardRef(
  ({
    label: t,
    size: o = "md",
    error: n,
    hint: s,
    required: a,
    fullWidth: i = !1,
    resize: c = "vertical",
    className: r,
    id: d,
    ...l
  }, u) => {
    const b = J(), p = d ?? b, v = p ? `${p}-error` : void 0, y = p ? `${p}-hint` : void 0, h = [
      X.textarea,
      X[o],
      X[c],
      n ? X.hasError : "",
      i ? X.fullWidth : "",
      r ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ _("div", { className: `${X.wrapper}${i ? ` ${X.wrapperFullWidth}` : ""}`, children: [
      t && /* @__PURE__ */ _("label", { htmlFor: p, className: X.label, children: [
        t,
        a && /* @__PURE__ */ e("span", { className: X.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: u,
          id: p,
          className: h,
          required: a,
          "aria-invalid": !!n,
          "aria-describedby": [n ? v : null, s && !n ? y : null].filter(Boolean).join(" ") || void 0,
          ...l
        }
      ),
      n && /* @__PURE__ */ e("span", { id: v, className: X.errorText, role: "alert", children: n }),
      s && !n && /* @__PURE__ */ e("span", { id: y, className: X.hint, children: s })
    ] });
  }
);
is.displayName = "Textarea";
const ls = "_wrapper_6isev_1", cs = "_wrapperFullWidth_6isev_7", ds = "_label_6isev_11", _s = "_required_6isev_18", us = "_selectWrapper_6isev_23", hs = "_hiddenSelect_6isev_31", ps = "_trigger_6isev_38", ms = "_hasError_6isev_87", fs = "_sm_6isev_96", bs = "_md_6isev_102", vs = "_lg_6isev_108", gs = "_fullWidth_6isev_114", ys = "_valueText_6isev_118", $s = "_placeholder_6isev_128", ws = "_chevron_6isev_132", ks = "_isOpen_6isev_166", Ns = "_menu_6isev_170", xs = "_option_6isev_187", js = "_optionFocused_6isev_208", Bs = "_optionSelected_6isev_212", Ls = "_optionLabel_6isev_218", Cs = "_optionIcon_6isev_225", Is = "_optionDescription_6isev_226", Es = "_optionCheck_6isev_228", Ds = "_optionCheckVisible_6isev_239", Ws = "_hint_6isev_249", Ts = "_errorText_6isev_255", C = {
  wrapper: ls,
  wrapperFullWidth: cs,
  label: ds,
  required: _s,
  selectWrapper: us,
  hiddenSelect: hs,
  trigger: ps,
  hasError: ms,
  sm: fs,
  md: bs,
  lg: vs,
  fullWidth: gs,
  valueText: ys,
  placeholder: $s,
  chevron: ws,
  isOpen: ks,
  menu: Ns,
  option: xs,
  optionFocused: js,
  optionSelected: Bs,
  optionLabel: Ls,
  optionIcon: Cs,
  optionDescription: Is,
  optionCheck: Es,
  optionCheckVisible: Ds,
  hint: Ws,
  errorText: Ts
};
function qs(t) {
  return k.Children.toArray(t).flatMap((o) => {
    if (!k.isValidElement(o) || o.type !== "option")
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
const Ss = k.forwardRef(
  ({
    label: t,
    size: o = "md",
    error: n,
    hint: s,
    required: a,
    fullWidth: i = !1,
    options: c,
    placeholder: r,
    className: d,
    id: l,
    children: u,
    value: b,
    defaultValue: p,
    onChange: v,
    onBlur: y,
    onFocus: h,
    onKeyDown: j,
    disabled: g,
    name: x,
    autoComplete: N,
    form: m,
    "aria-label": $,
    "aria-labelledby": w,
    "aria-describedby": E,
    ...I
  }, F) => {
    const z = k.useRef(null), Q = k.useRef(null), be = k.useId(), G = k.useRef(null);
    k.useImperativeHandle(F, () => z.current);
    const D = l ?? `vui-select-${be.replace(/:/g, "")}`, ve = D ? `${D}-error` : void 0, ge = D ? `${D}-hint` : void 0, Re = D ? `${D}-listbox` : void 0, Ee = D ? `${D}-label` : void 0, $t = [E, n ? ve : s ? ge : void 0].filter(Boolean).join(" ") || void 0, T = k.useMemo(
      () => c || qs(u),
      [u, c]
    ), ye = b !== void 0, Je = T.find((f) => !f.disabled), Me = String(
      p ?? (r ? "" : Je?.value ?? "")
    ), [Fe, Qe] = k.useState(Me), ze = String(ye ? b ?? "" : Fe), [se, re] = k.useState(!1), [he, De] = k.useState(-1);
    k.useEffect(() => {
      const f = z.current?.form;
      if (!f || ye) return;
      const B = (q) => {
        queueMicrotask(() => {
          q.defaultPrevented || !z.current || (Qe(Me), z.current.value = Me, re(!1));
        });
      };
      return f.addEventListener("reset", B), () => f.removeEventListener("reset", B);
    }, [m, ye, Me]), k.useEffect(() => {
      if (ye || !T.length) return;
      !T.some((B) => B.value === Fe) && !(r && Fe === "") && Qe(Je?.value ?? "");
    }, [T, ye, Fe, Je, r]), k.useEffect(() => {
      const f = (B) => {
        G.current && !G.current.contains(B.target) && re(!1);
      };
      return document.addEventListener("mousedown", f), () => document.removeEventListener("mousedown", f);
    }, []);
    const Ae = T.find((f) => f.value === ze), wt = Ae?.label ?? r ?? "", kt = [
      C.trigger,
      C[o],
      n ? C.hasError : "",
      i ? C.fullWidth : "",
      se ? C.isOpen : "",
      d ?? ""
    ].filter(Boolean).join(" "), ot = (f) => {
      ye || Qe(f);
      const B = z.current;
      B && (Object.getOwnPropertyDescriptor(
        HTMLSelectElement.prototype,
        "value"
      )?.set?.call(B, f), B.dispatchEvent(new Event("change", { bubbles: !0 })));
    }, Ze = () => {
      if (g || !T.length) return;
      re(!0);
      const f = T.findIndex(
        (q) => q.value === ze && !q.disabled
      );
      if (f >= 0) {
        De(f);
        return;
      }
      const B = T.findIndex((q) => !q.disabled);
      De(B);
    }, st = (f) => {
      if (!T.length) return;
      let B = he;
      for (let q = 0; q < T.length; q += 1)
        if (B = (B + f + T.length) % T.length, !T[B].disabled) {
          De(B);
          return;
        }
    }, Nt = (f) => {
      if (j?.(f), !f.defaultPrevented) {
        if (!se && (f.key === "ArrowDown" || f.key === "ArrowUp")) {
          f.preventDefault(), Ze();
          return;
        }
        if (!se && (f.key === "Enter" || f.key === " ")) {
          f.preventDefault(), Ze();
          return;
        }
        if (se) {
          if (f.key === "Tab") {
            re(!1);
            return;
          }
          if (f.key === "Home" || f.key === "End") {
            f.preventDefault();
            const B = T.map((q, et) => q.disabled ? -1 : et).filter((q) => q >= 0);
            De(
              f.key === "Home" ? B[0] ?? -1 : B[B.length - 1] ?? -1
            );
            return;
          }
          if (f.key === "Escape") {
            f.preventDefault(), re(!1);
            return;
          }
          if (f.key === "ArrowDown") {
            f.preventDefault(), st(1);
            return;
          }
          if (f.key === "ArrowUp") {
            f.preventDefault(), st(-1);
            return;
          }
          (f.key === "Enter" || f.key === " ") && (f.preventDefault(), he >= 0 && !T[he].disabled && (ot(T[he].value), re(!1)));
        }
      }
    };
    return /* @__PURE__ */ _("div", { className: `${C.wrapper}${i ? ` ${C.wrapperFullWidth}` : ""}`, children: [
      t && /* @__PURE__ */ _("label", { id: Ee, htmlFor: `${D}-trigger`, className: C.label, children: [
        t,
        a && /* @__PURE__ */ e("span", { className: C.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ _("div", { className: C.selectWrapper, ref: G, children: [
        /* @__PURE__ */ _(
          "select",
          {
            ref: z,
            id: D,
            className: C.hiddenSelect,
            value: ze,
            required: a,
            disabled: g,
            name: x,
            form: m,
            autoComplete: N,
            "aria-invalid": !!n,
            "aria-describedby": [n ? ve : null, s && !n ? ge : null].filter(Boolean).join(" ") || void 0,
            "aria-hidden": "true",
            tabIndex: -1,
            onChange: v ?? (() => {
            }),
            onFocus: () => Q.current?.focus(),
            ...I,
            children: [
              r && /* @__PURE__ */ e("option", { value: "", disabled: a, children: r }),
              T.map((f) => /* @__PURE__ */ e("option", { value: f.value, disabled: f.disabled, children: f.label }, f.value))
            ]
          }
        ),
        /* @__PURE__ */ _(
          "button",
          {
            ref: Q,
            id: `${D}-trigger`,
            type: "button",
            className: kt,
            disabled: g,
            role: "combobox",
            "aria-invalid": !!n,
            "aria-label": $,
            "aria-labelledby": w || (t ? Ee : void 0),
            "aria-describedby": $t,
            "aria-required": a || void 0,
            "aria-haspopup": "listbox",
            "aria-expanded": se,
            "aria-controls": se ? Re : void 0,
            "aria-activedescendant": se && he >= 0 ? `${D}-option-${he}` : void 0,
            onClick: () => se ? re(!1) : Ze(),
            onKeyDown: Nt,
            onFocus: (f) => h?.(f),
            onBlur: (f) => {
              y?.(f), G.current?.contains(f.relatedTarget) || re(!1);
            },
            children: [
              Ae?.icon && /* @__PURE__ */ e("span", { className: C.optionIcon, "aria-hidden": "true", children: Ae.icon }),
              /* @__PURE__ */ e(
                "span",
                {
                  className: `${C.valueText}${Ae ? "" : ` ${C.placeholder}`}`,
                  children: wt
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: C.chevron, "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
          }
        ) }) }),
        se && /* @__PURE__ */ e(
          "ul",
          {
            id: Re,
            role: "listbox",
            "aria-label": $,
            "aria-labelledby": w || (t ? Ee : void 0),
            className: C.menu,
            children: T.map((f, B) => {
              const q = f.value === ze, et = B === he;
              return /* @__PURE__ */ e("li", { role: "presentation", children: /* @__PURE__ */ _(
                "button",
                {
                  type: "button",
                  role: "option",
                  id: `${D}-option-${B}`,
                  tabIndex: -1,
                  "aria-selected": q,
                  "aria-label": f.label,
                  "aria-describedby": f.description ? `${D}-option-${B}-description` : void 0,
                  className: [
                    C.option,
                    q ? C.optionSelected : "",
                    et ? C.optionFocused : ""
                  ].filter(Boolean).join(" "),
                  disabled: f.disabled,
                  onMouseEnter: () => {
                    f.disabled || De(B);
                  },
                  onMouseDown: (xt) => xt.preventDefault(),
                  onClick: () => {
                    ot(f.value), re(!1), Q.current?.focus();
                  },
                  children: [
                    f.icon && /* @__PURE__ */ e("span", { className: C.optionIcon, "aria-hidden": "true", children: f.icon }),
                    /* @__PURE__ */ _("span", { className: C.optionLabel, children: [
                      /* @__PURE__ */ e("span", { children: f.label }),
                      f.description && /* @__PURE__ */ e("span", { id: `${D}-option-${B}-description`, className: C.optionDescription, children: f.description })
                    ] }),
                    /* @__PURE__ */ e(
                      "span",
                      {
                        className: `${C.optionCheck}${q ? ` ${C.optionCheckVisible}` : ""}`,
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ e(
                          "svg",
                          {
                            width: "14",
                            height: "14",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /* @__PURE__ */ e(
                              "path",
                              {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2.25,
                                d: "M5 13l4 4L19 7"
                              }
                            )
                          }
                        )
                      }
                    )
                  ]
                }
              ) }, f.value);
            })
          }
        )
      ] }),
      n && /* @__PURE__ */ e("span", { id: ve, className: C.errorText, role: "alert", children: n }),
      s && !n && /* @__PURE__ */ e("span", { id: ge, className: C.hint, children: s })
    ] });
  }
);
Ss.displayName = "Select";
const Rs = "_wrapper_u1o1m_1", Ms = "_row_u1o1m_13", Fs = "_checkbox_u1o1m_27", zs = "_hasError_u1o1m_101", As = "_sm_u1o1m_119", Os = "_md_u1o1m_147", Hs = "_lg_u1o1m_175", Ps = "_label_u1o1m_203", Us = "_description_u1o1m_225", Ks = "_errorText_u1o1m_245", Vs = "_card_u1o1m_253", ee = {
  wrapper: Rs,
  row: Ms,
  checkbox: Fs,
  hasError: zs,
  sm: As,
  md: Os,
  lg: Hs,
  label: Ps,
  description: Us,
  errorText: Ks,
  card: Vs
}, Gs = k.forwardRef(
  ({ label: t, description: o, error: n, size: s = "md", variant: a = "default", className: i, id: c, ...r }, d) => {
    const l = J(), u = c ?? l, b = u ? `${u}-error` : void 0, p = u && o ? `${u}-desc` : void 0, v = [
      ee.checkbox,
      ee[s],
      n ? ee.hasError : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ _("label", { htmlFor: u, className: `${ee.wrapper} ${ee[s]} ${a === "card" ? ee.card : ""}`, children: [
      /* @__PURE__ */ _("span", { className: ee.row, children: [
        /* @__PURE__ */ e(
          "input",
          {
            ref: d,
            type: "checkbox",
            id: u,
            className: v,
            "aria-invalid": !!n,
            "aria-labelledby": t ? `${u}-label` : void 0,
            "aria-describedby": [n ? b : null, n ? null : p].filter(Boolean).join(" ") || void 0,
            ...r
          }
        ),
        t && /* @__PURE__ */ e("span", { id: `${u}-label`, className: ee.label, children: t })
      ] }),
      o && !n && /* @__PURE__ */ e("span", { id: p, className: ee.description, children: o }),
      n && /* @__PURE__ */ e("span", { id: b, className: ee.errorText, role: "alert", children: n })
    ] });
  }
);
Gs.displayName = "Checkbox";
const Xs = "_fieldset_oa252_1", Ys = "_legend_oa252_19", Js = "_required_oa252_37", Qs = "_group_oa252_47", Zs = "_vertical_oa252_55", er = "_horizontal_oa252_65", tr = "_option_oa252_77", nr = "_radio_oa252_89", or = "_hasError_oa252_159", sr = "_sm_oa252_169", rr = "_md_oa252_171", ar = "_lg_oa252_173", ir = "_optionContent_oa252_177", lr = "_optionIcon_oa252_186", cr = "_optionMeta_oa252_187", dr = "_cards_oa252_188", _r = "_optionLabel_oa252_207", ur = "_optionDescription_oa252_233", hr = "_hint_oa252_245", pr = "_errorText_oa252_257", R = {
  fieldset: Xs,
  legend: Ys,
  required: Js,
  group: Qs,
  vertical: Zs,
  horizontal: er,
  option: tr,
  radio: nr,
  hasError: or,
  sm: sr,
  md: rr,
  lg: ar,
  optionContent: ir,
  optionIcon: lr,
  optionMeta: cr,
  cards: dr,
  optionLabel: _r,
  optionDescription: ur,
  hint: hr,
  errorText: pr
}, Du = ({
  name: t,
  label: o,
  options: n,
  value: s,
  defaultValue: a,
  onChange: i,
  size: c = "md",
  orientation: r = "vertical",
  variant: d = "default",
  error: l,
  hint: u,
  required: b
}) => {
  const v = `vui-radiogroup-${k.useId().replace(/:/g, "")}`, y = `${v}-error`, h = `${v}-hint`, j = s !== void 0;
  return /* @__PURE__ */ _(
    "fieldset",
    {
      className: `${R.fieldset} ${R[c]}`,
      "aria-describedby": [l ? y : null, u && !l ? h : null].filter(Boolean).join(" ") || void 0,
      children: [
        o && /* @__PURE__ */ _("legend", { className: R.legend, children: [
          o,
          b && /* @__PURE__ */ e("span", { className: R.required, "aria-hidden": "true", children: "*" })
        ] }),
        /* @__PURE__ */ e("div", { className: `${R.group} ${R[r]} ${d === "cards" ? R.cards : ""}`, children: n.map((g) => {
          const x = `${v}-${g.value}`, N = j ? { checked: s === g.value } : { defaultChecked: a === g.value };
          return /* @__PURE__ */ _("label", { className: R.option, htmlFor: x, children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                id: x,
                name: t,
                value: g.value,
                disabled: g.disabled,
                required: b,
                onChange: () => i?.(g.value),
                className: `${R.radio} ${l ? R.hasError : ""}`,
                "aria-invalid": l ? !0 : void 0,
                "aria-labelledby": `${x}-label`,
                "aria-describedby": g.description ? `${x}-description` : void 0,
                ...N
              }
            ),
            g.icon && /* @__PURE__ */ e("span", { className: R.optionIcon, "aria-hidden": "true", children: g.icon }),
            /* @__PURE__ */ _("span", { className: R.optionContent, children: [
              /* @__PURE__ */ e("span", { id: `${x}-label`, className: R.optionLabel, children: g.label }),
              g.description && /* @__PURE__ */ e("span", { id: `${x}-description`, className: R.optionDescription, children: g.description }),
              g.meta && /* @__PURE__ */ e("span", { className: R.optionMeta, children: g.meta })
            ] })
          ] }, g.value);
        }) }),
        l && /* @__PURE__ */ e("span", { id: y, className: R.errorText, role: "alert", children: l }),
        u && !l && /* @__PURE__ */ e("span", { id: h, className: R.hint, children: u })
      ]
    }
  );
}, mr = "_wrapper_bvkv8_1", fr = "_labelRow_bvkv8_13", br = "_track_bvkv8_29", vr = "_input_bvkv8_45", gr = "_thumb_bvkv8_59", yr = "_labelText_bvkv8_126", $r = "_sm_bvkv8_144", wr = "_md_bvkv8_156", kr = "_lg_bvkv8_168", Nr = "_description_bvkv8_192", de = {
  wrapper: mr,
  labelRow: fr,
  track: br,
  input: vr,
  thumb: gr,
  labelText: yr,
  sm: $r,
  md: wr,
  lg: kr,
  description: Nr
}, xr = k.forwardRef(
  ({ label: t, description: o, size: n = "md", className: s, id: a, ...i }, c) => {
    const r = J(), d = a ?? r, l = d && o ? `${d}-desc` : void 0;
    return /* @__PURE__ */ _("div", { className: `${de.wrapper} ${de[n]}`, children: [
      /* @__PURE__ */ _("label", { className: de.labelRow, htmlFor: d, children: [
        /* @__PURE__ */ _("span", { className: de.track, children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: c,
              type: "checkbox",
              role: "switch",
              id: d,
              className: `${de.input} ${s ?? ""}`,
              "aria-describedby": l || void 0,
              ...i
            }
          ),
          /* @__PURE__ */ e("span", { className: de.thumb, "aria-hidden": "true" })
        ] }),
        t && /* @__PURE__ */ e("span", { className: de.labelText, children: t })
      ] }),
      o && /* @__PURE__ */ e("span", { id: l, className: de.description, children: o })
    ] });
  }
);
xr.displayName = "Switch";
const jr = "_overlay_1t05u_1", Br = "_overlayFadeIn_1t05u_1", Lr = "_dialog_1t05u_37", Cr = "_dialogSlideUp_1t05u_1", Ir = "_sm_1t05u_77", Er = "_md_1t05u_79", Dr = "_lg_1t05u_81", Wr = "_xl_1t05u_83", Tr = "_header_1t05u_89", qr = "_title_1t05u_101", Sr = "_description_1t05u_117", Rr = "_body_1t05u_131", Mr = "_footer_1t05u_141", Fr = "_closeBtn_1t05u_161", ne = {
  overlay: jr,
  overlayFadeIn: Br,
  dialog: Lr,
  dialogSlideUp: Cr,
  sm: Ir,
  md: Er,
  lg: Dr,
  xl: Wr,
  header: Tr,
  title: qr,
  description: Sr,
  body: Rr,
  footer: Mr,
  closeBtn: Fr
}, rt = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', pt = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${ne.header} ${o ?? ""}`, ...n, children: t });
pt.displayName = "Dialog.Header";
const mt = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${ne.body} ${o ?? ""}`, ...n, children: t });
mt.displayName = "Dialog.Body";
const ft = ({ children: t, className: o, ...n }) => /* @__PURE__ */ e("div", { className: `${ne.footer} ${o ?? ""}`, ...n, children: t });
ft.displayName = "Dialog.Footer";
const zr = ({
  open: t,
  onClose: o,
  title: n,
  description: s,
  size: a = "md",
  children: i,
  className: c,
  closeOnOverlayClick: r = !0
}) => {
  const d = O(null), l = J(), u = `vui-dialog-title-${l}`, b = `vui-dialog-desc-${l}`, p = O(o);
  p.current = o;
  const v = O(null);
  if (oe(() => {
    if (!t) return;
    v.current = document.activeElement;
    const h = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const g = requestAnimationFrame(() => {
      d.current?.querySelectorAll(rt)?.[0]?.focus();
    }), x = (N) => {
      if (N.key === "Escape") {
        p.current();
        return;
      }
      if (N.key === "Tab" && d.current) {
        const m = Array.from(
          d.current.querySelectorAll(rt)
        );
        if (m.length === 0) {
          N.preventDefault();
          return;
        }
        const $ = m[0], w = m[m.length - 1];
        N.shiftKey ? document.activeElement === $ && (w.focus(), N.preventDefault()) : document.activeElement === w && ($.focus(), N.preventDefault());
      }
    };
    return document.addEventListener("keydown", x), () => {
      cancelAnimationFrame(g), document.removeEventListener("keydown", x), document.body.style.overflow = h, v.current?.focus();
    };
  }, [t]), !t) return null;
  const y = (h) => {
    r && h.target === h.currentTarget && o();
  };
  return /* @__PURE__ */ e("div", { className: ne.overlay, onClick: y, role: "presentation", children: /* @__PURE__ */ _(
    "div",
    {
      ref: d,
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": n ? u : void 0,
      "aria-describedby": n && s ? b : void 0,
      className: [ne.dialog, ne[a], c ?? ""].filter(Boolean).join(" "),
      children: [
        n && /* @__PURE__ */ _("div", { className: ne.header, children: [
          /* @__PURE__ */ e("p", { id: u, className: ne.title, children: n }),
          s && /* @__PURE__ */ e("p", { id: b, className: ne.description, children: s })
        ] }),
        i,
        /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: ne.closeBtn,
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
  ) });
}, Ye = zr;
Ye.Header = pt;
Ye.Body = mt;
Ye.Footer = ft;
Ye.displayName = "Dialog";
const Ar = "_wrapper_kmlc5_1", Or = "_tooltip_kmlc5_11", Hr = "_visible_kmlc5_49", Pr = "_top_kmlc5_59", Ur = "_bottom_kmlc5_71", Kr = "_left_kmlc5_83", Vr = "_right_kmlc5_95", Gr = "_arrow_kmlc5_109", Xr = "_arrowTop_kmlc5_121", Yr = "_arrowBottom_kmlc5_139", Jr = "_arrowLeft_kmlc5_157", Qr = "_arrowRight_kmlc5_175", we = {
  wrapper: Ar,
  tooltip: Or,
  visible: Hr,
  top: Pr,
  bottom: Ur,
  left: Kr,
  right: Vr,
  arrow: Gr,
  arrowTop: Xr,
  arrowBottom: Yr,
  arrowLeft: Jr,
  arrowRight: Qr
}, Wu = ({
  content: t,
  children: o,
  placement: n = "top",
  delay: s = 0
}) => {
  const [a, i] = K(!1), r = `vui-tooltip-${J().replace(/:/g, "")}`, d = k.useRef(null), l = () => {
    d.current && clearTimeout(d.current), s > 0 ? d.current = setTimeout(() => i(!0), s) : i(!0);
  }, u = () => {
    d.current && clearTimeout(d.current), i(!1);
  };
  k.useEffect(
    () => () => {
      d.current && clearTimeout(d.current);
    },
    []
  ), k.useEffect(() => {
    const p = (v) => {
      v.key === "Escape" && u();
    };
    return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
  }, []);
  const b = k.cloneElement(o, {
    "aria-describedby": [o.props["aria-describedby"], a ? r : void 0].filter(Boolean).join(" ") || void 0
  });
  return /* @__PURE__ */ _(
    "span",
    {
      className: we.wrapper,
      onMouseEnter: l,
      onMouseLeave: u,
      onFocus: l,
      onBlur: u,
      children: [
        b,
        /* @__PURE__ */ _(
          "span",
          {
            id: r,
            role: "tooltip",
            className: [we.tooltip, we[n], a ? we.visible : ""].filter(Boolean).join(" "),
            "aria-hidden": !a,
            children: [
              t,
              /* @__PURE__ */ e(
                "span",
                {
                  className: `${we.arrow} ${we[`arrow${n.charAt(0).toUpperCase()}${n.slice(1)}`]}`,
                  "aria-hidden": "true"
                }
              )
            ]
          }
        )
      ]
    }
  );
}, Zr = "_tabs_128da_1", ea = "_tablist_128da_9", ta = "_underline_128da_18", na = "_tab_128da_1", oa = "_activeTab_128da_45", sa = "_pills_128da_56", ra = "_boxed_128da_99", aa = "_panel_128da_151", ke = {
  tabs: Zr,
  tablist: ea,
  underline: ta,
  tab: na,
  activeTab: oa,
  pills: sa,
  boxed: ra,
  panel: aa
}, Tu = ({
  items: t,
  defaultValue: o,
  value: n,
  onChange: s,
  variant: a = "underline"
}) => {
  const i = J(), c = n !== void 0, [r, d] = K(
    o ?? t.find((h) => !h.disabled)?.value ?? ""
  ), l = c ? n : r, u = O(null), b = (h) => {
    c || d(h), s?.(h);
  }, p = (h, j) => {
    const g = t.filter((m) => !m.disabled), x = g.findIndex((m) => m.value === t[j].value);
    if (!g.length) return;
    let N = null;
    if (h.key === "ArrowRight" ? N = (x + 1) % g.length : h.key === "ArrowLeft" ? N = (x - 1 + g.length) % g.length : h.key === "Home" ? N = 0 : h.key === "End" && (N = g.length - 1), N !== null) {
      h.preventDefault();
      const m = g[N];
      b(m.value), Array.from(
        u.current?.querySelectorAll("[role=tab]") ?? []
      ).find((w) => w.dataset.value === m.value)?.focus();
    }
  }, v = (h) => `vui-${i}-tabpanel-${h}`, y = (h) => `vui-${i}-tab-${h}`;
  return /* @__PURE__ */ _("div", { className: ke.tabs, children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: u,
        role: "tablist",
        className: [ke.tablist, ke[a]].filter(Boolean).join(" "),
        children: t.map((h, j) => /* @__PURE__ */ e(
          "button",
          {
            id: y(h.value),
            role: "tab",
            type: "button",
            "data-value": h.value,
            "aria-selected": l === h.value,
            "aria-controls": v(h.value),
            disabled: h.disabled,
            tabIndex: l === h.value ? 0 : -1,
            className: [ke.tab, l === h.value ? ke.activeTab : ""].filter(Boolean).join(" "),
            onClick: () => b(h.value),
            onKeyDown: (g) => p(g, j),
            children: h.label
          },
          h.value
        ))
      }
    ),
    t.map((h) => /* @__PURE__ */ e(
      "div",
      {
        id: v(h.value),
        role: "tabpanel",
        "aria-labelledby": y(h.value),
        hidden: l !== h.value,
        className: ke.panel,
        children: h.children
      },
      h.value
    ))
  ] });
}, ia = "_accordion_n0dlq_1", la = "_bordered_n0dlq_13", ca = "_item_n0dlq_25", da = "_flush_n0dlq_33", _a = "_separated_n0dlq_41", ua = "_heading_n0dlq_69", ha = "_trigger_n0dlq_79", pa = "_icon_n0dlq_143", ma = "_open_n0dlq_159", fa = "_contentOuter_n0dlq_169", ba = "_contentInner_n0dlq_189", ae = {
  accordion: ia,
  bordered: la,
  item: ca,
  flush: da,
  separated: _a,
  heading: ua,
  trigger: ha,
  icon: pa,
  open: ma,
  contentOuter: fa,
  contentInner: ba
}, qu = ({
  items: t,
  defaultValue: o,
  value: n,
  onChange: s,
  multiple: a = !1,
  variant: i = "bordered"
}) => {
  const c = n !== void 0, r = (p) => p ? Array.isArray(p) ? p : [p] : [], [d, l] = K(r(o)), u = c ? r(n) : d, b = (p) => {
    let v;
    u.includes(p) ? v = u.filter((y) => y !== p) : v = a ? [...u, p] : [p], c || l(v), s?.(a ? v : v[0] ?? "");
  };
  return /* @__PURE__ */ e("div", { className: [ae.accordion, ae[i]].filter(Boolean).join(" "), children: t.map((p) => {
    const v = u.includes(p.value), y = `vui-accordion-trigger-${p.value}`, h = `vui-accordion-panel-${p.value}`;
    return /* @__PURE__ */ _(
      "div",
      {
        className: [ae.item, v ? ae.open : ""].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("h3", { className: ae.heading, children: /* @__PURE__ */ _(
            "button",
            {
              id: y,
              type: "button",
              "aria-expanded": v,
              "aria-controls": h,
              disabled: p.disabled,
              className: ae.trigger,
              onClick: () => !p.disabled && b(p.value),
              children: [
                /* @__PURE__ */ e("span", { children: p.title }),
                /* @__PURE__ */ e("span", { className: ae.icon, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
              "aria-labelledby": y,
              className: ae.contentOuter,
              children: /* @__PURE__ */ e("div", { className: ae.contentInner, children: p.content })
            }
          )
        ]
      },
      p.value
    );
  }) });
}, va = "_alert_1d0wp_1", ga = "_icon_1d0wp_23", ya = "_content_1d0wp_37", $a = "_title_1d0wp_47", wa = "_body_1d0wp_61", ka = "_closeBtn_1d0wp_69", Na = "_info_1d0wp_127", xa = "_success_1d0wp_139", ja = "_warning_1d0wp_151", Ba = "_danger_1d0wp_163", pe = {
  alert: va,
  icon: ga,
  content: ya,
  title: $a,
  body: wa,
  closeBtn: ka,
  info: Na,
  success: xa,
  warning: ja,
  danger: Ba
}, La = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), Ca = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), Ia = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }
) }), Ea = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), Da = {
  info: /* @__PURE__ */ e(La, {}),
  success: /* @__PURE__ */ e(Ca, {}),
  warning: /* @__PURE__ */ e(Ia, {}),
  danger: /* @__PURE__ */ e(Ea, {})
}, Su = ({
  variant: t = "info",
  title: o,
  icon: n,
  onClose: s,
  children: a,
  className: i,
  ...c
}) => {
  const r = [pe.alert, pe[t], i ?? ""].filter(Boolean).join(" "), d = n !== void 0 ? n : Da[t];
  return /* @__PURE__ */ _("div", { className: r, role: "alert", ...c, children: [
    d && /* @__PURE__ */ e("span", { className: pe.icon, "aria-hidden": "true", children: d }),
    /* @__PURE__ */ _("div", { className: pe.content, children: [
      o && /* @__PURE__ */ e("p", { className: pe.title, children: o }),
      /* @__PURE__ */ e("div", { className: pe.body, children: a })
    ] }),
    s && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: pe.closeBtn,
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
}, Wa = "_divider_togac_1", Ta = "_horizontal_togac_11", qa = "_vertical_togac_23", Sa = "_withLabel_togac_37", Ra = "_label_togac_65", He = {
  divider: Wa,
  horizontal: Ta,
  vertical: qa,
  withLabel: Sa,
  label: Ra
}, Ru = ({
  orientation: t = "horizontal",
  label: o,
  className: n,
  ...s
}) => {
  const a = [
    He.divider,
    He[t],
    o ? He.withLabel : "",
    n ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      role: "separator",
      "aria-orientation": t,
      className: a,
      ...s,
      children: o && /* @__PURE__ */ e("span", { className: He.label, children: o })
    }
  );
}, Ma = "_spinner_19val_1", Fa = "_svg_19val_15", za = "_spin_19val_1", Aa = "_track_19val_33", Oa = "_arc_19val_41", Ha = "_sm_19val_53", Pa = "_md_19val_65", Ua = "_lg_19val_77", Ka = "_primary_19val_91", Va = "_muted_19val_99", Ga = "_white_19val_107", Ne = {
  spinner: Ma,
  svg: Fa,
  spin: za,
  track: Aa,
  arc: Oa,
  sm: Ha,
  md: Pa,
  lg: Ua,
  primary: Ka,
  muted: Va,
  white: Ga
}, Mu = ({
  size: t = "md",
  color: o = "primary",
  label: n = "Loading…",
  className: s,
  ...a
}) => {
  const i = [Ne.spinner, Ne[t], Ne[o], s ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("span", { className: i, role: "status", "aria-label": n, ...a, children: /* @__PURE__ */ _(
    "svg",
    {
      className: Ne.svg,
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ e(
          "circle",
          {
            className: Ne.track,
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
            className: Ne.arc,
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
}, Xa = "_block_bhe54_1", Ya = "_stack_bhe54_25", tt = {
  block: Xa,
  stack: Ya
}, me = (t) => {
  if (t !== void 0)
    return typeof t == "number" ? `${t}px` : t;
}, Fu = ({
  width: t,
  height: o,
  radius: n,
  lines: s,
  gap: a,
  className: i,
  style: c,
  ...r
}) => {
  if (s && s > 1) {
    const d = me(a) ?? "0.5rem";
    return /* @__PURE__ */ e(
      "span",
      {
        className: [tt.stack, i ?? ""].filter(Boolean).join(" "),
        style: { gap: d, ...c },
        "aria-hidden": "true",
        ...r,
        children: Array.from({ length: s }).map((l, u) => {
          const b = u === s - 1;
          return /* @__PURE__ */ e(
            "span",
            {
              className: tt.block,
              style: {
                width: b ? "75%" : me(t) ?? "100%",
                height: me(o) ?? "1rem",
                borderRadius: me(n) ?? "var(--vui-radius-sm, 0.375rem)"
              }
            },
            u
          );
        })
      }
    );
  }
  return /* @__PURE__ */ e(
    "span",
    {
      className: [tt.block, i ?? ""].filter(Boolean).join(" "),
      style: {
        width: me(t),
        height: me(o) ?? "1rem",
        borderRadius: me(n) ?? "var(--vui-radius-sm, 0.375rem)",
        ...c
      },
      "aria-hidden": "true",
      ...r
    }
  );
}, Ja = "_wrapper_153m1_1", Qa = "_labelRow_153m1_15", Za = "_label_153m1_15", ei = "_value_153m1_39", ti = "_track_153m1_51", ni = "_sm_153m1_65", oi = "_md_153m1_67", si = "_lg_153m1_69", ri = "_bar_153m1_73", ai = "_primary_153m1_85", ii = "_success_153m1_87", li = "_warning_153m1_89", ci = "_danger_153m1_91", _e = {
  wrapper: Ja,
  labelRow: Qa,
  label: Za,
  value: ei,
  track: ti,
  sm: ni,
  md: oi,
  lg: si,
  bar: ri,
  primary: ai,
  success: ii,
  warning: li,
  danger: ci
}, zu = ({
  value: t,
  variant: o = "primary",
  size: n = "md",
  label: s,
  showValue: a = !1,
  className: i,
  ...c
}) => {
  const r = Math.min(100, Math.max(0, t));
  return /* @__PURE__ */ _("div", { className: [_e.wrapper, i ?? ""].filter(Boolean).join(" "), ...c, children: [
    (s || a) && /* @__PURE__ */ _("div", { className: _e.labelRow, children: [
      s && /* @__PURE__ */ e("span", { className: _e.label, children: s }),
      a && /* @__PURE__ */ _("span", { className: _e.value, children: [
        r,
        "%"
      ] })
    ] }),
    /* @__PURE__ */ e(
      "div",
      {
        className: [_e.track, _e[n]].filter(Boolean).join(" "),
        role: "progressbar",
        "aria-valuenow": r,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": s ?? `${r}%`,
        children: /* @__PURE__ */ e(
          "div",
          {
            className: [_e.bar, _e[o]].filter(Boolean).join(" "),
            style: { width: `${r}%` }
          }
        )
      }
    )
  ] });
}, di = "_container_7wdjc_1", _i = "_toast_7wdjc_27", ui = "_slideUp_7wdjc_1", hi = "_message_7wdjc_61", pi = "_close_7wdjc_75", mi = "_info_7wdjc_125", fi = "_success_7wdjc_137", bi = "_warning_7wdjc_149", vi = "_danger_7wdjc_161", Se = {
  container: di,
  toast: _i,
  slideUp: ui,
  message: hi,
  close: pi,
  info: mi,
  success: fi,
  warning: bi,
  danger: vi
}, bt = Bt(null);
let gi = 0;
const yi = () => /* @__PURE__ */ e(
  "svg",
  {
    width: "14",
    height: "14",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "aria-hidden": "true",
    children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })
  }
), $i = ({ item: t, onRemove: o }) => {
  const n = O(null);
  oe(() => {
    const a = t.duration ?? 4e3;
    return a > 0 && (n.current = setTimeout(() => o(t.id), a)), () => {
      n.current && clearTimeout(n.current);
    };
  }, [t.id, t.duration, o]);
  const s = [Se.toast, Se[t.variant ?? "info"]].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: s, role: "alert", "aria-live": "assertive", children: [
    /* @__PURE__ */ e("span", { className: Se.message, children: t.message }),
    /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: Se.close,
        onClick: () => o(t.id),
        "aria-label": "Dismiss notification",
        children: /* @__PURE__ */ e(yi, {})
      }
    )
  ] });
}, Au = ({ children: t }) => {
  const [o, n] = K([]), [s, a] = K(!1);
  oe(() => a(!0), []);
  const i = Ie((r) => {
    const d = `toast-${++gi}`;
    n((l) => [...l, { ...r, id: d }]);
  }, []), c = Ie((r) => {
    n((d) => d.filter((l) => l.id !== r));
  }, []);
  return /* @__PURE__ */ _(bt.Provider, { value: { addToast: i, removeToast: c }, children: [
    t,
    s && nt(
      /* @__PURE__ */ e("div", { className: Se.container, "aria-label": "Notifications", children: o.map((r) => /* @__PURE__ */ e($i, { item: r, onRemove: c }, r.id)) }),
      document.body
    )
  ] });
}, Ou = () => {
  const t = jt(bt);
  if (!t)
    throw new Error("useToast must be used inside <ToastProvider>");
  return t;
}, wi = "_avatar_rlwt5_1", ki = "_neutral_rlwt5_22", Ni = "_blue_rlwt5_25", xi = "_violet_rlwt5_28", ji = "_rose_rlwt5_31", Bi = "_amber_rlwt5_34", Li = "_emerald_rlwt5_37", Ci = "_xs_rlwt5_40", Ii = "_sm_rlwt5_45", Ei = "_md_rlwt5_50", Di = "_lg_rlwt5_55", Wi = "_xl_rlwt5_60", Ti = "_circle_rlwt5_65", qi = "_square_rlwt5_68", Si = "_ring_rlwt5_71", Ri = "_img_rlwt5_75", Mi = "_initials_rlwt5_82", Fi = "_fallbackIcon_rlwt5_86", zi = "_status_rlwt5_91", Ai = "_online_rlwt5_104", Oi = "_away_rlwt5_107", Hi = "_busy_rlwt5_110", Pi = "_offline_rlwt5_113", Ui = "_statusPulse_rlwt5_123", Ki = "_avatarStatusPulse_rlwt5_1", Vi = "_group_rlwt5_126", Gi = "_groupItem_rlwt5_132", Xi = "_overflow_rlwt5_148", W = {
  avatar: wi,
  neutral: ki,
  blue: Ni,
  violet: xi,
  rose: ji,
  amber: Bi,
  emerald: Li,
  xs: Ci,
  sm: Ii,
  md: Ei,
  lg: Di,
  xl: Wi,
  circle: Ti,
  square: qi,
  ring: Si,
  img: Ri,
  initials: Mi,
  fallbackIcon: Fi,
  status: zi,
  online: Ai,
  away: Oi,
  busy: Hi,
  offline: Pi,
  statusPulse: Ui,
  avatarStatusPulse: Ki,
  group: Vi,
  groupItem: Gi,
  overflow: Xi
}, at = ["blue", "violet", "rose", "amber", "emerald"];
function Yi(t) {
  let o = 0;
  for (const n of t)
    o = o * 31 + n.codePointAt(0) >>> 0;
  return at[o % at.length];
}
const vt = k.forwardRef(
  ({
    src: t,
    alt: o,
    name: n,
    size: s = "md",
    shape: a = "circle",
    status: i,
    statusAnimation: c = "none",
    tone: r = "auto",
    ring: d = !1,
    className: l,
    ...u
  }, b) => {
    const [p, v] = K(), y = n?.trim().split(/\s+/).filter(Boolean) ?? [], h = y.length ? (Array.from(y[0])[0] + (y.length > 1 ? Array.from(y[y.length - 1])[0] : "")).toUpperCase() : null, j = r === "auto" ? n?.trim() ? Yi(n.trim()) : "neutral" : r, g = [o?.trim() || n?.trim() || "Avatar", i].filter(Boolean).join(", ");
    return /* @__PURE__ */ _(
      "span",
      {
        ref: b,
        className: [
          W.avatar,
          W[s],
          W[a],
          W[j],
          d ? W.ring : "",
          l
        ].filter(Boolean).join(" "),
        role: "img",
        "aria-label": g,
        ...u,
        children: [
          t && t !== p ? /* @__PURE__ */ e(
            "img",
            {
              src: t,
              alt: "",
              className: W.img,
              onError: () => v(t)
            },
            t
          ) : h ? /* @__PURE__ */ e("span", { className: W.initials, "aria-hidden": "true", children: h }) : /* @__PURE__ */ _(
            "svg",
            {
              className: W.fallbackIcon,
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.6",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ e("circle", { cx: "12", cy: "8", r: "3.5" }),
                /* @__PURE__ */ e("path", { d: "M5 20v-2a7 7 0 0 1 14 0v2", strokeLinecap: "round" })
              ]
            }
          ),
          i && /* @__PURE__ */ e(
            "span",
            {
              className: [
                W.status,
                W[i],
                c === "pulse" ? W.statusPulse : ""
              ].filter(Boolean).join(" "),
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
  }
);
vt.displayName = "Avatar";
const gt = ({
  children: t,
  size: o = "md",
  max: n = 5,
  className: s,
  ...a
}) => {
  const i = k.Children.toArray(t).filter(
    (l) => k.isValidElement(l)
  ), c = Number.isFinite(n) ? Math.max(0, Math.floor(n)) : 5, r = i.slice(c), d = `${r.length} more members${r.some((l) => l.props.name) ? ": " + r.map((l) => l.props.name).filter(Boolean).join(", ") : ""}`;
  return /* @__PURE__ */ _(
    "span",
    {
      className: [W.group, s].filter(Boolean).join(" "),
      role: "group",
      "aria-label": "Team members",
      ...a,
      children: [
        i.slice(0, c).map((l, u) => /* @__PURE__ */ e(
          "span",
          {
            className: W.groupItem,
            title: l.props.name,
            children: k.cloneElement(l, { size: o })
          },
          l.key ?? u
        )),
        r.length > 0 && /* @__PURE__ */ e("span", { className: W.groupItem, children: /* @__PURE__ */ _(
          "span",
          {
            className: [
              W.avatar,
              W[o],
              W.circle,
              W.neutral,
              W.overflow
            ].join(" "),
            role: "img",
            "aria-label": d,
            title: d,
            children: [
              "+",
              r.length
            ]
          }
        ) })
      ]
    }
  );
};
gt.displayName = "Avatar.Group";
const Hu = Object.assign(vt, { Group: gt }), Ji = "_tag_13xr3_1", Qi = "_sm_13xr3_27", Zi = "_md_13xr3_37", el = "_lg_13xr3_47", tl = "_info_13xr3_71", nl = "_success_13xr3_83", ol = "_warning_13xr3_95", sl = "_danger_13xr3_107", rl = "_primary_13xr3_119", al = "_label_13xr3_131", il = "_icon_13xr3_139", ll = "_close_13xr3_149", xe = {
  tag: Ji,
  sm: Qi,
  md: Zi,
  lg: el,
  default: "_default_13xr3_59",
  info: tl,
  success: nl,
  warning: ol,
  danger: sl,
  primary: rl,
  label: al,
  icon: il,
  close: ll
}, Pu = ({
  variant: t = "default",
  size: o = "md",
  onClose: n,
  leftIcon: s,
  children: a,
  className: i,
  ...c
}) => {
  const r = [xe.tag, xe[t], xe[o], i ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("span", { className: r, ...c, children: [
    s && /* @__PURE__ */ e("span", { className: xe.icon, "aria-hidden": "true", children: s }),
    /* @__PURE__ */ e("span", { className: xe.label, children: a }),
    n && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: xe.close,
        onClick: (d) => {
          d.stopPropagation(), n();
        },
        "aria-label": "Remove",
        children: /* @__PURE__ */ e("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M6 18L18 6M6 6l12 12" }) })
      }
    )
  ] });
}, cl = "_root_1ez7g_1", dl = "_icon_1ez7g_21", _l = "_title_1ez7g_45", ul = "_description_1ez7g_61", hl = "_action_1ez7g_77", qe = {
  root: cl,
  icon: dl,
  title: _l,
  description: ul,
  action: hl
}, Uu = ({
  icon: t,
  title: o,
  description: n,
  action: s,
  className: a,
  ...i
}) => /* @__PURE__ */ _("div", { className: [qe.root, a ?? ""].filter(Boolean).join(" "), ...i, children: [
  t && /* @__PURE__ */ e("span", { className: qe.icon, "aria-hidden": "true", children: t }),
  /* @__PURE__ */ e("p", { className: qe.title, children: o }),
  n && /* @__PURE__ */ e("p", { className: qe.description, children: n }),
  s && /* @__PURE__ */ e("div", { className: qe.action, children: s })
] }), pl = "_nav_2mf5u_1", ml = "_list_2mf5u_9", fl = "_item_2mf5u_29", bl = "_separator_2mf5u_39", vl = "_crumb_2mf5u_53", gl = "_link_2mf5u_65", yl = "_current_2mf5u_99", ie = {
  nav: pl,
  list: ml,
  item: fl,
  separator: bl,
  crumb: vl,
  link: gl,
  current: yl
}, $l = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 18l6-6-6-6" }) }), Ku = ({
  items: t,
  separator: o,
  className: n,
  ...s
}) => {
  const a = o ?? /* @__PURE__ */ e($l, {});
  return /* @__PURE__ */ e("nav", { "aria-label": "Breadcrumb", className: [ie.nav, n ?? ""].filter(Boolean).join(" "), ...s, children: /* @__PURE__ */ e("ol", { className: ie.list, children: t.map((i, c) => {
    const r = c === t.length - 1;
    return /* @__PURE__ */ _("li", { className: ie.item, children: [
      c > 0 && /* @__PURE__ */ e("span", { className: ie.separator, "aria-hidden": "true", children: a }),
      r || !i.href ? /* @__PURE__ */ e(
        "span",
        {
          className: [ie.crumb, r ? ie.current : ie.link].filter(Boolean).join(" "),
          "aria-current": r ? "page" : void 0,
          children: i.label
        }
      ) : /* @__PURE__ */ e("a", { href: i.href, className: [ie.crumb, ie.link].filter(Boolean).join(" "), children: i.label })
    ] }, c);
  }) }) });
}, wl = "_nav_bkqpr_1", kl = "_list_bkqpr_10", Nl = "_btn_bkqpr_21", xl = "_disabled_bkqpr_42", jl = "_active_bkqpr_42", Bl = "_dots_bkqpr_65", H = {
  nav: wl,
  list: kl,
  btn: Nl,
  disabled: xl,
  active: jl,
  dots: Bl
};
function Pe(t, o) {
  const n = o - t + 1;
  return Array.from({ length: n }, (s, a) => t + a);
}
function Ll(t, o, n) {
  const s = n * 2 + 5;
  if (o <= s)
    return Pe(1, o);
  const a = Math.max(t - n, 1), i = Math.min(t + n, o), c = a > 2, r = i < o - 1;
  return !c && r ? [...Pe(1, 3 + n * 2), "...", o] : c && !r ? [1, "...", ...Pe(o - (2 + n * 2), o)] : [1, "...", ...Pe(a, i), "...", o];
}
const Cl = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 18l-6-6 6-6" }) }), Il = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 18l6-6-6-6" }) }), El = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 17l-5-5 5-5M18 17l-5-5 5-5" }) }), Dl = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 17l5-5-5-5M6 17l5-5-5-5" }) }), Vu = ({
  page: t,
  totalPages: o,
  onChange: n,
  siblingCount: s = 1,
  showFirstLast: a = !0,
  className: i,
  ...c
}) => {
  const r = Ll(t, o, s), d = (l) => {
    l < 1 || l > o || l === t || n(l);
  };
  return /* @__PURE__ */ e(
    "nav",
    {
      "aria-label": "Pagination",
      className: [H.nav, i ?? ""].filter(Boolean).join(" "),
      ...c,
      children: /* @__PURE__ */ _("ul", { className: H.list, children: [
        a && /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: [H.btn, t === 1 ? H.disabled : ""].filter(Boolean).join(" "),
            onClick: () => d(1),
            disabled: t === 1,
            "aria-label": "First page",
            children: /* @__PURE__ */ e(El, {})
          }
        ) }),
        /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: [H.btn, t === 1 ? H.disabled : ""].filter(Boolean).join(" "),
            onClick: () => d(t - 1),
            disabled: t === 1,
            "aria-label": "Previous page",
            children: /* @__PURE__ */ e(Cl, {})
          }
        ) }),
        r.map(
          (l, u) => l === "..." ? /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e("span", { className: H.dots, children: "…" }) }, `dots-${u}`) : /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
            "button",
            {
              type: "button",
              className: [H.btn, l === t ? H.active : ""].filter(Boolean).join(" "),
              onClick: () => d(l),
              "aria-label": `Page ${l}`,
              "aria-current": l === t ? "page" : void 0,
              children: l
            }
          ) }, l)
        ),
        /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: [H.btn, t === o ? H.disabled : ""].filter(Boolean).join(" "),
            onClick: () => d(t + 1),
            disabled: t === o,
            "aria-label": "Next page",
            children: /* @__PURE__ */ e(Il, {})
          }
        ) }),
        a && /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
          "button",
          {
            type: "button",
            className: [H.btn, t === o ? H.disabled : ""].filter(Boolean).join(" "),
            onClick: () => d(o),
            disabled: t === o,
            "aria-label": "Last page",
            children: /* @__PURE__ */ e(Dl, {})
          }
        ) })
      ] })
    }
  );
}, Wl = "_root_1mprn_1", Tl = "_horizontal_1mprn_11", ql = "_vertical_1mprn_21", Sl = "_step_1mprn_31", Rl = "_connector_1mprn_63", Ml = "_indicator_1mprn_73", Fl = "_circle_1mprn_109", zl = "_pending_1mprn_175", Al = "_active_1mprn_187", Ol = "_completed_1mprn_199", Hl = "_content_1mprn_221", Pl = "_label_1mprn_253", Ul = "_description_1mprn_277", P = {
  root: Wl,
  horizontal: Tl,
  vertical: ql,
  step: Sl,
  connector: Rl,
  indicator: Ml,
  circle: Fl,
  pending: zl,
  active: Al,
  completed: Ol,
  content: Hl,
  label: Pl,
  description: Ul
}, Kl = () => /* @__PURE__ */ e("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M5 13l4 4L19 7" }) }), Gu = ({
  steps: t,
  currentStep: o,
  orientation: n = "horizontal",
  variant: s = "default",
  className: a,
  ...i
}) => {
  const c = [
    P.root,
    P[n],
    P[s],
    a ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      className: c,
      role: "list",
      "aria-label": "Steps",
      ...i,
      children: t.map((r, d) => {
        const l = d + 1, u = l < o, b = l === o, p = d === t.length - 1, v = [
          P.step,
          u ? P.completed : "",
          b ? P.active : "",
          !u && !b ? P.pending : ""
        ].filter(Boolean).join(" ");
        return /* @__PURE__ */ _("div", { className: v, role: "listitem", children: [
          /* @__PURE__ */ _("div", { className: P.indicator, children: [
            /* @__PURE__ */ e("span", { className: P.circle, children: u ? /* @__PURE__ */ e(Kl, {}) : /* @__PURE__ */ e("span", { children: l }) }),
            !p && /* @__PURE__ */ e("span", { className: P.connector, "aria-hidden": "true" })
          ] }),
          s !== "compact" && /* @__PURE__ */ _("div", { className: P.content, children: [
            /* @__PURE__ */ e("span", { className: P.label, children: r.label }),
            r.description && /* @__PURE__ */ e("span", { className: P.description, children: r.description })
          ] })
        ] }, d);
      })
    }
  );
}, Vl = "_triggerWrapper_19jeq_1", Gl = "_popover_19jeq_11", Xl = "_fadeIn_19jeq_1", Yl = "_arrow_19jeq_47", Jl = "_bottom_19jeq_67", Ql = "_top_19jeq_83", Zl = "_right_19jeq_99", ec = "_left_19jeq_115", Ue = {
  triggerWrapper: Vl,
  popover: Gl,
  fadeIn: Xl,
  arrow: Yl,
  bottom: Jl,
  top: Ql,
  right: Zl,
  left: ec
};
function tc(t, o, n) {
  const { top: s, left: a, bottom: i, right: c, width: r, height: d } = t, l = o.offsetWidth, u = o.offsetHeight, b = 8;
  switch (n) {
    case "top":
      return { top: s - u - b + window.scrollY, left: a + r / 2 - l / 2 + window.scrollX };
    case "bottom":
      return { top: i + b + window.scrollY, left: a + r / 2 - l / 2 + window.scrollX };
    case "left":
      return { top: s + d / 2 - u / 2 + window.scrollY, left: a - l - b + window.scrollX };
    case "right":
      return { top: s + d / 2 - u / 2 + window.scrollY, left: c + b + window.scrollX };
  }
}
const Xu = ({
  trigger: t,
  content: o,
  placement: n = "bottom",
  open: s,
  onOpenChange: a,
  className: i
}) => {
  const c = s !== void 0, [r, d] = K(!1), l = c ? s : r, u = O(null), b = O(null), [p, v] = K({ top: 0, left: 0 }), y = Ie(
    (g) => {
      c || d(g), a?.(g);
    },
    [c, a]
  ), h = Ie(() => {
    if (!u.current || !b.current) return;
    const g = u.current.getBoundingClientRect();
    v(tc(g, b.current, n));
  }, [n]);
  oe(() => {
    if (l)
      return h(), window.addEventListener("resize", h), window.addEventListener("scroll", h, !0), () => {
        window.removeEventListener("resize", h), window.removeEventListener("scroll", h, !0);
      };
  }, [l, h]), oe(() => {
    if (!l) return;
    const g = (N) => {
      !u.current?.contains(N.target) && !b.current?.contains(N.target) && y(!1);
    }, x = (N) => {
      N.key === "Escape" && y(!1);
    };
    return document.addEventListener("mousedown", g), document.addEventListener("keydown", x), () => {
      document.removeEventListener("mousedown", g), document.removeEventListener("keydown", x);
    };
  }, [l, y]);
  const j = [Ue.popover, Ue[n], i ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ _(dt, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: u,
        className: Ue.triggerWrapper,
        onClick: () => y(!l),
        "aria-expanded": l,
        "aria-haspopup": "true",
        children: t
      }
    ),
    l && typeof document < "u" && nt(
      /* @__PURE__ */ _(
        "div",
        {
          ref: b,
          className: j,
          style: { top: p.top, left: p.left },
          role: "dialog",
          children: [
            /* @__PURE__ */ e("div", { className: Ue.arrow, "aria-hidden": "true" }),
            o
          ]
        }
      ),
      document.body
    )
  ] });
}, nc = "_triggerWrapper_12t8q_1", oc = "_menu_12t8q_11", sc = "_item_12t8q_45", rc = "_itemDisabled_12t8q_81", ac = "_itemIcon_12t8q_111", ic = "_separator_12t8q_125", je = {
  triggerWrapper: nc,
  menu: oc,
  item: sc,
  itemDisabled: rc,
  itemIcon: ac,
  separator: ic
};
function lc(t, o, n) {
  const { top: s, left: a, bottom: i, right: c } = t, r = o.offsetHeight, d = o.offsetWidth, l = 4;
  switch (n) {
    case "bottom-start":
      return { top: i + l + window.scrollY, left: a + window.scrollX };
    case "bottom-end":
      return { top: i + l + window.scrollY, left: c - d + window.scrollX };
    case "top-start":
      return { top: s - r - l + window.scrollY, left: a + window.scrollX };
    case "top-end":
      return { top: s - r - l + window.scrollY, left: c - d + window.scrollX };
    default:
      return { top: i + l + window.scrollY, left: a + window.scrollX };
  }
}
const Yu = ({
  trigger: t,
  items: o,
  placement: n = "bottom-start",
  className: s
}) => {
  const [a, i] = K(!1), c = J(), r = O("first"), d = O({ text: "", time: 0 }), l = O(null), u = O(null), [b, p] = K({ top: 0, left: 0 }), v = () => l.current?.querySelector("button, a, [tabindex]")?.focus(), y = () => Array.from(
    u.current?.querySelectorAll('[role="menuitem"]:not(:disabled)') ?? []
  ), h = k.isValidElement(t) && t.props.disabled, j = {
    "aria-haspopup": "menu",
    "aria-expanded": a,
    "aria-controls": a ? c : void 0
  }, g = k.isValidElement(t) ? k.cloneElement(t, j) : /* @__PURE__ */ e("button", { type: "button", ...j, children: t }), x = Ie(() => {
    if (!l.current || !u.current) return;
    const m = l.current.getBoundingClientRect();
    p(lc(m, u.current, n));
  }, [n]);
  oe(() => {
    if (a)
      return x(), window.addEventListener("resize", x), window.addEventListener("scroll", x, !0), () => {
        window.removeEventListener("resize", x), window.removeEventListener("scroll", x, !0);
      };
  }, [a, x]), oe(() => {
    if (!a) return;
    const m = y();
    ((r.current === "last" ? m[m.length - 1] : m[0]) ?? u.current)?.focus();
  }, [a]), oe(() => {
    if (!a) return;
    const m = (w) => {
      !l.current?.contains(w.target) && !u.current?.contains(w.target) && i(!1);
    }, $ = (w) => {
      w.key === "Escape" && (i(!1), l.current?.querySelector("button, a, [tabindex]")?.focus());
    };
    return document.addEventListener("mousedown", m), document.addEventListener("keydown", $), () => {
      document.removeEventListener("mousedown", m), document.removeEventListener("keydown", $);
    };
  }, [a]);
  const N = (m) => {
    m.disabled || (i(!1), v(), m.onClick?.());
  };
  return /* @__PURE__ */ _(dt, { children: [
    /* @__PURE__ */ e(
      "span",
      {
        ref: l,
        className: je.triggerWrapper,
        onClick: () => {
          h || (r.current = "first", i((m) => !m));
        },
        onKeyDown: (m) => {
          h || m.defaultPrevented || (m.key === "ArrowDown" || m.key === "ArrowUp") && (m.preventDefault(), r.current = m.key === "ArrowUp" ? "last" : "first", i(!0));
        },
        children: g
      }
    ),
    a && typeof document < "u" && nt(
      /* @__PURE__ */ e(
        "div",
        {
          ref: u,
          className: [je.menu, s ?? ""].filter(Boolean).join(" "),
          style: { top: b.top, left: b.left },
          role: "menu",
          id: c,
          tabIndex: -1,
          "aria-label": "Actions",
          onKeyDown: (m) => {
            const $ = y(), w = $.indexOf(document.activeElement);
            if (m.key === "Tab") {
              v(), i(!1);
              return;
            }
            if (["ArrowDown", "ArrowUp", "Home", "End"].includes(m.key)) {
              if (m.preventDefault(), !$.length) return;
              const E = m.key === "Home" ? 0 : m.key === "End" ? $.length - 1 : (w + (m.key === "ArrowDown" ? 1 : -1) + $.length) % $.length;
              $[E]?.focus();
            } else if (m.key.length === 1 && m.key !== " " && !m.ctrlKey && !m.metaKey && !m.altKey) {
              const E = Date.now();
              d.current.text = (E - d.current.time < 500 ? d.current.text : "") + m.key.toLowerCase(), d.current.time = E;
              const I = d.current.text, z = [
                ...$.slice(w + 1),
                ...$.slice(0, w + 1)
              ].find(
                (Q) => Q.textContent?.trim().toLowerCase().startsWith(I)
              );
              z && (m.preventDefault(), z.focus());
            }
          },
          children: o.map((m, $) => m.separator ? /* @__PURE__ */ e("div", { className: je.separator, role: "separator" }, $) : /* @__PURE__ */ _(
            "button",
            {
              type: "button",
              role: "menuitem",
              tabIndex: -1,
              className: [je.item, m.disabled ? je.itemDisabled : ""].filter(Boolean).join(" "),
              onClick: () => N(m),
              disabled: m.disabled,
              children: [
                m.icon && /* @__PURE__ */ e("span", { className: je.itemIcon, "aria-hidden": "true", children: m.icon }),
                /* @__PURE__ */ e("span", { children: m.label })
              ]
            },
            $
          ))
        }
      ),
      document.body
    )
  ] });
}, cc = "_wrapper_14ppl_1", dc = "_wrapperDisabled_14ppl_15", _c = "_labelRow_14ppl_25", uc = "_label_14ppl_25", hc = "_valueDisplay_14ppl_49", pc = "_trackWrapper_14ppl_61", mc = "_sm_14ppl_73", fc = "_md_14ppl_75", bc = "_lg_14ppl_77", vc = "_trackBg_14ppl_81", gc = "_trackFill_14ppl_101", yc = "_input_14ppl_121", te = {
  wrapper: cc,
  wrapperDisabled: dc,
  labelRow: _c,
  label: uc,
  valueDisplay: hc,
  trackWrapper: pc,
  sm: mc,
  md: fc,
  lg: bc,
  trackBg: vc,
  trackFill: gc,
  input: yc
}, Ju = ({
  min: t = 0,
  max: o = 100,
  step: n = 1,
  value: s,
  onChange: a,
  label: i,
  showValue: c = !1,
  size: r = "md",
  disabled: d,
  className: l,
  id: u,
  ...b
}) => {
  const p = J(), v = u ?? p, y = s !== void 0 ? (s - t) / (o - t) * 100 : 0;
  return /* @__PURE__ */ _("div", { className: [te.wrapper, d ? te.wrapperDisabled : "", l ?? ""].filter(Boolean).join(" "), children: [
    (i || c) && /* @__PURE__ */ _("div", { className: te.labelRow, children: [
      i && /* @__PURE__ */ e("label", { htmlFor: v, className: te.label, children: i }),
      c && s !== void 0 && /* @__PURE__ */ e("span", { className: te.valueDisplay, children: s })
    ] }),
    /* @__PURE__ */ _("div", { className: [te.trackWrapper, te[r]].filter(Boolean).join(" "), children: [
      /* @__PURE__ */ e("div", { className: te.trackBg }),
      /* @__PURE__ */ e("div", { className: te.trackFill, style: { width: `${y}%` } }),
      /* @__PURE__ */ e(
        "input",
        {
          id: v,
          type: "range",
          min: t,
          max: o,
          step: n,
          value: s,
          disabled: d,
          onChange: (h) => a?.(Number(h.target.value)),
          className: te.input,
          "aria-valuemin": t,
          "aria-valuemax": o,
          "aria-valuenow": s,
          ...b
        }
      )
    ] })
  ] });
}, $c = "_root_1c8dd_1", wc = "_label_1c8dd_13", kc = "_required_1c8dd_27", Nc = "_wrapper_1c8dd_35", xc = "_hasError_1c8dd_65", jc = "_disabled_1c8dd_81", Bc = "_sm_1c8dd_93", Lc = "_md_1c8dd_95", Cc = "_lg_1c8dd_97", Ic = "_input_1c8dd_101", Ec = "_stepBtn_1c8dd_143", Dc = "_errorMsg_1c8dd_191", Wc = "_hintMsg_1c8dd_205", V = {
  root: $c,
  label: wc,
  required: kc,
  wrapper: Nc,
  hasError: xc,
  disabled: jc,
  sm: Bc,
  md: Lc,
  lg: Cc,
  input: Ic,
  stepBtn: Ec,
  errorMsg: Dc,
  hintMsg: Wc
}, Qu = ({
  value: t,
  onChange: o,
  min: n,
  max: s,
  step: a = 1,
  label: i,
  error: c,
  hint: r,
  size: d = "md",
  disabled: l,
  required: u,
  id: b,
  className: p,
  ...v
}) => {
  const y = J(), h = b ?? y, j = `${h}-hint`, g = `${h}-error`, x = () => {
    const $ = (t ?? 0) - a;
    n !== void 0 && $ < n || o?.($);
  }, N = () => {
    const $ = (t ?? 0) + a;
    s !== void 0 && $ > s || o?.($);
  }, m = [
    V.wrapper,
    V[d],
    c ? V.hasError : "",
    l ? V.disabled : "",
    p ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: V.root, children: [
    i && /* @__PURE__ */ _("label", { htmlFor: h, className: V.label, children: [
      i,
      u && /* @__PURE__ */ e("span", { className: V.required, "aria-hidden": "true", children: " *" })
    ] }),
    /* @__PURE__ */ _("div", { className: m, children: [
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: V.stepBtn,
          onClick: x,
          disabled: l || n !== void 0 && (t ?? 0) <= n,
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
          className: V.input,
          value: t,
          min: n,
          max: s,
          step: a,
          disabled: l,
          required: u,
          "aria-invalid": !!c,
          "aria-describedby": c ? g : r ? j : void 0,
          onChange: ($) => o?.($.target.valueAsNumber),
          ...v
        }
      ),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: V.stepBtn,
          onClick: N,
          disabled: l || s !== void 0 && (t ?? 0) >= s,
          "aria-label": "Increase value",
          tabIndex: -1,
          children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M12 5v14M5 12h14" }) })
        }
      )
    ] }),
    c && /* @__PURE__ */ e("p", { id: g, className: V.errorMsg, role: "alert", children: c }),
    !c && r && /* @__PURE__ */ e("p", { id: j, className: V.hintMsg, children: r })
  ] });
}, Tc = "_root_2f4o2_1", qc = "_label_2f4o2_13", Sc = "_zone_2f4o2_27", Rc = "_zoneDisabled_2f4o2_57", Mc = "_dragging_2f4o2_67", Fc = "_zoneError_2f4o2_77", zc = "_hiddenInput_2f4o2_95", Ac = "_uploadIcon_2f4o2_103", Oc = "_zoneText_2f4o2_111", Hc = "_zoneLink_2f4o2_121", Pc = "_zoneHint_2f4o2_135", Uc = "_errorMsg_2f4o2_145", Kc = "_fileList_2f4o2_157", Vc = "_fileItem_2f4o2_175", Gc = "_fileName_2f4o2_195", Xc = "_fileSize_2f4o2_215", Yc = "_removeBtn_2f4o2_227", M = {
  root: Tc,
  label: qc,
  zone: Sc,
  zoneDisabled: Rc,
  dragging: Mc,
  zoneError: Fc,
  hiddenInput: zc,
  uploadIcon: Ac,
  zoneText: Oc,
  zoneLink: Hc,
  zoneHint: Pc,
  errorMsg: Uc,
  fileList: Kc,
  fileItem: Vc,
  fileName: Gc,
  fileSize: Xc,
  removeBtn: Yc
}, Jc = () => /* @__PURE__ */ e("svg", { width: "32", height: "32", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" }) });
function it(t) {
  return t < 1024 ? `${t} B` : t < 1024 * 1024 ? `${(t / 1024).toFixed(1)} KB` : `${(t / (1024 * 1024)).toFixed(1)} MB`;
}
const Zu = ({
  accept: t,
  multiple: o = !1,
  maxSize: n,
  onChange: s,
  label: a,
  hint: i,
  error: c,
  disabled: r = !1,
  className: d,
  id: l
}) => {
  const u = J(), b = l ?? u, p = O(null), [v, y] = K(!1), [h, j] = K([]), [g, x] = K(null), N = c ?? g, m = (I) => {
    if (!I) return;
    const F = Array.from(I);
    if (n && F.filter((be) => be.size > n).length > 0) {
      x(`File exceeds maximum size of ${it(n)}.`);
      return;
    }
    x(null);
    const z = o ? F : F.slice(0, 1);
    j(z), s?.(z);
  }, $ = (I) => {
    I.preventDefault(), y(!1), r || m(I.dataTransfer.files);
  }, w = (I) => {
    const F = h.filter((z, Q) => Q !== I);
    j(F), s?.(F);
  }, E = [
    M.zone,
    v ? M.dragging : "",
    N ? M.zoneError : "",
    r ? M.zoneDisabled : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: [M.root, d ?? ""].filter(Boolean).join(" "), children: [
    a && /* @__PURE__ */ e("span", { className: M.label, children: a }),
    /* @__PURE__ */ _(
      "label",
      {
        htmlFor: b,
        className: E,
        onDragOver: (I) => {
          I.preventDefault(), r || y(!0);
        },
        onDragLeave: () => y(!1),
        onDrop: $,
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: p,
              id: b,
              type: "file",
              accept: t,
              multiple: o,
              disabled: r,
              className: M.hiddenInput,
              onChange: (I) => m(I.target.files)
            }
          ),
          /* @__PURE__ */ e("span", { className: M.uploadIcon, children: /* @__PURE__ */ e(Jc, {}) }),
          /* @__PURE__ */ _("span", { className: M.zoneText, children: [
            /* @__PURE__ */ e("span", { className: M.zoneLink, children: "Choose files" }),
            " or drag and drop"
          ] }),
          i && /* @__PURE__ */ e("span", { className: M.zoneHint, children: i })
        ]
      }
    ),
    N && /* @__PURE__ */ e("p", { className: M.errorMsg, role: "alert", children: N }),
    h.length > 0 && /* @__PURE__ */ e("ul", { className: M.fileList, children: h.map((I, F) => /* @__PURE__ */ _("li", { className: M.fileItem, children: [
      /* @__PURE__ */ e("span", { className: M.fileName, children: I.name }),
      /* @__PURE__ */ e("span", { className: M.fileSize, children: it(I.size) }),
      /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: M.removeBtn,
          onClick: () => w(F),
          "aria-label": `Remove ${I.name}`,
          children: /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2.5, d: "M6 18L18 6M6 6l12 12" }) })
        }
      )
    ] }, F)) })
  ] });
}, Qc = "_wrapper_cy1so_1", Zc = "_table_cy1so_15", ed = "_sm_cy1so_29", td = "_th_cy1so_29", nd = "_td_cy1so_31", od = "_md_cy1so_41", sd = "_lg_cy1so_53", rd = "_thContent_cy1so_85", ad = "_sortable_cy1so_97", id = "_sortActive_cy1so_115", ld = "_sortIcon_cy1so_123", cd = "_tr_cy1so_143", dd = "_striped_cy1so_181", _d = "_bordered_cy1so_199", ud = "_empty_cy1so_209", U = {
  wrapper: Qc,
  table: Zc,
  sm: ed,
  th: td,
  td: nd,
  md: od,
  lg: sd,
  thContent: rd,
  sortable: ad,
  sortActive: id,
  sortIcon: ld,
  tr: cd,
  striped: dd,
  bordered: _d,
  empty: ud
}, hd = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 15l7-7 7 7" }) }), pd = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) }), md = () => /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ e("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 9l4-4 4 4M16 15l-4 4-4-4" }) });
function e1({
  columns: t,
  data: o,
  sortKey: n,
  sortDir: s,
  onSort: a,
  striped: i = !1,
  bordered: c = !1,
  size: r = "md",
  className: d,
  ...l
}) {
  const u = (p) => {
    if (!p.sortable || !a) return;
    const v = n === p.key && s === "asc" ? "desc" : "asc";
    a(p.key, v);
  }, b = [
    U.table,
    U[r],
    i ? U.striped : "",
    c ? U.bordered : ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      className: [U.wrapper, d ?? ""].filter(Boolean).join(" "),
      ...l,
      children: /* @__PURE__ */ _("table", { className: b, children: [
        /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: t.map((p) => {
          const v = n === p.key, y = [
            U.th,
            p.sortable ? U.sortable : "",
            v ? U.sortActive : ""
          ].filter(Boolean).join(" ");
          return /* @__PURE__ */ e(
            "th",
            {
              className: y,
              onClick: () => u(p),
              "aria-sort": v ? s === "asc" ? "ascending" : "descending" : p.sortable ? "none" : void 0,
              children: /* @__PURE__ */ _("span", { className: U.thContent, children: [
                p.header,
                p.sortable && /* @__PURE__ */ e("span", { className: U.sortIcon, children: v ? s === "asc" ? /* @__PURE__ */ e(hd, {}) : /* @__PURE__ */ e(pd, {}) : /* @__PURE__ */ e(md, {}) })
              ] })
            },
            p.key
          );
        }) }) }),
        /* @__PURE__ */ e("tbody", { children: o.length === 0 ? /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e("td", { colSpan: t.length, className: U.empty, children: "No data available." }) }) : o.map((p, v) => /* @__PURE__ */ e("tr", { className: U.tr, children: t.map((y) => {
          const h = p[y.key], j = y.render ? y.render(h, p, v) : h;
          return /* @__PURE__ */ e("td", { className: U.td, children: j }, y.key);
        }) }, v)) })
      ] })
    }
  );
}
const fd = "_root_15xyh_1", bd = "_sent_15xyh_17", vd = "_received_15xyh_25", gd = "_ai_15xyh_27", yd = "_system_15xyh_35", $d = "_avatarSlot_15xyh_45", wd = "_avatar_15xyh_45", kd = "_avatarSpacer_15xyh_73", Nd = "_content_15xyh_83", xd = "_header_15xyh_119", jd = "_username_15xyh_133", Bd = "_time_15xyh_145", Ld = "_bubble_15xyh_157", Cd = "_first_15xyh_213", Id = "_middle_15xyh_221", Ed = "_last_15xyh_229", Dd = "_systemText_15xyh_281", Wd = "_body_15xyh_299", Td = "_cursor_15xyh_309", qd = "_cursorBlink_15xyh_1", Sd = "_footer_15xyh_331", Rd = "_actions_15xyh_345", Md = "_status_15xyh_355", Fd = "_statusRead_15xyh_365", S = {
  root: fd,
  sent: bd,
  received: vd,
  ai: gd,
  system: yd,
  avatarSlot: $d,
  avatar: wd,
  avatarSpacer: kd,
  content: Nd,
  header: xd,
  username: jd,
  time: Bd,
  bubble: Ld,
  first: Cd,
  middle: Id,
  last: Ed,
  systemText: Dd,
  body: Wd,
  cursor: Td,
  cursorBlink: qd,
  footer: Sd,
  actions: Rd,
  status: Md,
  statusRead: Fd
};
function zd() {
  return /* @__PURE__ */ e("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("polyline", { points: "20 6 9 17 4 12" }) });
}
function lt() {
  return /* @__PURE__ */ _("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M18 6 7 17l-5-5" }),
    /* @__PURE__ */ e("path", { d: "m22 10-9.5 9.5L10 17" })
  ] });
}
const Ad = {
  sent: /* @__PURE__ */ e(zd, {}),
  delivered: /* @__PURE__ */ e(lt, {}),
  read: /* @__PURE__ */ e(lt, {})
}, t1 = ({
  variant: t = "received",
  avatar: o,
  username: n,
  timestamp: s,
  status: a,
  grouping: i = "single",
  isStreaming: c = !1,
  actions: r,
  children: d,
  className: l,
  ...u
}) => {
  const b = [
    S.root,
    S[t],
    S[i],
    l ?? ""
  ].filter(Boolean).join(" ");
  if (t === "system")
    return /* @__PURE__ */ e("div", { className: b, ...u, children: /* @__PURE__ */ e("div", { className: S.systemText, children: d }) });
  const p = o && (i === "single" || i === "last"), v = (n || s) && (i === "single" || i === "first");
  return /* @__PURE__ */ _("div", { className: b, ...u, children: [
    /* @__PURE__ */ e("div", { className: S.avatarSlot, children: p ? /* @__PURE__ */ e("div", { className: S.avatar, children: o }) : /* @__PURE__ */ e("div", { className: S.avatarSpacer }) }),
    /* @__PURE__ */ _("div", { className: S.content, children: [
      v && /* @__PURE__ */ _("div", { className: S.header, children: [
        n && /* @__PURE__ */ e("span", { className: S.username, children: n }),
        s && /* @__PURE__ */ e("span", { className: S.time, children: s })
      ] }),
      /* @__PURE__ */ e("div", { className: S.bubble, children: /* @__PURE__ */ _("div", { className: S.body, children: [
        d,
        c && /* @__PURE__ */ e("span", { className: S.cursor, "aria-hidden": "true" })
      ] }) }),
      (r || a) && /* @__PURE__ */ _("div", { className: S.footer, children: [
        r && /* @__PURE__ */ e("div", { className: S.actions, children: r }),
        a && t === "sent" && /* @__PURE__ */ e("span", { className: `${S.status} ${a === "read" ? S.statusRead : ""}`, "aria-label": a, children: Ad[a] })
      ] })
    ] })
  ] });
}, Od = "_root_1p5af_1", Hd = "_disabled_1p5af_32", Pd = "_textarea_1p5af_42", Ud = "_slot_1p5af_90", Kd = "_sendButton_1p5af_102", Be = {
  root: Od,
  disabled: Hd,
  textarea: Pd,
  slot: Ud,
  sendButton: Kd
};
function Vd() {
  return /* @__PURE__ */ _("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("line", { x1: "22", y1: "2", x2: "11", y2: "13" }),
    /* @__PURE__ */ e("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
  ] });
}
const Gd = k.forwardRef(
  ({
    value: t,
    onChange: o,
    onSend: n,
    onAttach: s,
    maxRows: a = 5,
    leftSlot: i,
    rightSlot: c,
    showSendButton: r = !0,
    sendOnEnter: d = !0,
    placeholder: l = "Type a message…",
    disabled: u,
    className: b,
    ...p
  }, v) => {
    const y = O(null), h = v ?? y, j = Ie(() => {
      const w = h.current;
      if (!w) return;
      w.style.height = "auto";
      const I = (parseFloat(getComputedStyle(w).lineHeight) || 20) * a;
      w.style.height = `${Math.min(w.scrollHeight, I)}px`;
    }, [a, h]);
    oe(() => {
      j();
    }, [t, j]);
    const g = (w) => {
      o?.(w.target.value), j();
    }, x = () => {
      const w = h.current?.value ?? t ?? "";
      w.trim() && n && n(w.trim());
    }, N = (w) => {
      d && w.key === "Enter" && !w.shiftKey && (w.preventDefault(), x()), p.onKeyDown?.(w);
    }, m = [Be.root, u ? Be.disabled : "", b ?? ""].filter(Boolean).join(" "), $ = (t ?? h.current?.value ?? "").trim().length > 0;
    return /* @__PURE__ */ _("div", { className: m, children: [
      i && /* @__PURE__ */ e("div", { className: Be.slot, children: i }),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: h,
          className: Be.textarea,
          value: t,
          onChange: g,
          onKeyDown: N,
          placeholder: l,
          disabled: u,
          rows: 1,
          ...p
        }
      ),
      c && /* @__PURE__ */ e("div", { className: Be.slot, children: c }),
      r && /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          className: Be.sendButton,
          onClick: x,
          disabled: u || !$,
          "aria-label": "Send message",
          children: /* @__PURE__ */ e(Vd, {})
        }
      )
    ] });
  }
);
Gd.displayName = "ChatInput";
const Xd = "_list_1rcm3_1", Yd = "_empty_1rcm3_13", Jd = "_item_1rcm3_27", Qd = "_active_1rcm3_75", Zd = "_avatarWrapper_1rcm3_91", e_ = "_avatar_1rcm3_91", t_ = "_avatarFallback_1rcm3_121", n_ = "_onlineDot_1rcm3_147", o_ = "_info_1rcm3_169", s_ = "_topRow_1rcm3_185", r_ = "_name_1rcm3_199", a_ = "_time_1rcm3_217", i_ = "_lastMessage_1rcm3_231", l_ = "_unread_1rcm3_249", A = {
  list: Xd,
  empty: Yd,
  item: Jd,
  active: Qd,
  avatarWrapper: Zd,
  avatar: e_,
  avatarFallback: t_,
  onlineDot: n_,
  info: o_,
  topRow: s_,
  name: r_,
  time: a_,
  lastMessage: i_,
  unread: l_
}, n1 = ({
  conversations: t,
  activeId: o,
  onSelect: n,
  emptyText: s = "No conversations",
  className: a,
  ...i
}) => {
  const c = [A.list, a ?? ""].filter(Boolean).join(" ");
  return t.length === 0 ? /* @__PURE__ */ e("div", { className: c, ...i, children: /* @__PURE__ */ e("p", { className: A.empty, children: s }) }) : /* @__PURE__ */ e("div", { className: c, role: "listbox", "aria-label": "Conversations", ...i, children: t.map((r) => {
    const d = r.id === o, l = [A.item, d ? A.active : ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ _(
      "button",
      {
        type: "button",
        role: "option",
        "aria-selected": d,
        className: l,
        onClick: () => n?.(r.id),
        children: [
          /* @__PURE__ */ _("div", { className: A.avatarWrapper, children: [
            r.avatar ? /* @__PURE__ */ e("div", { className: A.avatar, children: r.avatar }) : /* @__PURE__ */ e("div", { className: A.avatarFallback, "aria-hidden": "true", children: r.name.charAt(0).toUpperCase() }),
            r.online && /* @__PURE__ */ e("span", { className: A.onlineDot, "aria-label": "Online" })
          ] }),
          /* @__PURE__ */ _("div", { className: A.info, children: [
            /* @__PURE__ */ _("div", { className: A.topRow, children: [
              /* @__PURE__ */ e("span", { className: A.name, children: r.name }),
              r.timestamp && /* @__PURE__ */ e("span", { className: A.time, children: r.timestamp })
            ] }),
            r.lastMessage && /* @__PURE__ */ e("p", { className: A.lastMessage, children: r.lastMessage })
          ] }),
          r.unread != null && r.unread > 0 && /* @__PURE__ */ e("span", { className: A.unread, "aria-label": `${r.unread} unread`, children: r.unread > 99 ? "99+" : r.unread })
        ]
      },
      r.id
    );
  }) });
}, c_ = "_window_4qdpb_1", d_ = "_header_4qdpb_21", __ = "_messages_4qdpb_29", u_ = "_footer_4qdpb_47", Ke = {
  window: c_,
  header: d_,
  messages: __,
  footer: u_
}, h_ = k.forwardRef(
  ({ header: t, footer: o, autoScroll: n = !0, children: s, className: a, ...i }, c) => {
    const r = O(null);
    oe(() => {
      n && r.current && (r.current.scrollTop = r.current.scrollHeight);
    }, [s, n]);
    const d = [Ke.window, a ?? ""].filter(Boolean).join(" ");
    return /* @__PURE__ */ _("div", { ref: c, className: d, ...i, children: [
      t && /* @__PURE__ */ e("div", { className: Ke.header, children: t }),
      /* @__PURE__ */ e("div", { ref: r, className: Ke.messages, children: s }),
      o && /* @__PURE__ */ e("div", { className: Ke.footer, children: o })
    ] });
  }
);
h_.displayName = "ChatWindow";
const p_ = "_header_1vji5_1", m_ = "_left_1vji5_23", f_ = "_backButton_1vji5_39", b_ = "_avatarWrapper_1vji5_89", v_ = "_avatar_1vji5_89", g_ = "_statusDot_1vji5_119", y_ = "_online_1vji5_139", $_ = "_offline_1vji5_147", w_ = "_away_1vji5_155", k_ = "_info_1vji5_163", N_ = "_title_1vji5_175", x_ = "_subtitle_1vji5_193", j_ = "_actions_1vji5_209", Y = {
  header: p_,
  left: m_,
  backButton: f_,
  avatarWrapper: b_,
  avatar: v_,
  statusDot: g_,
  online: y_,
  offline: $_,
  away: w_,
  info: k_,
  title: N_,
  subtitle: x_,
  actions: j_
};
function B_() {
  return /* @__PURE__ */ _("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
    /* @__PURE__ */ e("polyline", { points: "12 19 5 12 12 5" })
  ] });
}
const o1 = ({
  title: t,
  subtitle: o,
  avatar: n,
  status: s,
  actions: a,
  onBack: i,
  className: c,
  ...r
}) => {
  const d = [Y.header, c ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: d, ...r, children: [
    /* @__PURE__ */ _("div", { className: Y.left, children: [
      i && /* @__PURE__ */ e("button", { type: "button", className: Y.backButton, onClick: i, "aria-label": "Go back", children: /* @__PURE__ */ e(B_, {}) }),
      n && /* @__PURE__ */ _("div", { className: Y.avatarWrapper, children: [
        /* @__PURE__ */ e("div", { className: Y.avatar, children: n }),
        s && /* @__PURE__ */ e("span", { className: `${Y.statusDot} ${Y[s]}`, "aria-label": s })
      ] }),
      /* @__PURE__ */ _("div", { className: Y.info, children: [
        /* @__PURE__ */ e("span", { className: Y.title, children: t }),
        o && /* @__PURE__ */ e("span", { className: Y.subtitle, children: o })
      ] })
    ] }),
    a && /* @__PURE__ */ e("div", { className: Y.actions, children: a })
  ] });
}, L_ = "_indicator_1qihv_1", C_ = "_dots_1qihv_15", I_ = "_dot_1qihv_15", E_ = "_text_1qihv_67", Le = {
  indicator: L_,
  dots: C_,
  dot: I_,
  text: E_
};
function D_(t) {
  return t.length === 0 ? "" : t.length === 1 ? `${t[0]} is typing` : t.length === 2 ? `${t[0]} and ${t[1]} are typing` : `${t[0]} and ${t.length - 1} others are typing`;
}
const s1 = ({
  users: t = [],
  className: o,
  ...n
}) => {
  const s = [Le.indicator, o ?? ""].filter(Boolean).join(" "), a = D_(t);
  return /* @__PURE__ */ _("div", { className: s, role: "status", "aria-label": a || "Someone is typing", ...n, children: [
    /* @__PURE__ */ _("span", { className: Le.dots, "aria-hidden": "true", children: [
      /* @__PURE__ */ e("span", { className: Le.dot }),
      /* @__PURE__ */ e("span", { className: Le.dot }),
      /* @__PURE__ */ e("span", { className: Le.dot })
    ] }),
    a && /* @__PURE__ */ e("span", { className: Le.text, children: a })
  ] });
}, W_ = "_timestamp_1hxhr_1", T_ = "_line_1hxhr_17", q_ = "_text_1hxhr_29", Ve = {
  timestamp: W_,
  line: T_,
  text: q_
}, r1 = ({
  children: t,
  className: o,
  ...n
}) => {
  const s = [Ve.timestamp, o ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: s, role: "separator", "aria-label": typeof t == "string" ? t : void 0, ...n, children: [
    /* @__PURE__ */ e("span", { className: Ve.line, "aria-hidden": "true" }),
    /* @__PURE__ */ e("span", { className: Ve.text, children: t }),
    /* @__PURE__ */ e("span", { className: Ve.line, "aria-hidden": "true" })
  ] });
}, S_ = "_reaction_1ehup_1", R_ = "_active_1ehup_49", M_ = "_emoji_1ehup_69", F_ = "_count_1ehup_79", Ge = {
  reaction: S_,
  active: R_,
  emoji: M_,
  count: F_
}, z_ = k.forwardRef(
  ({ emoji: t, count: o = 1, active: n = !1, className: s, ...a }, i) => {
    const c = [
      Ge.reaction,
      n ? Ge.active : "",
      s ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ _(
      "button",
      {
        ref: i,
        type: "button",
        className: c,
        "aria-pressed": n,
        "aria-label": `${t} ${o}`,
        ...a,
        children: [
          /* @__PURE__ */ e("span", { className: Ge.emoji, children: t }),
          /* @__PURE__ */ e("span", { className: Ge.count, children: o })
        ]
      }
    );
  }
);
z_.displayName = "ChatReaction";
const A_ = "_attachment_182ke_1", O_ = "_file_182ke_17", H_ = "_video_182ke_19", P_ = "_audio_182ke_21", U_ = "_icon_182ke_35", K_ = "_info_182ke_59", V_ = "_fileName_182ke_75", G_ = "_fileSize_182ke_93", X_ = "_downloadButton_182ke_103", Y_ = "_image_182ke_155", J_ = "_imageButton_182ke_171", le = {
  attachment: A_,
  file: O_,
  video: H_,
  audio: P_,
  icon: U_,
  info: K_,
  fileName: V_,
  fileSize: G_,
  downloadButton: X_,
  image: Y_,
  imageButton: J_
};
function yt() {
  return /* @__PURE__ */ _("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ e("polyline", { points: "14 2 14 8 20 8" })
  ] });
}
function Q_() {
  return /* @__PURE__ */ e("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ e("polygon", { points: "5 3 19 12 5 21 5 3" }) });
}
function Z_() {
  return /* @__PURE__ */ _("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M9 18V5l12-2v13" }),
    /* @__PURE__ */ e("circle", { cx: "6", cy: "18", r: "3" }),
    /* @__PURE__ */ e("circle", { cx: "18", cy: "16", r: "3" })
  ] });
}
function eu() {
  return /* @__PURE__ */ _("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ e("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ e("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ e("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] });
}
const tu = {
  file: yt,
  video: Q_,
  audio: Z_
}, a1 = ({
  variant: t = "file",
  src: o,
  fileName: n,
  fileSize: s,
  onDownload: a,
  onPreview: i,
  className: c,
  ...r
}) => {
  const d = [le.attachment, le[t], c ?? ""].filter(Boolean).join(" ");
  if (t === "image" && o)
    return /* @__PURE__ */ e("div", { className: d, ...r, children: /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: le.imageButton,
        onClick: i,
        "aria-label": n ? `Preview ${n}` : "Preview image",
        children: /* @__PURE__ */ e("img", { src: o, alt: n ?? "Attachment", className: le.image, loading: "lazy" })
      }
    ) });
  const l = tu[t] ?? yt;
  return /* @__PURE__ */ _("div", { className: d, ...r, children: [
    /* @__PURE__ */ e("span", { className: le.icon, "aria-hidden": "true", children: /* @__PURE__ */ e(l, {}) }),
    /* @__PURE__ */ _("div", { className: le.info, children: [
      /* @__PURE__ */ e("span", { className: le.fileName, children: n ?? "File" }),
      s && /* @__PURE__ */ e("span", { className: le.fileSize, children: s })
    ] }),
    a && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: le.downloadButton,
        onClick: a,
        "aria-label": `Download ${n ?? "file"}`,
        children: /* @__PURE__ */ e(eu, {})
      }
    )
  ] });
}, nu = "_status_5u1vj_1", ou = "_dot_5u1vj_15", su = "_label_5u1vj_27", ru = "_sm_5u1vj_39", au = "_md_5u1vj_49", iu = "_lg_5u1vj_59", lu = "_online_5u1vj_71", cu = "_offline_5u1vj_79", du = "_away_5u1vj_87", _u = "_busy_5u1vj_95", uu = "_dnd_5u1vj_103", hu = "_pulse_5u1vj_113", pu = "_statusPulse_5u1vj_1", Ce = {
  status: nu,
  dot: ou,
  label: su,
  sm: ru,
  md: au,
  lg: iu,
  online: lu,
  offline: cu,
  away: du,
  busy: _u,
  dnd: uu,
  pulse: hu,
  statusPulse: pu
}, ct = {
  online: "Online",
  offline: "Offline",
  away: "Away",
  busy: "Busy",
  dnd: "Do not disturb"
}, i1 = ({
  variant: t = "offline",
  size: o = "md",
  showLabel: n = !1,
  pulse: s = !1,
  className: a,
  ...i
}) => {
  const c = [
    Ce.status,
    Ce[t],
    Ce[o],
    s && t === "online" ? Ce.pulse : "",
    a ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("span", { className: c, role: "status", "aria-label": ct[t], ...i, children: [
    /* @__PURE__ */ e("span", { className: Ce.dot, "aria-hidden": "true" }),
    n && /* @__PURE__ */ e("span", { className: Ce.label, children: ct[t] })
  ] });
}, mu = "_thread_jgvzj_1", fu = "_summary_jgvzj_13", bu = "_participants_jgvzj_59", vu = "_participant_jgvzj_59", gu = "_replyText_jgvzj_99", yu = "_lastReply_jgvzj_113", $u = "_content_jgvzj_125", wu = "_expanded_jgvzj_139", ue = {
  thread: mu,
  summary: fu,
  participants: bu,
  participant: vu,
  replyText: gu,
  lastReply: yu,
  content: $u,
  expanded: wu
};
function ku({ expanded: t }) {
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
const l1 = ({
  replyCount: t = 0,
  lastReplyTimestamp: o,
  participants: n = [],
  expanded: s = !1,
  onToggle: a,
  children: i,
  className: c,
  ...r
}) => {
  const d = [ue.thread, s ? ue.expanded : "", c ?? ""].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: d, ...r, children: [
    /* @__PURE__ */ _(
      "button",
      {
        type: "button",
        className: ue.summary,
        onClick: a,
        "aria-expanded": s,
        children: [
          n.length > 0 && /* @__PURE__ */ e("div", { className: ue.participants, children: n.slice(0, 3).map((l, u) => /* @__PURE__ */ e("span", { className: ue.participant, "aria-hidden": "true", children: l }, u)) }),
          /* @__PURE__ */ e("span", { className: ue.replyText, children: t === 1 ? "1 reply" : `${t} replies` }),
          o && /* @__PURE__ */ _("span", { className: ue.lastReply, children: [
            "Last reply ",
            o
          ] }),
          /* @__PURE__ */ e(ku, { expanded: s })
        ]
      }
    ),
    s && i && /* @__PURE__ */ e("div", { className: ue.content, children: i })
  ] });
};
export {
  qu as Accordion,
  Su as Alert,
  Cu as AnimatedBackground,
  Hu as Avatar,
  Lu as Badge,
  Ku as Breadcrumb,
  Vt as Button,
  Xe as Card,
  a1 as ChatAttachment,
  t1 as ChatBubble,
  o1 as ChatHeader,
  Gd as ChatInput,
  n1 as ChatList,
  z_ as ChatReaction,
  i1 as ChatStatus,
  l1 as ChatThread,
  r1 as ChatTimestamp,
  h_ as ChatWindow,
  Gs as Checkbox,
  Ye as Dialog,
  Ru as Divider,
  Yu as Dropdown,
  Uu as EmptyState,
  Zu as FileUpload,
  Iu as GradientOrbs,
  Eu as GridGlow,
  kn as Input,
  Qu as NumberInput,
  Vu as Pagination,
  Xu as Popover,
  zu as Progress,
  Du as RadioGroup,
  Ss as Select,
  Fu as Skeleton,
  Ju as Slider,
  Mu as Spinner,
  Gu as Stepper,
  xr as Switch,
  e1 as Table,
  Tu as Tabs,
  Pu as Tag,
  is as Textarea,
  Bu as Title,
  Au as ToastProvider,
  Wu as Tooltip,
  s1 as TypingIndicator,
  Ou as useToast
};
