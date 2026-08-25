export type ProductCategory = 
  | 'todos'
  | 'educacional'
  | 'hospitalar_clinico'
  | 'ti_infraestrutura'
  | 'reagentes_consumiveis'
  | 'mobiliario_tecnico';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  tagline: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  targetAudience: string[];
  certifications: string[];
  image: string;
  featured?: boolean;
  modelCode: string;
  warranty: string;
  includesTraining: boolean;
}

export interface AcademyCourse {
  id: string;
  title: string;
  category: 'Educacional' | 'Hospitalar & Clínico' | 'TI & Infraestrutura' | 'Biossegurança & BPL';
  level: 'Fundamental' | 'Intermediário' | 'Avançado' | 'Especialização';
  durationHours: number;
  format: 'Presencial' | 'Híbrido' | 'In-Company' | 'Online com Prática';
  targetAudience: string;
  summary: string;
  modules: string[];
  includesCertification: boolean;
  skillsGained: string[];
  badge: string;
  iconName: string;
}

export interface QuoteItem {
  product: Product;
  quantity: number;
  notes?: string;
  includeInstallation: boolean;
  includeAcademyTraining: boolean;
}

export interface InstitutionInfo {
  type: 'escola_publica' | 'escola_privada' | 'universidade' | 'hospital' | 'clinica_laboratorio' | 'orgao_publico_concurso' | 'outro';
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  province: string;
  taxId?: string; // NIF (Número de Identificação Fiscal)
  projectStage: 'planejamento' | 'concurso_publico' | 'compra_imediata' | 'modernizacao';
  requestedDeliveryDeadline?: string;
  additionalNotes?: string;
}

export const ANGOLA_PROVINCES = [
  'Bengo',
  'Benguela',
  'Bié',
  'Cabinda',
  'Cuando Cubango',
  'Cuanza Norte',
  'Cuanza Sul',
  'Cunene',
  'Huambo',
  'Huíla',
  'Icolo e Bengo',
  'Luanda',
  'Lunda Norte',
  'Lunda Sul',
  'Malanje',
  'Moxico',
  'Namibe',
  'Uíge',
  'Zaire'
] as const;

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  location: string;
  scope: string[];
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface ServiceRequest {
  id: string;
  institutionName: string;
  contactEmail: string;
  contactPhone: string;
  equipmentType: string;
  serialNumber?: string;
  serviceType: 'calibracao' | 'manutencao_preventiva' | 'manutencao_corretiva' | 'treinamento_equipe' | 'consultoria_infra_ti';
  urgency: 'baixa' | 'media' | 'alta' | 'critica_parada_laboratorio';
  description: string;
}
