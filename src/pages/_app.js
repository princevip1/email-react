import AssetContextProvider from "@/contexts/AssetContext";
import AuthContextProvider from "@/contexts/AuthContext";
import CamapignContextProvider from "@/contexts/CampaignContext";
import ContactContaxtProvider from "@/contexts/ContactContaxt";
import ProxyContextProvider from "@/contexts/ProxyContext";
import SmtpContaxtProvider from "@/contexts/SmtpContext";
import TestMailContaxtProvider from "@/contexts/TestMailContext";
import "@/styles/globals.css";
import ThemeProvider from "@/themes/ThemeProvider";
import "antd/dist/reset.css";
export default function App({ Component, pageProps }) {
  const CustomLayout = Component.Layout || EmptyLayout;
  return (
    <>
      <ThemeProvider>
        <AuthContextProvider>
          <SmtpContaxtProvider>
            <ProxyContextProvider>
              <AssetContextProvider>
                <CamapignContextProvider>
                  <TestMailContaxtProvider>
                    <ContactContaxtProvider>
                      <CustomLayout>
                        <Component {...pageProps} />
                      </CustomLayout>
                    </ContactContaxtProvider>
                  </TestMailContaxtProvider>
                </CamapignContextProvider>
              </AssetContextProvider>
            </ProxyContextProvider>
          </SmtpContaxtProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
