/* ============================================
   DATA INVENTARIS AWAL (DARI FILE EXCEL)
   ============================================ */
const DEFAULT_INVENTORY = [
    { kode:'SS0001', nama:'PATCHORD KUNING 2MM', stok:0, type:'', masuk:0, keluar:0, harga:11000 },
    { kode:'SS0002', nama:'ROUTER ZTE F663N', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0003', nama:'ADAPTOR 12V 1A', stok:0, type:'', masuk:0, keluar:0, harga:50000 },
    { kode:'SS0004', nama:'SPLICER SIGNAL FIRE AI6', stok:0, type:'', masuk:0, keluar:0, harga:15000000 },
    { kode:'SS0005', nama:'SPLICER JOINWIT JW4108', stok:0, type:'', masuk:0, keluar:0, harga:20000000 },
    { kode:'SS0006', nama:'PATCHORD KUNING 2MM', stok:0, type:'', masuk:0, keluar:0, harga:6000 },
    { kode:'SS0007', nama:'PATCHORD HITAM FLAT DC', stok:0, type:'', masuk:0, keluar:0, harga:6000 },
    { kode:'SS0008', nama:'PELINDUNG BESAR (SLEEVE BESAR)', stok:0, type:'', masuk:0, keluar:0, harga:300 },
    { kode:'SS0009', nama:'KABEL FO DROPCORE 1C3S', stok:0, type:'', masuk:0, keluar:0, harga:8000 },
    { kode:'SS0010', nama:'PATCHORD KUNING 2MM', stok:0, type:'', masuk:0, keluar:0, harga:6000 },
    { kode:'SS0011', nama:'BOX ODP 1:16 KOSONGAN', stok:0, type:'', masuk:0, keluar:0, harga:142000 },
    { kode:'SS0012', nama:'SPLITER 1:16', stok:0, type:'', masuk:0, keluar:0, harga:83500 },
    { kode:'SS0013', nama:'BOX ODP 1:16 KOSONGAN', stok:0, type:'', masuk:0, keluar:0, harga:120000 },
    { kode:'SS0014', nama:'BOX ODP 1:8 KOSONGAN', stok:0, type:'', masuk:0, keluar:0, harga:70000 },
    { kode:'SS0015', nama:'CLOSUR SEDANG', stok:0, type:'', masuk:0, keluar:0, harga:50000 },
    { kode:'SS0016', nama:'PATCHORD HITAM FLAT DC', stok:0, type:'', masuk:0, keluar:0, harga:10000 },
    { kode:'SS0017', nama:'SPLITER 1:8', stok:0, type:'', masuk:0, keluar:0, harga:49000 },
    { kode:'SS0018', nama:'SPLITER 1:4', stok:0, type:'', masuk:0, keluar:0, harga:45000 },
    { kode:'SS0019', nama:'SPLITER 1:2', stok:0, type:'', masuk:0, keluar:0, harga:41000 },
    { kode:'SS0020', nama:'ADAPTER (BAREL) KONEKTOR', stok:0, type:'', masuk:0, keluar:0, harga:4000 },
    { kode:'SS0021', nama:'KABEL FO DROPCORE 1C3S', stok:0, type:'', masuk:0, keluar:0, harga:800 },
    { kode:'SS0022', nama:'ADAPTOR 12V 1,5A', stok:0, type:'', masuk:0, keluar:0, harga:29000 },
    { kode:'SS0023', nama:'STB ANDROID', stok:0, type:'', masuk:0, keluar:0, harga:523000 },
    { kode:'SS0024', nama:'RJ45', stok:0, type:'', masuk:0, keluar:0, harga:1000 },
    { kode:'SS0025', nama:'KERTAS THERMAL UKURAN 58', stok:0, type:'', masuk:0, keluar:0, harga:11000 },
    { kode:'SS0026', nama:'KABEL FO FIG8 2C', stok:0, type:'', masuk:0, keluar:0, harga:800 },
    { kode:'SS0027', nama:'ADAPTOR 12V 1,5A', stok:0, type:'', masuk:0, keluar:0, harga:50000 },
    { kode:'SS0028', nama:'KABEL FO DROPCORE 1C3S', stok:3796, type:'', masuk:3796, keluar:0, harga:800 },
    { kode:'SS0029', nama:'ROUTER ZTE F663N', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0030', nama:'BOX ODP 1:16 KOSONGAN', stok:0, type:'', masuk:0, keluar:0, harga:133000 },
    { kode:'SS0031', nama:'ADAPTOR 12V 1A', stok:0, type:'', masuk:0, keluar:0, harga:50000 },
    { kode:'SS0032', nama:'PELINDUNG KECIL (SLEEVE KECIL)', stok:0, type:'', masuk:0, keluar:0, harga:140 },
    { kode:'SS0033', nama:'CLOSUR BESAR', stok:0, type:'', masuk:0, keluar:0, harga:130000 },
    { kode:'SS0034', nama:'BOX ODP 1:8 KOSONGAN', stok:3, type:'', masuk:3, keluar:0, harga:73000 },
    { kode:'SS0035', nama:'ADAPTOR 12V 1A', stok:0, type:'', masuk:0, keluar:0, harga:24000 },
    { kode:'SS0036', nama:'BNC', stok:0, type:'', masuk:0, keluar:0, harga:5000 },
    { kode:'SS0037', nama:'KABEL FO DROPCORE 1C3S', stok:0, type:'', masuk:0, keluar:0, harga:600 },
    { kode:'SS0038', nama:'PATCHORD KUNING 2MM', stok:0, type:'', masuk:0, keluar:0, harga:10000 },
    { kode:'SS0039', nama:'PATCHORD HITAM FLAT DC', stok:0, type:'', masuk:0, keluar:0, harga:11000 },
    { kode:'SS0040', nama:'SPLITER 1:8', stok:0, type:'', masuk:0, keluar:0, harga:60000 },
    { kode:'SS0041', nama:'SPLITER 1:4', stok:0, type:'', masuk:0, keluar:0, harga:50000 },
    { kode:'SS0042', nama:'SPLITER 1:2', stok:0, type:'', masuk:0, keluar:0, harga:45000 },
    { kode:'SS0043', nama:'SPLITER 1:16', stok:0, type:'', masuk:0, keluar:0, harga:100000 },
    { kode:'SS0044', nama:'BOX ODP 1:8 KOSONGAN', stok:0, type:'', masuk:0, keluar:0, harga:75000 },
    { kode:'SS0045', nama:'CLOSUR SEDANG', stok:0, type:'', masuk:0, keluar:0, harga:55000 },
    { kode:'SS0046', nama:'ADAPTER (BAREL) KONEKTOR', stok:0, type:'', masuk:0, keluar:0, harga:1000 },
    { kode:'SS0047', nama:'PELINDUNG KECIL', stok:0, type:'', masuk:0, keluar:0, harga:500 },
    { kode:'SS0048', nama:'SPLITER 1:8', stok:0, type:'', masuk:0, keluar:0, harga:45000 },
    { kode:'SS0049', nama:'BOX ODP 1:8 KOSONGAN', stok:3, type:'', masuk:3, keluar:0, harga:80000 },
    { kode:'SS0050', nama:'SPLITER 1:2', stok:0, type:'', masuk:0, keluar:0, harga:50000 },
    { kode:'SS0051', nama:'SPLITER 1:4', stok:0, type:'', masuk:0, keluar:0, harga:57000 },
    { kode:'SS0052', nama:'SPLITER 1:8', stok:0, type:'', masuk:0, keluar:0, harga:70000 },
    { kode:'SS0053', nama:'PATCHORD HITAM FLAT DC', stok:0, type:'', masuk:0, keluar:0, harga:12000 },
    { kode:'SS0054', nama:'SOLASI MASKO', stok:0, type:'', masuk:0, keluar:0, harga:12000 },
    { kode:'SS0055', nama:'CLOSUR SEDANG', stok:0, type:'', masuk:0, keluar:0, harga:60000 },
    { kode:'SS0056', nama:'SPLITER 1:16', stok:0, type:'', masuk:0, keluar:0, harga:120000 },
    { kode:'SS0057', nama:'CLOSUR BESAR', stok:0, type:'', masuk:0, keluar:0, harga:60000 },
    { kode:'SS0058', nama:'CLOSUR SEDANG', stok:0, type:'', masuk:0, keluar:0, harga:0 },
    { kode:'SS0059', nama:'KABEL UTP CAT6 (KABEL LAN)', stok:211, type:'', masuk:211, keluar:0, harga:2000 },
    { kode:'SS0060', nama:'CLOSUR SEDANG', stok:0, type:'', masuk:0, keluar:0, harga:95000 },
    { kode:'SS0061', nama:'CLOSUR BESAR', stok:6, type:'', masuk:6, keluar:0, harga:90000 },
    { kode:'SS0062', nama:'ROUTER ZTE F460', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0063', nama:'ROUTER ZTE F452', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0064', nama:'ROUTER ZTE F477', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0065', nama:'PATCHORD KUNING 2MM', stok:0, type:'', masuk:0, keluar:0, harga:0 },
    { kode:'SS0066', nama:'ROUTER ZTE F677', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0067', nama:'ROUTER ZTE F477', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0068', nama:'ADAPTOR 12V 1A', stok:0, type:'', masuk:0, keluar:0, harga:50000 },
    { kode:'SS0069', nama:'ROUTER ZTE F609', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0070', nama:'SOLASI NITTO', stok:0, type:'', masuk:0, keluar:0, harga:11000 },
    { kode:'SS0071', nama:'SPLITER 1:2', stok:0, type:'', masuk:0, keluar:0, harga:40000 },
    { kode:'SS0072', nama:'SPLITER 1:4', stok:0, type:'', masuk:0, keluar:0, harga:40000 },
    { kode:'SS0073', nama:'SPLITER 1:8', stok:0, type:'', masuk:0, keluar:0, harga:55000 },
    { kode:'SS0074', nama:'ROUTER ZTE F660', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0075', nama:'DOUBLE TAPE', stok:0, type:'', masuk:0, keluar:0, harga:29000 },
    { kode:'SS0076', nama:'BOX ODP 1:8 KOSONGAN', stok:0, type:'', masuk:0, keluar:0, harga:85000 },
    { kode:'SS0077', nama:'PEWANGI RUANGAN', stok:0, type:'', masuk:0, keluar:0, harga:15000 },
    { kode:'SS0078', nama:'PATCHORD KUNING 2MM', stok:0, type:'', masuk:0, keluar:0, harga:8500 },
    { kode:'SS0079', nama:'PATCHORD HITAM FLAT DC', stok:0, type:'', masuk:0, keluar:0, harga:10200 },
    { kode:'SS0080', nama:'ROUTER ZTE F660', stok:0, type:'', masuk:0, keluar:0, harga:150000 },
    { kode:'SS0081', nama:'BOX ODP 1:8 KOSONGAN', stok:0, type:'', masuk:0, keluar:0, harga:89000 },
    { kode:'SS0082', nama:'SPLITER 1:8SPLITER 1:2', stok:0, type:'', masuk:0, keluar:0, harga:64000 },
    { kode:'SS0083', nama:'PELINDUNG BESAR (SLEEVE BESAR)', stok:0, type:'', masuk:0, keluar:0, harga:40000 },
    { kode:'SS0084', nama:'SOLASI MASKO', stok:0, type:'', masuk:0, keluar:0, harga:500 },
    { kode:'SS0085', nama:'KABEL POWERFUL JELY TUBE 12C3S', stok:0, type:'', masuk:0, keluar:0, harga:11000 },
    { kode:'SS0086', nama:'KABEL FO DROPCORE 4C3S', stok:0, type:'', masuk:0, keluar:0, harga:3000 }
];

/* Daftar teknisi */
const TECHNICIANS = ['Sahruramadhan', 'Amin Maulana', 'Rusli Hardiansyah', 'Egi Febriansyah'];

/* Kredensial login (demo) */
const CREDENTIALS = { username: 'admin', password: 'admin123' };

/* Nomor WhatsApp NOC (ganti sesuai kebutuhan) */
const NOC_WA_NUMBER = '6281234567890';

/* ============================================
   STATE APLIKASI
   ============================================ */
let state = {
    inventory: [],
    tickets: [],
    barangKeluar: [],
    activities: [],
    currentPage: 'dashboard',
    inventoryPage: 1,
    inventoryPerPage: 15,
    searchQuery: '',
    filterType: '',
    editingId: null,
    nocWaNumber: NOC_WA_NUMBER
};

/* ============================================
   UTILITAS
   ============================================ */
function formatRupiah(num) {
    if (num === 0 || isNaN(num)) return 'Rp0';
    return 'Rp' + Number(num).toLocaleString('id-ID', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function formatRupiahXLS(num) {
    if (num === 0 || isNaN(num)) return 'Rp0.00';
    return 'Rp' + Number(num).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function autoCategorize(nama) {
    const n = nama.toUpperCase();
    if (n.includes('ROUTER') || n.includes('STB')) return 'Router/STB';
    if (n.includes('SPLICER')) return 'Alat Splicing';
    if (n.includes('SPLITER') || n.includes('SPLITTER')) return 'Spliter';
    if (n.includes('BOX ODP')) return 'Box ODP';
    if (n.includes('CLOSUR') || n.includes('CLOSURE')) return 'Closure';
    if (n.includes('PATCHORD') || n.includes('PATCH CORD')) return 'Patchcord';
    if (n.includes('KABEL FO') || n.includes('KABEL UTP') || n.includes('KABEL POWER')) return 'Kabel';
    if (n.includes('ADAPTOR') || n.includes('ADAPTER')) return 'Adaptor';
    if (n.includes('PELINDUNG') || n.includes('SLEEVE')) return 'Pelindung';
    if (n.includes('RJ45') || n.includes('BNC') || n.includes('BAREL')) return 'Konektor';
    if (n.includes('SOLASI') || n.includes('DOUBLE TAPE')) return 'Perlengkapan';
    if (n.includes('KERTAS') || n.includes('PEWANGI')) return 'Consumable';
    return 'Lainnya';
}

function genId() { return Date.now().toString(36) + Math.random().toString(36).substr(2, 5); }

function genKode() {
    const maxNum = state.inventory.reduce((max, item) => {
        const num = parseInt(item.kode.replace('SS', ''));
        return num > max ? num : max;
    }, 0);
    return 'SS' + String(maxNum + 1).padStart(4, '0');
}

function formatDate(d) {
    const dt = new Date(d);
    return dt.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) + ' ' +
           dt.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

function shortDate(d) {
    return new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
}

function showToast(message, type) {
    type = type || 'success';
    const container = document.getElementById('toastContainer');
    const icons = { success: 'fa-circle-check', error: 'fa-circle-xmark', warning: 'fa-triangle-exclamation' };
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    toast.innerHTML = '<i class="fa-solid ' + (icons[type] || icons.success) + ' t-icon"></i><span class="t-msg">' + message + '</span>';
    container.appendChild(toast);
    setTimeout(function() {
        toast.classList.add('removing');
        setTimeout(function() { toast.remove(); }, 300);
    }, 3000);
}

function addActivity(text, type) {
    type = type || 'info';
    state.activities.unshift({ id: genId(), text: text, type: type, time: new Date().toISOString() });
    if (state.activities.length > 100) state.activities.pop();
    saveState();
}

/* ============================================
   PENYIMPANAN (LOCALSTORAGE)
   ============================================ */
function saveState() {
    localStorage.setItem('ss_inventory', JSON.stringify(state.inventory));
    localStorage.setItem('ss_tickets', JSON.stringify(state.tickets));
    localStorage.setItem('ss_keluar', JSON.stringify(state.barangKeluar));
    localStorage.setItem('ss_activities', JSON.stringify(state.activities));
    localStorage.setItem('ss_noc_wa', state.nocWaNumber);
}

function loadState() {
    try {
        var inv = localStorage.getItem('ss_inventory');
        var tkt = localStorage.getItem('ss_tickets');
        var kel = localStorage.getItem('ss_keluar');
        var act = localStorage.getItem('ss_activities');
        var noc = localStorage.getItem('ss_noc_wa');

        if (inv) {
            state.inventory = JSON.parse(inv);
            state.inventory.forEach(function(item) {
                if (!item.type) item.type = autoCategorize(item.nama);
            });
        } else {
            state.inventory = DEFAULT_INVENTORY.map(function(item) {
                return {
                    kode: item.kode, nama: item.nama, stok: item.stok,
                    type: autoCategorize(item.nama),
                    masuk: item.stok > 0 ? item.stok : 0,
                    keluar: 0, harga: item.harga
                };
            });
        }

        state.tickets = tkt ? JSON.parse(tkt) : [];
        state.barangKeluar = kel ? JSON.parse(kel) : [];
        state.activities = act ? JSON.parse(act) : [];
        if (noc) state.nocWaNumber = noc;
    } catch (e) {
        console.error('Gagal memuat data:', e);
        state.inventory = DEFAULT_INVENTORY.map(function(item) {
            return {
                kode: item.kode, nama: item.nama, stok: item.stok,
                type: autoCategorize(item.nama),
                masuk: item.stok > 0 ? item.stok : 0,
                keluar: 0, harga: item.harga
            };
        });
    }
}

/* ============================================
   AUTENTIKASI
   ============================================ */
function handleLogin(e) {
    e.preventDefault();
    var username = document.getElementById('loginUser').value.trim();
    var password = document.getElementById('loginPass').value.trim();
    var errorEl = document.getElementById('loginError');

    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
        errorEl.classList.remove('show');
        localStorage.setItem('ss_logged_in', 'true');
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        loadState();
        initApp();
    } else {
        errorEl.classList.add('show');
    }
}

function handleLogout() {
    localStorage.removeItem('ss_logged_in');
    document.getElementById('app').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('loginUser').value = '';
    document.getElementById('loginPass').value = '';
    document.getElementById('loginError').classList.remove('show');
}

function checkAuth() {
    if (localStorage.getItem('ss_logged_in') === 'true') {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('app').classList.remove('hidden');
        loadState();
        initApp();
    }
}

/* ============================================
   NAVIGASI
   ============================================ */
var PAGE_TITLES = {
    dashboard: 'Dashboard',
    inventory: 'Inventory Barang',
    totalAset: 'Total Aset',
    ticket: 'Ticket Perbaikan',
    barangKeluar: 'Barang Keluar',
    activityLog: 'Riwayat Aktivitas'
};

function navigateTo(page) {
    state.currentPage = page;
    document.querySelectorAll('.page').forEach(function(p) { p.classList.add('hidden'); });
    var target = document.getElementById(page + 'Page');
    if (target) {
        target.classList.remove('hidden');
        target.style.animation = 'none';
        target.offsetHeight;
        target.style.animation = '';
    }
    document.querySelectorAll('#sidebarNav a').forEach(function(a) {
        a.classList.toggle('active', a.dataset.page === page);
    });
    document.getElementById('pageTitle').textContent = PAGE_TITLES[page] || 'Dashboard';
    renderPage(page);
    closeSidebar();
}

function renderPage(page) {
    switch (page) {
        case 'dashboard': renderDashboard(); break;
        case 'inventory': renderInventory(); break;
        case 'totalAset': renderTotalAset(); break;
        case 'ticket': renderTickets(); break;
        case 'barangKeluar': renderBarangKeluar(); break;
        case 'activityLog': renderActivityLog(); break;
    }
    updateNavBadges();
}

function updateNavBadges() {
    var activeTickets = state.tickets.filter(function(t) { return t.status !== 'Selesai'; }).length;
    var badge = document.getElementById('ticketBadge');
    if (badge) {
        badge.textContent = activeTickets;
        badge.style.display = activeTickets > 0 ? 'inline' : 'none';
    }
}

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('show');
}

function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarOverlay').classList.remove('show');
}

/* ============================================
   DASHBOARD
   ============================================ */
function renderDashboard() {
    var totalItems = state.inventory.length;
    var totalStok = state.inventory.reduce(function(s, i) { return s + (i.stok || 0); }, 0);
    var totalAset = state.inventory.reduce(function(s, i) { return s + ((i.stok || 0) * i.harga); }, 0);
    var lowStock = state.inventory.filter(function(i) { return i.stok > 0 && i.stok <= 5; }).length;
    var activeTickets = state.tickets.filter(function(t) { return t.status !== 'Selesai'; }).length;

    document.getElementById('statTotalItems').textContent = totalItems + ' Jenis';
    document.getElementById('statTotalStok').textContent = totalStok.toLocaleString('id-ID') + ' Unit';
    document.getElementById('statTotalAset').textContent = formatRupiah(totalAset);
    document.getElementById('statActiveTickets').textContent = activeTickets + ' Ticket';
    document.getElementById('statLowStock').textContent = lowStock + ' Item';

    renderCategoryChart();
    renderStockChart();

    var lowItems = state.inventory.filter(function(i) { return i.stok > 0 && i.stok <= 5; }).slice(0, 6);
    var lowEl = document.getElementById('lowStockList');
    if (lowItems.length === 0) {
        lowEl.innerHTML = '<div class="empty-state" style="padding:24px"><i class="fa-solid fa-check-circle"></i><p>Semua stok aman</p></div>';
    } else {
        lowEl.innerHTML = lowItems.map(function(i) {
            return '<div class="low-stock-item"><div><div class="lsi-name">' + i.nama + '</div><div class="lsi-code">' + i.kode + '</div></div><div class="lsi-stok">' + i.stok + '</div></div>';
        }).join('');
    }

    var recentActs = state.activities.slice(0, 8);
    var actEl = document.getElementById('recentActivities');
    if (recentActs.length === 0) {
        actEl.innerHTML = '<div class="empty-state" style="padding:24px"><p>Belum ada aktivitas</p></div>';
    } else {
        actEl.innerHTML = '<div class="timeline">' + recentActs.map(function(a) {
            return '<div class="timeline-item"><div class="tl-time">' + formatDate(a.time) + '</div><div class="tl-text">' + a.text + '</div></div>';
        }).join('') + '</div>';
    }
}

var categoryChartInstance = null;
var stockChartInstance = null;

function renderCategoryChart() {
    var ctx = document.getElementById('categoryChart').getContext('2d');
    if (categoryChartInstance) categoryChartInstance.destroy();

    var catMap = {};
    state.inventory.forEach(function(item) {
        var cat = item.type || 'Lainnya';
        if (!catMap[cat]) catMap[cat] = { count: 0, value: 0 };
        catMap[cat].count++;
        catMap[cat].value += (item.stok || 0) * item.harga;
    });

    var sorted = Object.entries(catMap).sort(function(a, b) { return b[1].value - a[1].value; }).slice(0, 8);
    var labels = sorted.map(function(s) { return s[0]; });
    var values = sorted.map(function(s) { return s[1].value; });
    var colors = ['#0D47A1','#1565C0','#1E88E5','#42A5F5','#00B0FF','#0091EA','#0277BD','#01579B'];

    categoryChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{ data: values, backgroundColor: colors.slice(0, labels.length), borderWidth: 2, borderColor: '#fff' }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { boxWidth: 12, padding: 12, font: { size: 11, family: 'Plus Jakarta Sans' } } },
                tooltip: { callbacks: { label: function(ctx) { return ctx.label + ': ' + formatRupiah(ctx.raw); } } }
            },
            cutout: '60%'
        }
    });
}

