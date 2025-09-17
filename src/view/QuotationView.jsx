import { useEffect, useState } from "react";
import { fetchQuotationApi } from "../service/QuotationService.jsx";
import QuotationCard from "../component/quotationCard.jsx";
import useCopy from "../hook/useCopy.jsx";

export default function QuotationView() {
  const [quotation, setQuotation] = useState(null);
  const [error, setError] = useState("");
  const { copy } = useCopy();

  const getQuotation = async () => {
    try {
      const data = await fetchQuotationApi();
      console.log("API result:", data);
      setQuotation(data);
    } catch (e) {
      setError(e.message);
    }
  };
  useEffect(() => {
    getQuotation();
  }, []);

  return (
    <QuotationCard
      quotation={quotation}
      onCopy={() => copy(`"${quotation.quote}" — ${quotation.author}`)}
      onNext={getQuotation}
    />
  );
}
