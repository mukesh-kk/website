const sdk = require('api')('@front/v1.0.0#x0htj1bl4ytzmk4');

export default async (data:any): Promise<boolean | string> => {
  try {
    const frontApiToken = process.env.FRONT_API_TOKEN;
    const channelId = process.env.FRONT_SUPPORT_INBOX_ID;
    const senderName = data.email.name;
    const senderHandle = data.email

    sdk.auth(frontApiToken);
    sdk.importInboxMessage({
    sender: {
      name: 'string',
      handle: 'string'
  },
  to: ['string'],
  cc: ['string'],
  bcc: ['string'],
  subject: 'string',
  body: 'string',
  body_format: 'markdown',
  external_id: 'string',
  created_at: 0,
  type: 'email',
  assignee_id: 'string',
  tags: ['string'],
  metadata: {
    thread_ref: 'string',
    is_inbound: true,
    is_archived: true,
    should_skip_rules: true
  },
  attachments: ['string']
}, {inbox_id: 'inb_123'})
  .then(res => console.log(res))
  .catch(err => console.error(err));

} catch (error) {
  console.error(error);
  return false;
}
}
    sdk.importInboxMessage('/channels/' + channelId + '/messages', {
        to: from,
        cc: ['string'],
        bcc: ['string'],
        sender_name: 'string',
        subject: 'string',
        author_id: 'string',
        body: message,
        text: 'string',
        options: {tag_ids: ['string'], archive: true},
        attachments: ['string'],
        signature_id: 'string',
        should_add_default_signature: true
      }
    )
  } catch (error) {
    console.error(error);
    return false;
  }
}