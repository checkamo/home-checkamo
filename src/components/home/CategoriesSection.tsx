"use client";

import { useRef, useState, useEffect } from "react";
import type { ReactElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { BRAND } from "@/lib/constants";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface Category {
  slug: string;
  label: string;
  shortLabel: string;
  description: string;
  priceFrom: string;
  turnaround: string;
  icon: string;
  gradient: string;
  /**
   * Place category hero images in /public/images/categories/<slug>.jpg
   * Recommended resolution: 800×600 minimum, 3:2 ratio.
   * Unsplash queries per category:
   *   property      → "Nigeria real estate property building"
   *   products      → "electronics products Nigeria market"
   *   vehicles      → "Nigeria car vehicle road"
   *   documents     → "certificate document official Nigeria"
   *   identity      → "Nigeria professional ID portrait"
   *   online-stores → "Nigeria online shopping package delivery"
   *   services      → "Nigerian artisan contractor work"
   *   luxury        → "luxury watch jewellery Nigeria"
   */
  imagePath?: string;
}

// ─────────────────────────────────────────────
// DATA
// imagePath references /public/images/categories/<slug>.jpg
// Remove the imagePath key entirely for any category that has
// no photo yet — the gradient will be used as fallback.
// ─────────────────────────────────────────────

export const CATEGORY_DATA: Category[] = [
  {
    slug: "property",
    label: "Property & Real Estate",
    shortLabel: "Property",
    description:
      "Verify land documents, confirm ownership, and inspect physical properties before any transaction.",
    priceFrom: "₦5,000",
    turnaround: "24–72 hrs",
    icon: "property",
    gradient: "linear-gradient(145deg, #0c1f3d 0%, #0f2d56 60%, #132d50 100%)",
    imagePath: "/images/categories/property.jpg",
  },
  {
    slug: "products",
    label: "Products & Electronics",
    shortLabel: "Products",
    description:
      "Authenticate goods, confirm physical condition, and verify listings match reality before you pay.",
    priceFrom: "₦2,000",
    turnaround: "12–48 hrs",
    icon: "product",
    gradient: "linear-gradient(145deg, #0a1930 0%, #0d2444 60%, #0f2540 100%)",
    imagePath: "/images/categories/product.jpg",
  },
  {
    slug: "vehicles",
    label: "Vehicles",
    shortLabel: "Vehicles",
    description:
      "Comprehensive inspection — engine, chassis, papers, and full body condition before you buy.",
    priceFrom: "₦5,000",
    turnaround: "24–48 hrs",
    icon: "vehicle",
    gradient: "linear-gradient(145deg, #0e2038 0%, #122e50 60%, #152e4a 100%)",
    imagePath: "/images/categories/vehicles.jpg",
  },
  {
    slug: "documents",
    label: "Documents & Certificates",
    shortLabel: "Documents",
    description:
      "Verify academic certificates, legal papers, and official documents for authenticity and legitimacy.",
    priceFrom: "₦3,000",
    turnaround: "24–72 hrs",
    icon: "document",
    gradient: "linear-gradient(145deg, #0b1c38 0%, #0f2a50 60%, #112a4a 100%)",
    imagePath: "/images/categories/document.jpg",
  },
  {
    slug: "identity",
    label: "Identity & Background",
    shortLabel: "Identity",
    description:
      "NIN verification, background checks, and identity confirmation — know exactly who you are dealing with.",
    priceFrom: "₦5,000",
    turnaround: "48–96 hrs",
    icon: "identity",
    gradient: "linear-gradient(145deg, #0d1e40 0%, #112c58 60%, #142c52 100%)",
    imagePath: "/images/categories/identity.jpg",
  },
  {
    slug: "online-stores",
    label: "Online Stores & Sellers",
    shortLabel: "Online Sellers",
    description:
      "Verify seller legitimacy, confirm physical store locations, and check inventory before sending payment.",
    priceFrom: "₦3,000",
    turnaround: "12–48 hrs",
    icon: "store",
    gradient: "linear-gradient(145deg, #091832 0%, #0d2248 60%, #0f2244 100%)",
    imagePath: "/images/categories/online-stores.jpg",
  },
  {
    slug: "services",
    label: "Services & Contractors",
    shortLabel: "Services",
    description:
      "Verify contractors, artisans, and service providers before you hire and before you make any payment.",
    priceFrom: "₦5,000",
    turnaround: "24–72 hrs",
    icon: "service",
    gradient: "linear-gradient(145deg, #0f213c 0%, #142f54 60%, #162e4e 100%)",
    imagePath: "/images/categories/services.jpg",
  },
  {
    slug: "luxury",
    label: "Luxury Items",
    shortLabel: "Luxury",
    description:
      "Authenticate designer goods, luxury watches, jewellery, and high-value collectibles with expert eyes.",
    priceFrom: "₦10,000",
    turnaround: "48–96 hrs",
    icon: "luxury",
    gradient: "linear-gradient(145deg, #0a1a36 0%, #0e264e 60%, #102648 100%)",
    imagePath: "/images/categories/luxury.jpg",
  },
];

// ─────────────────────────────────────────────
// ICON REGISTRY
// ─────────────────────────────────────────────

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const stroke = "#3b82f6";
  const sw = 1.5;
  const map: Record<string, ReactElement> = {
    property: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 10.5L12 3l9 7.5V21H3V10.5z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path d="M9 21V14h6v7" stroke={stroke} strokeWidth={sw} />
      </svg>
    ),
    product: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="7.5"
          height="7.5"
          rx="1.5"
          stroke={stroke}
          strokeWidth={sw}
        />
        <rect
          x="13.5"
          y="3"
          width="7.5"
          height="7.5"
          rx="1.5"
          stroke={stroke}
          strokeWidth={sw}
        />
        <rect
          x="3"
          y="13.5"
          width="7.5"
          height="7.5"
          rx="1.5"
          stroke={stroke}
          strokeWidth={sw}
        />
        <rect
          x="13.5"
          y="13.5"
          width="7.5"
          height="7.5"
          rx="1.5"
          stroke={stroke}
          strokeWidth={sw}
        />
      </svg>
    ),
    vehicle: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M5 10.5l2.5-5.5h9l2.5 5.5"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
        />
        <rect
          x="2"
          y="10.5"
          width="20"
          height="7"
          rx="2"
          stroke={stroke}
          strokeWidth={sw}
        />
        <circle cx="7" cy="17.5" r="2" stroke={stroke} strokeWidth={sw} />
        <circle cx="17" cy="17.5" r="2" stroke={stroke} strokeWidth={sw} />
      </svg>
    ),
    document: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M14 3H6a1 1 0 00-1 1v16a1 1 0 001 1h12a1 1 0 001-1V8l-5-5z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path
          d="M14 3v5h5M8 13h8M8 17h5"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
        />
      </svg>
    ),
    identity: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="2"
          stroke={stroke}
          strokeWidth={sw}
        />
        <circle cx="8" cy="12" r="2.5" stroke={stroke} strokeWidth={sw} />
        <path
          d="M13 10h6M13 14h4"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
        />
      </svg>
    ),
    store: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M3 3h18l-2 7H5L3 3z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path d="M5 10v11h14V10" stroke={stroke} strokeWidth={sw} />
        <path d="M9 10v5h6v-5" stroke={stroke} strokeWidth={sw} />
      </svg>
    ),
    service: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke={stroke} strokeWidth={sw} />
        <path
          d="M4 20c0-3.314 3.582-6 8-6s8 2.686 8 6"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
        />
      </svg>
    ),
    luxury: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2.5l2.5 7.5H22l-6.5 4.7 2.5 7.5L12 17.5l-6 4.7 2.5-7.5L2 10h7.5L12 2.5z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  return map[name] ?? map["document"];
}

