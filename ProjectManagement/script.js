
let currentPage = 1;
const rowsPerPage = 5; // Number of rows per page
let allData = [];
let filteredData = [];


async function fetchAPI() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block'; // Show loader
    try {
        const res = await fetch(`https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects`);
        const data = await res.json();
        allData = data;
        filteredData = allData;
        renderData();
    } catch (err) {
        console.log(err);
    } finally {
        loader.style.display = 'none'; // Hide loader
    }
}

function renderData() {
    const renderProject = document.querySelector('#renderPro');
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = filteredData.slice(start, end);

    renderProject.innerHTML = paginatedData.map((proj, i) => `
      <tr>
          <td>${start + i + 1}</td>
          <td>${proj.ProjectName}
          <p style="color:gray">${proj.Details}</p></td>
          <td>${proj.Department}</td>
          <td>${proj.priority}</td>
          <td><span style="width:100px;font-size:15px" class="badge text-bg-${proj.status.toLowerCase() === "completed" ? 'success' : proj.status.toLowerCase() === "pending" ? 'danger' : 'info'}">${proj.status}</span></td>
          <td>${proj.startDate}</td>
          <td>${proj.EndDate}</td>
      </tr>
    `).join('');

    renderPagination();
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    let html = `
      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-end">
    `;

    // Previous button
    html += `
      <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
        <a class="page-link" href="#" onclick="changePage(${currentPage - 1})">Previous</a>
      </li>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        html += `
          <li class="page-item ${i === currentPage ? 'active' : ''}">
            <a class="page-link" href="#" onclick="changePage(${i})">${i}</a>
          </li>
        `;
    }

    // Next button
    html += `
      <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
        <a class="page-link" href="#" onclick="changePage(${currentPage + 1})">Next</a>
      </li>
    `;

    html += `
        </ul>
      </nav>
    `;

    pagination.innerHTML = html;
}

function changePage(page) {
    currentPage = page;
    renderData();
}

window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
    fetchAPI();
});


// search function

// InputValue = document.getElementById('searchInput')
// InputValue.addEventListener('input', (e) => {
//     searchInputValue = e.target.value
//     allData = allData.filter((p) => p.ProjectName.toLowerCase().includes(searchInputValue.toLowerCase()))

//     console.log(allData)
//     renderData();
// });


// SEARCH LOGIC
function searchByName() {
    query = document.getElementById('searchInput').value;
    //console.log('query', query)
    const dropdown = document.getElementById("myDropdown").value;
    //console.log("Selected value:", dropdown);
    if (dropdown == "ProjectName") {
        filteredData = allData.filter(proj =>
            proj.ProjectName.toLowerCase().includes(query.toLowerCase())
        );
        currentPage = 1; // reset to first page
        renderData();
    } else if (dropdown == "Department") {
        filteredData = allData.filter(proj =>
            proj.Department.toLowerCase().includes(query.toLowerCase())
        );
        currentPage = 1; // reset to first page
        renderData();

    } else if (dropdown == "Priority") {
        filteredData = allData.filter(proj =>
            proj.priority.toLowerCase().includes(query.toLowerCase())
        );
        currentPage = 1; // reset to first page
        renderData();

    } else if (dropdown == "Status") {
        filteredData = allData.filter(proj =>
            proj.status.toLowerCase().includes(query.toLowerCase())
        );
        currentPage = 1; // reset to first page
        renderData();

    }
}


