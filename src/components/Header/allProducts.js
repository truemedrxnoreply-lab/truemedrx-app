import produit1 from '../../PageP/images/produit1.png';
import produit2 from '../../PageP/images/produit2.png';
import produit3 from '../../PageP/images/produit3.png';
import produit4 from '../../PageP/images/produit4.png';
import produit5 from '../../PageP/images/produit5.png';
import produit10 from '../../PageP/images/produit10.png';
import produit11 from '../../PageP/images/produit11.png';
import produit12 from '../../PageP/images/produit12.png';
import produit13 from '../../PageP/images/produit13.png';
import produit14 from '../../PageP/images/produit14.png';
import produit15 from '../../PageP/images/produit15.png';
import produit16 from '../../PageP/images/produit16.png';
import produit17 from '../../PageP/images/produit17.png';
import produit18 from '../../PageP/images/produit18.png';

const products = [
  { 
    id: 2, 
    brand: "WEGOVY 0.25mg", 
    name: "WEGOVY 0.25 mg FlexTouch injectable solution", 
    price: 340, 
    image: produit1,
    description: "Wegovy 0.25mg is the starting dose for weight management treatment. It contains semaglutide, a GLP-1 receptor agonist that helps reduce appetite and increase feelings of fullness. This initial dose is typically used for the first 4 weeks to help your body adjust to the medication with minimal side effects."
  },
  { 
    id: 1, 
    brand: "WEGOVY 0.5mg", 
    name: "WEGOVY 0.5 mg FlexTouch injectable solution", 
    price: 340, 
    image: produit2,
    description: "Wegovy 0.5mg is the second dosage step in weight management treatment. After 4 weeks on 0.25mg, patients increase to this dose. It continues to help control appetite through GLP-1 receptor activation, promoting weight loss while allowing the body to gradually adapt to higher semaglutide levels."
  },
  { 
    id: 3, 
    brand: "WEGOVY 1mg", 
    name: "WEGOVY 1mg FlexTouch injectable solution", 
    price: 340, 
    image: produit3,
    description: "Wegovy 1mg represents the third titration step in the weight loss protocol. Used after 4 weeks on 0.5mg, this dose provides increased semaglutide concentration for enhanced appetite suppression and metabolic effects. Many patients begin to see more significant weight loss results at this dosage level."
  },
  { 
    id: 4, 
    brand: "WEGOVY 1.7mg", 
    name: "WEGOVY 1.7 mg FlexTouch injectable solution", 
    price: 340, 
    image: produit4,
    description: "Wegovy 1.7mg is the fourth dosage step, approaching the maintenance level. This intermediate dose helps bridge between lower starting doses and the full therapeutic dose, minimizing gastrointestinal side effects while providing substantial appetite control and weight management benefits."
  },
  { 
    id: 5, 
    brand: "WEGOVY 2.4mg", 
    name: "WEGOVY 2.4 mg FlexTouch injectable solution", 
    price: 340, 
    image: produit5,
    description: "Wegovy 2.4mg is the full maintenance dose for chronic weight management. This is the target therapeutic dosage proven in clinical trials to provide maximum weight loss efficacy. Used once weekly, it helps sustain long-term weight reduction by regulating appetite centers in the brain and slowing gastric emptying."
  },
];

