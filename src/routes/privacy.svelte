<script context="module">
  export const prerender = true;
</script>

<script>
  import OpenGraph from "$lib/components/open-graph.svelte";
</script>

<style lang="postcss">
  article :global() {
    --h1: 3.375rem;
    --h2: 3rem;
    --h3: 2rem;
    --h4: 1.75rem;
    --h5: 1.25rem;
    line-height: 1.75;
  }
  a {
    @apply underline;
  }
  :is(ol.toc, ul) > li::marker {
    @apply text-h3 font-bold;
  }
  ol.toc > li::marker {
    @apply text-inherit;
  }

  ::marker {
    @apply text-secondary;
  }

  ul li {
    @apply relative mb-0;
  }

  ul li::before {
    @apply absolute text-secondary;
    content: "—";
    left: calc(var(--xx-small) * -1);
  }

  @media (min-width: 768px) {
    ul li::before {
      left: calc(var(--x-small) * -1);
    }
  }
</style>

<OpenGraph
  data={{
    description:
      "Your data is safe with us we take privacy seriously. Gitpod uses reasonable measures and efforts to keep your data safe and protected from unauthorized acess.",
    title: "Privacy Policy - your data is safe with us",
  }}
/>
<article class="max-w-[94vw] mt-20 mx-auto mb-8 leading-7 lg:w-[50rem]">
  <h1>Privacy Policy</h1>
  <p class="mb-4">Effective Date: 31st of August, 2022</p>
  <p class="mb-4">
    Below we provide you with an overview of what data we collect for what
    purpose and how we ensure the protection of the data <a href="#short"
      >in short</a
    >
    and
    <a href="#detailed">in a more detailed form</a>.
  </p>

  <p class="mb-4">
    The controller is Gitpod GmbH, Am Germaniahafen 1, 24143 Kiel/Germany,
    registered with the commercial register of the local court (Amtsgericht)
    Kiel under HRB 22228 (<strong>"we/us/our"</strong> or
    <strong>"Gitpod"</strong>). We offer services to our users and visitors (the
    <strong>"User/you/your"</strong>) on our website
    <a href="/">https://gitpod.io</a>
    (<strong>"Website"</strong>) as well as related services including the use
    of our service according to our <a href="/terms">terms of service</a>
    (jointly the <strong>"Service"</strong>).
  </p>
  <p class="mb-4">
    For any questions about data protection you may contact us via <a
      href="mailto:data@gitpod.io">data@gitpod.io</a
    >.
  </p>
  <h2 class="mx-0 my-8" id="short">In Short</h2>

  <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
    <li>
      <h3 class="mx-0 my-4">Controller</h3>
      <p class="mb-4">
        Gitpod GmbH, am Germaniahafen 1, 24143 Kiel/Germany, registered with the
        commercial register of the local court
        <em>(Amtsgericht)</em>
        Kiel under HRB 22228, Email:
        <a href="mailto:contact@gitpod.io">contact@gitpod.io</a>.
      </p>
      <p class="mb-4">
        We have appointed a data protection officer who may be contacted via <a
          href="mailto:data@gitpod.io">data@gitpod.io</a
        >
      </p>
    </li>
    <li>
      <h3 class="mx-0 my-4">
        Purpose and Legal Basis of Processing Data; Provision and Recipients of
        Data
      </h3>
      <p class="mb-4">Your data will be used for the following purposes:</p>
      <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
        <li>to provide the functioning Website,</li>
        <li>
          to implement this privacy policy and carrying out the contractual
          relationship and our Service,
        </li>
        <li>to analyze how our Service is used and improve it,</li>
        <li>to detect and prevent fraudulent or abusive use,</li>
        <li>to provide and analyze our pages on Social Media,</li>
        <li>to send you important updates about our service,</li>
        <li>to send you marketing content, including newsletters,</li>
        <li>to act according to our legal obligations, or</li>
        <li>
          as otherwise explained in this privacy policy or by any communication
          by us.
        </li>
      </ul>
      <p class="mb-4">
        Your data is typically processed by us on the basis of our legitimate
        interests (specified in more detail further below), and on the basis of
        our contract with you under our terms of service. In some cases your
        data may be processed by us with your explicit consent, particularly
        where you opt-in to receiving our newsletter or other marketing.
      </p>
      <p class="mb-4">
        The data we process is limited, proportionate and necessary for the
        purposes listed above. If you do not wish to provide such data, this may
        limit your use of the Service (you will be informed of this at the
        relevant stage).
      </p>
    </li>
    <li>
      <h3 class="mx-0 my-4">Transfer of Data outside of the EU</h3>
      <p class="mb-4">
        In course of data processing by us data may be transferred to third
        countries, i.e. countries outside the EU. This may happen via
        implementation of third party providers such as cloud services and
        external service partners which process data on our behalf. Where this
        occurs we have proper safeguards in place to ensure the data is secured
        (at an equivalent level to as if it had never left the EU)
      </p>
    </li>
    <li>
      <h3 class="mx-0 my-4">Your Rights</h3>
      <p class="mb-4">
        You have the right to withdraw your consent relating to the use of data
        any time with effect for the future when such data processing is based
        in your consent.
      </p>
      <p class="mb-4">
        You are entitled to access the data stored by us and are also entitled
        to amend or rectify your data if such data are incorrect.
      </p>
      <p class="mb-4">
        You have the right to object to the processing of your personal data,
        for example if your personal data are processed for direct marketing
        purposes.
      </p>
      <p class="mb-4">You are entitled to request the erasure of your data.</p>
      <p class="mb-4">
        You are entitled to receive information about the stored data (in a
        structured, current and machine-readable format) at any time and to
        request the correction or deletion of the data in case of incorrect data
        storage.
      </p>
      <p class="mb-4">
        You have also the right to lodge a complaint with a supervisory
        authority at your choice. An overview of the European National Data
        Protection Authorities may be found here:
        <a
          href="http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080"
          >http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080</a
        ><br />
      </p>
    </li>
    <li>
      <h3 class="mx-0 my-4">Period for Storing Data; Deletion</h3>
      <p class="mb-4">
        The data are deleted if such data are no longer necessary for the
        purpose of processing, unless required by law to be retained.
      </p>
    </li>
    <li>
      <h3 class="mx-0 my-4">Data Security</h3>
      <p class="mb-4">
        We have implemented measures to ensure data and IT security. The Website
        is operated through a safe SSL-connection. If an SSL-connection is
        activated third parties are prevented from reading any data that are
        transferred by you to us.
      </p>
    </li>
  </ul>

  <h2 class="mx-0 my-8" id="detailed">More Detailed Information</h2>

  <ol class="ol-roman list-inside space-y-4 mb-4">
    <li><a href="#details-I">What is Personal Data?</a></li>
    <li>
      <a href="#details-II"
        >Applicable Laws to our processing of Personal Data</a
      >
    </li>
    <li>
      <a href="#details-III"
        >How is my Data processed when visiting the Website and contacting us?</a
      >
    </li>
    <li>
      <a href="#details-IV"
        >What Third Party Services, Cookies, Analytics and Social Plugins does
        the Website use?</a
      >
    </li>
    <li>
      <a href="#details-V"
        >How is my data processed when using the Gitpod Service (with User
        Account)?</a
      >
    </li>
    <li>
      <a href="#details-VI"
        >How is Data processed when visiting our Social Media pages?</a
      >
    </li>
    <li>
      <a href="#details-VII"
        >Is my Data transferred to Third Parties? Does automated decision making
        including profiling take place?</a
      >
    </li>
    <li>
      <a href="#details-VIII">Is my Data transferred outside the EU?</a>
    </li>
    <li><a href="#details-IX">Your Rights</a></li>
    <li>
      <a href="#details-X"
        >Duration of Storing your Data; Data Security; Access and Changes to
        this Privacy Policy; Contact Details</a
      >
    </li>
  </ol>
  <ol class="toc ol-roman list-inside space-y-4 mb-4">
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-I">What is Personal Data?</h2>
      <p class="mb-4 mt-x-small">
        Personal data is any information relating to an identified or
        identifiable natural person. Personal data includes e.g. name, email
        address or telephone number. We will only collect, use and/or pass on
        personal data if this is permitted by law or if the User consents to the
        data processing.
      </p>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-II">
        Applicable Laws to our processing of Personal Data
      </h2>
      <p class="mb-4">
        of the European Parliament and Council of 27 April 2016, repealing the
        directive 95/46/EC, on the protection of individuals with regard to the
        processing of personal data, on the free movement of such data ("General
        Data Protection Regulation", GDPR) as well as in the Federal Data
        Protection Act (Bundesdatenschutzgesetz, BDSG) and the German Telemedia
        Act (Telemediengesetz, TMG).
      </p>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-III">
        How is my Data processed when visiting the Website and contacting us?
      </h2>
      <h3 class="mx-0 my-4">Visiting the Website</h3>
      <p class="mb-4">
        If you browse our Website the provider of the website collects and
        stores information automatically in so-called "server-log-files" that
        your browser transfers to us. These are:
        <em>
          type/version of the browser, system software used, referrer URL,
          hostname of the device, time of the server request, IP-address or
          other unique device identifier.
        </em>
      </p>

      <p class="mb-4">
        If you are using a mobile device the following data may also be
        processed additionally through the Website:
        <em>
          country code, language, hostname of the device, name and version of
          the operational system.
        </em>
      </p>

      <p class="mb-4">
        The data points in the preceding two paragraphs are also forwarded to a
        user data platform.
      </p>

      <p class="mb-4">
        We use these data only for statistical analysis for the purpose of
        operation, security and optimization of the performance and content on
        our Website. This data processing is necessary for Gitpod's legitimate
        interests (under Art. 6 (1) f. GDPR or TMG) – in particular for
        providing a secure and stable Website or Service, for improving our
        Website and for quality insurance.
      </p>

      <h3 class="mx-0 my-4">Contacting us</h3>
      <p class="mb-4">
        When contacting us via email, the User’s details are stored for the
        purpose of processing the enquiry and, if applicable, follow-up
        questions based on your consent based on the legal basis of Art. 6 (1)
        a. GDPR or fulfilling your request based on Art. 6 (1) b. GDPR.
      </p>

      <p class="mb-4" id="front">
        <strong> Use of Front: </strong> The mail provider
        <strong>"Front"</strong> by Frontapp, Inc., 1455 Market St Fl 19, San
        Francisco, California, 94102, United States receives and processes on
        our behalf the data necessary to manage client inquiries and emails. For
        more information refer to
        <a href="https://front.com/privacy-policy">
          https://front.com/privacy-policy</a
        >.
      </p>

      <h3 class="mx-0 my-4">Emails and Newsletters</h3>
      <p class="mb-4">
        With the newsletter we inform the user about the Website, our Service
        and us.
      </p>

      <p class="mb-4">
        When contacting us via email, the User’s details are stored for the
        purpose of processing the enquiry and, if applicable, follow-up
        questions based on your consent (under Art. 6 (1) a. GDPR) or fulfilling
        your request on a contractual basis (under Art. 6 (1) b. GDPR).
      </p>

      <p class="mb-4">
        We may also send you newsletters referring to similar services and
        products if you have an existing contractual relationship with us and
        you did not object to receiving such emails. The legal basis for such
        processing of data for sending and analysing such newsletters is our
        legitimate interests in raising awareness around our products and
        services to those who have already expressed an interest in similar
        products and services (Art. 6 (1) f. GDPR).
      </p>

      <p class="mb-4" id="customer-io">
        <strong> Use of Customer.io: </strong> The mail provider
        <strong>"Customer.io"</strong> by Peaberry Software Inc., 921 SW
        Washington Street Suite 820 Portland, OR 97205, USA receives and
        processes on our behalf the data necessary for the emails and
        newsletters, in particular the email address. Customer.io provides Data
        Residency in the EU. For more information, refer to
        <a href="https://customer.io/legal/privacy-policy/">
          https://customer.io/legal/privacy-policy/</a
        >.
      </p>

      <p class="mb-4">
        Newsletter subscription data will be stored by us until you unsubscribe
        from the newsletter and will be deleted after you unsubscribe from the
        newsletter (we may add your email address to a 'suppression list' to
        ensure no further contact is made following you unsubscribing). Data
        stored by us for other purposes (e.g. email address for the use of our
        Service) remain unaffected.
      </p>

      <p class="mb-4">
        <strong
          >You can withdraw your consent or object to the processing of data
          (email address) and their respective use for sending the newsletter
          and analyzing your data at any time.</strong
        > This can be done free of charge (except for the transmission costs) and
        via a link in the newsletter itself or notification to us.
      </p>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-IV">
        What Third Party Services, Cookies, Analytics and Social Plugins does
        the Website use?
      </h2>

      <h3 class="mx-0 my-4">Cookies</h3>
      <p class="mb-4">
        In order to offer you a convenient online service featuring numerous
        functions, our Website uses text files (<strong>"Cookies"</strong>)
        containing information to identify returning visitors for the time of
        their visit to our Website. Cookies are usually saved on your device and
        facilitate the transfer of specific content, such as re-entering data,
        which has already been supplied, and to help us identify popular
        sections of our Website.
      </p>

      <p class="mb-4">
        The processing of data when using Cookies is typically based on our
        legitimate interests. We have an interest in conducting a statistical
        analysis of the User relationship for marketing and quality assurance
        purposes, and providing users with a stable and consistent Service.
      </p>

      <p class="mb-4">
        For further information on the cookies in use by the Website and the
        Service please see our separate
        <a href="http://www.gitpod.io/cookies">Cookies Policy. </a>
      </p>

      <h3 class="mx-0 my-4">Salesforce</h3>
      <p class="mb-4">
        We use Salesforce, provided by Salesforce, Inc. as our Customer
        Relationship Management System, which is also integrated with the
        contact forms on this website. The information stored in this system
        includes contact data such as your name, email or phone number and
        associated organisation (where applicable). You can also find more
        information in Salesforce's privacy policy: <a
          href="https://www.salesforce.com/eu/company/privacy/full_privacy/"
          >https://www.salesforce.com/eu/company/privacy/full_privacy/</a
        >
      </p>

      <h3 class="mx-0 my-4">Front</h3>
      <p class="mb-4">
        We use the services by Frontapp, Inc. for managing client inquiries and
        emails. For details on Front please refer to the
        <a href="#front">respective section above</a>.
      </p>

      <h3 class="mx-0 my-4">Customer.io</h3>
      <p class="mb-4">
        We use the services by Customer.io for sending newsletters and emails.
        For details on Customer.io please refer to the
        <a href="#customer-io">respective section above</a>.
      </p>

      <h3 class="mx-0 my-4">Google Analytics</h3>
      <p class="mb-4">
        We use Google Analytics a web analytics tool offered by Google (inter
        alia Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
        Ireland and Google LLC, Mountain View, CA, USA (<strong>"Google"</strong
        >). For analysis, text files will be stored on your device. The
        information stored in the corresponding files about the use of this
        website are generally transmitted and stored in Google server in the
        USA. As the IP anonymization is active on this Website, your IP address
        will be shortened by Google within the member states of the European
        Union (EU). This information will be used to evaluate your use of the
        services offered here and enable the operator of this website to analyze
        your website activity and provide other services associated with the
        website service. The IP address transmitted from your browser, as part
        of Google Analytics will not be merged with other data from Google.
      </p>

      <p class="mb-4">
        When the IP address is processed this is based on our legitimate
        interests of a statistical analysis of the relationship for marketing
        and quality assurance purposes according to Art. 6 (1) f. GDPR or TMG.
      </p>

      <p class="mb-4">
        We point out that an <a href="#details-VI"
          >automated decision making or profiling</a
        > can take place when integrating Google or an existing Google account.
      </p>
      <p class="mb-4">
        For Users who have their usual residence in the European Economic Area
        or Switzerland, Google Ireland Limited is the data controller for your
        data, unless otherwise stated in the privacy notices of a particular
        service. Google Ireland Limited is therefore the company affiliated with
        Google which is responsible for processing your data and complying with
        applicable data protection laws.
      </p>
      <p class="mb-4">
        You can also find more information in Google's privacy policy <a
          href="https://policies.google.com/privacy"
          >https://policies.google.com/privacy</a
        >.
      </p>

      <p class="mb-4">
        <strong>OPT-OUT:</strong> You can deactivate the use of Google Analytics
        by enabling the <a href="https://allaboutdnt.com/">"Do Not Track"</a>
        setting in your web browser. You may follow the instructions in
        <a href="https://allaboutdnt.com/#adjust-settings">this guide.</a>
      </p>

      <h3 class="mx-0 my-4">Google Fonts</h3>
      <p class="mb-4">
        Our Website uses the <strong>"Google Fonts"</strong> service of Google (inter
        alia Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland
        and Google LLC, Mountain View, CA, USA to integrate and display text on the
        website. For this purpose Google may process your data (including the IP
        address) on servers in the USA.
      </p>

      <p class="mb-4">
        When the IP address is processed this is based on our legitimate
        interests of technical functionality of the Website based on Art. 6 (1)
        f. GDPR or TMG.
      </p>

      <p class="mb-4">
        You can also find more information in Google's privacy policy: <a
          href="https://policies.google.com/privacy"
          >https://policies.google.com/privacy</a
        >.
      </p>

      <h3 class="mx-0 my-4" id="segment-io">Segment</h3>
      <p class="mb-4">
        We use Segment, provided by Segment.io, Inc., on our Website and Product
        to capture marketing- and product-related user information in order to
        offer the best experience to our users. Segment operates in
        <a href="https://segment.com/docs/privacy/complying-with-the-gdpr/">
          compliance with the GDPR</a
        >.
      </p>
      <p class="mb-4">
        You can also find more information in Segment's privacy policy:
        <a href="https://segment.com/legal/privacy/"
          >https://segment.com/legal/privacy/</a
        >.
      </p>

      <p class="mb-4">
        <strong>OPT-OUT:</strong> You can deactivate the capturing of
        user-specific Website data by enabling the
        <a href="https://allaboutdnt.com/">"Do Not Track"</a>
        setting in your web browser. You may follow the instructions in
        <a href="https://allaboutdnt.com/#adjust-settings">this guide.</a>
      </p>

      <h3 class="mx-0 my-4">Mixpanel</h3>
      <p class="mb-4">
        We use Mixpanel, provided by Mixpanel, Inc., as data sink for <a
          href="#segment-io">Segment</a
        >
        for the analysis of user behaviour in order to offer the best experience
        to our users. Mixpanel operates in
        <a href="https://mixpanel.com/legal/mixpanel-gdpr/">
          compliance with the GDPR</a
        >.
      </p>
      <p class="mb-4">
        You can also find more information in Mixpanel's privacy policy:
        <a href="https://mixpanel.com/legal/privacy-policy/"
          >https://mixpanel.com/legal/privacy-policy/</a
        >.
      </p>

      <p class="mb-4">
        <strong>OPT-OUT:</strong> You can deactivate that user-specific Website
        informnation is sent to Mixpanel by enabling the
        <a href="https://allaboutdnt.com/">"Do Not Track"</a>
        setting in your web browser. You may follow the instructions in
        <a href="https://allaboutdnt.com/#adjust-settings">this guide.</a>
      </p>

      <h3 class="mx-0 my-4">Mode Analytics</h3>
      <p class="mb-4">
        We use Mode Analytics, provided by Mode Analytics, Inc., to explore and
        analyse usage data that may contain data captured by <a
          href="#segment-io">Segment</a
        >
        from the Website and Product. Mode Analytics operates in
        <a href="https://mode.com/gdpr/">compliance with the GDPR</a>.
      </p>
      <p class="mb-4">
        You can also find more information in Mode's privacy policy: <a
          href="https://mode.com/privacy/">https://mode.com/privacy/</a
        >.
      </p>

      <h3 class="mx-0 my-4">Orbit Labs</h3>
      <p class="mb-4">
        We use Orbit Labs, provided by Orbit Labs, Inc., to analyse engagement
        of our community on social Platforms such as GitHub, Twitter and
        Discord. Orbit Labs has no access to data of our Website Visitors. Orbit
        Labs acts as data controller in accordance with the GDPR (see Section <i
          >Who is responsible for your personal information</i
        >
        of the
        <a href="https://orbit.love/privacy-policy">Privacy Policy</a>).
      </p>

      <h3 class="mx-0 my-4" id="youtube">Youtube</h3>
      <p class="mb-4">
        We use the YouTube.com platform to [post our own videos and] make them
        publicly available. YouTube is operated by Google (inter alia Youtube
        LLC, USA and Google Ireland Limited, Gordon House, Barrow Street, Dublin
        4, Ireland).
      </p>

      <p class="mb-4">
        Some of our Website contain links to the YouTube platform. In general,
        we are not responsible for the content of websites to which links are
        provided. In the event that you click a link on YouTube, we would like
        to point out that YouTube stores the data of its users (e.g. personal
        information, IP address) in accordance with its own privacy guidelines
        and uses them for business purposes.
      </p>
      <p class="mb-4">
        On our Website we also integrate videos stored on YouTube directly. In
        this integration, content from the YouTube website is displayed in
        sub-areas of a browser window. However, YouTube videos are only accessed
        by clicking on them separately. This technique is also called ‘framing’.
        If you click on a (sub-)page of our Website where YouTube videos are
        included, a connection is established to the YouTube servers and the
        content is displayed on the Website by notifying your browser.
      </p>
      <p class="mb-4">
        YouTube content is only integrated in the ‘extended data protection
        mode’. YouTube provides this by itself, thereby ensuring that YouTube
        does not initially store any cookies on your device. However, when you
        access the relevant pages, the IP address and the other data are
        processed by Youtube. However, this information cannot be assigned to
        you unless you log in your YouTube or another Google service (e.g.
        Gmail) account or are permanently registered before accessing the site.
      </p>
      <p class="mb-4">
        As soon as you click on an integrated video, YouTube only stores cookies
        on your device that do not contain any personally identifiable data,
        unless you are currently logged in to a Google service. These cookies
        can be prevented by appropriate browser settings and extensions (for
        more information, please see our <a
          href="https://www.gitpod.io/cookies"
        >
          Cookies Policy).
        </a>
      </p>
      <p class="mb-4">
        For Users who have their usual residence in the European Economic Area
        or Switzerland, Google Ireland Limited is the data controller for your
        data, unless otherwise stated in the privacy notices of a particular
        service. Google Ireland Limited is therefore the company affiliated with
        Google which is responsible for processing your data and complying with
        applicable data protection laws.
      </p>
      <p class="mb-4">
        Further information about data processing and privacy practices of
        YouTube and Google can be found here:
      </p>
      <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
        <li>
          <a href="https://policies.google.com/privacy"
            >https://policies.google.com/privacy</a
          >
        </li>
        <li>
          <a href="https://support.google.com/youtube/answer/171780?hl=e"
            >https://support.google.com/youtube/answer/171780?hl=e</a
          >
        </li>
      </ul>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-V">
        How is my Data processed when using the Gitpod Service (with User
        Account)?
      </h2>

      <h3 class="mx-0 my-4">Registration and Access to Existing Account</h3>
      <p class="mb-4">
        In order to fully use our full online Service, you will need to
        register. You may only register if you have an existing user account at
        the third party services set forth on the Website, for example the
        service offered on the website <a href="https://github.com"
          >https://github.com</a
        >
        operated by GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107,
        USA, (<strong>"Existing Account"</strong>).
      </p>

      <p class="mb-4">
        When you sign up for using the Gitpod Service via your Existing Account,
        data at such Existing Account with be accessible by us with your
        explicit consent only. Such data include:
        <em
          >user profile data (name, username and email address), list of
          repositories you have access to.</em
        >
      </p>

      <p class="mb-4">
        You can manage these data at any time via using your Existing Account
        linked to the Gitpod Service.
      </p>

      <p class="mb-4">
        The data entered or transferred via the Existing Account as part of the
        registration process and any further data entered, will only be used via
        the Website and with our support to the extent that this processing is
        necessary for the fulfillment of a contract with us or for the
        implementation of pre-contractual measures, i.e. use of the Gitpod
        Service, as well as for the execution and processing of inquiries by
        you.
      </p>

      <p class="mb-4">
        The processing of data when using our Service is generally based on the
        legal basis of Art. 6 (1) b. GDPR or TMG, i.e. the data will be
        processed, when this is necessary for the fulfilment of the contract
        between you and us or for executing any measures that take place on your
        request prior to the contract. Note that, as set out above, this is all
        carried out with your authorisation and you can manage the data within
        your Existing Account at any time.
      </p>

      <h3 class="mx-0 my-4">Use of the Gitpod Service</h3>
      <p class="mb-4">
        For the further use of the Gitpod Service on the Website you submit more
        data depending on the way of use of our services according to our <a
          href="/terms">terms of service</a
        >.
      </p>

      <p class="mb-4">
        We use the information and data collected in the Service, including your
        personal data, in order to fulfill our contractual obligations for
        you/our customers based on the legal basis of Art. 6 (1) b. GDPR or TMG
        and as further set forth in this privacy policy or our <a href="/terms">
          terms of service</a
        >. This also includes sending you emails and notifications necessary for
        the Service.
      </p>

      <p class="mb-4">
        In the event we process personal data controlled by the customer as data
        processor we will offer and enter into a respective separate data
        processing agreement with such customer whereas such data processing
        agreement may be requested via email to
        <a href="mailto:data@gitpod.io">data@gitpod.io</a>.
      </p>

      <p class="mb-4">
        We do not store or receive any kind of payment or credit card data but
        use external payment providers as set forth on the Website.
      </p>

      <p class="mb-4">
        We may also analyze your personal data when using the Gitpod Service for
        the purpose of improving our Service. We may also store your data to
        assure fair use of our Service. The legal basis for analyzing and
        storing such data is Art. 6 (1) f. GDPR with our legitimate interest of
        marketing and quality assurance.
      </p>
      <p class="mb-4">
        We also process your data if this is necessary to comply with our legal
        obligations (legal basis: Art. 6 (1) c. GDPR), for example legal
        retention periods, such as for tax and accounting purposes. .
      </p>
      <p class="mb-4">
        For the above mentioned purposes your data may also be shared with our
        shareholders or affiliated companies.
      </p>
      <h3 class="mx-0 my-4">Integration of Third Party Services</h3>
      <p class="mb-4">
        When using the Gitpod Service your data may also be processed by third
        party providers as set forth in this privacy policy. For details please
        refer to <a href="#details-III">III</a> above as well as
        <a href="#details-VI">VI</a> and <a href="#details-VII">VIII</a> below.
      </p>

      <p class="mb-4">
        When registering for a Gitpod account, we use Twilio Verify, provided by
        Twilio, Inc. as our phone number and user account verification service
        to detect fraud and abuse, which is integrated with the SaaS version of
        our product. The information processed in this system includes your
        phone number. For more information, you can refer to Twilio’s privacy
        policy at <a href="https://www.twilio.com/legal/privacy"
          >https://www.twilio.com/legal/privacy</a
        >
      </p>

      <p class="mb-4">
        When using our paid Service your data will be processed by external
        payment providers. Currently we use the payment services by Stripe (for
        EU/EEA: Stripe Payments Europe, Ltd., 1 Grand Canal Street Lower, Grand
        Canal Dock, Dublin, Irland; more information:
        <a href="https://stripe.com/de/privacy">https://stripe.com/de/privacy</a
        >
        ; contact:
        <a href="https://stripe.com/contact">https://stripe.com/contact</a>) and
        Chargebee (by Chargebee Inc. 340 S Lemon Avenue, 1537 Walnut, CA 91789,
        USA; more information:
        <a href="https://www.chargebee.com/privacy/">
          https://www.chargebee.com/privacy/</a
        >). When using such services your data may be processed outside the EU.
        For the US companies of Stripe and Chargebee we have taken steps to
        include essentially-equivalent EU data protection standards when
        personal data is transferred to their US offices.
      </p>
      <p class="mb-4">
        Our service may also include links to pages on Twitter, Medium, and
        Spectrum Chat. For details please refer to the
        <a href="#details-V">respective section below</a>.
      </p>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-V">
        How is Data processed when visiting our Social Media pages?
      </h2>
      <p class="mb-4">We operate pages on</p>
      <ul class="pl-xx-small md:pl-x-small space-y-4 mb-4">
        <li>
          Twitter (twitter.com or applications) by Twitter Inc., 1355 Market
          Street, Suite 900, San Francisco, CA 94103, USA, please also refer to:
          <ul class="pl-xx-small md:pl-x-small">
            <li>
              <a href="https://twitter.com/de/privacy"
                >https://twitter.com/de/privacy</a
              >
            </li>
            <li>
              <a href="https://twitter.com/personalization"
                >https://twitter.com/personalization</a
              >
            </li>
          </ul>
        </li>
        <li>
          Medium (medium.com or applications) by A Medium Corporation, 799
          Market Street, 5th Floor, San Francisco, CA 94103, USA, please also
          refer to:
          <ul class="pl-xx-small md:pl-x-small">
            <li>
              <a
                href="https://policy.medium.com/medium-privacy-policy-f03bf92035c9"
                >https://policy.medium.com/medium-privacy-policy-f03bf92035c9</a
              >
            </li>
            <li>
              <a href="https://medium.com/me/settings"
                >https://medium.com/me/settings</a
              >
            </li>
            <li>
              <a href="https://medium.com/me/following/suggestions"
                >https://medium.com/me/following/suggestions</a
              >
            </li>
          </ul>
        </li>
        <li>
          Discord (discord.com or applications) by Discord Inc.,444 De Haro
          Street Suite 200, San Francisco, CA 94107 USA, please also refer to:

          <ul class="pl-xx-small md:pl-x-small">
            <li>
              <a href="https://discord.com/privacy"
                >https://discord.com/privacy</a
              >
            </li>
          </ul>
        </li>
      </ul>
      <p class="mb-4">
        When you visit our Social Media pages, data is processed both by us and
        by the responsible social media provider.
      </p>
      <p class="mb-4">
        In some cases the respective provider of Social Media assumes the data
        protection obligations towards you as the user, such as information on
        data processing, and is the contact person for your rights. This results
        from the fact that such provider has direct access to the relevant
        information on the Social Media page and the processing of your data.
        However, you are also welcome to contact us if this should become
        necessary and we will then forward the request to the respective
        provider if necessary.
      </p>
      <p class="mb-4">
        When using the Social Media providers set forth above data may also be
        processed outside the EU. We take steps with our Social Media partners
        to ensure that, in any transfer of your data, they are contractually
        bound to ensure an essentially equivalent EU standard of data
        protection.By using Medium Services, you authorize Medium to transfer,
        store, and use your information in the United States and any other
        country where Medium operates. Where your data is disclosed to Medium’s
        processors, it is subject by contract to at least the same level of data
        protection as that set forth under
        <a href="https://medium.com/policy/medium-privacy-policy-f03bf92035c9"
          >https://medium.com/policy/medium-privacy-policy-f03bf92035c9</a
        >.
      </p>
      <p class="mb-4">
        With our Social Media pages, we can communicate with you and provide you
        with interesting information. We may receive further data from you
        through your comments, shared images, messages and reactions, which are
        then processed to answer or communicate with you. If you use Social
        Media on several end devices, a cross-device analysis of the data can
        take place.
      </p>
      <p class="mb-4">
        Data processing takes place with your consent or for the purpose of
        answering your enquiry or on the basis of legitimate interests in
        improving the services, advertising and marketing activities and
        presentation to the outside world (Art. 6 (1) f GDPR).
      </p>
      <p class="mb-4">
        As Twitter user, you can at any time influence how your user behavior is
        recorded when you visit Twitter pages. To do this, you can manage the
        settings for advertising preferences in your Twitter account or under
        <a href="https://twitter.com/personalization"
          >https://twitter.com/personalization</a
        >
        or
        <a href="https://twitter.com/de/privacy#overlay-chapter2.10.1"
          >https://twitter.com/de/privacy#overlay-chapter2.10.1</a
        >
        or without an account under
        <a href="https://pscp.tv/account/settings"
          >https://pscp.tv/account/settings</a
        >. Twitter also provides opportunities to contact or exercise rights at
        <a href="https://help.twitter.com/forms/privacy"
          >https://help.twitter.com/forms/privacy</a
        >.
      </p>
      <p class="mb-4">
        As Medium user, you can at any time influence how your user behavior is
        recorded when you visit Medium pages. To do this, you can manage the
        settings for advertising preferences in your Medium account or under
        <a href="https://medium.com/me/settings"
          >https://medium.com/me/settings</a
        >
        or
        <a href="https://medium.com/me/following/suggestions"
          >https://medium.com/me/following/suggestions</a
        >. Medium also provides opportunities to contact or exercise rights in
        their privacy policy under
        <a href="https://medium.com/policy/medium-privacy- policy-f03bf92035c9"
          >https://medium.com/policy/medium-privacy- policy-f03bf92035c9</a
        >.
      </p>
      <p class="mb-4">
        As a user of Discord you can find more information on how to influence
        the processing of your data in their privacy policy
        <a href="https://discord.com/privacy">https://discord.com/privacy</a>
        or contact them via
        <a href="mailto:privacy@discord.com">privacy@discord.com</a>.
      </p>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-VII">
        Is my Data transferred to Third Parties? Does Profiling or automated
        decision making take place?
      </h2>

      <h3 class="mx-0 my-4">Transfer of Data to Third Parties</h3>
      <p class="mb-4">
        We will transfer your personal data to a third party only (i) within the
        scope of legal provisions, i.e. if we are obliged to transfer the data
        due to a government or court order, or, (ii) if applicable, legal
        provisions authorize the transfer, e.g. if the transfer is required to
        pursue our legitimate interests or to fulfil a contract, for example in
        case of mergers and acquisitions, (iii) or if you give your explicit
        consent.
      </p>

      <p class="mb-4">
        For more information please refer to this privacy policy or contact us
        via <a href="mailto:data@gitpod.io">data@gitpod.io</a>.
      </p>

      <h3 class="mx-0 my-4">Automated Decision Making including Profiling</h3>
      <p class="mb-4">
        In general we do not process any personal data via automated decision
        making including profiling via the Website or Service. However, such
        profiling or automated decision making may happen by third party
        providers through the Website or Service. We will inform you about such
        fact if possible.
      </p>

      <p class="mb-4">
        Profiling means any automated processing of personal data consisting in
        the use of such personal data to evaluate certain personal aspects
        relating to a natural person, in particular to analyse or predict
        aspects relating to the performance of work, economic situation, health,
        personal preferences, interests, reliability, behaviour, location or
        relocation of that natural person. Examples of such profiling include
        the analysis of data (e.g. based on statistical methods) with the aim of
        displaying personalized advertising to the user or giving shopping tips.
        The data subject shall not be subject to a decision based exclusively on
        automated processing, including profiling, which has legal effect
        against him or significantly affects him or her in a similar manner.
      </p>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-VIII">
        Is my Data transferred outside the EU?
      </h2>
      <p class="mb-4">
        When visiting the Website and using our Service data may be transferred
        to countries outside the EU by the third party services referred to in
        <a href="#details-III">Section III</a>.
      </p>

      <p class="mb-4">
        When using our Service your data may also be processed by our cloud
        service provider (namely: Google Cloud) on servers outside the EU.
      </p>

      <p class="mb-4">
        The US companies providing the services of Google, Customer.io, GitHub,
        Stripe, Segment.io, Mixpanel and Chargebee have each taken steps to
        comply with data protection standards applicable in the EU, as set out
        further within this privacy policy. For further information on securing
        your data when transferring it abroad please contact: <a
          href="mailto:data@gitpod.io"
        >
          data@gitpod.io.
        </a>
      </p>
      <p class="mb-4">
        Your data may also be processed outside the EU when visiting our Social
        Media pages. For further information please refer to <a
          href="#details-VI">section VI.</a
        >
      </p>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-IX">Your Rights</h2>

      <p class="mb-4"><strong>As a data subject you have the right:</strong></p>
      <ul class="pl-xx-small md:pl-x-small">
        <li>
          (where we are relying on your consent) to withdraw your consent to us
          at any time. As a result, we are no longer allowed to continue the
          processing of data based on this consent in the future;
        </li>
        <li>
          to object to the processing of your personal data, if your personal
          data are processed on the basis of legitimate interests pursuant to
          Art. 6 (1) f. GDPR insofar as there are reasons for this arising from
          your particular situation;
        </li>
        <li>to obtain from us access to your personal data;</li>
        <li>
          to obtain from us without undue delay the rectification of inaccurate
          personal data concerning you;
        </li>
        <li>
          to obtain the erasure of your personal data stored with us, unless the
          processing is necessary to exercise the right to free expression of
          opinion and information, to fulfill a legal obligation, for reasons of
          public interest or to assert, exercise or defend legal claims;
        </li>
        <li>
          to request the restriction of the processing of your personal data, if
          e.g. the accuracy of the data is disputed by you, the processing is
          unlawful, but you refuse its deletion and we no longer need the data,
          but you need it to assert, exercise or defend legal claims or you have
          filed an objection against the processing; and
        </li>
        <li>
          to receive your personal data, which you have provided to us, in a
          structured, current and machine-readable format or to request the
          transmission to another controller.
        </li>
      </ul>

      <p class="mb-4">
        If you wish to make use of your rights mentioned above please send an
        email to <a href="mailto:data@gitpod.io">data@gitpod.io</a>.
      </p>

      <p class="mb-4">
        If you obtain access to your personal data you may, in particular,
        request access to the following information: the purposes of the
        processing, the categories of personal data concerned, the recipients or
        categories of recipients to whom the personal data have been or will be
        disclosed.
      </p>

      <p class="mb-4">
        <strong
          >You have the right to lodge a complaint vis-&agrave;-vis a
          supervisory authority of your choice.
        </strong>
        For example for Berlin/Germany:
        <a href="https://www.datenschutz-berlin.de/kontakt.html"
          >https://www.datenschutz-berlin.de/kontakt.html</a
        >. An overview of the European National Data Protection Authorities may
        be found here:
        <a
          href="http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080"
          >http://ec.europa.eu/newsroom/article29/item-detail.cfm?item_id=612080</a
        >
      </p>
    </li>
    <li class="mb-4 my-small">
      <h2 class="mx-0 my-4 inline" id="details-X">
        Duration of Storing your Data; Data Security; Access and Changes to this
        Privacy Policy; Contact Details
      </h2>

      <h3 class="mx-0 my-4">Duration of Storing your Data</h3>
      <p class="mb-4">
        As a rule, we only store your personal data for as long as it is
        necessary for the execution of the contract or the respective purpose
        and limit the storage period to an absolutely necessary minimum. Your
        IP-address and server-log-files (as set forth above) are stored for
        seven (7) days for security and technical reasons.
      </p>

      <p class="mb-4">
        In the case of long-term contractual relationships, such as the use of
        our Service, these storage periods may vary, but are generally limited
        to the duration of the contractual relationship or, with regard to the
        inventory data, to the maximum legal retention periods, e.g. in
        accordance with the German Commercial Code <em
          >(Handelsgesetzbuch, HGB)</em
        >
        and the Tax Code
        <em>(Abgabenordnung, AO)</em>
      </p>

      <p class="mb-4">
        Criteria for the storage period include whether the data are still
        up-to-date, whether the contractual relationship with us still exists,
        whether an inquiry has already been processed, whether a process has
        been completed or not, and whether legal retention periods for the
        personal data concerned are relevant or not.
      </p>

      <h3 class="mx-0 my-4">Data Security</h3>
      <p class="mb-4">
        We have installed technical and organizational measures in order to
        safeguard our Website and/or Service against loss, destruction, access,
        changes or the distribution of your data by unauthorized persons.
      </p>

      <p class="mb-4">
        The Website and Service is operated through a safe SSL-connection. If an
        SSL-connection is activated third parties are prevented from reading any
        data that are transferred by you to us.
      </p>

      <p class="mb-4">
        We store Personal Information in encrypted format, leveraging
        state-of-the-art encryption algorithms. Gitpod is hosted inside Google’s
        secure and compliant data centres, for more information on Google’s
        Security & Compliance Standard, please visit <a
          href="https://cloud.google.com/security/compliance"
          >https://cloud.google.com/security/compliance</a
        >.
      </p>

      <p class="mb-4">
        We also maintain an Information Security & Privacy program with
        established policies and procedures that govern the confidentiality,
        integrity and availability of data.
      </p>

      <h3 class="mx-0 my-4">Access and Changes to this Privacy Policy</h3>
      <p class="mb-4">
        This privacy policy is accessible via our Website under <a
          href="/privacy">https://gitpod.io/privacy</a
        >
        and may be downloaded and printed anytime.
      </p>

      <p class="mb-4">
        We reserve the right to change the regulations of this privacy policy at
        any time, taking into account currently applicable data protection
        provisions. In case of any changes, you will be notified.
      </p>

      <h3 class="mx-0 my-4">Contact Details</h3>
      <p class="mb-4">
        For any inquiries and additional questions about processing personal
        data please contact <a href="mailto:data@gitpod.io">data@gitpod.io</a>.
      </p>
      <p class="mb-4">
        Further details may be found here:
        <a href="/imprint">https://gitpod.io/imprint</a>.
      </p>
    </li>
  </ol>
</article>
