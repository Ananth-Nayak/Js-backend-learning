import mongoose from 'mongoose';

const medicalRecordSchema = new mongoose.Schema(
  {
    patientName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    doctorName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    hospitaName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  'Medicalrecord',
  medicalRecordSchema
);