function renderStockChart() {
    var ctx = document.getElementById('stockChart').getContext('2d');
    if (stockChartInstance) stockChartInstance.destroy();

    var topStok = state.inventory.filter(function(i) { return i.stok > 0; })
        .sort(function(a, b) { return b.stok - a.stok; }).slice(0, 8);

    stockChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topStok.map(function(i) { return i.nama.length > 20 ? i.nama.substring(0, 20) + '...' : i.nama; }),
            datasets: [{ label: 'Stok', data: topStok.map(function(i) { return i.stok; }), backgroundColor: 'rgba(30,136,229,0.7)', borderColor: '#1565C0', borderWidth: 1, borderRadius: 4 }]
        },
        options: {
            responsive: true, maintainAspectRatio: false, indexAxis: 'y',
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { color: '#E8EDF2' }, ticks: { font: { size: 11 } } },
                y: { grid: { display: false }, ticks: { font: { size: 11, family: 'Plus Jakarta Sans' } } }
            }
        }
    });
}

/* ============================================
   INVENTORY
   ============================================ */
function getFilteredInventory() {
    var data = state.inventory.slice();
    if (state.searchQuery) {
        var q = state.searchQuery.toLowerCase();
        data = data.filter(function(i) {
            return i.kode.toLowerCase().indexOf(q) !== -1 || i.nama.toLowerCase().indexOf(q) !== -1 || i.type.toLowerCase().indexOf(q) !== -1;
        });
    }
    if (state.filterType) {
        data = data.filter(function(i) { return i.type === state.filterType; });
    }
    return data;
}

