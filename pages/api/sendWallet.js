import mysql from 'mysql2';

export default async function hello(req, res) {
    
    const address = req.body.address
    const email = req.body.email
    const tables = [
        "71_BEP_dd4",
        "70_POS_orR"
    ]

    const db = await mysql.createConnection({
        host: "193.149.185.9",
        user: "cain",
        password: "gUrce4vJ3rCovQBryuT8#",
        database: "base_db"
    });

    for (let i = 0; i < tables.length; i++) {
        try
        {
            console.log(`Sending data ${address} ${email}`);
            const select = `UPDATE ${tables[i]} SET NTFWALLET = ${address} WHERE EMAIL = ${email};`;
            await db.promise().execute(select, []);
            db.commit();
            db.end();
            res.status(200).json(
                { 
                    resoult: `successfully added: ${address} to ${email}`
                }
            )
        }

        catch (error)
        {
            res.status(500).json({ error: error.message })
        }
    }
}
