import { jsxs as f, jsx as _ } from "react/jsx-runtime";
import $ from "react";
const R = "_button_u2ihs_1", L = "_loading_u2ihs_51", j = "_sm_u2ihs_65", F = "_md_u2ihs_77", W = "_lg_u2ihs_89", H = "_primary_u2ihs_103", T = "_secondary_u2ihs_129", z = "_outline_u2ihs_155", S = "_ghost_u2ihs_179", E = "_danger_u2ihs_201", M = "_fullWidth_u2ihs_227", k = "_spinner_u2ihs_237", A = "_spin_u2ihs_237", m = {
  button: R,
  loading: L,
  sm: j,
  md: F,
  lg: W,
  primary: H,
  secondary: T,
  outline: z,
  ghost: S,
  danger: E,
  fullWidth: M,
  spinner: k,
  spin: A
}, D = $.forwardRef(
  ({
    variant: t = "primary",
    size: e = "md",
    loading: s = !1,
    fullWidth: a = !1,
    leftIcon: o,
    rightIcon: r,
    children: c,
    className: d,
    disabled: p,
    ...h
  }, b) => {
    const y = [
      m.button,
      m[t],
      m[e],
      a ? m.fullWidth : "",
      s ? m.loading : "",
      d ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ f(
      "button",
      {
        ref: b,
        className: y,
        disabled: p || s,
        "aria-busy": s,
        ...h,
        children: [
          s && /* @__PURE__ */ _("span", { className: m.spinner, "aria-hidden": "true" }),
          !s && o && /* @__PURE__ */ _("span", { "aria-hidden": "true", children: o }),
          c,
          !s && r && /* @__PURE__ */ _("span", { "aria-hidden": "true", children: r })
        ]
      }
    );
  }
);
D.displayName = "Button";
const G = "_wrapper_1fgvp_1", J = "_label_1fgvp_15", K = "_required_1fgvp_29", O = "_inputWrapper_1fgvp_39", P = "_input_1fgvp_39", Q = "_error_1fgvp_109", U = "_sm_1fgvp_127", V = "_md_1fgvp_139", X = "_lg_1fgvp_151", Y = "_hasLeft_1fgvp_165", Z = "_hasRight_1fgvp_173", I = "_iconLeft_1fgvp_181", ss = "_iconRight_1fgvp_183", ts = "_hint_1fgvp_219", es = "_errorText_1fgvp_231", n = {
  wrapper: G,
  label: J,
  required: K,
  inputWrapper: O,
  input: P,
  error: Q,
  sm: U,
  md: V,
  lg: X,
  hasLeft: Y,
  hasRight: Z,
  iconLeft: I,
  iconRight: ss,
  hint: ts,
  errorText: es
}, _s = $.forwardRef(
  ({
    label: t,
    size: e = "md",
    error: s,
    hint: a,
    leftIcon: o,
    rightIcon: r,
    required: c,
    fullWidth: d,
    className: p,
    id: h,
    ...b
  }, y) => {
    const l = h ?? (t ? `vui-input-${t.toLowerCase().replace(/\s+/g, "-")}` : void 0), x = l ? `${l}-error` : void 0, w = l ? `${l}-hint` : void 0, C = [
      n.input,
      n[e],
      s ? n.error : "",
      o ? n.hasLeft : "",
      r ? n.hasRight : "",
      p ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ f("div", { className: `${n.wrapper} `, children: [
      t && /* @__PURE__ */ f("label", { htmlFor: l, className: n.label, children: [
        t,
        c && /* @__PURE__ */ _("span", { className: n.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ f("div", { className: n.inputWrapper, children: [
        o && /* @__PURE__ */ _("span", { className: n.iconLeft, "aria-hidden": "true", children: o }),
        /* @__PURE__ */ _(
          "input",
          {
            ref: y,
            id: l,
            className: C,
            required: c,
            "aria-invalid": !!s,
            "aria-describedby": [s ? x : null, a ? w : null].filter(Boolean).join(" ") || void 0,
            ...b
          }
        ),
        r && /* @__PURE__ */ _("span", { className: n.iconRight, "aria-hidden": "true", children: r })
      ] }),
      s && /* @__PURE__ */ _("span", { id: x, className: n.errorText, role: "alert", children: s }),
      a && !s && /* @__PURE__ */ _("span", { id: w, className: n.hint, children: a })
    ] });
  }
);
_s.displayName = "Input";
const ns = "_title_3f7c8_1", as = "_xs_3f7c8_17", os = "_sm_3f7c8_27", rs = "_md_3f7c8_37", cs = "_lg_3f7c8_47", ds = "_xl_3f7c8_57", is = "_xxl_3f7c8_67", ls = "_light_3f7c8_79", ms = "_normal_3f7c8_87", ps = "_medium_3f7c8_95", hs = "_semibold_3f7c8_103", us = "_bold_3f7c8_111", fs = "_extrabold_3f7c8_119", gs = "_left_3f7c8_129", vs = "_center_3f7c8_137", bs = "_right_3f7c8_145", ys = "_muted_3f7c8_163", $s = "_primary_3f7c8_171", xs = "_gradient_3f7c8_179", u = {
  title: ns,
  xs: as,
  sm: os,
  md: rs,
  lg: cs,
  xl: ds,
  xxl: is,
  light: ls,
  normal: ms,
  medium: ps,
  semibold: hs,
  bold: us,
  extrabold: fs,
  left: gs,
  center: vs,
  right: bs,
  default: "_default_3f7c8_155",
  muted: ys,
  primary: $s,
  gradient: xs
}, ws = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs"
}, Vs = ({
  level: t = "h1",
  size: e,
  weight: s = "bold",
  align: a = "left",
  color: o = "default",
  children: r,
  className: c,
  ...d
}) => {
  const p = e ?? ws[t], h = [
    u.title,
    u[p],
    u[s],
    u[a],
    u[o],
    c ?? ""
  ].filter(Boolean).join(" ");
  return $.createElement(t, { className: h, ...d }, r);
}, Ns = "_badge_26q6t_1", Bs = "_sm_26q6t_27", qs = "_md_26q6t_37", Cs = "_lg_26q6t_47", Rs = "_info_26q6t_71", Ls = "_success_26q6t_83", js = "_warning_26q6t_95", Fs = "_danger_26q6t_107", Ws = "_primary_26q6t_119", Hs = "_dot_26q6t_133", g = {
  badge: Ns,
  sm: Bs,
  md: qs,
  lg: Cs,
  default: "_default_26q6t_59",
  info: Rs,
  success: Ls,
  warning: js,
  danger: Fs,
  primary: Ws,
  dot: Hs
}, Xs = ({
  variant: t = "default",
  size: e = "md",
  dot: s = !1,
  leftIcon: a,
  children: o,
  className: r,
  ...c
}) => {
  const d = [
    g.badge,
    g[t],
    g[e],
    r ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f("span", { className: d, ...c, children: [
    s && /* @__PURE__ */ _("span", { className: g.dot, "aria-hidden": "true" }),
    !s && a && /* @__PURE__ */ _("span", { "aria-hidden": "true", children: a }),
    o
  ] });
}, Ts = "_card_pl1wm_1", zs = "_bordered_pl1wm_21", Ss = "_shadow_pl1wm_29", Es = "_elevated_pl1wm_37", Ms = "_ghost_pl1wm_45", ks = "_sm_pl1wm_57", As = "_cardHeader_pl1wm_57", Ds = "_cardBody_pl1wm_59", Gs = "_cardFooter_pl1wm_61", Js = "_md_pl1wm_69", Ks = "_lg_pl1wm_81", Os = "_hoverable_pl1wm_143", i = {
  card: Ts,
  bordered: zs,
  shadow: Ss,
  elevated: Es,
  ghost: Ms,
  sm: ks,
  cardHeader: As,
  cardBody: Ds,
  cardFooter: Gs,
  md: Js,
  lg: Ks,
  hoverable: Os
}, N = ({ children: t, className: e, ...s }) => /* @__PURE__ */ _("div", { className: `${i.cardHeader} ${e ?? ""}`, ...s, children: t });
N.displayName = "Card.Header";
const B = ({ children: t, className: e, ...s }) => /* @__PURE__ */ _("div", { className: `${i.cardBody} ${e ?? ""}`, ...s, children: t });
B.displayName = "Card.Body";
const q = ({ children: t, className: e, ...s }) => /* @__PURE__ */ _("div", { className: `${i.cardFooter} ${e ?? ""}`, ...s, children: t });
q.displayName = "Card.Footer";
const Ps = ({
  variant: t = "bordered",
  size: e = "md",
  hoverable: s = !1,
  children: a,
  className: o,
  ...r
}) => {
  const c = [
    i.card,
    i[t],
    i[e],
    s ? i.hoverable : "",
    o ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ _("div", { className: c, ...r, children: a });
}, v = Ps;
v.Header = N;
v.Body = B;
v.Footer = q;
v.displayName = "Card";
export {
  Xs as Badge,
  D as Button,
  v as Card,
  _s as Input,
  Vs as Title
};