function renderInventory() {
    var filtered = getFilteredInventory();
    var total = filtered.length;
    var totalPages = Math.max(1, Math.ceil(total / state.inventoryPerPage));
    if (state.inventoryPage > totalPages) state.inventoryPage = totalPages;
    var start = (state.inventoryPage - 1) * state.inventoryPerPage;
    var pageData = filtered.slice(start, start + state.inventoryPerPage);

    var types = [];
    state.inventory.forEach(function(i) { if (types.indexOf(i.type) === -1) types.push(i.type); });
    types.sort();
    var filterEl = document.getElementById('filterType');
    var currentVal = filterEl.value;
    filterEl.innerHTML = '<option value="">Semua Tipe</option>' + types.map(function(t) {
        return '<option value="' + t + '"' + (t === currentVal ? ' selected' : '') + '>' + t + '</option>';
    }).join('');

    var tbody = document.getElementById('inventoryBody');
    if (pageData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="8"><div class="empty-state"><i class="fa-solid fa-box-open"></i><h4>Tidak ada data</h4><p>Coba ubah kata kunci pencarian atau filter</p></div></td></tr>';
    } else {
        tbody.innerHTML = pageData.map(function(item, idx) {
            var stokClass = item.stok === 0 ? 'stok-zero' : item.stok <= 5 ? 'stok-low' : 'stok-ok';
            return '<tr>' +
                '<td>' + (start + idx + 1) + '</td>' +
                '<td><strong>' + item.kode + '</strong></td>' +
                '<td>' + item.nama + '</td>' +
                '<td class="stok-cell ' + stokClass + '">' + item.stok + '</td>' +
                '<td><span class="badge badge-info">' + item.type + '</span></td>' +
                '<td style="text-align:center">' + (item.masuk || 0) + '</td>' +
                '<td style="text-align:center">' + (item.keluar || 0) + '</td>' +
                '<td class="harga-cell">' + formatRupiah(item.harga) + '</td>' +
                '<td>' +
                    '<button class="btn-icon" title="Edit" onclick="openEditItem(\'' + item.kode + '\')"><i class="fa-solid fa-pen-to-square"></i></button>' +
                    '<button class="btn-icon danger" title="Hapus" onclick="confirmDeleteItem(\'' + item.kode + '\')"><i class="fa-solid fa-trash"></i></button>' +
                '</td>' +
            '</tr>';
        }).join('');
    }

    renderPagination('invPagination', state.inventoryPage, totalPages, function(p) {
        state.inventoryPage = p;
        renderInventory();
    });

    document.getElementById('invInfo').textContent = 'Menampilkan ' + (start + 1) + '-' + Math.min(start + state.inventoryPerPage, total) + ' dari ' + total + ' barang';
}

