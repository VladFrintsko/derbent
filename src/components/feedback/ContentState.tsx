type ContentStateProps = {
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export const ContentState = ({
  title,
  message,
  actionLabel,
  onAction,
}: ContentStateProps) => {
  return (
    <div className="mx-auto max-w-lg rounded-3xl border border-slate-100 bg-white/80 px-8 py-12 text-center shadow-sm">
      <p className="text-xl font-semibold text-slate-900">{title}</p>
      {message && <p className="mt-2 text-sm text-slate-500">{message}</p>}
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};

