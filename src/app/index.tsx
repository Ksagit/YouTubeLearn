import { AppIcon } from "@/assets/svgs/AppIcon";
import { Logo } from "@/assets/svgs/Logo";
import { WelcomeMessage } from "@/components/WelcomeMessage";
import { SafeAreaView } from "react-native";

export default function LandingPage() {
  return (
    <SafeAreaView className="bg-secondary flex-1 items-center justify-between">
      <Logo />
      <AppIcon />
      <WelcomeMessage />
    </SafeAreaView>
  );
}