function renderPagination(containerId, current, total, onClick) {
    var el = document.getElementById(containerId);
    if (!el) return;
    var html = '<span>Halaman ' + current + ' dari ' + total + '</span><div class="page-btns">';
    html += '<button class="page-btn" ' + (current <= 1 ? 'disabled' : '') + ' data-p="' + (current - 1) + '"><i class="fa-solid fa-chevron-left"></i></button>';
    var startP = Math.max(1, current - 2);
    var endP = Math.min(total, startP + 4);
    if (endP - startP < 4) startP = Math.max(1, endP - 4);
    for (var i = startP; i <= endP; i++) {
        html += '<button class="page-btn ' + (i === current ? 'active' : '') + '" data-p="' + i + '">' + i + '</button>';
    }
    html += '<button class="page-btn" ' + (current >= total ? 'disabled' : '') + ' data-p="' + (current + 1) + '"><i class="fa-solid fa-chevron-right"></i></button>';
    html += '</div>';
    el.innerHTML = html;
    el.querySelectorAll('.page-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var p = parseInt(btn.dataset.p);
            if (p >= 1 && p <= total) onClick(p);
        });
    });
}

function openAddItem() {
    state.editingId = null;
    document.getElementById('modalItemTitle').textContent = 'Tambah Barang Baru';
    document.getElementById('itemKode').value = genKode();
    document.getElementById('itemKode').readOnly = true;
    document.getElementById('itemNama').value = '';
    document.getElementById('itemStok').value = '';
    document.getElementById('itemHarga').value = '';
    document.getElementById('itemType').value = '';
    document.getElementById('itemModal').classList.remove('hidden');
}