const products1 = [
  { 
    id: 6, 
    brand: "MOUNJARO 2.5 mg", 
    name: "MOUNJARO 2.5 mg FlexTouch pre-filled pen", 
    price: 850, 
    image: produit10,
    description: "Mounjaro 2.5mg is the introductory dose containing tirzepatide, a novel dual GIP and GLP-1 receptor agonist. This starting dose helps initiate metabolic improvements with minimal side effects. It's designed for the first 4 weeks of treatment to prepare patients for dose escalation in both diabetes management and weight loss therapy."
  },
  { 
    id: 7, 
    brand: "MOUNJARO 5 mg", 
    name: "MOUNJARO 5 mg/dose kwikPen Inj.-Solution", 
    price: 700, 
    image: produit11,
    description: "Mounjaro 5mg represents the first therapeutic dose level after the initial titration. This dose provides enhanced dual hormone receptor activation, offering improved blood sugar control and appetite suppression. Clinical studies show significant A1C reduction and weight loss beginning at this dosage level."
  },
  { 
    id: 8, 
    brand: "MOUNJARO 7.5 mg", 
    name: "Mounjaro 7.5 mg | pre-filled pen | Diabetes and obesity", 
    price: 696, 
    oldPrice: 900, 
    discount: "-42%", 
    image: produit12,
    description: "Mounjaro 7.5mg offers intermediate therapeutic benefits with enhanced efficacy over lower doses. At this level, patients typically experience substantial improvements in glycemic control and accelerated weight reduction. The dual agonist action provides synergistic effects on insulin secretion, glucagon suppression, and satiety signaling."
  },
  { 
    id: 9, 
    brand: "MOUNJARO 10 mg", 
    name: "Mounjaro 10 mg pre-filled pen", 
    price: 780, 
    image: produit13,
    description: "Mounjaro 10mg provides high-level dual receptor activation for patients requiring more intensive therapy. This dose delivers robust metabolic effects, including significant improvements in insulin sensitivity, reduced hepatic glucose production, and enhanced weight loss through central appetite regulation and delayed gastric emptying."
  },
  { 
    id: 10, 
    brand: "MOUNJARO 12.5 mg", 
    name: "Mounjaro 12.5 mg pre-filled pen", 
    price: 810, 
    image: produit14,
    description: "Mounjaro 12.5mg approaches the maximum therapeutic dose with pronounced effects on both glycemic control and weight management. Patients at this dose level often achieve substantial A1C reductions and meaningful weight loss. The medication works through multiple pathways including enhanced insulin secretion, suppressed glucagon, and reduced food intake."
  },
  { 
    id: 11, 
    brand: "MOUNJARO 15 mg", 
    name: "Mounjaro 15 mg pre-filled pen", 
    price: 800, 
    image: produit15,
    description: "Mounjaro 15mg is the highest available dose, providing maximum dual GIP/GLP-1 receptor agonism. This maintenance dose offers peak efficacy for both diabetes management and weight loss. Clinical trials demonstrate superior A1C reduction and weight loss compared to other GLP-1 therapies, with many patients achieving over 15% body weight reduction."
  },
];

const products2 = [
  { 
    id: 12, 
    brand: "OZEMPIC 0.25 mg", 
    name: "Ozempic 0.25 mg Pre-filled pen", 
    price: 454, 
    image: produit16,
    description: "Ozempic 0.25mg is the starting dose for type 2 diabetes treatment with semaglutide. This initial dose helps minimize gastrointestinal side effects while introducing GLP-1 receptor activation. It's typically used for the first 4 weeks to improve glucose-dependent insulin secretion, suppress glucagon, and slow gastric emptying gradually."
  },
  { 
    id: 13, 
    brand: "OZEMPIC 0.5 mg", 
    name: "Ozempic 0.5 mg pre-filled pen", 
    price: 346, 
    image: produit17,
    description: "Ozempic 0.5mg is the first maintenance dose for many patients with type 2 diabetes. After initial titration, this dose provides effective glycemic control through enhanced insulin secretion and glucagon suppression. It also offers cardiovascular benefits and moderate weight loss effects as demonstrated in clinical outcomes trials."
  },
  { 
    id: 14, 
    brand: "OZEMPIC 1 mg", 
    name: "Ozempic 1 mg pre-filled pen", 
    price: 565, 
    image: produit18,
    description: "Ozempic 1mg is the higher maintenance dose for patients requiring more intensive glycemic control. This dose provides maximum semaglutide efficacy within Ozempic's approved range, offering superior A1C reduction, significant weight loss, and cardiovascular risk reduction. It's particularly effective for patients who don't achieve targets on the 0.5mg dose."
  },
];

export const allProducts = [...products, ...products1, ...products2];