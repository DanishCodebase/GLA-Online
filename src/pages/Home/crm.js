import { submitLead } from "@/pages/Home/backend";

const getUTMParams = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    source: urlParams.get("utm_source") || "website",
    medium: urlParams.get("utm_medium") || "",
    campaign: urlParams.get("utm_campaign") || "",
  };
};

export const submitAdmissionQuery = async (formData, navigate) => {
  try {
    console.log("Raw form data received for new API:", formData);

    const utmParams = getUTMParams();

    const apiPayload = {
      Name: formData.name,
      Day: "01",
      Month: "01",
      Year: "1990",
      EmailId: formData.email,
      Mobile: formData.phone,
      ProgramCode: "OGLAMBA201",
      source: utmParams.source,
      City: "301",
      MobileOTP: "undefined",
    };

    console.log("Constructed payload for new API:", apiPayload);
    const response = await submitLead(apiPayload);
    console.log("New API response:", response);

    if (
      response &&
      typeof response === "string" &&
      response.startsWith("1@@")
    ) {
      navigate("/thankyou");
      return {
        success: true,
        message: "Your query has been submitted successfully!",
      };
    } else {
      throw new Error(response || "Failed to submit query");
    }
  } catch (error) {
    console.error("CRM submission error:", error);
    return {
      success: false,
      message: "Failed to submit your query. Please try again later.",
      error: error.message,
    };
  }
};