function openEditItem(kode) {
    var item = state.inventory.find(function(i) { return i.kode === kode; });
    if (!item) return;
    state.editingId = kode;
    document.getElementById('modalItemTitle').textContent = 'Edit Barang';
    document.getElementById('itemKode').value = item.kode;
    document.getElementById('itemKode').readOnly = true;
    document.getElementById('itemNama').value = item.nama;
    document.getElementById('itemStok').value = item.stok;
    document.getElementById('itemHarga').value = item.harga;
    document.getElementById('itemType').value = item.type;
    document.getElementById('itemModal').classList.remove('hidden');
}

function saveItem() {
    var kode = document.getElementById('itemKode').value.trim();
    var nama = document.getElementById('itemNama').value.trim();
    var stok = parseInt(document.getElementById('itemStok').value) || 0;
    var harga = parseInt(document.getElementById('itemHarga').value) || 0;
    var type = document.getElementById('itemType').value.trim() || autoCategorize(nama);

    if (!kode || !nama) { showToast('Kode dan nama barang wajib diisi', 'error'); return; }

    if (state.editingId) {
        var idx = state.inventory.findIndex(function(i) { return i.kode === state.editingId; });
        if (idx !== -1) {
            var oldStok = state.inventory[idx].stok;
            var diff = stok - oldStok;
            if (diff > 0) state.inventory[idx].masuk = (state.inventory[idx].masuk || 0) + diff;
            if (diff < 0) state.inventory[idx].keluar = (state.inventory[idx].keluar || 0) + Math.abs(diff);
            state.inventory[idx].nama = nama;
            state.inventory[idx].stok = stok;
            state.inventory[idx].harga = harga;
            state.inventory[idx].type = type;
            addActivity('Mengedit barang ' + kode + ' - ' + nama, 'edit');
            showToast('Barang berhasil diperbarui');
        }
    } else {
        if (state.inventory.some(function(i) { return i.kode === kode; })) {
            showToast('Kode barang sudah ada', 'error'); return;
        }
        state.inventory.push({ kode: kode, nama: nama, stok: stok, harga: harga, type: type, masuk: stok > 0 ? stok : 0, keluar: 0 });
        addActivity('Menambah barang baru ' + kode + ' - ' + nama + ' (stok: ' + stok + ')', 'add');
        showToast('Barang berhasil ditambahkan');
    }

    saveState();
    closeModal('itemModal');
    renderInventory();
    if (state.currentPage === 'dashboard') renderDashboard();
}

function confirmDeleteItem(kode) {
    var item = state.inventory.find(function(i) { return i.kode === kode; });
    if (!item) return;
    document.getElementById('confirmMessage').textContent = 'Hapus barang "' + item.nama + '" (' + kode + ')? Tindakan ini tidak dapat dibatalkan.';
    document.getElementById('confirmModal').classList.remove('hidden');
    document.getElementById('confirmYes').innerHTML = '<i class="fa-solid fa-trash"></i> Hapus';
    document.getElementById('confirmYes').className = 'btn btn-danger';
    document.getElementById('confirmYes').onclick = function() {
        state.inventory = state.inventory.filter(function(i) { return i.kode !== kode; });
        addActivity('Menghapus barang ' + kode + ' - ' + item.nama, 'delete');
        saveState();
        closeModal('confirmModal');
        renderInventory();
        if (state.currentPage === 'dashboard') renderDashboard();
        showToast('Barang berhasil dihapus');
    };
}

/* ============================================
   TOTAL ASET
   ============================================ */
function renderTotalAset() {
    var totalNilai = state.inventory.reduce(function(s, i) { return s + ((i.stok || 0) * i.harga); }, 0);
    var totalJenis = state.inventory.length;
    var totalUnit = state.inventory.reduce(function(s, i) { return s + (i.stok || 0); }, 0);
    var avgHarga = totalJenis > 0 ? totalNilai / totalJenis : 0;

    document.getElementById('asetTotalNilai').textContent = formatRupiah(totalNilai);
    document.getElementById('asetTotalJenis').textContent = totalJenis + ' Jenis';
    document.getElementById('asetTotalUnit').textContent = totalUnit.toLocaleString('id-ID') + ' Unit';
    document.getElementById('asetAvgHarga').textContent = formatRupiah(avgHarga);

    var catMap = {};
    state.inventory.forEach(function(item) {
        var cat = item.type || 'Lainnya';
        if (!catMap[cat]) catMap[cat] = { count: 0, unit: 0, value: 0 };
        catMap[cat].count++;
        catMap[cat].unit += (item.stok || 0);
        catMap[cat].value += (item.stok || 0) * item.harga;
    });

    var sorted = Object.entries(catMap).sort(function(a, b) { return b[1].value - a[1].value; });
    var catColors = ['#0D47A1','#1565C0','#1E88E5','#42A5F5','#00B0FF','#0091EA','#0277BD','#01579B','#00838F','#006064','#00695C','#2E7D32','#558B2F','#F57F17','#E65100','#BF360C'];

    var catListEl = document.getElementById('categoryList');
    catListEl.innerHTML = sorted.map(function(entry, idx) {
        var cat = entry[0]; var data = entry[1];
        return '<div class="category-item">' +
            '<div class="cat-color" style="background:' + catColors[idx % catColors.length] + '"></div>' +
            '<div class="cat-info"><div class="cat-name">' + cat + '</div><div class="cat-count">' + data.count + ' jenis / ' + data.unit + ' unit</div></div>' +
            '<div class="cat-value">' + formatRupiah(data.value) + '</div>' +
        '</div>';
    }).join('');

    var ctx = document.getElementById('asetPieChart').getContext('2d');
    if (window._asetPieChart) window._asetPieChart.destroy();
    window._asetPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: sorted.map(function(s) { return s[0]; }),
            datasets: [{ data: sorted.map(function(s) { return s[1].value; }), backgroundColor: sorted.map(function(_, i) { return catColors[i % catColors.length]; }), borderWidth: 2, borderColor: '#fff' }]
        },
        options: {
            responsive: true, maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { boxWidth: 10, padding: 10, font: { size: 11, family: 'Plus Jakarta Sans' } } },
                tooltip: { callbacks: { label: function(ctx) { return ctx.label + ': ' + formatRupiah(ctx.raw); } } }
            }
        }
    });
}

/* ============================================
   TICKET PERBAIKAN
   ============================================ */
function openAddTicket() {
    document.getElementById('ticketId').value = 'TKT-' + Date.now().toString(36).toUpperCase();
    document.getElementById('ticketBarang').value = '';
    document.getElementById('ticketDeskripsi').value = '';
    document.getElementById('ticketTeknisi').value = '';
    document.getElementById('ticketPrioritas').value = 'Sedang';
    document.getElementById('ticketLokasi').value = '';
    document.getElementById('ticketModal').classList.remove('hidden');
}

