export default function PricingGradient() {
  return (
    <svg
      viewBox="0 0 1208 1024"
      className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
    >
      <ellipse
        cx={604}
        cy={512}
        fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
        rx={604}
        ry={512}
      />
      <defs>
        <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
          <stop stopColor="#1e40af" />
          <stop offset={1} stopColor="#1e3a8a" />
        </radialGradient>
      </defs>
    </svg>
  );
}
