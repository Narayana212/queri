import BillingForm from '@/components/billing-form'
import { getUserSubscriptionPlan } from '@/lib/stripe'
import { get } from 'http'
import React from 'react'

export default async function BillingPage() {
    const subscriptionPlan=getUserSubscriptionPlan()
  return (
    <BillingForm subscriptionPlan={subscriptionPlan}/>
  )
}
