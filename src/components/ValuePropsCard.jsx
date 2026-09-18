const ValuePropsCard = ({ icon, title, description, badgeText }) => {
  return (
    <div className="bg-surface-container-low hover:bg-surface-container p-6 rounded-lg shadow-sm transition-all flex flex-col justify-between min-h-72">
      <div className="flex flex-col gap-3 mb-4">
        <div className="w-10 h-10 rounded bg-surface-container-high flex items-center justify-center text-primary">
          <span className="material-symbols-outlined text-[24px]">{icon}</span>
        </div>
        <span className="text-xs font-Geist uppercase text-outline">{badgeText}</span>
        <h3 className="text-xl font-EB_Garamond text-on-surface leading-tight">{title}</h3>
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
