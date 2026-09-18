const ValuePropsCard = ({ icon, title, description, badgeText }) => {
  return (
    <div className="bg-surface-container-low hover:bg-surface-container p-4 rounded-xl shadow-sm transition-all flex flex-col justify-between">
      <div className="flex flex-col gap-1 mb-2">
        <div className="w-2.5 h-2.5 rounded bg-surface-container-high flex items-center justify-center text-primary">
          <span className={`material-symbols-outlined text-[24px] ${icon}`}></span>
        </div>
        <span className="text-xs font-Geist uppercase text-outline">{badgeText}</span>
        <h3 className="text-sm font-EB_Garamond text-on-surface">{title}</h3>
        <p className="text-sm font-Hanken_Grotesk text-on-surface-variant">
          {description}
        </p>
      </div>
      <div className="pt-1 flex items-center gap-1 text-xs font-Geist uppercase text-secondary">
        <span>{badgeText}</span>
        <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </div>
    </div>
  );
};

export default ValuePropsCard;