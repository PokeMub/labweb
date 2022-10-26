import mongoose from "mongoose";
const { Schema } = mongoose;
const GrupoMuscularSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true,
    },
},
{ timestamps: true },
);
export default mongoose.model("GrupoMuscular", GrupoMuscularSchema);