import FinanceHero from "@/components/finance/FinanceHero";
import FinanceBenefits from "@/components/finance/FinanceBenifits";
import PartnerBanks from "@/components/finance/PartnersBanks";
import EMICalculator from "@/components/emi/EMICalculator";
import FinanceProcess from "@/components/finance/FinanceProcess";
import RequiredDocuments from "@/components/finance/RequiredDocument";
import Eligibility from "@/components/finance/Eligibility";
import FinanceFAQ from "@/components/finance/FinanceFAQ";
import FinanceEnquiry from "@/components/finance/FinanceForm";

export default function FinancePage() {
  return (
    <main className="overflow-x-hidden">
      <FinanceHero />
      <FinanceBenefits />
      <PartnerBanks />
      <EMICalculator />
      <FinanceProcess />
      <RequiredDocuments/>
      <Eligibility/>
      <FinanceFAQ/>
      <FinanceEnquiry/>
    </main>
  );
}