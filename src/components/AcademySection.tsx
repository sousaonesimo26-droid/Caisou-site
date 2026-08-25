import React, { useState } from 'react';
import { academyCourses } from '../data/academyData';
import { AcademyCourse } from '../types';
import {
  BookOpen,
  GraduationCap,
  Award,
  Clock,
  CheckCircle2,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building,
  Check,
  Send,
  X
} from 'lucide-react';

interface AcademySectionProps {
  onOpenQuoteBuilder: () => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onOpenQuoteBuilder }) => {
  const [selectedTrack, setSelectedTrack] = useState<string>('todos');
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<AcademyCourse | null>(null);
  const [inCompanyModalOpen, setInCompanyModalOpen] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  // Form state for in-company training
  const [formData, setFormData] = useState({
    institutionName: '',
    contactName: '',
    email: '',
    phone: '',
    courseTitle: '',
    expectedStudents: '10-20',
    preferredFormat: 'Presencial',
    notes: ''
  });

  const tracks = [
    { id: 'todos', label: 'Todos os Cursos' },
    { id: 'Educacional', label: 'Formação Docente (Escolas & Univ.)' },
    { id: 'Hospitalar & Clínico', label: 'Equipes Clínicas & Biomédicas' },
    { id: 'Biossegurança & BPL', label: 'Biossegurança & Normas' },
    { id: 'TI & Infraestrutura', label: 'TI & Redes Institucionais' }
  ];

  const filteredCourses = academyCourses.filter((course) => {
    if (selectedTrack === 'todos') return true;
    return course.category === selectedTrack;
  });

  const handleOpenCourseSchedule = (course: AcademyCourse) => {
    setFormData((prev) => ({ ...prev, courseTitle: course.title, preferredFormat: course.format }));
    setSelectedCourseForModal(course);
    setInCompanyModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSent(true);
    setTimeout(() => {
      setRequestSent(false);
      setInCompanyModalOpen(false);
      setFormData({
        institutionName: '',
        contactName: '',
        email: '',
        phone: '',
        courseTitle: '',
        expectedStudents: '10-20',
        preferredFormat: 'Presencial',
        notes: ''
      });
    }, 2000);
  };

  return (
    <section id="academy" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-[#07244C] to-slate-900 text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/3 right-1/10 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            CAISOU Academy • Divisão de Capacitação Contínua
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Formação Especializada para Professores, Técnicos e Profissionais de Saúde
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            Não basta comprar equipamentos de ponta: é essencial que sua equipe domine o manuseio, a calibração, a segurança e as práticas pedagógicas. A CAISOU Academy transforma sua infraestrutura em excelência operacional.
          </p>

          {/* Track Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setSelectedTrack(track.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedTrack === track.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-950/50'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700'
                }`}
              >
                {track.label}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-slate-800/90 rounded-2xl border border-slate-700 hover:border-emerald-400/60 p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:shadow-emerald-950/30 group"
            >
              <div>
                {/* Course Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {course.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {course.durationHours}h ({course.format})
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors leading-snug mb-2">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">{course.summary}</p>

                {/* Target Audience Tag */}
                <div className="p-2.5 bg-slate-900/70 rounded-xl border border-slate-700/80 text-[11px] text-slate-300 mb-4">
                  <span className="font-bold text-emerald-400 block mb-0.5">Público-Alvo:</span>
                  {course.targetAudience}
                </div>

                {/* Syllabus Modules */}
                <div className="space-y-1.5 mb-5">
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Ementa Prática:
                  </div>
                  {course.modules.slice(0, 3).map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{mod}</span>
                    </div>
                  ))}
                  {course.modules.length > 3 && (
                    <div className="text-[11px] text-emerald-300 font-semibold pl-5">
                      + {course.modules.length - 3} módulos avançados
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-700">
                <button
                  onClick={() => handleOpenCourseSchedule(course)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar para Minha Instituição</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner: Custom In-Company Training */}
        <div className="mt-14 bg-gradient-to-r from-emerald-950/60 via-slate-800 to-blue-950/60 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Award className="w-6 h-6 text-amber-400" />
              Treinamentos Customizados In-Company & Certificação Oficial
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Levamos a CAISOU Academy até a sua escola, universidade ou hospital, com instrutores especializados, apostilas práticas e certificação válida em todo o território nacional.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedCourseForModal(null);
              setFormData((prev) => ({ ...prev, courseTitle: 'Treinamento Customizado / In-Company' }));
              setInCompanyModalOpen(true);
            }}
            className="px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md shrink-0 transition-all cursor-pointer"
          >
            Solicitar Proposta In-Company
          </button>
        </div>
      </div>

      {/* In-Company / Academy Schedule Modal */}
      {inCompanyModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl max-w-xl w-full p-6 relative shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setInCompanyModalOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {requestSent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Solicitação de Treinamento Enviada!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Nossa coordenação pedagógica da CAISOU Academy entrará em contato em até 24 horas úteis com o cronograma, ementa customizada e orçamento para sua instituição.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                    CAISOU Academy • Agendamento
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedCourseForModal ? selectedCourseForModal.title : 'Capacitação para Instituição'}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Preencha os dados da sua instituição para receber a proposta pedagógica e datas disponíveis.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Nome da Instituição (Escola/Univ./Hospital) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institutionName}
                      onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                      placeholder="Ex: Colégio São Bento / Hospital Central"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Nome do Responsável / Cargo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="Ex: Profa. Maria (Coord. Pedagógica)"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">E-mail Institucional *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="contato@instituicao.edu.br"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Telefone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 99999-9999"
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Número Estimado de Alunos/Docentes
                    </label>
                    <select
                      value={formData.expectedStudents}
                      onChange={(e) => setFormData({ ...formData, expectedStudents: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="1-5">1 a 5 profissionais</option>
                      <option value="6-15">6 a 15 profissionais</option>
                      <option value="16-30">16 a 30 profissionais</option>
                      <option value="30+">Mais de 30 profissionais (Turmas Múltiplas)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">Formato Preferencial</label>
                    <select
                      value={formData.preferredFormat}
                      onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                      className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="Presencial In-Company">Presencial In-Company (Na Instituição)</option>
                      <option value="Híbrido">Híbrido (Teoria Online + Prática Presencial)</option>
                      <option value="Online ao Vivo">Online ao Vivo com Envio de Kits</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Equipamentos já instalados ou observações específicas
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ex: Possuímos 15 microscópios e precisamos capacitar os professores do 6º ao 9º ano..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setInCompanyModalOpen(false)}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Solicitação de Capacitação</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
