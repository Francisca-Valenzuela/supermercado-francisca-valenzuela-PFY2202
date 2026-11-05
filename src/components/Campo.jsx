function Campo({ etiqueta, nombre, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={nombre} className="font-semibold text-green-800">
        {etiqueta}
      </label>
      {children}
      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Campo;