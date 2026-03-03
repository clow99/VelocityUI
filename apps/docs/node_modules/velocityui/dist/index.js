import { jsxs as f, jsx as a } from "react/jsx-runtime";
import y from "react";
const R = "_button_ltras_1", L = "_loading_ltras_49", F = "_sm_ltras_63", W = "_md_ltras_75", H = "_lg_ltras_87", T = "_primary_ltras_101", q = "_secondary_ltras_125", z = "_outline_ltras_149", S = "_ghost_ltras_173", E = "_danger_ltras_195", M = "_fullWidth_ltras_219", k = "_spinner_ltras_229", A = "_spin_ltras_229", m = {
  button: R,
  loading: L,
  sm: F,
  md: W,
  lg: H,
  primary: T,
  secondary: q,
  outline: z,
  ghost: S,
  danger: E,
  fullWidth: M,
  spinner: k,
  spin: A
}, D = y.forwardRef(
  ({
    variant: e = "primary",
    size: t = "md",
    loading: s = !1,
    fullWidth: r = !1,
    leftIcon: _,
    rightIcon: n,
    children: d,
    className: i,
    disabled: p,
    ...h
  }, b) => {
    const w = [
      m.button,
      m[e],
      m[t],
      r ? m.fullWidth : "",
      s ? m.loading : "",
      i ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ f(
      "button",
      {
        ref: b,
        className: w,
        disabled: p || s,
        "aria-busy": s,
        ...h,
        children: [
          s && /* @__PURE__ */ a("span", { className: m.spinner, "aria-hidden": "true" }),
          !s && _ && /* @__PURE__ */ a("span", { "aria-hidden": "true", children: _ }),
          d,
          !s && n && /* @__PURE__ */ a("span", { "aria-hidden": "true", children: n })
        ]
      }
    );
  }
);
D.displayName = "Button";
const G = "_wrapper_2xp0m_1", J = "_label_2xp0m_15", K = "_required_2xp0m_29", O = "_inputWrapper_2xp0m_39", P = "_input_2xp0m_39", Q = "_error_2xp0m_107", U = "_sm_2xp0m_125", V = "_md_2xp0m_137", X = "_lg_2xp0m_149", Y = "_hasLeft_2xp0m_163", Z = "_hasRight_2xp0m_171", I = "_iconLeft_2xp0m_179", ss = "_iconRight_2xp0m_181", es = "_hint_2xp0m_217", ts = "_errorText_2xp0m_229", o = {
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
  hint: es,
  errorText: ts
}, as = y.forwardRef(
  ({
    label: e,
    size: t = "md",
    error: s,
    hint: r,
    leftIcon: _,
    rightIcon: n,
    required: d,
    fullWidth: i,
    className: p,
    id: h,
    ...b
  }, w) => {
    const c = h ?? (e ? `vui-input-${e.toLowerCase().replace(/\s+/g, "-")}` : void 0), $ = c ? `${c}-error` : void 0, v = c ? `${c}-hint` : void 0, C = [
      o.input,
      o[t],
      s ? o.error : "",
      _ ? o.hasLeft : "",
      n ? o.hasRight : "",
      p ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ f("div", { className: `${o.wrapper} `, children: [
      e && /* @__PURE__ */ f("label", { htmlFor: c, className: o.label, children: [
        e,
        d && /* @__PURE__ */ a("span", { className: o.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ f("div", { className: o.inputWrapper, children: [
        _ && /* @__PURE__ */ a("span", { className: o.iconLeft, "aria-hidden": "true", children: _ }),
        /* @__PURE__ */ a(
          "input",
          {
            ref: w,
            id: c,
            className: C,
            required: d,
            "aria-invalid": !!s,
            "aria-describedby": [s ? $ : null, r ? v : null].filter(Boolean).join(" ") || void 0,
            ...b
          }
        ),
        n && /* @__PURE__ */ a("span", { className: o.iconRight, "aria-hidden": "true", children: n })
      ] }),
      s && /* @__PURE__ */ a("span", { id: $, className: o.errorText, role: "alert", children: s }),
      r && !s && /* @__PURE__ */ a("span", { id: v, className: o.hint, children: r })
    ] });
  }
);
as.displayName = "Input";
const os = "_title_jpifw_1", rs = "_xs_jpifw_17", _s = "_sm_jpifw_27", ns = "_md_jpifw_37", ds = "_lg_jpifw_47", is = "_xl_jpifw_57", ls = "_xxl_jpifw_67", cs = "_light_jpifw_79", ms = "_normal_jpifw_87", ps = "_medium_jpifw_95", hs = "_semibold_jpifw_103", us = "_bold_jpifw_111", fs = "_extrabold_jpifw_119", gs = "_left_jpifw_129", xs = "_center_jpifw_137", bs = "_right_jpifw_145", ws = "_muted_jpifw_163", ys = "_primary_jpifw_171", $s = "_gradient_jpifw_179", u = {
  title: os,
  xs: rs,
  sm: _s,
  md: ns,
  lg: ds,
  xl: is,
  xxl: ls,
  light: cs,
  normal: ms,
  medium: ps,
  semibold: hs,
  bold: us,
  extrabold: fs,
  left: gs,
  center: xs,
  right: bs,
  default: "_default_jpifw_155",
  muted: ws,
  primary: ys,
  gradient: $s
}, vs = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs"
}, Vs = ({
  level: e = "h1",
  size: t,
  weight: s = "bold",
  align: r = "left",
  color: _ = "default",
  children: n,
  className: d,
  ...i
}) => {
  const p = t ?? vs[e], h = [
    u.title,
    u[p],
    u[s],
    u[r],
    u[_],
    d ?? ""
  ].filter(Boolean).join(" ");
  return y.createElement(e, { className: h, ...i }, n);
}, js = "_badge_ev71s_1", Ns = "_sm_ev71s_27", Bs = "_md_ev71s_37", Cs = "_lg_ev71s_47", Rs = "_info_ev71s_71", Ls = "_success_ev71s_83", Fs = "_warning_ev71s_95", Ws = "_danger_ev71s_107", Hs = "_primary_ev71s_119", Ts = "_dot_ev71s_133", g = {
  badge: js,
  sm: Ns,
  md: Bs,
  lg: Cs,
  default: "_default_ev71s_59",
  info: Rs,
  success: Ls,
  warning: Fs,
  danger: Ws,
  primary: Hs,
  dot: Ts
}, Xs = ({
  variant: e = "default",
  size: t = "md",
  dot: s = !1,
  leftIcon: r,
  children: _,
  className: n,
  ...d
}) => {
  const i = [
    g.badge,
    g[e],
    g[t],
    n ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ f("span", { className: i, ...d, children: [
    s && /* @__PURE__ */ a("span", { className: g.dot, "aria-hidden": "true" }),
    !s && r && /* @__PURE__ */ a("span", { "aria-hidden": "true", children: r }),
    _
  ] });
}, qs = "_card_ol129_1", zs = "_bordered_ol129_19", Ss = "_shadow_ol129_27", Es = "_elevated_ol129_35", Ms = "_ghost_ol129_43", ks = "_sm_ol129_55", As = "_cardHeader_ol129_55", Ds = "_cardBody_ol129_57", Gs = "_cardFooter_ol129_59", Js = "_md_ol129_67", Ks = "_lg_ol129_79", Os = "_hoverable_ol129_137", l = {
  card: qs,
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
}, j = ({ children: e, className: t, ...s }) => /* @__PURE__ */ a("div", { className: `${l.cardHeader} ${t ?? ""}`, ...s, children: e });
j.displayName = "Card.Header";
const N = ({ children: e, className: t, ...s }) => /* @__PURE__ */ a("div", { className: `${l.cardBody} ${t ?? ""}`, ...s, children: e });
N.displayName = "Card.Body";
const B = ({ children: e, className: t, ...s }) => /* @__PURE__ */ a("div", { className: `${l.cardFooter} ${t ?? ""}`, ...s, children: e });
B.displayName = "Card.Footer";
const Ps = ({
  variant: e = "bordered",
  size: t = "md",
  hoverable: s = !1,
  children: r,
  className: _,
  ...n
}) => {
  const d = [
    l.card,
    l[e],
    l[t],
    s ? l.hoverable : "",
    _ ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ a("div", { className: d, ...n, children: r });
}, x = Ps;
x.Header = j;
x.Body = N;
x.Footer = B;
x.displayName = "Card";
export {
  Xs as Badge,
  D as Button,
  x as Card,
  as as Input,
  Vs as Title
};