function saveTicket() {
    var id = document.getElementById('ticketId').value.trim();
    var barang = document.getElementById('ticketBarang').value.trim();
    var deskripsi = document.getElementById('ticketDeskripsi').value.trim();
    var teknisi = document.getElementById('ticketTeknisi').value;
    var prioritas = document.getElementById('ticketPrioritas').value;
    var lokasi = document.getElementById('ticketLokasi').value.trim();

    if (!barang || !deskripsi || !teknisi) { showToast('Barang, deskripsi, dan teknisi wajib diisi', 'error'); return; }

    state.tickets.push({
        id: id, barang: barang, deskripsi: deskripsi, teknisi: teknisi,
        prioritas: prioritas, lokasi: lokasi, status: 'Menunggu',
        createdAt: new Date().toISOString(), updatedAt: new Date().toISOString()
    });

    addActivity('Membuat ticket ' + id + ' - ' + barang + ' (Teknisi: ' + teknisi + ')', 'ticket');
    saveState();
    closeModal('ticketModal');
    renderTickets();
    showToast('Ticket perbaikan berhasil dibuat');
}

function renderTickets() {
    var tbody = document.getElementById('ticketBody');
    if (state.tickets.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7"><div class="empty-state"><i class="fa-solid fa-ticket"></i><h4>Belum ada ticket</h4><p>Klik "Buat Ticket" untuk membuat ticket perbaikan baru</p></div></td></tr>';
        return;
    }

    var sorted = state.tickets.slice().sort(function(a, b) { return new Date(b.createdAt) - new Date(a.createdAt); });

    tbody.innerHTML = sorted.map(function(t) {
        var statusBadge = t.status === 'Menunggu' ? 'badge-warning' : t.status === 'Diproses' ? 'badge-info' : t.status === 'Selesai' ? 'badge-success' : 'badge-secondary';
        var prioClass = t.prioritas === 'Tinggi' ? 'priority-high' : t.prioritas === 'Sedang' ? 'priority-medium' : 'priority-low';
        var actions = '<button class="btn-icon" title="Detail" onclick="viewTicket(\'' + t.id + '\')"><i class="fa-solid fa-eye"></i></button>';
        if (t.status !== 'Selesai') {
            actions += '<button class="btn-icon" title="Kirim ke NOC" onclick="sendToNOC(\'' + t.id + '\')"><i class="fa-brands fa-whatsapp"></i></button>';
        }
        if (t.status === 'Selesai') {
            actions += '<button class="btn-icon" title="Input Barang Keluar" onclick="openBarangKeluarFromTicket(\'' + t.id + '\')"><i class="fa-solid fa-arrow-right-from-bracket"></i></button>';
        }
        return '<tr>' +
            '<td><strong>' + t.id + '</strong></td>' +
            '<td>' + t.barang + '</td>' +
            '<td>' + t.teknisi + '</td>' +
            '<td><span class="' + prioClass + '"></span>' + t.prioritas + '</td>' +
            '<td><span class="badge ' + statusBadge + '">' + t.status + '</span></td>' +
            '<td>' + shortDate(t.createdAt) + '</td>' +
            '<td>' + actions + '</td>' +
        '</tr>';
    }).join('');
}

function viewTicket(id) {
    var t = state.tickets.find(function(tk) { return tk.id === id; });
    if (!t) return;

    var statusBadge = t.status === 'Menunggu' ? 'badge-warning' : t.status === 'Diproses' ? 'badge-info' : t.status === 'Selesai' ? 'badge-success' : 'badge-secondary';

    var actionsHtml = '';
    if (t.status === 'Menunggu') {
        actionsHtml = '<button class="btn btn-primary btn-sm" onclick="updateTicketStatus(\'' + t.id + '\',\'Diproses\')"><i class="fa-solid fa-play"></i> Mulai Proses</button>' +
            '<button class="btn btn-outline btn-sm" onclick="sendToNOC(\'' + t.id + '\')"><i class="fa-brands fa-whatsapp"></i> Kirim ke NOC</button>';
    } else if (t.status === 'Diproses') {
        actionsHtml = '<button class="btn btn-success btn-sm" onclick="updateTicketStatus(\'' + t.id + '\',\'Selesai\')"><i class="fa-solid fa-check"></i> Tandai Selesai</button>' +
            '<button class="btn btn-outline btn-sm" onclick="sendToNOC(\'' + t.id + '\')"><i class="fa-brands fa-whatsapp"></i> Kirim ke NOC</button>';
    } else if (t.status === 'Selesai') {
        actionsHtml = '<button class="btn btn-primary btn-sm" onclick="openBarangKeluarFromTicket(\'' + t.id + '\')"><i class="fa-solid fa-arrow-right-from-bracket"></i> Input Barang Keluar</button>';
    }

    document.getElementById('ticketDetailContent').innerHTML =
        '<div class="ticket-detail-row"><div class="tdr-label">Ticket ID</div><div class="tdr-value">' + t.id + '</div></div>' +
        '<div class="ticket-detail-row"><div class="tdr-label">Barang</div><div class="tdr-value">' + t.barang + '</div></div>' +
        '<div class="ticket-detail-row"><div class="tdr-label">Deskripsi</div><div class="tdr-value">' + t.deskripsi + '</div></div>' +
        '<div class="ticket-detail-row"><div class="tdr-label">Teknisi</div><div class="tdr-value">' + t.teknisi + '</div></div>' +
        '<div class="ticket-detail-row"><div class="tdr-label">Prioritas</div><div class="tdr-value">' + t.prioritas + '</div></div>' +
        '<div class="ticket-detail-row"><div class="tdr-label">Lokasi</div><div class="tdr-value">' + (t.lokasi || '-') + '</div></div>' +
        '<div class="ticket-detail-row"><div class="tdr-label">Status</div><div class="tdr-value"><span class="badge ' + statusBadge + '">' + t.status + '</span></div></div>' +
        '<div class="ticket-detail-row"><div class="tdr-label">Dibuat</div><div class="tdr-value">' + formatDate(t.createdAt) + '</div></div>' +
        '<div class="ticket-detail-row"><div class="tdr-label">Diperbarui</div><div class="tdr-value">' + formatDate(t.updatedAt) + '</div></div>' +
        '<div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">' + actionsHtml + '</div>';

    document.getElementById('ticketDetailModal').classList.remove('hidden');
}

function updateTicketStatus(id, newStatus) {
    var t = state.tickets.find(function(tk) { return tk.id === id; });
    if (!t) return;
    t.status = newStatus;
    t.updatedAt = new Date().toISOString();
    addActivity('Ticket ' + id + ' status diubah ke "' + newStatus + '"', 'ticket');
    saveState();
    closeModal('ticketDetailModal');
    renderTickets();
    updateNavBadges();
    showToast('Status ticket diubah ke "' + newStatus + '"');
}

function sendToNOC(id) {
    var t = state.tickets.find(function(tk) { return tk.id === id; });
    if (!t) return;

    var msg = '*TICKET PERBAIKAN - PT.SOFTSTUDIO NETWORK*\n' +
        '━━━━━━━━━━━━━━━━━━━━\n' +
        '*Ticket ID:* ' + t.id + '\n' +
        '*Barang:* ' + t.barang + '\n' +
        '*Deskripsi:* ' + t.deskripsi + '\n' +
        '*Teknisi:* ' + t.teknisi + '\n' +
        '*Prioritas:* ' + t.prioritas + '\n' +
        '*Lokasi:* ' + (t.lokasi || '-') + '\n' +
        '*Status:* ' + t.status + '\n' +
        '*Waktu:* ' + formatDate(t.createdAt) + '\n' +
        '━━━━━━━━━━━━━━━━━━━━';

    var url = 'https://wa.me/' + state.nocWaNumber + '?text=' + encodeURIComponent(msg);
    window.open(url, '_blank');
    addActivity('Mengirim ticket ' + id + ' ke grup NOC via WhatsApp', 'ticket');
    saveState();
    showToast('Membuka WhatsApp untuk kirim ke NOC...');
}