// ─────────────────────────────────────────────
// CATEGORY CARD
// Always shows the image (or gradient fallback).
// Description is always visible — no hover-only reveal.
// ─────────────────────────────────────────────

interface CardProps {
  cat: Category;
  index: number;
  size?: "tall" | "normal";
  animationDelay?: number;
}

function CategoryCard({
  cat,
  index,
  size = "normal",
  animationDelay = 0,
}: CardProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: animationDelay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ height: size === "tall" ? "100%" : undefined }}
    >
      <Link
        href={`/categories/${cat.slug}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          height: size === "tall" ? "100%" : undefined,
          minHeight: size === "tall" ? 460 : 220,
          borderRadius: 20,
          overflow: "hidden",
          textDecoration: "none",
          cursor: "pointer",
          border: "1px solid rgba(255,255,255,0.06)",
          transition: "box-shadow 300ms ease",
          boxShadow: hovered
            ? "0 24px 64px rgba(0,0,0,0.5)"
            : "0 4px 24px rgba(0,0,0,0.25)",
        }}
      >
        {/* ── Background: image OR gradient ── */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          {cat.imagePath ? (
            <>
              <Image
                src={cat.imagePath}
                alt={cat.label}
                fill
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  transform: hovered ? "scale(1.06)" : "scale(1)",
                  transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
                  zIndex: 1,
                }}
              />
              {/* Colour-tinted overlay so all cards read on-brand */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: 'rgba(7, 18, 40, 0.5)',
                  zIndex: 2,
                }}
              />
            </>
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: cat.gradient,
                transform: hovered ? "scale(1.04)" : "scale(1)",
                transition: "transform 700ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
          )}

          {/* Bottom-to-top scrim — always present */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.1) 100%)",
              zIndex: 3,
            }}
          />

          {/* Hover blue glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(29,78,216,0.14) 0%, transparent 60%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 400ms ease",
              zIndex: 4,
            }}
          />
        </div>

        {/* Ghost number */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            right: -8,
            transform: `translateY(-50%) ${hovered ? "scale(1.1)" : "scale(1)"}`,
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize:
              size === "tall"
                ? "clamp(6rem, 10vw, 10rem)"
                : "clamp(5rem, 7vw, 7.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            color: "rgba(255,255,255,0.05)",
            transition: "transform 500ms cubic-bezier(0.16, 1, 0.3, 1)",
            userSelect: "none",
            pointerEvents: "none",
            zIndex: 3,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(to right, #1d4ed8, #3b82f6, transparent)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 350ms ease",
            zIndex: 10,
          }}
        />

        {/* ── Content ── */}
        <div
          style={{ position: "relative", zIndex: 5, padding: "20px 22px 22px" }}
        >
          {/* Icon + price */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: 14,
            }}
          >
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: hovered
                  ? "rgba(29,78,216,0.28)"
                  : "rgba(29,78,216,0.18)",
                border: `1px solid ${hovered ? "rgba(59,130,246,0.5)" : "rgba(59,130,246,0.28)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 300ms, border-color 300ms",
                flexShrink: 0,
              }}
            >
              <Icon name={cat.icon} size={20} />
            </div>
            <div
              style={{
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.09)",
                borderRadius: 8,
                padding: "4px 10px",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.58)",
                  letterSpacing: "0.04em",
                }}
              >
                from {cat.priceFrom}
              </span>
            </div>
          </div>

          {/* Label */}
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: size === "tall" ? 16 : 15,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: 8,
            }}
          >
            {cat.label}
          </h3>

          {/* Description — always visible */}
          <p
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: 12.5,
              lineHeight: 1.65,
              color: "rgba(255,255,255,0.52)",
              fontWeight: 400,
              marginBottom: 14,
            }}
          >
            {cat.description}
          </p>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: 12,
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
              }}
            >
              {cat.turnaround}
            </span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: hovered ? "#3b82f6" : "rgba(255,255,255,0.3)",
                transition: "color 250ms ease",
              }}
            >
              Verify now
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                style={{
                  transform: hovered ? "translateX(3px)" : "translateX(0)",
                  transition: "transform 250ms",
                }}
              >
                <path
                  d="M2 6h8M6.5 2.5l4 3.5-4 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// BENTO GRID
