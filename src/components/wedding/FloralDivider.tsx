import floralImg from "@/assets/floral-divider.png";

const FloralDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center my-8 ${className}`}>
    <img src={floralImg} alt="" width={120} height={77} className="opacity-60" loading="lazy" />
  </div>
);

export default FloralDivider;