function sendAllActiveToNOC() {
    var active = state.tickets.filter(function(t) { return t.status !== 'Selesai'; });
    if (active.length === 0) { showToast('Tidak ada ticket aktif untuk dikirim', 'warning'); return; }

    var msg = '*LAPORAN TICKET AKTIF - PT.SOFTSTUDIO NETWORK*\nTotal: ' + active.length + ' ticket aktif\nTanggal: ' + formatDate(new Date().toISOString()) + '\n━━━━━━━━━━━━━━━━━━━━\n\n';

    active.forEach(function(t, i) {
        msg += '*' + (i + 1) + '. ' + t.id + '*\n' +
            '   Barang: ' + t.barang + '\n' +
            '   Teknisi: ' + t.teknisi + '\n' +
            '   Prioritas: ' + t.prioritas + '\n' +
            '   Status: ' + t.status + '\n' +
            '   Lokasi: ' + (t.lokasi || '-') + '\n' +
            '   Deskripsi: ' + t.deskripsi + '\n\n';
    });

    window.open('https://wa.me/' + state.nocWaNumber + '?text=' + encodeURIComponent(msg), '_blank');
    addActivity('Mengirim ' + active.length + ' ticket aktif ke grup NOC', 'ticket');
    saveState();
    showToast('Membuka WhatsApp untuk kirim laporan ticket...');
}

/* ============================================
   BARANG KELUAR
   ============================================ */
function populateBarangOptions() {
    var sel = document.getElementById('keluarBarang');
    sel.innerHTML = '<option value="">-- Pilih Barang --</option>' +
        state.inventory.map(function(i) { return '<option value="' + i.kode + '">' + i.kode + ' - ' + i.nama + ' (Stok: ' + i.stok + ')</option>'; }).join('');
}

function openBarangKeluarFromTicket(ticketId) {
    var t = state.tickets.find(function(tk) { return tk.id === ticketId; });
    if (!t) return;
    populateBarangOptions();
    document.getElementById('keluarTicketId').value = t.id;
    document.getElementById('keluarTicketInfo').value = t.id + ' - ' + t.barang;
    document.getElementById('keluarBarang').value = '';
    document.getElementById('keluarJumlah').value = '';
    document.getElementById('keluarKeterangan').value = '';
    document.getElementById('keluarModal').classList.remove('hidden');
}

function openBarangKeluarManual() {
    populateBarangOptions();
    document.getElementById('keluarTicketId').value = '';
    document.getElementById('keluarTicketInfo').value = 'Manual (tanpa ticket)';
    document.getElementById('keluarBarang').value = '';
    document.getElementById('keluarJumlah').value = '';
    document.getElementById('keluarKeterangan').value = '';
    document.getElementById('keluarModal').classList.remove('hidden');
}

function saveBarangKeluar() {
    var ticketId = document.getElementById('keluarTicketId').value.trim();
    var barangKode = document.getElementById('keluarBarang').value.trim();
    var jumlah = parseInt(document.getElementById('keluarJumlah').value) || 0;
    var keterangan = document.getElementById('keluarKeterangan').value.trim();

    if (!barangKode || jumlah <= 0) { showToast('Pilih barang dan masukkan jumlah yang valid', 'error'); return; }

    var item = state.inventory.find(function(i) { return i.kode === barangKode; });
    if (!item) { showToast('Barang tidak ditemukan', 'error'); return; }
    if (item.stok < jumlah) { showToast('Stok tidak cukup! Tersedia: ' + item.stok, 'error'); return; }

    item.stok -= jumlah;
    item.keluar = (item.keluar || 0) + jumlah;

    state.barangKeluar.push({
        id: genId(), ticketId: ticketId || null, kode: barangKode, nama: item.nama,
        jumlah: jumlah, keterangan: keterangan || (ticketId ? 'Perbaikan ticket ' + ticketId : 'Pengeluaran manual'),
        tanggal: new Date().toISOString()
    });

    addActivity('Barang keluar: ' + item.nama + ' (' + barangKode + ') sebanyak ' + jumlah + ' unit', 'keluar');
    saveState();
    closeModal('keluarModal');
    renderBarangKeluar();
    if (state.currentPage === 'inventory') renderInventory();
    if (state.currentPage === 'dashboard') renderDashboard();
    showToast('Barang keluar berhasil dicatat');
}

function renderBarangKeluar() {
    var tbody = document.getElementById('keluarBody');
    if (state.barangKeluar.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6"><div class="empty-state"><i class="fa-solid fa-arrow-right-from-bracket"></i><h4>Belum ada data barang keluar</h4><p>Data barang keluar akan muncul setelah perbaikan selesai</p></div></td></tr>';
        return;
    }

    var sorted = state.barangKeluar.slice().sort(function(a, b) { return new Date(b.tanggal) - new Date(a.tanggal); });
    tbody.innerHTML = sorted.map(function(k) {
        return '<tr>' +
            '<td>' + shortDate(k.tanggal) + '</td>' +
            '<td>' + (k.ticketId ? '<strong>' + k.ticketId + '</strong>' : '<span class="badge badge-secondary">Manual</span>') + '</td>' +
            '<td><strong>' + k.kode + '</strong></td>' +
            '<td>' + k.nama + '</td>' +
            '<td style="text-align:center;font-weight:700;color:var(--danger)">' + k.jumlah + '</td>' +
            '<td>' + k.keterangan + '</td>' +
        '</tr>';
    }).join('');
}

/* ============================================
   RIWAYAT AKTIVITAS
   ============================================ */
function renderActivityLog() {
    var el = document.getElementById('activityLogContent');
    if (state.activities.length === 0) {
        el.innerHTML = '<div class="empty-state"><i class="fa-solid fa-clock-rotate-left"></i><h4>Belum ada aktivitas</h4><p>Aktivitas akan tercatat saat Anda menggunakan sistem</p></div>';
        return;
    }

    var typeIcons = { add: 'fa-plus', edit: 'fa-pen', delete: 'fa-trash', ticket: 'fa-ticket', keluar: 'fa-arrow-right-from-bracket', info: 'fa-info' };
    var typeColors = { add: 'var(--success)', edit: 'var(--primary-light)', delete: 'var(--danger)', ticket: 'var(--warning)', keluar: '#FF6D00', info: 'var(--text-light)' };

    el.innerHTML = '<div class="timeline">' + state.activities.map(function(a) {
        return '<div class="timeline-item">' +
            '<div class="tl-time"><i class="fa-solid ' + (typeIcons[a.type] || typeIcons.info) + '" style="color:' + (typeColors[a.type] || typeColors.info) + ';margin-right:6px"></i>' + formatDate(a.time) + '</div>' +
            '<div class="tl-text">' + a.text + '</div>' +
        '</div>';
    }).join('') + '</div>';
}

