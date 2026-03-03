import { jsxs as h, jsx as e } from "react/jsx-runtime";
import j, { useRef as S, useEffect as ee, useState as U, useId as te } from "react";
const oe = "_button_u2ihs_1", ne = "_loading_u2ihs_51", se = "_sm_u2ihs_65", ae = "_md_u2ihs_77", re = "_lg_u2ihs_89", le = "_primary_u2ihs_103", ie = "_secondary_u2ihs_129", ce = "_outline_u2ihs_155", de = "_ghost_u2ihs_179", _e = "_danger_u2ihs_201", ue = "_fullWidth_u2ihs_227", he = "_spinner_u2ihs_237", pe = "_spin_u2ihs_237", E = {
  button: oe,
  loading: ne,
  sm: se,
  md: ae,
  lg: re,
  primary: le,
  secondary: ie,
  outline: ce,
  ghost: de,
  danger: _e,
  fullWidth: ue,
  spinner: he,
  spin: pe
}, me = j.forwardRef(
  ({
    variant: o = "primary",
    size: n = "md",
    loading: t = !1,
    fullWidth: r = !1,
    leftIcon: l,
    rightIcon: i,
    children: d,
    className: _,
    disabled: a,
    ...p
  }, m) => {
    const b = [
      E.button,
      E[o],
      E[n],
      r ? E.fullWidth : "",
      t ? E.loading : "",
      _ ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ h(
      "button",
      {
        ref: m,
        className: b,
        disabled: a || t,
        "aria-busy": t,
        ...p,
        children: [
          t && /* @__PURE__ */ e("span", { className: E.spinner, "aria-hidden": "true" }),
          !t && l && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: l }),
          d,
          !t && i && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: i })
        ]
      }
    );
  }
);
me.displayName = "Button";
const be = "_wrapper_oes7a_1", fe = "_label_oes7a_15", ge = "_required_oes7a_29", ve = "_inputWrapper_oes7a_39", we = "_input_oes7a_39", $e = "_error_oes7a_109", ye = "_sm_oes7a_127", xe = "_md_oes7a_139", Ne = "_lg_oes7a_151", ke = "_hasLeft_oes7a_165", Le = "_hasRight_oes7a_173", Be = "_iconLeft_oes7a_181", qe = "_iconRight_oes7a_183", je = "_hint_oes7a_219", Ie = "_errorText_oes7a_231", We = "_floatingWrapper_oes7a_247", Te = "_inputFloating_oes7a_257", Fe = "_floatingLabelEl_oes7a_295", Ee = "_floatingLabelSm_oes7a_327", Ce = "_floatingLabelMd_oes7a_329", Re = "_floatingLabelLg_oes7a_331", De = "_floatingLabelWithLeft_oes7a_337", Se = "_floatingLabelError_oes7a_377", w = {
  wrapper: be,
  label: fe,
  required: ge,
  inputWrapper: ve,
  input: we,
  error: $e,
  sm: ye,
  md: xe,
  lg: Ne,
  hasLeft: ke,
  hasRight: Le,
  iconLeft: Be,
  iconRight: qe,
  hint: je,
  errorText: Ie,
  floatingWrapper: We,
  inputFloating: Te,
  floatingLabelEl: Fe,
  floatingLabelSm: Ee,
  floatingLabelMd: Ce,
  floatingLabelLg: Re,
  floatingLabelWithLeft: De,
  floatingLabelError: Se
}, Me = j.forwardRef(
  ({
    label: o,
    size: n = "md",
    error: t,
    hint: r,
    leftIcon: l,
    rightIcon: i,
    required: d,
    fullWidth: _,
    floatingLabel: a,
    className: p,
    id: m,
    placeholder: b,
    ...c
  }, u) => {
    const v = m ?? (o ? `vui-input-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), s = v ? `${v}-error` : void 0, f = v ? `${v}-hint` : void 0, g = [
      w.input,
      w[n],
      a ? w.inputFloating : "",
      t ? w.error : "",
      l ? w.hasLeft : "",
      i ? w.hasRight : "",
      p ?? ""
    ].filter(Boolean).join(" "), N = [
      w.floatingLabelEl,
      w[`floatingLabel${n.charAt(0).toUpperCase() + n.slice(1)}`],
      l ? w.floatingLabelWithLeft : "",
      t ? w.floatingLabelError : ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ h("div", { className: w.wrapper, children: [
      o && !a && /* @__PURE__ */ h("label", { htmlFor: v, className: w.label, children: [
        o,
        d && /* @__PURE__ */ e("span", { className: w.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ h("div", { className: `${w.inputWrapper}${a ? ` ${w.floatingWrapper}` : ""}`, children: [
        l && /* @__PURE__ */ e("span", { className: w.iconLeft, "aria-hidden": "true", children: l }),
        /* @__PURE__ */ e(
          "input",
          {
            ref: u,
            id: v,
            className: g,
            required: d,
            "aria-invalid": !!t,
            "aria-describedby": [t ? s : null, r ? f : null].filter(Boolean).join(" ") || void 0,
            placeholder: a ? " " : b,
            ...c
          }
        ),
        o && a && /* @__PURE__ */ h("label", { htmlFor: v, className: N, children: [
          o,
          d && /* @__PURE__ */ e("span", { className: w.required, "aria-hidden": "true", children: "*" })
        ] }),
        i && /* @__PURE__ */ e("span", { className: w.iconRight, "aria-hidden": "true", children: i })
      ] }),
      t && /* @__PURE__ */ e("span", { id: s, className: w.errorText, role: "alert", children: t }),
      r && !t && /* @__PURE__ */ e("span", { id: f, className: w.hint, children: r })
    ] });
  }
);
Me.displayName = "Input";
const Ae = "_title_3f7c8_1", ze = "_xs_3f7c8_17", He = "_sm_3f7c8_27", Oe = "_md_3f7c8_37", Ue = "_lg_3f7c8_47", Ke = "_xl_3f7c8_57", Pe = "_xxl_3f7c8_67", Ge = "_light_3f7c8_79", Ve = "_normal_3f7c8_87", Je = "_medium_3f7c8_95", Qe = "_semibold_3f7c8_103", Xe = "_bold_3f7c8_111", Ye = "_extrabold_3f7c8_119", Ze = "_left_3f7c8_129", et = "_center_3f7c8_137", tt = "_right_3f7c8_145", ot = "_muted_3f7c8_163", nt = "_primary_3f7c8_171", st = "_gradient_3f7c8_179", D = {
  title: Ae,
  xs: ze,
  sm: He,
  md: Oe,
  lg: Ue,
  xl: Ke,
  xxl: Pe,
  light: Ge,
  normal: Ve,
  medium: Je,
  semibold: Qe,
  bold: Xe,
  extrabold: Ye,
  left: Ze,
  center: et,
  right: tt,
  default: "_default_3f7c8_155",
  muted: ot,
  primary: nt,
  gradient: st
}, at = {
  h1: "xxl",
  h2: "xl",
  h3: "lg",
  h4: "md",
  h5: "sm",
  h6: "xs"
}, is = ({
  level: o = "h1",
  size: n,
  weight: t = "bold",
  align: r = "left",
  color: l = "default",
  children: i,
  className: d,
  ..._
}) => {
  const a = n ?? at[o], p = [
    D.title,
    D[a],
    D[t],
    D[r],
    D[l],
    d ?? ""
  ].filter(Boolean).join(" ");
  return j.createElement(o, { className: p, ..._ }, i);
}, rt = "_badge_26q6t_1", lt = "_sm_26q6t_27", it = "_md_26q6t_37", ct = "_lg_26q6t_47", dt = "_info_26q6t_71", _t = "_success_26q6t_83", ut = "_warning_26q6t_95", ht = "_danger_26q6t_107", pt = "_primary_26q6t_119", mt = "_dot_26q6t_133", M = {
  badge: rt,
  sm: lt,
  md: it,
  lg: ct,
  default: "_default_26q6t_59",
  info: dt,
  success: _t,
  warning: ut,
  danger: ht,
  primary: pt,
  dot: mt
}, cs = ({
  variant: o = "default",
  size: n = "md",
  dot: t = !1,
  leftIcon: r,
  children: l,
  className: i,
  ...d
}) => {
  const _ = [
    M.badge,
    M[o],
    M[n],
    i ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ h("span", { className: _, ...d, children: [
    t && /* @__PURE__ */ e("span", { className: M.dot, "aria-hidden": "true" }),
    !t && r && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: r }),
    l
  ] });
}, bt = "_card_pl1wm_1", ft = "_bordered_pl1wm_21", gt = "_shadow_pl1wm_29", vt = "_elevated_pl1wm_37", wt = "_ghost_pl1wm_45", $t = "_sm_pl1wm_57", yt = "_cardHeader_pl1wm_57", xt = "_cardBody_pl1wm_59", Nt = "_cardFooter_pl1wm_61", kt = "_md_pl1wm_69", Lt = "_lg_pl1wm_81", Bt = "_hoverable_pl1wm_143", T = {
  card: bt,
  bordered: ft,
  shadow: gt,
  elevated: vt,
  ghost: wt,
  sm: $t,
  cardHeader: yt,
  cardBody: xt,
  cardFooter: Nt,
  md: kt,
  lg: Lt,
  hoverable: Bt
}, V = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${T.cardHeader} ${n ?? ""}`, ...t, children: o });
V.displayName = "Card.Header";
const J = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${T.cardBody} ${n ?? ""}`, ...t, children: o });
J.displayName = "Card.Body";
const Q = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${T.cardFooter} ${n ?? ""}`, ...t, children: o });
Q.displayName = "Card.Footer";
const qt = ({
  variant: o = "bordered",
  size: n = "md",
  hoverable: t = !1,
  children: r,
  className: l,
  ...i
}) => {
  const d = [
    T.card,
    T[o],
    T[n],
    t ? T.hoverable : "",
    l ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e("div", { className: d, ...i, children: r });
}, z = qt;
z.Header = V;
z.Body = J;
z.Footer = Q;
z.displayName = "Card";
const jt = "_wrapper_1xu0d_1", It = "_wrapperFullWidth_1xu0d_7", Wt = "_label_1xu0d_11", Tt = "_required_1xu0d_18", Ft = "_textarea_1xu0d_23", Et = "_hasError_1xu0d_53", Ct = "_sm_1xu0d_62", Rt = "_md_1xu0d_67", Dt = "_lg_1xu0d_72", St = "_none_1xu0d_78", Mt = "_vertical_1xu0d_82", At = "_horizontal_1xu0d_86", zt = "_both_1xu0d_90", Ht = "_fullWidth_1xu0d_94", Ot = "_hint_1xu0d_98", Ut = "_errorText_1xu0d_104", x = {
  wrapper: jt,
  wrapperFullWidth: It,
  label: Wt,
  required: Tt,
  textarea: Ft,
  hasError: Et,
  sm: Ct,
  md: Rt,
  lg: Dt,
  none: St,
  vertical: Mt,
  horizontal: At,
  both: zt,
  fullWidth: Ht,
  hint: Ot,
  errorText: Ut
}, Kt = j.forwardRef(
  ({
    label: o,
    size: n = "md",
    error: t,
    hint: r,
    required: l,
    fullWidth: i = !1,
    resize: d = "vertical",
    className: _,
    id: a,
    ...p
  }, m) => {
    const b = a ?? (o ? `vui-textarea-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), c = b ? `${b}-error` : void 0, u = b ? `${b}-hint` : void 0, v = [
      x.textarea,
      x[n],
      x[d],
      t ? x.hasError : "",
      i ? x.fullWidth : "",
      _ ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ h("div", { className: `${x.wrapper}${i ? ` ${x.wrapperFullWidth}` : ""}`, children: [
      o && /* @__PURE__ */ h("label", { htmlFor: b, className: x.label, children: [
        o,
        l && /* @__PURE__ */ e("span", { className: x.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ e(
        "textarea",
        {
          ref: m,
          id: b,
          className: v,
          required: l,
          "aria-invalid": !!t,
          "aria-describedby": [t ? c : null, r && !t ? u : null].filter(Boolean).join(" ") || void 0,
          ...p
        }
      ),
      t && /* @__PURE__ */ e("span", { id: c, className: x.errorText, role: "alert", children: t }),
      r && !t && /* @__PURE__ */ e("span", { id: u, className: x.hint, children: r })
    ] });
  }
);
Kt.displayName = "Textarea";
const Pt = "_wrapper_uhwki_1", Gt = "_wrapperFullWidth_uhwki_7", Vt = "_label_uhwki_11", Jt = "_required_uhwki_18", Qt = "_selectWrapper_uhwki_23", Xt = "_select_uhwki_23", Yt = "_hasError_uhwki_58", Zt = "_sm_uhwki_67", eo = "_md_uhwki_73", to = "_lg_uhwki_79", oo = "_fullWidth_uhwki_85", no = "_chevron_uhwki_89", so = "_hint_uhwki_100", ao = "_errorText_uhwki_106", y = {
  wrapper: Pt,
  wrapperFullWidth: Gt,
  label: Vt,
  required: Jt,
  selectWrapper: Qt,
  select: Xt,
  hasError: Yt,
  sm: Zt,
  md: eo,
  lg: to,
  fullWidth: oo,
  chevron: no,
  hint: so,
  errorText: ao
}, ro = j.forwardRef(
  ({
    label: o,
    size: n = "md",
    error: t,
    hint: r,
    required: l,
    fullWidth: i = !1,
    options: d,
    placeholder: _,
    className: a,
    id: p,
    children: m,
    ...b
  }, c) => {
    const u = p ?? (o ? `vui-select-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), v = u ? `${u}-error` : void 0, s = u ? `${u}-hint` : void 0, f = [
      y.select,
      y[n],
      t ? y.hasError : "",
      i ? y.fullWidth : "",
      a ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ h("div", { className: `${y.wrapper}${i ? ` ${y.wrapperFullWidth}` : ""}`, children: [
      o && /* @__PURE__ */ h("label", { htmlFor: u, className: y.label, children: [
        o,
        l && /* @__PURE__ */ e("span", { className: y.required, "aria-hidden": "true", children: "*" })
      ] }),
      /* @__PURE__ */ h("div", { className: y.selectWrapper, children: [
        /* @__PURE__ */ h(
          "select",
          {
            ref: c,
            id: u,
            className: f,
            required: l,
            "aria-invalid": !!t,
            "aria-describedby": [t ? v : null, r && !t ? s : null].filter(Boolean).join(" ") || void 0,
            ...b,
            children: [
              _ && /* @__PURE__ */ e("option", { value: "", disabled: !0, children: _ }),
              d ? d.map((g) => /* @__PURE__ */ e("option", { value: g.value, disabled: g.disabled, children: g.label }, g.value)) : m
            ]
          }
        ),
        /* @__PURE__ */ e("span", { className: y.chevron, "aria-hidden": "true", children: /* @__PURE__ */ e("svg", { width: "16", height: "16", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
            d: "M19 9l-7 7-7-7"
          }
        ) }) })
      ] }),
      t && /* @__PURE__ */ e("span", { id: v, className: y.errorText, role: "alert", children: t }),
      r && !t && /* @__PURE__ */ e("span", { id: s, className: y.hint, children: r })
    ] });
  }
);
ro.displayName = "Select";
const lo = "_wrapper_iu9cq_1", io = "_row_iu9cq_7", co = "_checkbox_iu9cq_14", _o = "_hasError_iu9cq_51", uo = "_sm_iu9cq_60", ho = "_md_iu9cq_74", po = "_lg_iu9cq_88", mo = "_label_iu9cq_102", bo = "_description_iu9cq_113", fo = "_errorText_iu9cq_123", B = {
  wrapper: lo,
  row: io,
  checkbox: co,
  hasError: _o,
  sm: uo,
  md: ho,
  lg: po,
  label: mo,
  description: bo,
  errorText: fo
}, go = j.forwardRef(
  ({ label: o, description: n, error: t, size: r = "md", className: l, id: i, ...d }, _) => {
    const a = i ?? (o ? `vui-checkbox-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), p = a ? `${a}-error` : void 0, m = a && n ? `${a}-desc` : void 0, b = [
      B.checkbox,
      B[r],
      t ? B.hasError : "",
      l ?? ""
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ h("div", { className: `${B.wrapper} ${B[r]}`, children: [
      /* @__PURE__ */ h("div", { className: B.row, children: [
        /* @__PURE__ */ e(
          "input",
          {
            ref: _,
            type: "checkbox",
            id: a,
            className: b,
            "aria-invalid": !!t,
            "aria-describedby": [t ? p : null, m].filter(Boolean).join(" ") || void 0,
            ...d
          }
        ),
        o && /* @__PURE__ */ e("label", { htmlFor: a, className: B.label, children: o })
      ] }),
      n && !t && /* @__PURE__ */ e("span", { id: m, className: B.description, children: n }),
      t && /* @__PURE__ */ e("span", { id: p, className: B.errorText, role: "alert", children: t })
    ] });
  }
);
go.displayName = "Checkbox";
const vo = "_fieldset_nj7or_1", wo = "_legend_nj7or_10", $o = "_required_nj7or_19", yo = "_group_nj7or_24", xo = "_vertical_nj7or_28", No = "_horizontal_nj7or_33", ko = "_option_nj7or_39", Lo = "_radio_nj7or_46", Bo = "_hasError_nj7or_81", qo = "_sm_nj7or_86", jo = "_md_nj7or_87", Io = "_lg_nj7or_88", Wo = "_optionContent_nj7or_90", To = "_optionLabel_nj7or_96", Fo = "_optionDescription_nj7or_107", Eo = "_hint_nj7or_113", Co = "_errorText_nj7or_119", $ = {
  fieldset: vo,
  legend: wo,
  required: $o,
  group: yo,
  vertical: xo,
  horizontal: No,
  option: ko,
  radio: Lo,
  hasError: Bo,
  sm: qo,
  md: jo,
  lg: Io,
  optionContent: Wo,
  optionLabel: To,
  optionDescription: Fo,
  hint: Eo,
  errorText: Co
}, ds = ({
  name: o,
  label: n,
  options: t,
  value: r,
  defaultValue: l,
  onChange: i,
  size: d = "md",
  orientation: _ = "vertical",
  error: a,
  hint: p,
  required: m
}) => {
  const b = `vui-radiogroup-${o}`, c = `${b}-error`, u = `${b}-hint`, v = r !== void 0;
  return /* @__PURE__ */ h(
    "fieldset",
    {
      className: `${$.fieldset} ${$[d]}`,
      "aria-describedby": [a ? c : null, p && !a ? u : null].filter(Boolean).join(" ") || void 0,
      children: [
        n && /* @__PURE__ */ h("legend", { className: $.legend, children: [
          n,
          m && /* @__PURE__ */ e("span", { className: $.required, "aria-hidden": "true", children: "*" })
        ] }),
        /* @__PURE__ */ e("div", { className: `${$.group} ${$[_]}`, children: t.map((s) => {
          const f = `${b}-${s.value}`, g = v ? { checked: r === s.value } : { defaultChecked: l === s.value };
          return /* @__PURE__ */ h("div", { className: $.option, children: [
            /* @__PURE__ */ e(
              "input",
              {
                type: "radio",
                id: f,
                name: o,
                value: s.value,
                disabled: s.disabled,
                required: m,
                onChange: () => i == null ? void 0 : i(s.value),
                className: `${$.radio} ${a ? $.hasError : ""}`,
                "aria-invalid": a ? !0 : void 0,
                ...g
              }
            ),
            /* @__PURE__ */ h("div", { className: $.optionContent, children: [
              /* @__PURE__ */ e("label", { htmlFor: f, className: $.optionLabel, children: s.label }),
              s.description && /* @__PURE__ */ e("span", { className: $.optionDescription, children: s.description })
            ] })
          ] }, s.value);
        }) }),
        a && /* @__PURE__ */ e("span", { id: c, className: $.errorText, role: "alert", children: a }),
        p && !a && /* @__PURE__ */ e("span", { id: u, className: $.hint, children: p })
      ]
    }
  );
}, Ro = "_wrapper_okiio_1", Do = "_labelRow_okiio_7", So = "_track_okiio_15", Mo = "_input_okiio_23", Ao = "_thumb_okiio_32", zo = "_labelText_okiio_65", Ho = "_sm_okiio_74", Oo = "_md_okiio_80", Uo = "_lg_okiio_86", Ko = "_description_okiio_98", I = {
  wrapper: Ro,
  labelRow: Do,
  track: So,
  input: Mo,
  thumb: Ao,
  labelText: zo,
  sm: Ho,
  md: Oo,
  lg: Uo,
  description: Ko
}, Po = j.forwardRef(
  ({ label: o, description: n, size: t = "md", className: r, id: l, ...i }, d) => {
    const _ = l ?? (o ? `vui-switch-${o.toLowerCase().replace(/\s+/g, "-")}` : void 0), a = _ && n ? `${_}-desc` : void 0;
    return /* @__PURE__ */ h("div", { className: `${I.wrapper} ${I[t]}`, children: [
      /* @__PURE__ */ h("label", { className: I.labelRow, htmlFor: _, children: [
        /* @__PURE__ */ h("span", { className: I.track, children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: d,
              type: "checkbox",
              role: "switch",
              id: _,
              className: `${I.input} ${r ?? ""}`,
              "aria-describedby": a || void 0,
              ...i
            }
          ),
          /* @__PURE__ */ e("span", { className: I.thumb, "aria-hidden": "true" })
        ] }),
        o && /* @__PURE__ */ e("span", { className: I.labelText, children: o })
      ] }),
      n && /* @__PURE__ */ e("span", { id: a, className: I.description, children: n })
    ] });
  }
);
Po.displayName = "Switch";
const Go = "_overlay_gedqr_1", Vo = "_overlayFadeIn_gedqr_1", Jo = "_dialog_gedqr_19", Qo = "_dialogSlideUp_gedqr_1", Xo = "_sm_gedqr_39", Yo = "_md_gedqr_40", Zo = "_lg_gedqr_41", en = "_xl_gedqr_42", tn = "_header_gedqr_45", on = "_title_gedqr_51", nn = "_description_gedqr_59", sn = "_body_gedqr_66", an = "_footer_gedqr_71", rn = "_closeBtn_gedqr_81", k = {
  overlay: Go,
  overlayFadeIn: Vo,
  dialog: Jo,
  dialogSlideUp: Qo,
  sm: Xo,
  md: Yo,
  lg: Zo,
  xl: en,
  header: tn,
  title: on,
  description: nn,
  body: sn,
  footer: an,
  closeBtn: rn
}, P = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])', X = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${k.header} ${n ?? ""}`, ...t, children: o });
X.displayName = "Dialog.Header";
const Y = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${k.body} ${n ?? ""}`, ...t, children: o });
Y.displayName = "Dialog.Body";
const Z = ({ children: o, className: n, ...t }) => /* @__PURE__ */ e("div", { className: `${k.footer} ${n ?? ""}`, ...t, children: o });
Z.displayName = "Dialog.Footer";
const G = { current: 0 }, ln = ({
  open: o,
  onClose: n,
  title: t,
  description: r,
  size: l = "md",
  children: i,
  className: d,
  closeOnOverlayClick: _ = !0
}) => {
  const a = S(null), p = S(`vui-dialog-title-${++G.current}`).current, m = S(`vui-dialog-desc-${G.current}`).current, b = S(null);
  if (ee(() => {
    if (!o) return;
    b.current = document.activeElement, document.body.style.overflow = "hidden";
    const v = requestAnimationFrame(() => {
      var g, N;
      const f = (g = a.current) == null ? void 0 : g.querySelectorAll(P);
      (N = f == null ? void 0 : f[0]) == null || N.focus();
    }), s = (f) => {
      if (f.key === "Escape") {
        n();
        return;
      }
      if (f.key === "Tab" && a.current) {
        const g = Array.from(
          a.current.querySelectorAll(P)
        );
        if (g.length === 0) {
          f.preventDefault();
          return;
        }
        const N = g[0], L = g[g.length - 1];
        f.shiftKey ? document.activeElement === N && (L.focus(), f.preventDefault()) : document.activeElement === L && (N.focus(), f.preventDefault());
      }
    };
    return document.addEventListener("keydown", s), () => {
      var f;
      cancelAnimationFrame(v), document.removeEventListener("keydown", s), document.body.style.overflow = "", (f = b.current) == null || f.focus();
    };
  }, [o, n]), !o) return null;
  const c = (u) => {
    _ && u.target === u.currentTarget && n();
  };
  return /* @__PURE__ */ e(
    "div",
    {
      className: k.overlay,
      onClick: c,
      "aria-modal": "true",
      role: "presentation",
      children: /* @__PURE__ */ h(
        "div",
        {
          ref: a,
          role: "dialog",
          "aria-labelledby": t ? p : void 0,
          "aria-describedby": r ? m : void 0,
          className: [k.dialog, k[l], d ?? ""].filter(Boolean).join(" "),
          children: [
            t && /* @__PURE__ */ h("div", { className: k.header, children: [
              /* @__PURE__ */ e("p", { id: p, className: k.title, children: t }),
              r && /* @__PURE__ */ e("p", { id: m, className: k.description, children: r })
            ] }),
            i,
            /* @__PURE__ */ e(
              "button",
              {
                type: "button",
                className: k.closeBtn,
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
}, H = ln;
H.Header = X;
H.Body = Y;
H.Footer = Z;
H.displayName = "Dialog";
const cn = "_wrapper_16e9w_1", dn = "_tooltip_16e9w_6", _n = "_visible_16e9w_25", un = "_top_16e9w_30", hn = "_bottom_16e9w_36", pn = "_left_16e9w_42", mn = "_right_16e9w_48", bn = "_arrow_16e9w_55", fn = "_arrowTop_16e9w_61", gn = "_arrowBottom_16e9w_70", vn = "_arrowLeft_16e9w_79", wn = "_arrowRight_16e9w_88", C = {
  wrapper: cn,
  tooltip: dn,
  visible: _n,
  top: un,
  bottom: hn,
  left: pn,
  right: mn,
  arrow: bn,
  arrowTop: fn,
  arrowBottom: gn,
  arrowLeft: vn,
  arrowRight: wn
}, _s = ({
  content: o,
  children: n,
  placement: t = "top",
  delay: r = 0
}) => {
  const [l, i] = U(!1), _ = `vui-tooltip-${te().replace(/:/g, "")}`, a = j.useRef(null), p = () => {
    r > 0 ? a.current = setTimeout(() => i(!0), r) : i(!0);
  }, m = () => {
    a.current && clearTimeout(a.current), i(!1);
  }, b = j.cloneElement(n, {
    "aria-describedby": l ? _ : void 0
  });
  return /* @__PURE__ */ h(
    "span",
    {
      className: C.wrapper,
      onMouseEnter: p,
      onMouseLeave: m,
      onFocus: p,
      onBlur: m,
      children: [
        b,
        /* @__PURE__ */ h(
          "span",
          {
            id: _,
            role: "tooltip",
            className: [C.tooltip, C[t], l ? C.visible : ""].filter(Boolean).join(" "),
            "aria-hidden": !l,
            children: [
              o,
              /* @__PURE__ */ e("span", { className: `${C.arrow} ${C[`arrow${t.charAt(0).toUpperCase()}${t.slice(1)}`]}`, "aria-hidden": "true" })
            ]
          }
        )
      ]
    }
  );
}, $n = "_tabs_16y0p_1", yn = "_tablist_16y0p_8", xn = "_underline_16y0p_14", Nn = "_tab_16y0p_1", kn = "_activeTab_16y0p_39", Ln = "_pills_16y0p_50", Bn = "_boxed_16y0p_89", qn = "_panel_16y0p_139", R = {
  tabs: $n,
  tablist: yn,
  underline: xn,
  tab: Nn,
  activeTab: kn,
  pills: Ln,
  boxed: Bn,
  panel: qn
}, us = ({
  items: o,
  defaultValue: n,
  value: t,
  onChange: r,
  variant: l = "underline"
}) => {
  var v;
  const i = t !== void 0, [d, _] = U(
    n ?? ((v = o[0]) == null ? void 0 : v.value) ?? ""
  ), a = i ? t : d, p = S(null), m = (s) => {
    i || _(s), r == null || r(s);
  }, b = (s, f) => {
    var K;
    const g = o.filter((F) => !F.disabled), N = g.findIndex((F) => F.value === o[f].value);
    let L = null;
    if (s.key === "ArrowRight" ? L = (N + 1) % g.length : s.key === "ArrowLeft" ? L = (N - 1 + g.length) % g.length : s.key === "Home" ? L = 0 : s.key === "End" && (L = g.length - 1), L !== null) {
      s.preventDefault();
      const F = g[L];
      m(F.value);
      const O = (K = p.current) == null ? void 0 : K.querySelector(
        `[data-value="${F.value}"]`
      );
      O == null || O.focus();
    }
  }, c = (s) => `vui-tabpanel-${s}`, u = (s) => `vui-tab-${s}`;
  return /* @__PURE__ */ h("div", { className: R.tabs, children: [
    /* @__PURE__ */ e(
      "div",
      {
        ref: p,
        role: "tablist",
        className: [R.tablist, R[l]].filter(Boolean).join(" "),
        children: o.map((s, f) => /* @__PURE__ */ e(
          "button",
          {
            id: u(s.value),
            role: "tab",
            type: "button",
            "data-value": s.value,
            "aria-selected": a === s.value,
            "aria-controls": c(s.value),
            disabled: s.disabled,
            tabIndex: a === s.value ? 0 : -1,
            className: [
              R.tab,
              a === s.value ? R.activeTab : ""
            ].filter(Boolean).join(" "),
            onClick: () => m(s.value),
            onKeyDown: (g) => b(g, f),
            children: s.label
          },
          s.value
        ))
      }
    ),
    o.map((s) => /* @__PURE__ */ e(
      "div",
      {
        id: c(s.value),
        role: "tabpanel",
        "aria-labelledby": u(s.value),
        hidden: a !== s.value,
        className: R.panel,
        children: s.children
      },
      s.value
    ))
  ] });
}, jn = "_accordion_wacbm_1", In = "_bordered_wacbm_7", Wn = "_item_wacbm_13", Tn = "_flush_wacbm_17", Fn = "_separated_wacbm_21", En = "_heading_wacbm_35", Cn = "_trigger_wacbm_40", Rn = "_icon_wacbm_72", Dn = "_open_wacbm_80", Sn = "_contentOuter_wacbm_85", Mn = "_contentInner_wacbm_95", q = {
  accordion: jn,
  bordered: In,
  item: Wn,
  flush: Tn,
  separated: Fn,
  heading: En,
  trigger: Cn,
  icon: Rn,
  open: Dn,
  contentOuter: Sn,
  contentInner: Mn
}, hs = ({
  items: o,
  defaultValue: n,
  value: t,
  onChange: r,
  multiple: l = !1,
  variant: i = "bordered"
}) => {
  const d = t !== void 0, _ = (c) => c ? Array.isArray(c) ? c : [c] : [], [a, p] = U(_(n)), m = d ? _(t) : a, b = (c) => {
    let u;
    m.includes(c) ? u = m.filter((v) => v !== c) : u = l ? [...m, c] : [c], d || p(u), r == null || r(l ? u : u[0] ?? "");
  };
  return /* @__PURE__ */ e("div", { className: [q.accordion, q[i]].filter(Boolean).join(" "), children: o.map((c) => {
    const u = m.includes(c.value), v = `vui-accordion-trigger-${c.value}`, s = `vui-accordion-panel-${c.value}`;
    return /* @__PURE__ */ h(
      "div",
      {
        className: [q.item, u ? q.open : ""].filter(Boolean).join(" "),
        children: [
          /* @__PURE__ */ e("h3", { className: q.heading, children: /* @__PURE__ */ h(
            "button",
            {
              id: v,
              type: "button",
              "aria-expanded": u,
              "aria-controls": s,
              disabled: c.disabled,
              className: q.trigger,
              onClick: () => !c.disabled && b(c.value),
              children: [
                /* @__PURE__ */ e("span", { children: c.title }),
                /* @__PURE__ */ e("span", { className: q.icon, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
              id: s,
              role: "region",
              "aria-labelledby": v,
              className: q.contentOuter,
              children: /* @__PURE__ */ e("div", { className: q.contentInner, children: c.content })
            }
          )
        ]
      },
      c.value
    );
  }) });
}, An = "_alert_b1vtk_1", zn = "_icon_b1vtk_12", Hn = "_content_b1vtk_19", On = "_title_b1vtk_24", Un = "_body_b1vtk_31", Kn = "_closeBtn_b1vtk_35", Pn = "_info_b1vtk_64", Gn = "_success_b1vtk_70", Vn = "_warning_b1vtk_76", Jn = "_danger_b1vtk_82", W = {
  alert: An,
  icon: zn,
  content: Hn,
  title: On,
  body: Un,
  closeBtn: Kn,
  info: Pn,
  success: Gn,
  warning: Vn,
  danger: Jn
}, Qn = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), Xn = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), Yn = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  }
) }), Zn = () => /* @__PURE__ */ e("svg", { width: "20", height: "20", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: /* @__PURE__ */ e(
  "path",
  {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  }
) }), es = {
  info: /* @__PURE__ */ e(Qn, {}),
  success: /* @__PURE__ */ e(Xn, {}),
  warning: /* @__PURE__ */ e(Yn, {}),
  danger: /* @__PURE__ */ e(Zn, {})
}, ps = ({
  variant: o = "info",
  title: n,
  icon: t,
  onClose: r,
  children: l,
  className: i,
  ...d
}) => {
  const _ = [W.alert, W[o], i ?? ""].filter(Boolean).join(" "), a = t !== void 0 ? t : es[o];
  return /* @__PURE__ */ h("div", { className: _, role: "alert", ...d, children: [
    a && /* @__PURE__ */ e("span", { className: W.icon, "aria-hidden": "true", children: a }),
    /* @__PURE__ */ h("div", { className: W.content, children: [
      n && /* @__PURE__ */ e("p", { className: W.title, children: n }),
      /* @__PURE__ */ e("div", { className: W.body, children: l })
    ] }),
    r && /* @__PURE__ */ e(
      "button",
      {
        type: "button",
        className: W.closeBtn,
        onClick: r,
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
}, ts = "_divider_vfae1_1", os = "_horizontal_vfae1_6", ns = "_vertical_vfae1_12", ss = "_withLabel_vfae1_19", as = "_label_vfae1_33", A = {
  divider: ts,
  horizontal: os,
  vertical: ns,
  withLabel: ss,
  label: as
}, ms = ({
  orientation: o = "horizontal",
  label: n,
  className: t,
  ...r
}) => {
  const l = [
    A.divider,
    A[o],
    n ? A.withLabel : "",
    t ?? ""
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ e(
    "div",
    {
      role: "separator",
      "aria-orientation": o,
      className: l,
      ...r,
      children: n && /* @__PURE__ */ e("span", { className: A.label, children: n })
    }
  );
};
export {
  hs as Accordion,
  ps as Alert,
  cs as Badge,
  me as Button,
  z as Card,
  go as Checkbox,
  H as Dialog,
  ms as Divider,
  Me as Input,
  ds as RadioGroup,
  ro as Select,
  Po as Switch,
  us as Tabs,
  Kt as Textarea,
  is as Title,
  _s as Tooltip
};
