import BillingForm from '@/components/billing-form'
import { getUserSubscriptionPlan } from '@/lib/stripe'
import { get } from 'http'
import React from 'react'

export default async function BillingPage() {
    const subscriptionPlan=await getUserSubscriptionPlan()
    console.log(subscriptionPlan,"lp")
  return (
    <BillingForm subscriptionPlan={subscriptionPlan}/>
  )
}
