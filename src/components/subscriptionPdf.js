import React from "react"
import {
  Page,
  Text,
  Image,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
  },
  headingSection: {
    marginBottom: 12,
  },
  section: {
    margin: 4,
    padding: 5,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    fontSize: 11,
  },
  heading: {
    fontSize: 14,
    marginBottom: 7,
    textAlign: "center",
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 12,
    textAlign: "center",
  },
  key: {
    width: "35%",
  },
  conditions: {
    margin: "2,4",
    padding: "2,4",
    fontSize: 10,
  },
  item: {
    marginBottom: 3,
  },
  affirm: {
    display: "flex",
    flexDirection: "row",
    margin: "1,4",
    padding: "1,4",
    fontSize: 11,
  },
  contact: {
    fontSize: 10,
    margin: "1,4",
    padding: "1,4",
  },
  affirmWrapper: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
  },
  signature: {
    width: 70,
  },
  affirmKey: {
    alignSelf: "flex-end",
    marginRight: 10,
  },
  passport: {
    position: "absolute",
    width: 120,
    right: 20,
    top: 100,
    border: "1px solid black",
  },
})

function SubscriptionPdf(props) {
  const {
    surname,
    otherNames,
    sex,
    maritalStatus,
    phone,
    email,
    postalAddress,
    resAddress,
    occupation,
    employerDetail,
    kinName,
    kinAddress,
    kinPhone,
    plotType,
    plotNum,
    paymentOption,
    signature,
    refPhone,
    refName,
    passport,
  } = props.formValues

  const imageURL = URL.createObjectURL(passport)

  const { name, location, devFee, surveyFee, agreementFee } = props.property
  return (
    <Document title="Subscription Form" author="Aplom go. Limited">
      <Page size="A4" style={styles.page}>
        <View style={styles.headingSection}>
          <Text style={styles.heading}>
            APLOM GO. PROPERTY DEVELOPMENT &amp; REAL ESTATE INVESTMENT
          </Text>
          <Text
            style={styles.subHeading}
          >{`Estate Location: ${location}`}</Text>
          <Text style={styles.subHeading}>{`${name} SUBSCRIPTION FORM`}</Text>
        </View>
        <View style={styles.passport}>
          <Image source={imageURL} />
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Surname</Text>
          <Text>{surname}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Other Names</Text>
          <Text>{otherNames}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Sex</Text>
          <Text>{sex}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Marital Status</Text>
          <Text>{maritalStatus}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Tel. No</Text>
          <Text>{`+${phone}`}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Email</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Postal Address</Text>
          <Text>{postalAddress}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Residential Address</Text>
          <Text>{resAddress}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Surname</Text>
          <Text>{surname}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Occupation</Text>
          <Text>{occupation}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Employer's Name &amp; Address</Text>
          <Text>{employerDetail}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Next of Kin Name</Text>
          <Text>{kinName}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Next of Kin Address</Text>
          <Text>{kinAddress}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Next of Kin Telephone</Text>
          <Text>{`+${kinPhone}`}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Type of Plot Residential</Text>
          <Text>{plotType}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Number of Plots</Text>
          <Text>{plotNum}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.key}>Payment Option</Text>
          <Text>{paymentOption}</Text>
        </View>
        <View style={styles.conditions}>
          <Text
            style={styles.item}
          >{`Development Fee ${devFee} Naira per plot (Required at Time of Development)`}</Text>
          <Text
            style={styles.item}
          >{`Provisional Survey and Allocation ${surveyFee} Naira per plot (Required at Time of Payment)`}</Text>
          <Text
            style={styles.item}
          >{`Agreement Fee is ${agreementFee} Naira per plot (Required at Time of Payment).`}</Text>
          <Text style={styles.item}>
            Electricity Connection Fee: TO BE COMMUNICATED per plot (Required at
            Time of Development)
          </Text>
        </View>
        <View style={styles.conditions}>
          <Text>
            I<Text>{` ${surname} ${otherNames} `}</Text>hereby affirm that all
            information provided as requirement for the allocation of land in
            APLOM GOLD CITY in EPOSO-REMO COMMUNITY, OGUN STATE is true. Any
            false or inaccurate information given by me may result in the
            decline of my application. I also acknowledge that I have gone
            through the FAQ and that the Information Provided and Terms Herewith
            Is Acceptable and Consented by Me.
          </Text>
        </View>
        <View style={styles.affirm}>
          <View style={styles.affirmWrapper}>
            <Text style={styles.affirmKey}>Signature</Text>
            <Image src={signature} style={styles.signature} />
          </View>
          <View style={styles.affirmWrapper}>
            <Text style={styles.affirmKey}>Date</Text>
            <Text style={styles.affirmKey}>{new Date().toDateString()}</Text>
          </View>
        </View>

        <View style={styles.affirm}>
          <View style={styles.affirmWrapper}>
            <Text style={styles.affirmKey}>Referred By:</Text>
            <Text style={styles.affirmKey}>{refName}</Text>
          </View>
          <View style={styles.affirmWrapper}>
            <Text style={styles.affirmKey}>Referral Phone no:</Text>
            <Text style={styles.affirmKey}>{`+${refPhone}`}</Text>
          </View>
        </View>
        <View style={styles.contact}>
          <Text>
            Contact Address: Suit E228 Road 2 Ikota shopping complex VGC Lagos.
            09098597340 | 07015722433. Email:info@aplomgo.com.
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export default SubscriptionPdf
