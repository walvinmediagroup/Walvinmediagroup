/**
 * EmailJS configuration
 *
 * Setup steps:
 * 1. Create a free account at https://www.emailjs.com
 * 2. Add an Email Service (Gmail works — connect your walvinmediagroup@gmail.com account)
 * 3. Copy your Service ID and paste it below as SERVICE_ID
 * 4. Create two Email Templates (one for enquiries, one for audits) using the
 *    variables listed in each sendXxx function below, then paste the Template IDs
 * 5. Go to Account > API Keys, copy your Public Key and paste it below
 *
 * Suggested Email Template content (paste into EmailJS template editor):
 *
 * --- ENQUIRY TEMPLATE (template_enquiry) ---
 * Subject: New enquiry from {{name}} — {{business_name}}
 *
 * NEW ENQUIRY — Walvin Media Group
 *
 * Name:              {{name}}
 * Business:          {{business_name}}
 * Email:             {{email}}
 * Phone:             {{phone}}
 * Website:           {{website}}
 * Social links:      {{social_links}}
 *
 * Service interest:  {{service}}
 * Monthly budget:    {{budget}}
 * Goals:             {{goals}}
 * Preferred contact: {{contact_pref}}
 *
 * Message:
 * {{message}}
 *
 * --- AUDIT TEMPLATE (template_audit) ---
 * Subject: Free audit request from {{name}} — {{business_name}}
 *
 * FREE AUDIT REQUEST — Walvin Media Group
 *
 * Name:              {{name}}
 * Business:          {{business_name}}
 * Email:             {{email}}
 * Phone:             {{phone}}
 * Website:           {{website}}
 * Social/Instagram:  {{social_link}}
 * Preferred contact: {{contact_pref}}
 *
 * Main challenge:
 * {{challenge}}
 */

export const EMAILJS_CONFIG = {
  SERVICE_ID: "Enquiry Form",
  ENQUIRY_TEMPLATE_ID: "template_hzk9zny",
  AUDIT_TEMPLATE_ID: "template_ci2t29i",
  PUBLIC_KEY: "jOyh2N8UOmbpeniBX",
};

export function isEmailJSConfigured(): boolean {
  return !Object.values(EMAILJS_CONFIG).some((v) => v.startsWith("YOUR_"));
}
