import { useRouter } from "next/router";

export const useIsPersian: () => boolean = () => {
  const router = useRouter();

  return router.locale === "fa";
};
