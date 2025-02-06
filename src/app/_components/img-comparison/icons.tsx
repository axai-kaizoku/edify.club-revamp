export const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={14}
    viewBox="0 0 8 14"
    fill="none"
  >
    <path
      d="M6.32715 1.85767L1.73034 7.0652L6.32715 12.4588"
      stroke={props.color ?? "black"}
      strokeWidth="1.7806"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={14}
    viewBox="0 0 7 14"
    fill="none"
  >
    <path
      d="M1.08398 1.85767L5.68079 7.0652L1.08398 12.4588"
      stroke={props.color ?? "black"}
      strokeWidth="1.7806"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
