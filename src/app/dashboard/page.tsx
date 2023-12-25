import Dashboard from "@/components/dashboard";
import { db } from "@/lib/db";
import { getUserSubscriptionPlan } from "@/lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect('/auth-callback?origin=dashboard')
  const dbUser = await db.user.findFirst({
    where: {
      id: user.id
    }
  })
  

  if(!dbUser) redirect('/auth-callback?origin=dashboard')
  const subscriptionPlan = await getUserSubscriptionPlan()
  return<Dashboard subscriptionPlan={subscriptionPlan}/>;
}
