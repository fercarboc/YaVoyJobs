const SupportSection = () => {
  return (
    <section id="support" className="flex flex-col gap-6 scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            chat
          </span>
          Incidencias &amp; Soporte
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border-dark rounded-xl overflow-hidden bg-surface-dark h-[500px]">
        {/* LISTADO DE TICKETS */}
        <div className="col-span-1 border-r border-border-dark flex flex-col">
          <div className="p-4 border-b border-border-dark bg-[#161a20]">
            <input
              type="text"
              placeholder="Buscar ticket..."
              className="w-full bg-[#111418] border border-border-dark rounded px-3 py-2 text-sm text-white placeholder-[#4b5563]"
            />
          </div>

          <div className="overflow-y-auto flex-1">
            {/* Ticket activo */}
            <div className="p-4 border-b border-border-dark bg-[#282f39]/50 border-l-4 border-l-primary cursor-pointer hover:bg-[#282f39]">
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium text-sm">
                  Problema con Factura
                </span>
                <span className="text-xs text-[#9da8b9]">
                  10:30 AM
                </span>
              </div>
              <p className="text-[#9da8b9] text-xs line-clamp-2">
                Hola, no he recibido la factura del último mes y la necesito para...
              </p>
            </div>

            {/* Ticket normal */}
            <div className="p-4 border-b border-border-dark cursor-pointer hover:bg-[#282f39] border-l-4 border-l-transparent">
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium text-sm">
                  Error en Login
                </span>
                <span className="text-xs text-[#9da8b9]">
                  Ayer
                </span>
              </div>
              <p className="text-[#9da8b9] text-xs line-clamp-2">
                No puedo acceder a mi cuenta desde el móvil...
              </p>
            </div>
          </div>
        </div>

        {/* CHAT */}
        <div className="col-span-2 flex flex-col bg-[#111418]">
          {/* Chat header */}
          <div className="p-4 border-b border-border-dark bg-surface-dark flex justify-between items-center">
            <div>
              <h3 className="text-white font-bold text-sm">
                Ticket #2291 - Problema con Factura
              </h3>
              <p className="text-[#9da8b9] text-xs">
                Usuario: Ana García (ana@mail.com)
              </p>
            </div>
            <button className="text-sm text-white bg-green-600 hover:bg-green-500 px-3 py-1.5 rounded">
              Resolver
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
            {/* Mensaje recibido */}
            <div className="self-start max-w-[80%]">
              <div className="bg-[#282f39] p-3 rounded-tr-xl rounded-br-xl rounded-bl-xl text-sm text-[#d1d5db]">
                Hola, no he recibido la factura del último mes y la necesito para
                contabilidad. ¿Me la podéis enviar?
              </div>
              <span className="text-[10px] text-[#4b5563] mt-1 ml-1">
                10:30 AM
              </span>
            </div>

            {/* Mensaje enviado */}
            <div className="self-end max-w-[80%] flex flex-col items-end">
              <div className="bg-primary p-3 rounded-tl-xl rounded-bl-xl rounded-br-xl text-sm text-white">
                Hola Ana, disculpa las molestias. Te la adjunto en este mensaje
                ahora mismo.
              </div>
              <span className="text-[10px] text-[#4b5563] mt-1 mr-1">
                10:35 AM · Leído
              </span>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 bg-surface-dark border-t border-border-dark">
            <div className="flex gap-2">
              <button className="p-2 text-[#9da8b9] hover:text-white">
                <span className="material-symbols-outlined">
                  attach_file
                </span>
              </button>
              <input
                type="text"
                placeholder="Escribe una respuesta..."
                className="flex-1 bg-[#111418] border border-border-dark rounded px-3 py-2 text-sm text-white focus:ring-1 focus:ring-primary"
              />
              <button className="p-2 bg-primary text-white rounded hover:bg-primary/90">
                <span className="material-symbols-outlined">
                  send
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
