import AssetContextProvider from "@/contexts/AssetContext";
import AuthContextProvider from "@/contexts/AuthContext";
import CamapignContextProvider from "@/contexts/CampaignContext";
import ContactContaxtProvider from "@/contexts/ContactContaxt";
import ProxyContextProvider from "@/contexts/ProxyContext";
import SmtpContaxtProvider from "@/contexts/SmtpContext";
import TestMailContaxtProvider from "@/contexts/TestMailContext";
import ValidatorContactContaxtProvider from "@/contexts/ValidatorContactContaxt copy";
import NextNProgress from "nextjs-progressbar";

import "@/styles/globals.css";
import ThemeProvider from "@/themes/ThemeProvider";
import "antd/dist/reset.css";
export default function App({ Component, pageProps }) {
  const CustomLayout = Component.Layout || EmptyLayout;
  return (
    <>
      <ThemeProvider>
        <AuthContextProvider>
          <ValidatorContactContaxtProvider>
            <SmtpContaxtProvider>
              <ProxyContextProvider>
                <AssetContextProvider>
                  <CamapignContextProvider>
                    <TestMailContaxtProvider>
                      <ContactContaxtProvider>
                        <NextNProgress
                          color={"#7c43e6"}
                          startPosition={0.3}
                          stopDelayMs={200}
                          height={3}
                          showOnShallow={true}
                        />
                        <CustomLayout>
                          <Component {...pageProps} />
                        </CustomLayout>
                      </ContactContaxtProvider>
                    </TestMailContaxtProvider>
                  </CamapignContextProvider>
                </AssetContextProvider>
              </ProxyContextProvider>
            </SmtpContaxtProvider>
          </ValidatorContactContaxtProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
