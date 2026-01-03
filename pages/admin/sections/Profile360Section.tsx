const Profile360Section = () => {
  return (
    <section id="profile360" className="flex flex-col gap-6 scroll-mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">
            verified_user
          </span>
          Perfil 360° &amp; Verificación (KYC)
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* USER SUMMARY */}
        <div className="bg-surface-dark border border-border-dark rounded-xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div
              className="bg-center bg-cover rounded-full size-16 border-2 border-primary"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDWS1pwZaxywBgQEN_tf5rO0pw2a5dBy0KNZ03fkOzjn-oOF8Gnkf5tq4lilPBXtqvTgoWYdOrJGONYKYC58iiFuz4tZucO5GCrKCVFY9L31npcViDlHOesdO1xGI6QKYZlpaF6RI1glwg35o1SswG7aC_GQFIFiHFGO4gaAJv312FIyt-YSUY91NxFNS7Mq8AfXdx6tLzvfUO3e-HxSoB6PdseRxk-P319VW4YCC6xUa1cEH9BrhmdsNTNJ7Bb67Z-2E3bXigWGQk")',
              }}
            />
            <div>
              <h3 className="text-white font-bold text-lg">Mario Gómez</h3>
              <div className="flex items-center gap-2">
                <span className="bg-yellow-500/20 text-yellow-500 text-[10px] font-bold px-2 py-0.5 rounded">
                  REVISIÓN MANUAL
                </span>
                <span className="text-[#9da8b9] text-xs">ID: #88219</span>
              </div>
            </div>
          </div>

          <div className="space-y-2 mt-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#9da8b9]">Email:</span>
              <span className="text-white">mario@test.com</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#9da8b9]">Teléfono:</span>
              <span className="text-white">+34 600 000 000</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#9da8b9]">IP Reg:</span>
              <span className="text-white">192.168.1.1</span>
            </div>
          </div>
        </div>

        {/* KYC DOCUMENTS */}
        <div className="lg:col-span-2 bg-surface-dark border border-border-dark rounded-xl p-6">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#9da8b9]">
              folder_shared
            </span>
            Documentos Enviados
          </h3>

          <div className="flex gap-4">
            <div className="flex-1 bg-[#111418] border border-border-dark rounded-lg p-3 flex flex-col gap-2">
              <p className="text-xs text-[#9da8b9] uppercase font-bold">
                DNI Frontal
              </p>
              <div
                className="bg-center bg-cover rounded h-32 w-full opacity-80 hover:opacity-100 transition-opacity cursor-zoom-in"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkxhSU16th97RMSxnDLstScOQbe_XkI-voOxJipVcaN8gDIpmU3NucyAq623l-oJig4TSeh1qFAgQzFDXFxiizx31LnNfo2xrn954UitjTBfFu_ZpaCToNr9VS4aBd3323pmSfJFQcMAHdGk5z9LYICl6Bsy9tiwAiyPDydReRQ20Xfcie6cnb5mMnnHaKFGCG8ngdCU0QiXmrZTOyw-vWd5wpFKV6-yWv_22bwzEuSDoapE_zS0FvJzbupSPovH0KARng5DfvxFw")',
                }}
              />
            </div>

            <div className="flex-1 bg-[#111418] border border-border-dark rounded-lg p-3 flex flex-col gap-2">
              <p className="text-xs text-[#9da8b9] uppercase font-bold">
                DNI Reverso
              </p>
              <div
                className="bg-center bg-cover rounded h-32 w-full opacity-80 hover:opacity-100 transition-opacity cursor-zoom-in"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBfJuEc87fHpTP1oA48UIW6bqoKXnhbRbmMR5jLPzD7LBwhfS9eu-RdicFcC2Kcg0x0zLXAIhD9hSscwuQN5p0NwBEGPCn6ggIsLd4coXijYf2Yt9L_etIECT1_GvVmAwYejVBJ2uSNjhL6JTqimS3NQjRbCBF_eOes6prlUE5p_okFTA-qsEvoUM_gBuXhlSeSdbKUg10HXMcwtPI_aEZnoSlFEoX145JFHDnRQ5Dm7g1XCasBEUYD8n6G3vwnToCizZzSFebPBTw")',
                }}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6 justify-end">
            <button className="px-4 py-2 rounded-lg border border-red-500/50 text-red-400 hover:bg-red-500/10 text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">
                close
              </span>
              Rechazar
            </button>

            <button className="px-4 py-2 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-bold flex items-center gap-2 shadow-lg shadow-green-900/20">
              <span className="material-symbols-outlined text-lg">
                check
              </span>
              Aprobar KYC
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile360Section;
