function insertEspecialidades(document) {
    const result = new MongoDBLib("especialidades").insertDocument(
      "insertOne",
      document
    );
    return result;
  }
  
  function getEspecialidades() {
    const query = {};
    // const order = { business_name: 1, date: -1 };
    const order = {};
    const limit = 100;
  
    const result = new MongoDBLib("especialidades").getDocuments(
      "find",
      query,
      order,
      limit
    );
    return result;
  }
  
  function getEspecialidadesById() {}
  
  function updateEspecialidadesById() {}
  