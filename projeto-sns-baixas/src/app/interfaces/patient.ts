export interface Patient {
  id: string;
  nome: string;
  morada: string;
  bilheteIdentidade: string;
  dataNascimento: Date;
  numeroSNS: string;
  medicoId: string; // Novo campo para associar o paciente ao médico
}