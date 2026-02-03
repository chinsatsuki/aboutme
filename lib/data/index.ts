// lib/data/index.ts
import { CaseData } from "@/types/case";
import { marineworldData } from "./marineworld";
import { salonsiteData } from "./salonsite";
import { washokuData } from "./washoku";
import { lgbtData } from "./lgbt";
import { soohomeData } from "./soohome";
import { bookData } from "./book";
import { BrochureData } from "./brochure";
import { crowdData } from "./crowd";


export const allCasesData: Record<string, CaseData> = {
  "marineworld": marineworldData,
  "salonsite": salonsiteData,
  "washoku": washokuData,
  "lgbt": lgbtData,
  "soohome": soohomeData,
  "book": bookData,
  "brochure": BrochureData,
  "crowd": crowdData,
};