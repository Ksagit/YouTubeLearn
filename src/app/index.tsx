import { AppIcon } from "@/assets/svgs/AppIcon";
import { Logo } from "@/assets/svgs/Logo";
import { WelcomeContent } from "@/components/WelcomeContent";
import { SafeAreaView } from "react-native";

export default function LandingPage() {
  return (
    <SafeAreaView className="flex-1 items-center justify-between bg-secondary">
      <Logo />
      <AppIcon />
      <WelcomeContent />
    </SafeAreaView>
  );
}