// ─────────────────────────────────────────────

function BentoGrid({ categories }: { categories: Category[] }) {
  const groups: Array<{ tall: Category; a: Category; b: Category }> = [];
  const remainder: Category[] = [];
  let gi = 0;

  while (gi + 2 < categories.length) {
    groups.push({
      tall: categories[gi],
      a: categories[gi + 1],
      b: categories[gi + 2],
    });
    gi += 3;
  }
  while (gi < categories.length) remainder.push(categories[gi++]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {groups.map((g, i) => {
        const tallLeft = i % 2 === 0;
        const tallCard = (
          <CategoryCard
            cat={g.tall}
            index={i * 3}
            size="tall"
            animationDelay={i * 0.06}
          />
        );
        const stackCards = (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              height: "100%",
            }}
          >
            <CategoryCard
              cat={g.a}
              index={i * 3 + 1}
              size="normal"
              animationDelay={i * 0.06 + 0.09}
            />
            <CategoryCard
              cat={g.b}
              index={i * 3 + 2}
              size="normal"
              animationDelay={i * 0.06 + 0.16}
            />
          </div>
        );
        return (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
              alignItems: "stretch",
            }}
          >
            <div style={{ minHeight: 460 }}>
              {tallLeft ? tallCard : stackCards}
            </div>
            <div style={{ minHeight: 460 }}>
              {tallLeft ? stackCards : tallCard}
            </div>
          </div>
        );
      })}

      {remainder.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(remainder.length, 3)}, 1fr)`,
            gap: 16,
          }}
        >
          {remainder.map((cat, si) => (
            <CategoryCard
              key={cat.slug}
              cat={cat}
              index={groups.length * 3 + si}
              size="normal"
              animationDelay={si * 0.08}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// DRAG RAIL — homepage variant
//
// FIX: The rail is a full-bleed element that breaks out of the
// container width. To align the first card with the container's
// left edge on all screen sizes, we use CSS to compute the left
// padding dynamically.
//
// On screens wider than the container max-width (1280px by default
// in Tailwind), the container is centred with (100vw - 1280px) / 2
// of space on each side, PLUS the container's own px-6 (24px).
// On narrower screens the container flush-sits at 24px from each edge.
//
// The outer wrapper uses negative margin to break out of the
// container, so the rail is always full-viewport-width.
// ─────────────────────────────────────────────

function DragRail({ categories }: { categories: Category[] }) {
  const railRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const dragged = useRef(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const onDown = (e: MouseEvent) => {
      isDown.current = true;
      dragged.current = false;
      startX.current = e.pageX - rail.offsetLeft;
      scrollLeft.current = rail.scrollLeft;
      rail.style.cursor = "grabbing";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      dragged.current = true;
      rail.scrollLeft =
        scrollLeft.current - (e.pageX - rail.offsetLeft - startX.current) * 1.4;
    };
    const onUp = () => {
      isDown.current = false;
      rail.style.cursor = "grab";
    };
    const onClick = (e: MouseEvent) => {
      if (dragged.current) e.preventDefault();
    };

    rail.addEventListener("mousedown", onDown);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    rail.addEventListener("click", onClick, true);
    return () => {
      rail.removeEventListener("mousedown", onDown);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      rail.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    /*
     * This wrapper breaks out of the parent container to span full viewport
     * width, then uses paddingLeft to align the first card with the
     * container's left edge on all viewport sizes.
     *
     * Container max-width in Tailwind default config = 1280px (xl).
     * If your project uses a different max-width, update the 1280px value.
     *
     * padding-left formula:
     *   max(24px,  (100vw - 1280px) / 2 + 24px)
     *   ↑ 24px is the fallback when the viewport is narrower than container
     *   ↑ the second term kicks in on large screens to match container offset
     */
    <div
      ref={railRef}
      role="region"
      aria-label="Verification categories — drag or scroll to explore"
      tabIndex={0}
      className="drag-rail"
      onKeyDown={(e) => {
        const r = railRef.current;
        if (!r) return;
        if (e.key === "ArrowRight")
          r.scrollBy({ left: 278, behavior: "smooth" });
        if (e.key === "ArrowLeft")
          r.scrollBy({ left: -278, behavior: "smooth" });
      }}
      style={{
        display: "flex",
        gap: 14,
        // Align first card with container left edge; pad right symmetrically
        paddingLeft: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
        paddingRight: "max(24px, calc((100vw - 1280px) / 2 + 24px))",
        paddingBottom: 16,
        cursor: "grab",
        userSelect: "none",
        WebkitOverflowScrolling: "touch",
        touchAction: "pan-x",
      }}
    >
      {categories.map((cat, i) => (
        <div
          key={cat.slug}
          className="drag-rail-item"
          style={{ flexShrink: 0, width: 264, scrollSnapAlign: "start" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px -25% 0px 0px" }}
            transition={{ duration: 0.55, delay: Math.min(i, 5) * 0.065 }}
            style={{ height: "100%" }}
          >
            <CategoryCard cat={cat} index={i} size="tall" />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────

interface CategoriesSectionProps {
  categories?: Category[];
  /** true = bento grid on /categories page; false = drag rail on homepage */
  gridMode?: boolean;
}

export default function CategoriesSection({
  categories = CATEGORY_DATA,
  gridMode = false,
}: CategoriesSectionProps) {
  return (
    <section
      style={{
        background: gridMode
          ? "var(--bg-secondary, #f8f9fa)"
          : "var(--bg, #fff)",
        paddingTop: "clamp(64px, 10vw, 120px)",
        paddingBottom: "clamp(64px, 10vw, 120px)",
        overflow: "hidden",
      }}
    >
      {/* ── Header — always inside container ── */}
      <div
        className="container mx-auto px-6"
        style={{ marginBottom: gridMode ? 48 : 40 }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          {/* Left */}
          <div>
            <motion.div
              className="eyebrow"
              style={{ marginBottom: 12 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              What we verify
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.9rem, 4vw, 3rem)",
                letterSpacing: "-0.035em",
                lineHeight: 1.1,
                color: "var(--text-primary, #0d0d0d)",
              }}
            >
              Every category{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                covered.
              </span>
            </motion.h2>
          </div>

          {/* Right — Browse all link (rail mode only) */}
          {!gridMode && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link
                href="/categories"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                  color: "#1d4ed8",
                  textDecoration: "none",
                }}
              >
                Browse all
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2 6.5h9M7.5 2.5l4 4-4 4"
                    stroke="#1d4ed8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* ── Content ── */}
      {gridMode ? (
        <div className="container mx-auto px-6">
          <BentoGrid categories={categories} />

          {/* CTA strip */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              marginTop: 56,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 20,
              padding: "32px 36px",
              borderRadius: 20,
              background: "linear-gradient(135deg, #1d4ed8 0%, #0d2d8a 100%)",
              boxShadow: "0 20px 60px rgba(29,78,216,0.25)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  marginBottom: 6,
                }}
              >
                Not sure which category you need?
              </div>
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Describe what you want checked and we will guide you to the
                right one.
              </p>
            </div>
            <Link
              href={BRAND.appUrl}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                color: "#1d4ed8",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                padding: "12px 28px",
                borderRadius: 10,
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              Start a request
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2.5 7h9M7.5 3l4 4-4 4"
                  stroke="#1d4ed8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      ) : (
        // Rail is full-width; padding inside aligns with container
        <div className="container-xl mx-auto px-6">
          <DragRail categories={categories} />
        </div>
      )}
    </section>
  );
}
