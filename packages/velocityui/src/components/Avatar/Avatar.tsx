"use client";

import React, { useState } from "react";
import styles from "./Avatar.module.css";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarShape = "circle" | "square";
export type AvatarStatus = "online" | "away" | "busy" | "offline";
export type AvatarStatusAnimation = "none" | "pulse";
export type AvatarTone =
  "auto" | "neutral" | "blue" | "violet" | "rose" | "amber" | "emerald";

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  status?: AvatarStatus;
  statusAnimation?: AvatarStatusAnimation;
  tone?: AvatarTone;
  ring?: boolean;
}

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  size?: AvatarSize;
  max?: number;
}

const tones = ["blue", "violet", "rose", "amber", "emerald"] as const;
function identityTone(name: string) {
  let hash = 0;
  for (const character of name)
    hash = (hash * 31 + character.codePointAt(0)!) >>> 0;
  return tones[hash % tones.length];
}

const AvatarBase = React.forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      alt,
      name,
      size = "md",
      shape = "circle",
      status,
      statusAnimation = "none",
      tone = "auto",
      ring = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [failedSrc, setFailedSrc] = useState<string>();
    const parts = name?.trim().split(/\s+/).filter(Boolean) ?? [];
    const initials = parts.length
      ? (
          Array.from(parts[0])[0] +
          (parts.length > 1 ? Array.from(parts[parts.length - 1])[0] : "")
        ).toUpperCase()
      : null;
    const resolvedTone =
      tone === "auto"
        ? name?.trim()
          ? identityTone(name.trim())
          : "neutral"
        : tone;
    const label = [alt?.trim() || name?.trim() || "Avatar", status]
      .filter(Boolean)
      .join(", ");
    return (
      <span
        ref={ref}
        className={[
          styles.avatar,
          styles[size],
          styles[shape],
          styles[resolvedTone],
          ring ? styles.ring : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        role="img"
        aria-label={label}
        {...props}
      >
        {src && src !== failedSrc ? (
          <img
            key={src}
            src={src}
            alt=""
            className={styles.img}
            onError={() => setFailedSrc(src)}
          />
        ) : initials ? (
          <span className={styles.initials} aria-hidden="true">
            {initials}
          </span>
        ) : (
          <svg
            className={styles.fallbackIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            aria-hidden="true"
          >
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20v-2a7 7 0 0 1 14 0v2" strokeLinecap="round" />
          </svg>
        )}
        {status && (
          <span
            className={[
              styles.status,
              styles[status],
              statusAnimation === "pulse" ? styles.statusPulse : "",
            ]
              .filter(Boolean)
              .join(" ")}
            aria-hidden="true"
          />
        )}
      </span>
    );
  },
);
AvatarBase.displayName = "Avatar";

const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  size = "md",
  max = 5,
  className,
  ...props
}) => {
  const members = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<AvatarProps> =>
      React.isValidElement(child),
  );
  const limit = Number.isFinite(max) ? Math.max(0, Math.floor(max)) : 5;
  const hidden = members.slice(limit);
  const hiddenLabel = `${hidden.length} more members${
    hidden.some((child) => child.props.name)
      ? ": " +
        hidden
          .map((child) => child.props.name)
          .filter(Boolean)
          .join(", ")
      : ""
  }`;
  return (
    <span
      className={[styles.group, className].filter(Boolean).join(" ")}
      role="group"
      aria-label="Team members"
      {...props}
    >
      {members.slice(0, limit).map((child, index) => (
        <span
          className={styles.groupItem}
          key={child.key ?? index}
          title={child.props.name}
        >
          {React.cloneElement(child, { size })}
        </span>
      ))}
      {hidden.length > 0 && (
        <span className={styles.groupItem}>
          <span
            className={[
              styles.avatar,
              styles[size],
              styles.circle,
              styles.neutral,
              styles.overflow,
            ].join(" ")}
            role="img"
            aria-label={hiddenLabel}
            title={hiddenLabel}
          >
            +{hidden.length}
          </span>
        </span>
      )}
    </span>
  );
};
AvatarGroup.displayName = "Avatar.Group";
export const Avatar = Object.assign(AvatarBase, { Group: AvatarGroup });