function clearActivities() {
    if (state.activities.length === 0) { showToast('Log aktivitas sudah kosong', 'warning'); return; }
    document.getElementById('confirmMessage').textContent = 'Bersihkan semua riwayat aktivitas?';
    document.getElementById('confirmModal').classList.remove('hidden');
    document.getElementById('confirmYes').innerHTML = '<i class="fa-solid fa-broom"></i> Bersihkan';
    document.getElementById('confirmYes').className = 'btn btn-warning';
    document.getElementById('confirmYes').onclick = function() {
        state.activities = [];
        saveState();
        closeModal('confirmModal');
        renderActivityLog();
        document.getElementById('confirmYes').innerHTML = '<i class="fa-solid fa-trash"></i> Hapus';
        document.getElementById('confirmYes').className = 'btn btn-danger';
        showToast('Riwayat aktivitas dibersihkan');
    };
}

/* ============================================
   EXPORT KE XLS
   ============================================ */
function exportToXLS() {
    var wb = XLSX.utils.book_new();

    var totalAset = state.inventory.reduce(function(s, i) { return s + ((i.stok || 0) * i.harga); }, 0);

    var titleRow = [null, null, null, null, 'INVENTORY BARANG PT.SOFTSTUDIO NETWORK'];
    var totalRow = [null, null, null, null, 'TOTAL ASET : ' + formatRupiahXLS(totalAset)];
    var emptyRow = [null, null, null, null, null, null, null, null];
    var headers = ['NO', 'KODE BARANG', 'NAMA BARANG', 'STOK BARANG', 'TYPE BARANG', 'BARANG MASUK', 'BARANG KELUAR', 'HARGA'];

    var dataRows = state.inventory.map(function(item, i) {
        return [i + 1, item.kode, item.nama, item.stok || 0, item.type || '', item.masuk || 0, item.keluar || 0, item.harga];
    });

    var wsData = [titleRow, totalRow, emptyRow, headers].concat(dataRows);
    var ws = XLSX.utils.aoa_to_sheet(wsData);

    ws['!merges'] = [
        { s: { r: 0, c: 4 }, e: { r: 0, c: 7 } },
        { s: { r: 1, c: 4 }, e: { r: 1, c: 7 } }
    ];

    ws['!cols'] = [
        { wch: 5 }, { wch: 15 }, { wch: 42 }, { wch: 13 },
        { wch: 18 }, { wch: 15 }, { wch: 15 }, { wch: 20 }
    ];

    for (var r = 4; r <= 4 + dataRows.length; r++) {
        var cellRef = XLSX.utils.encode_cell({ r: r, c: 7 });
        if (ws[cellRef]) { ws[cellRef].z = '#,##0'; ws[cellRef].t = 'n'; }
    }

    XLSX.utils.book_append_sheet(wb, ws, 'INVENTORY');

    if (state.barangKeluar.length > 0) {
        var kelHeaders = ['NO', 'TANGGAL', 'TICKET ID', 'KODE BARANG', 'NAMA BARANG', 'JUMLAH', 'KETERANGAN'];
        var kelData = state.barangKeluar.map(function(k, i) {
            return [i + 1, shortDate(k.tanggal), k.ticketId || '-', k.kode, k.nama, k.jumlah, k.keterangan];
        });
        var ws2 = XLSX.utils.aoa_to_sheet([kelHeaders].concat(kelData));
        ws2['!cols'] = [{ wch: 5 }, { wch: 14 }, { wch: 18 }, { wch: 15 }, { wch: 40 }, { wch: 10 }, { wch: 35 }];
        XLSX.utils.book_append_sheet(wb, ws2, 'BARANG KELUAR');
    }

    if (state.tickets.length > 0) {
        var tktHeaders = ['NO', 'TICKET ID', 'BARANG', 'DESKRIPSI', 'TEKNISI', 'PRIORITAS', 'LOKASI', 'STATUS', 'TANGGAL'];
        var tktData = state.tickets.map(function(t, i) {
            return [i + 1, t.id, t.barang, t.deskripsi, t.teknisi, t.prioritas, t.lokasi || '-', t.status, shortDate(t.createdAt)];
        });
        var ws3 = XLSX.utils.aoa_to_sheet([tktHeaders].concat(tktData));
        ws3['!cols'] = [{ wch: 5 }, { wch: 18 }, { wch: 25 }, { wch: 35 }, { wch: 20 }, { wch: 12 }, { wch: 25 }, { wch: 12 }, { wch: 14 }];
        XLSX.utils.book_append_sheet(wb, ws3, 'TICKET PERBAIKAN');
    }

    var fileName = 'Inventory_PT_Softstudio_' + new Date().toISOString().slice(0, 10) + '.xlsx';
    XLSX.writeFile(wb, fileName);
    addActivity('Mengexport data ke file ' + fileName, 'info');
    saveState();
    showToast('File Excel berhasil diunduh');
}

/* ============================================
   MODAL HELPERS
   ============================================ */
function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-overlay')) {
        e.target.classList.add('hidden');
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay').forEach(function(m) { m.classList.add('hidden'); });
    }
});

/* ============================================
   GLOBAL SEARCH (TOPBAR)
   ============================================ */
function handleGlobalSearch(e) {
    var q = e.target.value.trim();
    if (q) {
        state.searchQuery = q;
        state.inventoryPage = 1;
        if (state.currentPage !== 'inventory') navigateTo('inventory');
        else renderInventory();
    }
}

/* ============================================
   INISIALISASI APLIKASI
   ============================================ */
function initApp() {
    /* Navigasi sidebar */
    document.querySelectorAll('#sidebarNav a[data-page]').forEach(function(a) {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            navigateTo(a.dataset.page);
        });
    });

    /* Logout */
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);

    /* Menu toggle mobile */
    document.getElementById('menuToggle').addEventListener('click', toggleSidebar);
    document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

    /* Global search */
    document.getElementById('globalSearch').addEventListener('input', handleGlobalSearch);

    /* Inventory search */
    document.getElementById('invSearch').addEventListener('input', function(e) {
        state.searchQuery = e.target.value.trim();
        state.inventoryPage = 1;
        renderInventory();
    });

    /* Inventory filter */
    document.getElementById('filterType').addEventListener('change', function(e) {
        state.filterType = e.target.value;
        state.inventoryPage = 1;
        renderInventory();
    });

    /* Modal tombol simpan */
    document.getElementById('saveItemBtn').addEventListener('click', saveItem);
    document.getElementById('saveTicketBtn').addEventListener('click', saveTicket);
    document.getElementById('saveKeluarBtn').addEventListener('click', saveBarangKeluar);

    /* Modal tombol batal */
    document.querySelectorAll('.modal-cancel').forEach(function(btn) {
        btn.addEventListener('click', function() {
            btn.closest('.modal-overlay').classList.add('hidden');
        });
    });

    /* Confirm modal tombol tidak */
    document.getElementById('confirmNo').addEventListener('click', function() { closeModal('confirmModal'); });

    /* Navigasi ke dashboard */
    navigateTo('dashboard');
}

/* ============================================
   JALANKAN SAAT DOM SIAP
   *** FIX: Login form event listener dipasang
   *** di sini, BUKAN di dalam initApp()
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    /* Pasang handler form login SEKARANG, bukan di initApp */
    document.getElementById('loginForm').addEventListener('submit', handleLogin);

    /* Cek apakah sudah login sebelumnya */
    loadState();
    checkAuth();
});