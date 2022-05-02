var fs = require('fs');

let customArgs = process.argv.slice(2);

const sql = fs.readFileSync(customArgs[0]).toString();


module.exports = () => { return new Promise((resolve, reject) => {

    const JDBC = require('@naxmefy/jdbc').JDBC;
    const IAGCFDEV = new JDBC({
        className: 'com.sap.db.jdbc.Driver',
        url: 'jdbc:sap://zeus.hana.canary.eu-central-1.whitney.dbaas.ondemand.com:22564?encrypt=true&validateCertificate=true&currentschema=47D3A130F54B4D6DBB20C2003C6C734E',
        username: '47D3A130F54B4D6DBB20C2003C6C734E_CDO2JWOQGSGZ5KN009609CQFF_RT',
        password: 'Tf0nox_2p11v13dJJy4Uy2Hu01tsc6yuwlp647NIzKtocIeT2lzTVz3C_aZ9b_XfHk1usPAaZL6ZN9mHOFPxXjJwI6X.IQDRMmmc3FwSvTVd_E.SziJ5S2aZudykCjR0'
    });

    IAGCFDEV.createStatement()
        .then(statement => {
            return statement.executeQuery(sql);
        })
        .then(resultSet => {
            const arrayOfResults = resultSet.fetchAllResults();
            arrayOfResults.forEach(result => {
                console.log(result);
                resolve(result);
            })
        }, error => {
            reject(error);
        });
    })
};

module.exports()
    .then( (data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });